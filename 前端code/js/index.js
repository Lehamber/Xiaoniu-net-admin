$(function() {

    // 左边nav 箭头翻转
    ;
    (function() {
        $('.mid .left-slide>ul>li .click-div').on('click', rotate180deg);

        function rotate180deg() {
            $(this).find('.arrow').css({
                "transform": "rotate(180deg)",
                "transition": "transform 0.3s"
            });
            $(this).off('click');
            $(this).on('click', rotate0deg);
        }

        function rotate0deg() {
            $(this).find('.arrow').css({
                "transform": "rotate(0deg)",
                "transition": "transform 0.3s"
            });
            $(this).off('click');
            $(this).on('click', rotate180deg);
        }

    })();

    // 控制页面的响应
    ;
    (function() {
        //把所有的列表设置为 none
        $('.mid .right-con .r-wrap').css('display', 'none');

        $('.mid .right-con .home').css('display', 'block');
        $('.header .h-right .word1').text('首页');
        // more情况下的顶部 路径样式
        $('.header .h-right .word1').css({
            "color": "#ffffff",
            "font-weight": "700"
        });
        $('.header .h-right .line').eq(1).css({
            "display": "none"
        });
        $('.header .h-right .word2').css({
            "display": "none"
        });

        $('.mid .left-slide .slide-list .c-list').on('click', function() {
            //变颜色
            $('.mid .left-slide .slide-list .c-list').css({
                "color": "#303133",
                "background-color": "#fff"
            });
            $(this).css({
                "color": "#39bf3e",
                "background-color": "#ecf5ff"
            });
            var index = $('.mid .left-slide .slide-list .c-list').index(this);
            var aList = $('.mid .right-con .r-wrap');
            aList.css('display', 'none');
            aList.eq(index + 1).css('display', 'block');
            //更改对应的元素
            aList.eq(index + 1).find('.r-w-name').text($(this).text());

            // 路径更改
            $('.header .h-right .word1').css({
                "color": "#ffffffcc",
                "font-weight": ""
            });
            $('.header .h-right .line').eq(1).css({
                "display": "block"
            });
            $('.header .h-right .word2').css({
                "display": "block"
            });
            $('.header .h-right .word1').text($(this).parent().parent().find('.click-div .sign').text());
            $('.header .h-right .word2').text($(this).text());

        });
        // 首页nav响应
        // $('.mid .left-slide>ul>li:first-child').on('click', function() {
        //     alert($(this).html());
        // });
        $('.mid .left-slide>ul>li:first-child').on('click', function() {
            var aList = $('.mid .right-con .r-wrap');
            aList.css('display', 'none');
            aList.eq(0).css('display', 'block');
            $('.header .h-right .word1').text('首页');
            $('.header .h-right .word1').css({
                "color": "#ffffff",
                "font-weight": "700"
            });
            $('.header .h-right .line').eq(1).css({
                "display": "none"
            });
            $('.header .h-right .word2').css({
                "display": "none"
            });
        });


        // 设置样式响应
        $('.mid .left-slide>ul>li:last-child').on('click', function() {
            var aList = $('.mid .right-con .r-wrap');
            aList.css('display', 'none');
            aList.eq(6).css('display', 'block');
            $('.header .h-right .word1').text('设置');
            $('.header .h-right .word1').css({
                "color": "#ffffff",
                "font-weight": "700"
            });
            $('.header .h-right .line').eq(1).css({
                "display": "none"
            });
            $('.header .h-right .word2').css({
                "display": "none"
            });
        });

        // 搜索框响应部分
        // 限制搜索框只能输入 汉字 字母 _ - @
        $('.r-control .sear-box').on('input', function() {
            var reg = new RegExp(/^([\w-@]|[\u4E00-\u9FA5\uf900-\ufa2d])+$/);
            // console.log($(this).val());
            if (!reg.test($(this).val())) {
                $(this).val('');
            }
        });
        // 搜索按钮响应
        $('.r-control .sear-btn').on('click', function() {
            let vInput = $(this).prev().val();
            // alert(213);
            if (vInput == '') {
                return;
            }

            let matchStr = $(this).parent().find('.sear-sele').val();
            let oTable = $(this).parent().parent().parent().find('.real-table');
            // console.log(oTable);
            // console.log(matchStr);
            // console.log(oTable.find('tr:first-child th').length);
            for (var i = 0; i < oTable.find('tr:first-child th').length; i++) {
                if (oTable.find('tr:first-child th').eq(i).text() != matchStr) {
                    continue;
                }
                for (var j = 1; j < oTable.find('tr').length; j++) {
                    let oTr = oTable.find('tr').eq(j);
                    let searResult = oTr.find('td').eq(i).text().search(vInput);
                    if (searResult != -1) {
                        //把对应的 tr设置为 block
                        oTr.css('display', 'table-row');
                    } else {
                        //把对一个tr 设置为 none
                        oTr.css('display', 'none');
                    }
                }
            }
        });
        // 显示全部按钮响应
        $('.r-control .show-all').on('click', function() {
                let oTable = $(this).parent().parent().parent().find('.real-table');
                let oTr = oTable.find('tr');
                for (var i = 1; i < oTr.length; i++) {
                    oTr.eq(i).css('display', 'table-row');
                }
            })
            // 按 enter 触发搜索按钮 click事件
        $('body').keydown(function() {
            if (document.activeElement.className == 'sear-box' && event.keyCode == 13) {
                $('.r-control .sear-btn').trigger('click');
                // $('.r-control .sear-btn').click();
            }
        });
    })();



});