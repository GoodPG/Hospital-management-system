package com.gxa.mapper;

import com.gxa.entity.Staff;
import java.util.List;
import java.util.Map;

public interface StaffMapper {
    List<Staff> queryAll();
    void insert(Staff staff);
    void update(Integer id);
    //1.分页查询确诊病例数据封装List集合
    List<Staff> queryPersonListByPage(Map<String,Object> data);

    //2.查询总记录数
    Integer countPerson();
    //3.按照条件查询总记录数
    Integer countPersonByArgs(Map<String,Object> data);
    //6.按照条件分页查询确诊病例数据封装List集合
    List<Staff> queryPersonListByPageAndArgs(Map<String,Object> data);
}
