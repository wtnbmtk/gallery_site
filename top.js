$(function(){

	// リストを非表示
	$('#background a').hide();
	$('footer').css('display', 'none');;
	// 繰り返し処理
	$('#background a').each(function(i) {
		// 遅延させてフェードイン
		$(this).delay(500 * i).fadeIn(1000);
	});
	setTimeout(function(){
	            $('footer').css('display', 'block');;
	},5000);
});
