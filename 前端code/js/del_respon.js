$(function() {

    // 删除订单
    $('.order-list .r-table').on('click', '.control .del', function() {

        let sure_del = confirm("确定要删除与此订单相关的所有数据?");
        if (sure_del == false) {
            return;
        }

        let orderID = $(this).parent().parent().find('td').eq(0).text();
        let oTr = $(this).parent().parent();
        let url = window.serverIP + window.searchUrl.del_order_info;
        let data = {
            orderID: orderID
        };
        console.log($(this).parent().parent());
        window.sendAjax('get', url, data, success);

        function success(aaa) {
            if (aaa.code == 200) {
                if (aaa.data.confirm == 1) {
                    oTr.remove();
                    // $(this).parent().parent().remove();
                } else {
                    alert("删除订单失败请, 稍后重试");
                }
            } else {
                alert(aaa.message);
            }
        };
    });

    // 删除产品
    $('.pro-list .r-table').on('click', '.control .del', function() {

        let sure_del = confirm("确定要删除与此产品相关的所有数据?");
        if (sure_del == false) {
            return;
        }

        let productID = $(this).parent().parent().find('td').eq(0).text();
        let oTr = $(this).parent().parent();
        let url = window.serverIP + window.searchUrl.del_pro_info;
        let data = {
            productID: productID
        };

        window.sendAjax('get', url, data, function(aaa) {
            if (aaa.code == 200) {
                if (aaa.data.confirm == 1) {
                    oTr.remove();
                } else {
                    alert("删除失败, 稍后重试");
                }
            } else {
                alert(aaa.message);
            }
        });
    });

    // 删除用户
    $('.user-list .r-table').on('click', '.control .del', function() {

        let sure_del = confirm("确定要删除与此用户相关的所有数据?");
        if (sure_del == false) {
            return;
        }

        let userID = $(this).parent().parent().find('td').eq(0).text();
        let oTr = $(this).parent().parent(); // 要删除tr
        let url = window.serverIP + window.searchUrl.del_user_info;
        let data = {
            userID: userID
        };

        window.sendAjax('get', url, data, function(aaa) {
            if (aaa.code == 200) {
                if (aaa.data.confirm == 1) {
                    oTr.remove();
                } else {
                    alert("删除失败, 稍后重试");
                }
            } else {
                alert(aaa.message);
            }
        });
    });
    // 删除店铺
    $('.shop-list .r-table').on('click', '.control .del', function() {

        let sure_del = confirm("确定要删除此店铺 和 所有店铺产品相关的数据吗?");
        if (sure_del == false) {
            return;
        }
        let oTr = $(this).parent().parent(); // 要删除tr
        let shopID = $(this).parent().parent().find('td').eq(0).text();

        let url = window.serverIP + window.searchUrl.del_shop_info;
        let data = {
            shopID: shopID
        };

        window.sendAjax('get', url, data, function(aaa) {
            if (aaa.code == 200) {
                if (aaa.data.confirm == 1) {
                    oTr.remove();
                } else {
                    alert("删除失败, 稍后重试");
                }
            } else {
                alert(aaa.message);
            }
        });
    });
});