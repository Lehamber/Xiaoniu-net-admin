$(function() {
    // 发送添加分类请求
    ;
    (function() {
        $('.class-list .add-modal .modal-footer .makesure').on('click', function() {

            let reg = new RegExp(/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,8}$/);
            let value = $('#add-categoryName').val();

            // 如果值为空显示提示信息， 结束事件
            if (value == '') {
                $('#add-categoryName').parent().find('p').css('display', 'none');
                $('#add-categoryName').parent().find('.isEmpty').css('display', 'table');
                return;
            }

            // 如果格式合法，则发送请求
            if (reg.test(value) == true) {
                // 发送请求
                let url = window.serverIP + window.searchUrl.add_cate;
                let data = {
                    cateName: value
                };
                window.sendAjax('post', url, data, function(aaa) {
                    if (aaa.code == 200) {
                        if (aaa.data.confirm == 1) {
                            // 刷新分类列表
                            $('#supply .c-list:first-child').trigger('click');
                            // 关闭modal
                            $('.class-list .add-modal').modal('hide');
                        } else {
                            $('#add-categoryName').parent().find('p').css('display', 'none');
                            $('#add-categoryName').parent().find('.err').css('display', 'table');
                        }
                    } else {
                        alert(aaa.message);
                    }
                });
            }
        });
    })();

    //发送添加用户的请求
    ;
    (function() {
        $('.user-list .add-modal .modal-footer .makesure').on('click', function() {
            let userName = $('#add-userName').val();
            let email = $('#add-email').val();
            let userPhone = $('#add-userPhone').val();
            let password = $('#add-passwordd').val();

            let nameReg = new RegExp(/^(?=.*([a-zA-z]|[\u4E00-\u9FA5\uf900-\ufa2d]))[\w\-\u4E00-\u9FA5\uf900-\ufa2d]{2,20}$/);
            let regEmail = new RegExp(/^[\w-\.]+@[\w-\.]+(\.[a-zA-Z0-9]+)+$/);
            let regPhone = new RegExp(/^[0-9]{11}$/);
            //  let rregPass = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_+-=?])[\S]{6,20}$/);
            let regPass = new RegExp(/^([0-9]|[a-z]|[A-Z]|[@#$%^&*_+-=?]){6,20}$/);
            let isEmpty = false;
            if (userName == '') {
                $('#add-userName').parent().find('p').css('display', 'none');
                $('#add-userName').parent().find('.inviteInfo').css('display', 'table');
                isEmpty = true;
            }
            if (email == '') {
                $('#add-email').parent().find('p').css('display', 'none');
                $('#add-email').parent().find('.inviteInfo').css('display', 'table');
                isEmpty = true;
            }
            if (userPhone == '') {
                $('#add-userPhone').parent().find('p').css('display', 'none');
                $('#add-userPhone').parent().find('.inviteInfo').css('display', 'table');
                isEmpty = true;
            }
            if (password == '') {
                $('#add-passwordd').parent().find('p').css('display', 'none');
                $('#add-passwordd').parent().find('.inviteInfo').css('display', 'table');
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
                $('#add-userName').parent().find('p').css('display', 'none');
                $('#add-userName').parent().find('.formatInfo').css('display', 'table');

            }
            if (!regEmail.test(email)) {
                formatIsOk = false;
                $('#add-email').parent().find('p').css('display', 'none');
                $('#add-email').parent().find('.formatInfo').css('display', 'table');

            }
            if (!regPhone.test(userPhone)) {
                formatIsOk = false;
                $('#add-userPhone').parent().find('p').css('display', 'none');
                $('#add-userPhone').parent().find('.formatInfo').css('display', 'table');
            }
            if (!regPass.test(password)) {
                formatIsOk = false;
                $('#add-passwordd').parent().find('p').css('display', 'none');
                $('#add-passwordd').parent().find('.formatInfo').css('display', 'table');
            }

            // 又不符合格式的 则终止事件
            if (formatIsOk == false) {
                return;
            }

            let url = window.serverIP + window.searchUrl.add_user;
            let data = {
                userName: userName,
                email: email,
                userPhone: userPhone,
                password: password
            };

            window.sendAjax('post', url, data, function(aaa) {
                if (aaa.code == 200) {
                    let isOk = true;
                    if (aaa.data.nameOk == 0) {
                        isOk = false;
                        $('#add-userName').parent().find('p').css('display', 'none');
                        $('#add-userName').parent().find('.repeatInfo').css('display', 'table');
                    }
                    if (aaa.data.emailOk == 0) {
                        isOk = false;
                        $('#add-email').parent().find('p').css('display', 'none');
                        $('#add-email').parent().find('.repeatInfo').css('display', 'table');
                    }

                    if (aaa.data.phoneNumOk == 0) {
                        isOk = false;
                        $('#add-userPhone').parent().find('p').css('display', 'none');
                        $('#add-userPhone').parent().find('.repeatInfo').css('display', 'table');
                    }

                    // 如果没有重复的信息
                    if (isOk == true) {
                        $('#user .c-list').trigger('click');
                        $('.user-list .add-modal').modal('hide');
                    }
                } else {
                    alert(aaa.message);
                }
            });
        });
    })();

    // 设置 按回车键 触发 "发送添加请求事件"
    ;
    (function() {
        $('body').keydown(function() {
            if (event.keyCode == 13 && $('.class-list .add-modal').css('display') == 'block') {
                $('.class-list .add-modal .modal-footer .makesure').click();
                console.log("add1");
            }
        });
        $('body').keydown(function() {
            if (event.keyCode == 13 && $('.user-list .add-modal').css('display') == 'block') {
                $('.user-list .add-modal .modal-footer .makesure').click();
                console.log('add2');
            }
        })
    })();
});