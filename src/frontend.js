(function ($) {

	$(document).ready(function () {
		const menus = $('.wp-block-mp-megamenu');

		function setDropdownsPosition(menus) {
			menus.each((index, menu) => {
				const dropdowns = $(menu).find('.wp-block-mp-megamenu-item__dropdown-wrapper');
				const menuCoords = $(menu).offset();
				const maxWidth = $(menu).data('dropdown-width');
				const width = $(menu).hasClass('has-full-width-dropdown') ? $(window).width() : $(menu).width();
				let left = $(menu).hasClass('has-full-width-dropdown') ? -menuCoords.left : 0;

				if (maxWidth && maxWidth < width) {
					left = left + (width - maxWidth) / 2;
				}

				dropdowns.each((index, dropdown) => {
					$(dropdown).css({
						'left': left,
						'width': width,
						'max-width': maxWidth
					});
				});
			});
		}

		setDropdownsPosition(menus);

		$(window).resize(function () {
			setDropdownsPosition(menus);
		});

		function setDropdownsContentWidth(menus) {
			menus.each((index, menu) => {
				const contentWidth = $(menu).data('dropdown-content-width');
				if(contentWidth){
					$(menu).find('.wp-block-mp-megamenu-item__dropdown-content').css({
						'max-width': contentWidth
					});
				}
			});
		}

		setDropdownsContentWidth(menus);
	});

})(jQuery);