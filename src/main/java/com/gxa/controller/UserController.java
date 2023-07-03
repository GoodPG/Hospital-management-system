package com.gxa.controller;

import com.gxa.entity.DrugInformation;
import com.gxa.entity.Supplier;
import com.gxa.entity.User;
import com.gxa.service.UserService;
import com.gxa.utils.MD5Util;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @ClassName UserController
 * @Description TODO
 * @Author she
 * @Date 2023/1/8 11:02
 **/
@RequestMapping
@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/user/query")
    public Result queryAll(){

        List<User> users = this.userService.queryAll();
        return new Result().ok(users);
    }
    @PostMapping("/user/queryByName1")
    public Result queryByName(String search){

        List<User> users = this.userService.queryByName1(search);
        return new Result().ok(users);
    }

    @PostMapping("/user/add")
    public Result add(User users){
        try{
            this.userService.add(users);
            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }
    @PostMapping("/user/add1")
    public Result add1(User users){
        try{
            this.userService.add1(users);
            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }


    @PostMapping("/user/delete")
    public Result deleteById(Integer id){
        try{
            this.userService.delete(id);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }

    }
    @PostMapping("/user/login")
    public Result login(String username,String pwd,String phone){
        System.out.println("username---->" + username);
        System.out.println("pwd---->" + pwd);

        Result r = this.userService.login(username, pwd,phone);

        return r;
    }
    @PostMapping("/user/register")
    public Result register(String username,String pwd,String phone){
        try{
            System.out.println("username---->" + username);
            System.out.println("pwd---->" + pwd);

            String encPwd = MD5Util.MD5(pwd);
            this.userService.add(username,encPwd,1,phone);

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
    public Result modify(String username,String new_pwd,String user_pwd){
        System.out.println(username);
        System.out.println(new_pwd);
        System.out.println(user_pwd);
        boolean r = this.userService.modify(username,new_pwd,user_pwd);
        if(r==true){
            return new Result().ok();
        }
        return new Result().error("原密码错误，修改失败!");
    }
}
