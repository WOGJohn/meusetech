(function(){var n,t,o,e,i;$(function(){return o(),window.fbEventsBound?void 0:n()}),n=function(){return $(document).on("page:fetch",i).on("page:change",e).on("page:load",function(){return"undefined"!=typeof FB&&null!==FB?FB.XFBML.parse():void 0}),this.fbEventsBound=!0},i=function(){return $("#fb-root").length?this.fbRoot=$("#fb-root").detach():void 0},e=function(){return null!=this.fbRoot?$("#fb-root").length?$("#fb-root").replaceWith(this.fbRoot):$("body").append(this.fbRoot):void 0},o=function(){return window.fbAsyncInit=t,$.getScript("//connect.facebook.net/en_US/sdk.js")},t=function(){return FB.init({appId:"321360849161814016",status:!0,cookie:!0,xfbml:!0})}}).call(this);