package com.web.bean;

public class ShopInfo {
    private int userID;
    private String CategoryName;
    private String ownerName;
    private String businessName;
    private String businessAddress;
    private String businessphone;
    private String userPhone;

    public ShopInfo(){}

    public ShopInfo( int userID, String CategoryName, String ownerName, String businessName, String businessAddress, String businessphone, String userPhone){
        this.userID = userID;
        this.CategoryName = CategoryName;
        this.ownerName = ownerName;
        this.businessName = businessName;
        this.businessAddress = businessAddress;
        this.businessphone = businessphone;
        this.userPhone = userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public void setCategoryName(String categoryName) {
        CategoryName = categoryName;
    }

    public void setBusinessAddress(String businessAddress) {
        this.businessAddress = businessAddress;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public void setBusinessphone(String businessphone) {
        this.businessphone = businessphone;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }


    public String getUserPhone() {
        return userPhone;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public int getUserID() {
        return userID;
    }

    public String getBusinessAddress() {
        return businessAddress;
    }

    public String getBusinessName() {
        return businessName;
    }

    public String getBusinessphone() {
        return businessphone;
    }

    public String getOwnerName() {
        return ownerName;
    }
}
