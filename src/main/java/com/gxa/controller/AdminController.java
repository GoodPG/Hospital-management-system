package com.gxa.controller;

import com.gxa.entity.Admin;
import com.gxa.service.AdminService;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admin/query")
    public Result querryAll () {
        List<Admin> admins = this.adminService.queryAll();
        if(admins.size()==0){
            return new Result().error("出了点小故障");
        }
        else{
            return new Result().ok(admins);
        }
    }

    @PostMapping("/admin/queryByID")
    public Result queryByID(int id,int status){
        List<Admin> admins = this.adminService.queryByID(id,status);
        if (admins.size()==0) {
            return new Result().error("搜索的部门不存在");
        }
        else{
            return new Result().ok(admins);
        }
    }

    @PostMapping ("/admin/queryByName")
    public Result queryByName(String name,int status){
        List<Admin> admins = this.adminService.queryByName(name,status);
        if(admins.size()==0){
            return new Result().error("搜索的部门不存在");
        }
        else{
            return new Result().ok(admins);
        }
    }

    @PostMapping("/admin/add")
    public Result add (Admin admin) {
        String id = admin.getId();
        if(this.adminService.queryById(id)==null){
            this.adminService.add (admin);
            return new Result ().ok ();
        }
        else{
            return new Result().error("所用的部门编号已存在");
        }
    }

    @PostMapping("/admin/update")
    public Result update (Admin admin) {
        String id = admin.getId();
        if(this.adminService.queryById(id)!=null){
            this.adminService.update (admin);
            return new Result ().ok ();
        }
        else{
            return new Result().error("所更新的部门不存在");
        }
    }

    @PostMapping("admin/delete")
    public Result deleteById(Integer id) {
        this.adminService.delete(id);
        return new Result().ok();
    }
}
