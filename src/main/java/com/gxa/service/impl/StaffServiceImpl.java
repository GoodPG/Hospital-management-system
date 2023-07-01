package com.gxa.service.impl;



import com.gxa.common.JsonResult;
import com.gxa.entity.Staff;
import com.gxa.mapper.StaffMapper;
import com.gxa.service.StaffService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @ClassName SupplierServiceImpl
 * @Description TODO
 * @Author she
 * @Date 2023/1/9 15:44
 **/
@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffMapper staffMapper;
    @Override
    public List<Staff> queryAll() {
        List<Staff> staffs = this.staffMapper.queryAll();

        return staffs;

    }

    @Override
    public void add(Staff staff) {this.staffMapper.insert(staff);
    }

    @Override
    public void delete(Integer id) {
        this.staffMapper.update(id);
    }

    @Override
    public JsonResult queryPersonListByPage (Integer page, Integer limit) {
        return null;
    }

    @Override
    public JsonResult searchConfirm (Integer page, Integer limit, String name, String number) {
        return null;
    }


}




