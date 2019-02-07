/// <reference path="@types/jquery/JQuery.d.ts" />

$(document).ready(() => {
	setTimeout(
	function(){
		$("#content").delay(5000).html("<h1>Привет мир</h1>");
	}, 5000);
});