"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8037], {
        6604: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return x
                }
            });
            var o = t(828),
                i = t(85893),
                a = t(67294),
                l = t(26042),
                c = t(69396),
                r = t(31996),
                d = {
                    250: "duration-250",
                    300: "duration-300",
                    500: "duration-500",
                    700: "duration-700",
                    750: "duration-750"
                },
                s = {
                    fadeIn: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 !block",
                        enterTo: "opacity-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0"
                    },
                    slideFromBottom: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 translate-y-8",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-8"
                    },
                    slideFromRight: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 translate-x-8",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 translate-x-8"
                    },
                    slideFromLeft: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 -translate-x-8",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 -translate-x-8"
                    },
                    fadeAndGrow: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95"
                    },
                    zoomOut: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-105",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-105"
                    },
                    zoomIn: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95"
                    },
                    popUp: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-0",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-0"
                    },
                    none: {
                        enter: "",
                        enterFrom: "",
                        enterTo: "",
                        leave: "",
                        leaveFrom: "",
                        leaveTo: ""
                    }
                },
                u = function(e) {
                    var n, t = e.show,
                        o = void 0 === t || t,
                        u = (e.appear, e.children),
                        v = e.animation,
                        m = void 0 === v ? "none" : v,
                        g = e.duration,
                        h = void 0 === g ? 300 : g,
                        p = (e.asChild, e.unmount, e.style),
                        f = e.delay,
                        x = e.className,
                        y = (0, a.useState)(!1),
                        j = y[0],
                        w = y[1],
                        b = null !== (n = s[m]) && void 0 !== n ? n : s.none,
                        N = (0, c.Z)((0, l.Z)({}, b), {
                            enter: "".concat(b.enter, " ").concat(d[h], " ").concat(f ? "delay-".concat(f) : ""),
                            leave: "".concat(b.leave, " ").concat(d[h], " ").concat(f ? "delay-".concat(f) : "")
                        });
                    return (0, a.useEffect)((function() {
                        if (o) {
                            var e = setTimeout((function() {
                                return w(!0)
                            }), 150);
                            return function() {
                                e && clearTimeout(e)
                            }
                        }
                    }), [o]), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            className: (0, r.AK)("transition-all", j ? "".concat(N.enter, " ").concat(N.enterTo) : "".concat(N.enter, " ").concat(N.enterFrom), x),
                            style: p,
                            children: u
                        })
                    })
                },
                v = t(42708),
                m = "default",
                g = "medium",
                h = "none",
                p = "medium";
            var f = {
                    slow: 750,
                    medium: 500,
                    fast: 250
                },
                x = function(e) {
                    var n = e.children,
                        t = e.settings,
                        l = e.globalSettings,
                        c = e.unmount,
                        r = void 0 !== c && c,
                        d = e.delay,
                        s = e.className,
                        x = e.style,
                        y = function(e, n) {
                            var t = e || {},
                                o = t.type,
                                i = void 0 === o ? m : o,
                                a = t.speed,
                                l = void 0 === a ? g : a;
                            return "default" === i && (i = (null === n || void 0 === n ? void 0 : n.type) || h, l = (null === n || void 0 === n ? void 0 : n.speed) || p), {
                                type: i,
                                speed: l
                            }
                        }(t, l),
                        j = y.type,
                        w = y.speed,
                        b = (0, a.useState)(!1),
                        N = b[0],
                        F = b[1],
                        C = (0, o.Z)((0, v.YD)({
                            triggerOnce: !0
                        }), 3),
                        A = C[0],
                        k = C[1];
                    C[2];
                    return (0, a.useEffect)((function() {
                        k && F(!0)
                    }), [k]), "none" === j ? (0, i.jsx)("div", {
                        className: s,
                        style: x,
                        children: n
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [!N && (0, i.jsx)("div", {
                            className: "absolute left-0 top-8 min-h-full min-w-full",
                            ref: A
                        }), (0, i.jsx)(u, {
                            show: N,
                            animation: j,
                            duration: f[w],
                            unmount: r,
                            disableLeave: !0,
                            delay: d,
                            className: s,
                            style: x,
                            children: n
                        })]
                    })
                }
        },
        60546: function(e, n, t) {
            t.d(n, {
                OC: function() {
                    return d
                }
            });
            var o = t(85893),
                i = t(67294),
                a = t(62246),
                l = t(4433),
                c = [{
                    id: "slantLeft",
                    getPath: function(e, n) {
                        return "M".concat(e, " 0L-0 ").concat(n)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e, n) {
                        return "M0 0L".concat(e, " ").concat(n)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e, n) {
                        return "M0 0".concat(n, "L").concat(e / 2, " 0L").concat(e, " ").concat(n, "L").concat(1.5 * e, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e, n) {
                        return "M0 0L".concat(e / 2, " ").concat(n, "L").concat(e, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e, n) {
                        return "M0 0 C".concat(e / 2, " ").concat(n, " ").concat(e - e / 2, " ").concat(n, " ").concat(e, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e, n) {
                        return "M0 ".concat(n, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(n)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e, n) {
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(n, " ").concat(.3333 * e, " ").concat(n, "C").concat(.4681 * e, " ").concat(n, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(n, " ").concat(e, " ").concat(n)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e, n) {
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(n, " ").concat(.666 * e, " ").concat(n, "C").concat(.547 * e, " ").concat(n, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e, n) {
                        return "M0 0L".concat(e / 3, " ").concat(n, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(n)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e, n) {
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(n, "L").concat(e / 3, " 0L0 ").concat(n)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e, n) {
                        return "M0 ".concat(n, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e, n) {
                        return "M".concat(e, " ").concat(n, "C").concat(e / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(e, n) {
                        return "M0 ".concat(n, "H").concat(e)
                    }
                }],
                r = function(e) {
                    var n = e.width,
                        t = e.shape,
                        i = e.strokeWidth,
                        a = e.strokeColor,
                        r = e.strokeType,
                        d = c.find((function(e) {
                            return e.id === (null !== t && void 0 !== t ? t : "none")
                        })),
                        s = Math.floor(n),
                        u = "none" === d.id ? Math.floor(i) : Math.floor(s / l.c8),
                        v = d.getPath(s, u);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: a,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === r ? "40 20" : void 0
                        })
                    })
                },
                d = function(e) {
                    var n = e.border,
                        t = e.contentRef,
                        l = e.sectionDivider,
                        c = n || {},
                        d = c.type,
                        s = c.width,
                        u = c.color,
                        v = (0, i.useState)(0),
                        m = v[0],
                        g = v[1],
                        h = (0, i.useCallback)((function() {
                            var e;
                            g(null !== (e = t.current.offsetWidth) && void 0 !== e ? e : 0)
                        }), [t]);
                    return (0, a.Z)(h, n ? t : null), n ? (0, o.jsx)(r, {
                        width: m,
                        shape: l,
                        strokeType: d,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        98037: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return N
                }
            });
            var o = t(26042),
                i = t(69396),
                a = t(85893),
                l = t(31996),
                c = t(67294),
                r = t(29260),
                d = t.n(r),
                s = t(33752),
                u = t.n(s),
                v = t(41984),
                m = t(3677),
                g = t(11355),
                h = t(94053),
                p = t(43751);

            function f(e) {
                var n = e.pictures,
                    t = e.selected,
                    o = e.aspectRatio,
                    i = e.cornerRadius,
                    r = e.open,
                    s = e.background,
                    f = e.setOpen,
                    x = (0, l.ac)("(min-width: 1920px)"),
                    y = (0, l.ac)("(min-width: 1440px)"),
                    j = (0, l.ac)("(min-width: 1280px)"),
                    w = (0, l.ac)("(min-width: 1024px)"),
                    b = (0, l.ac)("(min-width: 768px)");
                return (0, a.jsx)(g.u, {
                    appear: !0,
                    show: r,
                    as: c.Fragment,
                    children: (0, a.jsxs)(h.V, {
                        as: "div",
                        className: "relative z-[2000]",
                        onClose: function() {
                            return f(!1)
                        },
                        children: [(0, a.jsx)(g.u.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, a.jsx)("div", {
                                className: (0, l.AK)("fixed inset-0 backdrop-blur-xl"),
                                children: (0, a.jsx)("div", {
                                    className: "fixed inset-0 bg-white opacity-50",
                                    style: {
                                        backgroundColor: s
                                    }
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, a.jsx)("div", {
                                className: "flex w-full min-h-screen items-center justify-center text-center",
                                children: (0, a.jsx)(g.u.Child, {
                                    as: c.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: (0, a.jsxs)(h.V.Panel, {
                                        className: "w-full transform overflow-hidden transition-all gallery-carousel",
                                        children: [(0, a.jsx)("div", {
                                            className: "text-right p-6",
                                            children: (0, a.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-900 focus:outline-none hover:text-gray-700 transition-all",
                                                style: {
                                                    color: (0, l.$O)(s)
                                                },
                                                onClick: function() {
                                                    return f(!1)
                                                },
                                                children: (0, a.jsx)(p.Z, {
                                                    className: "h-6 w-6 lg:h-12 lg:w-12",
                                                    "aria-hidden": "true"
                                                })
                                            })
                                        }), (null === n || void 0 === n ? void 0 : n.length) > 0 && (0, a.jsx)(u(), {
                                            slideIndex: t,
                                            cellSpacing: w ? 40 : b ? 32 : 12,
                                            cellAlign: "center",
                                            slidesToShow: function(e) {
                                                return "1:1" === e ? x ? 3 : w ? 2.5 : 1.25 : "2:3" === e ? x ? 3.5 : y ? 3 : j ? 2.5 : 3 : j ? 1.5 : w ? 1.25 : 1.15
                                            }(o),
                                            wrapAround: !0,
                                            transitionMode: "scroll",
                                            defaultControlsConfig: {
                                                nextButtonClassName: b ? "" : "hidden",
                                                nextButtonStyle: {
                                                    background: "transparent"
                                                },
                                                nextButtonText: (0, a.jsx)(v.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                }),
                                                prevButtonClassName: b ? "" : "hidden",
                                                prevButtonStyle: {
                                                    background: "transparent"
                                                },
                                                prevButtonText: (0, a.jsx)(m.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                })
                                            },
                                            renderBottomCenterControls: function(e) {
                                                return (0, a.jsx)("ul", {
                                                    className: "flex items-center gap-4 lg:gap-5 mt-4 md:mt-10 mb-6",
                                                    children: n.map((function(n, t) {
                                                        return (0, a.jsx)("li", {
                                                            className: (0, l.AK)("flex items-center justify-center rounded-full transition-all duration-300", e.currentSlide === t ? "w-4 h-4" : "w-2.5 h-2.5"),
                                                            style: e.currentSlide === t ? {
                                                                backgroundColor: (0, l.mR)((0, l.$O)(s), 20)
                                                            } : {},
                                                            children: (0, a.jsx)("button", {
                                                                className: (0, l.AK)("w-2.5 h-2.5 rounded-full transition-all"),
                                                                style: {
                                                                    backgroundColor: (0, l.$O)(s),
                                                                    opacity: e.currentSlide !== t ? "35%" : "100%"
                                                                },
                                                                onClick: function() {
                                                                    return e.goToSlide(t)
                                                                }
                                                            })
                                                        }, "fullscreen-carousel-dots-".concat(t))
                                                    }))
                                                })
                                            },
                                            children: n.map((function(e, n) {
                                                return (0, a.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(o), i),
                                                    children: (0, l.QW)(e.media) && (0, a.jsx)(d(), {
                                                        quality: 90,
                                                        src: (0, l.QW)(e.media),
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        alt: e.altText || e.media.description || e.media.author,
                                                        onContextMenu: function(e) {
                                                            e.preventDefault()
                                                        },
                                                        objectPosition: "".concat((null === e || void 0 === e ? void 0 : e.positionX) || "center", " ").concat((null === e || void 0 === e ? void 0 : e.positionY) || "center"),
                                                        className: (0, l.AK)("w-full h-full object-center object-cover")
                                                    })
                                                }, "fullscreen-carousel-picture-".concat(e._id, "-").concat(n))
                                            }))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var x = t(399),
                y = t(21123),
                j = t(4433),
                w = t(60546),
                b = t(6604);

            function N(e) {
                var n, t, r = e.id,
                    s = e.website,
                    g = e.block,
                    h = e.previousBlock,
                    p = null === g || void 0 === g ? void 0 : g.headline,
                    N = null === g || void 0 === g ? void 0 : g.align,
                    F = (null === g || void 0 === g ? void 0 : g.pictures) || [],
                    C = null === g || void 0 === g ? void 0 : g.aspectRatio,
                    A = null === g || void 0 === g ? void 0 : g.cornerRadius,
                    k = null === g || void 0 === g ? void 0 : g.animation,
                    K = null === s || void 0 === s ? void 0 : s.animation,
                    T = null === g || void 0 === g ? void 0 : g.divider,
                    S = null === g || void 0 === g ? void 0 : g.border,
                    L = (0, c.useRef)(null),
                    M = (0, c.useState)("#FFFFFF"),
                    R = M[0],
                    _ = M[1],
                    B = (0, c.useState)("#000000"),
                    Z = B[0],
                    P = B[1],
                    G = (0, c.useState)(!1),
                    W = G[0],
                    H = G[1],
                    O = (0, c.useState)(null),
                    D = O[0],
                    E = O[1],
                    z = (0, l.ac)("(min-width: 1920px)"),
                    I = (0, l.ac)("(min-width: 1280px)"),
                    $ = (0, l.ac)("(min-width: 1024px)"),
                    U = (0, l.ac)("(min-width: 768px)"),
                    q = (0, x.Z)(g).minHeight,
                    Q = function(e) {
                        (null === g || void 0 === g ? void 0 : g.allowFullscreen) && $ && (H(!0), E(e))
                    },
                    V = function() {
                        return (null === g || void 0 === g ? void 0 : g.allowFullscreen) && $ ? "hover:opacity-70 cursor-pointer transition-opacity" : ""
                    },
                    Y = function(e, n) {
                        var t = (0, l.QW)(null === e || void 0 === e ? void 0 : e.media);
                        return t ? (0, a.jsx)(d(), {
                            quality: 90,
                            src: t,
                            layout: "fill",
                            objectFit: "cover",
                            alt: e.altText || e.media.description || e.media.author,
                            onContextMenu: function(e) {
                                return e.preventDefault()
                            },
                            objectPosition: "".concat((null === e || void 0 === e ? void 0 : e.positionX) || "center", " ").concat((null === e || void 0 === e ? void 0 : e.positionY) || "center"),
                            className: (0, l.AK)("w-full h-full object-center object-cover", !n && (0, l.yW)(A, null === s || void 0 === s ? void 0 : s.cornerRadius))
                        }) : (0, a.jsx)(a.Fragment, {})
                    };
                return (null === g || void 0 === g ? void 0 : g.fullHeight) && ((null === g || void 0 === g ? void 0 : g.spacing) || (g.spacing = {}), g.spacing = (0, i.Z)((0, o.Z)({}, g.spacing), {
                    top: "none",
                    bottom: "none"
                })), (null === g || void 0 === g || null === (n = g.pictures) || void 0 === n ? void 0 : n.length) > 0 && !(null === (t = null === g || void 0 === g ? void 0 : g.pictures[0]) || void 0 === t ? void 0 : t.media) && (g.pictures = g.pictures.map((function(e) {
                    return {
                        media: e,
                        altText: e.description
                    }
                }))), (0, a.jsxs)("section", {
                    className: "relative",
                    children: [(0, a.jsxs)("div", {
                        ref: L,
                        id: r,
                        className: (0, l.AK)("flex flex-none flex-shrink-0 relative break-word", (0, l.A2)((null === g || void 0 === g ? void 0 : g.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: q
                        }, (0, j.$h)(g)),
                        children: [(0, a.jsx)(y.Z, {
                            block: g,
                            website: s,
                            onChange: function(e) {
                                var n, t;
                                _((null === e || void 0 === e || null === (n = e.overlay) || void 0 === n ? void 0 : n.color1) || "#FFFFFF"), P((0, l.$O)((null === e || void 0 === e || null === (t = e.overlay) || void 0 === t ? void 0 : t.color1) || "#FFFFFF"))
                            }
                        }), (0, a.jsx)("div", {
                            className: (0, l.AK)("relative z-10", "carousel" === (null === g || void 0 === g ? void 0 : g.style) || (null === g || void 0 === g ? void 0 : g.fullWidth) ? "w-full" : "container mx-auto", (0, l.bG)(null === g || void 0 === g ? void 0 : g.spacing)),
                            children: (0, a.jsxs)(b.Z, {
                                settings: k,
                                globalSettings: K,
                                children: [(0, a.jsx)("div", {
                                    className: (0, l.AK)(("carousel" === (null === g || void 0 === g ? void 0 : g.style) || (null === g || void 0 === g ? void 0 : g.fullWidth)) && "container mx-auto"),
                                    children: p && (0, a.jsx)("h2", {
                                        className: (0, l.AK)("heading-large mb-6", "text-".concat(N)),
                                        style: (0, o.Z)({
                                            color: Z
                                        }, (0, l.j2)(s)),
                                        children: p
                                    })
                                }), (0, a.jsx)("div", {
                                    className: (0, l.AK)("carousel" === (null === g || void 0 === g ? void 0 : g.style) && "gallery-carousel", "carousel" !== (null === g || void 0 === g ? void 0 : g.style) && !(null === g || void 0 === g ? void 0 : g.noGutters) && (null === g || void 0 === g ? void 0 : g.fullWidth) && "md:px-6"),
                                    children: "carousel" === (null === g || void 0 === g ? void 0 : g.style) ? (0, a.jsx)(a.Fragment, {
                                        children: (null === F || void 0 === F ? void 0 : F.length) > 0 && (0, a.jsx)(u(), {
                                            cellSpacing: $ ? 40 : U ? 32 : 12,
                                            cellAlign: "center",
                                            slidesToShow: function(e) {
                                                return "1:1" === e ? z ? 3 : $ ? 2.5 : 1.25 : "2:3" === e ? z ? 4 : I ? 3.5 : $ ? 3 : U ? 2.5 : 1.5 : "3:2" === e && z ? 1.75 : I ? 1.5 : $ ? 1.25 : 1.15
                                            }(C),
                                            wrapAround: !0,
                                            transitionMode: "scroll",
                                            enableKeyboardControls: !0,
                                            keyCodeConfig: {
                                                previousSlide: [37],
                                                nextSlide: [39]
                                            },
                                            defaultControlsConfig: {
                                                nextButtonClassName: U ? "" : "hidden",
                                                nextButtonStyle: {
                                                    background: "transparent"
                                                },
                                                nextButtonText: (0, a.jsx)(v.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                }),
                                                prevButtonClassName: U ? "" : "hidden",
                                                prevButtonStyle: {
                                                    background: "transparent"
                                                },
                                                prevButtonText: (0, a.jsx)(m.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                })
                                            },
                                            renderBottomCenterControls: function(e) {
                                                return (0, a.jsx)("ul", {
                                                    className: "flex gap-4 lg:gap-5 mt-4 md:mt-10",
                                                    children: F.map((function(n, t) {
                                                        return (0, a.jsx)("li", {
                                                            children: (0, a.jsx)("button", {
                                                                className: (0, l.AK)("w-2.5 h-2.5 rounded-full transition-all", e.currentSlide === t && "bg-gray-900 ring-4 ring-gray-200", e.currentSlide > t && ("#111827" === Z ? "bg-gray-600" : "bg-gray-200"), e.currentSlide < t && ("#111827" === Z ? "bg-gray-900" : "bg-gray-50")),
                                                                onClick: function() {
                                                                    return e.goToSlide(t)
                                                                }
                                                            })
                                                        }, "carousel-dots-".concat(g.idx, "-").concat(t))
                                                    }))
                                                })
                                            },
                                            children: F.map((function(e, n) {
                                                return (0, a.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden cursor-auto", (0, l.n3)(C), (0, l.yW)(A, null === s || void 0 === s ? void 0 : s.cornerRadius)),
                                                    children: Y(e, !0)
                                                }, "carousel-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                            }))
                                        })
                                    }) : (0, a.jsx)(a.Fragment, {
                                        children: 1 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsx)("div", {
                                            className: (0, l.AK)(!(null === g || void 0 === g ? void 0 : g.fullWidth) && "max-w-3xl"),
                                            children: (0, a.jsx)("div", {
                                                className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                onClick: function() {
                                                    return Q(0)
                                                },
                                                children: Y(F[0])
                                            })
                                        }) || 2 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsx)("div", {
                                            className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10"),
                                            children: F.map((function(e, n) {
                                                return (0, a.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                    onClick: function() {
                                                        return Q(n)
                                                    },
                                                    children: Y(e)
                                                }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                            }))
                                        }) || (3 === (null === F || void 0 === F ? void 0 : F.length) || 6 === (null === F || void 0 === F ? void 0 : F.length) || 9 === (null === F || void 0 === F ? void 0 : F.length) || 12 === (null === F || void 0 === F ? void 0 : F.length)) && (0, a.jsx)("div", {
                                            className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                            children: F.map((function(e, n) {
                                                return (0, a.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                    onClick: function() {
                                                        return Q(n)
                                                    },
                                                    children: Y(e)
                                                }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                            }))
                                        }) || 4 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsx)("div", {
                                            className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10"),
                                            children: F.map((function(e, n) {
                                                return (0, a.jsx)("div", {
                                                    className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                    onClick: function() {
                                                        return Q(n)
                                                    },
                                                    children: Y(e)
                                                }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                            }))
                                        }) || 5 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: F.slice(0, 3).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            }), (0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10"),
                                                children: F.slice(3, 5).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            })]
                                        }) || 7 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: F.slice(0, 3).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            }), (0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10"),
                                                children: F.slice(3, 7).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            })]
                                        }) || 8 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: F.slice(0, 6).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            }), (0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10"),
                                                children: F.slice(6, 8).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            })]
                                        }) || 10 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: F.slice(0, 6).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            }), (0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10"),
                                                children: F.slice(6, 10).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            })]
                                        }) || 11 === (null === F || void 0 === F ? void 0 : F.length) && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                                children: F.slice(0, 9).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            }), (0, a.jsx)("div", {
                                                className: (0, l.AK)("grid grid-cols-1 md:grid-cols-2", !(null === g || void 0 === g ? void 0 : g.noGutters) && "gap-6 md:gap-10"),
                                                children: F.slice(9, 11).map((function(e, n) {
                                                    return (0, a.jsx)("div", {
                                                        className: (0, l.AK)("relative overflow-hidden", (0, l.n3)(C), V()),
                                                        onClick: function() {
                                                            return Q(n)
                                                        },
                                                        children: Y(e)
                                                    }, "gallery-picture-".concat(g.idx, "-").concat(e._id, "-").concat(n))
                                                }))
                                            })]
                                        })
                                    })
                                })]
                            })
                        }), (null === g || void 0 === g ? void 0 : g.allowFullscreen) && (0, a.jsx)(f, {
                            website: s,
                            pictures: F,
                            selected: D,
                            aspectRatio: C,
                            cornerRadius: (0, l.yW)(A, null === s || void 0 === s ? void 0 : s.cornerRadius),
                            background: R,
                            open: W,
                            setOpen: H
                        }), (0, a.jsx)(j.iz, {
                            previousDivider: null === h || void 0 === h ? void 0 : h.divider,
                            dividerUniqueId: "".concat(r, "-").concat(T),
                            divider: T,
                            contentRef: L
                        })]
                    }), S && (0, a.jsx)(w.OC, {
                        border: S,
                        sectionDivider: T,
                        contentRef: L
                    })]
                })
            }
        },
        399: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return i
                }
            });
            var o = t(67294);

            function i(e) {
                var n, t, i = (0, o.useState)(0),
                    a = i[0],
                    l = i[1],
                    c = (0, o.useState)([0, 0]),
                    r = c[0],
                    d = c[1];
                return (0, o.useEffect)((function() {
                    var e = function() {
                        d([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, o.useEffect)((function() {
                    var n;
                    e && l(1 === e.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0)
                }), [e, r]), {
                    minHeight: (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (t = e.spacing) || void 0 === t ? void 0 : t.minHeight) ? "100vh" : "134px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        }
    }
]);