package cn.edu.cqcet.lalatem.controller;

import cn.edu.cqcet.lalatem.service.UserCollectService;
import cn.edu.cqcet.teamlala.JsonFormat;
import cn.edu.cqcet.teamlala.MyJson;
import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

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
}
