package com.gxa.service;

import com.gxa.utils.Result;

public interface UserService {
    Result login(String username,String pwd);

    void insert(String username, String pwd);

    Result pwdchange(String username, String pwd);
    boolean modify(Integer id,String new_pwd,String user_pwd);
}
