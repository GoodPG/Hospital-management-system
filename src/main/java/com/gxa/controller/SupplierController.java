package com.gxa.controller;

import com.gxa.entity.Supplier;
import com.gxa.service.SupplierService;
import com.gxa.utils.Result;
import com.sun.xml.internal.ws.model.wsdl.WSDLOutputImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @ClassName SupplierController
 * @Description TODO
 * @Author she
 * @Date 2023/6/9 15:46
 **/

@RestController
public class SupplierController {
    //简单： 查询：get  增加，修改，删除 ：post
    //rest:  查询：get  增加:post 修改：put 删除:delete

    @Autowired
    private SupplierService supplierService;

    @GetMapping("/supplier/query")
    public Result queryAll(){

        List<Supplier> suppliers = this.supplierService.queryAll();
        return new Result().ok(suppliers);
    }


    @PostMapping("/supplier/queryByName")
    public Result queryByName(String search){
        List<Supplier> suppliers =this.supplierService.queryByName(search);
        return new Result().ok(suppliers);
    }


    @PostMapping("/supplier/add")
    public Result add(Supplier supplier){
        try{

            this.supplierService.add(supplier);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }


    @PostMapping("/supplier/delete")
    public Result deleteById(Integer id){
        try{
            this.supplierService.delete(id);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }

    }
}
