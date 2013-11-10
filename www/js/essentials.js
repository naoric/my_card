(function ($) {
    "use strict";

    $.fn.ajaxify = function () {
        if (this.is('form')) {
            var method = this.attr('method'),
                action = this.attr('action'),
                self = this;

            return $.ajax(action, {
                url: action,
                method: method,
                dataType: 'json',
                data: self.serialize()
            });
        }
    };
}());