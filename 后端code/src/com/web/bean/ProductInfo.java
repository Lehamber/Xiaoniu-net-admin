package com.web.bean;

import java.math.BigDecimal;
import java.util.Date;

public class ProductInfo {
    private Integer productID;
    private String productName;
    private String title;
    private String Pictureaddress;
    private BigDecimal unitPrice;
    private Integer stock;
    private Date updateDate;
    private Date launchDate;
    private String CategoryName;
    private String specification;
    private Integer UserID;
    private String userPhone;

    public ProductInfo(){}
    public ProductInfo(Integer productID, String productName, String title, String Pictureaddress, BigDecimal unitPrice, Integer stock, Date updateDate, Date launchDate, String CategoryName, String specification, Integer UserID, String userPhone){
        this.productID = productID;
        this.productName = productName;
        this.title = title;
        this.Pictureaddress = Pictureaddress;
        this.unitPrice = unitPrice;
        this.stock = stock;
        this.updateDate = updateDate;
        this.launchDate = launchDate;
        this.CategoryName = CategoryName;
        this.specification = specification;
        this.UserID = UserID;
        this.userPhone = userPhone;
    }

//    @Override  // 重写toString() 方法
//    public String toString() {
//        return "ProductInfo{" +
//                "productID='" + productID + '\'' +
//                ", productName='" + productName + '\'' +
//                ", unitPrice=" + unitPrice +
//                ", orderMoney='" + orderMoney + '\'' +
//                ", geneTime='" + geneTime + '\'' +
//                ", productID=" + productID +
//                ", orderStatus='" + orderStatus + '\'' +
//                ", addressInfo='" + addressInfo + '\'' +
//                ", phone='" + phone + '\'' +
//                ", name='" + name +
//                '}';
//    };


    public void setProductID(Integer productID) {
        this.productID = productID;
    }

    public void setCategoryName(String categoryName) {
        CategoryName = categoryName;
    }

    public void setLaunchDate(Date launchDate) {
        this.launchDate = launchDate;
    }

    public void setPictureaddress(String pictureaddress) {
        Pictureaddress = pictureaddress;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public void setUserID(Integer userID) {
        UserID = userID;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public Integer getProductID() {
        return productID;
    }

    public Integer getStock() {
        return stock;
    }

    public Integer getUserID() {
        return UserID;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public String getProductName() {
        return productName;
    }

    public Date getLaunchDate() {
        return launchDate;
    }

    public String getPictureaddress() {
        return Pictureaddress;
    }

    public String getSpecification() {
        return specification;
    }

    public String getTitle() {
        return title;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public String getUserPhone() {
        return userPhone;
    }
}
