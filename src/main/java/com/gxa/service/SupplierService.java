package com.gxa.service;

import com.gxa.entity.Supplier;

import java.util.List;

public interface SupplierService {
    List<Supplier> queryAll();
    List<Supplier> queryByName(String search);
    //添加供应商
    void add(Supplier supplier);

    //根据id删除
    void delete(Integer id);
}
