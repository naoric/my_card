(function ($) {
	var $doc = $(document);

	$doc.on('pageshow', '#business-profile-page', function () {
		
		
		handler.compile([{
		url: "http://redigo.me/cards/get/"+$.mobile.flash(),
		template: "#Business-Template",
		parent: 'div[data-role=content]'
	}]);
		
	});
	
	
		

})(jQuery);