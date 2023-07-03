package com.gxa.mapper;

import com.gxa.entity.Staff;
import java.util.List;
import java.util.Map;

public interface StaffMapper {
    //查询所有员工
    List<Staff> queryAll();
    //通过ID查询员工
    Staff queryById(int id,int status);
    //通过姓名查询员工
    List<Staff> queryByName(String name,int status);
    //通过性别查询员工
    List<Staff> queryBySex(String sex,int status);
    List<Staff> queryByDepartment(String department,int status);
    //插入
    void insert(Staff staff);
    //删除
    void update(Integer id);
}
