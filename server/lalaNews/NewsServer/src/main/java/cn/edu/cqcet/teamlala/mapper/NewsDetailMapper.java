package cn.edu.cqcet.teamlala.mapper;

import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.Paragraph;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface NewsDetailMapper {
    // 通过newsId获取新闻详情，不包括文章内容
    @Select("select a.author_name  as author,\n" +
            "       a.author_icon,\n" +
            "       nd.create_time as time,\n" +
            "       nd.read_number,\n" +
            "       nd.news_title,\n" +
            "       nd.like_number,\n" +
            "       nd.comment_number \n" +
            "from news_detail as nd,\n" +
            "     author as a\n" +
            "where nd.news_id = #{newsId}\n" +
            "  and nd.author_id = a.author_id;")
    NewsDetail getNewsDetailByNewsId(Integer newsId);
    // 通过newsId获取新闻的文章内容
    @Select("select\n" +
            "       cp.paragraph_text,cp.position,cp.paragraph_text,cp.image_url,cp.paragraph_type\n" +
            "from\n" +
            "     content_paragraph as cp\n" +
            "where  cp.news_id = #{newsId};")
    List<Paragraph> getContentByNewsId(Integer newsId);
}
