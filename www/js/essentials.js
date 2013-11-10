(function ($) {
    "use strict";

    $.fn.ajaxify = function (validation, success, fail, always) {
        validation = validation || 'novalid';
        

        $(document).on('submit', '#' + this.attr('id'), function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($this.is('form')) {
                if (validation == 'novalid' || $this.validate(validation).form()) {
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
