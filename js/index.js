$(function(){
    $(document).ready(function() {
        $('#fullpage').fullpage({
            verticalCentered: false,

            //menu
            menu: '#menu',
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],

            //Navigation 分割器
            lockAnchors: false,
            navigation: true,
            navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
            navigationPosition: 'right',
            showActiveTooltip: false,

            //开始加动画
            /*afterLoad: function(anchorLink, index){
             var loadedSection = $(this);
             $(".section").eq(index).addClass("active");
             },*/

            // 离开去动画
            onLeave: function(index, nextIndex, direction){
                var leavingSection = $(this);

                $(".section").eq(index).removeClass("active");
                $(".daohannav ul a").each(function () {
                    $(this).removeClass("active");
                }).hover(function () {
                    $(this).next(".sy").css("opacity",1);
                },function () {
                    $(this).next(".sy").css("opacity",0);
                });

                $(".daohannav ul a").eq(nextIndex-1).addClass("active");
            }

        });
    });


});