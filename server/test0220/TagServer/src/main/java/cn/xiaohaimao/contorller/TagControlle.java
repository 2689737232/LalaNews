package cn.xiaohaimao.contorller;

import cn.xiaohaimao.po.Tag;
import cn.xiaohaimao.service.TagServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("tag")
public class TagControlle {
    @Autowired
    TagServer tagServer;
    @RequestMapping("/getTag/{num}")
    public List<Tag> getTag(@PathVariable("num") int num){
        List<Tag> tags = this.tagServer.getTagList(num);
        return tags;
    }
}
