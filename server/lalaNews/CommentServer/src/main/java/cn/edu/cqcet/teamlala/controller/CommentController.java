package cn.edu.cqcet.teamlala.controller;

import cn.edu.cqcet.teamlala.CommetnServiceImpl.CommentServiceImpl;
import cn.edu.cqcet.teamlala.po.Comment;
import cn.edu.cqcet.teamlala.po.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private CommentServiceImpl commentService;
    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/getCommentsByNewsId/{newsId}")
    public List<Comment> getCommentsByNewsId(@PathVariable("newsId") Integer newsId){
        List<Comment> comments = this.commentService.getCommentsByNewsId(newsId);
        return comments;
    }

    // 添加评论
    @RequestMapping( value = "/addComment/{openId}/{newsId}/{context}/{parentId}/{ancestorId}")
    public Integer addComment(@PathVariable("openId") String openId,
                              @PathVariable("newsId") String newsId,
                              @PathVariable("context") String context,
                              @PathVariable("parentId") Integer parentId,
                              @PathVariable("ancestorId") Integer ancestorId) {
        Long userId = this.commentService.getUserIdByOpenId(openId);
        System.out.println(userId + "这是用户Id   。context    " + context);
        Integer result = this.commentService.addComment(userId,newsId,context,parentId,ancestorId);
        return result;
    }
}
