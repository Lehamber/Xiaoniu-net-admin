package com.web.dao;

import com.web.bean.OrderInfo;
import com.web.bean.ProductInfo;
import com.web.util.SqlUtil;

import java.util.List;

public class ProductInfoDao {
    public List<ProductInfo> getAll(){
        String sql = "select * from ProductInfo";
        List<ProductInfo> productInfos = SqlUtil.queryList(ProductInfo.class, sql);
        return productInfos;
    }

    //删除指定的 产品
    public boolean deleProInfo(Integer productID){
        String call = "{? = call pro_del(?)}";
        if(SqlUtil.updateallPro(call, productID) != false){
            return true;
        }else{
            return false;
        }
    }
}
