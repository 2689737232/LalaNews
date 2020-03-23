package cn.edu.cqcet.teamlala.service;

import cn.edu.cqcet.teamlala.po.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getCommentsByNewsId(Integer newsId);
    String getParentName(Integer parentId);
    Integer addComment(Long userId,String newsId,String context,Integer parentId,Integer ancestorId);
    Long getUserIdByOpenId(String openId);
}
