package com.gxa.entity;

import lombok.Data;

@Data
public class Admin {
    private Integer id;
    private String name;
    private String sex;
    private Integer age;
    private Integer number;
    private String address;
    private String position;
    private Integer status = 1;//默认是正常的
}
