package cn.edu.cqcet.teamlala.mapper;

import cn.edu.cqcet.teamlala.po.Comment;
import org.apache.ibatis.annotations.Insert;
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
            "from comment as c,user as u where u.id = c.user_id and c.comment_id = #{parentId};")
    String getParentName(Integer parentId);
    // 添加一条评论
    @Insert("insert into comment (user_id, news_id, comment_text, parent_id, create_time,\n"
            +" update_time, ancestor_id) VALUES (${arg0},${arg1},'${arg2}',${arg3},now(),now(),${arg4})")
    Integer addComment(Long userId,String newsId,String context,Integer parentId,Integer ancestorId);
    // 通过openId查找userId
    @Select("select id from  user where open_id = '${openId}'")
    Long getUserIdByOpenId(String openId);
}
