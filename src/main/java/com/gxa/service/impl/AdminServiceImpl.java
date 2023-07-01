package com.gxa.service.impl;

import com.gxa.entity.Admin;
import com.gxa.mapper.AdminMapper;
import com.gxa.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public void add(Admin admin){this.adminMapper.insert (admin);
    }
    @Override
    public void delete(Integer id){
        this.adminMapper.update (id);
    }


}
