package cn.edu.cqcet.teamlala.mapper;


import cn.edu.cqcet.teamlala.po.Tag;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TagMapper {
    @Select("select * from tag limit #{num}")
    List<Tag> getTagList(int num);
    @Select("select * from tag where tag_id limit 0,3")
    List<Tag> getTagListNormal();
}
