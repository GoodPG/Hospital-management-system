package com.gxa.entity;

import lombok.Data;

@Data
public class sale {
    private Integer id;
    private String  sale_name;
    private String  sale_time;
    private String  sale_leader;
    private String  sale_price;
    private String  sale_remarks;
    private Integer status=1;
}
