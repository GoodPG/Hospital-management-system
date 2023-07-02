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
        List<Admin> admins = this.adminService.queryAll ();
        return new Result ().ok (admins);
    }

    @PostMapping("/admin/add")
    public Result add (Admin admin) {
        try {
            this.adminService.add (admin);
            return new Result ().ok ();
        } catch (Exception e) {
            e.printStackTrace ();
            return new Result ().error ();
        }
    }
    @PostMapping("admin/delete")
    public Result deleteById(Integer id){
        try{
            this.adminService.delete (id);
            return new Result ().ok ();
        } catch (Exception e) {
            e.printStackTrace ();
            return new Result ().error ();
        }
    }
}
