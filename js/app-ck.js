$(function(){function a(e){var t=$(e).css("marginTop").replace(/[^-\d\.]/g,""),n=$(e).css("marginLeft").replace(/[^-\d\.]/g,"");console.log("top:"+t+" left:"+n);n>2e3&&$(e).css("marginLeft","-=6000px");n<-3600&&$(e).css("marginLeft","+=6000px");t>-200&&$(e).css("marginTop","-=6000px");t<-5900&&$(e).css("marginTop","+=6000px")}var e=$(".wrap"),t=window.innerHeight,n=window.innerWidth,r=[0,0],i=1,s=e.width();console.log(s);var o=100;for(var u=o-1;u>=0;u--)$(".wrap").append('<div class="rect" id="rect'+u+'">'+u+"</div>");$(".container").on("scroll",function(t){var n=($(".container").scrollLeft()-100)/i;n*=-1;var r=($(".container").scrollTop()-100)/i;r*=-1;$(".container").scrollLeft(100);$(".container").scrollTop(100);e.css({marginLeft:"+="+n+"px",marginTop:"+="+r+"px"});a("#w1");a("#w2");a("#w3");a("#w4");clearTimeout($.data(this,"scrollTimer"));$.data(this,"scrollTimer",setTimeout(function(){console.log("Haven't scrolled in 250ms!")},250));t.preventDefault();return!1})});