'use strict';

// TODO: Make it OOP

$(document).ready(function () {

	/*
	 VARIABLES
	 */

	let emptyTitle     = true;
	let emptyRating    = true;
	const $rating      = $('#rating');
	const $stars       = $($rating).children('.star');
	const $addBt       = $('#add_bt');
	const $titleName   = $('#title_name');
	const $list        = $('#list');
	const $actions     = $('#actions');
	const addBText     = '+';
	const removeBtText = '-';

	/*
	 DOM Updates
	 */

	$($addBt).text(addBText);

	/*
	 EVENTS
	 */

	$titleName.on('blur mouseleave keyup', function () {
		emptyTitle = !$(this).val();
		checkBtActivation();
	});

	$titleName.on('mouseover', function () {
		$(this).focus();
	});

	$rating.on('click', '.star', function () {
		emptyRating = false;
		checkBtActivation();
		const idx = $(this).index();
		$stars.removeClass('bright');
		$stars.filter(function () {
			return $(this).index() <= idx;
		}).addClass('bright');
	});

	$addBt.on('click', function () {
		if (emptyTitle || emptyRating) {
			return;
		}
		/**/
		const $listRating = $rating.clone();
		$listRating.removeAttr('id');
		/**/
		const $listTitle = $('<div>');
		$listTitle.text($titleName.val());
		$listTitle.addClass('list_title');
		/**/
		const $removeBt = $addBt.clone();
		$removeBt.removeAttr('id').removeClass('hvcenter add_bt add_bt_enabled').addClass('remove_bt').text(removeBtText).attr('title', 'Remove from list');
		/**/
		const $listActions = $('<div>');
		$listActions.append($removeBt).addClass('actions');
		/**/
		const $entry = $('<div>');
		$entry.append($listTitle).append($listRating).append($listActions).addClass('list_item');
		$list.append($entry);

		resetAddForm();
	});

	$list.on( 'click', '.remove_bt', function(){
		const $item = $(this).closest('.list_item');
		$item.css('background-color', '#cccccc');
		$item.fadeOut( function(){
			$(this).remove();
		});
	});


	/*
	 FUNCTIONS
	 */

	function resetAddForm() {
		$titleName.val('');
		emptyTitle = true;
		$stars.removeClass('bright');
		emptyRating = true;
		checkBtActivation();
	}

	function checkBtActivation() {
		if (emptyTitle || emptyRating) {
			switchClass($addBt, 'add_bt_enabled', 'add_bt_disabled');
		} else {
			switchClass($addBt, 'add_bt_disabled', 'add_bt_enabled');
		}
	}

	function switchClass($elem, replaceThis, byThis) {
		if ($elem.hasClass(replaceThis)) {
			$elem.removeClass(replaceThis);
		}

		if ( !$elem.hasClass(byThis)) {
			$elem.addClass(byThis);
		}
	}

});
