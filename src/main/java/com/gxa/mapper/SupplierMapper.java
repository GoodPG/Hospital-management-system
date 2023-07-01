package com.gxa.mapper;

import com.gxa.entity.Supplier;

import java.util.List;

public interface SupplierMapper {
    List<Supplier> queryAll();
    List<Supplier> queryByName(String search);
    void insert(Supplier supplier);
    void update(Integer id);
}
