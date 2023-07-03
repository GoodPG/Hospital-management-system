package com.gxa.service;

import com.gxa.entity.User;
import com.gxa.utils.Result;

import java.util.List;

public interface UserService {
    List<User> queryAll();
    List<User> queryByName1(String search);
    //添加管理员
    void add(User user);
    void add1(User user);
    //根据id删除
    void delete(Integer id);

    Result login(String username,String pwd,String phone);
    void add(String username, String pwd,Integer status,String phone);
    void add1(String username, String pwd1,Integer status,String phone,String status1);

    Result pwdchange(String username, String pwd);
    boolean modify(String username,String new_pwd,String user_pwd);
}
