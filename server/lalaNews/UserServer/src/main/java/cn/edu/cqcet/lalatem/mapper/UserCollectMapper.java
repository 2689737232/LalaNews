package cn.edu.cqcet.lalatem.mapper;

import cn.edu.cqcet.lalatem.po.Collect;
import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.Tag;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserCollectMapper {
    // 通过用户openId获取用户的收藏新闻
    @Select("select * from collect where open_id='${openId}'")
    List<Collect> getUserCollectByOpenId(String openId);

    // 通过用户openId和newsId判断新闻是否在收藏列表
    @Select("select count(id) from collect where open_id = '${arg0}' and news_id = ${arg1}")
    Integer getNewsIsCollect(String openId,Integer newsId);

    // 通过用户openId和newsId插入newsId到collect表中
    @Insert("insert into collect (open_id, news_id, create_time, update_time) VALUES ('${arg0}',${arg1},now(),now())")
    Integer insertNewsId2Collect(String openId,Integer newsId);

    // 通过用户openId和newsId插入newsId从collect表中删除这条news记录
    @Delete("delete from collect where open_id = '${arg0}' and news_id = ${arg1};")
    Integer deleteNewsIdFromCollect(String openId,Integer newsId);

    // 通过openId获取用户喜欢的tag列表
    @Select("select * from user_tag as ut,tag as t where ut.open_id = '${openId}' and ut.tag_id = t.tag_id;")
    List<Tag> getUserTags(String openId);

    // 通过tagId和openId删除用户喜欢的tag
    @Delete("delete from user_tag where open_id = '${arg0}' and tag_id = ${arg1};")
    Integer deleteUserTag(String openId,Integer tagId);

    // 通过tagId和openId添加用户喜欢的tag
    @Insert("insert into user_tag (open_id, tag_id, create_time, update_time) values ('${arg0}',${arg1},NOW(),NOW());")
    Integer insertUserTag(String openId,Integer tagId);
}


