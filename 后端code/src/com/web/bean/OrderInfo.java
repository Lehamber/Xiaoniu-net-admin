package com.web.bean;

import javax.print.DocFlavor;
import java.math.BigDecimal;
import java.util.Date;

public class OrderInfo {
    private Integer orderID;
    private Integer quantity;
    private BigDecimal unitPrice;
    private BigDecimal orderMoney;
    private Date geneTime;
    private Integer productID;
    private String orderStatus;
    private String addressInfo;
    private String phone;
    private String name;

    public OrderInfo(){}

    public OrderInfo( Integer orderID, Integer quantity, BigDecimal unitPrice, BigDecimal orderMoney, Date geneTime, Integer productID, String orderStatus, String addressInfo, String phone, String name){
        this.orderID = orderID;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.orderMoney = orderMoney;
        this.geneTime = geneTime;
        this.productID = productID;
        this.orderStatus = orderStatus;
        this.addressInfo = addressInfo;
        this.phone = phone;
        this.name = name;
    }

    @Override  // 重写toString() 方法
    public String toString() {
        return "OrderInfo{" +
                "orderID='" + orderID + '\'' +
                ", quantity='" + quantity + '\'' +
                ", unitPrice=" + unitPrice +
                ", orderMoney='" + orderMoney + '\'' +
                ", geneTime='" + geneTime + '\'' +
                ", productID=" + productID +
                ", orderStatus='" + orderStatus + '\'' +
                ", addressInfo='" + addressInfo + '\'' +
                ", phone='" + phone + '\'' +
                ", name='" + name +
                '}';
    };

    public void setOrderID(Integer orderID){
        this.orderID = orderID;
    }

    public void setQuantity(Integer quantity){
        this.quantity = quantity;
    }
    public  void setUnitPrice(BigDecimal unitPrice){
        this.unitPrice = unitPrice;
    }
    public  void setOrderMoney(BigDecimal orderMoney){
        this.orderMoney = orderMoney;
    }
    public  void setGeneTime(Date geneTime){
        this.geneTime = geneTime;
    }
    public void setProductID(Integer productID){
        this.productID = productID;
    }
    public  void setOrderStatus(String orderStatus){
        this.orderStatus = orderStatus;
    }
    public void setAddressInfo(String addressInfo){
        this.addressInfo = addressInfo;
    }
    public void  setPhone(String phone){
        this.phone = phone;
    }
    public void  setName(String name){
        this.name = name;
    }


    public Integer getOrderID(){
        return orderID;
    }
    public Integer getQuantity(){
        return quantity;
    }
    public BigDecimal getUnitPrice(){
        return  unitPrice;
    }
    public BigDecimal getOrderMoney(){
        return orderMoney;
    }
    public Date getGeneTime(){
        return geneTime;
    }
    public Integer getProductID(){
        return  productID;
    }
    public String getOrderStatus(){
        return orderStatus;
    }
    public String getAddressInfo() {
        return addressInfo;
    }
    public String getName() {
        return name;
    }
    public String getPhone() {
        return phone;
    }
}
