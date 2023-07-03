package com.gxa.service.impl;



import com.gxa.common.JsonResult;
import com.gxa.entity.Staff;
import com.gxa.mapper.StaffMapper;
import com.gxa.service.StaffService;

import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


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
    public List<Staff> queryById(int id,int status) {
        Staff staff = this.staffMapper.queryById(id,status);
        List<Staff> staffs = new ArrayList<>();
        if(staff!=null){
            staffs.add(staff);
        }
        return staffs;
    }

    @Override
    public List<Staff> queryByName(String name,int status) {
        List<Staff> staffs = this.staffMapper.queryByName(name,status);
        return staffs;
    }

    @Override
    public List<Staff> queryBySex(String sex,int status) {
        List<Staff> staffs = this.staffMapper.queryBySex(sex,status);
        return staffs;
    }

    @Override
    public List<Staff> queryByDepartment(String department,int status) {
        List<Staff> staffs = this.staffMapper.queryByDepartment(department,status);
        return staffs;
    }
    @Override
    public void add(Staff staff) {
        this.staffMapper.insert(staff);
    }

    @Override
    public void delete(Integer id) {
        this.staffMapper.update(id);
    }
}




