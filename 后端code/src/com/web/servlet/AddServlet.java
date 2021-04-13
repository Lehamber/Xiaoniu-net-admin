package com.web.servlet;

import com.google.gson.Gson;
import com.web.util.JsonUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/addServlet/*")
public class AddServlet extends BaseServlet{
    // 1、添加分类
    public void addCate(HttpServletRequest request, HttpServletResponse response) throws IOException{

        String cateName = request.getParameter("cateName");
        Map<String, Object> data = new HashMap<>();
        Map<String, Object> resultMap = new HashMap<>();

        if(categoryDao.queryByCateName(cateName) == true) {// 查到了
            data.put("confirm", 0);
            resultMap = JsonUtil.toSuccessMap();
            resultMap.put("data",data);
        }else{
            data.put("confirm", 1);
            if(categoryDao.addCate(cateName) == true){
                resultMap = JsonUtil.toSuccessMap();
                resultMap.put("data",data);
            }else {
                resultMap = JsonUtil.toFailMap();
            }
        }

        Gson gson = new Gson();
        String s = gson.toJson(resultMap);

        PrintWriter out = response.getWriter();
        out.write(s);
        System.out.println(s);
        out.flush();
        out.close();
    }
    // 2、添加用户
    public void addUser(HttpServletRequest request,HttpServletResponse response) throws IOException{

        String userName = request.getParameter("userName");
        String email = request.getParameter("email");
        String userPhone = request.getParameter("userPhone");
        String password = request.getParameter("password");

        boolean isOk = true;
        Map<String, Object> data = new HashMap<>();
        Map<String, Object> resultMap = new HashMap<>();
        if(userInfoDao.queryByUserName(userName) == true){
            data.put("nameOk", 0);
            isOk = false;
        }else{
            data.put("nameOk", 1);
        }
        if(userInfoDao.queryByEamil(email) == true){
            data.put("emailOk", 0);
            isOk = false;
        }else{
            data.put("emailOk",1);
        }
        if(userInfoDao.queryByPhone(userPhone) == true){
            data.put("phoneNumOk", 0);
            isOk = false;
        }else{
            data.put("phoneNumOk", 1);
        }


        if(isOk == true){// 若无重复信息
            // 添加用户
            if(userInfoDao.addUser(userName,email,userPhone,password)){
                resultMap = JsonUtil.toSuccessMap();
                resultMap.put("data", data);
            }else{
                resultMap = JsonUtil.toFailMap();
            }
        }else{
            resultMap = JsonUtil.toSuccessMap();
            resultMap.put("data", data);
        }

        Gson gson = new Gson();
        String s = gson.toJson(resultMap);
        PrintWriter out  = response.getWriter();
        out.write(s);
        System.out.println(s);
        out.flush();
        out.close();
    }
}
