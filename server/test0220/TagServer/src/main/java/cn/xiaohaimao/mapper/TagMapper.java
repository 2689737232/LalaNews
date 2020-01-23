package cn.xiaohaimao.mapper;

import cn.xiaohaimao.po.Tag;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TagMapper {
    @Select("select * from tag limit #{num}")
    List<Tag> getTagList(int num);
//
}
