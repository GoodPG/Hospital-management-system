package com.gxa.entity;

import lombok.Data;

@Data
public class BuyInformation {
    private Integer id;
    private Integer number;//采购单据号
    private String time;//入库时间
    private String money;//总金额
    private String people;//负责人
    private String psbuy;//备注
    private String mingxi;//明细
    private Integer status = 1;//默认是正常的
}
