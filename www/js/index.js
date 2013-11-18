/*jslint browser:true*/
/*global jQuery:true*/
/*global console:true*/
(function ($) {
    "use strict";
    
    var $doc = $(document);
    $doc.on('pageinit', '#welcome', function (e) {
        $.ajax({
            url: 'http://redigo.me/sync',
            method: 'post',
            dataType: 'json'
        }).done(function (res) {
            var target = (res.status === '1') ? '#profile' : '#login';
            $.mobile.navigate(target, {transition: 'slideup'});
        });
    });
    $doc.on('pageinit', '#registration', function (e) {
        var validation = {
            rules: {
                password: {
                    required: true,
                    minlength: 5
                },
                birth_date: {
                    required: true

                },
                full_name: {
                    required: true,
                    minlength: 2

                },
                veriPass: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                password: {
                    required: "אנא הכנס סיסמה",
                    minlength: "הסיסמה חייבת להכיל לפחות 6 תוים"
                },
                full_name: {
                    required: "אנא הכנס שם מלא",
                    minlength: "שם חייב להכיל לפחות 2 תוים"
                },
                birth_date: {
                    required: "אנא הכנס תאריך לידה"
                },
                veriPass: {
                    required: "אנא בחר סיסמה",
                    equalTo: "הסיסמה אינה תואמת"
                },
                email: {
                    required: "אנא הכנס כתובת דואר אלקטרוני",
                    email: "כתובת דואר אלקטרוני אינה תקינה"
                }
            }
        };
        $('#signup').ajaxify({
            validation: validation,
            success: function (res) {
                var key, $this = $(this);
                if (res.status === "success") {
                    $.mobile.route('#login', {
                        flash: {
                            header: 'הרשמה התבצעה בהצלחה',
                            content: 'ההרשמה התבצעה בהצלחה. הכנסו לחשבון הדוא"ל שלכם הפעילו את החשבון שלכם ותהנו!'
                        },
                        transition: 'slide'
                    });
                } else if (res.status === "failed") {
                    $this.errors(res);
                }
            },
            fail: function (err) {}, // Phonegap notification alert
            always: function (e) {}
        });
    });
    $doc.on('pageinit', '#login', function (e) {
        var validation = {
            rules: {
                'login-password': {
                    required: true,
                    minlength: 5
                },
                'login-email': {
                    required: true,
                    email: true
                }
            },
            messages: {
                'login-password': {
                    required: "אנא הכנס סיסמה",
                    minlength: "הסיסמה חייבת להכיל לפחות 6 תוים"
                },
                'login-email': {
                    required: "אנא הכנס כתובת דואר אלקטרוני",
                    email: "כתובת דואר אלקטרוני אינה תקינה"
                }
            }
        };

        $('#login-form').ajaxify({
            validation: validation,
            success: function (res) {
                if (res.status === 'success') {
                    $.mobile.save({
                        email: $('#login-email').val(),
                        password: $('#login-password').val()
                    });
                    $.mobile.navigate('#profile', 'slide');
                } else if (res.status === "failed") {
                    $('#login-notes')
                        .css('color', 'red')
                        .html(res.message);
                }
            },
            fail: function (err) {} // Phonegap notification alert
        });
    });
}(jQuery));