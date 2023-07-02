package com.gxa.controller;

import com.gxa.entity.Supplier;
import com.gxa.entity.User;
import com.gxa.service.UserService;
import com.gxa.utils.MD5Util;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @ClassName UserController
 * @Description TODO
 * @Author she
 * @Date 2023/6/8 11:02
 **/
@RequestMapping
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/login")
    public Result login(String username,String pwd){
        System.out.println("username---->" + username);
        System.out.println("pwd---->" + pwd);

        Result r = this.userService.login(username, pwd);

        return r;
    }
    @PostMapping("/user/register")
        public Result register(String username,String pwd){
            try{
                System.out.println("username---->" + username);
                System.out.println("pwd---->" + pwd);

                String encPwd = MD5Util.MD5(pwd);
                this.userService.insert(username,encPwd);

                return new Result().ok();
            }catch (Exception e) {
                e.printStackTrace();
                return new Result().error();
            }
    }
    @PostMapping("/user/pwdchange")
    public Result pwdchange(String username,String pwd){
        System.out.println("username---->" + username);
        System.out.println("pwd---->" + pwd);

        Result r = this.userService.pwdchange(username,pwd);

        return r;
    }
    @PostMapping("/user/modify")
    public Result modify(Integer id,String new_pwd,String user_pwd){
        System.out.println(id);
        System.out.println(new_pwd);
        System.out.println(user_pwd);
        boolean r = this.userService.modify(id,new_pwd,user_pwd);
        if(r==true){
            return new Result().ok();
        }
        return new Result().error("原密码错误，修改失败!");
    }
}
