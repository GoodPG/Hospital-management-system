package com.gxa.controller;


import com.gxa.entity.bc;
import com.gxa.service.BcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gxa.utils.Result;
import java.util.List;

@RestController
public class BcController {
    @Autowired
    private BcService bcService;
    @GetMapping("/bc/query")
    public Result quaryAll(){
        List<bc> bcs = this.bcService.queryAll();
        return new Result().ok(bcs);
    }
    @PostMapping("/bc/add")
    public Result add(bc bcs){
        try{

   this.bcService.add(bcs);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }


    @PostMapping("/bc/delete")
    public Result deleteById(Integer id){
        try{
           this.bcService.delete(id);

            return new Result().ok();
        }catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }

    }

}
