package com.gxa.service.impl;

import com.gxa.entity.Admin;
import com.gxa.entity.Staff;
import com.gxa.mapper.AdminMapper;
import com.gxa.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminMapper adminMapper;

    @Override
    public List<Admin> queryAll(){
        List<Admin> admins = this.adminMapper.queryAll ();
        return admins;
    }

    @Override
    public Admin queryById(String id){
        Admin admin = this.adminMapper.queryById(id);
        return admin;
    }

    @Override
    public List<Admin> queryByID(int id, int status) {
        Admin admin = this.adminMapper.queryByID(id,status);
        List<Admin> admins = new ArrayList<>();
        if(admin!=null){
            admins.add(admin);
        }
        return admins;
    }

    @Override
    public List<Admin> queryByName(String name,int status) {
        List<Admin> admins = this.adminMapper.queryByName(name,status);
        return admins;
    }
    @Override
    public void update(Admin admin){
        this.adminMapper.update(admin);
    }
    @Override
    public void add(Admin admin){
        this.adminMapper.insert (admin);
    }
    @Override
    public void delete(int id){
        this.adminMapper.delete (id);
    }


}
