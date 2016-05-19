/*---LEFT BAR ACCORDION----*/
$(function() {
    $('.sidebar-menu').dcAccordion({
        eventType : 'click',
        autoClose : true,         
        saveState : true,
        disableLink : false,
        speed : 'slow',
        showCount : false,
        autoExpand : false,
        classArrow : 'iconfont fold-icon'
    });
});

var Script = function() {

    //    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function() {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if (diff > 0)
            $("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
        else
            $("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
    });

    //    sidebar toggle

    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }


        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.icon-reorder').click(function() {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left' : '0px'
            });
            $('#sidebar').css({
                'margin-left' : '-210px'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left' : '210px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left' : '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
    });

}();

