package com.gxa.mapper;

import com.gxa.entity.Admin;
import com.gxa.entity.Staff;

import java.util.List;

public interface AdminMapper {
    List<Admin> queryAll();
    void insert(Admin admin);
    void update(Integer id);
}
