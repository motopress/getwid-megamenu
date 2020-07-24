(function ($) {

	$(document).ready(function () {
		const menus = $('.wp-block-mp-megamenu');

		function setDropdownsPosition(menus) {
			menus.each((index, menu) => {
				if ($(menu).hasClass('is-mobile')) {
					$(menu).find('.wp-block-mp-megamenu-item__dropdown-wrapper').css({
						'left': '',
						'width': '',
						'max-width': ''
					});
					return;
				}

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

		function setDropdownsContentWidth(menus) {
			menus.each((index, menu) => {
				const contentWidth = $(menu).data('dropdown-content-width');
				if (contentWidth) {
					$(menu).find('.wp-block-mp-megamenu-item__dropdown-content').css({
						'max-width': contentWidth
					});
				}
			});
		}

		function showMenuToggleButton(menus) {
			menus.each((index, menu) => {
				if (!$(menu).hasClass('is-collapsible')) {
					return;
				}
				const breakpoint = $(menu).data('responsive-breakpoint');
				const toggleButtonWrapper = $(menu).find('.wp-block-mp-megamenu__toggle-wrapper');
				const toggleButton = $(menu).find('.wp-block-mp-megamenu__toggle');

				if (breakpoint >= $(window).width()) {
					toggleButtonWrapper.removeClass('is-hidden');
					$(menu).addClass('is-mobile');
				} else {
					toggleButtonWrapper.addClass('is-hidden');
					$(menu).removeClass('is-mobile is-opened');
				}
			});
		}

		function attachToggleActionToButtons(menus) {
			menus.each((index, menu) => {
				$(menu).on('click', '.wp-block-mp-megamenu__toggle', function (event) {
					toggleMobileMenu($(this), $(menu));
				});

				$(menu).on('click', '.wp-block-mp-megamenu-item__toggle', function (event) {
					let dropdown = $(this).closest('.wp-block-mp-megamenu-item').find('.wp-block-mp-megamenu-item__dropdown-wrapper');
					toggleMobileMenu($(this), $(dropdown));
				});
			});
		}

		function toggleMobileMenu(toggle_button, menu) {
			toggle_button.toggleClass('is-opened');
			menu.toggleClass('is-opened');
		}

		showMenuToggleButton(menus);
		attachToggleActionToButtons(menus);
		setDropdownsPosition(menus);
		setDropdownsContentWidth(menus);

		$(window).resize(function () {
			showMenuToggleButton(menus);
			setDropdownsPosition(menus);
		});

	});

})(jQuery);