/*jslint browser:true*/
/*global jQuery:true*/
/*global console:true*/
/*global Handlebars:true*/
/*global alert:true*/
/*global cordova:true*/
(function ($) {
	"use strict";
	$.mobile.flash = function (data) {
		var ret;
		if (typeof data === "undefined") {
			if (null === sessionStorage.getItem('flash')) {
				return null;
			}
			ret = JSON.parse(sessionStorage.getItem('flash'));
			sessionStorage.removeItem('flash');
			return ret;
		} else {
			sessionStorage.setItem('flash', JSON.stringify(data));
		}
	};

	$.mobile.store = function (key, value, override) {
		if (!override && localStorage.getItem(key) !== null) {
			return;
		}

		localStorage.setItem(key, value);
	};

	$.mobile.load = function (key) {
		if (typeof key !== "undefined") {
			return localStorage.getItem(key);
		}
	};

	$.mobile.save = function (data, override) {
		var prop = null;
		if (typeof data !== "object") {
			return;
		}
		if (typeof override === "undefined") {
			override = true;
		}
		for (prop in data) {
			if (data.hasOwnProperty(prop)) {
				$.mobile.store(prop, JSON.stringify(data[prop]), override);
			}
		}
	};

	$.mobile.hasFlash = function () {
		return !!sessionStorage.flash;
	};

	$.mobile.route = function (path, opts) {
		opts = opts || {};
		opts = $.extend({
			flash: {}
		}, opts);
		$.mobile.flash(opts.flash);
		$.mobile.navigate(path);
	};

	//    $.fn.ajaxify = function (success, fail, always, validation) {
	$.fn.ajaxify = function (opts) {
		// @todo add something
		opts = $.extend({
			validation: false,
			loading: true, // not sure this is needed
			success: function () {},
			fail: function () {},
			always: function () {}
		}, opts);

		$(document).on('submit', '#' + this.attr('id'), function (e) {
			var $this = $(this),
				method, action, self;
			e.preventDefault();

			if ($this.is('form')) {
				if (!opts.validation || $this.validate(opts.validation).form()) {
					method = $this.attr('method');
					action = $this.attr('action');
					self = $this;

					$.mobile.loading('show', {
						text: '...טוען',
						textVisible: true
					});

					$.ajax(action, {
						url: action,
						method: method,
						dataType: 'json',
						data: self.serialize()
					}).done(opts.success)
						.fail(opts.fail)
						.always(opts.always, function () {
							$.mobile.loading('hide');
						});
				}
			}
			return false;
		});
	};

	$.fn.errors = function (res) {
		var key = null;
		if (this.is("form") && res.messages) {
			for (key in res.messages) {
				if (res.messages.hasOwnProperty(key)) {
					$('#' + key).after('<label class="error" for="' + key + '">' +
						res.messages[key][0] + '</label>');
				}
			}
		}
	};

	window.one = function (sel) {
		return document.querySelector(sel);
	};

	window.all = function (sel) {
		return document.querySelectorAll(sel);
	};
	Array.prototype.first = function () {
		if (this[0])
			return this.result;
		else return this[0];
	};

	window.handler = {
		baseUrl: "http://redigo.me/",
		compile: function (arrSource, options) {
			var templateCount = arrSource.length,
				count = 0,
				settings = $.extend({
					before: function () {},
					each: function (currCount) {},
					after: function () {}
				}, options);

			settings.before();

			$.each(arrSource, function (key, value) {
				if (value.url) {
					$.ajax({
						url: value.url,
						method: value.method || "get",
						dataType: "json",
					}).done(function (result) {
						$.mobile.loading('hide');
						result = result.result || result;
						var source = $(value.template).html(),
							template = Handlebars.compile(source);
						$(value.parent).html(template(result));
						if (value.refresh) {
							$(value.parent).listview("refresh");
						}
					}).fail(function () {
						alert("error");
					}).always(function () {
						count++;
						settings.each(count);
						if (count === templateCount) {
							settings.after();
						}
					});
				} else {
					var res = JSON.parse($.mobile.load(value.storage)),
						source = $(value.template).html(),
						template = Handlebars.compile(source);
					$(value.parent).html(template(res));
					if (value.refresh) {
						$(value.parent).listview("refresh");
					}
					count++;
				}
			});
		}
	};
	$.mobile.scan = function () {
		cordova.plugins.barcodeScanner.scan(function (result) {
			$.post("http://redigo.me/cards/scanner", {
				id: result.text
			}).done(function (data) {
				if (data.status === "failed")
					alert("already scanned");
				else {
					alert("you got " + data.result.current_points + " points");
				}
			});
		}, function (error) {
			alert(error);
		});
	};
	$(document).on('click', '.scan-it', function (e) {
		$.mobile.scan();
	});

}(jQuery));