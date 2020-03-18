package cn.edu.cqcet.lalatem.mapper;

import cn.edu.cqcet.lalatem.po.Collect;
import cn.edu.cqcet.teamlala.po.News;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserCollectMapper {
    // 通过用户openId获取用户的收藏新闻
    @Select("select * from collect where open_id='${openId}'")
    List<Collect> getUserCollectByOpenId(String openId);
}
