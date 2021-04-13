package com.web.servlet;

import com.google.gson.Gson;
import com.web.dao.UserInfoDao;
import com.web.util.JsonUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/updateServlet/*")
public class UpdateServlet extends BaseServlet{
//    1、修改分类信息
    public void updateCateInfo(HttpServletRequest request, HttpServletResponse response) throws IOException{
        Integer cateID = Integer.parseInt(request.getParameter("categoryID"));
        String cateName = request.getParameter("categoryName");

        boolean isSucc = categoryDao.updateCateInfo(cateID,cateName);
        Map<String, Object> data = new HashMap<>();
        if(isSucc){
            data.put("confirm",1);
        }else{
            data.put("confirm",0);
        }
        Map<String, Object> successMap = JsonUtil.toSuccessMap();
        successMap.put("data", data);

        Gson gson = new Gson();
        String s = gson.toJson(successMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }
//    2、修改用户信息
    public void updateUserInfo(HttpServletRequest request, HttpServletResponse response) throws IOException{
        Integer userID = Integer.parseInt(request.getParameter("userID"));
        String userName = request.getParameter("userName");
        String email = request.getParameter("email");
        String userPhone = request.getParameter("userPhone");
        String password = request.getParameter("password");

        boolean isOk = true;
        Map<String, Object> data = new HashMap<>();

        if(userInfoDao.queryByUserName(userName, userID) == true){// 如果用户名有重复的
            isOk = false;
            data.put("okName", 0);
        }else{
            data.put("okName", 1);
        }

        if(userInfoDao.queryByEamil(email, userID) == true){// 如果邮箱有重复的
            isOk = false;
            data.put("okEmail", 0);
        }else{
            data.put("okEmail", 1);
        }

        if(userInfoDao.queryByPhone(userPhone, userID) == true){ // 如果手机号有重复的
            isOk = false;
            data.put("okPhone", 0);
        }else{
            data.put("okPhone", 1);
        }

        Map<String, Object> resultMap = new HashMap<>();

        if(isOk == true) {   //如果没有重复信息，就修改
            if (userInfoDao.updateUserInfo(userID, userName, email, userPhone, password)) {
                resultMap = JsonUtil.toSuccessMap();
            } else {
                resultMap = JsonUtil.toFailMap();
            }
        }else{
            resultMap = JsonUtil.toSuccessMap();
        }
        resultMap.put("data", data);

        Gson gson = new Gson();
        String s = gson.toJson(resultMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }
//    3、修改店铺信息
    public void updateShopInfo(HttpServletRequest request, HttpServletResponse response) throws IOException{
        Integer shopID = Integer.parseInt(request.getParameter("shopID"));
        String businessType = request.getParameter("businessType");
        String ownerName = request.getParameter("ownerName");
        String businessName = request.getParameter("businessName");
        String businessAddress = request.getParameter("businessAddress");
        String businessPhone = request.getParameter("businessPhone");
        String bossPhone = request.getParameter("bossPhone");

        boolean isOk = true;
        Map<String,Object> data = new HashMap<>();
        if(shopInfoDao.queryByBusName(businessName,shopID) == true){
            isOk = false;
            data.put("busNameOk", 0);
        }else{
            data.put("busNameOk", 1);
        }
        if(shopInfoDao.queryByBusPhone(businessPhone,shopID) == true){
            isOk = false;
            data.put("busPhoneOk", 0);
        }else{
            data.put("busPhoneOk", 1);
        }
        if(shopInfoDao.queryByBossPhone(bossPhone,shopID) == true){
            isOk = false;
            data.put("bossPhoneOk", 0);
        }else {
            data.put("bossPhoneOk", 1);
        }

        Map<String, Object> resultMap = new HashMap<>();

        if(isOk == true) {   //如果没有重复信息，就修改
            if (shopInfoDao.updateShopInfo(shopID,businessType,ownerName,businessName,businessAddress,businessPhone,bossPhone)) {
                resultMap = JsonUtil.toSuccessMap();
                resultMap.put("data", data);
            } else {
                Map<String, Object> failMap = new HashMap<>();
                failMap.put("code",500);
                failMap.put("message","您输入的店铺类型名不存在！");
                resultMap =  failMap;
            }
        }else{
            resultMap = JsonUtil.toSuccessMap();
            resultMap.put("data", data);
        }

        Gson gson = new Gson();
        String s = gson.toJson(resultMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }
}
