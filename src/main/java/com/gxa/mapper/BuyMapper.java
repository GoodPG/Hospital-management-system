package com.gxa.mapper;

import com.gxa.entity.BuyInformation;

import java.util.List;

public interface BuyMapper {
    List<BuyInformation> queryAll();
    List<BuyInformation> queryByName(String search);
    void update(Integer id);

    void insert(BuyInformation buyInformation);


}
