package cn.edu.cqcet.teamlala.CommetnServiceImpl;

import cn.edu.cqcet.teamlala.mapper.CommentMapper;
import cn.edu.cqcet.teamlala.po.Comment;
import cn.edu.cqcet.teamlala.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentMapper commentMapper;
    // 通过新闻id获取本新闻的所有评论
    @Override
    public List<Comment> getCommentsByNewsId(Integer newsId) {
        // 获取主评论
        List<Comment> comments = new ArrayList<>();
        comments = commentMapper.getCommentsByNewsId(newsId);
        // 循环获取每一条评论的子评论
        for(Comment comment: comments){
            String parentName = this.commentMapper.getParentName(comment.getParentId());
            comment.setParentName(parentName);
        }
        List<Comment> result = this.getParentList(comments);
        return result;
    }
    // 通过parentId获取父级名字
    @Override
    public String getParentName(Integer parentId) {
        String parentName = null;
        if(parentId != -1){
            parentName = this.commentMapper.getParentName(parentId);
        }
        System.out.println(parentId + "这里是parentId,和parentName    " + parentName);
        return parentName;
    }



    // 获取最外层的comment
    public List<Comment> getParentList(List<Comment> comments) {
        // 最后结果的result
        List<Comment> result = new ArrayList<>();
        // 循环判断每一个评论是否有父级评论
       for (int i = 0;i<comments.size();i++){
           if(comments.get(i).getParentId() == -1){
               result.add(comments.get(i));
           }
       }
       for(int K = 0;K<result.size();K++){
           List<Comment> comments1 = new ArrayList<>();
           // 循环处理剩下的评论信息添加到对应的外层评论里
           for(int j=0;j<comments.size();j++){

               if(comments.get(j).getAncestorId().equals(result.get(K).getCommentId())){
                   comments1.add(comments.get(j));
               }
           }
           result.get(K).setChirden(comments1);
       }
        return result;
    }

    // 添加评论
    @Override
    public Integer addComment(Long userId, String newsId, String context, Integer parentId, Integer ancestorId) {
        return this.commentMapper.addComment(userId,newsId,context,parentId,ancestorId);
    }

    @Override
    public Long getUserIdByOpenId(String openId) {
        return commentMapper.getUserIdByOpenId(openId);
    }
}
