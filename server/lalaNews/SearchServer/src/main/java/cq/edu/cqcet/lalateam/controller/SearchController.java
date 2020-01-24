package cq.edu.cqcet.lalateam.controller;

import cn.edu.cqcet.teamlala.JsonFormat;
import cn.edu.cqcet.teamlala.MyJson;
import cn.edu.cqcet.teamlala.po.Tag;
import cq.edu.cqcet.lalateam.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchController {
    @Autowired
    private SearchService searchService;
    @RequestMapping("/getSearchTagList/{start}/{end}")
    public MyJson getTagList(@PathVariable("start") int start, @PathVariable("end") int end){
        List<Tag> tags = this.searchService.getTagList(start,end);
        return JsonFormat.ok(tags);
    }
}
