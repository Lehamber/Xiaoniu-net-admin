package com.web.servlet;

import com.google.gson.Gson;
import com.web.bean.OrderInfo;
import com.web.util.JsonUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/delServlet/*")
public class DelServlet extends BaseServlet{

    //1、删除订单信息
    public void delOrderInfo(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Integer orderID = Integer.parseInt(request.getParameter("orderID"));
        boolean isSucc = orderInfoDao.deleOrderInfo(orderID);
        HashMap<String, Object> map = new HashMap<>();
        if(isSucc){
            map.put("confirm", 1);
        }else{
            map.put("confirm", 0);
        }
        Map<String, Object> successMap = JsonUtil.toSuccessMap();
        successMap.put("data",map);

        Gson gson = new Gson();
        String s = gson.toJson(successMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }

    //2、删除产品信息
    public void delProInfo(HttpServletRequest request, HttpServletResponse response) throws IOException{

        Integer productID = Integer.parseInt(request.getParameter("productID"));
        boolean isSucc = productInfoDao.deleProInfo(productID);
        Map<String, Object> data = new HashMap<>();
        if(isSucc){
            data.put("confirm", 1);
        }else{
            data.put("confirm", 0);
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

    //3、删除用户信息
    public void delUserInfo(HttpServletRequest request, HttpServletResponse response) throws IOException{

        Integer userID = Integer.parseInt(request.getParameter("userID"));
        boolean isSucc = userInfoDao.deleUserInfo(userID);
        Map<String, Object> data = new HashMap<>();
        if(isSucc){
            data.put("confirm", 1);
        }else{
            data.put("confirm", 0);
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
    //4、删除店铺信息
    public void delShopInfo(HttpServletRequest request, HttpServletResponse response) throws IOException{

        Integer shopID = Integer.parseInt(request.getParameter("shopID"));
        boolean isSucc = shopInfoDao.deleShopInfo(shopID);
        Map<String, Object> data = new HashMap<>();
        if(isSucc){
            data.put("confirm", 1);
        }else{
            data.put("confirm", 0);
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
}
