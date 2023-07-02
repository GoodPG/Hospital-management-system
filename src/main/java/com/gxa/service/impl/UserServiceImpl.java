package com.gxa.service.impl;

import com.gxa.entity.User;
import com.gxa.mapper.UserMapper;
import com.gxa.service.UserService;
import com.gxa.utils.MD5Util;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName UserServiceImpl
 * @Description TODO
 * @Author she
 * @Date 2023/6/9 10:06
 **/
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Result login(String username, String pwd) {
        User user = this.userMapper.queryByName(username);//通过用户名在数据库中获取到的用户

        //将传递过来的密码 进行加密   和 数据库中获取到的密文的密码 进行比对
        String encPwd = MD5Util.MD5(pwd);

        if(user != null && encPwd.equals(user.getPwd())){//成功
            return new Result().ok(user);
        }

        return new Result().error("用户名或者密码不正确!");
    }

    @Override
    public void insert(String username, String pwd) {
        this.userMapper.insert(username,pwd);
    }

    @Override
    public Result pwdchange(String username, String pwd) {
        User user = this.userMapper.queryByName(username);//通过用户名在数据库中获取到的用户

        //将传递过来的密码 进行加密   和 数据库中获取到的密文的密码 进行比对
        String encPwd = MD5Util.MD5(pwd);

        if(user != null && encPwd.equals(user.getPwd())){//成功
            this.userMapper.update(pwd);
        }

        return new Result().error("修改密码失败！");
    }

    @Override
    public boolean modify(Integer id,String new_pwd,String user_pwd) {
        String pwd1 = MD5Util.MD5(new_pwd);
        String pwd2 = MD5Util.MD5(user_pwd);
        User user = userMapper.queryById(id);
        if (pwd2.equals(user.getPwd())) {
            int num = this.userMapper.modify(id,pwd1);
            if(num>0)
                return true;
            else return false;
        }
        return false;
    }



}
