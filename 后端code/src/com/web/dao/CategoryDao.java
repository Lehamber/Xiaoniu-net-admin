package com.web.dao;

import com.web.bean.*;
import com.web.util.SqlUtil;

import java.util.List;

public class CategoryDao {
    public List<Category> getAll(){
        String sql = "select * from Category";
        List<Category> categories = SqlUtil.queryList(Category.class, sql);
        return categories;
    }
    //更改分类信息
    public boolean updateCateInfo(Integer cateID, String cateName){
        String call = "{? = call cate_update(?,?)}";
        if(SqlUtil.updateallPro(call,cateID,cateName) != false){
            return true;
        }else{
            return false;
        }
    }
    //增加分类
    public  boolean addCate(String cateName){
        String call = "{? = call cate_add(?)}";
        if(SqlUtil.updateallPro(call, cateName) != false){
            return true;
        }else{
            return false;
        }
    }
    //增加分类 查重
    public boolean queryByCateName(String cateName){
        String sql = "select * from Category where CategoryName = ?";
        if(SqlUtil.query(Category.class, sql, cateName) != null){
            return true;
        }else{
            return false;
        }
    }
}
