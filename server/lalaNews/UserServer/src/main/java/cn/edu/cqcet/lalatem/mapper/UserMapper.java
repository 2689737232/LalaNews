package cn.edu.cqcet.lalatem.mapper;

import cn.edu.cqcet.lalatem.po.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.boot.autoconfigure.security.SecurityProperties;

@Mapper
public interface UserMapper {
    // 获取用户
    @Select("select  * from user where user.open_id = '${openId}'")
    User getUserByOpenId(String openId);
    // 添加用户
    @Insert("insert into \n" +
            "user (user_name, collect_id, create_time, update_time, user_icon, open_id) \n" +
            "VALUES \n" +
            "('${arg0}',null,'${arg2}','${arg3}','${arg4}','${arg5}')")
    String addUser(String userName,Long collectId,String createTime,String updateTime,String userIcon,String opeId);
    // 通过openId获取user id
    @Select("select id from  user where open_id = '${openId}'")
    String getUserIdByOpenId(String openId);
}
