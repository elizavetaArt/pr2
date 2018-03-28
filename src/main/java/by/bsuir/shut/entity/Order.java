package by.bsuir.shut.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user_order")
public class Order implements Serializable {
    private String id;
    private String timeForOrder;
    private String date;
    private String formSevices;
    private String vidAuto;
    private String number;
    private String name;
    private String formComments;

    public Order() {
        super();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return Objects.equals(id, order.id) &&
                Objects.equals(timeForOrder, order.timeForOrder) &&
                Objects.equals(date, order.date) &&
                Objects.equals(formSevices, order.formSevices) &&
                Objects.equals(vidAuto, order.vidAuto) &&
                Objects.equals(number, order.number) &&
                Objects.equals(name, order.name) &&
                Objects.equals(formComments, order.formComments);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, timeForOrder, date, formSevices, vidAuto, number, name, formComments);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Order{");
        sb.append("id='").append(id).append('\'');
        sb.append(", timeForOrder='").append(timeForOrder).append('\'');
        sb.append(", date='").append(date).append('\'');
        sb.append(", formSevices='").append(formSevices).append('\'');
        sb.append(", vidAuto='").append(vidAuto).append('\'');
        sb.append(", number='").append(number).append('\'');
        sb.append(", name='").append(name).append('\'');
        sb.append(", formComments='").append(formComments).append('\'');
        sb.append('}');
        return sb.toString();
    }

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Column(name = "time")
    public String getTimeForOrder() {
        return timeForOrder;
    }

    public void setTimeForOrder(String timeForOrder) {
        this.timeForOrder = timeForOrder;
    }

    @Column(name = "date")
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Column(name = "form_sevices")
    public String getFormSevices() {
        return formSevices;
    }

    public void setFormSevices(String formSevices) {
        this.formSevices = formSevices;
    }

    @Column(name = "vid_auto")
    public String getVidAuto() {
        return vidAuto;
    }

    public void setVidAuto(String vidAuto) {
        this.vidAuto = vidAuto;
    }

    @Column(name = "number")
    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "form_comments")
    public String getFormComments() {
        return formComments;
    }

    public void setFormComments(String formComments) {
        this.formComments = formComments;
    }
}
