package com.gxa.mapper;

import com.gxa.entity.Admin;

import java.util.List;

public interface AdminMapper {
    List<Admin> queryAll();
    Admin queryById(String id);
    Admin queryByID(int id,int status);
    //通过姓名查询员工
    List<Admin> queryByName(String name,int status);
    void insert(Admin admin);
    void update(Admin admin);
    void delete(int id);
}
