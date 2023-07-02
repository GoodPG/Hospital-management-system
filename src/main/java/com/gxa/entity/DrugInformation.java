package com.gxa.entity;

import lombok.Data;

@Data
public class DrugInformation {

    private Integer id;
    private String category;//药品类别
    private String name;//药品名称
    private String supplier;//供应商
    private String link;//单位
    private String date;//保质期
    private String ps;//备注
    private Integer status = 1;//默认是正常的
}
