package com.gxa.service;

import com.gxa.common.JsonResult;
import com.gxa.entity.Staff;


import java.util.List;

public interface StaffService {
    List<Staff> queryAll();
    List<Staff> queryById(int id,int status);
    List<Staff> queryByName(String name,int status);
    List<Staff> queryBySex(String sex,int status);
    List<Staff> queryByDepartment(String department,int status);
    //添加员工
    void add(Staff staff);
    //根据id删除
    void delete(Integer id);
}
