package cn.edu.cqcet.teamlala.contorller;


import cn.edu.cqcet.teamlala.JsonFormat;
import cn.edu.cqcet.teamlala.MyJson;
import cn.edu.cqcet.teamlala.po.Tag;
import cn.edu.cqcet.teamlala.service.TagServer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tag")
public class TagControlle {
    @Autowired
    TagServer tagServer;

    @RequestMapping("/info")
    public String info() {
        return "TagServer is running!";
    }

    // 获取指定长度的tag列表
    @RequestMapping("/getTag/{num}")
//    @Cacheable(value = "TagNormalCache",key = "'tag.getTagByNum'")
    public MyJson getTagByNum(@PathVariable("num") int num) {
        List<Tag> tags = this.tagServer.getTagList(num);
        Map<String, List<Tag>> map = new HashMap<>();
        map.put("tagList", tags);
        return JsonFormat.ok(map);
    }

    // 普通用户没有登录默认获取的tag列表
    @RequestMapping("/getTag/normal")
    // 开启缓存 value：缓存的名称，删除tag的时候需要在删除方法上面添加@CacheEvict消除缓存
    //@Cacheable(value = "TagCache",key = "'tag.getTagNormal'")
    public MyJson getTagNormal() {
        List<Tag> tags = this.tagServer.getTagListNormal();
        Map<String, List<Tag>> map = new HashMap<>();
        map.put("tagList", tags);
        return JsonFormat.ok(map);
    }

    @Autowired
    RestTemplate restTemplate;
    // 调用其他服务测试
    @RequestMapping("/getNewsTest")
    public String getTest(){
       return restTemplate.getForObject("http://192.168.56.1:8050/newsDetail/getNewsDetail/2010000001",String.class);
    }


    public MyJson fallBack() {
        Map<String, String> map = new HashMap<>();
        map.put("msg", "server is not work");
        return JsonFormat.serverNotWork(map);
    }
}
