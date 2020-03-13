'use strict';

{

	const menuItems = document.querySelectorAll('.menu li a');
	const contents = document.querySelectorAll('.content');


	menuItems.forEach(clickedItem => {
		clickedItem.addEventListener('click', e => {
			e.preventDefault(); //リンク先に飛ぶを無効化

			menuItems.forEach(item => {
				item.classList.remove('active');
			}); //全ての.menu li aからactiveを取り除く

			clickedItem.classList.add('active'); //クリックされたmenu li aにactiveをつける

			contents.forEach(content => {
				content.classList.remove('active'); //全ての.contentにそれぞれactiveを外す
			});

			document.getElementById(clickedItem.dataset.id).classList.add('active');
		});

	});

	var swiper = new Swiper('.swiper-container', {
		navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		loop: true,
　　　　 speed: 500,
		autoplay: {
	      	delay: 5000,
	    	disableOnInteraction: true
	  	　},
	});


}





//タブとハンバーガーメニューを実装する
//スライドショーを作成するのに参考にしたサイト　https://haniwaman.com/swiper/#i-3




