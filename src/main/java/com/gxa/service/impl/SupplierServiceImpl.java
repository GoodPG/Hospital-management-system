package com.gxa.service.impl;

import com.gxa.entity.Supplier;
import com.gxa.mapper.SupplierMapper;
import com.gxa.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName SupplierServiceImpl
 * @Description TODO
 * @Author she
 * @Date 2023/1/9 15:44
 **/
@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierMapper supplierMapper;
    @Override
    public List<Supplier> queryAll() {
        List<Supplier> suppliers = this.supplierMapper.queryAll();

        return suppliers;

    }

    @Override
    public List<Supplier> queryByName(String search) {
        List<Supplier> suppliers = this.supplierMapper.queryByName(search);

        return suppliers;

    }

    @Override
    public void add(Supplier supplier) {
        this.supplierMapper.insert(supplier);
    }

    @Override
    public void modify(Supplier supplier) {
        this.supplierMapper.modify(supplier);
    }

    @Override
    public void delete(Integer id) {
        this.supplierMapper.update(id);
    }


}
