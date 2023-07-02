package com.gxa.service;

import com.gxa.entity.bc;

import java.util.List;

public interface BcService {
    List<bc> queryAll();
    void add(bc bcs);

    //根据id删除
    void delete(Integer id);
}
