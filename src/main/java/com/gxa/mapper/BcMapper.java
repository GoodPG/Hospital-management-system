package com.gxa.mapper;

import com.gxa.entity.bc;

import java.util.List;

public interface BcMapper {
    List<bc> queryAll();
    void insert(bc bcs);
    void update(Integer id);
}
