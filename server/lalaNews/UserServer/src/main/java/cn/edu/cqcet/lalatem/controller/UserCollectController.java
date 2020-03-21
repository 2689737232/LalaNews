package cn.edu.cqcet.lalatem.controller;

import cn.edu.cqcet.lalatem.service.UserCollectService;
import cn.edu.cqcet.teamlala.JsonFormat;
import cn.edu.cqcet.teamlala.MyJson;
import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/userCollect")
public class UserCollectController {
    @Autowired
    private UserCollectService userCollectService;

    @RequestMapping("/getUserCollectByOpenId/{openId}/{start}/{end}")
    public MyJson getUserCollectByOpenId(@PathVariable("openId") String openId,
                                         @PathVariable("start") int start,
                                         @PathVariable("end") int end){
       List<News> list = new ArrayList<>();
       list = this.userCollectService.getUserCollectByOpenId(openId,start,end);
       return JsonFormat.ok(list);
    }
    // 通过newsId和用户的openID判断这条新闻是否在收藏列表
    @RequestMapping("/getNewsIsCollect/{openId}/{newsId}")
    public MyJson getNewsIsCollect(@PathVariable("openId") String openId,
                                   @PathVariable("newsId") Integer newsId){
       boolean result = userCollectService.getNewsIsCollect(openId,newsId);
       return JsonFormat.ok(result);
    }

    // 用户点击了收藏按钮，进行判断如果有收藏就取消，没有就添加收藏
    @RequestMapping("/collectClick/{openId}/{newsId}")
    public MyJson collectClick(@PathVariable("openId") String openId,
                                       @PathVariable("newsId") Integer newsId){
        // 用于记录最后的处理结果。 0表示已取消收藏 1表示添加收藏成功
        int result = -1;
        boolean isCollect = userCollectService.getNewsIsCollect(openId,newsId);
        if(isCollect){
            this.userCollectService.deleteNewsIdFromCollect(openId,newsId);
            result = 0;
        }else {
            this.userCollectService.insertNewsId2Collect(openId,newsId);
            result = 1;
        }
        return JsonFormat.ok(result);
    }


    // 获取用户喜欢的tag列表
    @RequestMapping("/getUserTags/{openId}")
    public MyJson getUserTags(@PathVariable("openId") String openId){
        List<Tag> tags = this.userCollectService.getUserTags(openId);
        Map<String, List<Tag>> map = new HashMap<>();
        map.put("tagList", tags);
        return  JsonFormat.ok(map);
    }

    // 删除用户指定的tag
    @RequestMapping("/deleteUserTag/{openId}/{tagId}")
    public MyJson deleteUserTag(@PathVariable("openId") String openId,
                                @PathVariable("tagId") Integer tagId){
        boolean isDelete = this.userCollectService.deleteUserTag(openId,tagId);
        return  JsonFormat.ok(isDelete);
    }

    // 添加用户指定的tagId
    @RequestMapping("/insertUserTag/{openId}/{tagId}")
    public MyJson insertUserTag(@PathVariable("openId") String openId,
                                @PathVariable("tagId") Integer tagId){
        boolean isInsert = this.userCollectService.insertUserTag(openId,tagId);
        return  JsonFormat.ok(isInsert);
    }






    // 用户添加新闻到喜欢
    @RequestMapping("/insertNewsId2Collect/{openId}/{newsId}")
    public MyJson insertNewsId2Collect(@PathVariable("openId") String openId,
                                       @PathVariable("newsId") Integer newsId){
        boolean result = userCollectService.insertNewsId2Collect(openId,newsId);
        return JsonFormat.ok(result);
    }
    // 用户从喜欢中取消新闻
    @RequestMapping("/deleteNewsIdFromCollect/{openId}/{newsId}")
    public MyJson deleteNewsIdFromCollect(@PathVariable("openId") String openId,
                                       @PathVariable("newsId") Integer newsId){
        boolean result = userCollectService.deleteNewsIdFromCollect(openId,newsId);
        return JsonFormat.ok(result);
    }
}
