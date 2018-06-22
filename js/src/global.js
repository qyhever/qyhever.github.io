$(function() {
	var setMenu = function ( urlpart ) {
		// 先获得当前页面的 pathname
		var pathname = urlpart || location.pathname;

		// console.log( pathname );
		// 在 菜单的 a 标签中找到对应 href 的取值为 pathname 的 a 标签
		$( '.menu .menu-item a' ).toArray().filter(function ( dom ) {
			// 只需要判断 dom 元素的 href 是否与 给定的 pathname 一致即可
			// console.log( dom.href );
			return dom.pathname + '/' == pathname;
		}).forEach(function ( dom ) {
			$( dom ).parent().addClass( 'active' );
			// console.log( dom );
		});


	};
	setMenu();
});