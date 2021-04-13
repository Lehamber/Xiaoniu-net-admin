package com.web.bean;

public class UserInfo {
    private Integer userID;   // 用户ID
    private String userName;  // 用户名
    private String Email;    // 用户邮箱
    private String userPhone;  // 用户手机号
    private String password;    // 用户密码

    public UserInfo(){}

    public UserInfo(Integer userID, String userName, String email, String userPhone, String password){
        this.userID = userID;
        this.userName = userName;
        this.Email = email;
        this.userPhone = userPhone;
        this.password = password;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public Integer getUserID() {
        return userID;
    }

    public String getEmail() {
        return Email;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }
}
