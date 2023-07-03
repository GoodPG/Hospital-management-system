package com.gxa.controller;


import com.gxa.entity.Staff;
import com.gxa.service.StaffService;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class StaffController {
    //简单： 查询：get  增加，修改，删除 ：post
    //rest:  查询：get  增加:post 修改：put 删除:delete

    @Autowired
    private StaffService staffService;

    @GetMapping("/staff/query")
    public Result queryAll(){
        List<Staff> staffs = this.staffService.queryAll();
        if(staffs.size()==0){
            return new Result().error("出了点小故障");
        }
        else{
            return new Result().ok(staffs);
        }
    }

    @PostMapping("/staff/queryById")
    public Result queryById(int id,int status){
        List<Staff> staffs = this.staffService.queryById(id,status);
        if (staffs.size()==0) {
            return new Result().error("搜索的员工不存在");
        }
        else{
            return new Result().ok(staffs);
        }
    }

    @PostMapping ("/staff/queryByName")
    public Result queryByName(String name,int status){
        List<Staff> staffs = this.staffService.queryByName(name,status);
        if(staffs.size()==0){
            return new Result().error("搜索的员工不存在");
        }
        else{
            return new Result().ok(staffs);
        }
    }

    @PostMapping ("/staff/queryBySex")
    public Result queryBySex(String sex,int status){
        if(!sex.equals("男") && !sex.equals("女")){
            return new Result().error("性别输入错误！请输入男或者女");
        }
        else{
            List<Staff> staffs = this.staffService.queryBySex(sex,status);
            if(staffs.size()==0){
                return new Result().error("暂无相关内容");
            }
            else{
                return new Result().ok(staffs);
            }
        }
    }

    @PostMapping ("/staff/queryByDepartment")
    public Result queryByDepartment(String department,int status){
        List<Staff> staffs = this.staffService.queryByDepartment(department,status);
        if(staffs.size()==0){
            return new Result().error("暂无相关内容");
        }
        else{
            return new Result().ok(staffs);
        }
    }

    @PostMapping("/staff/add")
    public Result add(Staff staff){
        this.staffService.add(staff);
        return new Result().ok();
    }


    @PostMapping("/staff/delete")
    public Result deleteById(Integer id){
            this.staffService.delete(id);
            return new Result().ok();
    }
}
