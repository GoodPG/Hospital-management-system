package com.gxa.service;

import com.gxa.entity.Admin;
import com.gxa.entity.Staff;

import java.util.List;

public interface AdminService {
    List<Admin> queryAll();
    //添加管理员
    void add(Admin admin);

    //根据id删除
    void delete(Integer id);
}
