package cn.edu.cqcet.teamlala.mapper;

import cn.edu.cqcet.teamlala.po.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentMapper {
    // 通过newsId获取评论列表
    @Select("select\n" +
            "       c.news_id,\n" +
            "       c.user_id,\n" +
            "       c.comment_id,\n" +
            "       u.user_name as name,\n" +
            "       u.user_icon as icon,\n" +
            "       c.comment_text as comment,\n" +
            "       c.parent_id,\n" +
            "       c.create_time as date,\n" +
            "       c.ancestor_id\n" +
            "from comment as c, user as u\n" +
            "where c.user_id = u.id and c.news_id  = #{newsId}")
    List<Comment> getCommentsByNewsId(Integer newsId);

    // 获取每一个评论的parentName
    @Select("select u.user_name as parentNam\n" +
            "from comment as c,user as u where u.id = c.user_id and c.parent_id = #{parentId};")
    String getParentName(Integer parentId);
}
