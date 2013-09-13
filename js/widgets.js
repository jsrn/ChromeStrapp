(function ($)
{
    $.fn.menubar = function ()
    {
        var menuBar = this

        var closeAll = function()
        {
            $(menuBar).children('ul').slideUp(100)
        }

        $(menuBar).addClass('menu-bar')

        $(menuBar).children('li').click(function(){
            // Close others
            closeAll()

            var entryBlock = $(this).parent().find("[data-name='" + $(this).text()  + "']");
            // Do x positioning
            var rect = $(this)[0].getBoundingClientRect()
            entryBlock.css('left', rect.left + 'px')
            entryBlock.slideDown(100)  
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

$(function(){
    $('label.toggle-button').click(function(){
        var boxID = 'input[name="' + $(this).attr('name') + '"]'
        if( $(boxID).attr('checked') === undefined )
        {
            $(boxID).attr('checked','true')
            $(this).addClass('checked')
        }
        else
        {
            $(boxID).removeAttr('checked')
            $(this).removeClass('checked')
        }
    })
})