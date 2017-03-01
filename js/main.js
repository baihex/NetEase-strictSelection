$(function() {
    $(".flexslider").flexslider({
        directionNav:false
    });
});
function showMask(){
    $("#mask").css("height",$(document).height());
    $("#mask").css("width",$(document).width());
    $(".div").show()
    $("#mask").show();
}
// $(".logo").mouseenter(showMask())
//隐藏遮罩层
function hideMask(){

    $(".div").hide()
    $("#mask").hide();
}
$(function () {

    setTimeout(showMask,3000)
})