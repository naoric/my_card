(function ($) {
	var $doc = $(document);
	$doc.on('pageinit', '#business-profile-page', function () {
		$.get("http://redigo.me/cards/get/" + $.mobile.flash(), function () {
		}).done(function (result) {
			var source = $("#Business-Template").html();
			var template = Handlebars.compile(source);
			$('div[data-role=content]').append(template(result));
		});
	});	
})(jQuery);