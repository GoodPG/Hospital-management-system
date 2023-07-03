package com.gxa.service;

import com.gxa.entity.Admin;
import com.gxa.entity.Staff;

import java.util.List;

public interface AdminService {
    List<Admin> queryAll();
    //添加管理员
    void add(Admin admin);
    Admin queryById(String id);
    List<Admin> queryByID(int id,int status);
    List<Admin> queryByName(String name,int status);

    void update(Admin admin);

    //根据id删除
    void delete(int id);
}
