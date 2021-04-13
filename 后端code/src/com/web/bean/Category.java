package com.web.bean;

import java.util.List;

public class Category {
    private String CategoryName;
    private int CategoryID;

    public Category() {
    }

    public Category(String categoryName, int categoryID) {
        CategoryName = categoryName;
        CategoryID = categoryID;
    }

    public void setCategoryName(String categoryName) {
        CategoryName = categoryName;
    }

    public void setCategoryID(int categoryID) {
        CategoryID = categoryID;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public int getCategoryID() {
        return CategoryID;
    }
}
