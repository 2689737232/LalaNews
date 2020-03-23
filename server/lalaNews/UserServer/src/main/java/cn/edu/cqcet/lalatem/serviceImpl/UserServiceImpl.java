package cn.edu.cqcet.lalatem.serviceImpl;

import cn.edu.cqcet.lalatem.mapper.UserMapper;
import cn.edu.cqcet.lalatem.po.User;
import cn.edu.cqcet.lalatem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl  implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public User getUserByOpenId(String openId) {
        return this.userMapper.getUserByOpenId(openId);
    }

    @Override
    public void addUser(String userName, Long collectId,String createTime,String updateTime, String userIcon, String opeId) {
         userMapper.addUser(userName,collectId,userIcon,opeId,createTime,updateTime);
    }

    @Override
    public String getUserIdByOpenId(String openId) {
        return userMapper.getUserIdByOpenId(openId);
    }

}
