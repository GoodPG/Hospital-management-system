package com.gxa.mapper;

import com.gxa.entity.DrugInformation;
import com.gxa.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;
@Mapper
public interface UserMapper {
    List<User> queryAll();
    List<User> queryByName1(String search);
    void update1(Integer id);

    void insert(User user);
    User queryByName(@Param("name") String username);

    void insert(String name, String pwd,Integer status,String phone);
    void insert1(String name, String pwd1,Integer status,String phone,String status1);
    void update(String pwd);
    int modify(String username, String new_pwd);
    User queryById(@Param("id") Integer id);

}
