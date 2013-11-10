/*jslint browser:true*/
/*global jQuery:true*/
(function ($) {
    "use strict";

    var $doc = $(document);
    $doc.on('pageinit', '#welcome', function (e) {
        // @todo Check if user is already logged in
        // @todo change from registration to login (if necessary)
        setTimeout(function () {
            $.mobile.navigate('#registration', {
                transition: 'slideup'
            });
        }, 2000);
    });
    $doc.on('pageinit', '#login', function (e) {
        // @todo Login form validation stuff
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
                },
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
                $.mobile.navigate('#login', {
                    data: {
                        notification: 'ההרשמה התבצעה בהצלחה, הכנסו לחשבון הדוא"ל שלכם, הפעילו את החשבון שלכם ותהנו!'
                    },
                    transition: 'slide'
                });
            },
            fail: function (err) {},
            always: function (e) {}
        });
    });
}(jQuery));