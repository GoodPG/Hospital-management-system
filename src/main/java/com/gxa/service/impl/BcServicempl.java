package com.gxa.service.impl;

import com.gxa.entity.bc;
import com.gxa.mapper.BcMapper;
import com.gxa.service.BcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BcServicempl implements BcService {


    @Autowired
    private BcMapper bcMapper;
    @Override
    public List<bc> queryAll() {
       List<bc>  bcs=this.bcMapper.queryAll();
       return  bcs;
    }

    @Override
    public void add(bc bcs) {
        this.bcMapper.insert(bcs);
    }

    @Override
    public void delete(Integer id) {
        this.bcMapper.update(id);
    }
}
