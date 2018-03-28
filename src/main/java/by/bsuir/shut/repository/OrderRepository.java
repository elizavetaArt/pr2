package by.bsuir.shut.repository;

import by.bsuir.shut.entity.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository  extends CrudRepository<Order, String> {
}
