package com.web.dao;
import com.web.bean.*;
import com.web.dao.*;
import com.web.util.SqlUtil;

import java.util.List;

public class ShopInfoDao {
    public List<ShopInfo> getAll(){
        String sql = "select * from shopInfo";
        List<ShopInfo> shopInfos = SqlUtil.queryList(ShopInfo.class, sql);
        return shopInfos;
    }

    //删除指定的 店铺信息
    public boolean deleShopInfo(Integer shopID){
        String call = "{? = call shop_del(?)}";
        if(SqlUtil.updateallPro(call, shopID) != false){
            return true;
        }else{
            return false;
        }
    }
    // 修改指定的店铺信息
    public boolean updateShopInfo(Integer shopID, String cateName, String ownerName, String busName, String busAddress, String busPhone, String userPhone){
        String call = "{? = call shop_update(?,?,?,?,?,?,?)}";
        if(SqlUtil.updateallPro(call, shopID, cateName,ownerName, busName, busAddress, busPhone, userPhone) != false){
            return true;
        }else{
            return false;
        }
    }

    // 通过店铺名来查找店铺
    public  boolean queryByBusName(String busName, Integer shopID){
        String sql = "select * from shopInfo where businessName = ? and userID != ?";
        if(SqlUtil.query(ShopInfo.class, sql, busName, shopID) != null){
            return true;
        }else{
            return false;
        }
    }
//    通过店铺联系电话来查找店铺
    public boolean queryByBusPhone(String busPhone, Integer shopID){
        String sql = "select * from shopInfo where businessphone = ? and userID != ?";
        if(SqlUtil.query(ShopInfo.class, sql, busPhone, shopID) != null){
            return true;
        }else{
            return false;
        }
    }
//    通过店主电话来查找店铺
    public  boolean queryByBossPhone(String bossPhone, Integer shopID){
        String sql = "select * from shopInfo where userPhone = ? and userID != ?";
        if(SqlUtil.query(ShopInfo.class, sql, bossPhone, shopID) != null){
            return true;
        }else{
            return false;
        }
    }
}
