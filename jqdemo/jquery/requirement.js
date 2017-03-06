$(function(){
	//分类
	$(".re_t").live("click",function(){
		var catid=$(this).attr("catid");
		var top=$(".require_bottom div[catid='"+catid+"']").offset().top;
		$(window).scrollTop(top);
	});
});


























