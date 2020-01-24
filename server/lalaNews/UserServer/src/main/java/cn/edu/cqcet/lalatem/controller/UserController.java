package cn.edu.cqcet.lalatem.controller;

import cn.edu.cqcet.lalatem.po.User;
import cn.edu.cqcet.lalatem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(value = "/getUserByOpenId",method = RequestMethod.GET)
    public void getUserByOpenId( @RequestParam String  openId,@RequestParam String  userName,@RequestParam String  userIcon)  {
        // 获取用户信息，判断数据库里面是否有这个用户
        User user = this.userService.getUserByOpenId(openId);
        if(user == null){
            Date date = new Date();
            DateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String time  = simpleDateFormat.format(date);
            this.addUser(userName,null,time,time,userIcon,openId);
            System.out.println("插入数据成功");
        }
    }
    @RequestMapping("/addUser/{userName}/{collectId}/{userIcon}/{opeId}")
    public void addUser(@PathVariable("userName") String userName,
                          @PathVariable("collectId") Long collectId,
                          @PathVariable("userIcon") String userIcon,
                          @PathVariable("opeId") String opeId,
                          String createTime,
                          String updateTime){
         this.userService.addUser(userName,collectId,createTime,updateTime,userIcon,opeId);
    }
}
