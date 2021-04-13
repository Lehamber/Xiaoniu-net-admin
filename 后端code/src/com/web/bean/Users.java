package com.web.bean;

import java.util.List;

public class Users {
    private Integer userID;   // 用户ID
    private String userName;  // 用户名
    private String Email;    // 用户邮箱
    private String userPhone;  // 用户手机号
    private String userphoto;  // 用户头像
    private String password;    // 用户密码
    private String ownerName; // 店主真实姓名
    private Integer businessType; // 店铺类型
    private String businessName; // 店铺名
    private String businessAddress; //店铺地址
    private String businessphone; // 商家联系电话

    public Users(){}

    public Users(Integer userID, String userName, String email, String userPhone, String userPhoto, String password,
                 String ownerName, Integer businessType, String businessName, String businessAddress, String businessPhone){
        this.userID = userID;
        this.userName = userName;
        this.Email = email;
        this.userPhone = userPhone;
        this.userphoto = userPhoto;
        this.password = password;
        this.ownerName = ownerName;
        this.businessType = businessType;
        this.businessName = businessName;
        this.businessAddress = businessAddress;
        this.businessphone =businessPhone;
    }

    @Override  // 重写toString() 方法
    public String toString() {
        return "Users{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", businessType=" + businessType +
                ", email='" + Email + '\'' +
                ", userPhone='" + userPhone + '\'' +
                ", userID=" + userID +
                ", ownerName='" + ownerName + '\'' +
                ", businessName='" + businessName + '\'' +
                ", businessAddress='" + businessAddress + '\'' +
                ", businessPhone='" + userphoto + '\'' +
                ", userPhoto=" + userphoto +
                '}';
    }

    public void setUserID(Integer userID){
        this.userID = userID;
    }
    public Integer getUserID(){
        return userID;
    }
}

