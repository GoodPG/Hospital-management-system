package com.gxa.service;

import com.gxa.entity.sale;

import java.util.List;

public interface SaleService {
    List<sale> queryAll();
    void add(sale sales);

    //根据id删除
    void delete(Integer id);
}
