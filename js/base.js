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
	});


	// 控制弹出框显示
	// 点击遮罩层/右上角关闭按钮关闭弹框
	$('.model-container-bg,.close-model').click(function () {
		$('.model-body').hide();
		$('.model-container-bg').hide();
	})

	//点击查看推广链接
	$('.top-tip.text').click(function(){
		$('.model-container-bg').show();
		$('#tip').show();
	});


	//点击查看提示弹窗
	$('.top-tip.spread_link').click(function(){
		$('.model-container-bg').show();
		$('#spread-link').show();
	});

	


	// 订单相关弹窗
	$('.buy').click(function(){
		$('.model-container-bg').show();
		$('.model-body').hide();
		$('#buy-order').show();
	});

	$('.subscribe').click(function(){
		$('.model-container-bg').show();
		$('.model-body').hide();
		$('#subscribe-order').show();
	});

	$('.sell').click(function(){
		$('.model-container-bg').show();
		$('.model-body').hide();
		$('#sell-order').show();	
	})
});