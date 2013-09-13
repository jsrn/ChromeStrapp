(function ($)
{
    $.fn.menubar = function ()
    {
        var menuBar = this

        var closeAll = function()
        {
            $(menuBar).children('ul').children('li').css('display','none')
        }

        $(menuBar).addClass('menu-bar')

        $(menuBar).children('li').click(function(){
            // Close others
            closeAll()

            var entryBlock = $(this).parent().find("[data-name='" + $(this).text()  + "']");
            // Do x positioning
            var rect = $(this)[0].getBoundingClientRect();
            entryBlock.css('left', rect.left + 'px')
            var entries = entryBlock.children().css('display','block')  
        })

        $(menuBar).children('ul').mouseleave(closeAll)
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