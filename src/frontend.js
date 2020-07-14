(function($) {

	$(document).ready(function () {
		const menus = $('.wp-block-mp-megamenu.has-full-width-dropdown');

		function setDropdownsPosition(menus){
			menus.each((index, menu) => {
				const dropdowns = $(menu).find('.wp-block-mp-megamenu-item__dropdown-wrapper');
				const menuCoords = $(menu).offset();

				dropdowns.each((index, dropdown) => {

					$(dropdown).css({
						'left': -menuCoords.left,
						'width': $(window).width()
					});
				});
			});
		}

		setDropdownsPosition(menus);

		$(window).resize(function () {
			setDropdownsPosition(menus);
		});

	});

})(jQuery);