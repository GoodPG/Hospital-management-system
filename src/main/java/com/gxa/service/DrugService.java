package com.gxa.service;

import com.gxa.entity.DrugInformation;


import java.util.List;

public interface DrugService {
    List<DrugInformation> queryAll();
    List<DrugInformation> queryByName(String search);
    //添加供应商
    void add(DrugInformation drugInformation);

    //根据id删除
    void delete(Integer id);
}
