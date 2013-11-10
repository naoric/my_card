(function ($) {
    "use strict";

//    $.fn.ajaxify = function (success, fail, always, validation) {
    $.fn.ajaxify = function (opts) {
        // @todo add something
        opts = $.extend({
            validation: false,
            loading: true, // not sure this is needed
            success: function () {
            },
            fail: function () {
            },
            always: function () {
            }
        }, opts);

        $(document).on('submit', '#' + this.attr('id'), function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($this.is('form')) {
                if (!opts.validation || $this.validate(opts.validation).form()) {
                    var method = $this.attr('method'),
                        action = $this.attr('action'),
                        self = $this;

                    $.ajax(action, {
                        url: action,
                        method: method,
                        dataType: 'json',
                        data: self.serialize()
                    }).done(success)
                        .fail(fail)
                        .always(always);
                }
            }
            return false;
        });
    };
}(jQuery));
