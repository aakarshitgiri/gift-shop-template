'use strict';
jQuery(document).ready(function ($) {

	var equalWidthForCountdown = function () {

		if (!md.mobile() && !md.phone() && !md.tablet()) {
			$('.tm-countdown, .product-countdown').each(function () {

				var max_width = 0;

				$(this).find('.countdown-section').each(function () {

					var width = $(this).outerWidth();

					if (width > max_width) {
						max_width = width;
					}
				});

				$(this).find('.countdown-section').css('width', max_width);
			});
		}
	};

	$('.demo-instagram > .wpb_column > .vc_column-inner > .wpb_wrapper').slick({
		infinite: true,
		loop: true,
		dots: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrow: true,
		auto_play: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.learts-countdown').each(function () {
		var $this = $(this),
			format = 'DHMS',
			text_singular = $this.attr('data-label-singular').split(','),
			text_plural = $this.attr('data-label-plural').split(','),
			today = new Date(),
			server_date = new Date($this.attr('data-server-date'));

		$this.countdown('destroy');

		if ($this.is('.user-timezone')) {
			$this.countdown({
				labels: text_plural,
				labels1: text_singular,
				format: format,
				until: today + 200000,
				onTick: function () {
					equalWidthForCountdown();
				},
			});
		} else {
			$this.countdown({
				labels: text_plural,
				labels1: text_singular,
				format: format,
				until: today + 200000,
				serverSync: server_date,
				onTick: function () {
					equalWidthForCountdown();
				},
			});
		}
	});

	$('.menu-item-3020 a').on('click', function () {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});

	$('.button-scroll-down').on('click', function () {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});

});
