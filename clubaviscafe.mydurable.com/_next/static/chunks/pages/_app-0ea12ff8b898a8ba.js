(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        91118: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(78510)
            }])
        },
        78510: function(e, n, r) {
            "use strict";
            r.r(n);
            var t = r(26042),
                o = r(85893),
                i = (r(74831), r(57805), r(9765), r(9008)),
                u = r.n(i);
            "undefined" !== typeof navigator && (function() {
                var e, n = navigator.userAgent,
                    r = n.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (/trident/i.test(r[1])) return "IE " + ((e = /\brv[ :]+(\d+)/g.exec(n) || [])[1] || "");
                if ("Chrome" === r[1] && null != (e = n.match(/\b(OPR|Edge)\/(\d+)/))) return e.slice(1).join(" ").replace("OPR", "Opera");
                r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = n.match(/version\/(\d+)/i)) && r.splice(1, 1, e[1]);
                var t = {
                    browser: r[0],
                    version: r[1],
                    supported: !0
                };
                switch (r[0].toLowerCase()) {
                    case "chrome":
                    case "firefox":
                        t.supported = r[1] >= 80;
                        break;
                    case "safari":
                        t.supported = r[1] >= 15;
                        break;
                    case "opera":
                        t.supported = r[1] >= 66;
                        break;
                    case "msie":
                        t.supported = !1;
                        break;
                    default:
                        t.supported = !0
                }
                return t
            }().supported || (window.unsupportedBrowser = !0));
            n.default = function(e) {
                var n, r = e.Component,
                    i = e.pageProps;
                return (r.getLayout || function(e) {
                    return e
                })((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(r, (0, t.Z)({}, i)), (0, o.jsxs)(u(), {
                        children: [(0, o.jsx)("meta", {
                            httpEquiv: "content-language",
                            content: (null === i || void 0 === i || null === (n = i.website) || void 0 === n ? void 0 : n.language) || "en"
                        }), (0, o.jsx)("style", {
                            children: "\n                    #nprogress .bar {\n                        background:".concat(i.website ? i.website.secondaryColor : "#999", ";\n                        box-shadow: 0 0 10px ").concat(i.website ? i.website.secondaryColor : "#999", ";\n                    }\n                ")
                        })]
                    })]
                }))
            }
        },
        57805: function() {},
        74831: function() {},
        9765: function() {},
        9008: function(e, n, r) {
            e.exports = r(5443)
        },
        14924: function(e, n, r) {
            "use strict";

            function t(e, n, r) {
                return n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r, e
            }
            r.d(n, {
                Z: function() {
                    return t
                }
            })
        },
        26042: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return o
                }
            });
            var t = r(14924);

            function o(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), o.forEach((function(n) {
                        (0, t.Z)(e, n, r[n])
                    }))
                }
                return e
            }
        }
    },
    function(e) {
        var n = function(n) {
            return e(e.s = n)
        };
        e.O(0, [9774, 179], (function() {
            return n(91118), n(90387)
        }));
        var r = e.O();
        _N_E = r
    }
]);