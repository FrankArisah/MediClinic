! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Raphael = e() : t.Raphael = e()
}(this, function() {
    return function(i) {
        function r(t) {
            if (n[t]) return n[t].exports;
            var e = n[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return i[t].call(e.exports, e, e.exports, r), e.loaded = !0, e.exports
        }
        var n = {};
        return r.m = i, r.c = n, r.p = "", r(0)
    }([function(t, e, i) {
        var r, n;
        r = [i(1), i(3), i(4)], void 0 === (n = function(t) {
            return t
        }.apply(e, r)) || (t.exports = n)
    }, function(t, e, i) {
        var r, n;
        r = [i(2)], void 0 === (n = function(z) {
            function I(t) {
                if (I.is(t, "function")) return r ? t() : z.on("raphael.DOMload", t);
                if (I.is(t, T)) return I._engine.create[b](I, t.splice(0, 3 + I.is(t[0], Y))).add(t);
                var e = Array.prototype.slice.call(arguments, 0);
                if (I.is(e[e.length - 1], "function")) {
                    var i = e.pop();
                    return r ? i.call(I._engine.create[b](I, e)) : z.on("raphael.DOMload", function() {
                        i.call(I._engine.create[b](I, e))
                    })
                }
                return I._engine.create[b](I, arguments)
            }

            function v(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e = new t.constructor;
                for (var i in t) t[N](i) && (e[i] = v(t[i]));
                return e
            }

            function O(s, o, a) {
                return function t() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        i = e.join("␀"),
                        r = t.cache = t.cache || {},
                        n = t.count = t.count || [];
                    return r[N](i) ? function(t, e) {
                        for (var i = 0, r = t.length; i < r; i++)
                            if (t[i] === e) return t.push(t.splice(i, 1)[0])
                    }(n, i) : (1e3 <= n.length && delete r[n.shift()], n.push(i), r[i] = s[b](o, e)), a ? a(r[i]) : r[i]
                }
            }

            function h() {
                return this.hex
            }

            function y(t, e) {
                for (var i = [], r = 0, n = t.length; r < n - 2 * !e; r += 2) {
                    var s = [{
                        x: +t[r - 2],
                        y: +t[r - 1]
                    }, {
                        x: +t[r],
                        y: +t[r + 1]
                    }, {
                        x: +t[r + 2],
                        y: +t[r + 3]
                    }, {
                        x: +t[r + 4],
                        y: +t[r + 5]
                    }];
                    e ? r ? n - 4 == r ? s[3] = {
                        x: +t[0],
                        y: +t[1]
                    } : n - 2 == r && (s[2] = {
                        x: +t[0],
                        y: +t[1]
                    }, s[3] = {
                        x: +t[2],
                        y: +t[3]
                    }) : s[0] = {
                        x: +t[n - 2],
                        y: +t[n - 1]
                    } : n - 4 == r ? s[3] = s[2] : r || (s[0] = {
                        x: +t[r],
                        y: +t[r + 1]
                    }), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
                }
                return i
            }

            function m(t, e, i, r, n) {
                return t * (t * (-3 * e + 9 * i - 9 * r + 3 * n) + 6 * e - 12 * i + 6 * r) - 3 * e + 3 * i
            }

            function S(t, e, i, r, n, s, o, a, h) {
                null == h && (h = 1);
                for (var l = (h = 1 < h ? 1 : h < 0 ? 0 : h) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, f = 0; f < 12; f++) {
                    var d = l * u[f] + l,
                        g = m(d, t, i, n, o),
                        x = m(d, e, r, s, a),
                        v = g * g + x * x;
                    p += c[f] * q.sqrt(v)
                }
                return l * p
            }

            function B(t, e, i, r, n, s, o, a) {
                if (!(M(t, i) < L(n, o) || L(t, i) > M(n, o) || M(e, r) < L(s, a) || L(e, r) > M(s, a))) {
                    var h = (t - i) * (s - a) - (e - r) * (n - o);
                    if (h) {
                        var l = ((t * r - e * i) * (n - o) - (t - i) * (n * a - s * o)) / h,
                            u = ((t * r - e * i) * (s - a) - (e - r) * (n * a - s * o)) / h,
                            c = +l.toFixed(2),
                            p = +u.toFixed(2);
                        if (!(c < +L(t, i).toFixed(2) || c > +M(t, i).toFixed(2) || c < +L(n, o).toFixed(2) || c > +M(n, o).toFixed(2) || p < +L(e, r).toFixed(2) || p > +M(e, r).toFixed(2) || p < +L(s, a).toFixed(2) || p > +M(s, a).toFixed(2))) return {
                            x: l,
                            y: u
                        }
                    }
                }
            }

            function k(t, e, i) {
                var r = I.bezierBBox(t),
                    n = I.bezierBBox(e);
                if (!I.isBBoxIntersect(r, n)) return i ? 0 : [];
                for (var s = S.apply(0, t), o = S.apply(0, e), a = M(~~(s / 5), 1), h = M(~~(o / 5), 1), l = [], u = [], c = {}, p = i ? 0 : [], f = 0; f < a + 1; f++) {
                    var d = I.findDotsAtSegment.apply(I, t.concat(f / a));
                    l.push({
                        x: d.x,
                        y: d.y,
                        t: f / a
                    })
                }
                for (f = 0; f < h + 1; f++) d = I.findDotsAtSegment.apply(I, e.concat(f / h)), u.push({
                    x: d.x,
                    y: d.y,
                    t: f / h
                });
                for (f = 0; f < a; f++)
                    for (var g = 0; g < h; g++) {
                        var x = l[f],
                            v = l[f + 1],
                            y = u[g],
                            m = u[g + 1],
                            b = V(v.x - x.x) < .001 ? "y" : "x",
                            w = V(m.x - y.x) < .001 ? "y" : "x",
                            _ = B(x.x, x.y, v.x, v.y, y.x, y.y, m.x, m.y);
                        if (_) {
                            if (c[_.x.toFixed(4)] == _.y.toFixed(4)) continue;
                            c[_.x.toFixed(4)] = _.y.toFixed(4);
                            var k = x.t + V((_[b] - x[b]) / (v[b] - x[b])) * (v.t - x.t),
                                C = y.t + V((_[w] - y[w]) / (m[w] - y[w])) * (m.t - y.t);
                            0 <= k && k <= 1.001 && 0 <= C && C <= 1.001 && (i ? p++ : p.push({
                                x: _.x,
                                y: _.y,
                                t1: L(k, 1),
                                t2: L(C, 1)
                            }))
                        }
                    }
                return p
            }

            function n(t, e, i) {
                t = I._path2curve(t), e = I._path2curve(e);
                for (var r, n, s, o, a, h, l, u, c, p, f = i ? 0 : [], d = 0, g = t.length; d < g; d++) {
                    var x = t[d];
                    if ("M" == x[0]) r = a = x[1], n = h = x[2];
                    else {
                        n = "C" == x[0] ? (r = (c = [r, n].concat(x.slice(1)))[6], c[7]) : (c = [r, n, r, n, a, h, a, h], r = a, h);
                        for (var v = 0, y = e.length; v < y; v++) {
                            var m = e[v];
                            if ("M" == m[0]) s = l = m[1], o = u = m[2];
                            else {
                                o = "C" == m[0] ? (s = (p = [s, o].concat(m.slice(1)))[6], p[7]) : (p = [s, o, s, o, l, u, l, u], s = l, u);
                                var b = k(c, p, i);
                                if (i) f += b;
                                else {
                                    for (var w = 0, _ = b.length; w < _; w++) b[w].segment1 = d, b[w].segment2 = v, b[w].bez1 = c, b[w].bez2 = p;
                                    f = f.concat(b)
                                }
                            }
                        }
                    }
                }
                return f
            }

            function D(t, e, i, r, n, s) {
                null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +r, this.e = +n, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
            }

            function i() {
                return this.x + C + this.y + C + this.width + " × " + this.height
            }

            function R(t, e, i, r, n, s) {
                function h(t) {
                    return ((c * t + u) * t + l) * t
                }
                var o, l = 3 * e,
                    u = 3 * (r - e) - l,
                    c = 1 - l - u,
                    a = 3 * i,
                    p = 3 * (n - i) - a,
                    f = 1 - a - p;
                return o = function(t, e) {
                    var i, r, n, s, o, a;
                    for (n = t, a = 0; a < 8; a++) {
                        if (s = h(n) - t, V(s) < e) return n;
                        if (V(o = (3 * c * n + 2 * u) * n + l) < 1e-6) break;
                        n -= s / o
                    }
                    if (r = 1, (i = 0) > (n = t)) return i;
                    if (r < n) return r;
                    for (; i < r;) {
                        if (s = h(n), V(s - t) < e) return n;
                        s < t ? i = n : r = n, n = (r - i) / 2 + i
                    }
                    return n
                }(t, 1 / (200 * s)), ((f * o + p) * o + a) * o
            }

            function u(t, e) {
                var i = [],
                    r = {};
                if (this.ms = e, this.times = 1, t) {
                    for (var n in t) t[N](n) && (r[$(n)] = t[n], i.push($(n)));
                    i.sort(at)
                }
                this.anim = r, this.top = i[i.length - 1], this.percents = i
            }

            function _(t, e, i, r, n, s) {
                i = $(i);
                var o, a, h, l, u, c, p = t.ms,
                    f = {},
                    d = {},
                    g = {};
                if (r)
                    for (v = 0, y = re.length; v < y; v++) {
                        var x = re[v];
                        if (x.el.id == e.id && x.anim == t) {
                            x.percent != i ? (re.splice(v, 1), h = 1) : a = x, e.attr(x.totalOrigin);
                            break
                        }
                    } else r = +d;
                for (var v = 0, y = t.percents.length; v < y; v++) {
                    if (t.percents[v] == i || t.percents[v] > r * t.top) {
                        i = t.percents[v], u = t.percents[v - 1] || 0, p = p / t.top * (i - u), l = t.percents[v + 1], o = t.anim[i];
                        break
                    }
                    r && e.attr(t.anim[t.percents[v]])
                }
                if (o) {
                    if (a) a.initstatus = r, a.start = new Date - a.ms * r;
                    else {
                        for (var m in o)
                            if (o[N](m) && (K[N](m) || e.paper.customAttributes[N](m))) switch (f[m] = e.attr(m), null == f[m] && (f[m] = J[m]), d[m] = o[m], K[m]) {
                                case Y:
                                    g[m] = (d[m] - f[m]) / p;
                                    break;
                                case "colour":
                                    f[m] = I.getRGB(f[m]);
                                    var b = I.getRGB(d[m]);
                                    g[m] = {
                                        r: (b.r - f[m].r) / p,
                                        g: (b.g - f[m].g) / p,
                                        b: (b.b - f[m].b) / p
                                    };
                                    break;
                                case "path":
                                    var w = Pt(f[m], d[m]),
                                        _ = w[1];
                                    for (f[m] = w[0], g[m] = [], v = 0, y = f[m].length; v < y; v++) {
                                        g[m][v] = [0];
                                        for (var k = 1, C = f[m][v].length; k < C; k++) g[m][v][k] = (_[v][k] - f[m][v][k]) / p
                                    }
                                    break;
                                case "transform":
                                    var S = e._,
                                        B = Ht(S[m], d[m]);
                                    if (B)
                                        for (f[m] = B.from, d[m] = B.to, g[m] = [], g[m].real = !0, v = 0, y = f[m].length; v < y; v++)
                                            for (g[m][v] = [f[m][v][0]], k = 1, C = f[m][v].length; k < C; k++) g[m][v][k] = (d[m][v][k] - f[m][v][k]) / p;
                                    else {
                                        var M = e.matrix || new D,
                                            L = {
                                                _: {
                                                    transform: S.transform
                                                },
                                                getBBox: function() {
                                                    return e.getBBox(1)
                                                }
                                            };
                                        f[m] = [M.a, M.b, M.c, M.d, M.e, M.f], Dt(L, d[m]), d[m] = L._.transform, g[m] = [(L.matrix.a - M.a) / p, (L.matrix.b - M.b) / p, (L.matrix.c - M.c) / p, (L.matrix.d - M.d) / p, (L.matrix.e - M.e) / p, (L.matrix.f - M.f) / p]
                                    }
                                    break;
                                case "csv":
                                    var F = G(o[m])[X](H),
                                        T = G(f[m])[X](H);
                                    if ("clip-rect" == m)
                                        for (f[m] = T, g[m] = [], v = T.length; v--;) g[m][v] = (F[v] - f[m][v]) / p;
                                    d[m] = F;
                                    break;
                                default:
                                    for (F = [][j](o[m]), T = [][j](f[m]), g[m] = [], v = e.paper.customAttributes[m].length; v--;) g[m][v] = ((F[v] || 0) - (T[v] || 0)) / p
                            }
                        var A = o.easing,
                            E = I.easing_formulas[A];
                        if (!E)
                            if ((E = G(A).match(W)) && 5 == E.length) {
                                var P = E;
                                E = function(t) {
                                    return R(t, +P[1], +P[2], +P[3], +P[4], p)
                                }
                            } else E = ht;
                        if (x = {
                                anim: t,
                                percent: i,
                                timestamp: c = o.start || t.start || +new Date,
                                start: c + (t.del || 0),
                                status: 0,
                                initstatus: r || 0,
                                stop: !1,
                                ms: p,
                                easing: E,
                                from: f,
                                diff: g,
                                to: d,
                                el: e,
                                callback: o.callback,
                                prev: u,
                                next: l,
                                repeat: s || t.times,
                                origin: e.attr(),
                                totalOrigin: n
                            }, re.push(x), r && !a && !h && (x.stop = !0, x.start = new Date - p * r, 1 == re.length)) return se();
                        h && (x.start = new Date - x.ms * r), 1 == re.length && ne(se)
                    }
                    z("raphael.anim.start." + e.id, e, t)
                }
            }

            function t(t) {
                for (var e = 0; e < re.length; e++) re[e].el.paper == t && re.splice(e--, 1)
            }
            I.version = "2.2.0", I.eve = z;
            var r, e, H = /[, ]+/,
                s = {
                    circle: 1,
                    rect: 1,
                    path: 1,
                    ellipse: 1,
                    text: 1,
                    image: 1
                },
                o = /\{(\d+)\}/g,
                N = "hasOwnProperty",
                d = {
                    doc: document,
                    win: window
                },
                a = {
                    was: Object.prototype[N].call(d.win, "Raphael"),
                    is: d.win.Raphael
                },
                l = function() {
                    this.ca = this.customAttributes = {}
                },
                b = "apply",
                j = "concat",
                g = "ontouchstart" in d.win || d.win.DocumentTouch && d.doc instanceof DocumentTouch,
                C = " ",
                G = String,
                X = "split",
                c = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [X](C),
                p = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                },
                w = G.prototype.toLowerCase,
                q = Math,
                M = q.max,
                L = q.min,
                V = q.abs,
                F = q.pow,
                U = q.PI,
                Y = "number",
                f = "string",
                T = "array",
                x = Object.prototype.toString,
                A = (I._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                E = {
                    NaN: 1,
                    Infinity: 1,
                    "-Infinity": 1
                },
                W = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                P = q.round,
                $ = parseFloat,
                Z = parseInt,
                Q = G.prototype.toUpperCase,
                J = I._availableAttrs = {
                    "arrow-end": "none",
                    "arrow-start": "none",
                    blur: 0,
                    "clip-rect": "0 0 1e9 1e9",
                    cursor: "default",
                    cx: 0,
                    cy: 0,
                    fill: "#fff",
                    "fill-opacity": 1,
                    font: '10px "Arial"',
                    "font-family": '"Arial"',
                    "font-size": "10",
                    "font-style": "normal",
                    "font-weight": 400,
                    gradient: 0,
                    height: 0,
                    href: "http://raphaeljs.com/",
                    "letter-spacing": 0,
                    opacity: 1,
                    path: "M0,0",
                    r: 0,
                    rx: 0,
                    ry: 0,
                    src: "",
                    stroke: "#000",
                    "stroke-dasharray": "",
                    "stroke-linecap": "butt",
                    "stroke-linejoin": "butt",
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 1,
                    "stroke-width": 1,
                    target: "_blank",
                    "text-anchor": "middle",
                    title: "Raphael",
                    transform: "",
                    width: 0,
                    x: 0,
                    y: 0,
                    class: ""
                },
                K = I._availableAnimAttrs = {
                    blur: Y,
                    "clip-rect": "csv",
                    cx: Y,
                    cy: Y,
                    fill: "colour",
                    "fill-opacity": Y,
                    "font-size": Y,
                    height: Y,
                    opacity: Y,
                    path: "path",
                    r: Y,
                    rx: Y,
                    ry: Y,
                    stroke: "colour",
                    "stroke-opacity": Y,
                    "stroke-width": Y,
                    transform: "transform",
                    width: Y,
                    x: Y,
                    y: Y
                },
                tt = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                et = {
                    hs: 1,
                    rg: 1
                },
                it = /,?([achlmqrstvxz]),?/gi,
                rt = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                nt = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                st = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                ot = (I._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                at = function(t, e) {
                    return $(t) - $(e)
                },
                ht = function(t) {
                    return t
                },
                lt = I._rectPath = function(t, e, i, r, n) {
                    return n ? [
                        ["M", t + n, e],
                        ["l", i - 2 * n, 0],
                        ["a", n, n, 0, 0, 1, n, n],
                        ["l", 0, r - 2 * n],
                        ["a", n, n, 0, 0, 1, -n, n],
                        ["l", 2 * n - i, 0],
                        ["a", n, n, 0, 0, 1, -n, -n],
                        ["l", 0, 2 * n - r],
                        ["a", n, n, 0, 0, 1, n, -n],
                        ["z"]
                    ] : [
                        ["M", t, e],
                        ["l", i, 0],
                        ["l", 0, r],
                        ["l", -i, 0],
                        ["z"]
                    ]
                },
                ut = function(t, e, i, r) {
                    return null == r && (r = i), [
                        ["M", t, e],
                        ["m", 0, -r],
                        ["a", i, r, 0, 1, 1, 0, 2 * r],
                        ["a", i, r, 0, 1, 1, 0, -2 * r],
                        ["z"]
                    ]
                },
                ct = I._getPath = {
                    path: function(t) {
                        return t.attr("path")
                    },
                    circle: function(t) {
                        var e = t.attrs;
                        return ut(e.cx, e.cy, e.r)
                    },
                    ellipse: function(t) {
                        var e = t.attrs;
                        return ut(e.cx, e.cy, e.rx, e.ry)
                    },
                    rect: function(t) {
                        var e = t.attrs;
                        return lt(e.x, e.y, e.width, e.height, e.r)
                    },
                    image: function(t) {
                        var e = t.attrs;
                        return lt(e.x, e.y, e.width, e.height)
                    },
                    text: function(t) {
                        var e = t._getBBox();
                        return lt(e.x, e.y, e.width, e.height)
                    },
                    set: function(t) {
                        var e = t._getBBox();
                        return lt(e.x, e.y, e.width, e.height)
                    }
                },
                pt = I.mapPath = function(t, e) {
                    if (!e) return t;
                    var i, r, n, s, o, a, h;
                    for (n = 0, o = (t = Pt(t)).length; n < o; n++)
                        for (s = 1, a = (h = t[n]).length; s < a; s += 2) i = e.x(h[s], h[s + 1]), r = e.y(h[s], h[s + 1]), h[s] = i, h[s + 1] = r;
                    return t
                };
            if (I._g = d, "VML" == (I.type = d.win.SVGAngle || d.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML")) {
                var ft, dt = d.doc.createElement("div");
                if (dt.innerHTML = '<v:shape adj="1"/>', (ft = dt.firstChild).style.behavior = "url(#default#VML)", !ft || "object" != typeof ft.adj) return I.type = "";
                dt = null
            }
            I.svg = !(I.vml = "VML" == I.type), I._Paper = l, I.fn = e = l.prototype = I.prototype, I._id = 0, I._oid = 0, I.is = function(t, e) {
                return "finite" == (e = w.call(e)) ? !E[N](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || x.call(t).slice(8, -1).toLowerCase() == e
            }, I.angle = function(t, e, i, r, n, s) {
                if (null != n) return I.angle(t, e, n, s) - I.angle(i, r, n, s);
                var o = t - i,
                    a = e - r;
                return o || a ? (180 + 180 * q.atan2(-a, -o) / U + 360) % 360 : 0
            }, I.rad = function(t) {
                return t % 360 * U / 180
            }, I.deg = function(t) {
                return Math.round(180 * t / U % 360 * 1e3) / 1e3
            }, I.snapTo = function(t, e, i) {
                if (i = I.is(i, "finite") ? i : 10, I.is(t, T)) {
                    for (var r = t.length; r--;)
                        if (V(t[r] - e) <= i) return t[r]
                } else {
                    var n = e % (t = +t);
                    if (n < i) return e - n;
                    if (t - i < n) return e - n + t
                }
                return e
            };
            var gt, xt;
            I.createUUID = (gt = /[xy]/g, xt = function(t) {
                var e = 16 * q.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16)
            }, function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(gt, xt).toUpperCase()
            });
            I.setWindow = function(t) {
                z("raphael.setWindow", I, d.win, t), d.win = t, d.doc = d.win.document, I._engine.initWin && I._engine.initWin(d.win)
            };
            var vt = function(t) {
                    if (I.vml) {
                        var i, r = /^\s+|\s+$/g;
                        try {
                            var e = new ActiveXObject("htmlfile");
                            e.write("<body>"), e.close(), i = e.body
                        } catch (t) {
                            i = createPopup().document.body
                        }
                        var n = i.createTextRange();
                        vt = O(function(t) {
                            try {
                                i.style.color = G(t).replace(r, "");
                                var e = n.queryCommandValue("ForeColor");
                                return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6)
                            } catch (t) {
                                return "none"
                            }
                        })
                    } else {
                        var s = d.doc.createElement("i");
                        s.title = "Raphaël Colour Picker", s.style.display = "none", d.doc.body.appendChild(s), vt = O(function(t) {
                            return s.style.color = t, d.doc.defaultView.getComputedStyle(s, "").getPropertyValue("color")
                        })
                    }
                    return vt(t)
                },
                yt = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                mt = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                bt = function() {
                    return this.hex
                },
                wt = function(t, e, i) {
                    if (null == e && I.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && I.is(t, f)) {
                        var r = I.getRGB(t);
                        t = r.r, e = r.g, i = r.b
                    }
                    return (1 < t || 1 < e || 1 < i) && (t /= 255, e /= 255, i /= 255), [t, e, i]
                },
                _t = function(t, e, i, r) {
                    var n = {
                        r: t *= 255,
                        g: e *= 255,
                        b: i *= 255,
                        hex: I.rgb(t, e, i),
                        toString: bt
                    };
                    return I.is(r, "finite") && (n.opacity = r), n
                };
            I.color = function(t) {
                var e;
                return I.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = I.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : I.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = I.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (I.is(t, "string") && (t = I.getRGB(t)), I.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = I.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = I.rgb2hsb(t), t.v = e.b) : (t = {
                    hex: "none"
                }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = bt, t
            }, I.hsb2rgb = function(t, e, i, r) {
                var n, s, o, a, h;
                return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, r = t.o, t = t.h), a = (h = i * e) * (1 - V((t = (t *= 360) % 360 / 60) % 2 - 1)), n = s = o = i - h, _t(n += [h, a, 0, 0, a, h][t = ~~t], s += [a, h, h, a, 0, 0][t], o += [0, 0, a, h, h, a][t], r)
            }, I.hsl2rgb = function(t, e, i, r) {
                var n, s, o, a, h;
                return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (1 < t || 1 < e || 1 < i) && (t /= 360, e /= 100, i /= 100), a = (h = 2 * e * (i < .5 ? i : 1 - i)) * (1 - V((t = (t *= 360) % 360 / 60) % 2 - 1)), n = s = o = i - h / 2, _t(n += [h, a, 0, 0, a, h][t = ~~t], s += [a, h, h, a, 0, 0][t], o += [0, 0, a, h, h, a][t], r)
            }, I.rgb2hsb = function(t, e, i) {
                var r, n;
                return t = (i = wt(t, e, i))[0], e = i[1], i = i[2], {
                    h: ((0 == (n = (r = M(t, e, i)) - L(t, e, i)) ? null : r == t ? (e - i) / n : r == e ? (i - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360,
                    s: 0 == n ? 0 : n / r,
                    b: r,
                    toString: yt
                }
            }, I.rgb2hsl = function(t, e, i) {
                var r, n, s, o;
                return t = (i = wt(t, e, i))[0], e = i[1], i = i[2], r = ((n = M(t, e, i)) + (s = L(t, e, i))) / 2, {
                    h: ((0 == (o = n - s) ? null : n == t ? (e - i) / o : n == e ? (i - t) / o + 2 : (t - e) / o + 4) + 360) % 6 * 60 / 360,
                    s: 0 == o ? 0 : r < .5 ? o / (2 * r) : o / (2 - 2 * r),
                    l: r,
                    toString: mt
                }
            }, I._path2string = function() {
                return this.join(",").replace(it, "$1")
            };
            I._preload = function(t, e) {
                var i = d.doc.createElement("img");
                i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
                    e.call(this), this.onload = null, d.doc.body.removeChild(this)
                }, i.onerror = function() {
                    d.doc.body.removeChild(this)
                }, d.doc.body.appendChild(i), i.src = t
            };
            I.getRGB = O(function(t) {
                if (!t || (t = G(t)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: h
                };
                if ("none" == t) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: h
                };
                !et[N](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = vt(t));
                var e, i, r, n, s, o, a = t.match(A);
                return a ? (a[2] && (r = Z(a[2].substring(5), 16), i = Z(a[2].substring(3, 5), 16), e = Z(a[2].substring(1, 3), 16)), a[3] && (r = Z((s = a[3].charAt(3)) + s, 16), i = Z((s = a[3].charAt(2)) + s, 16), e = Z((s = a[3].charAt(1)) + s, 16)), a[4] && (o = a[4][X](tt), e = $(o[0]), "%" == o[0].slice(-1) && (e *= 2.55), i = $(o[1]), "%" == o[1].slice(-1) && (i *= 2.55), r = $(o[2]), "%" == o[2].slice(-1) && (r *= 2.55), "rgba" == a[1].toLowerCase().slice(0, 4) && (n = $(o[3])), o[3] && "%" == o[3].slice(-1) && (n /= 100)), a[5] ? (o = a[5][X](tt), e = $(o[0]), "%" == o[0].slice(-1) && (e *= 2.55), i = $(o[1]), "%" == o[1].slice(-1) && (i *= 2.55), r = $(o[2]), "%" == o[2].slice(-1) && (r *= 2.55), ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (e /= 360), "hsba" == a[1].toLowerCase().slice(0, 4) && (n = $(o[3])), o[3] && "%" == o[3].slice(-1) && (n /= 100), I.hsb2rgb(e, i, r, n)) : a[6] ? (o = a[6][X](tt), e = $(o[0]), "%" == o[0].slice(-1) && (e *= 2.55), i = $(o[1]), "%" == o[1].slice(-1) && (i *= 2.55), r = $(o[2]), "%" == o[2].slice(-1) && (r *= 2.55), ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (e /= 360), "hsla" == a[1].toLowerCase().slice(0, 4) && (n = $(o[3])), o[3] && "%" == o[3].slice(-1) && (n /= 100), I.hsl2rgb(e, i, r, n)) : ((a = {
                    r: e,
                    g: i,
                    b: r,
                    toString: h
                }).hex = "#" + (16777216 | r | i << 8 | e << 16).toString(16).slice(1), I.is(n, "finite") && (a.opacity = n), a)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: h
                }
            }, I), I.hsb = O(function(t, e, i) {
                return I.hsb2rgb(t, e, i).hex
            }), I.hsl = O(function(t, e, i) {
                return I.hsl2rgb(t, e, i).hex
            }), I.rgb = O(function(t, e, i) {
                function r(t) {
                    return t + .5 | 0
                }
                return "#" + (16777216 | r(i) | r(e) << 8 | r(t) << 16).toString(16).slice(1)
            }), (I.getColor = function(t) {
                var e = this.getColor.start = this.getColor.start || {
                        h: 0,
                        s: 1,
                        b: t || .75
                    },
                    i = this.hsb2rgb(e.h, e.s, e.b);
                return e.h += .075, 1 < e.h && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                    h: 0,
                    s: 1,
                    b: e.b
                })), i.hex
            }).reset = function() {
                delete this.start
            }, I.parsePathString = function(t) {
                if (!t) return null;
                var e = kt(t);
                if (e.arr) return St(e.arr);
                var s = {
                        a: 7,
                        c: 6,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        z: 0
                    },
                    o = [];
                return I.is(t, T) && I.is(t[0], T) && (o = St(t)), o.length || G(t).replace(rt, function(t, e, i) {
                    var r = [],
                        n = e.toLowerCase();
                    if (i.replace(st, function(t, e) {
                            e && r.push(+e)
                        }), "m" == n && 2 < r.length && (o.push([e][j](r.splice(0, 2))), n = "l", e = "m" == e ? "l" : "L"), "r" == n) o.push([e][j](r));
                    else
                        for (; r.length >= s[n] && (o.push([e][j](r.splice(0, s[n]))), s[n]););
                }), o.toString = I._path2string, e.arr = St(o), o
            }, I.parseTransformString = O(function(t) {
                if (!t) return null;
                var n = [];
                return I.is(t, T) && I.is(t[0], T) && (n = St(t)), n.length || G(t).replace(nt, function(t, e, i) {
                    var r = [];
                    w.call(e);
                    i.replace(st, function(t, e) {
                        e && r.push(+e)
                    }), n.push([e][j](r))
                }), n.toString = I._path2string, n
            });
            var kt = function(e) {
                var i = kt.ps = kt.ps || {};
                return i[e] ? i[e].sleep = 100 : i[e] = {
                    sleep: 100
                }, setTimeout(function() {
                    for (var t in i) i[N](t) && t != e && (i[t].sleep--, !i[t].sleep && delete i[t])
                }), i[e]
            };
            I.findDotsAtSegment = function(t, e, i, r, n, s, o, a, h) {
                var l = 1 - h,
                    u = F(l, 3),
                    c = F(l, 2),
                    p = h * h,
                    f = p * h,
                    d = u * t + 3 * c * h * i + 3 * l * h * h * n + f * o,
                    g = u * e + 3 * c * h * r + 3 * l * h * h * s + f * a,
                    x = t + 2 * h * (i - t) + p * (n - 2 * i + t),
                    v = e + 2 * h * (r - e) + p * (s - 2 * r + e),
                    y = i + 2 * h * (n - i) + p * (o - 2 * n + i),
                    m = r + 2 * h * (s - r) + p * (a - 2 * s + r),
                    b = l * t + h * i,
                    w = l * e + h * r,
                    _ = l * n + h * o,
                    k = l * s + h * a,
                    C = 90 - 180 * q.atan2(x - y, v - m) / U;
                return (y < x || v < m) && (C += 180), {
                    x: d,
                    y: g,
                    m: {
                        x: x,
                        y: v
                    },
                    n: {
                        x: y,
                        y: m
                    },
                    start: {
                        x: b,
                        y: w
                    },
                    end: {
                        x: _,
                        y: k
                    },
                    alpha: C
                }
            }, I.bezierBBox = function(t, e, i, r, n, s, o, a) {
                I.is(t, "array") || (t = [t, e, i, r, n, s, o, a]);
                var h = Et.apply(null, t);
                return {
                    x: h.min.x,
                    y: h.min.y,
                    x2: h.max.x,
                    y2: h.max.y,
                    width: h.max.x - h.min.x,
                    height: h.max.y - h.min.y
                }
            }, I.isPointInsideBBox = function(t, e, i) {
                return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2
            }, I.isBBoxIntersect = function(t, e) {
                var i = I.isPointInsideBBox;
                return i(e, t.x, t.y) || i(e, t.x2, t.y) || i(e, t.x, t.y2) || i(e, t.x2, t.y2) || i(t, e.x, e.y) || i(t, e.x2, e.y) || i(t, e.x, e.y2) || i(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
            }, I.pathIntersection = function(t, e) {
                return n(t, e)
            }, I.pathIntersectionNumber = function(t, e) {
                return n(t, e, 1)
            }, I.isPointInsidePath = function(t, e, i) {
                var r = I.pathBBox(t);
                return I.isPointInsideBBox(r, e, i) && n(t, [
                    ["M", e, i],
                    ["H", r.x2 + 10]
                ], 1) % 2 == 1
            }, I._removedFactory = function(t) {
                return function() {
                    z("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
                }
            };
            var Ct = I.pathBBox = function(t) {
                    var e = kt(t);
                    if (e.bbox) return v(e.bbox);
                    if (!t) return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        x2: 0,
                        y2: 0
                    };
                    for (var i, r = 0, n = 0, s = [], o = [], a = 0, h = (t = Pt(t)).length; a < h; a++)
                        if ("M" == (i = t[a])[0]) r = i[1], n = i[2], s.push(r), o.push(n);
                        else {
                            var l = Et(r, n, i[1], i[2], i[3], i[4], i[5], i[6]);
                            s = s[j](l.min.x, l.max.x), o = o[j](l.min.y, l.max.y), r = i[5], n = i[6]
                        }
                    var u = L[b](0, s),
                        c = L[b](0, o),
                        p = M[b](0, s),
                        f = M[b](0, o),
                        d = p - u,
                        g = f - c,
                        x = {
                            x: u,
                            y: c,
                            x2: p,
                            y2: f,
                            width: d,
                            height: g,
                            cx: u + d / 2,
                            cy: c + g / 2
                        };
                    return e.bbox = v(x), x
                },
                St = function(t) {
                    var e = v(t);
                    return e.toString = I._path2string, e
                },
                Bt = I._pathToRelative = function(t) {
                    var e = kt(t);
                    if (e.rel) return St(e.rel);
                    I.is(t, T) && I.is(t && t[0], T) || (t = I.parsePathString(t));
                    var i = [],
                        r = 0,
                        n = 0,
                        s = 0,
                        o = 0,
                        a = 0;
                    "M" == t[0][0] && (s = r = t[0][1], o = n = t[0][2], a++, i.push(["M", r, n]));
                    for (var h = a, l = t.length; h < l; h++) {
                        var u = i[h] = [],
                            c = t[h];
                        if (c[0] != w.call(c[0])) switch (u[0] = w.call(c[0]), u[0]) {
                            case "a":
                                u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] - r).toFixed(3), u[7] = +(c[7] - n).toFixed(3);
                                break;
                            case "v":
                                u[1] = +(c[1] - n).toFixed(3);
                                break;
                            case "m":
                                s = c[1], o = c[2];
                            default:
                                for (var p = 1, f = c.length; p < f; p++) u[p] = +(c[p] - (p % 2 ? r : n)).toFixed(3)
                        } else {
                            u = i[h] = [], "m" == c[0] && (s = c[1] + r, o = c[2] + n);
                            for (var d = 0, g = c.length; d < g; d++) i[h][d] = c[d]
                        }
                        var x = i[h].length;
                        switch (i[h][0]) {
                            case "z":
                                r = s, n = o;
                                break;
                            case "h":
                                r += +i[h][x - 1];
                                break;
                            case "v":
                                n += +i[h][x - 1];
                                break;
                            default:
                                r += +i[h][x - 2], n += +i[h][x - 1]
                        }
                    }
                    return i.toString = I._path2string, e.rel = St(i), i
                },
                Mt = I._pathToAbsolute = function(t) {
                    var e = kt(t);
                    if (e.abs) return St(e.abs);
                    if (I.is(t, T) && I.is(t && t[0], T) || (t = I.parsePathString(t)), !t || !t.length) return [
                        ["M", 0, 0]
                    ];
                    var i = [],
                        r = 0,
                        n = 0,
                        s = 0,
                        o = 0,
                        a = 0;
                    "M" == t[0][0] && (s = r = +t[0][1], o = n = +t[0][2], a++, i[0] = ["M", r, n]);
                    for (var h, l, u = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), c = a, p = t.length; c < p; c++) {
                        if (i.push(h = []), (l = t[c])[0] != Q.call(l[0])) switch (h[0] = Q.call(l[0]), h[0]) {
                                case "A":
                                    h[1] = l[1], h[2] = l[2], h[3] = l[3], h[4] = l[4], h[5] = l[5], h[6] = +(l[6] + r), h[7] = +(l[7] + n);
                                    break;
                                case "V":
                                    h[1] = +l[1] + n;
                                    break;
                                case "H":
                                    h[1] = +l[1] + r;
                                    break;
                                case "R":
                                    for (var f = [r, n][j](l.slice(1)), d = 2, g = f.length; d < g; d++) f[d] = +f[d] + r, f[++d] = +f[d] + n;
                                    i.pop(), i = i[j](y(f, u));
                                    break;
                                case "M":
                                    s = +l[1] + r, o = +l[2] + n;
                                default:
                                    for (d = 1, g = l.length; d < g; d++) h[d] = +l[d] + (d % 2 ? r : n)
                            } else if ("R" == l[0]) f = [r, n][j](l.slice(1)), i.pop(), i = i[j](y(f, u)), h = ["R"][j](l.slice(-2));
                            else
                                for (var x = 0, v = l.length; x < v; x++) h[x] = l[x];
                        switch (h[0]) {
                            case "Z":
                                r = s, n = o;
                                break;
                            case "H":
                                r = h[1];
                                break;
                            case "V":
                                n = h[1];
                                break;
                            case "M":
                                s = h[h.length - 2], o = h[h.length - 1];
                            default:
                                r = h[h.length - 2], n = h[h.length - 1]
                        }
                    }
                    return i.toString = I._path2string, e.abs = St(i), i
                },
                Lt = function(t, e, i, r) {
                    return [t, e, i, r, i, r]
                },
                Ft = function(t, e, i, r, n, s) {
                    return [1 / 3 * t + 2 / 3 * i, 1 / 3 * e + 2 / 3 * r, 1 / 3 * n + 2 / 3 * i, 1 / 3 * s + 2 / 3 * r, n, s]
                },
                Tt = function(t, e, i, r, n, s, o, a, h, l) {
                    var u, c = 120 * U / 180,
                        p = U / 180 * (+n || 0),
                        f = [],
                        d = O(function(t, e, i) {
                            return {
                                x: t * q.cos(i) - e * q.sin(i),
                                y: t * q.sin(i) + e * q.cos(i)
                            }
                        });
                    if (l) k = l[0], C = l[1], w = l[2], _ = l[3];
                    else {
                        t = (u = d(t, e, -p)).x, e = u.y, a = (u = d(a, h, -p)).x, h = u.y;
                        q.cos(U / 180 * n), q.sin(U / 180 * n);
                        var g = (t - a) / 2,
                            x = (e - h) / 2,
                            v = g * g / (i * i) + x * x / (r * r);
                        1 < v && (i *= v = q.sqrt(v), r *= v);
                        var y = i * i,
                            m = r * r,
                            b = (s == o ? -1 : 1) * q.sqrt(V((y * m - y * x * x - m * g * g) / (y * x * x + m * g * g))),
                            w = b * i * x / r + (t + a) / 2,
                            _ = b * -r * g / i + (e + h) / 2,
                            k = q.asin(((e - _) / r).toFixed(9)),
                            C = q.asin(((h - _) / r).toFixed(9));
                        (k = t < w ? U - k : k) < 0 && (k = 2 * U + k), (C = a < w ? U - C : C) < 0 && (C = 2 * U + C), o && C < k && (k -= 2 * U), !o && k < C && (C -= 2 * U)
                    }
                    var S = C - k;
                    if (V(S) > c) {
                        var B = C,
                            M = a,
                            L = h;
                        C = k + c * (o && k < C ? 1 : -1), a = w + i * q.cos(C), h = _ + r * q.sin(C), f = Tt(a, h, i, r, n, 0, o, M, L, [C, B, w, _])
                    }
                    S = C - k;
                    var F = q.cos(k),
                        T = q.sin(k),
                        A = q.cos(C),
                        E = q.sin(C),
                        P = q.tan(S / 4),
                        z = 4 / 3 * i * P,
                        I = 4 / 3 * r * P,
                        D = [t, e],
                        R = [t + z * T, e - I * F],
                        H = [a + z * E, h - I * A],
                        N = [a, h];
                    if (R[0] = 2 * D[0] - R[0], R[1] = 2 * D[1] - R[1], l) return [R, H, N][j](f);
                    for (var G = [], Y = 0, W = (f = [R, H, N][j](f).join()[X](",")).length; Y < W; Y++) G[Y] = Y % 2 ? d(f[Y - 1], f[Y], p).y : d(f[Y], f[Y + 1], p).x;
                    return G
                },
                At = function(t, e, i, r, n, s, o, a, h) {
                    var l = 1 - h;
                    return {
                        x: F(l, 3) * t + 3 * F(l, 2) * h * i + 3 * l * h * h * n + F(h, 3) * o,
                        y: F(l, 3) * e + 3 * F(l, 2) * h * r + 3 * l * h * h * s + F(h, 3) * a
                    }
                },
                Et = O(function(t, e, i, r, n, s, o, a) {
                    var h, l = n - 2 * i + t - (o - 2 * n + i),
                        u = 2 * (i - t) - 2 * (n - i),
                        c = t - i,
                        p = (-u + q.sqrt(u * u - 4 * l * c)) / 2 / l,
                        f = (-u - q.sqrt(u * u - 4 * l * c)) / 2 / l,
                        d = [e, a],
                        g = [t, o];
                    return "1e12" < V(p) && (p = .5), "1e12" < V(f) && (f = .5), 0 < p && p < 1 && (h = At(t, e, i, r, n, s, o, a, p), g.push(h.x), d.push(h.y)), 0 < f && f < 1 && (h = At(t, e, i, r, n, s, o, a, f), g.push(h.x), d.push(h.y)), l = s - 2 * r + e - (a - 2 * s + r), c = e - r, p = (-(u = 2 * (r - e) - 2 * (s - r)) + q.sqrt(u * u - 4 * l * c)) / 2 / l, f = (-u - q.sqrt(u * u - 4 * l * c)) / 2 / l, "1e12" < V(p) && (p = .5), "1e12" < V(f) && (f = .5), 0 < p && p < 1 && (h = At(t, e, i, r, n, s, o, a, p), g.push(h.x), d.push(h.y)), 0 < f && f < 1 && (h = At(t, e, i, r, n, s, o, a, f), g.push(h.x), d.push(h.y)), {
                        min: {
                            x: L[b](0, g),
                            y: L[b](0, d)
                        },
                        max: {
                            x: M[b](0, g),
                            y: M[b](0, d)
                        }
                    }
                }),
                Pt = I._path2curve = O(function(t, e) {
                    var i = !e && kt(t);
                    if (!e && i.curve) return St(i.curve);
                    for (var s = Mt(t), o = e && Mt(e), r = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, n = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, a = function(t, e, i) {
                            var r, n;
                            if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                            switch (!(t[0] in {
                                T: 1,
                                Q: 1
                            }) && (e.qx = e.qy = null), t[0]) {
                                case "M":
                                    e.X = t[1], e.Y = t[2];
                                    break;
                                case "A":
                                    t = ["C"][j](Tt[b](0, [e.x, e.y][j](t.slice(1))));
                                    break;
                                case "S":
                                    n = "C" == i || "S" == i ? (r = 2 * e.x - e.bx, 2 * e.y - e.by) : (r = e.x, e.y), t = ["C", r, n][j](t.slice(1));
                                    break;
                                case "T":
                                    "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][j](Ft(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                    break;
                                case "Q":
                                    e.qx = t[1], e.qy = t[2], t = ["C"][j](Ft(e.x, e.y, t[1], t[2], t[3], t[4]));
                                    break;
                                case "L":
                                    t = ["C"][j](Lt(e.x, e.y, t[1], t[2]));
                                    break;
                                case "H":
                                    t = ["C"][j](Lt(e.x, e.y, t[1], e.y));
                                    break;
                                case "V":
                                    t = ["C"][j](Lt(e.x, e.y, e.x, t[1]));
                                    break;
                                case "Z":
                                    t = ["C"][j](Lt(e.x, e.y, e.X, e.Y))
                            }
                            return t
                        }, h = function(t, e) {
                            if (7 < t[e].length) {
                                t[e].shift();
                                for (var i = t[e]; i.length;) u[e] = "A", o && (c[e] = "A"), t.splice(e++, 0, ["C"][j](i.splice(0, 6)));
                                t.splice(e, 1), g = M(s.length, o && o.length || 0)
                            }
                        }, l = function(t, e, i, r, n) {
                            t && e && "M" == t[n][0] && "M" != e[n][0] && (e.splice(n, 0, ["M", r.x, r.y]), i.bx = 0, i.by = 0, i.x = t[n][1], i.y = t[n][2], g = M(s.length, o && o.length || 0))
                        }, u = [], c = [], p = "", f = "", d = 0, g = M(s.length, o && o.length || 0); d < g; d++) {
                        s[d] && (p = s[d][0]), "C" != p && (u[d] = p, d && (f = u[d - 1])), s[d] = a(s[d], r, f), "A" != u[d] && "C" == p && (u[d] = "C"), h(s, d), o && (o[d] && (p = o[d][0]), "C" != p && (c[d] = p, d && (f = c[d - 1])), o[d] = a(o[d], n, f), "A" != c[d] && "C" == p && (c[d] = "C"), h(o, d)), l(s, o, r, n, d), l(o, s, n, r, d);
                        var x = s[d],
                            v = o && o[d],
                            y = x.length,
                            m = o && v.length;
                        r.x = x[y - 2], r.y = x[y - 1], r.bx = $(x[y - 4]) || r.x, r.by = $(x[y - 3]) || r.y, n.bx = o && ($(v[m - 4]) || n.x), n.by = o && ($(v[m - 3]) || n.y), n.x = o && v[m - 2], n.y = o && v[m - 1]
                    }
                    return o || (i.curve = St(s)), o ? [s, o] : s
                }, null, St),
                zt = (I._parseDots = O(function(t) {
                    for (var e = [], i = 0, r = t.length; i < r; i++) {
                        var n = {},
                            s = t[i].match(/^([^:]*):?([\d\.]*)/);
                        if (n.color = I.getRGB(s[1]), n.color.error) return null;
                        n.opacity = n.color.opacity, n.color = n.color.hex, s[2] && (n.offset = s[2] + "%"), e.push(n)
                    }
                    for (i = 1, r = e.length - 1; i < r; i++)
                        if (!e[i].offset) {
                            for (var o = $(e[i - 1].offset || 0), a = 0, h = i + 1; h < r; h++)
                                if (e[h].offset) {
                                    a = e[h].offset;
                                    break
                                }
                            a || (a = 100, h = r);
                            for (var l = ((a = $(a)) - o) / (h - i + 1); i < h; i++) o += l, e[i].offset = o + "%"
                        }
                    return e
                }), I._tear = function(t, e) {
                    t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
                }),
                It = (I._tofront = function(t, e) {
                    e.top !== t && (zt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
                }, I._toback = function(t, e) {
                    e.bottom !== t && (zt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
                }, I._insertafter = function(t, e, i) {
                    zt(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, (t.prev = e).next = t
                }, I._insertbefore = function(t, e, i) {
                    zt(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, (e.prev = t).next = e
                }, I.toMatrix = function(t, e) {
                    var i = Ct(t),
                        r = {
                            _: {
                                transform: ""
                            },
                            getBBox: function() {
                                return i
                            }
                        };
                    return Dt(r, e), r.matrix
                }),
                Dt = (I.transformPath = function(t, e) {
                    return pt(t, It(t, e))
                }, I._extractTransform = function(t, e) {
                    if (null == e) return t._.transform;
                    e = G(e).replace(/\.{3}|\u2026/g, t._.transform || "");
                    var i, r, n = I.parseTransformString(e),
                        s = 0,
                        o = 1,
                        a = 1,
                        h = t._,
                        l = new D;
                    if (h.transform = n || [], n)
                        for (var u = 0, c = n.length; u < c; u++) {
                            var p, f, d, g, x, v = n[u],
                                y = v.length,
                                m = G(v[0]).toLowerCase(),
                                b = v[0] != m,
                                w = b ? l.invert() : 0;
                            "t" == m && 3 == y ? b ? (p = w.x(0, 0), f = w.y(0, 0), d = w.x(v[1], v[2]), g = w.y(v[1], v[2]), l.translate(d - p, g - f)) : l.translate(v[1], v[2]) : "r" == m ? 2 == y ? (x = x || t.getBBox(1), l.rotate(v[1], x.x + x.width / 2, x.y + x.height / 2), s += v[1]) : 4 == y && (b ? (d = w.x(v[2], v[3]), g = w.y(v[2], v[3]), l.rotate(v[1], d, g)) : l.rotate(v[1], v[2], v[3]), s += v[1]) : "s" == m ? 2 == y || 3 == y ? (x = x || t.getBBox(1), l.scale(v[1], v[y - 1], x.x + x.width / 2, x.y + x.height / 2), o *= v[1], a *= v[y - 1]) : 5 == y && (b ? (d = w.x(v[3], v[4]), g = w.y(v[3], v[4]), l.scale(v[1], v[2], d, g)) : l.scale(v[1], v[2], v[3], v[4]), o *= v[1], a *= v[2]) : "m" == m && 7 == y && l.add(v[1], v[2], v[3], v[4], v[5], v[6]), h.dirtyT = 1, t.matrix = l
                        }
                    t.matrix = l, h.sx = o, h.sy = a, h.deg = s, h.dx = i = l.e, h.dy = r = l.f, 1 == o && 1 == a && !s && h.bbox ? (h.bbox.x += +i, h.bbox.y += +r) : h.dirtyT = 1
                }),
                Rt = function(t) {
                    var e = t[0];
                    switch (e.toLowerCase()) {
                        case "t":
                            return [e, 0, 0];
                        case "m":
                            return [e, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case "s":
                            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                    }
                },
                Ht = I._equaliseTransform = function(t, e) {
                    e = G(e).replace(/\.{3}|\u2026/g, t), t = I.parseTransformString(t) || [], e = I.parseTransformString(e) || [];
                    for (var i, r, n, s, o = M(t.length, e.length), a = [], h = [], l = 0; l < o; l++) {
                        if (n = t[l] || Rt(e[l]), s = e[l] || Rt(n), n[0] != s[0] || "r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3]) || "s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])) return;
                        for (a[l] = [], h[l] = [], i = 0, r = M(n.length, s.length); i < r; i++) i in n && (a[l][i] = n[i]), i in s && (h[l][i] = s[i])
                    }
                    return {
                        from: a,
                        to: h
                    }
                };
            I._getContainer = function(t, e, i, r) {
                    var n;
                    return null != (n = null != r || I.is(t, "object") ? t : d.doc.getElementById(t)) ? n.tagName ? null == e ? {
                        container: n,
                        width: n.style.pixelWidth || n.offsetWidth,
                        height: n.style.pixelHeight || n.offsetHeight
                    } : {
                        container: n,
                        width: e,
                        height: i
                    } : {
                        container: 1,
                        x: t,
                        y: e,
                        width: i,
                        height: r
                    } : void 0
                }, I.pathToRelative = Bt, I._engine = {}, I.path2curve = Pt, I.matrix = function(t, e, i, r, n, s) {
                    return new D(t, e, i, r, n, s)
                },
                function(t) {
                    function n(t) {
                        return t[0] * t[0] + t[1] * t[1]
                    }

                    function s(t) {
                        var e = q.sqrt(n(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                    }
                    t.add = function(t, e, i, r, n, s) {
                        var o, a, h, l, u = [
                                [],
                                [],
                                []
                            ],
                            c = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            p = [
                                [t, i, n],
                                [e, r, s],
                                [0, 0, 1]
                            ];
                        for (t && t instanceof D && (p = [
                                [t.a, t.c, t.e],
                                [t.b, t.d, t.f],
                                [0, 0, 1]
                            ]), o = 0; o < 3; o++)
                            for (a = 0; a < 3; a++) {
                                for (h = l = 0; h < 3; h++) l += c[o][h] * p[h][a];
                                u[o][a] = l
                            }
                        this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
                    }, t.invert = function() {
                        var t = this,
                            e = t.a * t.d - t.b * t.c;
                        return new D(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                    }, t.clone = function() {
                        return new D(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, t.translate = function(t, e) {
                        this.add(1, 0, 0, 1, t, e)
                    }, t.scale = function(t, e, i, r) {
                        null == e && (e = t), (i || r) && this.add(1, 0, 0, 1, i, r), this.add(t, 0, 0, e, 0, 0), (i || r) && this.add(1, 0, 0, 1, -i, -r)
                    }, t.rotate = function(t, e, i) {
                        t = I.rad(t), e = e || 0, i = i || 0;
                        var r = +q.cos(t).toFixed(9),
                            n = +q.sin(t).toFixed(9);
                        this.add(r, n, -n, r, e, i), this.add(1, 0, 0, 1, -e, -i)
                    }, t.x = function(t, e) {
                        return t * this.a + e * this.c + this.e
                    }, t.y = function(t, e) {
                        return t * this.b + e * this.d + this.f
                    }, t.get = function(t) {
                        return +this[G.fromCharCode(97 + t)].toFixed(4)
                    }, t.toString = function() {
                        return I.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                    }, t.toFilter = function() {
                        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                    }, t.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, t.split = function() {
                        var t = {};
                        t.dx = this.e, t.dy = this.f;
                        var e = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        t.scalex = q.sqrt(n(e[0])), s(e[0]), t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * t.shear, e[1][1] - e[0][1] * t.shear], t.scaley = q.sqrt(n(e[1])), s(e[1]), t.shear /= t.scaley;
                        var i = -e[0][1],
                            r = e[1][1];
                        return r < 0 ? (t.rotate = I.deg(q.acos(r)), i < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = I.deg(q.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                    }, t.toTransformString = function(t) {
                        var e = t || this[X]();
                        return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : "") + (e.rotate ? "r" + [e.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                    }
                }(D.prototype);
            for (var Nt = function() {
                    this.returnValue = !1
                }, Gt = function() {
                    return this.originalEvent.preventDefault()
                }, Yt = function() {
                    this.cancelBubble = !0
                }, Wt = function() {
                    return this.originalEvent.stopPropagation()
                }, Ot = function(t) {
                    var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                        i = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                    return {
                        x: t.clientX + i,
                        y: t.clientY + e
                    }
                }, jt = d.doc.addEventListener ? function(s, t, o, a) {
                    var e = function(t) {
                        var e = Ot(t);
                        return o.call(a, t, e.x, e.y)
                    };
                    if (s.addEventListener(t, e, !1), g && p[t]) {
                        var i = function(t) {
                            for (var e = Ot(t), i = t, r = 0, n = t.targetTouches && t.targetTouches.length; r < n; r++)
                                if (t.targetTouches[r].target == s) {
                                    (t = t.targetTouches[r]).originalEvent = i, t.preventDefault = Gt, t.stopPropagation = Wt;
                                    break
                                }
                            return o.call(a, t, e.x, e.y)
                        };
                        s.addEventListener(p[t], i, !1)
                    }
                    return function() {
                        return s.removeEventListener(t, e, !1), g && p[t] && s.removeEventListener(p[t], i, !1), !0
                    }
                } : d.doc.attachEvent ? function(t, e, s, o) {
                    var i = function(t) {
                        t = t || d.win.event;
                        var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                            i = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                            r = t.clientX + i,
                            n = t.clientY + e;
                        return t.preventDefault = t.preventDefault || Nt, t.stopPropagation = t.stopPropagation || Yt, s.call(o, t, r, n)
                    };
                    return t.attachEvent("on" + e, i),
                        function() {
                            return t.detachEvent("on" + e, i), !0
                        }
                } : void 0, Xt = [], qt = function(t) {
                    for (var e, i = t.clientX, r = t.clientY, n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop, s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft, o = Xt.length; o--;) {
                        if (e = Xt[o], g && t.touches) {
                            for (var a, h = t.touches.length; h--;)
                                if ((a = t.touches[h]).identifier == e.el._drag.id) {
                                    i = a.clientX, r = a.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                    break
                                }
                        } else t.preventDefault();
                        var l, u = e.el.node,
                            c = u.nextSibling,
                            p = u.parentNode,
                            f = u.style.display;
                        d.win.opera && p.removeChild(u), u.style.display = "none", l = e.el.paper.getElementByPoint(i, r), u.style.display = f, d.win.opera && (c ? p.insertBefore(u, c) : p.appendChild(u)), l && z("raphael.drag.over." + e.el.id, e.el, l), i += s, r += n, z("raphael.drag.move." + e.el.id, e.move_scope || e.el, i - e.el._drag.x, r - e.el._drag.y, i, r, t)
                    }
                }, Vt = function(t) {
                    I.unmousemove(qt).unmouseup(Vt);
                    for (var e, i = Xt.length; i--;)(e = Xt[i]).el._drag = {}, z("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
                    Xt = []
                }, Ut = I.el = {}, $t = c.length; $t--;) ! function(r) {
                I[r] = Ut[r] = function(t, e) {
                    return I.is(t, "function") && (this.events = this.events || [], this.events.push({
                        name: r,
                        f: t,
                        unbind: jt(this.shape || this.node || d.doc, r, t, e || this)
                    })), this
                }, I["un" + r] = Ut["un" + r] = function(t) {
                    for (var e = this.events || [], i = e.length; i--;) e[i].name != r || !I.is(t, "undefined") && e[i].f != t || (e[i].unbind(), e.splice(i, 1), !e.length && delete this.events);
                    return this
                }
            }(c[$t]);
            Ut.data = function(t, e) {
                var i = ot[this.id] = ot[this.id] || {};
                if (0 == arguments.length) return i;
                if (1 != arguments.length) return i[t] = e, z("raphael.data.set." + this.id, this, e, t), this;
                if (I.is(t, "object")) {
                    for (var r in t) t[N](r) && this.data(r, t[r]);
                    return this
                }
                return z("raphael.data.get." + this.id, this, i[t], t), i[t]
            }, Ut.removeData = function(t) {
                return null == t ? ot[this.id] = {} : ot[this.id] && delete ot[this.id][t], this
            }, Ut.getData = function() {
                return v(ot[this.id] || {})
            }, Ut.hover = function(t, e, i, r) {
                return this.mouseover(t, i).mouseout(e, r || i)
            }, Ut.unhover = function(t, e) {
                return this.unmouseover(t).unmouseout(e)
            };
            var Zt = [];
            Ut.drag = function(a, h, l, u, c, p) {
                function t(t) {
                    (t.originalEvent || t).preventDefault();
                    var e = t.clientX,
                        i = t.clientY,
                        r = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                        n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                    if (this._drag.id = t.identifier, g && t.touches)
                        for (var s, o = t.touches.length; o--;)
                            if (s = t.touches[o], this._drag.id = s.identifier, s.identifier == this._drag.id) {
                                e = s.clientX, i = s.clientY;
                                break
                            }
                    this._drag.x = e + n, this._drag.y = i + r, !Xt.length && I.mousemove(qt).mouseup(Vt), Xt.push({
                        el: this,
                        move_scope: u,
                        start_scope: c,
                        end_scope: p
                    }), h && z.on("raphael.drag.start." + this.id, h), a && z.on("raphael.drag.move." + this.id, a), l && z.on("raphael.drag.end." + this.id, l), z("raphael.drag.start." + this.id, c || u || this, t.clientX + n, t.clientY + r, t)
                }
                return this._drag = {}, Zt.push({
                    el: this,
                    start: t
                }), this.mousedown(t), this
            }, Ut.onDragOver = function(t) {
                t ? z.on("raphael.drag.over." + this.id, t) : z.unbind("raphael.drag.over." + this.id)
            }, Ut.undrag = function() {
                for (var t = Zt.length; t--;) Zt[t].el == this && (this.unmousedown(Zt[t].start), Zt.splice(t, 1), z.unbind("raphael.drag.*." + this.id));
                !Zt.length && I.unmousemove(qt).unmouseup(Vt), Xt = []
            }, e.circle = function(t, e, i) {
                var r = I._engine.circle(this, t || 0, e || 0, i || 0);
                return this.__set__ && this.__set__.push(r), r
            }, e.rect = function(t, e, i, r, n) {
                var s = I._engine.rect(this, t || 0, e || 0, i || 0, r || 0, n || 0);
                return this.__set__ && this.__set__.push(s), s
            }, e.ellipse = function(t, e, i, r) {
                var n = I._engine.ellipse(this, t || 0, e || 0, i || 0, r || 0);
                return this.__set__ && this.__set__.push(n), n
            }, e.path = function(t) {
                t && !I.is(t, f) && !I.is(t[0], T) && (t += "");
                var e = I._engine.path(I.format[b](I, arguments), this);
                return this.__set__ && this.__set__.push(e), e
            }, e.image = function(t, e, i, r, n) {
                var s = I._engine.image(this, t || "about:blank", e || 0, i || 0, r || 0, n || 0);
                return this.__set__ && this.__set__.push(s), s
            }, e.text = function(t, e, i) {
                var r = I._engine.text(this, t || 0, e || 0, G(i));
                return this.__set__ && this.__set__.push(r), r
            }, e.set = function(t) {
                !I.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                var e = new pe(t);
                return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
            }, e.setStart = function(t) {
                this.__set__ = t || this.set()
            }, e.setFinish = function(t) {
                var e = this.__set__;
                return delete this.__set__, e
            }, e.getSize = function() {
                var t = this.canvas.parentNode;
                return {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }, e.setSize = function(t, e) {
                return I._engine.setSize.call(this, t, e)
            }, e.setViewBox = function(t, e, i, r, n) {
                return I._engine.setViewBox.call(this, t, e, i, r, n)
            }, e.top = e.bottom = null, e.raphael = I;
            e.getElementByPoint = function(t, e) {
                var i, r, n, s, o, a, h, l = this.canvas,
                    u = d.doc.elementFromPoint(t, e);
                if (d.win.opera && "svg" == u.tagName) {
                    var c = (r = (i = l).getBoundingClientRect(), n = i.ownerDocument, s = n.body, o = n.documentElement, a = o.clientTop || s.clientTop || 0, h = o.clientLeft || s.clientLeft || 0, {
                            y: r.top + (d.win.pageYOffset || o.scrollTop || s.scrollTop) - a,
                            x: r.left + (d.win.pageXOffset || o.scrollLeft || s.scrollLeft) - h
                        }),
                        p = l.createSVGRect();
                    p.x = t - c.x, p.y = e - c.y, p.width = p.height = 1;
                    var f = l.getIntersectionList(p, null);
                    f.length && (u = f[f.length - 1])
                }
                if (!u) return null;
                for (; u.parentNode && u != l.parentNode && !u.raphael;) u = u.parentNode;
                return u == this.canvas.parentNode && (u = l), u && u.raphael ? this.getById(u.raphaelid) : null
            }, e.getElementsByBBox = function(e) {
                var i = this.set();
                return this.forEach(function(t) {
                    I.isBBoxIntersect(t.getBBox(), e) && i.push(t)
                }), i
            }, e.getById = function(t) {
                for (var e = this.bottom; e;) {
                    if (e.id == t) return e;
                    e = e.next
                }
                return null
            }, e.forEach = function(t, e) {
                for (var i = this.bottom; i;) {
                    if (!1 === t.call(e, i)) return this;
                    i = i.next
                }
                return this
            }, e.getElementsByPoint = function(e, i) {
                var r = this.set();
                return this.forEach(function(t) {
                    t.isPointInside(e, i) && r.push(t)
                }), r
            }, Ut.isPointInside = function(t, e) {
                var i = this.realPath = ct[this.type](this);
                return this.attr("transform") && this.attr("transform").length && (i = I.transformPath(i, this.attr("transform"))), I.isPointInsidePath(i, t, e)
            }, Ut.getBBox = function(t) {
                if (this.removed) return {};
                var e = this._;
                return t ? (!e.dirty && e.bboxwt || (this.realPath = ct[this.type](this), e.bboxwt = Ct(this.realPath), e.bboxwt.toString = i, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = ct[this.type](this)), e.bbox = Ct(pt(this.realPath, this.matrix)), e.bbox.toString = i, e.dirty = e.dirtyT = 0), e.bbox)
            }, Ut.clone = function() {
                if (this.removed) return null;
                var t = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(t), t
            }, Ut.glow = function(t) {
                if ("text" == this.type) return null;
                var e = {
                        width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                        fill: t.fill || !1,
                        opacity: null == t.opacity ? .5 : t.opacity,
                        offsetx: t.offsetx || 0,
                        offsety: t.offsety || 0,
                        color: t.color || "#000"
                    },
                    i = e.width / 2,
                    r = this.paper,
                    n = r.set(),
                    s = this.realPath || ct[this.type](this);
                s = this.matrix ? pt(s, this.matrix) : s;
                for (var o = 1; o < i + 1; o++) n.push(r.path(s).attr({
                    stroke: e.color,
                    fill: e.fill ? e.color : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +(e.width / i * o).toFixed(3),
                    opacity: +(e.opacity / i).toFixed(3)
                }));
                return n.insertBefore(this).translate(e.offsetx, e.offsety)
            };
            var Qt = function(t, e, i, r, n, s, o, a, h) {
                    return null == h ? S(t, e, i, r, n, s, o, a) : I.findDotsAtSegment(t, e, i, r, n, s, o, a, function(t, e, i, r, n, s, o, a, h) {
                        if (!(h < 0 || S(t, e, i, r, n, s, o, a) < h)) {
                            var l, u = .5,
                                c = 1 - u;
                            for (l = S(t, e, i, r, n, s, o, a, c); .01 < V(l - h);) l = S(t, e, i, r, n, s, o, a, c += (l < h ? 1 : -1) * (u /= 2));
                            return c
                        }
                    }(t, e, i, r, n, s, o, a, h))
                },
                Jt = function(f, d) {
                    return function(t, e, i) {
                        for (var r, n, s, o, a, h = "", l = {}, u = 0, c = 0, p = (t = Pt(t)).length; c < p; c++) {
                            if ("M" == (s = t[c])[0]) r = +s[1], n = +s[2];
                            else {
                                if (e < u + (o = Qt(r, n, s[1], s[2], s[3], s[4], s[5], s[6]))) {
                                    if (d && !l.start) {
                                        if (h += ["C" + (a = Qt(r, n, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).start.x, a.start.y, a.m.x, a.m.y, a.x, a.y], i) return h;
                                        l.start = h, h = ["M" + a.x, a.y + "C" + a.n.x, a.n.y, a.end.x, a.end.y, s[5], s[6]].join(), u += o, r = +s[5], n = +s[6];
                                        continue
                                    }
                                    if (!f && !d) return {
                                        x: (a = Qt(r, n, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).x,
                                        y: a.y,
                                        alpha: a.alpha
                                    }
                                }
                                u += o, r = +s[5], n = +s[6]
                            }
                            h += s.shift() + s
                        }
                        return l.end = h, (a = f ? u : d ? l : I.findDotsAtSegment(r, n, s[0], s[1], s[2], s[3], s[4], s[5], 1)).alpha && (a = {
                            x: a.x,
                            y: a.y,
                            alpha: a.alpha
                        }), a
                    }
                },
                Kt = Jt(1),
                te = Jt(),
                ee = Jt(0, 1);
            I.getTotalLength = Kt, I.getPointAtLength = te, I.getSubpath = function(t, e, i) {
                if (this.getTotalLength(t) - i < 1e-6) return ee(t, e).end;
                var r = ee(t, i, 1);
                return e ? ee(r, e).end : r
            }, Ut.getTotalLength = function() {
                var t = this.getPath();
                if (t) return this.node.getTotalLength ? this.node.getTotalLength() : Kt(t)
            }, Ut.getPointAtLength = function(t) {
                var e = this.getPath();
                if (e) return te(e, t)
            }, Ut.getPath = function() {
                var t, e = I._getPath[this.type];
                if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
            }, Ut.getSubpath = function(t, e) {
                var i = this.getPath();
                if (i) return I.getSubpath(i, t, e)
            };
            var ie = I.easing_formulas = {
                linear: function(t) {
                    return t
                },
                "<": function(t) {
                    return F(t, 1.7)
                },
                ">": function(t) {
                    return F(t, .48)
                },
                "<>": function(t) {
                    var e = .48 - t / 1.04,
                        i = q.sqrt(.1734 + e * e),
                        r = i - e,
                        n = -i - e,
                        s = F(V(r), 1 / 3) * (r < 0 ? -1 : 1) + F(V(n), 1 / 3) * (n < 0 ? -1 : 1) + .5;
                    return 3 * (1 - s) * s * s + s * s * s
                },
                backIn: function(t) {
                    return t * t * (2.70158 * t - 1.70158)
                },
                backOut: function(t) {
                    return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                },
                elastic: function(t) {
                    return t == !!t ? t : F(2, -10 * t) * q.sin(2 * U * (t - .075) / .3) + 1
                },
                bounce: function(t) {
                    var e = 7.5625,
                        i = 2.75;
                    return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
                }
            };
            ie.easeIn = ie["ease-in"] = ie["<"], ie.easeOut = ie["ease-out"] = ie[">"], ie.easeInOut = ie["ease-in-out"] = ie["<>"], ie["back-in"] = ie.backIn, ie["back-out"] = ie.backOut;
            var re = [],
                ne = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 16)
                },
                se = function() {
                    for (var t = +new Date, e = 0; e < re.length; e++) {
                        var i = re[e];
                        if (!i.el.removed && !i.paused) {
                            var r, n, s = t - i.start,
                                o = i.ms,
                                a = i.easing,
                                h = i.from,
                                l = i.diff,
                                u = i.to,
                                c = (i.t, i.el),
                                p = {},
                                f = {};
                            if (i.initstatus ? (s = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * o, i.status = i.initstatus, delete i.initstatus, i.stop && re.splice(e--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (s / o)) / i.anim.top, !(s < 0))
                                if (s < o) {
                                    var d = a(s / o);
                                    for (var g in h)
                                        if (h[N](g)) {
                                            switch (K[g]) {
                                                case Y:
                                                    r = +h[g] + d * o * l[g];
                                                    break;
                                                case "colour":
                                                    r = "rgb(" + [oe(P(h[g].r + d * o * l[g].r)), oe(P(h[g].g + d * o * l[g].g)), oe(P(h[g].b + d * o * l[g].b))].join(",") + ")";
                                                    break;
                                                case "path":
                                                    r = [];
                                                    for (var x = 0, v = h[g].length; x < v; x++) {
                                                        r[x] = [h[g][x][0]];
                                                        for (var y = 1, m = h[g][x].length; y < m; y++) r[x][y] = +h[g][x][y] + d * o * l[g][x][y];
                                                        r[x] = r[x].join(C)
                                                    }
                                                    r = r.join(C);
                                                    break;
                                                case "transform":
                                                    if (l[g].real)
                                                        for (r = [], x = 0, v = h[g].length; x < v; x++)
                                                            for (r[x] = [h[g][x][0]], y = 1, m = h[g][x].length; y < m; y++) r[x][y] = h[g][x][y] + d * o * l[g][x][y];
                                                    else {
                                                        var b = function(t) {
                                                            return +h[g][t] + d * o * l[g][t]
                                                        };
                                                        r = [
                                                            ["m", b(0), b(1), b(2), b(3), b(4), b(5)]
                                                        ]
                                                    }
                                                    break;
                                                case "csv":
                                                    if ("clip-rect" == g)
                                                        for (r = [], x = 4; x--;) r[x] = +h[g][x] + d * o * l[g][x];
                                                    break;
                                                default:
                                                    var w = [][j](h[g]);
                                                    for (r = [], x = c.paper.customAttributes[g].length; x--;) r[x] = +w[x] + d * o * l[g][x]
                                            }
                                            p[g] = r
                                        }
                                    c.attr(p),
                                        function(t, e, i) {
                                            setTimeout(function() {
                                                z("raphael.anim.frame." + t, e, i)
                                            })
                                        }(c.id, c, i.anim)
                                } else {
                                    if (function(t, e, i) {
                                            setTimeout(function() {
                                                z("raphael.anim.frame." + e.id, e, i), z("raphael.anim.finish." + e.id, e, i), I.is(t, "function") && t.call(e)
                                            })
                                        }(i.callback, c, i.anim), c.attr(u), re.splice(e--, 1), 1 < i.repeat && !i.next) {
                                        for (n in u) u[N](n) && (f[n] = i.totalOrigin[n]);
                                        i.el.attr(f), _(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
                                    }
                                    i.next && !i.stop && _(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
                                }
                        }
                    }
                    re.length && ne(se)
                },
                oe = function(t) {
                    return 255 < t ? 255 : t < 0 ? 0 : t
                };
            Ut.animateWith = function(t, e, i, r, n, s) {
                var o = this;
                if (o.removed) return s && s.call(o), o;
                var a = i instanceof u ? i : I.animation(i, r, n, s);
                _(a, o, a.percents[0], null, o.attr());
                for (var h = 0, l = re.length; h < l; h++)
                    if (re[h].anim == e && re[h].el == t) {
                        re[l - 1].start = re[h].start;
                        break
                    }
                return o
            }, Ut.onAnimation = function(t) {
                return t ? z.on("raphael.anim.frame." + this.id, t) : z.unbind("raphael.anim.frame." + this.id), this
            }, u.prototype.delay = function(t) {
                var e = new u(this.anim, this.ms);
                return e.times = this.times, e.del = +t || 0, e
            }, u.prototype.repeat = function(t) {
                var e = new u(this.anim, this.ms);
                return e.del = this.del, e.times = q.floor(M(t, 0)) || 1, e
            }, I.animation = function(t, e, i, r) {
                if (t instanceof u) return t;
                !I.is(i, "function") && i || (r = r || i || null, i = null), t = Object(t), e = +e || 0;
                var n, s, o = {};
                for (s in t) t[N](s) && $(s) != s && $(s) + "%" != s && (n = !0, o[s] = t[s]);
                if (n) return i && (o.easing = i), r && (o.callback = r), new u({
                    100: o
                }, e);
                if (r) {
                    var a = 0;
                    for (var h in t) {
                        var l = Z(h);
                        t[N](h) && a < l && (a = l)
                    }!t[a += "%"].callback && (t[a].callback = r)
                }
                return new u(t, e)
            }, Ut.animate = function(t, e, i, r) {
                var n = this;
                if (n.removed) return r && r.call(n), n;
                var s = t instanceof u ? t : I.animation(t, e, i, r);
                return _(s, n, s.percents[0], null, n.attr()), n
            }, Ut.setTime = function(t, e) {
                return t && null != e && this.status(t, L(e, t.ms) / t.ms), this
            }, Ut.status = function(t, e) {
                var i, r, n = [],
                    s = 0;
                if (null != e) return _(t, this, -1, L(e, 1)), this;
                for (i = re.length; s < i; s++)
                    if ((r = re[s]).el.id == this.id && (!t || r.anim == t)) {
                        if (t) return r.status;
                        n.push({
                            anim: r.anim,
                            status: r.status
                        })
                    }
                return t ? 0 : n
            }, Ut.pause = function(t) {
                for (var e = 0; e < re.length; e++) re[e].el.id != this.id || t && re[e].anim != t || !1 !== z("raphael.anim.pause." + this.id, this, re[e].anim) && (re[e].paused = !0);
                return this
            }, Ut.resume = function(t) {
                for (var e = 0; e < re.length; e++)
                    if (re[e].el.id == this.id && (!t || re[e].anim == t)) {
                        var i = re[e];
                        !1 !== z("raphael.anim.resume." + this.id, this, i.anim) && (delete i.paused, this.status(i.anim, i.status))
                    }
                return this
            }, Ut.stop = function(t) {
                for (var e = 0; e < re.length; e++) re[e].el.id != this.id || t && re[e].anim != t || !1 !== z("raphael.anim.stop." + this.id, this, re[e].anim) && re.splice(e--, 1);
                return this
            }, z.on("raphael.remove", t), z.on("raphael.clear", t), Ut.toString = function() {
                return "Raphaël’s object"
            };
            var ae, he, le, ue, ce, pe = function(t) {
                    if (this.items = [], this.length = 0, this.type = "set", t)
                        for (var e = 0, i = t.length; e < i; e++) !t[e] || t[e].constructor != Ut.constructor && t[e].constructor != pe || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                },
                fe = pe.prototype;
            for (var de in fe.push = function() {
                    for (var t, e, i = 0, r = arguments.length; i < r; i++) !(t = arguments[i]) || t.constructor != Ut.constructor && t.constructor != pe || (this[e = this.items.length] = this.items[e] = t, this.length++);
                    return this
                }, fe.pop = function() {
                    return this.length && delete this[this.length--], this.items.pop()
                }, fe.forEach = function(t, e) {
                    for (var i = 0, r = this.items.length; i < r; i++)
                        if (!1 === t.call(e, this.items[i], i)) return this;
                    return this
                }, Ut) Ut[N](de) && (fe[de] = function(i) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(t) {
                        t[i][b](t, e)
                    })
                }
            }(de));
            return fe.attr = function(t, e) {
                    if (t && I.is(t, T) && I.is(t[0], "object"))
                        for (var i = 0, r = t.length; i < r; i++) this.items[i].attr(t[i]);
                    else
                        for (var n = 0, s = this.items.length; n < s; n++) this.items[n].attr(t, e);
                    return this
                }, fe.clear = function() {
                    for (; this.length;) this.pop()
                }, fe.splice = function(t, e, i) {
                    t = t < 0 ? M(this.length + t, 0) : t, e = M(0, L(this.length - t, e));
                    var r, n = [],
                        s = [],
                        o = [];
                    for (r = 2; r < arguments.length; r++) o.push(arguments[r]);
                    for (r = 0; r < e; r++) s.push(this[t + r]);
                    for (; r < this.length - t; r++) n.push(this[t + r]);
                    var a = o.length;
                    for (r = 0; r < a + n.length; r++) this.items[t + r] = this[t + r] = r < a ? o[r] : n[r - a];
                    for (r = this.items.length = this.length -= e - a; this[r];) delete this[r++];
                    return new pe(s)
                }, fe.exclude = function(t) {
                    for (var e = 0, i = this.length; e < i; e++)
                        if (this[e] == t) return this.splice(e, 1), !0
                }, fe.animate = function(t, e, i, r) {
                    (I.is(i, "function") || !i) && (r = i || null);
                    var n, s, o = this.items.length,
                        a = o,
                        h = this;
                    if (!o) return this;
                    r && (s = function() {
                        !--o && r.call(h)
                    }), i = I.is(i, f) ? i : s;
                    var l = I.animation(t, e, i, s);
                    for (n = this.items[--a].animate(l); a--;) this.items[a] && !this.items[a].removed && this.items[a].animateWith(n, l, l), this.items[a] && !this.items[a].removed || o--;
                    return this
                }, fe.insertAfter = function(t) {
                    for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                    return this
                }, fe.getBBox = function() {
                    for (var t = [], e = [], i = [], r = [], n = this.items.length; n--;)
                        if (!this.items[n].removed) {
                            var s = this.items[n].getBBox();
                            t.push(s.x), e.push(s.y), i.push(s.x + s.width), r.push(s.y + s.height)
                        }
                    return {
                        x: t = L[b](0, t),
                        y: e = L[b](0, e),
                        x2: i = M[b](0, i),
                        y2: r = M[b](0, r),
                        width: i - t,
                        height: r - e
                    }
                }, fe.clone = function(t) {
                    t = this.paper.set();
                    for (var e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].clone());
                    return t
                }, fe.toString = function() {
                    return "Raphaël‘s set"
                }, fe.glow = function(r) {
                    var n = this.paper.set();
                    return this.forEach(function(t, e) {
                        var i = t.glow(r);
                        null != i && i.forEach(function(t, e) {
                            n.push(t)
                        })
                    }), n
                }, fe.isPointInside = function(e, i) {
                    var r = !1;
                    return this.forEach(function(t) {
                        return t.isPointInside(e, i) ? !(r = !0) : void 0
                    }), r
                }, I.registerFont = function(t) {
                    if (!t.face) return t;
                    this.fonts = this.fonts || {};
                    var e = {
                            w: t.w,
                            face: {},
                            glyphs: {}
                        },
                        i = t.face["font-family"];
                    for (var r in t.face) t.face[N](r) && (e.face[r] = t.face[r]);
                    if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg)
                        for (var n in e.face["units-per-em"] = Z(t.face["units-per-em"], 10), t.glyphs)
                            if (t.glyphs[N](n)) {
                                var s = t.glyphs[n];
                                if (e.glyphs[n] = {
                                        w: s.w,
                                        k: {},
                                        d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function(t) {
                                            return {
                                                l: "L",
                                                c: "C",
                                                x: "z",
                                                t: "m",
                                                r: "l",
                                                v: "c"
                                            }[t] || "M"
                                        }) + "z"
                                    }, s.k)
                                    for (var o in s.k) s[N](o) && (e.glyphs[n].k[o] = s.k[o])
                            }
                    return t
                }, e.getFont = function(t, e, i, r) {
                    if (r = r || "normal", i = i || "normal", e = +e || {
                            normal: 400,
                            bold: 700,
                            lighter: 300,
                            bolder: 800
                        }[e] || 400, I.fonts) {
                        var n, s = I.fonts[t];
                        if (!s) {
                            var o = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)", "i");
                            for (var a in I.fonts)
                                if (I.fonts[N](a) && o.test(a)) {
                                    s = I.fonts[a];
                                    break
                                }
                        }
                        if (s)
                            for (var h = 0, l = s.length; h < l && ((n = s[h]).face["font-weight"] != e || n.face["font-style"] != i && n.face["font-style"] || n.face["font-stretch"] != r); h++);
                        return n
                    }
                }, e.print = function(t, e, i, r, n, s, o, a) {
                    s = s || "middle", o = M(L(o || 0, 1), -1), a = M(L(a || 1, 3), 1);
                    var h, l = G(i)[X](""),
                        u = 0,
                        c = 0,
                        p = "";
                    if (I.is(r, "string") && (r = this.getFont(r)), r) {
                        h = (n || 16) / r.face["units-per-em"];
                        for (var f = r.face.bbox[X](H), d = +f[0], g = f[3] - f[1], x = 0, v = +f[1] + ("baseline" == s ? g + +r.face.descent : g / 2), y = 0, m = l.length; y < m; y++) {
                            if ("\n" == l[y]) c = w = u = 0, x += g * a;
                            else {
                                var b = c && r.glyphs[l[y - 1]] || {},
                                    w = r.glyphs[l[y]];
                                u += c ? (b.w || r.w) + (b.k && b.k[l[y]] || 0) + r.w * o : 0, c = 1
                            }
                            w && w.d && (p += I.transformPath(w.d, ["t", u * h, x * h, "s", h, h, d, v, "t", (t - d) / h, (e - v) / h]))
                        }
                    }
                    return this.path(p).attr({
                        fill: "#000",
                        stroke: "none"
                    })
                }, e.add = function(t) {
                    if (I.is(t, "array"))
                        for (var e, i = this.set(), r = 0, n = t.length; r < n; r++) e = t[r] || {}, s[N](e.type) && i.push(this[e.type]().attr(e));
                    return i
                }, I.format = function(t, e) {
                    var i = I.is(e, T) ? [0][j](e) : arguments;
                    return t && I.is(t, f) && i.length - 1 && (t = t.replace(o, function(t, e) {
                        return null == i[++e] ? "" : i[e]
                    })), t || ""
                }, I.fullfill = (ue = /\{([^\}]+)\}/g, ce = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, n) {
                    return String(t).replace(ue, function(t, e) {
                        return i = t, s = r = n, e.replace(ce, function(t, e, i, r, n) {
                            e = e || r, s && (e in s && (s = s[e]), "function" == typeof s && n && (s = s()))
                        }), s = (null == s || s == r ? i : s) + "";
                        var i, r, s
                    })
                }), I.ninja = function() {
                    if (a.was) d.win.Raphael = a.is;
                    else {
                        window.Raphael = void 0;
                        try {
                            delete window.Raphael
                        } catch (t) {}
                    }
                    return I
                }, I.st = fe, z.on("raphael.DOMload", function() {
                    r = !0
                }), ae = document, he = "DOMContentLoaded", null == ae.readyState && ae.addEventListener && (ae.addEventListener(he, le = function() {
                    ae.removeEventListener(he, le, !1), ae.readyState = "complete"
                }, !1), ae.readyState = "loading"),
                function t() {
                    /in/.test(ae.readyState) ? setTimeout(t, 9) : I.eve("raphael.DOMload")
                }(), I
        }.apply(e, r)) || (t.exports = n)
    }, function(t, e, i) {
        var r, f, d, p, g, o, x, v, y;
        p = "hasOwnProperty", g = /[\.\/]/, o = function() {}, x = function(t, e) {
            return t - e
        }, (y = function(t, e) {
            t = String(t);
            var i, r = d,
                n = Array.prototype.slice.call(arguments, 2),
                s = y.listeners(t),
                o = 0,
                a = [],
                h = {},
                l = [],
                u = f;
            f = t;
            for (var c = d = 0, p = s.length; c < p; c++) "zIndex" in s[c] && (a.push(s[c].zIndex), s[c].zIndex < 0 && (h[s[c].zIndex] = s[c]));
            for (a.sort(x); a[o] < 0;)
                if (i = h[a[o++]], l.push(i.apply(e, n)), d) return d = r, l;
            for (c = 0; c < p; c++)
                if ("zIndex" in (i = s[c]))
                    if (i.zIndex == a[o]) {
                        if (l.push(i.apply(e, n)), d) break;
                        do {
                            if ((i = h[a[++o]]) && l.push(i.apply(e, n)), d) break
                        } while (i)
                    } else h[i.zIndex] = i;
            else if (l.push(i.apply(e, n)), d) break;
            return d = r, f = u, l.length ? l : null
        })._events = v = {
            n: {}
        }, y.listeners = function(t) {
            var e, i, r, n, s, o, a, h, l = t.split(g),
                u = v,
                c = [u],
                p = [];
            for (n = 0, s = l.length; n < s; n++) {
                for (h = [], o = 0, a = c.length; o < a; o++)
                    for (i = [(u = c[o].n)[l[n]], u["*"]], r = 2; r--;)(e = i[r]) && (h.push(e), p = p.concat(e.f || []));
                c = h
            }
            return p
        }, y.on = function(t, e) {
            if (t = String(t), "function" != typeof e) return function() {};
            for (var i = t.split(g), r = v, n = 0, s = i.length; n < s; n++) r = (r = r.n).hasOwnProperty(i[n]) && r[i[n]] || (r[i[n]] = {
                n: {}
            });
            for (r.f = r.f || [], n = 0, s = r.f.length; n < s; n++)
                if (r.f[n] == e) return o;
            return r.f.push(e),
                function(t) {
                    +t == +t && (e.zIndex = +t)
                }
        }, y.f = function(t) {
            var e = [].slice.call(arguments, 1);
            return function() {
                y.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, y.stop = function() {
            d = 1
        }, y.nt = function(t) {
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(f) : f
        }, y.nts = function() {
            return f.split(g)
        }, y.off = y.unbind = function(t, e) {
            if (t) {
                var i, r, n, s, o, a, h, l = t.split(g),
                    u = [v];
                for (s = 0, o = l.length; s < o; s++)
                    for (a = 0; a < u.length; a += n.length - 2) {
                        if (n = [a, 1], i = u[a].n, "*" != l[s]) i[l[s]] && n.push(i[l[s]]);
                        else
                            for (r in i) i[p](r) && n.push(i[r]);
                        u.splice.apply(u, n)
                    }
                for (s = 0, o = u.length; s < o; s++)
                    for (i = u[s]; i.n;) {
                        if (e) {
                            if (i.f) {
                                for (a = 0, h = i.f.length; a < h; a++)
                                    if (i.f[a] == e) {
                                        i.f.splice(a, 1);
                                        break
                                    }!i.f.length && delete i.f
                            }
                            for (r in i.n)
                                if (i.n[p](r) && i.n[r].f) {
                                    var c = i.n[r].f;
                                    for (a = 0, h = c.length; a < h; a++)
                                        if (c[a] == e) {
                                            c.splice(a, 1);
                                            break
                                        }!c.length && delete i.n[r].f
                                }
                        } else
                            for (r in delete i.f, i.n) i.n[p](r) && i.n[r].f && delete i.n[r].f;
                        i = i.n
                    }
            } else y._events = v = {
                n: {}
            }
        }, y.once = function(t, e) {
            var i = function() {
                return y.unbind(t, i), e.apply(this, arguments)
            };
            return y.on(t, i)
        }, y.version = "0.4.2", y.toString = function() {
            return "You are running Eve 0.4.2"
        }, void 0 !== t && t.exports ? t.exports = y : void 0 === (r = function() {
            return y
        }.apply(e, [])) || (t.exports = r)
    }, function(t, e, i) {
        var r, n;
        r = [i(1)], void 0 === (n = function(S) {
            if (!S || S.svg) {
                var B = "hasOwnProperty",
                    M = String,
                    x = parseFloat,
                    _ = parseInt,
                    v = Math,
                    k = v.max,
                    C = v.abs,
                    y = v.pow,
                    L = /[, ]+/,
                    p = S.eve,
                    F = "http://www.w3.org/1999/xlink",
                    T = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                    A = {};
                S.toString = function() {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                };
                var E = function(t, e) {
                        if (e)
                            for (var i in "string" == typeof t && (t = E(t)), e) e[B](i) && ("xlink:" == i.substring(0, 6) ? t.setAttributeNS(F, i.substring(6), M(e[i])) : t.setAttribute(i, M(e[i])));
                        else(t = S._g.doc.createElementNS("http://www.w3.org/2000/svg", t)).style && (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return t
                    },
                    P = function(t, e) {
                        var n = "linear",
                            i = t.id + e,
                            s = .5,
                            o = .5,
                            r = t.node,
                            a = t.paper,
                            h = r.style,
                            l = S._g.doc.getElementById(i);
                        if (!l) {
                            if (e = (e = M(e).replace(S._radial_gradient, function(t, e, i) {
                                    if (n = "radial", e && i) {
                                        s = x(e);
                                        var r = 2 * (.5 < (o = x(i))) - 1;
                                        .25 < y(s - .5, 2) + y(o - .5, 2) && (o = v.sqrt(.25 - y(s - .5, 2)) * r + .5) && .5 != o && (o = o.toFixed(5) - 1e-5 * r)
                                    }
                                    return ""
                                })).split(/\s*\-\s*/), "linear" == n) {
                                var u = e.shift();
                                if (u = -x(u), isNaN(u)) return null;
                                var c = [0, 0, v.cos(S.rad(u)), v.sin(S.rad(u))],
                                    p = 1 / (k(C(c[2]), C(c[3])) || 1);
                                c[2] *= p, c[3] *= p, c[2] < 0 && (c[0] = -c[2], c[2] = 0), c[3] < 0 && (c[1] = -c[3], c[3] = 0)
                            }
                            var f = S._parseDots(e);
                            if (!f) return null;
                            if (i = i.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && i != t.gradient.id && (a.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                                l = E(n + "Gradient", {
                                    id: i
                                }), t.gradient = l, E(l, "radial" == n ? {
                                    fx: s,
                                    fy: o
                                } : {
                                    x1: c[0],
                                    y1: c[1],
                                    x2: c[2],
                                    y2: c[3],
                                    gradientTransform: t.matrix.invert()
                                }), a.defs.appendChild(l);
                                for (var d = 0, g = f.length; d < g; d++) l.appendChild(E("stop", {
                                    offset: f[d].offset ? f[d].offset : d ? "100%" : "0%",
                                    "stop-color": f[d].color || "#fff",
                                    "stop-opacity": isFinite(f[d].opacity) ? f[d].opacity : 1
                                }))
                            }
                        }
                        return E(r, {
                            fill: m(i),
                            opacity: 1,
                            "fill-opacity": 1
                        }), h.fill = "", h.opacity = 1, h.fillOpacity = 1
                    },
                    m = function(t) {
                        if ((e = document.documentMode) && (9 === e || 10 === e)) return "url('#" + t + "')";
                        var e, i = document.location;
                        return "url('" + (i.protocol + "//" + i.host + i.pathname + i.search) + "#" + t + "')"
                    },
                    z = function(t) {
                        var e = t.getBBox(1);
                        E(t.pattern, {
                            patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                        })
                    },
                    I = function(t, e, i) {
                        if ("path" == t.type) {
                            for (var r, n, s, o, a, h = M(e).toLowerCase().split("-"), l = t.paper, u = i ? "end" : "start", c = t.node, p = t.attrs, f = p["stroke-width"], d = h.length, g = "classic", x = 3, v = 3, y = 5; d--;) switch (h[d]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    g = h[d];
                                    break;
                                case "wide":
                                    v = 5;
                                    break;
                                case "narrow":
                                    v = 2;
                                    break;
                                case "long":
                                    x = 5;
                                    break;
                                case "short":
                                    x = 2
                            }
                            if (a = "open" == g ? (x += 2, v += 2, y += 2, s = 1, o = i ? 4 : 1, {
                                    fill: "none",
                                    stroke: p.stroke
                                }) : (o = s = x / 2, {
                                    fill: p.stroke,
                                    stroke: "none"
                                }), t._.arrows ? i ? (t._.arrows.endPath && A[t._.arrows.endPath]--, t._.arrows.endMarker && A[t._.arrows.endMarker]--) : (t._.arrows.startPath && A[t._.arrows.startPath]--, t._.arrows.startMarker && A[t._.arrows.startMarker]--) : t._.arrows = {}, "none" != g) {
                                var m = "raphael-marker-" + g,
                                    b = "raphael-marker-" + u + g + x + v + "-obj" + t.id;
                                S._g.doc.getElementById(m) ? A[m]++ : (l.defs.appendChild(E(E("path"), {
                                    "stroke-linecap": "round",
                                    d: T[g],
                                    id: m
                                })), A[m] = 1);
                                var w, _ = S._g.doc.getElementById(b);
                                _ ? (A[b]++, w = _.getElementsByTagName("use")[0]) : (_ = E(E("marker"), {
                                    id: b,
                                    markerHeight: v,
                                    markerWidth: x,
                                    orient: "auto",
                                    refX: o,
                                    refY: v / 2
                                }), w = E(E("use"), {
                                    "xlink:href": "#" + m,
                                    transform: (i ? "rotate(180 " + x / 2 + " " + v / 2 + ") " : "") + "scale(" + x / y + "," + v / y + ")",
                                    "stroke-width": (1 / ((x / y + v / y) / 2)).toFixed(4)
                                }), _.appendChild(w), l.defs.appendChild(_), A[b] = 1), E(w, a);
                                var k = s * ("diamond" != g && "oval" != g);
                                n = i ? (r = t._.arrows.startdx * f || 0, S.getTotalLength(p.path) - k * f) : (r = k * f, S.getTotalLength(p.path) - (t._.arrows.enddx * f || 0)), (a = {})["marker-" + u] = "url(#" + b + ")", (n || r) && (a.d = S.getSubpath(p.path, r, n)), E(c, a), t._.arrows[u + "Path"] = m, t._.arrows[u + "Marker"] = b, t._.arrows[u + "dx"] = k, t._.arrows[u + "Type"] = g, t._.arrows[u + "String"] = e
                            } else n = i ? (r = t._.arrows.startdx * f || 0, S.getTotalLength(p.path) - r) : (r = 0, S.getTotalLength(p.path) - (t._.arrows.enddx * f || 0)), t._.arrows[u + "Path"] && E(c, {
                                d: S.getSubpath(p.path, r, n)
                            }), delete t._.arrows[u + "Path"], delete t._.arrows[u + "Marker"], delete t._.arrows[u + "dx"], delete t._.arrows[u + "Type"], delete t._.arrows[u + "String"];
                            for (a in A)
                                if (A[B](a) && !A[a]) {
                                    var C = S._g.doc.getElementById(a);
                                    C && C.parentNode.removeChild(C)
                                }
                        }
                    },
                    a = {
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                    D = function(t, e, i) {
                        if (e = a[M(e).toLowerCase()]) {
                            for (var r = t.attrs["stroke-width"] || "1", n = {
                                    round: r,
                                    square: r,
                                    butt: 0
                                }[t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * r + (o % 2 ? 1 : -1) * n;
                            E(t.node, {
                                "stroke-dasharray": s.join(",")
                            })
                        } else E(t.node, {
                            "stroke-dasharray": "none"
                        })
                    },
                    f = function(t, e) {
                        var i = t.node,
                            r = t.attrs,
                            n = i.style.visibility;
                        for (var s in i.style.visibility = "hidden", e)
                            if (e[B](s)) {
                                if (!S._availableAttrs[B](s)) continue;
                                var o = e[s];
                                switch (r[s] = o, s) {
                                    case "blur":
                                        t.blur(o);
                                        break;
                                    case "title":
                                        var a = i.getElementsByTagName("title");
                                        if (a.length && (a = a[0])) a.firstChild.nodeValue = o;
                                        else {
                                            a = E("title");
                                            var h = S._g.doc.createTextNode(o);
                                            a.appendChild(h), i.appendChild(a)
                                        }
                                        break;
                                    case "href":
                                    case "target":
                                        var l = i.parentNode;
                                        if ("a" != l.tagName.toLowerCase()) {
                                            var u = E("a");
                                            l.insertBefore(u, i), u.appendChild(i), l = u
                                        }
                                        "target" == s ? l.setAttributeNS(F, "show", "blank" == o ? "new" : o) : l.setAttributeNS(F, s, o);
                                        break;
                                    case "cursor":
                                        i.style.cursor = o;
                                        break;
                                    case "transform":
                                        t.transform(o);
                                        break;
                                    case "arrow-start":
                                        I(t, o);
                                        break;
                                    case "arrow-end":
                                        I(t, o, 1);
                                        break;
                                    case "clip-rect":
                                        var c = M(o).split(L);
                                        if (4 == c.length) {
                                            t.clip && t.clip.parentNode.parentNode.removeChild(t.clip.parentNode);
                                            var p = E("clipPath"),
                                                f = E("rect");
                                            p.id = S.createUUID(), E(f, {
                                                x: c[0],
                                                y: c[1],
                                                width: c[2],
                                                height: c[3]
                                            }), p.appendChild(f), t.paper.defs.appendChild(p), E(i, {
                                                "clip-path": "url(#" + p.id + ")"
                                            }), t.clip = f
                                        }
                                        if (!o) {
                                            var d = i.getAttribute("clip-path");
                                            if (d) {
                                                var g = S._g.doc.getElementById(d.replace(/(^url\(#|\)$)/g, ""));
                                                g && g.parentNode.removeChild(g), E(i, {
                                                    "clip-path": ""
                                                }), delete t.clip
                                            }
                                        }
                                        break;
                                    case "path":
                                        "path" == t.type && (E(i, {
                                            d: o ? r.path = S._pathToAbsolute(o) : "M0,0"
                                        }), t._.dirty = 1, t._.arrows && ("startString" in t._.arrows && I(t, t._.arrows.startString), "endString" in t._.arrows && I(t, t._.arrows.endString, 1)));
                                        break;
                                    case "width":
                                        if (i.setAttribute(s, o), t._.dirty = 1, !r.fx) break;
                                        s = "x", o = r.x;
                                    case "x":
                                        r.fx && (o = -r.x - (r.width || 0));
                                    case "rx":
                                        if ("rx" == s && "rect" == t.type) break;
                                    case "cx":
                                        i.setAttribute(s, o), t.pattern && z(t), t._.dirty = 1;
                                        break;
                                    case "height":
                                        if (i.setAttribute(s, o), t._.dirty = 1, !r.fy) break;
                                        s = "y", o = r.y;
                                    case "y":
                                        r.fy && (o = -r.y - (r.height || 0));
                                    case "ry":
                                        if ("ry" == s && "rect" == t.type) break;
                                    case "cy":
                                        i.setAttribute(s, o), t.pattern && z(t), t._.dirty = 1;
                                        break;
                                    case "r":
                                        "rect" == t.type ? E(i, {
                                            rx: o,
                                            ry: o
                                        }) : i.setAttribute(s, o), t._.dirty = 1;
                                        break;
                                    case "src":
                                        "image" == t.type && i.setAttributeNS(F, "href", o);
                                        break;
                                    case "stroke-width":
                                        1 == t._.sx && 1 == t._.sy || (o /= k(C(t._.sx), C(t._.sy)) || 1), i.setAttribute(s, o), r["stroke-dasharray"] && D(t, r["stroke-dasharray"], e), t._.arrows && ("startString" in t._.arrows && I(t, t._.arrows.startString), "endString" in t._.arrows && I(t, t._.arrows.endString, 1));
                                        break;
                                    case "stroke-dasharray":
                                        D(t, o, e);
                                        break;
                                    case "fill":
                                        var x = M(o).match(S._ISURL);
                                        if (x) {
                                            p = E("pattern");
                                            var v = E("image");
                                            p.id = S.createUUID(), E(p, {
                                                    x: 0,
                                                    y: 0,
                                                    patternUnits: "userSpaceOnUse",
                                                    height: 1,
                                                    width: 1
                                                }), E(v, {
                                                    x: 0,
                                                    y: 0,
                                                    "xlink:href": x[1]
                                                }), p.appendChild(v),
                                                function(i) {
                                                    S._preload(x[1], function() {
                                                        var t = this.offsetWidth,
                                                            e = this.offsetHeight;
                                                        E(i, {
                                                            width: t,
                                                            height: e
                                                        }), E(v, {
                                                            width: t,
                                                            height: e
                                                        })
                                                    })
                                                }(p), t.paper.defs.appendChild(p), E(i, {
                                                    fill: "url(#" + p.id + ")"
                                                }), t.pattern = p, t.pattern && z(t);
                                            break
                                        }
                                        var y = S.getRGB(o);
                                        if (y.error) {
                                            if (("circle" == t.type || "ellipse" == t.type || "r" != M(o).charAt()) && P(t, o)) {
                                                if ("opacity" in r || "fill-opacity" in r) {
                                                    var m = S._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, ""));
                                                    if (m) {
                                                        var b = m.getElementsByTagName("stop");
                                                        E(b[b.length - 1], {
                                                            "stop-opacity": ("opacity" in r ? r.opacity : 1) * ("fill-opacity" in r ? r["fill-opacity"] : 1)
                                                        })
                                                    }
                                                }
                                                r.gradient = o, r.fill = "none";
                                                break
                                            }
                                        } else delete e.gradient, delete r.gradient, !S.is(r.opacity, "undefined") && S.is(e.opacity, "undefined") && E(i, {
                                            opacity: r.opacity
                                        }), !S.is(r["fill-opacity"], "undefined") && S.is(e["fill-opacity"], "undefined") && E(i, {
                                            "fill-opacity": r["fill-opacity"]
                                        });
                                        y[B]("opacity") && E(i, {
                                            "fill-opacity": 1 < y.opacity ? y.opacity / 100 : y.opacity
                                        });
                                    case "stroke":
                                        y = S.getRGB(o), i.setAttribute(s, y.hex), "stroke" == s && y[B]("opacity") && E(i, {
                                            "stroke-opacity": 1 < y.opacity ? y.opacity / 100 : y.opacity
                                        }), "stroke" == s && t._.arrows && ("startString" in t._.arrows && I(t, t._.arrows.startString), "endString" in t._.arrows && I(t, t._.arrows.endString, 1));
                                        break;
                                    case "gradient":
                                        ("circle" == t.type || "ellipse" == t.type || "r" != M(o).charAt()) && P(t, o);
                                        break;
                                    case "opacity":
                                        r.gradient && !r[B]("stroke-opacity") && E(i, {
                                            "stroke-opacity": 1 < o ? o / 100 : o
                                        });
                                    case "fill-opacity":
                                        if (r.gradient) {
                                            (m = S._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) && (b = m.getElementsByTagName("stop"), E(b[b.length - 1], {
                                                "stop-opacity": o
                                            }));
                                            break
                                        }
                                    default:
                                        "font-size" == s && (o = _(o, 10) + "px");
                                        var w = s.replace(/(\-.)/g, function(t) {
                                            return t.substring(1).toUpperCase()
                                        });
                                        i.style[w] = o, t._.dirty = 1, i.setAttribute(s, o)
                                }
                            }
                        R(t, e), i.style.visibility = n
                    },
                    R = function(t, e) {
                        if ("text" == t.type && (e[B]("text") || e[B]("font") || e[B]("font-size") || e[B]("x") || e[B]("y"))) {
                            var i = t.attrs,
                                r = t.node,
                                n = r.firstChild ? _(S._g.doc.defaultView.getComputedStyle(r.firstChild, "").getPropertyValue("font-size"), 10) : 10;
                            if (e[B]("text")) {
                                for (i.text = e.text; r.firstChild;) r.removeChild(r.firstChild);
                                for (var s, o = M(e.text).split("\n"), a = [], h = 0, l = o.length; h < l; h++) s = E("tspan"), h && E(s, {
                                    dy: 1.2 * n,
                                    x: i.x
                                }), s.appendChild(S._g.doc.createTextNode(o[h])), r.appendChild(s), a[h] = s
                            } else
                                for (h = 0, l = (a = r.getElementsByTagName("tspan")).length; h < l; h++) h ? E(a[h], {
                                    dy: 1.2 * n,
                                    x: i.x
                                }) : E(a[0], {
                                    dy: 0
                                });
                            E(r, {
                                x: i.x,
                                y: i.y
                            }), t._.dirty = 1;
                            var u = t._getBBox(),
                                c = i.y - (u.y + u.height / 2);
                            c && S.is(c, "finite") && E(a[0], {
                                dy: c
                            })
                        }
                    },
                    r = function(t) {
                        return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t
                    },
                    h = function(t, e) {
                        this[0] = this.node = t, t.raphael = !0, this.id = S._oid++, t.raphaelid = this.id, this.matrix = S.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null
                    },
                    t = S.el;
                (h.prototype = t).constructor = h, S._engine.path = function(t, e) {
                    var i = E("path");
                    e.canvas && e.canvas.appendChild(i);
                    var r = new h(i, e);
                    return r.type = "path", f(r, {
                        fill: "none",
                        stroke: "#000",
                        path: t
                    }), r
                }, t.rotate = function(t, e, i) {
                    if (this.removed) return this;
                    if ((t = M(t).split(L)).length - 1 && (e = x(t[1]), i = x(t[2])), t = x(t[0]), null == i && (e = i), null == e || null == i) {
                        var r = this.getBBox(1);
                        e = r.x + r.width / 2, i = r.y + r.height / 2
                    }
                    return this.transform(this._.transform.concat([
                        ["r", t, e, i]
                    ])), this
                }, t.scale = function(t, e, i, r) {
                    if (this.removed) return this;
                    if ((t = M(t).split(L)).length - 1 && (e = x(t[1]), i = x(t[2]), r = x(t[3])), t = x(t[0]), null == e && (e = t), null == r && (i = r), null == i || null == r) var n = this.getBBox(1);
                    return i = null == i ? n.x + n.width / 2 : i, r = null == r ? n.y + n.height / 2 : r, this.transform(this._.transform.concat([
                        ["s", t, e, i, r]
                    ])), this
                }, t.translate = function(t, e) {
                    return this.removed || ((t = M(t).split(L)).length - 1 && (e = x(t[1])), t = x(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
                        ["t", t, e]
                    ]))), this
                }, t.transform = function(t) {
                    var e = this._;
                    if (null == t) return e.transform;
                    if (S._extractTransform(this, t), this.clip && E(this.clip, {
                            transform: this.matrix.invert()
                        }), this.pattern && z(this), this.node && E(this.node, {
                            transform: this.matrix
                        }), 1 != e.sx || 1 != e.sy) {
                        var i = this.attrs[B]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": i
                        })
                    }
                    return e.transform = this.matrix.toTransformString(), this
                }, t.hide = function() {
                    return this.removed || (this.node.style.display = "none"), this
                }, t.show = function() {
                    return this.removed || (this.node.style.display = ""), this
                }, t.remove = function() {
                    var t = r(this.node);
                    if (!this.removed && t.parentNode) {
                        var e = this.paper;
                        for (var i in e.__set__ && e.__set__.exclude(this), p.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), S._tear(this, e), t.parentNode.removeChild(t), this.removeData(), this) this[i] = "function" == typeof this[i] ? S._removedFactory(i) : null;
                        this.removed = !0
                    }
                }, t._getBBox = function() {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var t = !0
                    }
                    var e, i = !1;
                    this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (i = !0, e.display = "");
                    var r = {};
                    try {
                        r = this.node.getBBox()
                    } catch (t) {
                        r = {
                            x: this.node.clientLeft,
                            y: this.node.clientTop,
                            width: this.node.clientWidth,
                            height: this.node.clientHeight
                        }
                    } finally {
                        r = r || {}, i && (e.display = "none")
                    }
                    return t && this.hide(), r
                }, t.attr = function(t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                        var i = {};
                        for (var r in this.attrs) this.attrs[B](r) && (i[r] = this.attrs[r]);
                        return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                    }
                    if (null == e && S.is(t, "string")) {
                        if ("fill" == t && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == t) return this._.transform;
                        for (var n = t.split(L), s = {}, o = 0, a = n.length; o < a; o++)(t = n[o]) in this.attrs ? s[t] = this.attrs[t] : S.is(this.paper.customAttributes[t], "function") ? s[t] = this.paper.customAttributes[t].def : s[t] = S._availableAttrs[t];
                        return a - 1 ? s : s[n[0]]
                    }
                    if (null == e && S.is(t, "array")) {
                        for (s = {}, o = 0, a = t.length; o < a; o++) s[t[o]] = this.attr(t[o]);
                        return s
                    }
                    if (null != e) {
                        var h = {};
                        h[t] = e
                    } else null != t && S.is(t, "object") && (h = t);
                    for (var l in h) p("raphael.attr." + l + "." + this.id, this, h[l]);
                    for (l in this.paper.customAttributes)
                        if (this.paper.customAttributes[B](l) && h[B](l) && S.is(this.paper.customAttributes[l], "function")) {
                            var u = this.paper.customAttributes[l].apply(this, [].concat(h[l]));
                            for (var c in this.attrs[l] = h[l], u) u[B](c) && (h[c] = u[c])
                        }
                    return f(this, h), this
                }, t.toFront = function() {
                    if (this.removed) return this;
                    var t = r(this.node);
                    t.parentNode.appendChild(t);
                    var e = this.paper;
                    return e.top != this && S._tofront(this, e), this
                }, t.toBack = function() {
                    if (this.removed) return this;
                    var t = r(this.node),
                        e = t.parentNode;
                    e.insertBefore(t, e.firstChild), S._toback(this, this.paper);
                    this.paper;
                    return this
                }, t.insertAfter = function(t) {
                    if (this.removed || !t) return this;
                    var e = r(this.node),
                        i = r(t.node || t[t.length - 1].node);
                    return i.nextSibling ? i.parentNode.insertBefore(e, i.nextSibling) : i.parentNode.appendChild(e), S._insertafter(this, t, this.paper), this
                }, t.insertBefore = function(t) {
                    if (this.removed || !t) return this;
                    var e = r(this.node),
                        i = r(t.node || t[0].node);
                    return i.parentNode.insertBefore(e, i), S._insertbefore(this, t, this.paper), this
                }, t.blur = function(t) {
                    var e = this;
                    if (0 != +t) {
                        var i = E("filter"),
                            r = E("feGaussianBlur");
                        e.attrs.blur = t, i.id = S.createUUID(), E(r, {
                            stdDeviation: +t || 1.5
                        }), i.appendChild(r), e.paper.defs.appendChild(i), e._blur = i, E(e.node, {
                            filter: "url(#" + i.id + ")"
                        })
                    } else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter");
                    return e
                }, S._engine.circle = function(t, e, i, r) {
                    var n = E("circle");
                    t.canvas && t.canvas.appendChild(n);
                    var s = new h(n, t);
                    return s.attrs = {
                        cx: e,
                        cy: i,
                        r: r,
                        fill: "none",
                        stroke: "#000"
                    }, s.type = "circle", E(n, s.attrs), s
                }, S._engine.rect = function(t, e, i, r, n, s) {
                    var o = E("rect");
                    t.canvas && t.canvas.appendChild(o);
                    var a = new h(o, t);
                    return a.attrs = {
                        x: e,
                        y: i,
                        width: r,
                        height: n,
                        rx: s || 0,
                        ry: s || 0,
                        fill: "none",
                        stroke: "#000"
                    }, a.type = "rect", E(o, a.attrs), a
                }, S._engine.ellipse = function(t, e, i, r, n) {
                    var s = E("ellipse");
                    t.canvas && t.canvas.appendChild(s);
                    var o = new h(s, t);
                    return o.attrs = {
                        cx: e,
                        cy: i,
                        rx: r,
                        ry: n,
                        fill: "none",
                        stroke: "#000"
                    }, o.type = "ellipse", E(s, o.attrs), o
                }, S._engine.image = function(t, e, i, r, n, s) {
                    var o = E("image");
                    E(o, {
                        x: i,
                        y: r,
                        width: n,
                        height: s,
                        preserveAspectRatio: "none"
                    }), o.setAttributeNS(F, "href", e), t.canvas && t.canvas.appendChild(o);
                    var a = new h(o, t);
                    return a.attrs = {
                        x: i,
                        y: r,
                        width: n,
                        height: s,
                        src: e
                    }, a.type = "image", a
                }, S._engine.text = function(t, e, i, r) {
                    var n = E("text");
                    t.canvas && t.canvas.appendChild(n);
                    var s = new h(n, t);
                    return s.attrs = {
                        x: e,
                        y: i,
                        "text-anchor": "middle",
                        text: r,
                        "font-family": S._availableAttrs["font-family"],
                        "font-size": S._availableAttrs["font-size"],
                        stroke: "none",
                        fill: "#000"
                    }, s.type = "text", f(s, s.attrs), s
                }, S._engine.setSize = function(t, e) {
                    return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, S._engine.create = function() {
                    var t = S._getContainer.apply(0, arguments),
                        e = t && t.container,
                        i = t.x,
                        r = t.y,
                        n = t.width,
                        s = t.height;
                    if (!e) throw new Error("SVG container not found.");
                    var o, a = E("svg"),
                        h = "overflow:hidden;";
                    return i = i || 0, r = r || 0, E(a, {
                        height: s = s || 342,
                        version: 1.1,
                        width: n = n || 512,
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }), 1 == e ? (a.style.cssText = h + "position:absolute;left:" + i + "px;top:" + r + "px", S._g.doc.body.appendChild(a), o = 1) : (a.style.cssText = h + "position:relative", e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a)), (e = new S._Paper).width = n, e.height = s, e.canvas = a, e.clear(), e._left = e._top = 0, o && (e.renderfix = function() {}), e.renderfix(), e
                }, S._engine.setViewBox = function(t, e, i, r, n) {
                    p("raphael.setViewBox", this, this._viewBox, [t, e, i, r, n]);
                    var s, o, a = this.getSize(),
                        h = k(i / a.width, r / a.height),
                        l = this.top,
                        u = n ? "xMidYMid meet" : "xMinYMin";
                    for (s = null == t ? (this._vbSize && (h = 1), delete this._vbSize, "0 0 " + this.width + " " + this.height) : (this._vbSize = h, t + " " + e + " " + i + " " + r), E(this.canvas, {
                            viewBox: s,
                            preserveAspectRatio: u
                        }); h && l;) o = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr({
                        "stroke-width": o
                    }), l._.dirty = 1, l._.dirtyT = 1, l = l.prev;
                    return this._viewBox = [t, e, i, r, !!n], this
                }, S.prototype.renderfix = function() {
                    var e, i = this.canvas,
                        t = i.style;
                    try {
                        e = i.getScreenCTM() || i.createSVGMatrix()
                    } catch (t) {
                        e = i.createSVGMatrix()
                    }
                    var r = -e.e % 1,
                        n = -e.f % 1;
                    (r || n) && (r && (this._left = (this._left + r) % 1, t.left = this._left + "px"), n && (this._top = (this._top + n) % 1, t.top = this._top + "px"))
                }, S.prototype.clear = function() {
                    S.eve("raphael.clear", this);
                    for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
                    this.bottom = this.top = null, (this.desc = E("desc")).appendChild(S._g.doc.createTextNode("Created with Raphaël " + S.version)), t.appendChild(this.desc), t.appendChild(this.defs = E("defs"))
                }, S.prototype.remove = function() {
                    for (var t in p("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? S._removedFactory(t) : null
                };
                var e = S.st;
                for (var i in t) t[B](i) && !e[B](i) && (e[i] = function(i) {
                    return function() {
                        var e = arguments;
                        return this.forEach(function(t) {
                            t[i].apply(t, e)
                        })
                    }
                }(i))
            }
        }.apply(e, r)) || (t.exports = n)
    }, function(t, e, i) {
        var r, n;
        r = [i(1)], void 0 === (n = function(E) {
            if (!E || E.vml) {
                var P = "hasOwnProperty",
                    z = String,
                    I = parseFloat,
                    c = Math,
                    D = c.round,
                    R = c.max,
                    H = c.min,
                    v = c.abs,
                    N = "fill",
                    G = /[, ]+/,
                    p = E.eve,
                    Y = " ",
                    W = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    },
                    O = /([clmz]),?([^clmz]*)/gi,
                    r = / progid:\S+Blur\([^\)]+\)/g,
                    j = /-?[^,\s-]+/g,
                    u = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                    X = 21600,
                    q = {
                        path: 1,
                        rect: 1,
                        image: 1
                    },
                    V = {
                        circle: 1,
                        ellipse: 1
                    },
                    y = function(t, e, i) {
                        var r = E.matrix();
                        return r.rotate(-t, .5, .5), {
                            dx: r.x(e, i),
                            dy: r.y(e, i)
                        }
                    },
                    U = function(t, e, i, r, n, s) {
                        var o = t._,
                            a = t.matrix,
                            h = o.fillpos,
                            l = t.node,
                            u = l.style,
                            c = 1,
                            p = "",
                            f = X / e,
                            d = X / i;
                        if (u.visibility = "hidden", e && i) {
                            if (l.coordsize = v(f) + Y + v(d), u.rotation = s * (e * i < 0 ? -1 : 1), s) {
                                var g = y(s, r, n);
                                r = g.dx, n = g.dy
                            }
                            if (e < 0 && (p += "x"), i < 0 && (p += " y") && (c = -1), u.flip = p, l.coordorigin = r * -f + Y + n * -d, h || o.fillsize) {
                                var x = l.getElementsByTagName(N);
                                x = x && x[0], l.removeChild(x), h && (g = y(s, a.x(h[0], h[1]), a.y(h[0], h[1])), x.position = g.dx * c + Y + g.dy * c), o.fillsize && (x.size = o.fillsize[0] * v(e) + Y + o.fillsize[1] * v(i)), l.appendChild(x)
                            }
                            u.visibility = "visible"
                        }
                    };
                E.toString = function() {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                };
                var $, Z = function(t, e, i) {
                        for (var r = z(e).toLowerCase().split("-"), n = i ? "end" : "start", s = r.length, o = "classic", a = "medium", h = "medium"; s--;) switch (r[s]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                o = r[s];
                                break;
                            case "wide":
                            case "narrow":
                                h = r[s];
                                break;
                            case "long":
                            case "short":
                                a = r[s]
                        }
                        var l = t.node.getElementsByTagName("stroke")[0];
                        l[n + "arrow"] = o, l[n + "arrowlength"] = a, l[n + "arrowwidth"] = h
                    },
                    f = function(t, e) {
                        t.attrs = t.attrs || {};
                        var i = t.node,
                            r = t.attrs,
                            n = i.style,
                            s = q[t.type] && (e.x != r.x || e.y != r.y || e.width != r.width || e.height != r.height || e.cx != r.cx || e.cy != r.cy || e.rx != r.rx || e.ry != r.ry || e.r != r.r),
                            o = V[t.type] && (r.cx != e.cx || r.cy != e.cy || r.r != e.r || r.rx != e.rx || r.ry != e.ry),
                            a = t;
                        for (var h in e) e[P](h) && (r[h] = e[h]);
                        if (s && (r.path = E._getPath[t.type](t), t._.dirty = 1), e.href && (i.href = e.href), e.title && (i.title = e.title), e.target && (i.target = e.target), e.cursor && (n.cursor = e.cursor), "blur" in e && t.blur(e.blur), (e.path && "path" == t.type || s) && (i.path = function(t) {
                                var e = /[ahqstv]/gi,
                                    i = E._pathToAbsolute;
                                if (z(t).match(e) && (i = E._path2curve), e = /[clmz]/g, i == E._pathToAbsolute && !z(t).match(e)) {
                                    var r = z(t).replace(O, function(t, e, i) {
                                        var r = [],
                                            n = "m" == e.toLowerCase(),
                                            s = W[e];
                                        return i.replace(j, function(t) {
                                            n && 2 == r.length && (s += r + W["m" == e ? "l" : "L"], r = []), r.push(D(t * X))
                                        }), s + r
                                    });
                                    return r
                                }
                                var n, s, o = i(t);
                                r = [];
                                for (var a = 0, h = o.length; a < h; a++) {
                                    n = o[a], "z" == (s = o[a][0].toLowerCase()) && (s = "x");
                                    for (var l = 1, u = n.length; l < u; l++) s += D(n[l] * X) + (l != u - 1 ? "," : "");
                                    r.push(s)
                                }
                                return r.join(Y)
                            }(~z(r.path).toLowerCase().indexOf("r") ? E._pathToAbsolute(r.path) : r.path), t._.dirty = 1, "image" == t.type && (t._.fillpos = [r.x, r.y], t._.fillsize = [r.width, r.height], U(t, 1, 1, 0, 0, 0))), "transform" in e && t.transform(e.transform), o) {
                            var l = +r.cx,
                                u = +r.cy,
                                c = +r.rx || +r.r || 0,
                                p = +r.ry || +r.r || 0;
                            i.path = E.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", D((l - c) * X), D((u - p) * X), D((l + c) * X), D((u + p) * X), D(l * X)), t._.dirty = 1
                        }
                        if ("clip-rect" in e) {
                            var f = z(e["clip-rect"]).split(G);
                            if (4 == f.length) {
                                f[2] = +f[2] + +f[0], f[3] = +f[3] + +f[1];
                                var d = i.clipRect || E._g.doc.createElement("div"),
                                    g = d.style;
                                g.clip = E.format("rect({1}px {2}px {3}px {0}px)", f), i.clipRect || (g.position = "absolute", g.top = 0, g.left = 0, g.width = t.paper.width + "px", g.height = t.paper.height + "px", i.parentNode.insertBefore(d, i), d.appendChild(i), i.clipRect = d)
                            }
                            e["clip-rect"] || i.clipRect && (i.clipRect.style.clip = "auto")
                        }
                        if (t.textpath) {
                            var x = t.textpath.style;
                            e.font && (x.font = e.font), e["font-family"] && (x.fontFamily = '"' + e["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, "") + '"'), e["font-size"] && (x.fontSize = e["font-size"]), e["font-weight"] && (x.fontWeight = e["font-weight"]), e["font-style"] && (x.fontStyle = e["font-style"])
                        }
                        if ("arrow-start" in e && Z(a, e["arrow-start"]), "arrow-end" in e && Z(a, e["arrow-end"], 1), null != e.opacity || null != e.fill || null != e.src || null != e.stroke || null != e["stroke-width"] || null != e["stroke-opacity"] || null != e["fill-opacity"] || null != e["stroke-dasharray"] || null != e["stroke-miterlimit"] || null != e["stroke-linejoin"] || null != e["stroke-linecap"]) {
                            var v = i.getElementsByTagName(N);
                            if (!(v = v && v[0]) && (v = $(N)), "image" == t.type && e.src && (v.src = e.src), e.fill && (v.on = !0), null != v.on && "none" != e.fill && null !== e.fill || (v.on = !1), v.on && e.fill) {
                                var y = z(e.fill).match(E._ISURL);
                                if (y) {
                                    v.parentNode == i && i.removeChild(v), v.rotate = !0, v.src = y[1], v.type = "tile";
                                    var m = t.getBBox(1);
                                    v.position = m.x + Y + m.y, t._.fillpos = [m.x, m.y], E._preload(y[1], function() {
                                        t._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else v.color = E.getRGB(e.fill).hex, v.src = "", v.type = "solid", E.getRGB(e.fill).error && (a.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != z(e.fill).charAt()) && Q(a, e.fill, v) && (r.fill = "none", r.gradient = e.fill, v.rotate = !1)
                            }
                            if ("fill-opacity" in e || "opacity" in e) {
                                var b = ((+r["fill-opacity"] + 1 || 2) - 1) * ((+r.opacity + 1 || 2) - 1) * ((+E.getRGB(e.fill).o + 1 || 2) - 1);
                                b = H(R(b, 0), 1), v.opacity = b, v.src && (v.color = "none")
                            }
                            i.appendChild(v);
                            var w = i.getElementsByTagName("stroke") && i.getElementsByTagName("stroke")[0],
                                _ = !1;
                            !w && (_ = w = $("stroke")), (e.stroke && "none" != e.stroke || e["stroke-width"] || null != e["stroke-opacity"] || e["stroke-dasharray"] || e["stroke-miterlimit"] || e["stroke-linejoin"] || e["stroke-linecap"]) && (w.on = !0), ("none" == e.stroke || null === e.stroke || null == w.on || 0 == e.stroke || 0 == e["stroke-width"]) && (w.on = !1);
                            var k = E.getRGB(e.stroke);
                            w.on && e.stroke && (w.color = k.hex), b = ((+r["stroke-opacity"] + 1 || 2) - 1) * ((+r.opacity + 1 || 2) - 1) * ((+k.o + 1 || 2) - 1);
                            var C = .75 * (I(e["stroke-width"]) || 1);
                            if (b = H(R(b, 0), 1), null == e["stroke-width"] && (C = r["stroke-width"]), e["stroke-width"] && (w.weight = C), C && C < 1 && (b *= C) && (w.weight = 1), w.opacity = b, e["stroke-linejoin"] && (w.joinstyle = e["stroke-linejoin"] || "miter"), w.miterlimit = e["stroke-miterlimit"] || 8, e["stroke-linecap"] && (w.endcap = "butt" == e["stroke-linecap"] ? "flat" : "square" == e["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in e) {
                                var S = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                w.dashstyle = S[P](e["stroke-dasharray"]) ? S[e["stroke-dasharray"]] : ""
                            }
                            _ && i.appendChild(w)
                        }
                        if ("text" == a.type) {
                            a.paper.canvas.style.display = "";
                            var B = a.paper.span,
                                M = r.font && r.font.match(/\d+(?:\.\d*)?(?=px)/);
                            n = B.style, r.font && (n.font = r.font), r["font-family"] && (n.fontFamily = r["font-family"]), r["font-weight"] && (n.fontWeight = r["font-weight"]), r["font-style"] && (n.fontStyle = r["font-style"]), M = I(r["font-size"] || M && M[0]) || 10, n.fontSize = 100 * M + "px", a.textpath.string && (B.innerHTML = z(a.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var L = B.getBoundingClientRect();
                            a.W = r.w = (L.right - L.left) / 100, a.H = r.h = (L.bottom - L.top) / 100, a.X = r.x, a.Y = r.y + a.H / 2, ("x" in e || "y" in e) && (a.path.v = E.format("m{0},{1}l{2},{1}", D(r.x * X), D(r.y * X), D(r.x * X) + 1));
                            for (var F = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], T = 0, A = F.length; T < A; T++)
                                if (F[T] in e) {
                                    a._.dirty = 1;
                                    break
                                }
                            switch (r["text-anchor"]) {
                                case "start":
                                    a.textpath.style["v-text-align"] = "left", a.bbx = a.W / 2;
                                    break;
                                case "end":
                                    a.textpath.style["v-text-align"] = "right", a.bbx = -a.W / 2;
                                    break;
                                default:
                                    a.textpath.style["v-text-align"] = "center", a.bbx = 0
                            }
                            a.textpath.style["v-text-kern"] = !0
                        }
                    },
                    Q = function(t, e, i) {
                        t.attrs = t.attrs || {};
                        t.attrs;
                        var r = Math.pow,
                            n = "linear",
                            s = ".5 .5";
                        if (t.attrs.gradient = e, e = (e = z(e).replace(E._radial_gradient, function(t, e, i) {
                                return n = "radial", e && i && (e = I(e), i = I(i), .25 < r(e - .5, 2) + r(i - .5, 2) && (i = c.sqrt(.25 - r(e - .5, 2)) * (2 * (.5 < i) - 1) + .5), s = e + Y + i), ""
                            })).split(/\s*\-\s*/), "linear" == n) {
                            var o = e.shift();
                            if (o = -I(o), isNaN(o)) return null
                        }
                        var a = E._parseDots(e);
                        if (!a) return null;
                        if (t = t.shape || t.node, a.length) {
                            t.removeChild(i), i.on = !0, i.method = "none", i.color = a[0].color, i.color2 = a[a.length - 1].color;
                            for (var h = [], l = 0, u = a.length; l < u; l++) a[l].offset && h.push(a[l].offset + Y + a[l].color);
                            i.colors = h.length ? h.join() : "0% " + i.color, "radial" == n ? (i.type = "gradientTitle", i.focus = "100%", i.focussize = "0 0", i.focusposition = s, i.angle = 0) : (i.type = "gradient", i.angle = (270 - o) % 360), t.appendChild(i)
                        }
                        return 1
                    },
                    d = function(t, e) {
                        this[0] = this.node = t, t.raphael = !0, this.id = E._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = E.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null
                    },
                    t = E.el;
                (d.prototype = t).constructor = d, t.transform = function(t) {
                    if (null == t) return this._.transform;
                    var e, i = this.paper._viewBoxShift,
                        r = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : "";
                    i && (e = t = z(t).replace(/\.{3}|\u2026/g, this._.transform || "")), E._extractTransform(this, r + t);
                    var n, s = this.matrix.clone(),
                        o = this.skew,
                        a = this.node,
                        h = ~z(this.attrs.fill).indexOf("-"),
                        l = !z(this.attrs.fill).indexOf("url(");
                    if (s.translate(1, 1), l || h || "image" == this.type)
                        if (o.matrix = "1 0 0 1", o.offset = "0 0", n = s.split(), h && n.noRotation || !n.isSimple) {
                            a.style.filter = s.toFilter();
                            var u = this.getBBox(),
                                c = this.getBBox(1),
                                p = u.x - c.x,
                                f = u.y - c.y;
                            a.coordorigin = p * -X + Y + f * -X, U(this, 1, 1, p, f, 0)
                        } else a.style.filter = "", U(this, n.scalex, n.scaley, n.dx, n.dy, n.rotate);
                    else a.style.filter = "", o.matrix = z(s), o.offset = s.offset();
                    return null !== e && (this._.transform = e, E._extractTransform(this, e)), this
                }, t.rotate = function(t, e, i) {
                    if (this.removed) return this;
                    if (null != t) {
                        if ((t = z(t).split(G)).length - 1 && (e = I(t[1]), i = I(t[2])), t = I(t[0]), null == i && (e = i), null == e || null == i) {
                            var r = this.getBBox(1);
                            e = r.x + r.width / 2, i = r.y + r.height / 2
                        }
                        return this._.dirtyT = 1, this.transform(this._.transform.concat([
                            ["r", t, e, i]
                        ])), this
                    }
                }, t.translate = function(t, e) {
                    return this.removed || ((t = z(t).split(G)).length - 1 && (e = I(t[1])), t = I(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
                        ["t", t, e]
                    ]))), this
                }, t.scale = function(t, e, i, r) {
                    if (this.removed) return this;
                    if ((t = z(t).split(G)).length - 1 && (e = I(t[1]), i = I(t[2]), r = I(t[3]), isNaN(i) && (i = null), isNaN(r) && (r = null)), t = I(t[0]), null == e && (e = t), null == r && (i = r), null == i || null == r) var n = this.getBBox(1);
                    return i = null == i ? n.x + n.width / 2 : i, r = null == r ? n.y + n.height / 2 : r, this.transform(this._.transform.concat([
                        ["s", t, e, i, r]
                    ])), this._.dirtyT = 1, this
                }, t.hide = function() {
                    return !this.removed && (this.node.style.display = "none"), this
                }, t.show = function() {
                    return !this.removed && (this.node.style.display = ""), this
                }, t.auxGetBBox = E.el.getBBox, t.getBBox = function() {
                    var t = this.auxGetBBox();
                    if (this.paper && this.paper._viewBoxShift) {
                        var e = {},
                            i = 1 / this.paper._viewBoxShift.scale;
                        return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= i, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= i, e.width = t.width * i, e.height = t.height * i, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e
                    }
                    return t
                }, t._getBBox = function() {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, t.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        for (var t in this.paper.__set__ && this.paper.__set__.exclude(this), E.eve.unbind("raphael.*.*." + this.id), E._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[t] = "function" == typeof this[t] ? E._removedFactory(t) : null;
                        this.removed = !0
                    }
                }, t.attr = function(t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                        var i = {};
                        for (var r in this.attrs) this.attrs[P](r) && (i[r] = this.attrs[r]);
                        return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                    }
                    if (null == e && E.is(t, "string")) {
                        if (t == N && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var n = t.split(G), s = {}, o = 0, a = n.length; o < a; o++)(t = n[o]) in this.attrs ? s[t] = this.attrs[t] : E.is(this.paper.customAttributes[t], "function") ? s[t] = this.paper.customAttributes[t].def : s[t] = E._availableAttrs[t];
                        return a - 1 ? s : s[n[0]]
                    }
                    if (this.attrs && null == e && E.is(t, "array")) {
                        for (s = {}, o = 0, a = t.length; o < a; o++) s[t[o]] = this.attr(t[o]);
                        return s
                    }
                    var h;
                    for (var l in null != e && ((h = {})[t] = e), null == e && E.is(t, "object") && (h = t), h) p("raphael.attr." + l + "." + this.id, this, h[l]);
                    if (h) {
                        for (l in this.paper.customAttributes)
                            if (this.paper.customAttributes[P](l) && h[P](l) && E.is(this.paper.customAttributes[l], "function")) {
                                var u = this.paper.customAttributes[l].apply(this, [].concat(h[l]));
                                for (var c in this.attrs[l] = h[l], u) u[P](c) && (h[c] = u[c])
                            }
                        h.text && "text" == this.type && (this.textpath.string = h.text), f(this, h)
                    }
                    return this
                }, t.toFront = function() {
                    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && E._tofront(this, this.paper), this
                }, t.toBack = function() {
                    return this.removed || this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), E._toback(this, this.paper)), this
                }, t.insertAfter = function(t) {
                    return this.removed || (t.constructor == E.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), E._insertafter(this, t, this.paper)), this
                }, t.insertBefore = function(t) {
                    return this.removed || (t.constructor == E.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), E._insertbefore(this, t, this.paper)), this
                }, t.blur = function(t) {
                    var e = this.node.runtimeStyle,
                        i = e.filter;
                    return i = i.replace(r, ""), 0 != +t ? (this.attrs.blur = t, e.filter = i + Y + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = E.format("-{0}px 0 0 -{0}px", D(+t || 1.5))) : (e.filter = i, e.margin = 0, delete this.attrs.blur), this
                }, E._engine.path = function(t, e) {
                    var i = $("shape");
                    i.style.cssText = u, i.coordsize = X + Y + X, i.coordorigin = e.coordorigin;
                    var r = new d(i, e),
                        n = {
                            fill: "none",
                            stroke: "#000"
                        };
                    t && (n.path = t), r.type = "path", r.path = [], r.Path = "", f(r, n), e.canvas && e.canvas.appendChild(i);
                    var s = $("skew");
                    return s.on = !0, i.appendChild(s), r.skew = s, r.transform(""), r
                }, E._engine.rect = function(t, e, i, r, n, s) {
                    var o = E._rectPath(e, i, r, n, s),
                        a = t.path(o),
                        h = a.attrs;
                    return a.X = h.x = e, a.Y = h.y = i, a.W = h.width = r, a.H = h.height = n, h.r = s, h.path = o, a.type = "rect", a
                }, E._engine.ellipse = function(t, e, i, r, n) {
                    var s = t.path();
                    s.attrs;
                    return s.X = e - r, s.Y = i - n, s.W = 2 * r, s.H = 2 * n, s.type = "ellipse", f(s, {
                        cx: e,
                        cy: i,
                        rx: r,
                        ry: n
                    }), s
                }, E._engine.circle = function(t, e, i, r) {
                    var n = t.path();
                    n.attrs;
                    return n.X = e - r, n.Y = i - r, n.W = n.H = 2 * r, n.type = "circle", f(n, {
                        cx: e,
                        cy: i,
                        r: r
                    }), n
                }, E._engine.image = function(t, e, i, r, n, s) {
                    var o = E._rectPath(i, r, n, s),
                        a = t.path(o).attr({
                            stroke: "none"
                        }),
                        h = a.attrs,
                        l = a.node,
                        u = l.getElementsByTagName(N)[0];
                    return h.src = e, a.X = h.x = i, a.Y = h.y = r, a.W = h.width = n, a.H = h.height = s, h.path = o, a.type = "image", u.parentNode == l && l.removeChild(u), u.rotate = !0, u.src = e, u.type = "tile", a._.fillpos = [i, r], a._.fillsize = [n, s], l.appendChild(u), U(a, 1, 1, 0, 0, 0), a
                }, E._engine.text = function(t, e, i, r) {
                    var n = $("shape"),
                        s = $("path"),
                        o = $("textpath");
                    e = e || 0, i = i || 0, r = r || "", s.v = E.format("m{0},{1}l{2},{1}", D(e * X), D(i * X), D(e * X) + 1), s.textpathok = !0, o.string = z(r), o.on = !0, n.style.cssText = u, n.coordsize = X + Y + X, n.coordorigin = "0 0";
                    var a = new d(n, t),
                        h = {
                            fill: "#000",
                            stroke: "none",
                            font: E._availableAttrs.font,
                            text: r
                        };
                    a.shape = n, a.path = s, a.textpath = o, a.type = "text", a.attrs.text = z(r), a.attrs.x = e, a.attrs.y = i, a.attrs.w = 1, a.attrs.h = 1, f(a, h), n.appendChild(o), n.appendChild(s), t.canvas.appendChild(n);
                    var l = $("skew");
                    return l.on = !0, n.appendChild(l), a.skew = l, a.transform(""), a
                }, E._engine.setSize = function(t, e) {
                    var i = this.canvas.style;
                    return (this.width = t) == +t && (t += "px"), (this.height = e) == +e && (e += "px"), i.width = t, i.height = e, i.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && E._engine.setViewBox.apply(this, this._viewBox), this
                }, E._engine.setViewBox = function(t, e, i, r, n) {
                    E.eve("raphael.setViewBox", this, this._viewBox, [t, e, i, r, n]);
                    var s, o, a = this.getSize(),
                        h = a.width,
                        l = a.height;
                    return n && (i * (s = l / r) < h && (t -= (h - i * s) / 2 / s), r * (o = h / i) < l && (e -= (l - r * o) / 2 / o)), this._viewBox = [t, e, i, r, !!n], this._viewBoxShift = {
                        dx: -t,
                        dy: -e,
                        scale: a
                    }, this.forEach(function(t) {
                        t.transform("...")
                    }), this
                }, E._engine.initWin = function(t) {
                    var e = t.document;
                    e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), $ = function(t) {
                            return e.createElement("<rvml:" + t + ' class="rvml">')
                        }
                    } catch (t) {
                        $ = function(t) {
                            return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, E._engine.initWin(E._g.win), E._engine.create = function() {
                    var t = E._getContainer.apply(0, arguments),
                        e = t.container,
                        i = t.height,
                        r = t.width,
                        n = t.x,
                        s = t.y;
                    if (!e) throw new Error("VML container not found.");
                    var o = new E._Paper,
                        a = o.canvas = E._g.doc.createElement("div"),
                        h = a.style;
                    return n = n || 0, s = s || 0, r = r || 512, i = i || 342, (o.width = r) == +r && (r += "px"), (o.height = i) == +i && (i += "px"), o.coordsize = 216e5 + Y + 216e5, o.coordorigin = "0 0", o.span = E._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", a.appendChild(o.span), h.cssText = E.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, i), 1 == e ? (E._g.doc.body.appendChild(a), h.left = n + "px", h.top = s + "px", h.position = "absolute") : e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), o.renderfix = function() {}, o
                }, E.prototype.clear = function() {
                    E.eve("raphael.clear", this), this.canvas.innerHTML = "", this.span = E._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, E.prototype.remove = function() {
                    for (var t in E.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? E._removedFactory(t) : null;
                    return !0
                };
                var e = E.st;
                for (var i in t) t[P](i) && !e[P](i) && (e[i] = function(i) {
                    return function() {
                        var e = arguments;
                        return this.forEach(function(t) {
                            t[i].apply(t, e)
                        })
                    }
                }(i))
            }
        }.apply(e, r)) || (t.exports = n)
    }])
}),
function() {
    var x, _, t, e, a = [].slice,
        u = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        n = {}.hasOwnProperty,
        s = function(t, e) {
            for (var i in e) n.call(e, i) && (t[i] = e[i]);

            function r() {
                this.constructor = t
            }
            return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
        },
        h = [].indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    _ = window.Morris = {}, x = jQuery, _.EventEmitter = function() {
        function t() {}
        return t.prototype.on = function(t, e) {
            return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this
        }, t.prototype.fire = function() {
            var t, e, i, r, n, s, o;
            if (i = arguments[0], t = 2 <= arguments.length ? a.call(arguments, 1) : [], null != this.handlers && null != this.handlers[i]) {
                for (o = [], r = 0, n = (s = this.handlers[i]).length; r < n; r++) e = s[r], o.push(e.apply(null, t));
                return o
            }
        }, t
    }(), _.commas = function(t) {
        var e, i, r, n;
        return null != t ? (r = t < 0 ? "-" : "", e = Math.abs(t), r += (i = Math.floor(e).toFixed(0)).replace(/(?=(?:\d{3})+$)(?!^)/g, ","), (n = e.toString()).length > i.length && (r += n.slice(i.length)), r) : "-"
    }, _.pad2 = function(t) {
        return (t < 10 ? "0" : "") + t
    }, _.Grid = function(t) {
        function e(t) {
            this.resizeHandler = u(this.resizeHandler, this);
            var s = this;
            if ("string" == typeof t.element ? this.el = x(document.getElementById(t.element)) : this.el = x(t.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
            "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = x.extend({}, this.gridDefaults, this.defaults || {}, t), "string" == typeof this.options.units && (this.options.postUnits = t.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(t) {
                var e, i, r, n;
                return i = s.el.offset(), n = t.pageX - i.left, s.selectFrom ? (e = s.data[s.hitTest(Math.min(n, s.selectFrom))]._x, r = s.data[s.hitTest(Math.max(n, s.selectFrom))]._x - e, s.selectionRect.attr({
                    x: e,
                    width: r
                })) : s.fire("hovermove", n, t.pageY - i.top)
            }), this.el.bind("mouseleave", function(t) {
                return s.selectFrom && (s.selectionRect.hide(), s.selectFrom = null), s.fire("hoverout")
            }), this.el.bind("touchstart touchmove touchend", function(t) {
                var e, i;
                return i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = s.el.offset(), s.fire("hovermove", i.pageX - e.left, i.pageY - e.top)
            }), this.el.bind("click", function(t) {
                var e;
                return e = s.el.offset(), s.fire("gridclick", t.pageX - e.left, t.pageY - e.top)
            }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
                fill: this.options.rangeSelectColor,
                stroke: !1
            }).toBack().hide(), this.el.bind("mousedown", function(t) {
                var e;
                return e = s.el.offset(), s.startRange(t.pageX - e.left)
            }), this.el.bind("mouseup", function(t) {
                var e;
                return e = s.el.offset(), s.endRange(t.pageX - e.left), s.fire("hovermove", t.pageX - e.left, t.pageY - e.top)
            })), this.options.resize && x(window).bind("resize", function(t) {
                return null != s.timeoutId && window.clearTimeout(s.timeoutId), s.timeoutId = window.setTimeout(s.resizeHandler, 100)
            }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit()
        }
        return s(e, t), e.prototype.gridDefaults = {
            dateFormat: null,
            axes: !0,
            grid: !0,
            gridLineColor: "#aaa",
            gridStrokeWidth: .5,
            gridTextColor: "#888",
            gridTextSize: 12,
            gridTextFamily: "sans-serif",
            gridTextWeight: "normal",
            hideHover: !1,
            yLabelFormat: null,
            xLabelAngle: 0,
            numLines: 5,
            padding: 25,
            parseTime: !0,
            postUnits: "",
            preUnits: "",
            ymax: "auto",
            ymin: "auto 0",
            goals: [],
            goalStrokeWidth: 1,
            goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
            events: [],
            eventStrokeWidth: 1,
            eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
            rangeSelect: null,
            rangeSelectColor: "#eef",
            resize: !1
        }, e.prototype.setData = function(r, t) {
            var n, s, o, e, i, a, h, l, u, c, p, f, d, g, x;
            return null == t && (t = !0), null == (this.options.data = r) || 0 === r.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (f = this.cumulative ? 0 : null, d = this.cumulative ? 0 : null, 0 < this.options.goals.length && (i = Math.min.apply(Math, this.options.goals), e = Math.max.apply(Math, this.options.goals), d = null != d ? Math.min(d, i) : i, f = null != f ? Math.max(f, e) : e), this.data = function() {
                var t, e, i;
                for (i = [], o = t = 0, e = r.length; t < e; o = ++t) h = r[o], (a = {
                    src: h
                }).label = h[this.options.xkey], this.options.parseTime ? (a.x = _.parseDate(a.label), this.options.dateFormat ? a.label = this.options.dateFormat(a.x) : "number" == typeof a.label && (a.label = new Date(a.label).toString())) : (a.x = o, this.options.xLabelFormat && (a.label = this.options.xLabelFormat(a))), u = 0, a.y = function() {
                    var t, e, i, r;
                    for (i = this.options.ykeys, r = [], s = t = 0, e = i.length; t < e; s = ++t) p = i[s], "string" == typeof(g = h[p]) && (g = parseFloat(g)), null != g && "number" != typeof g && (g = null), null != g && (this.cumulative ? u += g : null != f ? (f = Math.max(g, f), d = Math.min(g, d)) : f = d = g), this.cumulative && null != u && (f = Math.max(u, f), d = Math.min(u, d)), r.push(g);
                    return r
                }.call(this), i.push(a);
                return i
            }.call(this), this.options.parseTime && (this.data = this.data.sort(function(t, e) {
                return (t.x > e.x) - (e.x > t.x)
            })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], 0 < this.options.events.length && (this.options.parseTime ? this.events = function() {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = this.options.events).length; t < e; t++) n = i[t], r.push(_.parseDate(n));
                return r
            }.call(this) : this.events = this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", d), this.ymax = this.yboundary("max", f), this.ymin === this.ymax && (d && (this.ymin -= 1), this.ymax += 1), !0 !== (x = this.options.axes) && "both" !== x && "y" !== x && !0 !== this.options.grid || (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (l = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() {
                var t, e, i;
                for (i = [], c = t = this.ymin, e = this.ymax; 0 < l ? t <= e : e <= t; c = t += l) i.push(c);
                return i
            }.call(this))), this.dirty = !0, t ? this.redraw() : void 0)
        }, e.prototype.yboundary = function(t, e) {
            var i, r;
            return "string" == typeof(i = this.options["y" + t]) ? "auto" === i.slice(0, 4) ? 5 < i.length ? (r = parseInt(i.slice(5), 10), null == e ? r : Math[t](e, r)) : null != e ? e : 0 : parseInt(i, 10) : i
        }, e.prototype.autoGridLines = function(t, e, i) {
            var r, n, s, o, a, h, l, u;
            return o = e - t, u = Math.floor(Math.log(o) / Math.log(10)), h = Math.pow(10, u), n = Math.floor(t / h) * h, r = Math.ceil(e / h) * h, a = (r - n) / (i - 1), 1 === h && 1 < a && Math.ceil(a) !== a && (a = Math.ceil(a), r = n + a * (i - 1)), n < 0 && 0 < r && (n = Math.floor(t / a) * a, r = Math.ceil(e / a) * a), a < 1 ? (s = Math.floor(Math.log(a) / Math.log(10)), function() {
                var t, e;
                for (e = [], l = t = n; 0 < a ? t <= r : r <= t; l = t += a) e.push(parseFloat(l.toFixed(1 - s)));
                return e
            }()) : function() {
                var t, e;
                for (e = [], l = t = n; 0 < a ? t <= r : r <= t; l = t += a) e.push(l);
                return e
            }()
        }, e.prototype._calc = function() {
            var t, n, e, r, i, s, o, a;
            if (i = this.el.width(), e = this.el.height(), (this.elementWidth !== i || this.elementHeight !== e || this.dirty) && (this.elementWidth = i, this.elementHeight = e, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, !0 !== (o = this.options.axes) && "both" !== o && "y" !== o || (s = function() {
                    var t, e, i, r;
                    for (r = [], t = 0, e = (i = this.grid).length; t < e; t++) n = i[t], r.push(this.measureText(this.yAxisFormat(n)).width);
                    return r
                }.call(this), this.left += Math.max.apply(Math, s)), !0 !== (a = this.options.axes) && "both" !== a && "x" !== a || (t = function() {
                    var t, e, i;
                    for (i = [], r = t = 0, e = this.data.length; 0 <= e ? t < e : e < t; r = 0 <= e ? ++t : --t) i.push(this.measureText(this.data[r].text, -this.options.xLabelAngle).height);
                    return i
                }.call(this), this.bottom -= Math.max.apply(Math, t)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc)) return this.calc()
        }, e.prototype.transY = function(t) {
            return this.bottom - (t - this.ymin) * this.dy
        }, e.prototype.transX = function(t) {
            return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx
        }, e.prototype.redraw = function() {
            if (this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw) return this.draw()
        }, e.prototype.measureText = function(t, e) {
            var i, r;
            return null == e && (e = 0), i = (r = this.raphael.text(100, 100, t).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(e)).getBBox(), r.remove(), i
        }, e.prototype.yAxisFormat = function(t) {
            return this.yLabelFormat(t)
        }, e.prototype.yLabelFormat = function(t) {
            return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + _.commas(t) + this.options.postUnits
        }, e.prototype.drawGrid = function() {
            var t, e, i, r, n, s, o, a;
            if (!1 !== this.options.grid || !0 === (n = this.options.axes) || "both" === n || "y" === n) {
                for (a = [], i = 0, r = (s = this.grid).length; i < r; i++) t = s[i], e = this.transY(t), !0 !== (o = this.options.axes) && "both" !== o && "y" !== o || this.drawYAxisLabel(this.left - this.options.padding / 2, e, this.yAxisFormat(t)), this.options.grid ? a.push(this.drawGridLine("M" + this.left + "," + e + "H" + (this.left + this.width))) : a.push(void 0);
                return a
            }
        }, e.prototype.drawGoals = function() {
            var t, e, i, r, n, s, o;
            for (o = [], i = r = 0, n = (s = this.options.goals).length; r < n; i = ++r) e = s[i], t = this.options.goalLineColors[i % this.options.goalLineColors.length], o.push(this.drawGoal(e, t));
            return o
        }, e.prototype.drawEvents = function() {
            var t, e, i, r, n, s, o;
            for (o = [], i = r = 0, n = (s = this.events).length; r < n; i = ++r) e = s[i], t = this.options.eventLineColors[i % this.options.eventLineColors.length], o.push(this.drawEvent(e, t));
            return o
        }, e.prototype.drawGoal = function(t, e) {
            return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth)
        }, e.prototype.drawEvent = function(t, e) {
            return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth)
        }, e.prototype.drawYAxisLabel = function(t, e, i) {
            return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
        }, e.prototype.drawGridLine = function(t) {
            return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
        }, e.prototype.startRange = function(t) {
            return this.hover.hide(), this.selectFrom = t, this.selectionRect.attr({
                x: t,
                width: 0
            }).show()
        }, e.prototype.endRange = function(t) {
            var e, i;
            if (this.selectFrom) return i = Math.min(this.selectFrom, t), e = Math.max(this.selectFrom, t), this.options.rangeSelect.call(this.el, {
                start: this.data[this.hitTest(i)].x,
                end: this.data[this.hitTest(e)].x
            }), this.selectFrom = null
        }, e.prototype.resizeHandler = function() {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, e
    }(_.EventEmitter), _.parseDate = function(t) {
        var e, i, r, n, s, o, a, h, l, u, c;
        return "number" == typeof t ? t : (i = t.match(/^(\d+) Q(\d)$/), n = t.match(/^(\d+)-(\d+)$/), s = t.match(/^(\d+)-(\d+)-(\d+)$/), a = t.match(/^(\d+) W(\d+)$/), h = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), i ? new Date(parseInt(i[1], 10), 3 * parseInt(i[2], 10) - 1, 1).getTime() : n ? new Date(parseInt(n[1], 10), parseInt(n[2], 10) - 1, 1).getTime() : s ? new Date(parseInt(s[1], 10), parseInt(s[2], 10) - 1, parseInt(s[3], 10)).getTime() : a ? (4 !== (u = new Date(parseInt(a[1], 10), 0, 1)).getDay() && u.setMonth(0, 1 + (4 - u.getDay() + 7) % 7), u.getTime() + 6048e5 * parseInt(a[2], 10)) : h ? h[6] ? (o = 0, "Z" !== h[6] && (o = 60 * parseInt(h[8], 10) + parseInt(h[9], 10), "+" === h[7] && (o = 0 - o)), Date.UTC(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10) + o)) : new Date(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10)).getTime() : l ? (c = parseFloat(l[6]), e = Math.floor(c), r = Math.round(1e3 * (c - e)), l[8] ? (o = 0, "Z" !== l[8] && (o = 60 * parseInt(l[10], 10) + parseInt(l[11], 10), "+" === l[9] && (o = 0 - o)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + o, e, r)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10), e, r).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime())
    }, _.Hover = function() {
        function t(t) {
            null == t && (t = {}), this.options = x.extend({}, _.Hover.defaults, t), this.el = x("<div class='" + this.options.class + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
        }
        return t.defaults = {
            class: "morris-hover morris-default-style"
        }, t.prototype.update = function(t, e, i) {
            return t ? (this.html(t), this.show(), this.moveTo(e, i)) : this.hide()
        }, t.prototype.html = function(t) {
            return this.el.html(t)
        }, t.prototype.moveTo = function(t, e) {
            var i, r, n, s, o, a;
            return o = this.options.parent.innerWidth(), s = this.options.parent.innerHeight(), r = this.el.outerWidth(), i = this.el.outerHeight(), n = Math.min(Math.max(0, t - r / 2), o - r), null != e ? (a = e - i - 10) < 0 && s < (a = e + 10) + i && (a = s / 2 - i / 2) : a = s / 2 - i / 2, this.el.css({
                left: n + "px",
                top: parseInt(a) + "px"
            })
        }, t.prototype.show = function() {
            return this.el.show()
        }, t.prototype.hide = function() {
            return this.el.hide()
        }, t
    }(), _.Line = function(t) {
        function e(t) {
            if (this.hilight = u(this.hilight, this), this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this), this.onGridClick = u(this.onGridClick, this), !(this instanceof _.Line)) return new _.Line(t);
            e.__super__.constructor.call(this, t)
        }
        return s(e, t), e.prototype.init = function() {
            if ("always" !== this.options.hideHover) return this.hover = new _.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)
        }, e.prototype.defaults = {
            lineWidth: 3,
            pointSize: 4,
            lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            pointStrokeWidths: [1],
            pointStrokeColors: ["#ffffff"],
            pointFillColors: [],
            smooth: !0,
            xLabels: "auto",
            xLabelFormat: null,
            xLabelMargin: 24,
            hideHover: !1
        }, e.prototype.calc = function() {
            return this.calcPoints(), this.generatePaths()
        }, e.prototype.calcPoints = function() {
            var n, s, t, e, i, r;
            for (r = [], t = 0, e = (i = this.data).length; t < e; t++)(n = i[t])._x = this.transX(n.x), n._y = function() {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n.y).length; t < e; t++) null != (s = i[t]) ? r.push(this.transY(s)) : r.push(s);
                return r
            }.call(this), r.push(n._ymax = Math.min.apply(Math, [this.bottom].concat(function() {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n._y).length; t < e; t++) null != (s = i[t]) && r.push(s);
                return r
            }())));
            return r
        }, e.prototype.hitTest = function(t) {
            var e, i, r, n;
            if (0 === this.data.length) return null;
            for (e = i = 0, r = (n = this.data.slice(1)).length; i < r && !(t < (n[e]._x + this.data[e]._x) / 2); e = ++i);
            return e
        }, e.prototype.onGridClick = function(t, e) {
            var i;
            return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e)
        }, e.prototype.onHoverMove = function(t, e) {
            var i;
            return i = this.hitTest(t), this.displayHoverForRow(i)
        }, e.prototype.onHoverOut = function() {
            if (!1 !== this.options.hideHover) return this.displayHoverForRow(null)
        }, e.prototype.displayHoverForRow = function(t) {
            var e;
            return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight())
        }, e.prototype.hoverContentForRow = function(t) {
            var e, i, r, n, s, o, a;
            for (e = "<div class='morris-hover-row-label'>" + (r = this.data[t]).label + "</div>", i = s = 0, o = (a = r.y).length; s < o; i = ++s) n = a[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(r, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(n) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, r.src)), [e, r._x, r._ymax]
        }, e.prototype.generatePaths = function() {
            var n, s, o, a;
            return this.paths = function() {
                var t, e, i, r;
                for (r = [], s = t = 0, e = this.options.ykeys.length; 0 <= e ? t < e : e < t; s = 0 <= e ? ++t : --t) a = "boolean" == typeof this.options.smooth ? this.options.smooth : (i = this.options.ykeys[s], 0 <= h.call(this.options.smooth, i)), 1 < (n = function() {
                    var t, e, i, r;
                    for (r = [], t = 0, e = (i = this.data).length; t < e; t++) void 0 !== (o = i[t])._y[s] && r.push({
                        x: o._x,
                        y: o._y[s]
                    });
                    return r
                }.call(this)).length ? r.push(_.Line.createPath(n, a, this.bottom)) : r.push(null);
                return r
            }.call(this)
        }, e.prototype.draw = function() {
            var t;
            if (!0 !== (t = this.options.axes) && "both" !== t && "x" !== t || this.drawXAxis(), this.drawSeries(), !1 === this.options.hideHover) return this.displayHoverForRow(this.data.length - 1)
        }, e.prototype.drawXAxis = function() {
            var t, e, i, a, h, n, l, r, s, o, u = this;
            for (l = this.bottom + this.options.padding / 2, a = h = null, t = function(t, e) {
                    var i, r, n, s, o;
                    return o = (i = u.drawXAxisLabel(u.transX(e), l, t)).getBBox(), i.transform("r" + -u.options.xLabelAngle), r = i.getBBox(), i.transform("t0," + r.height / 2 + "..."), 0 !== u.options.xLabelAngle && (s = -.5 * o.width * Math.cos(u.options.xLabelAngle * Math.PI / 180), i.transform("t" + s + ",0...")), r = i.getBBox(), (null == h || h >= r.x + r.width || null != a && a >= r.x) && 0 <= r.x && r.x + r.width < u.el.width() ? (0 !== u.options.xLabelAngle && (n = 1.25 * u.options.gridTextSize / Math.sin(u.options.xLabelAngle * Math.PI / 180), a = r.x - n), h = r.x - u.options.xLabelMargin) : i.remove()
                }, (i = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                    [this.data[0].label, this.data[0].x]
                ] : _.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
                    var t, e, i, r;
                    for (r = [], t = 0, e = (i = this.data).length; t < e; t++) n = i[t], r.push([n.label, n.x]);
                    return r
                }.call(this)).reverse(), o = [], r = 0, s = i.length; r < s; r++) e = i[r], o.push(t(e[0], e[1]));
            return o
        }, e.prototype.drawSeries = function() {
            var t, e, i, r, n, s;
            for (this.seriesPoints = [], t = e = r = this.options.ykeys.length - 1; r <= 0 ? e <= 0 : 0 <= e; t = r <= 0 ? ++e : --e) this._drawLineFor(t);
            for (s = [], t = i = n = this.options.ykeys.length - 1; n <= 0 ? i <= 0 : 0 <= i; t = n <= 0 ? ++i : --i) s.push(this._drawPointFor(t));
            return s
        }, e.prototype._drawPointFor = function(t) {
            var e, i, r, n, s, o;
            for (this.seriesPoints[t] = [], o = [], r = 0, n = (s = this.data).length; r < n; r++)(e = null) != (i = s[r])._y[t] && (e = this.drawLinePoint(i._x, i._y[t], this.colorFor(i, t, "point"), t)), o.push(this.seriesPoints[t].push(e));
            return o
        }, e.prototype._drawLineFor = function(t) {
            var e;
            if (null !== (e = this.paths[t])) return this.drawLinePath(e, this.colorFor(null, t, "line"), t)
        }, e.createPath = function(t, e, i) {
            var r, n, s, o, a, h, l, u, c, p;
            for (l = "", e && (s = _.Line.gradients(t)), u = {
                    y: null
                }, o = c = 0, p = t.length; c < p; o = ++c) null != (r = t[o]).y && (null != u.y ? e ? (n = s[o], h = s[o - 1], a = (r.x - u.x) / 4, l += "C" + (u.x + a) + "," + Math.min(i, u.y + a * h) + "," + (r.x - a) + "," + Math.min(i, r.y - a * n) + "," + r.x + "," + r.y) : l += "L" + r.x + "," + r.y : e && null == s[o] || (l += "M" + r.x + "," + r.y)), u = r;
            return l
        }, e.gradients = function(t) {
            var e, i, r, n, s, o, a, h;
            for (i = function(t, e) {
                    return (t.y - e.y) / (t.x - e.x)
                }, h = [], r = o = 0, a = t.length; o < a; r = ++o) null != (e = t[r]).y ? (n = t[r + 1] || {
                y: null
            }, null != (s = t[r - 1] || {
                y: null
            }).y && null != n.y ? h.push(i(s, n)) : null != s.y ? h.push(i(s, e)) : null != n.y ? h.push(i(e, n)) : h.push(null)) : h.push(null);
            return h
        }, e.prototype.hilight = function(t) {
            var e, i, r, n, s;
            if (null !== this.prevHilight && this.prevHilight !== t)
                for (e = i = 0, n = this.seriesPoints.length - 1; 0 <= n ? i <= n : n <= i; e = 0 <= n ? ++i : --i) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrinkSeries(e));
            if (null !== t && this.prevHilight !== t)
                for (e = r = 0, s = this.seriesPoints.length - 1; 0 <= s ? r <= s : s <= r; e = 0 <= s ? ++r : --r) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrowSeries(e));
            return this.prevHilight = t
        }, e.prototype.colorFor = function(t, e, i) {
            return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, i) : "point" === i && this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length]
        }, e.prototype.drawXAxisLabel = function(t, e, i) {
            return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, e.prototype.drawLinePath = function(t, e, i) {
            return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.lineWidthForSeries(i))
        }, e.prototype.drawLinePoint = function(t, e, i, r) {
            return this.raphael.circle(t, e, this.pointSizeForSeries(r)).attr("fill", i).attr("stroke-width", this.pointStrokeWidthForSeries(r)).attr("stroke", this.pointStrokeColorForSeries(r))
        }, e.prototype.pointStrokeWidthForSeries = function(t) {
            return this.options.pointStrokeWidths[t % this.options.pointStrokeWidths.length]
        }, e.prototype.pointStrokeColorForSeries = function(t) {
            return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length]
        }, e.prototype.lineWidthForSeries = function(t) {
            return this.options.lineWidth instanceof Array ? this.options.lineWidth[t % this.options.lineWidth.length] : this.options.lineWidth
        }, e.prototype.pointSizeForSeries = function(t) {
            return this.options.pointSize instanceof Array ? this.options.pointSize[t % this.options.pointSize.length] : this.options.pointSize
        }, e.prototype.pointGrowSeries = function(t) {
            return Raphael.animation({
                r: this.pointSizeForSeries(t) + 3
            }, 25, "linear")
        }, e.prototype.pointShrinkSeries = function(t) {
            return Raphael.animation({
                r: this.pointSizeForSeries(t)
            }, 25, "linear")
        }, e
    }(_.Grid), _.labelSeries = function(t, e, i, r, n) {
        var s, o, a, h, l, u, c, p, f, d, g;
        if (a = 200 * (e - t) / i, o = new Date(t), void 0 === (c = _.LABEL_SPECS[r]))
            for (f = 0, d = (g = _.AUTO_LABEL_ORDER).length; f < d; f++)
                if (h = g[f], a >= (u = _.LABEL_SPECS[h]).span) {
                    c = u;
                    break
                }
        for (void 0 === c && (c = _.LABEL_SPECS.second), n && (c = x.extend({}, c, {
                fmt: n
            })), s = c.start(o), l = [];
            (p = s.getTime()) <= e;) t <= p && l.push([c.fmt(s), p]), c.incr(s);
        return l
    }, t = function(e) {
        return {
            span: 60 * e * 1e3,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours())
            },
            fmt: function(t) {
                return _.pad2(t.getHours()) + ":" + _.pad2(t.getMinutes())
            },
            incr: function(t) {
                return t.setUTCMinutes(t.getUTCMinutes() + e)
            }
        }
    }, e = function(e) {
        return {
            span: 1e3 * e,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes())
            },
            fmt: function(t) {
                return _.pad2(t.getHours()) + ":" + _.pad2(t.getMinutes()) + ":" + _.pad2(t.getSeconds())
            },
            incr: function(t) {
                return t.setUTCSeconds(t.getUTCSeconds() + e)
            }
        }
    }, _.LABEL_SPECS = {
        decade: {
            span: 1728e8,
            start: function(t) {
                return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1)
            },
            fmt: function(t) {
                return "" + t.getFullYear()
            },
            incr: function(t) {
                return t.setFullYear(t.getFullYear() + 10)
            }
        },
        year: {
            span: 1728e7,
            start: function(t) {
                return new Date(t.getFullYear(), 0, 1)
            },
            fmt: function(t) {
                return "" + t.getFullYear()
            },
            incr: function(t) {
                return t.setFullYear(t.getFullYear() + 1)
            }
        },
        month: {
            span: 24192e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), 1)
            },
            fmt: function(t) {
                return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1)
            },
            incr: function(t) {
                return t.setMonth(t.getMonth() + 1)
            }
        },
        week: {
            span: 6048e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            fmt: function(t) {
                return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1) + "-" + _.pad2(t.getDate())
            },
            incr: function(t) {
                return t.setDate(t.getDate() + 7)
            }
        },
        day: {
            span: 864e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            fmt: function(t) {
                return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1) + "-" + _.pad2(t.getDate())
            },
            incr: function(t) {
                return t.setDate(t.getDate() + 1)
            }
        },
        hour: t(60),
        "30min": t(30),
        "15min": t(15),
        "10min": t(10),
        "5min": t(5),
        minute: t(1),
        "30sec": e(30),
        "15sec": e(15),
        "10sec": e(10),
        "5sec": e(5),
        second: e(1)
    }, _.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], _.Area = function(t) {
        var i;

        function r(t) {
            var e;
            if (!(this instanceof _.Area)) return new _.Area(t);
            e = x.extend({}, i, t), this.cumulative = !e.behaveLikeLine, "auto" === e.fillOpacity && (e.fillOpacity = e.behaveLikeLine ? .8 : 1), r.__super__.constructor.call(this, e)
        }
        return s(r, t), i = {
            fillOpacity: "auto",
            behaveLikeLine: !1
        }, r.prototype.calcPoints = function() {
            var n, s, o, t, e, i, r;
            for (r = [], t = 0, e = (i = this.data).length; t < e; t++)(n = i[t])._x = this.transX(n.x), s = 0, n._y = function() {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n.y).length; t < e; t++) o = i[t], this.options.behaveLikeLine ? r.push(this.transY(o)) : (s += o || 0, r.push(this.transY(s)));
                return r
            }.call(this), r.push(n._ymax = Math.max.apply(Math, n._y));
            return r
        }, r.prototype.drawSeries = function() {
            var t, e, i, r, n, s, o, a;
            for (this.seriesPoints = [], a = [], i = 0, r = (e = this.options.behaveLikeLine ? function() {
                    s = [];
                    for (var t = 0, e = this.options.ykeys.length - 1; 0 <= e ? t <= e : e <= t; 0 <= e ? t++ : t--) s.push(t);
                    return s
                }.apply(this) : function() {
                    o = [];
                    for (var t = n = this.options.ykeys.length - 1; n <= 0 ? t <= 0 : 0 <= t; n <= 0 ? t++ : t--) o.push(t);
                    return o
                }.apply(this)).length; i < r; i++) t = e[i], this._drawFillFor(t), this._drawLineFor(t), a.push(this._drawPointFor(t));
            return a
        }, r.prototype._drawFillFor = function(t) {
            var e;
            if (null !== (e = this.paths[t])) return e = e + "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t))
        }, r.prototype.fillForSeries = function(t) {
            var e;
            return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, this.options.behaveLikeLine ? .9 * e.s : .75 * e.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * e.l : 1.25 * e.l))
        }, r.prototype.drawFilledPath = function(t, e) {
            return this.raphael.path(t).attr("fill", e).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none")
        }, r
    }(_.Line), _.Bar = function(t) {
        function e(t) {
            if (this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this), this.onGridClick = u(this.onGridClick, this), !(this instanceof _.Bar)) return new _.Bar(t);
            e.__super__.constructor.call(this, x.extend({}, t, {
                parseTime: !1
            }))
        }
        return s(e, t), e.prototype.init = function() {
            if (this.cumulative = this.options.stacked, "always" !== this.options.hideHover) return this.hover = new _.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)
        }, e.prototype.defaults = {
            barSizeRatio: .75,
            barGap: 3,
            barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            barOpacity: 1,
            barRadius: [0, 0, 0, 0],
            xLabelMargin: 50
        }, e.prototype.calc = function() {
            var t;
            if (this.calcBars(), !1 === this.options.hideHover) return (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1))
        }, e.prototype.calcBars = function() {
            var t, n, s, e, i, r, o;
            for (o = [], t = e = 0, i = (r = this.data).length; e < i; t = ++e)(n = r[t])._x = this.left + this.width * (t + .5) / this.data.length, o.push(n._y = function() {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n.y).length; t < e; t++) null != (s = i[t]) ? r.push(this.transY(s)) : r.push(null);
                return r
            }.call(this));
            return o
        }, e.prototype.draw = function() {
            var t;
            return !0 !== (t = this.options.axes) && "both" !== t && "x" !== t || this.drawXAxis(), this.drawSeries()
        }, e.prototype.drawXAxis = function() {
            var t, e, i, r, n, s, o, a, h, l, u, c, p;
            for (l = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), s = o = null, p = [], t = u = 0, c = this.data.length; 0 <= c ? u < c : c < u; t = 0 <= c ? ++u : --u) a = this.data[this.data.length - 1 - t], h = (e = this.drawXAxisLabel(a._x, l, a.label)).getBBox(), e.transform("r" + -this.options.xLabelAngle), i = e.getBBox(), e.transform("t0," + i.height / 2 + "..."), 0 !== this.options.xLabelAngle && (n = -.5 * h.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), e.transform("t" + n + ",0...")), (null == o || o >= i.x + i.width || null != s && s >= i.x) && 0 <= i.x && i.x + i.width < this.el.width() ? (0 !== this.options.xLabelAngle && (r = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), s = i.x - r), p.push(o = i.x - this.options.xLabelMargin)) : p.push(e.remove());
            return p
        }, e.prototype.drawSeries = function() {
            var n, s, o, a, h, l, u, t, c, p, f, e, d, g, x;
            return o = this.width / this.options.data.length, t = this.options.stacked ? 1 : this.options.ykeys.length, n = (o * this.options.barSizeRatio - this.options.barGap * (t - 1)) / t, this.options.barSize && (n = Math.min(n, this.options.barSize)), e = o - n * t - this.options.barGap * (t - 1), u = e / 2, x = this.ymin <= 0 && 0 <= this.ymax ? this.transY(0) : null, this.bars = function() {
                var t, e, i, r;
                for (i = this.data, r = [], a = t = 0, e = i.length; t < e; a = ++t) c = i[a], h = 0, r.push(function() {
                    var t, e, i, r;
                    for (i = c._y, r = [], p = t = 0, e = i.length; t < e; p = ++t) null !== (g = i[p]) ? (s = x ? (d = Math.min(g, x), Math.max(g, x)) : (d = g, this.bottom), l = this.left + a * o + u, this.options.stacked || (l += p * (n + this.options.barGap)), f = s - d, this.options.verticalGridCondition && this.options.verticalGridCondition(c.x) && this.drawBar(this.left + a * o, this.top, o, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (d -= h), this.drawBar(l, d, n, f, this.colorFor(c, p, "bar"), this.options.barOpacity, this.options.barRadius), r.push(h += f)) : r.push(null);
                    return r
                }.call(this));
                return r
            }.call(this)
        }, e.prototype.colorFor = function(t, e, i) {
            var r, n;
            return "function" == typeof this.options.barColors ? (r = {
                x: t.x,
                y: t.y[e],
                label: t.label
            }, n = {
                index: e,
                key: this.options.ykeys[e],
                label: this.options.labels[e]
            }, this.options.barColors.call(this, r, n, i)) : this.options.barColors[e % this.options.barColors.length]
        }, e.prototype.hitTest = function(t) {
            return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length))))
        }, e.prototype.onGridClick = function(t, e) {
            var i;
            return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e)
        }, e.prototype.onHoverMove = function(t, e) {
            var i, r;
            return i = this.hitTest(t), (r = this.hover).update.apply(r, this.hoverContentForRow(i))
        }, e.prototype.onHoverOut = function() {
            if (!1 !== this.options.hideHover) return this.hover.hide()
        }, e.prototype.hoverContentForRow = function(t) {
            var e, i, r, n, s, o, a;
            for (e = "<div class='morris-hover-row-label'>" + (r = this.data[t]).label + "</div>", i = s = 0, o = (a = r.y).length; s < o; i = ++s) n = a[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(r, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(n) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, r.src)), [e, this.left + (t + .5) * this.width / this.data.length]
        }, e.prototype.drawXAxisLabel = function(t, e, i) {
            return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, e.prototype.drawBar = function(t, e, i, r, n, s, o) {
            var a;
            return (0 === (a = Math.max.apply(Math, o)) || r < a ? this.raphael.rect(t, e, i, r) : this.raphael.path(this.roundedRect(t, e, i, r, o))).attr("fill", n).attr("fill-opacity", s).attr("stroke", "none")
        }, e.prototype.roundedRect = function(t, e, i, r, n) {
            return null == n && (n = [0, 0, 0, 0]), ["M", t, n[0] + e, "Q", t, e, t + n[0], e, "L", t + i - n[1], e, "Q", t + i, e, t + i, e + n[1], "L", t + i, e + r - n[2], "Q", t + i, e + r, t + i - n[2], e + r, "L", t + n[3], e + r, "Q", t, e + r, t, e + r - n[3], "Z"]
        }, e
    }(_.Grid), _.Donut = function(t) {
        function e(t) {
            this.resizeHandler = u(this.resizeHandler, this), this.select = u(this.select, this), this.click = u(this.click, this);
            var e = this;
            if (!(this instanceof _.Donut)) return new _.Donut(t);
            if (this.options = x.extend({}, this.defaults, t), "string" == typeof t.element ? this.el = x(document.getElementById(t.element)) : this.el = x(t.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
            void 0 !== t.data && 0 !== t.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && x(window).bind("resize", function(t) {
                return null != e.timeoutId && window.clearTimeout(e.timeoutId), e.timeoutId = window.setTimeout(e.resizeHandler, 100)
            }), this.setData(t.data))
        }
        return s(e, t), e.prototype.defaults = {
            colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
            backgroundColor: "#FFFFFF",
            labelColor: "#000000",
            formatter: _.commas,
            resize: !1
        }, e.prototype.redraw = function() {
            var t, e, i, r, n, s, o, a, h, l, u, c, p, f, d, g, x, v, y, m, b, w;
            for (this.raphael.clear(), e = this.el.width() / 2, i = this.el.height() / 2, c = (Math.min(e, i) - 10) / 3, p = u = 0, g = (y = this.values).length; p < g; p++) u += y[p];
            for (a = 5 / (2 * c), t = 1.9999 * Math.PI - a * this.data.length, n = s = 0, this.segments = [], r = f = 0, x = (m = this.values).length; f < x; r = ++f) h = s + a + t * (m[r] / u), (l = new _.DonutSegment(e, i, 2 * c, c, s, h, this.data[r].color || this.options.colors[n % this.options.colors.length], this.options.backgroundColor, n, this.raphael)).render(), this.segments.push(l), l.on("hover", this.select), l.on("click", this.click), s = h, n += 1;
            for (this.text1 = this.drawEmptyDonutLabel(e, i - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(e, i + 10, this.options.labelColor, 14), o = Math.max.apply(Math, this.values), w = [], d = n = 0, v = (b = this.values).length; d < v; d++) {
                if (b[d] === o) {
                    this.select(n);
                    break
                }
                w.push(n += 1)
            }
            return w
        }, e.prototype.setData = function(t) {
            var n;
            return this.data = t, this.values = function() {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = this.data).length; t < e; t++) n = i[t], r.push(parseFloat(n.value));
                return r
            }.call(this), this.redraw()
        }, e.prototype.click = function(t) {
            return this.fire("click", t, this.data[t])
        }, e.prototype.select = function(t) {
            var e, i, r, n;
            for (i = 0, r = (n = this.segments).length; i < r; i++) n[i].deselect();
            return this.segments[t].select(), e = this.data[t], this.setLabels(e.label, this.options.formatter(e.value, e))
        }, e.prototype.setLabels = function(t, e) {
            var i, r, n, s, o, a, h, l;
            return s = 1.8 * (i = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3), n = i / 2, r = i / 3, this.text1.attr({
                text: t,
                transform: ""
            }), o = this.text1.getBBox(), a = Math.min(s / o.width, n / o.height), this.text1.attr({
                transform: "S" + a + "," + a + "," + (o.x + o.width / 2) + "," + (o.y + o.height)
            }), this.text2.attr({
                text: e,
                transform: ""
            }), h = this.text2.getBBox(), l = Math.min(s / h.width, r / h.height), this.text2.attr({
                transform: "S" + l + "," + l + "," + (h.x + h.width / 2) + "," + h.y
            })
        }, e.prototype.drawEmptyDonutLabel = function(t, e, i, r, n) {
            var s;
            return s = this.raphael.text(t, e, "").attr("font-size", r).attr("fill", i), null != n && s.attr("font-weight", n), s
        }, e.prototype.resizeHandler = function() {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, e
    }(_.EventEmitter), _.DonutSegment = function(t) {
        function e(t, e, i, r, n, s, o, a, h, l) {
            this.cx = t, this.cy = e, this.inner = i, this.outer = r, this.color = o, this.backgroundColor = a, this.index = h, this.raphael = l, this.deselect = u(this.deselect, this), this.select = u(this.select, this), this.sin_p0 = Math.sin(n), this.cos_p0 = Math.cos(n), this.sin_p1 = Math.sin(s), this.cos_p1 = Math.cos(s), this.is_long = s - n > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
        }
        return s(e, t), e.prototype.calcArcPoints = function(t) {
            return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1]
        }, e.prototype.calcSegment = function(t, e) {
            var i, r, n, s, o, a, h, l, u, c;
            return i = (u = this.calcArcPoints(t))[0], n = u[1], r = u[2], s = u[3], o = (c = this.calcArcPoints(e))[0], h = c[1], a = c[2], l = c[3], "M" + i + "," + n + "A" + t + "," + t + ",0," + this.is_long + ",0," + r + "," + s + "L" + a + "," + l + "A" + e + "," + e + ",0," + this.is_long + ",1," + o + "," + h + "Z"
        }, e.prototype.calcArc = function(t) {
            var e, i, r, n, s;
            return e = (s = this.calcArcPoints(t))[0], r = s[1], i = s[2], n = s[3], "M" + e + "," + r + "A" + t + "," + t + ",0," + this.is_long + ",0," + i + "," + n
        }, e.prototype.render = function() {
            var t = this;
            return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
                return t.fire("hover", t.index)
            }, function() {
                return t.fire("click", t.index)
            })
        }, e.prototype.drawDonutArc = function(t, e) {
            return this.raphael.path(t).attr({
                stroke: e,
                "stroke-width": 2,
                opacity: 0
            })
        }, e.prototype.drawDonutSegment = function(t, e, i, r, n) {
            return this.raphael.path(t).attr({
                fill: e,
                stroke: i,
                "stroke-width": 3
            }).hover(r).click(n)
        }, e.prototype.select = function() {
            if (!this.selected) return this.seg.animate({
                path: this.selectedPath
            }, 150, "<>"), this.arc.animate({
                opacity: 1
            }, 150, "<>"), this.selected = !0
        }, e.prototype.deselect = function() {
            if (this.selected) return this.seg.animate({
                path: this.path
            }, 150, "<>"), this.arc.animate({
                opacity: 0
            }, 150, "<>"), this.selected = !1
        }, e
    }(_.EventEmitter)
}.call(this);