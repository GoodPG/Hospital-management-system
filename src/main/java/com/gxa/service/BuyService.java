package com.gxa.service;

import com.gxa.entity.BuyInformation;
import com.gxa.entity.DrugInformation;

import java.util.List;

public interface BuyService {
    List<BuyInformation> queryAll();
    List<BuyInformation> queryByName(String search);

    //添加供应商
    void add(BuyInformation buyInformation);

    //根据id删除
    void delete(Integer id);
}
