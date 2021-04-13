 $(function() {
     // 发送修改分类的请求
     $('.class-list .update-modal .makesure').on('click', function() {
         let value = $('#up-categoryName').val();
         //如果值为空, 则给出提示信息并终止事件
         if (value == '') {
             $('#up-categoryName').parent().find('p').css('display', 'none');
             $('#up-categoryName').parent().find('.isEmpty').css('display', 'table');
             return;
         }

         //如果格式不符合，则给出提示并终止事件
         let reg = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,8}$/);
         if (!reg.test(value)) {
             $('#up-categoryName').parent().find('p').css('display', 'none');
             $('#up-categoryName').parent().find('.format').css('display', 'table');
             return;
         }
         let categoryID = window.proCookie.getCookie('itemID');
         let url = window.serverIP + window.searchUrl.update_cate_info;
         let data = {
             categoryID: categoryID,
             categoryName: value
         }
         window.sendAjax('post', url, data, function(aaa) {
             if (aaa.code == 200) {
                 if (aaa.data.confirm == 1) {
                     $('.left-slide #supply .c-list:first-child').trigger('click');
                     $('.class-list .update-modal').modal('hide');
                 } else {
                     $('#up-categoryName').parent().find('p').css('display', 'none');
                     $('#up-categoryName').parent().find('.err').css('display', 'table');
                 }
             } else {
                 alert(aaa.message);
             }
         });
     });
     // 发送修改用户信息的请求
     $('.user-list .update-modal .makesure').on('click', function() {
         let userName = $('#up-userName').val();
         let email = $('#up-email').val();
         let userPhone = $('#up-userPhone').val();
         let password = $('#up-password').val();

         let nameReg = new RegExp(/^(?=.*([a-zA-z]|[\u4E00-\u9FA5\uf900-\ufa2d]))[\w\-\u4E00-\u9FA5\uf900-\ufa2d]{2,20}$/);
         let regEmail = new RegExp(/^[\w-\.]+@[\w-\.]+(\.[a-zA-Z0-9]+)+$/);
         let regPhone = new RegExp(/^[0-9]{11}$/);
         //  let rregPass = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_+-=?])[\S]{6,20}$/);
         let regPass = new RegExp(/^([0-9]|[a-z]|[A-Z]|[@#$%^&*_+-=?]){6,20}$/);
         let isEmpty = false;
         if (userName == '') {
             $('#up-userName').parent().find('p').css('display', 'none');
             $('#up-userName').parent().find('.inviteInfo').css('display', 'table');
             isEmpty = true;
         }
         if (email == '') {
             $('#up-email').parent().find('p').css('display', 'none');
             $('#up-email').parent().find('.inviteInfo').css('display', 'table');
             isEmpty = true;
         }
         if (userPhone == '') {
             $('#up-userPhone').parent().find('p').css('display', 'none');
             $('#up-userPhone').parent().find('.inviteInfo').css('display', 'table');
             isEmpty = true;
         }
         if (password == '') {
             $('#up-password').parent().find('p').css('display', 'none');
             $('#up-password').parent().find('.inviteInfo').css('display', 'table');
             isEmpty = true;
         }

         // 如果存在没有填写的信息 则终止事件
         if (isEmpty == true) {
             return;
         }

         //  判断格式是否都符合要求
         let formatIsOk = true;
         if (!nameReg.test(userName)) {
             formatIsOk = false;
             $('#up-userName').parent().find('p').css('display', 'none');
             $('#up-userName').parent().find('.formatInfo').css('display', 'table');

         }
         if (!regEmail.test(email)) {
             formatIsOk = false;
             $('#up-email').parent().find('p').css('display', 'none');
             $('#up-email').parent().find('.formatInfo').css('display', 'table');

         }
         if (!regPhone.test(userPhone)) {
             formatIsOk = false;
             $('#up-userPhone').parent().find('p').css('display', 'none');
             $('#up-userPhone').parent().find('.formatInfo').css('display', 'table');
         }
         if (!regPass.test(password)) {
             formatIsOk = false;
             $('#up-password').parent().find('p').css('display', 'none');
             $('#up-password').parent().find('.formatInfo').css('display', 'table');
         }

         // 又不符合格式的 则终止事件
         if (formatIsOk == false) {
             return;
         }

         let userID = window.proCookie.getCookie('itemID');
         let url = window.serverIP + window.searchUrl.update_user_info;
         let data = {
             userID: userID,
             userName: userName,
             email: email,
             userPhone: userPhone,
             password: password
         }
         window.sendAjax('post', url, data, function(aaa) {
             if (aaa.code == 200) {
                 let allIsOne = true;
                 if (aaa.data.okName == 0) {
                     allIsOne = false;
                     $('#up-userName').parent().find('p').css('display', 'none');
                     $('#up-userName').parent().find('.repeatInfo').css('display', 'table');
                 }
                 if (aaa.data.okEmail == 0) {
                     allIsOne = false;
                     $('#up-email').parent().find('p').css('display', 'none');
                     $('#up-email').parent().find('.repeatInfo').css('display', 'table');
                 }
                 if (aaa.data.okPhone == 0) {
                     allIsOne = false;
                     $('#up-userPhone').parent().find('p').css('display', 'none');
                     $('#up-userPhone').parent().find('.repeatInfo').css('display', 'table');
                 }

                 //  如果需要判断重复的信息 否没有重复的 则 退出modal
                 if (allIsOne == true) {
                     $('.left-slide #user .c-list').trigger('click');
                     $('.user-list .update-modal').modal('hide');
                 }
             } else {
                 alert(aaa.message);
             }
         });
     });
     // 发送修改店铺信息的请求
     $('.shop-list .update-modal .makesure').on('click', function() {
         let busType = $('#shop-type-name').val();
         let ownerName = $('#owner-name').val();
         let busName = $('#shop-name').val();
         let busAddress = $('#shop-address').val();
         let busPhone = $('#shop-phone').val();
         let bossPhone = $('#shop-owner-phone').val();

         let regBusType = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,8}$/);
         let regOwnerName = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,15}$/);
         let regBusName = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,25}$/);
         let regAddress = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,40}$/);
         let regPhone = new RegExp(/^\d{11}$/);
         let regBoss = new RegExp(/^\d{11}$/);

         let isEmpty = false;
         if (busType == '') {
             $('#shop-type-name').parent().find('p').css('display', 'none');
             $('#shop-type-name').parent().find('.isEmpty').css('display', 'table');
             isEmpty = true;
         }
         if (ownerName == '') {
             $('#owner-name').parent().find('p').css('display', 'none');
             $('#owner-name').parent().find('.isEmpty').css('display', 'table');
             isEmpty = true;
         }
         if (busName == '') {
             $('#shop-name').parent().find('p').css('display', 'none');
             $('#shop-name').parent().find('.isEmpty').css('display', 'table');
             isEmpty = true;
         }
         if (busAddress == '') {
             $('#shop-address').parent().find('p').css('display', 'none');
             $('#shop-address').parent().find('.isEmpty').css('display', 'table');
             isEmpty = true;
         }
         if (busPhone == '') {
             $('#shop-phone').parent().find('p').css('display', 'none');
             $('#shop-phone').parent().find('.isEmpty').css('display', 'table');
             isEmpty = true;
         }
         if (bossPhone == '') {
             $('#shop-owner-phone').parent().find('p').css('display', 'none');
             $('#shop-owner-phone').parent().find('.isEmpty').css('display', 'table');
             isEmpty = true;
         }

         // 如果存在没有填写的信息 则终止事件
         if (isEmpty == true) {
             return;
         }

         //  判断格式是否都符合要求
         let formatIsOk = true;
         if (!regBusType.test(busType)) {
             formatIsOk = false;
             $('#shop-type-name').parent().find('p').css('display', 'none');
             $('#shop-type-name').parent().find('.format').css('display', 'table');

         }
         if (!regOwnerName.test(ownerName)) {
             formatIsOk = false;
             $('#owner-name').parent().find('p').css('display', 'none');
             $('#owner-name').parent().find('.format').css('display', 'table');

         }
         if (!regBusName.test(busName)) {
             formatIsOk = false;
             $('#shop-name').parent().find('p').css('display', 'none');
             $('#shop-name').parent().find('.format').css('display', 'table');
         }
         if (!regAddress.test(busAddress)) {
             formatIsOk = false;
             $('#shop-address').parent().find('p').css('display', 'none');
             $('#shop-address').parent().find('.format').css('display', 'table');
         }
         if (!regPhone.test(busPhone)) {
             formatIsOk = false;
             $('#shop-phone').parent().find('p').css('display', 'none');
             $('#shop-phone').parent().find('.format').css('display', 'table');
         }
         if (!regBoss.test(bossPhone)) {
             formatIsOk = false;
             $('#shop-owner-phone').parent().find('p').css('display', 'none');
             $('#shop-owner-phone').parent().find('.format').css('display', 'table');
         }

         // 又不符合格式的 则终止事件
         if (formatIsOk == false) {
             return;
         }

         let shopID = window.proCookie.getCookie('itemID');
         let url = window.serverIP + window.searchUrl.update_shop_info;
         let data = {
             shopID: shopID,
             businessType: busType,
             ownerName: ownerName,
             businessName: busName,
             businessAddress: busAddress,
             businessPhone: busPhone,
             bossPhone: bossPhone
         };
         window.sendAjax('post', url, data, function(aaa) {
             if (aaa.code == 200) {
                 let allIsOne = true;
                 if (aaa.data.busNameOk == 0) {
                     allIsOne = false;
                     $('#shop-name').parent().find('p').css('display', 'none');
                     $('#shop-name').parent().find('.err').css('display', 'table');
                 }
                 if (aaa.data.busPhoneOk == 0) {
                     allIsOne = false;
                     $('#shop-phone').parent().find('p').css('display', 'none');
                     $('#shop-phone').parent().find('.err').css('display', 'table');
                 }
                 if (aaa.data.bossPhoneOk == 0) {
                     allIsOne = false;
                     $('#shop-owner-phone').parent().find('p').css('display', 'none');
                     $('#shop-owner-phone').parent().find('.err').css('display', 'table');
                 }


                 if (allIsOne == true) {
                     //  跟新店铺列表
                     $('.left-slide #store .c-list').trigger('click');
                     $('.shop-list .update-modal').modal('hide');
                 }
             } else {
                 $('#shop-type-name').parent().find('p').css('display', 'none');
                 $('#shop-type-name').parent().find('.type-name').css('display', 'table');
                 alert(aaa.message);
             }
         });
     });

     //  设置回车键 触发 保存点击事件
     ;
     (function() {
         $('body').keydown(function() {
             if (event.keyCode == 13 && $('.shop-list .update-modal').css('display') == 'block') {
                 $('.shop-list .update-modal .makesure').click();
                 console.log(1);
             }
         });
         $('body').keydown(function() {
             if (event.keyCode == 13 && $('.user-list .update-modal').css('display') == 'block') {
                 $('.user-list .update-modal .makesure').trigger('click');
                 console.log(2);
             }
         });
         $('body').keydown(function() {
             if (event.keyCode == 13 && $('.class-list .update-modal').css('display') == 'block') {
                 $('.class-list .update-modal .makesure').click();
                 console.log(3);
             }
         });
     })();

     // 设置按 enter 键 触发按钮点击
     // $('body').keydown(function() {

     //     if (event.keyCode == 13 && $('.user-list .add-modal').css('display') == 'block') {
     //         $('.user-list .makesure').click();
     //     }
     // });
 });