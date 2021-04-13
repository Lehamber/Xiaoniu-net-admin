$(function() {
    // 控制响应modal

    // 所有的修改modal 响应
    $('.mid .right-con .r-w-body').on('click', '.real-table .control .update', function() {
        let oModal = $(this).parent().parent().parent().parent().parent().find('.update-modal');
        // 注意table里面还有tbody thead层，只是默认隐藏了而已
        oModal.modal('show');
        console.log(oModal);
        //modal刚打开时，隐藏所有的 提示信息
        oModal.find('.modal-body .form-group p').css('display', 'none');
        // 把对应的数据填上去
        let value = $(this).parent().parent().find('td:first-child').text();

        window.proCookie.addCookie('itemID', value, '/');
        let oUpdateModal = $(this).parent().parent().parent().parent().parent().find('.update-modal');
        let aLabel = oUpdateModal.find('.form-group>label');
        let aTh = $(this).parent().parent().parent().parent().find('tr:first-child th');
        for (var i = 0; i < aLabel.length; i++) {
            for (var j = 0; j < aTh.length; j++) {
                if (aLabel.eq(i).text() == aTh.eq(j).text()) {
                    let tdStr = $(this).parent().parent().find('td').eq(j).text();
                    aLabel.eq(i).parent().find('input').val(tdStr);
                }
            }
        }

        // 如果是用户修改按钮，显示密码安全系数
        if ($(this).parent().parent().parent().parent().find('.success>th:first-child').text() == '用户编号') {
            $('.user-list #up-password').trigger('input');
        }
    });

    // 所有的增加modal响应
    $('.mid .right-con .r-w-body').on('click', '.r-control .add', function() {
        $(this).parent().parent().parent().find('.add-modal .modal-body input').val('');
        $(this).parent().parent().parent().find('.add-modal .modal-body .form-group p').css('display', 'none');
        $('#add-passwordd').trigger('input');
        $(this).parent().parent().parent().find('.add-modal').modal('show');
    });

    // 分类修改modal 和 分类添加 信息的格式限制
    ;
    (function() {
        $('.class-list .modal .form-group input[type="text"]').on('input', function() {
            // 限制输入空格
            $(this).val($(this).val().replace(/\s/g, ''));
            // 限制格式为1-8个纯汉字
            let reg = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,8}$/);
            if (reg.test($(this).val())) {
                $(this).parent().find('p').css('display', 'none');
                $(this).parent().find('.format').css('display', 'none');
            } else {
                $(this).parent().find('p').css('display', 'none');
                $(this).parent().find('.format').css('display', 'block');
            }
        });
    })();

    //用户的修改modal和增加modal的格式限制
    ;
    (function() {

        // 添加用户输入控制
        // 用来判断各输入框的状态，0表示空，1表示有输入但格式不对，2代表有输入且格式也对了
        let status = {
            userName: 0,
            email: 0,
            userPhone: 0,
            password: 0
        };
        // 给添加用户 和 编辑用户信息 两个modal 添加响应
        $('.user-list .modal').on('show-bs-modal', function() {
            for (var x in status) {
                status[x] = 0;
            }
        });


        // 限制输入空格
        $('.user-list .user-name').on('input', function() {
            // var value = $(this).val();
            $(this).val($(this).val().replace(' ', ''));
        });
        $('.user-list .user-email').on('input', function() {
            $(this).val($(this).val().replace(' ', ''));
        });
        $('.user-list .user-phone').on('input', function() {
            $(this).val($(this).val().replace(' ', ''));
        });
        // 
        $('.user-list .user-name').on('change', function() {
            var value = $(this).val();
            var reg = new RegExp(/^(?=.*([a-zA-z]|[\u4E00-\u9FA5\uf900-\ufa2d]))[\w\-\u4E00-\u9FA5\uf900-\ufa2d]{2,20}$/);
            var aNextAll = $(this).nextAll();
            aNextAll.css('display', 'none');
            if (reg.test(value)) {
                console.log(13);
                aNextAll.eq(0).css('display', 'none');
                status.userName = 2;
            } else {
                aNextAll.eq(0).css('display', 'table');
                status.userName = 1;
                if ($(this).val() == '') {
                    aNextAll.eq(0).css('display', 'none');
                    status.userName = 0;
                }
            }
        });

        $('.user-list .user-email').on('change', function() {
            var value = $(this).val();
            var reg = new RegExp(/^[\w-\.]+@[\w-\.]+(\.[a-zA-Z0-9]+)+$/);
            var aNextAll = $(this).nextAll();
            aNextAll.css('display', 'none');
            if (reg.test(value)) {
                aNextAll.eq(0).css('display', 'none');
                status.email = 2;
            } else {
                aNextAll.eq(0).css('display', 'table');
                status.email = 1;
                if ($(this).val() == '') {
                    aNextAll.eq(0).css('display', 'none');
                    status.email = 0;
                }
            }
        });

        //为每个四个input框设置 change事件，检查格式，给出提示信息
        $('.user-list .user-phone').on('change', function() {
            var value = $(this).val();
            var reg = new RegExp(/^[0-9]{11}$/);
            var aNextAll = $(this).nextAll();
            aNextAll.css('display', 'none');
            if (reg.test(value)) {
                aNextAll.eq(0).css('display', 'none');
                status.userPhone = 2;
            } else {
                aNextAll.eq(0).css('display', 'table');
                status.userPhone = 1;
                if ($(this).val() == '') {
                    aNextAll.eq(0).css('display', 'none');
                    status.userPhone = 0;
                }
            }
        });

        $('.user-list .user-pwd').on('input', function() {
            var value = $(this).val();
            $(this).val(value.replace(/\s/g, ''));
            value = $(this).val();

            // var reg = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_+-=?])[\S]{6,20}$/);
            var aNextAll = $(this).nextAll();
            var security = 0; //安全系数
            aNextAll.css('display', 'none');
            if (/^[0-9a-zA-Z!@#$%^&*_+-=?]{6,20}$/.test(value)) {
                aNextAll.eq(0).css('display', 'none');
                status.password = 2;
                if (value.match(/[0-9]/) != null) {
                    security++;
                }
                if (value.match(/[a-z]/) != null) {
                    security++;
                }
                if (value.match(/[A-Z]/) != null) {
                    security++;
                }
                if (value.match(/[@$!%*#?&]/) != null) {
                    security++;
                }
            } else {
                aNextAll.eq(0).css('display', 'table');
                status.password = 1;
                if (value == '') {
                    aNextAll.eq(0).css('display', 'none');
                    status.password = 0;
                }
            }

            // 实时显示安全系数
            var aSafe_line = $(this).parent().parent().find('.safe-window .safe_line');
            var oSafe_word = $(this).parent().parent().find('.safe-window>div>span');

            if (security == 0) {
                aSafe_line.css('background-color', 'transparent');
                oSafe_word.css('display', 'none');
            }
            if (security == 1) {
                aSafe_line.css('background-color', 'transparent');
                aSafe_line.eq(0).css('background-color', 'red');
                oSafe_word.css('display', 'block');
                oSafe_word.css('color', 'red');
                oSafe_word.text('弱');
            }
            if (security == 2) {
                aSafe_line.css('background-color', 'transparent');
                aSafe_line.eq(0).css('background-color', 'red');
                aSafe_line.eq(1).css('background-color', '#ff7f00');

                oSafe_word.css('display', 'block');
                oSafe_word.css('color', '#ff7f00');
                oSafe_word.text('中');
            }
            if (security == 3) {
                aSafe_line.css('background-color', 'transparent');
                aSafe_line.eq(0).css('background-color', 'red');
                aSafe_line.eq(1).css('background-color', '#ff7f00');
                aSafe_line.eq(2).css('background-color', '#f0f028');

                oSafe_word.css('display', 'block');
                oSafe_word.css('color', '#f0f028');
                oSafe_word.text('中');
            }
            if (security == 4) {
                aSafe_line.css('background-color', 'transparent');
                aSafe_line.eq(0).css('background-color', 'red');
                aSafe_line.eq(1).css('background-color', '#ff7f00');
                aSafe_line.eq(2).css('background-color', '#f0f028');
                aSafe_line.eq(3).css('background-color', '#39bf3e');

                oSafe_word.css('display', 'block');
                oSafe_word.css('color', '#39bf3e');
                oSafe_word.text('强');
            }
        });

        // // 如果填了数据，且格式正确 提交数据
        // $('.user-list .makesure').on('click', function() {
        //     // 判断status是否都为2（是否都填写了数据且格式都正确）
        //     let isGo = false;
        //     for (var x in status) {
        //         if (status[x] == 2) {
        //             isGo = true;
        //         } else {
        //             isGo = false;
        //         }
        //     }
        //     if (isGo == true) {
        //         // 发送请求
        //         // sendRequest();
        //         alert("发送请求")
        //     }
        //     // 给没有写入数据的输入表单 显示 请输入信息
        //     for (var x in status) {
        //         if (status[x] == 0) {
        //             let aNextSlibling = $('#' + x).nextAll();
        //             aNextSlibling.css('display', 'none');
        //             // 让请输入的提示信息显示
        //             $('#' + x).parent().find('.inviteInfo').css('display', 'block');
        //         }
        //     }
        // });

        // 设置按 enter 键 触发按钮点击
        // $('body').keydown(function() {

        //     if (event.keyCode == 13 && $('.user-list .add-modal').css('display') == 'block') {
        //         $('.user-list .makesure').click();
        //     }
        // });

        //  //发送请求
        //  let sendRequest = function() {

        //     let data = {
        //         "userName": $('#userName').val(),
        //         "email": $('#email').val(),
        //         "userPhone": $('#userPhone').val(),
        //         "password": $('#password').val()
        //     };

        //     function success(aaa) {
        //         if (aaa.code == 200) { // 如果处理成功
        //             let count = 0;
        //             for (var x in aaa.data) {
        //                 if (aaa.data[x] == 1) {
        //                     count++;
        //                 } else {
        //                     looklook(x);
        //                 }
        //             }
        //             if (count == 3) {
        //                 //将账号密码 计入cookies, 生存时间为5天
        //                 window.proCookie.addCookie('userID', $('#userName').val(), '/', 5);
        //                 window.proCookie.addCookie('password', $('#password').val(), '/', 5);
        //                 window.location.href = './index.html';
        //                 // alert("注册成功");
        //             }

        //             function looklook(x) {
        //                 if (x == 'userNameSta') {
        //                     let aNextSlibLing = $('#userName').nextAll();
        //                     aNextSlibLing.css('display', 'none');
        //                     aNextSlibLing.eq(1).css('display', 'block');
        //                 }
        //                 if (x == 'emailSta') {
        //                     let aNextSlibLing = $('#email').nextAll();
        //                     aNextSlibLing.css('display', 'none');
        //                     aNextSlibLing.eq(1).css('display', 'block');
        //                 }
        //                 if (x == 'userPhoneSta') {
        //                     let aNextSlibLing = $('#userPhone').nextAll();
        //                     aNextSlibLing.css('display', 'none');
        //                     aNextSlibLing.eq(1).css('display', 'block');
        //                 }
        //             }

        //         }
        //         if (aaa.code == 500) { // 如果处理失败
        //             alert(aaa.message);
        //         }
        //         console.log(aaa);
        //     }
        //     // 用户注册
        //     let url = window.serverIP + window.realUrl.signIn;
        //     window.sendAjax('post', url, data, success);
        //     // $.ajax({
        //     //     type: 'post',
        //     //     url: url,
        //     //     dataType: 'json',
        //     //     data: data,
        //     //     success: success,
        //     //     timeout: 2000,
        //     //     error: function() {
        //     //         alert("请求超时或服务器故障，请稍后重试");
        //     //     }
        //     // });
        // }

    })();

    // 店铺修改modal 信息的格式限制
    ;
    (function() {
        // 隐藏所有提示信息
        // $('.shop-list .update-modal .form-group p').css('display', 'none');

        // 限制不能输入空格
        $('.shop-list .update-modal .modal-body input').on('input', function() {
            $(this).val($(this).val().replace(/\s/g, ''));
        });

        $('#shop-type-name').on('change', function() {
            if ($(this).val() != '') {
                let reg = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,8}$/);
                if (!reg.test($(this).val())) {
                    $(this).parent().find('p').css('display', 'none');
                    $(this).parent().find('.format').css('display', 'table');
                } else {
                    $(this).parent().find('p').css('display', 'none');
                }
            }
        });
        $('#owner-name').on('change', function() {
            if ($(this).val() != '') {
                let reg = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,15}$/);
                if (!reg.test($(this).val())) {
                    $(this).parent().find('p').css('display', 'none');
                    $(this).parent().find('.format').css('display', 'table');
                } else {
                    $(this).parent().find('p').css('display', 'none');
                }
            }
        });
        $('#shop-name').on('change', function() {
            if ($(this).val() != '') {
                let reg = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,25}$/);
                if (!reg.test($(this).val())) {
                    $(this).parent().find('p').css('display', 'none');
                    $(this).parent().find('.format').css('display', 'table');
                } else {
                    $(this).parent().find('p').css('display', 'none');
                }
            }
        });
        $('#shop-address').on('change', function() {
            if ($(this).val() != '') {
                let reg = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,40}$/);
                if (!reg.test($(this).val())) {
                    $(this).parent().find('p').css('display', 'none');
                    $(this).parent().find('.format').css('display', 'table');
                } else {
                    $(this).parent().find('p').css('display', 'none');
                }
            }
        });
        $('#shop-phone').on('change', function() {
            if ($(this).val() != '') {
                let reg = new RegExp(/^\d{11}$/);
                if (!reg.test($(this).val())) {
                    $(this).parent().find('p').css('display', 'none');
                    $(this).parent().find('.format').css('display', 'table');
                } else {
                    $(this).parent().find('p').css('display', 'none');
                }
            }
        });
        $('#shop-owner-phone').on('change', function() {
            if ($(this).val() != '') {
                let reg = new RegExp(/^\d{11}$/);
                if (!reg.test($(this).val())) {
                    $(this).parent().find('p').css('display', 'none');
                    $(this).parent().find('.format').css('display', 'table');
                } else {
                    $(this).parent().find('p').css('display', 'none');
                }
            }
        });
    })();
});