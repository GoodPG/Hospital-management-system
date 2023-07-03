package com.gxa.service.impl;

import com.gxa.entity.sale;
import com.gxa.mapper.SaleMapper;
import com.gxa.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SaleServicempl implements SaleService {


    @Autowired
    private SaleMapper saleMapper;
    @Override
    public List<sale> queryAll() {
       List<sale>  sales=this.saleMapper.queryAll();
       return  sales;
    }

    @Override
    public void add(sale sales) {
        this.saleMapper.insert(sales);
    }

    @Override
    public void delete(Integer id) {
        this.saleMapper.update(id);
    }
}
