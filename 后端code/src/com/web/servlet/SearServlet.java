package com.web.servlet;

import com.web.bean.*;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/searServlet/*")
public class SearServlet extends BaseServlet{

    /**
     ** /farm1/searServlet/searOrderInfo
     */

    //1、获取所有订单信息
    public void searOrderInfo(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ArrayList<Object> orderInfoList = new ArrayList<>();
        List<OrderInfo> orderInfos = new ArrayList<>();
        orderInfos = orderInfoDao.getAll();
        for(int i = 0; i < orderInfos.size(); i++){
            HashMap<String, Object> map = new HashMap<>();
            map.put("orderID",orderInfos.get(i).getOrderID());
            map.put("quantity",orderInfos.get(i).getQuantity());
            map.put("unitPrice",orderInfos.get(i).getUnitPrice());
            map.put("orderMoney",orderInfos.get(i).getOrderMoney());
            map.put("geneTime",orderInfos.get(i).getGeneTime());
            map.put("productID",orderInfos.get(i).getProductID());
            map.put("orderStatus",orderInfos.get(i).getOrderStatus());
            map.put("receAddress",orderInfos.get(i).getAddressInfo());
            map.put("recePhone",orderInfos.get(i).getPhone());
            map.put("receName",orderInfos.get(i).getName());
            orderInfoList.add(map);
        }

        Map<String, Object> successMap = JsonUtil.toSuccessMap();
        successMap.put("data",orderInfoList);

        //转换为Json字符串
        Gson gson = new Gson();
        String s = gson.toJson(successMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }

    /**
     ** /farm1/searServlet/searCategoryInfo
     */
    //2、获取所有分类信息
    public void searCategoryInfo(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ArrayList<Object> categoryInfoList = new ArrayList<>();
        List<Category> categories = new ArrayList<>();
        categories = categoryDao.getAll();
        for(int i = 0; i < categories.size(); i++){
            HashMap<String, Object> map = new HashMap<>();
            map.put("categoryID",categories.get(i).getCategoryID());
            map.put("categoryName",categories.get(i).getCategoryName());
            categoryInfoList.add(map);
        }
        Map<String, Object> successMap = JsonUtil.toSuccessMap();
        successMap.put("data",categoryInfoList);

        //转换为Json字符串
        Gson gson = new Gson();
        String s = gson.toJson(successMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }
    /**
     ** /farm1/searServlet/searProductInfo
     */
    //3、获取产品信息
    public void searProductInfo(HttpServletRequest request, HttpServletResponse response) throws IOException {

        int type = Integer.parseInt(request.getParameter("type"));

        ArrayList<Object> productInfoList = new ArrayList<>();
        List<ProductInfo> productInfos = new ArrayList<>();
        productInfos = productInfoDao.getAll();

        if(type == 1){
            for(int i = 0; i < 20; i++){
                HashMap<String, Object> map = new HashMap<>();
                map.put("productID",productInfos.get(i).getProductID());
                map.put("productName",productInfos.get(i).getProductName());
                map.put("title",productInfos.get(i).getTitle());
                map.put("proImg",productInfos.get(i).getPictureaddress());
                map.put("unitPrice",productInfos.get(i).getUnitPrice());
                map.put("stock",productInfos.get(i).getStock());
                map.put("updateDate",productInfos.get(i).getUpdateDate());
                map.put("launchDate",productInfos.get(i).getLaunchDate());
                map.put("categoryName",productInfos.get(i).getCategoryName());
                map.put("specification",productInfos.get(i).getSpecification());
                map.put("userID",productInfos.get(i).getUserID());
                map.put("userPhone",productInfos.get(i).getUserPhone());
                productInfoList.add(map);
            }
        }
        if(type == 2){
            for(int i = 20; i < productInfos.size(); i++){
                HashMap<String, Object> map = new HashMap<>();
                map.put("productID",productInfos.get(i).getProductID());
                map.put("productName",productInfos.get(i).getProductName());
                map.put("title",productInfos.get(i).getTitle());
                map.put("proImg",productInfos.get(i).getPictureaddress());
                map.put("unitPrice",productInfos.get(i).getUnitPrice());
                map.put("stock",productInfos.get(i).getStock());
                map.put("updateDate",productInfos.get(i).getUpdateDate());
                map.put("launchDate",productInfos.get(i).getLaunchDate());
                map.put("categoryName",productInfos.get(i).getCategoryName());
                map.put("specification",productInfos.get(i).getSpecification());
                map.put("userID",productInfos.get(i).getUserID());
                map.put("userPhone",productInfos.get(i).getUserPhone());
                productInfoList.add(map);
            }
        }

        Map<String, Object> successMap = JsonUtil.toSuccessMap();
        successMap.put("data",productInfoList);

        //转换为Json字符串
        Gson gson = new Gson();
        String s = gson.toJson(successMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }

    /**
     ** /farm1/searServlet/searUserInfo
     */
    //4、获取所有用户信息
    public void searUserInfo(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ArrayList<Object> userInfoList = new ArrayList<>();
        List<UserInfo> userInfos = new ArrayList<>();
        userInfos = userInfoDao.getAll();
        for(int i = 0; i < userInfos.size(); i++){
            HashMap<String, Object> map = new HashMap<>();
            map.put("userID",userInfos.get(i).getUserID());
            map.put("userName",userInfos.get(i).getUserName());
            map.put("email",userInfos.get(i).getEmail());
            map.put("userPhone",userInfos.get(i).getUserPhone());
            map.put("password",userInfos.get(i).getPassword());
            userInfoList.add(map);
        }
        Map<String, Object> successMap = JsonUtil.toSuccessMap();
        successMap.put("data",userInfoList);

        //转换为Json字符串
        Gson gson = new Gson();
        String s = gson.toJson(successMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }

    /**
     ** /farm1/searServlet/searShopInfo
     */
    //5、获取所有店铺信息
    public void searShopInfo(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ArrayList<Object> shopInfoList = new ArrayList<>();
        List<ShopInfo> shopInfos = new ArrayList<>();
        shopInfos = shopInfoDao.getAll();
        for(int i = 0; i < shopInfos.size(); i++){
            HashMap<String, Object> map = new HashMap<>();
            map.put("shopID",shopInfos.get(i).getUserID());
            map.put("businessType",shopInfos.get(i).getCategoryName());
            map.put("ownerName",shopInfos.get(i).getOwnerName());
            map.put("businessName",shopInfos.get(i).getBusinessName());
            map.put("businessAddress",shopInfos.get(i).getBusinessAddress());
            map.put("businessPhone",shopInfos.get(i).getBusinessphone());
            map.put("bossPhone",shopInfos.get(i).getUserPhone());
            shopInfoList.add(map);
        }
        Map<String, Object> successMap = JsonUtil.toSuccessMap();
        successMap.put("data",shopInfoList);

        //转换为Json字符串
        Gson gson = new Gson();
        String s = gson.toJson(successMap);
        PrintWriter out = response.getWriter();
        System.out.println(s);
        out.write(s);
        out.flush();
        out.close();
    }
}
