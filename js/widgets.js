(function ($)
{
    $.fn.menubar = function ()
    {
        var menuBar = this

        $(menuBar).addClass('menu-bar')

        $(menuBar).children('li').click(function(){
            // Close others
            $(menuBar).children('ul').children('li').css('display','none')

            var entryBlock = $(this).parent().find("[data-name='" + $(this).text()  + "']");
            // Do x positioning
            var rect = $(this)[0].getBoundingClientRect();
            entryBlock.css('left', rect.left + 'px')
            var entries = entryBlock.children().css('display','block')
        })
    }
})(jQuery);

function alert( text )
{
    var notification = webkitNotifications.createNotification(
        '48.png',  // icon url - can be relative
        'Alert',  // notification title
        text  // notification body text
    );
    notification.show();
}