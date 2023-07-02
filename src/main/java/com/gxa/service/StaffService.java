package com.gxa.service;

import com.gxa.common.JsonResult;
import com.gxa.entity.Staff;


import java.util.List;

public interface StaffService {
    List<Staff> queryAll();
    //添加供应商
    void add(Staff staff);

    //根据id删除
    void delete(Integer id);

    JsonResult queryPersonListByPage(Integer page,Integer limit);

    JsonResult searchConfirm(Integer page, Integer limit, String name, String number);

}
