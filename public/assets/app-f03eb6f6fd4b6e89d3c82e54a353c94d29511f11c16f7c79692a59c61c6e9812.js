(function(){$(document).ready(function(){$(".notifs-menu").on("mouseenter",".notifs-unreaded",function(t){var n;$(this).removeClass("notifs-unreaded"),t.stopPropagation(),n=$(this),$.post({url:$(this).data("url"),dataType:"json",success:function(t){var o,s;return t.success===!0&&(o=$(".notifCount").html(),s=o-1,$(".notifCount").html(s),n.find("span").fadeOut(),0===s)?$(".notifCount").fadeOut():void 0}})})})}).call(this);