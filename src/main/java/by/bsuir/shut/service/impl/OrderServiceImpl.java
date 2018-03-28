package by.bsuir.shut.service.impl;

import by.bsuir.shut.controller.OrderController;
import by.bsuir.shut.entity.Order;
import by.bsuir.shut.repository.OrderRepository;
import by.bsuir.shut.service.OrderService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import static java.util.UUID.randomUUID;

@Service
public class OrderServiceImpl implements OrderService {
    private static Logger logger = LogManager.getLogger(OrderServiceImpl.class);
    @Autowired
    OrderRepository orderRepository;

    @Override
    public String checkTime(String userInfo) {
        JSONObject jsonObject = new JSONObject(userInfo);
        String response = "Yes";
        List<Order> timeList = (List<Order>) orderRepository.findAll();
        for(int i = 0; i < timeList.size(); i++) {
            if(timeList.get(i).getDate().equals(jsonObject.getString("date")) && timeList.get(i).getTimeForOrder().equals(jsonObject.getString("time"))) {
                response = "No";
            }
        }
        logger.info(response);
        return response;
    }

    @Override
    public String addNewOrder(String userInfo) {
        UUID id = randomUUID();
        JSONObject jsonObject = new JSONObject(userInfo);
        Order order = new Order();
        order.setDate(jsonObject.getString("date"));
        order.setId(String.valueOf(id));
        order.setName(jsonObject.getString("name"));
        order.setVidAuto(jsonObject.getString("vidAuto"));
        order.setNumber(jsonObject.getString("number"));
        order.setFormSevices(jsonObject.getString("formSevices"));
        order.setFormComments(jsonObject.getString("formComments"));
        order.setTimeForOrder(jsonObject.getString("time"));
        orderRepository.save(order);
        return "Successful";
    }
}
