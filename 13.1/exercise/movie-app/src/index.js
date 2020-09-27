'use strict';

let rating_w = $('#rating').width();
console.log(rating_w);
let star_w =  $($('.star')[0]).width();
console.log( 'star_w', star_w );
let pct = function( x, w, l ){
	return Math.ceil( l * ( x / w ) );
}
$('#rating').on('mousemove', ".star", function (evt) {
	// console.log($(this).index(),
	// 	evt.offsetX,
	// 	evt.offsetY,
	// 	// pct( evt.offsetX, star_w, 20 ) + ( $(this).index() * 20 ));
	// 	pct( evt.offsetX, star_w, 100 ),
	// 	evt.offsetX / star_w);
	let p = pct( evt.offsetX, star_w, 20 ) + ( $(this).index() * 20 );
	console.log( p );
	// $(this).css('opacity', "" + (evt.offsetX / star_w) );
	starOpacity( p, $(this).index() );
});

let stars = $('#rating').children('.star');
function starOpacity( p, idx ){
	for ( let i = 0; i <= idx; i++) {
		stars[i].style.opacity = (p / (20 * (i+1))).toString();
	}
}
