package com.gxa.service.impl;

import com.gxa.entity.DrugInformation;
import com.gxa.mapper.DrugMapper;
import com.gxa.service.DrugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DrugServiceImpl implements DrugService {

    @Autowired
    private DrugMapper drugMapper;
    @Override
    public List<DrugInformation> queryAll() {
        List<DrugInformation> drugInformations = this.drugMapper.queryAll();
        return drugInformations;
    }

    @Override
    public List<DrugInformation> queryByName(String search) {
        List<DrugInformation> drugInformations = this.drugMapper.queryByName(search);
        return drugInformations;
    }

    @Override
    public void add(DrugInformation drugInformation) {
        this.drugMapper.insert(drugInformation);
    }

    @Override
    public void delete(Integer id) {
        this.drugMapper.update(id);
    }
}
