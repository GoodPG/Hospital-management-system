package com.gxa.controller;

import com.gxa.entity.BuyInformation;
import com.gxa.service.BuyService;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BuyController {
    //简单： 查询：get  增加，修改，删除 ：post
    //rest:  查询：get  增加:post 修改：put 删除:delete

    @Autowired
    private BuyService buyService;

    @GetMapping("/buyinformation/query")
    public Result queryAll(){

        List<BuyInformation> buyInformations = this.buyService.queryAll();
        return new Result().ok(buyInformations);
    }

    @PostMapping("/buyinformation/queryByName")
    public Result queryByName(String search){

        List<BuyInformation> buyInformations = this.buyService.queryByName(search);
        return new Result().ok(buyInformations);
    }


    @PostMapping("/buyinformation/add")
    public Result add(BuyInformation buyInformations){
        try{
            this.buyService.add(buyInformations);
            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }


    @PostMapping("/buyinformation/delete")
    public Result deleteById(Integer id){
        try{
            this.buyService.delete(id);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }

    }
}
