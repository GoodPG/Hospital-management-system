package com.gxa.controller;

import com.gxa.entity.DrugInformation;
import com.gxa.entity.Supplier;
import com.gxa.service.DrugService;

import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DrugController {
    //简单： 查询：get  增加，修改，删除 ：post
    //rest:  查询：get  增加:post 修改：put 删除:delete

    @Autowired
    private DrugService drugService;

    @GetMapping("/druginformation/query")
    public Result queryAll(){

        List<DrugInformation> drugInformations = this.drugService.queryAll();
        return new Result().ok(drugInformations);
    }

    @PostMapping("/druginformation/queryByName")
    public Result queryByName(String search){

        List<DrugInformation> drugInformations = this.drugService.queryByName(search);
        return new Result().ok(drugInformations);
    }

    @PostMapping("/druginformation/add")
    public Result add(DrugInformation drugInformations){
        try{
            this.drugService.add(drugInformations);
            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }


    @PostMapping("/druginformation/delete")
    public Result deleteById(Integer id){
        try{
            this.drugService.delete(id);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }

    }
}
