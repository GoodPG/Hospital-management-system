package com.gxa.controller;


import com.gxa.common.JsonResult;
import com.gxa.entity.Staff;
import com.gxa.entity.Supplier;
import com.gxa.service.StaffService;
import com.gxa.service.SupplierService;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;
import java.util.List;

/**
 * @ClassName SupplierController
 * @Description TODO
 * @Author she
 * @Date 2023/6/9 15:46
 **/

@RestController
public class StaffController {
    //简单： 查询：get  增加，修改，删除 ：post
    //rest:  查询：get  增加:post 修改：put 删除:delete

    @Autowired
    private StaffService staffService;

    @GetMapping("/staff/query")
    public Result queryAll(){

        List<Staff> staffs = this.staffService.queryAll();
        return new Result().ok(staffs);
    }


    @PostMapping("/staff/add")
    public Result add(Staff staff){
        try{

            this.staffService.add(staff);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }


    @PostMapping("/staff/delete")
    public Result deleteById(Integer id){
        try{
            this.staffService.delete(id);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }

    }
    @GetMapping("/staff/queryByPage")
    public JsonResult queryPersonListByPage(Integer page, Integer limit){
        JsonResult jsonResult = staffService.queryPersonListByPage(page, limit);
        return jsonResult;
    }

    /*
    按条件搜索并分页查询功能：
     */
    @GetMapping("/staff/search")
    public JsonResult searchConfirm(Integer page,Integer limit,String name,String card_num){
        JsonResult jsonResult = staffService.searchConfirm(page, limit, name, card_num);
        return jsonResult;
    }


}
