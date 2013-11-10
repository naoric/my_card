(function ($) {
    "use strict";
    
    var $doc = $(document);
    $doc.on('pageinit', '#welcome', function (e) {
        // @todo Check if user is already logged in
        setTimeout(function () { $.mobile.navigate('#login', { transition: 'slideup' }); }, 2000);
    });
    $doc.on('pageinit', '#login', function (e) {
        // @todo Login form validation stuff
    });
}(jQuery));