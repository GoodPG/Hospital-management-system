package com.gxa.mapper;

import com.gxa.entity.DrugInformation;

import java.util.List;

public interface DrugMapper {
    List<DrugInformation> queryAll();
    List<DrugInformation> queryByName(String search);
    void update(Integer id);

    void insert(DrugInformation drugInformation);
}
