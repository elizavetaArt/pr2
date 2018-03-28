package by.bsuir.shut.controller;

import by.bsuir.shut.service.OrderService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@RestController
public class OrderController {
    private static Logger logger = LogManager.getLogger(OrderController.class);

    @Autowired
    OrderService orderService;

    @RequestMapping(value = "/check-time", method = RequestMethod.POST)
    public String checkTimeForOrder(@RequestBody @NotNull String userInfo) {
        logger.info("check-time");
        return orderService.checkTime(userInfo);
    }

    @RequestMapping(value = "/orders", method = RequestMethod.POST)
    public String createOrder(@RequestBody @NotNull String userInfo) {
        return orderService.addNewOrder(userInfo);
    }

}
