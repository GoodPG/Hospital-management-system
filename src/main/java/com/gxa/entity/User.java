package com.gxa.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

/**
 * @ClassName User
 * @Description TODO
 * @Author she
 * @Date 2023/1/7 15:32
 **/
@Data
public class User {
    private Integer id;
    private String name;

    @JsonIgnore
    private String pwd;
    private Integer status;//状态  0禁用  1 正常
}
