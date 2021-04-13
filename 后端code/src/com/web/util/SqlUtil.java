package com.web.util;

import java.lang.reflect.Field;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SqlUtil {

    //查询
    public static <T> List<T> queryList(Class<T> clazz, String sql, Object ...args){
        //获取连接
        Connection conn =null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = DBUtil.getConnection();
            //sql注入
            ps = conn.prepareStatement(sql);
            //填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1, args[i]);
            }
            //执行查询获取结果集
            rs = ps.executeQuery();
            //获取结果集的元数据
            ResultSetMetaData rsmd = rs.getMetaData();
            //通过ResultSetMetaData获取结果集的列数
            int columnCount = rsmd.getColumnCount();
            //创建集合对象
            ArrayList<T> list = new ArrayList<>();
            while (rs.next()){
                T t = clazz.newInstance();
                //处理结果集的每一列,给t对象指定属性赋值
                for (int i = 0; i <columnCount; i++) {
                    //获取列值
                    Object columnValue = rs.getObject(i+1);
                    //获取每个列的列名
                    String columnName = rsmd.getColumnLabel(i+1);
                    //获取列名后,反射类改变属性值
                    Field field = clazz.getDeclaredField(columnName);
                    field.setAccessible(true);
                    field.set(t,columnValue);
                }
                list.add(t);
            }
            return list;
        }catch  (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtil.closeResource(conn,ps,rs);
        }
        return null;
    }

    //T是类的类型
    public static <T>T query(Class<T> clazz, String sql, Object ...args){
        //获取连接
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try{
            conn = DBUtil.getConnection();
            ps = conn.prepareStatement(sql);
            // 填充站位符
            for(int i = 0; i < args.length; i++){
                //置地i+1个?（占位符）的值为 args[i]
                ps.setObject(i+1, args[i]);
            }
            // 执行查询获取结果集
            rs = ps.executeQuery();
            // 获取结果集的元数--里面存有 结果集的 结构信息，列数 行数等信息
            ResultSetMetaData rsmd = rs.getMetaData();
            // 获取结果集的列数
            int columnCount = rsmd.getColumnCount();
            while (rs.next()){
                // 创建一个 传进来类型的实例
                T t = clazz.newInstance();
                for(int i = 0; i < columnCount; i++){
                    //获取第 i+1 列的列值
                    Object columnValue = rs.getObject(i+1);
                    //获取第 i+1 列的列名
                    String colmnName = rsmd.getColumnName(i+1);
                    //获取列名后，反射类改变属性值
                    Field field = clazz.getDeclaredField(colmnName);
                    // 解除限制，暴力反射，改变私有属性的值
                    field.setAccessible(true);
                    // 将实例对象t，属性名为 colmnName的属性的值，设为columnValue
                    field.set(t,columnValue);
                    // 这里直接调用T类的set方法来设置不行嘛？不行因为我们这里不知道
                    // colmnName的值到底是什么，也不知道T类有几个属性
                }
                return t; // 这里不太明白
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            // 使用完毕后 关闭结果集 关闭 statement对象 关闭 连接
            DBUtil.closeResource(conn, ps, rs);
        }
        return null;
    }
    //通用的增删改代码
    public static boolean updateall(String sql, Object ...args){
        //1、获取连接
        Connection conn = null;
        PreparedStatement ps = null;
        boolean b = false;
        try {
            conn = DBUtil.getConnection();
            //2、预编译SQL语句
            ps = conn.prepareStatement(sql);
            //3、填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1,args[i]);
            }
            //4、执行
            if(ps.executeUpdate()>0){
                b=true;
            }
            System.out.println("b1 = " + b);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            //5、关闭
            DBUtil.closeResource(conn,ps);
        }
        return b;
    }

    //通用的使用存储过程的 增删改方法
    public static boolean updateallPro(String call, Object ...args){
        //1、获取连接
        Connection conn = null;
        CallableStatement cstmt = null;
        boolean b = false;
        try {
            conn = DBUtil.getConnection();
            //cstmt = conn.prepareCall("{? = call user_add(?,?,?,?)}");
            cstmt = conn.prepareCall(call);

            // 注册设置返回值的类型
            cstmt.registerOutParameter(1, java.sql.Types.INTEGER);
            //3、填充占位符
            for (int i = 0; i < args.length; i++) {
                //这里使用object的话，就int object就可以增删该了
                cstmt.setObject(i+2,args[i]);
            }
            //4、执行
            cstmt.execute();
            int trueOrFalse = cstmt.getInt(1);
            if(trueOrFalse == 1){
                b = true;
            }else{
                b = false; // 存储过程执行出错了呗
            }
            System.out.println("b1 = " + b);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            //5、关闭
            DBUtil.closeResource(conn,cstmt);
        }
        return b;
    }
}
