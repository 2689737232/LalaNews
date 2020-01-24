package cq.edu.cqcet.lalateam.mapper;

import cn.edu.cqcet.teamlala.po.Tag;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SearchMapper {
    // 根据数量获取对应的数量的tag标签
    @Select("select\n" +
            "   t.tag_id,t.tag_name\n" +
            "from tag as t limit #{arg0},#{arg1}")
    List<Tag> getTagList(int start,int end);
}
