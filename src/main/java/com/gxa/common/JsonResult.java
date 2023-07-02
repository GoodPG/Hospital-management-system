package com.gxa.common;

import lombok.Data;

@Data
public class JsonResult<T> {
    private Integer code;//状态码 200成功 400 500失败   0 数据表格成功显示数据-layui规定状态
    private String msg;//成功 失败
    private Integer count;//总记录数
    private T data;//数据 entity List Map等
}
