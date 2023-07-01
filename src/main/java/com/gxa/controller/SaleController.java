package com.gxa.controller;


import com.gxa.entity.sale;
import com.gxa.service.SaleService;
import com.gxa.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SaleController {
    @Autowired
    private SaleService saleService;

    @GetMapping("/sale/query")
    public Result quaryAll() {
        List<sale> sales = this.saleService.queryAll();
        return new Result().ok(sales);
    }

    @PostMapping("/sale/add")
    public Result add(sale sales) {
        try {
            this.saleService.add(sales);
            return new Result().ok();
        } catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }
    }


    @PostMapping("/sale/delete")
    public Result deleteById(Integer id) {
        try {
            this.saleService.delete(id);

            return new Result().ok();
        } catch (Exception e) {
            e.printStackTrace();
            return new Result().error();
        }

    }

}
