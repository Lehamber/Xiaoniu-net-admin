//1.引入express
const { json } = require('express');
const express = require('express');
const querystring = require('querystring');
//2.创建应用对象
const app = express();


// 获取所有订单的信息
app.get('/farm1/searServlet/searOrderInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": [{
                "orderID": "123",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1123123",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            },
            {
                "orderID": "1",
                "geneTime": "2020-05-03 00:00:00.000",
                "quantity": "500",
                "unitPrice": "27",
                "orderMoney": "2000.0",
                "geneTime": "2020-05-03 00:00:00.000",
                "productID": "2",
                "orderStatus": "待处理",
                "receAddress": "河南省郑州市中原区",
                "recePhone": "13993247825",
                "receName": "张derder"
            }
        ]
    };

    response.send(JSON.stringify(data));
});
// 获取所有分类的信息
app.get('/farm1/searServlet/searCategoryInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": [{
                "categoryID": "2",
                "categoryName": "水df果"
            },
            {
                "categoryID": "3",
                "categoryName": "水果"
            },
            {
                "categoryID": "4",
                "categoryName": "水果"
            },
            {
                "categoryID": "1",
                "categoryName": "水果"
            },
            {
                "categoryID": "1",
                "categoryName": "水果"
            }
        ]
    };
    response.send(JSON.stringify(data));
});
// 获取所有产品的信息
app.get('/farm1/searServlet/searProductInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": [{
                "productID": "123",
                "productName": "红薯123123",
                "title": "糖化大果烟123薯25蜜薯红薯糖份高",
                "proImg": "img/1.jpg",
                "unitPrice": "89",
                "stock": "889",
                "updateDate": "2020-05-03 00:00:00.000",
                "launchDate": "2019-01-01 00:00:00.000",
                "categoryName": "蔬菜",
                "specification": "规格",
                "userID": "1",
                "userPhone": "13993247834"
            },
            {
                "productID": "1",
                "productName": "红薯",
                "title": "糖化大果烟薯25蜜薯红薯糖份高",
                "proImg": "img/1.jpg",
                "unitPrice": "89",
                "stock": "889",
                "updateDate": "2020-05-03 00:00:00.000",
                "launchDate": "2019-01-01 00:00:00.000",
                "categoryName": "蔬菜",
                "specification": "规格",
                "userID": "1",
                "userPhone": "13993247834"
            },
            {
                "productID": "1",
                "productName": "红薯",
                "title": "糖化大果烟薯25蜜薯红薯糖份高",
                "proImg": "img/1.jpg",
                "unitPrice": "89",
                "stock": "889",
                "updateDate": "2020-05-03 00:00:00.000",
                "launchDate": "2019-01-01 00:00:00.000",
                "categoryName": "蔬菜",
                "specification": "规格",
                "userID": "1",
                "userPhone": "13993247834"
            },
            {
                "productID": "1",
                "productName": "红薯",
                "title": "糖化大果烟薯25蜜薯红薯糖份高",
                "proImg": "img/1.jpg",
                "unitPrice": "89",
                "stock": "889",
                "updateDate": "2020-05-03 00:00:00.000",
                "launchDate": "2019-01-01 00:00:00.000",
                "categoryName": "蔬菜",
                "specification": "规格",
                "userID": "1",
                "userPhone": "13993247834"
            },
            {
                "productID": "1",
                "productName": "红薯",
                "title": "糖化大果烟薯25蜜薯红薯糖份高",
                "proImg": "img/1.jpg",
                "unitPrice": "89",
                "stock": "889",
                "updateDate": "2020-05-03 00:00:00.000",
                "launchDate": "2019-01-01 00:00:00.000",
                "categoryName": "蔬菜",
                "specification": "规格",
                "userID": "1",
                "userPhone": "13993247834"
            },
            {
                "productID": "1",
                "productName": "红薯",
                "title": "糖化大果烟薯25蜜薯红薯糖份高",
                "proImg": "img/1.jpg",
                "unitPrice": "89",
                "stock": "889",
                "updateDate": "2020-05-03 00:00:00.000",
                "launchDate": "2019-01-01 00:00:00.000",
                "categoryName": "蔬菜",
                "specification": "规格",
                "userID": "1",
                "userPhone": "13993247834"
            }
        ]
    };

    response.send(JSON.stringify(data));
});
// 获取所有用户的信息
app.get('/farm1/searServlet/searUserInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": [{
                "userID": "123",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            },
            {
                "userID": "1",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            },
            {
                "userID": "1",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            },
            {
                "userID": "1",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            },
            {
                "userID": "1",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            },
            {
                "userID": "1",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            },
            {
                "userID": "1",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            },
            {
                "userID": "1",
                "userName": "水果",
                "email": "1352988322@qq.com",
                "userPhone": "15268915774",
                "password": "admin1121@00"
            }
        ]
    };

    response.send(JSON.stringify(data));
});
// 获取所有店铺的信息
app.get('/farm1/searServlet/searShopInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": [{
                "shopID": "123",
                "businessType": "asd水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            },
            {
                "shopID": "1",
                "businessType": "水果",
                "ownerName": "张三三",
                "businessName": "蔬菜批发市场",
                "businessAddress": "云南省红河自治州建水县",
                "businessPhone": "17864532345",
                "bossPhone": "18987482942"
            }
        ]
    };

    response.send(JSON.stringify(data));
});
// 删除订单信息
app.get('/farm1/delServlet/delOrderInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "confirm": 1
        }
    };

    response.send(JSON.stringify(data));
});
// 删除产品信息
app.get('/farm1/delServlet/delProInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "confirm": 1
        }
    };

    response.send(JSON.stringify(data));
});
// 删除用户信息
app.get('/farm1/delServlet/delUserInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "confirm": 1
        }
    };

    response.send(JSON.stringify(data));
});
// 删除店铺信息
app.get('/farm1/deServlet/delShopInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "confirm": 1
        }
    };

    response.send(JSON.stringify(data));
});
// 修改分类信息
app.post('/farm1/updateServlet/updateCateInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "confirm": 0
        }
    };

    response.send(JSON.stringify(data));
});
// 修改用户信息
app.post('/farm1/updateServlet/updateUserInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "okName": 1,
            "okEmail": 1,
            "okPhone": 1
        }
    }

    response.send(JSON.stringify(data));
});
// 修改店铺信息
app.post('/farm1/updateServlet/updateShopInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "busNameOk": 1,
            "busPhoneOk": 1,
            "bossPhoneOk": 1
        }
    };

    response.send(JSON.stringify(data));
});

// 添加分类信息
app.post('/farm1/addServlet/addCateInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "confirm": 0
        }
    };

    response.send(JSON.stringify(data));
});

// 添加用户信息
app.post('/farm1/addServlet/addUserInfo', (request, response) => {
    // 设置响应头  目的：设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        "code": 200,
        "message": "处理成功",
        "data": {
            "nameOk": 1,
            "emailOk": 1,
            "phoneNumOk": 1
        }
    };

    response.send(JSON.stringify(data));
});



//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000 端口监听中......");
});