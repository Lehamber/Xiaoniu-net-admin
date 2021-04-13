package com.web.util;

import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class DBUtil {
    public static Connection getConnection() throws Exception{
        InputStream is =DBUtil.class.getClassLoader().getResourceAsStream("com/web/util/jdbc.properties");
        Properties ps = new Properties();
        ps.load(is);

        String user=ps.getProperty("username");
        String password=ps.getProperty("password");
        String url=ps.getProperty("url");
        String driverClass=ps.getProperty("driverClassName");

        Class.forName(driverClass);  // 获取驱动

        // 获取连接 并 返回
        Connection conn= DriverManager.getConnection(url,user,password);
        return conn;
    }

    // 关闭连接资源
    public static void closeResource(Connection conn, Statement st){
        try{
            if(conn!=null){
                conn.close();
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        try {
            if(st!=null){
                st.close();
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
    }

    // 关闭连接资源
    public static void closeResource(Connection conn, Statement st, ResultSet rs){
        try{
            if(conn!=null){
                conn.close();
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        try {
            if(st!=null){
                st.close();
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        try {
            if(rs!=null){
                rs.close();
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
