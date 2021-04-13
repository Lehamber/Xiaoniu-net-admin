package com.web.dao;

import com.web.bean.Users;
import com.web.util.SqlUtil;

public class UsersDao {
    // 通过Name验证 登录
    public boolean verifyByUserName(String userName, String password){
        String sql ="select * from Users Where userName = ? and password = ?";
        if(SqlUtil.query(Users.class, sql, userName, password) != null){
            return true;
        }else{
            return false;
        }
    }
    // 通过Email验证 登录
    public boolean verifyByEmail(String email, String password){
        String sql = "select * from Users where email = ? and password = ?";
        if(SqlUtil.query(Users.class, sql, email, password) != null){
            return true;
        }else{
            return false;
        }
    }
    // 通过Email验证 登录
    public boolean verifyByUserPhone(String userPhone, String password){
        String sql = "select * from Users where userPhone = ? and password = ?";
        if(SqlUtil.query(Users.class, sql, userPhone, password) != null){
            return true;
        }else{
            return false;
        }
    }
}
