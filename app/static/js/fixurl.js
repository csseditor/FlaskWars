function ld_a(a) {
    throw a;
}
var ld_b = void 0, ld_c = !0, ld_d = null, ld_e = !1, ld_f = Error, ld_g = parseInt, ld_h = String, ld_i = Number, ld_j = Function, ld_k = Object, ld_l = document, ld_aa = decodeURIComponent, ld_m = isNaN, ld_n = RegExp, ld_o = Math, ld_p = Array;
function ld_q(a, b) {
    return a.filter = b
}
function ld_r(a, b) {
    return a.length = b
}
function ld_s(a, b) {
    return a.remove = b
}
function ld_t(a, b) {
    return a.some = b
}
function ld_u(a, b) {
    return a.forEach = b
}
function ld_v(a, b) {
    return a.every = b
}
function ld_w(a, b) {
    return a.contains = b
}
function ld_x(a, b) {
    return a.clear = b
}
var ld_y = "appendChild", ld_z = "push", ld_A = "object", ld_B = "filter", ld_C = "toString", ld_D = "global", ld_E = "length", ld_F = "propertyIsEnumerable", ld_G = "prototype", ld_H = "test", ld_I = "slice", ld_J = "replace", ld_K = "split", ld_L = "floor", ld_M = "concat", ld_N = "constructor", ld_O = "charAt", ld_P = "userAgent", ld_Q = "location", ld_R = "indexOf", ld_ba = "hasOwnProperty", ld_ca = "search", ld_S = "call", ld_T = "remove", ld_U = "some", ld_V = "lastIndexOf", ld_W = "random", ld_X = "forEach", ld_Y = "charCodeAt", ld_Z = "substring", ld__ = "every", ld_0 = "contains",
    ld_1 = "apply", ld_da = "clear", ld_2 = "bind", ld_3 = "splice", ld_4 = "join", ld_5 = "unshift", ld_ea = "execScript", ld_6 = "toLowerCase", ld_7 = "substr", ld_8, ld_ = ld_ || {};
ld_.global = this;
ld_.Na = ld_c;
ld_.se = "en";
ld_.$f = function (a) {
    ld_.sc(a)
};
ld_.kg = function (a) {
    ld_.Na || (a = a || "", ld_a(ld_f("Importing test-only code into non-debug environment" + a ? ": " + a : ".")))
};
ld_.sc = function (a, b, c) {
    a = a[ld_K](".");
    c = c || ld_[ld_D];
    !(a[0]in c) && c[ld_ea] && c[ld_ea]("var " + a[0]);
    for (var d; a[ld_E] && (d = a.shift());)!a[ld_E] && ld_.ka(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
};
ld_.uf = function (a, b) {
    for (var c = a[ld_K]("."), d = b || ld_[ld_D], e; e = c.shift();)if (ld_.ge(d[e]))d = d[e]; else return ld_d;
    return d
};
ld_.Af = function (a, b) {
    var c = b || ld_[ld_D], d;
    for (d in a)c[d] = a[d]
};
ld_.Be = function () {
};
ld_.Ag = ld_e;
ld_.qe = ld_c;
ld_.fg = function () {
};
ld_.Ne = "";
ld_.Wf = function () {
};
ld_.Df = function (a) {
    return a
};
ld_.Ae = function () {
    ld_a(ld_f("unimplemented abstract method"))
};
ld_.Ce = function (a) {
    a.oe = function () {
        if (a.dc)return a.dc;
        ld_.Na && (ld_.ec[ld_.ec[ld_E]] = a);
        return a.dc = new a
    }
};
ld_.ec = [];
ld_.G = function (a) {
    var b = typeof a;
    if ("object" == b)if (a) {
        if (a instanceof ld_p)return "array";
        if (a instanceof ld_k)return b;
        var c = ld_k[ld_G][ld_C][ld_S](a);
        if ("[object Window]" == c)return "object";
        if ("[object Array]" == c || "number" == typeof a[ld_E] && "undefined" != typeof a[ld_3] && "undefined" != typeof a[ld_F] && !a[ld_F]("splice"))return "array";
        if ("[object Function]" == c || "undefined" != typeof a[ld_S] && "undefined" != typeof a[ld_F] && !a[ld_F]("call"))return "function"
    } else return "null"; else if ("function" == b && "undefined" == typeof a[ld_S])return "object";
    return b
};
ld_.ka = function (a) {
    return a !== ld_b
};
ld_.Nf = function (a) {
    return a === ld_d
};
ld_.ge = function (a) {
    return a != ld_d
};
ld_.L = function (a) {
    return "array" == ld_.G(a)
};
ld_.q = function (a) {
    var b = ld_.G(a);
    return "array" == b || "object" == b && "number" == typeof a[ld_E]
};
ld_.Jf = function (a) {
    return ld_.gb(a) && "function" == typeof a.getFullYear
};
ld_.j = function (a) {
    return "string" == typeof a
};
ld_.Ed = function (a) {
    return "boolean" == typeof a
};
ld_.Gd = function (a) {
    return "number" == typeof a
};
ld_.Fd = function (a) {
    return "function" == ld_.G(a)
};
ld_.gb = function (a) {
    var b = typeof a;
    return "object" == b && a != ld_d || "function" == b
};
ld_.gc = function (a) {
    return a[ld_.Oa] || (a[ld_.Oa] = ++ld_.Rd)
};
ld_.ke = function (a) {
    "removeAttribute"in a && a.removeAttribute(ld_.Oa);
    try {
        delete a[ld_.Oa]
    } catch (b) {
    }
};
ld_.Oa = "closure_uid_" + ld_o[ld_L](2147483648 * ld_o[ld_W]())[ld_C](36);
ld_.Rd = 0;
ld_.rf = ld_.gc;
ld_.dg = ld_.ke;
ld_.Id = function (a) {
    var b = ld_.G(a);
    if ("object" == b || "array" == b) {
        if (a.z)return a.z();
        var b = "array" == b ? [] : {}, c;
        for (c in a)b[c] = ld_.Id(a[c]);
        return b
    }
    return a
};
ld_.Ud = function (a, b, c) {
    return a[ld_S][ld_1](a[ld_2], arguments)
};
ld_.Td = function (a, b, c) {
    a || ld_a(ld_f());
    if (2 < arguments[ld_E]) {
        var d = ld_p[ld_G][ld_I][ld_S](arguments, 2);
        return function () {
            var c = ld_p[ld_G][ld_I][ld_S](arguments);
            ld_p[ld_G][ld_5][ld_1](c, d);
            return a[ld_1](b, c)
        }
    }
    return function () {
        return a[ld_1](b, arguments)
    }
};
ld_.bind = function (a, b, c) {
    ld_.bind = ld_j[ld_G][ld_2] && -1 != ld_j[ld_G][ld_2][ld_C]()[ld_R]("native code") ? ld_.Ud : ld_.Td;
    return ld_[ld_2][ld_1](ld_d, arguments)
};
ld_.Xb = function (a, b) {
    var c = ld_p[ld_G][ld_I][ld_S](arguments, 1);
    return function () {
        var b = ld_p[ld_G][ld_I][ld_S](arguments);
        b[ld_5][ld_1](b, c);
        return a[ld_1](this, b)
    }
};
ld_.tc = function (a, b) {
    for (var c in b)a[c] = b[c]
};
ld_.now = Date.now || function () {
    return +new Date
};
ld_.zf = function (a) {
    if (ld_[ld_D][ld_ea])ld_[ld_D][ld_ea](a, "JavaScript"); else if (ld_[ld_D].eval)if (ld_.Pa == ld_d && (ld_[ld_D].eval("var _et_ = 1;"), "undefined" != typeof ld_[ld_D]._et_ ? (delete ld_[ld_D]._et_, ld_.Pa = ld_c) : ld_.Pa = ld_e), ld_.Pa)ld_[ld_D].eval(a); else {
        var b = ld_[ld_D].document, c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = ld_e;
        c[ld_y](b.createTextNode(a));
        b.body[ld_y](c);
        b.body.removeChild(c)
    } else ld_a(ld_f("goog.globalEval not available"))
};
ld_.Pa = ld_d;
ld_.pf = function (a, b) {
    var c = function (a) {
        return ld_.ic[a] || a
    }, d = function (a) {
        for (var a = a[ld_K]("-"), b = [], d = 0; d < a[ld_E]; d++)b[ld_z](c(a[d]));
        return b[ld_4]("-")
    }, d = ld_.ic ? "BY_WHOLE" == ld_.Sd ? c : d : function (a) {
        return a
    };
    return b ? a + "-" + d(b) : d(a)
};
ld_.hg = function (a, b) {
    ld_.ic = a;
    ld_.Sd = b
};
ld_.tf = function (a, b) {
    var c = b || {}, d;
    for (d in c)var e = ("" + c[d])[ld_J](/\$/g, "$$$$"), a = a[ld_J](ld_n("\\{\\$" + d + "\\}", "gi"), e);
    return a
};
ld_.qb = function (a, b, c) {
    ld_.sc(a, b, c)
};
ld_.ae = function (a, b, c) {
    a[b] = c
};
ld_.Qa = function (a, b) {
    function c() {
    }

    c.prototype = b[ld_G];
    a.Ra = b[ld_G];
    a.prototype = new c;
    a[ld_G].constructor = a
};
ld_.Me = function (a, b, c) {
    var d = arguments.callee.caller;
    if (d.Ra)return d.Ra[ld_N][ld_1](a, ld_p[ld_G][ld_I][ld_S](arguments, 1));
    for (var e = ld_p[ld_G][ld_I][ld_S](arguments, 2), f = ld_e, g = a[ld_N]; g; g = g.Ra && g.Ra[ld_N])if (g[ld_G][b] === d)f = ld_c; else if (f)return g[ld_G][b][ld_1](a, e);
    if (a[b] === d)return a[ld_N][ld_G][b][ld_1](a, e);
    ld_a(ld_f("goog.base called from a method of one name to a method of a different name"))
};
ld_.scope = function (a) {
    a[ld_S](ld_[ld_D])
};
ld_.Xd = ld_c;
ld_.Xd && (ld_j[ld_G].bind = ld_j[ld_G][ld_2] || function (a, b) {
    if (1 < arguments[ld_E]) {
        var c = ld_p[ld_G][ld_I][ld_S](arguments, 1);
        c[ld_5](this, a);
        return ld_[ld_2][ld_1](ld_d, c)
    }
    return ld_[ld_2](this, a)
}, ld_j[ld_G].Xb = function (a) {
    var b = ld_p[ld_G][ld_I][ld_S](arguments);
    b[ld_5](this, ld_d);
    return ld_[ld_2][ld_1](ld_d, b)
}, ld_j[ld_G].Qa = function (a) {
    ld_.Qa(this, a)
}, ld_j[ld_G].tc = function (a) {
    ld_.tc(this[ld_G], a)
});
ld_.da = {};
ld_.da.ta = function (a) {
    ld_f.Od ? ld_f.Od(this, ld_.da.ta) : this.stack = ld_f().stack || "";
    a && (this.message = ld_h(a))
};
ld_.Qa(ld_.da.ta, ld_f);
ld_.da.ta[ld_G].name = "CustomError";
ld_.b = {};
ld_.b.xe = {ve: "\u00a0"};
ld_.b.wb = function (a, b) {
    return 0 == a[ld_V](b, 0)
};
ld_.b.zc = function (a, b) {
    var c = a[ld_E] - b[ld_E];
    return 0 <= c && a[ld_R](b, c) == c
};
ld_.b.We = function (a, b) {
    return 0 == ld_.b.Tb(b, a[ld_7](0, b[ld_E]))
};
ld_.b.Ve = function (a, b) {
    return 0 == ld_.b.Tb(b, a[ld_7](a[ld_E] - b[ld_E], b[ld_E]))
};
ld_.b.cd = function (a, b) {
    for (var c = 1; c < arguments[ld_E]; c++)var d = ld_h(arguments[c])[ld_J](/\$/g, "$$$$"), a = a[ld_J](/\%s/, d);
    return a
};
ld_.b.Ze = function (a) {
    return a[ld_J](/[\s\xa0]+/g, " ")[ld_J](/^\s+|\s+$/g, "")
};
ld_.b.C = function (a) {
    return /^[\s\xa0]*$/[ld_H](a)
};
ld_.b.Lf = function (a) {
    return ld_.b.C(ld_.b.dd(a))
};
ld_.b.If = function (a) {
    return !/[^\t\n\r ]/[ld_H](a)
};
ld_.b.Gf = function (a) {
    return !/[^a-zA-Z]/[ld_H](a)
};
ld_.b.Of = function (a) {
    return !/[^0-9]/[ld_H](a)
};
ld_.b.Hf = function (a) {
    return !/[^a-zA-Z0-9]/[ld_H](a)
};
ld_.b.Qf = function (a) {
    return " " == a
};
ld_.b.Rf = function (a) {
    return 1 == a[ld_E] && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
};
ld_.b.og = function (a) {
    return a[ld_J](/(\r\n|\r|\n)+/g, " ")
};
ld_.b.Ue = function (a) {
    return a[ld_J](/(\r\n|\r|\n)/g, "\n")
};
ld_.b.Vf = function (a) {
    return a[ld_J](/\xa0|\s/g, " ")
};
ld_.b.Uf = function (a) {
    return a[ld_J](/\xa0|[ \t]+/g, " ")
};
ld_.b.Ye = function (a) {
    return a[ld_J](/[\t\r\n ]+/g, " ")[ld_J](/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
ld_.b.Qb = function (a) {
    return a[ld_J](/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
ld_.b.wg = function (a) {
    return a[ld_J](/^[\s\xa0]+/, "")
};
ld_.b.xg = function (a) {
    return a[ld_J](/[\s\xa0]+$/, "")
};
ld_.b.Tb = function (a, b) {
    var c = ld_h(a)[ld_6](), d = ld_h(b)[ld_6]();
    return c < d ? -1 : c == d ? 0 : 1
};
ld_.b.Vb = /(\.\d+)|(\d+)|(\D+)/g;
ld_.b.Xf = function (a, b) {
    if (a == b)return 0;
    if (!a)return -1;
    if (!b)return 1;
    for (var c = a[ld_6]().match(ld_.b.Vb), d = b[ld_6]().match(ld_.b.Vb), e = ld_o.min(c[ld_E], d[ld_E]), f = 0; f < e; f++) {
        var g = c[f], h = d[f];
        if (g != h)return c = ld_g(g, 10), !ld_m(c) && (d = ld_g(h, 10), !ld_m(d) && c - d) ? c - d : g < h ? -1 : 1
    }
    return c[ld_E] != d[ld_E] ? c[ld_E] - d[ld_E] : a < b ? -1 : 1
};
ld_.b.la = function (a) {
    return encodeURIComponent(ld_h(a))
};
ld_.b.Ca = function (a) {
    return ld_aa(a[ld_J](/\+/g, " "))
};
ld_.b.nd = function (a, b) {
    return a[ld_J](/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
};
ld_.b.Ob = function (a, b) {
    if (b)return a[ld_J](ld_.b.Hb, "&amp;")[ld_J](ld_.b.Jb, "&lt;")[ld_J](ld_.b.Ib, "&gt;")[ld_J](ld_.b.Kb, "&quot;");
    if (!ld_.b.bd[ld_H](a))return a;
    -1 != a[ld_R]("&") && (a = a[ld_J](ld_.b.Hb, "&amp;"));
    -1 != a[ld_R]("<") && (a = a[ld_J](ld_.b.Jb, "&lt;"));
    -1 != a[ld_R](">") && (a = a[ld_J](ld_.b.Ib, "&gt;"));
    -1 != a[ld_R]('"') && (a = a[ld_J](ld_.b.Kb, "&quot;"));
    return a
};
ld_.b.Hb = /&/g;
ld_.b.Jb = /</g;
ld_.b.Ib = />/g;
ld_.b.Kb = /\"/g;
ld_.b.bd = /[&<>\"]/;
ld_.b.Pb = function (a) {
    return ld_.b[ld_0](a, "&") ? "document"in ld_[ld_D] ? ld_.b.hd(a) : ld_.b.jd(a) : a
};
ld_.b.hd = function (a) {
    var b = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'}, c = ld_l.createElement("div");
    return a[ld_J](ld_.b.ld, function (a, e) {
        var f = b[a];
        if (f)return f;
        if ("#" == e[ld_O](0)) {
            var g = ld_i("0" + e[ld_7](1));
            ld_m(g) || (f = ld_h.fromCharCode(g))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue[ld_I](0, -1));
        return b[a] = f
    })
};
ld_.b.jd = function (a) {
    return a[ld_J](/&([^;]+);/g, function (a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c[ld_O](0)) {
                    var d = ld_i("0" + c[ld_7](1));
                    if (!ld_m(d))return ld_h.fromCharCode(d)
                }
                return a
        }
    })
};
ld_.b.ld = /&([^;\s<&]+);?/g;
ld_.b.Bg = function (a, b) {
    return ld_.b.nd(a[ld_J](/  /g, " &#160;"), b)
};
ld_.b.pg = function (a, b) {
    for (var c = b[ld_E], d = 0; d < c; d++) {
        var e = 1 == c ? b : b[ld_O](d);
        if (a[ld_O](0) == e && a[ld_O](a[ld_E] - 1) == e)return a[ld_Z](1, a[ld_E] - 1)
    }
    return a
};
ld_.b.yg = function (a, b, c) {
    c && (a = ld_.b.Pb(a));
    a[ld_E] > b && (a = a[ld_Z](0, b - 3) + "...");
    c && (a = ld_.b.Ob(a));
    return a
};
ld_.b.zg = function (a, b, c, d) {
    c && (a = ld_.b.Pb(a));
    if (d && a[ld_E] > b) {
        d > b && (d = b);
        var e = a[ld_E] - d, b = b - d, a = a[ld_Z](0, b) + "..." + a[ld_Z](e)
    } else a[ld_E] > b && (e = ld_o[ld_L](b / 2), d = a[ld_E] - e, e += b % 2, a = a[ld_Z](0, e) + "..." + a[ld_Z](d));
    c && (a = ld_.b.Ob(a));
    return a
};
ld_.b.bb = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
};
ld_.b.Ia = {"'": "\\'"};
ld_.b.quote = function (a) {
    a = ld_h(a);
    if (a.quote)return a.quote();
    for (var b = ['"'], c = 0; c < a[ld_E]; c++) {
        var d = a[ld_O](c), e = d[ld_Y](0);
        b[c + 1] = ld_.b.bb[d] || (31 < e && 127 > e ? d : ld_.b.Nb(d))
    }
    b[ld_z]('"');
    return b[ld_4]("")
};
ld_.b.hf = function (a) {
    for (var b = [], c = 0; c < a[ld_E]; c++)b[c] = ld_.b.Nb(a[ld_O](c));
    return b[ld_4]("")
};
ld_.b.Nb = function (a) {
    if (a in ld_.b.Ia)return ld_.b.Ia[a];
    if (a in ld_.b.bb)return ld_.b.Ia[a] = ld_.b.bb[a];
    var b = a, c = a[ld_Y](0);
    if (31 < c && 127 > c)b = a; else {
        if (256 > c) {
            if (b = "\\x", 16 > c || 256 < c)b += "0"
        } else b = "\\u", 4096 > c && (b += "0");
        b += c[ld_C](16).toUpperCase()
    }
    return ld_.b.Ia[a] = b
};
ld_.b.sg = function (a) {
    for (var b = {}, c = 0; c < a[ld_E]; c++)b[a[ld_O](c)] = ld_c;
    return b
};
ld_w(ld_.b, function (a, b) {
    return -1 != a[ld_R](b)
});
ld_.b.af = function (a, b) {
    return a && b ? a[ld_K](b)[ld_E] - 1 : 0
};
ld_.b.Ja = function (a, b, c) {
    var d = a;
    0 <= b && (b < a[ld_E] && 0 < c) && (d = a[ld_7](0, b) + a[ld_7](b + c, a[ld_E] - b - c));
    return d
};
ld_s(ld_.b, function (a, b) {
    var c = ld_n(ld_.b.$a(b), "");
    return a[ld_J](c, "")
});
ld_.b.bg = function (a, b) {
    var c = ld_n(ld_.b.$a(b), "g");
    return a[ld_J](c, "")
};
ld_.b.$a = function (a) {
    return ld_h(a)[ld_J](/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")[ld_J](/\x08/g, "\\x08")
};
ld_.b.repeat = function (a, b) {
    return ld_p(b + 1)[ld_4](a)
};
ld_.b.Yf = function (a, b, c) {
    a = ld_.ka(c) ? a.toFixed(c) : ld_h(a);
    c = a[ld_R](".");
    -1 == c && (c = a[ld_E]);
    return ld_.b.repeat("0", ld_o.max(0, b - c)) + a
};
ld_.b.dd = function (a) {
    return a == ld_d ? "" : ld_h(a)
};
ld_.b.yc = function (a) {
    return ld_p[ld_G][ld_4][ld_S](arguments, "")
};
ld_.b.tb = function () {
    var a = 2147483648;
    return ld_o[ld_L](ld_o[ld_W]() * a)[ld_C](36) + ld_o.abs(ld_o[ld_L](ld_o[ld_W]() * a) ^ ld_.now())[ld_C](36)
};
ld_.b.Lb = function (a, b) {
    for (var c = 0, d = ld_.b.Qb(ld_h(a))[ld_K]("."), e = ld_.b.Qb(ld_h(b))[ld_K]("."), f = ld_o.max(d[ld_E], e[ld_E]), g = 0; 0 == c && g < f; g++) {
        var h = d[g] || "", i = e[g] || "", j = ld_n("(\\d*)(\\D*)", "g"), m = ld_n("(\\d*)(\\D*)", "g");
        do {
            var k = j.exec(h) || ["", "", ""], l = m.exec(i) || ["", "", ""];
            if (0 == k[0][ld_E] && 0 == l[0][ld_E])break;
            var c = 0 == k[1][ld_E] ? 0 : ld_g(k[1], 10), n = 0 == l[1][ld_E] ? 0 : ld_g(l[1], 10), c = ld_.b.db(c, n) || ld_.b.db(0 == k[2][ld_E], 0 == l[2][ld_E]) || ld_.b.db(k[2], l[2])
        } while (0 == c)
    }
    return c
};
ld_.b.db = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};
ld_.b.kd = 4294967296;
ld_.b.Cf = function (a) {
    for (var b = 0, c = 0; c < a[ld_E]; ++c)b = 31 * b + a[ld_Y](c), b %= ld_.b.kd;
    return b
};
ld_.b.od = 2147483648 * ld_o[ld_W]() | 0;
ld_.b.ef = function () {
    return "goog_" + ld_.b.od++
};
ld_.b.tg = function (a) {
    var b = ld_i(a);
    return 0 == b && ld_.b.C(a) ? NaN : b
};
ld_.b.rg = function (a) {
    return ld_h(a)[ld_J](/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
};
ld_.b.ug = function (a) {
    return ld_h(a)[ld_J](/([A-Z])/g, "-$1")[ld_6]()
};
ld_.b.vg = function (a, b) {
    var c = ld_.j(b) ? ld_.b.$a(b) : "\\s", c = c ? "|[" + c + "]+" : "", c = ld_n("(^" + c + ")([a-z])", "g");
    return a[ld_J](c, function (a, b, c) {
        return b + c.toUpperCase()
    })
};
ld_.b.Zf = function (a) {
    isFinite(a) && (a = ld_h(a));
    return ld_.j(a) ? /^\s*-?0x/i[ld_H](a) ? ld_g(a, 16) : ld_g(a, 10) : NaN
};
ld_.g = {};
ld_.g.K = ld_.Na;
ld_.g.Ka = function (a, b) {
    b[ld_5](a);
    ld_.da.ta[ld_S](this, ld_.b.cd[ld_1](ld_d, b));
    b.shift()
};
ld_.Qa(ld_.g.Ka, ld_.da.ta);
ld_.g.Ka[ld_G].name = "AssertionError";
ld_.g.O = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
    ld_a(new ld_.g.Ka("" + e, f || []))
};
ld_.g.v = function (a, b, c) {
    ld_.g.K && !a && ld_.g.O("", ld_d, b, ld_p[ld_G][ld_I][ld_S](arguments, 2));
    return a
};
ld_.g.jf = function (a, b) {
    ld_.g.K && ld_a(new ld_.g.Ka("Failure" + (a ? ": " + a : ""), ld_p[ld_G][ld_I][ld_S](arguments, 1)))
};
ld_.g.Je = function (a, b, c) {
    ld_.g.K && !ld_.Gd(a) && ld_.g.O("Expected number but got %s: %s.", [ld_.G(a), a], b, ld_p[ld_G][ld_I][ld_S](arguments, 2));
    return a
};
ld_.g.Le = function (a, b, c) {
    ld_.g.K && !ld_.j(a) && ld_.g.O("Expected string but got %s: %s.", [ld_.G(a), a], b, ld_p[ld_G][ld_I][ld_S](arguments, 2));
    return a
};
ld_.g.He = function (a, b, c) {
    ld_.g.K && !ld_.Fd(a) && ld_.g.O("Expected function but got %s: %s.", [ld_.G(a), a], b, ld_p[ld_G][ld_I][ld_S](arguments, 2));
    return a
};
ld_.g.Ke = function (a, b, c) {
    ld_.g.K && !ld_.gb(a) && ld_.g.O("Expected object but got %s: %s.", [ld_.G(a), a], b, ld_p[ld_G][ld_I][ld_S](arguments, 2));
    return a
};
ld_.g.vc = function (a, b, c) {
    ld_.g.K && !ld_.L(a) && ld_.g.O("Expected array but got %s: %s.", [ld_.G(a), a], b, ld_p[ld_G][ld_I][ld_S](arguments, 2));
    return a
};
ld_.g.Ge = function (a, b, c) {
    ld_.g.K && !ld_.Ed(a) && ld_.g.O("Expected boolean but got %s: %s.", [ld_.G(a), a], b, ld_p[ld_G][ld_I][ld_S](arguments, 2));
    return a
};
ld_.g.Ie = function (a, b, c, d) {
    ld_.g.K && !(a instanceof b) && ld_.g.O("instanceof check failed.", ld_d, c, ld_p[ld_G][ld_I][ld_S](arguments, 3));
    return a
};
ld_.d = {};
ld_.X = ld_c;
ld_.d.peek = function (a) {
    return a[a[ld_E] - 1]
};
ld_.d.m = ld_p[ld_G];
ld_.d.indexOf = ld_.X && ld_.d.m[ld_R] ? function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    return ld_.d.m[ld_R][ld_S](a, b, c)
} : function (a, b, c) {
    c = c == ld_d ? 0 : 0 > c ? ld_o.max(0, a[ld_E] + c) : c;
    if (ld_.j(a))return !ld_.j(b) || 1 != b[ld_E] ? -1 : a[ld_R](b, c);
    for (; c < a[ld_E]; c++)if (c in a && a[c] === b)return c;
    return -1
};
ld_.d.lastIndexOf = ld_.X && ld_.d.m[ld_V] ? function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    c = c == ld_d ? a[ld_E] - 1 : c;
    return ld_.d.m[ld_V][ld_S](a, b, c)
} : function (a, b, c) {
    c = c == ld_d ? a[ld_E] - 1 : c;
    0 > c && (c = ld_o.max(0, a[ld_E] + c));
    if (ld_.j(a))return !ld_.j(b) || 1 != b[ld_E] ? -1 : a[ld_V](b, c);
    for (; 0 <= c; c--)if (c in a && a[c] === b)return c;
    return -1
};
ld_u(ld_.d, ld_.X && ld_.d.m[ld_X] ? function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    ld_.d.m[ld_X][ld_S](a, b, c)
} : function (a, b, c) {
    for (var d = a[ld_E], e = ld_.j(a) ? a[ld_K]("") : a, f = 0; f < d; f++)f in e && b[ld_S](c, e[f], f, a)
});
ld_.d.qd = function (a, b, c) {
    for (var d = a[ld_E], e = ld_.j(a) ? a[ld_K]("") : a, d = d - 1; 0 <= d; --d)d in e && b[ld_S](c, e[d], d, a)
};
ld_q(ld_.d, ld_.X && ld_.d.m[ld_B] ? function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    return ld_.d.m[ld_B][ld_S](a, b, c)
} : function (a, b, c) {
    for (var d = a[ld_E], e = [], f = 0, g = ld_.j(a) ? a[ld_K]("") : a, h = 0; h < d; h++)if (h in g) {
        var i = g[h];
        b[ld_S](c, i, h, a) && (e[f++] = i)
    }
    return e
});
ld_.d.map = ld_.X && ld_.d.m.map ? function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    return ld_.d.m.map[ld_S](a, b, c)
} : function (a, b, c) {
    for (var d = a[ld_E], e = ld_p(d), f = ld_.j(a) ? a[ld_K]("") : a, g = 0; g < d; g++)g in f && (e[g] = b[ld_S](c, f[g], g, a));
    return e
};
ld_.d.reduce = function (a, b, c, d) {
    if (a.reduce)return d ? a.reduce(ld_[ld_2](b, d), c) : a.reduce(b, c);
    var e = c;
    ld_.d[ld_X](a, function (c, g) {
        e = b[ld_S](d, e, c, g, a)
    });
    return e
};
ld_.d.reduceRight = function (a, b, c, d) {
    if (a.reduceRight)return d ? a.reduceRight(ld_[ld_2](b, d), c) : a.reduceRight(b, c);
    var e = c;
    ld_.d.qd(a, function (c, g) {
        e = b[ld_S](d, e, c, g, a)
    });
    return e
};
ld_t(ld_.d, ld_.X && ld_.d.m[ld_U] ? function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    return ld_.d.m[ld_U][ld_S](a, b, c)
} : function (a, b, c) {
    for (var d = a[ld_E], e = ld_.j(a) ? a[ld_K]("") : a, f = 0; f < d; f++)if (f in e && b[ld_S](c, e[f], f, a))return ld_c;
    return ld_e
});
ld_v(ld_.d, ld_.X && ld_.d.m[ld__] ? function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    return ld_.d.m[ld__][ld_S](a, b, c)
} : function (a, b, c) {
    for (var d = a[ld_E], e = ld_.j(a) ? a[ld_K]("") : a, f = 0; f < d; f++)if (f in e && !b[ld_S](c, e[f], f, a))return ld_e;
    return ld_c
});
ld_.d.kf = function (a, b, c) {
    b = ld_.d.Gb(a, b, c);
    return 0 > b ? ld_d : ld_.j(a) ? a[ld_O](b) : a[b]
};
ld_.d.Gb = function (a, b, c) {
    for (var d = a[ld_E], e = ld_.j(a) ? a[ld_K]("") : a, f = 0; f < d; f++)if (f in e && b[ld_S](c, e[f], f, a))return f;
    return -1
};
ld_.d.lf = function (a, b, c) {
    b = ld_.d.ad(a, b, c);
    return 0 > b ? ld_d : ld_.j(a) ? a[ld_O](b) : a[b]
};
ld_.d.ad = function (a, b, c) {
    for (var d = a[ld_E], e = ld_.j(a) ? a[ld_K]("") : a, d = d - 1; 0 <= d; d--)if (d in e && b[ld_S](c, e[d], d, a))return d;
    return -1
};
ld_w(ld_.d, function (a, b) {
    return 0 <= ld_.d[ld_R](a, b)
});
ld_.d.C = function (a) {
    return 0 == a[ld_E]
};
ld_x(ld_.d, function (a) {
    if (!ld_.L(a))for (var b = a[ld_E] - 1; 0 <= b; b--)delete a[b];
    ld_r(a, 0)
});
ld_.d.Ef = function (a, b) {
    ld_.d[ld_0](a, b) || a[ld_z](b)
};
ld_.d.Wb = function (a, b, c) {
    ld_.d[ld_3](a, c, 0, b)
};
ld_.d.Ff = function (a, b, c) {
    ld_.Xb(ld_.d[ld_3], a, c, 0)[ld_1](ld_d, b)
};
ld_.d.insertBefore = function (a, b, c) {
    var d;
    2 == arguments[ld_E] || 0 > (d = ld_.d[ld_R](a, c)) ? a[ld_z](b) : ld_.d.Wb(a, b, d)
};
ld_s(ld_.d, function (a, b) {
    var c = ld_.d[ld_R](a, b), d;
    (d = 0 <= c) && ld_.d.Ja(a, c);
    return d
});
ld_.d.Ja = function (a, b) {
    ld_.g.v(a[ld_E] != ld_d);
    return 1 == ld_.d.m[ld_3][ld_S](a, b, 1)[ld_E]
};
ld_.d.eg = function (a, b, c) {
    b = ld_.d.Gb(a, b, c);
    return 0 <= b ? (ld_.d.Ja(a, b), ld_c) : ld_e
};
ld_.d.concat = function (a) {
    return ld_.d.m[ld_M][ld_1](ld_.d.m, arguments)
};
ld_.d.Ga = function (a) {
    var b = a[ld_E];
    if (0 < b) {
        for (var c = ld_p(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return []
};
ld_.d.z = ld_.d.Ga;
ld_.d.extend = function (a, b) {
    for (var c = 1; c < arguments[ld_E]; c++) {
        var d = arguments[c], e;
        if (ld_.L(d) || (e = ld_.q(d)) && d[ld_ba]("callee"))a[ld_z][ld_1](a, d); else if (e)for (var f = a[ld_E], g = d[ld_E], h = 0; h < g; h++)a[f + h] = d[h]; else a[ld_z](d)
    }
};
ld_.d.splice = function (a, b, c, d) {
    ld_.g.v(a[ld_E] != ld_d);
    return ld_.d.m[ld_3][ld_1](a, ld_.d[ld_I](arguments, 1))
};
ld_.d.slice = function (a, b, c) {
    ld_.g.v(a[ld_E] != ld_d);
    return 2 >= arguments[ld_E] ? ld_.d.m[ld_I][ld_S](a, b) : ld_.d.m[ld_I][ld_S](a, b, c)
};
ld_.d.cg = function (a, b) {
    for (var c = b || a, d = {}, e = 0, f = 0; f < a[ld_E];) {
        var g = a[f++], h = ld_.gb(g) ? "o" + ld_.gc(g) : (typeof g)[ld_O](0) + g;
        ld_k[ld_G][ld_ba][ld_S](d, h) || (d[h] = ld_c, c[e++] = g)
    }
    ld_r(c, e)
};
ld_.d.Sb = function (a, b, c) {
    return ld_.d.Ub(a, c || ld_.d.U, ld_e, b)
};
ld_.d.Qe = function (a, b, c) {
    return ld_.d.Ub(a, b, ld_c, ld_b, c)
};
ld_.d.Ub = function (a, b, c, d, e) {
    for (var f = 0, g = a[ld_E], h; f < g;) {
        var i = f + g >> 1, j;
        j = c ? b[ld_S](e, a[i], i, a) : b(d, a[i]);
        0 < j ? f = i + 1 : (g = i, h = !j)
    }
    return h ? f : ~f
};
ld_.d.sort = function (a, b) {
    ld_.g.v(a[ld_E] != ld_d);
    ld_.d.m.sort[ld_S](a, b || ld_.d.U)
};
ld_.d.ng = function (a, b) {
    function c(a, b) {
        return e(a.value, b.value) || a.index - b.index
    }

    for (var d = 0; d < a[ld_E]; d++)a[d] = {index: d, value: a[d]};
    var e = b || ld_.d.U;
    ld_.d.sort(a, c);
    for (d = 0; d < a[ld_E]; d++)a[d] = a[d].value
};
ld_.d.mg = function (a, b, c) {
    var d = c || ld_.d.U;
    ld_.d.sort(a, function (a, c) {
        return d(a[b], c[b])
    })
};
ld_.d.Pf = function (a, b, c) {
    for (var b = b || ld_.d.U, d = 1; d < a[ld_E]; d++) {
        var e = b(a[d - 1], a[d]);
        if (0 < e || 0 == e && c)return ld_e
    }
    return ld_c
};
ld_.d.eb = function (a, b, c) {
    if (!ld_.q(a) || !ld_.q(b) || a[ld_E] != b[ld_E])return ld_e;
    for (var d = a[ld_E], c = c || ld_.d.gd, e = 0; e < d; e++)if (!c(a[e], b[e]))return ld_e;
    return ld_c
};
ld_.d.Yd = function (a, b, c) {
    return ld_.d.eb(a, b, c)
};
ld_.d.$e = function (a, b, c) {
    for (var c = c || ld_.d.U, d = ld_o.min(a[ld_E], b[ld_E]), e = 0; e < d; e++) {
        var f = c(a[e], b[e]);
        if (0 != f)return f
    }
    return ld_.d.U(a[ld_E], b[ld_E])
};
ld_.d.U = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0
};
ld_.d.gd = function (a, b) {
    return a === b
};
ld_.d.Oe = function (a, b, c) {
    c = ld_.d.Sb(a, b, c);
    return 0 > c ? (ld_.d.Wb(a, b, -(c + 1)), ld_c) : ld_e
};
ld_.d.Pe = function (a, b, c) {
    b = ld_.d.Sb(a, b, c);
    return 0 <= b ? ld_.d.Ja(a, b) : ld_e
};
ld_.d.Re = function (a, b) {
    for (var c = {}, d = 0; d < a[ld_E]; d++) {
        var e = a[d], f = b(e, d, a);
        ld_.ka(f) && (f = c[f] || (c[f] = []), f[ld_z](e))
    }
    return c
};
ld_.d.me = function (a, b, c) {
    var d = {};
    ld_.d[ld_X](a, function (e, f) {
        d[b[ld_S](c, e, f, a)] = e
    });
    return d
};
ld_.d.repeat = function (a, b) {
    for (var c = [], d = 0; d < b; d++)c[d] = a;
    return c
};
ld_.d.md = function (a) {
    for (var b = [], c = 0; c < arguments[ld_E]; c++) {
        var d = arguments[c];
        ld_.L(d) ? b[ld_z][ld_1](b, ld_.d.md[ld_1](ld_d, d)) : b[ld_z](d)
    }
    return b
};
ld_.d.rotate = function (a, b) {
    ld_.g.v(a[ld_E] != ld_d);
    a[ld_E] && (b %= a[ld_E], 0 < b ? ld_.d.m[ld_5][ld_1](a, a[ld_3](-b, b)) : 0 > b && ld_.d.m[ld_z][ld_1](a, a[ld_3](0, -b)));
    return a
};
ld_.d.Cg = function (a) {
    if (!arguments[ld_E])return [];
    for (var b = [], c = 0; ; c++) {
        for (var d = [], e = 0; e < arguments[ld_E]; e++) {
            var f = arguments[e];
            if (c >= f[ld_E])return b;
            d[ld_z](f[c])
        }
        b[ld_z](d)
    }
};
ld_.d.lg = function (a, b) {
    for (var c = b || ld_o[ld_W], d = a[ld_E] - 1; 0 < d; d--) {
        var e = ld_o[ld_L](c() * (d + 1)), f = a[d];
        a[d] = a[e];
        a[e] = f
    }
};
ld_.e = {};
ld_.e.s = "StopIteration"in ld_[ld_D] ? ld_[ld_D].StopIteration : ld_f("StopIteration");
ld_.e.w = function () {
};
ld_.e.w[ld_G].k = function () {
    ld_a(ld_.e.s)
};
ld_.e.w[ld_G].cb = function () {
    return this
};
ld_.e.A = function (a) {
    if (a instanceof ld_.e.w)return a;
    if ("function" == typeof a.cb)return a.cb(ld_e);
    if (ld_.q(a)) {
        var b = 0, c = new ld_.e.w;
        c.k = function () {
            for (; ;) {
                b >= a[ld_E] && ld_a(ld_.e.s);
                if (b in a)return a[b++];
                b++
            }
        };
        return c
    }
    ld_a(ld_f("Not implemented"))
};
ld_u(ld_.e, function (a, b, c) {
    if (ld_.q(a))try {
        ld_.d[ld_X](a, b, c)
    } catch (d) {
        d !== ld_.e.s && ld_a(d)
    } else {
        a = ld_.e.A(a);
        try {
            for (; ;)b[ld_S](c, a.k(), ld_b, a)
        } catch (e) {
            e !== ld_.e.s && ld_a(e)
        }
    }
});
ld_q(ld_.e, function (a, b, c) {
    var d = ld_.e.A(a), a = new ld_.e.w;
    a.k = function () {
        for (; ;) {
            var a = d.k();
            if (b[ld_S](c, a, ld_b, d))return a
        }
    };
    return a
});
ld_.e.ag = function (a, b, c) {
    var d = 0, e = a, f = c || 1;
    1 < arguments[ld_E] && (d = a, e = b);
    0 == f && ld_a(ld_f("Range step argument must not be zero"));
    var g = new ld_.e.w;
    g.k = function () {
        (f > 0 && d >= e || f < 0 && d <= e) && ld_a(ld_.e.s);
        var a = d;
        d = d + f;
        return a
    };
    return g
};
ld_.e.join = function (a, b) {
    return ld_.e.Ga(a)[ld_4](b)
};
ld_.e.map = function (a, b, c) {
    var d = ld_.e.A(a), a = new ld_.e.w;
    a.k = function () {
        for (; ;) {
            var a = d.k();
            return b[ld_S](c, a, ld_b, d)
        }
    };
    return a
};
ld_.e.reduce = function (a, b, c, d) {
    var e = c;
    ld_.e[ld_X](a, function (a) {
        e = b[ld_S](d, e, a)
    });
    return e
};
ld_t(ld_.e, function (a, b, c) {
    a = ld_.e.A(a);
    try {
        for (; ;)if (b[ld_S](c, a.k(), ld_b, a))return ld_c
    } catch (d) {
        d !== ld_.e.s && ld_a(d)
    }
    return ld_e
});
ld_v(ld_.e, function (a, b, c) {
    a = ld_.e.A(a);
    try {
        for (; ;)if (!b[ld_S](c, a.k(), ld_b, a))return ld_e
    } catch (d) {
        d !== ld_.e.s && ld_a(d)
    }
    return ld_c
});
ld_.e.Xe = function (a) {
    var b = arguments, c = b[ld_E], d = 0, e = new ld_.e.w;
    e.k = function () {
        try {
            d >= c && ld_a(ld_.e.s);
            var a = ld_.e.A(b[d]);
            return a.k()
        } catch (e) {
            return (e !== ld_.e.s || d >= c) && ld_a(e), d++, this.k()
        }
    };
    return e
};
ld_.e.gf = function (a, b, c) {
    var d = ld_.e.A(a), a = new ld_.e.w, e = ld_c;
    a.k = function () {
        for (; ;) {
            var a = d.k();
            if (!e || !b[ld_S](c, a, ld_b, d))return e = ld_e, a
        }
    };
    return a
};
ld_.e.qg = function (a, b, c) {
    var d = ld_.e.A(a), a = new ld_.e.w, e = ld_c;
    a.k = function () {
        for (; ;)if (e) {
            var a = d.k();
            if (b[ld_S](c, a, ld_b, d))return a;
            e = ld_e
        } else ld_a(ld_.e.s)
    };
    return a
};
ld_.e.Ga = function (a) {
    if (ld_.q(a))return ld_.d.Ga(a);
    var a = ld_.e.A(a), b = [];
    ld_.e[ld_X](a, function (a) {
        b[ld_z](a)
    });
    return b
};
ld_.e.eb = function (a, b) {
    var a = ld_.e.A(a), b = ld_.e.A(b), c, d;
    try {
        for (; ;) {
            c = d = ld_e;
            var e = a.k();
            c = ld_c;
            var f = b.k();
            d = ld_c;
            if (e != f)break
        }
    } catch (g) {
        g !== ld_.e.s && ld_a(g);
        if (c && !d)return ld_e;
        if (!d)try {
            b.k()
        } catch (h) {
            return h !== ld_.e.s && ld_a(h), ld_c
        }
    }
    return ld_e
};
ld_.e.Tf = function (a, b) {
    try {
        return ld_.e.A(a).k()
    } catch (c) {
        return c != ld_.e.s && ld_a(c), b
    }
};
ld_.e.product = function (a) {
    var b = ld_.d[ld_U](arguments, function (a) {
        return !a[ld_E]
    });
    if (b || !arguments[ld_E])return new ld_.e.w;
    var b = new ld_.e.w, c = arguments, d = ld_.d.repeat(0, c[ld_E]);
    b.k = function () {
        if (d) {
            for (var a = ld_.d.map(d, function (a, b) {
                return c[b][a]
            }), b = d[ld_E] - 1; 0 <= b; b--) {
                ld_.g.v(d);
                if (d[b] < c[b][ld_E] - 1) {
                    d[b]++;
                    break
                }
                if (0 == b) {
                    d = ld_d;
                    break
                }
                d[b] = 0
            }
            return a
        }
        ld_a(ld_.e.s)
    };
    return b
};
ld_.e.ff = function (a) {
    var b = ld_.e.A(a), c = [], d = 0, a = new ld_.e.w, e = ld_e;
    a.k = function () {
        var a = ld_d;
        if (!e)try {
            return a = b.k(), c[ld_z](a), a
        } catch (g) {
            (g != ld_.e.s || ld_.d.C(c)) && ld_a(g), e = ld_c
        }
        a = c[d];
        d = (d + 1) % c[ld_E];
        return a
    };
    return a
};
ld_.object = {};
ld_u(ld_[ld_A], function (a, b, c) {
    for (var d in a)b[ld_S](c, a[d], d, a)
});
ld_q(ld_[ld_A], function (a, b, c) {
    var d = {}, e;
    for (e in a)b[ld_S](c, a[e], e, a) && (d[e] = a[e]);
    return d
});
ld_[ld_A].map = function (a, b, c) {
    var d = {}, e;
    for (e in a)d[e] = b[ld_S](c, a[e], e, a);
    return d
};
ld_t(ld_[ld_A], function (a, b, c) {
    for (var d in a)if (b[ld_S](c, a[d], d, a))return ld_c;
    return ld_e
});
ld_v(ld_[ld_A], function (a, b, c) {
    for (var d in a)if (!b[ld_S](c, a[d], d, a))return ld_e;
    return ld_c
});
ld_[ld_A].V = function (a) {
    var b = 0, c;
    for (c in a)b++;
    return b
};
ld_[ld_A].nf = function (a) {
    for (var b in a)return b
};
ld_[ld_A].of = function (a) {
    for (var b in a)return a[b]
};
ld_w(ld_[ld_A], function (a, b) {
    return ld_[ld_A].ca(a, b)
});
ld_[ld_A].p = function (a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
};
ld_[ld_A].r = function (a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = d;
    return b
};
ld_[ld_A].yf = function (a, b) {
    for (var c = ld_.q(b), d = c ? b : arguments, c = c ? 0 : 1; c < d[ld_E] && !(a = a[d[c]], !ld_.ka(a)); c++);
    return a
};
ld_[ld_A].ba = function (a, b) {
    return b in a
};
ld_[ld_A].ca = function (a, b) {
    for (var c in a)if (a[c] == b)return ld_c;
    return ld_e
};
ld_[ld_A].be = function (a, b, c) {
    for (var d in a)if (b[ld_S](c, a[d], d, a))return d
};
ld_[ld_A].mf = function (a, b, c) {
    return (b = ld_[ld_A].be(a, b, c)) && a[b]
};
ld_[ld_A].C = function (a) {
    for (var b in a)return ld_e;
    return ld_c
};
ld_x(ld_[ld_A], function (a) {
    for (var b in a)delete a[b]
});
ld_s(ld_[ld_A], function (a, b) {
    var c;
    (c = b in a) && delete a[b];
    return c
});
ld_[ld_A].add = function (a, b, c) {
    b in a && ld_a(ld_f('The object already contains the key "' + b + '"'));
    ld_[ld_A].H(a, b, c)
};
ld_[ld_A].N = function (a, b, c) {
    return b in a ? a[b] : c
};
ld_[ld_A].H = function (a, b, c) {
    a[b] = c
};
ld_[ld_A].jg = function (a, b, c) {
    return b in a ? a[b] : a[b] = c
};
ld_[ld_A].z = function (a) {
    var b = {}, c;
    for (c in a)b[c] = a[c];
    return b
};
ld_[ld_A].Jd = function (a) {
    var b = ld_.G(a);
    if ("object" == b || "array" == b) {
        if (a.z)return a.z();
        var b = "array" == b ? [] : {}, c;
        for (c in a)b[c] = ld_[ld_A].Jd(a[c]);
        return b
    }
    return a
};
ld_[ld_A].ne = function (a) {
    var b = {}, c;
    for (c in a)b[a[c]] = c;
    return b
};
ld_[ld_A].rc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
ld_[ld_A].extend = function (a, b) {
    for (var c, d, e = 1; e < arguments[ld_E]; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < ld_[ld_A].rc[ld_E]; f++)c = ld_[ld_A].rc[f], ld_k[ld_G][ld_ba][ld_S](d, c) && (a[c] = d[c])
    }
};
ld_[ld_A].nb = function (a) {
    var b = arguments[ld_E];
    if (1 == b && ld_.L(arguments[0]))return ld_[ld_A].nb[ld_1](ld_d, arguments[0]);
    b % 2 && ld_a(ld_f("Uneven number of arguments"));
    for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
    return c
};
ld_[ld_A].Qd = function (a) {
    var b = arguments[ld_E];
    if (1 == b && ld_.L(arguments[0]))return ld_[ld_A].Qd[ld_1](ld_d, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)c[arguments[d]] = ld_c;
    return c
};
ld_[ld_A].df = function (a) {
    var b = a;
    ld_k.ob && !ld_k.ob(a) && (b = ld_k.nb(a), ld_k.pe(b));
    return b
};
ld_[ld_A].Mf = function (a) {
    return !!ld_k.ob && ld_k.ob(a)
};
ld_.h = {};
ld_.h.V = function (a) {
    return "function" == typeof a.V ? a.V() : ld_.q(a) || ld_.j(a) ? a[ld_E] : ld_[ld_A].V(a)
};
ld_.h.p = function (a) {
    if ("function" == typeof a.p)return a.p();
    if (ld_.j(a))return a[ld_K]("");
    if (ld_.q(a)) {
        for (var b = [], c = a[ld_E], d = 0; d < c; d++)b[ld_z](a[d]);
        return b
    }
    return ld_[ld_A].p(a)
};
ld_.h.r = function (a) {
    if ("function" == typeof a.r)return a.r();
    if ("function" != typeof a.p) {
        if (ld_.q(a) || ld_.j(a)) {
            for (var b = [], a = a[ld_E], c = 0; c < a; c++)b[ld_z](c);
            return b
        }
        return ld_[ld_A].r(a)
    }
};
ld_w(ld_.h, function (a, b) {
    return "function" == typeof a[ld_0] ? a[ld_0](b) : "function" == typeof a.ca ? a.ca(b) : ld_.q(a) || ld_.j(a) ? ld_.d[ld_0](a, b) : ld_[ld_A].ca(a, b)
});
ld_.h.C = function (a) {
    return "function" == typeof a.C ? a.C() : ld_.q(a) || ld_.j(a) ? ld_.d.C(a) : ld_[ld_A].C(a)
};
ld_x(ld_.h, function (a) {
    "function" == typeof a[ld_da] ? a[ld_da]() : ld_.q(a) ? ld_.d[ld_da](a) : ld_[ld_A][ld_da](a)
});
ld_u(ld_.h, function (a, b, c) {
    if ("function" == typeof a[ld_X])a[ld_X](b, c); else if (ld_.q(a) || ld_.j(a))ld_.d[ld_X](a, b, c); else for (var d = ld_.h.r(a), e = ld_.h.p(a), f = e[ld_E], g = 0; g < f; g++)b[ld_S](c, e[g], d && d[g], a)
});
ld_q(ld_.h, function (a, b, c) {
    if ("function" == typeof a[ld_B])return a[ld_B](b, c);
    if (ld_.q(a) || ld_.j(a))return ld_.d[ld_B](a, b, c);
    var d, e = ld_.h.r(a), f = ld_.h.p(a), g = f[ld_E];
    if (e) {
        d = {};
        for (var h = 0; h < g; h++)b[ld_S](c, f[h], e[h], a) && (d[e[h]] = f[h])
    } else {
        d = [];
        for (h = 0; h < g; h++)b[ld_S](c, f[h], ld_b, a) && d[ld_z](f[h])
    }
    return d
});
ld_.h.map = function (a, b, c) {
    if ("function" == typeof a.map)return a.map(b, c);
    if (ld_.q(a) || ld_.j(a))return ld_.d.map(a, b, c);
    var d, e = ld_.h.r(a), f = ld_.h.p(a), g = f[ld_E];
    if (e) {
        d = {};
        for (var h = 0; h < g; h++)d[e[h]] = b[ld_S](c, f[h], e[h], a)
    } else {
        d = [];
        for (h = 0; h < g; h++)d[h] = b[ld_S](c, f[h], ld_b, a)
    }
    return d
};
ld_t(ld_.h, function (a, b, c) {
    if ("function" == typeof a[ld_U])return a[ld_U](b, c);
    if (ld_.q(a) || ld_.j(a))return ld_.d[ld_U](a, b, c);
    for (var d = ld_.h.r(a), e = ld_.h.p(a), f = e[ld_E], g = 0; g < f; g++)if (b[ld_S](c, e[g], d && d[g], a))return ld_c;
    return ld_e
});
ld_v(ld_.h, function (a, b, c) {
    if ("function" == typeof a[ld__])return a[ld__](b, c);
    if (ld_.q(a) || ld_.j(a))return ld_.d[ld__](a, b, c);
    for (var d = ld_.h.r(a), e = ld_.h.p(a), f = e[ld_E], g = 0; g < f; g++)if (!b[ld_S](c, e[g], d && d[g], a))return ld_e;
    return ld_c
});
ld_.h.t = function (a, b) {
    this.u = {};
    this.l = [];
    var c = arguments[ld_E];
    if (1 < c) {
        c % 2 && ld_a(ld_f("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2)this.H(arguments[d], arguments[d + 1])
    } else a && this.Hd(a)
};
ld_8 = ld_.h.t[ld_G];
ld_8.o = 0;
ld_8.sa = 0;
ld_8.V = function () {
    return this.o
};
ld_8.p = function () {
    this.aa();
    for (var a = [], b = 0; b < this.l[ld_E]; b++) {
        var c = this.l[b];
        a[ld_z](this.u[c])
    }
    return a
};
ld_8.r = function () {
    this.aa();
    return this.l[ld_M]()
};
ld_8.ba = function (a) {
    return ld_.h.t.W(this.u, a)
};
ld_8.ca = function (a) {
    for (var b = 0; b < this.l[ld_E]; b++) {
        var c = this.l[b];
        if (ld_.h.t.W(this.u, c) && this.u[c] == a)return ld_c
    }
    return ld_e
};
ld_8.eb = function (a, b) {
    if (this === a)return ld_c;
    if (this.o != a.V())return ld_e;
    var c = b || ld_.h.t.pd;
    this.aa();
    for (var d, e = 0; d = this.l[e]; e++)if (!c(this.N(d), a.N(d)))return ld_e;
    return ld_c
};
ld_.h.t.pd = function (a, b) {
    return a === b
};
ld_8 = ld_.h.t[ld_G];
ld_8.C = function () {
    return 0 == this.o
};
ld_x(ld_8, function () {
    this.u = {};
    ld_r(this.l, 0);
    this.sa = this.o = 0
});
ld_s(ld_8, function (a) {
    return ld_.h.t.W(this.u, a) ? (delete this.u[a], this.o--, this.sa++, this.l[ld_E] > 2 * this.o && this.aa(), ld_c) : ld_e
});
ld_8.aa = function () {
    if (this.o != this.l[ld_E]) {
        for (var a = 0, b = 0; a < this.l[ld_E];) {
            var c = this.l[a];
            ld_.h.t.W(this.u, c) && (this.l[b++] = c);
            a++
        }
        ld_r(this.l, b)
    }
    if (this.o != this.l[ld_E]) {
        for (var d = {}, b = a = 0; a < this.l[ld_E];)c = this.l[a], ld_.h.t.W(d, c) || (this.l[b++] = c, d[c] = 1), a++;
        ld_r(this.l, b)
    }
};
ld_8.N = function (a, b) {
    return ld_.h.t.W(this.u, a) ? this.u[a] : b
};
ld_8.H = function (a, b) {
    ld_.h.t.W(this.u, a) || (this.o++, this.l[ld_z](a), this.sa++);
    this.u[a] = b
};
ld_8.Hd = function (a) {
    var b;
    a instanceof ld_.h.t ? (b = a.r(), a = a.p()) : (b = ld_[ld_A].r(a), a = ld_[ld_A].p(a));
    for (var c = 0; c < b[ld_E]; c++)this.H(b[c], a[c])
};
ld_8.z = function () {
    return new ld_.h.t(this)
};
ld_8.ne = function () {
    for (var a = new ld_.h.t, b = 0; b < this.l[ld_E]; b++) {
        var c = this.l[b], d = this.u[c];
        a.H(d, c)
    }
    return a
};
ld_8.me = function () {
    this.aa();
    for (var a = {}, b = 0; b < this.l[ld_E]; b++) {
        var c = this.l[b];
        a[c] = this.u[c]
    }
    return a
};
ld_8.cb = function (a) {
    this.aa();
    var b = 0, c = this.l, d = this.u, e = this.sa, f = this, g = new ld_.e.w;
    g.k = function () {
        for (; ;) {
            e != f.sa && ld_a(ld_f("The map has changed since the iterator was created"));
            b >= c[ld_E] && ld_a(ld_.e.s);
            var g = c[b++];
            return a ? g : d[g]
        }
    };
    return g
};
ld_.h.t.W = function (a, b) {
    return ld_k[ld_G][ld_ba][ld_S](a, b)
};
ld_.userAgent = {};
ld_[ld_P].kc = ld_e;
ld_[ld_P].jc = ld_e;
ld_[ld_P].oc = ld_e;
ld_[ld_P].pb = ld_e;
ld_[ld_P].nc = ld_e;
ld_[ld_P].ed = ld_e;
ld_[ld_P].ha = ld_[ld_P].kc || ld_[ld_P].jc || ld_[ld_P].pb || ld_[ld_P].oc || ld_[ld_P].nc;
ld_[ld_P].Zb = function () {
    return ld_[ld_D].navigator ? ld_[ld_D].navigator[ld_P] : ld_d
};
ld_[ld_P].Ha = function () {
    return ld_[ld_D].navigator
};
ld_[ld_P].fe = function () {
    ld_[ld_P].ua = ld_e;
    ld_[ld_P].ac = ld_e;
    ld_[ld_P].La = ld_e;
    ld_[ld_P].bc = ld_e;
    ld_[ld_P].$b = ld_e;
    var a;
    if (!ld_[ld_P].ha && (a = ld_[ld_P].Zb())) {
        var b = ld_[ld_P].Ha();
        ld_[ld_P].ua = 0 == a[ld_R]("Opera");
        ld_[ld_P].ac = !ld_[ld_P].ua && -1 != a[ld_R]("MSIE");
        ld_[ld_P].La = !ld_[ld_P].ua && -1 != a[ld_R]("WebKit");
        ld_[ld_P].bc = ld_[ld_P].La && -1 != a[ld_R]("Mobile");
        ld_[ld_P].$b = !ld_[ld_P].ua && !ld_[ld_P].La && "Gecko" == b.product
    }
};
ld_[ld_P].ha || ld_[ld_P].fe();
ld_[ld_P].Md = ld_[ld_P].ha ? ld_[ld_P].nc : ld_[ld_P].ua;
ld_[ld_P].lb = ld_[ld_P].ha ? ld_[ld_P].kc : ld_[ld_P].ac;
ld_[ld_P].Ld = ld_[ld_P].ha ? ld_[ld_P].jc : ld_[ld_P].$b;
ld_[ld_P].mb = ld_[ld_P].ha ? ld_[ld_P].oc || ld_[ld_P].pb : ld_[ld_P].La;
ld_[ld_P].ue = ld_[ld_P].pb || ld_[ld_P].bc;
ld_[ld_P].we = ld_[ld_P].mb;
ld_[ld_P].Zd = function () {
    var a = ld_[ld_P].Ha();
    return a && a.platform || ""
};
ld_[ld_P].ab = ld_[ld_P].Zd();
ld_[ld_P].mc = ld_e;
ld_[ld_P].pc = ld_e;
ld_[ld_P].lc = ld_e;
ld_[ld_P].qc = ld_e;
ld_[ld_P].va = ld_[ld_P].mc || ld_[ld_P].pc || ld_[ld_P].lc || ld_[ld_P].qc;
ld_[ld_P].ee = function () {
    ld_[ld_P].Yc = ld_.b[ld_0](ld_[ld_P].ab, "Mac");
    ld_[ld_P].Zc = ld_.b[ld_0](ld_[ld_P].ab, "Win");
    ld_[ld_P].Xc = ld_.b[ld_0](ld_[ld_P].ab, "Linux");
    ld_[ld_P].$c = !!ld_[ld_P].Ha() && ld_.b[ld_0](ld_[ld_P].Ha().appVersion || "", "X11")
};
ld_[ld_P].va || ld_[ld_P].ee();
ld_[ld_P].te = ld_[ld_P].va ? ld_[ld_P].mc : ld_[ld_P].Yc;
ld_[ld_P].ye = ld_[ld_P].va ? ld_[ld_P].pc : ld_[ld_P].Zc;
ld_[ld_P].re = ld_[ld_P].va ? ld_[ld_P].lc : ld_[ld_P].Xc;
ld_[ld_P].ze = ld_[ld_P].va ? ld_[ld_P].qc : ld_[ld_P].$c;
ld_[ld_P].$d = function () {
    var a = "", b;
    ld_[ld_P].Md && ld_[ld_D].opera ? (a = ld_[ld_D].opera.version, a = "function" == typeof a ? a() : a) : (ld_[ld_P].Ld ? b = /rv\:([^\);]+)(\)|;)/ : ld_[ld_P].lb ? b = /MSIE\s+([^\);]+)(\)|;)/ : ld_[ld_P].mb && (b = /WebKit\/(\S+)/), b && (a = (a = b.exec(ld_[ld_P].Zb())) ? a[1] : ""));
    return ld_[ld_P].lb && (b = ld_[ld_P].Nd(), b > parseFloat(a)) ? ld_h(b) : a
};
ld_[ld_P].Nd = function () {
    var a = ld_[ld_D].document;
    return a ? a.documentMode : ld_b
};
ld_[ld_P].fd = ld_[ld_P].$d();
ld_[ld_P].Yd = function (a, b) {
    return ld_.b.Lb(a, b)
};
ld_[ld_P].Mb = {};
ld_[ld_P].Sf = function (a) {
    return ld_[ld_P].ed || ld_[ld_P].Mb[a] || (ld_[ld_P].Mb[a] = 0 <= ld_.b.Lb(ld_[ld_P].fd, a))
};
ld_[ld_P].hc = {};
ld_[ld_P].Kf = function (a) {
    return ld_[ld_P].hc[a] || (ld_[ld_P].hc[a] = ld_[ld_P].lb && !!ld_l.documentMode && ld_l.documentMode >= a)
};
ld_.a = {};
ld_.a.c = {};
ld_.a.c.ra = {yb: 38, Ac: 61, Bc: 35, Cc: 63};
ld_.a.c.xb = function (a, b, c, d, e, f, g) {
    var h = [];
    a && h[ld_z](a, ":");
    c && (h[ld_z]("//"), b && h[ld_z](b, "@"), h[ld_z](c), d && h[ld_z](":", d));
    e && h[ld_z](e);
    f && h[ld_z]("?", f);
    g && h[ld_z]("#", g);
    return h[ld_4]("")
};
ld_.a.c.Lc = ld_n("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
ld_.a.c.i = {pa: 1, Sa: 2, R: 3, S: 4, Ta: 5, Ua: 6, rb: 7};
ld_.a.c.split = function (a) {
    ld_.a.c.Jc();
    return a.match(ld_.a.c.Lc)
};
ld_.a.c.Za = ld_[ld_P].mb;
ld_.a.c.Jc = function () {
    if (ld_.a.c.Za) {
        ld_.a.c.Za = ld_e;
        var a = ld_[ld_D][ld_Q];
        if (a) {
            var b = a.href;
            if (b && (b = ld_.a.c.ia(b)) && b != a.hostname)ld_.a.c.Za = ld_c, ld_a(ld_f())
        }
    }
};
ld_.a.c.Fa = function (a) {
    return a && ld_aa(a)
};
ld_.a.c.Z = function (a, b) {
    return ld_.a.c[ld_K](b)[a] || ld_d
};
ld_.a.c.ja = function (a) {
    return ld_.a.c.Z(ld_.a.c.i.pa, a)
};
ld_.a.c.qf = function (a) {
    a = ld_.a.c.ja(a);
    !a && self[ld_Q] && (a = self[ld_Q].protocol, a = a[ld_7](0, a[ld_E] - 1));
    return a ? a[ld_6]() : ""
};
ld_.a.c.Hc = function (a) {
    return ld_.a.c.Z(ld_.a.c.i.Sa, a)
};
ld_.a.c.ya = function (a) {
    return ld_.a.c.Fa(ld_.a.c.Hc(a))
};
ld_.a.c.Ec = function (a) {
    return ld_.a.c.Z(ld_.a.c.i.R, a)
};
ld_.a.c.ia = function (a) {
    return ld_.a.c.Fa(ld_.a.c.Ec(a))
};
ld_.a.c.xa = function (a) {
    return ld_i(ld_.a.c.Z(ld_.a.c.i.S, a)) || ld_d
};
ld_.a.c.Gc = function (a) {
    return ld_.a.c.Z(ld_.a.c.i.Ta, a)
};
ld_.a.c.Y = function (a) {
    return ld_.a.c.Fa(ld_.a.c.Gc(a))
};
ld_.a.c.sb = function (a) {
    return ld_.a.c.Z(ld_.a.c.i.Ua, a)
};
ld_.a.c.Fc = function (a) {
    var b = a[ld_R]("#");
    return 0 > b ? ld_d : a[ld_7](b + 1)
};
ld_.a.c.ig = function (a, b) {
    return ld_.a.c.Mc(a) + (b ? "#" + b : "")
};
ld_.a.c.wa = function (a) {
    return ld_.a.c.Fa(ld_.a.c.Fc(a))
};
ld_.a.c.sf = function (a) {
    a = ld_.a.c[ld_K](a);
    return ld_.a.c.xb(a[ld_.a.c.i.pa], a[ld_.a.c.i.Sa], a[ld_.a.c.i.R], a[ld_.a.c.i.S])
};
ld_.a.c.xf = function (a) {
    a = ld_.a.c[ld_K](a);
    return ld_.a.c.xb(ld_d, ld_d, ld_d, ld_d, a[ld_.a.c.i.Ta], a[ld_.a.c.i.Ua], a[ld_.a.c.i.rb])
};
ld_.a.c.Mc = function (a) {
    var b = a[ld_R]("#");
    return 0 > b ? a : a[ld_7](0, b)
};
ld_.a.c.ce = function (a, b) {
    var c = ld_.a.c[ld_K](a), d = ld_.a.c[ld_K](b);
    return c[ld_.a.c.i.R] == d[ld_.a.c.i.R] && c[ld_.a.c.i.pa] == d[ld_.a.c.i.pa] && c[ld_.a.c.i.S] == d[ld_.a.c.i.S]
};
ld_.a.c.xc = function (a) {
    ld_.Na && (0 <= a[ld_R]("#") || 0 <= a[ld_R]("?")) && ld_a(ld_f("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]"))
};
ld_.a.c.Wa = function (a) {
    if (a[1]) {
        var b = a[0], c = b[ld_R]("#");
        0 <= c && (a[ld_z](b[ld_7](c)), a[0] = b = b[ld_7](0, c));
        c = b[ld_R]("?");
        0 > c ? a[1] = "?" : c == b[ld_E] - 1 && (a[1] = ld_b)
    }
    return a[ld_4]("")
};
ld_.a.c.Va = function (a, b, c) {
    if (ld_.L(b)) {
        ld_.g.vc(b);
        for (var d = 0; d < b[ld_E]; d++)ld_.a.c.Va(a, ld_h(b[d]), c)
    } else b != ld_d && c[ld_z]("&", a, "" === b ? "" : "=", ld_.b.la(b))
};
ld_.a.c.Ya = function (a, b, c) {
    ld_.g.v(0 == ld_o.max(b[ld_E] - (c || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
    for (c = c || 0; c < b[ld_E]; c += 2)ld_.a.c.Va(b[c], b[c + 1], a);
    return a
};
ld_.a.c.Se = function (a, b) {
    var c = ld_.a.c.Ya([], a, b);
    c[0] = "";
    return c[ld_4]("")
};
ld_.a.c.zb = function (a, b) {
    for (var c in b)ld_.a.c.Va(c, b[c], a);
    return a
};
ld_.a.c.Te = function (a) {
    a = ld_.a.c.zb([], a);
    a[0] = "";
    return a[ld_4]("")
};
ld_.a.c.De = function (a, b) {
    return ld_.a.c.Wa(2 == arguments[ld_E] ? ld_.a.c.Ya([a], arguments[1], 0) : ld_.a.c.Ya([a], arguments, 1))
};
ld_.a.c.Ee = function (a, b) {
    return ld_.a.c.Wa(ld_.a.c.zb([a], b))
};
ld_.a.c.Ic = function (a, b, c) {
    return ld_.a.c.Wa([a, "&", b, "=", ld_.b.la(c)])
};
ld_.a.c.Da = function (a, b, c, d) {
    for (var e = c[ld_E]; 0 <= (b = a[ld_R](c, b)) && b < d;) {
        var f = a[ld_Y](b - 1);
        if (f == ld_.a.c.ra.yb || f == ld_.a.c.ra.Cc)if (f = a[ld_Y](b + e), !f || f == ld_.a.c.ra.Ac || f == ld_.a.c.ra.yb || f == ld_.a.c.ra.Bc)return b;
        b += e + 1
    }
    return -1
};
ld_.a.c.Ea = /#|$/;
ld_.a.c.Bf = function (a, b) {
    return 0 <= ld_.a.c.Da(a, 0, b, a[ld_ca](ld_.a.c.Ea))
};
ld_.a.c.vf = function (a, b) {
    var c = a[ld_ca](ld_.a.c.Ea), d = ld_.a.c.Da(a, 0, b, c);
    if (0 > d)return ld_d;
    var e = a[ld_R]("&", d);
    if (0 > e || e > c)e = c;
    d += b[ld_E] + 1;
    return ld_.b.Ca(a[ld_7](d, e - d))
};
ld_.a.c.wf = function (a, b) {
    for (var c = a[ld_ca](ld_.a.c.Ea), d = 0, e, f = []; 0 <= (e = ld_.a.c.Da(a, d, b, c));) {
        d = a[ld_R]("&", e);
        if (0 > d || d > c)d = c;
        e += b[ld_E] + 1;
        f[ld_z](ld_.b.Ca(a[ld_7](e, d - e)))
    }
    return f
};
ld_.a.c.Dc = /[?&]($|#)/;
ld_.a.c.Kc = function (a, b) {
    for (var c = a[ld_ca](ld_.a.c.Ea), d = 0, e, f = []; 0 <= (e = ld_.a.c.Da(a, d, b, c));)f[ld_z](a[ld_Z](d, e)), d = ld_o.min(a[ld_R]("&", e) + 1 || c, c);
    f[ld_z](a[ld_7](d));
    return f[ld_4]("")[ld_J](ld_.a.c.Dc, "$1")
};
ld_.a.c.wc = function (a, b, c) {
    return ld_.a.c.Ic(ld_.a.c.Kc(a, b), b, c)
};
ld_.a.c.Fe = function (a, b) {
    ld_.a.c.xc(a);
    ld_.b.zc(a, "/") && (a = a[ld_7](0, a[ld_E] - 1));
    ld_.b.wb(b, "/") && (b = b[ld_7](1));
    return ld_.b.yc(a, "/", b)
};
ld_.a.c.vb = {ub: "zx"};
ld_.a.c.ie = function (a) {
    return ld_.a.c.wc(a, ld_.a.c.vb.ub, ld_.b.tb())
};
ld_.f = function (a, b) {
    var c;
    a instanceof ld_.f ? (this.B = ld_.ka(b) ? b : a.uc(), this.Ba(a.ja()), this.oa(a.ya()), this.za(a.ia()), this.Aa(a.xa()), this.ma(a.Y()), this.Q(a.sb().z()), this.na(a.wa())) : a && (c = ld_.a.c[ld_K](ld_h(a))) ? (this.B = !!b, this.Ba(c[ld_.a.c.i.pa] || "", ld_c), this.oa(c[ld_.a.c.i.Sa] || "", ld_c), this.za(c[ld_.a.c.i.R] || "", ld_c), this.Aa(c[ld_.a.c.i.S]), this.ma(c[ld_.a.c.i.Ta] || "", ld_c), this.Q(c[ld_.a.c.i.Ua] || "", ld_c), this.na(c[ld_.a.c.i.rb] || "", ld_c)) : (this.B = !!b, this.F = new ld_.f.D(ld_d, ld_d, this.B))
};
ld_.f.Dd = ld_e;
ld_.f.Rc = ld_.a.c.vb.ub;
ld_8 = ld_.f[ld_G];
ld_8.ga = "";
ld_8.kb = "";
ld_8.hb = "";
ld_8.Ma = ld_d;
ld_8.jb = "";
ld_8.ib = "";
ld_8.he = ld_e;
ld_8.B = ld_e;
ld_8.toString = function () {
    var a = [], b = this.ja();
    b && a[ld_z](ld_.f.qa(b, ld_.f.Ab), ":");
    if (b = this.ia()) {
        a[ld_z]("//");
        var c = this.ya();
        c && a[ld_z](ld_.f.qa(c, ld_.f.Ab), "@");
        a[ld_z](ld_.b.la(b));
        b = this.xa();
        b != ld_d && a[ld_z](":", ld_h(b))
    }
    if (b = this.Y())this.Xa() && "/" != b[ld_O](0) && a[ld_z]("/"), a[ld_z](ld_.f.qa(b, "/" == b[ld_O](0) ? ld_.f.Oc : ld_.f.Qc));
    (b = this.Nc()) && a[ld_z]("?", b);
    (b = this.wa()) && a[ld_z]("#", ld_.f.qa(b, ld_.f.Pc));
    return a[ld_4]("")
};
ld_8.Yb = function (a) {
    var b = this.z(), c = a.Vc();
    c ? b.Ba(a.ja()) : c = a.Eb();
    c ? b.oa(a.ya()) : c = a.Xa();
    c ? b.za(a.ia()) : c = a.Uc();
    var d = a.Y();
    if (c)b.Aa(a.xa()); else if (c = a.Fb()) {
        if ("/" != d[ld_O](0))if (this.Xa() && !this.Fb())d = "/" + d; else {
            var e = b.Y()[ld_V]("/");
            -1 != e && (d = b.Y()[ld_7](0, e + 1) + d)
        }
        d = ld_.f.Wc(d)
    }
    c ? b.ma(d) : c = a.Bb();
    c ? b.Q(a.Tc()) : c = a.Db();
    c && b.na(a.wa());
    return b
};
ld_8.z = function () {
    return new ld_.f(this)
};
ld_8.ja = function () {
    return this.ga
};
ld_8.Ba = function (a, b) {
    this.I();
    if (this.ga = b ? ld_.f.fa(a) : a)this.ga = this.ga[ld_J](/:$/, "");
    return this
};
ld_8.Vc = function () {
    return !!this.ga
};
ld_8.ya = function () {
    return this.kb
};
ld_8.oa = function (a, b) {
    this.I();
    this.kb = b ? ld_.f.fa(a) : a;
    return this
};
ld_8.Eb = function () {
    return !!this.kb
};
ld_8.ia = function () {
    return this.hb
};
ld_8.za = function (a, b) {
    this.I();
    this.hb = b ? ld_.f.fa(a) : a;
    return this
};
ld_8.Xa = function () {
    return !!this.hb
};
ld_8.xa = function () {
    return this.Ma
};
ld_8.Aa = function (a) {
    this.I();
    a ? (a = ld_i(a), (ld_m(a) || 0 > a) && ld_a(ld_f("Bad port number " + a)), this.Ma = a) : this.Ma = ld_d;
    return this
};
ld_8.Uc = function () {
    return this.Ma != ld_d
};
ld_8.Y = function () {
    return this.jb
};
ld_8.ma = function (a, b) {
    this.I();
    this.jb = b ? ld_.f.fa(a) : a;
    return this
};
ld_8.Fb = function () {
    return !!this.jb
};
ld_8.Bb = function () {
    return "" !== this.F[ld_C]()
};
ld_8.Q = function (a, b) {
    this.I();
    a instanceof ld_.f.D ? (this.F = a, this.F.fb(this.B)) : (b || (a = ld_.f.qa(a, ld_.f.rd)), this.F = new ld_.f.D(a, ld_d, this.B));
    return this
};
ld_8.Nc = function () {
    return this.F[ld_C]()
};
ld_8.Tc = function () {
    return this.F.Pd()
};
ld_8.sb = function () {
    return this.F
};
ld_8.Sc = function (a, b) {
    this.I();
    this.F.H(a, b);
    return this
};
ld_8.wa = function () {
    return this.ib
};
ld_8.na = function (a, b) {
    this.I();
    this.ib = b ? ld_.f.fa(a) : a;
    return this
};
ld_8.Db = function () {
    return !!this.ib
};
ld_8.ie = function () {
    this.I();
    this.Sc(ld_.f.Rc, ld_.b.tb());
    return this
};
ld_8.removeParameter = function (a) {
    this.I();
    this.F[ld_T](a);
    return this
};
ld_8.I = function () {
    this.he && ld_a(ld_f("Tried to modify a read-only Uri"))
};
ld_8.fb = function (a) {
    this.B = a;
    this.F && this.F.fb(a);
    return this
};
ld_8.uc = function () {
    return this.B
};
ld_.f.parse = function (a, b) {
    return a instanceof ld_.f ? a.z() : new ld_.f(a, b)
};
ld_.f.nb = function (a, b, c, d, e, f, g, h) {
    h = new ld_.f(ld_d, h);
    a && h.Ba(a);
    b && h.oa(b);
    c && h.za(c);
    d && h.Aa(d);
    e && h.ma(e);
    f && h.Q(f);
    g && h.na(g);
    return h
};
ld_.f.Yb = function (a, b) {
    a instanceof ld_.f || (a = ld_.f.parse(a));
    b instanceof ld_.f || (b = ld_.f.parse(b));
    return a.Yb(b)
};
ld_.f.Wc = function (a) {
    if (".." == a || "." == a)return "";
    if (!ld_.b[ld_0](a, "./") && !ld_.b[ld_0](a, "/."))return a;
    for (var b = ld_.b.wb(a, "/"), a = a[ld_K]("/"), c = [], d = 0; d < a[ld_E];) {
        var e = a[d++];
        "." == e ? b && d == a[ld_E] && c[ld_z]("") : ".." == e ? ((1 < c[ld_E] || 1 == c[ld_E] && "" != c[0]) && c.pop(), b && d == a[ld_E] && c[ld_z]("")) : (c[ld_z](e), b = ld_c)
    }
    return c[ld_4]("/")
};
ld_.f.fa = function (a) {
    return a ? ld_aa(a) : ""
};
ld_.f.qa = function (a, b) {
    return ld_.j(a) ? encodeURI(a)[ld_J](b, ld_.f.Cd) : ld_d
};
ld_.f.Cd = function (a) {
    a = a[ld_Y](0);
    return "%" + (a >> 4 & 15)[ld_C](16) + (a & 15)[ld_C](16)
};
ld_.f.Ab = /[#\/\?@]/g;
ld_.f.Qc = /[\#\?:]/g;
ld_.f.Oc = /[\#\?]/g;
ld_.f.rd = /[\#\?@]/g;
ld_.f.Pc = /#/g;
ld_.f.ce = function (a, b) {
    var c = ld_.a.c[ld_K](a), d = ld_.a.c[ld_K](b);
    return c[ld_.a.c.i.R] == d[ld_.a.c.i.R] && c[ld_.a.c.i.S] == d[ld_.a.c.i.S]
};
ld_.f.D = function (a, b, c) {
    this.M = a || ld_d;
    this.B = !!c
};
ld_.f.D[ld_G].J = function () {
    if (!this.n && (this.n = new ld_.h.t, this.o = 0, this.M))for (var a = this.M[ld_K]("&"), b = 0; b < a[ld_E]; b++) {
        var c = a[b][ld_R]("="), d = ld_d, e = ld_d;
        0 <= c ? (d = a[b][ld_Z](0, c), e = a[b][ld_Z](c + 1)) : d = a[b];
        d = ld_.b.Ca(d);
        d = this.T(d);
        this.add(d, e ? ld_.b.Ca(e) : "")
    }
};
ld_.f.D.cf = function (a, b, c) {
    b = ld_.h.r(a);
    "undefined" == typeof b && ld_a(ld_f("Keys are undefined"));
    for (var c = new ld_.f.D(ld_d, ld_d, c), a = ld_.h.p(a), d = 0; d < b[ld_E]; d++) {
        var e = b[d], f = a[d];
        ld_.L(f) ? c.Cb(e, f) : c.add(e, f)
    }
    return c
};
ld_.f.D.bf = function (a, b, c, d) {
    a[ld_E] != b[ld_E] && ld_a(ld_f("Mismatched lengths for keys/values"));
    c = new ld_.f.D(ld_d, ld_d, d);
    for (d = 0; d < a[ld_E]; d++)c.add(a[d], b[d]);
    return c
};
ld_8 = ld_.f.D[ld_G];
ld_8.n = ld_d;
ld_8.o = ld_d;
ld_8.V = function () {
    this.J();
    return this.o
};
ld_8.add = function (a, b) {
    this.J();
    this.$();
    var a = this.T(a), c = this.n.N(a);
    c || this.n.H(a, c = []);
    c[ld_z](b);
    this.o++;
    return this
};
ld_s(ld_8, function (a) {
    this.J();
    a = this.T(a);
    return this.n.ba(a) ? (this.$(), this.o -= this.n.N(a)[ld_E], this.n[ld_T](a)) : ld_e
});
ld_x(ld_8, function () {
    this.$();
    this.n = ld_d;
    this.o = 0
});
ld_8.C = function () {
    this.J();
    return 0 == this.o
};
ld_8.ba = function (a) {
    this.J();
    a = this.T(a);
    return this.n.ba(a)
};
ld_8.ca = function (a) {
    var b = this.p();
    return ld_.d[ld_0](b, a)
};
ld_8.r = function () {
    this.J();
    for (var a = this.n.p(), b = this.n.r(), c = [], d = 0; d < b[ld_E]; d++)for (var e = a[d], f = 0; f < e[ld_E]; f++)c[ld_z](b[d]);
    return c
};
ld_8.p = function (a) {
    this.J();
    var b = [];
    if (a)this.ba(a) && (b = ld_.d[ld_M](b, this.n.N(this.T(a)))); else for (var a = this.n.p(), c = 0; c < a[ld_E]; c++)b = ld_.d[ld_M](b, a[c]);
    return b
};
ld_8.H = function (a, b) {
    this.J();
    this.$();
    a = this.T(a);
    this.ba(a) && (this.o -= this.n.N(a)[ld_E]);
    this.n.H(a, [b]);
    this.o++;
    return this
};
ld_8.N = function (a, b) {
    var c = a ? this.p(a) : [];
    return ld_.f.Dd ? 0 < c[ld_E] ? c[0] : b : 0 < c[ld_E] ? ld_h(c[0]) : b
};
ld_8.Cb = function (a, b) {
    this[ld_T](a);
    0 < b[ld_E] && (this.$(), this.n.H(this.T(a), ld_.d.z(b)), this.o += b[ld_E])
};
ld_8.toString = function () {
    if (this.M)return this.M;
    if (!this.n)return "";
    for (var a = [], b = this.n.r(), c = 0; c < b[ld_E]; c++)for (var d = b[c], e = ld_.b.la(d), d = this.p(d), f = 0; f < d[ld_E]; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + ld_.b.la(d[f]));
        a[ld_z](g)
    }
    return this.M = a[ld_4]("&")
};
ld_8.Pd = function () {
    return ld_.f.fa(this[ld_C]())
};
ld_8.$ = function () {
    this.M = ld_d
};
ld_8.z = function () {
    var a = new ld_.f.D;
    a.M = this.M;
    this.n && (a.n = this.n.z());
    return a
};
ld_8.T = function (a) {
    a = ld_h(a);
    this.B && (a = a[ld_6]());
    return a
};
ld_8.fb = function (a) {
    var b = a && !this.B;
    b && (this.J(), this.$(), ld_.h[ld_X](this.n, function (a, b) {
        var e = b[ld_6]();
        b != e && (this[ld_T](b), this.Cb(e, a))
    }, this));
    this.B = a
};
ld_8.extend = function (a) {
    for (var b = 0; b < arguments[ld_E]; b++) {
        var c = arguments[b];
        ld_.h[ld_X](c, function (a, b) {
            this.add(b, a)
        }, this)
    }
};
var ld_9 = {td: "/tbproxy/lh/wm", fc: "goog-fixurl", ud: "sourceid", sd: "wm", xd: "url", vd: "hl", wd: "site"};
ld_.qb("FixUrlConfig", ld_9);
function ld_fa() {
    var a, b;
    a = "goog-ph-" + (new Date).getTime();
    ld_l.write("<script id='" + a + "'><\/script>");
    b = ld_l.getElementById(a);
    this.Vd = function () {
        return b
    };
    ld_s(this, function () {
        b.parentNode.removeChild(b);
        b = ld_d
    })
}
function ld_ga() {
    var a, b;
    b = new ld_fa;
    for (var c = b.Vd().previousSibling; c && !(c.tagName && "SCRIPT" == c.tagName);)c = c.previousSibling;
    a = c;
    b[ld_T]();
    this.Wd = function () {
        return a ? a.src : ld_d
    }
}
ld_.qb("FixUrl", ld_$);
var ld_$ = {
    gg: this, ea: ld_d, P: ld_d, Rb: ld_d, Kd: function () {
        var a = "<div id='" + ld_9.fc + "'></div>";
        this.ea.body || (a = "<body>" + a + "</body>");
        this.ea.write(a)
    }, Ad: function (a, b) {
        var c = (new ld_.f(this.Rb)).ma(ld_9.td).Q(ld_d)[ld_C](), d = new ld_.f(a);
        d.Bb() && (a = d.Q(ld_d)[ld_C]() + "?");
        d = (new ld_.f.D).add(ld_9.ud, ld_9.sd).add(ld_9.xd, a).add(ld_9.vd, b).add(ld_9.wd, this.zd()).add("error", this.yd()).add("js", "true");
        return (new ld_.f(c)).Q(d)[ld_C]()
    }, Bd: function () {
        return this.P.GOOG_FIXURL_LANG ? this.P.GOOG_FIXURL_LANG :
            "en"
    }, zd: function () {
        return this.P.GOOG_FIXURL_SITE ? this.P.GOOG_FIXURL_SITE : ""
    }, yd: function () {
        return this.P.GOOG_FIXURL_ERROR ? this.P.GOOG_FIXURL_ERROR : "http404"
    }, cc: function (a) {
        var b = '<script type="text/javascript" src="', a = a ? a : this.ea[ld_Q], a = ld_.f.parse(a);
        a.Eb() && a.oa("");
        a.Db() && a.na("");
        b += this.Ad(a[ld_C](), this.Bd());
        b += '"><\/script>';
        this.ea.write(b)
    }, le: function (a) {
        var b = this.ea.getElementById(ld_9.fc);
        if (b) {
            b.innerHTML = a;
            for (var c = b.getElementsByTagName("script"), a = "", d = 0; d < c[ld_E]; d++)a =
                a + " " + c[d].innerHTML;
            c = ld_l.createElement("script");
            c.type = "text/javascript";
            c.text = a;
            (a = ld_l.getElementsByTagName("head")[0]) ? a[ld_y](c) : b[ld_y](c)
        }
    }, je: function (a) {
        this.le(a)
    }, de: function (a, b) {
        ld_$.ea = a.document;
        ld_$.P = a;
        if (b) {
            ld_$.Rb = b;
            this.Kd();
            var c = this.P.GOOG_FIXURL_URL;
            c ? this.cc(c) : this.cc(ld_d)
        }
    }
};
ld_.qb("FixUrl", ld_$);
ld_.ae(ld_$, "onDataFetch", ld_$.je);
var ld_ha = (new ld_ga).Wd();
ld_$.de(window, ld_ha);
