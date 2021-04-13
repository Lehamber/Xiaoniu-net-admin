 $(function() {
     // 加载订单信息
     $('.left-slide #order .c-list').on('click', function() {
         let url = window.serverIP;
         url += window.searchUrl.gain_order_info;
         // 创建新表格 
         let = oTable = $(`
           <table class="real-table table table-striped table-bordered table-hover table-condensed">
               <tr class="success">
                   <th>订单编号</th>
                   <th>产品数量</th>
                   <th>产品单价</th>
                   <th>订单总金额</th>
                   <th>订单生成时间</th>
                   <th>产品编号</th>
                   <th>订单状态</th>
                   <th>收货地址</th>
                   <th>收货人电话</th>
                   <th>收货人姓名</th>
                   <th>操作</th>
               </tr>
           </table>
        `);
         // 发送请求
         window.sendAjax('get', url, "", success);

         function success(aaa) {
             if (aaa.code == 200) {
                 for (var i = 0; i < aaa.data.length; i++) {
                     let oTr = $('<tr></tr>');
                     oTr.append($(`
                       <td>${aaa.data[i].orderID}</td>
                       <td>${aaa.data[i].quantity}</td>
                       <td>${aaa.data[i].unitPrice}</td>
                       <td>${aaa.data[i].orderMoney}</td>
                       <td>${aaa.data[i].geneTime}</td>
                       <td>${aaa.data[i].productID}</td>
                       <td>${aaa.data[i].orderStatus}</td>
                       <td>${aaa.data[i].receAddress}</td>
                       <td>${aaa.data[i].recePhone}</td>
                       <td>${aaa.data[i].receName}</td>
                   `));
                     let oTr_btn = $(`
                       <td class="control">
                           <button type="button" class="del btn btn-danger btn-xs" data-toggle="modal">
                               <span class="glyphicon glyphicon-remove"></span> 删除
                           </button>
                       </td>
                   `);
                     oTr.append(oTr_btn);
                     oTable.append(oTr);
                 }

                 // 删除旧表格
                 $('.order-list .real-table').remove();
                 $('.order-list .r-table').prepend(oTable);
             } else {
                 alert(aaa.message);
             }
         };
     });
     //  加载分类信息
     $('.left-slide #supply .c-list:first-child').on('click', function() {
         let url = window.serverIP;
         url += window.searchUrl.gain_category_info;
         // 创建新表格 
         let = oTable = $(`
                <table class="real-table table table-striped table-bordered table-hover table-condensed">
                    <tr class="success">
                        <th>分类编号</th>
                        <th>分类名称</th>
                        <th>操作</th>
                    </tr>
                </table>
             `);

         window.sendAjax('get', url, "", success);

         function success(aaa) {
             if (aaa.code == 200) {
                 for (var i = 0; i < aaa.data.length; i++) {
                     let oTr = $('<tr></tr>');
                     oTr.append($(`
                            <td>${aaa.data[i].categoryID}</td>
                            <td>${aaa.data[i].categoryName}</td>
                        `));
                     let oTr_btn = $(`
                            <td class="control">
                                <button type="button" class="update btn btn-info btn-xs  " data-toggle="modal">
                                    <span class="glyphicon glyphicon-edit"></span> 编辑
                                </button>
                            </td>
                          `);
                     oTr.append(oTr_btn);
                     oTable.append(oTr);
                 }
                 // 删除旧表格
                 $('.class-list .real-table').remove();
                 $('.class-list .r-table').prepend(oTable);
             } else {
                 alert(aaa.message);
             }
         };
     });
     //  加载产品信息
     $('.left-slide #supply .c-list:last-child').on('click', function() {
         let url = window.serverIP;
         url += window.searchUrl.gain_product_info;
         // 创建新表格 
         let = oTable = $(`
           <table class="real-table table table-striped table-bordered table-hover table-condensed">
               <tr class="success">
                   <th>产品编号</th>
                   <th>产品名称</th>
                   <th>产品图片</th>
                   <th>标题</th>
                   <th>单价</th>
                   <th>库存</th>
                   <th>更新日期</th>
                   <th>上架日期</th>
                   <th>分类名</th>
                   <th>规格</th>
                   <th>店主编号</th>
                   <th>店主联系电话</th>
                   <th>操作</th>
               </tr>
           </table>
        `);
         let data = {
             type: 1
         };
         window.sendAjax('get', url, data, success);

         function success(aaa) {
             if (aaa.code == 200) {

                 for (var i = 0; i < aaa.data.length; i++) {
                     let oTr = $('<tr></tr>');
                     oTr.append($(`
                       <td>${aaa.data[i].productID}</td>
                       <td>${aaa.data[i].productName}</td>
                       <td><div class="pro-img"><img src="${window.serverIP+"/farm1/"+aaa.data[i].proImg}"></div></td>
                       <td>${aaa.data[i].title}</td>
                       <td>${aaa.data[i].unitPrice}</td>
                       <td>${aaa.data[i].stock}</td>
                       <td>${aaa.data[i].updateDate}</td>
                       <td>${aaa.data[i].launchDate}</td>
                       <td>${aaa.data[i].categoryName}</td>
                       <td>${aaa.data[i].specification}</td>
                       <td>${aaa.data[i].userID}</td>
                       <td>${aaa.data[i].userPhone}</td>
                   `));
                     let oTr_btn = $(`
                       <td class="control">
                           <button type="button" class="detail btn btn-warning btn-xs" data-toggle="modal">
                               <span class="glyphicon glyphicon-magnet"></span> 详情
                           </button>
                           <button type="button" class="del btn btn-danger btn-xs" data-toggle="modal">
                               <span class="glyphicon glyphicon-remove"></span> 删除
                           </button>
                       </td>
                     `);
                     oTr.append(oTr_btn);
                     oTable.append(oTr);
                 }
                 // 删除旧表格
                 $('.pro-list .real-table').remove();
                 $('.pro-list .r-table').prepend(oTable);

                 //  加载剩余的产品
                 data.type = 2;
                 window.sendAjax('get', url, data, function(aaa) {
                     if (aaa.code == 200) {
                         for (var i = 0; i < aaa.data.length; i++) {
                             let oTr = $('<tr></tr>');
                             oTr.append($(`
                              <td>${aaa.data[i].productID}</td>
                              <td>${aaa.data[i].productName}</td>
                              <td><div class="pro-img"><img src="${window.serverIP+"/farm1/"+aaa.data[i].proImg}"></div></td>
                              <td>${aaa.data[i].title}</td>
                              <td>${aaa.data[i].unitPrice}</td>
                              <td>${aaa.data[i].stock}</td>
                              <td>${aaa.data[i].updateDate}</td>
                              <td>${aaa.data[i].launchDate}</td>
                              <td>${aaa.data[i].categoryName}</td>
                              <td>${aaa.data[i].specification}</td>
                              <td>${aaa.data[i].userID}</td>
                              <td>${aaa.data[i].userPhone}</td>
                          `));
                             let oTr_btn = $(`
                              <td class="control">
                                  <button type="button" class="btn btn-warning btn-xs" data-toggle="modal">
                                      <span class="glyphicon glyphicon-magnet"></span> 详情
                                  </button>
                                  <button type="button" class="del btn btn-danger btn-xs" data-toggle="modal">
                                       <span class="glyphicon glyphicon-remove"></span> 删除
                                  </button>
                              </td>
                            `);
                             oTr.append(oTr_btn);
                             $('.pro-list .real-table').append(oTr);

                             // 设置所有图片自适应格式
                             let aImg = $('.pro-list .r-table img');
                             for (var i = 0; i < aImg.length; i++) {;
                                 (function(i) {
                                     $('<img>').attr('src', aImg.eq(i).attr('src')).on('load', function() {
                                         if (this.width >= this.height) {
                                             aImg.eq(i).css({
                                                 "height": "100%",
                                                 "width": "auto"
                                             });
                                         } else {
                                             aImg.eq(i).css({
                                                 "height": "auto",
                                                 "width": "100%"
                                             });
                                         }
                                     });
                                 })(i);
                             }
                         }
                     } else {
                         alert(aaa.message);
                     }
                 });

             } else {
                 alert(aaa.message);
             }
         };
     });
     //  加载用户信息
     $('.left-slide #user .c-list').on('click', function() {
         let url = window.serverIP;
         url += window.searchUrl.gain_user_info;
         // 创建新表格 
         let = oTable = $(`
         <table class="real-table table table-striped table-bordered table-hover table-condensed">
           <tr class="success">
               <th>用户编号</th>
               <th>用户名</th>
               <th>用户邮箱</th>
               <th>联系电话</th>
               <th>密码</th>
               <th>操作</th>
           </tr>
         </table>
      `);

         // 发送请求
         window.sendAjax('get', url, "", success);

         function success(aaa) {
             if (aaa.code == 200) {
                 for (var i = 0; i < aaa.data.length; i++) {
                     let oTr = $('<tr></tr>');
                     oTr.append($(`
                       <td>${aaa.data[i].userID}</td>
                       <td>${aaa.data[i].userName}</td>
                       <td>${aaa.data[i].email}</td>
                       <td>${aaa.data[i].userPhone}</td>
                       <td>${aaa.data[i].password}</td>
                   `));
                     let oTr_btn = $(`
                       <td class="control">
                           <button type="button" class="update btn btn-info btn-xs  " data-toggle="modal">
                               <span class="glyphicon glyphicon-edit"></span> 编辑
                           </button>
                           <button type="button" class="del btn btn-danger btn-xs" data-toggle="modal">
                               <span class="glyphicon glyphicon-remove"></span> 删除
                           </button>
                       </td>
                   `);
                     oTr.append(oTr_btn);
                     oTable.append(oTr);
                 }
                 // 删除旧表格
                 $('.user-list .real-table').remove();
                 $('.user-list .r-table').prepend(oTable);
             } else {
                 alert(aaa.message);
             }
         }
     });
     //  加载店铺信息
     $('.left-slide #store .c-list').on('click', function() {
         let url = window.serverIP;
         url += window.searchUrl.gain_shop_info;
         // 创建新表格 
         let = oTable = $(`
         <table class="real-table table table-striped table-bordered table-hover table-condensed">
           <tr class="success">
               <th>店铺编号</th>
               <th>店铺类型名</th>
               <th>店主真实姓名</th>
               <th>店铺名</th>
               <th>店铺地址</th>
               <th>店铺联系电话</th>
               <th>店主联系电话</th>
               <th>操作</th>
           </tr>
         </table>
      `);

         // 发送请求
         window.sendAjax('get', url, "", success);

         function success(aaa) {
             if (aaa.code == 200) {
                 for (var i = 0; i < aaa.data.length; i++) {
                     let oTr = $('<tr></tr>');
                     oTr.append($(`
                       <td>${aaa.data[i].shopID}</td>
                       <td>${aaa.data[i].businessType}</td>
                       <td>${aaa.data[i].ownerName}</td>
                       <td>${aaa.data[i].businessName}</td>
                       <td>${aaa.data[i].businessAddress}</td>
                       <td>${aaa.data[i].businessPhone}</td>
                       <td>${aaa.data[i].bossPhone}</td>
                   `));
                     let oTr_btn = $(`
                       <td class="control">
                           <button type="button" class="update btn btn-info btn-xs  " data-toggle="modal">
                               <span class="glyphicon glyphicon-edit"></span> 编辑
                           </button>
                           <button type="button" class="del btn btn-danger btn-xs" data-toggle="modal">
                               <span class="glyphicon glyphicon-remove"></span> 删除
                           </button>
                       </td>
                    `);
                     oTr.append(oTr_btn);
                     oTable.append(oTr);
                 }
                 // 删除旧表格
                 $('.shop-list .real-table').remove();
                 $('.shop-list .r-table').prepend(oTable);
             } else {
                 alert(aaa.message);
             }
         }
     });

 });