package cn.edu.cqcet.teamlala.controller;

import cn.edu.cqcet.teamlala.CommetnServiceImpl.CommentServiceImpl;
import cn.edu.cqcet.teamlala.po.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private CommentServiceImpl commentService;
    @RequestMapping("/getCommentsByNewsId/{newsId}")
    public List<Comment> getCommentsByNewsId(@PathVariable("newsId") Integer newsId){
        List<Comment> comments = this.commentService.getCommentsByNewsId(newsId);
        return comments;
    }
}
