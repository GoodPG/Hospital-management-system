package com.gxa.entity;

import lombok.Data;

@Data
public class bc {
    private Integer id;
    private String  bc_name;
    private String  bc_time;
    private String  bc_leader;
    private String  bc_price;
    private String  bc_remarks;
    private Integer status=1;
}
