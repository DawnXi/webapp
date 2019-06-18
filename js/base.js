$(function(){
	// 控制表格详细数据的显示
	$('.data-item-main .more').click(function(){
		
		$(this).parent().parent().parent().find('.data-item-other').toggleClass('active');
		// $('.data-item-other').not($(this)).parent().parent().parent().find('.data-item-other').removeClass('active');
	});


	// 控制我的账户下积分信息的显示
	$('.page-tab .item').click(function(){
		$('.page-tab .item').removeClass('active');
		$(this).addClass('active');
	})
});