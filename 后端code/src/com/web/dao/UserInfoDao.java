package com.web.dao;

import com.web.bean.*;
import com.web.util.SqlUtil;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserInfoDao {
    public List<UserInfo> getAll(){
        String sql = "select * from userInfo";
        List<UserInfo> userInfos = SqlUtil.queryList(UserInfo.class, sql);
        return userInfos;
    }

    //删除指定的 用户信息
    public boolean deleUserInfo(Integer userID){
        String call = "{? = call user_del(?)}";
        if(SqlUtil.updateallPro(call, userID) != false){
            return true;
        }else{
            return false;
        }
    }
    // 更改用户信息
    public  boolean updateUserInfo(Integer userID, String userName, String email, String userPhone, String password){
        String call = "{? = call user_update(?,?,?,?,?)}";
        if(SqlUtil.updateallPro(call, userID, userName, email, userPhone, password) != false){
            return true;
        }else{
            return false;
        }
    }
    // 通过用户名来查找用户
    public boolean queryByUserName(String userName, Integer userID){
        String sql = "select * from userInfo Where userName = ? and userID != ?";
        if(SqlUtil.query(UserInfo.class, sql, userName, userID) != null){
            return true;
        }else{
            return false;
        }
    }
    public boolean queryByUserName(String userName){
        String sql = "select * from userInfo Where userName = ?";
        if(SqlUtil.query(UserInfo.class, sql, userName) != null){
            return true;
        }else{
            return false;
        }
    }
    // 通过邮箱来查找用户
    public boolean queryByEamil(String email, Integer userID){
        String sql = "select * from userInfo where Email = ? and userID != ?";
        if(SqlUtil.query(UserInfo.class, sql, email, userID) != null){
            return true;
        }else{
            return false;
        }
    }
    public boolean queryByEamil(String email){
        String sql = "select * from userInfo where Email = ?";
        if(SqlUtil.query(UserInfo.class, sql, email) != null){
            return true;
        }else{
            return false;
        }
    }
    // 通过电话号来查找用户
    public boolean queryByPhone(String userPhone, Integer userID){
        String sql = "select * from userInfo where userPhone = ? and userID != ?";
        if(SqlUtil.query(UserInfo.class, sql, userPhone, userID) != null){
            return true;
        }else{
            return false;
        }
    }
    public boolean queryByPhone(String userPhone){
        String sql = "select * from userInfo where userPhone = ?";
        if(SqlUtil.query(UserInfo.class, sql, userPhone) != null){
            return true;
        }else{
            return false;
        }
    }

    // 添加用户
    public boolean  addUser(String userName, String email, String userPhone, String pwd){
        String call = "{? = call user_add(?,?,?,?)}";
        if(SqlUtil.updateallPro(call,userName,email,userPhone,pwd) != false){
            return true;
        }else{
            return false;
        }
    }

    // 添加用户查重

//    public Map<String, Object> addUserQuery(String userName, String email, String userPhone){
//        String sqlName = "select * from userInfo where userName = ?";
//        String sqlEmail = "select * from userInfo where Email = ?";
//        String sqlPhone = "select * from userInfo where userPhone = ?";
//
//        Map<String, Object> reMap = new HashMap<>();
//
//        if(SqlUtil.query(UserInfo.class, sqlName, userName) != null){
//            reMap.put("nameOk", 1);
//        }else{
//            reMap.put("nameOk", 0);
//        }
//
//        if(SqlUtil.query(UserInfo.class, sqlEmail, email) != null){
//            reMap.put("emailOk", 1);
//        }else{
//            reMap.put("emailOk", 0);
//        }
//
//        if(SqlUtil.query(UserInfo.class, sqlPhone, userPhone) != null) {
//            reMap.put("phoneOk", 1);
//        }else {
//            reMap.put("phoneOk", 0);
//        }
//
//        return reMap;
//    }
}
