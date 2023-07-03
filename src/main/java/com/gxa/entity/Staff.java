package com.gxa.entity;

import lombok.Data;

@Data
public class Staff {
    private Integer id;
    private String name;//姓名
    private String sex;//性别
    private Integer age;//年龄
    private String number;//电话号码
    private String address;//地址
    private String position;//职位
    private String department;//部门
    private Integer status = 1;//默认是正常的
}
