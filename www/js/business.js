(function ($) {
	var $doc = $(document);

	$doc.on('pageshow', '#business-profile-page', function () {
		handler.compile([{
			url: "http://redigo.me/cards/get/" + $.mobile.flash(),
			template: "#Business-Template",
			parent: '.rg-business-profile'
		}], {
			before: function () {
				$.mobile.loading('show', {
					text: 'טוען...',
					textVisible: true,
				});
			},
			after: function () {
				$.mobile.loading('hide');
			}
		});
	});
})(jQuery);