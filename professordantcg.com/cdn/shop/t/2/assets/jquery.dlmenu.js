/**
 * jquery.dlmenu.js v1.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
! function(l, i, n) {
    "use strict";
    var e = i.Modernizr,
        t = l("body");
    l.DLMenu = function(n, i) {
        this.$el = l(i), this._init(n)
    }, l.DLMenu.defaults = {
        animationClasses: {
            classin: "dl-animate-in-1",
            classout: "dl-animate-out-1"
        },
        onLevelClick: function(n, i) {
            return !1
        },
        onLinkClick: function(n, i) {
            return !1
        },
        backLabel: "Back",
        useActiveItemAsBackLabel: !1,
        useActiveItemAsLink: !1,
        resetOnClose: !0
    }, l.DLMenu.prototype = {
        _init: function(n) {
            this.options = l.extend(!0, {}, l.DLMenu.defaults, n), this._config();
            this.animEndEventName = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd",
                msAnimation: "MSAnimationEnd",
                animation: "animationend"
            }[e.prefixed("animation")] + ".dlmenu", this.transEndEventName = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            }[e.prefixed("transition")] + ".dlmenu", this.supportAnimations = e.cssanimations, this.supportTransitions = e.csstransitions, this._initEvents()
        },
        _config: function() {
            this.open = !1, this.$trigger = this.$el.children(".dl-trigger"), this.$menu = this.$el.children("ul.dl-menu"), this.$menuitems = this.$menu.find("li:not(.dl-back)"), this.$el.find("ul.dl-submenu").prepend('<li class="dl-back"><a href="#">' + this.options.backLabel + "</a></li>"), this.$back = this.$menu.find("li.dl-back"), this.options.useActiveItemAsBackLabel && this.$back.each(function() {
                var n = l(this),
                    i = n.parents("li:first").find("a:first").text();
                n.find("a").html(i)
            }), this.options.useActiveItemAsLink && this.$el.find("ul.dl-submenu").prepend(function() {
                var n = l(this).parents("li:not(.dl-back):first").find("a:first");
                return '<li class="dl-parent"><a href="' + n.attr("href") + '">' + n.text() + "</a></li>"
            })
        },
        _initEvents: function() {
            var a = this;
            this.$trigger.on("click.dlmenu", function() {
                return a.open ? a._closeMenu() : (a._openMenu(), t.off("click").children().on("click.dlmenu", function() {
                    a._closeMenu()
                })), !1
            }), this.$menuitems.on("click.dlmenu", function(n) {
                n.stopPropagation();
                var i = l(this),
                    e = i.children("ul.dl-submenu");
                if (0 < e.length && !l(n.currentTarget).hasClass("dl-subviewopen")) {
                    var t = e.clone().css("opacity", 0).insertAfter(a.$menu),
                        s = function() {
                            a.$menu.off(a.animEndEventName).removeClass(a.options.animationClasses.classout).addClass("dl-subview"), i.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"), t.remove()
                        };
                    return setTimeout(function() {
                        t.addClass(a.options.animationClasses.classin), a.$menu.addClass(a.options.animationClasses.classout), a.supportAnimations ? a.$menu.on(a.animEndEventName, s) : s.call(), a.options.onLevelClick(i, i.children("a:first").text())
                    }), !1
                }
                a.options.onLinkClick(i, n)
            }), this.$back.on("click.dlmenu", function(n) {
                var i = l(this),
                    e = i.parents("ul.dl-submenu:first"),
                    t = e.parent(),
                    s = e.clone().insertAfter(a.$menu),
                    o = function() {
                        a.$menu.off(a.animEndEventName).removeClass(a.options.animationClasses.classin), s.remove()
                    };
                return setTimeout(function() {
                    s.addClass(a.options.animationClasses.classout), a.$menu.addClass(a.options.animationClasses.classin), a.supportAnimations ? a.$menu.on(a.animEndEventName, o) : o.call(), t.removeClass("dl-subviewopen");
                    var n = i.parents(".dl-subview:first");
                    n.is("li") && n.addClass("dl-subviewopen"), n.removeClass("dl-subview")
                }), !1
            })
        },
        closeMenu: function() {
            this.open && this._closeMenu()
        },
        _closeMenu: function() {
            var n = this,
                i = function() {
                    n.$menu.off(n.transEndEventName), n.options.resetOnClose && n._resetMenu()
                };
            this.$menu.removeClass("dl-menuopen"), this.$menu.addClass("dl-menu-toggle"), this.$trigger.removeClass("dl-active"), this.supportTransitions ? this.$menu.on(this.transEndEventName, i) : i.call(), this.open = !1
        },
        openMenu: function() {
            this.open || this._openMenu()
        },
        _openMenu: function() {
            var n = this;
            t.off("click").on("click.dlmenu", function() {
                n._closeMenu()
            }), this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName, function() {
                l(this).removeClass("dl-menu-toggle")
            }), this.$trigger.addClass("dl-active"), this.open = !0
        },
        _resetMenu: function() {
            this.$menu.removeClass("dl-subview"), this.$menuitems.removeClass("dl-subview dl-subviewopen")
        }
    };
    var s = function(n) {
        i.console && i.console.error(n)
    };
    l.fn.dlmenu = function(i) {
        if ("string" == typeof i) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var n = l.data(this, "dlmenu");
                n ? l.isFunction(n[i]) && "_" !== i.charAt(0) ? n[i].apply(n, e) : s("no such method '" + i + "' for dlmenu instance") : s("cannot call methods on dlmenu prior to initialization; attempted to call method '" + i + "'")
            })
        } else this.each(function() {
            var n = l.data(this, "dlmenu");
            n ? n._init() : n = l.data(this, "dlmenu", new l.DLMenu(i, this))
        });
        return this
    }
}(jQuery, window);