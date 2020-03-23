package cn.edu.cqcet.lalatem.service;

import cn.edu.cqcet.lalatem.po.User;

public interface UserService {
    // 根据user openId获取用户
    User getUserByOpenId(String openId);
    // 添加用户
    void addUser(String userName,Long collectId,String createTime,String updateTime,String userIcon,String opeId);
   // 根据user openId获取用户
    String getUserIdByOpenId(String openId);
}
