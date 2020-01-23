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

    @Override
    public List<Comment> getCommentsByNewsId(Integer newsId) {
        List<Comment> comments = new ArrayList<>();
        comments = commentMapper.getCommentsByNewsId(newsId);
        for(Comment comment: comments){
            String parentName = this.commentMapper.getParentName(comment.getParentId());
            System.out.println(parentName);
            comment.setParentName(parentName);
        }
        List<Comment> result = this.getParentList(comments);
        return result;
    }

    // 通过parentId获取父级名字
    @Override
    public String getParentName(Integer parentId) {
        return this.commentMapper.getParentName(parentId);
    }

    // 获取最外层的comment
    public List<Comment> getParentList(List<Comment> comments) {
        // 最后结果的result
        List<Comment> result = new ArrayList<>();
       for (int i = 0;i<comments.size();i++){
           if(comments.get(i).getParentId() == null){
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

}
