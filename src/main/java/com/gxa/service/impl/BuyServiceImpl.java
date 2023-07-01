package com.gxa.service.impl;

import com.gxa.entity.BuyInformation;
import com.gxa.mapper.BuyMapper;
import com.gxa.service.BuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyServiceImpl implements BuyService {
    @Autowired
    private BuyMapper buyMapper;
    @Override
    public List<BuyInformation> queryAll() {
        List<BuyInformation> buyInformations = this.buyMapper.queryAll();
        return buyInformations;
    }

    @Override
    public List<BuyInformation> queryByName(String search) {
        List<BuyInformation> buyInformations = this.buyMapper.queryByName(search);
        return buyInformations;
    }

    @Override
    public void add(BuyInformation buyInformation) {
        this.buyMapper.insert(buyInformation);
    }

    @Override
    public void delete(Integer id) {
        this.buyMapper.update(id);
    }
}
