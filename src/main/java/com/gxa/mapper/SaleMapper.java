package com.gxa.mapper;

import com.gxa.entity.sale;

import java.util.List;

public interface SaleMapper {
    List<sale> queryAll();
    void insert(sale sales);
    void update(Integer id);
}
