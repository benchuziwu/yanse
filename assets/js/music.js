//倒计时效果开始
var timer = setInterval(getMytime, 1000);
var daojishi = document.getElementsByClassName("daojishi");
setInterval(getMytime, 1000)

function getMytime() {
	var nowTime = new Date();
	var newTime = new Date(2016, 10, 20, 14, 52);
	var deltaTime = Math.floor((newTime - nowTime) / 1000);
	for (var i = 0; i < daojishi.length; i++) {
		daojishi[i].innerHTML = (Math.floor(deltaTime / 86400) + "天" + Math.floor(deltaTime % 86400 / 3600) + "时" + Math.floor(deltaTime % 86400 % 3600 / 60) + "分" + Math.floor(deltaTime % 60) + "秒");
		if (deltaTime <= 0) {
			clearInterval(timer);
			
			return
		}
	}
}

function toDouble(n) {
	return n < 10 ? "0" + n : n;
}
//倒计时效果结束

var video = document.getElementById("video")

function play() {
	video.play();
}

function pause() {
	video.pause();
}
$(function() {
	var num = 1;
	var hasPause = false;
	$('.bofang1').on('click', function() {
		if (hasPause) {
			num = n;
		}
		var timer = setInterval(bofang, 1000)
		play();
		$(this).hide();
		$('.zanting').show();

		function bofang() {
			console.log(num)
			num++;
			$('.bofang em').html(num)
		}
		$('.zanting').on('click', function() {
			hasPause = true;
			$('.zanting').hide();
			pause();
			n = num;
			console.log(n)
			$('.bofang1').show();
			clearInterval(timer);
		})

	})

	/*音乐播放开始*/

	/*音乐播放结束*/

	var w = $(window).width();
	var h = $(window).height();
	$('.tianjia').width(w).height(h);
	$('.wode').width(w).height(h);
	$('.xiangqing').width(w).height(h);

	/*应用主题切换开始*/
	var zhutikey = true
	$('.yingyongzhuti li').on('click', function() {
			var _index = $(this).index()
			if (zhutikey) {
				$('.yingyongzhuti li').eq(_index).addClass('active');
				zhutikey = false;
			} else {
				$('.yingyongzhuti li').eq(_index).removeClass('active');
				zhutikey = true;
			}

			return false;
		})
		/*应用主题切换结束*/
		/*点击返回图标开始*/
	$('.tubiao1').on('click', function() {
		$('.shouye').addClass('active').siblings().removeClass('active');
	})
	$('.fanhui').on('click', function() {
			$('.shouye').addClass('active').siblings().removeClass('active');
			return false;
		})
		/*点击图标切换结束*/

	/*点赞开始*/
	var r = true;
	$('.dianzan').each(function(i, item) {
		$(item).on('click', function() {
			var shuzhi = $('.shuzhi').eq(i).html();
			if (r) {
				shuzhi++;
				$('.shuzhi').eq(i).html(shuzhi);
				$(this).css({
					"color": "#f00"
				})

				r = false;
			} else {
				$(this).css({
					"color": "#ccc"
				})
				--shuzhi;
				$('.shuzhi').eq(i).html(shuzhi);
				r = true;
			}

		})
	})

	/*点赞结束*/
	/*赏开始*/
	$('.shang').each(function(i, item) {
			$(item).on('click', function() {
				var shuzhi1 = $('.shuzhi1').eq(i).html();
				shuzhi1++;
				$('.shuzhi1').eq(i).html(shuzhi1);
			})
		})
		/*赏结束*/

	/*起始页动画切换开始*/
	$('.qishi').width(w).height(h);
	$('.kong').width(w).height(h * 0.2);
	setTimeout(yichu, 9000)

	function yichu() {
		$('.qishi').fadeOut(3000);
	}

	/*setTimeout(chuxian(),9000)
		function chuxian() {
			$('.shouye').fadeIn(4000).addClass('active').siblings().removeClass('active');
		}*/

	$('.fhshouye').click(function() {
		$('.xiangqing').hide();
		$('.shouye').show();
	})
	$('.ziye').click(function() {
		$('.shouye').hide();
		$('.xiangqing').show();
	})

	/*起始页动画切换结束*/
	/*底部按钮切换开始*/
	$('.btn').click(function() {
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.content').eq(_index).addClass('active').siblings().removeClass('active');
		})
		/*底部按钮切换结束*/
})