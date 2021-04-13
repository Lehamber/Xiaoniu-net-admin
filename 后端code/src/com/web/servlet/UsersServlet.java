package com.web.servlet;


import com.web.dao.*;
import com.web.util.*;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/usersServlet/*")
public class UsersServlet extends BaseServlet{
    /**
     * /farm1/usersServlet/login
     */
    public void login(HttpServletRequest request, HttpServletResponse response) throws IOException{
        String account = request.getParameter("userID");
        String password = request.getParameter("password");

        Boolean userNameBool = userDAO.verifyByUserName(account,password);
        Boolean emailBool = userDAO.verifyByEmail(account,password);
        Boolean userPhoneBool = userDAO.verifyByUserPhone(account,password);

        //输出用来 测试
        System.out.println("userID = " + account + ", password = " + password);
        System.out.println("verifyByUserName = " +userNameBool+ "\n"
                +"verifyByEmail = " + emailBool + "\n"
                +"verifyByUserPhone = " + userPhoneBool + "\n");

        PrintWriter out = response.getWriter();
        Gson gson = new Gson();
        Map<String, Object> map1 = JsonUtil.toSuccessMap();
        Map<String, Object> map = new HashMap<>();

        if(userNameBool || emailBool || userPhoneBool){
            map.put("confirm",1);
            map.put("userName", account);
            map1.put("data",map);
            String s = gson.toJson(map1);
            out.write(s);
        }else{
            map.put("confirm",0);
            map1.put("data",map);
            String s1 = gson.toJson(map1);
            out.write(s1);
        }
        out.flush();
        out.close();
    }
}
