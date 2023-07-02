package com.gxa.mapper;

import com.gxa.entity.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    User queryByName(@Param("name") String username);

    void insert(String username, String pwd);

    void update(String pwd);
    int modify(Integer id, String new_pwd);
    User queryById(@Param("id") Integer id);
}
