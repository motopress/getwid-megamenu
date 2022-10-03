(function ($) {
	$(document).ready(function () {
		const menus = $('.gw-mm');
		const plainMenus = $('.gw-pm');

		function setDropdownsPosition(menus) {
			menus.each((index, menu) => {
				if ($(menu).hasClass('is-mobile')) {
					$(menu).find('.gw-mm-item__dropdown-wrapper').css({
						'left': '',
						'width': '',
						'max-width': ''
					});
					return;
				}

				const dropdowns = $(menu).find('.gw-mm-item__dropdown-wrapper');
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
					$(menu).find('.gw-mm-item__dropdown-content').css({
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
				const toggleButtonWrapper = $(menu).find('.gw-mm__toggle-wrapper');
				const toggleButton = $(menu).find('.gw-mm__toggle');

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

				// I think(?) this is for the larger menu on mobile and not 
				// the submenu. Have to test that out.  
				$(menu).on('click', '.gw-mm__toggle', function (event) {
					toggleMobileMenu($(this), $(menu));
				});
				// I could write an if statement here but I still don't know 
				// the full jurisdictions of the this operator below. 
				// I know that this operator is a param which finds a
				// class within the DOM. 


				// Part 2:
				// I need to expand this click operator to beyond '.gw-mm-item__toggle'.

				// .gw-mm-item__link  
				$(menu).on('click', '.gw-mm-item__link', function (event) {
					// I think we're in the menu DOM right now because the function is called menus. 
					// But lets run a console.log 
					console.log($(this));	
					// The console log for that was this: 
					// Object { 0: button.gw-mm-item__toggle, length: 1 }
					// 0: <button class="gw-mm-item__toggle is-opened">
					// length: 1
					// <prototype>: Object { jquery: "3.6.0", constructor: S(e, t), length: 0, … }
					// frontend.js:83:13



					let dropdown = $(this).closest('.gw-mm-item').find('.gw-mm-item__dropdown-wrapper');
					toggleMobileMenu($(this), $(dropdown));
				});
			});
		}

		function toggleMobileMenu(toggle_button, menu) {
			toggle_button.toggleClass('is-opened');
			menu.toggleClass('is-opened');
		}

		function setMobileMenuPosition(menus) {
			menus.each((index, menu) => {
				const dropdown = $(menu).find('.gw-mm__content-wrapper');

				if (!$(menu).hasClass('is-mobile')) {
					$(dropdown).css({
						'left': '',
						'width': '',
					});
					return false;
				}

				const menuCoords = $(menu).offset();
				const left = -menuCoords.left;

				$(dropdown).css({
					'left': left,
					'width': $(window).width(),
				});
			});
		}

		function setPlainMenusDropdownPosition(menus) {
			menus.each((index, menu) => {
				const dropdowns = $(menu).find('.gw-pm-item__dropdown');
				const isInsideMegaMenu = $(menu).closest('.gw-mm').length;
				dropdowns.each((index, dropdown) => {
					$(dropdown).removeClass('toleft');

					const rightEdgePosition = $(dropdown).offset().left + $(dropdown).width();
					const rootWidth = isInsideMegaMenu
						? $(menu).closest('.gw-mm-item__dropdown-wrapper').offset().left + $(menu).closest('.gw-mm-item__dropdown-wrapper').width()
						: $(window).width();
					let isLeft = false;

					if (rightEdgePosition >= rootWidth) {
						isLeft = true;
					}

					if (isLeft) {
						$(dropdown).addClass('toleft');
					}
				});
			});
		}

		showMenuToggleButton(menus);
		attachToggleActionToButtons(menus);
		setDropdownsPosition(menus);
		setDropdownsContentWidth(menus);
		setMobileMenuPosition(menus);
		setPlainMenusDropdownPosition(plainMenus);

		$(window).resize(function () {
			showMenuToggleButton(menus);
			setDropdownsPosition(menus);
			setMobileMenuPosition(menus);
			setPlainMenusDropdownPosition(plainMenus);
		});
	});
})(jQuery);