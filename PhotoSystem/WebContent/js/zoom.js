!
function(o) {
	function i(i) {
		function e() {
			function i(o) {
				d.html(o), o.show(), d.removeClass("loading")
			}
			var e = o(this),
				t = parseInt(d.css("borderLeftWidth")),
				n = u - 2 * t,
				a = v - 2 * t,
				h = e.width(),
				l = e.height();
			if (h == d.width() && n >= h && l == d.height() && a >= l) return void i(e);
			if (h > n || l > a) {
				var r = l > a ? a : l,
					c = h > n ? n : h;
				c / h >= r / l ? (e.width(Math.round(h * r / l)), e.height(r)) : (e.width(c), e.height(Math.round(l * c / h)))
			}
			d.animate({
				width: e.width(),
				height: e.height(),
				marginTop: -(e.height() / 2) - t,
				marginLeft: -(e.width() / 2) - t
			}, 100, function() {
				i(e)
			})
		}
		i && i.preventDefault();
		var t = o(this),
			n = t.attr("href");
		if (n) {
			o("#zoom .previous, #zoom .next").show(), t.hasClass("zoom") && o("#zoom .previous, #zoom .next").hide(), c || (c = !0, l.show(), h.addClass("zoomed"));
			var a = o(new Image).hide().css({
				width: "auto"
			});
			h.append(a), d.html("").delay(500).addClass("loading"), d.prepend(r), a.load(e).attr("src", n), s = t
		}
	}
	function e() {
		var i = s.parents("div.ss").prev();
		0 == i.length && (i = o(".gallery div:last-child")), i.find("a:eq(0)").trigger("click")
	}
	function t() {
		var i = s.parents("div.ss").next();
		0 == i.length && (i = o(".gallery div:first-child")), i.find("a:eq(0)").trigger("click")
	}
	function n(o) {
		o && o.preventDefault(), c = !1, s = null, l.hide(), h.removeClass("zoomed"), d.empty()
	}
	function a() {
		u = o(window).width(), v = o(window).height()
	}
	var h = o("body");
	h.append('<div id="zoom"><a class="close"></a><a href="#previous" class="previous"></a><a href="#next" class="next"></a><div class="content loading"></div></div>');
	var l = o("#zoom").hide(),
		d = o("#zoom .content"),
		r = '<div class="overlay"></div>',
		c = !1,
		s = null,
		u = o(window).width(),
		v = o(window).height();
	!
	function() {
		l.on("click", function(i) {
			i.preventDefault(), "zoom" == o(i.target).attr("id") && n()
		}), o("#zoom .close").on("click", n), o("#zoom .previous").on("click", e), o("#zoom .next").on("click", t), o(document).keydown(function(o) {
			s && ((38 == o.which || 40 == o.which) && o.preventDefault(), 27 == o.which && n(), 37 != o.which || s.hasClass("zoom") || e(), 39 != o.which || s.hasClass("zoom") || t())
		}), 1 == o(".gallery a").length && o(".gallery a")[0].addClass("zoom"), o(".zoom, .gallery a").on("click", i)
	}(), function() {
		o(window).on("resize", a)
	}(), function() {
		o(window).on("mousewheel DOMMouseScroll", function(o) {
			s && (o.stopPropagation(), o.preventDefault(), o.cancelBubble = !1)
		})
	}()
}(jQuery);