package com.web.dao;

import com.web.bean.OrderInfo;
import com.web.bean.Users;
import com.web.util.SqlUtil;

import java.util.List;

public class OrderInfoDao {

    public List<OrderInfo> getAll(){
        String sql = "select * from orderInfo";
        List<OrderInfo> orderInfos = SqlUtil.queryList(OrderInfo.class, sql);
        return orderInfos;
    }

    // 删除指定的 订单
    public boolean deleOrderInfo(int orderID){
        String call = "{? = call order_del(?)}";
        if(SqlUtil.updateallPro(call, orderID) != false){
            return true;
        }else{
            return false;
        }
    }

}
