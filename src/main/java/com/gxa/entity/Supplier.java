package com.gxa.entity;

import lombok.Data;

/**
 * @ClassName Supplier
 * @Description TODO
 * @Author she
 * @Date 2023/1/9 15:36
 **/
@Data
public class Supplier {
    private Integer id;
    private String name;
    private String address;
    private String link;
    private String phone;
    private String code;
    private String fax;
    private String email;
    private Integer status = 1;//默认是正常的
}
