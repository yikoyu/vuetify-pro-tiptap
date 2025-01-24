var tm = Object.defineProperty;
var nm = (t, e, n) => e in t ? tm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var bc = (t, e, n) => nm(t, typeof e != "symbol" ? e + "" : e, n);
import { VDivider as Xi, VToolbar as Ur, VCardText as Yi, VCard as Kr, VSpacer as Qi, VCardTitle as rm, VInput as im, VThemeProvider as gp, VIcon as On, VTooltip as bp, VBtn as Gr, VTextField as Ks, VSheet as om, VList as cl, VMenu as Gs, VListItemTitle as yp, VListItem as vp, VFileInput as sm, VCheckbox as Js, VForm as dl, VTab as am, VTabs as um, VWindowItem as lm, VWindow as cm, VCardActions as fl, VDialog as pl, VCardSubtitle as dm } from "vuetify/components";
import { reactive as Rr, computed as $, unref as S, watch as Gt, getCurrentScope as fm, onScopeDispose as pm, getCurrentInstance as Zs, inject as hm, provide as cu, ref as J, onMounted as hl, watchEffect as ur, defineComponent as Q, onBeforeUnmount as ml, h as Jr, markRaw as wp, nextTick as mm, customRef as gm, render as yc, withDirectives as xp, openBlock as R, createBlock as j, withCtx as V, createVNode as L, createElementBlock as ge, Fragment as De, renderList as ut, resolveDynamicComponent as Vi, mergeProps as Er, createSlots as gl, vShow as kp, createCommentVNode as rt, useAttrs as bm, onUnmounted as ym, normalizeClass as At, createTextVNode as Jt, toDisplayString as Le, renderSlot as Tt, normalizeProps as vc, guardReactiveProps as wc, normalizeStyle as mi, createElementVNode as Zt, resolveComponent as vm, withModifiers as wm } from "vue";
import { useTheme as bl } from "vuetify";
const Cp = "en", du = 200, xm = du - 80, xc = 20, kc = 1e5, Cc = 16, yo = 6, vo = 10, wo = 2, km = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#D5D5D4",
  "#E8E8E8",
  "#EEEEEE"
], fu = "Roboto", Cm = [
  { title: "editor.default", value: fu, divider: !0, default: !0 },
  { title: "Arial", value: "Arial" },
  { title: "Arial Black", value: "Arial Black" },
  { title: "Georgia", value: "Georgia" },
  { title: "Impact", value: "Impact" },
  { title: "Helvetica", value: "Helvetica" },
  { title: "Tahoma", value: "Tahoma" },
  { title: "Times New Roman", value: "Times New Roman" },
  { title: "Verdana", value: "Verdana" },
  { title: "Courier New", value: "Courier New", divider: !0 },
  { title: "Monaco", value: "Monaco" },
  { title: "Monospace", value: "monospace" }
], Qo = "default", Ac = [
  { title: "editor.default", value: Qo, default: !0 }
], Am = [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72], br = "default";
var es = /* @__PURE__ */ ((t) => (t[t["size-small"] = 200] = "size-small", t[t["size-medium"] = 500] = "size-medium", t["size-large"] = "100%", t))(es || {}), ts = /* @__PURE__ */ ((t) => (t[t["size-small"] = 480] = "size-small", t[t["size-medium"] = 640] = "size-medium", t["size-large"] = "100%", t))(ts || {});
const Sm = {
  image: [
    "float-left",
    "float-none",
    "float-right",
    "divider",
    "image-size-small",
    "image-size-medium",
    "image-size-large",
    "divider",
    "textAlign",
    "divider",
    "image",
    "image-aspect-ratio",
    "remove"
  ],
  text: ["bold", "italic", "underline", "strike", "divider", "color", "highlight", "textAlign", "divider", "link"],
  link: [
    "bold",
    "italic",
    "underline",
    "strike",
    "divider",
    "color",
    "highlight",
    "textAlign",
    "divider",
    "link",
    "unlink",
    "link-open"
  ],
  video: ["video-size-small", "video-size-medium", "video-size-large", "divider", "video", "remove"]
}, zo = Rr({
  extensions: []
});
function Tm(t) {
  zo.defaultLang = t.defaultLang, zo.defaultMarkdownTheme = t.defaultMarkdownTheme, zo.extensions = t.extensions ?? [];
}
function Xs() {
  return {
    state: zo
  };
}
var Ap = typeof global == "object" && global && global.Object === Object && global, Mm = typeof self == "object" && self && self.Object === Object && self, Nt = Ap || Mm || Function("return this")(), Sn = Nt.Symbol, Sp = Object.prototype, Em = Sp.hasOwnProperty, Om = Sp.toString, oi = Sn ? Sn.toStringTag : void 0;
function Nm(t) {
  var e = Em.call(t, oi), n = t[oi];
  try {
    t[oi] = void 0;
    var r = !0;
  } catch {
  }
  var i = Om.call(t);
  return r && (e ? t[oi] = n : delete t[oi]), i;
}
var Lm = Object.prototype, Vm = Lm.toString;
function Hm(t) {
  return Vm.call(t);
}
var Rm = "[object Null]", Dm = "[object Undefined]", Sc = Sn ? Sn.toStringTag : void 0;
function Zr(t) {
  return t == null ? t === void 0 ? Dm : Rm : Sc && Sc in Object(t) ? Nm(t) : Hm(t);
}
function Qn(t) {
  return t != null && typeof t == "object";
}
var _m = "[object Symbol]";
function Ys(t) {
  return typeof t == "symbol" || Qn(t) && Zr(t) == _m;
}
function Tp(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var Xt = Array.isArray, Tc = Sn ? Sn.prototype : void 0, Mc = Tc ? Tc.toString : void 0;
function Mp(t) {
  if (typeof t == "string")
    return t;
  if (Xt(t))
    return Tp(t, Mp) + "";
  if (Ys(t))
    return Mc ? Mc.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Pm = /\s/;
function Im(t) {
  for (var e = t.length; e-- && Pm.test(t.charAt(e)); )
    ;
  return e;
}
var Bm = /^\s+/;
function Fm(t) {
  return t && t.slice(0, Im(t) + 1).replace(Bm, "");
}
function er(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ec = NaN, zm = /^[-+]0x[0-9a-f]+$/i, $m = /^0b[01]+$/i, jm = /^0o[0-7]+$/i, Wm = parseInt;
function Oc(t) {
  if (typeof t == "number")
    return t;
  if (Ys(t))
    return Ec;
  if (er(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = er(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Fm(t);
  var n = $m.test(t);
  return n || jm.test(t) ? Wm(t.slice(2), n ? 2 : 8) : zm.test(t) ? Ec : +t;
}
function yl(t) {
  return t;
}
var qm = "[object AsyncFunction]", Um = "[object Function]", Km = "[object GeneratorFunction]", Gm = "[object Proxy]";
function Ep(t) {
  if (!er(t))
    return !1;
  var e = Zr(t);
  return e == Um || e == Km || e == qm || e == Gm;
}
var Sa = Nt["__core-js_shared__"], Nc = function() {
  var t = /[^.]+$/.exec(Sa && Sa.keys && Sa.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Jm(t) {
  return !!Nc && Nc in t;
}
var Zm = Function.prototype, Xm = Zm.toString;
function lr(t) {
  if (t != null) {
    try {
      return Xm.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ym = /[\\^$.*+?()[\]{}|]/g, Qm = /^\[object .+?Constructor\]$/, eg = Function.prototype, tg = Object.prototype, ng = eg.toString, rg = tg.hasOwnProperty, ig = RegExp(
  "^" + ng.call(rg).replace(Ym, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function og(t) {
  if (!er(t) || Jm(t))
    return !1;
  var e = Ep(t) ? ig : Qm;
  return e.test(lr(t));
}
function sg(t, e) {
  return t == null ? void 0 : t[e];
}
function cr(t, e) {
  var n = sg(t, e);
  return og(n) ? n : void 0;
}
var pu = cr(Nt, "WeakMap");
function ag(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var ug = 800, lg = 16, cg = Date.now;
function dg(t) {
  var e = 0, n = 0;
  return function() {
    var r = cg(), i = lg - (r - n);
    if (n = r, i > 0) {
      if (++e >= ug)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function fg(t) {
  return function() {
    return t;
  };
}
var Lc = function() {
  try {
    var t = cr(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), pg = Lc ? function(t, e) {
  return Lc(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fg(e),
    writable: !0
  });
} : yl, hg = dg(pg);
function mg(t, e, n, r) {
  for (var i = t.length, o = n + -1; ++o < i; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function gg(t) {
  return t !== t;
}
function bg(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function yg(t, e, n) {
  return e === e ? bg(t, e, n) : mg(t, gg, n);
}
function vg(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && yg(t, e, 0) > -1;
}
var wg = 9007199254740991, xg = /^(?:0|[1-9]\d*)$/;
function Op(t, e) {
  var n = typeof t;
  return e = e ?? wg, !!e && (n == "number" || n != "symbol" && xg.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Np(t, e) {
  return t === e || t !== t && e !== e;
}
var Vc = Math.max;
function kg(t, e, n) {
  return e = Vc(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = Vc(r.length - e, 0), s = Array(o); ++i < o; )
      s[i] = r[e + i];
    i = -1;
    for (var a = Array(e + 1); ++i < e; )
      a[i] = r[i];
    return a[e] = n(s), ag(t, this, a);
  };
}
function Cg(t, e) {
  return hg(kg(t, e, yl), t + "");
}
var Ag = 9007199254740991;
function vl(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ag;
}
function Lp(t) {
  return t != null && vl(t.length) && !Ep(t);
}
var Sg = Object.prototype;
function Tg(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Sg;
  return t === n;
}
function Mg(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Eg = "[object Arguments]";
function Hc(t) {
  return Qn(t) && Zr(t) == Eg;
}
var Vp = Object.prototype, Og = Vp.hasOwnProperty, Ng = Vp.propertyIsEnumerable, Hp = Hc(/* @__PURE__ */ function() {
  return arguments;
}()) ? Hc : function(t) {
  return Qn(t) && Og.call(t, "callee") && !Ng.call(t, "callee");
};
function Lg() {
  return !1;
}
var Rp = typeof exports == "object" && exports && !exports.nodeType && exports, Rc = Rp && typeof module == "object" && module && !module.nodeType && module, Vg = Rc && Rc.exports === Rp, Dc = Vg ? Nt.Buffer : void 0, Hg = Dc ? Dc.isBuffer : void 0, hu = Hg || Lg, Rg = "[object Arguments]", Dg = "[object Array]", _g = "[object Boolean]", Pg = "[object Date]", Ig = "[object Error]", Bg = "[object Function]", Fg = "[object Map]", zg = "[object Number]", $g = "[object Object]", jg = "[object RegExp]", Wg = "[object Set]", qg = "[object String]", Ug = "[object WeakMap]", Kg = "[object ArrayBuffer]", Gg = "[object DataView]", Jg = "[object Float32Array]", Zg = "[object Float64Array]", Xg = "[object Int8Array]", Yg = "[object Int16Array]", Qg = "[object Int32Array]", eb = "[object Uint8Array]", tb = "[object Uint8ClampedArray]", nb = "[object Uint16Array]", rb = "[object Uint32Array]", re = {};
re[Jg] = re[Zg] = re[Xg] = re[Yg] = re[Qg] = re[eb] = re[tb] = re[nb] = re[rb] = !0;
re[Rg] = re[Dg] = re[Kg] = re[_g] = re[Gg] = re[Pg] = re[Ig] = re[Bg] = re[Fg] = re[zg] = re[$g] = re[jg] = re[Wg] = re[qg] = re[Ug] = !1;
function ib(t) {
  return Qn(t) && vl(t.length) && !!re[Zr(t)];
}
function Dp(t) {
  return function(e) {
    return t(e);
  };
}
var _p = typeof exports == "object" && exports && !exports.nodeType && exports, gi = _p && typeof module == "object" && module && !module.nodeType && module, ob = gi && gi.exports === _p, Ta = ob && Ap.process, _c = function() {
  try {
    var t = gi && gi.require && gi.require("util").types;
    return t || Ta && Ta.binding && Ta.binding("util");
  } catch {
  }
}(), Pc = _c && _c.isTypedArray, Pp = Pc ? Dp(Pc) : ib, sb = Object.prototype, ab = sb.hasOwnProperty;
function ub(t, e) {
  var n = Xt(t), r = !n && Hp(t), i = !n && !r && hu(t), o = !n && !r && !i && Pp(t), s = n || r || i || o, a = s ? Mg(t.length, String) : [], u = a.length;
  for (var l in t)
    ab.call(t, l) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Op(l, u))) && a.push(l);
  return a;
}
function lb(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var cb = lb(Object.keys, Object), db = Object.prototype, fb = db.hasOwnProperty;
function pb(t) {
  if (!Tg(t))
    return cb(t);
  var e = [];
  for (var n in Object(t))
    fb.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ip(t) {
  return Lp(t) ? ub(t) : pb(t);
}
var hb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mb = /^\w*$/;
function wl(t, e) {
  if (Xt(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ys(t) ? !0 : mb.test(t) || !hb.test(t) || e != null && t in Object(e);
}
var Hi = cr(Object, "create");
function gb() {
  this.__data__ = Hi ? Hi(null) : {}, this.size = 0;
}
function bb(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var yb = "__lodash_hash_undefined__", vb = Object.prototype, wb = vb.hasOwnProperty;
function xb(t) {
  var e = this.__data__;
  if (Hi) {
    var n = e[t];
    return n === yb ? void 0 : n;
  }
  return wb.call(e, t) ? e[t] : void 0;
}
var kb = Object.prototype, Cb = kb.hasOwnProperty;
function Ab(t) {
  var e = this.__data__;
  return Hi ? e[t] !== void 0 : Cb.call(e, t);
}
var Sb = "__lodash_hash_undefined__";
function Tb(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Hi && e === void 0 ? Sb : e, this;
}
function tr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
tr.prototype.clear = gb;
tr.prototype.delete = bb;
tr.prototype.get = xb;
tr.prototype.has = Ab;
tr.prototype.set = Tb;
function Mb() {
  this.__data__ = [], this.size = 0;
}
function Qs(t, e) {
  for (var n = t.length; n--; )
    if (Np(t[n][0], e))
      return n;
  return -1;
}
var Eb = Array.prototype, Ob = Eb.splice;
function Nb(t) {
  var e = this.__data__, n = Qs(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Ob.call(e, n, 1), --this.size, !0;
}
function Lb(t) {
  var e = this.__data__, n = Qs(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Vb(t) {
  return Qs(this.__data__, t) > -1;
}
function Hb(t, e) {
  var n = this.__data__, r = Qs(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function Qt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Qt.prototype.clear = Mb;
Qt.prototype.delete = Nb;
Qt.prototype.get = Lb;
Qt.prototype.has = Vb;
Qt.prototype.set = Hb;
var Ri = cr(Nt, "Map");
function Rb() {
  this.size = 0, this.__data__ = {
    hash: new tr(),
    map: new (Ri || Qt)(),
    string: new tr()
  };
}
function Db(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ea(t, e) {
  var n = t.__data__;
  return Db(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function _b(t) {
  var e = ea(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Pb(t) {
  return ea(this, t).get(t);
}
function Ib(t) {
  return ea(this, t).has(t);
}
function Bb(t, e) {
  var n = ea(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function en(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
en.prototype.clear = Rb;
en.prototype.delete = _b;
en.prototype.get = Pb;
en.prototype.has = Ib;
en.prototype.set = Bb;
var Fb = "Expected a function";
function xl(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Fb);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var s = t.apply(this, r);
    return n.cache = o.set(i, s) || o, s;
  };
  return n.cache = new (xl.Cache || en)(), n;
}
xl.Cache = en;
var zb = 500;
function $b(t) {
  var e = xl(t, function(r) {
    return n.size === zb && n.clear(), r;
  }), n = e.cache;
  return e;
}
var jb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wb = /\\(\\)?/g, qb = $b(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(jb, function(n, r, i, o) {
    e.push(i ? o.replace(Wb, "$1") : r || n);
  }), e;
});
function Ub(t) {
  return t == null ? "" : Mp(t);
}
function Bp(t, e) {
  return Xt(t) ? t : wl(t, e) ? [t] : qb(Ub(t));
}
function ta(t) {
  if (typeof t == "string" || Ys(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Fp(t, e) {
  e = Bp(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[ta(e[n++])];
  return n && n == r ? t : void 0;
}
function Kb(t, e, n) {
  var r = t == null ? void 0 : Fp(t, e);
  return r === void 0 ? n : r;
}
function zp(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
function Gb(t, e, n, r, i) {
  var o = -1, s = t.length;
  for (i || (i = []); ++o < s; ) {
    var a = t[o];
    n(a) && zp(i, a);
  }
  return i;
}
function Jb() {
  this.__data__ = new Qt(), this.size = 0;
}
function Zb(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Xb(t) {
  return this.__data__.get(t);
}
function Yb(t) {
  return this.__data__.has(t);
}
var Qb = 200;
function e2(t, e) {
  var n = this.__data__;
  if (n instanceof Qt) {
    var r = n.__data__;
    if (!Ri || r.length < Qb - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new en(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function qt(t) {
  var e = this.__data__ = new Qt(t);
  this.size = e.size;
}
qt.prototype.clear = Jb;
qt.prototype.delete = Zb;
qt.prototype.get = Xb;
qt.prototype.has = Yb;
qt.prototype.set = e2;
function t2(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var s = t[n];
    e(s, n, t) && (o[i++] = s);
  }
  return o;
}
function n2() {
  return [];
}
var r2 = Object.prototype, i2 = r2.propertyIsEnumerable, Ic = Object.getOwnPropertySymbols, o2 = Ic ? function(t) {
  return t == null ? [] : (t = Object(t), t2(Ic(t), function(e) {
    return i2.call(t, e);
  }));
} : n2;
function s2(t, e, n) {
  var r = e(t);
  return Xt(t) ? r : zp(r, n(t));
}
function Bc(t) {
  return s2(t, Ip, o2);
}
var mu = cr(Nt, "DataView"), gu = cr(Nt, "Promise"), bu = cr(Nt, "Set"), Fc = "[object Map]", a2 = "[object Object]", zc = "[object Promise]", $c = "[object Set]", jc = "[object WeakMap]", Wc = "[object DataView]", u2 = lr(mu), l2 = lr(Ri), c2 = lr(gu), d2 = lr(bu), f2 = lr(pu), un = Zr;
(mu && un(new mu(new ArrayBuffer(1))) != Wc || Ri && un(new Ri()) != Fc || gu && un(gu.resolve()) != zc || bu && un(new bu()) != $c || pu && un(new pu()) != jc) && (un = function(t) {
  var e = Zr(t), n = e == a2 ? t.constructor : void 0, r = n ? lr(n) : "";
  if (r)
    switch (r) {
      case u2:
        return Wc;
      case l2:
        return Fc;
      case c2:
        return zc;
      case d2:
        return $c;
      case f2:
        return jc;
    }
  return e;
});
var qc = Nt.Uint8Array, p2 = "__lodash_hash_undefined__";
function h2(t) {
  return this.__data__.set(t, p2), this;
}
function m2(t) {
  return this.__data__.has(t);
}
function Di(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new en(); ++e < n; )
    this.add(t[e]);
}
Di.prototype.add = Di.prototype.push = h2;
Di.prototype.has = m2;
function g2(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function $p(t, e) {
  return t.has(e);
}
var b2 = 1, y2 = 2;
function jp(t, e, n, r, i, o) {
  var s = n & b2, a = t.length, u = e.length;
  if (a != u && !(s && u > a))
    return !1;
  var l = o.get(t), c = o.get(e);
  if (l && c)
    return l == e && c == t;
  var d = -1, f = !0, p = n & y2 ? new Di() : void 0;
  for (o.set(t, e), o.set(e, t); ++d < a; ) {
    var h = t[d], m = e[d];
    if (r)
      var g = s ? r(m, h, d, e, t, o) : r(h, m, d, t, e, o);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!g2(e, function(b, x) {
        if (!$p(p, x) && (h === b || i(h, b, n, r, o)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === m || i(h, m, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), f;
}
function v2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function w2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var x2 = 1, k2 = 2, C2 = "[object Boolean]", A2 = "[object Date]", S2 = "[object Error]", T2 = "[object Map]", M2 = "[object Number]", E2 = "[object RegExp]", O2 = "[object Set]", N2 = "[object String]", L2 = "[object Symbol]", V2 = "[object ArrayBuffer]", H2 = "[object DataView]", Uc = Sn ? Sn.prototype : void 0, Ma = Uc ? Uc.valueOf : void 0;
function R2(t, e, n, r, i, o, s) {
  switch (n) {
    case H2:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case V2:
      return !(t.byteLength != e.byteLength || !o(new qc(t), new qc(e)));
    case C2:
    case A2:
    case M2:
      return Np(+t, +e);
    case S2:
      return t.name == e.name && t.message == e.message;
    case E2:
    case N2:
      return t == e + "";
    case T2:
      var a = v2;
    case O2:
      var u = r & x2;
      if (a || (a = w2), t.size != e.size && !u)
        return !1;
      var l = s.get(t);
      if (l)
        return l == e;
      r |= k2, s.set(t, e);
      var c = jp(a(t), a(e), r, i, o, s);
      return s.delete(t), c;
    case L2:
      if (Ma)
        return Ma.call(t) == Ma.call(e);
  }
  return !1;
}
var D2 = 1, _2 = Object.prototype, P2 = _2.hasOwnProperty;
function I2(t, e, n, r, i, o) {
  var s = n & D2, a = Bc(t), u = a.length, l = Bc(e), c = l.length;
  if (u != c && !s)
    return !1;
  for (var d = u; d--; ) {
    var f = a[d];
    if (!(s ? f in e : P2.call(e, f)))
      return !1;
  }
  var p = o.get(t), h = o.get(e);
  if (p && h)
    return p == e && h == t;
  var m = !0;
  o.set(t, e), o.set(e, t);
  for (var g = s; ++d < u; ) {
    f = a[d];
    var b = t[f], x = e[f];
    if (r)
      var w = s ? r(x, b, f, e, t, o) : r(b, x, f, t, e, o);
    if (!(w === void 0 ? b === x || i(b, x, n, r, o) : w)) {
      m = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (m && !g) {
    var y = t.constructor, k = e.constructor;
    y != k && "constructor" in t && "constructor" in e && !(typeof y == "function" && y instanceof y && typeof k == "function" && k instanceof k) && (m = !1);
  }
  return o.delete(t), o.delete(e), m;
}
var B2 = 1, Kc = "[object Arguments]", Gc = "[object Array]", xo = "[object Object]", F2 = Object.prototype, Jc = F2.hasOwnProperty;
function z2(t, e, n, r, i, o) {
  var s = Xt(t), a = Xt(e), u = s ? Gc : un(t), l = a ? Gc : un(e);
  u = u == Kc ? xo : u, l = l == Kc ? xo : l;
  var c = u == xo, d = l == xo, f = u == l;
  if (f && hu(t)) {
    if (!hu(e))
      return !1;
    s = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new qt()), s || Pp(t) ? jp(t, e, n, r, i, o) : R2(t, e, u, n, r, i, o);
  if (!(n & B2)) {
    var p = c && Jc.call(t, "__wrapped__"), h = d && Jc.call(e, "__wrapped__");
    if (p || h) {
      var m = p ? t.value() : t, g = h ? e.value() : e;
      return o || (o = new qt()), i(m, g, n, r, o);
    }
  }
  return f ? (o || (o = new qt()), I2(t, e, n, r, i, o)) : !1;
}
function na(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Qn(t) && !Qn(e) ? t !== t && e !== e : z2(t, e, n, r, na, i);
}
var $2 = 1, j2 = 2;
function W2(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var s = n[i];
    if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    s = n[i];
    var a = s[0], u = t[a], l = s[1];
    if (s[2]) {
      if (u === void 0 && !(a in t))
        return !1;
    } else {
      var c = new qt(), d;
      if (!(d === void 0 ? na(l, u, $2 | j2, r, c) : d))
        return !1;
    }
  }
  return !0;
}
function Wp(t) {
  return t === t && !er(t);
}
function q2(t) {
  for (var e = Ip(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Wp(i)];
  }
  return e;
}
function qp(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function U2(t) {
  var e = q2(t);
  return e.length == 1 && e[0][2] ? qp(e[0][0], e[0][1]) : function(n) {
    return n === t || W2(n, t, e);
  };
}
function K2(t, e) {
  return t != null && e in Object(t);
}
function G2(t, e, n) {
  e = Bp(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var s = ta(e[r]);
    if (!(o = t != null && n(t, s)))
      break;
    t = t[s];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && vl(i) && Op(s, i) && (Xt(t) || Hp(t)));
}
function J2(t, e) {
  return t != null && G2(t, e, K2);
}
var Z2 = 1, X2 = 2;
function Y2(t, e) {
  return wl(t) && Wp(e) ? qp(ta(t), e) : function(n) {
    var r = Kb(n, t);
    return r === void 0 && r === e ? J2(n, t) : na(e, r, Z2 | X2);
  };
}
function Q2(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function ey(t) {
  return function(e) {
    return Fp(e, t);
  };
}
function ty(t) {
  return wl(t) ? Q2(ta(t)) : ey(t);
}
function ny(t) {
  return typeof t == "function" ? t : t == null ? yl : typeof t == "object" ? Xt(t) ? Y2(t[0], t[1]) : U2(t) : ty(t);
}
var Ea = function() {
  return Nt.Date.now();
}, ry = "Expected a function", iy = Math.max, oy = Math.min;
function sy(t, e, n) {
  var r, i, o, s, a, u, l = 0, c = !1, d = !1, f = !0;
  if (typeof t != "function")
    throw new TypeError(ry);
  e = Oc(e) || 0, er(n) && (c = !!n.leading, d = "maxWait" in n, o = d ? iy(Oc(n.maxWait) || 0, e) : o, f = "trailing" in n ? !!n.trailing : f);
  function p(v) {
    var E = r, M = i;
    return r = i = void 0, l = v, s = t.apply(M, E), s;
  }
  function h(v) {
    return l = v, a = setTimeout(b, e), c ? p(v) : s;
  }
  function m(v) {
    var E = v - u, M = v - l, O = e - E;
    return d ? oy(O, o - M) : O;
  }
  function g(v) {
    var E = v - u, M = v - l;
    return u === void 0 || E >= e || E < 0 || d && M >= o;
  }
  function b() {
    var v = Ea();
    if (g(v))
      return x(v);
    a = setTimeout(b, m(v));
  }
  function x(v) {
    return a = void 0, f && r ? p(v) : (r = i = void 0, s);
  }
  function w() {
    a !== void 0 && clearTimeout(a), l = 0, r = u = i = a = void 0;
  }
  function y() {
    return a === void 0 ? s : x(Ea());
  }
  function k() {
    var v = Ea(), E = g(v);
    if (r = arguments, i = this, u = v, E) {
      if (a === void 0)
        return h(u);
      if (d)
        return clearTimeout(a), a = setTimeout(b, e), p(u);
    }
    return a === void 0 && (a = setTimeout(b, e)), s;
  }
  return k.cancel = w, k.flush = y, k;
}
function Oa(t) {
  return Qn(t) && Lp(t);
}
var ay = 200;
function uy(t, e, n, r) {
  var i = -1, o = vg, s = !0, a = t.length, u = [], l = e.length;
  if (!a)
    return u;
  n && (e = Tp(e, Dp(n))), e.length >= ay && (o = $p, s = !1, e = new Di(e));
  e:
    for (; ++i < a; ) {
      var c = t[i], d = n == null ? c : n(c);
      if (c = c !== 0 ? c : 0, s && d === d) {
        for (var f = l; f--; )
          if (e[f] === d)
            continue e;
        u.push(c);
      } else o(e, d, r) || u.push(c);
    }
  return u;
}
function ly(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
var cy = Cg(function(t, e) {
  var n = ly(e);
  return Oa(n) && (n = void 0), Oa(t) ? uy(t, Gb(e, 1, Oa), ny(n)) : [];
});
function dy(t, e) {
  return na(t, e);
}
var fy = "Expected a function";
function bi(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(fy);
  return er(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), sy(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
function py(t, e, n) {
  return t < e ? e : t > n ? n : t;
}
const yu = (t) => typeof t == "number", yi = (t) => typeof t == "string", Dr = (t) => typeof t == "boolean", hy = (t) => typeof t == "function", vi = (t, e = "px") => {
  if (!t) return t;
  const n = yu(t) ? String(t) : t, r = Number.parseFloat(n), i = n.match(/[a-zA-Z%]+$/), o = i ? i[0] : e;
  return Number.isNaN(r) ? t : r + o;
};
function my(t, e) {
  const { extensions: n = [] } = t.extensionManager ?? {};
  return !!n.find((i) => i.name === e);
}
function Up(t, e) {
  const { state: n } = Xs(), r = $(() => Dr(S(t)) ? Qo : yi(n.defaultMarkdownTheme) && n.defaultMarkdownTheme ? n.defaultMarkdownTheme : Qo), i = $(() => ({
    [`markdown-theme-${S(r)}`]: !!yi(S(r))
  }));
  function o(a) {
    !Dr(S(t)) && S(t) !== a && (e == null || e(a));
  }
  return Gt(r, (a) => o(a)), Gt(t, (a) => {
    a && yi(a) && n.defaultMarkdownTheme !== a && (n.defaultMarkdownTheme = a);
  }), (() => {
    n.defaultMarkdownTheme && o(n.defaultMarkdownTheme);
  })(), {
    markdownThemeStyle: i
  };
}
function Kp(t) {
  return fm() ? (pm(t), !0) : !1;
}
const Or = /* @__PURE__ */ new WeakMap(), gy = (...t) => {
  var e;
  const n = t[0], r = (e = Zs()) == null ? void 0 : e.proxy;
  if (r == null)
    throw new Error("injectLocal must be called in setup");
  return Or.has(r) && n in Or.get(r) ? Or.get(r)[n] : hm(...t);
}, by = (t, e) => {
  var n;
  const r = (n = Zs()) == null ? void 0 : n.proxy;
  if (r == null)
    throw new Error("provideLocal must be called in setup");
  Or.has(r) || Or.set(r, /* @__PURE__ */ Object.create(null));
  const i = Or.get(r);
  i[t] = e, cu(t, e);
};
function yy(t, e) {
  const n = Symbol(t.name || "InjectionState"), r = void 0;
  return [(...s) => {
    const a = t(...s);
    return by(n, a), a;
  }, () => gy(n, r)];
}
function Gp(t) {
  return typeof t == "function" ? t() : S(t);
}
const Jp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const vy = Object.prototype.toString, wy = (t) => vy.call(t) === "[object Object]", xy = () => {
}, ky = Jp ? window : void 0, Cy = Jp ? window.document : void 0;
function vu(t) {
  var e;
  const n = Gp(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
function Zc(...t) {
  let e, n, r, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, i] = t, e = ky) : [e, n, r, i] = t, !e)
    return xy;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], s = () => {
    o.forEach((c) => c()), o.length = 0;
  }, a = (c, d, f, p) => (c.addEventListener(d, f, p), () => c.removeEventListener(d, f, p)), u = Gt(
    () => [vu(e), Gp(i)],
    ([c, d]) => {
      if (s(), !c)
        return;
      const f = wy(d) ? { ...d } : d;
      o.push(
        ...n.flatMap((p) => r.map((h) => a(c, p, h, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    u(), s();
  };
  return Kp(l), l;
}
function Ay() {
  const t = J(!1), e = Zs();
  return e && hl(() => {
    t.value = !0;
  }, e), t;
}
function Sy(t) {
  const e = Ay();
  return $(() => (e.value, !!t()));
}
const Xc = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function Ty(t, e = {}) {
  const {
    document: n = Cy,
    autoExit: r = !1
  } = e, i = $(() => {
    var b;
    return (b = vu(t)) != null ? b : n == null ? void 0 : n.querySelector("html");
  }), o = J(!1), s = $(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((b) => n && b in n || i.value && b in i.value)), a = $(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((b) => n && b in n || i.value && b in i.value)), u = $(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((b) => n && b in n || i.value && b in i.value)), l = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((b) => n && b in n), c = Sy(() => i.value && n && s.value !== void 0 && a.value !== void 0 && u.value !== void 0), d = () => l ? (n == null ? void 0 : n[l]) === i.value : !1, f = () => {
    if (u.value) {
      if (n && n[u.value] != null)
        return n[u.value];
      {
        const b = i.value;
        if ((b == null ? void 0 : b[u.value]) != null)
          return !!b[u.value];
      }
    }
    return !1;
  };
  async function p() {
    if (!(!c.value || !o.value)) {
      if (a.value)
        if ((n == null ? void 0 : n[a.value]) != null)
          await n[a.value]();
        else {
          const b = i.value;
          (b == null ? void 0 : b[a.value]) != null && await b[a.value]();
        }
      o.value = !1;
    }
  }
  async function h() {
    if (!c.value || o.value)
      return;
    f() && await p();
    const b = i.value;
    s.value && (b == null ? void 0 : b[s.value]) != null && (await b[s.value](), o.value = !0);
  }
  async function m() {
    await (o.value ? p() : h());
  }
  const g = () => {
    const b = f();
    (!b || b && d()) && (o.value = b);
  };
  return Zc(n, Xc, g, !1), Zc(() => vu(i), Xc, g, !1), r && Kp(p), {
    isSupported: c,
    isFullscreen: o,
    enter: h,
    exit: p,
    toggle: m
  };
}
const [My, kl] = yy(() => {
  const { state: t } = Xs(), e = Rr({
    extensions: t.extensions ?? [],
    defaultLang: Cp,
    defaultMarkdownTheme: Qo,
    isFullscreen: !1,
    color: void 0,
    highlight: void 0
  }), n = $(() => e.isFullscreen);
  function r() {
    e.isFullscreen = !e.isFullscreen;
  }
  return ur(() => {
    e.extensions = t.extensions, e.defaultLang = t.defaultLang, e.defaultMarkdownTheme = t.defaultMarkdownTheme;
  }), {
    state: e,
    isFullscreen: n,
    toggleFullscreen: r
  };
}), Yc = "[vuetify-pro-tiptap]";
class Zp {
  static warn(e) {
    console.warn(`${Yc}: ${e}`);
  }
  static error(e) {
    console.error(`${Yc}: ${e}`);
  }
}
function Ey(t) {
  return t = t || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: t,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(e, n) {
      const r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(e, n) {
      const r = t.get(e);
      r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : t.set(e, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(e, n) {
      let r = t.get(e);
      r && r.slice().map((i) => {
        i(n);
      }), r = t.get("*"), r && r.slice().map((i) => {
        i(e, n);
      });
    }
  };
}
const Oy = {
  "editor.remove": "Entfernen",
  "editor.words": "WÖRTER",
  "editor.characters": "ZEICHEN",
  "editor.default": "Standard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Mittel",
  "editor.size.large.tooltip": "Groß",
  "editor.bold.tooltip": "Fett",
  "editor.italic.tooltip": "Kursiv",
  "editor.underline.tooltip": "Unterstrichen",
  "editor.strike.tooltip": "Durchgestrichen",
  "editor.color.tooltip": "Farbe",
  "editor.highlight.tooltip": "Hervorheben",
  "editor.heading.tooltip": "Überschriften",
  "editor.heading.h1.tooltip": "Überschrift 1",
  "editor.heading.h2.tooltip": "Überschrift 2",
  "editor.heading.h3.tooltip": "Überschrift 3",
  "editor.heading.h4.tooltip": "Überschrift 4",
  "editor.heading.h5.tooltip": "Überschrift 5",
  "editor.heading.h6.tooltip": "Überschrift 6",
  "editor.paragraph.tooltip": "Absatz",
  "editor.textalign.tooltip": "Ausrichten",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Zentriert",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Blocksatz",
  "editor.fontFamily.tooltip": "Schriftart",
  "editor.fontSize.tooltip": "Schriftgröße",
  "editor.superscript.tooltip": "Hochgestellt",
  "editor.subscript.tooltip": "Tiefgestellt",
  "editor.bulletlist.tooltip": "Aufzählungsliste",
  "editor.orderedlist.tooltip": "Nummerierte Liste",
  "editor.tasklist.tooltip": "Aufgabenliste",
  "editor.indent.tooltip": "Einzug",
  "editor.outdent.tooltip": "Ausrücken",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link entfernen",
  "editor.link.open": "Link öffnen",
  "editor.link.dialog.title": "Link einfügen",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "In neuem Tab öffnen",
  "editor.link.dialog.button.apply": "Anwenden",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Bild",
  "editor.image.float.left.tooltip": "Links ausrichten",
  "editor.image.float.none.tooltip": "Keine Ausrichtung",
  "editor.image.float.right.tooltip": "Rechts ausrichten",
  "editor.image.dialog.title": "Bild einfügen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Hochladen",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt"
}, Ny = {
  "editor.remove": "Remove",
  "editor.words": "WORDS",
  "editor.characters": "CHARACTERS",
  "editor.default": "default",
  "editor.size.small.tooltip": "Small",
  "editor.size.medium.tooltip": "Medium",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Bold",
  "editor.italic.tooltip": "Italic",
  "editor.underline.tooltip": "Underline",
  "editor.strike.tooltip": "Strike",
  "editor.color.tooltip": "Color",
  "editor.highlight.tooltip": "Highlight",
  "editor.heading.tooltip": "Headings",
  "editor.heading.h1.tooltip": "Heading 1",
  "editor.heading.h2.tooltip": "Heading 2",
  "editor.heading.h3.tooltip": "Heading 3",
  "editor.heading.h4.tooltip": "Heading 4",
  "editor.heading.h5.tooltip": "Heading 5",
  "editor.heading.h6.tooltip": "Heading 6",
  "editor.paragraph.tooltip": "Paragraph",
  "editor.textalign.tooltip": "Align",
  "editor.textalign.left.tooltip": "Left",
  "editor.textalign.center.tooltip": "Center",
  "editor.textalign.right.tooltip": "Right",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font family",
  "editor.fontSize.tooltip": "Font size",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Bullet List",
  "editor.orderedlist.tooltip": "Ordered List",
  "editor.tasklist.tooltip": "Task List",
  "editor.indent.tooltip": "Indent",
  "editor.outdent.tooltip": "Outdent",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Unlink",
  "editor.link.open": "Open link",
  "editor.link.dialog.title": "Insert link",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "Open in new tab",
  "editor.link.dialog.button.apply": "apply",
  "editor.markdownTheme.tooltip": "Theme",
  "editor.image.tooltip": "Image",
  "editor.image.float.left.tooltip": "Float left",
  "editor.image.float.none.tooltip": "Float none",
  "editor.image.float.right.tooltip": "Float right",
  "editor.image.dialog.title": "Insert image",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Lock original aspect ratio",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "apply",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Insert video",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "apply",
  "editor.table.tooltip": "Table",
  "editor.table.menu.insert_table": "Insert Table",
  "editor.table.menu.insert_table.with_header_row": "With header row",
  "editor.table.menu.add_column_before": "Add Column Before",
  "editor.table.menu.add_column_after": "Add Column After",
  "editor.table.menu.delete_column": "Delete Column",
  "editor.table.menu.add_row_before": "Add Row Before",
  "editor.table.menu.add_row_after": "Add Row After",
  "editor.table.menu.delete_row": "Delete Row",
  "editor.table.menu.merge_or_split_cells": "Merge Or Split Cells",
  "editor.table.menu.delete_table": "Delete Table",
  "editor.blockquote.tooltip": "Blockquote",
  "editor.horizontalrule.tooltip": "Horizontal Rule",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code Block",
  "editor.clear.tooltip": "Clear Format",
  "editor.undo.tooltip": "Undo",
  "editor.redo.tooltip": "Redo",
  "editor.fullscreen.tooltip.fullscreen": "Fullscreen",
  "editor.fullscreen.tooltip.exit": "Fullscreen Exit"
}, Ly = {
  "editor.remove": "Rimuovi",
  "editor.words": "Parole",
  "editor.characters": "Caratteri",
  "editor.default": "Predefinito",
  "editor.size.small.tooltip": "Piccolo",
  "editor.size.medium.tooltip": "Medio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Grassetto",
  "editor.italic.tooltip": "Corsivo",
  "editor.underline.tooltip": "Sottolineato",
  "editor.strike.tooltip": "Barrato",
  "editor.color.tooltip": "Colore",
  "editor.highlight.tooltip": "Evidenzia",
  "editor.heading.tooltip": "Intestazioni",
  "editor.heading.h1.tooltip": "Intestzione 1",
  "editor.heading.h2.tooltip": "Intestzione 2",
  "editor.heading.h3.tooltip": "Intestzione 3",
  "editor.heading.h4.tooltip": "Intestazione 4",
  "editor.heading.h5.tooltip": "Intestazione 5",
  "editor.heading.h6.tooltip": "Intestazione 6",
  "editor.paragraph.tooltip": "Paragrafo",
  "editor.textalign.tooltip": "Allineamento",
  "editor.textalign.left.tooltip": "Sinistra",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Destra",
  "editor.textalign.justify.tooltip": "Giustificato",
  "editor.fontFamily.tooltip": "Tipo carattere",
  "editor.fontSize.tooltip": "Dimensione carattere",
  "editor.superscript.tooltip": "Apice",
  "editor.subscript.tooltip": "Pedice",
  "editor.bulletlist.tooltip": "Elenco puntato",
  "editor.orderedlist.tooltip": "Elenco numerato",
  "editor.tasklist.tooltip": "Elenco attività",
  "editor.indent.tooltip": "Aumenta rientro",
  "editor.outdent.tooltip": "Riduci rientro",
  "editor.link.tooltip": "Aggiungi collegamento",
  "editor.link.unlink.tooltip": "Rimuovi collegamento",
  "editor.link.open": "Apri collegamento",
  "editor.link.dialog.title": "Inserisci collegamento",
  "editor.link.dialog.link": "Collegamento",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "Apri in una nuova finestra",
  "editor.link.dialog.button.apply": "Applica",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Immagine",
  "editor.image.float.left.tooltip": "Allinea a sinistra",
  "editor.image.float.none.tooltip": "Nessun allineamento",
  "editor.image.float.right.tooltip": "Allinea a destra",
  "editor.image.dialog.title": "Inserisci immagine",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carica",
  "editor.image.dialog.form.link": "Collegamento",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Blocca le proporzioni originali",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "Applica",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Inserisci video",
  "editor.video.dialog.link": "Collegamento",
  "editor.video.dialog.button.apply": "Applica",
  "editor.table.tooltip": "Tabella",
  "editor.table.menu.insert_table": "Inserisci tabella",
  "editor.table.menu.insert_table.with_header_row": "Con riga intestazione",
  "editor.table.menu.add_column_before": "Aggiungi colonna prima",
  "editor.table.menu.add_column_after": "Aggiungi colonna dopo",
  "editor.table.menu.delete_column": "Elimina colonna",
  "editor.table.menu.add_row_before": "Aggiungi riga prima",
  "editor.table.menu.add_row_after": "Aggiungi riga dopo",
  "editor.table.menu.delete_row": "Elimina riga",
  "editor.table.menu.merge_or_split_cells": "Unisci o dividi celle",
  "editor.table.menu.delete_table": "Elimina tabella",
  "editor.blockquote.tooltip": "Citazione",
  "editor.horizontalrule.tooltip": "Linea orizzontale",
  "editor.code.tooltip": "Codice",
  "editor.codeblock.tooltip": "Blocco di codice",
  "editor.clear.tooltip": "Rimuovi formattazione",
  "editor.undo.tooltip": "Annulla",
  "editor.redo.tooltip": "Ripristina",
  "editor.fullscreen.tooltip.fullscreen": "Schermo intero",
  "editor.fullscreen.tooltip.exit": "Esci da schermo intero"
}, Vy = {
  "editor.remove": "Verwijderen",
  "editor.words": "WOORDEN",
  "editor.characters": "KARAKTERS",
  "editor.default": "standaard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Middelmatig",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Dikgedrukt",
  "editor.italic.tooltip": "Cursief",
  "editor.underline.tooltip": "Onderstreept",
  "editor.strike.tooltip": "Doorgetrokken",
  "editor.color.tooltip": "Kleur",
  "editor.highlight.tooltip": "Markeren",
  "editor.heading.tooltip": "Koppen",
  "editor.heading.h1.tooltip": "Kop 1",
  "editor.heading.h2.tooltip": "Kop 2",
  "editor.heading.h3.tooltip": "Kop 3",
  "editor.heading.h4.tooltip": "Kop 4",
  "editor.heading.h5.tooltip": "Kop 5",
  "editor.heading.h6.tooltip": "Kop 6",
  "editor.paragraph.tooltip": "Paragraaf",
  "editor.textalign.tooltip": "Uitlijnen",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Midden",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font familie",
  "editor.fontSize.tooltip": "Font grootte",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Ongenummerde lijst",
  "editor.orderedlist.tooltip": "Genummerde lijst",
  "editor.tasklist.tooltip": "Takenlijst",
  "editor.indent.tooltip": "Inspringing vergroten",
  "editor.outdent.tooltip": "Inspringing verkleinen",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link verwijderen",
  "editor.link.open": "Link openen",
  "editor.link.dialog.title": "Link invoegen",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "Openen in nieuw tabblad",
  "editor.link.dialog.button.apply": "Toepassen",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Afbeelding",
  "editor.image.float.left.tooltip": "Zweef links",
  "editor.image.float.none.tooltip": "Niet zweven",
  "editor.image.float.right.tooltip": "Zweef rechts",
  "editor.image.dialog.title": "Afbeelding invoegen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Originele aspect ratio vastzetten",
  "editor.image.dialog.form.file": "Bestand",
  "editor.image.dialog.button.apply": "Toepassen",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video invoegen",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "Toepassen",
  "editor.table.tooltip": "Tabel",
  "editor.table.menu.insert_table": "Tabel invoegen",
  "editor.table.menu.insert_table.with_header_row": "Met kop rij",
  "editor.table.menu.add_column_before": "Kolom ervoor invoegen",
  "editor.table.menu.add_column_after": "Kolom erna invoegen",
  "editor.table.menu.delete_column": "Kolom verwijderen",
  "editor.table.menu.add_row_before": "Rij ervoor invoegen",
  "editor.table.menu.add_row_after": "Rij erna invoegen",
  "editor.table.menu.delete_row": "Rij verwijderen",
  "editor.table.menu.merge_or_split_cells": "Cellen samenvoegen/splitsen",
  "editor.table.menu.delete_table": "Tabel verwijderen",
  "editor.blockquote.tooltip": "Citaatblok",
  "editor.horizontalrule.tooltip": "Horizontale lijn",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code blok",
  "editor.clear.tooltip": "Formattering verwijderen",
  "editor.undo.tooltip": "Stap terug",
  "editor.redo.tooltip": "Stap verder",
  "editor.fullscreen.tooltip.fullscreen": "Volledig scherm",
  "editor.fullscreen.tooltip.exit": "Volledig scherm verlaten"
}, Hy = {
  "editor.remove": "删除",
  "editor.words": "单词",
  "editor.characters": "字符",
  "editor.default": "默认",
  "editor.size.small.tooltip": "小尺寸",
  "editor.size.medium.tooltip": "中等尺寸",
  "editor.size.large.tooltip": "铺满",
  "editor.bold.tooltip": "粗体",
  "editor.italic.tooltip": "斜体",
  "editor.underline.tooltip": "下划线",
  "editor.strike.tooltip": "中划线",
  "editor.color.tooltip": "文本颜色",
  "editor.highlight.tooltip": "文本高亮",
  "editor.heading.tooltip": "标题",
  "editor.heading.h1.tooltip": "标题 1",
  "editor.heading.h2.tooltip": "标题 2",
  "editor.heading.h3.tooltip": "标题 3",
  "editor.heading.h4.tooltip": "标题 4",
  "editor.heading.h5.tooltip": "标题 5",
  "editor.heading.h6.tooltip": "标题 6",
  "editor.paragraph.tooltip": "正文",
  "editor.textalign.tooltip": "对齐方式",
  "editor.textalign.left.tooltip": "左对齐",
  "editor.textalign.center.tooltip": "居中对齐",
  "editor.textalign.right.tooltip": "右对齐",
  "editor.textalign.justify.tooltip": "两端对齐",
  "editor.fontFamily.tooltip": "字体",
  "editor.fontSize.tooltip": "字体大小",
  "editor.superscript.tooltip": "上标",
  "editor.subscript.tooltip": "下标",
  "editor.bulletlist.tooltip": "无序列表",
  "editor.orderedlist.tooltip": "有序列表",
  "editor.tasklist.tooltip": "任务列表",
  "editor.indent.tooltip": "增加缩进",
  "editor.outdent.tooltip": "减少缩进",
  "editor.link.tooltip": "网络链接",
  "editor.link.unlink.tooltip": "取消链接",
  "editor.link.open": "打开链接",
  "editor.link.dialog.title": "插入链接",
  "editor.link.dialog.link": "链接",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "在新标签页中打开",
  "editor.link.dialog.button.apply": "应用",
  "editor.markdownTheme.tooltip": "主题",
  "editor.image.tooltip": "图片",
  "editor.image.float.left.tooltip": "左浮动",
  "editor.image.float.none.tooltip": "无浮动",
  "editor.image.float.right.tooltip": "右浮动",
  "editor.image.dialog.title": "插入图片",
  "editor.image.dialog.tab.url": "网络图片",
  "editor.image.dialog.tab.upload": "本地图片",
  "editor.image.dialog.form.link": "链接",
  "editor.image.dialog.form.alt": "说明",
  "editor.image.dialog.form.aspectRatio": "锁定原有长宽比",
  "editor.image.dialog.form.file": "文件",
  "editor.image.dialog.button.apply": "应用",
  "editor.video.tooltip": "视频",
  "editor.video.dialog.title": "插入视频",
  "editor.video.dialog.link": "网络链接",
  "editor.video.dialog.button.apply": "应用",
  "editor.table.tooltip": "表格",
  "editor.table.menu.insert_table": "插入表格",
  "editor.table.menu.insert_table.with_header_row": "带标题行",
  "editor.table.menu.add_column_before": "向左插入一列",
  "editor.table.menu.add_column_after": "向右插入一列",
  "editor.table.menu.delete_column": "删除列",
  "editor.table.menu.add_row_before": "向上插入一行",
  "editor.table.menu.add_row_after": "向下插入一行",
  "editor.table.menu.delete_row": "删除行",
  "editor.table.menu.merge_or_split_cells": "合并或拆分单元格",
  "editor.table.menu.delete_table": "删除表格",
  "editor.blockquote.tooltip": "引用",
  "editor.horizontalrule.tooltip": "分隔线",
  "editor.code.tooltip": "代码",
  "editor.codeblock.tooltip": "代码块",
  "editor.clear.tooltip": "清除格式",
  "editor.undo.tooltip": "撤销",
  "editor.redo.tooltip": "重做",
  "editor.fullscreen.tooltip.fullscreen": "全屏",
  "editor.fullscreen.tooltip.exit": "退出全屏"
}, Ry = {
  nl: Vy,
  zhHans: Hy,
  en: Ny,
  de: Oy,
  it: Ly
}, xr = {
  lang: Cp,
  message: Ry
};
class Dy {
  constructor() {
    bc(this, "emitter");
    this.emitter = Ey();
  }
  get lang() {
    return xr.lang;
  }
  set lang(e) {
    if (!this.isLangSupported(e)) {
      Zp.warn(`Can't find the current language "${e}", Using language "${xr.lang}" by default`);
      return;
    }
    xr.lang = e, this.emitter.emit("lang", e);
  }
  get message() {
    return xr.message;
  }
  set message(e) {
    xr.message = e;
  }
  loadLangMessage(e) {
    return this.message[e];
  }
  isLangSupported(e) {
    return Object.keys(this.message).includes(e);
  }
  setLang(e) {
    this.lang = e;
  }
  registerWatchLang(e) {
    return this.emitter.on("lang", e), {
      unsubscribe: () => {
        this.emitter.off("lang", e);
      }
    };
  }
  setMessage(e, n) {
    this.message[e] = n;
  }
  buildI18nHandler(e) {
    e || (e = this.lang);
    const n = this.loadLangMessage(e);
    return function(i) {
      return n[i] || i;
    };
  }
}
const wu = new Dy(), tn = () => {
  const t = J(xr.lang), e = $(() => wu.buildI18nHandler(S(t)));
  return ur((n) => {
    const r = wu.registerWatchLang((i) => {
      t.value = i;
    });
    n(() => {
      r.unsubscribe();
    });
  }), {
    lang: t,
    t: e
  };
};
function Ee(t) {
  this.content = t;
}
Ee.prototype = {
  constructor: Ee,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, i = r.find(t), o = r.content.slice();
    return i == -1 ? o.push(n || t, e) : (o[i + 1] = e, n && (o[i] = n)), new Ee(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Ee(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Ee([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Ee(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(t);
    return i.splice(o == -1 ? i.length : o, 0, e, n), new Ee(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = Ee.from(t), t.size ? new Ee(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Ee.from(t), t.size ? new Ee(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Ee.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
Ee.from = function(t) {
  if (t instanceof Ee) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new Ee(e);
};
function Xp(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let i = t.child(r), o = e.child(r);
    if (i == o) {
      n += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return n;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        n++;
      return n;
    }
    if (i.content.size || o.content.size) {
      let s = Xp(i.content, o.content, n + 1);
      if (s != null)
        return s;
    }
    n += i.nodeSize;
  }
}
function Yp(t, e, n, r) {
  for (let i = t.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: n, b: r };
    let s = t.child(--i), a = e.child(--o), u = s.nodeSize;
    if (s == a) {
      n -= u, r -= u;
      continue;
    }
    if (!s.sameMarkup(a))
      return { a: n, b: r };
    if (s.isText && s.text != a.text) {
      let l = 0, c = Math.min(s.text.length, a.text.length);
      for (; l < c && s.text[s.text.length - l - 1] == a.text[a.text.length - l - 1]; )
        l++, n--, r--;
      return { a: n, b: r };
    }
    if (s.content.size || a.content.size) {
      let l = Yp(s.content, a.content, n - 1, r - 1);
      if (l)
        return l;
    }
    n -= u, r -= u;
  }
}
class A {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, i = 0, o) {
    for (let s = 0, a = 0; a < n; s++) {
      let u = this.content[s], l = a + u.nodeSize;
      if (l > e && r(u, i + a, o || null, s) !== !1 && u.content.size) {
        let c = a + 1;
        u.nodesBetween(Math.max(0, e - c), Math.min(u.content.size, n - c), r, i + c);
      }
      a = l;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, n, (a, u) => {
      let l = a.isText ? a.text.slice(Math.max(e, u) - u, n - u) : a.isLeaf ? i ? typeof i == "function" ? i(a) : i : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
      a.isBlock && (a.isLeaf && l || a.isTextblock) && r && (s ? s = !1 : o += r), o += l;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new A(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], i = 0;
    if (n > e)
      for (let o = 0, s = 0; s < n; o++) {
        let a = this.content[o], u = s + a.nodeSize;
        u > e && ((s < e || u > n) && (a.isText ? a = a.cut(Math.max(0, e - s), Math.min(a.text.length, n - s)) : a = a.cut(Math.max(0, e - s - 1), Math.min(a.content.size, n - s - 1))), r.push(a), i += a.nodeSize), s = u;
      }
    return new A(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? A.empty : e == 0 && n == this.content.length ? this : new A(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let i = this.content.slice(), o = this.size + n.nodeSize - r.nodeSize;
    return i[e] = n, new A(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new A([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new A(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let i = this.content[n];
      e(i, r, n), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return Xp(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Yp(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, n = -1) {
    if (e == 0)
      return ko(0, e);
    if (e == this.size)
      return ko(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || n > 0 ? ko(r + 1, s) : ko(r, i);
      i = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return A.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new A(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return A.empty;
    let n, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (n || (n = e.slice(0, i)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new A(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return A.empty;
    if (e instanceof A)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new A([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
A.empty = new A([], 0);
const Na = { index: 0, offset: 0 };
function ko(t, e) {
  return Na.index = t, Na.offset = e, Na;
}
function ns(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!ns(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !ns(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let ee = class xu {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (n || (n = e.slice(0, i)), n.push(this), r = !0), n && n.push(o);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && ns(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let i = r.create(n.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return xu.none;
    if (e instanceof xu)
      return [e];
    let n = e.slice();
    return n.sort((r, i) => r.type.rank - i.type.rank), n;
  }
};
ee.none = [];
class rs extends Error {
}
class N {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = eh(this.content, e + this.openStart, n);
    return r && new N(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new N(Qp(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return N.empty;
    let r = n.openStart || 0, i = n.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new N(A.fromJSON(e, n.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new N(e, r, i);
  }
}
N.empty = new N(A.empty, 0, 0);
function Qp(t, e, n) {
  let { index: r, offset: i } = t.findIndex(e), o = t.maybeChild(r), { index: s, offset: a } = t.findIndex(n);
  if (i == e || o.isText) {
    if (a != n && !t.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(Qp(o.content, e - i - 1, n - i - 1)));
}
function eh(t, e, n, r) {
  let { index: i, offset: o } = t.findIndex(e), s = t.maybeChild(i);
  if (o == e || s.isText)
    return t.cut(0, e).append(n).append(t.cut(e));
  let a = eh(s.content, e - o - 1, n);
  return a && t.replaceChild(i, s.copy(a));
}
function _y(t, e, n) {
  if (n.openStart > t.depth)
    throw new rs("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new rs("Inconsistent open depths");
  return th(t, e, n, 0);
}
function th(t, e, n, r) {
  let i = t.index(r), o = t.node(r);
  if (i == e.index(r) && r < t.depth - n.openStart) {
    let s = th(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let s = t.parent, a = s.content;
      return Gn(s, a.cut(0, t.parentOffset).append(n.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: s, end: a } = Py(n, t);
      return Gn(o, rh(t, s, a, e, r));
    }
  else return Gn(o, is(t, e, r));
}
function nh(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new rs("Cannot join " + e.type.name + " onto " + t.type.name);
}
function ku(t, e, n) {
  let r = t.node(n);
  return nh(r, e.node(n)), r;
}
function Kn(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function wi(t, e, n, r) {
  let i = (e || t).node(n), o = 0, s = e ? e.index(n) : i.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (Kn(t.nodeAfter, r), o++));
  for (let a = o; a < s; a++)
    Kn(i.child(a), r);
  e && e.depth == n && e.textOffset && Kn(e.nodeBefore, r);
}
function Gn(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function rh(t, e, n, r, i) {
  let o = t.depth > i && ku(t, e, i + 1), s = r.depth > i && ku(n, r, i + 1), a = [];
  return wi(null, t, i, a), o && s && e.index(i) == n.index(i) ? (nh(o, s), Kn(Gn(o, rh(t, e, n, r, i + 1)), a)) : (o && Kn(Gn(o, is(t, e, i + 1)), a), wi(e, n, i, a), s && Kn(Gn(s, is(n, r, i + 1)), a)), wi(r, null, i, a), new A(a);
}
function is(t, e, n) {
  let r = [];
  if (wi(null, t, n, r), t.depth > n) {
    let i = ku(t, e, n + 1);
    Kn(Gn(i, is(t, e, n + 1)), r);
  }
  return wi(e, null, n, r), new A(r);
}
function Py(t, e) {
  let n = e.depth - t.openStart, i = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    i = e.node(o).copy(A.from(i));
  return {
    start: i.resolveNoCache(t.openStart + n),
    end: i.resolveNoCache(i.content.size - t.openEnd - n)
  };
}
class _i {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(n);
    return r ? e.child(n).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], i = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return ee.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), i = e.maybeChild(n);
    if (!r) {
      let a = r;
      r = i, i = a;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new ss(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], i = 0, o = n;
    for (let s = e; ; ) {
      let { index: a, offset: u } = s.content.findIndex(o), l = o - u;
      if (r.push(s, a, i + u), !l || (s = s.child(a), s.isText))
        break;
      o = l - 1, i += u + 1;
    }
    return new _i(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = Qc.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == n)
          return s;
      }
    else
      Qc.set(e, r = new Iy());
    let i = r.elts[r.i] = _i.resolve(e, n);
    return r.i = (r.i + 1) % By, i;
  }
}
class Iy {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const By = 12, Qc = /* @__PURE__ */ new WeakMap();
class ss {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Fy = /* @__PURE__ */ Object.create(null);
let Ut = class Cu {
  /**
  @internal
  */
  constructor(e, n, r, i = ee.none) {
    this.type = e, this.attrs = n, this.marks = i, this.content = r || A.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, i = 0) {
    this.content.nodesBetween(e, n, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, n, r, i) {
    return this.content.textBetween(e, n, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && ns(this.attrs, n || e.defaultAttrs || Fy) && ee.sameSet(this.marks, r || ee.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Cu(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Cu(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return N.empty;
    let i = this.resolve(e), o = this.resolve(n), s = r ? 0 : i.sharedDepth(n), a = i.start(s), l = i.node(s).content.cut(i.pos - a, o.pos - a);
    return new N(l, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return _y(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: i } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (i == e || n.isText)
        return n;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let i = this.content.child(n - 1);
    return { node: i, index: n - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return _i.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return _i.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let i = !1;
    return n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), ih(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = A.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), a = s && s.matchFragment(this.content, n);
    if (!a || !a.validEnd)
      return !1;
    for (let u = i; u < o; u++)
      if (!this.type.allowsMarks(r.child(u).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, n);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = ee.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!ee.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let i = A.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
Ut.prototype.text = void 0;
class as extends Ut {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    if (super(e, n, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : ih(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new as(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new as(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function ih(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class nr {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new zy(e, n);
    if (r.next == null)
      return nr.empty;
    let i = oh(r);
    r.next && r.err("Unexpected trailing text");
    let o = Gy(Ky(i));
    return Jy(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let i = this;
    for (let o = n; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let i = [this];
    function o(s, a) {
      let u = s.matchFragment(e, r);
      if (u && (!n || u.validEnd))
        return A.from(a.map((l) => l.createAndFill()));
      for (let l = 0; l < s.next.length; l++) {
        let { type: c, next: d } = s.next[l];
        if (!(c.isText || c.hasRequiredAttrs()) && i.indexOf(d) == -1) {
          i.push(d);
          let f = o(d, a.concat(c));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let a = i; a.type; a = a.via)
          s.push(a.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: a, next: u } = o.next[s];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in n) && (!i.type || u.validEnd) && (r.push({ match: a.contentMatch, type: a, via: i }), n[a.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && n(r.next[i].next);
    }
    return n(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
nr.empty = new nr(!0);
class zy {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function oh(t) {
  let e = [];
  do
    e.push($y(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function $y(t) {
  let e = [];
  do
    e.push(jy(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function jy(t) {
  let e = Uy(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = Wy(t, e);
    else
      break;
  return e;
}
function ed(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function Wy(t, e) {
  let n = ed(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = ed(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function qy(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let i = [];
  for (let o in n) {
    let s = n[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && t.err("No node type or group '" + e + "' found"), i;
}
function Uy(t) {
  if (t.eat("(")) {
    let e = oh(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = qy(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Ky(t) {
  let e = [[]];
  return i(o(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(s, a, u) {
    let l = { term: u, to: a };
    return e[s].push(l), l;
  }
  function i(s, a) {
    s.forEach((u) => u.to = a);
  }
  function o(s, a) {
    if (s.type == "choice")
      return s.exprs.reduce((u, l) => u.concat(o(l, a)), []);
    if (s.type == "seq")
      for (let u = 0; ; u++) {
        let l = o(s.exprs[u], a);
        if (u == s.exprs.length - 1)
          return l;
        i(l, a = n());
      }
    else if (s.type == "star") {
      let u = n();
      return r(a, u), i(o(s.expr, u), u), [r(u)];
    } else if (s.type == "plus") {
      let u = n();
      return i(o(s.expr, a), u), i(o(s.expr, u), u), [r(u)];
    } else {
      if (s.type == "opt")
        return [r(a)].concat(o(s.expr, a));
      if (s.type == "range") {
        let u = a;
        for (let l = 0; l < s.min; l++) {
          let c = n();
          i(o(s.expr, u), c), u = c;
        }
        if (s.max == -1)
          i(o(s.expr, u), u);
        else
          for (let l = s.min; l < s.max; l++) {
            let c = n();
            r(u, c), i(o(s.expr, u), c), u = c;
          }
        return [r(u)];
      } else {
        if (s.type == "name")
          return [r(a, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function sh(t, e) {
  return e - t;
}
function td(t, e) {
  let n = [];
  return r(e), n.sort(sh);
  function r(i) {
    let o = t[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    n.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: a, to: u } = o[s];
      !a && n.indexOf(u) == -1 && r(u);
    }
  }
}
function Gy(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(td(t, 0));
  function n(r) {
    let i = [];
    r.forEach((s) => {
      t[s].forEach(({ term: a, to: u }) => {
        if (!a)
          return;
        let l;
        for (let c = 0; c < i.length; c++)
          i[c][0] == a && (l = i[c][1]);
        td(t, u).forEach((c) => {
          l || i.push([a, l = []]), l.indexOf(c) == -1 && l.push(c);
        });
      });
    });
    let o = e[r.join(",")] = new nr(r.indexOf(t.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let a = i[s][1].sort(sh);
      o.next.push({ type: i[s][0], next: e[a.join(",")] || n(a) });
    }
    return o;
  }
}
function Jy(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let i = r[n], o = !i.validEnd, s = [];
    for (let a = 0; a < i.next.length; a++) {
      let { type: u, next: l } = i.next[a];
      s.push(u.name), o && !(u.isText || u.hasRequiredAttrs()) && (o = !1), r.indexOf(l) == -1 && r.push(l);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function ah(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function uh(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let i = e && e[r];
    if (i === void 0) {
      let o = t[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = i;
  }
  return n;
}
function lh(t, e, n, r) {
  for (let i in e)
    if (!(i in t))
      throw new RangeError(`Unsupported attribute ${i} for ${n} of type ${i}`);
  for (let i in t) {
    let o = t[i];
    o.validate && o.validate(e[i]);
  }
}
function ch(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new Xy(t, r, e[r]);
  return n;
}
let nd = class dh {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = ch(e, r.attrs), this.defaultAttrs = ah(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == nr.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : uh(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Ut(this, this.computeAttrs(e), A.from(n), ee.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = A.from(n), this.checkContent(n), new Ut(this, this.computeAttrs(e), n, ee.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = A.from(n), n.size) {
      let s = this.contentMatch.fillBefore(n);
      if (!s)
        return null;
      n = s.append(n);
    }
    let i = this.contentMatch.matchFragment(n), o = i && i.fillBefore(A.empty, !0);
    return o ? new Ut(this, e, n.append(o), ee.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    lh(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : ee.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new dh(o, n, s));
    let i = n.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function Zy(t, e, n) {
  let r = n.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class Xy {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Zy(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class ra {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    this.name = e, this.rank = n, this.schema = r, this.spec = i, this.attrs = ch(e, i.attrs), this.excluded = null;
    let o = ah(this.attrs);
    this.instance = o ? new ee(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ee(this, uh(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new ra(o, i++, n, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    lh(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class fh {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let i in e)
      n[i] = e[i];
    n.nodes = Ee.from(e.nodes), n.marks = Ee.from(e.marks || {}), this.nodes = nd.compile(this.spec.nodes, this), this.marks = ra.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", a = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = nr.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = a == "_" ? null : a ? rd(this, a.split(" ")) : a == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : rd(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof nd) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new as(r, r.defaultAttrs, e, ee.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Ut.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return ee.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function rd(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = t.marks[i], s = o;
    if (o)
      n.push(o);
    else
      for (let a in t.marks) {
        let u = t.marks[a];
        (i == "_" || u.spec.group && u.spec.group.split(" ").indexOf(i) > -1) && n.push(s = u);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function Yy(t) {
  return t.tag != null;
}
function Qy(t) {
  return t.style != null;
}
class xn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((i) => {
      if (Yy(i))
        this.tags.push(i);
      else if (Qy(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new od(this, n, !1);
    return r.addAll(e, ee.none, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new od(this, n, !0);
    return r.addAll(e, ee.none, n.from, n.to), N.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (n3(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], a = s.style;
      if (!(a.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != n))) {
        if (s.getAttrs) {
          let u = s.getAttrs(n);
          if (u === !1)
            continue;
          s.attrs = u || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < n.length; s++) {
        let a = n[s];
        if ((a.priority == null ? 50 : a.priority) < o)
          break;
      }
      n.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = sd(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = sd(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new xn(e, xn.schemaRules(e)));
  }
}
const ph = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, e3 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, hh = { ol: !0, ul: !0 }, Pi = 1, Au = 2, $o = 4;
function id(t, e, n) {
  return e != null ? (e ? Pi : 0) | (e === "full" ? Au : 0) : t && t.whitespace == "pre" ? Pi | Au : n & -5;
}
class Co {
  constructor(e, n, r, i, o, s) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = ee.none, this.match = o || (s & $o ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(A.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Pi)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let n = A.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(A.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !ph.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class od {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = n.topNode, o, s = id(null, n.preserveWhitespace, 0) | (r ? $o : 0);
    i ? o = new Co(i.type, i.attrs, ee.none, !0, n.topMatch || i.type.contentMatch, s) : r ? o = new Co(null, null, ee.none, !0, null, s) : o = new Co(e.schema.topNodeType, null, ee.none, !0, null, s), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, n) {
    e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue, i = this.top, o = i.options & Au ? "full" : this.localPreserveWS || (i.options & Pi) > 0;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        o !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let s = i.content[i.content.length - 1], a = e.previousSibling;
        (!s || a && a.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), n), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), a;
    hh.hasOwnProperty(s) && this.parser.normalizeLists && t3(e);
    let u = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, r));
    e: if (u ? u.ignore : e3.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!u || u.skip || u.closeParent) {
      u && u.closeParent ? this.open = Math.max(0, this.open - 1) : u && u.skip.nodeType && (e = u.skip);
      let l, c = this.needsBlock;
      if (ph.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), l = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let d = u && u.skip ? n : this.readStyles(e, n);
      d && this.addAll(e, d), l && this.sync(o), this.needsBlock = c;
    } else {
      let l = this.readStyles(e, n);
      l && this.addElementByRule(e, u, l, u.consuming === !1 ? a : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let a = void 0; ; ) {
            let u = this.parser.matchStyle(o, s, this, a);
            if (!u)
              break;
            if (u.ignore)
              return null;
            if (u.clearMark ? n = n.filter((l) => !u.clearMark(l)) : n = n.concat(this.parser.schema.marks[u.mark].create(u.attrs)), u.consuming === !1)
              a = u;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r, i) {
    let o, s;
    if (n.node)
      if (s = this.parser.schema.nodes[n.node], s.isLeaf)
        this.insertNode(s.create(n.attrs), r) || this.leafFallback(e, r);
      else {
        let u = this.enter(s, n.attrs || null, r, n.preserveWhitespace);
        u && (o = !0, r = u);
      }
    else {
      let u = this.parser.schema.marks[n.mark];
      r = r.concat(u.create(n.attrs));
    }
    let a = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((u) => this.insertNode(u, r));
    else {
      let u = e;
      typeof n.contentElement == "string" ? u = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? u = n.contentElement(e) : n.contentElement && (u = n.contentElement), this.findAround(e, u, !0), this.addAll(u, r), this.findAround(e, u, !1);
    }
    o && this.sync(a) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, a = i == null ? null : e.childNodes[i]; s != a; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, n);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n) {
    let r, i;
    for (let o = this.open; o >= 0; o--) {
      let s = this.nodes[o], a = s.findWrapping(e);
      if (a && (!r || r.length > a.length) && (r = a, i = s, !a.length) || s.solid)
        break;
    }
    if (!r)
      return null;
    this.sync(i);
    for (let o = 0; o < r.length; o++)
      n = this.enterInner(r[o], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (n = this.enterInner(i, null, n));
    }
    let r = this.findPlace(e, n);
    if (r) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(e.type));
      let o = ee.none;
      for (let s of r.concat(e.marks))
        (i.type ? i.type.allowsMarkType(s.type) : ad(s.type, e.type)) && (o = s.addToSet(o));
      return i.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, i) {
    let o = this.findPlace(e.create(n), r);
    return o && (o = this.enterInner(e, n, r, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, n, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let a = id(e, o, s.options);
    s.options & $o && s.content.length == 0 && (a |= $o);
    let u = ee.none;
    return r = r.filter((l) => (s.type ? s.type.allowsMarkType(l.type) : ad(l.type, e)) ? (u = l.addToSet(u), !1) : !0), this.nodes.push(new Co(e, n, u, i, null, a)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e)
        return this.open = n, !0;
      this.localPreserveWS && (this.nodes[n].options |= Pi);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && n.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (a, u) => {
      for (; a >= 0; a--) {
        let l = n[a];
        if (l == "") {
          if (a == n.length - 1 || a == 0)
            continue;
          for (; u >= o; u--)
            if (s(a - 1, u))
              return !0;
          return !1;
        } else {
          let c = u > 0 || u == 0 && i ? this.nodes[u].type : r && u >= o ? r.node(u - o).type : null;
          if (!c || c.name != l && !c.isInGroup(l))
            return !1;
          u--;
        }
      }
      return !0;
    };
    return s(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function t3(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && hh.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function n3(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function sd(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function ad(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(t))
      continue;
    let o = [], s = (a) => {
      o.push(a);
      for (let u = 0; u < a.edgeCount; u++) {
        let { type: l, next: c } = a.edge(u);
        if (l == e || o.indexOf(c) < 0 && s(c))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class Nn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = La(n).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let a = 0, u = 0;
        for (; a < o.length && u < s.marks.length; ) {
          let l = s.marks[u];
          if (!this.marks[l.type.name]) {
            u++;
            continue;
          }
          if (!l.eq(o[a][0]) || l.type.spec.spanning === !1)
            break;
          a++, u++;
        }
        for (; a < o.length; )
          i = o.pop()[1];
        for (; u < s.marks.length; ) {
          let l = s.marks[u++], c = this.serializeMark(l, s.isInline, n);
          c && (o.push([l, i]), i.appendChild(c.dom), i = c.contentDOM || c.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: i } = jo(La(n), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, n);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let i = this.marks[e.type.name];
    return i && jo(La(r), i(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, i) {
    return jo(e, n, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Nn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = ud(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return ud(e.marks);
  }
}
function ud(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function La(t) {
  return t.document || window.document;
}
const ld = /* @__PURE__ */ new WeakMap();
function r3(t) {
  let e = ld.get(t);
  return e === void 0 && ld.set(t, e = i3(t)), e;
}
function i3(t) {
  let e = null;
  function n(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            n(r[i]);
      else
        for (let i in r)
          n(r[i]);
  }
  return n(t), e;
}
function jo(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = r3(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
  let a, u = n ? t.createElementNS(n, i) : t.createElement(i), l = e[1], c = 1;
  if (l && typeof l == "object" && l.nodeType == null && !Array.isArray(l)) {
    c = 2;
    for (let d in l)
      if (l[d] != null) {
        let f = d.indexOf(" ");
        f > 0 ? u.setAttributeNS(d.slice(0, f), d.slice(f + 1), l[d]) : u.setAttribute(d, l[d]);
      }
  }
  for (let d = c; d < e.length; d++) {
    let f = e[d];
    if (f === 0) {
      if (d < e.length - 1 || d > c)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: u, contentDOM: u };
    } else {
      let { dom: p, contentDOM: h } = jo(t, f, n, r);
      if (u.appendChild(p), h) {
        if (a)
          throw new RangeError("Multiple content holes");
        a = h;
      }
    }
  }
  return { dom: u, contentDOM: a };
}
const mh = 65535, gh = Math.pow(2, 16);
function o3(t, e) {
  return t + e * gh;
}
function cd(t) {
  return t & mh;
}
function s3(t) {
  return (t - (t & mh)) / gh;
}
const bh = 1, yh = 2, Wo = 4, vh = 8;
class Su {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & vh) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (bh | Wo)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (yh | Wo)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Wo) > 0;
  }
}
class Ke {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && Ke.empty)
      return Ke.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = cd(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        n += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + n + s3(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let u = this.ranges[a] - (this.inverted ? i : 0);
      if (u > e)
        break;
      let l = this.ranges[a + o], c = this.ranges[a + s], d = u + l;
      if (e <= d) {
        let f = l ? e == u ? -1 : e == d ? 1 : n : n, p = u + i + (f < 0 ? 0 : c);
        if (r)
          return p;
        let h = e == (n < 0 ? u : d) ? null : o3(a / 3, e - u), m = e == u ? yh : e == d ? bh : Wo;
        return (n < 0 ? e != u : e != d) && (m |= vh), new Su(p, m, h);
      }
      i += c - l;
    }
    return r ? e + i : new Su(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, i = cd(n), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let u = this.ranges[a] - (this.inverted ? r : 0);
      if (u > e)
        break;
      let l = this.ranges[a + o], c = u + l;
      if (e <= c && a == i * 3)
        return !0;
      r += this.ranges[a + s] - l;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], a = s - (this.inverted ? o : 0), u = s + (this.inverted ? 0 : o), l = this.ranges[i + n], c = this.ranges[i + r];
      e(a, a + l, u, u + c), o += c - l;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Ke(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Ke.empty : new Ke(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Ke.empty = new Ke([]);
class Nr {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], n, r = 0, i = e.length) {
    this.maps = e, this.mirror = n, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new Nr(this.maps, this.mirror, e, n);
  }
  /**
  @internal
  */
  copy() {
    return new Nr(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.to = this.maps.push(e), n != null && this.setMirror(this.maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this.maps.length; n < e.maps.length; n++) {
      let i = e.getMirror(n);
      this.appendMap(e.maps[n], i != null && i < n ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this.maps.length + e.maps.length; n >= 0; n--) {
      let i = e.getMirror(n);
      this.appendMap(e.maps[n].invert(), i != null && i > n ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Nr();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this.maps[o], a = s.mapResult(e, n);
      if (a.recover != null) {
        let u = this.getMirror(o);
        if (u != null && u > o && u < this.to) {
          o = u, e = this.maps[u].recover(a.recover);
          continue;
        }
      }
      i |= a.delInfo, e = a.pos;
    }
    return r ? e : new Su(e, i, null);
  }
}
const Va = /* @__PURE__ */ Object.create(null);
class Pe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Ke.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Va[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in Va)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Va[e] = n, n.prototype.jsonID = e, n;
  }
}
class ve {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new ve(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ve(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, i) {
    try {
      return ve.ok(e.replace(n, r, i));
    } catch (o) {
      if (o instanceof rs)
        return ve.fail(o.message);
      throw o;
    }
  }
}
function Cl(t, e, n) {
  let r = [];
  for (let i = 0; i < t.childCount; i++) {
    let o = t.child(i);
    o.content.size && (o = o.copy(Cl(o.content, e, o))), o.isInline && (o = e(o, n, i)), r.push(o);
  }
  return A.fromArray(r);
}
class bn extends Pe {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new N(Cl(n.content, (s, a) => !s.isAtom || !a.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), n.openStart, n.openEnd);
    return ve.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Ct(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new bn(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof bn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new bn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new bn(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Pe.jsonID("addMark", bn);
class Ct extends Pe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new N(Cl(n.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), n.openStart, n.openEnd);
    return ve.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new bn(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Ct(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ct && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ct(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Ct(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Pe.jsonID("removeMark", Ct);
class yn extends Pe {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ve.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return ve.fromReplace(e, this.pos, this.pos + 1, new N(A.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let i = 0; i < n.marks.length; i++)
          if (!n.marks[i].isInSet(r))
            return new yn(this.pos, n.marks[i]);
        return new yn(this.pos, this.mark);
      }
    }
    return new _r(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new yn(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new yn(n.pos, e.markFromJSON(n.mark));
  }
}
Pe.jsonID("addNodeMark", yn);
class _r extends Pe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ve.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return ve.fromReplace(e, this.pos, this.pos + 1, new N(A.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new yn(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new _r(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new _r(n.pos, e.markFromJSON(n.mark));
  }
}
Pe.jsonID("removeNodeMark", _r);
class ke extends Pe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, i = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Tu(e, this.from, this.to) ? ve.fail("Structure replace would overwrite content") : ve.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Ke([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ke(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new ke(n.pos, Math.max(n.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof ke) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? N.empty : new N(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ke(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? N.empty : new N(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ke(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ke(n.from, n.to, N.fromJSON(e, n.slice), !!n.structure);
  }
}
Pe.jsonID("replace", ke);
class Ae extends Pe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, i, o, s, a = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = a;
  }
  apply(e) {
    if (this.structure && (Tu(e, this.from, this.gapFrom) || Tu(e, this.gapTo, this.to)))
      return ve.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return ve.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? ve.fromReplace(e, this.from, this.to, r) : ve.fail("Content does not fit in gap");
  }
  getMap() {
    return new Ke([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new Ae(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || i < n.pos || o > r.pos ? null : new Ae(n.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new Ae(n.from, n.to, n.gapFrom, n.gapTo, N.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
Pe.jsonID("replaceAround", Ae);
function Tu(t, e, n) {
  let r = t.resolve(e), i = n - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function a3(t, e, n, r) {
  let i = [], o = [], s, a;
  t.doc.nodesBetween(e, n, (u, l, c) => {
    if (!u.isInline)
      return;
    let d = u.marks;
    if (!r.isInSet(d) && c.type.allowsMarkType(r.type)) {
      let f = Math.max(l, e), p = Math.min(l + u.nodeSize, n), h = r.addToSet(d);
      for (let m = 0; m < d.length; m++)
        d[m].isInSet(h) || (s && s.to == f && s.mark.eq(d[m]) ? s.to = p : i.push(s = new Ct(f, p, d[m])));
      a && a.to == f ? a.to = p : o.push(a = new bn(f, p, r));
    }
  }), i.forEach((u) => t.step(u)), o.forEach((u) => t.step(u));
}
function u3(t, e, n, r) {
  let i = [], o = 0;
  t.doc.nodesBetween(e, n, (s, a) => {
    if (!s.isInline)
      return;
    o++;
    let u = null;
    if (r instanceof ra) {
      let l = s.marks, c;
      for (; c = r.isInSet(l); )
        (u || (u = [])).push(c), l = c.removeFromSet(l);
    } else r ? r.isInSet(s.marks) && (u = [r]) : u = s.marks;
    if (u && u.length) {
      let l = Math.min(a + s.nodeSize, n);
      for (let c = 0; c < u.length; c++) {
        let d = u[c], f;
        for (let p = 0; p < i.length; p++) {
          let h = i[p];
          h.step == o - 1 && d.eq(i[p].style) && (f = h);
        }
        f ? (f.to = l, f.step = o) : i.push({ style: d, from: Math.max(a, e), to: l, step: o });
      }
    }
  }), i.forEach((s) => t.step(new Ct(s.from, s.to, s.style)));
}
function Al(t, e, n, r = n.contentMatch, i = !0) {
  let o = t.doc.nodeAt(e), s = [], a = e + 1;
  for (let u = 0; u < o.childCount; u++) {
    let l = o.child(u), c = a + l.nodeSize, d = r.matchType(l.type);
    if (!d)
      s.push(new ke(a, c, N.empty));
    else {
      r = d;
      for (let f = 0; f < l.marks.length; f++)
        n.allowsMarkType(l.marks[f].type) || t.step(new Ct(a, c, l.marks[f]));
      if (i && l.isText && n.whitespace != "pre") {
        let f, p = /\r?\n|\r/g, h;
        for (; f = p.exec(l.text); )
          h || (h = new N(A.from(n.schema.text(" ", n.allowedMarks(l.marks))), 0, 0)), s.push(new ke(a + f.index, a + f.index + f[0].length, h));
      }
    }
    a = c;
  }
  if (!r.validEnd) {
    let u = r.fillBefore(A.empty, !0);
    t.replace(a, a, new N(u, 0, 0));
  }
  for (let u = s.length - 1; u >= 0; u--)
    t.step(s[u]);
}
function l3(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Xr(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth; ; --r) {
    let i = t.$from.node(r), o = t.$from.index(r), s = t.$to.indexAfter(r);
    if (r < t.depth && i.canReplace(o, s, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !l3(i, o, s))
      break;
  }
  return null;
}
function c3(t, e, n) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), a = i.after(o + 1), u = s, l = a, c = A.empty, d = 0;
  for (let h = o, m = !1; h > n; h--)
    m || r.index(h) > 0 ? (m = !0, c = A.from(r.node(h).copy(c)), d++) : u--;
  let f = A.empty, p = 0;
  for (let h = o, m = !1; h > n; h--)
    m || i.after(h + 1) < i.end(h) ? (m = !0, f = A.from(i.node(h).copy(f)), p++) : l++;
  t.step(new Ae(u, l, s, a, new N(c.append(f), d, p), c.size - d, !0));
}
function Sl(t, e, n = null, r = t) {
  let i = d3(t, e), o = i && f3(r, e);
  return o ? i.map(dd).concat({ type: e, attrs: n }).concat(o.map(dd)) : null;
}
function dd(t) {
  return { type: t, attrs: null };
}
function d3(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return n.canReplaceWith(r, i, s) ? o : null;
}
function f3(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let u = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let l = r; u && l < i; l++)
    u = u.matchType(n.child(l).type);
  return !u || !u.validEnd ? null : s;
}
function p3(t, e, n) {
  let r = A.empty;
  for (let s = n.length - 1; s >= 0; s--) {
    if (r.size) {
      let a = n[s].type.contentMatch.matchFragment(r);
      if (!a || !a.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = A.from(n[s].type.create(n[s].attrs, r));
  }
  let i = e.start, o = e.end;
  t.step(new Ae(i, o, i, o, new N(r, 0, 0), n.length, !0));
}
function h3(t, e, n, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (s, a) => {
    let u = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, u) && m3(t.doc, t.mapping.slice(o).map(a), r)) {
      let l = null;
      if (r.schema.linebreakReplacement) {
        let p = r.whitespace == "pre", h = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        p && !h ? l = !1 : !p && h && (l = !0);
      }
      l === !1 && xh(t, s, a, o), Al(t, t.mapping.slice(o).map(a, 1), r, void 0, l === null);
      let c = t.mapping.slice(o), d = c.map(a, 1), f = c.map(a + s.nodeSize, 1);
      return t.step(new Ae(d, f, d + 1, f - 1, new N(A.from(r.create(u, null, s.marks)), 0, 0), 1, !0)), l === !0 && wh(t, s, a, o), !1;
    }
  });
}
function wh(t, e, n, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, a = /\r?\n|\r/g;
      for (; s = a.exec(i.text); ) {
        let u = t.mapping.slice(r).map(n + 1 + o + s.index);
        t.replaceWith(u, u + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function xh(t, e, n, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function m3(t, e, n) {
  let r = t.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function g3(t, e, n, r, i) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let s = n.create(r, null, i || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, s);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new Ae(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new N(A.from(s), 0, 0), 1, !0));
}
function Lr(t, e, n = 1, r) {
  let i = t.resolve(e), o = i.depth - n, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let l = i.depth - 1, c = n - 2; l > o; l--, c--) {
    let d = i.node(l), f = i.index(l);
    if (d.type.spec.isolating)
      return !1;
    let p = d.content.cutByIndex(f, d.childCount), h = r && r[c + 1];
    h && (p = p.replaceChild(0, h.type.create(h.attrs)));
    let m = r && r[c] || d;
    if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(p))
      return !1;
  }
  let a = i.indexAfter(o), u = r && r[0];
  return i.node(o).canReplaceWith(a, a, u ? u.type : i.node(o + 1).type);
}
function b3(t, e, n = 1, r) {
  let i = t.doc.resolve(e), o = A.empty, s = A.empty;
  for (let a = i.depth, u = i.depth - n, l = n - 1; a > u; a--, l--) {
    o = A.from(i.node(a).copy(o));
    let c = r && r[l];
    s = A.from(c ? c.type.create(c.attrs, s) : i.node(a).copy(s));
  }
  t.step(new ke(e, e, new N(o.append(s), n, n), !0));
}
function Ln(t, e) {
  let n = t.resolve(e), r = n.index();
  return kh(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function y3(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(s), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function kh(t, e) {
  return !!(t && e && !t.isLeaf && y3(t, e));
}
function ia(t, e, n = -1) {
  let r = t.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, a = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : n > 0 ? (o = r.node(i + 1), a++, s = r.node(i).maybeChild(a)) : (o = r.node(i).maybeChild(a - 1), s = r.node(i + 1)), o && !o.isTextblock && kh(o, s) && r.node(i).canReplace(a, a + 1))
      return e;
    if (i == 0)
      break;
    e = n < 0 ? r.before(i) : r.after(i);
  }
}
function v3(t, e, n) {
  let r = null, { linebreakReplacement: i } = t.doc.type.schema, o = t.doc.resolve(e - n), s = o.node().type;
  if (i && s.inlineContent) {
    let c = s.whitespace == "pre", d = !!s.contentMatch.matchType(i);
    c && !d ? r = !1 : !c && d && (r = !0);
  }
  let a = t.steps.length;
  if (r === !1) {
    let c = t.doc.resolve(e + n);
    xh(t, c.node(), c.before(), a);
  }
  s.inlineContent && Al(t, e + n - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let u = t.mapping.slice(a), l = u.map(e - n);
  if (t.step(new ke(l, u.map(e + n, -1), N.empty, !0)), r === !0) {
    let c = t.doc.resolve(l);
    wh(t, c.node(), c.before(), t.steps.length);
  }
  return t;
}
function w3(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function Ch(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let i = n.content;
  for (let o = 0; o < n.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let a = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, u = r.index(s) + (a > 0 ? 1 : 0), l = r.node(s), c = !1;
      if (o == 1)
        c = l.canReplace(u, u, i);
      else {
        let d = l.contentMatchAt(u).findWrapping(i.firstChild.type);
        c = d && l.canReplaceWith(u, u, d[0]);
      }
      if (c)
        return a == 0 ? r.pos : a < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function oa(t, e, n = e, r = N.empty) {
  if (e == n && !r.size)
    return null;
  let i = t.resolve(e), o = t.resolve(n);
  return Ah(i, o, r) ? new ke(e, n, r) : new x3(i, o, r).fit();
}
function Ah(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class x3 {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = A.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = A.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let l = this.findFittable();
      l ? this.placeNodes(l) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, a = i.depth;
    for (; s && a && o.childCount == 1; )
      o = o.firstChild.content, s--, a--;
    let u = new N(o, s, a);
    return e > -1 ? new Ae(r.pos, e, this.$to.pos, this.$to.end(), u, n) : u.size || r.pos != this.$to.pos ? new ke(r.pos, i.pos, u) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = Ha(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: u, match: l } = this.frontier[a], c, d = null;
          if (n == 1 && (s ? l.matchType(s.type) || (d = l.fillBefore(A.from(s), !1)) : o && u.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, inject: d };
          if (n == 2 && s && (c = l.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, wrap: c };
          if (o && l.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = Ha(e, n);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new N(e, n + 1, Math.max(r, i.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = Ha(e, n);
    if (i.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + i.size;
      this.unplaced = new N(di(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new N(di(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: i, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, a = r ? r.content : s.content, u = s.openStart - e, l = 0, c = [], { match: d, type: f } = this.frontier[n];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        c.push(i.child(m));
      d = d.matchFragment(i);
    }
    let p = a.size + e - (s.content.size - s.openEnd);
    for (; l < a.childCount; ) {
      let m = a.child(l), g = d.matchType(m.type);
      if (!g)
        break;
      l++, (l > 1 || u == 0 || m.content.size) && (d = g, c.push(Sh(m.mark(f.allowedMarks(m.marks)), l == 1 ? u : 0, l == a.childCount ? p : -1)));
    }
    let h = l == a.childCount;
    h || (p = -1), this.placed = fi(this.placed, n, A.from(c)), this.frontier[n].match = d, h && p < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = a; m < p; m++) {
      let b = g.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), g = b.content;
    }
    this.unplaced = h ? e == 0 ? N.empty : new N(di(s.content, e - 1, 1), e - 1, p < 0 ? s.openEnd : e - 1) : new N(di(s.content, e, l), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Ra(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: i } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), s = Ra(e, n, i, r, o);
      if (s) {
        for (let a = n - 1; a >= 0; a--) {
          let { match: u, type: l } = this.frontier[a], c = Ra(e, a, l, u, !0);
          if (!c || c.childCount)
            continue e;
        }
        return { depth: n, fit: s, move: o ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = fi(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = fi(this.placed, this.depth, A.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(A.empty, !0);
    n.childCount && (this.placed = fi(this.placed, this.frontier.length, n));
  }
}
function di(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(di(t.firstChild.content, e - 1, n)));
}
function fi(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(fi(t.lastChild.content, e - 1, n)));
}
function Ha(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Sh(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Sh(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(A.empty, !0)))), t.copy(r);
}
function Ra(t, e, n, r, i) {
  let o = t.node(e), s = i ? t.indexAfter(e) : t.index(e);
  if (s == o.childCount && !n.compatibleContent(o.type))
    return null;
  let a = r.fillBefore(o.content, !0, s);
  return a && !k3(n, o.content, s) ? a : null;
}
function k3(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function C3(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function A3(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let i = t.doc.resolve(e), o = t.doc.resolve(n);
  if (Ah(i, o, r))
    return t.step(new ke(e, n, r));
  let s = Mh(i, t.doc.resolve(n));
  s[s.length - 1] == 0 && s.pop();
  let a = -(i.depth + 1);
  s.unshift(a);
  for (let f = i.depth, p = i.pos - 1; f > 0; f--, p--) {
    let h = i.node(f).type.spec;
    if (h.defining || h.definingAsContext || h.isolating)
      break;
    s.indexOf(f) > -1 ? a = f : i.before(f) == p && s.splice(1, 0, -f);
  }
  let u = s.indexOf(a), l = [], c = r.openStart;
  for (let f = r.content, p = 0; ; p++) {
    let h = f.firstChild;
    if (l.push(h), p == r.openStart)
      break;
    f = h.content;
  }
  for (let f = c - 1; f >= 0; f--) {
    let p = l[f], h = C3(p.type);
    if (h && !p.sameMarkup(i.node(Math.abs(a) - 1)))
      c = f;
    else if (h || !p.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let p = (f + c + 1) % (r.openStart + 1), h = l[p];
    if (h)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + u) % s.length], b = !0;
        g < 0 && (b = !1, g = -g);
        let x = i.node(g - 1), w = i.index(g - 1);
        if (x.canReplaceWith(w, w, h.type, h.marks))
          return t.replace(i.before(g), b ? o.after(g) : n, new N(Th(r.content, 0, r.openStart, p), p, r.openEnd));
      }
  }
  let d = t.steps.length;
  for (let f = s.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > d)); f--) {
    let p = s[f];
    p < 0 || (e = i.before(p), n = o.after(p));
  }
}
function Th(t, e, n, r, i) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Th(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(t).append(t);
    t = s.append(o.matchFragment(s).fillBefore(A.empty, !0));
  }
  return t;
}
function S3(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let i = w3(t.doc, e, r.type);
    i != null && (e = n = i);
  }
  t.replaceRange(e, n, new N(A.from(r), 0, 0));
}
function T3(t, e, n) {
  let r = t.doc.resolve(e), i = t.doc.resolve(n), o = Mh(r, i);
  for (let s = 0; s < o.length; s++) {
    let a = o[s], u = s == o.length - 1;
    if (u && a == 0 || r.node(a).type.contentMatch.validEnd)
      return t.delete(r.start(a), i.end(a));
    if (a > 0 && (u || r.node(a - 1).canReplace(r.index(a - 1), i.indexAfter(a - 1))))
      return t.delete(r.before(a), i.after(a));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && n > r.end(s) && i.end(s) - n != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return t.delete(r.before(s), n);
  t.delete(e, n);
}
function Mh(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = t.start(i);
    if (o < t.pos - (t.depth - i) || e.end(i) > e.pos + (e.depth - i) || t.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == t.depth && i == e.depth && t.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && n.push(i);
  }
  return n;
}
class Vr extends Pe {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ve.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let i = n.type.create(r, null, n.marks);
    return ve.fromReplace(e, this.pos, this.pos + 1, new N(A.from(i), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return Ke.empty;
  }
  invert(e) {
    return new Vr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Vr(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Vr(n.pos, n.attr, n.value);
  }
}
Pe.jsonID("attr", Vr);
class Ii extends Pe {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      n[i] = e.attrs[i];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return ve.ok(r);
  }
  getMap() {
    return Ke.empty;
  }
  invert(e) {
    return new Ii(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Ii(n.attr, n.value);
  }
}
Pe.jsonID("docAttr", Ii);
let Pr = class extends Error {
};
Pr = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Pr.prototype = Object.create(Error.prototype);
Pr.prototype.constructor = Pr;
Pr.prototype.name = "TransformError";
class Tl {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Nr();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new Pr(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = N.empty) {
    let i = oa(this.doc, e, n, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new N(A.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, N.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return A3(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return S3(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return T3(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return c3(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return v3(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return p3(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, i = null) {
    return h3(this, e, n, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, i) {
    return g3(this, e, n, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new Vr(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new Ii(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new yn(e, n)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    if (!(n instanceof ee)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (n = n.isInSet(r.marks), !n)
        return this;
    }
    return this.step(new _r(e, n)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, n = 1, r) {
    return b3(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return a3(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return u3(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Al(this, e, n, r), this;
  }
}
const Da = /* @__PURE__ */ Object.create(null);
class F {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Eh(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = N.empty) {
    let r = n.content.lastChild, i = null;
    for (let a = 0; a < n.openEnd; a++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let a = 0; a < s.length; a++) {
      let { $from: u, $to: l } = s[a], c = e.mapping.slice(o);
      e.replaceRange(c.map(u.pos), c.map(l.pos), a ? N.empty : n), a == 0 && hd(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: a } = i[o], u = e.mapping.slice(r), l = u.map(s.pos), c = u.map(a.pos);
      o ? e.deleteRange(l, c) : (e.replaceRangeWith(l, c, n), hd(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let i = e.parent.inlineContent ? new I(e) : kr(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = n < 0 ? kr(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : kr(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new ot(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return kr(e, e, 0, 0, 1) || new ot(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return kr(e, e, e.content.size, e.childCount, -1) || new ot(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Da[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in Da)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Da[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return I.between(this.$anchor, this.$head).getBookmark();
  }
}
F.prototype.visible = !0;
class Eh {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let fd = !1;
function pd(t) {
  !fd && !t.parent.inlineContent && (fd = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class I extends F {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    pd(e), pd(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return F.near(r);
    let i = e.resolve(n.map(this.anchor));
    return new I(i.parent.inlineContent ? i : r, r);
  }
  replace(e, n = N.empty) {
    if (super.replace(e, n), n == N.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof I && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new sa(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new I(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let i = e.resolve(n);
    return new this(i, r == n ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let i = e.pos - n.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = F.findFrom(n, r, !0) || F.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return F.near(n, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = n : (e = (F.findFrom(e, -r, !0) || F.findFrom(e, r, !0)).$anchor, e.pos < n.pos != i < 0 && (e = n))), new I(e, n);
  }
}
F.jsonID("text", I);
class sa {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new sa(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return I.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class P extends F {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: i } = n.mapResult(this.anchor), o = e.resolve(i);
    return r ? F.near(o) : new P(o);
  }
  content() {
    return new N(A.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof P && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ml(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new P(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new P(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
P.prototype.visible = !1;
F.jsonID("node", P);
class Ml {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new sa(r, r) : new Ml(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && P.isSelectable(r) ? new P(n) : F.near(n);
  }
}
class ot extends F {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = N.empty) {
    if (n == N.empty) {
      e.delete(0, e.doc.content.size);
      let r = F.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new ot(e);
  }
  map(e) {
    return new ot(e);
  }
  eq(e) {
    return e instanceof ot;
  }
  getBookmark() {
    return M3;
  }
}
F.jsonID("all", ot);
const M3 = {
  map() {
    return this;
  },
  resolve(t) {
    return new ot(t);
  }
};
function kr(t, e, n, r, i, o = !1) {
  if (e.inlineContent)
    return I.create(t, n);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let a = e.child(s);
    if (a.isAtom) {
      if (!o && P.isSelectable(a))
        return P.create(t, n - (i < 0 ? a.nodeSize : 0));
    } else {
      let u = kr(t, a, n + i, i < 0 ? a.childCount : 0, i, o);
      if (u)
        return u;
    }
    n += a.nodeSize * i;
  }
  return null;
}
function hd(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let i = t.steps[r];
  if (!(i instanceof ke || i instanceof Ae))
    return;
  let o = t.mapping.maps[r], s;
  o.forEach((a, u, l, c) => {
    s == null && (s = c);
  }), t.setSelection(F.near(t.doc.resolve(s), n));
}
const md = 1, gd = 2, bd = 4;
class E3 extends Tl {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | md) & -3, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & md) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= gd, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return ee.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & gd) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & -3, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, n = !0) {
    let r = this.selection;
    return n && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || ee.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, n, r) {
    let i = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = n), r = r ?? n, !e)
        return this.deleteRange(n, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(n);
        o = r == n ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(n, r, i.text(e, o)), this.selection.empty || this.setSelection(F.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, n) {
    return this.meta[typeof e == "string" ? e : e.key] = n, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= bd, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & bd) > 0;
  }
}
function yd(t, e) {
  return !e || !t ? t : t.bind(e);
}
class pi {
  constructor(e, n, r) {
    this.name = e, this.init = yd(n.init, r), this.apply = yd(n.apply, r);
  }
}
const O3 = [
  new pi("doc", {
    init(t) {
      return t.doc || t.schema.topNodeType.createAndFill();
    },
    apply(t) {
      return t.doc;
    }
  }),
  new pi("selection", {
    init(t, e) {
      return t.selection || F.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    }
  }),
  new pi("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, r) {
      return r.selection.$cursor ? t.storedMarks : null;
    }
  }),
  new pi("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    }
  })
];
class _a {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = O3.slice(), n && n.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new pi(r.key, r.spec.state, r));
    });
  }
}
class Tr {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, n = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != n) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let n = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let a = this.config.plugins[s];
        if (a.spec.appendTransaction) {
          let u = i ? i[s].n : 0, l = i ? i[s].state : this, c = u < n.length && a.spec.appendTransaction.call(a, u ? n.slice(u) : n, l, r);
          if (c && r.filterTransaction(c, s)) {
            if (c.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                i.push(d < s ? { state: r, n: n.length } : { state: this, n: 0 });
            }
            n.push(c), r = r.applyInner(c), o = !0;
          }
          i && (i[s] = { state: r, n: n.length });
        }
      }
      if (!o)
        return { state: r, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new Tr(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      n[o.name] = o.apply(e, this[o.name], this, n);
    }
    return n;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new E3(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new _a(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Tr(n);
    for (let i = 0; i < n.fields.length; i++)
      r[n.fields[i].name] = n.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let n = new _a(this.schema, e.plugins), r = n.fields, i = new Tr(n);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (n[r] = o.toJSON.call(i, this[i.key]));
      }
    return n;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, n, r) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new _a(e.schema, e.plugins), o = new Tr(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = Ut.fromJSON(e.schema, n.doc);
      else if (s.name == "selection")
        o.selection = F.fromJSON(o.doc, n.selection);
      else if (s.name == "storedMarks")
        n.storedMarks && (o.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let a in r) {
            let u = r[a], l = u.spec.state;
            if (u.key == s.name && l && l.fromJSON && Object.prototype.hasOwnProperty.call(n, a)) {
              o[s.name] = l.fromJSON.call(u, e, n[a], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function Oh(t, e, n) {
  for (let r in t) {
    let i = t[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Oh(i, e, {})), n[r] = i;
  }
  return n;
}
class se {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Oh(e.props, this, this.props), this.key = e.key ? e.key.key : Nh("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Pa = /* @__PURE__ */ Object.create(null);
function Nh(t) {
  return t in Pa ? t + "$" + ++Pa[t] : (Pa[t] = 0, t + "$");
}
class be {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Nh(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Oe = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Bi = function(t) {
  let e = t.assignedSlot || t.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Mu = null;
const zt = function(t, e, n) {
  let r = Mu || (Mu = document.createRange());
  return r.setEnd(t, n ?? t.nodeValue.length), r.setStart(t, e || 0), r;
}, N3 = function() {
  Mu = null;
}, rr = function(t, e, n, r) {
  return n && (vd(t, e, n, r, -1) || vd(t, e, n, r, 1));
}, L3 = /^(img|br|input|textarea|hr)$/i;
function vd(t, e, n, r, i) {
  for (; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : it(t))) {
      let o = t.parentNode;
      if (!o || o.nodeType != 1 || eo(t) || L3.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Oe(t) + (i < 0 ? 0 : 1), t = o;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (i < 0 ? -1 : 0)], t.contentEditable == "false")
        return !1;
      e = i < 0 ? it(t) : 0;
    } else
      return !1;
  }
}
function it(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function V3(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e)
      return t;
    if (t.nodeType == 1 && e > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e - 1], e = it(t);
    } else if (t.parentNode && !eo(t))
      e = Oe(t), t = t.parentNode;
    else
      return null;
  }
}
function H3(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e < t.nodeValue.length)
      return t;
    if (t.nodeType == 1 && e < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e], e = 0;
    } else if (t.parentNode && !eo(t))
      e = Oe(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
function R3(t, e, n) {
  for (let r = e == 0, i = e == it(t); r || i; ) {
    if (t == n)
      return !0;
    let o = Oe(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, i = i && o == it(t);
  }
}
function eo(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const aa = function(t) {
  return t.focusNode && rr(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function zn(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
function D3(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function _3(t, e, n) {
  if (t.caretPositionFromPoint)
    try {
      let r = t.caretPositionFromPoint(e, n);
      if (r)
        return { node: r.offsetNode, offset: Math.min(it(r.offsetNode), r.offset) };
    } catch {
    }
  if (t.caretRangeFromPoint) {
    let r = t.caretRangeFromPoint(e, n);
    if (r)
      return { node: r.startContainer, offset: Math.min(it(r.startContainer), r.startOffset) };
  }
}
const Mt = typeof navigator < "u" ? navigator : null, wd = typeof document < "u" ? document : null, Vn = Mt && Mt.userAgent || "", Eu = /Edge\/(\d+)/.exec(Vn), Lh = /MSIE \d/.exec(Vn), Ou = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Vn), je = !!(Lh || Ou || Eu), kn = Lh ? document.documentMode : Ou ? +Ou[1] : Eu ? +Eu[1] : 0, ht = !je && /gecko\/(\d+)/i.test(Vn);
ht && +(/Firefox\/(\d+)/.exec(Vn) || [0, 0])[1];
const Nu = !je && /Chrome\/(\d+)/.exec(Vn), Re = !!Nu, Vh = Nu ? +Nu[1] : 0, Be = !je && !!Mt && /Apple Computer/.test(Mt.vendor), Ir = Be && (/Mobile\/\w+/.test(Vn) || !!Mt && Mt.maxTouchPoints > 2), tt = Ir || (Mt ? /Mac/.test(Mt.platform) : !1), P3 = Mt ? /Win/.test(Mt.platform) : !1, jt = /Android \d/.test(Vn), to = !!wd && "webkitFontSmoothing" in wd.documentElement.style, I3 = to ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function B3(t) {
  let e = t.defaultView && t.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: t.documentElement.clientWidth,
    top: 0,
    bottom: t.documentElement.clientHeight
  };
}
function _t(t, e) {
  return typeof t == "number" ? t : t[e];
}
function F3(t) {
  let e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, r = e.height / t.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t.clientWidth * n,
    top: e.top,
    bottom: e.top + t.clientHeight * r
  };
}
function xd(t, e, n) {
  let r = t.someProp("scrollThreshold") || 0, i = t.someProp("scrollMargin") || 5, o = t.dom.ownerDocument;
  for (let s = n || t.dom; s; s = Bi(s)) {
    if (s.nodeType != 1)
      continue;
    let a = s, u = a == o.body, l = u ? B3(o) : F3(a), c = 0, d = 0;
    if (e.top < l.top + _t(r, "top") ? d = -(l.top - e.top + _t(i, "top")) : e.bottom > l.bottom - _t(r, "bottom") && (d = e.bottom - e.top > l.bottom - l.top ? e.top + _t(i, "top") - l.top : e.bottom - l.bottom + _t(i, "bottom")), e.left < l.left + _t(r, "left") ? c = -(l.left - e.left + _t(i, "left")) : e.right > l.right - _t(r, "right") && (c = e.right - l.right + _t(i, "right")), c || d)
      if (u)
        o.defaultView.scrollBy(c, d);
      else {
        let f = a.scrollLeft, p = a.scrollTop;
        d && (a.scrollTop += d), c && (a.scrollLeft += c);
        let h = a.scrollLeft - f, m = a.scrollTop - p;
        e = { left: e.left - h, top: e.top - m, right: e.right - h, bottom: e.bottom - m };
      }
    if (u || /^(fixed|sticky)$/.test(getComputedStyle(s).position))
      break;
  }
}
function z3(t) {
  let e = t.dom.getBoundingClientRect(), n = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = n + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let a = t.root.elementFromPoint(o, s);
    if (!a || a == t.dom || !t.dom.contains(a))
      continue;
    let u = a.getBoundingClientRect();
    if (u.top >= n - 20) {
      r = a, i = u.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Hh(t.dom) };
}
function Hh(t) {
  let e = [], n = t.ownerDocument;
  for (let r = t; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n); r = Bi(r))
    ;
  return e;
}
function $3({ refDOM: t, refTop: e, stack: n }) {
  let r = t ? t.getBoundingClientRect().top : 0;
  Rh(n, r == 0 ? 0 : r - e);
}
function Rh(t, e) {
  for (let n = 0; n < t.length; n++) {
    let { dom: r, top: i, left: o } = t[n];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let yr = null;
function j3(t) {
  if (t.setActive)
    return t.setActive();
  if (yr)
    return t.focus(yr);
  let e = Hh(t);
  t.focus(yr == null ? {
    get preventScroll() {
      return yr = { preventScroll: !0 }, !0;
    }
  } : void 0), yr || (yr = !1, Rh(e, 0));
}
function Dh(t, e) {
  let n, r = 2e8, i, o = 0, s = e.top, a = e.top, u, l;
  for (let c = t.firstChild, d = 0; c; c = c.nextSibling, d++) {
    let f;
    if (c.nodeType == 1)
      f = c.getClientRects();
    else if (c.nodeType == 3)
      f = zt(c).getClientRects();
    else
      continue;
    for (let p = 0; p < f.length; p++) {
      let h = f[p];
      if (h.top <= s && h.bottom >= a) {
        s = Math.max(h.bottom, s), a = Math.min(h.top, a);
        let m = h.left > e.left ? h.left - e.left : h.right < e.left ? e.left - h.right : 0;
        if (m < r) {
          n = c, r = m, i = m && n.nodeType == 3 ? {
            left: h.right < e.left ? h.right : h.left,
            top: e.top
          } : e, c.nodeType == 1 && m && (o = d + (e.left >= (h.left + h.right) / 2 ? 1 : 0));
          continue;
        }
      } else h.top > e.top && !u && h.left <= e.left && h.right >= e.left && (u = c, l = { left: Math.max(h.left, Math.min(h.right, e.left)), top: h.top });
      !n && (e.left >= h.right && e.top >= h.top || e.left >= h.left && e.top >= h.bottom) && (o = d + 1);
    }
  }
  return !n && u && (n = u, i = l, r = 0), n && n.nodeType == 3 ? W3(n, i) : !n || r && n.nodeType == 1 ? { node: t, offset: o } : Dh(n, i);
}
function W3(t, e) {
  let n = t.nodeValue.length, r = document.createRange();
  for (let i = 0; i < n; i++) {
    r.setEnd(t, i + 1), r.setStart(t, i);
    let o = an(r, 1);
    if (o.top != o.bottom && El(e, o))
      return { node: t, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: t, offset: 0 };
}
function El(t, e) {
  return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
}
function q3(t, e) {
  let n = t.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function U3(t, e, n) {
  let { node: r, offset: i } = Dh(e, n), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return t.docView.posFromDOM(r, i, o);
}
function K3(t, e, n, r) {
  let i = -1;
  for (let o = e, s = !1; o != t.dom; ) {
    let a = t.docView.nearestDesc(o, !0), u;
    if (!a)
      return null;
    if (a.dom.nodeType == 1 && (a.node.isBlock && a.parent || !a.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((u = a.dom.getBoundingClientRect()).width || u.height) && (a.node.isBlock && a.parent && (!s && u.left > r.left || u.top > r.top ? i = a.posBefore : (!s && u.right < r.left || u.bottom < r.top) && (i = a.posAfter), s = !0), !a.contentDOM && i < 0 && !a.node.isText))
      return (a.node.isBlock ? r.top < (u.top + u.bottom) / 2 : r.left < (u.left + u.right) / 2) ? a.posBefore : a.posAfter;
    o = a.dom.parentNode;
  }
  return i > -1 ? i : t.docView.posFromDOM(e, n, -1);
}
function _h(t, e, n) {
  let r = t.childNodes.length;
  if (r && n.top < n.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), o = i; ; ) {
      let s = t.childNodes[o];
      if (s.nodeType == 1) {
        let a = s.getClientRects();
        for (let u = 0; u < a.length; u++) {
          let l = a[u];
          if (El(e, l))
            return _h(s, e, l);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return t;
}
function G3(t, e) {
  let n = t.dom.ownerDocument, r, i = 0, o = _3(n, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top), a;
  if (!s || !t.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let l = t.dom.getBoundingClientRect();
    if (!El(e, l) || (s = _h(t.dom, e, l), !s))
      return null;
  }
  if (Be)
    for (let l = s; r && l; l = Bi(l))
      l.draggable && (r = void 0);
  if (s = q3(s, e), r) {
    if (ht && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let c = r.childNodes[i], d;
      c.nodeName == "IMG" && (d = c.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++;
    }
    let l;
    to && i && r.nodeType == 1 && (l = r.childNodes[i - 1]).nodeType == 1 && l.contentEditable == "false" && l.getBoundingClientRect().top >= e.top && i--, r == t.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? a = t.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (a = K3(t, r, i, e));
  }
  a == null && (a = U3(t, s, e));
  let u = t.docView.nearestDesc(s, !0);
  return { pos: a, inside: u ? u.posAtStart - u.border : -1 };
}
function kd(t) {
  return t.top < t.bottom || t.left < t.right;
}
function an(t, e) {
  let n = t.getClientRects();
  if (n.length) {
    let r = n[e < 0 ? 0 : n.length - 1];
    if (kd(r))
      return r;
  }
  return Array.prototype.find.call(n, kd) || t.getBoundingClientRect();
}
const J3 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Ph(t, e, n) {
  let { node: r, offset: i, atom: o } = t.docView.domFromPos(e, n < 0 ? -1 : 1), s = to || ht;
  if (r.nodeType == 3)
    if (s && (J3.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let u = an(zt(r, i, i), n);
      if (ht && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let l = an(zt(r, i - 1, i - 1), -1);
        if (l.top == u.top) {
          let c = an(zt(r, i, i + 1), -1);
          if (c.top != u.top)
            return si(c, c.left < l.left);
        }
      }
      return u;
    } else {
      let u = i, l = i, c = n < 0 ? 1 : -1;
      return n < 0 && !i ? (l++, c = -1) : n >= 0 && i == r.nodeValue.length ? (u--, c = 1) : n < 0 ? u-- : l++, si(an(zt(r, u, l), c), c < 0);
    }
  if (!t.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (n < 0 || i == it(r))) {
      let u = r.childNodes[i - 1];
      if (u.nodeType == 1)
        return Ia(u.getBoundingClientRect(), !1);
    }
    if (o == null && i < it(r)) {
      let u = r.childNodes[i];
      if (u.nodeType == 1)
        return Ia(u.getBoundingClientRect(), !0);
    }
    return Ia(r.getBoundingClientRect(), n >= 0);
  }
  if (o == null && i && (n < 0 || i == it(r))) {
    let u = r.childNodes[i - 1], l = u.nodeType == 3 ? zt(u, it(u) - (s ? 0 : 1)) : u.nodeType == 1 && (u.nodeName != "BR" || !u.nextSibling) ? u : null;
    if (l)
      return si(an(l, 1), !1);
  }
  if (o == null && i < it(r)) {
    let u = r.childNodes[i];
    for (; u.pmViewDesc && u.pmViewDesc.ignoreForCoords; )
      u = u.nextSibling;
    let l = u ? u.nodeType == 3 ? zt(u, 0, s ? 0 : 1) : u.nodeType == 1 ? u : null : null;
    if (l)
      return si(an(l, -1), !0);
  }
  return si(an(r.nodeType == 3 ? zt(r) : r, -n), n >= 0);
}
function si(t, e) {
  if (t.width == 0)
    return t;
  let n = e ? t.left : t.right;
  return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function Ia(t, e) {
  if (t.height == 0)
    return t;
  let n = e ? t.top : t.bottom;
  return { top: n, bottom: n, left: t.left, right: t.right };
}
function Ih(t, e, n) {
  let r = t.state, i = t.root.activeElement;
  r != e && t.updateState(e), i != t.dom && t.focus();
  try {
    return n();
  } finally {
    r != e && t.updateState(r), i != t.dom && i && i.focus();
  }
}
function Z3(t, e, n) {
  let r = e.selection, i = n == "up" ? r.$from : r.$to;
  return Ih(t, e, () => {
    let { node: o } = t.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let a = t.docView.nearestDesc(o, !0);
      if (!a)
        break;
      if (a.node.isBlock) {
        o = a.contentDOM || a.dom;
        break;
      }
      o = a.dom.parentNode;
    }
    let s = Ph(t, i.pos, 1);
    for (let a = o.firstChild; a; a = a.nextSibling) {
      let u;
      if (a.nodeType == 1)
        u = a.getClientRects();
      else if (a.nodeType == 3)
        u = zt(a, 0, a.nodeValue.length).getClientRects();
      else
        continue;
      for (let l = 0; l < u.length; l++) {
        let c = u[l];
        if (c.bottom > c.top + 1 && (n == "up" ? s.top - c.top > (c.bottom - s.top) * 2 : c.bottom - s.bottom > (s.bottom - c.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const X3 = /[\u0590-\u08ac]/;
function Y3(t, e, n) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, a = t.domSelection();
  return a ? !X3.test(r.parent.textContent) || !a.modify ? n == "left" || n == "backward" ? o : s : Ih(t, e, () => {
    let { focusNode: u, focusOffset: l, anchorNode: c, anchorOffset: d } = t.domSelectionRange(), f = a.caretBidiLevel;
    a.modify("move", n, "character");
    let p = r.depth ? t.docView.domAfterPos(r.before()) : t.dom, { focusNode: h, focusOffset: m } = t.domSelectionRange(), g = h && !p.contains(h.nodeType == 1 ? h : h.parentNode) || u == h && l == m;
    try {
      a.collapse(c, d), u && (u != c || l != d) && a.extend && a.extend(u, l);
    } catch {
    }
    return f != null && (a.caretBidiLevel = f), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let Cd = null, Ad = null, Sd = !1;
function Q3(t, e, n) {
  return Cd == e && Ad == n ? Sd : (Cd = e, Ad = n, Sd = n == "up" || n == "down" ? Z3(t, e, n) : Y3(t, e, n));
}
const st = 0, Td = 1, jn = 2, Et = 3;
class no {
  constructor(e, n, r, i) {
    this.parent = e, this.children = n, this.dom = r, this.contentDOM = i, this.dirty = st, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, n, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let n = 0; n < this.children.length; n++)
      e += this.children[n].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let n = 0, r = this.posAtStart; ; n++) {
      let i = this.children[n];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, n, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = n > Oe(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (n == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && n == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!n || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let r = n; r; r = r.parent)
      if (r == this)
        return n;
  }
  posFromDOM(e, n, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, n, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, r = 0; n < this.children.length; n++) {
      let i = this.children[n], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], a = o + s.size;
      if (a > e || s instanceof Fh) {
        i = e - o;
        break;
      }
      o = a;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, n);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Bh && o.side >= 0; r--)
      ;
    if (n <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && n && s && !o.border && !o.domAtom ? o.domFromPos(o.size, n) : { node: this.contentDOM, offset: o ? Oe(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, n) : { node: this.contentDOM, offset: o ? Oe(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, a = 0; ; a++) {
      let u = this.children[a], l = s + u.size;
      if (i == -1 && e <= l) {
        let c = s + u.border;
        if (e >= c && n <= l - u.border && u.node && u.contentDOM && this.contentDOM.contains(u.contentDOM))
          return u.parseRange(e, n, c);
        e = s;
        for (let d = a; d > 0; d--) {
          let f = this.children[d - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = Oe(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (l > n || a == this.children.length - 1)) {
        n = l;
        for (let c = a + 1; c < this.children.length; c++) {
          let d = this.children[c];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            o = Oe(d.dom);
            break;
          }
          n += d.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = l;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: r } = this.domFromPos(e, 0);
    if (n.nodeType != 1 || r == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, r, i = !1) {
    let o = Math.min(e, n), s = Math.max(e, n);
    for (let p = 0, h = 0; p < this.children.length; p++) {
      let m = this.children[p], g = h + m.size;
      if (o > h && s < g)
        return m.setSelection(e - h - m.border, n - h - m.border, r, i);
      h = g;
    }
    let a = this.domFromPos(e, e ? -1 : 1), u = n == e ? a : this.domFromPos(n, n ? -1 : 1), l = r.root.getSelection(), c = r.domSelectionRange(), d = !1;
    if ((ht || Be) && e == n) {
      let { node: p, offset: h } = a;
      if (p.nodeType == 3) {
        if (d = !!(h && p.nodeValue[h - 1] == `
`), d && h == p.nodeValue.length)
          for (let m = p, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (a = u = { node: g.parentNode, offset: Oe(g) + 1 });
              break;
            }
            let b = m.pmViewDesc;
            if (b && b.node && b.node.isBlock)
              break;
          }
      } else {
        let m = p.childNodes[h - 1];
        d = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (ht && c.focusNode && c.focusNode != u.node && c.focusNode.nodeType == 1) {
      let p = c.focusNode.childNodes[c.focusOffset];
      p && p.contentEditable == "false" && (i = !0);
    }
    if (!(i || d && Be) && rr(a.node, a.offset, c.anchorNode, c.anchorOffset) && rr(u.node, u.offset, c.focusNode, c.focusOffset))
      return;
    let f = !1;
    if ((l.extend || e == n) && !d) {
      l.collapse(a.node, a.offset);
      try {
        e != n && l.extend(u.node, u.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > n) {
        let h = a;
        a = u, u = h;
      }
      let p = document.createRange();
      p.setEnd(u.node, u.offset), p.setStart(a.node, a.offset), l.removeAllRanges(), l.addRange(p);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, n) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && n >= r : e < s && n > r) {
        let a = r + o.border, u = s - o.border;
        if (e >= a && n <= u) {
          this.dirty = e == r || n == s ? jn : Td, e == a && n == u && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = Et : o.markDirty(e - a, n - a);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? jn : Et;
      }
      r = s;
    }
    this.dirty = jn;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let r = e == 1 ? jn : Td;
      n.dirty < r && (n.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Bh extends no {
  constructor(e, n, r, i) {
    let o, s = n.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !n.type.spec.raw) {
      if (s.nodeType != 1) {
        let a = document.createElement("span");
        a.appendChild(s), s = a;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = n, this.widget = n, o = this;
  }
  matchesWidget(e) {
    return this.dirty == st && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let n = this.widget.spec.stopEvent;
    return n ? n(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class ev extends no {
  constructor(e, n, r, i) {
    super(e, [], n, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, n) {
    return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class ir extends no {
  constructor(e, n, r, i, o) {
    super(e, [], r, i), this.mark = n, this.spec = o;
  }
  static create(e, n, r, i) {
    let o = i.nodeViews[n.type.name], s = o && o(n, i, r);
    return (!s || !s.dom) && (s = Nn.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new ir(e, n, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & Et || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != Et && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != st) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = st;
    }
  }
  slice(e, n, r) {
    let i = ir.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    n < s && (o = Vu(o, n, s, r)), e > 0 && (o = Vu(o, 0, e, r));
    for (let a = 0; a < o.length; a++)
      o[a].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class Cn extends no {
  constructor(e, n, r, i, o, s, a, u, l) {
    super(e, [], o, s), this.node = n, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = a;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, n, r, i, o, s) {
    let a = o.nodeViews[n.type.name], u, l = a && a(n, o, () => {
      if (!u)
        return s;
      if (u.parent)
        return u.parent.posBeforeChild(u);
    }, r, i), c = l && l.dom, d = l && l.contentDOM;
    if (n.isText) {
      if (!c)
        c = document.createTextNode(n.text);
      else if (c.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else c || ({ dom: c, contentDOM: d } = Nn.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
    !d && !n.isText && c.nodeName != "BR" && (c.hasAttribute("contenteditable") || (c.contentEditable = "false"), n.type.spec.draggable && (c.draggable = !0));
    let f = c;
    return c = jh(c, r, n), l ? u = new tv(e, n, r, i, c, d || null, f, l, o, s + 1) : n.isText ? new ua(e, n, r, i, c, f, o) : new Cn(e, n, r, i, c, d || null, f, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let n = this.children.length - 1; n >= 0; n--) {
        let r = this.children[n];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => A.empty);
    }
    return e;
  }
  matchesNode(e, n, r) {
    return this.dirty == st && e.eq(this.node) && us(n, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, n) {
    let r = this.node.inlineContent, i = n, o = e.composing ? this.localCompositionInfo(e, n) : null, s = o && o.pos > -1 ? o : null, a = o && o.pos < 0, u = new rv(this, s && s.node, e);
    sv(this.node, this.innerDeco, (l, c, d) => {
      l.spec.marks ? u.syncToMarks(l.spec.marks, r, e) : l.type.side >= 0 && !d && u.syncToMarks(c == this.node.childCount ? ee.none : this.node.child(c).marks, r, e), u.placeWidget(l, e, i);
    }, (l, c, d, f) => {
      u.syncToMarks(l.marks, r, e);
      let p;
      u.findNodeMatch(l, c, d, f) || a && e.state.selection.from > i && e.state.selection.to < i + l.nodeSize && (p = u.findIndexWithChild(o.node)) > -1 && u.updateNodeAt(l, c, d, p, e) || u.updateNextNode(l, c, d, e, f, i) || u.addNode(l, c, d, e, i), i += l.nodeSize;
    }), u.syncToMarks([], r, e), this.node.isTextblock && u.addTextblockHacks(), u.destroyRest(), (u.changed || this.dirty == jn) && (s && this.protectLocalComposition(e, s), zh(this.contentDOM, this.children, e), Ir && av(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof I) || r < n || i > n + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, a = uv(this.node.content, s, r - n, i - n);
      return a < 0 ? null : { node: o, pos: a, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: r, text: i }) {
    if (this.getDesc(n))
      return;
    let o = n;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new ev(this, o, n, i);
    e.input.compositionNodes.push(s), this.children = Vu(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, r, i) {
    return this.dirty == Et || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, i), !0);
  }
  updateInner(e, n, r, i) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = st;
  }
  updateOuterDeco(e) {
    if (us(e, this.outerDeco))
      return;
    let n = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = $h(this.dom, this.nodeDOM, Lu(this.outerDeco, this.node, n), Lu(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Md(t, e, n, r, i) {
  jh(r, e, t);
  let o = new Cn(void 0, t, e, n, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class ua extends Cn {
  constructor(e, n, r, i, o, s, a) {
    super(e, n, r, i, o, null, s, a, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, n, r, i) {
    return this.dirty == Et || this.dirty != st && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != st || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = st, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, n, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, r) {
    let i = this.node.cut(e, n), o = document.createTextNode(i.text);
    return new ua(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = Et);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Fh extends no {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == st && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class tv extends Cn {
  constructor(e, n, r, i, o, s, a, u, l, c) {
    super(e, n, r, i, o, s, a, l, c), this.spec = u;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, r, i) {
    if (this.dirty == Et)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, n, r);
      return o && this.updateInner(e, n, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, n, r.root) : super.setSelection(e, n, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function zh(t, e, n) {
  let r = t.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], a = s.dom;
    if (a.parentNode == t) {
      for (; a != r; )
        r = Ed(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, t.insertBefore(a, r);
    if (s instanceof ir) {
      let u = r ? r.previousSibling : t.lastChild;
      zh(s.contentDOM, s.children, n), r = u ? u.nextSibling : t.firstChild;
    }
  }
  for (; r; )
    r = Ed(r), i = !0;
  i && n.trackWrites == t && (n.trackWrites = null);
}
const xi = function(t) {
  t && (this.nodeName = t);
};
xi.prototype = /* @__PURE__ */ Object.create(null);
const Wn = [new xi()];
function Lu(t, e, n) {
  if (t.length == 0)
    return Wn;
  let r = n ? Wn[0] : new xi(), i = [r];
  for (let o = 0; o < t.length; o++) {
    let s = t[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new xi(s.nodeName));
      for (let a in s) {
        let u = s[a];
        u != null && (n && i.length == 1 && i.push(r = new xi(e.isInline ? "span" : "div")), a == "class" ? r.class = (r.class ? r.class + " " : "") + u : a == "style" ? r.style = (r.style ? r.style + ";" : "") + u : a != "nodeName" && (r[a] = u));
      }
    }
  }
  return i;
}
function $h(t, e, n, r) {
  if (n == Wn && r == Wn)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], a = n[o];
    if (o) {
      let u;
      a && a.nodeName == s.nodeName && i != t && (u = i.parentNode) && u.nodeName.toLowerCase() == s.nodeName || (u = document.createElement(s.nodeName), u.pmIsDeco = !0, u.appendChild(i), a = Wn[0]), i = u;
    }
    nv(i, a || Wn[0], s);
  }
  return i;
}
function nv(t, e, n) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in n) && t.removeAttribute(r);
  for (let r in n)
    r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && t.setAttribute(r, n[r]);
  if (e.class != n.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && t.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && t.classList.add(i[o]);
    t.classList.length == 0 && t.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        t.style.removeProperty(i[1]);
    }
    n.style && (t.style.cssText += n.style);
  }
}
function jh(t, e, n) {
  return $h(t, t, Wn, Lu(e, n, t.nodeType != 1));
}
function us(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].type.eq(e[n].type))
      return !1;
  return !0;
}
function Ed(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class rv {
  constructor(e, n, r) {
    this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = iv(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let r = e; r < n; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, n - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = st, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1;
      for (let u = this.index; u < Math.min(this.index + 3, this.top.children.length); u++) {
        let l = this.top.children[u];
        if (l.matchesMark(e[o]) && !this.isLocked(l.dom)) {
          a = u;
          break;
        }
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let u = ir.create(this.top, e[o], n, r);
        this.top.children.splice(this.index, 0, u), this.top = u, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, n, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let a = this.index, u = Math.min(this.top.children.length, a + 5); a < u; a++) {
        let l = this.top.children[a];
        if (l.matchesNode(e, n, r) && !this.preMatch.matched.has(l)) {
          o = a;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, n, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == Et && s.dom == s.contentDOM && (s.dirty = jn), s.update(e, n, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, r, i, o, s) {
    for (let a = this.index; a < this.top.children.length; a++) {
      let u = this.top.children[a];
      if (u instanceof Cn) {
        let l = this.preMatch.matched.get(u);
        if (l != null && l != o)
          return !1;
        let c = u.dom, d, f = this.isLocked(c) && !(e.isText && u.node && u.node.isText && u.nodeDOM.nodeValue == e.text && u.dirty != Et && us(n, u.outerDeco));
        if (!f && u.update(e, n, r, i))
          return this.destroyBetween(this.index, a), u.dom != c && (this.changed = !0), this.index++, !0;
        if (!f && (d = this.recreateWrapper(u, e, n, r, i, s)))
          return this.destroyBetween(this.index, a), this.top.children[this.index] = d, d.contentDOM && (d.dirty = jn, d.updateChildren(i, s + 1), d.dirty = st), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, r, i, o, s) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content) || !us(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let a = Cn.create(this.top, n, r, i, o, s);
    if (a.contentDOM) {
      a.children = e.children, e.children = [];
      for (let u of a.children)
        u.parent = a;
    }
    return e.destroy(), a;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, r, i, o) {
    let s = Cn.create(this.top, e, n, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, n, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Bh(this.top, e, n, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof ir; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof ua) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Be || Re) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Fh(this.top, [], r, null);
      n != this.top ? n.children.push(i) : n.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function iv(t, e) {
  let n = e, r = n.children.length, i = t.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let a;
    for (; ; )
      if (r) {
        let l = n.children[r - 1];
        if (l instanceof ir)
          n = l, r = l.children.length;
        else {
          a = l, r--;
          break;
        }
      } else {
        if (n == e)
          break e;
        r = n.parent.children.indexOf(n), n = n.parent;
      }
    let u = a.node;
    if (u) {
      if (u != t.child(i - 1))
        break;
      --i, o.set(a, i), s.push(a);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function ov(t, e) {
  return t.type.side - e.type.side;
}
function sv(t, e, n, r) {
  let i = e.locals(t), o = 0;
  if (i.length == 0) {
    for (let l = 0; l < t.childCount; l++) {
      let c = t.child(l);
      r(c, i, e.forChild(o, c), l), o += c.nodeSize;
    }
    return;
  }
  let s = 0, a = [], u = null;
  for (let l = 0; ; ) {
    let c, d;
    for (; s < i.length && i[s].to == o; ) {
      let g = i[s++];
      g.widget && (c ? (d || (d = [c])).push(g) : c = g);
    }
    if (c)
      if (d) {
        d.sort(ov);
        for (let g = 0; g < d.length; g++)
          n(d[g], l, !!u);
      } else
        n(c, l, !!u);
    let f, p;
    if (u)
      p = -1, f = u, u = null;
    else if (l < t.childCount)
      p = l, f = t.child(l++);
    else
      break;
    for (let g = 0; g < a.length; g++)
      a[g].to <= o && a.splice(g--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      a.push(i[s++]);
    let h = o + f.nodeSize;
    if (f.isText) {
      let g = h;
      s < i.length && i[s].from < g && (g = i[s].from);
      for (let b = 0; b < a.length; b++)
        a[b].to < g && (g = a[b].to);
      g < h && (u = f.cut(g - o), f = f.cut(0, g - o), h = g, p = -1);
    } else
      for (; s < i.length && i[s].to < h; )
        s++;
    let m = f.isInline && !f.isLeaf ? a.filter((g) => !g.inline) : a.slice();
    r(f, m, e.forChild(o, f), p), o = h;
  }
}
function av(t) {
  if (t.nodeName == "UL" || t.nodeName == "OL") {
    let e = t.style.cssText;
    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
  }
}
function uv(t, e, n, r) {
  for (let i = 0, o = 0; i < t.childCount && o <= r; ) {
    let s = t.child(i++), a = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let u = s.text;
    for (; i < t.childCount; ) {
      let l = t.child(i++);
      if (o += l.nodeSize, !l.isText)
        break;
      u += l.text;
    }
    if (o >= n) {
      if (o >= r && u.slice(r - e.length - a, r - a) == e)
        return r - e.length;
      let l = a < r ? u.lastIndexOf(e, r - a - 1) : -1;
      if (l >= 0 && l + e.length + a >= n)
        return a + l;
      if (n == r && u.length >= r + e.length - a && u.slice(r - a, r - a + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Vu(t, e, n, r, i) {
  let o = [];
  for (let s = 0, a = 0; s < t.length; s++) {
    let u = t[s], l = a, c = a += u.size;
    l >= n || c <= e ? o.push(u) : (l < e && o.push(u.slice(0, e - l, r)), i && (o.push(i), i = void 0), c > n && o.push(u.slice(n - l, u.size, r)));
  }
  return o;
}
function Ol(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let i = t.docView.nearestDesc(n.focusNode), o = i && i.size == 0, s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (s < 0)
    return null;
  let a = r.resolve(s), u, l;
  if (aa(n)) {
    for (u = s; i && !i.node; )
      i = i.parent;
    let d = i.node;
    if (i && d.isAtom && P.isSelectable(d) && i.parent && !(d.isInline && R3(n.focusNode, n.focusOffset, i.dom))) {
      let f = i.posBefore;
      l = new P(s == f ? a : r.resolve(f));
    }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let d = s, f = s;
      for (let p = 0; p < n.rangeCount; p++) {
        let h = n.getRangeAt(p);
        d = Math.min(d, t.docView.posFromDOM(h.startContainer, h.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(h.endContainer, h.endOffset, -1));
      }
      if (d < 0)
        return null;
      [u, s] = f == t.state.selection.anchor ? [f, d] : [d, f], a = r.resolve(s);
    } else
      u = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (u < 0)
      return null;
  }
  let c = r.resolve(u);
  if (!l) {
    let d = e == "pointer" || t.state.selection.head < a.pos && !o ? 1 : -1;
    l = Nl(t, c, a, d);
  }
  return l;
}
function Wh(t) {
  return t.editable ? t.hasFocus() : Uh(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Kt(t, e = !1) {
  let n = t.state.selection;
  if (qh(t, n), !!Wh(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Re) {
      let r = t.domSelectionRange(), i = t.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && rr(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      cv(t);
    else {
      let { anchor: r, head: i } = n, o, s;
      Od && !(n instanceof I) && (n.$from.parent.inlineContent || (o = Nd(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (s = Nd(t, n.to))), t.docView.setSelection(r, i, t, e), Od && (o && Ld(o), s && Ld(s)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && lv(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const Od = Be || Re && Vh < 63;
function Nd(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (Be && i && i.contentEditable == "false")
    return Ba(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Ba(i);
    if (o)
      return Ba(o);
  }
}
function Ba(t) {
  return t.contentEditable = "true", Be && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function Ld(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function lv(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != i) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!Wh(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function cv(t) {
  let e = t.domSelection(), n = document.createRange();
  if (!e)
    return;
  let r = t.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? n.setStart(r.parentNode, Oe(r) + 1) : n.setStart(r, 0), n.collapse(!0), e.removeAllRanges(), e.addRange(n), !i && !t.state.selection.visible && je && kn <= 11 && (r.disabled = !0, r.disabled = !1);
}
function qh(t, e) {
  if (e instanceof P) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (Vd(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    Vd(t);
}
function Vd(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function Nl(t, e, n, r) {
  return t.someProp("createSelectionBetween", (i) => i(t, e, n)) || I.between(e, n, r);
}
function Hd(t) {
  return t.editable && !t.hasFocus() ? !1 : Uh(t);
}
function Uh(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function dv(t) {
  let e = t.docView.domFromPos(t.state.selection.anchor, 0), n = t.domSelectionRange();
  return rr(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function Hu(t, e) {
  let { $anchor: n, $head: r } = t.selection, i = e > 0 ? n.max(r) : n.min(r), o = i.parent.inlineContent ? i.depth ? t.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && F.findFrom(o, e);
}
function ln(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Rd(t, e, n) {
  let r = t.state.selection;
  if (r instanceof I)
    if (n.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = t.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return ln(t, new I(r.$anchor, s));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Hu(t.state, e);
        return i && i instanceof P ? ln(t, i) : !1;
      } else if (!(tt && n.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let a = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = t.docView.descAt(a)) && !s.contentDOM ? P.isSelectable(o) ? ln(t, new P(e < 0 ? t.state.doc.resolve(i.pos - o.nodeSize) : i)) : to ? ln(t, new I(t.state.doc.resolve(e < 0 ? a : a + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof P && r.node.isInline)
      return ln(t, new I(e > 0 ? r.$to : r.$from));
    {
      let i = Hu(t.state, e);
      return i ? ln(t, i) : !1;
    }
  }
}
function ls(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function ki(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function vr(t, e) {
  return e < 0 ? fv(t) : pv(t);
}
function fv(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i, o, s = !1;
  for (ht && n.nodeType == 1 && r < ls(n) && ki(n.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let a = n.childNodes[r - 1];
        if (ki(a, -1))
          i = n, o = --r;
        else if (a.nodeType == 3)
          n = a, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (Kh(n))
        break;
      {
        let a = n.previousSibling;
        for (; a && ki(a, -1); )
          i = n.parentNode, o = Oe(a), a = a.previousSibling;
        if (a)
          n = a, r = ls(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Ru(t, n, r) : i && Ru(t, i, o);
}
function pv(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i = ls(n), o, s;
  for (; ; )
    if (r < i) {
      if (n.nodeType != 1)
        break;
      let a = n.childNodes[r];
      if (ki(a, 1))
        o = n, s = ++r;
      else
        break;
    } else {
      if (Kh(n))
        break;
      {
        let a = n.nextSibling;
        for (; a && ki(a, 1); )
          o = a.parentNode, s = Oe(a) + 1, a = a.nextSibling;
        if (a)
          n = a, r = 0, i = ls(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Ru(t, o, s);
}
function Kh(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function hv(t, e) {
  for (; t && e == t.childNodes.length && !eo(t); )
    e = Oe(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function mv(t, e) {
  for (; t && !e && !eo(t); )
    e = Oe(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function Ru(t, e, n) {
  if (e.nodeType != 3) {
    let o, s;
    (s = hv(e, n)) ? (e = s, n = 0) : (o = mv(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (aa(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: i } = t;
  setTimeout(() => {
    t.state == i && Kt(t);
  }, 50);
}
function Dd(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Re || P3) && n.parent.inlineContent) {
    let i = t.coordsAtPos(e);
    if (e > n.start()) {
      let o = t.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let o = t.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function _d(t, e, n) {
  let r = t.state.selection;
  if (r instanceof I && !r.empty || n.indexOf("s") > -1 || tt && n.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Hu(t.state, e);
    if (s && s instanceof P)
      return ln(t, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, a = r instanceof ot ? F.near(s, e) : F.findFrom(s, e);
    return a ? ln(t, a) : !1;
  }
  return !1;
}
function Pd(t, e) {
  if (!(t.state.selection instanceof I))
    return !0;
  let { $head: n, $anchor: r, empty: i } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (o && !o.isText) {
    let s = t.state.tr;
    return e < 0 ? s.delete(n.pos - o.nodeSize, n.pos) : s.delete(n.pos, n.pos + o.nodeSize), t.dispatch(s), !0;
  }
  return !1;
}
function Id(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function gv(t) {
  if (!Be || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Id(t, r, "true"), setTimeout(() => Id(t, r, "false"), 20);
  }
  return !1;
}
function bv(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function yv(t, e) {
  let n = e.keyCode, r = bv(e);
  if (n == 8 || tt && n == 72 && r == "c")
    return Pd(t, -1) || vr(t, -1);
  if (n == 46 && !e.shiftKey || tt && n == 68 && r == "c")
    return Pd(t, 1) || vr(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || tt && n == 66 && r == "c") {
    let i = n == 37 ? Dd(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Rd(t, i, r) || vr(t, i);
  } else if (n == 39 || tt && n == 70 && r == "c") {
    let i = n == 39 ? Dd(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Rd(t, i, r) || vr(t, i);
  } else {
    if (n == 38 || tt && n == 80 && r == "c")
      return _d(t, -1, r) || vr(t, -1);
    if (n == 40 || tt && n == 78 && r == "c")
      return gv(t) || _d(t, 1, r) || vr(t, 1);
    if (r == (tt ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function Gh(t, e) {
  t.someProp("transformCopied", (p) => {
    e = p(e, t);
  });
  let n = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let p = r.firstChild;
    n.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), r = p.content;
  }
  let s = t.someProp("clipboardSerializer") || Nn.fromSchema(t.state.schema), a = e0(), u = a.createElement("div");
  u.appendChild(s.serializeFragment(r, { document: a }));
  let l = u.firstChild, c, d = 0;
  for (; l && l.nodeType == 1 && (c = Qh[l.nodeName.toLowerCase()]); ) {
    for (let p = c.length - 1; p >= 0; p--) {
      let h = a.createElement(c[p]);
      for (; u.firstChild; )
        h.appendChild(u.firstChild);
      u.appendChild(h), d++;
    }
    l = u.firstChild;
  }
  l && l.nodeType == 1 && l.setAttribute("data-pm-slice", `${i} ${o}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (p) => p(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: u, text: f, slice: e };
}
function Jh(t, e, n, r, i) {
  let o = i.parent.type.spec.code, s, a;
  if (!n && !e)
    return null;
  let u = e && (r || o || !n);
  if (u) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return e ? new N(A.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : N.empty;
    let d = t.someProp("clipboardTextParser", (f) => f(e, i, r, t));
    if (d)
      a = d;
    else {
      let f = i.marks(), { schema: p } = t.state, h = Nn.fromSchema(p);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(h.serializeNode(p.text(m, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (d) => {
      n = d(n, t);
    }), s = kv(n), to && Cv(s);
  let l = s && s.querySelector("[data-pm-slice]"), c = l && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute("data-pm-slice") || "");
  if (c && c[3])
    for (let d = +c[3]; d > 0; d--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (a || (a = (t.someProp("clipboardParser") || t.someProp("domParser") || xn.fromSchema(t.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(u || c),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !vv.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), c)
    a = Av(Bd(a, +c[1], +c[2]), c[4]);
  else if (a = N.maxOpen(wv(a.content, i), !0), a.openStart || a.openEnd) {
    let d = 0, f = 0;
    for (let p = a.content.firstChild; d < a.openStart && !p.type.spec.isolating; d++, p = p.firstChild)
      ;
    for (let p = a.content.lastChild; f < a.openEnd && !p.type.spec.isolating; f++, p = p.lastChild)
      ;
    a = Bd(a, d, f);
  }
  return t.someProp("transformPasted", (d) => {
    a = d(a, t);
  }), a;
}
const vv = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function wv(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let i = e.node(n).contentMatchAt(e.index(n)), o, s = [];
    if (t.forEach((a) => {
      if (!s)
        return;
      let u = i.findWrapping(a.type), l;
      if (!u)
        return s = null;
      if (l = s.length && o.length && Xh(u, o, a, s[s.length - 1], 0))
        s[s.length - 1] = l;
      else {
        s.length && (s[s.length - 1] = Yh(s[s.length - 1], o.length));
        let c = Zh(a, u);
        s.push(c), i = i.matchType(c.type), o = u;
      }
    }), s)
      return A.from(s);
  }
  return t;
}
function Zh(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, A.from(t));
  return t;
}
function Xh(t, e, n, r, i) {
  if (i < t.length && i < e.length && t[i] == e[i]) {
    let o = Xh(t, e, n, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? n.type : t[i + 1]))
      return r.copy(r.content.append(A.from(Zh(n, t, i + 1))));
  }
}
function Yh(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, Yh(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(A.empty, !0);
  return t.copy(n.append(r));
}
function Du(t, e, n, r, i, o) {
  let s = e < 0 ? t.firstChild : t.lastChild, a = s.content;
  return t.childCount > 1 && (o = 0), i < r - 1 && (a = Du(a, e, n, r, i + 1, o)), i >= n && (a = e < 0 ? s.contentMatchAt(0).fillBefore(a, o <= i).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(A.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(a));
}
function Bd(t, e, n) {
  return e < t.openStart && (t = new N(Du(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new N(Du(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const Qh = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Fd = null;
function e0() {
  return Fd || (Fd = document.implementation.createHTMLDocument("title"));
}
let Fa = null;
function xv(t) {
  let e = window.trustedTypes;
  return e ? (Fa || (Fa = e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), Fa.createHTML(t)) : t;
}
function kv(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = e0().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), i;
  if ((i = r && Qh[r[1].toLowerCase()]) && (t = i.map((o) => "<" + o + ">").join("") + t + i.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = xv(t), i)
    for (let o = 0; o < i.length; o++)
      n = n.querySelector(i[o]) || n;
  return n;
}
function Cv(t) {
  let e = t.querySelectorAll(Re ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function Av(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: i, openStart: o, openEnd: s } = t;
  for (let a = r.length - 2; a >= 0; a -= 2) {
    let u = n.nodes[r[a]];
    if (!u || u.hasRequiredAttrs())
      break;
    i = A.from(u.create(r[a + 1], i)), o++, s++;
  }
  return new N(i, o, s);
}
const Fe = {}, ze = {}, Sv = { touchstart: !0, touchmove: !0 };
class Tv {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Mv(t) {
  for (let e in Fe) {
    let n = Fe[e];
    t.dom.addEventListener(e, t.input.eventHandlers[e] = (r) => {
      Ov(t, r) && !Ll(t, r) && (t.editable || !(r.type in ze)) && n(t, r);
    }, Sv[e] ? { passive: !0 } : void 0);
  }
  Be && t.dom.addEventListener("input", () => null), _u(t);
}
function vn(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
function Ev(t) {
  t.domObserver.stop();
  for (let e in t.input.eventHandlers)
    t.dom.removeEventListener(e, t.input.eventHandlers[e]);
  clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
}
function _u(t) {
  t.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = (r) => Ll(t, r));
  });
}
function Ll(t, e) {
  return t.someProp("handleDOMEvents", (n) => {
    let r = n[e.type];
    return r ? r(t, e) || e.defaultPrevented : !1;
  });
}
function Ov(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target; n != t.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Nv(t, e) {
  !Ll(t, e) && Fe[e.type] && (t.editable || !(e.type in ze)) && Fe[e.type](t, e);
}
ze.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !n0(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(jt && Re && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Ir && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (i) => i(t, zn(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || yv(t, n) ? n.preventDefault() : vn(t, "key");
};
ze.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
ze.keypress = (t, e) => {
  let n = e;
  if (n0(t, n) || !n.charCode || n.ctrlKey && !n.altKey || tt && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (i) => i(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof I) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(n.charCode);
    !/[\r\n]/.test(i) && !t.someProp("handleTextInput", (o) => o(t, r.$from.pos, r.$to.pos, i)) && t.dispatch(t.state.tr.insertText(i).scrollIntoView()), n.preventDefault();
  }
};
function la(t) {
  return { left: t.clientX, top: t.clientY };
}
function Lv(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Vl(t, e, n, r, i) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (t.someProp(e, (a) => s > o.depth ? a(t, n, o.nodeAfter, o.before(s), i, !0) : a(t, n, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function Hr(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function Vv(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && P.isSelectable(r) ? (Hr(t, new P(n)), !0) : !1;
}
function Hv(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, i;
  n instanceof P && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let a = s > o.depth ? o.nodeAfter : o.node(s);
    if (P.isSelectable(a)) {
      r && n.$from.depth > 0 && s >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? i = o.before(n.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (Hr(t, P.create(t.state.doc, i)), !0) : !1;
}
function Rv(t, e, n, r, i) {
  return Vl(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (i ? Hv(t, n) : Vv(t, n));
}
function Dv(t, e, n, r) {
  return Vl(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (i) => i(t, e, r));
}
function _v(t, e, n, r) {
  return Vl(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (i) => i(t, e, r)) || Pv(t, n, r);
}
function Pv(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (Hr(t, I.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), a = i.before(o);
    if (s.inlineContent)
      Hr(t, I.create(r, a + 1, a + 1 + s.content.size));
    else if (P.isSelectable(s))
      Hr(t, P.create(r, a));
    else
      continue;
    return !0;
  }
}
function Hl(t) {
  return cs(t);
}
const t0 = tt ? "metaKey" : "ctrlKey";
Fe.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Hl(t), i = Date.now(), o = "singleClick";
  i - t.input.lastClick.time < 500 && Lv(n, t.input.lastClick) && !n[t0] && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: o };
  let s = t.posAtCoords(la(n));
  s && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Iv(t, s, n, !!r)) : (o == "doubleClick" ? Dv : _v)(t, s.pos, s.inside, n) ? n.preventDefault() : vn(t, "pointer"));
};
class Iv {
  constructor(e, n, r, i) {
    this.view = e, this.pos = n, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[t0], this.allowDefault = r.shiftKey;
    let o, s;
    if (n.inside > -1)
      o = e.state.doc.nodeAt(n.inside), s = n.inside;
    else {
      let c = e.state.doc.resolve(n.pos);
      o = c.parent, s = c.depth ? c.before() : 0;
    }
    const a = i ? null : r.target, u = a ? e.docView.nearestDesc(a, !0) : null;
    this.target = u && u.dom.nodeType == 1 ? u.dom : null;
    let { selection: l } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || l instanceof P && l.from <= s && l.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && ht && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), vn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Kt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(la(e))), this.updateAllowDefault(e), this.allowDefault || !n ? vn(this.view, "pointer") : Rv(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Be && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Re && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Hr(this.view, F.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : vn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), vn(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Fe.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Hl(t), vn(t, "pointer");
};
Fe.touchmove = (t) => {
  t.input.lastTouch = Date.now(), vn(t, "pointer");
};
Fe.contextmenu = (t) => Hl(t);
function n0(t, e) {
  return t.composing ? !0 : Be && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const Bv = jt ? 5e3 : -1;
ze.compositionstart = ze.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof I && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      t.markCursor = t.state.storedMarks || n.marks(), cs(t, !0), t.markCursor = null;
    else if (cs(t, !e.selection.empty), ht && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let a = t.domSelection();
          a && a.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    t.input.composing = !0;
  }
  r0(t, Bv);
};
ze.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, r0(t, 20));
};
function r0(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => cs(t), e));
}
function i0(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = zv()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Fv(t) {
  let e = t.domSelectionRange();
  if (!e.focusNode)
    return null;
  let n = V3(e.focusNode, e.focusOffset), r = H3(e.focusNode, e.focusOffset);
  if (n && r && n != r) {
    let i = r.pmViewDesc, o = t.domObserver.lastChangedTextNode;
    if (n == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (t.input.compositionNode == r) {
      let s = n.pmViewDesc;
      if (!(!s || !s.isText(n.nodeValue)))
        return r;
    }
  }
  return n || r;
}
function zv() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function cs(t, e = !1) {
  if (!(jt && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), i0(t), e || t.docView && t.docView.dirty) {
      let n = Ol(t);
      return n && !n.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !t.state.selection.empty ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function $v(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Fi = je && kn < 15 || Ir && I3 < 604;
Fe.copy = ze.cut = (t, e) => {
  let n = e, r = t.state.selection, i = n.type == "cut";
  if (r.empty)
    return;
  let o = Fi ? null : n.clipboardData, s = r.content(), { dom: a, text: u } = Gh(t, s);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", a.innerHTML), o.setData("text/plain", u)) : $v(t, a), i && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function jv(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function Wv(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? zi(t, r.value, null, i, e) : zi(t, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function zi(t, e, n, r, i) {
  let o = Jh(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (u) => u(t, i, o || N.empty)))
    return !0;
  if (!o)
    return !1;
  let s = jv(o), a = s ? t.state.tr.replaceSelectionWith(s, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function o0(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
ze.paste = (t, e) => {
  let n = e;
  if (t.composing && !jt)
    return;
  let r = Fi ? null : n.clipboardData, i = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && zi(t, o0(r), r.getData("text/html"), i, n) ? n.preventDefault() : Wv(t, n);
};
class s0 {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const a0 = tt ? "altKey" : "ctrlKey";
Fe.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let i = t.state.selection, o = i.empty ? null : t.posAtCoords(la(n)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof P ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = P.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let d = t.docView.nearestDesc(n.target, !0);
      d && d.node.type.spec.draggable && d != t.docView && (s = P.create(t.state.doc, d.posBefore));
    }
  }
  let a = (s || t.state.selection).content(), { dom: u, text: l, slice: c } = Gh(t, a);
  (!n.dataTransfer.files.length || !Re || Vh > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Fi ? "Text" : "text/html", u.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Fi || n.dataTransfer.setData("text/plain", l), t.dragging = new s0(c, !n[a0], s);
};
Fe.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
ze.dragover = ze.dragenter = (t, e) => e.preventDefault();
ze.drop = (t, e) => {
  let n = e, r = t.dragging;
  if (t.dragging = null, !n.dataTransfer)
    return;
  let i = t.posAtCoords(la(n));
  if (!i)
    return;
  let o = t.state.doc.resolve(i.pos), s = r && r.slice;
  s ? t.someProp("transformPasted", (h) => {
    s = h(s, t);
  }) : s = Jh(t, o0(n.dataTransfer), Fi ? null : n.dataTransfer.getData("text/html"), !1, o);
  let a = !!(r && !n[a0]);
  if (t.someProp("handleDrop", (h) => h(t, n, s || N.empty, a))) {
    n.preventDefault();
    return;
  }
  if (!s)
    return;
  n.preventDefault();
  let u = s ? Ch(t.state.doc, o.pos, s) : o.pos;
  u == null && (u = o.pos);
  let l = t.state.tr;
  if (a) {
    let { node: h } = r;
    h ? h.replace(l) : l.deleteSelection();
  }
  let c = l.mapping.map(u), d = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, f = l.doc;
  if (d ? l.replaceRangeWith(c, c, s.content.firstChild) : l.replaceRange(c, c, s), l.doc.eq(f))
    return;
  let p = l.doc.resolve(c);
  if (d && P.isSelectable(s.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(s.content.firstChild))
    l.setSelection(new P(p));
  else {
    let h = l.mapping.map(u);
    l.mapping.maps[l.mapping.maps.length - 1].forEach((m, g, b, x) => h = x), l.setSelection(Nl(t, p, l.doc.resolve(h)));
  }
  t.focus(), t.dispatch(l.setMeta("uiEvent", "drop"));
};
Fe.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Kt(t);
  }, 20));
};
Fe.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Fe.beforeinput = (t, e) => {
  if (Re && jt && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, zn(8, "Backspace")))))
        return;
      let { $cursor: i } = t.state.selection;
      i && i.pos > 0 && t.dispatch(t.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in ze)
  Fe[t] = ze[t];
function $i(t, e) {
  if (t == e)
    return !0;
  for (let n in t)
    if (t[n] !== e[n])
      return !1;
  for (let n in e)
    if (!(n in t))
      return !1;
  return !0;
}
class ds {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Jn, this.side = this.spec.side || 0;
  }
  map(e, n, r, i) {
    let { pos: o, deleted: s } = e.mapResult(n.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new Ve(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof ds && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && $i(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class An {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Jn;
  }
  map(e, n, r, i) {
    let o = e.map(n.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(n.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new Ve(o, s, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof An && $i(this.attrs, e.attrs) && $i(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof An;
  }
  destroy() {
  }
}
class Rl {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Jn;
  }
  map(e, n, r, i) {
    let o = e.mapResult(n.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(n.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new Ve(o.pos - r, s.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: i } = e.content.findIndex(n.from), o;
    return i == n.from && !(o = e.child(r)).isText && i + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Rl && $i(this.attrs, e.attrs) && $i(this.spec, e.spec);
  }
  destroy() {
  }
}
class Ve {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new Ve(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new Ve(e, e, new ds(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, i) {
    return new Ve(e, n, new An(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, i) {
    return new Ve(e, n, new Rl(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof An;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof ds;
  }
}
const Cr = [], Jn = {};
class oe {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Cr, this.children = n.length ? n : Cr;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? fs(n, e, 0, Jn) : He;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let i = [];
    return this.findInner(e ?? 0, n ?? 1e9, i, 0, r), i;
  }
  findInner(e, n, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let a = this.local[s];
      a.from <= n && a.to >= e && (!o || o(a.spec)) && r.push(a.copy(a.from + i, a.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < n && this.children[s + 1] > e) {
        let a = this.children[s] + 1;
        this.children[s + 2].findInner(e - a, n - a, r, i + a, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == He || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Jn);
  }
  /**
  @internal
  */
  mapInner(e, n, r, i, o) {
    let s;
    for (let a = 0; a < this.local.length; a++) {
      let u = this.local[a].map(e, r, i);
      u && u.type.valid(n, u) ? (s || (s = [])).push(u) : o.onRemove && o.onRemove(this.local[a].spec);
    }
    return this.children.length ? qv(this.children, s || [], e, n, r, i, o) : s ? new oe(s.sort(Zn), Cr) : He;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == He ? oe.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let i, o = 0;
    e.forEach((a, u) => {
      let l = u + r, c;
      if (c = l0(n, a, l)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < u; )
          o += 3;
        i[o] == u ? i[o + 2] = i[o + 2].addInner(a, c, l + 1) : i.splice(o, 0, u, u + a.nodeSize, fs(c, a, l + 1, Jn)), o += 3;
      }
    });
    let s = u0(o ? c0(n) : n, -r);
    for (let a = 0; a < s.length; a++)
      s[a].type.valid(e, s[a]) || s.splice(a--, 1);
    return new oe(s.length ? this.local.concat(s).sort(Zn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == He ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, a = r[o] + n, u = r[o + 1] + n;
      for (let c = 0, d; c < e.length; c++)
        (d = e[c]) && d.from > a && d.to < u && (e[c] = null, (s || (s = [])).push(d));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let l = r[o + 2].removeInner(s, a + 1);
      l != He ? r[o + 2] = l : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let a = 0; a < i.length; a++)
            i[a].eq(s, n) && (i == this.local && (i = this.local.slice()), i.splice(a--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new oe(i, r) : He;
  }
  forChild(e, n) {
    if (this == He)
      return this;
    if (n.isLeaf)
      return oe.empty;
    let r, i;
    for (let a = 0; a < this.children.length; a += 3)
      if (this.children[a] >= e) {
        this.children[a] == e && (r = this.children[a + 2]);
        break;
      }
    let o = e + 1, s = o + n.content.size;
    for (let a = 0; a < this.local.length; a++) {
      let u = this.local[a];
      if (u.from < s && u.to > o && u.type instanceof An) {
        let l = Math.max(o, u.from) - o, c = Math.min(s, u.to) - o;
        l < c && (i || (i = [])).push(u.copy(l, c));
      }
    }
    if (i) {
      let a = new oe(i.sort(Zn), Cr);
      return r ? new pn([a, r]) : a;
    }
    return r || He;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof oe) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Dl(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == He)
      return Cr;
    if (e.inlineContent || !this.local.some(An.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof An || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
oe.empty = new oe([], []);
oe.removeOverlap = Dl;
const He = oe.empty;
class pn {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((i) => i.map(e, n, Jn));
    return pn.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return oe.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, n);
      o != He && (o instanceof pn ? r = r.concat(o.members) : r.push(o));
    }
    return pn.from(r);
  }
  eq(e) {
    if (!(e instanceof pn) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!n)
          n = o;
        else {
          r && (n = n.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            n.push(o[s]);
        }
    }
    return n ? Dl(r ? n : n.sort(Zn)) : Cr;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return He;
      case 1:
        return e[0];
      default:
        return new pn(e.every((n) => n instanceof oe) ? e : e.reduce((n, r) => n.concat(r instanceof oe ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function qv(t, e, n, r, i, o, s) {
  let a = t.slice();
  for (let l = 0, c = o; l < n.maps.length; l++) {
    let d = 0;
    n.maps[l].forEach((f, p, h, m) => {
      let g = m - h - (p - f);
      for (let b = 0; b < a.length; b += 3) {
        let x = a[b + 1];
        if (x < 0 || f > x + c - d)
          continue;
        let w = a[b] + c - d;
        p >= w ? a[b + 1] = f <= w ? -2 : -1 : f >= c && g && (a[b] += g, a[b + 1] += g);
      }
      d += g;
    }), c = n.maps[l].map(c, -1);
  }
  let u = !1;
  for (let l = 0; l < a.length; l += 3)
    if (a[l + 1] < 0) {
      if (a[l + 1] == -2) {
        u = !0, a[l + 1] = -1;
        continue;
      }
      let c = n.map(t[l] + o), d = c - i;
      if (d < 0 || d >= r.content.size) {
        u = !0;
        continue;
      }
      let f = n.map(t[l + 1] + o, -1), p = f - i, { index: h, offset: m } = r.content.findIndex(d), g = r.maybeChild(h);
      if (g && m == d && m + g.nodeSize == p) {
        let b = a[l + 2].mapInner(n, g, c + 1, t[l] + o + 1, s);
        b != He ? (a[l] = d, a[l + 1] = p, a[l + 2] = b) : (a[l + 1] = -2, u = !0);
      } else
        u = !0;
    }
  if (u) {
    let l = Uv(a, t, e, n, i, o, s), c = fs(l, r, 0, s);
    e = c.local;
    for (let d = 0; d < a.length; d += 3)
      a[d + 1] < 0 && (a.splice(d, 3), d -= 3);
    for (let d = 0, f = 0; d < c.children.length; d += 3) {
      let p = c.children[d];
      for (; f < a.length && a[f] < p; )
        f += 3;
      a.splice(f, 0, c.children[d], c.children[d + 1], c.children[d + 2]);
    }
  }
  return new oe(e.sort(Zn), a);
}
function u0(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    n.push(new Ve(i.from + e, i.to + e, i.type));
  }
  return n;
}
function Uv(t, e, n, r, i, o, s) {
  function a(u, l) {
    for (let c = 0; c < u.local.length; c++) {
      let d = u.local[c].map(r, i, l);
      d ? n.push(d) : s.onRemove && s.onRemove(u.local[c].spec);
    }
    for (let c = 0; c < u.children.length; c += 3)
      a(u.children[c + 2], u.children[c] + l + 1);
  }
  for (let u = 0; u < t.length; u += 3)
    t[u + 1] == -1 && a(t[u + 2], e[u] + o + 1);
  return n;
}
function l0(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, i = null;
  for (let o = 0, s; o < t.length; o++)
    (s = t[o]) && s.from > n && s.to < r && ((i || (i = [])).push(s), t[o] = null);
  return i;
}
function c0(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function fs(t, e, n, r) {
  let i = [], o = !1;
  e.forEach((a, u) => {
    let l = l0(t, a, u + n);
    if (l) {
      o = !0;
      let c = fs(l, a, n + u + 1, r);
      c != He && i.push(u, u + a.nodeSize, c);
    }
  });
  let s = u0(o ? c0(t) : t, -n).sort(Zn);
  for (let a = 0; a < s.length; a++)
    s[a].type.valid(e, s[a]) || (r.onRemove && r.onRemove(s[a].spec), s.splice(a--, 1));
  return s.length || i.length ? new oe(s, i) : He;
}
function Zn(t, e) {
  return t.from - e.from || t.to - e.to;
}
function Dl(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let i = n + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[i] = o.copy(o.from, r.to), zd(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), zd(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function zd(t, e, n) {
  for (; e < t.length && Zn(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
function za(t) {
  let e = [];
  return t.someProp("decorations", (n) => {
    let r = n(t.state);
    r && r != He && e.push(r);
  }), t.cursorWrapper && e.push(oe.create(t.state.doc, [t.cursorWrapper.deco])), pn.from(e);
}
const Kv = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Gv = je && kn <= 11;
class Jv {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Zv {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Jv(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      je && kn <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Gv && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Kv)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let n = 0; n < e.length; n++)
          this.queue.push(e[n]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Hd(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Kt(this.view);
      if (je && kn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && rr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let n = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Bi(o))
      n.add(o);
    for (let o = e.anchorNode; o; o = Bi(o))
      if (n.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let n = this.pendingRecords();
    n.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Hd(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, a = !1, u = [];
    if (e.editable)
      for (let c = 0; c < n.length; c++) {
        let d = this.registerMutation(n[c], u);
        d && (o = o < 0 ? d.from : Math.min(d.from, o), s = s < 0 ? d.to : Math.max(d.to, s), d.typeOver && (a = !0));
      }
    if (ht && u.length) {
      let c = u.filter((d) => d.nodeName == "BR");
      if (c.length == 2) {
        let [d, f] = c;
        d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove();
      } else {
        let { focusNode: d } = this.currentSelection;
        for (let f of c) {
          let p = f.parentNode;
          p && p.nodeName == "LI" && (!d || Qv(e, d) != p) && f.remove();
        }
      }
    }
    let l = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && aa(r) && (l = Ol(e)) && l.eq(F.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Kt(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), Xv(e)), this.handleDOMChange(o, s, a, u), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Kt(e), this.currentSelection.set(r));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let c = 0; c < e.addedNodes.length; c++) {
        let d = e.addedNodes[c];
        n.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (je && kn <= 11 && e.addedNodes.length)
        for (let c = 0; c < e.addedNodes.length; c++) {
          let { previousSibling: d, nextSibling: f } = e.addedNodes[c];
          (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (i = d), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = i && i.parentNode == e.target ? Oe(i) + 1 : 0, a = r.localPosFromDOM(e.target, s, -1), u = o && o.parentNode == e.target ? Oe(o) : e.target.childNodes.length, l = r.localPosFromDOM(e.target, u, 1);
      return { from: a, to: l };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let $d = /* @__PURE__ */ new WeakMap(), jd = !1;
function Xv(t) {
  if (!$d.has(t) && ($d.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
    if (t.requiresGeckoHackNode = ht, jd)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), jd = !0;
  }
}
function Wd(t, e) {
  let n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = t.domAtPos(t.state.selection.anchor);
  return rr(s.node, s.offset, i, o) && ([n, r, i, o] = [i, o, n, r]), { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: o };
}
function Yv(t, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(t.root)[0];
    if (i)
      return Wd(t, i);
  }
  let n;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), n = i.getTargetRanges()[0];
  }
  return t.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", r, !0), n ? Wd(t, n) : null;
}
function Qv(t, e) {
  for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
    let r = t.docView.nearestDesc(n, !0);
    if (r && r.node.isBlock)
      return n;
  }
  return null;
}
function e6(t, e, n) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: a } = t.docView.parseRange(e, n), u = t.domSelectionRange(), l, c = u.anchorNode;
  if (c && t.dom.contains(c.nodeType == 1 ? c : c.parentNode) && (l = [{ node: c, offset: u.anchorOffset }], aa(u) || l.push({ node: u.focusNode, offset: u.focusOffset })), Re && t.input.lastKeyCode === 8)
    for (let g = o; g > i; g--) {
      let b = r.childNodes[g - 1], x = b.pmViewDesc;
      if (b.nodeName == "BR" && !x) {
        o = g;
        break;
      }
      if (!x || x.size)
        break;
    }
  let d = t.state.doc, f = t.someProp("domParser") || xn.fromSchema(t.state.schema), p = d.resolve(s), h = null, m = f.parse(r, {
    topNode: p.parent,
    topMatch: p.parent.contentMatchAt(p.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: l,
    ruleFromNode: t6,
    context: p
  });
  if (l && l[0].pos != null) {
    let g = l[0].pos, b = l[1] && l[1].pos;
    b == null && (b = g), h = { anchor: g + s, head: b + s };
  }
  return { doc: m, sel: h, from: s, to: a };
}
function t6(t) {
  let e = t.pmViewDesc;
  if (e)
    return e.parseRule();
  if (t.nodeName == "BR" && t.parentNode) {
    if (Be && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
      let n = document.createElement("div");
      return n.appendChild(document.createElement("li")), { skip: n };
    } else if (t.parentNode.lastChild == t || Be && /^(tr|table)$/i.test(t.parentNode.nodeName))
      return { ignore: !0 };
  } else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const n6 = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function r6(t, e, n, r, i) {
  let o = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
  if (t.input.compositionPendingChanges = 0, e < 0) {
    let O = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null, B = Ol(t, O);
    if (B && !t.state.selection.eq(B)) {
      if (Re && jt && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", (U) => U(t, zn(13, "Enter"))))
        return;
      let _ = t.state.tr.setSelection(B);
      O == "pointer" ? _.setMeta("pointer", !0) : O == "key" && _.scrollIntoView(), o && _.setMeta("composition", o), t.dispatch(_);
    }
    return;
  }
  let s = t.state.doc.resolve(e), a = s.sharedDepth(n);
  e = s.before(a + 1), n = t.state.doc.resolve(n).after(a + 1);
  let u = t.state.selection, l = e6(t, e, n), c = t.state.doc, d = c.slice(l.from, l.to), f, p;
  t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (f = t.state.selection.to, p = "end") : (f = t.state.selection.from, p = "start"), t.input.lastKeyCode = null;
  let h = s6(d.content, l.doc.content, l.from, f, p);
  if (h && t.input.domChangeCount++, (Ir && t.input.lastIOSEnter > Date.now() - 225 || jt) && i.some((O) => O.nodeType == 1 && !n6.test(O.nodeName)) && (!h || h.endA >= h.endB) && t.someProp("handleKeyDown", (O) => O(t, zn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && u instanceof I && !u.empty && u.$head.sameParent(u.$anchor) && !t.composing && !(l.sel && l.sel.anchor != l.sel.head))
      h = { start: u.from, endA: u.to, endB: u.to };
    else {
      if (l.sel) {
        let O = qd(t, t.state.doc, l.sel);
        if (O && !O.eq(t.state.selection)) {
          let B = t.state.tr.setSelection(O);
          o && B.setMeta("composition", o), t.dispatch(B);
        }
      }
      return;
    }
  t.state.selection.from < t.state.selection.to && h.start == h.endB && t.state.selection instanceof I && (h.start > t.state.selection.from && h.start <= t.state.selection.from + 2 && t.state.selection.from >= l.from ? h.start = t.state.selection.from : h.endA < t.state.selection.to && h.endA >= t.state.selection.to - 2 && t.state.selection.to <= l.to && (h.endB += t.state.selection.to - h.endA, h.endA = t.state.selection.to)), je && kn <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > l.from && l.doc.textBetween(h.start - l.from - 1, h.start - l.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let m = l.doc.resolveNoCache(h.start - l.from), g = l.doc.resolveNoCache(h.endB - l.from), b = c.resolve(h.start), x = m.sameParent(g) && m.parent.inlineContent && b.end() >= h.endA, w;
  if ((Ir && t.input.lastIOSEnter > Date.now() - 225 && (!x || i.some((O) => O.nodeName == "DIV" || O.nodeName == "P")) || !x && m.pos < l.doc.content.size && !m.sameParent(g) && (w = F.findFrom(l.doc.resolve(m.pos + 1), 1, !0)) && w.head == g.pos) && t.someProp("handleKeyDown", (O) => O(t, zn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (t.state.selection.anchor > h.start && o6(c, h.start, h.endA, m, g) && t.someProp("handleKeyDown", (O) => O(t, zn(8, "Backspace")))) {
    jt && Re && t.domObserver.suppressSelectionUpdates();
    return;
  }
  Re && h.endB == h.start && (t.input.lastChromeDelete = Date.now()), jt && !x && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && l.sel && l.sel.anchor == l.sel.head && l.sel.head == h.endA && (h.endB -= 2, g = l.doc.resolveNoCache(h.endB - l.from), setTimeout(() => {
    t.someProp("handleKeyDown", function(O) {
      return O(t, zn(13, "Enter"));
    });
  }, 20));
  let y = h.start, k = h.endA, v, E, M;
  if (x) {
    if (m.pos == g.pos)
      je && kn <= 11 && m.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => Kt(t), 20)), v = t.state.tr.delete(y, k), E = c.resolve(h.start).marksAcross(c.resolve(h.endA));
    else if (
      // Adding or removing a mark
      h.endA == h.endB && (M = i6(m.parent.content.cut(m.parentOffset, g.parentOffset), b.parent.content.cut(b.parentOffset, h.endA - b.start())))
    )
      v = t.state.tr, M.type == "add" ? v.addMark(y, k, M.mark) : v.removeMark(y, k, M.mark);
    else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let O = m.parent.textBetween(m.parentOffset, g.parentOffset);
      if (t.someProp("handleTextInput", (B) => B(t, y, k, O)))
        return;
      v = t.state.tr.insertText(O, y, k);
    }
  }
  if (v || (v = t.state.tr.replace(y, k, l.doc.slice(h.start - l.from, h.endB - l.from))), l.sel) {
    let O = qd(t, v.doc, l.sel);
    O && !(Re && t.composing && O.empty && (h.start != h.endB || t.input.lastChromeDelete < Date.now() - 100) && (O.head == y || O.head == v.mapping.map(k) - 1) || je && O.empty && O.head == y) && v.setSelection(O);
  }
  E && v.ensureMarks(E), o && v.setMeta("composition", o), t.dispatch(v.scrollIntoView());
}
function qd(t, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : Nl(t, e.resolve(n.anchor), e.resolve(n.head));
}
function i6(t, e) {
  let n = t.firstChild.marks, r = e.firstChild.marks, i = n, o = r, s, a, u;
  for (let c = 0; c < r.length; c++)
    i = r[c].removeFromSet(i);
  for (let c = 0; c < n.length; c++)
    o = n[c].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    a = i[0], s = "add", u = (c) => c.mark(a.addToSet(c.marks));
  else if (i.length == 0 && o.length == 1)
    a = o[0], s = "remove", u = (c) => c.mark(a.removeFromSet(c.marks));
  else
    return null;
  let l = [];
  for (let c = 0; c < e.childCount; c++)
    l.push(u(e.child(c)));
  if (A.from(l).eq(t))
    return { mark: a, type: s };
}
function o6(t, e, n, r, i) {
  if (
    // The content must have shrunk
    n - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    $a(r, !0, !1) < i.pos
  )
    return !1;
  let o = t.resolve(e);
  if (!r.parent.isTextblock) {
    let a = o.nodeAfter;
    return a != null && n == e + a.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = t.resolve($a(o, !0, !0));
  return !s.parent.isTextblock || s.pos > n || $a(s, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function $a(t, e, n) {
  let r = t.depth, i = e ? t.end() : t.pos;
  for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); )
    r--, i++, e = !1;
  if (n) {
    let o = t.node(r).maybeChild(t.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function s6(t, e, n, r, i) {
  let o = t.findDiffStart(e, n);
  if (o == null)
    return null;
  let { a: s, b: a } = t.findDiffEnd(e, n + t.size, n + e.size);
  if (i == "end") {
    let u = Math.max(0, o - Math.min(s, a));
    r -= s + u - o;
  }
  if (s < o && t.size < e.size) {
    let u = r <= o && r >= s ? o - r : 0;
    o -= u, o && o < e.size && Ud(e.textBetween(o - 1, o + 1)) && (o += u ? 1 : -1), a = o + (a - s), s = o;
  } else if (a < o) {
    let u = r <= o && r >= a ? o - r : 0;
    o -= u, o && o < t.size && Ud(t.textBetween(o - 1, o + 1)) && (o += u ? 1 : -1), s = o + (s - a), a = o;
  }
  return { start: o, endA: s, endB: a };
}
function Ud(t) {
  if (t.length != 2)
    return !1;
  let e = t.charCodeAt(0), n = t.charCodeAt(1);
  return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
}
class a6 {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Tv(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(Xd), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Jd(this), Gd(this), this.nodeViews = Zd(this), this.docView = Md(this.state.doc, Kd(this), za(this), this.dom, this), this.domObserver = new Zv(this, (r, i, o, s) => r6(this, r, i, o, s)), this.domObserver.start(), Mv(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let n in e)
        this._props[n] = e[n];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && _u(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Xd), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let r in this._props)
      n[r] = this._props[r];
    n.state = this.state;
    for (let r in e)
      n[r] = e[r];
    this.update(n);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, n) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (i0(this), s = !0), this.state = e;
    let a = i.plugins != e.plugins || this._props.plugins != n.plugins;
    if (a || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let p = Zd(this);
      l6(p, this.nodeViews) && (this.nodeViews = p, o = !0);
    }
    (a || n.handleDOMEvents != this._props.handleDOMEvents) && _u(this), this.editable = Jd(this), Gd(this);
    let u = za(this), l = Kd(this), c = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", d = o || !this.docView.matchesNode(e.doc, l, u);
    (d || !e.selection.eq(i.selection)) && (s = !0);
    let f = c == "preserve" && s && this.dom.style.overflowAnchor == null && z3(this);
    if (s) {
      this.domObserver.stop();
      let p = d && (je || Re) && !this.composing && !i.selection.empty && !e.selection.empty && u6(i.selection, e.selection);
      if (d) {
        let h = Re ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Fv(this)), (o || !this.docView.update(e.doc, l, u, this)) && (this.docView.updateOuterDeco(l), this.docView.destroy(), this.docView = Md(e.doc, l, u, this.dom, this)), h && !this.trackWrites && (p = !0);
      }
      p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && dv(this)) ? Kt(this, p) : (qh(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : f && $3(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (n) => n(this))) if (this.state.selection instanceof P) {
      let n = this.docView.domAfterPos(this.state.selection.from);
      n.nodeType == 1 && xd(this, n.getBoundingClientRect(), e);
    } else
      xd(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let n = 0; n < this.directPlugins.length; n++) {
        let r = this.directPlugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let r = this.state.plugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let r = this.pluginViews[n];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, n) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - n.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new s0(e.slice, e.move, i < 0 ? void 0 : P.create(this.state.doc, i));
  }
  someProp(e, n) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = n ? n(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let a = this.directPlugins[s].props[e];
      if (a != null && (i = n ? n(a) : a))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let a = o[s].props[e];
        if (a != null && (i = n ? n(a) : a))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (je) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && j3(this.dom), Kt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let n = this.dom.parentNode; n; n = n.parentNode)
        if (n.nodeType == 9 || n.nodeType == 11 && n.host)
          return n.getSelection || (Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()), this._root = n;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return G3(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, n = 1) {
    return Ph(this, e, n);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, n = 0) {
    return this.docView.domFromPos(e, n);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let n = this.docView.descAt(e);
    return n ? n.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, n, r = -1) {
    let i = this.docView.posFromDOM(e, n, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, n) {
    return Q3(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return zi(this, "", e, !1, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return zi(this, e, null, !0, n || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Ev(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], za(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, N3());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Nv(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let n = this._props.dispatchTransaction;
    n ? n.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Be && this.root.nodeType === 11 && D3(this.dom.ownerDocument) == this.dom && Yv(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Kd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t.state)), n)
      for (let r in n)
        r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]));
  }), e.translate || (e.translate = "no"), [Ve.node(0, t.state.doc.content.size, e)];
}
function Gd(t) {
  if (t.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = { dom: e, deco: Ve.widget(t.state.selection.from, e, { raw: !0, marks: t.markCursor }) };
  } else
    t.cursorWrapper = null;
}
function Jd(t) {
  return !t.someProp("editable", (e) => e(t.state) === !1);
}
function u6(t, e) {
  let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
  return t.$anchor.start(n) != e.$anchor.start(n);
}
function Zd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
}
function l6(t, e) {
  let n = 0, r = 0;
  for (let i in t) {
    if (t[i] != e[i])
      return !0;
    n++;
  }
  for (let i in e)
    r++;
  return n != r;
}
function Xd(t) {
  if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Tn = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ps = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, c6 = typeof navigator < "u" && /Mac/.test(navigator.platform), d6 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ne = 0; Ne < 10; Ne++) Tn[48 + Ne] = Tn[96 + Ne] = String(Ne);
for (var Ne = 1; Ne <= 24; Ne++) Tn[Ne + 111] = "F" + Ne;
for (var Ne = 65; Ne <= 90; Ne++)
  Tn[Ne] = String.fromCharCode(Ne + 32), ps[Ne] = String.fromCharCode(Ne);
for (var ja in Tn) ps.hasOwnProperty(ja) || (ps[ja] = Tn[ja]);
function f6(t) {
  var e = c6 && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || d6 && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? ps : Tn)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const p6 = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function h6(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, i, o, s;
  for (let a = 0; a < e.length - 1; a++) {
    let u = e[a];
    if (/^(cmd|meta|m)$/i.test(u))
      s = !0;
    else if (/^a(lt)?$/i.test(u))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(u))
      i = !0;
    else if (/^s(hift)?$/i.test(u))
      o = !0;
    else if (/^mod$/i.test(u))
      p6 ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + u);
  }
  return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), s && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function m6(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[h6(n)] = t[n];
  return e;
}
function Wa(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function g6(t) {
  return new se({ props: { handleKeyDown: _l(t) } });
}
function _l(t) {
  let e = m6(t);
  return function(n, r) {
    let i = f6(r), o, s = e[Wa(i, r)];
    if (s && s(n.state, n.dispatch, n))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let a = e[Wa(i, r, !1)];
        if (a && a(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = Tn[r.keyCode]) && o != i) {
        let a = e[Wa(o, r)];
        if (a && a(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
const d0 = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function f0(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const b6 = (t, e, n) => {
  let r = f0(t, n);
  if (!r)
    return !1;
  let i = Pl(r);
  if (!i) {
    let s = r.blockRange(), a = s && Xr(s);
    return a == null ? !1 : (e && e(t.tr.lift(s, a).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (g0(t, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Br(o, "end") || P.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let a = oa(t.doc, r.before(s), r.after(s), N.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (e) {
          let u = t.tr.step(a);
          u.setSelection(Br(o, "end") ? F.findFrom(u.doc.resolve(u.mapping.map(i.pos, -1)), -1) : P.create(u.doc, i.pos - o.nodeSize)), e(u.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, y6 = (t, e, n) => {
  let r = f0(t, n);
  if (!r)
    return !1;
  let i = Pl(r);
  return i ? p0(t, i, e) : !1;
}, v6 = (t, e, n) => {
  let r = h0(t, n);
  if (!r)
    return !1;
  let i = Il(r);
  return i ? p0(t, i, e) : !1;
};
function p0(t, e, n) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let c = i.lastChild;
    if (!c)
      return !1;
    i = c;
  }
  let s = e.nodeAfter, a = s, u = e.pos + 1;
  for (; !a.isTextblock; u++) {
    if (a.type.spec.isolating)
      return !1;
    let c = a.firstChild;
    if (!c)
      return !1;
    a = c;
  }
  let l = oa(t.doc, o, u, N.empty);
  if (!l || l.from != o || l instanceof ke && l.slice.size >= u - o)
    return !1;
  if (n) {
    let c = t.tr.step(l);
    c.setSelection(I.create(c.doc, o)), n(c.scrollIntoView());
  }
  return !0;
}
function Br(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const w6 = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Pl(r);
  }
  let s = o && o.nodeBefore;
  return !s || !P.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(P.create(t.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Pl(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function h0(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const x6 = (t, e, n) => {
  let r = h0(t, n);
  if (!r)
    return !1;
  let i = Il(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (g0(t, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Br(o, "start") || P.isSelectable(o))) {
    let s = oa(t.doc, r.before(), r.after(), N.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let a = t.tr.step(s);
        a.setSelection(Br(o, "start") ? F.findFrom(a.doc.resolve(a.mapping.map(i.pos)), 1) : P.create(a.doc, a.mapping.map(i.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, k6 = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Il(r);
  }
  let s = o && o.nodeAfter;
  return !s || !P.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(P.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function Il(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const C6 = (t, e) => {
  let n = t.selection, r = n instanceof P, i;
  if (r) {
    if (n.node.isTextblock || !Ln(t.doc, n.from))
      return !1;
    i = n.from;
  } else if (i = ia(t.doc, n.from, -1), i == null)
    return !1;
  if (e) {
    let o = t.tr.join(i);
    r && o.setSelection(P.create(o.doc, i - t.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, A6 = (t, e) => {
  let n = t.selection, r;
  if (n instanceof P) {
    if (n.node.isTextblock || !Ln(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = ia(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, S6 = (t, e) => {
  let { $from: n, $to: r } = t.selection, i = n.blockRange(r), o = i && Xr(i);
  return o == null ? !1 : (e && e(t.tr.lift(i, o).scrollIntoView()), !0);
}, T6 = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function m0(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const M6 = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let i = n.node(-1), o = n.indexAfter(-1), s = m0(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let a = n.after(), u = t.tr.replaceWith(a, a, s.createAndFill());
    u.setSelection(F.near(u.doc.resolve(a), 1)), e(u.scrollIntoView());
  }
  return !0;
}, E6 = (t, e) => {
  let n = t.selection, { $from: r, $to: i } = n;
  if (n instanceof ot || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = m0(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, a = t.tr.insert(s, o.createAndFill());
    a.setSelection(I.create(a.doc, s + 1)), e(a.scrollIntoView());
  }
  return !0;
}, O6 = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Lr(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), i = r && Xr(r);
  return i == null ? !1 : (e && e(t.tr.lift(r, i).scrollIntoView()), !0);
}, N6 = (t, e) => {
  let { $from: n, to: r } = t.selection, i, o = n.sharedDepth(r);
  return o == 0 ? !1 : (i = n.before(o), e && e(t.tr.setSelection(P.create(t.doc, i))), !0);
};
function L6(t, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || Ln(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function g0(t, e, n, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, a, u = i.type.spec.isolating || o.type.spec.isolating;
  if (!u && L6(t, e, n))
    return !0;
  let l = !u && e.parent.canReplace(e.index(), e.index() + 1);
  if (l && (s = (a = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && a.matchType(s[0] || o.type).validEnd) {
    if (n) {
      let p = e.pos + o.nodeSize, h = A.empty;
      for (let b = s.length - 1; b >= 0; b--)
        h = A.from(s[b].create(null, h));
      h = A.from(i.copy(h));
      let m = t.tr.step(new Ae(e.pos - 1, p, e.pos, p, new N(h, 1, 0), s.length, !0)), g = m.doc.resolve(p + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == i.type && Ln(m.doc, g.pos) && m.join(g.pos), n(m.scrollIntoView());
    }
    return !0;
  }
  let c = o.type.spec.isolating || r > 0 && u ? null : F.findFrom(e, 1), d = c && c.$from.blockRange(c.$to), f = d && Xr(d);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(d, f).scrollIntoView()), !0;
  if (l && Br(o, "start", !0) && Br(i, "end")) {
    let p = i, h = [];
    for (; h.push(p), !p.isTextblock; )
      p = p.lastChild;
    let m = o, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (p.canReplace(p.childCount, p.childCount, m.content)) {
      if (n) {
        let b = A.empty;
        for (let w = h.length - 1; w >= 0; w--)
          b = A.from(h[w].copy(b));
        let x = t.tr.step(new Ae(e.pos - h.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new N(b, h.length, 0), 0, !0));
        n(x.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function b0(t) {
  return function(e, n) {
    let r = e.selection, i = t < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (n && n(e.tr.setSelection(I.create(e.doc, t < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const V6 = b0(-1), H6 = b0(1);
function R6(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o), a = s && Sl(s, t, e);
    return a ? (r && r(n.tr.wrap(s, a).scrollIntoView()), !0) : !1;
  };
}
function Yd(t, e = null) {
  return function(n, r) {
    let i = !1;
    for (let o = 0; o < n.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: a } } = n.selection.ranges[o];
      n.doc.nodesBetween(s, a, (u, l) => {
        if (i)
          return !1;
        if (!(!u.isTextblock || u.hasMarkup(t, e)))
          if (u.type == t)
            i = !0;
          else {
            let c = n.doc.resolve(l), d = c.index();
            i = c.parent.canReplaceWith(d, d + 1, t);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = n.tr;
      for (let s = 0; s < n.selection.ranges.length; s++) {
        let { $from: { pos: a }, $to: { pos: u } } = n.selection.ranges[s];
        o.setBlockType(a, u, t, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function D6(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let a = r ? n.tr : null;
    return _6(a, s, t, e) ? (r && r(a.scrollIntoView()), !0) : !1;
  };
}
function _6(t, e, n, r = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let u = s.resolve(e.start - 2);
    o = new ss(u, u, e.depth), e.endIndex < e.parent.childCount && (e = new ss(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let a = Sl(o, n, r, e);
  return a ? (t && P6(t, e, a, i, n), !0) : !1;
}
function P6(t, e, n, r, i) {
  let o = A.empty;
  for (let c = n.length - 1; c >= 0; c--)
    o = A.from(n[c].type.create(n[c].attrs, o));
  t.step(new Ae(e.start - (r ? 2 : 0), e.end, e.start, e.end, new N(o, 0, 0), n.length, !0));
  let s = 0;
  for (let c = 0; c < n.length; c++)
    n[c].type == i && (s = c + 1);
  let a = n.length - s, u = e.start + n.length - (r ? 2 : 0), l = e.parent;
  for (let c = e.startIndex, d = e.endIndex, f = !0; c < d; c++, f = !1)
    !f && Lr(t.doc, u, a) && (t.split(u, a), u += 2 * a), u += l.child(c).nodeSize;
  return t;
}
function I6(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? B6(e, n, t, o) : F6(e, n, o) : !0 : !1;
  };
}
function B6(t, e, n, r) {
  let i = t.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new Ae(o - 1, s, o, s, new N(A.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new ss(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const a = Xr(r);
  if (a == null)
    return !1;
  i.lift(r, a);
  let u = i.mapping.map(o, -1) - 1;
  return Ln(i.doc, u) && i.join(u), e(i.scrollIntoView()), !0;
}
function F6(t, e, n) {
  let r = t.tr, i = n.parent;
  for (let p = n.end, h = n.endIndex - 1, m = n.startIndex; h > m; h--)
    p -= i.child(h).nodeSize, r.delete(p - 1, p + 1);
  let o = r.doc.resolve(n.start), s = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let a = n.startIndex == 0, u = n.endIndex == i.childCount, l = o.node(-1), c = o.index(-1);
  if (!l.canReplace(c + (a ? 0 : 1), c + 1, s.content.append(u ? A.empty : A.from(i))))
    return !1;
  let d = o.pos, f = d + s.nodeSize;
  return r.step(new Ae(d - (a ? 1 : 0), f + (u ? 1 : 0), d + 1, f - 1, new N((a ? A.empty : A.from(i.copy(A.empty))).append(u ? A.empty : A.from(i.copy(A.empty))), a ? 0 : 1, u ? 0 : 1), a ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function z6(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (l) => l.childCount > 0 && l.firstChild.type == t);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let a = o.parent, u = a.child(s - 1);
    if (u.type != t)
      return !1;
    if (n) {
      let l = u.lastChild && u.lastChild.type == a.type, c = A.from(l ? t.create() : null), d = new N(A.from(t.create(null, A.from(a.type.create(null, c)))), l ? 3 : 1, 0), f = o.start, p = o.end;
      n(e.tr.step(new Ae(f - (l ? 3 : 1), p, f, p, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function ca(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: i } = n, { storedMarks: o } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = n.selection, i = n.doc, o = n.storedMarks, n;
    }
  };
}
class da {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: n, state: r } = this, { view: i } = n, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([a, u]) => [a, (...c) => {
      const d = u(...c)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, a = [], u = !!e, l = e || o.tr, c = () => (!u && n && !l.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(l), a.every((f) => f === !0)), d = {
      ...Object.fromEntries(Object.entries(r).map(([f, p]) => [f, (...m) => {
        const g = this.buildProps(l, n), b = p(...m)(g);
        return a.push(b), d;
      }])),
      run: c
    };
    return d;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(n).map(([u, l]) => [u, (...c) => l(...c)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, a = {
      tr: e,
      editor: i,
      view: s,
      state: ca({
        state: o,
        transaction: e
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(e, n),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([u, l]) => [u, (...c) => l(...c)(a)]));
      }
    };
    return a;
  }
}
class $6 {
  constructor() {
    this.callbacks = {};
  }
  on(e, n) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(n), this;
  }
  emit(e, ...n) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, n)), this;
  }
  off(e, n) {
    const r = this.callbacks[e];
    return r && (n ? this.callbacks[e] = r.filter((i) => i !== n) : delete this.callbacks[e]), this;
  }
  once(e, n) {
    const r = (...i) => {
      this.off(e, r), n.apply(this, i);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function H(t, e, n) {
  return t.config[e] === void 0 && t.parent ? H(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? H(t.parent, e, n) : null
  }) : t.config[e];
}
function fa(t) {
  const e = t.filter((i) => i.type === "extension"), n = t.filter((i) => i.type === "node"), r = t.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function y0(t) {
  const e = [], { nodeExtensions: n, markExtensions: r } = fa(t), i = [...n, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return t.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, u = H(s, "addGlobalAttributes", a);
    if (!u)
      return;
    u().forEach((c) => {
      c.types.forEach((d) => {
        Object.entries(c.attributes).forEach(([f, p]) => {
          e.push({
            type: d,
            name: f,
            attribute: {
              ...o,
              ...p
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, u = H(s, "addAttributes", a);
    if (!u)
      return;
    const l = u();
    Object.entries(l).forEach(([c, d]) => {
      const f = {
        ...o,
        ...d
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: s.name,
        name: c,
        attribute: f
      });
    });
  }), e;
}
function Te(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function Y(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const a = o ? String(o).split(" ") : [], u = r[i] ? r[i].split(" ") : [], l = a.filter((c) => !u.includes(c));
        r[i] = [...u, ...l].join(" ");
      } else if (i === "style") {
        const a = o ? o.split(";").map((c) => c.trim()).filter(Boolean) : [], u = r[i] ? r[i].split(";").map((c) => c.trim()).filter(Boolean) : [], l = /* @__PURE__ */ new Map();
        u.forEach((c) => {
          const [d, f] = c.split(":").map((p) => p.trim());
          l.set(d, f);
        }), a.forEach((c) => {
          const [d, f] = c.split(":").map((p) => p.trim());
          l.set(d, f);
        }), r[i] = Array.from(l.entries()).map(([c, d]) => `${c}: ${d}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function Pu(t, e) {
  return e.filter((n) => n.type === t.type.name).filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : {
    [n.name]: t.attrs[n.name]
  }).reduce((n, r) => Y(n, r), {});
}
function v0(t) {
  return typeof t == "function";
}
function q(t, e = void 0, ...n) {
  return v0(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function j6(t = {}) {
  return Object.keys(t).length === 0 && t.constructor === Object;
}
function W6(t) {
  return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t;
}
function Qd(t, e) {
  return "style" in t ? t : {
    ...t,
    getAttrs: (n) => {
      const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const a = s.attribute.parseHTML ? s.attribute.parseHTML(n) : W6(n.getAttribute(s.name));
        return a == null ? o : {
          ...o,
          [s.name]: a
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function ef(t) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(t).filter(([e, n]) => e === "attrs" && j6(n) ? !1 : n != null)
  );
}
function w0(t, e) {
  var n;
  const r = y0(t), { nodeExtensions: i, markExtensions: o } = fa(t), s = (n = i.find((l) => H(l, "topNode"))) === null || n === void 0 ? void 0 : n.name, a = Object.fromEntries(i.map((l) => {
    const c = r.filter((b) => b.type === l.name), d = {
      name: l.name,
      options: l.options,
      storage: l.storage,
      editor: e
    }, f = t.reduce((b, x) => {
      const w = H(x, "extendNodeSchema", d);
      return {
        ...b,
        ...w ? w(l) : {}
      };
    }, {}), p = ef({
      ...f,
      content: q(H(l, "content", d)),
      marks: q(H(l, "marks", d)),
      group: q(H(l, "group", d)),
      inline: q(H(l, "inline", d)),
      atom: q(H(l, "atom", d)),
      selectable: q(H(l, "selectable", d)),
      draggable: q(H(l, "draggable", d)),
      code: q(H(l, "code", d)),
      whitespace: q(H(l, "whitespace", d)),
      linebreakReplacement: q(H(l, "linebreakReplacement", d)),
      defining: q(H(l, "defining", d)),
      isolating: q(H(l, "isolating", d)),
      attrs: Object.fromEntries(c.map((b) => {
        var x;
        return [b.name, { default: (x = b == null ? void 0 : b.attribute) === null || x === void 0 ? void 0 : x.default }];
      }))
    }), h = q(H(l, "parseHTML", d));
    h && (p.parseDOM = h.map((b) => Qd(b, c)));
    const m = H(l, "renderHTML", d);
    m && (p.toDOM = (b) => m({
      node: b,
      HTMLAttributes: Pu(b, c)
    }));
    const g = H(l, "renderText", d);
    return g && (p.toText = g), [l.name, p];
  })), u = Object.fromEntries(o.map((l) => {
    const c = r.filter((g) => g.type === l.name), d = {
      name: l.name,
      options: l.options,
      storage: l.storage,
      editor: e
    }, f = t.reduce((g, b) => {
      const x = H(b, "extendMarkSchema", d);
      return {
        ...g,
        ...x ? x(l) : {}
      };
    }, {}), p = ef({
      ...f,
      inclusive: q(H(l, "inclusive", d)),
      excludes: q(H(l, "excludes", d)),
      group: q(H(l, "group", d)),
      spanning: q(H(l, "spanning", d)),
      code: q(H(l, "code", d)),
      attrs: Object.fromEntries(c.map((g) => {
        var b;
        return [g.name, { default: (b = g == null ? void 0 : g.attribute) === null || b === void 0 ? void 0 : b.default }];
      }))
    }), h = q(H(l, "parseHTML", d));
    h && (p.parseDOM = h.map((g) => Qd(g, c)));
    const m = H(l, "renderHTML", d);
    return m && (p.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: Pu(g, c)
    })), [l.name, p];
  }));
  return new fh({
    topNode: s,
    nodes: a,
    marks: u
  });
}
function qa(t, e) {
  return e.nodes[t] || e.marks[t] || null;
}
function tf(t, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t.name) : e;
}
function Bl(t, e) {
  const n = Nn.fromSchema(e).serializeFragment(t), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(n), i.innerHTML;
}
const q6 = (t, e = 500) => {
  let n = "";
  const r = t.parentOffset;
  return t.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, a) => {
    var u, l;
    const c = ((l = (u = i.type.spec).toText) === null || l === void 0 ? void 0 : l.call(u, {
      node: i,
      pos: o,
      parent: s,
      index: a
    })) || i.textContent || "%leaf%";
    n += i.isAtom && !i.isText ? c : c.slice(0, Math.max(0, r - o));
  }), n;
};
function Fl(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
class pa {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const U6 = (t, e) => {
  if (Fl(e))
    return e.exec(t);
  const n = e(t);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function Ao(t) {
  var e;
  const { editor: n, from: r, to: i, text: o, rules: s, plugin: a } = t, { view: u } = n;
  if (u.composing)
    return !1;
  const l = u.state.doc.resolve(r);
  if (
    // check for code node
    l.parent.type.spec.code || !((e = l.nodeBefore || l.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let c = !1;
  const d = q6(l) + o;
  return s.forEach((f) => {
    if (c)
      return;
    const p = U6(d, f.find);
    if (!p)
      return;
    const h = u.state.tr, m = ca({
      state: u.state,
      transaction: h
    }), g = {
      from: r - (p[0].length - o.length),
      to: i
    }, { commands: b, chain: x, can: w } = new da({
      editor: n,
      state: m
    });
    f.handler({
      state: m,
      range: g,
      match: p,
      commands: b,
      chain: x,
      can: w
    }) === null || !h.steps.length || (h.setMeta(a, {
      transform: h,
      from: r,
      to: i,
      text: o
    }), u.dispatch(h), c = !0);
  }), c;
}
function K6(t) {
  const { editor: e, rules: n } = t, r = new se({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const a = i.getMeta(r);
        if (a)
          return a;
        const u = i.getMeta("applyInputRules");
        return !!u && setTimeout(() => {
          let { text: c } = u;
          typeof c == "string" ? c = c : c = Bl(A.from(c), s.schema);
          const { from: d } = u, f = d + c.length;
          Ao({
            editor: e,
            from: d,
            to: f,
            text: c,
            rules: n,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, a) {
        return Ao({
          editor: e,
          from: o,
          to: s,
          text: a,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && Ao({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? Ao({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function G6(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function So(t) {
  return G6(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function ha(t, e) {
  const n = { ...t };
  return So(t) && So(e) && Object.keys(e).forEach((r) => {
    So(e[r]) && So(t[r]) ? n[r] = ha(t[r], e[r]) : n[r] = e[r];
  }), n;
}
class Ue {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = q(H(this, "addOptions", {
      name: this.name
    }))), this.storage = q(H(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ue(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => ha(this.options, e)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(e = {}) {
    const n = new Ue(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = q(H(n, "addOptions", {
      name: n.name
    })), n.storage = q(H(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((l) => (l == null ? void 0 : l.type.name) === n.name))
        return !1;
      const u = s.find((l) => (l == null ? void 0 : l.type.name) === n.name);
      return u && r.removeStoredMark(u), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function J6(t) {
  return typeof t == "number";
}
class Z6 {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const X6 = (t, e, n) => {
  if (Fl(e))
    return [...t.matchAll(e)];
  const r = e(t, n);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = t, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function Y6(t) {
  const { editor: e, state: n, from: r, to: i, rule: o, pasteEvent: s, dropEvent: a } = t, { commands: u, chain: l, can: c } = new da({
    editor: e,
    state: n
  }), d = [];
  return n.doc.nodesBetween(r, i, (p, h) => {
    if (!p.isTextblock || p.type.spec.code)
      return;
    const m = Math.max(r, h), g = Math.min(i, h + p.content.size), b = p.textBetween(m - h, g - h, void 0, "￼");
    X6(b, o.find, s).forEach((w) => {
      if (w.index === void 0)
        return;
      const y = m + w.index + 1, k = y + w[0].length, v = {
        from: n.tr.mapping.map(y),
        to: n.tr.mapping.map(k)
      }, E = o.handler({
        state: n,
        range: v,
        match: w,
        commands: u,
        chain: l,
        can: c,
        pasteEvent: s,
        dropEvent: a
      });
      d.push(E);
    });
  }), d.every((p) => p !== null);
}
let To = null;
const Q6 = (t) => {
  var e;
  const n = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = n.clipboardData) === null || e === void 0 || e.setData("text/html", t), n;
};
function ew(t) {
  const { editor: e, rules: n } = t;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, a;
  try {
    a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    a = null;
  }
  const u = ({ state: c, from: d, to: f, rule: p, pasteEvt: h }) => {
    const m = c.tr, g = ca({
      state: c,
      transaction: m
    });
    if (!(!Y6({
      editor: e,
      state: g,
      from: Math.max(d - 1, 0),
      to: f.b - 1,
      rule: p,
      pasteEvent: h,
      dropEvent: a
    }) || !m.steps.length)) {
      try {
        a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        a = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return n.map((c) => new se({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const f = (h) => {
        var m;
        r = !((m = d.dom.parentElement) === null || m === void 0) && m.contains(h.target) ? d.dom.parentElement : null, r && (To = e);
      }, p = () => {
        To && (To = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", p), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", p);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, f) => {
          if (o = r === d.dom.parentElement, a = f, !o) {
            const p = To;
            p && setTimeout(() => {
              const h = p.state.selection;
              h && p.commands.deleteRange({ from: h.from, to: h.to });
            }, 10);
          }
          return !1;
        },
        paste: (d, f) => {
          var p;
          const h = (p = f.clipboardData) === null || p === void 0 ? void 0 : p.getData("text/html");
          return s = f, i = !!(h != null && h.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (d, f, p) => {
      const h = d[0], m = h.getMeta("uiEvent") === "paste" && !i, g = h.getMeta("uiEvent") === "drop" && !o, b = h.getMeta("applyPasteRules"), x = !!b;
      if (!m && !g && !x)
        return;
      if (x) {
        let { text: k } = b;
        typeof k == "string" ? k = k : k = Bl(A.from(k), p.schema);
        const { from: v } = b, E = v + k.length, M = Q6(k);
        return u({
          rule: c,
          state: p,
          from: v,
          to: { b: E },
          pasteEvt: M
        });
      }
      const w = f.doc.content.findDiffStart(p.doc.content), y = f.doc.content.findDiffEnd(p.doc.content);
      if (!(!J6(w) || !y || w === y.b))
        return u({
          rule: c,
          state: p,
          from: w,
          to: y,
          pasteEvt: s
        });
    }
  }));
}
function tw(t) {
  const e = t.filter((n, r) => t.indexOf(n) !== r);
  return Array.from(new Set(e));
}
class qn {
  constructor(e, n) {
    this.splittableMarks = [], this.editor = n, this.extensions = qn.resolve(e), this.schema = w0(this.extensions, n), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const n = qn.sort(qn.flatten(e)), r = tw(n.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), n;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage
      }, i = H(n, "addExtensions", r);
      return i ? [n, ...this.flatten(i())] : n;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const o = H(r, "priority") || 100, s = H(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: this.editor,
        type: qa(n.name, this.schema)
      }, i = H(n, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, n = qn.sort([...this.extensions].reverse()), r = [], i = [], o = n.map((s) => {
      const a = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: qa(s.name, this.schema)
      }, u = [], l = H(s, "addKeyboardShortcuts", a);
      let c = {};
      if (s.type === "mark" && H(s, "exitable", a) && (c.ArrowRight = () => Ue.handleExit({ editor: e, mark: s })), l) {
        const m = Object.fromEntries(Object.entries(l()).map(([g, b]) => [g, () => b({ editor: e })]));
        c = { ...c, ...m };
      }
      const d = g6(c);
      u.push(d);
      const f = H(s, "addInputRules", a);
      tf(s, e.options.enableInputRules) && f && r.push(...f());
      const p = H(s, "addPasteRules", a);
      tf(s, e.options.enablePasteRules) && p && i.push(...p());
      const h = H(s, "addProseMirrorPlugins", a);
      if (h) {
        const m = h();
        u.push(...m);
      }
      return u;
    }).flat();
    return [
      K6({
        editor: e,
        rules: r
      }),
      ...ew({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return y0(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: n } = fa(this.extensions);
    return Object.fromEntries(n.filter((r) => !!H(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((u) => u.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: Te(r.name, this.schema)
      }, s = H(r, "addNodeView", o);
      if (!s)
        return [];
      const a = (u, l, c, d, f) => {
        const p = Pu(u, i);
        return s()({
          // pass-through
          node: u,
          view: l,
          getPos: c,
          decorations: d,
          innerDecorations: f,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: p
        });
      };
      return [r.name, a];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var n;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: qa(e.name, this.schema)
      };
      e.type === "mark" && (!((n = q(H(e, "keepOnSplit", r))) !== null && n !== void 0) || n) && this.splittableMarks.push(e.name);
      const i = H(e, "onBeforeCreate", r), o = H(e, "onCreate", r), s = H(e, "onUpdate", r), a = H(e, "onSelectionUpdate", r), u = H(e, "onTransaction", r), l = H(e, "onFocus", r), c = H(e, "onBlur", r), d = H(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), a && this.editor.on("selectionUpdate", a), u && this.editor.on("transaction", u), l && this.editor.on("focus", l), c && this.editor.on("blur", c), d && this.editor.on("destroy", d);
    });
  }
}
class ne {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = q(H(this, "addOptions", {
      name: this.name
    }))), this.storage = q(H(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ne(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => ha(this.options, e)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(e = {}) {
    const n = new ne({ ...this.config, ...e });
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = q(H(n, "addOptions", {
      name: n.name
    })), n.storage = q(H(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
function x0(t, e, n) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = n || {};
  let a = "";
  return t.nodesBetween(r, i, (u, l, c, d) => {
    var f;
    u.isBlock && l > r && (a += o);
    const p = s == null ? void 0 : s[u.type.name];
    if (p)
      return c && (a += p({
        node: u,
        pos: l,
        parent: c,
        index: d,
        range: e
      })), !1;
    u.isText && (a += (f = u == null ? void 0 : u.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, l) - l, i - l));
  }), a;
}
function zl(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText]));
}
const nw = /* @__PURE__ */ ne.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new se({
        key: new be("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((c) => c.$from.pos)), a = Math.max(...o.map((c) => c.$to.pos)), u = zl(n);
            return x0(r, { from: s, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: u
            });
          }
        }
      })
    ];
  }
}), rw = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
}), !0), iw = (t = !1) => ({ commands: e }) => e.setContent("", t), ow = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: i } = r;
  return n && i.forEach(({ $from: o, $to: s }) => {
    t.doc.nodesBetween(o.pos, s.pos, (a, u) => {
      if (a.type.isText)
        return;
      const { doc: l, mapping: c } = e, d = l.resolve(c.map(u)), f = l.resolve(c.map(u + a.nodeSize)), p = d.blockRange(f);
      if (!p)
        return;
      const h = Xr(p);
      if (a.type.isTextblock) {
        const { defaultType: m } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(p.start, m);
      }
      (h || h === 0) && e.lift(p, h);
    });
  }), !0;
}, sw = (t) => (e) => t(e), aw = () => ({ state: t, dispatch: e }) => E6(t, e), uw = (t, e) => ({ editor: n, tr: r }) => {
  const { state: i } = n, o = i.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new I(r.doc.resolve(s - 1))), !0;
}, lw = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = t.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const a = i.before(o), u = i.after(o);
        t.delete(a, u).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, cw = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const i = Te(t, n.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const u = o.before(s), l = o.after(s);
        e.delete(u, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, dw = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: i } = t;
  return n && e.delete(r, i), !0;
}, fw = () => ({ state: t, dispatch: e }) => d0(t, e), pw = () => ({ commands: t }) => t.keyboardShortcut("Enter"), hw = () => ({ state: t, dispatch: e }) => M6(t, e);
function hs(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => n.strict ? e[i] === t[i] : Fl(e[i]) ? e[i].test(t[i]) : e[i] === t[i]) : !0;
}
function k0(t, e, n = {}) {
  return t.find((r) => r.type === e && hs(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((i) => [i, r.attrs[i]])),
    n
  ));
}
function nf(t, e, n = {}) {
  return !!k0(t, e, n);
}
function ma(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let i = t.parent.childAfter(t.parentOffset);
  if ((!i.node || !i.node.marks.some((c) => c.type === e)) && (i = t.parent.childBefore(t.parentOffset)), !i.node || !i.node.marks.some((c) => c.type === e) || (n = n || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !k0([...i.node.marks], e, n)))
    return;
  let s = i.index, a = t.start() + i.offset, u = s + 1, l = a + i.node.nodeSize;
  for (; s > 0 && nf([...t.parent.child(s - 1).marks], e, n); )
    s -= 1, a -= t.parent.child(s).nodeSize;
  for (; u < t.parent.childCount && nf([...t.parent.child(u).marks], e, n); )
    l += t.parent.child(u).nodeSize, u += 1;
  return {
    from: a,
    to: l
  };
}
function Hn(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const mw = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const o = Hn(t, r.schema), { doc: s, selection: a } = n, { $from: u, from: l, to: c } = a;
  if (i) {
    const d = ma(u, o, e);
    if (d && d.from <= l && d.to >= c) {
      const f = I.create(s, d.from, d.to);
      n.setSelection(f);
    }
  }
  return !0;
}, gw = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function $l(t) {
  return t instanceof I;
}
function Wt(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function C0(t, e = null) {
  if (!e)
    return null;
  const n = F.atStart(t), r = F.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const i = n.from, o = r.to;
  return e === "all" ? I.create(t, Wt(0, i, o), Wt(t.content.size, i, o)) : I.create(t, Wt(e, i, o), Wt(e, i, o));
}
const bw = (t = null, e = {}) => ({ editor: n, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (o && t === null && !$l(n.state.selection))
    return s(), !0;
  const a = C0(i.doc, t) || n.state.selection, u = n.state.selection.eq(a);
  return o && (u || i.setSelection(a), u && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, yw = (t, e) => (n) => t.every((r, i) => e(r, { ...n, index: i })), vw = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), A0 = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && A0(r);
  }
  return t;
};
function Mo(t) {
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return A0(n);
}
function ms(t, e, n) {
  if (t instanceof Ut || t instanceof A)
    return t;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof t == "object" && t !== null, i = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return A.fromArray(t.map((a) => e.nodeFromJSON(a)));
      const s = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), ms("", e, n);
    }
  if (i) {
    if (n.errorOnInvalidContent) {
      let s = !1, a = "";
      const u = new fh({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (l) => (s = !0, a = typeof l == "string" ? l : l.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? xn.fromSchema(u).parseSlice(Mo(t), n.parseOptions) : xn.fromSchema(u).parse(Mo(t), n.parseOptions), n.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${a}`) });
    }
    const o = xn.fromSchema(e);
    return n.slice ? o.parseSlice(Mo(t), n.parseOptions).content : o.parse(Mo(t), n.parseOptions);
  }
  return ms("", e, n);
}
function ww(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const i = t.steps[r];
  if (!(i instanceof ke || i instanceof Ae))
    return;
  const o = t.mapping.maps[r];
  let s = 0;
  o.forEach((a, u, l, c) => {
    s === 0 && (s = c);
  }), t.setSelection(F.near(t.doc.resolve(s), n));
}
const xw = (t) => !("type" in t), kw = (t, e, n) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let a;
    try {
      a = ms(e, o.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...n.parseOptions
        },
        errorOnInvalidContent: (s = n.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (h) {
      return o.emit("contentError", {
        editor: o,
        error: h,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      }), !1;
    }
    let { from: u, to: l } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, c = !0, d = !0;
    if ((xw(a) ? a : [a]).forEach((h) => {
      h.check(), c = c ? h.isText && h.marks.length === 0 : !1, d = d ? h.isBlock : !1;
    }), u === l && d) {
      const { parent: h } = r.doc.resolve(u);
      h.isTextblock && !h.type.spec.code && !h.childCount && (u -= 1, l += 1);
    }
    let p;
    if (c) {
      if (Array.isArray(e))
        p = e.map((h) => h.text || "").join("");
      else if (e instanceof A) {
        let h = "";
        e.forEach((m) => {
          m.text && (h += m.text);
        }), p = h;
      } else typeof e == "object" && e && e.text ? p = e.text : p = e;
      r.insertText(p, u, l);
    } else
      p = a, r.replaceWith(u, l, p);
    n.updateSelection && ww(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: p }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: p });
  }
  return !0;
}, Cw = () => ({ state: t, dispatch: e }) => C6(t, e), Aw = () => ({ state: t, dispatch: e }) => A6(t, e), Sw = () => ({ state: t, dispatch: e }) => b6(t, e), Tw = () => ({ state: t, dispatch: e }) => x6(t, e), Mw = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = ia(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Ew = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = ia(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Ow = () => ({ state: t, dispatch: e }) => y6(t, e), Nw = () => ({ state: t, dispatch: e }) => v6(t, e);
function jl() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function S0() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Lw(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, i, o, s;
  for (let a = 0; a < e.length - 1; a += 1) {
    const u = e[a];
    if (/^(cmd|meta|m)$/i.test(u))
      s = !0;
    else if (/^a(lt)?$/i.test(u))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(u))
      i = !0;
    else if (/^s(hift)?$/i.test(u))
      o = !0;
    else if (/^mod$/i.test(u))
      jl() || S0() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${u}`);
  }
  return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
const Vw = (t) => ({ editor: e, view: n, tr: r, dispatch: i }) => {
  const o = Lw(t).split(/-(?!$)/), s = o.find((l) => !["Alt", "Ctrl", "Meta", "Shift"].includes(l)), a = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), u = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (l) => l(n, a));
  });
  return u == null || u.steps.forEach((l) => {
    const c = l.map(r.mapping);
    c && i && r.maybeStep(c);
  }), !0;
};
function ji(t, e, n = {}) {
  const { from: r, to: i, empty: o } = t.selection, s = e ? Te(e, t.schema) : null, a = [];
  t.doc.nodesBetween(r, i, (d, f) => {
    if (d.isText)
      return;
    const p = Math.max(r, f), h = Math.min(i, f + d.nodeSize);
    a.push({
      node: d,
      from: p,
      to: h
    });
  });
  const u = i - r, l = a.filter((d) => s ? s.name === d.node.type.name : !0).filter((d) => hs(d.node.attrs, n, { strict: !1 }));
  return o ? !!l.length : l.reduce((d, f) => d + f.to - f.from, 0) >= u;
}
const Hw = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Te(t, n.schema);
  return ji(n, i, e) ? S6(n, r) : !1;
}, Rw = () => ({ state: t, dispatch: e }) => O6(t, e), Dw = (t) => ({ state: e, dispatch: n }) => {
  const r = Te(t, e.schema);
  return I6(r)(e, n);
}, _w = () => ({ state: t, dispatch: e }) => T6(t, e);
function ga(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function rf(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, i) => (n.includes(i) || (r[i] = t[i]), r), {});
}
const Pw = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const a = ga(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (o = Te(t, r.schema)), a === "mark" && (s = Hn(t, r.schema)), i && n.selection.ranges.forEach((u) => {
    r.doc.nodesBetween(u.$from.pos, u.$to.pos, (l, c) => {
      o && o === l.type && n.setNodeMarkup(c, void 0, rf(l.attrs, e)), s && l.marks.length && l.marks.forEach((d) => {
        s === d.type && n.addMark(c, c + l.nodeSize, s.create(rf(d.attrs, e)));
      });
    });
  }), !0) : !1;
}, Iw = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), Bw = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new ot(t.doc);
    t.setSelection(n);
  }
  return !0;
}, Fw = () => ({ state: t, dispatch: e }) => w6(t, e), zw = () => ({ state: t, dispatch: e }) => k6(t, e), $w = () => ({ state: t, dispatch: e }) => N6(t, e), jw = () => ({ state: t, dispatch: e }) => H6(t, e), Ww = () => ({ state: t, dispatch: e }) => V6(t, e);
function Iu(t, e, n = {}, r = {}) {
  return ms(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const qw = (t, e = !1, n = {}, r = {}) => ({ editor: i, tr: o, dispatch: s, commands: a }) => {
  var u, l;
  const { doc: c } = o;
  if (n.preserveWhitespace !== "full") {
    const d = Iu(t, i.schema, n, {
      errorOnInvalidContent: (u = r.errorOnInvalidContent) !== null && u !== void 0 ? u : i.options.enableContentCheck
    });
    return s && o.replaceWith(0, c.content.size, d).setMeta("preventUpdate", !e), !0;
  }
  return s && o.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: c.content.size }, t, {
    parseOptions: n,
    errorOnInvalidContent: (l = r.errorOnInvalidContent) !== null && l !== void 0 ? l : i.options.enableContentCheck
  });
};
function T0(t, e) {
  const n = Hn(e, t.schema), { from: r, to: i, empty: o } = t.selection, s = [];
  o ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, i, (u) => {
    s.push(...u.marks);
  });
  const a = s.find((u) => u.type.name === n.name);
  return a ? { ...a.attrs } : {};
}
function Uw(t, e) {
  const n = new Tl(t);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      n.step(i);
    });
  }), n;
}
function Kw(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Gw(t, e, n) {
  const r = [];
  return t.nodesBetween(e.from, e.to, (i, o) => {
    n(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function M0(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function Wl(t) {
  return (e) => M0(e.$from, t);
}
function Jw(t, e) {
  const n = qn.resolve(t);
  return w0(n, e);
}
function E0(t, e) {
  const n = {
    from: 0,
    to: t.content.size
  };
  return x0(t, n, e);
}
function Zw(t, e) {
  const n = Te(e, t.schema), { from: r, to: i } = t.selection, o = [];
  t.doc.nodesBetween(r, i, (a) => {
    o.push(a);
  });
  const s = o.reverse().find((a) => a.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function O0(t, e) {
  const n = ga(typeof e == "string" ? e : e.name, t.schema);
  return n === "node" ? Zw(t, e) : n === "mark" ? T0(t, e) : {};
}
function Xw(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(n, i) ? !1 : n[i] = !0;
  });
}
function Yw(t) {
  const e = Xw(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, s) => s !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function Qw(t) {
  const { mapping: e, steps: n } = t, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((a, u) => {
        s.push({ from: a, to: u });
      });
    else {
      const { from: a, to: u } = n[o];
      if (a === void 0 || u === void 0)
        return;
      s.push({ from: a, to: u });
    }
    s.forEach(({ from: a, to: u }) => {
      const l = e.slice(o).map(a, -1), c = e.slice(o).map(u), d = e.invert().map(l, -1), f = e.invert().map(c);
      r.push({
        oldRange: {
          from: d,
          to: f
        },
        newRange: {
          from: l,
          to: c
        }
      });
    });
  }), Yw(r);
}
function ql(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((i) => {
    const o = n.resolve(t), s = ma(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : n.nodesBetween(t, e, (i, o) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function qo(t, e, n) {
  return Object.fromEntries(Object.entries(n).filter(([r]) => {
    const i = t.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Bu(t, e, n = {}) {
  const { empty: r, ranges: i } = t.selection, o = e ? Hn(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => hs(d.attrs, n, { strict: !1 }));
  let s = 0;
  const a = [];
  if (i.forEach(({ $from: d, $to: f }) => {
    const p = d.pos, h = f.pos;
    t.doc.nodesBetween(p, h, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const b = Math.max(p, g), x = Math.min(h, g + m.nodeSize), w = x - b;
      s += w, a.push(...m.marks.map((y) => ({
        mark: y,
        from: b,
        to: x
      })));
    });
  }), s === 0)
    return !1;
  const u = a.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => hs(d.mark.attrs, n, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), l = a.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (u > 0 ? u + l : u) >= s;
}
function ex(t, e, n = {}) {
  if (!e)
    return ji(t, null, n) || Bu(t, null, n);
  const r = ga(e, t.schema);
  return r === "node" ? ji(t, e, n) : r === "mark" ? Bu(t, e, n) : !1;
}
function of(t, e) {
  const { nodeExtensions: n } = fa(e), r = n.find((s) => s.name === t);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = q(H(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function ba(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return /^\s*$/m.test((r = t.text) !== null && r !== void 0 ? r : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return t.content.forEach((o) => {
      i !== !1 && (ba(o, { ignoreWhitespace: n, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function N0(t) {
  return t instanceof P;
}
function L0(t, e, n) {
  const i = t.state.doc.content.size, o = Wt(e, 0, i), s = Wt(n, 0, i), a = t.coordsAtPos(o), u = t.coordsAtPos(s, -1), l = Math.min(a.top, u.top), c = Math.max(a.bottom, u.bottom), d = Math.min(a.left, u.left), f = Math.max(a.right, u.right), p = f - d, h = c - l, b = {
    top: l,
    bottom: c,
    left: d,
    right: f,
    width: p,
    height: h,
    x: d,
    y: l
  };
  return {
    ...b,
    toJSON: () => b
  };
}
function tx(t, e, n) {
  var r;
  const { selection: i } = e;
  let o = null;
  if ($l(i) && (o = i.$cursor), o) {
    const a = (r = t.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!n.isInSet(a) || !a.some((u) => u.type.excludes(n));
  }
  const { ranges: s } = i;
  return s.some(({ $from: a, $to: u }) => {
    let l = a.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(a.pos, u.pos, (c, d, f) => {
      if (l)
        return !1;
      if (c.isInline) {
        const p = !f || f.type.allowsMarkType(n), h = !!n.isInSet(c.marks) || !c.marks.some((m) => m.type.excludes(n));
        l = p && h;
      }
      return !l;
    }), l;
  });
}
const nx = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: o } = n, { empty: s, ranges: a } = o, u = Hn(t, r.schema);
  if (i)
    if (s) {
      const l = T0(r, u);
      n.addStoredMark(u.create({
        ...l,
        ...e
      }));
    } else
      a.forEach((l) => {
        const c = l.$from.pos, d = l.$to.pos;
        r.doc.nodesBetween(c, d, (f, p) => {
          const h = Math.max(p, c), m = Math.min(p + f.nodeSize, d);
          f.marks.find((b) => b.type === u) ? f.marks.forEach((b) => {
            u === b.type && n.addMark(h, m, u.create({
              ...b.attrs,
              ...e
            }));
          }) : n.addMark(h, m, u.create(e));
        });
      });
  return tx(r, n, u);
}, rx = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), ix = (t, e = {}) => ({ state: n, dispatch: r, chain: i }) => {
  const o = Te(t, n.schema);
  let s;
  return n.selection.$anchor.sameParent(n.selection.$head) && (s = n.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: a }) => Yd(o, { ...s, ...e })(n) ? !0 : a.clearNodes()).command(({ state: a }) => Yd(o, { ...s, ...e })(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, ox = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, i = Wt(t, 0, r.content.size), o = P.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, sx = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: i, to: o } = typeof t == "number" ? { from: t, to: t } : t, s = I.atStart(r).from, a = I.atEnd(r).to, u = Wt(i, s, a), l = Wt(o, s, a), c = I.create(r, u, l);
    e.setSelection(c);
  }
  return !0;
}, ax = (t) => ({ state: e, dispatch: n }) => {
  const r = Te(t, e.schema);
  return z6(r)(e, n);
};
function sf(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    t.tr.ensureMarks(r);
  }
}
const ux = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: a, $to: u } = o, l = i.extensionManager.attributes, c = qo(l, a.node().type.name, a.node().attrs);
  if (o instanceof P && o.node.isBlock)
    return !a.parentOffset || !Lr(s, a.pos) ? !1 : (r && (t && sf(n, i.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const d = u.parentOffset === u.parent.content.size, f = a.depth === 0 ? void 0 : Kw(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let p = d && f ? [
    {
      type: f,
      attrs: c
    }
  ] : void 0, h = Lr(e.doc, e.mapping.map(a.pos), 1, p);
  if (!p && !h && Lr(e.doc, e.mapping.map(a.pos), 1, f ? [{ type: f }] : void 0) && (h = !0, p = f ? [
    {
      type: f,
      attrs: c
    }
  ] : void 0), r) {
    if (h && (o instanceof I && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, p), f && !d && !a.parentOffset && a.parent.type !== f)) {
      const m = e.mapping.map(a.before()), g = e.doc.resolve(m);
      a.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(a.before()), f);
    }
    t && sf(n, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return h;
}, lx = (t, e = {}) => ({ tr: n, state: r, dispatch: i, editor: o }) => {
  var s;
  const a = Te(t, r.schema), { $from: u, $to: l } = r.selection, c = r.selection.node;
  if (c && c.isBlock || u.depth < 2 || !u.sameParent(l))
    return !1;
  const d = u.node(-1);
  if (d.type !== a)
    return !1;
  const f = o.extensionManager.attributes;
  if (u.parent.content.size === 0 && u.node(-1).childCount === u.indexAfter(-1)) {
    if (u.depth === 2 || u.node(-3).type !== a || u.index(-2) !== u.node(-2).childCount - 1)
      return !1;
    if (i) {
      let b = A.empty;
      const x = u.index(-1) ? 1 : u.index(-2) ? 2 : 3;
      for (let M = u.depth - x; M >= u.depth - 3; M -= 1)
        b = A.from(u.node(M).copy(b));
      const w = u.indexAfter(-1) < u.node(-2).childCount ? 1 : u.indexAfter(-2) < u.node(-3).childCount ? 2 : 3, y = {
        ...qo(f, u.node().type.name, u.node().attrs),
        ...e
      }, k = ((s = a.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(y)) || void 0;
      b = b.append(A.from(a.createAndFill(null, k) || void 0));
      const v = u.before(u.depth - (x - 1));
      n.replace(v, u.after(-w), new N(b, 4 - x, 0));
      let E = -1;
      n.doc.nodesBetween(v, n.doc.content.size, (M, O) => {
        if (E > -1)
          return !1;
        M.isTextblock && M.content.size === 0 && (E = O + 1);
      }), E > -1 && n.setSelection(I.near(n.doc.resolve(E))), n.scrollIntoView();
    }
    return !0;
  }
  const p = l.pos === u.end() ? d.contentMatchAt(0).defaultType : null, h = {
    ...qo(f, d.type.name, d.attrs),
    ...e
  }, m = {
    ...qo(f, u.node().type.name, u.node().attrs),
    ...e
  };
  n.delete(u.pos, l.pos);
  const g = p ? [
    { type: a, attrs: h },
    { type: p, attrs: m }
  ] : [{ type: a, attrs: h }];
  if (!Lr(n.doc, u.pos, 2))
    return !1;
  if (i) {
    const { selection: b, storedMarks: x } = r, { splittableMarks: w } = o.extensionManager, y = x || b.$to.parentOffset && b.$from.marks();
    if (n.split(u.pos, 2, g).scrollIntoView(), !y || !i)
      return !0;
    const k = y.filter((v) => w.includes(v.type.name));
    n.ensureMarks(k);
  }
  return !0;
}, Ua = (t, e) => {
  const n = Wl((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === (i == null ? void 0 : i.type) && Ln(t.doc, n.pos) && t.join(n.pos), !0;
}, Ka = (t, e) => {
  const n = Wl((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === (i == null ? void 0 : i.type) && Ln(t.doc, r) && t.join(r), !0;
}, cx = (t, e, n, r = {}) => ({ editor: i, tr: o, state: s, dispatch: a, chain: u, commands: l, can: c }) => {
  const { extensions: d, splittableMarks: f } = i.extensionManager, p = Te(t, s.schema), h = Te(e, s.schema), { selection: m, storedMarks: g } = s, { $from: b, $to: x } = m, w = b.blockRange(x), y = g || m.$to.parentOffset && m.$from.marks();
  if (!w)
    return !1;
  const k = Wl((v) => of(v.type.name, d))(m);
  if (w.depth >= 1 && k && w.depth - k.depth <= 1) {
    if (k.node.type === p)
      return l.liftListItem(h);
    if (of(k.node.type.name, d) && p.validContent(k.node.content) && a)
      return u().command(() => (o.setNodeMarkup(k.pos, p), !0)).command(() => Ua(o, p)).command(() => Ka(o, p)).run();
  }
  return !n || !y || !a ? u().command(() => c().wrapInList(p, r) ? !0 : l.clearNodes()).wrapInList(p, r).command(() => Ua(o, p)).command(() => Ka(o, p)).run() : u().command(() => {
    const v = c().wrapInList(p, r), E = y.filter((M) => f.includes(M.type.name));
    return o.ensureMarks(E), v ? !0 : l.clearNodes();
  }).wrapInList(p, r).command(() => Ua(o, p)).command(() => Ka(o, p)).run();
}, dx = (t, e = {}, n = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = n, s = Hn(t, r.schema);
  return Bu(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, fx = (t, e, n = {}) => ({ state: r, commands: i }) => {
  const o = Te(t, r.schema), s = Te(e, r.schema), a = ji(r, o, n);
  let u;
  return r.selection.$anchor.sameParent(r.selection.$head) && (u = r.selection.$anchor.parent.attrs), a ? i.setNode(s, u) : i.setNode(o, { ...u, ...n });
}, px = (t, e = {}) => ({ state: n, commands: r }) => {
  const i = Te(t, n.schema);
  return ji(n, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, hx = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(t))) {
      if (e) {
        const s = t.tr, a = o.transform;
        for (let u = a.steps.length - 1; u >= 0; u -= 1)
          s.step(a.steps[u].invert(a.docs[u]));
        if (o.text) {
          const u = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, t.schema.text(o.text, u));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, mx = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: i } = n;
  return r || e && i.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, gx = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: a } = n, u = Hn(t, r.schema), { $from: l, empty: c, ranges: d } = a;
  if (!i)
    return !0;
  if (c && s) {
    let { from: f, to: p } = a;
    const h = (o = l.marks().find((g) => g.type === u)) === null || o === void 0 ? void 0 : o.attrs, m = ma(l, u, h);
    m && (f = m.from, p = m.to), n.removeMark(f, p, u);
  } else
    d.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, u);
    });
  return n.removeStoredMark(u), !0;
}, bx = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const a = ga(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (o = Te(t, r.schema)), a === "mark" && (s = Hn(t, r.schema)), i && n.selection.ranges.forEach((u) => {
    const l = u.$from.pos, c = u.$to.pos;
    let d, f, p, h;
    n.selection.empty ? r.doc.nodesBetween(l, c, (m, g) => {
      o && o === m.type && (p = Math.max(g, l), h = Math.min(g + m.nodeSize, c), d = g, f = m);
    }) : r.doc.nodesBetween(l, c, (m, g) => {
      g < l && o && o === m.type && (p = Math.max(g, l), h = Math.min(g + m.nodeSize, c), d = g, f = m), g >= l && g <= c && (o && o === m.type && n.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), s && m.marks.length && m.marks.forEach((b) => {
        if (s === b.type) {
          const x = Math.max(g, l), w = Math.min(g + m.nodeSize, c);
          n.addMark(x, w, s.create({
            ...b.attrs,
            ...e
          }));
        }
      }));
    }), f && (d !== void 0 && n.setNodeMarkup(d, void 0, {
      ...f.attrs,
      ...e
    }), s && f.marks.length && f.marks.forEach((m) => {
      s === m.type && n.addMark(p, h, s.create({
        ...m.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, yx = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Te(t, n.schema);
  return R6(i, e)(n, r);
}, vx = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Te(t, n.schema);
  return D6(i, e)(n, r);
};
var wx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: rw,
  clearContent: iw,
  clearNodes: ow,
  command: sw,
  createParagraphNear: aw,
  cut: uw,
  deleteCurrentNode: lw,
  deleteNode: cw,
  deleteRange: dw,
  deleteSelection: fw,
  enter: pw,
  exitCode: hw,
  extendMarkRange: mw,
  first: gw,
  focus: bw,
  forEach: yw,
  insertContent: vw,
  insertContentAt: kw,
  joinBackward: Sw,
  joinDown: Aw,
  joinForward: Tw,
  joinItemBackward: Mw,
  joinItemForward: Ew,
  joinTextblockBackward: Ow,
  joinTextblockForward: Nw,
  joinUp: Cw,
  keyboardShortcut: Vw,
  lift: Hw,
  liftEmptyBlock: Rw,
  liftListItem: Dw,
  newlineInCode: _w,
  resetAttributes: Pw,
  scrollIntoView: Iw,
  selectAll: Bw,
  selectNodeBackward: Fw,
  selectNodeForward: zw,
  selectParentNode: $w,
  selectTextblockEnd: jw,
  selectTextblockStart: Ww,
  setContent: qw,
  setMark: nx,
  setMeta: rx,
  setNode: ix,
  setNodeSelection: ox,
  setTextSelection: sx,
  sinkListItem: ax,
  splitBlock: ux,
  splitListItem: lx,
  toggleList: cx,
  toggleMark: dx,
  toggleNode: fx,
  toggleWrap: px,
  undoInputRule: hx,
  unsetAllMarks: mx,
  unsetMark: gx,
  updateAttributes: bx,
  wrapIn: yx,
  wrapInList: vx
});
const xx = /* @__PURE__ */ ne.create({
  name: "commands",
  addCommands() {
    return {
      ...wx
    };
  }
}), kx = /* @__PURE__ */ ne.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new se({
        key: new be("tiptapDrop"),
        props: {
          handleDrop: (t, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
}), Cx = /* @__PURE__ */ ne.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new se({
        key: new be("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Ax = /* @__PURE__ */ ne.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new se({
        key: new be("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Sx = /* @__PURE__ */ ne.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: a }) => {
        const { selection: u, doc: l } = a, { empty: c, $anchor: d } = u, { pos: f, parent: p } = d, h = d.parent.isTextblock && f > 0 ? a.doc.resolve(f - 1) : d, m = h.parent.type.spec.isolating, g = d.pos - d.parentOffset, b = m && h.parent.childCount === 1 ? g === d.pos : F.atStart(l).from === f;
        return !c || !p.type.isTextblock || p.textContent.length || !b || b && d.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return jl() || S0() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new se({
        key: new be("clearDocument"),
        appendTransaction: (t, e, n) => {
          const r = t.some((m) => m.docChanged) && !e.doc.eq(n.doc), i = t.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: o, from: s, to: a } = e.selection, u = F.atStart(e.doc).from, l = F.atEnd(e.doc).to;
          if (o || !(s === u && a === l) || !ba(n.doc))
            return;
          const f = n.tr, p = ca({
            state: n,
            transaction: f
          }), { commands: h } = new da({
            editor: this.editor,
            state: p
          });
          if (h.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Tx = /* @__PURE__ */ ne.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new se({
        key: new be("tiptapPaste"),
        props: {
          handlePaste: (t, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n
            });
          }
        }
      })
    ];
  }
}), Mx = /* @__PURE__ */ ne.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new se({
        key: new be("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class $n {
  get name() {
    return this.node.type.name;
  }
  constructor(e, n, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = n, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let n = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      n = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: n, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(e);
    return new $n(n, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new $n(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new $n(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((n, r) => {
      const i = n.isBlock && !n.isTextblock, o = n.isAtom && !n.isText, s = this.pos + r + (o ? 0 : 1), a = this.resolvedPos.doc.resolve(s);
      if (!i && a.depth <= this.depth)
        return;
      const u = new $n(a, this.editor, i, i ? n : null);
      i && (u.actualDepth = this.depth + 1), e.push(new $n(a, this.editor, i, i ? n : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, n = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(n).length > 0) {
          const o = i.node.attrs, s = Object.keys(n);
          for (let a = 0; a < s.length; a += 1) {
            const u = s[a];
            if (o[u] !== n[u])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, n = {}) {
    return this.querySelectorAll(e, n, !0)[0] || null;
  }
  querySelectorAll(e, n = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(n);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((u) => n[u] === s.node.attrs[u]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, n, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: n } = this.editor.state;
    n.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(n);
  }
}
const Ex = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Ox(t, e, n) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let Nx = class extends $6 {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: n }) => {
        throw n;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: n, slice: r, moved: i }) => this.options.onDrop(n, r, i)), this.on("paste", ({ event: n, slice: r }) => this.options.onPaste(n, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Ox(Ex, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, n = !0) {
    this.setOptions({ editable: e }), n && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, n) {
    const r = v0(n) ? n(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const n = this.state.plugins;
    let r = n;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      r = n.filter((a) => !a.key.startsWith(s));
    }), n.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, n;
    const i = [...this.options.enableCoreExtensions ? [
      Cx,
      nw.configure({
        blockSeparator: (n = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || n === void 0 ? void 0 : n.blockSeparator
      }),
      xx,
      Ax,
      Sx,
      Mx,
      kx,
      Tx
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new qn(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new da({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let n;
    try {
      n = Iu(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (s) {
      if (!(s instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(s.message))
        throw s;
      this.emit("contentError", {
        editor: this,
        error: s,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((a) => a.name !== "collaboration"), this.createExtensionManager();
        }
      }), n = Iu(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = C0(n, this.options.autofocus);
    this.view = new a6(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: Tr.create({
        doc: n,
        selection: r || void 0
      })
    });
    const i = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(i), this.createNodeViews(), this.prependClass();
    const o = this.view.dom;
    o.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const n = this.capturedTransaction;
    return this.capturedTransaction = null, n;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((s) => {
        var a;
        return (a = this.capturedTransaction) === null || a === void 0 ? void 0 : a.step(s);
      });
      return;
    }
    const n = this.state.apply(e), r = !this.state.selection.eq(n.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: n
    }), this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return O0(this.state, e);
  }
  isActive(e, n) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? n : e;
    return ex(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Bl(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: n = `

`, textSerializers: r = {} } = e || {};
    return E0(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...zl(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return ba(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, n) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, n)) || null;
  }
  $nodes(e, n) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, n)) || null;
  }
  $pos(e) {
    const n = this.state.doc.resolve(e);
    return new $n(n, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function or(t) {
  return new pa({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = q(t.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], a = r[0];
      if (s) {
        const u = a.search(/\S/), l = n.from + a.indexOf(s), c = l + s.length;
        if (ql(n.from, n.to, e.doc).filter((p) => p.mark.type.excluded.find((m) => m === t.type && m !== p.mark.type)).filter((p) => p.to > l).length)
          return null;
        c < n.to && o.delete(c, n.to), l > n.from && o.delete(n.from + u, l);
        const f = n.from + u + s.length;
        o.addMark(n.from + u, f, t.type.create(i || {})), o.removeStoredMark(t.type);
      }
    }
  });
}
function V0(t) {
  return new pa({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = q(t.getAttributes, void 0, r) || {}, { tr: o } = e, s = n.from;
      let a = n.to;
      const u = t.type.create(i);
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        let c = s + l;
        c > a ? c = a : a = c + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, s + r[0].length - 1), o.replaceWith(c, a, u);
      } else if (r[0]) {
        const l = t.type.isInline ? s : s - 1;
        o.insert(l, t.type.create(i)).delete(o.mapping.map(s), o.mapping.map(a));
      }
      o.scrollIntoView();
    }
  });
}
function Fu(t) {
  return new pa({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = e.doc.resolve(n.from), o = q(t.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), t.type))
        return null;
      e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, o);
    }
  });
}
function Fr(t) {
  return new pa({
    find: t.find,
    handler: ({ state: e, range: n, match: r, chain: i }) => {
      const o = q(t.getAttributes, void 0, r) || {}, s = e.tr.delete(n.from, n.to), u = s.doc.resolve(n.from).blockRange(), l = u && Sl(u, t.type, o);
      if (!l)
        return null;
      if (s.wrap(u, l), t.keepMarks && t.editor) {
        const { selection: d, storedMarks: f } = e, { splittableMarks: p } = t.editor.extensionManager, h = f || d.$to.parentOffset && d.$from.marks();
        if (h) {
          const m = h.filter((g) => p.includes(g.type.name));
          s.ensureMarks(m);
        }
      }
      if (t.keepAttributes) {
        const d = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(d, o).run();
      }
      const c = s.doc.resolve(n.from - 1).nodeBefore;
      c && c.type === t.type && Ln(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, c)) && s.join(n.from - 1);
    }
  });
}
class de {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = q(H(this, "addOptions", {
      name: this.name
    }))), this.storage = q(H(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new de(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => ha(this.options, e)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(e = {}) {
    const n = new de(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = q(H(n, "addOptions", {
      name: n.name
    })), n.storage = q(H(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
function Lx() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
class Vx {
  constructor(e, n, r) {
    this.isDragging = !1, this.component = e, this.editor = n.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...r
    }, this.extension = n.extension, this.node = n.node, this.decorations = n.decorations, this.innerDecorations = n.innerDecorations, this.view = n.view, this.HTMLAttributes = n.HTMLAttributes, this.getPos = n.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(e) {
    var n, r, i, o, s, a, u;
    const { view: l } = this.editor, c = e.target, d = c.nodeType === 3 ? (n = c.parentElement) === null || n === void 0 ? void 0 : n.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
    if (!this.dom || !((r = this.contentDOM) === null || r === void 0) && r.contains(c) || !d)
      return;
    let f = 0, p = 0;
    if (this.dom !== d) {
      const b = this.dom.getBoundingClientRect(), x = d.getBoundingClientRect(), w = (i = e.offsetX) !== null && i !== void 0 ? i : (o = e.nativeEvent) === null || o === void 0 ? void 0 : o.offsetX, y = (s = e.offsetY) !== null && s !== void 0 ? s : (a = e.nativeEvent) === null || a === void 0 ? void 0 : a.offsetY;
      f = x.x - b.x + w, p = x.y - b.y + y;
    }
    (u = e.dataTransfer) === null || u === void 0 || u.setDragImage(this.dom, f, p);
    const h = this.getPos();
    if (typeof h != "number")
      return;
    const m = P.create(l.state.doc, h), g = l.state.tr.setSelection(m);
    l.dispatch(g);
  }
  stopEvent(e) {
    var n;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: e });
    const r = e.target;
    if (!(this.dom.contains(r) && !(!((n = this.contentDOM) === null || n === void 0) && n.contains(r))))
      return !1;
    const o = e.type.startsWith("drag"), s = e.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(r.tagName) || r.isContentEditable) && !s && !o)
      return !0;
    const { isEditable: u } = this.editor, { isDragging: l } = this, c = !!this.node.type.spec.draggable, d = P.isSelectable(this.node), f = e.type === "copy", p = e.type === "paste", h = e.type === "cut", m = e.type === "mousedown";
    if (!c && d && o && e.target === this.dom && e.preventDefault(), c && o && !l && e.target === this.dom)
      return e.preventDefault(), !1;
    if (c && u && !l && m) {
      const g = r.closest("[data-drag-handle]");
      g && (this.dom === g || this.dom.contains(g)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("drop", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("mouseup", () => {
        this.isDragging = !1;
      }, { once: !0 }));
    }
    return !(l || s || f || p || h || m && d);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(e) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: e }) : this.node.isLeaf || this.node.isAtom ? !0 : e.type === "selection" || this.dom.contains(e.target) && e.type === "childList" && (jl() || Lx()) && this.editor.isFocused && [
      ...Array.from(e.addedNodes),
      ...Array.from(e.removedNodes)
    ].every((r) => r.isContentEditable) ? !1 : this.contentDOM === e.target && e.type === "attributes" ? !0 : !this.contentDOM.contains(e.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(e) {
    this.editor.commands.command(({ tr: n }) => {
      const r = this.getPos();
      return typeof r != "number" ? !1 : (n.setNodeMarkup(r, void 0, {
        ...this.node.attrs,
        ...e
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const e = this.getPos();
    if (typeof e != "number")
      return;
    const n = e + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: e, to: n });
  }
}
function Mn(t) {
  return new Z6({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: i }) => {
      const o = q(t.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, a = r[r.length - 1], u = r[0];
      let l = n.to;
      if (a) {
        const c = u.search(/\S/), d = n.from + u.indexOf(a), f = d + a.length;
        if (ql(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === t.type && g !== h.mark.type)).filter((h) => h.to > d).length)
          return null;
        f < n.to && s.delete(f, n.to), d > n.from && s.delete(n.from + c, d), l = n.from + c + a.length, s.addMark(n.from + c, l, t.type.create(o || {})), s.removeStoredMark(t.type);
      }
    }
  });
}
var We = "top", lt = "bottom", ct = "right", qe = "left", Ul = "auto", ro = [We, lt, ct, qe], zr = "start", Wi = "end", Hx = "clippingParents", H0 = "viewport", ai = "popper", Rx = "reference", af = /* @__PURE__ */ ro.reduce(function(t, e) {
  return t.concat([e + "-" + zr, e + "-" + Wi]);
}, []), R0 = /* @__PURE__ */ [].concat(ro, [Ul]).reduce(function(t, e) {
  return t.concat([e, e + "-" + zr, e + "-" + Wi]);
}, []), Dx = "beforeRead", _x = "read", Px = "afterRead", Ix = "beforeMain", Bx = "main", Fx = "afterMain", zx = "beforeWrite", $x = "write", jx = "afterWrite", Wx = [Dx, _x, Px, Ix, Bx, Fx, zx, $x, jx];
function Ot(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Ze(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function sr(t) {
  var e = Ze(t).Element;
  return t instanceof e || t instanceof Element;
}
function at(t) {
  var e = Ze(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Kl(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Ze(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function qx(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, o = e.elements[n];
    !at(o) || !Ot(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var a = i[s];
      a === !1 ? o.removeAttribute(s) : o.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Ux(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), a = s.reduce(function(u, l) {
        return u[l] = "", u;
      }, {});
      !at(i) || !Ot(i) || (Object.assign(i.style, a), Object.keys(o).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const D0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qx,
  effect: Ux,
  requires: ["computeStyles"]
};
function St(t) {
  return t.split("-")[0];
}
var Xn = Math.max, gs = Math.min, $r = Math.round;
function zu() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function _0() {
  return !/^((?!chrome|android).)*safari/i.test(zu());
}
function jr(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, o = 1;
  e && at(t) && (i = t.offsetWidth > 0 && $r(r.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && $r(r.height) / t.offsetHeight || 1);
  var s = sr(t) ? Ze(t) : window, a = s.visualViewport, u = !_0() && n, l = (r.left + (u && a ? a.offsetLeft : 0)) / i, c = (r.top + (u && a ? a.offsetTop : 0)) / o, d = r.width / i, f = r.height / o;
  return {
    width: d,
    height: f,
    top: c,
    right: l + d,
    bottom: c + f,
    left: l,
    x: l,
    y: c
  };
}
function Gl(t) {
  var e = jr(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function P0(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && Kl(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Yt(t) {
  return Ze(t).getComputedStyle(t);
}
function Kx(t) {
  return ["table", "td", "th"].indexOf(Ot(t)) >= 0;
}
function Rn(t) {
  return ((sr(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function ya(t) {
  return Ot(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Kl(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Rn(t)
  );
}
function uf(t) {
  return !at(t) || // https://github.com/popperjs/popper-core/issues/837
  Yt(t).position === "fixed" ? null : t.offsetParent;
}
function Gx(t) {
  var e = /firefox/i.test(zu()), n = /Trident/i.test(zu());
  if (n && at(t)) {
    var r = Yt(t);
    if (r.position === "fixed")
      return null;
  }
  var i = ya(t);
  for (Kl(i) && (i = i.host); at(i) && ["html", "body"].indexOf(Ot(i)) < 0; ) {
    var o = Yt(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function io(t) {
  for (var e = Ze(t), n = uf(t); n && Kx(n) && Yt(n).position === "static"; )
    n = uf(n);
  return n && (Ot(n) === "html" || Ot(n) === "body" && Yt(n).position === "static") ? e : n || Gx(t) || e;
}
function Jl(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ci(t, e, n) {
  return Xn(t, gs(e, n));
}
function Jx(t, e, n) {
  var r = Ci(t, e, n);
  return r > n ? n : r;
}
function I0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function B0(t) {
  return Object.assign({}, I0(), t);
}
function F0(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var Zx = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, B0(typeof e != "number" ? e : F0(e, ro));
};
function Xx(t) {
  var e, n = t.state, r = t.name, i = t.options, o = n.elements.arrow, s = n.modifiersData.popperOffsets, a = St(n.placement), u = Jl(a), l = [qe, ct].indexOf(a) >= 0, c = l ? "height" : "width";
  if (!(!o || !s)) {
    var d = Zx(i.padding, n), f = Gl(o), p = u === "y" ? We : qe, h = u === "y" ? lt : ct, m = n.rects.reference[c] + n.rects.reference[u] - s[u] - n.rects.popper[c], g = s[u] - n.rects.reference[u], b = io(o), x = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, w = m / 2 - g / 2, y = d[p], k = x - f[c] - d[h], v = x / 2 - f[c] / 2 + w, E = Ci(y, v, k), M = u;
    n.modifiersData[r] = (e = {}, e[M] = E, e.centerOffset = E - v, e);
  }
}
function Yx(t) {
  var e = t.state, n = t.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || P0(e.elements.popper, i) && (e.elements.arrow = i));
}
const Qx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Xx,
  effect: Yx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Wr(t) {
  return t.split("-")[1];
}
var e4 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function t4(t, e) {
  var n = t.x, r = t.y, i = e.devicePixelRatio || 1;
  return {
    x: $r(n * i) / i || 0,
    y: $r(r * i) / i || 0
  };
}
function lf(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, o = t.variation, s = t.offsets, a = t.position, u = t.gpuAcceleration, l = t.adaptive, c = t.roundOffsets, d = t.isFixed, f = s.x, p = f === void 0 ? 0 : f, h = s.y, m = h === void 0 ? 0 : h, g = typeof c == "function" ? c({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = g.x, m = g.y;
  var b = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), w = qe, y = We, k = window;
  if (l) {
    var v = io(n), E = "clientHeight", M = "clientWidth";
    if (v === Ze(n) && (v = Rn(n), Yt(v).position !== "static" && a === "absolute" && (E = "scrollHeight", M = "scrollWidth")), v = v, i === We || (i === qe || i === ct) && o === Wi) {
      y = lt;
      var O = d && v === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        v[E]
      );
      m -= O - r.height, m *= u ? 1 : -1;
    }
    if (i === qe || (i === We || i === lt) && o === Wi) {
      w = ct;
      var B = d && v === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        v[M]
      );
      p -= B - r.width, p *= u ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: a
  }, l && e4), U = c === !0 ? t4({
    x: p,
    y: m
  }, Ze(n)) : {
    x: p,
    y: m
  };
  if (p = U.x, m = U.y, u) {
    var K;
    return Object.assign({}, _, (K = {}, K[y] = x ? "0" : "", K[w] = b ? "0" : "", K.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", K));
  }
  return Object.assign({}, _, (e = {}, e[y] = x ? m + "px" : "", e[w] = b ? p + "px" : "", e.transform = "", e));
}
function n4(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, s = o === void 0 ? !0 : o, a = n.roundOffsets, u = a === void 0 ? !0 : a, l = {
    placement: St(e.placement),
    variation: Wr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, lf(Object.assign({}, l, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: u
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, lf(Object.assign({}, l, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const r4 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: n4,
  data: {}
};
var Eo = {
  passive: !0
};
function i4(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, a = s === void 0 ? !0 : s, u = Ze(e.elements.popper), l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && l.forEach(function(c) {
    c.addEventListener("scroll", n.update, Eo);
  }), a && u.addEventListener("resize", n.update, Eo), function() {
    o && l.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Eo);
    }), a && u.removeEventListener("resize", n.update, Eo);
  };
}
const o4 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: i4,
  data: {}
};
var s4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Uo(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return s4[e];
  });
}
var a4 = {
  start: "end",
  end: "start"
};
function cf(t) {
  return t.replace(/start|end/g, function(e) {
    return a4[e];
  });
}
function Zl(t) {
  var e = Ze(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Xl(t) {
  return jr(Rn(t)).left + Zl(t).scrollLeft;
}
function u4(t, e) {
  var n = Ze(t), r = Rn(t), i = n.visualViewport, o = r.clientWidth, s = r.clientHeight, a = 0, u = 0;
  if (i) {
    o = i.width, s = i.height;
    var l = _0();
    (l || !l && e === "fixed") && (a = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a + Xl(t),
    y: u
  };
}
function l4(t) {
  var e, n = Rn(t), r = Zl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Xn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Xn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -r.scrollLeft + Xl(t), u = -r.scrollTop;
  return Yt(i || n).direction === "rtl" && (a += Xn(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: a,
    y: u
  };
}
function Yl(t) {
  var e = Yt(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function z0(t) {
  return ["html", "body", "#document"].indexOf(Ot(t)) >= 0 ? t.ownerDocument.body : at(t) && Yl(t) ? t : z0(ya(t));
}
function Ai(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = z0(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = Ze(r), s = i ? [o].concat(o.visualViewport || [], Yl(r) ? r : []) : r, a = e.concat(s);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Ai(ya(s)))
  );
}
function $u(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function c4(t, e) {
  var n = jr(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function df(t, e, n) {
  return e === H0 ? $u(u4(t, n)) : sr(e) ? c4(e, n) : $u(l4(Rn(t)));
}
function d4(t) {
  var e = Ai(ya(t)), n = ["absolute", "fixed"].indexOf(Yt(t).position) >= 0, r = n && at(t) ? io(t) : t;
  return sr(r) ? e.filter(function(i) {
    return sr(i) && P0(i, r) && Ot(i) !== "body";
  }) : [];
}
function f4(t, e, n, r) {
  var i = e === "clippingParents" ? d4(t) : [].concat(e), o = [].concat(i, [n]), s = o[0], a = o.reduce(function(u, l) {
    var c = df(t, l, r);
    return u.top = Xn(c.top, u.top), u.right = gs(c.right, u.right), u.bottom = gs(c.bottom, u.bottom), u.left = Xn(c.left, u.left), u;
  }, df(t, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function $0(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? St(r) : null, o = r ? Wr(r) : null, s = e.x + e.width / 2 - n.width / 2, a = e.y + e.height / 2 - n.height / 2, u;
  switch (i) {
    case We:
      u = {
        x: s,
        y: e.y - n.height
      };
      break;
    case lt:
      u = {
        x: s,
        y: e.y + e.height
      };
      break;
    case ct:
      u = {
        x: e.x + e.width,
        y: a
      };
      break;
    case qe:
      u = {
        x: e.x - n.width,
        y: a
      };
      break;
    default:
      u = {
        x: e.x,
        y: e.y
      };
  }
  var l = i ? Jl(i) : null;
  if (l != null) {
    var c = l === "y" ? "height" : "width";
    switch (o) {
      case zr:
        u[l] = u[l] - (e[c] / 2 - n[c] / 2);
        break;
      case Wi:
        u[l] = u[l] + (e[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function qi(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, o = n.strategy, s = o === void 0 ? t.strategy : o, a = n.boundary, u = a === void 0 ? Hx : a, l = n.rootBoundary, c = l === void 0 ? H0 : l, d = n.elementContext, f = d === void 0 ? ai : d, p = n.altBoundary, h = p === void 0 ? !1 : p, m = n.padding, g = m === void 0 ? 0 : m, b = B0(typeof g != "number" ? g : F0(g, ro)), x = f === ai ? Rx : ai, w = t.rects.popper, y = t.elements[h ? x : f], k = f4(sr(y) ? y : y.contextElement || Rn(t.elements.popper), u, c, s), v = jr(t.elements.reference), E = $0({
    reference: v,
    element: w,
    strategy: "absolute",
    placement: i
  }), M = $u(Object.assign({}, w, E)), O = f === ai ? M : v, B = {
    top: k.top - O.top + b.top,
    bottom: O.bottom - k.bottom + b.bottom,
    left: k.left - O.left + b.left,
    right: O.right - k.right + b.right
  }, _ = t.modifiersData.offset;
  if (f === ai && _) {
    var U = _[i];
    Object.keys(B).forEach(function(K) {
      var we = [ct, lt].indexOf(K) >= 0 ? 1 : -1, ye = [We, lt].indexOf(K) >= 0 ? "y" : "x";
      B[K] += U[ye] * we;
    });
  }
  return B;
}
function p4(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, o = n.rootBoundary, s = n.padding, a = n.flipVariations, u = n.allowedAutoPlacements, l = u === void 0 ? R0 : u, c = Wr(r), d = c ? a ? af : af.filter(function(h) {
    return Wr(h) === c;
  }) : ro, f = d.filter(function(h) {
    return l.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(h, m) {
    return h[m] = qi(t, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[St(m)], h;
  }, {});
  return Object.keys(p).sort(function(h, m) {
    return p[h] - p[m];
  });
}
function h4(t) {
  if (St(t) === Ul)
    return [];
  var e = Uo(t);
  return [cf(t), e, cf(e)];
}
function m4(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, s = n.altAxis, a = s === void 0 ? !0 : s, u = n.fallbackPlacements, l = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, g = e.options.placement, b = St(g), x = b === g, w = u || (x || !h ? [Uo(g)] : h4(g)), y = [g].concat(w).reduce(function(Vt, dt) {
      return Vt.concat(St(dt) === Ul ? p4(e, {
        placement: dt,
        boundary: c,
        rootBoundary: d,
        padding: l,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : dt);
    }, []), k = e.rects.reference, v = e.rects.popper, E = /* @__PURE__ */ new Map(), M = !0, O = y[0], B = 0; B < y.length; B++) {
      var _ = y[B], U = St(_), K = Wr(_) === zr, we = [We, lt].indexOf(U) >= 0, ye = we ? "width" : "height", ue = qi(e, {
        placement: _,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: l
      }), fe = we ? K ? ct : qe : K ? lt : We;
      k[ye] > v[ye] && (fe = Uo(fe));
      var Me = Uo(fe), gt = [];
      if (o && gt.push(ue[U] <= 0), a && gt.push(ue[fe] <= 0, ue[Me] <= 0), gt.every(function(Vt) {
        return Vt;
      })) {
        O = _, M = !1;
        break;
      }
      E.set(_, gt);
    }
    if (M)
      for (var bt = h ? 3 : 1, Dn = function(dt) {
        var Ht = y.find(function(fr) {
          var Rt = E.get(fr);
          if (Rt)
            return Rt.slice(0, dt).every(function(pr) {
              return pr;
            });
        });
        if (Ht)
          return O = Ht, "break";
      }, yt = bt; yt > 0; yt--) {
        var _n = Dn(yt);
        if (_n === "break") break;
      }
    e.placement !== O && (e.modifiersData[r]._skip = !0, e.placement = O, e.reset = !0);
  }
}
const g4 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: m4,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ff(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function pf(t) {
  return [We, ct, lt, qe].some(function(e) {
    return t[e] >= 0;
  });
}
function b4(t) {
  var e = t.state, n = t.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, s = qi(e, {
    elementContext: "reference"
  }), a = qi(e, {
    altBoundary: !0
  }), u = ff(s, r), l = ff(a, i, o), c = pf(u), d = pf(l);
  e.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: l,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const y4 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: b4
};
function v4(t, e, n) {
  var r = St(t), i = [qe, We].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, s = o[0], a = o[1];
  return s = s || 0, a = (a || 0) * i, [qe, ct].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function w4(t) {
  var e = t.state, n = t.options, r = t.name, i = n.offset, o = i === void 0 ? [0, 0] : i, s = R0.reduce(function(c, d) {
    return c[d] = v4(d, e.rects, o), c;
  }, {}), a = s[e.placement], u = a.x, l = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += l), e.modifiersData[r] = s;
}
const x4 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: w4
};
function k4(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = $0({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const C4 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: k4,
  data: {}
};
function A4(t) {
  return t === "x" ? "y" : "x";
}
function S4(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, o = i === void 0 ? !0 : i, s = n.altAxis, a = s === void 0 ? !1 : s, u = n.boundary, l = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, h = n.tetherOffset, m = h === void 0 ? 0 : h, g = qi(e, {
    boundary: u,
    rootBoundary: l,
    padding: d,
    altBoundary: c
  }), b = St(e.placement), x = Wr(e.placement), w = !x, y = Jl(b), k = A4(y), v = e.modifiersData.popperOffsets, E = e.rects.reference, M = e.rects.popper, O = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, B = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), _ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (v) {
    if (o) {
      var K, we = y === "y" ? We : qe, ye = y === "y" ? lt : ct, ue = y === "y" ? "height" : "width", fe = v[y], Me = fe + g[we], gt = fe - g[ye], bt = p ? -M[ue] / 2 : 0, Dn = x === zr ? E[ue] : M[ue], yt = x === zr ? -M[ue] : -E[ue], _n = e.elements.arrow, Vt = p && _n ? Gl(_n) : {
        width: 0,
        height: 0
      }, dt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : I0(), Ht = dt[we], fr = dt[ye], Rt = Ci(0, E[ue], Vt[ue]), pr = w ? E[ue] / 2 - bt - Rt - Ht - B.mainAxis : Dn - Rt - Ht - B.mainAxis, rn = w ? -E[ue] / 2 + bt + Rt + fr + B.mainAxis : yt + Rt + fr + B.mainAxis, hr = e.elements.arrow && io(e.elements.arrow), so = hr ? y === "y" ? hr.clientTop || 0 : hr.clientLeft || 0 : 0, ei = (K = _ == null ? void 0 : _[y]) != null ? K : 0, ao = fe + pr - ei - so, uo = fe + rn - ei, ti = Ci(p ? gs(Me, ao) : Me, fe, p ? Xn(gt, uo) : gt);
      v[y] = ti, U[y] = ti - fe;
    }
    if (a) {
      var ni, lo = y === "x" ? We : qe, co = y === "x" ? lt : ct, Dt = v[k], on = k === "y" ? "height" : "width", ri = Dt + g[lo], Pn = Dt - g[co], ii = [We, qe].indexOf(b) !== -1, fo = (ni = _ == null ? void 0 : _[k]) != null ? ni : 0, po = ii ? ri : Dt - E[on] - M[on] - fo + B.altAxis, ho = ii ? Dt + E[on] + M[on] - fo - B.altAxis : Pn, mo = p && ii ? Jx(po, Dt, ho) : Ci(p ? po : ri, Dt, p ? ho : Pn);
      v[k] = mo, U[k] = mo - Dt;
    }
    e.modifiersData[r] = U;
  }
}
const T4 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: S4,
  requiresIfExists: ["offset"]
};
function M4(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function E4(t) {
  return t === Ze(t) || !at(t) ? Zl(t) : M4(t);
}
function O4(t) {
  var e = t.getBoundingClientRect(), n = $r(e.width) / t.offsetWidth || 1, r = $r(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function N4(t, e, n) {
  n === void 0 && (n = !1);
  var r = at(e), i = at(e) && O4(e), o = Rn(e), s = jr(t, i, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ot(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Yl(o)) && (a = E4(e)), at(e) ? (u = jr(e, !0), u.x += e.clientLeft, u.y += e.clientTop) : o && (u.x = Xl(o))), {
    x: s.left + a.scrollLeft - u.x,
    y: s.top + a.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function L4(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var u = e.get(a);
        u && i(u);
      }
    }), r.push(o);
  }
  return t.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function V4(t) {
  var e = L4(t);
  return Wx.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function H4(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function R4(t) {
  var e = t.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var hf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function mf() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function D4(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, o = i === void 0 ? hf : i;
  return function(a, u, l) {
    l === void 0 && (l = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hf, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: c,
      setOptions: function(b) {
        var x = typeof b == "function" ? b(c.options) : b;
        m(), c.options = Object.assign({}, o, c.options, x), c.scrollParents = {
          reference: sr(a) ? Ai(a) : a.contextElement ? Ai(a.contextElement) : [],
          popper: Ai(u)
        };
        var w = V4(R4([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = w.filter(function(y) {
          return y.enabled;
        }), h(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var b = c.elements, x = b.reference, w = b.popper;
          if (mf(x, w)) {
            c.rects = {
              reference: N4(x, io(w), c.options.strategy === "fixed"),
              popper: Gl(w)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(B) {
              return c.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === !0) {
                c.reset = !1, y = -1;
                continue;
              }
              var k = c.orderedModifiers[y], v = k.fn, E = k.options, M = E === void 0 ? {} : E, O = k.name;
              typeof v == "function" && (c = v({
                state: c,
                options: M,
                name: O,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: H4(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!mf(a, u))
      return p;
    p.setOptions(l).then(function(g) {
      !f && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var b = g.name, x = g.options, w = x === void 0 ? {} : x, y = g.effect;
        if (typeof y == "function") {
          var k = y({
            state: c,
            name: b,
            instance: p,
            options: w
          }), v = function() {
          };
          d.push(k || v);
        }
      });
    }
    function m() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return p;
  };
}
var _4 = [o4, C4, r4, D0, x4, g4, T4, Qx, y4], P4 = /* @__PURE__ */ D4({
  defaultModifiers: _4
}), I4 = "tippy-box", j0 = "tippy-content", B4 = "tippy-backdrop", W0 = "tippy-arrow", q0 = "tippy-svg-arrow", Fn = {
  passive: !0,
  capture: !0
}, U0 = function() {
  return document.body;
};
function F4(t, e) {
  return {}.hasOwnProperty.call(t, e);
}
function Ga(t, e, n) {
  if (Array.isArray(t)) {
    var r = t[e];
    return r ?? (Array.isArray(n) ? n[e] : n);
  }
  return t;
}
function Ql(t, e) {
  var n = {}.toString.call(t);
  return n.indexOf("[object") === 0 && n.indexOf(e + "]") > -1;
}
function K0(t, e) {
  return typeof t == "function" ? t.apply(void 0, e) : t;
}
function gf(t, e) {
  if (e === 0)
    return t;
  var n;
  return function(r) {
    clearTimeout(n), n = setTimeout(function() {
      t(r);
    }, e);
  };
}
function z4(t, e) {
  var n = Object.assign({}, t);
  return e.forEach(function(r) {
    delete n[r];
  }), n;
}
function $4(t) {
  return t.split(/\s+/).filter(Boolean);
}
function Ar(t) {
  return [].concat(t);
}
function bf(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function j4(t) {
  return t.filter(function(e, n) {
    return t.indexOf(e) === n;
  });
}
function W4(t) {
  return t.split("-")[0];
}
function bs(t) {
  return [].slice.call(t);
}
function yf(t) {
  return Object.keys(t).reduce(function(e, n) {
    return t[n] !== void 0 && (e[n] = t[n]), e;
  }, {});
}
function Si() {
  return document.createElement("div");
}
function Ui(t) {
  return ["Element", "Fragment"].some(function(e) {
    return Ql(t, e);
  });
}
function q4(t) {
  return Ql(t, "NodeList");
}
function U4(t) {
  return Ql(t, "MouseEvent");
}
function K4(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
function G4(t) {
  return Ui(t) ? [t] : q4(t) ? bs(t) : Array.isArray(t) ? t : bs(document.querySelectorAll(t));
}
function Ja(t, e) {
  t.forEach(function(n) {
    n && (n.style.transitionDuration = e + "ms");
  });
}
function vf(t, e) {
  t.forEach(function(n) {
    n && n.setAttribute("data-state", e);
  });
}
function J4(t) {
  var e, n = Ar(t), r = n[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function Z4(t, e) {
  var n = e.clientX, r = e.clientY;
  return t.every(function(i) {
    var o = i.popperRect, s = i.popperState, a = i.props, u = a.interactiveBorder, l = W4(s.placement), c = s.modifiersData.offset;
    if (!c)
      return !0;
    var d = l === "bottom" ? c.top.y : 0, f = l === "top" ? c.bottom.y : 0, p = l === "right" ? c.left.x : 0, h = l === "left" ? c.right.x : 0, m = o.top - r + d > u, g = r - o.bottom - f > u, b = o.left - n + p > u, x = n - o.right - h > u;
    return m || g || b || x;
  });
}
function Za(t, e, n) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    t[r](i, n);
  });
}
function wf(t, e) {
  for (var n = e; n; ) {
    var r;
    if (t.contains(n))
      return !0;
    n = n.getRootNode == null || (r = n.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var kt = {
  isTouch: !1
}, xf = 0;
function X4() {
  kt.isTouch || (kt.isTouch = !0, window.performance && document.addEventListener("mousemove", G0));
}
function G0() {
  var t = performance.now();
  t - xf < 20 && (kt.isTouch = !1, document.removeEventListener("mousemove", G0)), xf = t;
}
function Y4() {
  var t = document.activeElement;
  if (K4(t)) {
    var e = t._tippy;
    t.blur && !e.state.isVisible && t.blur();
  }
}
function Q4() {
  document.addEventListener("touchstart", X4, Fn), window.addEventListener("blur", Y4);
}
var e5 = typeof window < "u" && typeof document < "u", t5 = e5 ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function wr(t) {
  var e = t === "destroy" ? "n already-" : " ";
  return [t + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function kf(t) {
  var e = /[ \t]{2,}/g, n = /^[ \t]*/gm;
  return t.replace(e, " ").replace(n, "").trim();
}
function n5(t) {
  return kf(`
  %ctippy.js

  %c` + kf(t) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function J0(t) {
  return [
    n5(t),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var Ki;
process.env.NODE_ENV !== "production" && r5();
function r5() {
  Ki = /* @__PURE__ */ new Set();
}
function $t(t, e) {
  if (t && !Ki.has(e)) {
    var n;
    Ki.add(e), (n = console).warn.apply(n, J0(e));
  }
}
function ju(t, e) {
  if (t && !Ki.has(e)) {
    var n;
    Ki.add(e), (n = console).error.apply(n, J0(e));
  }
}
function i5(t) {
  var e = !t, n = Object.prototype.toString.call(t) === "[object Object]" && !t.addEventListener;
  ju(e, ["tippy() was passed", "`" + String(t) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), ju(n, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var Z0 = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, o5 = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Ge = Object.assign({
  appendTo: U0,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Z0, o5), s5 = Object.keys(Ge), a5 = function(e) {
  process.env.NODE_ENV !== "production" && Y0(e, []);
  var n = Object.keys(e);
  n.forEach(function(r) {
    Ge[r] = e[r];
  });
};
function X0(t) {
  var e = t.plugins || [], n = e.reduce(function(r, i) {
    var o = i.name, s = i.defaultValue;
    if (o) {
      var a;
      r[o] = t[o] !== void 0 ? t[o] : (a = Ge[o]) != null ? a : s;
    }
    return r;
  }, {});
  return Object.assign({}, t, n);
}
function u5(t, e) {
  var n = e ? Object.keys(X0(Object.assign({}, Ge, {
    plugins: e
  }))) : s5, r = n.reduce(function(i, o) {
    var s = (t.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return i;
    if (o === "content")
      i[o] = s;
    else
      try {
        i[o] = JSON.parse(s);
      } catch {
        i[o] = s;
      }
    return i;
  }, {});
  return r;
}
function Cf(t, e) {
  var n = Object.assign({}, e, {
    content: K0(e.content, [t])
  }, e.ignoreAttributes ? {} : u5(t, e.plugins));
  return n.aria = Object.assign({}, Ge.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? e.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? e.interactive ? null : "describedby" : n.aria.content
  }, n;
}
function Y0(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = []);
  var n = Object.keys(t);
  n.forEach(function(r) {
    var i = z4(Ge, Object.keys(Z0)), o = !F4(i, r);
    o && (o = e.filter(function(s) {
      return s.name === r;
    }).length === 0), $t(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var l5 = function() {
  return "innerHTML";
};
function Wu(t, e) {
  t[l5()] = e;
}
function Af(t) {
  var e = Si();
  return t === !0 ? e.className = W0 : (e.className = q0, Ui(t) ? e.appendChild(t) : Wu(e, t)), e;
}
function Sf(t, e) {
  Ui(e.content) ? (Wu(t, ""), t.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Wu(t, e.content) : t.textContent = e.content);
}
function qu(t) {
  var e = t.firstElementChild, n = bs(e.children);
  return {
    box: e,
    content: n.find(function(r) {
      return r.classList.contains(j0);
    }),
    arrow: n.find(function(r) {
      return r.classList.contains(W0) || r.classList.contains(q0);
    }),
    backdrop: n.find(function(r) {
      return r.classList.contains(B4);
    })
  };
}
function Q0(t) {
  var e = Si(), n = Si();
  n.className = I4, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = Si();
  r.className = j0, r.setAttribute("data-state", "hidden"), Sf(r, t.props), e.appendChild(n), n.appendChild(r), i(t.props, t.props);
  function i(o, s) {
    var a = qu(e), u = a.box, l = a.content, c = a.arrow;
    s.theme ? u.setAttribute("data-theme", s.theme) : u.removeAttribute("data-theme"), typeof s.animation == "string" ? u.setAttribute("data-animation", s.animation) : u.removeAttribute("data-animation"), s.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? u.setAttribute("role", s.role) : u.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && Sf(l, t.props), s.arrow ? c ? o.arrow !== s.arrow && (u.removeChild(c), u.appendChild(Af(s.arrow))) : u.appendChild(Af(s.arrow)) : c && u.removeChild(c);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
Q0.$$tippy = !0;
var c5 = 1, Oo = [], Xa = [];
function d5(t, e) {
  var n = Cf(t, Object.assign({}, Ge, X0(yf(e)))), r, i, o, s = !1, a = !1, u = !1, l = !1, c, d, f, p = [], h = gf(ao, n.interactiveDebounce), m, g = c5++, b = null, x = j4(n.plugins), w = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, y = {
    // properties
    id: g,
    reference: t,
    popper: Si(),
    popperInstance: b,
    props: n,
    state: w,
    plugins: x,
    // methods
    clearDelayTimeouts: po,
    setProps: ho,
    setContent: mo,
    show: J1,
    hide: Z1,
    hideWithInteractivity: X1,
    enable: ii,
    disable: fo,
    unmount: Y1,
    destroy: Q1
  };
  if (!n.render)
    return process.env.NODE_ENV !== "production" && ju(!0, "render() function has not been supplied."), y;
  var k = n.render(y), v = k.popper, E = k.onUpdate;
  v.setAttribute("data-tippy-root", ""), v.id = "tippy-" + y.id, y.popper = v, t._tippy = y, v._tippy = y;
  var M = x.map(function(C) {
    return C.fn(y);
  }), O = t.hasAttribute("aria-expanded");
  return hr(), bt(), fe(), Me("onCreate", [y]), n.showOnCreate && ri(), v.addEventListener("mouseenter", function() {
    y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
  }), v.addEventListener("mouseleave", function() {
    y.props.interactive && y.props.trigger.indexOf("mouseenter") >= 0 && we().addEventListener("mousemove", h);
  }), y;
  function B() {
    var C = y.props.touch;
    return Array.isArray(C) ? C : [C, 0];
  }
  function _() {
    return B()[0] === "hold";
  }
  function U() {
    var C;
    return !!((C = y.props.render) != null && C.$$tippy);
  }
  function K() {
    return m || t;
  }
  function we() {
    var C = K().parentNode;
    return C ? J4(C) : document;
  }
  function ye() {
    return qu(v);
  }
  function ue(C) {
    return y.state.isMounted && !y.state.isVisible || kt.isTouch || c && c.type === "focus" ? 0 : Ga(y.props.delay, C ? 0 : 1, Ge.delay);
  }
  function fe(C) {
    C === void 0 && (C = !1), v.style.pointerEvents = y.props.interactive && !C ? "" : "none", v.style.zIndex = "" + y.props.zIndex;
  }
  function Me(C, D, z) {
    if (z === void 0 && (z = !0), M.forEach(function(G) {
      G[C] && G[C].apply(G, D);
    }), z) {
      var X;
      (X = y.props)[C].apply(X, D);
    }
  }
  function gt() {
    var C = y.props.aria;
    if (C.content) {
      var D = "aria-" + C.content, z = v.id, X = Ar(y.props.triggerTarget || t);
      X.forEach(function(G) {
        var Ie = G.getAttribute(D);
        if (y.state.isVisible)
          G.setAttribute(D, Ie ? Ie + " " + z : z);
        else {
          var Xe = Ie && Ie.replace(z, "").trim();
          Xe ? G.setAttribute(D, Xe) : G.removeAttribute(D);
        }
      });
    }
  }
  function bt() {
    if (!(O || !y.props.aria.expanded)) {
      var C = Ar(y.props.triggerTarget || t);
      C.forEach(function(D) {
        y.props.interactive ? D.setAttribute("aria-expanded", y.state.isVisible && D === K() ? "true" : "false") : D.removeAttribute("aria-expanded");
      });
    }
  }
  function Dn() {
    we().removeEventListener("mousemove", h), Oo = Oo.filter(function(C) {
      return C !== h;
    });
  }
  function yt(C) {
    if (!(kt.isTouch && (u || C.type === "mousedown"))) {
      var D = C.composedPath && C.composedPath()[0] || C.target;
      if (!(y.props.interactive && wf(v, D))) {
        if (Ar(y.props.triggerTarget || t).some(function(z) {
          return wf(z, D);
        })) {
          if (kt.isTouch || y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Me("onClickOutside", [y, C]);
        y.props.hideOnClick === !0 && (y.clearDelayTimeouts(), y.hide(), a = !0, setTimeout(function() {
          a = !1;
        }), y.state.isMounted || Ht());
      }
    }
  }
  function _n() {
    u = !0;
  }
  function Vt() {
    u = !1;
  }
  function dt() {
    var C = we();
    C.addEventListener("mousedown", yt, !0), C.addEventListener("touchend", yt, Fn), C.addEventListener("touchstart", Vt, Fn), C.addEventListener("touchmove", _n, Fn);
  }
  function Ht() {
    var C = we();
    C.removeEventListener("mousedown", yt, !0), C.removeEventListener("touchend", yt, Fn), C.removeEventListener("touchstart", Vt, Fn), C.removeEventListener("touchmove", _n, Fn);
  }
  function fr(C, D) {
    pr(C, function() {
      !y.state.isVisible && v.parentNode && v.parentNode.contains(v) && D();
    });
  }
  function Rt(C, D) {
    pr(C, D);
  }
  function pr(C, D) {
    var z = ye().box;
    function X(G) {
      G.target === z && (Za(z, "remove", X), D());
    }
    if (C === 0)
      return D();
    Za(z, "remove", d), Za(z, "add", X), d = X;
  }
  function rn(C, D, z) {
    z === void 0 && (z = !1);
    var X = Ar(y.props.triggerTarget || t);
    X.forEach(function(G) {
      G.addEventListener(C, D, z), p.push({
        node: G,
        eventType: C,
        handler: D,
        options: z
      });
    });
  }
  function hr() {
    _() && (rn("touchstart", ei, {
      passive: !0
    }), rn("touchend", uo, {
      passive: !0
    })), $4(y.props.trigger).forEach(function(C) {
      if (C !== "manual")
        switch (rn(C, ei), C) {
          case "mouseenter":
            rn("mouseleave", uo);
            break;
          case "focus":
            rn(t5 ? "focusout" : "blur", ti);
            break;
          case "focusin":
            rn("focusout", ti);
            break;
        }
    });
  }
  function so() {
    p.forEach(function(C) {
      var D = C.node, z = C.eventType, X = C.handler, G = C.options;
      D.removeEventListener(z, X, G);
    }), p = [];
  }
  function ei(C) {
    var D, z = !1;
    if (!(!y.state.isEnabled || ni(C) || a)) {
      var X = ((D = c) == null ? void 0 : D.type) === "focus";
      c = C, m = C.currentTarget, bt(), !y.state.isVisible && U4(C) && Oo.forEach(function(G) {
        return G(C);
      }), C.type === "click" && (y.props.trigger.indexOf("mouseenter") < 0 || s) && y.props.hideOnClick !== !1 && y.state.isVisible ? z = !0 : ri(C), C.type === "click" && (s = !z), z && !X && Pn(C);
    }
  }
  function ao(C) {
    var D = C.target, z = K().contains(D) || v.contains(D);
    if (!(C.type === "mousemove" && z)) {
      var X = on().concat(v).map(function(G) {
        var Ie, Xe = G._tippy, mr = (Ie = Xe.popperInstance) == null ? void 0 : Ie.state;
        return mr ? {
          popperRect: G.getBoundingClientRect(),
          popperState: mr,
          props: n
        } : null;
      }).filter(Boolean);
      Z4(X, C) && (Dn(), Pn(C));
    }
  }
  function uo(C) {
    var D = ni(C) || y.props.trigger.indexOf("click") >= 0 && s;
    if (!D) {
      if (y.props.interactive) {
        y.hideWithInteractivity(C);
        return;
      }
      Pn(C);
    }
  }
  function ti(C) {
    y.props.trigger.indexOf("focusin") < 0 && C.target !== K() || y.props.interactive && C.relatedTarget && v.contains(C.relatedTarget) || Pn(C);
  }
  function ni(C) {
    return kt.isTouch ? _() !== C.type.indexOf("touch") >= 0 : !1;
  }
  function lo() {
    co();
    var C = y.props, D = C.popperOptions, z = C.placement, X = C.offset, G = C.getReferenceClientRect, Ie = C.moveTransition, Xe = U() ? qu(v).arrow : null, mr = G ? {
      getBoundingClientRect: G,
      contextElement: G.contextElement || K()
    } : t, gc = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(go) {
        var gr = go.state;
        if (U()) {
          var em = ye(), Aa = em.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(bo) {
            bo === "placement" ? Aa.setAttribute("data-placement", gr.placement) : gr.attributes.popper["data-popper-" + bo] ? Aa.setAttribute("data-" + bo, "") : Aa.removeAttribute("data-" + bo);
          }), gr.attributes.popper = {};
        }
      }
    }, In = [{
      name: "offset",
      options: {
        offset: X
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Ie
      }
    }, gc];
    U() && Xe && In.push({
      name: "arrow",
      options: {
        element: Xe,
        padding: 3
      }
    }), In.push.apply(In, (D == null ? void 0 : D.modifiers) || []), y.popperInstance = P4(mr, v, Object.assign({}, D, {
      placement: z,
      onFirstUpdate: f,
      modifiers: In
    }));
  }
  function co() {
    y.popperInstance && (y.popperInstance.destroy(), y.popperInstance = null);
  }
  function Dt() {
    var C = y.props.appendTo, D, z = K();
    y.props.interactive && C === U0 || C === "parent" ? D = z.parentNode : D = K0(C, [z]), D.contains(v) || D.appendChild(v), y.state.isMounted = !0, lo(), process.env.NODE_ENV !== "production" && $t(y.props.interactive && C === Ge.appendTo && z.nextElementSibling !== v, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function on() {
    return bs(v.querySelectorAll("[data-tippy-root]"));
  }
  function ri(C) {
    y.clearDelayTimeouts(), C && Me("onTrigger", [y, C]), dt();
    var D = ue(!0), z = B(), X = z[0], G = z[1];
    kt.isTouch && X === "hold" && G && (D = G), D ? r = setTimeout(function() {
      y.show();
    }, D) : y.show();
  }
  function Pn(C) {
    if (y.clearDelayTimeouts(), Me("onUntrigger", [y, C]), !y.state.isVisible) {
      Ht();
      return;
    }
    if (!(y.props.trigger.indexOf("mouseenter") >= 0 && y.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(C.type) >= 0 && s)) {
      var D = ue(!1);
      D ? i = setTimeout(function() {
        y.state.isVisible && y.hide();
      }, D) : o = requestAnimationFrame(function() {
        y.hide();
      });
    }
  }
  function ii() {
    y.state.isEnabled = !0;
  }
  function fo() {
    y.hide(), y.state.isEnabled = !1;
  }
  function po() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function ho(C) {
    if (process.env.NODE_ENV !== "production" && $t(y.state.isDestroyed, wr("setProps")), !y.state.isDestroyed) {
      Me("onBeforeUpdate", [y, C]), so();
      var D = y.props, z = Cf(t, Object.assign({}, D, yf(C), {
        ignoreAttributes: !0
      }));
      y.props = z, hr(), D.interactiveDebounce !== z.interactiveDebounce && (Dn(), h = gf(ao, z.interactiveDebounce)), D.triggerTarget && !z.triggerTarget ? Ar(D.triggerTarget).forEach(function(X) {
        X.removeAttribute("aria-expanded");
      }) : z.triggerTarget && t.removeAttribute("aria-expanded"), bt(), fe(), E && E(D, z), y.popperInstance && (lo(), on().forEach(function(X) {
        requestAnimationFrame(X._tippy.popperInstance.forceUpdate);
      })), Me("onAfterUpdate", [y, C]);
    }
  }
  function mo(C) {
    y.setProps({
      content: C
    });
  }
  function J1() {
    process.env.NODE_ENV !== "production" && $t(y.state.isDestroyed, wr("show"));
    var C = y.state.isVisible, D = y.state.isDestroyed, z = !y.state.isEnabled, X = kt.isTouch && !y.props.touch, G = Ga(y.props.duration, 0, Ge.duration);
    if (!(C || D || z || X) && !K().hasAttribute("disabled") && (Me("onShow", [y], !1), y.props.onShow(y) !== !1)) {
      if (y.state.isVisible = !0, U() && (v.style.visibility = "visible"), fe(), dt(), y.state.isMounted || (v.style.transition = "none"), U()) {
        var Ie = ye(), Xe = Ie.box, mr = Ie.content;
        Ja([Xe, mr], 0);
      }
      f = function() {
        var In;
        if (!(!y.state.isVisible || l)) {
          if (l = !0, v.offsetHeight, v.style.transition = y.props.moveTransition, U() && y.props.animation) {
            var Ca = ye(), go = Ca.box, gr = Ca.content;
            Ja([go, gr], G), vf([go, gr], "visible");
          }
          gt(), bt(), bf(Xa, y), (In = y.popperInstance) == null || In.forceUpdate(), Me("onMount", [y]), y.props.animation && U() && Rt(G, function() {
            y.state.isShown = !0, Me("onShown", [y]);
          });
        }
      }, Dt();
    }
  }
  function Z1() {
    process.env.NODE_ENV !== "production" && $t(y.state.isDestroyed, wr("hide"));
    var C = !y.state.isVisible, D = y.state.isDestroyed, z = !y.state.isEnabled, X = Ga(y.props.duration, 1, Ge.duration);
    if (!(C || D || z) && (Me("onHide", [y], !1), y.props.onHide(y) !== !1)) {
      if (y.state.isVisible = !1, y.state.isShown = !1, l = !1, s = !1, U() && (v.style.visibility = "hidden"), Dn(), Ht(), fe(!0), U()) {
        var G = ye(), Ie = G.box, Xe = G.content;
        y.props.animation && (Ja([Ie, Xe], X), vf([Ie, Xe], "hidden"));
      }
      gt(), bt(), y.props.animation ? U() && fr(X, y.unmount) : y.unmount();
    }
  }
  function X1(C) {
    process.env.NODE_ENV !== "production" && $t(y.state.isDestroyed, wr("hideWithInteractivity")), we().addEventListener("mousemove", h), bf(Oo, h), h(C);
  }
  function Y1() {
    process.env.NODE_ENV !== "production" && $t(y.state.isDestroyed, wr("unmount")), y.state.isVisible && y.hide(), y.state.isMounted && (co(), on().forEach(function(C) {
      C._tippy.unmount();
    }), v.parentNode && v.parentNode.removeChild(v), Xa = Xa.filter(function(C) {
      return C !== y;
    }), y.state.isMounted = !1, Me("onHidden", [y]));
  }
  function Q1() {
    process.env.NODE_ENV !== "production" && $t(y.state.isDestroyed, wr("destroy")), !y.state.isDestroyed && (y.clearDelayTimeouts(), y.unmount(), so(), delete t._tippy, y.state.isDestroyed = !0, Me("onDestroy", [y]));
  }
}
function Yr(t, e) {
  e === void 0 && (e = {});
  var n = Ge.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (i5(t), Y0(e, n)), Q4();
  var r = Object.assign({}, e, {
    plugins: n
  }), i = G4(t);
  if (process.env.NODE_ENV !== "production") {
    var o = Ui(r.content), s = i.length > 1;
    $t(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var a = i.reduce(function(u, l) {
    var c = l && d5(l, r);
    return c && u.push(c), u;
  }, []);
  return Ui(t) ? a[0] : a;
}
Yr.defaultProps = Ge;
Yr.setDefaultProps = a5;
Yr.currentInput = kt;
Object.assign({}, D0, {
  effect: function(e) {
    var n = e.state, r = {
      popper: {
        position: n.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow);
  }
});
Yr.setDefaultProps({
  render: Q0
});
class f5 {
  constructor({ editor: e, element: n, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: a, state: u, from: l, to: c }) => {
      const { doc: d, selection: f } = u, { empty: p } = f, h = !d.textBetween(l, c).length && $l(u.selection), m = this.element.contains(document.activeElement);
      return !(!(a.hasFocus() || m) || p || h || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: a }) => {
      var u;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      a != null && a.relatedTarget && (!((u = this.element.parentNode) === null || u === void 0) && u.contains(a.relatedTarget)) || (a == null ? void 0 : a.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (a) => {
      this.blurHandler({ event: a });
    }, this.handleDebouncedUpdate = (a, u) => {
      const l = !(u != null && u.selection.eq(a.state.selection)), c = !(u != null && u.doc.eq(a.state.doc));
      !l && !c || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(a, l, c, u);
      }, this.updateDelay));
    }, this.updateHandler = (a, u, l, c) => {
      var d, f, p;
      const { state: h, composing: m } = a, { selection: g } = h;
      if (m || !u && !l)
        return;
      this.createTooltip();
      const { ranges: x } = g, w = Math.min(...x.map((v) => v.$from.pos)), y = Math.max(...x.map((v) => v.$to.pos));
      if (!((d = this.shouldShow) === null || d === void 0 ? void 0 : d.call(this, {
        editor: this.editor,
        element: this.element,
        view: a,
        state: h,
        oldState: c,
        from: w,
        to: y
      }))) {
        this.hide();
        return;
      }
      (f = this.tippy) === null || f === void 0 || f.setProps({
        getReferenceClientRect: ((p = this.tippyOptions) === null || p === void 0 ? void 0 : p.getReferenceClientRect) || (() => {
          if (N0(h.selection)) {
            let v = a.nodeDOM(w);
            if (v) {
              const E = v.dataset.nodeViewWrapper ? v : v.querySelector("[data-node-view-wrapper]");
              if (E && (v = E.firstChild), v)
                return v.getBoundingClientRect();
            }
          }
          return L0(a, w, y);
        })
      }), this.show();
    }, this.editor = e, this.element = n, this.view = r, this.updateDelay = o, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, n = !!e.parentElement;
    this.tippy || !n || (this.tippy = Yr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, n) {
    const { state: r } = e, i = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, n);
      return;
    }
    const o = !(n != null && n.selection.eq(e.state.selection)), s = !(n != null && n.doc.eq(e.state.doc));
    this.updateHandler(e, o, s, n);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, n;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (n = this.tippy) === null || n === void 0 || n.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const p5 = (t) => new se({
  key: typeof t.pluginKey == "string" ? new be(t.pluginKey) : t.pluginKey,
  view: (e) => new f5({ view: e, ...t })
});
class h5 {
  getTextContent(e) {
    return E0(e, { textSerializers: zl(this.editor.schema) });
  }
  constructor({ editor: e, element: n, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: a }) => {
      const { selection: u } = a, { $anchor: l, empty: c } = u, d = l.depth === 1, f = l.parent.isTextblock && !l.parent.type.spec.code && !l.parent.textContent && l.parent.childCount === 0 && !this.getTextContent(l.parent);
      return !(!s.hasFocus() || !c || !d || !f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(s.relatedTarget)) || (s == null ? void 0 : s.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.editor = e, this.element = n, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, n = !!e.parentElement;
    this.tippy || !n || (this.tippy = Yr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, n) {
    var r, i, o;
    const { state: s } = e, { doc: a, selection: u } = s, { from: l, to: c } = u;
    if (n && n.doc.eq(a) && n.selection.eq(u))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: s,
      oldState: n
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => L0(e, l, c))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, n;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (n = this.tippy) === null || n === void 0 || n.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const m5 = (t) => new se({
  key: typeof t.pluginKey == "string" ? new be(t.pluginKey) : t.pluginKey,
  view: (e) => new h5({ view: e, ...t })
}), g5 = Q({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(t, { slots: e }) {
    const n = J(null);
    return hl(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: s, tippyOptions: a } = t;
      i.registerPlugin(p5({
        updateDelay: r,
        editor: i,
        element: n.value,
        pluginKey: o,
        shouldShow: s,
        tippyOptions: a
      }));
    }), ml(() => {
      const { pluginKey: r, editor: i } = t;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Jr("div", { ref: n }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function Tf(t) {
  return gm((e, n) => ({
    get() {
      return e(), t;
    },
    set(r) {
      t = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
class b5 extends Nx {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = Tf(this.view.state), this.reactiveExtensionStorage = Tf(this.extensionStorage), this.on("beforeTransaction", ({ nextState: n }) => {
      this.reactiveState.value = n, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), wp(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, n) {
    const r = super.registerPlugin(e, n);
    return this.reactiveState && (this.reactiveState.value = r), r;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    const n = super.unregisterPlugin(e);
    return this.reactiveState && n && (this.reactiveState.value = n), n;
  }
}
const y5 = Q({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(t) {
    const e = J(), n = Zs();
    return ur(() => {
      const r = t.editor;
      r && r.options.element && e.value && mm(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = S(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = n.ctx._, n && (r.appContext = {
          ...n.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: n.provides
        }), r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), ml(() => {
      const r = t.editor;
      r && (r.contentComponent = null, r.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return Jr("div", {
      ref: (t) => {
        this.rootEl = t;
      }
    });
  }
});
Q({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(t, { slots: e }) {
    const n = J(null);
    return hl(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: s } = t;
      i.registerPlugin(m5({
        pluginKey: r,
        editor: i,
        element: n.value,
        tippyOptions: o,
        shouldShow: s
      }));
    }), ml(() => {
      const { pluginKey: r, editor: i } = t;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Jr("div", { ref: n }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
Q({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Jr(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
const v5 = Q({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var t, e;
    return Jr(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (t = this.$slots).default) === null || e === void 0 ? void 0 : e.call(t));
  }
});
class w5 {
  constructor(e, { props: n = {}, editor: r }) {
    this.editor = r, this.component = wp(e), this.el = document.createElement("div"), this.props = Rr(n), this.renderedComponent = this.renderComponent();
  }
  get element() {
    return this.renderedComponent.el;
  }
  get ref() {
    var e, n, r, i;
    return !((n = (e = this.renderedComponent.vNode) === null || e === void 0 ? void 0 : e.component) === null || n === void 0) && n.exposed ? this.renderedComponent.vNode.component.exposed : (i = (r = this.renderedComponent.vNode) === null || r === void 0 ? void 0 : r.component) === null || i === void 0 ? void 0 : i.proxy;
  }
  renderComponent() {
    let e = Jr(this.component, this.props);
    return this.editor.appContext && (e.appContext = this.editor.appContext), typeof document < "u" && this.el && yc(e, this.el), { vNode: e, destroy: () => {
      this.el && yc(null, this.el), this.el = null, e = null;
    }, el: this.el ? this.el.firstElementChild : null };
  }
  updateProps(e = {}) {
    Object.entries(e).forEach(([n, r]) => {
      this.props[n] = r;
    }), this.renderComponent();
  }
  destroy() {
    this.renderedComponent.destroy();
  }
}
const x5 = {
  editor: {
    type: Object,
    required: !0
  },
  node: {
    type: Object,
    required: !0
  },
  decorations: {
    type: Object,
    required: !0
  },
  selected: {
    type: Boolean,
    required: !0
  },
  extension: {
    type: Object,
    required: !0
  },
  getPos: {
    type: Function,
    required: !0
  },
  updateAttributes: {
    type: Function,
    required: !0
  },
  deleteNode: {
    type: Function,
    required: !0
  },
  view: {
    type: Object,
    required: !0
  },
  innerDecorations: {
    type: Object,
    required: !0
  },
  HTMLAttributes: {
    type: Object,
    required: !0
  }
};
class k5 extends Vx {
  mount() {
    const e = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (i = {}) => this.updateAttributes(i),
      deleteNode: () => this.deleteNode()
    }, n = this.onDragStart.bind(this);
    this.decorationClasses = J(this.getDecorationClasses());
    const r = Q({
      extends: { ...this.component },
      props: Object.keys(e),
      template: this.component.template,
      setup: (i) => {
        var o, s;
        return cu("onDragStart", n), cu("decorationClasses", this.decorationClasses), (s = (o = this.component).setup) === null || s === void 0 ? void 0 : s.call(o, i, {
          expose: () => {
          }
        });
      },
      // add support for scoped styles
      // @ts-ignore
      // eslint-disable-next-line
      __scopeId: this.component.__scopeId,
      // add support for CSS Modules
      // @ts-ignore
      // eslint-disable-next-line
      __cssModules: this.component.__cssModules,
      // add support for vue devtools
      // @ts-ignore
      // eslint-disable-next-line
      __name: this.component.__name,
      // @ts-ignore
      // eslint-disable-next-line
      __file: this.component.__file
    });
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.renderer = new w5(r, {
      editor: this.editor,
      props: e
    });
  }
  /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */
  get dom() {
    if (!this.renderer.element || !this.renderer.element.hasAttribute("data-node-view-wrapper"))
      throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */
  get contentDOM() {
    return this.node.isLeaf ? null : this.dom.querySelector("[data-node-view-content]");
  }
  /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */
  handleSelectionUpdate() {
    const { from: e, to: n } = this.editor.state.selection, r = this.getPos();
    if (typeof r == "number")
      if (e <= r && n >= r + this.node.nodeSize) {
        if (this.renderer.props.selected)
          return;
        this.selectNode();
      } else {
        if (!this.renderer.props.selected)
          return;
        this.deselectNode();
      }
  }
  /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */
  update(e, n, r) {
    const i = (o) => {
      this.decorationClasses.value = this.getDecorationClasses(), this.renderer.updateProps(o);
    };
    if (typeof this.options.update == "function") {
      const o = this.node, s = this.decorations, a = this.innerDecorations;
      return this.node = e, this.decorations = n, this.innerDecorations = r, this.options.update({
        oldNode: o,
        oldDecorations: s,
        newNode: e,
        newDecorations: n,
        oldInnerDecorations: a,
        innerDecorations: r,
        updateProps: () => i({ node: e, decorations: n, innerDecorations: r })
      });
    }
    return e.type !== this.node.type ? !1 : (e === this.node && this.decorations === n && this.innerDecorations === r || (this.node = e, this.decorations = n, this.innerDecorations = r, i({ node: e, decorations: n, innerDecorations: r })), !0);
  }
  /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */
  selectNode() {
    this.renderer.updateProps({
      selected: !0
    }), this.renderer.element && this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */
  deselectNode() {
    this.renderer.updateProps({
      selected: !1
    }), this.renderer.element && this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  getDecorationClasses() {
    return this.decorations.map((e) => e.type.attrs.class).flat().join(" ");
  }
  destroy() {
    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate);
  }
}
function C5(t, e) {
  return (n) => {
    if (!n.editor.contentComponent)
      return {};
    const r = typeof t == "function" && "__vccOpts" in t ? t.__vccOpts : t;
    return new k5(r, n, e);
  };
}
const A5 = /* @__PURE__ */ Q({
  __name: "BubbleMenu",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = tn(), r = Rr({
      maxWidth: "auto",
      zIndex: 20,
      appendTo: "parent"
    }), i = $(() => {
      var p, h;
      const u = e.editor.state.selection, l = a(), c = ((p = u.node) == null ? void 0 : p.type.name) === "image", d = ((h = u.node) == null ? void 0 : h.type.name) === "video", f = u instanceof I;
      if (l) return "link";
      if (c) return "image";
      if (d) return "video";
      if (f) return "text";
    }), o = $(() => {
      var f;
      const { extensions: u = [] } = e.editor.extensionManager, l = u.find((p) => p.name === "base-kit");
      if (!l) return {};
      const { button: c } = ((f = l.options) == null ? void 0 : f.bubble) ?? {};
      return c ? c({
        editor: e.editor,
        extension: l,
        t: S(n)
      }) : {};
    }), s = $(() => {
      var u;
      return i.value ? ((u = S(o)) == null ? void 0 : u[i.value]) ?? [] : [];
    });
    function a() {
      const { schema: u } = e.editor, l = u.marks.link;
      return l ? e.editor.isActive(l.name) : !1;
    }
    return (u, l) => {
      const c = Xi, d = Ur, f = Yi, p = Kr;
      return xp((R(), j(S(g5), {
        editor: u.editor,
        "tippy-options": r
      }, {
        default: V(() => [
          L(p, { class: "vuetify-pro-tiptap-editor__menu-bubble" }, {
            default: V(() => [
              L(f, { class: "d-flex pa-0" }, {
                default: V(() => [
                  L(d, {
                    density: "compact",
                    flat: "",
                    height: "auto",
                    class: "py-1 ps-1"
                  }, {
                    default: V(() => [
                      (R(!0), ge(De, null, ut(s.value, (h, m) => {
                        var g;
                        return R(), ge(De, { key: m }, [
                          h.type === "divider" ? (R(), j(c, {
                            key: 0,
                            vertical: "",
                            class: "mx-1 me-2"
                          })) : (R(), j(Vi(h.component), Er({
                            key: 1,
                            ref_for: !0
                          }, h.componentProps, {
                            editor: u.editor,
                            disabled: u.disabled || ((g = h.componentProps) == null ? void 0 : g.disabled)
                          }), gl({ _: 2 }, [
                            ut(h.componentSlots, (b, x, w) => ({
                              name: `${x}`,
                              fn: V((y) => [
                                (R(), j(Vi(b), Er({ ref_for: !0 }, y == null ? void 0 : y.props), null, 16))
                              ])
                            }))
                          ]), 1040, ["editor", "disabled"]))
                        ], 64);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["editor", "tippy-options"])), [
        [kp, s.value.length > 0]
      ]);
    };
  }
}), S5 = /* @__PURE__ */ Q({
  __name: "TiptapToolbar",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = tn(), r = $(() => {
      const o = [...e.editor.extensionManager.extensions].sort((a, u) => {
        const l = a.options.sort ?? -1, c = u.options.sort ?? -1;
        return l - c;
      });
      let s = [];
      for (const a of o) {
        const { button: u, divider: l = !1, spacer: c = !1 } = a.options;
        if (!u || !hy(u)) continue;
        const d = u({
          editor: e.editor,
          extension: a,
          t: S(n)
        });
        if (Array.isArray(d)) {
          const f = d.map((p, h) => ({
            button: p,
            divider: h === d.length - 1 ? l : !1,
            spacer: h === 0 ? c : !1
          }));
          s = [...s, ...f];
          continue;
        }
        s.push({ button: d, divider: l, spacer: c });
      }
      return s;
    });
    return (i, o) => {
      const s = Qi, a = Xi, u = Ur;
      return R(), j(u, Er(i.$attrs, {
        density: "compact",
        flat: "",
        height: "auto",
        class: "py-1 ps-1"
      }), {
        default: V(() => [
          (R(!0), ge(De, null, ut(r.value, (l, c) => {
            var d;
            return R(), ge(De, { key: c }, [
              l.spacer ? (R(), j(s, { key: 0 })) : rt("", !0),
              (R(), j(Vi(l.button.component), Er({ ref_for: !0 }, l.button.componentProps, {
                editor: i.editor,
                disabled: i.disabled || ((d = l.button.componentProps) == null ? void 0 : d.disabled)
              }), gl({ _: 2 }, [
                ut(l.button.componentSlots, (f, p, h) => ({
                  name: `${p}`,
                  fn: V((m) => [
                    (R(), j(Vi(f), Er({ ref_for: !0 }, m == null ? void 0 : m.props), null, 16))
                  ])
                }))
              ]), 1040, ["editor", "disabled"])),
              l.divider ? (R(), j(a, {
                key: 1,
                vertical: "",
                class: "mx-1 me-2"
              })) : rt("", !0)
            ], 64);
          }), 128))
        ]),
        _: 1
      }, 16);
    };
  }
}), T5 = { class: "text-overline me-4" }, M5 = { class: "text-overline" }, UT = /* @__PURE__ */ Q({
  __name: "VuetifyTiptap",
  props: {
    modelValue: { default: "" },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    output: { default: "html" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !0 },
    flat: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    label: { default: void 0 },
    hideToolbar: { type: Boolean, default: !1 },
    disableToolbar: { type: Boolean, default: !1 },
    hideBubble: { type: Boolean, default: !1 },
    removeDefaultWrapper: { type: Boolean, default: !1 },
    maxWidth: { default: void 0 },
    minHeight: { default: void 0 },
    maxHeight: { default: void 0 },
    extensions: { default: () => [] },
    editorClass: { default: void 0 },
    errorMessages: { default: () => [] }
  },
  emits: ["enter", "change", "update:modelValue", "update:markdownTheme"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = n, o = bm(), s = bl(), { state: a, isFullscreen: u } = My(), { markdownThemeStyle: l } = Up(
      $(() => r.markdownTheme),
      (w) => {
        i("update:markdownTheme", w);
      }
    ), c = $(() => {
      const w = cy(r.extensions, a.extensions, "name");
      return [...a.extensions.map((k, v) => {
        const E = r.extensions.find((M) => M.name === k.name);
        return E ? k.configure(E.options) : k;
      }), ...w].map((k, v) => k.configure({ sort: v }));
    }), d = new b5({
      content: r.modelValue,
      editorProps: {
        handleKeyDown: bi(function(w, y) {
          return y.key === "Enter" && o.enter && !y.shiftKey ? (i("enter"), !0) : !1;
        }, du)
      },
      onUpdate: bi(({ editor: w }) => {
        const y = g(w, r.output);
        i("update:modelValue", y), i("change", { editor: w, output: y });
      }, du),
      extensions: S(c),
      autofocus: !1,
      editable: !r.disabled,
      injectCSS: !0
    }), { t: f } = tn(), p = $(() => Dr(r.dark) ? r.dark : Dr(s.current.value.dark) ? s.current.value.dark : !1), h = $(() => [{
      __dark: S(p),
      ...S(l)
    }, r.editorClass]), m = $(() => {
      const w = vi(r.maxWidth), y = {
        maxWidth: w,
        width: w ? "100%" : void 0,
        margin: w ? "0 auto" : void 0,
        backgroundColor: S(p) ? "#1E1E1E" : "#FFFFFF"
      };
      if (S(u)) return { height: "100%", overflowY: "auto", ...y };
      const k = vi(r.minHeight), v = vi(r.maxHeight);
      return {
        minHeight: k,
        maxHeight: v,
        overflowY: "auto",
        ...y
      };
    });
    function g(w, y) {
      return r.removeDefaultWrapper ? y === "html" ? w.isEmpty ? "" : w.getHTML() : y === "json" ? w.isEmpty ? {} : w.getJSON() : y === "text" ? w.isEmpty ? "" : w.getText() : "" : y === "html" ? w.getHTML() : y === "json" ? w.getJSON() : y === "text" ? w.getText() : "";
    }
    const b = bi((w) => {
      if (!d) return;
      const y = g(d, r.output);
      if (dy(y, w)) return;
      const { from: k, to: v } = d.state.selection;
      d.commands.setContent(w, !1), d.commands.setTextSelection({ from: k, to: v });
    }, xm), x = (w) => d == null ? void 0 : d.setEditable(!w);
    return Gt(() => r.modelValue, b), Gt(() => r.disabled, x), ym(() => d == null ? void 0 : d.destroy()), e({ editor: d }), (w, y) => {
      const k = rm, v = Xi, E = Qi, M = Ur, O = Kr, B = im, _ = gp;
      return S(d) ? (R(), ge("div", {
        key: 0,
        class: At(["vuetify-pro-tiptap", { dense: w.dense }])
      }, [
        L(_, {
          theme: p.value ? "dark" : "light"
        }, {
          default: V(() => [
            w.hideBubble ? rt("", !0) : (R(), j(A5, {
              key: 0,
              editor: S(d),
              disabled: w.disableToolbar
            }, null, 8, ["editor", "disabled"])),
            L(B, {
              class: "pt-0",
              "hide-details": "auto",
              "error-messages": w.errorMessages
            }, {
              default: V(() => [
                L(O, Er({
                  flat: w.flat,
                  outlined: w.outlined,
                  color: p.value ? "grey-darken-4" : "grey-lighten-4"
                }, w.$attrs, {
                  style: {
                    borderColor: w.$attrs["error-messages"] ? "#ff5252" : void 0,
                    width: "100%"
                  },
                  class: ["vuetify-pro-tiptap-editor", { "vuetify-pro-tiptap-editor--fullscreen": S(u) }]
                }), {
                  default: V(() => [
                    w.label && !S(u) ? (R(), ge(De, { key: 0 }, [
                      L(k, {
                        class: At(p.value ? "bg-grey-darken-3" : "bg-grey-lighten-3")
                      }, {
                        default: V(() => [
                          Jt(Le(w.label), 1)
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      L(v)
                    ], 64)) : rt("", !0),
                    w.hideToolbar ? rt("", !0) : (R(), j(S5, {
                      key: 1,
                      class: "vuetify-pro-tiptap-editor__toolbar",
                      editor: S(d),
                      disabled: w.disableToolbar
                    }, null, 8, ["editor", "disabled"])),
                    Tt(w.$slots, "editor", vc(wc({ editor: S(d), props: { class: "vuetify-pro-tiptap-editor__content", "data-testid": "value" } })), () => [
                      L(S(y5), {
                        class: At(["vuetify-pro-tiptap-editor__content", h.value]),
                        style: mi(m.value),
                        editor: S(d),
                        "data-testid": "value"
                      }, null, 8, ["class", "style", "editor"])
                    ]),
                    Tt(w.$slots, "bottom", vc(wc({ editor: S(d) })), () => [
                      L(M, {
                        class: "px-4",
                        density: "compact",
                        flat: ""
                      }, {
                        default: V(() => [
                          L(E),
                          S(my)(S(d), "characterCount") ? (R(), ge(De, { key: 0 }, [
                            Zt("span", T5, Le(S(d).storage.characterCount.words()) + " " + Le(S(f)("editor.words")), 1),
                            Zt("span", M5, Le(S(d).storage.characterCount.characters()) + " " + Le(S(f)("editor.characters")), 1)
                          ], 64)) : rt("", !0)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }, 16, ["flat", "outlined", "color", "style", "class"])
              ]),
              _: 3
            }, 8, ["error-messages"])
          ]),
          _: 3
        }, 8, ["theme"])
      ], 2)) : rt("", !0);
    };
  }
}), E5 = {
  a: ["href", "title", "target"],
  span: ["style"],
  blockquote: ["class", "style"],
  p: ["class", "style"],
  hr: [],
  pre: [],
  code: [],
  strong: [],
  img: ["src", "alt", "title", "width", "height", "style", "data-display"],
  label: ["contenteditable"],
  input: ["type", "value", "checked"],
  div: ["class", "style"],
  iframe: ["src", "allowfullscreen", "frameborder", "width", "height"],
  em: [],
  s: [],
  mark: [],
  h1: ["class", "style"],
  h2: ["class", "style"],
  h3: ["class", "style"],
  h4: ["class", "style"],
  h5: ["class", "style"],
  h6: ["class", "style"],
  ul: ["class", "data-type"],
  li: ["class", "data-checked", "itemtypename"],
  ol: [],
  u: [],
  table: ["class", "style"],
  colgroup: [],
  col: ["style"],
  tbody: ["class", "style"],
  tr: ["class", "style"],
  th: ["class", "style", "colspan", "rowspan"],
  td: ["class", "style", "colspan", "rowspan"],
  br: []
}, O5 = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((t) => t.charCodeAt(0))
), N5 = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((t) => t.charCodeAt(0))
);
var Ya;
const L5 = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), V5 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
  (Ya = String.fromCodePoint) !== null && Ya !== void 0 ? Ya : function(t) {
    let e = "";
    return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e;
  }
);
function H5(t) {
  var e;
  return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = L5.get(t)) !== null && e !== void 0 ? e : t;
}
var Ce;
(function(t) {
  t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z";
})(Ce || (Ce = {}));
const R5 = 32;
var wn;
(function(t) {
  t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE";
})(wn || (wn = {}));
function Uu(t) {
  return t >= Ce.ZERO && t <= Ce.NINE;
}
function D5(t) {
  return t >= Ce.UPPER_A && t <= Ce.UPPER_F || t >= Ce.LOWER_A && t <= Ce.LOWER_F;
}
function _5(t) {
  return t >= Ce.UPPER_A && t <= Ce.UPPER_Z || t >= Ce.LOWER_A && t <= Ce.LOWER_Z || Uu(t);
}
function P5(t) {
  return t === Ce.EQUALS || _5(t);
}
var xe;
(function(t) {
  t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity";
})(xe || (xe = {}));
var hn;
(function(t) {
  t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute";
})(hn || (hn = {}));
class I5 {
  constructor(e, n, r) {
    this.decodeTree = e, this.emitCodePoint = n, this.errors = r, this.state = xe.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = hn.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = xe.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, n) {
    switch (this.state) {
      case xe.EntityStart:
        return e.charCodeAt(n) === Ce.NUM ? (this.state = xe.NumericStart, this.consumed += 1, this.stateNumericStart(e, n + 1)) : (this.state = xe.NamedEntity, this.stateNamedEntity(e, n));
      case xe.NumericStart:
        return this.stateNumericStart(e, n);
      case xe.NumericDecimal:
        return this.stateNumericDecimal(e, n);
      case xe.NumericHex:
        return this.stateNumericHex(e, n);
      case xe.NamedEntity:
        return this.stateNamedEntity(e, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, n) {
    return n >= e.length ? -1 : (e.charCodeAt(n) | R5) === Ce.LOWER_X ? (this.state = xe.NumericHex, this.consumed += 1, this.stateNumericHex(e, n + 1)) : (this.state = xe.NumericDecimal, this.stateNumericDecimal(e, n));
  }
  addToNumericResult(e, n, r, i) {
    if (n !== r) {
      const o = r - n;
      this.result = this.result * Math.pow(i, o) + Number.parseInt(e.substr(n, o), i), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, n) {
    const r = n;
    for (; n < e.length; ) {
      const i = e.charCodeAt(n);
      if (Uu(i) || D5(i))
        n += 1;
      else
        return this.addToNumericResult(e, r, n, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(e, r, n, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, n) {
    const r = n;
    for (; n < e.length; ) {
      const i = e.charCodeAt(n);
      if (Uu(i))
        n += 1;
      else
        return this.addToNumericResult(e, r, n, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(e, r, n, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, n) {
    var r;
    if (this.consumed <= n)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === Ce.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === hn.Strict)
      return 0;
    return this.emitCodePoint(H5(this.result), this.consumed), this.errors && (e !== Ce.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, n) {
    const { decodeTree: r } = this;
    let i = r[this.treeIndex], o = (i & wn.VALUE_LENGTH) >> 14;
    for (; n < e.length; n++, this.excess++) {
      const s = e.charCodeAt(n);
      if (this.treeIndex = B5(r, i, this.treeIndex + Math.max(1, o), s), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === hn.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        P5(s)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = r[this.treeIndex], o = (i & wn.VALUE_LENGTH) >> 14, o !== 0) {
        if (s === Ce.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== hn.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: n, decodeTree: r } = this, i = (r[n] & wn.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, n, r) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(n === 1 ? i[e] & ~wn.VALUE_LENGTH : i[e + 1], r), n === 3 && this.emitCodePoint(i[e + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case xe.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== hn.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case xe.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case xe.NumericHex:
        return this.emitNumericEntity(0, 3);
      case xe.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case xe.EntityStart:
        return 0;
    }
  }
}
function e1(t) {
  let e = "";
  const n = new I5(t, (r) => e += V5(r));
  return function(i, o) {
    let s = 0, a = 0;
    for (; (a = i.indexOf("&", a)) >= 0; ) {
      e += i.slice(s, a), n.startEntity(o);
      const l = n.write(
        i,
        // Skip the "&"
        a + 1
      );
      if (l < 0) {
        s = a + n.end();
        break;
      }
      s = a + l, a = l === 0 ? s + 1 : s;
    }
    const u = e + i.slice(s);
    return e = "", u;
  };
}
function B5(t, e, n, r) {
  const i = (e & wn.BRANCH_LENGTH) >> 7, o = e & wn.JUMP_TABLE;
  if (i === 0)
    return o !== 0 && r === o ? n : -1;
  if (o) {
    const u = r - o;
    return u < 0 || u >= i ? -1 : t[n + u] - 1;
  }
  let s = n, a = s + i - 1;
  for (; s <= a; ) {
    const u = s + a >>> 1, l = t[u];
    if (l < r)
      s = u + 1;
    else if (l > r)
      a = u - 1;
    else
      return t[u + i];
  }
  return -1;
}
const F5 = e1(O5);
e1(N5);
function z5(t, e = hn.Legacy) {
  return F5(t, e);
}
var le;
(function(t) {
  t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator";
})(le || (le = {}));
var nt;
(function(t) {
  t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start";
})(nt || (nt = {}));
const Mf = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, $5 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, j5 = /* @__PURE__ */ new Map([
  [126, nt.Element],
  [94, nt.Start],
  [36, nt.End],
  [42, nt.Any],
  [33, nt.Not],
  [124, nt.Hyphen]
]), W5 = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function q5(t) {
  switch (t.type) {
    case le.Adjacent:
    case le.Child:
    case le.Descendant:
    case le.Parent:
    case le.Sibling:
    case le.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const U5 = /* @__PURE__ */ new Set(["contains", "icontains"]);
function K5(t, e, n) {
  const r = parseInt(e, 16) - 65536;
  return r !== r || n ? e : r < 0 ? (
    // BMP codepoint
    String.fromCharCode(r + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
  );
}
function ui(t) {
  return t.replace($5, K5);
}
function Qa(t) {
  return t === 39 || t === 34;
}
function Ef(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function G5(t) {
  const e = [], n = t1(e, `${t}`, 0);
  if (n < t.length)
    throw new Error(`Unmatched selector: ${t.slice(n)}`);
  return e;
}
function t1(t, e, n) {
  let r = [];
  function i(f) {
    const p = e.slice(n + f).match(Mf);
    if (!p)
      throw new Error(`Expected name, found ${e.slice(n)}`);
    const [h] = p;
    return n += f + h.length, ui(h);
  }
  function o(f) {
    for (n += f; n < e.length && Ef(e.charCodeAt(n)); )
      n++;
  }
  function s() {
    n += 1;
    const f = n;
    let p = 1;
    for (; p > 0 && n < e.length; n++)
      e.charCodeAt(n) === 40 && !a(n) ? p++ : e.charCodeAt(n) === 41 && !a(n) && p--;
    if (p)
      throw new Error("Parenthesis not matched");
    return ui(e.slice(f, n - 1));
  }
  function a(f) {
    let p = 0;
    for (; e.charCodeAt(--f) === 92; )
      p++;
    return (p & 1) === 1;
  }
  function u() {
    if (r.length > 0 && q5(r[r.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function l(f) {
    if (r.length > 0 && r[r.length - 1].type === le.Descendant) {
      r[r.length - 1].type = f;
      return;
    }
    u(), r.push({ type: f });
  }
  function c(f, p) {
    r.push({
      type: le.Attribute,
      name: f,
      action: p,
      value: i(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function d() {
    if (r.length && r[r.length - 1].type === le.Descendant && r.pop(), r.length === 0)
      throw new Error("Empty sub-selector");
    t.push(r);
  }
  if (o(0), e.length === n)
    return n;
  e: for (; n < e.length; ) {
    const f = e.charCodeAt(n);
    switch (f) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        (r.length === 0 || r[0].type !== le.Descendant) && (u(), r.push({ type: le.Descendant })), o(1);
        break;
      }
      case 62: {
        l(le.Child), o(1);
        break;
      }
      case 60: {
        l(le.Parent), o(1);
        break;
      }
      case 126: {
        l(le.Sibling), o(1);
        break;
      }
      case 43: {
        l(le.Adjacent), o(1);
        break;
      }
      case 46: {
        c("class", nt.Element);
        break;
      }
      case 35: {
        c("id", nt.Equals);
        break;
      }
      case 91: {
        o(1);
        let p, h = null;
        e.charCodeAt(n) === 124 ? p = i(1) : e.startsWith("*|", n) ? (h = "*", p = i(2)) : (p = i(0), e.charCodeAt(n) === 124 && e.charCodeAt(n + 1) !== 61 && (h = p, p = i(1))), o(0);
        let m = nt.Exists;
        const g = j5.get(e.charCodeAt(n));
        if (g) {
          if (m = g, e.charCodeAt(n + 1) !== 61)
            throw new Error("Expected `=`");
          o(2);
        } else e.charCodeAt(n) === 61 && (m = nt.Equals, o(1));
        let b = "", x = null;
        if (m !== "exists") {
          if (Qa(e.charCodeAt(n))) {
            const k = e.charCodeAt(n);
            let v = n + 1;
            for (; v < e.length && (e.charCodeAt(v) !== k || a(v)); )
              v += 1;
            if (e.charCodeAt(v) !== k)
              throw new Error("Attribute value didn't end");
            b = ui(e.slice(n + 1, v)), n = v + 1;
          } else {
            const k = n;
            for (; n < e.length && (!Ef(e.charCodeAt(n)) && e.charCodeAt(n) !== 93 || a(n)); )
              n += 1;
            b = ui(e.slice(k, n));
          }
          o(0);
          const y = e.charCodeAt(n) | 32;
          y === 115 ? (x = !1, o(1)) : y === 105 && (x = !0, o(1));
        }
        if (e.charCodeAt(n) !== 93)
          throw new Error("Attribute selector didn't terminate");
        n += 1;
        const w = {
          type: le.Attribute,
          name: p,
          action: m,
          value: b,
          namespace: h,
          ignoreCase: x
        };
        r.push(w);
        break;
      }
      case 58: {
        if (e.charCodeAt(n + 1) === 58) {
          r.push({
            type: le.PseudoElement,
            name: i(2).toLowerCase(),
            data: e.charCodeAt(n) === 40 ? s() : null
          });
          continue;
        }
        const p = i(1).toLowerCase();
        let h = null;
        if (e.charCodeAt(n) === 40)
          if (W5.has(p)) {
            if (Qa(e.charCodeAt(n + 1)))
              throw new Error(`Pseudo-selector ${p} cannot be quoted`);
            if (h = [], n = t1(h, e, n + 1), e.charCodeAt(n) !== 41)
              throw new Error(`Missing closing parenthesis in :${p} (${e})`);
            n += 1;
          } else {
            if (h = s(), U5.has(p)) {
              const m = h.charCodeAt(0);
              m === h.charCodeAt(h.length - 1) && Qa(m) && (h = h.slice(1, -1));
            }
            h = ui(h);
          }
        r.push({ type: le.Pseudo, name: p, data: h });
        break;
      }
      case 44: {
        d(), r = [], o(1);
        break;
      }
      default: {
        if (e.startsWith("/*", n)) {
          const m = e.indexOf("*/", n + 2);
          if (m < 0)
            throw new Error("Comment was not terminated");
          n = m + 2, r.length === 0 && o(0);
          break;
        }
        let p = null, h;
        if (f === 42)
          n += 1, h = "*";
        else if (f === 124) {
          if (h = "", e.charCodeAt(n + 1) === 124) {
            l(le.ColumnCombinator), o(2);
            break;
          }
        } else if (Mf.test(e.slice(n)))
          h = i(0);
        else
          break e;
        e.charCodeAt(n) === 124 && e.charCodeAt(n + 1) !== 124 && (p = h, e.charCodeAt(n + 1) === 42 ? (h = "*", n += 2) : h = i(1)), r.push(h === "*" ? { type: le.Universal, namespace: p } : { type: le.Tag, name: h, namespace: p });
      }
    }
  }
  return d(), n;
}
function Ku(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/\xA0/g, "&nbsp;").replace(/\xAD/g, "&shy;");
}
var Of = (t) => z5(t);
function J5(t, e, n, r) {
  if (typeof e == "function")
    return e({
      props: { ...n, children: r },
      attrs: n,
      children: r,
      h: t.h,
      context: t
    });
  {
    let i = !0, o;
    if (e ? e.toLowerCase() === "fragment" ? (o = t.document.createDocumentFragment(), i = !1) : o = t.document.createElement(e) : o = t.document.createElement("div"), n && i) {
      const s = o;
      for (let [a, u] of Object.entries(n)) {
        a = a.toString();
        const l = a.toLowerCase();
        l === "classname" ? s.className = u : l === "on" ? Object.entries(u).forEach(([c, d]) => {
          s.setAttribute(`on${c}`, String(d));
        }) : u !== !1 && u != null && (u === !0 ? s.setAttribute(a, a) : s.setAttribute(a, u.toString()));
      }
    }
    if (r)
      for (const s of r) {
        const a = Array.isArray(s) ? [...s] : [s];
        for (const u of a)
          u && u !== !1 && u != null && (typeof u != "object" ? o.appendChild(
            t.document.createTextNode(u.toString())
          ) : o.appendChild(u));
      }
    return o;
  }
}
function n1(t, e, ...n) {
  return typeof t == "object" && (t = "fragment", n = t.children, e = t.attrs), Array.isArray(e) ? (n = [e], e = {}) : e ? e.attrs && (e = { ...e.attrs, ...e }, delete e.attrs) : e = {}, {
    tag: t,
    attrs: e,
    children: typeof n[0] == "string" ? n : n.flat(Number.POSITIVE_INFINITY)
  };
}
function Z5(t) {
  return t.h = function(n, r, ...i) {
    const { tag: o, attrs: s, children: a } = n1(n, r, i);
    return J5(t, o, s, a);
  }, t.h;
}
var Nf = {};
function X5(t) {
  let e = Nf[t];
  return e == null && (e = G5(t), Nf[t] = e), e;
}
function Y5(t, e, { debug: n = !1 } = {}) {
  for (const r of X5(t)) {
    const i = (o, s) => {
      var u, l, c, d;
      let a = !1;
      for (const f of s) {
        const { type: p, name: h, action: m, value: g, _ignoreCase: b = !0, data: x } = f;
        if (p === "attribute")
          m === "equals" ? a = o.getAttribute(h) === g : m === "start" ? a = !!((u = o.getAttribute(h)) != null && u.startsWith(g)) : m === "end" ? a = !!((l = o.getAttribute(h)) != null && l.endsWith(g)) : m === "element" ? h === "class" ? a = o.classList.contains(g) : a = !!((c = o.getAttribute(h)) != null && c.includes(g)) : m === "exists" ? a = o.hasAttribute(h) : m === "any" ? a = !!((d = o.getAttribute(h)) != null && d.includes(g)) : console.warn("Unknown CSS selector action", m);
        else if (p === "tag")
          a = o.tagName === h.toUpperCase();
        else if (p === "universal")
          a = !0;
        else if (p === "pseudo") {
          if (h === "not") {
            let w = !0;
            x.forEach((y) => {
              i(o, y) || (w = !1);
            }), a = !w;
          }
        } else
          console.warn("Unknown CSS selector type", p, t, s);
        if (!a)
          break;
      }
      return a;
    };
    if (i(e, r))
      return !0;
  }
  return !1;
}
var Q5 = Symbol.for("nodejs.util.inspect.custom"), Lf = { fontWeight: "bold" }, Vf = { fontStyle: "italic" }, Hf = { backgroundColor: "rgb(255, 250, 165)" }, Rf = { textDecorations: "underline" }, eu = { textDecorations: "line-through" }, ek = {
  b: Lf,
  strong: Lf,
  em: Vf,
  i: Vf,
  mark: Hf,
  u: Rf,
  a: Rf,
  s: eu,
  del: eu,
  ins: Hf,
  strike: eu
  // 'code': C,
  // 'tt': C
};
function Df(t) {
  return t.toLowerCase().replace(/[^a-z0-9]+(.)/gi, (e, n) => n.toUpperCase());
}
var nn = class Ko {
  constructor() {
    this.append = this.appendChild, this._parentNode = null, this._childNodes = [];
  }
  get nodeType() {
    return console.error("Subclasses should define nodeType!"), 0;
  }
  get nodeName() {
    return console.error("Subclasses should define nodeName!"), "";
  }
  get nodeValue() {
    return null;
  }
  cloneNode(e = !1) {
    const n = new this.constructor();
    return e && (n._childNodes = this._childNodes.map((r) => r.cloneNode(!0)), n._fixChildNodesParent()), n;
  }
  _fixChildNodesParent() {
    this._childNodes.forEach((e) => e._parentNode = this);
  }
  insertBefore(e, n) {
    if (e !== n) {
      let r = n ? this._childNodes.indexOf(n) : 0;
      r < 0 && (r = 0), this._childNodes.splice(r, 0, e), this._fixChildNodesParent();
    }
  }
  appendChild(e) {
    if (e != null) {
      if (e === this) {
        console.warn("Cannot appendChild to self");
        return;
      }
      if (e instanceof tc && console.warn("No defined how to append a document to a node!", e), e instanceof ec)
        for (const n of [...e._childNodes])
          this.appendChild(n);
      else if (Array.isArray(e))
        for (const n of [...e])
          this.appendChild(n);
      else if (e instanceof Ko)
        e.remove(), this._childNodes.push(e);
      else
        try {
          const n = typeof e == "string" ? e : JSON.stringify(e, null, 2);
          this._childNodes.push(new Mr(n));
        } catch (n) {
          console.error(`The data ${e} to be added to ${this.render()} is problematic: ${n}`);
        }
      this._fixChildNodesParent();
    }
  }
  removeChild(e) {
    const n = this._childNodes.indexOf(e);
    n >= 0 && (e._parentNode = null, this._childNodes.splice(n, 1), this._fixChildNodesParent());
  }
  /** Remove node */
  remove() {
    var e;
    return (e = this == null ? void 0 : this.parentNode) == null || e.removeChild(this), this;
  }
  /** Replace content of node with text or nodes */
  replaceChildren(...e) {
    this._childNodes = e.map(
      (n) => typeof n == "string" ? new Mr(n) : n.remove()
    ), this._fixChildNodesParent();
  }
  /** Replace node itself with nodes */
  replaceWith(...e) {
    const n = this._parentNode;
    if (n) {
      const r = this._indexInParent();
      r >= 0 && (e = e.map(
        (i) => typeof i == "string" ? new Mr(i) : i.remove()
      ), n._childNodes.splice(r, 1, ...e), this._parentNode = null, n._fixChildNodesParent());
    }
  }
  _indexInParent() {
    return this._parentNode ? this._parentNode.childNodes.indexOf(this) : -1;
  }
  get parentNode() {
    return this._parentNode;
  }
  get childNodes() {
    return this._childNodes || [];
  }
  get children() {
    return this._childNodes || [];
  }
  get firstChild() {
    return this._childNodes[0];
  }
  get lastChild() {
    return this._childNodes[this._childNodes.length - 1];
  }
  get nextSibling() {
    const e = this._indexInParent();
    return e != null && this.parentNode.childNodes[e + 1] || null;
  }
  get previousSibling() {
    const e = this._indexInParent();
    return e > 0 && this.parentNode.childNodes[e - 1] || null;
  }
  flatten() {
    const e = [];
    this instanceof ft && e.push(this);
    for (const n of this._childNodes)
      e.push(...n.flatten());
    return e;
  }
  flattenNodes() {
    const e = [];
    e.push(this);
    for (const n of this._childNodes)
      e.push(...n.flattenNodes());
    return e;
  }
  render() {
    return "";
  }
  get textContent() {
    return this._childNodes.map((e) => e.textContent).join("");
  }
  set textContent(e) {
    this._childNodes = [], e && this.appendChild(new Mr(e.toString()));
  }
  contains(e) {
    return e === this ? !0 : this._childNodes.some((n) => n.contains(e));
  }
  get ownerDocument() {
    var e;
    return this.nodeType === Ko.DOCUMENT_NODE || this.nodeType === Ko.DOCUMENT_FRAGMENT_NODE ? this : (e = this == null ? void 0 : this._parentNode) == null ? void 0 : e.ownerDocument;
  }
  toString() {
    return `${this.nodeName}`;
  }
  [Q5]() {
    return `${this.constructor.name} "${this.render()}"`;
  }
};
nn.ELEMENT_NODE = 1;
nn.TEXT_NODE = 3;
nn.CDATA_SECTION_NODE = 4;
nn.PROCESSING_INSTRUCTION_NODE = 7;
nn.COMMENT_NODE = 8;
nn.DOCUMENT_NODE = 9;
nn.DOCUMENT_TYPE_NODE = 10;
nn.DOCUMENT_FRAGMENT_NODE = 11;
var En = nn, Mr = class extends En {
  get nodeType() {
    return En.TEXT_NODE;
  }
  get nodeName() {
    return "#text";
  }
  get nodeValue() {
    return this._text || "";
  }
  get textContent() {
    return this.nodeValue;
  }
  constructor(t = "") {
    super(), this._text = t;
  }
  render() {
    var e;
    const t = (e = this.parentNode) == null ? void 0 : e.tagName;
    return t === "SCRIPT" || t === "STYLE" ? this._text : Ku(this._text);
  }
  cloneNode(t = !1) {
    const e = super.cloneNode(t);
    return e._text = this._text, e;
  }
}, r1 = class extends En {
  getElementById(t) {
    return this.flatten().find((e) => e._attributes.id === t);
  }
  getElementsByClassName(t) {
    return this.flatten().filter((e) => e.classList.contains(t));
  }
  matches(t) {
    return Y5(t, this);
  }
  querySelectorAll(t) {
    return this.flatten().filter((e) => e.matches(t));
  }
  querySelector(t) {
    return this.flatten().find((e) => e.matches(t));
  }
  //
  parent(t) {
    var e;
    return this.matches(t) ? this : this.parentNode == null ? null : (e = this.parentNode) == null ? void 0 : e.parent(t);
  }
  handle(t, e) {
    let n = 0;
    for (const r of this.querySelectorAll(t))
      e(r, n++);
  }
}, ft = class extends r1 {
  get nodeType() {
    return En.ELEMENT_NODE;
  }
  get nodeName() {
    return this._nodeName;
  }
  constructor(t = "div", e = {}) {
    super(), this._originalTagName = t, this._nodeName = (t || "").toUpperCase(), this._attributes = e || {};
  }
  cloneNode(t = !1) {
    const e = super.cloneNode(t);
    return e._originalTagName = this._originalTagName, e._nodeName = this._nodeName, e._attributes = Object.assign({}, this._attributes), e;
  }
  get attributes() {
    return Object.entries(this._attributes).map(([t, e]) => ({ name: t, value: e }));
  }
  get attributesObject() {
    return { ...this._attributes };
  }
  _findAttributeName(t) {
    const e = t.toLowerCase();
    return Object.keys(this._attributes).find(
      (n) => e === n.toLowerCase()
    ) || null;
  }
  setAttribute(t, e) {
    this.removeAttribute(t), this._attributes[t] = e, this._styles = void 0, this._dataset = void 0;
  }
  getAttribute(t) {
    const e = this._findAttributeName(t), n = e ? this._attributes[e] : null;
    return n == null ? null : typeof n == "string" ? n : "";
  }
  removeAttribute(t) {
    this._findAttributeName(String(t)) && delete this._attributes[t];
  }
  hasAttribute(t) {
    const e = this._findAttributeName(t);
    return e ? this._attributes[e] != null : !1;
  }
  /// See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
  get style() {
    if (this._styles == null) {
      const t = {};
      let e = 0;
      const n = this.getAttribute("style");
      if (n) {
        let r;
        const i = /\s*([\w-]+)\s*:\s*((url\(.*?\)[^;]*|[^;]+))/gi;
        for (; r = i.exec(n); ) {
          ++e;
          const o = r[1], s = r[2].trim();
          t[o] = s, t[Df(o)] = s;
        }
      }
      this._styles = {
        get length() {
          return e;
        },
        getPropertyValue(r) {
          return t[r];
        },
        ...ek[this.tagName.toLowerCase()],
        ...t
      };
    }
    return this._styles;
  }
  /// See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
  get dataset() {
    if (this._dataset == null) {
      const t = {};
      for (const [e, n] of Object.entries(this._attributes))
        e.startsWith("data-") && (t[e.slice(5)] = n, t[Df(e.slice(5))] = n);
      this._dataset = t;
    }
    return this._dataset;
  }
  get tagName() {
    return this._nodeName;
  }
  /** Private function to easily change the tagName */
  setTagName(t) {
    this._nodeName = t.toUpperCase();
  }
  get id() {
    return this._attributes.id || null;
  }
  set id(t) {
    t == null ? delete this._attributes.id : this._attributes.id = t;
  }
  get src() {
    return this._attributes.src;
  }
  set src(t) {
    t == null ? delete this._attributes.src : this._attributes.src = t;
  }
  //
  getElementsByTagName(t) {
    t = t.toUpperCase();
    const e = this.flatten();
    return t !== "*" ? e.filter((n) => n.tagName === t) : e;
  }
  // html
  setInnerHTML(t) {
  }
  get innerHTML() {
    return this._childNodes.map((t) => t.render(va)).join("");
  }
  set innerHTML(t) {
    this.setInnerHTML(t);
  }
  get outerHTML() {
    return this.render(ys);
  }
  // class
  get className() {
    return this._attributes.class || "";
  }
  set className(t) {
    Array.isArray(t) ? t = t.filter((e) => !!e).join(" ") : typeof t == "object" && (t = Object.entries(t).filter(([e, n]) => !!n).map(([e, n]) => e).join(" ")), this._attributes.class = t;
  }
  get classList() {
    const t = String(this.className ?? "").trim().split(/\s+/g) || [];
    return {
      contains(e) {
        return t.includes(e);
      },
      add: (e) => {
        t.includes(e) || (t.push(e), this.className = t);
      },
      remove: (e) => {
        const n = t.indexOf(e);
        n >= 0 && (t.splice(n, 1), this.className = t);
      }
    };
  }
  //
  render(t = ys) {
    return t(
      this._originalTagName || this.tagName,
      this._attributes,
      this._childNodes.map((e) => e.render(t)).join("")
      // children:string is not escaped again
    );
  }
}, i1 = class o1 extends En {
  get nodeName() {
    return super.nodeName;
  }
  get nodeValue() {
    return super.nodeValue;
  }
  get nodeType() {
    return o1.DOCUMENT_TYPE_NODE;
  }
  render() {
    return "<!DOCTYPE html>";
  }
}, ec = class s1 extends r1 {
  get nodeType() {
    return En.DOCUMENT_FRAGMENT_NODE;
  }
  get nodeName() {
    return "#document-fragment";
  }
  render(e = ys) {
    return this._childNodes.map((n) => n.render(e) || []).join("");
  }
  get innerHTML() {
    return this._childNodes.map((e) => e.render(va)).join("");
  }
  createElement(e, n = {}) {
    return new ft(e, n);
  }
  createDocumentFragment() {
    return new s1();
  }
  createTextNode(e) {
    return new Mr(e);
  }
}, tc = class extends ec {
  get nodeType() {
    return En.DOCUMENT_NODE;
  }
  get nodeName() {
    return "#document";
  }
  get documentElement() {
    return this.firstChild;
  }
  render(t = ys) {
    let e = super.render(t);
    return this.docType && (e = this.docType.render() + e), e;
  }
}, a1 = class extends tc {
  constructor(t = !1) {
    if (super(), this.docType = new i1(), !t) {
      const e = new ft("html"), n = new ft("body"), r = new ft("head"), i = new ft("title");
      e.appendChild(r), r.appendChild(i), e.appendChild(n), this.appendChild(e);
    }
  }
  get body() {
    let t = this.querySelector("body");
    if (!t) {
      let e = this.querySelector("html");
      e || (e = new ft("html"), this.appendChild(e)), t = new ft("body"), e.appendChild(e);
    }
    return t;
  }
  get title() {
    var t;
    return ((t = this.querySelector("title")) == null ? void 0 : t.textContent) || "";
  }
  set title(t) {
    const e = this.querySelector("title");
    e && (e.textContent = t);
  }
  get head() {
    let t = this.querySelector("head");
    if (!t) {
      let e = this.querySelector("html");
      e || (e = new ft("html"), this.appendChild(e)), t = new ft("head"), e.insertBefore(e);
    }
    return t;
  }
};
function tk() {
  return new tc();
}
function nk() {
  return new a1();
}
var u1 = tk();
Z5({ document: u1 });
var rk = {}, ik = rk.hasOwnProperty;
function l1(t, e) {
  return ik.call(t, e);
}
var c1 = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
  "command"
];
function d1(t, e, n = {}, r) {
  const i = !(typeof r == "string" && r === "" || Array.isArray(r) && (r.length === 0 || r.length === 1 && r[0] === "") || r == null), o = [];
  if (e = e.replace(/__/g, ":"), e !== "noop" && e !== "") {
    e !== "cdata" ? o.push(`<${e}`) : o.push("<![CDATA[");
    for (let s in n)
      if (s && l1(n, s)) {
        const a = n[s];
        if (s === "html")
          continue;
        s.toLowerCase() === "classname" && (s = "class"), s = s.replace(/__/g, ":"), a === !0 ? o.push(` ${s}`) : s === "style" && typeof a == "object" ? o.push(
          ` ${s}="${Object.keys(a).filter((u) => a[u] != null).map((u) => {
            let l = a[u];
            return l = typeof l == "number" ? `${l}px` : l, `${u.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${l}`;
          }).join(";")}"`
        ) : a !== !1 && a != null && o.push(` ${s}="${Ku(a.toString())}"`);
      }
    if (e !== "cdata") {
      if (t && !i)
        return o.push(" />"), o.join("");
      o.push(">");
    }
    if (!t && c1.includes(e))
      return o.join("");
  }
  if (i) {
    if (typeof r == "string")
      o.push(r);
    else if (r && r.length > 0) {
      for (let s of r)
        if (s != null && s !== !1) {
          Array.isArray(s) || (s = [s]);
          for (const a of s)
            a.startsWith("<") && a.endsWith(">") || e === "script" || e === "style" ? o.push(a) : o.push(Ku(a.toString()));
        }
    }
  }
  return n.html && o.push(n.html), e !== "noop" && e !== "" && (e !== "cdata" ? o.push(`</${e}>`) : o.push("]]>")), o.join("");
}
function va(t, e, ...n) {
  const { tag: r, attrs: i, children: o } = n1(t, e, n);
  return d1(!1, r, i, o);
}
var ys = d1.bind(null, !1);
va.firstLine = "<!DOCTYPE html>";
va.html = !0;
var ok = /([^=\s]+)(\s*=\s*(("([^"]*)")|('([^']*)')|[^>\s]+))?/g, sk = /^<\/([^>\s]+)[^>]*>/m, ak = /^<([^>\s/]+)((\s+[^=>\s]+(\s*=\s*(("[^"]*")|('[^']*')|[^>\s]+))?)*)\s*(?:\/\s*)?>/m, uk = /\s*\/\s*>\s*$/m, lk = class {
  constructor(t = {}) {
    this.attrRe = ok, this.endTagRe = sk, this.startTagRe = ak, this.defaults = { ignoreWhitespaceText: !1 }, t.scanner && (this.scanner = t.scanner), this.options = Object.assign({}, this.defaults, t);
  }
  parse(t) {
    let e = !1, n, r, i;
    for (; t.length; ) {
      if (t.substring(0, 4) === "<!--")
        n = t.indexOf("-->"), n !== -1 ? (this.scanner.comment(t.substring(4, n)), t = t.substring(n + 3), e = !1) : e = !0;
      else if (t.substring(0, 2) === "</")
        r = this.endTagRe.exec(t), r ? (t = RegExp.rightContext, e = !1, this.parseEndTag(RegExp.lastMatch, r[1])) : e = !0;
      else if (t.charAt(0) === "<")
        if (r = this.startTagRe.exec(t), r) {
          t = RegExp.rightContext, e = !1;
          const o = this.parseStartTag(RegExp.lastMatch, r[1], r);
          (o === "script" || o === "style") && (n = t.search(new RegExp(`</${o}`, "i")), n !== -1 ? (this.scanner.characters(t.substring(0, n)), t = t.substring(n), e = !1) : e = !0);
        } else
          e = !0;
      if (e) {
        n = t.indexOf("<");
        let o = n;
        n === 0 && (n = t.substring(1).indexOf("<"), o = o + 1), n === -1 ? (i = t, t = "") : (i = t.substring(0, o), t = t.substring(o)), (!this.options.ignoreWhitespaceText || !/^\s*$/.test(i)) && this.scanner.characters(i);
      }
      e = !0, r = null;
    }
  }
  parseStartTag(t, e, n) {
    const r = uk.test(t);
    let i = n[2];
    r && (i = i.replace(/\s*\/\s*$/, ""));
    const o = this.parseAttributes(e, i);
    return this.scanner.startElement(e, o, r, n[0]), e.toLocaleLowerCase();
  }
  parseEndTag(t, e) {
    this.scanner.endElement(e);
  }
  parseAttributes(t, e) {
    const n = {};
    return e.replace(this.attrRe, (...r) => {
      const [i, o, s, a, u, l, c, d] = r;
      n[o] = d ?? l ?? a ?? !0;
    }), n;
  }
};
function ck(t) {
  if (typeof t != "string")
    throw console.error("parseHTML requires string, found", t), new Error("parseHTML requires string");
  const e = t.indexOf("<!") === 0 ? new a1(!0) : new ec(), n = [e];
  return new lk({
    // the for methods must be implemented yourself
    scanner: {
      startElement(i, o, s) {
        if (i.toLowerCase() === "!doctype") {
          e.docType = new i1();
          return;
        }
        for (const l in o)
          if (l1(o, l)) {
            const c = o[l];
            typeof c == "string" && (o[l] = Of(c));
          }
        const u = n[n.length - 1];
        if (u) {
          const l = u1.createElement(i, o);
          u.appendChild(l), c1.includes(i.toLowerCase()) || s || n.push(l);
        }
      },
      endElement(i) {
        n.pop();
      },
      characters(i) {
        var s;
        i = Of(i);
        const o = n[n.length - 1];
        ((s = o == null ? void 0 : o.lastChild) == null ? void 0 : s.nodeType) === En.TEXT_NODE ? o.lastChild._text += i : o && o.appendChild(new Mr(i));
      },
      comment(i) {
      }
    }
  }).parse(t), e;
}
ft.prototype.setInnerHTML = function(t) {
  const e = ck(t);
  this._childNodes = e._childNodes, this._fixChildNodesParent();
};
function dk(t, e, n) {
  return Nn.fromSchema(e).serializeFragment(t.content, {
    document: nk()
  }).render();
}
function fk(t, e) {
  const n = Jw(e), r = Ut.fromJSON(n, t);
  return dk(r, n);
}
function pk(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Gu = { exports: {} }, ae = {}, Ju = { exports: {} }, dr = {};
function f1() {
  var t = {};
  return t["align-content"] = !1, t["align-items"] = !1, t["align-self"] = !1, t["alignment-adjust"] = !1, t["alignment-baseline"] = !1, t.all = !1, t["anchor-point"] = !1, t.animation = !1, t["animation-delay"] = !1, t["animation-direction"] = !1, t["animation-duration"] = !1, t["animation-fill-mode"] = !1, t["animation-iteration-count"] = !1, t["animation-name"] = !1, t["animation-play-state"] = !1, t["animation-timing-function"] = !1, t.azimuth = !1, t["backface-visibility"] = !1, t.background = !0, t["background-attachment"] = !0, t["background-clip"] = !0, t["background-color"] = !0, t["background-image"] = !0, t["background-origin"] = !0, t["background-position"] = !0, t["background-repeat"] = !0, t["background-size"] = !0, t["baseline-shift"] = !1, t.binding = !1, t.bleed = !1, t["bookmark-label"] = !1, t["bookmark-level"] = !1, t["bookmark-state"] = !1, t.border = !0, t["border-bottom"] = !0, t["border-bottom-color"] = !0, t["border-bottom-left-radius"] = !0, t["border-bottom-right-radius"] = !0, t["border-bottom-style"] = !0, t["border-bottom-width"] = !0, t["border-collapse"] = !0, t["border-color"] = !0, t["border-image"] = !0, t["border-image-outset"] = !0, t["border-image-repeat"] = !0, t["border-image-slice"] = !0, t["border-image-source"] = !0, t["border-image-width"] = !0, t["border-left"] = !0, t["border-left-color"] = !0, t["border-left-style"] = !0, t["border-left-width"] = !0, t["border-radius"] = !0, t["border-right"] = !0, t["border-right-color"] = !0, t["border-right-style"] = !0, t["border-right-width"] = !0, t["border-spacing"] = !0, t["border-style"] = !0, t["border-top"] = !0, t["border-top-color"] = !0, t["border-top-left-radius"] = !0, t["border-top-right-radius"] = !0, t["border-top-style"] = !0, t["border-top-width"] = !0, t["border-width"] = !0, t.bottom = !1, t["box-decoration-break"] = !0, t["box-shadow"] = !0, t["box-sizing"] = !0, t["box-snap"] = !0, t["box-suppress"] = !0, t["break-after"] = !0, t["break-before"] = !0, t["break-inside"] = !0, t["caption-side"] = !1, t.chains = !1, t.clear = !0, t.clip = !1, t["clip-path"] = !1, t["clip-rule"] = !1, t.color = !0, t["color-interpolation-filters"] = !0, t["column-count"] = !1, t["column-fill"] = !1, t["column-gap"] = !1, t["column-rule"] = !1, t["column-rule-color"] = !1, t["column-rule-style"] = !1, t["column-rule-width"] = !1, t["column-span"] = !1, t["column-width"] = !1, t.columns = !1, t.contain = !1, t.content = !1, t["counter-increment"] = !1, t["counter-reset"] = !1, t["counter-set"] = !1, t.crop = !1, t.cue = !1, t["cue-after"] = !1, t["cue-before"] = !1, t.cursor = !1, t.direction = !1, t.display = !0, t["display-inside"] = !0, t["display-list"] = !0, t["display-outside"] = !0, t["dominant-baseline"] = !1, t.elevation = !1, t["empty-cells"] = !1, t.filter = !1, t.flex = !1, t["flex-basis"] = !1, t["flex-direction"] = !1, t["flex-flow"] = !1, t["flex-grow"] = !1, t["flex-shrink"] = !1, t["flex-wrap"] = !1, t.float = !1, t["float-offset"] = !1, t["flood-color"] = !1, t["flood-opacity"] = !1, t["flow-from"] = !1, t["flow-into"] = !1, t.font = !0, t["font-family"] = !0, t["font-feature-settings"] = !0, t["font-kerning"] = !0, t["font-language-override"] = !0, t["font-size"] = !0, t["font-size-adjust"] = !0, t["font-stretch"] = !0, t["font-style"] = !0, t["font-synthesis"] = !0, t["font-variant"] = !0, t["font-variant-alternates"] = !0, t["font-variant-caps"] = !0, t["font-variant-east-asian"] = !0, t["font-variant-ligatures"] = !0, t["font-variant-numeric"] = !0, t["font-variant-position"] = !0, t["font-weight"] = !0, t.grid = !1, t["grid-area"] = !1, t["grid-auto-columns"] = !1, t["grid-auto-flow"] = !1, t["grid-auto-rows"] = !1, t["grid-column"] = !1, t["grid-column-end"] = !1, t["grid-column-start"] = !1, t["grid-row"] = !1, t["grid-row-end"] = !1, t["grid-row-start"] = !1, t["grid-template"] = !1, t["grid-template-areas"] = !1, t["grid-template-columns"] = !1, t["grid-template-rows"] = !1, t["hanging-punctuation"] = !1, t.height = !0, t.hyphens = !1, t.icon = !1, t["image-orientation"] = !1, t["image-resolution"] = !1, t["ime-mode"] = !1, t["initial-letters"] = !1, t["inline-box-align"] = !1, t["justify-content"] = !1, t["justify-items"] = !1, t["justify-self"] = !1, t.left = !1, t["letter-spacing"] = !0, t["lighting-color"] = !0, t["line-box-contain"] = !1, t["line-break"] = !1, t["line-grid"] = !1, t["line-height"] = !1, t["line-snap"] = !1, t["line-stacking"] = !1, t["line-stacking-ruby"] = !1, t["line-stacking-shift"] = !1, t["line-stacking-strategy"] = !1, t["list-style"] = !0, t["list-style-image"] = !0, t["list-style-position"] = !0, t["list-style-type"] = !0, t.margin = !0, t["margin-bottom"] = !0, t["margin-left"] = !0, t["margin-right"] = !0, t["margin-top"] = !0, t["marker-offset"] = !1, t["marker-side"] = !1, t.marks = !1, t.mask = !1, t["mask-box"] = !1, t["mask-box-outset"] = !1, t["mask-box-repeat"] = !1, t["mask-box-slice"] = !1, t["mask-box-source"] = !1, t["mask-box-width"] = !1, t["mask-clip"] = !1, t["mask-image"] = !1, t["mask-origin"] = !1, t["mask-position"] = !1, t["mask-repeat"] = !1, t["mask-size"] = !1, t["mask-source-type"] = !1, t["mask-type"] = !1, t["max-height"] = !0, t["max-lines"] = !1, t["max-width"] = !0, t["min-height"] = !0, t["min-width"] = !0, t["move-to"] = !1, t["nav-down"] = !1, t["nav-index"] = !1, t["nav-left"] = !1, t["nav-right"] = !1, t["nav-up"] = !1, t["object-fit"] = !1, t["object-position"] = !1, t.opacity = !1, t.order = !1, t.orphans = !1, t.outline = !1, t["outline-color"] = !1, t["outline-offset"] = !1, t["outline-style"] = !1, t["outline-width"] = !1, t.overflow = !1, t["overflow-wrap"] = !1, t["overflow-x"] = !1, t["overflow-y"] = !1, t.padding = !0, t["padding-bottom"] = !0, t["padding-left"] = !0, t["padding-right"] = !0, t["padding-top"] = !0, t.page = !1, t["page-break-after"] = !1, t["page-break-before"] = !1, t["page-break-inside"] = !1, t["page-policy"] = !1, t.pause = !1, t["pause-after"] = !1, t["pause-before"] = !1, t.perspective = !1, t["perspective-origin"] = !1, t.pitch = !1, t["pitch-range"] = !1, t["play-during"] = !1, t.position = !1, t["presentation-level"] = !1, t.quotes = !1, t["region-fragment"] = !1, t.resize = !1, t.rest = !1, t["rest-after"] = !1, t["rest-before"] = !1, t.richness = !1, t.right = !1, t.rotation = !1, t["rotation-point"] = !1, t["ruby-align"] = !1, t["ruby-merge"] = !1, t["ruby-position"] = !1, t["shape-image-threshold"] = !1, t["shape-outside"] = !1, t["shape-margin"] = !1, t.size = !1, t.speak = !1, t["speak-as"] = !1, t["speak-header"] = !1, t["speak-numeral"] = !1, t["speak-punctuation"] = !1, t["speech-rate"] = !1, t.stress = !1, t["string-set"] = !1, t["tab-size"] = !1, t["table-layout"] = !1, t["text-align"] = !0, t["text-align-last"] = !0, t["text-combine-upright"] = !0, t["text-decoration"] = !0, t["text-decoration-color"] = !0, t["text-decoration-line"] = !0, t["text-decoration-skip"] = !0, t["text-decoration-style"] = !0, t["text-emphasis"] = !0, t["text-emphasis-color"] = !0, t["text-emphasis-position"] = !0, t["text-emphasis-style"] = !0, t["text-height"] = !0, t["text-indent"] = !0, t["text-justify"] = !0, t["text-orientation"] = !0, t["text-overflow"] = !0, t["text-shadow"] = !0, t["text-space-collapse"] = !0, t["text-transform"] = !0, t["text-underline-position"] = !0, t["text-wrap"] = !0, t.top = !1, t.transform = !1, t["transform-origin"] = !1, t["transform-style"] = !1, t.transition = !1, t["transition-delay"] = !1, t["transition-duration"] = !1, t["transition-property"] = !1, t["transition-timing-function"] = !1, t["unicode-bidi"] = !1, t["vertical-align"] = !1, t.visibility = !1, t["voice-balance"] = !1, t["voice-duration"] = !1, t["voice-family"] = !1, t["voice-pitch"] = !1, t["voice-range"] = !1, t["voice-rate"] = !1, t["voice-stress"] = !1, t["voice-volume"] = !1, t.volume = !1, t["white-space"] = !1, t.widows = !1, t.width = !0, t["will-change"] = !1, t["word-break"] = !0, t["word-spacing"] = !0, t["word-wrap"] = !0, t["wrap-flow"] = !1, t["wrap-through"] = !1, t["writing-mode"] = !1, t["z-index"] = !1, t;
}
function hk(t, e, n) {
}
function mk(t, e, n) {
}
var gk = /javascript\s*\:/img;
function bk(t, e) {
  return gk.test(e) ? "" : e;
}
dr.whiteList = f1();
dr.getDefaultWhiteList = f1;
dr.onAttr = hk;
dr.onIgnoreAttr = mk;
dr.safeAttrValue = bk;
var yk = {
  indexOf: function(t, e) {
    var n, r;
    if (Array.prototype.indexOf)
      return t.indexOf(e);
    for (n = 0, r = t.length; n < r; n++)
      if (t[n] === e)
        return n;
    return -1;
  },
  forEach: function(t, e, n) {
    var r, i;
    if (Array.prototype.forEach)
      return t.forEach(e, n);
    for (r = 0, i = t.length; r < i; r++)
      e.call(n, t[r], r, t);
  },
  trim: function(t) {
    return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function(t) {
    return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "");
  }
}, li = yk;
function vk(t, e) {
  t = li.trimRight(t), t[t.length - 1] !== ";" && (t += ";");
  var n = t.length, r = !1, i = 0, o = 0, s = "";
  function a() {
    if (!r) {
      var c = li.trim(t.slice(i, o)), d = c.indexOf(":");
      if (d !== -1) {
        var f = li.trim(c.slice(0, d)), p = li.trim(c.slice(d + 1));
        if (f) {
          var h = e(i, s.length, f, p, c);
          h && (s += h + "; ");
        }
      }
    }
    i = o + 1;
  }
  for (; o < n; o++) {
    var u = t[o];
    if (u === "/" && t[o + 1] === "*") {
      var l = t.indexOf("*/", o + 2);
      if (l === -1) break;
      o = l + 1, i = o + 1, r = !1;
    } else u === "(" ? r = !0 : u === ")" ? r = !1 : u === ";" ? r || a() : u === `
` && a();
  }
  return li.trim(s);
}
var wk = vk, No = dr, xk = wk;
function _f(t) {
  return t == null;
}
function kk(t) {
  var e = {};
  for (var n in t)
    e[n] = t[n];
  return e;
}
function p1(t) {
  t = kk(t || {}), t.whiteList = t.whiteList || No.whiteList, t.onAttr = t.onAttr || No.onAttr, t.onIgnoreAttr = t.onIgnoreAttr || No.onIgnoreAttr, t.safeAttrValue = t.safeAttrValue || No.safeAttrValue, this.options = t;
}
p1.prototype.process = function(t) {
  if (t = t || "", t = t.toString(), !t) return "";
  var e = this, n = e.options, r = n.whiteList, i = n.onAttr, o = n.onIgnoreAttr, s = n.safeAttrValue, a = xk(t, function(u, l, c, d, f) {
    var p = r[c], h = !1;
    if (p === !0 ? h = p : typeof p == "function" ? h = p(d) : p instanceof RegExp && (h = p.test(d)), h !== !0 && (h = !1), d = s(c, d), !!d) {
      var m = {
        position: l,
        sourcePosition: u,
        source: f,
        isWhite: h
      };
      if (h) {
        var g = i(c, d, m);
        return _f(g) ? c + ":" + d : g;
      } else {
        var g = o(c, d, m);
        if (!_f(g))
          return g;
      }
    }
  });
  return a;
};
var Ck = p1;
(function(t, e) {
  var n = dr, r = Ck;
  function i(s, a) {
    var u = new r(a);
    return u.process(s);
  }
  e = t.exports = i, e.FilterCSS = r;
  for (var o in n) e[o] = n[o];
  typeof window < "u" && (window.filterCSS = t.exports);
})(Ju, Ju.exports);
var nc = Ju.exports, rc = {
  indexOf: function(t, e) {
    var n, r;
    if (Array.prototype.indexOf)
      return t.indexOf(e);
    for (n = 0, r = t.length; n < r; n++)
      if (t[n] === e)
        return n;
    return -1;
  },
  forEach: function(t, e, n) {
    var r, i;
    if (Array.prototype.forEach)
      return t.forEach(e, n);
    for (r = 0, i = t.length; r < i; r++)
      e.call(n, t[r], r, t);
  },
  trim: function(t) {
    return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(t) {
    var e = /\s|\n|\t/, n = e.exec(t);
    return n ? n.index : -1;
  }
}, Ak = nc.FilterCSS, Sk = nc.getDefaultWhiteList, vs = rc;
function h1() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src"
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height", "loading"],
    ins: ["datetime"],
    kbd: [],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width"
    ]
  };
}
var m1 = new Ak();
function Tk(t, e, n) {
}
function Mk(t, e, n) {
}
function Ek(t, e, n) {
}
function Ok(t, e, n) {
}
function g1(t) {
  return t.replace(Lk, "&lt;").replace(Vk, "&gt;");
}
function Nk(t, e, n, r) {
  if (n = k1(n), e === "href" || e === "src") {
    if (n = vs.trim(n), n === "#") return "#";
    if (!(n.substr(0, 7) === "http://" || n.substr(0, 8) === "https://" || n.substr(0, 7) === "mailto:" || n.substr(0, 4) === "tel:" || n.substr(0, 11) === "data:image/" || n.substr(0, 6) === "ftp://" || n.substr(0, 2) === "./" || n.substr(0, 3) === "../" || n[0] === "#" || n[0] === "/"))
      return "";
  } else if (e === "background") {
    if (Lo.lastIndex = 0, Lo.test(n))
      return "";
  } else if (e === "style") {
    if (Pf.lastIndex = 0, Pf.test(n) || (If.lastIndex = 0, If.test(n) && (Lo.lastIndex = 0, Lo.test(n))))
      return "";
    r !== !1 && (r = r || m1, n = r.process(n));
  }
  return n = C1(n), n;
}
var Lk = /</g, Vk = />/g, Hk = /"/g, Rk = /&quot;/g, Dk = /&#([a-zA-Z0-9]*);?/gim, _k = /&colon;?/gim, Pk = /&newline;?/gim, Lo = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, Pf = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, If = /u\s*r\s*l\s*\(.*/gi;
function b1(t) {
  return t.replace(Hk, "&quot;");
}
function y1(t) {
  return t.replace(Rk, '"');
}
function v1(t) {
  return t.replace(Dk, function(n, r) {
    return r[0] === "x" || r[0] === "X" ? String.fromCharCode(parseInt(r.substr(1), 16)) : String.fromCharCode(parseInt(r, 10));
  });
}
function w1(t) {
  return t.replace(_k, ":").replace(Pk, " ");
}
function x1(t) {
  for (var e = "", n = 0, r = t.length; n < r; n++)
    e += t.charCodeAt(n) < 32 ? " " : t.charAt(n);
  return vs.trim(e);
}
function k1(t) {
  return t = y1(t), t = v1(t), t = w1(t), t = x1(t), t;
}
function C1(t) {
  return t = b1(t), t = g1(t), t;
}
function Ik() {
  return "";
}
function Bk(t, e) {
  typeof e != "function" && (e = function() {
  });
  var n = !Array.isArray(t);
  function r(s) {
    return n ? !0 : vs.indexOf(t, s) !== -1;
  }
  var i = [], o = !1;
  return {
    onIgnoreTag: function(s, a, u) {
      if (r(s))
        if (u.isClosing) {
          var l = "[/removed]", c = u.position + l.length;
          return i.push([
            o !== !1 ? o : u.position,
            c
          ]), o = !1, l;
        } else
          return o || (o = u.position), "[removed]";
      else
        return e(s, a, u);
    },
    remove: function(s) {
      var a = "", u = 0;
      return vs.forEach(i, function(l) {
        a += s.slice(u, l[0]), u = l[1];
      }), a += s.slice(u), a;
    }
  };
}
function Fk(t) {
  for (var e = "", n = 0; n < t.length; ) {
    var r = t.indexOf("<!--", n);
    if (r === -1) {
      e += t.slice(n);
      break;
    }
    e += t.slice(n, r);
    var i = t.indexOf("-->", r);
    if (i === -1)
      break;
    n = i + 3;
  }
  return e;
}
function zk(t) {
  var e = t.split("");
  return e = e.filter(function(n) {
    var r = n.charCodeAt(0);
    return r === 127 ? !1 : r <= 31 ? r === 10 || r === 13 : !0;
  }), e.join("");
}
ae.whiteList = h1();
ae.getDefaultWhiteList = h1;
ae.onTag = Tk;
ae.onIgnoreTag = Mk;
ae.onTagAttr = Ek;
ae.onIgnoreTagAttr = Ok;
ae.safeAttrValue = Nk;
ae.escapeHtml = g1;
ae.escapeQuote = b1;
ae.unescapeQuote = y1;
ae.escapeHtmlEntities = v1;
ae.escapeDangerHtml5Entities = w1;
ae.clearNonPrintableCharacter = x1;
ae.friendlyAttrValue = k1;
ae.escapeAttrValue = C1;
ae.onIgnoreTagStripAll = Ik;
ae.StripTagBody = Bk;
ae.stripCommentTag = Fk;
ae.stripBlankChar = zk;
ae.attributeWrapSign = '"';
ae.cssFilter = m1;
ae.getDefaultCSSWhiteList = Sk;
var wa = {}, cn = rc;
function $k(t) {
  var e = cn.spaceIndex(t), n;
  return e === -1 ? n = t.slice(1, -1) : n = t.slice(1, e + 1), n = cn.trim(n).toLowerCase(), n.slice(0, 1) === "/" && (n = n.slice(1)), n.slice(-1) === "/" && (n = n.slice(0, -1)), n;
}
function jk(t) {
  return t.slice(0, 2) === "</";
}
function Wk(t, e, n) {
  var r = "", i = 0, o = !1, s = !1, a = 0, u = t.length, l = "", c = "";
  e: for (a = 0; a < u; a++) {
    var d = t.charAt(a);
    if (o === !1) {
      if (d === "<") {
        o = a;
        continue;
      }
    } else if (s === !1) {
      if (d === "<") {
        r += n(t.slice(i, a)), o = a, i = a;
        continue;
      }
      if (d === ">" || a === u - 1) {
        r += n(t.slice(i, o)), c = t.slice(o, a + 1), l = $k(c), r += e(
          o,
          r.length,
          l,
          c,
          jk(c)
        ), i = a + 1, o = !1;
        continue;
      }
      if (d === '"' || d === "'")
        for (var f = 1, p = t.charAt(a - f); p.trim() === "" || p === "="; ) {
          if (p === "=") {
            s = d;
            continue e;
          }
          p = t.charAt(a - ++f);
        }
    } else if (d === s) {
      s = !1;
      continue;
    }
  }
  return i < u && (r += n(t.substr(i))), r;
}
var qk = /[^a-zA-Z0-9\\_:.-]/gim;
function Uk(t, e) {
  var n = 0, r = 0, i = [], o = !1, s = t.length;
  function a(f, p) {
    if (f = cn.trim(f), f = f.replace(qk, "").toLowerCase(), !(f.length < 1)) {
      var h = e(f, p || "");
      h && i.push(h);
    }
  }
  for (var u = 0; u < s; u++) {
    var l = t.charAt(u), c, d;
    if (o === !1 && l === "=") {
      o = t.slice(n, u), n = u + 1, r = t.charAt(n) === '"' || t.charAt(n) === "'" ? n : Gk(t, u + 1);
      continue;
    }
    if (o !== !1 && u === r) {
      if (d = t.indexOf(l, u + 1), d === -1)
        break;
      c = cn.trim(t.slice(r + 1, d)), a(o, c), o = !1, u = d, n = u + 1;
      continue;
    }
    if (/\s|\n|\t/.test(l))
      if (t = t.replace(/\s|\n|\t/g, " "), o === !1)
        if (d = Kk(t, u), d === -1) {
          c = cn.trim(t.slice(n, u)), a(c), o = !1, n = u + 1;
          continue;
        } else {
          u = d - 1;
          continue;
        }
      else if (d = Jk(t, u - 1), d === -1) {
        c = cn.trim(t.slice(n, u)), c = Bf(c), a(o, c), o = !1, n = u + 1;
        continue;
      } else
        continue;
  }
  return n < t.length && (o === !1 ? a(t.slice(n)) : a(o, Bf(cn.trim(t.slice(n))))), cn.trim(i.join(" "));
}
function Kk(t, e) {
  for (; e < t.length; e++) {
    var n = t[e];
    if (n !== " ")
      return n === "=" ? e : -1;
  }
}
function Gk(t, e) {
  for (; e < t.length; e++) {
    var n = t[e];
    if (n !== " ")
      return n === "'" || n === '"' ? e : -1;
  }
}
function Jk(t, e) {
  for (; e > 0; e--) {
    var n = t[e];
    if (n !== " ")
      return n === "=" ? e : -1;
  }
}
function Zk(t) {
  return t[0] === '"' && t[t.length - 1] === '"' || t[0] === "'" && t[t.length - 1] === "'";
}
function Bf(t) {
  return Zk(t) ? t.substr(1, t.length - 2) : t;
}
wa.parseTag = Wk;
wa.parseAttr = Uk;
var Xk = nc.FilterCSS, et = ae, A1 = wa, Yk = A1.parseTag, Qk = A1.parseAttr, Go = rc;
function Vo(t) {
  return t == null;
}
function eC(t) {
  var e = Go.spaceIndex(t);
  if (e === -1)
    return {
      html: "",
      closing: t[t.length - 2] === "/"
    };
  t = Go.trim(t.slice(e + 1, -1));
  var n = t[t.length - 1] === "/";
  return n && (t = Go.trim(t.slice(0, -1))), {
    html: t,
    closing: n
  };
}
function tC(t) {
  var e = {};
  for (var n in t)
    e[n] = t[n];
  return e;
}
function nC(t) {
  var e = {};
  for (var n in t)
    Array.isArray(t[n]) ? e[n.toLowerCase()] = t[n].map(function(r) {
      return r.toLowerCase();
    }) : e[n.toLowerCase()] = t[n];
  return e;
}
function S1(t) {
  t = tC(t || {}), t.stripIgnoreTag && (t.onIgnoreTag && console.error(
    'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
  ), t.onIgnoreTag = et.onIgnoreTagStripAll), t.whiteList || t.allowList ? t.whiteList = nC(t.whiteList || t.allowList) : t.whiteList = et.whiteList, this.attributeWrapSign = t.singleQuotedAttributeValue === !0 ? "'" : et.attributeWrapSign, t.onTag = t.onTag || et.onTag, t.onTagAttr = t.onTagAttr || et.onTagAttr, t.onIgnoreTag = t.onIgnoreTag || et.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || et.onIgnoreTagAttr, t.safeAttrValue = t.safeAttrValue || et.safeAttrValue, t.escapeHtml = t.escapeHtml || et.escapeHtml, this.options = t, t.css === !1 ? this.cssFilter = !1 : (t.css = t.css || {}, this.cssFilter = new Xk(t.css));
}
S1.prototype.process = function(t) {
  if (t = t || "", t = t.toString(), !t) return "";
  var e = this, n = e.options, r = n.whiteList, i = n.onTag, o = n.onIgnoreTag, s = n.onTagAttr, a = n.onIgnoreTagAttr, u = n.safeAttrValue, l = n.escapeHtml, c = e.attributeWrapSign, d = e.cssFilter;
  n.stripBlankChar && (t = et.stripBlankChar(t)), n.allowCommentTag || (t = et.stripCommentTag(t));
  var f = !1;
  n.stripIgnoreTagBody && (f = et.StripTagBody(
    n.stripIgnoreTagBody,
    o
  ), o = f.onIgnoreTag);
  var p = Yk(
    t,
    function(h, m, g, b, x) {
      var w = {
        sourcePosition: h,
        position: m,
        isClosing: x,
        isWhite: Object.prototype.hasOwnProperty.call(r, g)
      }, y = i(g, b, w);
      if (!Vo(y)) return y;
      if (w.isWhite) {
        if (w.isClosing)
          return "</" + g + ">";
        var k = eC(b), v = r[g], E = Qk(k.html, function(M, O) {
          var B = Go.indexOf(v, M) !== -1, _ = s(g, M, O, B);
          return Vo(_) ? B ? (O = u(g, M, O, d), O ? M + "=" + c + O + c : M) : (_ = a(g, M, O, B), Vo(_) ? void 0 : _) : _;
        });
        return b = "<" + g, E && (b += " " + E), k.closing && (b += " /"), b += ">", b;
      } else
        return y = o(g, b, w), Vo(y) ? l(b) : y;
    },
    l
  );
  return f && (p = f.remove(p)), p;
};
var rC = S1;
(function(t, e) {
  var n = ae, r = wa, i = rC;
  function o(a, u) {
    var l = new i(u);
    return l.process(a);
  }
  e = t.exports = o, e.filterXSS = o, e.FilterXSS = i, function() {
    for (var a in n)
      e[a] = n[a];
    for (var u in r)
      e[u] = r[u];
  }(), typeof window < "u" && (window.filterXSS = t.exports);
  function s() {
    return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
  }
  s() && (self.filterXSS = t.exports);
})(Gu, Gu.exports);
var iC = Gu.exports;
const oC = /* @__PURE__ */ pk(iC), sC = ["innerHTML"], KT = /* @__PURE__ */ Q({
  __name: "VuetifyViewer",
  props: {
    value: { default: "" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    xss: { type: [Boolean, Array], default: !0 },
    xssOptions: { default: () => E5 },
    extensions: { default: () => [] }
  },
  setup(t) {
    const e = t, { state: n } = Xs(), r = bl(), { markdownThemeStyle: i } = Up($(() => e.markdownTheme)), o = $(() => [...n.extensions, ...e.extensions]), s = $(() => Dr(e.dark) ? e.dark : Dr(r.current.value.dark) ? r.current.value.dark : !1), a = $(() => ({
      __dark: S(s),
      dense: e.dense,
      view: !0,
      ...S(i)
    })), u = $(() => yi(e.value) ? e.value : fk(e.value, S(o))), l = $(() => {
      if (e.xss === !1)
        return S(u);
      const c = S(u).replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/").replace("https://vimeo.com/", "https://player.vimeo.com/video/"), d = e.xssOptions;
      return oC(c, { whiteList: d, css: !1 });
    });
    return (c, d) => (R(), ge("div", {
      class: At(["vuetify-pro-tiptap-editor__content", a.value]),
      style: { width: "100%" }
    }, [
      Tt(c.$slots, "before"),
      Zt("div", {
        class: "content",
        innerHTML: l.value
      }, null, 8, sC),
      Tt(c.$slots, "after")
    ], 2));
  }
}), aC = /* @__PURE__ */ ne.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (t) => t.length,
      wordCounter: (t) => t.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc;
      if (((t == null ? void 0 : t.mode) || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let t = !1;
    return [
      new se({
        key: new be("characterCount"),
        appendTransaction: (e, n, r) => {
          if (t)
            return;
          const i = this.options.limit;
          if (i == null || i === 0) {
            t = !0;
            return;
          }
          const o = this.storage.characters({ node: r.doc });
          if (o > i) {
            const s = o - i, a = 0, u = s;
            console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);
            const l = r.tr.deleteRange(a, u);
            return t = !0, l;
          }
          t = !0;
        },
        filterTransaction: (e, n) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const i = this.storage.characters({ node: n.doc }), o = this.storage.characters({ node: e.doc });
          if (o <= r || i > r && o > r && o <= i)
            return !0;
          if (i > r && o > r && o > i || !e.getMeta("paste"))
            return !1;
          const a = e.selection.$head.pos, u = o - r, l = a - u, c = a;
          return e.deleteRange(l, c), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
}), uC = /* @__PURE__ */ de.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function lC(t = {}) {
  return new se({
    view(e) {
      return new cC(e, t);
    }
  });
}
class cC {
  constructor(e, n) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: n }) => this.editorView.dom.removeEventListener(e, n));
  }
  update(e, n) {
    this.cursorPos != null && n.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), n = !e.parent.inlineContent, r;
    if (n) {
      let a = e.nodeBefore, u = e.nodeAfter;
      if (a || u) {
        let l = this.editorView.nodeDOM(this.cursorPos - (a ? a.nodeSize : 0));
        if (l) {
          let c = l.getBoundingClientRect(), d = a ? c.bottom : c.top;
          a && u && (d = (d + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: c.left, right: c.right, top: d - this.width / 2, bottom: d + this.width / 2 };
        }
      }
    }
    if (!r) {
      let a = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: a.left - this.width / 2, right: a.left + this.width / 2, top: a.top, bottom: a.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let o, s;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, s = -pageYOffset;
    else {
      let a = i.getBoundingClientRect();
      o = a.left - i.scrollLeft, s = a.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, n, e) : i;
    if (n && !o) {
      let s = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let a = Ch(this.editorView.state.doc, s, this.editorView.dragging.slice);
        a != null && (s = a);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const dC = /* @__PURE__ */ ne.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      lC(this.options)
    ];
  }
}), fC = /* @__PURE__ */ ne.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new se({
        key: new be("focus"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: i } = e, o = [];
            if (!n || !r)
              return oe.create(t, []);
            let s = 0;
            this.options.mode === "deepest" && t.descendants((u, l) => {
              if (u.isText)
                return;
              if (!(i >= l && i <= l + u.nodeSize - 1))
                return !1;
              s += 1;
            });
            let a = 0;
            return t.descendants((u, l) => {
              if (u.isText || !(i >= l && i <= l + u.nodeSize - 1))
                return !1;
              if (a += 1, this.options.mode === "deepest" && s - a > 0 || this.options.mode === "shallowest" && a > 1)
                return this.options.mode === "deepest";
              o.push(Ve.node(l, l + u.nodeSize, {
                class: this.options.className
              }));
            }), oe.create(t, o);
          }
        }
      })
    ];
  }
});
class he extends F {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    return he.valid(r) ? new he(r) : F.near(r);
  }
  content() {
    return N.empty;
  }
  eq(e) {
    return e instanceof he && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new he(e.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new ic(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let n = e.parent;
    if (n.isTextblock || !pC(e) || !hC(e))
      return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = n.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, n, r = !1) {
    e: for (; ; ) {
      if (!r && he.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let a = e.node(s);
        if (n > 0 ? e.indexAfter(s) < a.childCount : e.index(s) > 0) {
          o = a.child(n > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += n;
        let u = e.doc.resolve(i);
        if (he.valid(u))
          return u;
      }
      for (; ; ) {
        let s = n > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !P.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * n), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += n;
        let a = e.doc.resolve(i);
        if (he.valid(a))
          return a;
      }
      return null;
    }
  }
}
he.prototype.visible = !1;
he.findFrom = he.findGapCursorFrom;
F.jsonID("gapcursor", he);
class ic {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new ic(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return he.valid(n) ? new he(n) : F.near(n);
  }
}
function pC(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.index(e), r = t.node(e);
    if (n == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function hC(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.indexAfter(e), r = t.node(e);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function mC() {
  return new se({
    props: {
      decorations: vC,
      createSelectionBetween(t, e, n) {
        return e.pos == n.pos && he.valid(n) ? new he(n) : null;
      },
      handleClick: bC,
      handleKeyDown: gC,
      handleDOMEvents: { beforeinput: yC }
    }
  });
}
const gC = _l({
  ArrowLeft: Ho("horiz", -1),
  ArrowRight: Ho("horiz", 1),
  ArrowUp: Ho("vert", -1),
  ArrowDown: Ho("vert", 1)
});
function Ho(t, e) {
  const n = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, a = e > 0 ? s.$to : s.$from, u = s.empty;
    if (s instanceof I) {
      if (!o.endOfTextblock(n) || a.depth == 0)
        return !1;
      u = !1, a = r.doc.resolve(e > 0 ? a.after() : a.before());
    }
    let l = he.findGapCursorFrom(a, e, u);
    return l ? (i && i(r.tr.setSelection(new he(l))), !0) : !1;
  };
}
function bC(t, e, n) {
  if (!t || !t.editable)
    return !1;
  let r = t.state.doc.resolve(e);
  if (!he.valid(r))
    return !1;
  let i = t.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && P.isSelectable(t.state.doc.nodeAt(i.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new he(r))), !0);
}
function yC(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof he))
    return !1;
  let { $from: n } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = A.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = A.from(r[s].createAndFill(null, i));
  let o = t.state.tr.replace(n.pos, n.pos, new N(i, 0, 0));
  return o.setSelection(I.near(o.doc.resolve(n.pos + 1))), t.dispatch(o), !1;
}
function vC(t) {
  if (!(t.selection instanceof he))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", oe.create(t.doc, [Ve.widget(t.selection.head, e, { key: "gapcursor" })]);
}
const wC = /* @__PURE__ */ ne.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      mC()
    ];
  },
  extendNodeSchema(t) {
    var e;
    const n = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = q(H(t, "allowGapCursor", n))) !== null && e !== void 0 ? e : null
    };
  }
}), xC = /* @__PURE__ */ de.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", Y(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: n, editor: r }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: i, storedMarks: o } = n;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: a } = r.extensionManager, u = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: l, dispatch: c }) => {
            if (c && u && s) {
              const d = u.filter((f) => a.includes(f.type.name));
              l.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), kC = /* @__PURE__ */ de.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", Y(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), CC = /* @__PURE__ */ de.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), AC = /* @__PURE__ */ ne.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new se({
        key: new be("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!n)
              return null;
            const o = this.editor.isEmpty;
            return t.descendants((s, a) => {
              const u = r >= a && r <= a + s.nodeSize, l = !s.isLeaf && ba(s);
              if ((u || !this.options.showOnlyCurrent) && l) {
                const c = [this.options.emptyNodeClass];
                o && c.push(this.options.emptyEditorClass);
                const d = Ve.node(a, a + s.nodeSize, {
                  class: c.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: a,
                    hasAnchor: u
                  }) : this.options.placeholder
                });
                i.push(d);
              }
              return this.options.includeChildren;
            }), oe.create(t, i);
          }
        }
      })
    ];
  }
}), SC = /* @__PURE__ */ de.create({
  name: "text",
  group: "inline"
}), TC = (t) => {
  if (!t.children.length)
    return;
  const e = t.querySelectorAll("span");
  e && e.forEach((n) => {
    var r, i;
    const o = n.getAttribute("style"), s = (i = (r = n.parentElement) === null || r === void 0 ? void 0 : r.closest("span")) === null || i === void 0 ? void 0 : i.getAttribute("style");
    n.setAttribute("style", `${s};${o}`);
  });
}, MC = /* @__PURE__ */ Ue.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !1
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (t) => t.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && TC(t), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ tr: t }) => {
        const { selection: e } = t;
        return t.doc.nodesBetween(e.from, e.to, (n, r) => {
          if (n.isTextblock)
            return !0;
          n.marks.filter((i) => i.type === this.type).some((i) => Object.values(i.attrs).some((o) => !!o)) || t.removeMark(r, r + n.nodeSize, this.type);
        }), !0;
      }
    };
  }
});
var EC = "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z", OC = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", NC = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", LC = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", VC = "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M11 8H9V10C9 11.1 8.1 12 7 12C8.1 12 9 12.9 9 14V16H11V18H9C7.9 18 7 17.1 7 16V15C7 13.9 6.1 13 5 13V11C6.1 11 7 10.1 7 9V8C7 6.9 7.9 6 9 6H11V8M19 13C17.9 13 17 13.9 17 15V16C17 17.1 16.1 18 15 18H13V16H15V14C15 12.9 15.9 12 17 12C15.9 12 15 11.1 15 10V8H13V6H15C16.1 6 17 6.9 17 8V9C17 10.1 17.9 11 19 11V13Z", HC = "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z", RC = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z", DC = "M13.09 20H6L12 14L13.88 15.88C14.5 14.9 15.36 14.1 16.4 13.6L18 12V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.1 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20M13 3.5L18.5 9H13V3.5M8 9C9.11 9 10 9.9 10 11S9.11 13 8 13 6 12.11 6 11 6.9 9 8 9M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z", Ff = "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z", _C = "M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z", PC = "M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z", IC = "M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z", BC = "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z", FC = "M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z", zC = "M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z", $C = "M3,7H9V13H3V7M3,3H21V5H3V3M21,7V9H11V7H21M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", jC = "M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", WC = "M15,7H21V13H15V7M3,3H21V5H3V3M13,7V9H3V7H13M9,11V13H3V11H9M3,15H17V17H3V15M3,19H21V21H3V19Z", qC = "M17,8H20V20H21V21H17V20H18V17H14L12.5,20H14V21H10V20H11L17,8M18,9L14.5,16H18V9M5,3H10C11.11,3 12,3.89 12,5V16H9V11H6V16H3V5C3,3.89 3.89,3 5,3M6,5V9H9V5H6Z", UC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z", KC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z", GC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z", JC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z", ZC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z", XC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z", YC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z", QC = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z", e8 = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z", t8 = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z", n8 = "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z", r8 = "M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z", i8 = "M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z", o8 = "M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z", s8 = "M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z", a8 = "M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z", u8 = "M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z", l8 = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z", c8 = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z", d8 = "M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z", f8 = "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", p8 = "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", h8 = "M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z", m8 = "M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z", zf = "M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z", g8 = "M19,13H5V11H19V13Z", b8 = "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z", y8 = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z", v8 = "M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z", w8 = "M9 7V17H15V15H11V7H9Z", x8 = "M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z", k8 = "M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z", C8 = "M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z", A8 = "M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z", S8 = "M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z", T8 = "M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z", M8 = "M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z", E8 = "M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", O8 = "M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", N8 = "M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z", L8 = "M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z", V8 = "M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z", H8 = "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z", R8 = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z", D8 = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z", _8 = "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";
const P8 = {
  bold: BC,
  italic: t8,
  underline: d8,
  strike: u8,
  color: _8,
  highlight: zC,
  heading: YC,
  textAlign: Ff,
  fontFamily: qC,
  fontSize: a8,
  subscript: l8,
  superscript: c8,
  bulletList: n8,
  orderedList: i8,
  taskList: r8,
  indent: e8,
  outdent: QC,
  link: zf,
  fileImagePlus: DC,
  image: h8,
  video: D8,
  table: C8,
  blockquote: s8,
  horizontalRule: g8,
  code: HC,
  codeBlock: VC,
  clear: FC,
  undo: R8,
  redo: v8,
  markdownTheme: y8,
  fullscreen: f8,
  // heading
  h1: UC,
  h2: KC,
  h3: GC,
  h4: JC,
  h5: ZC,
  h6: XC,
  p: o8,
  // textAlign
  left: PC,
  center: Ff,
  right: IC,
  justify: _C,
  // no tollbar icon
  circle: NC,
  close: LC,
  fullscreenExit: p8,
  linkVariant: zf,
  linkVariantOff: m8,
  openInNew: b8,
  formatFloatLeft: $C,
  formatFloatNone: jC,
  formatFloatRight: WC,
  sizeS: k8,
  sizeM: x8,
  sizeL: w8,
  aspectRatio: EC,
  delete: RC,
  text: H8,
  // table
  tablePlus: E8,
  tableRemove: O8,
  tableColumnPlusAfter: A8,
  tableColumnPlusBefore: S8,
  tableColumnRemove: T8,
  tableRowPlusAfter: N8,
  tableRowPlusBefore: L8,
  tableRowRemove: V8,
  tableMergeCells: M8,
  check: OC
};
function ce(t) {
  if (t)
    return `svg:${P8[t]}`;
}
const Z = /* @__PURE__ */ Q({
  __name: "ActionButton",
  props: {
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = $(() => ce(e.icon));
    return (r, i) => {
      var u;
      const o = On, s = bp, a = Gr;
      return R(), j(a, {
        class: At(["rounded me-1 ms-0", {
          "v-btn--active": (u = r.isActive) == null ? void 0 : u.call(r)
        }]),
        density: "comfortable",
        size: "small",
        disabled: r.disabled,
        color: r.color,
        icon: "",
        onClick: r.action
      }, {
        default: V(() => [
          n.value ? (R(), j(o, {
            key: 0,
            icon: n.value
          }, null, 8, ["icon"])) : rt("", !0),
          L(s, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: e.tooltip
          }, null, 8, ["text"]),
          Tt(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class", "onClick"]);
    };
  }
}), I8 = (t) => {
  const e = ["float-left", "float-none", "float-right"], n = [
    "formatFloatLeft",
    "formatFloatNone",
    "formatFloatRight"
  ], r = ["left", "inline", "right"];
  return e.map((i, o) => ({
    type: i,
    component: Z,
    componentProps: {
      tooltip: `editor.image.${i.replace("-", ".")}.tooltip`,
      icon: n[o],
      action: () => t.chain().focus().updateImage({ display: r[o] }).run(),
      isActive: () => t.isActive("image", { display: r[o] })
    }
  }));
}, B8 = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, i) => ({
    type: `image-${r}`,
    component: Z,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[i],
      action: () => t.chain().focus().updateImage({ width: es[r], height: null }).run(),
      isActive: () => t.isActive("image", { width: es[r] })
    }
  }));
}, F8 = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, i) => ({
    type: `video-${r}`,
    component: Z,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[i],
      action: () => t.chain().focus().updateVideo({ width: ts[r] }).run(),
      isActive: () => t.isActive("video", { width: ts[r] })
    }
  }));
}, z8 = (t) => [
  ...I8(t),
  ...B8(t),
  ...F8(t),
  {
    type: "image-aspect-ratio",
    component: Z,
    componentProps: {
      tooltip: "editor.image.dialog.form.aspectRatio",
      icon: "aspectRatio",
      action: () => {
        const e = t.isActive("image", { lockAspectRatio: !0 });
        t.chain().focus().updateImage({
          lockAspectRatio: !e,
          height: e ? void 0 : null
        }).run();
      },
      isActive: () => t.isActive("image", { lockAspectRatio: !0 })
    }
  },
  {
    type: "unlink",
    component: Z,
    componentProps: {
      tooltip: "editor.link.unlink.tooltip",
      icon: "linkVariantOff",
      action: () => {
        const { href: e } = t.getAttributes("link");
        t.chain().extendMarkRange("link", { href: e }).unsetLink().focus().run();
      }
    }
  },
  {
    type: "link-open",
    component: Z,
    componentProps: {
      tooltip: "editor.link.open",
      icon: "openInNew",
      action: () => {
        const { href: e } = t.getAttributes("link");
        yi(e) && e && window.open(e, "_blank");
      }
    }
  },
  {
    type: "remove",
    component: Z,
    componentProps: {
      tooltip: "editor.remove",
      icon: "delete",
      action: () => {
        const { state: e, dispatch: n } = t.view;
        d0(e, n);
      }
    }
  }
], $8 = (t, e, { editor: n, extension: r, t: i }) => {
  const { extensions: o = [] } = n.extensionManager, s = {};
  for (const a of Object.keys(t)) {
    const u = t[a];
    if (!u) continue;
    const l = [];
    for (const f of u) {
      if (f === "divider") {
        const m = l[l.length - 1];
        if ((m == null ? void 0 : m.type) === "divider") continue;
        l.push({
          type: "divider",
          component: void 0,
          componentProps: {}
        });
        continue;
      }
      const p = e.find((m) => m.type === f);
      if (p) {
        l.push({
          ...p,
          componentProps: {
            ...p.componentProps,
            tooltip: p.componentProps.tooltip ? i(p.componentProps.tooltip) : void 0
          },
          componentSlots: p.componentSlots
        });
        continue;
      }
      const h = o.find((m) => m.name === f);
      if (h) {
        const { button: m } = h.options, g = m({ editor: n, extension: h, t: i });
        l.push({
          type: f,
          component: g.component,
          componentProps: g.componentProps,
          componentSlots: g.componentSlots
        });
        continue;
      }
    }
    const c = l[l.length - 1], d = l[0];
    (c == null ? void 0 : c.type) === "divider" && l.pop(), (d == null ? void 0 : d.type) === "divider" && l.shift(), s[a] = l;
  }
  return s;
}, GT = /* @__PURE__ */ ne.create({
  name: "base-kit",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      bubble: {
        list: Sm,
        defaultBubbleList: z8,
        button: ({ editor: e, extension: n, t: r }) => {
          var a;
          const { list: i = {}, defaultBubbleList: o } = ((a = n.options) == null ? void 0 : a.bubble) ?? {}, s = (o == null ? void 0 : o(e)) ?? [];
          return $8(i, s, { editor: e, extension: n, t: r });
        }
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.placeholder !== !1 && t.push(
      AC.configure({
        placeholder: "",
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && t.push(
      fC.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.document !== !1 && t.push(uC.configure()), this.options.text !== !1 && t.push(SC.configure()), this.options.gapcursor !== !1 && t.push(wC.configure()), this.options.dropcursor !== !1 && t.push(dC.configure(this.options.dropcursor)), this.options.characterCount !== !1 && t.push(aC.configure(this.options.characterCount)), this.options.paragraph !== !1 && t.push(CC.configure(this.options.paragraph)), this.options.hardBreak !== !1 && t.push(xC.configure(this.options.hardBreak)), this.options.listItem !== !1 && t.push(kC.configure(this.options.listItem)), this.options.textStyle !== !1 && t.push(MC.configure(this.options.textStyle)), t;
  }
}), j8 = /^\s*>\s$/, W8 = /* @__PURE__ */ de.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["blockquote", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Fr({
        find: j8,
        type: this.type
      })
    ];
  }
}), JT = /* @__PURE__ */ W8.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleBlockquote().run(),
          isActive: () => e.isActive("blockquote") || !1,
          disabled: !e.can().toggleBlockquote(),
          icon: "blockquote",
          tooltip: n("editor.blockquote.tooltip")
        }
      })
    };
  }
}), q8 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, U8 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, K8 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, G8 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, J8 = /* @__PURE__ */ Ue.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      or({
        find: q8,
        type: this.type
      }),
      or({
        find: K8,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Mn({
        find: U8,
        type: this.type
      }),
      Mn({
        find: G8,
        type: this.type
      })
    ];
  }
}), ZT = /* @__PURE__ */ J8.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleBold().run(),
          isActive: () => e.isActive("bold") || !1,
          disabled: !e.can().toggleBold(),
          icon: "bold",
          tooltip: n("editor.bold.tooltip")
        }
      })
    };
  }
}), Z8 = "listItem", $f = "textStyle", jf = /^\s*([-+*])\s$/, X8 = /* @__PURE__ */ de.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Z8, this.editor.getAttributes($f)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = Fr({
      find: jf,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = Fr({
      find: jf,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes($f),
      editor: this.editor
    })), [
      t
    ];
  }
}), XT = /* @__PURE__ */ X8.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleBulletList().run(),
          isActive: () => e.isActive("bulletList") || !1,
          disabled: !e.can().toggleBulletList(),
          icon: "bulletList",
          tooltip: n("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), YT = /* @__PURE__ */ de.create({
  name: "clear",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !e.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "clear",
          tooltip: n("editor.clear.tooltip")
        }
      })
    };
  }
}), Y8 = /(^|[^`])`([^`]+)`(?!`)/, Q8 = /(^|[^`])`([^`]+)`(?!`)/g, eA = /* @__PURE__ */ Ue.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      or({
        find: Y8,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Mn({
        find: Q8,
        type: this.type
      })
    ];
  }
}), QT = /* @__PURE__ */ eA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleCode().run(),
          isActive: () => e.isActive("code") || !1,
          disabled: !e.can().toggleCode(),
          icon: "code",
          tooltip: n("editor.code.tooltip")
        }
      })
    };
  }
}), tA = /^```([a-z]+)?[\s\n]$/, nA = /^~~~([a-z]+)?[\s\n]$/, rA = /* @__PURE__ */ de.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (t) => {
          var e;
          const { languageClassPrefix: n } = this.options, o = [...((e = t.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((s) => s.startsWith(n)).map((s) => s.replace(n, ""))[0];
          return o || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "pre",
      Y(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (t) => ({ commands: e }) => e.setNode(this.name, t),
      toggleCodeBlock: (t) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", t)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: t, $anchor: e } = this.editor.state.selection, n = e.pos === 1;
        return !t || e.parent.type.name !== this.name ? !1 : n || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: t }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = t, { selection: n } = e, { $from: r, empty: i } = n;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : t.chain().command(({ tr: a }) => (a.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: t }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = t, { selection: n, doc: r } = e, { $from: i, empty: o } = n;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const a = i.after();
        return a === void 0 ? !1 : r.nodeAt(a) ? t.commands.command(({ tr: l }) => (l.setSelection(F.near(r.resolve(a))), !0)) : t.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Fu({
        find: tA,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      }),
      Fu({
        find: nA,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new se({
        key: new be("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (t, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!n || !o)
              return !1;
            const { tr: s, schema: a } = t.state, u = a.text(n.replace(/\r\n?/g, `
`));
            return s.replaceSelectionWith(this.type.create({ language: o }, u)), s.selection.$from.parent.type !== this.type && s.setSelection(I.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), t.dispatch(s), !0;
          }
        }
      })
    ];
  }
}), eM = /* @__PURE__ */ rA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleCodeBlock().run(),
          isActive: () => e.isActive("codeBlock") || !1,
          disabled: !e.can().toggleCodeBlock(),
          icon: "codeBlock",
          tooltip: n("editor.codeblock.tooltip")
        }
      })
    };
  }
}), iA = /* @__PURE__ */ ne.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (t) => {
              var e;
              return (e = t.style.color) === null || e === void 0 ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.color ? {
              style: `color: ${t.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (t) => ({ chain: e }) => e().setMark("textStyle", { color: t }).run(),
      unsetColor: () => ({ chain: t }) => t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), T1 = /* @__PURE__ */ Q({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "" },
    nudgeLeft: { default: 0 },
    nudgeTop: { default: 0 },
    more: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = J(""), o = J(!1);
    Gt(o, (a) => {
      i.value = n.modelValue;
    });
    function s(a) {
      r("update:modelValue", a), r("change", a), i.value = a, o.value = !1;
    }
    return (a, u) => {
      const l = On, c = Gr, d = Ks, f = om, p = cl, h = Gs;
      return R(), j(h, {
        modelValue: o.value,
        "onUpdate:modelValue": u[2] || (u[2] = (m) => o.value = m),
        "nudge-left": a.nudgeLeft || 255,
        "nudge-top": a.nudgeTop || 42,
        "close-on-content-click": !1,
        transition: "scale-transition",
        origin: a.nudgeLeft ? "top left" : "top right",
        activator: "parent"
      }, {
        default: V(() => [
          L(p, null, {
            default: V(() => [
              L(f, {
                class: "d-flex flex-wrap justify-between ma-1",
                fluid: "",
                "max-width": 230
              }, {
                default: V(() => [
                  (R(!0), ge(De, null, ut(S(km), (m) => (R(), j(c, {
                    key: m,
                    flat: "",
                    icon: "",
                    density: "compact",
                    onClick: (g) => s(m)
                  }, {
                    default: V(() => [
                      L(l, {
                        icon: S(ce)("circle"),
                        color: m
                      }, null, 8, ["icon", "color"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)),
                  L(d, {
                    modelValue: i.value,
                    "onUpdate:modelValue": u[0] || (u[0] = (m) => i.value = m),
                    class: "mt-2 mx-1",
                    "append-inner-icon": S(ce)("check"),
                    density: "compact",
                    label: "HEX",
                    variant: "outlined",
                    flat: "",
                    "hide-details": "",
                    "single-line": "",
                    clearable: "",
                    "onClick:appendInner": u[1] || (u[1] = (m) => s(i.value))
                  }, gl({ _: 2 }, [
                    i.value ? {
                      name: "prepend-inner",
                      fn: V(() => [
                        L(l, {
                          class: "opacity-100",
                          icon: S(ce)("circle"),
                          color: i.value
                        }, null, 8, ["icon", "color"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["modelValue", "append-inner-icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "nudge-left", "nudge-top", "origin"]);
    };
  }
}), oA = /* @__PURE__ */ Q({
  __name: "ColorActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { state: n } = kl();
    function r(i) {
      var o;
      (o = e.action) == null || o.call(e, i);
    }
    return ur(() => {
      const { color: i } = e.editor.getAttributes("textStyle");
      n.color = i;
    }), (i, o) => (R(), j(Z, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: S(n).color,
      "is-active": i.isActive
    }, {
      default: V(() => [
        L(T1, {
          modelValue: S(n).color,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => S(n).color = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), tM = /* @__PURE__ */ iA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: oA,
        componentProps: {
          action: (r) => {
            typeof r == "string" && e.chain().focus().setColor(r).run();
          },
          isActive: () => {
            const { color: r } = e.getAttributes("textStyle");
            return r && e.isActive({ color: r }) || !1;
          },
          disabled: !e.can().setColor(""),
          icon: "color",
          tooltip: n("editor.color.tooltip")
        }
      })
    };
  }
}), sA = /* @__PURE__ */ ne.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (t) => t.style.fontFamily,
            renderHTML: (t) => t.fontFamily ? {
              style: `font-family: ${t.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (t) => ({ chain: e }) => e().setMark("textStyle", { fontFamily: t }).run(),
      unsetFontFamily: () => ({ chain: t }) => t().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
}), oo = /* @__PURE__ */ Q({
  __name: "ActionMenuButton",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    maxHeight: { default: void 0 },
    icon: { default: void 0 },
    tooltip: { default: "" },
    items: { default: () => [] }
  },
  setup(t) {
    const e = t, n = J(!1), r = $(() => {
      const i = e.items.find((s) => s.isActive());
      return i && !i.default ? {
        ...i,
        icon: i.icon ? i.icon : e.icon
      } : {
        title: e.tooltip,
        icon: e.icon,
        isActive: () => !1
      };
    });
    return (i, o) => {
      const s = On, a = yp, u = vp, l = Xi, c = cl, d = Gs;
      return R(), j(Z, {
        icon: r.value.icon,
        tooltip: r.value.title,
        disabled: i.disabled,
        color: i.color,
        "is-active": r.value.isActive
      }, {
        default: V(() => [
          L(d, {
            modelValue: n.value,
            "onUpdate:modelValue": o[0] || (o[0] = (f) => n.value = f),
            activator: "parent"
          }, {
            default: V(() => [
              L(c, {
                density: "compact",
                "max-height": i.maxHeight
              }, {
                default: V(() => [
                  (R(!0), ge(De, null, ut(i.items, (f, p) => (R(), ge(De, { key: p }, [
                    L(u, {
                      active: f.isActive(),
                      disabled: f.disabled,
                      onClick: f.action
                    }, {
                      prepend: V(() => [
                        f.icon ? (R(), j(s, {
                          key: 0,
                          icon: S(ce)(f.icon)
                        }, null, 8, ["icon"])) : rt("", !0)
                      ]),
                      default: V(() => [
                        L(a, {
                          style: mi(f.style)
                        }, {
                          default: V(() => [
                            Jt(Le(f.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1032, ["active", "disabled", "onClick"]),
                    f.divider ? (R(), j(l, { key: 0 })) : rt("", !0)
                  ], 64))), 128))
                ]),
                _: 1
              }, 8, ["max-height"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]);
    };
  }
}), nM = /* @__PURE__ */ sA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      fontFamilies: Cm,
      button: ({ editor: e, extension: n, t: r }) => {
        var a;
        const o = (((a = n.options) == null ? void 0 : a.fontFamilies) || []).map((u) => ({
          title: r(u.title),
          isActive: () => {
            const { fontFamily: l } = e.getAttributes("textStyle");
            return u.value === fu && l === void 0 ? !0 : e.isActive({ fontFamily: u.value }) || !1;
          },
          action: () => {
            if (u.value === fu) {
              e.chain().focus().unsetFontFamily().run();
              return;
            }
            e.chain().focus().setFontFamily(u.value).run();
          },
          disabled: !e.can().setFontFamily(u.value),
          style: { fontFamily: u.value },
          divider: u.divider ?? !1,
          default: u.default ?? !1
        })), s = o.filter((u) => u.disabled).length === o.length;
        return {
          component: oo,
          componentProps: {
            icon: "fontFamily",
            tooltip: r("editor.fontFamily.tooltip"),
            disabled: s,
            items: o,
            maxHeight: 280
          }
        };
      }
    };
  }
}), rM = /* @__PURE__ */ ne.create({
  name: "fontSize",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["textStyle"],
      fontSizes: [...Am],
      button: ({ editor: e, extension: n, t: r }) => {
        var a;
        const i = ((a = n.options) == null ? void 0 : a.fontSizes) || [], o = [br, ...i].map((u) => ({
          title: u === br ? r("editor.default") : String(u),
          isActive: () => {
            const { fontSize: l } = e.getAttributes("textStyle");
            return u === br && l === void 0 ? !0 : e.isActive({ fontSize: String(u) }) || !1;
          },
          action: () => {
            if (u === br) {
              e.chain().focus().unsetFontSize().run();
              return;
            }
            e.chain().focus().setFontSize(String(u)).run();
          },
          disabled: !e.can().setFontSize(String(u)),
          divider: u === br,
          default: u === br
        })), s = o.filter((u) => u.disabled).length === o.length;
        return {
          component: oo,
          componentProps: {
            icon: "fontSize",
            tooltip: r("editor.fontSize.tooltip"),
            disabled: s,
            items: o,
            maxHeight: 280
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (t) => t.style.fontSize || "",
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${vi(t.fontSize)}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), aA = /* @__PURE__ */ Q({
  __name: "FullscreenActionButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    isActive: { type: Function, default: void 0 },
    useWindow: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = tn(), { state: r, toggleFullscreen: i } = kl(), { isFullscreen: o, enter: s, exit: a } = Ty();
    Gt(o, (d) => {
      !d && r.isFullscreen && e.useWindow && c();
    });
    const u = $(() => {
      const d = r.isFullscreen ? "editor.fullscreen.tooltip.exit" : "editor.fullscreen.tooltip.fullscreen";
      if (d)
        return S(n)(d);
    }), l = $(() => {
      const d = r.isFullscreen ? "fullscreenExit" : "fullscreen";
      return ce(d);
    });
    function c(d = !1) {
      i(), r.isFullscreen ? (document.documentElement.classList.add("overflow-y-hidden"), d && s()) : (document.documentElement.classList.remove("overflow-y-hidden"), d && a());
    }
    return (d, f) => {
      var g;
      const p = On, h = bp, m = Gr;
      return R(), j(m, {
        class: At(["rounded me-1 ms-0", {
          "v-btn--active": (g = d.isActive) == null ? void 0 : g.call(d)
        }]),
        density: "comfortable",
        size: "small",
        disabled: d.disabled,
        color: d.color,
        icon: "",
        onClick: f[0] || (f[0] = (b) => c(d.useWindow))
      }, {
        default: V(() => [
          L(p, { icon: l.value }, null, 8, ["icon"]),
          L(h, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: u.value
          }, null, 8, ["text"]),
          Tt(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class"]);
    };
  }
}), iM = /* @__PURE__ */ ne.create({
  name: "fullscreen",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      useWindow: !1,
      button: ({ editor: e, extension: n, t: r }) => ({
        component: aA,
        componentProps: {
          useWindow: n.options.useWindow ?? !1
        }
      })
    };
  }
}), uA = /* @__PURE__ */ de.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, Y(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((t, e) => ({
      ...t,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((t) => Fu({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
}), oM = /* @__PURE__ */ uA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button: ({ editor: e, extension: n, t: r }) => {
        var l;
        const { extensions: i = [] } = e.extensionManager ?? [], o = ((l = n.options) == null ? void 0 : l.levels) || [], s = i.find((c) => c.name === "base-kit"), a = o.map((c) => ({
          action: () => e.chain().focus().toggleHeading({ level: c }).run(),
          isActive: () => e.isActive("heading", { level: c }) || !1,
          disabled: !e.can().toggleHeading({ level: c }),
          icon: `h${c}`,
          title: r(`editor.heading.h${c}.tooltip`)
        }));
        s && s.options.paragraph !== !1 && a.unshift({
          action: () => e.chain().focus().setParagraph().run(),
          isActive: () => e.isActive("paragraph") || !1,
          disabled: !e.can().setParagraph(),
          icon: "p",
          title: r("editor.paragraph.tooltip"),
          divider: !0
        });
        const u = a.filter((c) => c.disabled).length === a.length;
        return {
          component: oo,
          componentProps: {
            icon: "heading",
            tooltip: r("editor.heading.tooltip"),
            disabled: u,
            items: a
          }
        };
      }
    };
  }
}), lA = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, cA = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, dA = /* @__PURE__ */ Ue.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-color") || t.style.backgroundColor,
        renderHTML: (t) => t.color ? {
          "data-color": t.color,
          style: `background-color: ${t.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: e }) => e.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      or({
        find: lA,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Mn({
        find: cA,
        type: this.type
      })
    ];
  }
}), fA = /* @__PURE__ */ Q({
  __name: "HighlightActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { state: n } = kl();
    function r(i) {
      var o;
      (o = e.action) == null || o.call(e, i);
    }
    return ur(() => {
      const { color: i } = e.editor.getAttributes("highlight");
      n.highlight = i;
    }), (i, o) => (R(), j(Z, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: S(n).highlight,
      "is-active": i.isActive
    }, {
      default: V(() => [
        L(T1, {
          modelValue: S(n).highlight,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => S(n).highlight = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), sM = /* @__PURE__ */ dA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      multicolor: !0,
      button: ({ editor: e, t: n }) => ({
        component: fA,
        componentProps: {
          action: (r) => {
            typeof r == "string" && e.chain().focus().setHighlight({ color: r }).run();
          },
          isActive: () => e.isActive("highlight") || !1,
          disabled: !e.can().setHighlight(),
          icon: "highlight",
          tooltip: n("editor.highlight.tooltip")
        }
      })
    };
  }
});
var ws = 200, Se = function() {
};
Se.prototype.append = function(e) {
  return e.length ? (e = Se.from(e), !this.length && e || e.length < ws && this.leafAppend(e) || this.length < ws && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Se.prototype.prepend = function(e) {
  return e.length ? Se.from(e).append(this) : this;
};
Se.prototype.appendInner = function(e) {
  return new pA(this, e);
};
Se.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? Se.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
Se.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Se.prototype.forEach = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0);
};
Se.prototype.map = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, n, r), i;
};
Se.from = function(e) {
  return e instanceof Se ? e : e && e.length ? new M1(e) : Se.empty;
};
var M1 = /* @__PURE__ */ function(t) {
  function e(r) {
    t.call(this), this.values = r;
  }
  e.__proto__ = t, e.prototype = Object.create(t.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, a) {
    for (var u = o; u < s; u++)
      if (i(this.values[u], a + u) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, a) {
    for (var u = o - 1; u >= s; u--)
      if (i(this.values[u], a + u) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= ws)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= ws)
      return new e(i.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
}(Se);
Se.empty = new M1([]);
var pA = /* @__PURE__ */ function(t) {
  function e(n, r) {
    t.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return e.__proto__ = t, e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var a = this.left.length;
    if (i < a && this.left.forEachInner(r, i, Math.min(o, a), s) === !1 || o > a && this.right.forEachInner(r, Math.max(i - a, 0), Math.min(this.length, o) - a, s + a) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var a = this.left.length;
    if (i > a && this.right.forEachInvertedInner(r, i - a, Math.max(o, a) - a, s + a) === !1 || o < a && this.left.forEachInvertedInner(r, Math.min(i, a), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(Se);
const hA = 500;
class pt {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    n && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, a, u, l = [], c = [];
    return this.items.forEach((d, f) => {
      if (!d.step) {
        i || (i = this.remapping(r, f + 1), o = i.maps.length), o--, c.push(d);
        return;
      }
      if (i) {
        c.push(new vt(d.map));
        let p = d.step.map(i.slice(o)), h;
        p && s.maybeStep(p).doc && (h = s.mapping.maps[s.mapping.maps.length - 1], l.push(new vt(h, void 0, void 0, l.length + c.length))), o--, h && i.appendMap(h, o);
      } else
        s.maybeStep(d.step);
      if (d.selection)
        return a = i ? d.selection.map(i.slice(o)) : d.selection, u = new pt(this.items.slice(0, r).append(c.reverse().concat(l)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: u, transform: s, selection: a };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, r, i) {
    let o = [], s = this.eventCount, a = this.items, u = !i && a.length ? a.get(a.length - 1) : null;
    for (let c = 0; c < e.steps.length; c++) {
      let d = e.steps[c].invert(e.docs[c]), f = new vt(e.mapping.maps[c], d, n), p;
      (p = u && u.merge(f)) && (f = p, c ? o.pop() : a = a.slice(0, a.length - 1)), o.push(f), n && (s++, n = void 0), i || (u = f);
    }
    let l = s - r.depth;
    return l > gA && (a = mA(a, l), s -= l), new pt(a.append(o), s);
  }
  remapping(e, n) {
    let r = new Nr();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, n), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new pt(this.items.append(e.map((n) => new vt(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - n), o = e.mapping, s = e.steps.length, a = this.eventCount;
    this.items.forEach((f) => {
      f.selection && a--;
    }, i);
    let u = n;
    this.items.forEach((f) => {
      let p = o.getMirror(--u);
      if (p == null)
        return;
      s = Math.min(s, p);
      let h = o.maps[p];
      if (f.step) {
        let m = e.steps[p].invert(e.docs[p]), g = f.selection && f.selection.map(o.slice(u + 1, p));
        g && a++, r.push(new vt(h, m, g));
      } else
        r.push(new vt(h));
    }, i);
    let l = [];
    for (let f = n; f < s; f++)
      l.push(new vt(o.maps[f]));
    let c = this.items.slice(0, i).append(l).append(r), d = new pt(c, a);
    return d.emptyItemCount() > hA && (d = d.compress(this.items.length - r.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((n) => {
      n.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let n = this.remapping(0, e), r = n.maps.length, i = [], o = 0;
    return this.items.forEach((s, a) => {
      if (a >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let u = s.step.map(n.slice(r)), l = u && u.getMap();
        if (r--, l && n.appendMap(l, r), u) {
          let c = s.selection && s.selection.map(n.slice(r));
          c && o++;
          let d = new vt(l.invert(), u, c), f, p = i.length - 1;
          (f = i.length && i[p].merge(d)) ? i[p] = f : i.push(d);
        }
      } else s.map && r--;
    }, this.items.length, 0), new pt(Se.from(i.reverse()), o);
  }
}
pt.empty = new pt(Se.empty, 0);
function mA(t, e) {
  let n;
  return t.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return n = i, !1;
  }), t.slice(n);
}
class vt {
  constructor(e, n, r, i) {
    this.map = e, this.step = n, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new vt(n.getMap().invert(), n, this.selection);
    }
  }
}
class dn {
  constructor(e, n, r, i, o) {
    this.done = e, this.undone = n, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const gA = 20;
function bA(t, e, n, r) {
  let i = n.getMeta(Yn), o;
  if (i)
    return i.historyState;
  n.getMeta(wA) && (t = new dn(t.done, t.undone, null, 0, -1));
  let s = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t;
  if (s && s.getMeta(Yn))
    return s.getMeta(Yn).redo ? new dn(t.done.addTransform(n, void 0, r, Jo(e)), t.undone, Wf(n.mapping.maps), t.prevTime, t.prevComposition) : new dn(t.done, t.undone.addTransform(n, void 0, r, Jo(e)), null, t.prevTime, t.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let a = n.getMeta("composition"), u = t.prevTime == 0 || !s && t.prevComposition != a && (t.prevTime < (n.time || 0) - r.newGroupDelay || !yA(n, t.prevRanges)), l = s ? tu(t.prevRanges, n.mapping) : Wf(n.mapping.maps);
    return new dn(t.done.addTransform(n, u ? e.selection.getBookmark() : void 0, r, Jo(e)), pt.empty, l, n.time, a ?? t.prevComposition);
  } else return (o = n.getMeta("rebased")) ? new dn(t.done.rebased(n, o), t.undone.rebased(n, o), tu(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new dn(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), tu(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
}
function yA(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let n = !1;
  return t.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (n = !0);
  }), n;
}
function Wf(t) {
  let e = [];
  for (let n = t.length - 1; n >= 0 && e.length == 0; n--)
    t[n].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function tu(t, e) {
  if (!t)
    return null;
  let n = [];
  for (let r = 0; r < t.length; r += 2) {
    let i = e.map(t[r], 1), o = e.map(t[r + 1], -1);
    i <= o && n.push(i, o);
  }
  return n;
}
function vA(t, e, n) {
  let r = Jo(e), i = Yn.get(e).spec.config, o = (n ? t.undone : t.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), a = (n ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), u = new dn(n ? a : o.remaining, n ? o.remaining : a, null, 0, -1);
  return o.transform.setSelection(s).setMeta(Yn, { redo: n, historyState: u });
}
let nu = !1, qf = null;
function Jo(t) {
  let e = t.plugins;
  if (qf != e) {
    nu = !1, qf = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        nu = !0;
        break;
      }
  }
  return nu;
}
const Yn = new be("history"), wA = new be("closeHistory");
function xA(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new se({
    key: Yn,
    state: {
      init() {
        return new dn(pt.empty, pt.empty, null, 0, -1);
      },
      apply(e, n, r) {
        return bA(n, r, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let r = n.inputType, i = r == "historyUndo" ? O1 : r == "historyRedo" ? N1 : null;
          return i ? (n.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function E1(t, e) {
  return (n, r) => {
    let i = Yn.getState(n);
    if (!i || (t ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = vA(i, n, t);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const O1 = E1(!1, !0), N1 = E1(!0, !0), kA = /* @__PURE__ */ ne.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => O1(t, e),
      redo: () => ({ state: t, dispatch: e }) => N1(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      xA(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), aM = /* @__PURE__ */ kA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      depth: 10,
      button: ({ editor: e, t: n }) => ["undo", "redo"].map((i) => ({
        component: Z,
        componentProps: {
          action: () => {
            i === "undo" && e.chain().focus().undo().run(), i === "redo" && e.chain().focus().redo().run();
          },
          disabled: !e.can()[i](),
          icon: i,
          tooltip: n(`editor.${i}.tooltip`)
        }
      }))
    };
  }
}), CA = /* @__PURE__ */ de.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["hr", Y(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: t, state: e }) => {
        const { selection: n } = e, { $from: r, $to: i } = n, o = t();
        return r.parentOffset === 0 ? o.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: i.pos
        }, {
          type: this.name
        }) : N0(n) ? o.insertContentAt(i.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ tr: s, dispatch: a }) => {
          var u;
          if (a) {
            const { $to: l } = s.selection, c = l.end();
            if (l.nodeAfter)
              l.nodeAfter.isTextblock ? s.setSelection(I.create(s.doc, l.pos + 1)) : l.nodeAfter.isBlock ? s.setSelection(P.create(s.doc, l.pos)) : s.setSelection(I.create(s.doc, l.pos));
            else {
              const d = (u = l.parent.type.contentMatch.defaultType) === null || u === void 0 ? void 0 : u.create();
              d && (s.insert(c, d), s.setSelection(I.create(s.doc, c + 1)));
            }
            s.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      V0({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), uM = /* @__PURE__ */ CA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().setHorizontalRule().run(),
          disabled: !e.can().setHorizontalRule(),
          icon: "horizontalRule",
          tooltip: n("editor.horizontalrule.tooltip")
        }
      })
    };
  }
}), AA = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, SA = /* @__PURE__ */ de.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", Y(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      V0({
        find: AA,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), TA = /* @__PURE__ */ Q({
  __name: "ImageUpload",
  props: {
    modelValue: { default: () => ({}) },
    upload: { type: Function, default: void 0 },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = J(!1), o = $({
      get: () => n.modelValue,
      set: (a) => r("update:modelValue", a)
    }), s = async (a) => {
      var l;
      const u = a instanceof File ? a : a[0];
      if (!u)
        throw new Error("No files to upload");
      try {
        i.value = !0;
        const c = await ((l = n.upload) == null ? void 0 : l.call(n, u));
        if (!c)
          throw new Error("No link received after upload");
        o.value = {
          ...S(o),
          src: c
        };
      } catch (c) {
        Zp.error(`Failed to execute upload file: ${c}`);
      } finally {
        i.value = !1;
      }
    };
    return (a, u) => {
      const l = sm, c = Ks, d = Js, f = dl;
      return R(), j(f, { disabled: i.value }, {
        default: V(() => [
          L(l, {
            modelValue: o.value.file,
            "onUpdate:modelValue": [
              u[0] || (u[0] = (p) => o.value.file = p),
              s
            ],
            label: a.t("editor.image.dialog.form.file"),
            accept: "image/*",
            loading: i.value,
            "prepend-icon": S(ce)("fileImagePlus"),
            "onClick:clear": u[1] || (u[1] = (p) => o.value.src = void 0)
          }, null, 8, ["modelValue", "label", "loading", "prepend-icon"]),
          L(c, {
            modelValue: o.value.src,
            "onUpdate:modelValue": u[2] || (u[2] = (p) => o.value.src = p),
            label: a.t("editor.image.dialog.form.link"),
            disabled: "",
            autofocus: "",
            "prepend-icon": S(ce)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          L(c, {
            modelValue: o.value.alt,
            "onUpdate:modelValue": u[3] || (u[3] = (p) => o.value.alt = p),
            label: a.t("editor.image.dialog.form.alt"),
            "prepend-icon": S(ce)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          L(d, {
            modelValue: o.value.lockAspectRatio,
            "onUpdate:modelValue": u[4] || (u[4] = (p) => o.value.lockAspectRatio = p),
            label: a.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), MA = /* @__PURE__ */ Q({
  __name: "ImageUrl",
  props: {
    modelValue: { default: () => ({}) },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = $({
      get: () => n.modelValue,
      set: (o) => r("update:modelValue", o)
    });
    return (o, s) => {
      const a = Ks, u = Js, l = dl;
      return R(), j(l, null, {
        default: V(() => [
          L(a, {
            modelValue: i.value.src,
            "onUpdate:modelValue": s[0] || (s[0] = (c) => i.value.src = c),
            label: o.t("editor.image.dialog.form.link"),
            autofocus: "",
            "prepend-icon": S(ce)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          L(a, {
            modelValue: i.value.alt,
            "onUpdate:modelValue": s[1] || (s[1] = (c) => i.value.alt = c),
            label: o.t("editor.image.dialog.form.alt"),
            "prepend-icon": S(ce)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          L(u, {
            modelValue: i.value.lockAspectRatio,
            "onUpdate:modelValue": s[2] || (s[2] = (c) => i.value.lockAspectRatio = c),
            label: o.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      });
    };
  }
}), EA = { class: "headline" }, OA = /* @__PURE__ */ Q({
  __name: "ImageDialog",
  props: {
    value: { default: () => ({}) },
    editor: {},
    upload: { type: Function, default: void 0 },
    imageTabs: { default: () => [] },
    hiddenTabs: { default: () => [] },
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = tn(), r = J(!1), i = J(!1), o = J({}), s = $(() => [...[
      {
        name: S(n)("editor.image.dialog.tab.url"),
        type: "url",
        component: MA
      },
      {
        name: S(n)("editor.image.dialog.tab.upload"),
        type: "upload",
        component: TA
      }
    ].filter((f) => f.type ? !e.hiddenTabs.includes(f.type) : f), ...e.imageTabs]), a = $(() => {
      const { src: c } = S(o);
      return !(typeof c == "string" && c !== "");
    });
    async function u() {
      const { src: c, lockAspectRatio: d, height: f } = S(o);
      c && (e.editor.chain().focus().setImage({
        ...S(o),
        src: c,
        height: d ? void 0 : f
      }).run(), l());
    }
    function l() {
      r.value = !1, o.value = {}, setTimeout(() => {
        var c;
        return (c = e.destroy) == null ? void 0 : c.call(e);
      }, 300);
    }
    return Gt(
      () => e.value,
      (c) => {
        o.value = {
          ...S(o),
          ...c
        };
      },
      { immediate: !0, deep: !0 }
    ), (c, d) => {
      const f = Qi, p = On, h = Gr, m = Ur, g = am, b = um, x = lm, w = cm, y = Yi, k = fl, v = Kr, E = pl;
      return R(), j(E, {
        modelValue: r.value,
        "onUpdate:modelValue": d[3] || (d[3] = (M) => r.value = M),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": l
      }, {
        default: V(() => [
          L(v, null, {
            default: V(() => [
              L(m, {
                class: "px-6",
                density: "compact"
              }, {
                default: V(() => [
                  Zt("span", EA, Le(S(n)("editor.image.dialog.title")), 1),
                  L(f),
                  L(h, {
                    class: "mx-0",
                    icon: "",
                    onClick: l
                  }, {
                    default: V(() => [
                      L(p, {
                        icon: S(ce)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              L(b, {
                modelValue: i.value,
                "onUpdate:modelValue": d[0] || (d[0] = (M) => i.value = M)
              }, {
                default: V(() => [
                  (R(!0), ge(De, null, ut(s.value, (M, O) => (R(), j(g, {
                    key: O,
                    value: O
                  }, {
                    default: V(() => [
                      Jt(Le(M.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              L(y, null, {
                default: V(() => [
                  L(w, {
                    modelValue: i.value,
                    "onUpdate:modelValue": d[2] || (d[2] = (M) => i.value = M)
                  }, {
                    default: V(() => [
                      (R(!0), ge(De, null, ut(s.value, (M, O) => (R(), j(x, {
                        key: O,
                        value: O
                      }, {
                        default: V(() => [
                          (R(), j(Vi(M.component), {
                            modelValue: o.value,
                            "onUpdate:modelValue": d[1] || (d[1] = (B) => o.value = B),
                            upload: c.upload,
                            t: S(n)
                          }, null, 8, ["modelValue", "upload", "t"]))
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              L(k, null, {
                default: V(() => [
                  L(h, {
                    disabled: a.value,
                    onClick: u
                  }, {
                    default: V(() => [
                      Jt(Le(S(n)("editor.image.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), NA = ["src", "alt"], LA = {
  key: 0,
  class: "image-resizer"
}, VA = ["onMousedown"], HA = /* @__PURE__ */ Q({
  __name: "ImageView",
  props: {
    ...x5,
    selected: {
      type: Boolean,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = {
      TOP_LEFT: "tl",
      TOP_RIGHT: "tr",
      BOTTOM_LEFT: "bl",
      BOTTOM_RIGHT: "br"
    }, r = J({
      width: kc,
      height: kc
    }), i = J({
      width: 0,
      height: 0
    }), o = J([
      n.TOP_LEFT,
      n.TOP_RIGHT,
      n.BOTTOM_LEFT,
      n.BOTTOM_RIGHT
    ]), s = J(!1), a = J({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ""
    }), u = $(() => {
      const { src: v, alt: E, width: M, height: O } = e.node.attrs, B = yu(M) ? `${M}px` : M, _ = yu(O) ? `${O}px` : O;
      return {
        src: v || void 0,
        alt: E || void 0,
        style: {
          width: B || void 0,
          height: _ || void 0
        }
      };
    }), l = $(() => e.node.attrs.display || void 0), c = $(() => e.node.attrs.lockAspectRatio ?? !0), d = $(() => typeof S(l) == "string" ? ["image-view", `image-view--${S(l)}`] : ["image-view"]), f = $(() => {
      const {
        style: { width: v }
      } = S(u);
      return { width: v === "100%" ? v : void 0 };
    });
    function p(v) {
      i.value = {
        width: v.target.width,
        height: v.target.height
      };
    }
    function h() {
      const { editor: v, getPos: E } = e;
      v.commands.setNodeSelection(E());
    }
    const m = bi(function() {
      const { editor: v } = e, { width: E } = getComputedStyle(v.view.dom);
      r.value.width = Number.parseInt(E, 10);
    }, Cc);
    function g(v, E) {
      v.preventDefault(), v.stopPropagation(), a.value.x = v.clientX, a.value.y = v.clientY;
      const M = S(i).width, O = S(i).height, B = M / O;
      let _ = Number(e.node.attrs.width), U = Number(e.node.attrs.height);
      const K = S(r).width;
      _ && !U ? (_ = _ > K ? K : _, U = Math.round(_ / B)) : U && !_ ? (_ = Math.round(U * B), _ = _ > K ? K : _) : !_ && !U ? (_ = M > K ? K : M, U = Math.round(_ / B)) : _ = _ > K ? K : _, a.value.w = _, a.value.h = U, a.value.dir = E, s.value = !0, w();
    }
    const b = bi(function(v) {
      if (v.preventDefault(), v.stopPropagation(), !S(s)) return;
      const { x: E, y: M, w: O, h: B, dir: _ } = S(a), U = (v.clientX - E) * (/l/.test(_) ? -1 : 1), K = (v.clientY - M) * (/t/.test(_) ? -1 : 1), we = py(O + U, xc, S(r).width), ye = S(c) ? null : Math.max(B + K, xc);
      e.updateAttributes({
        width: we,
        height: ye
      });
    }, Cc);
    function x(v) {
      v.preventDefault(), v.stopPropagation(), S(s) && (s.value = !1, a.value = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, y(), h());
    }
    function w() {
      document == null || document.addEventListener("mousemove", b, !0), document == null || document.addEventListener("mouseup", x, !0);
    }
    function y() {
      document == null || document.removeEventListener("mousemove", b, !0), document == null || document.removeEventListener("mouseup", x, !0);
    }
    const k = new ResizeObserver(() => m());
    return ur((v) => {
      S(k).observe(e.editor.view.dom), v(() => {
        S(k).disconnect();
      });
    }), (v, E) => (R(), j(S(v5), {
      as: "span",
      class: At(d.value),
      style: mi(f.value)
    }, {
      default: V(() => [
        Zt("div", {
          draggable: "true",
          "data-drag-handle": "",
          class: At([{
            "image-view__body--focused": t.selected,
            "image-view__body--resizing": s.value
          }, "image-view__body"]),
          style: mi(f.value)
        }, [
          Zt("img", {
            src: u.value.src,
            alt: u.value.alt,
            style: mi(u.value.style),
            class: "image-view__body__image",
            onLoad: p,
            onClick: h
          }, null, 44, NA),
          v.editor.view.editable ? xp((R(), ge("div", LA, [
            (R(!0), ge(De, null, ut(o.value, (M) => (R(), ge("span", {
              key: M,
              class: At([`image-resizer__handler--${M}`, "image-resizer__handler"]),
              onMousedown: (O) => g(O, M)
            }, null, 42, VA))), 128))
          ], 512)), [
            [kp, t.selected || s.value]
          ]) : rt("", !0)
        ], 6)
      ]),
      _: 1
    }, 8, ["class", "style"]));
  }
}), oc = /* @__PURE__ */ Q({
  __name: "OriginalThemeProvider",
  setup(t) {
    const { global: { name: e } } = bl();
    return (n, r) => {
      const i = gp;
      return R(), j(i, { theme: S(e) }, {
        default: V(() => [
          Tt(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["theme"]);
    };
  }
}), RA = /* @__PURE__ */ Q({
  __name: "ImageActionButton",
  props: {
    editor: {},
    upload: { type: Function, default: void 0 },
    imageTabs: { default: () => [] },
    hiddenTabs: { default: () => [] },
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = J({});
    function r() {
      var s, a;
      const i = (s = e.editor) == null ? void 0 : s.view.state.selection, o = ((a = i == null ? void 0 : i.node) == null ? void 0 : a.attrs) ?? {};
      o != null && o.src && (n.value.src = o.src), o != null && o.alt && (n.value.alt = o.alt), o != null && o.title && (n.value.title = o.title), o != null && o.width && (n.value.width = o.width), o != null && o.height && (n.value.height = o.height), o != null && o.display && (n.value.display = o.display), n.value.lockAspectRatio = o.lockAspectRatio ?? !0;
    }
    return (i, o) => (R(), j(Z, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: i.color,
      "is-active": i.isActive,
      action: r
    }, {
      default: V(() => [
        L(oc, null, {
          default: V(() => [
            Tt(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value, imageTabs: i.imageTabs, hiddenTabs: i.hiddenTabs, upload: i.upload }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), lM = /* @__PURE__ */ SA.extend({
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      src: {
        default: null
      },
      alt: {
        default: null
      },
      lockAspectRatio: {
        default: !0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: null
      },
      display: {
        default: this.options.display,
        renderHTML: ({ display: e }) => e ? {
          "data-display": e
        } : {},
        parseHTML: (e) => e.getAttribute("data-display") || "inline"
      }
    };
  },
  addNodeView() {
    return C5(HA);
  },
  addCommands() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      updateImage: (e) => ({ commands: n }) => n.updateAttributes(this.name, e)
    };
  },
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      upload: void 0,
      width: es["size-large"],
      display: "inline",
      imageTabs: [],
      hiddenTabs: [],
      inline: !0,
      dialogComponent: () => OA,
      button: ({ editor: e, extension: n, t: r }) => {
        const { upload: i, imageTabs: o, hiddenTabs: s, dialogComponent: a } = n.options;
        return {
          component: RA,
          componentProps: {
            editor: e,
            upload: i,
            imageTabs: o,
            hiddenTabs: s,
            isActive: () => e.isActive("image") || !1,
            disabled: !e.can().setImage({}),
            icon: "image",
            tooltip: r("editor.image.tooltip")
          },
          componentSlots: {
            dialog: a()
          }
        };
      }
    };
  }
}), cM = /* @__PURE__ */ ne.create({
  name: "indent",
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      button: ({ editor: t, t: e }) => {
        const n = ["outdent", "indent"], r = {
          indent: "sinkListItem",
          outdent: "liftListItem"
        };
        return n.map((i) => ({
          component: Z,
          componentProps: {
            action: () => {
              i === "indent" && t.chain().focus().sinkListItem("listItem").run(), i === "outdent" && t.chain().focus().liftListItem("listItem").run();
            },
            disabled: !t.can()[r[i]]("listItem"),
            icon: i,
            tooltip: e(`editor.${i}.tooltip`)
          }
        }));
      }
    };
  }
}), DA = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, _A = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, PA = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, IA = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, BA = /* @__PURE__ */ Ue.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      or({
        find: DA,
        type: this.type
      }),
      or({
        find: PA,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Mn({
        find: _A,
        type: this.type
      }),
      Mn({
        find: IA,
        type: this.type
      })
    ];
  }
}), dM = /* @__PURE__ */ BA.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleItalic().run(),
          isActive: () => e.isActive("italic") || !1,
          disabled: !e.can().toggleItalic(),
          icon: "italic",
          tooltip: n("editor.italic.tooltip")
        }
      })
    };
  }
}), FA = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", zA = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", qr = (t, e) => {
  for (const n in e)
    t[n] = e[n];
  return t;
}, Zu = "numeric", Xu = "ascii", Yu = "alpha", Ti = "asciinumeric", hi = "alphanumeric", Qu = "domain", L1 = "emoji", $A = "scheme", jA = "slashscheme", ru = "whitespace";
function WA(t, e) {
  return t in e || (e[t] = []), e[t];
}
function Un(t, e, n) {
  e[Zu] && (e[Ti] = !0, e[hi] = !0), e[Xu] && (e[Ti] = !0, e[Yu] = !0), e[Ti] && (e[hi] = !0), e[Yu] && (e[hi] = !0), e[hi] && (e[Qu] = !0), e[L1] && (e[Qu] = !0);
  for (const r in e) {
    const i = WA(r, n);
    i.indexOf(t) < 0 && i.push(t);
  }
}
function qA(t, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function $e(t = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
$e.groups = {};
$e.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t) {
    const e = this, n = e.j[t];
    if (n)
      return n;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(t))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t, e = !1) {
    return e ? t in this.j : !!this.go(t);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t, e, n, r) {
    for (let i = 0; i < t.length; i++)
      this.tt(t[i], e, n, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t, e, n, r) {
    r = r || $e.groups;
    let i;
    return e && e.j ? i = e : (i = new $e(e), n && r && Un(e, n, r)), this.jr.push([t, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t, e, n, r) {
    let i = this;
    const o = t.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(t[s]);
    return i.tt(t[o - 1], e, n, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t, e, n, r) {
    r = r || $e.groups;
    const i = this;
    if (e && e.j)
      return i.j[t] = e, e;
    const o = e;
    let s, a = i.go(t);
    if (a ? (s = new $e(), qr(s.j, a.j), s.jr.push.apply(s.jr, a.jr), s.jd = a.jd, s.t = a.t) : s = new $e(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const u = qr(qA(s.t, r), n);
          Un(o, u, r);
        } else n && Un(o, n, r);
      s.t = o;
    }
    return i.j[t] = s, s;
  }
};
const W = (t, e, n, r, i) => t.ta(e, n, r, i), pe = (t, e, n, r, i) => t.tr(e, n, r, i), Uf = (t, e, n, r, i) => t.ts(e, n, r, i), T = (t, e, n, r, i) => t.tt(e, n, r, i), Bt = "WORD", el = "UWORD", V1 = "ASCIINUMERICAL", H1 = "ALPHANUMERICAL", Gi = "LOCALHOST", tl = "TLD", nl = "UTLD", Zo = "SCHEME", Sr = "SLASH_SCHEME", sc = "NUM", rl = "WS", ac = "NL", Mi = "OPENBRACE", Ei = "CLOSEBRACE", xs = "OPENBRACKET", ks = "CLOSEBRACKET", Cs = "OPENPAREN", As = "CLOSEPAREN", Ss = "OPENANGLEBRACKET", Ts = "CLOSEANGLEBRACKET", Ms = "FULLWIDTHLEFTPAREN", Es = "FULLWIDTHRIGHTPAREN", Os = "LEFTCORNERBRACKET", Ns = "RIGHTCORNERBRACKET", Ls = "LEFTWHITECORNERBRACKET", Vs = "RIGHTWHITECORNERBRACKET", Hs = "FULLWIDTHLESSTHAN", Rs = "FULLWIDTHGREATERTHAN", Ds = "AMPERSAND", uc = "APOSTROPHE", _s = "ASTERISK", fn = "AT", Ps = "BACKSLASH", Is = "BACKTICK", Bs = "CARET", mn = "COLON", lc = "COMMA", Fs = "DOLLAR", wt = "DOT", zs = "EQUALS", cc = "EXCLAMATION", Qe = "HYPHEN", Oi = "PERCENT", $s = "PIPE", js = "PLUS", Ws = "POUND", Ni = "QUERY", dc = "QUOTE", R1 = "FULLWIDTHMIDDLEDOT", fc = "SEMI", xt = "SLASH", Li = "TILDE", qs = "UNDERSCORE", D1 = "EMOJI", Us = "SYM";
var _1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: Bt,
  UWORD: el,
  ASCIINUMERICAL: V1,
  ALPHANUMERICAL: H1,
  LOCALHOST: Gi,
  TLD: tl,
  UTLD: nl,
  SCHEME: Zo,
  SLASH_SCHEME: Sr,
  NUM: sc,
  WS: rl,
  NL: ac,
  OPENBRACE: Mi,
  CLOSEBRACE: Ei,
  OPENBRACKET: xs,
  CLOSEBRACKET: ks,
  OPENPAREN: Cs,
  CLOSEPAREN: As,
  OPENANGLEBRACKET: Ss,
  CLOSEANGLEBRACKET: Ts,
  FULLWIDTHLEFTPAREN: Ms,
  FULLWIDTHRIGHTPAREN: Es,
  LEFTCORNERBRACKET: Os,
  RIGHTCORNERBRACKET: Ns,
  LEFTWHITECORNERBRACKET: Ls,
  RIGHTWHITECORNERBRACKET: Vs,
  FULLWIDTHLESSTHAN: Hs,
  FULLWIDTHGREATERTHAN: Rs,
  AMPERSAND: Ds,
  APOSTROPHE: uc,
  ASTERISK: _s,
  AT: fn,
  BACKSLASH: Ps,
  BACKTICK: Is,
  CARET: Bs,
  COLON: mn,
  COMMA: lc,
  DOLLAR: Fs,
  DOT: wt,
  EQUALS: zs,
  EXCLAMATION: cc,
  HYPHEN: Qe,
  PERCENT: Oi,
  PIPE: $s,
  PLUS: js,
  POUND: Ws,
  QUERY: Ni,
  QUOTE: dc,
  FULLWIDTHMIDDLEDOT: R1,
  SEMI: fc,
  SLASH: xt,
  TILDE: Li,
  UNDERSCORE: qs,
  EMOJI: D1,
  SYM: Us
});
const Pt = /[a-z]/, ci = new RegExp("\\p{L}", "u"), iu = new RegExp("\\p{Emoji}", "u"), It = /\d/, ou = /\s/, Kf = "\r", su = `
`, UA = "️", KA = "‍", au = "￼";
let Ro = null, Do = null;
function GA(t = []) {
  const e = {};
  $e.groups = e;
  const n = new $e();
  Ro == null && (Ro = Gf(FA)), Do == null && (Do = Gf(zA)), T(n, "'", uc), T(n, "{", Mi), T(n, "}", Ei), T(n, "[", xs), T(n, "]", ks), T(n, "(", Cs), T(n, ")", As), T(n, "<", Ss), T(n, ">", Ts), T(n, "（", Ms), T(n, "）", Es), T(n, "「", Os), T(n, "」", Ns), T(n, "『", Ls), T(n, "』", Vs), T(n, "＜", Hs), T(n, "＞", Rs), T(n, "&", Ds), T(n, "*", _s), T(n, "@", fn), T(n, "`", Is), T(n, "^", Bs), T(n, ":", mn), T(n, ",", lc), T(n, "$", Fs), T(n, ".", wt), T(n, "=", zs), T(n, "!", cc), T(n, "-", Qe), T(n, "%", Oi), T(n, "|", $s), T(n, "+", js), T(n, "#", Ws), T(n, "?", Ni), T(n, '"', dc), T(n, "/", xt), T(n, ";", fc), T(n, "~", Li), T(n, "_", qs), T(n, "\\", Ps), T(n, "・", R1);
  const r = pe(n, It, sc, {
    [Zu]: !0
  });
  pe(r, It, r);
  const i = pe(r, Pt, V1, {
    [Ti]: !0
  }), o = pe(r, ci, H1, {
    [hi]: !0
  }), s = pe(n, Pt, Bt, {
    [Xu]: !0
  });
  pe(s, It, i), pe(s, Pt, s), pe(i, It, i), pe(i, Pt, i);
  const a = pe(n, ci, el, {
    [Yu]: !0
  });
  pe(a, Pt), pe(a, It, o), pe(a, ci, a), pe(o, It, o), pe(o, Pt), pe(o, ci, o);
  const u = T(n, su, ac, {
    [ru]: !0
  }), l = T(n, Kf, rl, {
    [ru]: !0
  }), c = pe(n, ou, rl, {
    [ru]: !0
  });
  T(n, au, c), T(l, su, u), T(l, au, c), pe(l, ou, c), T(c, Kf), T(c, su), pe(c, ou, c), T(c, au, c);
  const d = pe(n, iu, D1, {
    [L1]: !0
  });
  T(d, "#"), pe(d, iu, d), T(d, UA, d);
  const f = T(d, KA);
  T(f, "#"), pe(f, iu, d);
  const p = [[Pt, s], [It, i]], h = [[Pt, null], [ci, a], [It, o]];
  for (let m = 0; m < Ro.length; m++)
    sn(n, Ro[m], tl, Bt, p);
  for (let m = 0; m < Do.length; m++)
    sn(n, Do[m], nl, el, h);
  Un(tl, {
    tld: !0,
    ascii: !0
  }, e), Un(nl, {
    utld: !0,
    alpha: !0
  }, e), sn(n, "file", Zo, Bt, p), sn(n, "mailto", Zo, Bt, p), sn(n, "http", Sr, Bt, p), sn(n, "https", Sr, Bt, p), sn(n, "ftp", Sr, Bt, p), sn(n, "ftps", Sr, Bt, p), Un(Zo, {
    scheme: !0,
    ascii: !0
  }, e), Un(Sr, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < t.length; m++) {
    const g = t[m][0], x = t[m][1] ? {
      [$A]: !0
    } : {
      [jA]: !0
    };
    g.indexOf("-") >= 0 ? x[Qu] = !0 : Pt.test(g) ? It.test(g) ? x[Ti] = !0 : x[Xu] = !0 : x[Zu] = !0, Uf(n, g, g, x);
  }
  return Uf(n, "localhost", Gi, {
    ascii: !0
  }), n.jd = new $e(Us), {
    start: n,
    tokens: qr({
      groups: e
    }, _1)
  };
}
function P1(t, e) {
  const n = JA(e.replace(/[A-Z]/g, (a) => a.toLowerCase())), r = n.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let a = t, u = null, l = 0, c = null, d = -1, f = -1;
    for (; s < r && (u = a.go(n[s])); )
      a = u, a.accepts() ? (d = 0, f = 0, c = a) : d >= 0 && (d += n[s].length, f++), l += n[s].length, o += n[s].length, s++;
    o -= d, s -= f, l -= d, i.push({
      t: c.t,
      // token type/name
      v: e.slice(o - l, o),
      // string value
      s: o - l,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function JA(t) {
  const e = [], n = t.length;
  let r = 0;
  for (; r < n; ) {
    let i = t.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? t[r] : t.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function sn(t, e, n, r, i) {
  let o;
  const s = e.length;
  for (let a = 0; a < s - 1; a++) {
    const u = e[a];
    t.j[u] ? o = t.j[u] : (o = new $e(r), o.jr = i.slice(), t.j[u] = o), t = o;
  }
  return o = new $e(n), o.jr = i.slice(), t.j[e[s - 1]] = o, o;
}
function Gf(t) {
  const e = [], n = [];
  let r = 0, i = "0123456789";
  for (; r < t.length; ) {
    let o = 0;
    for (; i.indexOf(t[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(n.join(""));
      for (let s = parseInt(t.substring(r, r + o), 10); s > 0; s--)
        n.pop();
      r += o;
    } else
      n.push(t[r]), r++;
  }
  return e;
}
const Ji = {
  defaultProtocol: "http",
  events: null,
  format: Jf,
  formatHref: Jf,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function pc(t, e = null) {
  let n = qr({}, Ji);
  t && (n = qr(n, t instanceof pc ? t.o : t));
  const r = n.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = i;
}
pc.prototype = {
  o: Ji,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t) {
    return t;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t, e, n) {
    const r = e != null;
    let i = this.o[t];
    return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : Ji[t], typeof i == "function" && r && (i = i(e, n))) : typeof i == "function" && r && (i = i(e, n.t, n)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, n) {
    let r = this.o[t];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  }
};
function Jf(t) {
  return t;
}
function I1(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
I1.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(t) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t) {
    const e = this.toString(), n = t.get("truncate", e, this), r = t.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t = Ji.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t) {
    const e = this, n = this.toHref(t.get("defaultProtocol")), r = t.get("formatHref", n, this), i = t.get("tagName", n, e), o = this.toFormattedString(t), s = {}, a = t.get("className", n, e), u = t.get("target", n, e), l = t.get("rel", n, e), c = t.getObj("attributes", n, e), d = t.getObj("events", n, e);
    return s.href = r, a && (s.class = a), u && (s.target = u), l && (s.rel = l), c && qr(s, c), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: d
    };
  }
};
function xa(t, e) {
  class n extends I1 {
    constructor(i, o) {
      super(i, o), this.t = t;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t, n;
}
const Zf = xa("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Xf = xa("text"), ZA = xa("nl"), _o = xa("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t = Ji.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== Gi && t[1].t === mn;
  }
}), Ye = (t) => new $e(t);
function XA({
  groups: t
}) {
  const e = t.domain.concat([Ds, _s, fn, Ps, Is, Bs, Fs, zs, Qe, sc, Oi, $s, js, Ws, xt, Us, Li, qs]), n = [mn, lc, wt, cc, Oi, Ni, dc, fc, Ss, Ts, Mi, Ei, ks, xs, Cs, As, Ms, Es, Os, Ns, Ls, Vs, Hs, Rs], r = [Ds, uc, _s, Ps, Is, Bs, Fs, zs, Qe, Mi, Ei, Oi, $s, js, Ws, Ni, xt, Us, Li, qs], i = Ye(), o = T(i, Li);
  W(o, r, o), W(o, t.domain, o);
  const s = Ye(), a = Ye(), u = Ye();
  W(i, t.domain, s), W(i, t.scheme, a), W(i, t.slashscheme, u), W(s, r, o), W(s, t.domain, s);
  const l = T(s, fn);
  T(o, fn, l), T(a, fn, l), T(u, fn, l);
  const c = T(o, wt);
  W(c, r, o), W(c, t.domain, o);
  const d = Ye();
  W(l, t.domain, d), W(d, t.domain, d);
  const f = T(d, wt);
  W(f, t.domain, d);
  const p = Ye(Zf);
  W(f, t.tld, p), W(f, t.utld, p), T(l, Gi, p);
  const h = T(d, Qe);
  T(h, Qe, h), W(h, t.domain, d), W(p, t.domain, d), T(p, wt, f), T(p, Qe, h);
  const m = T(p, mn);
  W(m, t.numeric, Zf);
  const g = T(s, Qe), b = T(s, wt);
  T(g, Qe, g), W(g, t.domain, s), W(b, r, o), W(b, t.domain, s);
  const x = Ye(_o);
  W(b, t.tld, x), W(b, t.utld, x), W(x, t.domain, s), W(x, r, o), T(x, wt, b), T(x, Qe, g), T(x, fn, l);
  const w = T(x, mn), y = Ye(_o);
  W(w, t.numeric, y);
  const k = Ye(_o), v = Ye();
  W(k, e, k), W(k, n, v), W(v, e, k), W(v, n, v), T(x, xt, k), T(y, xt, k);
  const E = T(a, mn), M = T(u, mn), O = T(M, xt), B = T(O, xt);
  W(a, t.domain, s), T(a, wt, b), T(a, Qe, g), W(u, t.domain, s), T(u, wt, b), T(u, Qe, g), W(E, t.domain, k), T(E, xt, k), T(E, Ni, k), W(B, t.domain, k), W(B, e, k), T(B, xt, k);
  const _ = [
    [Mi, Ei],
    // {}
    [xs, ks],
    // []
    [Cs, As],
    // ()
    [Ss, Ts],
    // <>
    [Ms, Es],
    // （）
    [Os, Ns],
    // 「」
    [Ls, Vs],
    // 『』
    [Hs, Rs]
    // ＜＞
  ];
  for (let U = 0; U < _.length; U++) {
    const [K, we] = _[U], ye = T(k, K);
    T(v, K, ye), T(ye, we, k);
    const ue = Ye(_o);
    W(ye, e, ue);
    const fe = Ye();
    W(ye, n), W(ue, e, ue), W(ue, n, fe), W(fe, e, ue), W(fe, n, fe), T(ue, we, k), T(fe, we, k);
  }
  return T(i, Gi, x), T(i, ac, ZA), {
    start: i,
    tokens: _1
  };
}
function YA(t, e, n) {
  let r = n.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let a = t, u = null, l = null, c = 0, d = null, f = -1;
    for (; i < r && !(u = a.go(n[i].t)); )
      s.push(n[i++]);
    for (; i < r && (l = u || a.go(n[i].t)); )
      u = null, a = l, a.accepts() ? (f = 0, d = a) : f >= 0 && f++, i++, c++;
    if (f < 0)
      i -= c, i < r && (s.push(n[i]), i++);
    else {
      s.length > 0 && (o.push(uu(Xf, e, s)), s = []), i -= f, c -= f;
      const p = d.t, h = n.slice(i - c, i);
      o.push(uu(p, e, h));
    }
  }
  return s.length > 0 && o.push(uu(Xf, e, s)), o;
}
function uu(t, e, n) {
  const r = n[0].s, i = n[n.length - 1].e, o = e.slice(r, i);
  return new t(o, n);
}
const QA = typeof console < "u" && console && console.warn || (() => {
}), eS = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ie = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function tS() {
  return $e.groups = {}, ie.scanner = null, ie.parser = null, ie.tokenQueue = [], ie.pluginQueue = [], ie.customSchemes = [], ie.initialized = !1, ie;
}
function Yf(t, e = !1) {
  if (ie.initialized && QA(`linkifyjs: already initialized - will not register custom scheme "${t}" ${eS}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ie.customSchemes.push([t, e]);
}
function nS() {
  ie.scanner = GA(ie.customSchemes);
  for (let t = 0; t < ie.tokenQueue.length; t++)
    ie.tokenQueue[t][1]({
      scanner: ie.scanner
    });
  ie.parser = XA(ie.scanner.tokens);
  for (let t = 0; t < ie.pluginQueue.length; t++)
    ie.pluginQueue[t][1]({
      scanner: ie.scanner,
      parser: ie.parser
    });
  return ie.initialized = !0, ie;
}
function hc(t) {
  return ie.initialized || nS(), YA(ie.parser.start, t, P1(ie.scanner.start, t));
}
hc.scan = P1;
function B1(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new pc(n), i = hc(t), o = [];
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    a.isLink && (!e || a.t === e) && r.check(a) && o.push(a.toFormattedObject(r));
  }
  return o;
}
function rS(t) {
  return t.length === 1 ? t[0].isLink : t.length === 3 && t[1].isLink ? ["()", "[]"].includes(t[0].value + t[2].value) : !1;
}
function iS(t) {
  return new se({
    key: new be("autolink"),
    appendTransaction: (e, n, r) => {
      const i = e.some((l) => l.docChanged) && !n.doc.eq(r.doc), o = e.some((l) => l.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, a = Uw(n.doc, [...e]);
      if (Qw(a).forEach(({ newRange: l }) => {
        const c = Gw(r.doc, l, (p) => p.isTextblock);
        let d, f;
        if (c.length > 1 ? (d = c[0], f = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ")) : c.length && r.doc.textBetween(l.from, l.to, " ", " ").endsWith(" ") && (d = c[0], f = r.doc.textBetween(d.pos, l.to, void 0, " ")), d && f) {
          const p = f.split(" ").filter((b) => b !== "");
          if (p.length <= 0)
            return !1;
          const h = p[p.length - 1], m = d.pos + f.lastIndexOf(h);
          if (!h)
            return !1;
          const g = hc(h).map((b) => b.toObject(t.defaultProtocol));
          if (!rS(g))
            return !1;
          g.filter((b) => b.isLink).map((b) => ({
            ...b,
            from: m + b.start + 1,
            to: m + b.end + 1
          })).filter((b) => r.schema.marks.code ? !r.doc.rangeHasMark(b.from, b.to, r.schema.marks.code) : !0).filter((b) => t.validate(b.value)).filter((b) => t.shouldAutoLink(b.value)).forEach((b) => {
            ql(b.from, b.to, r.doc).some((x) => x.mark.type === t.type) || s.addMark(b.from, b.to, t.type.create({
              href: b.href
            }));
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function oS(t) {
  return new se({
    key: new be("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var i, o;
        if (r.button !== 0 || !e.editable)
          return !1;
        let s = r.target;
        const a = [];
        for (; s.nodeName !== "DIV"; )
          a.push(s), s = s.parentNode;
        if (!a.find((f) => f.nodeName === "A"))
          return !1;
        const u = O0(e.state, t.type.name), l = r.target, c = (i = l == null ? void 0 : l.href) !== null && i !== void 0 ? i : u.href, d = (o = l == null ? void 0 : l.target) !== null && o !== void 0 ? o : u.target;
        return l && c ? (window.open(c, d), !0) : !1;
      }
    }
  });
}
function sS(t) {
  return new se({
    key: new be("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { state: i } = e, { selection: o } = i, { empty: s } = o;
        if (s)
          return !1;
        let a = "";
        r.content.forEach((l) => {
          a += l.textContent;
        });
        const u = B1(a, { defaultProtocol: t.defaultProtocol }).find((l) => l.isLink && l.value === a);
        return !a || !u ? !1 : t.editor.commands.setMark(t.type, {
          href: u.href
        });
      }
    }
  });
}
const aS = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function Bn(t, e) {
  const n = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && n.push(i);
  }), !t || t.replace(aS, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${n.join("|")}):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const uS = /* @__PURE__ */ Ue.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        Yf(t);
        return;
      }
      Yf(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    tS();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (t, e) => !!Bn(t, e.protocols),
      validate: (t) => !!t,
      shouldAutoLink: (t) => !!t
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(t) {
          return t.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (t) => {
          const e = t.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (n) => !!Bn(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!Bn(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", Y(this.options.HTMLAttributes, t), 0] : [
      "a",
      Y(this.options.HTMLAttributes, { ...t, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (t) => ({ chain: e }) => {
        const { href: n } = t;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!Bn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (t) => ({ chain: e }) => {
        const { href: n } = t;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!Bn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Mn({
        find: (t) => {
          const e = [];
          if (t) {
            const { protocols: n, defaultProtocol: r } = this.options, i = B1(t).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
              defaultValidate: (s) => !!Bn(s, n),
              protocols: n,
              defaultProtocol: r
            }));
            i.length && i.forEach((o) => e.push({
              text: o.value,
              data: {
                href: o.href
              },
              index: o.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (t) => {
          var e;
          return {
            href: (e = t.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const t = [], { protocols: e, defaultProtocol: n } = this.options;
    return this.options.autolink && t.push(iS({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (r) => this.options.isAllowedUri(r, {
        defaultValidate: (i) => !!Bn(i, e),
        protocols: e,
        defaultProtocol: n
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && t.push(oS({
      type: this.type
    })), this.options.linkOnPaste && t.push(sS({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), t;
  }
}), lS = { class: "headline" }, cS = /* @__PURE__ */ Q({
  __name: "LinkDialog",
  props: {
    value: { default: void 0 },
    target: { default: "_blank" },
    rel: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 },
    hrefRules: { default: "" }
  },
  setup(t) {
    const e = t, { t: n } = tn(), r = () => ({
      href: "",
      target: "_blank",
      rel: ""
    }), i = J(r()), o = J(), s = $(() => e.hrefRules ? Array.isArray(e.hrefRules) ? e.hrefRules : typeof e.hrefRules == "string" && e.hrefRules.startsWith("[") && e.hrefRules.endsWith("]") ? new Function(`return ${e.hrefRules}`)() : e.hrefRules : []), a = J(!1), u = $(() => {
      const { href: d, target: f, rel: p } = i.value;
      return d ? e.value === d && e.target === f && e.rel === p : !0;
    });
    async function l() {
      const { valid: d } = await o.value.validate();
      if (!d) return;
      const { href: f, target: p, rel: h } = i.value;
      f && e.editor.chain().focus().extendMarkRange("link").setLink({ href: f, target: p, rel: h }).run(), c();
    }
    function c() {
      a.value = !1, i.value = r(), setTimeout(() => {
        var d;
        return (d = e.destroy) == null ? void 0 : d.call(e);
      }, 300);
    }
    return Gt(a, (d) => {
      d && (console.log("props", e), i.value = {
        href: e.value,
        target: e.target,
        rel: e.rel
      });
    }), (d, f) => {
      const p = Qi, h = On, m = Gr, g = Ur, b = vm("vx-field"), x = Js, w = Yi, y = fl, k = dl, v = Kr, E = pl;
      return R(), j(E, {
        modelValue: a.value,
        "onUpdate:modelValue": f[4] || (f[4] = (M) => a.value = M),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": c
      }, {
        default: V(() => [
          L(v, null, {
            default: V(() => [
              L(g, {
                class: "px-6",
                density: "compact"
              }, {
                default: V(() => [
                  Zt("span", lS, Le(S(n)("editor.link.dialog.title")), 1),
                  L(p),
                  L(m, {
                    class: "mx-0",
                    icon: "",
                    onClick: c
                  }, {
                    default: V(() => [
                      L(h, {
                        icon: S(ce)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              L(k, {
                ref_key: "form",
                ref: o,
                onSubmit: f[3] || (f[3] = wm((M) => l(), ["prevent"]))
              }, {
                default: V(() => [
                  L(w, null, {
                    default: V(() => [
                      L(b, {
                        modelValue: i.value.href,
                        "onUpdate:modelValue": f[0] || (f[0] = (M) => i.value.href = M),
                        rules: s.value,
                        label: S(n)("editor.link.dialog.link"),
                        autofocus: ""
                      }, null, 8, ["modelValue", "rules", "label"]),
                      L(b, {
                        modelValue: i.value.rel,
                        "onUpdate:modelValue": f[1] || (f[1] = (M) => i.value.rel = M),
                        label: S(n)("editor.link.dialog.rel"),
                        "hide-details": ""
                      }, null, 8, ["modelValue", "label"]),
                      L(x, {
                        modelValue: i.value.target,
                        "onUpdate:modelValue": f[2] || (f[2] = (M) => i.value.target = M),
                        label: S(n)("editor.link.dialog.openInNewTab"),
                        color: "primary",
                        "false-value": "_self",
                        "true-value": "_blank",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "label"])
                    ]),
                    _: 1
                  }),
                  L(y, null, {
                    default: V(() => [
                      L(m, {
                        disabled: u.value,
                        type: "submit",
                        class: "ml-auto"
                      }, {
                        default: V(() => [
                          Jt(Le(S(n)("editor.link.dialog.button.apply")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), dS = /* @__PURE__ */ Q({
  __name: "LinkActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 },
    hrefRules: { default: "" }
  },
  setup(t) {
    const e = t, n = J({
      href: void 0,
      target: void 0,
      rel: void 0
    });
    function r() {
      const { href: i, target: o, rel: s } = e.editor.getAttributes("link");
      n.value = {
        href: i,
        target: o,
        rel: s
      };
    }
    return (i, o) => (R(), j(Z, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: i.color,
      "is-active": i.isActive,
      action: r
    }, {
      default: V(() => [
        L(oc, null, {
          default: V(() => [
            Tt(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value.href, hrefRules: e.hrefRules, ...n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), fM = /* @__PURE__ */ uS.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      openOnClick: !1,
      hrefRules: '[value => !/^http:\\/\\//.test(value) || "URL should not start with http://"]',
      dialogComponent: () => cS,
      button: ({ editor: e, extension: n, t: r }) => {
        const { dialogComponent: i, hrefRules: o } = n.options;
        return {
          component: dS,
          componentProps: {
            hrefRules: o,
            isActive: () => e.isActive("link") || !1,
            disabled: !e.can().setLink({ href: "" }),
            icon: "link",
            tooltip: r("editor.link.tooltip")
          },
          componentSlots: {
            dialog: i()
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    var t;
    return [
      ...((t = this.parent) == null ? void 0 : t.call(this)) || [],
      new se({
        props: {
          handleClick(e, n) {
            const { schema: r, doc: i, tr: o } = e.state, s = ma(i.resolve(n), r.marks.link);
            if (!s) return !1;
            const a = i.resolve(s.from), u = i.resolve(s.to), l = o.setSelection(new I(a, u));
            return e.dispatch(l), !0;
          }
        }
      })
    ];
  }
}), pM = /* @__PURE__ */ ne.create({
  name: "markdownTheme",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      markdownThemes: Ac,
      button: ({ editor: e, extension: n, t: r }) => {
        const { state: i } = Xs(), s = [...Ac, ...n.options.markdownThemes].map((a) => ({
          title: r(a.title),
          isActive: () => i.defaultMarkdownTheme === a.value,
          action: () => {
            i.defaultMarkdownTheme = a.value;
          },
          divider: a.divider ?? !1,
          default: a.default ?? !1
        }));
        return {
          component: oo,
          componentProps: {
            icon: "markdownTheme",
            tooltip: r("editor.markdownTheme.tooltip"),
            items: s
          }
        };
      }
    };
  }
}), fS = "listItem", Qf = "textStyle", ep = /^(\d+)\.\s$/, pS = /* @__PURE__ */ de.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: void 0,
        parseHTML: (t) => t.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, ...n } = t;
    return e === 1 ? ["ol", Y(this.options.HTMLAttributes, n), 0] : ["ol", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(fS, this.editor.getAttributes(Qf)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = Fr({
      find: ep,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = Fr({
      find: ep,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Qf) }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1],
      editor: this.editor
    })), [
      t
    ];
  }
}), hM = /* @__PURE__ */ pS.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleOrderedList().run(),
          isActive: () => e.isActive("orderedList") || !1,
          disabled: !e.can().toggleOrderedList(),
          icon: "orderedList",
          tooltip: n("editor.orderedlist.tooltip")
        }
      })
    };
  }
}), hS = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, mS = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, gS = /* @__PURE__ */ Ue.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      or({
        find: hS,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Mn({
        find: mS,
        type: this.type
      })
    ];
  }
}), mM = /* @__PURE__ */ gS.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleStrike().run(),
          isActive: () => e.isActive("strike") || !1,
          disabled: !e.can().toggleStrike(),
          icon: "strike",
          tooltip: n("editor.strike.tooltip")
        }
      })
    };
  }
}), bS = /* @__PURE__ */ Ue.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sub", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSubscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSubscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), yS = /* @__PURE__ */ Ue.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sup", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSuperscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
}), gM = /* @__PURE__ */ ne.create({
  name: "subAndSuperScript",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, extension: n, t: r }) => {
        const i = n.options.subscript, o = n.options.superscript, s = {
          component: Z,
          componentProps: {
            action: () => e.chain().focus().toggleSubscript().run(),
            isActive: () => e.isActive("subscript") || !1,
            disabled: !e.can().toggleSubscript(),
            icon: "subscript",
            tooltip: r("editor.subscript.tooltip")
          }
        }, a = {
          component: Z,
          componentProps: {
            action: () => e.chain().focus().toggleSuperscript().run(),
            isActive: () => e.isActive("superscript") || !1,
            disabled: !e.can().toggleSuperscript(),
            icon: "superscript",
            tooltip: r("editor.superscript.tooltip")
          }
        }, u = [];
        return i !== !1 && u.push(s), o !== !1 && u.push(a), u;
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(bS.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(yS.configure(this.options.superscript)), t;
  }
});
var il, ol;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  il = (e) => t.get(e), ol = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  il = (r) => {
    for (let i = 0; i < t.length; i += 2)
      if (t[i] == r)
        return t[i + 1];
  }, ol = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var me = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t)
        continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let a = 1; o < this.width && this.map[e + a] == n; a++)
        o++;
      for (let a = 1; s < this.height && this.map[e + this.width * a] == n; a++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t)
        return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(t, e, n) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (n < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: n,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(t), {
      left: s,
      right: a,
      top: u,
      bottom: l
    } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(i, u),
      right: Math.max(r, a),
      bottom: Math.max(o, l)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++)
      for (let i = t.left; i < t.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        n[s] || (n[s] = !0, !(i == t.left && i && this.map[o - 1] == s || r == t.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, n) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + n.child(r).nodeSize;
      if (r == t) {
        let s = e + t * this.width;
        const a = (t + 1) * this.width;
        for (; s < a && this.map[s] < i; )
          s++;
        return s == a ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return il(t) || ol(t, vS(t));
  }
};
function vS(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = wS(t), n = t.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let l = 0, c = e * n; l < c; l++)
    r[l] = 0;
  for (let l = 0, c = 0; l < n; l++) {
    const d = t.child(l);
    c++;
    for (let h = 0; ; h++) {
      for (; i < r.length && r[i] != 0; )
        i++;
      if (h == d.childCount)
        break;
      const m = d.child(h), { colspan: g, rowspan: b, colwidth: x } = m.attrs;
      for (let w = 0; w < b; w++) {
        if (w + l >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: c,
            n: b - w
          });
          break;
        }
        const y = i + w * e;
        for (let k = 0; k < g; k++) {
          r[y + k] == 0 ? r[y + k] = c : (o || (o = [])).push({
            type: "collision",
            row: l,
            pos: c,
            n: g - k
          });
          const v = x && x[k];
          if (v) {
            const E = (y + k) % e * 2, M = s[E];
            M == null || M != v && s[E + 1] == 1 ? (s[E] = v, s[E + 1] = 1) : M == v && s[E + 1]++;
          }
        }
      }
      i += g, c += m.nodeSize;
    }
    const f = (l + 1) * e;
    let p = 0;
    for (; i < f; )
      r[i++] == 0 && p++;
    p && (o || (o = [])).push({ type: "missing", row: l, n: p }), c++;
  }
  const a = new me(e, n, r, o);
  let u = !1;
  for (let l = 0; !u && l < s.length; l += 2)
    s[l] != null && s[l + 1] < n && (u = !0);
  return u && xS(a, s, t), a;
}
function wS(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const i = t.child(r);
    let o = 0;
    if (n)
      for (let s = 0; s < r; s++) {
        const a = t.child(s);
        for (let u = 0; u < a.childCount; u++) {
          const l = a.child(u);
          s + l.attrs.rowspan > r && (o += l.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const a = i.child(s);
      o += a.attrs.colspan, a.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function xS(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let i = 0; i < t.map.length; i++) {
    const o = t.map[i];
    if (r[o])
      continue;
    r[o] = !0;
    const s = n.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let a = null;
    const u = s.attrs;
    for (let l = 0; l < u.colspan; l++) {
      const c = (i + l) % t.width, d = e[c * 2];
      d != null && (!u.colwidth || u.colwidth[l] != d) && ((a || (a = kS(u)))[l] = d);
    }
    a && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: a
    });
  }
}
function kS(t) {
  if (t.colwidth)
    return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++)
    e.push(0);
  return e;
}
function _e(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var gn = new be("selectingCells");
function Qr(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function CS(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell")
      return t.node(e);
  }
  return null;
}
function mt(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function ka(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = Qr(e.$head) || AS(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function AS(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return t.doc.resolve(n - e.nodeSize);
  }
}
function sl(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function SS(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function mc(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function F1(t, e, n) {
  const r = t.node(-1), i = me.get(r), o = t.start(-1), s = i.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function ar(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function z1(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++)
      r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function TS(t, e, n) {
  const r = _e(e.type.schema).header_cell;
  for (let i = 0; i < t.height; i++)
    if (e.nodeAt(t.map[n + i * t.width]).type != r)
      return !1;
  return !0;
}
var te = class Ft extends F {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, n = e) {
    const r = e.node(-1), i = me.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      n.pos - o
    ), a = e.node(0), u = i.cellsInRect(s).filter((c) => c != n.pos - o);
    u.unshift(n.pos - o);
    const l = u.map((c) => {
      const d = r.nodeAt(c);
      if (!d)
        throw RangeError(`No cell with offset ${c} found`);
      const f = o + c + 1;
      return new Eh(
        a.resolve(f),
        a.resolve(f + d.content.size)
      );
    });
    super(l[0].$from, l[0].$to, l), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (sl(r) && sl(i) && mc(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? Ft.rowSelection(r, i) : o && this.isColSelection() ? Ft.colSelection(r, i) : new Ft(r, i);
    }
    return I.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = me.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), o = {}, s = [];
    for (let u = i.top; u < i.bottom; u++) {
      const l = [];
      for (let c = u * n.width + i.left, d = i.left; d < i.right; d++, c++) {
        const f = n.map[c];
        if (o[f])
          continue;
        o[f] = !0;
        const p = n.findCell(f);
        let h = e.nodeAt(f);
        if (!h)
          throw RangeError(`No cell with offset ${f} found`);
        const m = i.left - p.left, g = p.right - i.right;
        if (m > 0 || g > 0) {
          let b = h.attrs;
          if (m > 0 && (b = ar(b, 0, m)), g > 0 && (b = ar(
            b,
            b.colspan - g,
            g
          )), p.left < i.left) {
            if (h = h.type.createAndFill(b), !h)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(b)}`
              );
          } else
            h = h.type.create(b, h.content);
        }
        if (p.top < i.top || p.bottom > i.bottom) {
          const b = {
            ...h.attrs,
            rowspan: Math.min(p.bottom, i.bottom) - Math.max(p.top, i.top)
          };
          p.top < i.top ? h = h.type.createAndFill(b) : h = h.type.create(b, h.content);
        }
        l.push(h);
      }
      s.push(e.child(u).copy(A.from(l)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : s;
    return new N(A.from(a), 1, 1);
  }
  replace(e, n = N.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: a, $to: u } = i[s], l = e.mapping.slice(r);
      e.replace(
        l.map(a.pos),
        l.map(u.pos),
        s ? N.empty : n
      );
    }
    const o = F.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new N(A.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = me.get(n), i = this.$anchorCell.start(-1), o = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let s = 0; s < o.length; s++)
      e(n.nodeAt(o[s]), i + o[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0)
      return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, n = e) {
    const r = e.node(-1), i = me.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), u = e.node(0);
    return s.top <= a.top ? (s.top > 0 && (e = u.resolve(o + i.map[s.left])), a.bottom < i.height && (n = u.resolve(
      o + i.map[i.width * (i.height - 1) + a.right - 1]
    ))) : (a.top > 0 && (n = u.resolve(o + i.map[a.left])), s.bottom < i.height && (e = u.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new Ft(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = me.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0)
      return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, a = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, a) == n.width;
  }
  eq(e) {
    return e instanceof Ft && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, n = e) {
    const r = e.node(-1), i = me.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), u = e.node(0);
    return s.left <= a.left ? (s.left > 0 && (e = u.resolve(
      o + i.map[s.top * i.width]
    )), a.right < i.width && (n = u.resolve(
      o + i.map[i.width * (a.top + 1) - 1]
    ))) : (a.left > 0 && (n = u.resolve(o + i.map[a.top * i.width])), s.right < i.width && (e = u.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new Ft(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new Ft(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new Ft(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new MS(this.$anchorCell.pos, this.$headCell.pos);
  }
};
te.prototype.visible = !1;
F.jsonID("cell", te);
var MS = class $1 {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new $1(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && mc(n, r) ? new te(n, r) : F.near(r, 1);
  }
};
function ES(t) {
  if (!(t.selection instanceof te))
    return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      Ve.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), oe.create(t.doc, e);
}
function OS({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6)
    return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function NS({ $from: t, $to: e }) {
  let n, r;
  for (let i = t.depth; i > 0; i--) {
    const o = t.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      n = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function LS(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let o, s;
  if (r instanceof P && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = te.create(i, r.from);
    else if (s == "row") {
      const a = i.resolve(r.from + 1);
      o = te.rowSelection(a, a);
    } else if (!n) {
      const a = me.get(r.node), u = r.from + 1, l = u + a.map[a.width * a.height - 1];
      o = te.create(i, u + 1, l);
    }
  } else r instanceof I && OS(r) ? o = I.create(i, r.from) : r instanceof I && NS(r) && (o = I.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
var VS = new be("fix-tables");
function j1(t, e, n, r) {
  const i = t.childCount, o = e.childCount;
  e:
    for (let s = 0, a = 0; s < o; s++) {
      const u = e.child(s);
      for (let l = a, c = Math.min(i, s + 3); l < c; l++)
        if (t.child(l) == u) {
          a = l + 1, n += u.nodeSize;
          continue e;
        }
      r(u, n), a < i && t.child(a).sameMarkup(u) ? j1(t.child(a), u, n + 1, r) : u.nodesBetween(0, u.content.size, r, n + 1), n += u.nodeSize;
    }
}
function W1(t, e) {
  let n;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (n = HS(t, i, o, n));
  };
  return e ? e.doc != t.doc && j1(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function HS(t, e, n, r) {
  const i = me.get(e);
  if (!i.problems)
    return r;
  r || (r = t.tr);
  const o = [];
  for (let u = 0; u < i.height; u++)
    o.push(0);
  for (let u = 0; u < i.problems.length; u++) {
    const l = i.problems[u];
    if (l.type == "collision") {
      const c = e.nodeAt(l.pos);
      if (!c)
        continue;
      const d = c.attrs;
      for (let f = 0; f < d.rowspan; f++)
        o[l.row + f] += l.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + l.pos),
        null,
        ar(d, d.colspan - l.n, l.n)
      );
    } else if (l.type == "missing")
      o[l.row] += l.n;
    else if (l.type == "overlong_rowspan") {
      const c = e.nodeAt(l.pos);
      if (!c)
        continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + l.pos), null, {
        ...c.attrs,
        rowspan: c.attrs.rowspan - l.n
      });
    } else if (l.type == "colwidth mismatch") {
      const c = e.nodeAt(l.pos);
      if (!c)
        continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + l.pos), null, {
        ...c.attrs,
        colwidth: l.colwidth
      });
    }
  }
  let s, a;
  for (let u = 0; u < o.length; u++)
    o[u] && (s == null && (s = u), a = u);
  for (let u = 0, l = n + 1; u < i.height; u++) {
    const c = e.child(u), d = l + c.nodeSize, f = o[u];
    if (f > 0) {
      let p = "cell";
      c.firstChild && (p = c.firstChild.type.spec.tableRole);
      const h = [];
      for (let g = 0; g < f; g++) {
        const b = _e(t.schema)[p].createAndFill();
        b && h.push(b);
      }
      const m = (u == 0 || s == u - 1) && a == u ? l + 1 : d - 1;
      r.insert(r.mapping.map(m), h);
    }
    l = d;
  }
  return r.setMeta(VS, { fixTables: !0 });
}
function Lt(t) {
  const e = t.selection, n = ka(t), r = n.node(-1), i = n.start(-1), o = me.get(r);
  return { ...e instanceof te ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(n.pos - i), tableStart: i, map: o, table: r };
}
function q1(t, { map: e, tableStart: n, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  TS(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const a = s * e.width + i;
    if (i > 0 && i < e.width && e.map[a - 1] == e.map[a]) {
      const u = e.map[a], l = r.nodeAt(u);
      t.setNodeMarkup(
        t.mapping.map(n + u),
        null,
        z1(l.attrs, i - e.colCount(u))
      ), s += l.attrs.rowspan - 1;
    } else {
      const u = o == null ? _e(r.type.schema).cell : r.nodeAt(e.map[a + o]).type, l = e.positionAt(s, i, r);
      t.insert(t.mapping.map(n + l), u.createAndFill());
    }
  }
  return t;
}
function RS(t, e) {
  if (!mt(t))
    return !1;
  if (e) {
    const n = Lt(t);
    e(q1(t.tr, n, n.left));
  }
  return !0;
}
function DS(t, e) {
  if (!mt(t))
    return !1;
  if (e) {
    const n = Lt(t);
    e(q1(t.tr, n, n.right));
  }
  return !0;
}
function _S(t, { map: e, table: n, tableStart: r }, i) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const a = s * e.width + i, u = e.map[a], l = n.nodeAt(u), c = l.attrs;
    if (i > 0 && e.map[a - 1] == u || i < e.width - 1 && e.map[a + 1] == u)
      t.setNodeMarkup(
        t.mapping.slice(o).map(r + u),
        null,
        ar(c, i - e.colCount(u))
      );
    else {
      const d = t.mapping.slice(o).map(r + u);
      t.delete(d, d + l.nodeSize);
    }
    s += c.rowspan;
  }
}
function PS(t, e) {
  if (!mt(t))
    return !1;
  if (e) {
    const n = Lt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width)
      return !1;
    for (let i = n.right - 1; _S(r, n, i), i != n.left; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = me.get(o);
    }
    e(r);
  }
  return !0;
}
function IS(t, e, n) {
  var r;
  const i = _e(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++)
    if (((r = e.nodeAt(t.map[o + n * t.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function U1(t, { map: e, tableStart: n, table: r }, i) {
  var o;
  let s = n;
  for (let l = 0; l < i; l++)
    s += r.child(l).nodeSize;
  const a = [];
  let u = i > 0 ? -1 : 0;
  IS(e, r, i + u) && (u = i == 0 || i == e.height ? null : 0);
  for (let l = 0, c = e.width * i; l < e.width; l++, c++)
    if (i > 0 && i < e.height && e.map[c] == e.map[c - e.width]) {
      const d = e.map[c], f = r.nodeAt(d).attrs;
      t.setNodeMarkup(n + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), l += f.colspan - 1;
    } else {
      const d = u == null ? _e(r.type.schema).cell : (o = r.nodeAt(e.map[c + u * e.width])) == null ? void 0 : o.type, f = d == null ? void 0 : d.createAndFill();
      f && a.push(f);
    }
  return t.insert(s, _e(r.type.schema).row.create(null, a)), t;
}
function BS(t, e) {
  if (!mt(t))
    return !1;
  if (e) {
    const n = Lt(t);
    e(U1(t.tr, n, n.top));
  }
  return !0;
}
function FS(t, e) {
  if (!mt(t))
    return !1;
  if (e) {
    const n = Lt(t);
    e(U1(t.tr, n, n.bottom));
  }
  return !0;
}
function zS(t, { map: e, table: n, tableStart: r }, i) {
  let o = 0;
  for (let l = 0; l < i; l++)
    o += n.child(l).nodeSize;
  const s = o + n.child(i).nodeSize, a = t.mapping.maps.length;
  t.delete(o + r, s + r);
  const u = /* @__PURE__ */ new Set();
  for (let l = 0, c = i * e.width; l < e.width; l++, c++) {
    const d = e.map[c];
    if (!u.has(d)) {
      if (u.add(d), i > 0 && d == e.map[c - e.width]) {
        const f = n.nodeAt(d).attrs;
        t.setNodeMarkup(t.mapping.slice(a).map(d + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), l += f.colspan - 1;
      } else if (i < e.height && d == e.map[c + e.width]) {
        const f = n.nodeAt(d), p = f.attrs, h = f.type.create(
          { ...p, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), m = e.positionAt(i + 1, l, n);
        t.insert(t.mapping.slice(a).map(r + m), h), l += p.colspan - 1;
      }
    }
  }
}
function $S(t, e) {
  if (!mt(t))
    return !1;
  if (e) {
    const n = Lt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height)
      return !1;
    for (let i = n.bottom - 1; zS(r, n, i), i != n.top; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = me.get(n.table);
    }
    e(r);
  }
  return !0;
}
function tp(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function jS({ width: t, height: e, map: n }, r) {
  let i = r.top * t + r.left, o = i, s = (r.bottom - 1) * t + r.left, a = i + (r.right - r.left - 1);
  for (let u = r.top; u < r.bottom; u++) {
    if (r.left > 0 && n[o] == n[o - 1] || r.right < t && n[a] == n[a + 1])
      return !0;
    o += t, a += t;
  }
  for (let u = r.left; u < r.right; u++) {
    if (r.top > 0 && n[i] == n[i - t] || r.bottom < e && n[s] == n[s + t])
      return !0;
    i++, s++;
  }
  return !1;
}
function np(t, e) {
  const n = t.selection;
  if (!(n instanceof te) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = Lt(t), { map: i } = r;
  if (jS(i, r))
    return !1;
  if (e) {
    const o = t.tr, s = {};
    let a = A.empty, u, l;
    for (let c = r.top; c < r.bottom; c++)
      for (let d = r.left; d < r.right; d++) {
        const f = i.map[c * i.width + d], p = r.table.nodeAt(f);
        if (!(s[f] || !p))
          if (s[f] = !0, u == null)
            u = f, l = p;
          else {
            tp(p) || (a = a.append(p.content));
            const h = o.mapping.map(f + r.tableStart);
            o.delete(h, h + p.nodeSize);
          }
      }
    if (u == null || l == null)
      return !0;
    if (o.setNodeMarkup(u + r.tableStart, null, {
      ...z1(
        l.attrs,
        l.attrs.colspan,
        r.right - r.left - l.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), a.size) {
      const c = u + 1 + l.content.size, d = tp(l) ? u + 1 : c;
      o.replaceWith(d + r.tableStart, c + r.tableStart, a);
    }
    o.setSelection(
      new te(o.doc.resolve(u + r.tableStart))
    ), e(o);
  }
  return !0;
}
function rp(t, e) {
  const n = _e(t.schema);
  return WS(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function WS(t) {
  return (e, n) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof te) {
      if (i.$anchorCell.pos != i.$headCell.pos)
        return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = CS(i.$from), !o)
        return !1;
      s = (r = Qr(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (n) {
      let a = o.attrs;
      const u = [], l = a.colwidth;
      a.rowspan > 1 && (a = { ...a, rowspan: 1 }), a.colspan > 1 && (a = { ...a, colspan: 1 });
      const c = Lt(e), d = e.tr;
      for (let p = 0; p < c.right - c.left; p++)
        u.push(
          l ? {
            ...a,
            colwidth: l && l[p] ? [l[p]] : null
          } : a
        );
      let f;
      for (let p = c.top; p < c.bottom; p++) {
        let h = c.map.positionAt(p, c.left, c.table);
        p == c.top && (h += o.nodeSize);
        for (let m = c.left, g = 0; m < c.right; m++, g++)
          m == c.left && p == c.top || d.insert(
            f = d.mapping.map(h + c.tableStart, 1),
            t({ node: o, row: p, col: m }).createAndFill(u[g])
          );
      }
      d.setNodeMarkup(
        s,
        t({ node: o, row: c.top, col: c.left }),
        u[0]
      ), i instanceof te && d.setSelection(
        new te(
          d.doc.resolve(i.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), n(d);
    }
    return !0;
  };
}
function qS(t, e) {
  return function(n, r) {
    if (!mt(n))
      return !1;
    const i = ka(n);
    if (i.nodeAfter.attrs[t] === e)
      return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof te ? n.selection.forEachCell((s, a) => {
        s.attrs[t] !== e && o.setNodeMarkup(a, null, {
          ...s.attrs,
          [t]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [t]: e
      }), r(o);
    }
    return !0;
  };
}
function US(t) {
  return function(e, n) {
    if (!mt(e))
      return !1;
    if (n) {
      const r = _e(e.schema), i = Lt(e), o = e.tr, s = i.map.cellsInRect(
        t == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : t == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), a = s.map((u) => i.table.nodeAt(u));
      for (let u = 0; u < s.length; u++)
        a[u].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[u],
          r.cell,
          a[u].attrs
        );
      if (o.steps.length == 0)
        for (let u = 0; u < s.length; u++)
          o.setNodeMarkup(
            i.tableStart + s[u],
            r.header_cell,
            a[u].attrs
          );
      n(o);
    }
    return !0;
  };
}
function ip(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function Zi(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? US(t) : function(n, r) {
    if (!mt(n))
      return !1;
    if (r) {
      const i = _e(n.schema), o = Lt(n), s = n.tr, a = ip("row", o, i), u = ip(
        "column",
        o,
        i
      ), c = (t === "column" ? a : t === "row" ? u : !1) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: c,
        right: 1,
        bottom: o.map.height
      } : t == "row" ? {
        left: c,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, f = t == "column" ? u ? i.cell : i.header_cell : t == "row" ? a ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(d).forEach((p) => {
        const h = p + o.tableStart, m = s.doc.nodeAt(h);
        m && s.setNodeMarkup(h, f, m.attrs);
      }), r(s);
    }
    return !0;
  };
}
Zi("row", {
  useDeprecatedLogic: !0
});
Zi("column", {
  useDeprecatedLogic: !0
});
var KS = Zi("cell", {
  useDeprecatedLogic: !0
});
function GS(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n)
      return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, i = t.before(); r >= 0; r--) {
      const o = t.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), i = t.after(); r < n.childCount; r++) {
      const o = n.child(r);
      if (o.childCount)
        return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function op(t) {
  return function(e, n) {
    if (!mt(e))
      return !1;
    const r = GS(ka(e), t);
    if (r == null)
      return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(
        e.tr.setSelection(I.between(i, SS(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function JS(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(r), n.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function Po(t, e) {
  const n = t.selection;
  if (!(n instanceof te))
    return !1;
  if (e) {
    const r = t.tr, i = _e(t.schema).cell.createAndFill().content;
    n.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new N(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function ZS(t) {
  if (!t.size)
    return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, a = [];
  if (o == "row")
    for (let u = 0; u < e.childCount; u++) {
      let l = e.child(u).content;
      const c = u ? 0 : Math.max(0, n - 1), d = u < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (c || d) && (l = al(
        _e(s).row,
        new N(l, c, d)
      ).content), a.push(l);
    }
  else if (o == "cell" || o == "header_cell")
    a.push(
      n || r ? al(
        _e(s).row,
        new N(e, n, r)
      ).content : e
    );
  else
    return null;
  return XS(s, a);
}
function XS(t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: a, colspan: u } = o.child(s).attrs;
      for (let l = i; l < i + a; l++)
        n[l] = (n[l] || 0) + u;
    }
  }
  let r = 0;
  for (let i = 0; i < n.length; i++)
    r = Math.max(r, n[i]);
  for (let i = 0; i < n.length; i++)
    if (i >= e.length && e.push(A.empty), n[i] < r) {
      const o = _e(t).cell.createAndFill(), s = [];
      for (let a = n[i]; a < r; a++)
        s.push(o);
      e[i] = e[i].append(A.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function al(t, e) {
  const n = t.createAndFill();
  return new Tl(n).replace(0, n.content.size, e).doc;
}
function YS({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const o = [], s = [];
    for (let a = 0; a < n.length; a++) {
      const u = n[a], l = [];
      for (let c = o[a] || 0, d = 0; c < r; d++) {
        let f = u.child(d % u.childCount);
        c + f.attrs.colspan > r && (f = f.type.createChecked(
          ar(
            f.attrs,
            f.attrs.colspan,
            c + f.attrs.colspan - r
          ),
          f.content
        )), l.push(f), c += f.attrs.colspan;
        for (let p = 1; p < f.attrs.rowspan; p++)
          o[a + p] = (o[a + p] || 0) + f.attrs.colspan;
      }
      s.push(A.from(l));
    }
    n = s, t = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, a = 0; s < i; s++, a++) {
      const u = [], l = n[a % e];
      for (let c = 0; c < l.childCount; c++) {
        let d = l.child(c);
        s + d.attrs.rowspan > i && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, i - d.attrs.rowspan)
          },
          d.content
        )), u.push(d);
      }
      o.push(A.from(u));
    }
    n = o, e = i;
  }
  return { width: t, height: e, rows: n };
}
function QS(t, e, n, r, i, o, s) {
  const a = t.doc.type.schema, u = _e(a);
  let l, c;
  if (i > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const p = n.child(d);
      f += p.nodeSize;
      const h = [];
      let m;
      p.lastChild == null || p.lastChild.type == u.cell ? m = l || (l = u.cell.createAndFill()) : m = c || (c = u.header_cell.createAndFill());
      for (let g = e.width; g < i; g++)
        h.push(m);
      t.insert(t.mapping.slice(s).map(f - 1 + r), h);
    }
  if (o > e.height) {
    const d = [];
    for (let h = 0, m = (e.height - 1) * e.width; h < Math.max(e.width, i); h++) {
      const g = h >= e.width ? !1 : n.nodeAt(e.map[m + h]).type == u.header_cell;
      d.push(
        g ? c || (c = u.header_cell.createAndFill()) : l || (l = u.cell.createAndFill())
      );
    }
    const f = u.row.create(null, A.from(d)), p = [];
    for (let h = e.height; h < o; h++)
      p.push(f);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), p);
  }
  return !!(l || c);
}
function sp(t, e, n, r, i, o, s, a) {
  if (s == 0 || s == e.height)
    return !1;
  let u = !1;
  for (let l = i; l < o; l++) {
    const c = s * e.width + l, d = e.map[c];
    if (e.map[c - e.width] == d) {
      u = !0;
      const f = n.nodeAt(d), { top: p, left: h } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(a).map(d + r), null, {
        ...f.attrs,
        rowspan: s - p
      }), t.insert(
        t.mapping.slice(a).map(e.positionAt(s, h, n)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: p + f.attrs.rowspan - s
        })
      ), l += f.attrs.colspan - 1;
    }
  }
  return u;
}
function ap(t, e, n, r, i, o, s, a) {
  if (s == 0 || s == e.width)
    return !1;
  let u = !1;
  for (let l = i; l < o; l++) {
    const c = l * e.width + s, d = e.map[c];
    if (e.map[c - 1] == d) {
      u = !0;
      const f = n.nodeAt(d), p = e.colCount(d), h = t.mapping.slice(a).map(d + r);
      t.setNodeMarkup(
        h,
        null,
        ar(
          f.attrs,
          s - p,
          f.attrs.colspan - (s - p)
        )
      ), t.insert(
        h + f.nodeSize,
        f.type.createAndFill(
          ar(f.attrs, 0, s - p)
        )
      ), l += f.attrs.rowspan - 1;
    }
  }
  return u;
}
function up(t, e, n, r, i) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o)
    throw new Error("No table found");
  let s = me.get(o);
  const { top: a, left: u } = r, l = u + i.width, c = a + i.height, d = t.tr;
  let f = 0;
  function p() {
    if (o = n ? d.doc.nodeAt(n - 1) : d.doc, !o)
      throw new Error("No table found");
    s = me.get(o), f = d.mapping.maps.length;
  }
  QS(d, s, o, n, l, c, f) && p(), sp(d, s, o, n, u, l, a, f) && p(), sp(d, s, o, n, u, l, c, f) && p(), ap(d, s, o, n, a, c, u, f) && p(), ap(d, s, o, n, a, c, l, f) && p();
  for (let h = a; h < c; h++) {
    const m = s.positionAt(h, u, o), g = s.positionAt(h, l, o);
    d.replace(
      d.mapping.slice(f).map(m + n),
      d.mapping.slice(f).map(g + n),
      new N(i.rows[h - a], 0, 0)
    );
  }
  p(), d.setSelection(
    new te(
      d.doc.resolve(n + s.positionAt(a, u, o)),
      d.doc.resolve(n + s.positionAt(c - 1, l - 1, o))
    )
  ), e(d);
}
var eT = _l({
  ArrowLeft: Io("horiz", -1),
  ArrowRight: Io("horiz", 1),
  ArrowUp: Io("vert", -1),
  ArrowDown: Io("vert", 1),
  "Shift-ArrowLeft": Bo("horiz", -1),
  "Shift-ArrowRight": Bo("horiz", 1),
  "Shift-ArrowUp": Bo("vert", -1),
  "Shift-ArrowDown": Bo("vert", 1),
  Backspace: Po,
  "Mod-Backspace": Po,
  Delete: Po,
  "Mod-Delete": Po
});
function Xo(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Io(t, e) {
  return (n, r, i) => {
    if (!i)
      return !1;
    const o = n.selection;
    if (o instanceof te)
      return Xo(
        n,
        r,
        F.near(o.$headCell, e)
      );
    if (t != "horiz" && !o.empty)
      return !1;
    const s = K1(i, t, e);
    if (s == null)
      return !1;
    if (t == "horiz")
      return Xo(
        n,
        r,
        F.near(n.doc.resolve(o.head + e), e)
      );
    {
      const a = n.doc.resolve(s), u = F1(a, t, e);
      let l;
      return u ? l = F.near(u, 1) : e < 0 ? l = F.near(n.doc.resolve(a.before(-1)), -1) : l = F.near(n.doc.resolve(a.after(-1)), 1), Xo(n, r, l);
    }
  };
}
function Bo(t, e) {
  return (n, r, i) => {
    if (!i)
      return !1;
    const o = n.selection;
    let s;
    if (o instanceof te)
      s = o;
    else {
      const u = K1(i, t, e);
      if (u == null)
        return !1;
      s = new te(n.doc.resolve(u));
    }
    const a = F1(s.$headCell, t, e);
    return a ? Xo(
      n,
      r,
      new te(s.$anchorCell, a)
    ) : !1;
  };
}
function tT(t, e) {
  const n = t.state.doc, r = Qr(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new te(r))), !0) : !1;
}
function nT(t, e, n) {
  if (!mt(t.state))
    return !1;
  let r = ZS(n);
  const i = t.state.selection;
  if (i instanceof te) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        A.from(
          al(_e(t.state.schema).cell, n)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), a = me.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = YS(r, a.right - a.left, a.bottom - a.top), up(t.state, t.dispatch, s, a, r), !0;
  } else if (r) {
    const o = ka(t.state), s = o.start(-1);
    return up(
      t.state,
      t.dispatch,
      s,
      me.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function rT(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey)
    return;
  const r = lp(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof te)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = Qr(t.state.selection.$anchor)) != null && ((n = lu(t, e)) == null ? void 0 : n.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(u, l) {
    let c = lu(t, l);
    const d = gn.getState(t.state) == null;
    if (!c || !mc(u, c))
      if (d)
        c = u;
      else
        return;
    const f = new te(u, c);
    if (d || !t.state.selection.eq(f)) {
      const p = t.state.tr.setSelection(f);
      d && p.setMeta(gn, u.pos), t.dispatch(p);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", a), gn.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(gn, -1));
  }
  function a(u) {
    const l = u, c = gn.getState(t.state);
    let d;
    if (c != null)
      d = t.state.doc.resolve(c);
    else if (lp(t, l.target) != r && (d = lu(t, e), !d))
      return s();
    d && o(d, l);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", a);
}
function K1(t, e, n) {
  if (!(t.state.selection instanceof I))
    return null;
  const { $head: r } = t.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : o.childCount))
      return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const a = r.before(i), u = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(u) ? a : null;
    }
  }
  return null;
}
function lp(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function lu(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? Qr(t.state.doc.resolve(n.pos)) : null;
}
var iT = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ul(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, ul(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function ul(t, e, n, r, i, o) {
  var s;
  let a = 0, u = !0, l = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let d = 0, f = 0; d < c.childCount; d++) {
      const { colspan: p, colwidth: h } = c.child(d).attrs;
      for (let m = 0; m < p; m++, f++) {
        const g = i == f ? o : h && h[m], b = g ? g + "px" : "";
        if (a += g || r, g || (u = !1), l)
          l.style.width != b && (l.style.width = b), l = l.nextSibling;
        else {
          const x = document.createElement("col");
          x.style.width = b, e.appendChild(x);
        }
      }
    }
    for (; l; ) {
      const d = l.nextSibling;
      (s = l.parentNode) == null || s.removeChild(l), l = d;
    }
    u ? (n.style.width = a + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = a + "px");
  }
}
var Je = new be(
  "tableColumnResizing"
);
function oT({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = iT,
  lastColumnResizable: i = !0
} = {}) {
  const o = new se({
    key: Je,
    state: {
      init(s, a) {
        var u, l;
        const c = (l = (u = o.spec) == null ? void 0 : u.props) == null ? void 0 : l.nodeViews, d = _e(a.schema).table.name;
        return r && c && (c[d] = (f, p) => new r(f, n, p)), new sT(-1, !1);
      },
      apply(s, a) {
        return a.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const a = Je.getState(s);
        return a && a.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, a) => {
          aT(s, a, t, i);
        },
        mouseleave: (s) => {
          uT(s);
        },
        mousedown: (s, a) => {
          lT(s, a, e, n);
        }
      },
      decorations: (s) => {
        const a = Je.getState(s);
        if (a && a.activeHandle > -1)
          return hT(s, a.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var sT = class Yo {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Je);
    if (r && r.setHandle != null)
      return new Yo(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new Yo(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return sl(e.doc.resolve(i)) || (i = -1), new Yo(i, n.dragging);
    }
    return n;
  }
};
function aT(t, e, n, r) {
  const i = Je.getState(t.state);
  if (i && !i.dragging) {
    const o = dT(e.target);
    let s = -1;
    if (o) {
      const { left: a, right: u } = o.getBoundingClientRect();
      e.clientX - a <= n ? s = cp(t, e, "left", n) : u - e.clientX <= n && (s = cp(t, e, "right", n));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const a = t.state.doc.resolve(s), u = a.node(-1), l = me.get(u), c = a.start(-1);
        if (l.colCount(a.pos - c) + a.nodeAfter.attrs.colspan - 1 == l.width - 1)
          return;
      }
      G1(t, s);
    }
  }
}
function uT(t) {
  const e = Je.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && G1(t, -1);
}
function lT(t, e, n, r) {
  var i;
  const o = (i = t.dom.ownerDocument.defaultView) != null ? i : window, s = Je.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const a = t.state.doc.nodeAt(s.activeHandle), u = cT(t, s.activeHandle, a.attrs);
  t.dispatch(
    t.state.tr.setMeta(Je, {
      setDragging: { startX: e.clientX, startWidth: u }
    })
  );
  function l(d) {
    o.removeEventListener("mouseup", l), o.removeEventListener("mousemove", c);
    const f = Je.getState(t.state);
    f != null && f.dragging && (fT(
      t,
      f.activeHandle,
      dp(f.dragging, d, n)
    ), t.dispatch(
      t.state.tr.setMeta(Je, { setDragging: null })
    ));
  }
  function c(d) {
    if (!d.which)
      return l(d);
    const f = Je.getState(t.state);
    if (f && f.dragging) {
      const p = dp(f.dragging, d, n);
      fp(
        t,
        f.activeHandle,
        p,
        r
      );
    }
  }
  return fp(
    t,
    s.activeHandle,
    u,
    r
  ), o.addEventListener("mouseup", l), o.addEventListener("mousemove", c), e.preventDefault(), !0;
}
function cT(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i)
    return i;
  const o = t.domAtPos(e);
  let a = o.node.childNodes[o.offset].offsetWidth, u = n;
  if (r)
    for (let l = 0; l < n; l++)
      r[l] && (a -= r[l], u--);
  return a / u;
}
function dT(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function cp(t, e, n, r) {
  const i = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o)
    return -1;
  const { pos: s } = o, a = Qr(t.state.doc.resolve(s));
  if (!a)
    return -1;
  if (n == "right")
    return a.pos;
  const u = me.get(a.node(-1)), l = a.start(-1), c = u.map.indexOf(a.pos - l);
  return c % u.width == 0 ? -1 : l + u.map[c - 1];
}
function dp(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function G1(t, e) {
  t.dispatch(
    t.state.tr.setMeta(Je, { setHandle: e })
  );
}
function fT(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), o = me.get(i), s = r.start(-1), a = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, u = t.state.tr;
  for (let l = 0; l < o.height; l++) {
    const c = l * o.width + a;
    if (l && o.map[c] == o.map[c - o.width])
      continue;
    const d = o.map[c], f = i.nodeAt(d).attrs, p = f.colspan == 1 ? 0 : a - o.colCount(d);
    if (f.colwidth && f.colwidth[p] == n)
      continue;
    const h = f.colwidth ? f.colwidth.slice() : pT(f.colspan);
    h[p] = n, u.setNodeMarkup(s + d, null, { ...f, colwidth: h });
  }
  u.docChanged && t.dispatch(u);
}
function fp(t, e, n, r) {
  const i = t.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), a = me.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let u = t.domAtPos(i.start(-1)).node;
  for (; u && u.nodeName != "TABLE"; )
    u = u.parentNode;
  u && ul(
    o,
    u.firstChild,
    u,
    r,
    a,
    n
  );
}
function pT(t) {
  return Array(t).fill(0);
}
function hT(t, e) {
  var n;
  const r = [], i = t.doc.resolve(e), o = i.node(-1);
  if (!o)
    return oe.empty;
  const s = me.get(o), a = i.start(-1), u = s.colCount(i.pos - a) + i.nodeAfter.attrs.colspan - 1;
  for (let l = 0; l < s.height; l++) {
    const c = u + l * s.width;
    if ((u == s.width - 1 || s.map[c] != s.map[c + 1]) && (l == 0 || s.map[c] != s.map[c - s.width])) {
      const d = s.map[c], f = a + d + o.nodeAt(d).nodeSize - 1, p = document.createElement("div");
      p.className = "column-resize-handle", (n = Je.getState(t)) != null && n.dragging && r.push(
        Ve.node(
          a + d,
          a + d + o.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(Ve.widget(f, p));
    }
  }
  return oe.create(t.doc, r);
}
function mT({
  allowTableNodeSelection: t = !1
} = {}) {
  return new se({
    key: gn,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(gn);
        if (r != null)
          return r == -1 ? null : r;
        if (n == null || !e.docChanged)
          return n;
        const { deleted: i, pos: o } = e.mapping.mapResult(n);
        return i ? null : o;
      }
    },
    props: {
      decorations: ES,
      handleDOMEvents: {
        mousedown: rT
      },
      createSelectionBetween(e) {
        return gn.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: tT,
      handleKeyDown: eT,
      handlePaste: nT
    },
    appendTransaction(e, n, r) {
      return LS(
        r,
        W1(r, n),
        t
      );
    }
  });
}
function ll(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function pp(t, e, n, r, i, o) {
  var s;
  let a = 0, u = !0, l = e.firstChild;
  const c = t.firstChild;
  if (c !== null)
    for (let d = 0, f = 0; d < c.childCount; d += 1) {
      const { colspan: p, colwidth: h } = c.child(d).attrs;
      for (let m = 0; m < p; m += 1, f += 1) {
        const g = i === f ? o : h && h[m], b = g ? `${g}px` : "";
        if (a += g || r, g || (u = !1), l) {
          if (l.style.width !== b) {
            const [x, w] = ll(r, g);
            l.style.setProperty(x, w);
          }
          l = l.nextSibling;
        } else {
          const x = document.createElement("col"), [w, y] = ll(r, g);
          x.style.setProperty(w, y), e.appendChild(x);
        }
      }
    }
  for (; l; ) {
    const d = l.nextSibling;
    (s = l.parentNode) === null || s === void 0 || s.removeChild(l), l = d;
  }
  u ? (n.style.width = `${a}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${a}px`);
}
class gT {
  constructor(e, n) {
    this.node = e, this.cellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), pp(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, pp(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function bT(t, e, n, r) {
  let i = 0, o = !0;
  const s = [], a = t.firstChild;
  if (!a)
    return {};
  for (let d = 0, f = 0; d < a.childCount; d += 1) {
    const { colspan: p, colwidth: h } = a.child(d).attrs;
    for (let m = 0; m < p; m += 1, f += 1) {
      const g = n === f ? r : h && h[m];
      i += g || e, g || (o = !1);
      const [b, x] = ll(e, g);
      s.push([
        "col",
        { style: `${b}: ${x}` }
      ]);
    }
  }
  const u = o ? `${i}px` : "", l = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: u, tableMinWidth: l };
}
function hp(t, e) {
  return t.createAndFill();
}
function yT(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function vT(t, e, n, r, i) {
  const o = yT(t), s = [], a = [];
  for (let l = 0; l < n; l += 1) {
    const c = hp(o.cell);
    if (c && a.push(c), r) {
      const d = hp(o.header_cell);
      d && s.push(d);
    }
  }
  const u = [];
  for (let l = 0; l < e; l += 1)
    u.push(o.row.createChecked(null, r && l === 0 ? s : a));
  return o.table.createChecked(null, u);
}
function wT(t) {
  return t instanceof te;
}
const Fo = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!wT(e))
    return !1;
  let n = 0;
  const r = M0(e.ranges[0].$from, (o) => o.type.name === "table");
  return r == null || r.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, xT = /* @__PURE__ */ de.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: gT,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = bT(t, this.options.cellMinWidth);
    return [
      "table",
      Y(this.options.HTMLAttributes, e, {
        style: r ? `width: ${r}` : `min-width: ${i}`
      }),
      n,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = vT(o.schema, t, e, n);
        if (i) {
          const a = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(I.near(r.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => RS(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => DS(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => PS(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => BS(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => FS(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => $S(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => JS(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => np(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => rp(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Zi("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Zi("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => KS(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => np(t, e) ? !0 : rp(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => qS(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => op(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => op(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && W1(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = te.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: Fo,
      "Mod-Backspace": Fo,
      Delete: Fo,
      "Mod-Delete": Fo
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        oT({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      mT({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: q(H(t, "tableRole", e))
    };
  }
}), kT = /* @__PURE__ */ de.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", Y(this.options.HTMLAttributes, t), 0];
  }
}), CT = /* @__PURE__ */ de.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", Y(this.options.HTMLAttributes, t), 0];
  }
}), AT = /* @__PURE__ */ de.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", Y(this.options.HTMLAttributes, t), 0];
  }
}), ST = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, TT = /CrOS/, MT = /android|ipad|playbook|silk/i;
function mp(t = {}) {
  let e = t.ua || typeof navigator < "u" && navigator.userAgent;
  return e && typeof e == "object" && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string" ? !1 : !!(ST.test(e) && !TT.test(e) || t.tablet && MT.test(e) || t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.includes("Macintosh") && e.includes("Safari"));
}
const ET = ["onMouseover", "onMousedown"], OT = /* @__PURE__ */ Q({
  __name: "CreateTablePopover",
  emits: ["create-table"],
  setup(t, { emit: e }) {
    const n = e, { t: r } = tn(), i = J(!1), o = J(!0), s = Rr({
      rows: mp() ? vo : yo,
      cols: mp() ? vo : yo
    }), a = Rr({
      rows: wo,
      cols: wo
    });
    function u(d, f) {
      d === s.rows && (s.rows = Math.min(d + 1, vo)), f === s.cols && (s.cols = Math.min(f + 1, vo)), a.rows = d, a.cols = f;
    }
    function l(d, f) {
      n("create-table", { rows: d, cols: f, withHeaderRow: S(o) }), c();
    }
    function c() {
      i.value = !1, o.value = !0, s.rows = yo, s.cols = yo, a.rows = wo, a.cols = wo;
    }
    return (d, f) => {
      const p = Js, h = Yi, m = dm, g = Kr, b = Gs;
      return R(), j(b, {
        modelValue: i.value,
        "onUpdate:modelValue": f[1] || (f[1] = (x) => i.value = x),
        location: "end bottom",
        "open-on-click": "",
        "open-on-hover": "",
        "close-on-content-click": !1,
        activator: "parent"
      }, {
        default: V(() => [
          L(g, {
            density: "compact",
            class: "table-grid-size-editor"
          }, {
            default: V(() => [
              L(h, { class: "pa-2 pb-0" }, {
                default: V(() => [
                  L(p, {
                    modelValue: o.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (x) => o.value = x),
                    density: "compact",
                    "hide-details": "",
                    label: S(r)("editor.table.menu.insert_table.with_header_row")
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              L(h, { class: "d-flex flex-column flex-wrap justify-space-between pa-2" }, {
                default: V(() => [
                  (R(!0), ge(De, null, ut(s.rows, (x) => (R(), ge("div", {
                    key: "r" + x,
                    class: "d-flex"
                  }, [
                    (R(!0), ge(De, null, ut(s.cols, (w) => (R(), ge("div", {
                      key: "c" + w,
                      class: At([{
                        "table-grid-size-editor__cell--selected": w <= a.cols && x <= a.rows
                      }, "pa-1"]),
                      onMouseover: (y) => u(x, w),
                      onMousedown: (y) => l(x, w)
                    }, f[2] || (f[2] = [
                      Zt("div", { class: "table-grid-size-editor__cell__inner" }, null, -1)
                    ]), 42, ET))), 128))
                  ]))), 128))
                ]),
                _: 1
              }),
              L(m, { class: "pt-0 pb-2" }, {
                default: V(() => [
                  Jt(Le(a.rows) + " x " + Le(a.cols), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), NT = /* @__PURE__ */ Q({
  __name: "TableMenu",
  props: {
    editor: {},
    activator: { default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = tn(), r = J(!1), i = $(() => {
      const a = !e.editor.isActive("table");
      return [
        {
          type: "item",
          key: "insert-table",
          title: S(n)("editor.table.menu.insert_table"),
          icon: ce("tablePlus")
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "add-column-before",
          title: S(n)("editor.table.menu.add_column_before"),
          icon: ce("tableColumnPlusBefore"),
          disabled: a
        },
        {
          type: "item",
          key: "add-column-after",
          title: S(n)("editor.table.menu.add_column_after"),
          icon: ce("tableColumnPlusAfter"),
          disabled: a
        },
        {
          type: "item",
          key: "delete-column",
          title: S(n)("editor.table.menu.delete_column"),
          icon: ce("tableColumnRemove"),
          disabled: a
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "add-row-before",
          title: S(n)("editor.table.menu.add_row_before"),
          icon: ce("tableRowPlusBefore"),
          disabled: a
        },
        {
          type: "item",
          key: "add-row-after",
          title: S(n)("editor.table.menu.add_row_after"),
          icon: ce("tableRowPlusAfter"),
          disabled: a
        },
        {
          type: "item",
          key: "delete-row",
          title: S(n)("editor.table.menu.delete_row"),
          icon: ce("tableRowRemove"),
          disabled: a
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "merge-or-split-cells",
          title: S(n)("editor.table.menu.merge_or_split_cells"),
          icon: ce("tableMergeCells"),
          disabled: a
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "delete-table",
          title: S(n)("editor.table.menu.delete_table"),
          icon: ce("tableRemove"),
          disabled: a
        }
      ];
    });
    function o(a, u) {
      var d;
      if (!a) return;
      const { editor: l } = e, c = {
        "insert-table": () => l.chain().focus().insertTable({ ...u }).run(),
        "add-column-before": () => l.chain().focus().addColumnBefore().run(),
        "add-column-after": () => l.chain().focus().addColumnAfter().run(),
        "delete-column": () => l.chain().focus().deleteColumn().run(),
        "add-row-before": () => l.chain().focus().addRowBefore().run(),
        "add-row-after": () => l.chain().focus().addRowAfter().run(),
        "delete-row": () => l.chain().focus().deleteRow().run(),
        "merge-or-split-cells": () => l.chain().focus().mergeOrSplit().run(),
        "delete-table": () => l.chain().focus().deleteTable().run()
      };
      (d = c[a]) == null || d.call(c);
    }
    function s(a) {
      o("insert-table", a), r.value = !1;
    }
    return (a, u) => {
      const l = On, c = yp, d = vp, f = Xi, p = cl, h = Gs;
      return R(), j(h, {
        modelValue: r.value,
        "onUpdate:modelValue": u[0] || (u[0] = (m) => r.value = m),
        activator: "parent"
      }, {
        default: V(() => [
          L(p, { density: "compact" }, {
            default: V(() => [
              (R(!0), ge(De, null, ut(i.value, (m, g) => (R(), ge(De, null, [
                m.key === "insert-table" ? (R(), j(d, {
                  key: g,
                  disabled: m.disabled
                }, {
                  prepend: V(() => [
                    L(l, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: V(() => [
                    L(c, null, {
                      default: V(() => [
                        Jt(Le(m.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    m.key === "insert-table" ? (R(), j(OT, {
                      key: g,
                      onCreateTable: s
                    })) : rt("", !0)
                  ]),
                  _: 2
                }, 1032, ["disabled"])) : m.type === "item" ? (R(), j(d, {
                  key: "item-" + g,
                  disabled: m.disabled,
                  onClick: (b) => o(m.key)
                }, {
                  prepend: V(() => [
                    L(l, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: V(() => [
                    L(c, null, {
                      default: V(() => [
                        Jt(Le(m.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : (R(), j(f, {
                  key: "divider-" + g
                }))
              ], 64))), 256))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), LT = /* @__PURE__ */ Q({
  __name: "TableActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    return (e, n) => (R(), j(Z, {
      icon: e.icon,
      tooltip: e.tooltip,
      disabled: e.disabled,
      color: e.color,
      action: e.action,
      "is-active": e.isActive
    }, {
      default: V(() => [
        L(NT, {
          editor: e.editor,
          activator: "parent"
        }, null, 8, ["editor"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "action", "is-active"]));
  }
}), yM = /* @__PURE__ */ xT.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "table-wrapper"
      },
      button: ({ editor: e, t: n }) => ({
        component: LT,
        componentProps: {
          isActive: () => e.isActive("table") || !1,
          disabled: !e.can().insertTable(),
          icon: "table",
          tooltip: n("editor.table.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [
      AT.configure(this.options.tableRow),
      CT.configure(this.options.tableHeader),
      kT.configure(this.options.tableCell)
    ];
  }
}), VT = /^\s*(\[([( |x])?\])\s$/, HT = /* @__PURE__ */ de.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList"
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => {
          const e = t.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      Y(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: e, getPos: n, editor: r }) => {
      const i = document.createElement("li"), o = document.createElement("label"), s = document.createElement("span"), a = document.createElement("input"), u = document.createElement("div");
      return o.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (l) => l.preventDefault()), a.addEventListener("change", (l) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          a.checked = !a.checked;
          return;
        }
        const { checked: c } = l.target;
        r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: d }) => {
          const f = n();
          if (typeof f != "number")
            return !1;
          const p = d.doc.nodeAt(f);
          return d.setNodeMarkup(f, void 0, {
            ...p == null ? void 0 : p.attrs,
            checked: c
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, c) || (a.checked = !a.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([l, c]) => {
        i.setAttribute(l, c);
      }), i.dataset.checked = t.attrs.checked, a.checked = t.attrs.checked, o.append(a, s), i.append(o, u), Object.entries(e).forEach(([l, c]) => {
        i.setAttribute(l, c);
      }), {
        dom: i,
        contentDOM: u,
        update: (l) => l.type !== this.type ? !1 : (i.dataset.checked = l.attrs.checked, a.checked = l.attrs.checked, !0)
      };
    };
  },
  addInputRules() {
    return [
      Fr({
        find: VT,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), RT = /* @__PURE__ */ de.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", Y(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
}), vM = /* @__PURE__ */ RT.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleTaskList().run(),
          isActive: () => e.isActive("taskList") || !1,
          disabled: !e.can().toggleTaskList(),
          icon: "taskList",
          tooltip: n("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [HT.configure(this.options.taskItem)];
  }
}), DT = /* @__PURE__ */ ne.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => {
              const e = t.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (t) => t.textAlign ? { style: `text-align: ${t.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.map((n) => e.updateAttributes(n, { textAlign: t })).every((n) => n) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.map((e) => t.resetAttributes(e, "textAlign")).every((e) => e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), wM = /* @__PURE__ */ DT.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["heading", "paragraph", "image"],
      button: ({ editor: e, extension: n, t: r }) => {
        var a;
        const o = (((a = n.options) == null ? void 0 : a.alignments) || []).map((u) => ({
          title: r(`editor.textalign.${u}.tooltip`),
          icon: u,
          isActive: () => e.isActive({ textAlign: u }) || !1,
          action: () => e.chain().focus().setTextAlign(u).run(),
          disabled: !e.can().setTextAlign(u)
        })), s = o.filter((u) => u.disabled).length === o.length;
        return {
          component: oo,
          componentProps: {
            icon: "center",
            tooltip: r("editor.textalign.tooltip"),
            disabled: s,
            items: o
          }
        };
      }
    };
  }
}), _T = /* @__PURE__ */ Ue.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["u", Y(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: t }) => t.setMark(this.name),
      toggleUnderline: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetUnderline: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), xM = /* @__PURE__ */ _T.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: Z,
        componentProps: {
          action: () => e.chain().focus().toggleUnderline().run(),
          isActive: () => e.isActive("underline") || !1,
          disabled: !e.can().toggleUnderline(),
          icon: "underline",
          tooltip: n("editor.underline.tooltip")
        }
      })
    };
  }
}), PT = { class: "headline" }, IT = /* @__PURE__ */ Q({
  __name: "VideoDialog",
  props: {
    value: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = tn(), r = J(""), i = J(!1), o = $(() => e.value === r.value || !S(r));
    function s() {
      S(r) && e.editor.chain().focus().setVideo({ src: r.value }).run(), a();
    }
    function a() {
      i.value = !1, r.value = "", setTimeout(() => {
        var u;
        return (u = e.destroy) == null ? void 0 : u.call(e);
      }, 300);
    }
    return ur(() => {
      e.value && (r.value = e.value);
    }), (u, l) => {
      const c = Qi, d = On, f = Gr, p = Ur, h = Ks, m = Yi, g = fl, b = Kr, x = pl;
      return R(), j(x, {
        modelValue: i.value,
        "onUpdate:modelValue": l[1] || (l[1] = (w) => i.value = w),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": a
      }, {
        default: V(() => [
          L(b, null, {
            default: V(() => [
              L(p, {
                class: "px-6",
                density: "compact"
              }, {
                default: V(() => [
                  Zt("span", PT, Le(S(n)("editor.video.dialog.title")), 1),
                  L(c),
                  L(f, {
                    class: "mx-0",
                    icon: "",
                    onClick: a
                  }, {
                    default: V(() => [
                      L(d, {
                        icon: S(ce)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              L(m, null, {
                default: V(() => [
                  L(h, {
                    modelValue: r.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (w) => r.value = w),
                    label: S(n)("editor.video.dialog.link"),
                    "hide-details": "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              L(g, null, {
                default: V(() => [
                  L(f, {
                    disabled: o.value,
                    onClick: s
                  }, {
                    default: V(() => [
                      Jt(Le(S(n)("editor.video.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), BT = /* @__PURE__ */ Q({
  __name: "VideoActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = J(void 0);
    function r() {
      const { src: i } = e.editor.getAttributes("video");
      n.value = i;
    }
    return (i, o) => (R(), j(Z, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: i.color,
      "is-active": i.isActive,
      action: r
    }, {
      default: V(() => [
        L(oc, null, {
          default: V(() => [
            Tt(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
});
function FT(t) {
  return t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www\.bilibili\.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/i, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const kM = /* @__PURE__ */ de.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: t }) => ({
          src: t ? FT(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: vi(t)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { width: e = "100%" } = t ?? {}, n = {
      ...t,
      width: "100%",
      height: "100%"
    }, r = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${e};`, i = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, a = ["div", { style: r }, ["div", { style: i }], ["iframe", n]];
    return ["div", {
      ...this.options.HTMLAttributes,
      "data-video": ""
    }, a];
  },
  addCommands() {
    return {
      setVideo: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      }),
      updateVideo: (t) => ({ commands: e }) => e.updateAttributes(this.name, t)
    };
  },
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      frameborder: !1,
      width: ts["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      dialogComponent: () => IT,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: r } = e.options;
        return {
          component: BT,
          componentProps: {
            isActive: () => t.isActive("video") || !1,
            icon: "video",
            tooltip: n("editor.video.tooltip")
          },
          componentSlots: {
            dialog: r()
          },
          disabled: !t.can().setVideo({})
        };
      }
    };
  }
}), CM = (t) => (n) => {
  const { lang: r, markdownTheme: i, components: o = {}, extensions: s } = t || {};
  r && wu.setLang(r), Object.keys(o).forEach((a) => n.component(a, o[a])), Tm({
    defaultLang: r,
    defaultMarkdownTheme: i,
    extensions: s
  });
};
export {
  Z as ActionButton,
  GT as BaseKit,
  JT as Blockquote,
  ZT as Bold,
  XT as BulletList,
  YT as Clear,
  QT as Code,
  eM as CodeBlock,
  tM as Color,
  xr as DEFAULT_LOCALE,
  Ry as DEFAULT_LOCALE_MESSAGE,
  nM as FontFamily,
  rM as FontSize,
  iM as Fullscreen,
  oM as Heading,
  sM as Highlight,
  aM as History,
  uM as HorizontalRule,
  lM as Image,
  cM as Indent,
  dM as Italic,
  fM as Link,
  Dy as Locale,
  pM as MarkdownTheme,
  hM as OrderedList,
  mM as Strike,
  gM as SubAndSuperScript,
  yM as Table,
  vM as TaskList,
  wM as TextAlign,
  xM as Underline,
  kM as Video,
  UT as VuetifyTiptap,
  KT as VuetifyViewer,
  CM as createVuetifyProTipTap,
  Oy as de,
  z8 as defaultBubbleList,
  Ny as en,
  Ly as it,
  wu as locale,
  Vy as nl,
  Xs as useContext,
  tn as useLocale,
  Hy as zhHans
};
