import { VCard as Mi, VCardText as Mr, VToolbar as Ai, VDivider as Ar, VSpacer as Tr, VThemeProvider as Zf, VInput as P1, VCardTitle as _1, VBtn as Ti, VIcon as bn, VTooltip as Yf, VMenu as ps, VList as La, VSheet as z1, VTextField as Oa, VListItem as Qf, VListItemTitle as eh, VForm as ms, VFileInput as $1, VCheckbox as gs, VDialog as Ha, VTabs as B1, VTab as F1, VWindow as W1, VWindowItem as U1, VCardActions as Ra, VCardSubtitle as j1 } from "vuetify/components";
import { markRaw as th, defineComponent as ne, h as qn, ref as Y, getCurrentInstance as ys, watchEffect as Gn, nextTick as nh, onBeforeUnmount as Va, customRef as K1, provide as lo, reactive as rr, render as zc, unref as A, computed as j, watch as Bt, getCurrentScope as q1, onScopeDispose as G1, inject as J1, onMounted as Na, withDirectives as ih, openBlock as N, createBlock as F, withCtx as E, createVNode as H, createElementBlock as ue, Fragment as Ne, renderList as et, resolveDynamicComponent as or, mergeProps as ci, createSlots as Ia, vShow as rh, createCommentVNode as We, useAttrs as X1, onUnmounted as Z1, Teleport as Y1, normalizeClass as mt, createTextVNode as Ft, toDisplayString as Le, renderSlot as gt, normalizeProps as $c, guardReactiveProps as Bc, normalizeStyle as di, createElementVNode as Be, resolveComponent as oh, withModifiers as sh } from "vue";
import { useTheme as Da } from "vuetify";
var Fc = Object.defineProperty, Q1 = (t, e) => {
  let n = {};
  for (var i in t) Fc(n, i, {
    get: t[i],
    enumerable: !0
  });
  return Fc(n, Symbol.toStringTag, { value: "Module" }), n;
};
function Ae(t) {
  this.content = t;
}
Ae.prototype = {
  constructor: Ae,
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
    var i = n && n != t ? this.remove(n) : this, r = i.find(t), o = i.content.slice();
    return r == -1 ? o.push(n || t, e) : (o[r + 1] = e, n && (o[r] = n)), new Ae(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Ae(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Ae([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Ae(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var i = this.remove(e), r = i.content.slice(), o = i.find(t);
    return r.splice(o == -1 ? r.length : o, 0, e, n), new Ae(r);
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
    return t = Ae.from(t), t.size ? new Ae(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Ae.from(t), t.size ? new Ae(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Ae.from(t);
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
Ae.from = function(t) {
  if (t instanceof Ae) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new Ae(e);
};
function lh(t, e, n) {
  for (let i = 0; ; i++) {
    if (i == t.childCount || i == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let r = t.child(i), o = e.child(i);
    if (r == o) {
      n += r.nodeSize;
      continue;
    }
    if (!r.sameMarkup(o))
      return n;
    if (r.isText && r.text != o.text) {
      let s = r.text, l = o.text, a = 0;
      for (; s[a] == l[a]; a++)
        n++;
      return a && a < s.length && a < l.length && dh(s.charCodeAt(a - 1)) && ch(s.charCodeAt(a)) && n--, n;
    }
    if (r.content.size || o.content.size) {
      let s = lh(r.content, o.content, n + 1);
      if (s != null)
        return s;
    }
    n += r.nodeSize;
  }
}
function ah(t, e, n, i) {
  for (let r = t.childCount, o = e.childCount; ; ) {
    if (r == 0 || o == 0)
      return r == o ? null : { a: n, b: i };
    let s = t.child(--r), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      n -= a, i -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: n, b: i };
    if (s.isText && s.text != l.text) {
      let c = s.text, d = l.text, u = c.length, f = d.length;
      for (; u > 0 && f > 0 && c[u - 1] == d[f - 1]; )
        u--, f--, n--, i--;
      return u && f && u < c.length && dh(c.charCodeAt(u - 1)) && ch(c.charCodeAt(u)) && (n++, i++), { a: n, b: i };
    }
    if (s.content.size || l.content.size) {
      let c = ah(s.content, l.content, n - 1, i - 1);
      if (c)
        return c;
    }
    n -= a, i -= a;
  }
}
function ch(t) {
  return t >= 56320 && t < 57344;
}
function dh(t) {
  return t >= 55296 && t < 56320;
}
class C {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let i = 0; i < e.length; i++)
        this.size += e[i].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, i, r = 0, o) {
    for (let s = 0, l = 0; l < n; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && i(a, r + l, o || null, s) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, n - d), i, r + d);
      }
      l = c;
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
  textBetween(e, n, i, r) {
    let o = "", s = !0;
    return this.nodesBetween(e, n, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, n - a) : l.isLeaf ? r ? typeof r == "function" ? r(l) : r : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && i && (s ? s = !1 : o += i), o += c;
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
    let n = this.lastChild, i = e.firstChild, r = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(i) && (r[r.length - 1] = n.withText(n.text + i.text), o = 1); o < e.content.length; o++)
      r.push(e.content[o]);
    return new C(r, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let i = [], r = 0;
    if (n > e)
      for (let o = 0, s = 0; s < n; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, n - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, n - s - 1))), i.push(l), r += l.nodeSize), s = a;
      }
    return new C(i, r);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? C.empty : e == 0 && n == this.content.length ? this : new C(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let i = this.content[e];
    if (i == n)
      return this;
    let r = this.content.slice(), o = this.size + n.nodeSize - i.nodeSize;
    return r[e] = n, new C(r, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new C([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new C(this.content.concat(e), this.size + e.nodeSize);
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
    for (let n = 0, i = 0; n < this.content.length; n++) {
      let r = this.content[n];
      e(r, i, n), i += r.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return lh(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, i = e.size) {
    return ah(this, e, n, i);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Ir(0, e);
    if (e == this.size)
      return Ir(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, i = 0; ; n++) {
      let r = this.child(n), o = i + r.nodeSize;
      if (o >= e)
        return o == e ? Ir(n + 1, o) : Ir(n, i);
      i = o;
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
      return C.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return C.fromArray(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return C.empty;
    let n, i = 0;
    for (let r = 0; r < e.length; r++) {
      let o = e[r];
      i += o.nodeSize, r && o.isText && e[r - 1].sameMarkup(o) ? (n || (n = e.slice(0, r)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new C(n || e, i);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return C.empty;
    if (e instanceof C)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new C([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
C.empty = new C([], 0);
const Xs = { index: 0, offset: 0 };
function Ir(t, e) {
  return Xs.index = t, Xs.offset = e, Xs;
}
function bo(t, e) {
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
    for (let i = 0; i < t.length; i++)
      if (!bo(t[i], e[i]))
        return !1;
  } else {
    for (let i in t)
      if (!(i in e) || !bo(t[i], e[i]))
        return !1;
    for (let i in e)
      if (!(i in t))
        return !1;
  }
  return !0;
}
let oe = class Hl {
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
    let n, i = !1;
    for (let r = 0; r < e.length; r++) {
      let o = e[r];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, r));
      else {
        if (o.type.excludes(this.type))
          return e;
        !i && o.type.rank > this.type.rank && (n || (n = e.slice(0, r)), n.push(this), i = !0), n && n.push(o);
      }
    }
    return n || (n = e.slice()), i || n.push(this), n;
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
    return this == e || this.type == e.type && bo(this.attrs, e.attrs);
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
    let i = e.marks[n.type];
    if (!i)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    return i.create(n.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let i = 0; i < e.length; i++)
      if (!e[i].eq(n[i]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Hl.none;
    if (e instanceof Hl)
      return [e];
    let n = e.slice();
    return n.sort((i, r) => i.type.rank - r.type.rank), n;
  }
};
oe.none = [];
class sr extends Error {
}
class L {
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
  constructor(e, n, i) {
    this.content = e, this.openStart = n, this.openEnd = i;
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
    let i = fh(this.content, e + this.openStart, n, this.openStart + 1, this.openEnd + 1);
    return i && new L(i, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new L(uh(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
      return L.empty;
    let i = n.openStart || 0, r = n.openEnd || 0;
    if (typeof i != "number" || typeof r != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new L(C.fromJSON(e, n.content), i, r);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let i = 0, r = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      i++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      r++;
    return new L(e, i, r);
  }
}
L.empty = new L(C.empty, 0, 0);
function uh(t, e, n) {
  let { index: i, offset: r } = t.findIndex(e), o = t.maybeChild(i), { index: s, offset: l } = t.findIndex(n);
  if (r == e || o.isText) {
    if (l != n && !t.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (i != s)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(i, o.copy(uh(o.content, e - r - 1, n - r - 1)));
}
function fh(t, e, n, i, r, o) {
  let { index: s, offset: l } = t.findIndex(e), a = t.maybeChild(s);
  if (l == e || a.isText)
    return o && i <= 0 && r <= 0 && !o.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let c = fh(a.content, e - l - 1, n, s == 0 ? i - 1 : 0, s == t.childCount - 1 ? r - 1 : 0, a);
  return c && t.replaceChild(s, a.copy(c));
}
function e0(t, e, n) {
  if (n.openStart > t.depth)
    throw new sr("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new sr("Inconsistent open depths");
  return hh(t, e, n, 0);
}
function hh(t, e, n, i) {
  let r = t.index(i), o = t.node(i);
  if (r == e.index(i) && i < t.depth - n.openStart) {
    let s = hh(t, e, n, i + 1);
    return o.copy(o.content.replaceChild(r, s));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == i && e.depth == i) {
      let s = t.parent, l = s.content;
      return Vn(s, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = t0(n, t);
      return Vn(o, mh(t, s, l, e, i));
    }
  else return Vn(o, vo(t, e, i));
}
function ph(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new sr("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Rl(t, e, n) {
  let i = t.node(n);
  return ph(i, e.node(n)), i;
}
function Rn(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Fi(t, e, n, i) {
  let r = (e || t).node(n), o = 0, s = e ? e.index(n) : r.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (Rn(t.nodeAfter, i), o++));
  for (let l = o; l < s; l++)
    Rn(r.child(l), i);
  e && e.depth == n && e.textOffset && Rn(e.nodeBefore, i);
}
function Vn(t, e) {
  if (!t.type.validContent(e))
    throw new sr("Invalid content for node " + t.type.name);
  return t.copy(e);
}
function mh(t, e, n, i, r) {
  let o = t.depth > r && Rl(t, e, r + 1), s = i.depth > r && Rl(n, i, r + 1), l = [];
  return Fi(null, t, r, l), o && s && e.index(r) == n.index(r) ? (ph(o, s), Rn(Vn(o, mh(t, e, n, i, r + 1)), l)) : (o && Rn(Vn(o, vo(t, e, r + 1)), l), Fi(e, n, r, l), s && Rn(Vn(s, vo(n, i, r + 1)), l)), Fi(i, null, r, l), new C(l);
}
function vo(t, e, n) {
  let i = [];
  if (Fi(null, t, n, i), t.depth > n) {
    let r = Rl(t, e, n + 1);
    Rn(Vn(r, vo(t, e, n + 1)), i);
  }
  return Fi(e, null, n, i), new C(i);
}
function t0(t, e) {
  let n = e.depth - t.openStart, r = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    r = e.node(o).copy(C.from(r));
  return {
    start: r.resolveNoCache(t.openStart + n),
    end: r.resolveNoCache(r.content.size - t.openEnd - n)
  };
}
class lr {
  /**
  @internal
  */
  constructor(e, n, i) {
    this.pos = e, this.path = n, this.parentOffset = i, this.depth = n.length / 3 - 1;
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
    let i = this.pos - this.path[this.path.length - 1], r = e.child(n);
    return i ? e.child(n).cut(i) : r;
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
    let i = this.path[n * 3], r = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      r += i.child(o).nodeSize;
    return r;
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
      return oe.none;
    if (this.textOffset)
      return e.child(n).marks;
    let i = e.maybeChild(n - 1), r = e.maybeChild(n);
    if (!i) {
      let l = i;
      i = r, r = l;
    }
    let o = i.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!r || !o[s].isInSet(r.marks)) && (o = o[s--].removeFromSet(o));
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
    let i = n.marks, r = e.parent.maybeChild(e.index());
    for (var o = 0; o < i.length; o++)
      i[o].type.spec.inclusive === !1 && (!r || !i[o].isInSet(r.marks)) && (i = i[o--].removeFromSet(i));
    return i;
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
    for (let i = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); i >= 0; i--)
      if (e.pos <= this.end(i) && (!n || n(this.node(i))))
        return new wo(this, e, i);
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
    let i = [], r = 0, o = n;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (i.push(s, l, r + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, r += a + 1;
    }
    return new lr(n, i, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let i = Wc.get(e);
    if (i)
      for (let o = 0; o < i.elts.length; o++) {
        let s = i.elts[o];
        if (s.pos == n)
          return s;
      }
    else
      Wc.set(e, i = new n0());
    let r = i.elts[i.i] = lr.resolve(e, n);
    return i.i = (i.i + 1) % i0, r;
  }
}
class n0 {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const i0 = 12, Wc = /* @__PURE__ */ new WeakMap();
class wo {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, i) {
    this.$from = e, this.$to = n, this.depth = i;
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
const r0 = /* @__PURE__ */ Object.create(null);
let an = class Vl {
  /**
  @internal
  */
  constructor(e, n, i, r = oe.none) {
    this.type = e, this.attrs = n, this.marks = r, this.content = i || C.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
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
  Invoke a callback for all descendant nodes recursively overlapping
  the given two positions that are relative to start of this
  node's content. This includes all ancestors of the nodes
  containing the two positions. The callback is invoked with the
  node, its position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, i, r = 0) {
    this.content.nodesBetween(e, n, i, r, this);
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
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, n, i, r) {
    return this.content.textBetween(e, n, i, r);
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
  hasMarkup(e, n, i) {
    return this.type == e && bo(this.attrs, n || e.defaultAttrs || r0) && oe.sameSet(this.marks, i || oe.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Vl(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Vl(this.type, this.attrs, this.content, e);
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
  slice(e, n = this.content.size, i = !1) {
    if (e == n)
      return L.empty;
    let r = this.resolve(e), o = this.resolve(n), s = i ? 0 : r.sharedDepth(n), l = r.start(s), c = r.node(s).content.cut(r.pos - l, o.pos - l);
    return new L(c, r.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, i) {
    return e0(this.resolve(e), this.resolve(n), i);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: i, offset: r } = n.content.findIndex(e);
      if (n = n.maybeChild(i), !n)
        return null;
      if (r == e || n.isText)
        return n;
      e -= r + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: i } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: i };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: i } = this.content.findIndex(e);
    if (i < e)
      return { node: this.content.child(n), index: n, offset: i };
    let r = this.content.child(n - 1);
    return { node: r, index: n - 1, offset: i - r.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return lr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return lr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, i) {
    let r = !1;
    return n > e && this.nodesBetween(e, n, (o) => (i.isInSet(o.marks) && (r = !0), !r)), r;
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), gh(this.marks, e);
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
  canReplace(e, n, i = C.empty, r = 0, o = i.childCount) {
    let s = this.contentMatchAt(e).matchFragment(i, r, o), l = s && s.matchFragment(this.content, n);
    if (!l || !l.validEnd)
      return !1;
    for (let a = r; a < o; a++)
      if (!this.type.allowsMarks(i.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, i, r) {
    if (r && !this.type.allowsMarks(r))
      return !1;
    let o = this.contentMatchAt(e).matchType(i), s = o && o.matchFragment(this.content, n);
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
    this.type.checkContent(this.content), Uc(this.type.attrs, this.attrs, "node", this.type.name);
    let e = oe.none;
    for (let n = 0; n < this.marks.length; n++) {
      let i = this.marks[n];
      Uc(i.type.attrs, i.attrs, "mark", i.type.name), e = i.addToSet(e);
    }
    if (!oe.sameSet(e, this.marks))
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
    let i;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      i = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, i);
    }
    let r = C.fromJSON(e, n.content);
    return e.nodeType(n.type).create(n.attrs, r, i);
  }
};
an.prototype.text = void 0;
class ko extends an {
  /**
  @internal
  */
  constructor(e, n, i, r) {
    if (super(e, n, null, r), !i)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = i;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : gh(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new ko(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new ko(this.type, this.attrs, e, this.marks);
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
function gh(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
function Uc(t, e, n, i) {
  for (let r in e)
    if (!(r in t))
      throw new RangeError(`Unsupported attribute ${r} for ${n} of type ${i}`);
  for (let r in t)
    t[r].validate && t[r].validate(e[r]);
}
class Pn {
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
    let i = new o0(e, n);
    if (i.next == null)
      return Pn.empty;
    let r = yh(i);
    i.next && i.err("Unexpected trailing text");
    let o = f0(u0(r));
    return h0(o, i), o;
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
  matchFragment(e, n = 0, i = e.childCount) {
    let r = this;
    for (let o = n; r && o < i; o++)
      r = r.matchType(e.child(o).type);
    return r;
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
      for (let i = 0; i < e.next.length; i++)
        if (this.next[n].type == e.next[i].type)
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
  fillBefore(e, n = !1, i = 0) {
    let r = [this];
    function o(s, l) {
      let a = s.matchFragment(e, i);
      if (a && (!n || a.validEnd))
        return C.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: d, next: u } = s.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && r.indexOf(u) == -1) {
          r.push(u);
          let f = o(u, l.concat(d));
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
    for (let i = 0; i < this.wrapCache.length; i += 2)
      if (this.wrapCache[i] == e)
        return this.wrapCache[i + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), i = [{ match: this, type: null, via: null }];
    for (; i.length; ) {
      let r = i.shift(), o = r.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = r; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in n) && (!r.type || a.validEnd) && (i.push({ match: l.contentMatch, type: l, via: r }), n[l.name] = !0);
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
    function n(i) {
      e.push(i);
      for (let r = 0; r < i.next.length; r++)
        e.indexOf(i.next[r].next) == -1 && n(i.next[r].next);
    }
    return n(this), e.map((i, r) => {
      let o = r + (i.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < i.next.length; s++)
        o += (s ? ", " : "") + i.next[s].type.name + "->" + e.indexOf(i.next[s].next);
      return o;
    }).join(`
`);
  }
}
Pn.empty = new Pn(!0);
class o0 {
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
function yh(t) {
  let e = [];
  do
    e.push(s0(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function s0(t) {
  let e = [];
  do
    e.push(l0(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function l0(t) {
  let e = d0(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = a0(t, e);
    else
      break;
  return e;
}
function jc(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function a0(t, e) {
  let n = jc(t), i = n;
  return t.eat(",") && (t.next != "}" ? i = jc(t) : i = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: i, expr: e };
}
function c0(t, e) {
  let n = t.nodeTypes, i = n[e];
  if (i)
    return [i];
  let r = [];
  for (let o in n) {
    let s = n[o];
    s.isInGroup(e) && r.push(s);
  }
  return r.length == 0 && t.err("No node type or group '" + e + "' found"), r;
}
function d0(t) {
  if (t.eat("(")) {
    let e = yh(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = c0(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function u0(t) {
  let e = [[]];
  return r(o(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function i(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function r(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        r(c, l = n());
      }
    else if (s.type == "star") {
      let a = n();
      return i(l, a), r(o(s.expr, a), a), [i(a)];
    } else if (s.type == "plus") {
      let a = n();
      return r(o(s.expr, l), a), r(o(s.expr, a), a), [i(a)];
    } else {
      if (s.type == "opt")
        return [i(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let d = n();
          r(o(s.expr, a), d), a = d;
        }
        if (s.max == -1)
          r(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let d = n();
            i(a, d), r(o(s.expr, a), d), a = d;
          }
        return [i(a)];
      } else {
        if (s.type == "name")
          return [i(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function bh(t, e) {
  return e - t;
}
function Kc(t, e) {
  let n = [];
  return i(e), n.sort(bh);
  function i(r) {
    let o = t[r];
    if (o.length == 1 && !o[0].term)
      return i(o[0].to);
    n.push(r);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && n.indexOf(a) == -1 && i(a);
    }
  }
}
function f0(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Kc(t, 0));
  function n(i) {
    let r = [];
    i.forEach((s) => {
      t[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let d = 0; d < r.length; d++)
          r[d][0] == l && (c = r[d][1]);
        Kc(t, a).forEach((d) => {
          c || r.push([l, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let o = e[i.join(",")] = new Pn(i.indexOf(t.length - 1) > -1);
    for (let s = 0; s < r.length; s++) {
      let l = r[s][1].sort(bh);
      o.next.push({ type: r[s][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function h0(t, e) {
  for (let n = 0, i = [t]; n < i.length; n++) {
    let r = i[n], o = !r.validEnd, s = [];
    for (let l = 0; l < r.next.length; l++) {
      let { type: a, next: c } = r.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), i.indexOf(c) == -1 && i.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function vh(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let i = t[n];
    if (!i.hasDefault)
      return null;
    e[n] = i.default;
  }
  return e;
}
function wh(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let i in t) {
    let r = t[i], o = e && e[i];
    if (o === void 0)
      if (r.hasDefault)
        o = r.default;
      else
        throw new RangeError("No value supplied for attribute " + i);
    else r.validate && r.validate(o);
    n[i] = o;
  }
  return n;
}
function kh(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let i in e)
      n[i] = new m0(t, i, e[i]);
  return n;
}
let qc = class xh {
  /**
  @internal
  */
  constructor(e, n, i) {
    this.name = e, this.schema = n, this.spec = i, this.markSet = null, this.groups = i.group ? i.group.split(" ") : [], this.attrs = kh(e, i.attrs), this.defaultAttrs = vh(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(i.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == Pn.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : wh(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, i) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new an(this, this.computeAttrs(e), C.from(n), oe.setFrom(i));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, i) {
    return n = C.from(n), this.checkContent(n), new an(this, this.computeAttrs(e), n, oe.setFrom(i));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, i) {
    if (e = this.computeAttrs(e), n = C.from(n), n.size) {
      let s = this.contentMatch.fillBefore(n);
      if (!s)
        return null;
      n = s.append(n);
    }
    let r = this.contentMatch.matchFragment(n), o = r && r.fillBefore(C.empty, !0);
    return o ? new an(this, e, n.append(o), oe.setFrom(i)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let i = 0; i < e.childCount; i++)
      if (!this.allowsMarks(e.child(i).marks))
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
  @internal no longer useful, but called by old prosemirror-view versions
  */
  checkAttrs(e) {
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
    for (let i = 0; i < e.length; i++)
      this.allowsMarkType(e[i].type) ? n && n.push(e[i]) : n || (n = e.slice(0, i));
    return n ? n.length ? n : oe.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let i = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => i[o] = new xh(o, n, s));
    let r = n.spec.topNode || "doc";
    if (!i[r])
      throw new RangeError("Schema is missing its top node type ('" + r + "')");
    if (!i.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in i.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return i;
  }
};
function p0(t, e, n) {
  let i = n.split("|");
  return (r) => {
    let o = r === null ? "null" : typeof r;
    if (i.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${i} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class m0 {
  constructor(e, n, i) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(i, "default"), this.default = i.default, this.validate = typeof i.validate == "string" ? p0(e, n, i.validate) : i.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class bs {
  /**
  @internal
  */
  constructor(e, n, i, r) {
    this.name = e, this.rank = n, this.schema = i, this.spec = r, this.attrs = kh(e, r.attrs), this.excluded = null;
    let o = vh(this.attrs);
    this.instance = o ? new oe(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new oe(this, wh(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let i = /* @__PURE__ */ Object.create(null), r = 0;
    return e.forEach((o, s) => i[o] = new bs(o, r++, n, s)), i;
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
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class ao {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let r in e)
      n[r] = e[r];
    n.nodes = Ae.from(e.nodes), n.marks = Ae.from(e.marks || {}), this.nodes = qc.compile(this.spec.nodes, this), this.marks = bs.compile(this.spec.marks, this);
    let i = /* @__PURE__ */ Object.create(null);
    for (let r in this.nodes) {
      if (r in this.marks)
        throw new RangeError(r + " can not be both a node and a mark");
      let o = this.nodes[r], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = i[s] || (i[s] = Pn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? Gc(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let r in this.marks) {
      let o = this.marks[r], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : Gc(this, s.split(" "));
    }
    this.nodeFromJSON = (r) => an.fromJSON(this, r), this.markFromJSON = (r) => oe.fromJSON(this, r), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, i, r) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof qc) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, i, r);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let i = this.nodes.text;
    return new ko(i, i.defaultAttrs, e, oe.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
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
function Gc(t, e) {
  let n = [];
  for (let i = 0; i < e.length; i++) {
    let r = e[i], o = t.marks[r], s = o;
    if (o)
      n.push(o);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (r == "_" || a.spec.group && a.spec.group.split(" ").indexOf(r) > -1) && n.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[i] + "'");
  }
  return n;
}
function g0(t) {
  return t.tag != null;
}
function y0(t) {
  return t.style != null;
}
class cn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let i = this.matchedStyles = [];
    n.forEach((r) => {
      if (g0(r))
        this.tags.push(r);
      else if (y0(r)) {
        let o = /[^=]*/.exec(r.style)[0];
        i.indexOf(o) < 0 && i.push(o), this.styles.push(r);
      }
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let o = e.nodes[r.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let i = new Xc(this, n, !1);
    return i.addAll(e, oe.none, n.from, n.to), i.finish();
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
    let i = new Xc(this, n, !0);
    return i.addAll(e, oe.none, n.from, n.to), L.maxOpen(i.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, i) {
    for (let r = i ? this.tags.indexOf(i) + 1 : 0; r < this.tags.length; r++) {
      let o = this.tags[r];
      if (w0(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
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
  matchStyle(e, n, i, r) {
    for (let o = r ? this.styles.indexOf(r) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !i.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
        if (s.getAttrs) {
          let a = s.getAttrs(n);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
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
    function i(r) {
      let o = r.priority == null ? 50 : r.priority, s = 0;
      for (; s < n.length; s++) {
        let l = n[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      n.splice(s, 0, r);
    }
    for (let r in e.marks) {
      let o = e.marks[r].spec.parseDOM;
      o && o.forEach((s) => {
        i(s = Zc(s)), s.mark || s.ignore || s.clearMark || (s.mark = r);
      });
    }
    for (let r in e.nodes) {
      let o = e.nodes[r].spec.parseDOM;
      o && o.forEach((s) => {
        i(s = Zc(s)), s.node || s.ignore || s.mark || (s.node = r);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new cn(e, cn.schemaRules(e)));
  }
}
const Sh = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  body: !0,
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
}, b0 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Ch = { ol: !0, ul: !0 }, ar = 1, Nl = 2, Wi = 4;
function Jc(t, e, n) {
  return e != null ? (e ? ar : 0) | (e === "full" ? Nl : 0) : t && t.whitespace == "pre" ? ar | Nl : n & ~Wi;
}
class Dr {
  constructor(e, n, i, r, o, s) {
    this.type = e, this.attrs = n, this.marks = i, this.solid = r, this.options = s, this.content = [], this.activeMarks = oe.none, this.match = o || (s & Wi ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(C.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let i = this.type.contentMatch, r;
        return (r = i.findWrapping(e.type)) ? (this.match = i, r) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & ar)) {
      let i = this.content[this.content.length - 1], r;
      if (i && i.isText && (r = /[ \t\r\n\u000c]+$/.exec(i.text))) {
        let o = i;
        i.text.length == r[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - r[0].length));
      }
    }
    let n = C.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(C.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Sh.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Xc {
  constructor(e, n, i) {
    this.parser = e, this.options = n, this.isOpen = i, this.open = 0, this.localPreserveWS = !1;
    let r = n.topNode, o, s = Jc(null, n.preserveWhitespace, 0) | (i ? Wi : 0);
    r ? o = new Dr(r.type, r.attrs, oe.none, !0, n.topMatch || r.type.contentMatch, s) : i ? o = new Dr(null, null, oe.none, !0, null, s) : o = new Dr(e.schema.topNodeType, null, oe.none, !0, null, s), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
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
    let i = e.nodeValue, r = this.top, o = r.options & Nl ? "full" : this.localPreserveWS || (r.options & ar) > 0, { schema: s } = this.parser;
    if (o === "full" || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(i)) {
      if (o)
        if (o === "full")
          i = i.replace(/\r\n?/g, `
`);
        else if (s.linebreakReplacement && /[\r\n]/.test(i) && this.top.findWrapping(s.linebreakReplacement.create())) {
          let l = i.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(s.linebreakReplacement.create(), n, !0), l[a] && this.insertNode(s.text(l[a]), n, !/\S/.test(l[a]));
          i = "";
        } else
          i = i.replace(/\r?\n|\r/g, " ");
      else if (i = i.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(i) && this.open == this.nodes.length - 1) {
        let l = r.content[r.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (i = i.slice(1));
      }
      i && this.insertNode(s.text(i), n, !/\S/.test(i)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, i) {
    let r = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), l;
    Ch.hasOwnProperty(s) && this.parser.normalizeLists && v0(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, i));
    e: if (a ? a.ignore : b0.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, d = this.needsBlock;
      if (Sh.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), c = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let u = a && a.skip ? n : this.readStyles(e, n);
      u && this.addAll(e, u), c && this.sync(o), this.needsBlock = d;
    } else {
      let c = this.readStyles(e, n);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = r;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let i = e.style;
    if (i && i.length)
      for (let r = 0; r < this.parser.matchedStyles.length; r++) {
        let o = this.parser.matchedStyles[r], s = i.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? n = n.filter((c) => !a.clearMark(c)) : n = n.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, i, r) {
    let o, s;
    if (n.node)
      if (s = this.parser.schema.nodes[n.node], s.isLeaf)
        this.insertNode(s.create(n.attrs), i, e.nodeName == "BR") || this.leafFallback(e, i);
      else {
        let a = this.enter(s, n.attrs || null, i, n.preserveWhitespace);
        a && (o = !0, i = a);
      }
    else {
      let a = this.parser.schema.marks[n.mark];
      i = i.concat(a.create(n.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, i, r);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, i, !1));
    else {
      let a = e;
      typeof n.contentElement == "string" ? a = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? a = n.contentElement(e) : n.contentElement && (a = n.contentElement), this.findAround(e, a, !0), this.addAll(a, i), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, i, r) {
    let o = i || 0;
    for (let s = i ? e.childNodes[i] : e.firstChild, l = r == null ? null : e.childNodes[r]; s != l; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, n);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, i) {
    let r, o;
    for (let s = this.open, l = 0; s >= 0; s--) {
      let a = this.nodes[s], c = a.findWrapping(e);
      if (c && (!r || r.length > c.length + l) && (r = c, o = a, !c.length))
        break;
      if (a.solid) {
        if (i)
          break;
        l += 2;
      }
    }
    if (!r)
      return null;
    this.sync(o);
    for (let s = 0; s < r.length; s++)
      n = this.enterInner(r[s], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, i) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (n = this.enterInner(o, null, n));
    }
    let r = this.findPlace(e, n, i);
    if (r) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = oe.none;
      for (let l of r.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : Yc(l.type, e.type)) && (s = l.addToSet(s));
      return o.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, i, r) {
    let o = this.findPlace(e.create(n), i, !1);
    return o && (o = this.enterInner(e, n, i, !0, r)), o;
  }
  // Open a node of the given type
  enterInner(e, n, i, r = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = Jc(e, o, s.options);
    s.options & Wi && s.content.length == 0 && (l |= Wi);
    let a = oe.none;
    return i = i.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : Yc(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Dr(e, n, a, r, null, l)), this.open++, i;
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
      this.localPreserveWS && (this.nodes[n].options |= ar);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let i = this.nodes[n].content;
      for (let r = i.length - 1; r >= 0; r--)
        e += i[r].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].node == e && this.find[i].offset == n && (this.find[i].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, i) {
    if (e != n && this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && n.compareDocumentPosition(this.find[r].node) & (i ? 2 : 4) && (this.find[r].pos = this.currentPos);
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
    let n = e.split("/"), i = this.options.context, r = !this.isOpen && (!i || i.parent.type == this.nodes[0].type), o = -(i ? i.depth + 1 : 0) + (r ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = n[l];
        if (c == "") {
          if (l == n.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && r ? this.nodes[a].type : i && a >= o ? i.node(a - o).type : null;
          if (!d || d.name != c && !d.isInGroup(c))
            return !1;
          a--;
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
        let i = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (i && i.isTextblock && i.defaultAttrs)
          return i;
      }
    for (let n in this.parser.schema.nodes) {
      let i = this.parser.schema.nodes[n];
      if (i.isTextblock && i.defaultAttrs)
        return i;
    }
  }
}
function v0(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let i = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    i && Ch.hasOwnProperty(i) && n ? (n.appendChild(e), e = n) : i == "li" ? n = e : i && (n = null);
  }
}
function w0(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Zc(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Yc(t, e) {
  let n = e.schema.nodes;
  for (let i in n) {
    let r = n[i];
    if (!r.allowsMarkType(t))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: d } = l.edge(a);
        if (c == e || o.indexOf(d) < 0 && s(d))
          return !0;
      }
    };
    if (s(r.contentMatch))
      return !0;
  }
}
class vn {
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
  serializeFragment(e, n = {}, i) {
    i || (i = Pr(n).createDocumentFragment());
    let r = i, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          r = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], d = this.serializeMark(c, s.isInline, n);
          d && (o.push([c, r]), r.appendChild(d.dom), r = d.contentDOM || d.dom);
        }
      }
      r.appendChild(this.serializeNodeInner(s, n));
    }), i;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    if (e.isText)
      return Pr(n).createTextNode(e.text);
    let { dom: i, contentDOM: r } = co(Pr(n), this.nodes[e.type.name](e), null, e.attrs);
    if (r) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, r);
    }
    return i;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let i = this.serializeNodeInner(e, n);
    for (let r = e.marks.length - 1; r >= 0; r--) {
      let o = this.serializeMark(e.marks[r], e.isInline, n);
      o && ((o.contentDOM || o.dom).appendChild(i), i = o.dom);
    }
    return i;
  }
  /**
  @internal
  */
  serializeMark(e, n, i = {}) {
    let r = this.marks[e.type.name];
    return r && co(Pr(i), r(e, n), null, e.attrs);
  }
  static renderSpec(e, n, i = null, r) {
    return typeof n == "string" ? { dom: e.createTextNode(n) } : co(e, n, i, r);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new vn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = Qc(e.nodes);
    return n.text || (n.text = (i) => i.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Qc(e.marks);
  }
}
function Qc(t) {
  let e = {};
  for (let n in t) {
    let i = t[n].spec.toDOM;
    i && (e[n] = i);
  }
  return e;
}
function Pr(t) {
  return t.document || window.document;
}
const ed = /* @__PURE__ */ new WeakMap();
function k0(t) {
  let e = ed.get(t);
  return e === void 0 && ed.set(t, e = x0(t)), e;
}
function x0(t) {
  let e = null;
  function n(i) {
    if (i && typeof i == "object")
      if (Array.isArray(i))
        if (typeof i[0] == "string")
          e || (e = []), e.push(i);
        else
          for (let r = 0; r < i.length; r++)
            n(i[r]);
      else
        for (let r in i)
          n(i[r]);
  }
  return n(t), e;
}
function co(t, e, n, i) {
  if (e.nodeType == 1)
    return { dom: e };
  if (e.dom && e.dom.nodeType == 1)
    return e;
  let r = e[0], o;
  if (typeof r != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (i && (o = k0(i)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = r.indexOf(" ");
  s > 0 && (n = r.slice(0, s), r = r.slice(s + 1));
  let l, a = n ? t.createElementNS(n, r) : t.createElement(r), c = e[1], d = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    d = 2;
    for (let u in c)
      if (c[u] != null) {
        let f = u.indexOf(" ");
        f > 0 ? a.setAttributeNS(u.slice(0, f), u.slice(f + 1), c[u]) : u == "style" && a.style ? a.style.cssText = c[u] : a.setAttribute(u, c[u]);
      }
  }
  for (let u = d; u < e.length; u++) {
    let f = e[u];
    if (f === 0) {
      if (u < e.length - 1 || u > d)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else if (typeof f == "string")
      a.appendChild(t.createTextNode(f));
    else {
      let { dom: h, contentDOM: p } = co(t, f, n, i);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Mh = 65535, Ah = Math.pow(2, 16);
function S0(t, e) {
  return t + e * Ah;
}
function td(t) {
  return t & Mh;
}
function C0(t) {
  return (t - (t & Mh)) / Ah;
}
const Th = 1, Eh = 2, uo = 4, Lh = 8;
class Il {
  /**
  @internal
  */
  constructor(e, n, i) {
    this.pos = e, this.delInfo = n, this.recover = i;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Lh) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Th | uo)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Eh | uo)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & uo) > 0;
  }
}
class Ue {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && Ue.empty)
      return Ue.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, i = td(e);
    if (!this.inverted)
      for (let r = 0; r < i; r++)
        n += this.ranges[r * 3 + 2] - this.ranges[r * 3 + 1];
    return this.ranges[i * 3] + n + C0(e);
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
  _map(e, n, i) {
    let r = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = this.ranges[l + s], u = a + c;
      if (e <= u) {
        let f = c ? e == a ? -1 : e == u ? 1 : n : n, h = a + r + (f < 0 ? 0 : d);
        if (i)
          return h;
        let p = e == (n < 0 ? a : u) ? null : S0(l / 3, e - a), m = 0;
        return c && (m |= e == a ? Eh : e == u ? Th : uo, (n < 0 ? e != a : e != u) && (m |= Lh)), new Il(h, m, p);
      }
      r += d - c;
    }
    return i ? e + r : new Il(e + r, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let i = 0, r = td(n), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = a + c;
      if (e <= d && l == r * 3)
        return !0;
      i += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let r = 0, o = 0; r < this.ranges.length; r += 3) {
      let s = this.ranges[r], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[r + n], d = this.ranges[r + i];
      e(l, l + c, a, a + d), o += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Ue(this.ranges, !this.inverted);
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
    return e == 0 ? Ue.empty : new Ue(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Ue.empty = new Ue([]);
class cr {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, n, i = 0, r = e ? e.length : 0) {
    this.mirror = n, this.from = i, this.to = r, this._maps = e || [], this.ownData = !(e || n);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new cr(this._maps, this.mirror, e, n);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), n != null && this.setMirror(this._maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, i = this._maps.length; n < e._maps.length; n++) {
      let r = e.getMirror(n);
      this.appendMap(e._maps[n], r != null && r < n ? i + r : void 0);
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
    for (let n = e.maps.length - 1, i = this._maps.length + e._maps.length; n >= 0; n--) {
      let r = e.getMirror(n);
      this.appendMap(e._maps[n].invert(), r != null && r > n ? i - r - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new cr();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let i = this.from; i < this.to; i++)
      e = this._maps[i].map(e, n);
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
  _map(e, n, i) {
    let r = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this._maps[o], l = s.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      r |= l.delInfo, e = l.pos;
    }
    return i ? e : new Il(e, r, null);
  }
}
const Zs = /* @__PURE__ */ Object.create(null);
class we {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Ue.empty;
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
    let i = Zs[n.stepType];
    if (!i)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return i.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in Zs)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Zs[e] = n, n.prototype.jsonID = e, n;
  }
}
class ye {
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
    return new ye(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ye(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, i, r) {
    try {
      return ye.ok(e.replace(n, i, r));
    } catch (o) {
      if (o instanceof sr)
        return ye.fail(o.message);
      throw o;
    }
  }
}
function Pa(t, e, n) {
  let i = [];
  for (let r = 0; r < t.childCount; r++) {
    let o = t.child(r);
    o.content.size && (o = o.copy(Pa(o.content, e, o))), o.isInline && (o = e(o, n, r)), i.push(o);
  }
  return C.fromArray(i);
}
class Rt extends we {
  /**
  Create a mark step.
  */
  constructor(e, n, i) {
    super(), this.from = e, this.to = n, this.mark = i;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), i = e.resolve(this.from), r = i.node(i.sharedDepth(this.to)), o = new L(Pa(n.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), r), n.openStart, n.openEnd);
    return ye.fromReplace(e, this.from, this.to, o);
  }
  invert(e) {
    let n = [];
    return e.nodesBetween(this.from, this.to, (i, r) => {
      if (i.isInline && i.isAtom) {
        let o = this.mark.addToSet(i.marks);
        if (!oe.sameSet(o, i.marks)) {
          let s = Math.max(this.from, r), l = Math.min(this.to, r + i.nodeSize);
          xo(ht, s, l, this.mark, n);
          for (let a of i.marks)
            a.isInSet(o) || xo(Rt, s, l, a, n);
        }
      }
    }), n.length == 1 ? n[0] : new Nn(n);
  }
  map(e) {
    let n = e.map(this.from, 1), i = e.map(this.to, -1);
    return n >= i ? null : new Rt(n, i, this.mark);
  }
  merge(e) {
    return e instanceof Rt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Rt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Rt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
we.jsonID("addMark", Rt);
class ht extends we {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, i) {
    super(), this.from = e, this.to = n, this.mark = i;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), i = new L(Pa(n.content, (r) => r.mark(this.mark.removeFromSet(r.marks)), e), n.openStart, n.openEnd);
    return ye.fromReplace(e, this.from, this.to, i);
  }
  invert(e) {
    let n = [];
    return e.nodesBetween(this.from, this.to, (i, r) => {
      i.isInline && i.isAtom && this.mark.isInSet(i.marks) && xo(Rt, Math.max(this.from, r), Math.min(this.to, r + i.nodeSize), this.mark, n);
    }), n.length == 1 ? n[0] : new Nn(n);
  }
  map(e) {
    let n = e.map(this.from, 1), i = e.map(this.to, -1);
    return n >= i ? null : new ht(n, i, this.mark);
  }
  merge(e) {
    return e instanceof ht && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ht(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new ht(n.from, n.to, e.markFromJSON(n.mark));
  }
}
we.jsonID("removeMark", ht);
function xo(t, e, n, i, r) {
  let o = r.length ? r[r.length - 1] : null;
  o && o instanceof t && o.to == e && o.mark.eq(i) ? r[r.length - 1] = new t(o.from, n, i) : r.push(new t(e, n, i));
}
class Nn extends we {
  constructor(e) {
    super(), this.steps = e;
  }
  apply(e) {
    for (let n of this.steps) {
      let i = n.apply(e);
      if (!i.doc)
        return i;
      e = i.doc;
    }
    return new ye(e, null);
  }
  invert(e) {
    return new Nn(this.steps.map((n) => n.invert(e)));
  }
  map(e) {
    let n = [];
    for (let i of this.steps) {
      let r = i.map(e);
      r && n.push(r);
    }
    return n.length ? new Nn(n) : null;
  }
  toJSON() {
    return { stepType: "markSet", steps: this.steps.map((e) => e.toJSON()) };
  }
  static fromJSON(e, n) {
    if (!Array.isArray(n.steps) || !n.steps.every((i) => i.stepType == "addMark" || i.stepType == "removeMark"))
      throw new RangeError("Invalid JSON for MarkSetStep");
    return new Nn(n.steps.map((i) => we.fromJSON(e, i)));
  }
}
we.jsonID("markSet", Nn);
class ln extends we {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ye.fail("No node at mark step's position");
    let i = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return ye.fromReplace(e, this.pos, this.pos + 1, new L(C.from(i), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let i = this.mark.addToSet(n.marks);
      if (i.length == n.marks.length) {
        for (let r = 0; r < n.marks.length; r++)
          if (!n.marks[r].isInSet(i))
            return new ln(this.pos, n.marks[r]);
        return new ln(this.pos, this.mark);
      }
    }
    return new _n(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new ln(n.pos, this.mark);
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
    return new ln(n.pos, e.markFromJSON(n.mark));
  }
}
we.jsonID("addNodeMark", ln);
class _n extends we {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ye.fail("No node at mark step's position");
    let i = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return ye.fromReplace(e, this.pos, this.pos + 1, new L(C.from(i), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new ln(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new _n(n.pos, this.mark);
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
    return new _n(n.pos, e.markFromJSON(n.mark));
  }
}
we.jsonID("removeNodeMark", _n);
class pe extends we {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, i, r = !1) {
    super(), this.from = e, this.to = n, this.slice = i, this.structure = r;
  }
  apply(e) {
    return this.structure && Dl(e, this.from, this.to) ? ye.fail("Structure replace would overwrite content") : ye.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Ue([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new pe(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.to, -1), i = this.from == this.to && pe.MAP_BIAS < 0 ? n : e.mapResult(this.from, 1);
    return i.deletedAcross && n.deletedAcross ? null : new pe(i.pos, Math.max(i.pos, n.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof pe) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? L.empty : new L(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new pe(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? L.empty : new L(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new pe(e.from, this.to, n, this.structure);
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
    return new pe(n.from, n.to, L.fromJSON(e, n.slice), !!n.structure);
  }
}
pe.MAP_BIAS = 1;
we.jsonID("replace", pe);
class Se extends we {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, i, r, o, s, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = i, this.gapTo = r, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Dl(e, this.from, this.gapFrom) || Dl(e, this.gapTo, this.to)))
      return ye.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return ye.fail("Gap is not a flat range");
    let i = this.slice.insertAt(this.insert, n.content);
    return i ? ye.fromReplace(e, this.from, this.to, i) : ye.fail("Content does not fit in gap");
  }
  getMap() {
    return new Ue([
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
    return new Se(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), i = e.mapResult(this.to, -1), r = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? i.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && i.deletedAcross || r < n.pos || o > i.pos || r > o ? null : new Se(n.pos, i.pos, r, o, this.slice, this.insert, this.structure);
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
    return new Se(n.from, n.to, n.gapFrom, n.gapTo, L.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
we.jsonID("replaceAround", Se);
function Dl(t, e, n) {
  let i = t.resolve(e), r = n - e, o = i.depth;
  for (; r > 0 && o > 0 && i.indexAfter(o) == i.node(o).childCount; )
    o--, r--;
  if (r > 0) {
    let s = i.node(o).maybeChild(i.indexAfter(o));
    for (; r > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, r--;
    }
  }
  return !1;
}
function M0(t, e, n, i) {
  let r = [];
  t.doc.nodesBetween(e, n, (o, s, l) => {
    if (!o.isInline)
      return;
    let a = o.marks;
    if (!i.isInSet(a) && l.type.allowsMarkType(i.type)) {
      let c = Math.max(s, e), d = Math.min(s + o.nodeSize, n);
      xo(Rt, c, d, i, r);
    }
  }), r.forEach((o) => t.step(o));
}
function A0(t, e, n, i) {
  let r = [], o = 0;
  t.doc.nodesBetween(e, n, (s, l) => {
    if (!s.isInline || !s.isAtom)
      return;
    o++;
    let a = null;
    if (i instanceof bs) {
      let c = s.marks, d;
      for (; d = i.isInSet(c); )
        (a || (a = [])).push(d), c = d.removeFromSet(c);
    } else i ? i.isInSet(s.marks) && (a = [i]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, n);
      for (let d = 0; d < a.length; d++) {
        let u = a[d], f;
        for (let h = 0; h < r.length; h++) {
          let p = r[h];
          p.step == o - 1 && u.eq(r[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = o) : r.push({ style: u, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), r.forEach((s) => t.step(new ht(s.from, s.to, s.style)));
}
function _a(t, e, n, i = n.contentMatch, r = !0) {
  let o = t.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), d = l + c.nodeSize, u = i.matchType(c.type);
    if (!u)
      s.push(new pe(l, d, L.empty));
    else {
      i = u;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new ht(l, d, c.marks[f]));
      if (r && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new L(C.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), s.push(new pe(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = d;
  }
  if (!i.validEnd) {
    let a = i.fillBefore(C.empty, !0);
    t.replace(l, l, new L(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    t.step(s[a]);
}
function T0(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Ei(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let i = t.depth, r = 0, o = 0; ; --i) {
    let s = t.$from.node(i), l = t.$from.index(i) + r, a = t.$to.indexAfter(i) - o;
    if (i < t.depth && s.canReplace(l, a, n))
      return i;
    if (i == 0 || s.type.spec.isolating || !T0(s, l, a))
      break;
    l && (r = 1), a < s.childCount && (o = 1);
  }
  return null;
}
function E0(t, e, n) {
  let { $from: i, $to: r, depth: o } = e, s = i.before(o + 1), l = r.after(o + 1), a = s, c = l, d = C.empty, u = 0;
  for (let p = o, m = !1; p > n; p--)
    m || i.index(p) > 0 ? (m = !0, d = C.from(i.node(p).copy(d)), u++) : a--;
  let f = C.empty, h = 0;
  for (let p = o, m = !1; p > n; p--)
    m || r.after(p + 1) < r.end(p) ? (m = !0, f = C.from(r.node(p).copy(f)), h++) : c++;
  t.step(new Se(a, c, s, l, new L(d.append(f), u, h), d.size - u, !0));
}
function za(t, e, n = null, i = t) {
  let r = L0(t, e), o = r && O0(i, e);
  return o ? r.map(nd).concat({ type: e, attrs: n }).concat(o.map(nd)) : null;
}
function nd(t) {
  return { type: t, attrs: null };
}
function L0(t, e) {
  let { parent: n, startIndex: i, endIndex: r } = t, o = n.contentMatchAt(i).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return n.canReplaceWith(i, r, s) ? o : null;
}
function O0(t, e) {
  let { parent: n, startIndex: i, endIndex: r } = t, o = n.child(i), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = i; a && c < r; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function H0(t, e, n) {
  let i = C.empty;
  for (let s = n.length - 1; s >= 0; s--) {
    if (i.size) {
      let l = n[s].type.contentMatch.matchFragment(i);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    i = C.from(n[s].type.create(n[s].attrs, i));
  }
  let r = e.start, o = e.end;
  t.step(new Se(r, o, r, o, new L(i, 0, 0), n.length, !0));
}
function R0(t, e, n, i, r) {
  if (!i.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (s, l) => {
    let a = typeof r == "function" ? r(s) : r;
    if (s.isTextblock && !s.hasMarkup(i, a) && V0(t.doc, t.mapping.slice(o).map(l), i)) {
      let c = null;
      if (i.schema.linebreakReplacement) {
        let h = i.whitespace == "pre", p = !!i.contentMatch.matchType(i.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && Hh(t, s, l, o), _a(t, t.mapping.slice(o).map(l, 1), i, void 0, c === null);
      let d = t.mapping.slice(o), u = d.map(l, 1), f = d.map(l + s.nodeSize, 1);
      return t.step(new Se(u, f, u + 1, f - 1, new L(C.from(i.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && Oh(t, s, l, o), !1;
    }
  });
}
function Oh(t, e, n, i) {
  e.forEach((r, o) => {
    if (r.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(r.text); ) {
        let a = t.mapping.slice(i).map(n + 1 + o + s.index);
        t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Hh(t, e, n, i) {
  e.forEach((r, o) => {
    if (r.type == r.type.schema.linebreakReplacement) {
      let s = t.mapping.slice(i).map(n + 1 + o);
      t.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function V0(t, e, n) {
  let i = t.resolve(e), r = i.index();
  return i.parent.canReplaceWith(r, r + 1, n);
}
function N0(t, e, n, i, r) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let s = n.create(i, null, r || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, s);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new Se(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new L(C.from(s), 0, 0), 1, !0));
}
function Pt(t, e, n = 1, i) {
  let r = t.resolve(e), o = r.depth - n, s = i && i[i.length - 1] || r.parent;
  if (o < 0 || r.parent.type.spec.isolating || !r.parent.canReplace(r.index(), r.parent.childCount) || !s.type.validContent(r.parent.content.cutByIndex(r.index(), r.parent.childCount)))
    return !1;
  for (let c = r.depth - 1, d = n - 2; c > o; c--, d--) {
    let u = r.node(c), f = r.index(c);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(f, u.childCount), p = i && i[d + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = i && i[d] || u;
    if (!u.canReplace(f + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = r.indexAfter(o), a = i && i[0];
  return r.node(o).canReplaceWith(l, l, a ? a.type : r.node(o + 1).type);
}
function I0(t, e, n = 1, i) {
  let r = t.doc.resolve(e), o = C.empty, s = C.empty;
  for (let l = r.depth, a = r.depth - n, c = n - 1; l > a; l--, c--) {
    o = C.from(r.node(l).copy(o));
    let d = i && i[c];
    s = C.from(d ? d.type.create(d.attrs, s) : r.node(l).copy(s));
  }
  t.step(new pe(e, e, new L(o.append(s), n, n), !0));
}
function wn(t, e) {
  let n = t.resolve(e), i = n.index();
  return Rh(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(i, i + 1);
}
function D0(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: i } = t.type.schema;
  for (let r = 0; r < e.childCount; r++) {
    let o = e.child(r), s = o.type == i ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(s), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function Rh(t, e) {
  return !!(t && e && !t.isLeaf && D0(t, e));
}
function vs(t, e, n = -1) {
  let i = t.resolve(e);
  for (let r = i.depth; ; r--) {
    let o, s, l = i.index(r);
    if (r == i.depth ? (o = i.nodeBefore, s = i.nodeAfter) : n > 0 ? (o = i.node(r + 1), l++, s = i.node(r).maybeChild(l)) : (o = i.node(r).maybeChild(l - 1), s = i.node(r + 1)), o && !o.isTextblock && Rh(o, s) && i.node(r).canReplace(l, l + 1))
      return e;
    if (r == 0)
      break;
    e = n < 0 ? i.before(r) : i.after(r);
  }
}
function P0(t, e, n) {
  let i = null, { linebreakReplacement: r } = t.doc.type.schema, o = t.doc.resolve(e - n), s = o.node().type;
  if (r && s.inlineContent) {
    let d = s.whitespace == "pre", u = !!s.contentMatch.matchType(r);
    d && !u ? i = !1 : !d && u && (i = !0);
  }
  let l = t.steps.length;
  if (i === !1) {
    let d = t.doc.resolve(e + n);
    Hh(t, d.node(), d.before(), l);
  }
  s.inlineContent && _a(t, e + n - 1, s, o.node().contentMatchAt(o.index()), i == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new pe(c, a.map(e + n, -1), L.empty, !0)), i === !0) {
    let d = t.doc.resolve(c);
    Oh(t, d.node(), d.before(), t.steps.length);
  }
  return t;
}
function _0(t, e, n) {
  let i = t.resolve(e);
  if (i.parent.canReplaceWith(i.index(), i.index(), n))
    return e;
  if (i.parentOffset == 0)
    for (let r = i.depth - 1; r >= 0; r--) {
      let o = i.index(r);
      if (i.node(r).canReplaceWith(o, o, n))
        return i.before(r + 1);
      if (o > 0)
        return null;
    }
  if (i.parentOffset == i.parent.content.size)
    for (let r = i.depth - 1; r >= 0; r--) {
      let o = i.indexAfter(r);
      if (i.node(r).canReplaceWith(o, o, n))
        return i.after(r + 1);
      if (o < i.node(r).childCount)
        return null;
    }
  return null;
}
function Vh(t, e, n) {
  let i = t.resolve(e);
  if (!n.content.size)
    return e;
  let r = n.content;
  for (let o = 0; o < n.openStart; o++)
    r = r.firstChild.content;
  for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
    for (let s = i.depth; s >= 0; s--) {
      let l = s == i.depth ? 0 : i.pos <= (i.start(s + 1) + i.end(s + 1)) / 2 ? -1 : 1, a = i.index(s) + (l > 0 ? 1 : 0), c = i.node(s), d = !1;
      if (o == 1)
        d = c.canReplace(a, a, r);
      else {
        let u = c.contentMatchAt(a).findWrapping(r.firstChild.type);
        d = u && c.canReplaceWith(a, a, u[0]);
      }
      if (d)
        return l == 0 ? i.pos : l < 0 ? i.before(s + 1) : i.after(s + 1);
    }
  return null;
}
function ws(t, e, n = e, i = L.empty) {
  if (e == n && !i.size)
    return null;
  let r = t.resolve(e), o = t.resolve(n);
  return Nh(r, o, i) ? new pe(e, n, i) : new z0(r, o, i).fit();
}
function Nh(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class z0 {
  constructor(e, n, i) {
    this.$from = e, this.$to = n, this.unplaced = i, this.frontier = [], this.placed = C.empty;
    for (let r = 0; r <= e.depth; r++) {
      let o = e.node(r);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(r))
      });
    }
    for (let r = e.depth; r > 0; r--)
      this.placed = C.from(e.node(r).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, i = this.$from, r = this.close(e < 0 ? this.$to : i.doc.resolve(e));
    if (!r)
      return null;
    let o = this.placed, s = i.depth, l = r.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new L(o, s, l);
    return e > -1 ? new Se(i.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || i.pos != this.$to.pos ? new pe(i.pos, r.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, i = 0, r = this.unplaced.openEnd; i < e; i++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (r = 0), o.type.spec.isolating && r <= i) {
        e = i;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let i = n == 1 ? e : this.unplaced.openStart; i >= 0; i--) {
        let r, o = null;
        i ? (o = id(this.unplaced.content, i - 1).firstChild, r = o.content) : r = this.unplaced.content;
        let s = r.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], d, u = null;
          if (n == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(C.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: i, frontierDepth: l, parent: o, inject: u };
          if (n == 2 && s && (d = c.findWrapping(s.type)))
            return { sliceDepth: i, frontierDepth: l, parent: o, wrap: d };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: i } = this.unplaced;
    return rd(e, -1) <= n ? !1 : (this.unplaced.size > 1 && rd(e, 1) > i && i++, this.unplaced = new L(e, n + 1, i), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: i } = this.unplaced, r = id(e, n);
    if (r.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + r.size;
      this.unplaced = new L(Pi(e, n - 1, 1), n - 1, o ? n - 1 : i);
    } else
      this.unplaced = new L(Pi(e, n, 1), n, i);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: i, inject: r, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, l = i ? i.content : s.content, a = s.openStart - e, c = 0, d = [], { match: u, type: f } = this.frontier[n];
    if (r) {
      for (let m = 0; m < r.childCount; m++)
        d.push(r.child(m));
      u = u.matchFragment(r);
    }
    let h = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = g, d.push(Ih(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = _i(this.placed, n, C.from(d)), this.frontier[n].match = u, p && h < 0 && i && i.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = d[d.length - 1]; g && m < h; m++)
      this.frontier.push({ type: g.type, match: g.contentMatchAt(g.childCount) }), g = g.lastChild;
    this.unplaced = p ? e == 0 ? L.empty : new L(Pi(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new L(Pi(s.content, e, c), e, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Ys(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: i } = this.$to, r = this.$to.after(i);
    for (; i > 1 && r == this.$to.end(--i); )
      ++r;
    return r;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: i, type: r } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), s = Ys(e, n, r, i, o);
      if (s) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], d = Ys(e, l, c, a, !0);
          if (!d || d.childCount)
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
    n.fit.childCount && (this.placed = _i(this.placed, n.depth, n.fit)), e = n.move;
    for (let i = n.depth + 1; i <= e.depth; i++) {
      let r = e.node(i), o = r.type.contentMatch.fillBefore(r.content, !0, e.index(i));
      this.openFrontierNode(r.type, r.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, i) {
    let r = this.frontier[this.depth];
    r.match = r.match.matchType(e), this.placed = _i(this.placed, this.depth, C.from(e.create(n, i))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(C.empty, !0);
    n.childCount && (this.placed = _i(this.placed, this.frontier.length, n));
  }
}
function Pi(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Pi(t.firstChild.content, e - 1, n)));
}
function _i(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(_i(t.lastChild.content, e - 1, n)));
}
function id(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Ih(t, e, n) {
  if (e <= 0)
    return t;
  let i = t.content;
  return e > 1 && (i = i.replaceChild(0, Ih(i.firstChild, e - 1, i.childCount == 1 ? n - 1 : 0))), e > 0 && (i = t.type.contentMatch.fillBefore(i).append(i), n <= 0 && (i = i.append(t.type.contentMatch.matchFragment(i).fillBefore(C.empty, !0)))), t.copy(i);
}
function Ys(t, e, n, i, r) {
  let o = t.node(e), s = r ? t.indexAfter(e) : t.index(e);
  if (s == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = i.fillBefore(o.content, !0, s);
  return l && !$0(n, o.content, s) ? l : null;
}
function $0(t, e, n) {
  for (let i = n; i < e.childCount; i++)
    if (!t.allowsMarks(e.child(i).marks))
      return !0;
  return !1;
}
function B0(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function rd(t, e) {
  for (let n = 0; ; n++) {
    let i = e < 0 ? t.firstChild : t.lastChild;
    if (!i || i.isAtom)
      return n;
    t = i.content;
  }
}
function F0(t, e, n, i) {
  if (!i.size)
    return t.deleteRange(e, n);
  let r = t.doc.resolve(e), o = t.doc.resolve(n);
  if (Nh(r, o, i))
    return t.step(new pe(e, n, i));
  let s = Ph(r, o);
  s[s.length - 1] == 0 && s.pop();
  let l = -(r.depth + 1);
  s.unshift(l);
  for (let f = r.depth, h = r.pos - 1; f > 0; f--, h--) {
    let p = r.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : r.before(f) == h && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], d = i.openStart;
  for (let f = i.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == i.openStart)
      break;
    f = p.content;
  }
  for (let f = d - 1; f >= 0; f--) {
    let h = c[f], p = B0(h.type);
    if (p && !h.sameMarkup(r.node(Math.abs(l) - 1)))
      d = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = i.openStart; f >= 0; f--) {
    let h = (f + d + 1) % (i.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + a) % s.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let b = r.node(g - 1), v = r.index(g - 1);
        if (b.canReplaceWith(v, v, p.type, p.marks))
          return t.replace(r.before(g), y ? o.after(g) : n, new L(Dh(i.content, 0, i.openStart, h), h, i.openEnd));
      }
  }
  let u = t.steps.length;
  for (let f = s.length - 1; f >= 0 && (t.replace(e, n, i), !(t.steps.length > u)); f--) {
    let h = s[f];
    h < 0 || (e = r.before(h), n = o.after(h));
  }
}
function Dh(t, e, n, i, r) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Dh(o.content, e + 1, n, i, o)));
  }
  if (e > i) {
    let o = r.contentMatchAt(0), s = o.fillBefore(t).append(t);
    t = s.append(o.matchFragment(s).fillBefore(C.empty, !0));
  }
  return t;
}
function W0(t, e, n, i) {
  if (!i.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let r = _0(t.doc, e, i.type);
    r != null && (e = n = r);
  }
  t.replaceRange(e, n, new L(C.from(i), 0, 0));
}
function U0(t, e, n) {
  let i = t.doc.resolve(e), r = t.doc.resolve(n);
  if (i.parent.isTextblock && r.parent.isTextblock && i.start() != r.start() && i.parentOffset == 0 && r.parentOffset == 0) {
    let s = i.sharedDepth(n), l = !1;
    for (let a = i.depth; a > s; a--)
      i.node(a).type.spec.isolating && (l = !0);
    for (let a = r.depth; a > s; a--)
      r.node(a).type.spec.isolating && (l = !0);
    if (!l) {
      for (let a = i.depth; a > 0 && e == i.start(a); a--)
        e = i.before(a);
      for (let a = r.depth; a > 0 && n == r.start(a); a--)
        n = r.before(a);
      i = t.doc.resolve(e), r = t.doc.resolve(n);
    }
  }
  let o = Ph(i, r);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || i.node(l).type.contentMatch.validEnd)
      return t.delete(i.start(l), r.end(l));
    if (l > 0 && (a || i.node(l - 1).canReplace(i.index(l - 1), r.indexAfter(l - 1))))
      return t.delete(i.before(l), r.after(l));
  }
  for (let s = 1; s <= i.depth && s <= r.depth; s++)
    if (e - i.start(s) == i.depth - s && n > i.end(s) && r.end(s) - n != r.depth - s && i.start(s - 1) == r.start(s - 1) && i.node(s - 1).canReplace(i.index(s - 1), r.index(s - 1)))
      return t.delete(i.before(s), n);
  t.delete(e, n);
}
function Ph(t, e) {
  let n = [], i = Math.min(t.depth, e.depth);
  for (let r = i; r >= 0; r--) {
    let o = t.start(r);
    if (o < t.pos - (t.depth - r) || e.end(r) > e.pos + (e.depth - r) || t.node(r).type.spec.isolating || e.node(r).type.spec.isolating)
      break;
    (o == e.start(r) || r == t.depth && r == e.depth && t.parent.inlineContent && e.parent.inlineContent && r && e.start(r - 1) == o - 1) && n.push(r);
  }
  return n;
}
class ui extends we {
  /**
  Construct an attribute step.
  */
  constructor(e, n, i) {
    super(), this.pos = e, this.attr = n, this.value = i;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ye.fail("No node at attribute step's position");
    let i = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      i[o] = n.attrs[o];
    i[this.attr] = this.value;
    let r = n.type.create(i, null, n.marks);
    return ye.fromReplace(e, this.pos, this.pos + 1, new L(C.from(r), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return Ue.empty;
  }
  invert(e) {
    return new ui(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new ui(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new ui(n.pos, n.attr, n.value);
  }
}
we.jsonID("attr", ui);
class dr extends we {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let r in e.attrs)
      n[r] = e.attrs[r];
    n[this.attr] = this.value;
    let i = e.type.create(n, e.content, e.marks);
    return ye.ok(i);
  }
  getMap() {
    return Ue.empty;
  }
  invert(e) {
    return new dr(this.attr, e.attrs[this.attr]);
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
    return new dr(n.attr, n.value);
  }
}
we.jsonID("docAttr", dr);
let gi = class extends Error {
};
gi = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
gi.prototype = Object.create(Error.prototype);
gi.prototype.constructor = gi;
gi.prototype.name = "TransformError";
class $a {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new cr();
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
      throw new gi(n.failed);
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
  Return a single range, in post-transform document positions,
  that covers all content changed by this transform. Returns null
  if no replacements are made. Note that this will ignore changes
  that add/remove marks without replacing the underlying content.
  */
  changedRange() {
    let e = 1e9, n = -1e9;
    for (let i = 0; i < this.mapping.maps.length; i++) {
      let r = this.mapping.maps[i];
      i && (e = r.map(e, 1), n = r.map(n, -1)), r.forEach((o, s, l, a) => {
        e = Math.min(e, l), n = Math.max(n, a);
      });
    }
    return e == 1e9 ? null : { from: e, to: n };
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
  replace(e, n = e, i = L.empty) {
    let r = ws(this.doc, e, n, i);
    return r && this.step(r), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, i) {
    return this.replace(e, n, new L(C.from(i), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, L.empty);
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
  replaceRange(e, n, i) {
    return F0(this, e, n, i), this;
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
  replaceRangeWith(e, n, i) {
    return W0(this, e, n, i), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return U0(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return E0(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return P0(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return H0(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, i, r = null) {
    return R0(this, e, n, i, r), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, i = null, r) {
    return N0(this, e, n, i, r), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, i) {
    return this.step(new ui(e, n, i)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new dr(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new ln(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let i = this.doc.nodeAt(e);
    if (!i)
      throw new RangeError("No node at position " + e);
    if (n instanceof oe)
      n.isInSet(i.marks) && this.step(new _n(e, n));
    else {
      let r = i.marks, o, s = [];
      for (; o = n.isInSet(r); )
        s.push(new _n(e, o)), r = o.removeFromSet(r);
      for (let l = s.length - 1; l >= 0; l--)
        this.step(s[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, n = 1, i) {
    return I0(this, e, n, i), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, i) {
    return M0(this, e, n, i), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, i) {
    return A0(this, e, n, i), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, i) {
    return _a(this, e, n, i), this;
  }
}
const Qs = /* @__PURE__ */ Object.create(null);
class B {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, i) {
    this.$anchor = e, this.$head = n, this.ranges = i || [new _h(e.min(n), e.max(n))];
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
  replace(e, n = L.empty) {
    let i = n.content.lastChild, r = null;
    for (let l = 0; l < n.openEnd; l++)
      r = i, i = i.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], d = e.mapping.slice(o);
      e.replaceRange(d.map(a.pos), d.map(c.pos), l ? L.empty : n), l == 0 && ld(e, o, (i ? i.isInline : r && r.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let i = e.steps.length, r = this.ranges;
    for (let o = 0; o < r.length; o++) {
      let { $from: s, $to: l } = r[o], a = e.mapping.slice(i), c = a.map(s.pos), d = a.map(l.pos);
      o ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, n), ld(e, i, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, i = !1) {
    let r = e.parent.inlineContent ? new I(e) : ni(e.node(0), e.parent, e.pos, e.index(), n, i);
    if (r)
      return r;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = n < 0 ? ni(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, i) : ni(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, i);
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
    return this.findFrom(e, n) || this.findFrom(e, -n) || new Ke(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return ni(e, e, 0, 0, 1) || new Ke(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return ni(e, e, e.content.size, e.childCount, -1) || new Ke(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let i = Qs[n.type];
    if (!i)
      throw new RangeError(`No selection type ${n.type} defined`);
    return i.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in Qs)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Qs[e] = n, n.prototype.jsonID = e, n;
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
B.prototype.visible = !0;
class _h {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let od = !1;
function sd(t) {
  !od && !t.parent.inlineContent && (od = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class I extends B {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    sd(e), sd(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let i = e.resolve(n.map(this.head));
    if (!i.parent.inlineContent)
      return B.near(i);
    let r = e.resolve(n.map(this.anchor));
    return new I(r.parent.inlineContent ? r : i, i);
  }
  replace(e, n = L.empty) {
    if (super.replace(e, n), n == L.empty) {
      let i = this.$from.marksAcross(this.$to);
      i && e.ensureMarks(i);
    }
  }
  eq(e) {
    return e instanceof I && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new ks(this.anchor, this.head);
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
  static create(e, n, i = n) {
    let r = e.resolve(n);
    return new this(r, i == n ? r : e.resolve(i));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, i) {
    let r = e.pos - n.pos;
    if ((!i || r) && (i = r >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = B.findFrom(n, i, !0) || B.findFrom(n, -i, !0);
      if (o)
        n = o.$head;
      else
        return B.near(n, i);
    }
    return e.parent.inlineContent || (r == 0 ? e = n : (e = (B.findFrom(e, -i, !0) || B.findFrom(e, i, !0)).$anchor, e.pos < n.pos != r < 0 && (e = n))), new I(e, n);
  }
}
B.jsonID("text", I);
class ks {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new ks(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return I.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class z extends B {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, i = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, i), this.node = n;
  }
  map(e, n) {
    let { deleted: i, pos: r } = n.mapResult(this.anchor), o = e.resolve(r);
    return i ? B.near(o) : new z(o);
  }
  content() {
    return new L(C.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof z && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ba(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new z(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new z(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
z.prototype.visible = !1;
B.jsonID("node", z);
class Ba {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: i } = e.mapResult(this.anchor);
    return n ? new ks(i, i) : new Ba(i);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), i = n.nodeAfter;
    return i && z.isSelectable(i) ? new z(n) : B.near(n);
  }
}
class Ke extends B {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = L.empty) {
    if (n == L.empty) {
      e.delete(0, e.doc.content.size);
      let i = B.atStart(e.doc);
      i.eq(e.selection) || e.setSelection(i);
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
    return new Ke(e);
  }
  map(e) {
    return new Ke(e);
  }
  eq(e) {
    return e instanceof Ke;
  }
  getBookmark() {
    return j0;
  }
}
B.jsonID("all", Ke);
const j0 = {
  map() {
    return this;
  },
  resolve(t) {
    return new Ke(t);
  }
};
function ni(t, e, n, i, r, o = !1) {
  if (e.inlineContent)
    return I.create(t, n);
  for (let s = i - (r > 0 ? 0 : 1); r > 0 ? s < e.childCount : s >= 0; s += r) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && z.isSelectable(l))
        return z.create(t, n - (r < 0 ? l.nodeSize : 0));
    } else {
      let a = ni(t, l, n + r, r < 0 ? l.childCount : 0, r, o);
      if (a)
        return a;
    }
    n += l.nodeSize * r;
  }
  return null;
}
function ld(t, e, n) {
  let i = t.steps.length - 1;
  if (i < e)
    return;
  let r = t.steps[i];
  if (!(r instanceof pe || r instanceof Se))
    return;
  let o = t.mapping.maps[i], s;
  o.forEach((l, a, c, d) => {
    s == null && (s = d);
  }), t.setSelection(B.near(t.doc.resolve(s), n));
}
const ad = 1, _r = 2, cd = 4;
class K0 extends $a {
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
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | ad) & ~_r, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & ad) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= _r, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return oe.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
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
    return (this.updated & _r) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & ~_r, this.storedMarks = null;
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
    let i = this.selection;
    return n && (e = e.mark(this.storedMarks || (i.empty ? i.$from.marks() : i.$from.marksAcross(i.$to) || oe.none))), i.replaceWith(this, e), this;
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
  insertText(e, n, i) {
    let r = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
    {
      if (i == null && (i = n), !e)
        return this.deleteRange(n, i);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(n);
        o = i == n ? s.marks() : s.marksAcross(this.doc.resolve(i));
      }
      return this.replaceRangeWith(n, i, r.text(e, o)), !this.selection.empty && this.selection.to == n + e.length && this.setSelection(B.near(this.selection.$to)), this;
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
    return this.updated |= cd, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & cd) > 0;
  }
}
function dd(t, e) {
  return !e || !t ? t : t.bind(e);
}
class zi {
  constructor(e, n, i) {
    this.name = e, this.init = dd(n.init, i), this.apply = dd(n.apply, i);
  }
}
const q0 = [
  new zi("doc", {
    init(t) {
      return t.doc || t.schema.topNodeType.createAndFill();
    },
    apply(t) {
      return t.doc;
    }
  }),
  new zi("selection", {
    init(t, e) {
      return t.selection || B.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    }
  }),
  new zi("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, i) {
      return i.selection.$cursor ? t.storedMarks : null;
    }
  }),
  new zi("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    }
  })
];
class el {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = q0.slice(), n && n.forEach((i) => {
      if (this.pluginsByKey[i.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + i.key + ")");
      this.plugins.push(i), this.pluginsByKey[i.key] = i, i.spec.state && this.fields.push(new zi(i.key, i.spec.state, i));
    });
  }
}
class Vt {
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
    for (let i = 0; i < this.config.plugins.length; i++)
      if (i != n) {
        let r = this.config.plugins[i];
        if (r.spec.filterTransaction && !r.spec.filterTransaction.call(r, e, this))
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
    let n = [e], i = this.applyInner(e), r = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = r ? r[s].n : 0, c = r ? r[s].state : this, d = a < n.length && l.spec.appendTransaction.call(l, a ? n.slice(a) : n, c, i);
          if (d && i.filterTransaction(d, s)) {
            if (d.setMeta("appendedTransaction", e), !r) {
              r = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                r.push(u < s ? { state: i, n: n.length } : { state: this, n: 0 });
            }
            n.push(d), i = i.applyInner(d), o = !0;
          }
          r && (r[s] = { state: i, n: n.length });
        }
      }
      if (!o)
        return { state: i, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new Vt(this.config), i = this.config.fields;
    for (let r = 0; r < i.length; r++) {
      let o = i[r];
      n[o.name] = o.apply(e, this[o.name], this, n);
    }
    return n;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new K0(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new el(e.doc ? e.doc.type.schema : e.schema, e.plugins), i = new Vt(n);
    for (let r = 0; r < n.fields.length; r++)
      i[n.fields[r].name] = n.fields[r].init(e, i);
    return i;
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
    let n = new el(this.schema, e.plugins), i = n.fields, r = new Vt(n);
    for (let o = 0; o < i.length; o++) {
      let s = i[o].name;
      r[s] = this.hasOwnProperty(s) ? this[s] : i[o].init(e, r);
    }
    return r;
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
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((i) => i.toJSON())), e && typeof e == "object")
      for (let i in e) {
        if (i == "doc" || i == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let r = e[i], o = r.spec.state;
        o && o.toJSON && (n[i] = o.toJSON.call(r, this[r.key]));
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
  static fromJSON(e, n, i) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let r = new el(e.schema, e.plugins), o = new Vt(r);
    return r.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = an.fromJSON(e.schema, n.doc);
      else if (s.name == "selection")
        o.selection = B.fromJSON(o.doc, n.selection);
      else if (s.name == "storedMarks")
        n.storedMarks && (o.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (i)
          for (let l in i) {
            let a = i[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(n, l)) {
              o[s.name] = c.fromJSON.call(a, e, n[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function zh(t, e, n) {
  for (let i in t) {
    let r = t[i];
    r instanceof Function ? r = r.bind(e) : i == "handleDOMEvents" && (r = zh(r, e, {})), n[i] = r;
  }
  return n;
}
class ie {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && zh(e.props, this, this.props), this.key = e.key ? e.key.key : $h("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const tl = /* @__PURE__ */ Object.create(null);
function $h(t) {
  return t in tl ? t + "$" + ++tl[t] : (tl[t] = 0, t + "$");
}
class se {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = $h(e);
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
const Fa = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function Bh(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Fh = (t, e, n) => {
  let i = Bh(t, n);
  if (!i)
    return !1;
  let r = Wa(i);
  if (!r) {
    let s = i.blockRange(), l = s && Ei(s);
    return l == null ? !1 : (e && e(t.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = r.nodeBefore;
  if (Qh(t, r, e, -1))
    return !0;
  if (i.parent.content.size == 0 && (yi(o, "end") || z.isSelectable(o)))
    for (let s = i.depth; ; s--) {
      let l = ws(t.doc, i.before(s), i.after(s), L.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(yi(o, "end") ? B.findFrom(a.doc.resolve(a.mapping.map(r.pos, -1)), -1) : z.create(a.doc, r.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || i.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && r.depth == i.depth - 1 ? (e && e(t.tr.delete(r.pos - o.nodeSize, r.pos).scrollIntoView()), !0) : !1;
}, Wh = (t, e, n) => {
  let i = Bh(t, n);
  if (!i)
    return !1;
  let r = Wa(i);
  return r ? jh(t, r, e) : !1;
}, Uh = (t, e, n) => {
  let i = qh(t, n);
  if (!i)
    return !1;
  let r = Ua(i);
  return r ? jh(t, r, e) : !1;
};
function jh(t, e, n) {
  let i = e.nodeBefore, r = i, o = e.pos - 1;
  for (; !r.isTextblock; o--) {
    if (r.type.spec.isolating)
      return !1;
    let d = r.lastChild;
    if (!d)
      return !1;
    r = d;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let d = l.firstChild;
    if (!d)
      return !1;
    l = d;
  }
  let c = ws(t.doc, o, a, L.empty);
  if (!c || c.from != o || c instanceof pe && c.slice.size >= a - o)
    return !1;
  if (n) {
    let d = t.tr.step(c);
    d.setSelection(I.create(d.doc, o)), n(d.scrollIntoView());
  }
  return !0;
}
function yi(t, e, n = !1) {
  for (let i = t; i; i = e == "start" ? i.firstChild : i.lastChild) {
    if (i.isTextblock)
      return !0;
    if (n && i.childCount != 1)
      return !1;
  }
  return !1;
}
const Kh = (t, e, n) => {
  let { $head: i, empty: r } = t.selection, o = i;
  if (!r)
    return !1;
  if (i.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : i.parentOffset > 0)
      return !1;
    o = Wa(i);
  }
  let s = o && o.nodeBefore;
  return !s || !z.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(z.create(t.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Wa(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function qh(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Gh = (t, e, n) => {
  let i = qh(t, n);
  if (!i)
    return !1;
  let r = Ua(i);
  if (!r)
    return !1;
  let o = r.nodeAfter;
  if (Qh(t, r, e, 1))
    return !0;
  if (i.parent.content.size == 0 && (yi(o, "start") || z.isSelectable(o))) {
    let s = ws(t.doc, i.before(), i.after(), L.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = t.tr.step(s);
        l.setSelection(yi(o, "start") ? B.findFrom(l.doc.resolve(l.mapping.map(r.pos)), 1) : z.create(l.doc, l.mapping.map(r.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && r.depth == i.depth - 1 ? (e && e(t.tr.delete(r.pos, r.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Jh = (t, e, n) => {
  let { $head: i, empty: r } = t.selection, o = i;
  if (!r)
    return !1;
  if (i.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : i.parentOffset < i.parent.content.size)
      return !1;
    o = Ua(i);
  }
  let s = o && o.nodeAfter;
  return !s || !z.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(z.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function Ua(t) {
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
const G0 = (t, e) => {
  let n = t.selection, i = n instanceof z, r;
  if (i) {
    if (n.node.isTextblock || !wn(t.doc, n.from))
      return !1;
    r = n.from;
  } else if (r = vs(t.doc, n.from, -1), r == null)
    return !1;
  if (e) {
    let o = t.tr.join(r);
    i && o.setSelection(z.create(o.doc, r - t.doc.resolve(r).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, J0 = (t, e) => {
  let n = t.selection, i;
  if (n instanceof z) {
    if (n.node.isTextblock || !wn(t.doc, n.to))
      return !1;
    i = n.to;
  } else if (i = vs(t.doc, n.to, 1), i == null)
    return !1;
  return e && e(t.tr.join(i).scrollIntoView()), !0;
}, X0 = (t, e) => {
  let { $from: n, $to: i } = t.selection, r = n.blockRange(i), o = r && Ei(r);
  return o == null ? !1 : (e && e(t.tr.lift(r, o).scrollIntoView()), !0);
}, Xh = (t, e) => {
  let { $head: n, $anchor: i } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(i) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function ja(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const Z0 = (t, e) => {
  let { $head: n, $anchor: i } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(i))
    return !1;
  let r = n.node(-1), o = n.indexAfter(-1), s = ja(r.contentMatchAt(o));
  if (!s || !r.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(B.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Zh = (t, e) => {
  let n = t.selection, { $from: i, $to: r } = n;
  if (n instanceof Ke || i.parent.inlineContent || r.parent.inlineContent)
    return !1;
  let o = ja(r.parent.contentMatchAt(r.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!i.parentOffset && r.index() < r.parent.childCount ? i : r).pos, l = t.tr.insert(s, o.createAndFill());
    l.setSelection(I.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Yh = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Pt(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let i = n.blockRange(), r = i && Ei(i);
  return r == null ? !1 : (e && e(t.tr.lift(i, r).scrollIntoView()), !0);
};
function Y0(t) {
  return (e, n) => {
    if (e.selection instanceof z && e.selection.node.isBlock) {
      let { $from: h } = e.selection;
      return !h.parentOffset || !Pt(e.doc, h.pos) ? !1 : (n && n(e.tr.split(h.pos).scrollIntoView()), !0);
    }
    if (!e.selection.$from.depth)
      return !1;
    let i = e.tr;
    !e.selection.empty && (e.selection instanceof I || e.selection instanceof Ke) && i.deleteSelection();
    let { $from: r } = i.selection, o = i.steps.length, s = [], l, a, c = !1, d = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        c = r.end(h) == r.pos + (r.depth - h), d = r.start(h) == r.pos - (r.depth - h), a = ja(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), s.unshift(c && a ? { type: a } : null), l = h;
        break;
      } else {
        if (h == 1)
          return !1;
        s.unshift(null);
      }
    let u = r.pos, f = Pt(i.doc, u, s.length, s);
    if (f || (s[0] = a ? { type: a } : null, f = Pt(i.doc, u, s.length, s)), !f)
      return !1;
    if (i.split(u, s.length, s), !c && d && r.node(l).type != a) {
      let h = i.mapping.slice(o), p = h.map(r.before(l)), m = i.doc.resolve(p);
      a && r.node(l - 1).canReplaceWith(m.index(), m.index() + 1, a) && i.setNodeMarkup(h.map(r.before(l)), a);
    }
    return n && n(i.scrollIntoView()), !0;
  };
}
const Q0 = Y0(), ey = (t, e) => {
  let { $from: n, to: i } = t.selection, r, o = n.sharedDepth(i);
  return o == 0 ? !1 : (r = n.before(o), e && e(t.tr.setSelection(z.create(t.doc, r))), !0);
};
function ty(t, e, n) {
  let i = e.nodeBefore, r = e.nodeAfter, o = e.index();
  return !i || !r || !i.type.compatibleContent(r.type) ? !1 : !i.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - i.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(r.isTextblock || wn(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Qh(t, e, n, i) {
  let r = e.nodeBefore, o = e.nodeAfter, s, l, a = r.type.spec.isolating || o.type.spec.isolating;
  if (!a && ty(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = r.contentMatchAt(r.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, p = C.empty;
      for (let y = s.length - 1; y >= 0; y--)
        p = C.from(s[y].create(null, p));
      p = C.from(r.copy(p));
      let m = t.tr.step(new Se(e.pos - 1, h, e.pos, h, new L(p, 1, 0), s.length, !0)), g = m.doc.resolve(h + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == r.type && wn(m.doc, g.pos) && m.join(g.pos), n(m.scrollIntoView());
    }
    return !0;
  }
  let d = o.type.spec.isolating || i > 0 && a ? null : B.findFrom(e, 1), u = d && d.$from.blockRange(d.$to), f = u && Ei(u);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(u, f).scrollIntoView()), !0;
  if (c && yi(o, "start", !0) && yi(r, "end")) {
    let h = r, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = o, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (n) {
        let y = C.empty;
        for (let v = p.length - 1; v >= 0; v--)
          y = C.from(p[v].copy(y));
        let b = t.tr.step(new Se(e.pos - p.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new L(y, p.length, 0), 0, !0));
        n(b.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function ep(t) {
  return function(e, n) {
    let i = e.selection, r = t < 0 ? i.$from : i.$to, o = r.depth;
    for (; r.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return r.node(o).isTextblock ? (n && n(e.tr.setSelection(I.create(e.doc, t < 0 ? r.start(o) : r.end(o)))), !0) : !1;
  };
}
const ny = ep(-1), iy = ep(1);
function ry(t, e = null) {
  return function(n, i) {
    let { $from: r, $to: o } = n.selection, s = r.blockRange(o), l = s && za(s, t, e);
    return l ? (i && i(n.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function ud(t, e = null) {
  return function(n, i) {
    let r = !1;
    for (let o = 0; o < n.selection.ranges.length && !r; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = n.selection.ranges[o];
      n.doc.nodesBetween(s, l, (a, c) => {
        if (r)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(t, e)))
          if (a.type == t)
            r = !0;
          else {
            let d = n.doc.resolve(c), u = d.index();
            r = d.parent.canReplaceWith(u, u + 1, t);
          }
      });
    }
    if (!r)
      return !1;
    if (i) {
      let o = n.tr;
      for (let s = 0; s < n.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = n.selection.ranges[s];
        o.setBlockType(l, a, t, e);
      }
      i(o.scrollIntoView());
    }
    return !0;
  };
}
function Ka(...t) {
  return function(e, n, i) {
    for (let r = 0; r < t.length; r++)
      if (t[r](e, n, i))
        return !0;
    return !1;
  };
}
Ka(Fa, Fh, Kh);
Ka(Fa, Gh, Jh);
Ka(Xh, Zh, Yh, Q0);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function oy(t, e = null) {
  return function(n, i) {
    let { $from: r, $to: o } = n.selection, s = r.blockRange(o);
    if (!s)
      return !1;
    let l = i ? n.tr : null;
    return sy(l, s, t, e) ? (i && i(l.scrollIntoView()), !0) : !1;
  };
}
function sy(t, e, n, i = null) {
  let r = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = s.resolve(e.start - 2);
    o = new wo(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new wo(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), r = !0;
  }
  let l = za(o, n, i, e);
  return l ? (t && ly(t, e, l, r, n), !0) : !1;
}
function ly(t, e, n, i, r) {
  let o = C.empty;
  for (let d = n.length - 1; d >= 0; d--)
    o = C.from(n[d].type.create(n[d].attrs, o));
  t.step(new Se(e.start - (i ? 2 : 0), e.end, e.start, e.end, new L(o, 0, 0), n.length, !0));
  let s = 0;
  for (let d = 0; d < n.length; d++)
    n[d].type == r && (s = d + 1);
  let l = n.length - s, a = e.start + n.length - (i ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, f = !0; d < u; d++, f = !1)
    !f && Pt(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(d).nodeSize;
  return t;
}
function ay(t) {
  return function(e, n) {
    let { $from: i, $to: r } = e.selection, o = i.blockRange(r, (s) => s.childCount > 0 && s.firstChild.type == t);
    return o ? n ? i.node(o.depth - 1).type == t ? cy(e, n, t, o) : dy(e, n, o) : !0 : !1;
  };
}
function cy(t, e, n, i) {
  let r = t.tr, o = i.end, s = i.$to.end(i.depth);
  o < s && (r.step(new Se(o - 1, s, o, s, new L(C.from(n.create(null, i.parent.copy())), 1, 0), 1, !0)), i = new wo(r.doc.resolve(i.$from.pos), r.doc.resolve(s), i.depth));
  const l = Ei(i);
  if (l == null)
    return !1;
  r.lift(i, l);
  let a = r.doc.resolve(r.mapping.map(o, -1) - 1);
  return wn(r.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && r.join(a.pos), e(r.scrollIntoView()), !0;
}
function dy(t, e, n) {
  let i = t.tr, r = n.parent;
  for (let h = n.end, p = n.endIndex - 1, m = n.startIndex; p > m; p--)
    h -= r.child(p).nodeSize, i.delete(h - 1, h + 1);
  let o = i.doc.resolve(n.start), s = o.nodeAfter;
  if (i.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == r.childCount, c = o.node(-1), d = o.index(-1);
  if (!c.canReplace(d + (l ? 0 : 1), d + 1, s.content.append(a ? C.empty : C.from(r))))
    return !1;
  let u = o.pos, f = u + s.nodeSize;
  return i.step(new Se(u - (l ? 1 : 0), f + (a ? 1 : 0), u + 1, f - 1, new L((l ? C.empty : C.from(r.copy(C.empty))).append(a ? C.empty : C.from(r.copy(C.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(i.scrollIntoView()), !0;
}
function uy(t) {
  return function(e, n) {
    let { $from: i, $to: r } = e.selection, o = i.blockRange(r, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != t)
      return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type, d = C.from(c ? t.create() : null), u = new L(C.from(t.create(null, C.from(l.type.create(null, d)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new Se(f - (c ? 3 : 1), h, f, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Te = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, bi = function(t) {
  let e = t.assignedSlot || t.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Pl = null;
const Ht = function(t, e, n) {
  let i = Pl || (Pl = document.createRange());
  return i.setEnd(t, n ?? t.nodeValue.length), i.setStart(t, e || 0), i;
}, fy = function() {
  Pl = null;
}, zn = function(t, e, n, i) {
  return n && (fd(t, e, n, i, -1) || fd(t, e, n, i, 1));
}, hy = /^(img|br|input|textarea|hr)$/i;
function fd(t, e, n, i, r) {
  for (var o; ; ) {
    if (t == n && e == i)
      return !0;
    if (e == (r < 0 ? 0 : Ve(t))) {
      let s = t.parentNode;
      if (!s || !$(s) || Er(t) || hy.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Te(t) + (r < 0 ? 0 : 1), t = s;
    } else if ($(t)) {
      let s = t.childNodes[e + (r < 0 ? -1 : 0)];
      if ($(s) && s.contentEditable == "false")
        if (!((o = s.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += r;
        else
          return !1;
      else
        t = s, e = r < 0 ? Ve(t) : 0;
    } else
      return !1;
  }
}
function Ve(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function $(t) {
  return t.nodeType == 1;
}
function ve(t) {
  return t.nodeType == 3;
}
function $n(t, e) {
  return e ? t.contains($(e) ? e : e.parentNode) : !1;
}
function py(t, e) {
  for (; ; ) {
    if (ve(t) && e)
      return t;
    if ($(t) && e > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e - 1], e = Ve(t);
    } else if (t.parentNode && !Er(t))
      e = Te(t), t = t.parentNode;
    else
      return null;
  }
}
function my(t, e) {
  for (; ; ) {
    if (ve(t) && e < t.nodeValue.length)
      return t;
    if ($(t) && e < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e], e = 0;
    } else if (t.parentNode && !Er(t))
      e = Te(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
function gy(t, e, n) {
  for (let i = e == 0, r = e == Ve(t); i || r; ) {
    if (t == n)
      return !0;
    let o = Te(t);
    if (t = t.parentNode, !t)
      return !1;
    i = i && o == 0, r = r && o == Ve(t);
  }
}
function Er(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const xs = function(t) {
  return t.focusNode && zn(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function yy(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
function by(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function vy(t, e, n) {
  if (t.caretPositionFromPoint)
    try {
      let i = t.caretPositionFromPoint(e, n);
      if (i)
        return { node: i.offsetNode, offset: Math.min(Ve(i.offsetNode), i.offset) };
    } catch {
    }
  if (t.caretRangeFromPoint) {
    let i = t.caretRangeFromPoint(e, n);
    if (i)
      return { node: i.startContainer, offset: Math.min(Ve(i.startContainer), i.startOffset) };
  }
}
const yt = typeof navigator < "u" ? navigator : null, hd = typeof document < "u" ? document : null, kn = yt && yt.userAgent || "", _l = /Edge\/(\d+)/.exec(kn), tp = /MSIE \d/.exec(kn), zl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(kn), Fe = !!(tp || zl || _l), dn = tp ? document.documentMode : zl ? +zl[1] : _l ? +_l[1] : 0, qe = !Fe && /gecko\/(\d+)/i.test(kn);
qe && +(/Firefox\/(\d+)/.exec(kn) || [0, 0])[1];
const $l = !Fe && /Chrome\/(\d+)/.exec(kn), Oe = !!$l, np = $l ? +$l[1] : 0, Ie = !Fe && !!yt && /Apple Computer/.test(yt.vendor), vi = Ie && (/Mobile\/\w+/.test(kn) || !!yt && yt.maxTouchPoints > 2), Ye = vi || (yt ? /Mac/.test(yt.platform) : !1), ip = yt ? /Win/.test(yt.platform) : !1, Nt = /Android \d/.test(kn), Ss = !!hd && "webkitFontSmoothing" in hd.documentElement.style, wy = Ss ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function ky(t) {
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
function Mt(t, e) {
  return typeof t == "number" ? t : t[e];
}
function xy(t) {
  let e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, i = e.height / t.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t.clientWidth * n,
    top: e.top,
    bottom: e.top + t.clientHeight * i
  };
}
function pd(t, e, n) {
  if (!Bl(e) && e.left == 0)
    return;
  let i = t.someProp("scrollThreshold") || 0, r = t.someProp("scrollMargin") || 5, o = t.dom.ownerDocument;
  for (let s = n || t.dom; s; ) {
    if (!$(s)) {
      s = bi(s);
      continue;
    }
    let l = s == o.body, a = l ? ky(o) : xy(s), c = 0, d = 0;
    if (e.top < a.top + Mt(i, "top") ? d = -(a.top - e.top + Mt(r, "top")) : e.bottom > a.bottom - Mt(i, "bottom") && (d = e.bottom - e.top > a.bottom - a.top ? e.top + Mt(r, "top") - a.top : e.bottom - a.bottom + Mt(r, "bottom")), e.left < a.left + Mt(i, "left") ? c = -(a.left - e.left + Mt(r, "left")) : e.right > a.right - Mt(i, "right") && (c = e.right - a.right + Mt(r, "right")), c || d)
      if (l)
        o.defaultView.scrollBy(c, d);
      else {
        let f = s.scrollLeft, h = s.scrollTop;
        d && (s.scrollTop += d), c && (s.scrollLeft += c);
        let p = s.scrollLeft - f, m = s.scrollTop - h;
        e = { left: e.left - p, top: e.top - m, right: e.right - p, bottom: e.bottom - m };
      }
    let u = l ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(u))
      break;
    s = u == "absolute" ? s.offsetParent : bi(s);
  }
}
function Sy(t) {
  let e = t.dom.getBoundingClientRect(), n = Math.max(0, e.top), i, r;
  for (let o = (e.left + e.right) / 2, s = n + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = t.root.elementFromPoint(o, s);
    if (!l || l == t.dom || !t.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= n - 20) {
      i = l, r = a.top;
      break;
    }
  }
  return { refDOM: i, refTop: r, stack: rp(t.dom) };
}
function rp(t) {
  let e = [], n = t.ownerDocument;
  for (let i = t; i && (e.push({ dom: i, top: i.scrollTop, left: i.scrollLeft }), t != n); i = bi(i))
    ;
  return e;
}
function Cy({ refDOM: t, refTop: e, stack: n }) {
  let i = t ? t.getBoundingClientRect().top : 0;
  op(n, i == 0 ? 0 : i - e);
}
function op(t, e) {
  for (let n = 0; n < t.length; n++) {
    let { dom: i, top: r, left: o } = t[n];
    i.scrollTop != r + e && (i.scrollTop = r + e), i.scrollLeft != o && (i.scrollLeft = o);
  }
}
let Zn = null;
function My(t) {
  if (t.setActive)
    return t.setActive();
  if (Zn)
    return t.focus(Zn);
  let e = rp(t);
  t.focus(Zn == null ? {
    get preventScroll() {
      return Zn = { preventScroll: !0 }, !0;
    }
  } : void 0), Zn || (Zn = !1, op(e, 0));
}
function sp(t, e) {
  let n, i = 2e8, r, o = 0, s = e.top, l = e.top, a, c;
  for (let d = t.firstChild, u = 0; d; d = d.nextSibling, u++) {
    let f;
    if ($(d))
      f = d.getClientRects();
    else if (ve(d))
      f = Ht(d).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < i) {
          n = d, i = m, r = m && ve(n) ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, $(d) && m && (o = u + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = d, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !n && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = u + 1);
    }
  }
  return !n && a && (n = a, r = c, i = 0), n && ve(n) ? Ay(n, r) : !n || i ? { node: t, offset: o } : sp(n, r);
}
function Ay(t, e) {
  let n = t.nodeValue.length, i = document.createRange(), r;
  for (let o = 0; o < n; o++) {
    i.setEnd(t, o + 1), i.setStart(t, o);
    let s = Yt(i, 1);
    if (s.top != s.bottom && qa(e, s)) {
      r = { node: t, offset: o + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
      break;
    }
  }
  return i.detach(), r || { node: t, offset: 0 };
}
function qa(t, e) {
  return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
}
function Ty(t, e) {
  let n = t.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function Ey(t, e, n) {
  let { node: i, offset: r } = sp(e, n), o = -1;
  if ($(i) && !i.firstChild) {
    let s = i.getBoundingClientRect();
    o = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return t.docView.posFromDOM(i, r, o);
}
function Ly(t, e, n, i) {
  let r = -1;
  for (let o = e, s = !1; o != t.dom; ) {
    let l = t.docView.nearestDesc(o, !0), a;
    if (!l)
      return null;
    if ($(l.dom) && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!s && a.left > i.left || a.top > i.top ? r = l.posBefore : (!s && a.right < i.left || a.bottom < i.top) && (r = l.posAfter), s = !0), !l.contentDOM && r < 0 && !l.node.isText))
      return (l.node.isBlock ? i.top < (a.top + a.bottom) / 2 : i.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    o = l.dom.parentNode;
  }
  return r > -1 ? r : t.docView.posFromDOM(e, n, -1);
}
function lp(t, e, n) {
  let i = t.childNodes.length;
  if (i && n.top < n.bottom)
    for (let r = Math.max(0, Math.min(i - 1, Math.floor(i * (e.top - n.top) / (n.bottom - n.top)) - 2)), o = r; ; ) {
      let s = t.childNodes[o];
      if ($(s)) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (qa(e, c))
            return lp(s, e, c);
        }
      }
      if ((o = (o + 1) % i) == r)
        break;
    }
  return t;
}
function Oy(t, e) {
  let n = t.dom.ownerDocument, i, r = 0, o = vy(n, e.left, e.top);
  o && ({ node: i, offset: r } = o);
  let s = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top), l;
  if (!s || !t.dom.contains(s)) {
    let c = t.dom.getBoundingClientRect();
    if (!qa(e, c) || (s = lp(t.dom, e, c), !s))
      return null;
  }
  if (Ie)
    for (let c = s; i && c; c = bi(c))
      c.draggable && (i = void 0);
  if (s = Ty(s, e), i) {
    if (qe && $(i) && (r = Math.min(r, i.childNodes.length), r < i.childNodes.length)) {
      let d = i.childNodes[r], u;
      d.nodeName == "IMG" && (u = d.getBoundingClientRect()).right <= e.left && u.bottom > e.top && r++;
    }
    let c;
    Ss && r && $(i) && $(c = i.childNodes[r - 1]) && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && r--, i == t.dom && r == i.childNodes.length - 1 && $(i.lastChild) && e.top > i.lastChild.getBoundingClientRect().bottom ? l = t.state.doc.content.size : (r == 0 || !$(i) || i.childNodes[r - 1].nodeName != "BR") && (l = Ly(t, i, r, e));
  }
  l == null && (l = Ey(t, s, e));
  let a = t.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Bl(t) {
  return t.top < t.bottom || t.left < t.right;
}
function Yt(t, e) {
  let n = t.getClientRects();
  if (n.length) {
    let i = n[e < 0 ? 0 : n.length - 1];
    if (Bl(i))
      return i;
  }
  return Array.prototype.find.call(n, Bl) || t.getBoundingClientRect();
}
const Hy = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function ap(t, e, n) {
  let { node: i, offset: r, atom: o } = t.docView.domFromPos(e, n < 0 ? -1 : 1), s = Ss || qe;
  if (ve(i))
    if (s && (Hy.test(i.nodeValue) || (n < 0 ? !r : r == i.nodeValue.length))) {
      let a = Yt(Ht(i, r, r), n);
      if (qe && r && /\s/.test(i.nodeValue[r - 1]) && r < i.nodeValue.length) {
        let c = Yt(Ht(i, r - 1, r - 1), -1);
        if (c.top == a.top) {
          let d = Yt(Ht(i, r, r + 1), -1);
          if (d.top != a.top)
            return Ri(d, d.left < c.left);
        }
      }
      return a;
    } else {
      let a = r, c = r, d = n < 0 ? 1 : -1;
      return n < 0 && !r ? (c++, d = -1) : n >= 0 && r == i.nodeValue.length ? (a--, d = 1) : n < 0 ? a-- : c++, Ri(Yt(Ht(i, a, c), d), d < 0);
    }
  if (!t.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && r && (n < 0 || r == Ve(i))) {
      let a = i.childNodes[r - 1];
      if ($(a))
        return nl(a.getBoundingClientRect(), !1);
    }
    if (o == null && r < Ve(i)) {
      let a = i.childNodes[r];
      if ($(a))
        return nl(a.getBoundingClientRect(), !0);
    }
    return nl(i.getBoundingClientRect(), n >= 0);
  }
  if (o == null && r && (n < 0 || r == Ve(i))) {
    let a = i.childNodes[r - 1], c = ve(a) ? Ht(a, Ve(a) - (s ? 0 : 1)) : $(a) && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return Ri(Yt(c, 1), !1);
  }
  if (o == null && r < Ve(i)) {
    let a = i.childNodes[r];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? ve(a) ? Ht(a, 0, s ? 0 : 1) : $(a) ? a : null : null;
    if (c)
      return Ri(Yt(c, -1), !0);
  }
  return Ri(Yt(ve(i) ? Ht(i) : i, -n), n >= 0);
}
function Ri(t, e) {
  if (t.width == 0)
    return t;
  let n = e ? t.left : t.right;
  return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function nl(t, e) {
  if (t.height == 0)
    return t;
  let n = e ? t.top : t.bottom;
  return { top: n, bottom: n, left: t.left, right: t.right };
}
function cp(t, e, n) {
  let i = t.state, r = t.root.activeElement;
  i != e && t.updateState(e), r != t.dom && t.focus();
  try {
    return n();
  } finally {
    i != e && t.updateState(i), r != t.dom && r && r.focus();
  }
}
function Ry(t, e, n) {
  let i = e.selection, r = n == "up" ? i.$from : i.$to;
  return cp(t, e, () => {
    let { node: o } = t.docView.domFromPos(r.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let l = t.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = ap(t, r.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if ($(l))
        a = l.getClientRects();
      else if (ve(l))
        a = Ht(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d.bottom > d.top + 1 && (n == "up" ? s.top - d.top > (d.bottom - s.top) * 2 : d.bottom - s.bottom > (s.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Vy = /[\u0590-\u08ac]/;
function Ny(t, e, n) {
  let { $head: i } = e.selection;
  if (!i.parent.isTextblock)
    return !1;
  let r = i.parentOffset, o = !r, s = r == i.parent.content.size, l = t.domSelection();
  return l ? !Vy.test(i.parent.textContent) || !l.modify ? n == "left" || n == "backward" ? o : s : cp(t, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: d, anchorOffset: u } = t.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", n, "character");
    let h = i.depth ? t.docView.domAfterPos(i.before()) : t.dom, { focusNode: p, focusOffset: m } = t.domSelectionRange(), g = p && !$n(h, p) || a == p && c == m;
    try {
      l.collapse(d, u), a && (a != d || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  }) : i.pos == i.start() || i.pos == i.end();
}
let md = null, gd = null, yd = !1;
function Iy(t, e, n) {
  return md == e && gd == n ? yd : (md = e, gd = n, yd = n == "up" || n == "down" ? Ry(t, e, n) : Ny(t, e, n));
}
const Qe = 0, bd = 1, En = 2, it = 3;
class Lr {
  constructor(e, n, i, r) {
    this.parent = e, this.children = n, this.dom = i, this.contentDOM = r, this.dirty = Qe, i.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, n, i) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule(e) {
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
    for (let n = 0, i = this.posAtStart; ; n++) {
      let r = this.children[n];
      if (r == e)
        return i;
      i += r.size;
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
  localPosFromDOM(e, n, i) {
    if (this.contentDOM && $n(this.contentDOM, e))
      if (i < 0) {
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
    let r;
    if (e == this.dom && this.contentDOM)
      r = n > Te(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      let o = e.compareDocumentPosition(this.contentDOM);
      o & 16 ? r = n > Array.from(e.childNodes).findIndex((s) => s.contains(this.contentDOM)) : r = !(o & 4);
    } else if (this.dom.firstChild) {
      if (n == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            r = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (r == null && n == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            r = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return r ?? i > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = !1) {
    for (let i = !0, r = e; r; r = r.parentNode) {
      let o = this.getDesc(r), s;
      if (o && (!n || o.node))
        if (i && (s = o.nodeDOM) && !($(s) ? $n(s, e) : s == e))
          i = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let i = n; i; i = i.parent)
      if (i == this)
        return n;
  }
  posFromDOM(e, n, i) {
    for (let r = e; r; r = r.parentNode) {
      let o = this.getDesc(r);
      if (o)
        return o.localPosFromDOM(e, n, i);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, i = 0; n < this.children.length; n++) {
      let r = this.children[n], o = i + r.size;
      if (i == e && o != i) {
        for (; !r.border && r.children.length; )
          for (let s = 0; s < r.children.length; s++) {
            let l = r.children[s];
            if (l.size) {
              r = l;
              break;
            }
          }
        return r;
      }
      if (e < o)
        return r.descAt(e - i - r.border);
      i = o;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let i = 0, r = 0;
    for (let o = 0; i < this.children.length; i++) {
      let s = this.children[i], l = o + s.size;
      if (l > e) {
        r = e - o;
        break;
      }
      o = l;
    }
    if (r)
      return this.children[i].domFromPos(r - this.children[i].border, n);
    for (; i > 0; i--) {
      let o = this.children[i - 1];
      if (o.size || !(o instanceof up || o instanceof dp && o.side >= 0))
        break;
    }
    if (n <= 0) {
      let o, s = !0;
      for (; o = i ? this.children[i - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); i--, s = !1)
        ;
      return o && n && s && !o.border && !o.domAtom ? o.domFromPos(o.size, n) : { node: this.contentDOM, offset: o ? Te(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = i < this.children.length ? this.children[i] : null, !(!o || o.dom.parentNode == this.contentDOM); i++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, n) : { node: this.contentDOM, offset: o ? Te(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, i = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let r = -1, o = -1;
    for (let s = i, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (r == -1 && e <= c) {
        let d = s + a.border;
        if (e >= d && n <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, n, d);
        e = s;
        for (let u = l; u > 0; u--) {
          let f = this.children[u - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            r = Te(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        r == -1 && (r = 0);
      }
      if (r > -1 && (c > n || l == this.children.length - 1)) {
        n = c;
        for (let d = l + 1; d < this.children.length; d++) {
          let u = this.children[d];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            o = Te(u.dom);
            break;
          }
          n += u.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: r, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: i } = this.domFromPos(e, 0);
    if (!$(n) || i == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[i];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, i, r = !1) {
    let o = Math.min(e, n), s = Math.max(e, n);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let m = this.children[h], g = p + m.size;
      if (o > p && s < g)
        return m.setSelection(e - p - m.border, n - p - m.border, i, r);
      p = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = n == e ? l : this.domFromPos(n, n ? -1 : 1), c = i.root.getSelection(), d = i.domSelectionRange(), u = !1;
    if ((qe || Ie) && e == n) {
      let { node: h, offset: p } = l;
      if (ve(h)) {
        if (u = !!(p && h.nodeValue[p - 1] == `
`), u && p == h.nodeValue.length)
          for (let m = h, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: Te(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = h.childNodes[p - 1];
        u = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (qe && d.focusNode && d.focusNode != a.node && $(d.focusNode)) {
      let h = d.focusNode.childNodes[d.focusOffset];
      h && h.contentEditable == "false" && (r = !0);
    }
    if (!(r || u && Ie) && zn(l.node, l.offset, d.anchorNode, d.anchorOffset) && zn(a.node, a.offset, d.focusNode, d.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == n) && !(u && qe)) {
      c.collapse(l.node, l.offset);
      try {
        e != n && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > n) {
        let p = l;
        l = a, a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
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
    for (let i = 0, r = 0; r < this.children.length; r++) {
      let o = this.children[r], s = i + o.size;
      if (i == s ? e <= s && n >= i : e < s && n > i) {
        let l = i + o.border, a = s - o.border;
        if (e >= l && n <= a) {
          this.dirty = e == i || n == s ? En : bd, e == l && n == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = it : o.markDirty(e - l, n - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? En : it;
      }
      i = s;
    }
    this.dirty = En;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let i = e == 1 ? En : bd;
      n.dirty < i && (n.dirty = i);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class dp extends Lr {
  constructor(e, n, i, r) {
    let o, s = n.type.toDOM;
    if (typeof s == "function" && (s = s(i, () => {
      if (!o)
        return r;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !n.type.spec.raw) {
      let l = $(s) ? s : document.createElement("span");
      l != s && (l.appendChild(s), s = l), l.hasAttribute("contenteditable") || (l.contentEditable = "false"), l.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = n, this.widget = n, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Qe && e.type.eq(this.widget.type);
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
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Dy extends Lr {
  constructor(e, n, i, r) {
    super(e, [], n, null), this.textDOM = i, this.text = r;
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
class un extends Lr {
  constructor(e, n, i, r, o) {
    super(e, [], i, r), this.mark = n, this.spec = o;
  }
  static create(e, n, i, r) {
    let o = r.nodeViews[n.type.name], s = o && o(n, r, i);
    return (!s || !s.dom) && (s = vn.renderSpec(document, n.type.spec.toDOM(n, i), null, n.attrs)), new un(e, n, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & it || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != it && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != Qe) {
      let i = this.parent;
      for (; !i.node; )
        i = i.parent;
      i.dirty < this.dirty && (i.dirty = this.dirty), this.dirty = Qe;
    }
  }
  slice(e, n, i) {
    let r = un.create(this.parent, this.mark, !0, i), o = this.children, s = this.size;
    n < s && (o = Wl(o, n, s, i)), e > 0 && (o = Wl(o, 0, e, i));
    for (let l = 0; l < o.length; l++)
      o[l].parent = r;
    return r.children = o, r;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class fn extends Lr {
  constructor(e, n, i, r, o, s, l) {
    super(e, [], o, s), this.node = n, this.outerDeco = i, this.innerDeco = r, this.nodeDOM = l;
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
  static create(e, n, i, r, o, s) {
    let l = o.nodeViews[n.type.name], a, c = l && l(n, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, i, r), d = c && c.dom, u = c && c.contentDOM;
    if (n.isText) {
      if (!d)
        d = document.createTextNode(n.text);
      else if (!ve(d))
        throw new RangeError("Text must be rendered as a DOM text node");
    } else d || ({ dom: d, contentDOM: u } = vn.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
    !u && !n.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), n.type.spec.draggable && (d.draggable = !0));
    let f = d;
    return d = pp(d, i, n), c ? a = new Py(e, n, i, r, d, u || null, f, c) : n.isText ? new Cs(e, n, i, r, d, f) : new fn(e, n, i, r, d, u || null, f);
  }
  parseRule(e) {
    if (this.node.type.spec.reparseInView)
      return null;
    let n = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (n.preserveWhitespace = "full"), !this.contentDOM)
      n.getContent = () => this.node.content;
    else if (!this.contentLost)
      n.contentElement = this.contentDOM;
    else {
      for (let i = this.children.length - 1; i >= 0; i--) {
        let r = this.children[i];
        if (this.dom.contains(r.dom.parentNode)) {
          n.contentElement = r.dom.parentNode;
          break;
        }
      }
      if (!n.contentElement) {
        let i = e && e.find((r) => $(r) && e.indexOf(r.parentNode) < 0 && this.dom.contains(r));
        i ? n.contentElement = i : n.getContent = () => C.empty;
      }
    }
    return n;
  }
  matchesNode(e, n, i) {
    return this.dirty == Qe && e.eq(this.node) && So(n, this.outerDeco) && i.eq(this.innerDeco);
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
    let i = this.node.inlineContent, r = n, o = e.composing ? this.localCompositionInfo(e, n) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new zy(this, s && s.node, e), c = this.node.inlineContent, d = c && this.node.isBlock;
    Fy(this.node, this.innerDeco, (u, f, h) => {
      u.spec.marks ? a.syncToMarks(u.spec.marks, i, e, f) : u.type.side >= 0 && !h && a.syncToMarks(f == this.node.childCount ? oe.none : this.node.child(f).marks, i, e, f), a.placeWidget(u, e, r);
    }, (u, f, h, p) => {
      a.syncToMarks(u.marks, i, e, p), d && u.isAtom && !u.isText && a.addHackNode("IMG", a.top);
      let m;
      a.findNodeMatch(u, f, h, p) || l && e.state.selection.from > r && e.state.selection.to < r + u.nodeSize && (m = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(u, f, h, m, e) || a.updateNextNode(u, f, h, e, p, r) || a.addNode(u, f, h, e, r), r += u.nodeSize, c && (d = u.isAtom && !u.isText);
    }), a.syncToMarks([], i, e, 0), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == En) && (s && this.protectLocalComposition(e, s), fp(this.contentDOM, this.children, e), vi && Wy(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: i, to: r } = e.state.selection;
    if (!(e.state.selection instanceof I) || i < n || r > n + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = Uy(this.node.content, s, i - n, r - n);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: i, text: r }) {
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
    let s = new Dy(this, o, n, r);
    e.input.compositionNodes.push(s), this.children = Wl(this.children, i, i + r.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, i, r) {
    return this.dirty == it || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, i, r), !0);
  }
  updateInner(e, n, i, r) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = i, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = Qe;
  }
  updateOuterDeco(e) {
    if (So(e, this.outerDeco))
      return;
    let n = !$(this.nodeDOM), i = this.dom;
    this.dom = hp(this.dom, this.nodeDOM, Fl(this.outerDeco, this.node, n), Fl(e, this.node, n)), this.dom != i && (i.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    $(this.nodeDOM) && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
  }
  // Remove selected node marking from this node.
  deselectNode() {
    $(this.nodeDOM) && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function vd(t, e, n, i, r) {
  pp(i, e, t);
  let o = new fn(void 0, t, e, n, i, i, i);
  return o.contentDOM && o.updateChildren(r, 0), o;
}
class Cs extends fn {
  constructor(e, n, i, r, o, s) {
    super(e, n, i, r, o, null, s);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, n, i, r) {
    return this.dirty == it || this.dirty != Qe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != Qe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = Qe, !0);
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
  localPosFromDOM(e, n, i) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, i);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, i) {
    let r = this.node.cut(e, n), o = document.createTextNode(r.text);
    return new Cs(this.parent, r, this.outerDeco, this.innerDeco, o, o);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = it);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class up extends Lr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Qe && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Py extends fn {
  constructor(e, n, i, r, o, s, l, a) {
    super(e, n, i, r, o, s, l), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, i, r) {
    if (this.dirty == it)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, n, i);
      return o && this.updateInner(e, n, i, r), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, i, r);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, i, r) {
    this.spec.setSelection ? this.spec.setSelection(e, n, i.root) : super.setSelection(e, n, i, r);
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
function fp(t, e, n) {
  let i = t.firstChild, r = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == t) {
      for (; l != i; )
        i = wd(i), r = !0;
      i = i.nextSibling;
    } else
      r = !0, t.insertBefore(l, i);
    if (s instanceof un) {
      let a = i ? i.previousSibling : t.lastChild;
      fp(s.contentDOM, s.children, n), i = a ? a.nextSibling : t.firstChild;
    }
  }
  for (; i; )
    i = wd(i), r = !0;
  r && n.trackWrites == t && (n.trackWrites = null);
}
const Ui = function(t) {
  t && (this.nodeName = t);
};
Ui.prototype = /* @__PURE__ */ Object.create(null);
const Ln = [new Ui()];
function Fl(t, e, n) {
  if (t.length == 0)
    return Ln;
  let i = n ? Ln[0] : new Ui(), r = [i];
  for (let o = 0; o < t.length; o++) {
    let s = t[o].type.attrs;
    if (s) {
      s.nodeName && r.push(i = new Ui(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (n && r.length == 1 && r.push(i = new Ui(e.isInline ? "span" : "div")), l == "class" ? i.class = (i.class ? i.class + " " : "") + a : l == "style" ? i.style = (i.style ? i.style + ";" : "") + a : l != "nodeName" && (i[l] = a));
      }
    }
  }
  return r;
}
function hp(t, e, n, i) {
  if (n == Ln && i == Ln)
    return e;
  let r = e;
  for (let o = 0; o < i.length; o++) {
    let s = i[o], l = n[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && r != t && (a = r.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(r), l = Ln[0]), r = a;
    }
    _y(r, l || Ln[0], s);
  }
  return r;
}
function _y(t, e, n) {
  for (let i in e)
    i != "class" && i != "style" && i != "nodeName" && !(i in n) && t.removeAttribute(i);
  for (let i in n)
    i != "class" && i != "style" && i != "nodeName" && n[i] != e[i] && t.setAttribute(i, n[i]);
  if (e.class != n.class) {
    let i = e.class ? e.class.split(" ").filter(Boolean) : [], r = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && t.classList.remove(i[o]);
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && t.classList.add(r[o]);
    t.classList.length == 0 && t.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let i = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, r;
      for (; r = i.exec(e.style); )
        t.style.removeProperty(r[1]);
    }
    n.style && (t.style.cssText += n.style);
  }
}
function pp(t, e, n) {
  return hp(t, t, Ln, Fl(e, n, !$(t)));
}
function So(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].type.eq(e[n].type))
      return !1;
  return !0;
}
function wd(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class zy {
  constructor(e, n, i) {
    this.lock = n, this.view = i, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = $y(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let i = e; i < n; i++)
        this.top.children[i].destroy();
      this.top.children.splice(e, n - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, i, r) {
    let o = 0, s = this.stack.length >> 1, l = Math.min(s, e.length);
    for (; o < l && (o == s - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(e[o]) && e[o].type.spec.spanning !== !1; )
      o++;
    for (; o < s; )
      this.destroyRest(), this.top.dirty = Qe, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1, c = this.top.children.length;
      r < this.preMatch.index && (c = Math.min(this.index + 3, c));
      for (let d = this.index; d < c; d++) {
        let u = this.top.children[d];
        if (u.matchesMark(e[s]) && !this.isLocked(u.dom)) {
          a = d;
          break;
        }
      }
      if (a < 0 && this.index < this.top.children.length) {
        let d = this.top.children[this.index];
        d instanceof un && d.dirty != it && d.mark.type == e[s].type && d.spec.update && !this.isLocked(d.dom) && d.spec.update(e[s]) && (d.mark = e[s], a = this.index, this.changed = !0);
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let d = un.create(this.top, e[s], n, i);
        this.top.children.splice(this.index, 0, d), this.top = d, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, i, r) {
    let o = -1, s;
    if (r >= this.preMatch.index && (s = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && s.matchesNode(e, n, i))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, n, i) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, n, i, r, o) {
    let s = this.top.children[r];
    return s.dirty == it && s.dom == s.contentDOM && (s.dirty = En), s.update(e, n, i, o) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let i = e.pmViewDesc;
        if (i) {
          for (let r = this.index; r < this.top.children.length; r++)
            if (this.top.children[r] == i)
              return r;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, i, r, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof fn) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let d = a.dom, u, f = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != it && So(n, a.outerDeco));
        if (!f && a.update(e, n, i, r))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!f && (u = this.recreateWrapper(a, e, n, i, r, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = u, u.contentDOM && (u.dirty = En, u.updateChildren(r, s + 1), u.dirty = Qe), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, i, r, o, s) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content) || !So(i, e.outerDeco) || !r.eq(e.innerDeco))
      return null;
    let l = fn.create(this.top, n, i, r, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, i, r, o) {
    let s = fn.create(this.top, e, n, i, r, o);
    s.contentDOM && s.updateChildren(r, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, n, i) {
    let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new dp(this.top, e, n, i);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof un; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Cs) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Ie || Oe) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let i = document.createElement(e);
      e == "IMG" && (i.className = "ProseMirror-separator", i.alt = ""), e == "BR" && (i.className = "ProseMirror-trailingBreak");
      let r = new up(this.top, [], i, null);
      n != this.top ? n.children.push(r) : n.children.splice(this.index++, 0, r), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || $(e) && e.contains(this.lock.parentNode));
  }
}
function $y(t, e) {
  let n = e, i = n.children.length, r = t.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; r > 0; ) {
    let l;
    for (; ; )
      if (i) {
        let c = n.children[i - 1];
        if (c instanceof un)
          n = c, i = c.children.length;
        else {
          l = c, i--;
          break;
        }
      } else {
        if (n == e)
          break e;
        i = n.parent.children.indexOf(n), n = n.parent;
      }
    let a = l.node;
    if (a) {
      if (a != t.child(r - 1))
        break;
      --r, o.set(l, r), s.push(l);
    }
  }
  return { index: r, matched: o, matches: s.reverse() };
}
function By(t, e) {
  return t.type.side - e.type.side;
}
function Fy(t, e, n, i) {
  let r = e.locals(t), o = 0;
  if (r.length == 0) {
    for (let c = 0; c < t.childCount; c++) {
      let d = t.child(c);
      i(d, r, e.forChild(o, d), c), o += d.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let d, u;
    for (; s < r.length && r[s].to == o; ) {
      let g = r[s++];
      g.widget && (d ? (u || (u = [d])).push(g) : d = g);
    }
    if (d)
      if (u) {
        u.sort(By);
        for (let g = 0; g < u.length; g++)
          n(u[g], c, !!a);
      } else
        n(d, c, !!a);
    let f, h;
    if (a)
      h = -1, f = a, a = null;
    else if (c < t.childCount)
      h = c, f = t.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= o && l.splice(g--, 1);
    for (; s < r.length && r[s].from <= o && r[s].to > o; )
      l.push(r[s++]);
    let p = o + f.nodeSize;
    if (f.isText) {
      let g = p;
      s < r.length && r[s].from < g && (g = r[s].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < p && (a = f.cut(g - o), f = f.cut(0, g - o), p = g, h = -1);
    } else
      for (; s < r.length && r[s].to < p; )
        s++;
    let m = f.isInline && !f.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    i(f, m, e.forChild(o, f), h), o = p;
  }
}
function Wy(t) {
  if (t.nodeName == "UL" || t.nodeName == "OL") {
    let e = t.style.cssText;
    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
  }
}
function Uy(t, e, n, i) {
  for (let r = 0, o = 0; r < t.childCount && o <= i; ) {
    let s = t.child(r++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; r < t.childCount; ) {
      let c = t.child(r++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= n) {
      if (o >= i && a.slice(i - e.length - l, i - l) == e)
        return i - e.length;
      let c = l < i ? a.lastIndexOf(e, i - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= n)
        return l + c;
      if (n == i && a.length >= i + e.length - l && a.slice(i - l, i - l + e.length) == e)
        return i;
    }
  }
  return -1;
}
function Wl(t, e, n, i, r) {
  let o = [];
  for (let s = 0, l = 0; s < t.length; s++) {
    let a = t[s], c = l, d = l += a.size;
    c >= n || d <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, i)), r && (o.push(r), r = void 0), d > n && o.push(a.slice(n - c, a.size, i)));
  }
  return o;
}
function Ga(t, e = null) {
  let n = t.domSelectionRange(), i = t.state.doc;
  if (!n.focusNode)
    return null;
  let r = t.docView.nearestDesc(n.focusNode), o = r && r.size == 0, s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (s < 0)
    return null;
  let l = i.resolve(s), a, c;
  if (xs(n)) {
    for (a = s; r && !r.node; )
      r = r.parent;
    if (r && r.node.isAtom && z.isSelectable(r.node) && r.parent && !(r.node.isInline && gy(n.focusNode, n.focusOffset, r.dom))) {
      let u = r.posBefore;
      c = new z(s == u ? l : i.resolve(u));
    } else if (qe && e == "key" && s > t.state.selection.to && $(n.focusNode) && n.focusOffset == n.focusNode.childNodes.length && r && r.posAtStart > t.state.selection.to)
      for (let u = n.focusNode; ; u = u.parentNode) {
        if (getComputedStyle(u).overflow != "visible") {
          c = B.findFrom(i.resolve(r.posAtStart), 1);
          break;
        }
        if (u == r.dom || u.nextSibling || !u.parentNode || !$(u.parentNode))
          break;
      }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let u = s, f = s;
      for (let h = 0; h < n.rangeCount; h++) {
        let p = n.getRangeAt(h);
        u = Math.min(u, t.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (u < 0)
        return null;
      [a, s] = f == t.state.selection.anchor ? [f, u] : [u, f], l = i.resolve(s);
    } else
      a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let d = i.resolve(a);
  if (!c) {
    let u = e == "pointer" || t.state.selection.head < l.pos && !o ? 1 : -1;
    c = Ja(t, d, l, u);
  }
  return c;
}
function mp(t) {
  return t.editable ? t.hasFocus() : yp(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function _t(t, e = !1) {
  let n = t.state.selection;
  if (gp(t, n), !mp(t))
    return;
  let i = t.input.mouseDown;
  if (!e && Oe && i) {
    let r = t.domSelectionRange(), o = t.domObserver.currentSelection;
    if (r.anchorNode && o.anchorNode && zn(r.anchorNode, r.anchorOffset, o.anchorNode, o.anchorOffset) && i.delaySelUpdate()) {
      t.domObserver.setCurSelection();
      return;
    }
  }
  if (t.domObserver.disconnectSelection(), t.cursorWrapper)
    Ky(t);
  else {
    let { anchor: r, head: o } = n, s, l;
    kd && !(n instanceof I) && (n.$from.parent.inlineContent || (s = xd(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (l = xd(t, n.to))), t.docView.setSelection(r, o, t, e), kd && (s && Sd(s), l && Sd(l)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && jy(t));
  }
  t.domObserver.setCurSelection(), t.domObserver.connectSelection();
}
const kd = Ie || Oe && np < 63;
function xd(t, e) {
  let { node: n, offset: i } = t.docView.domFromPos(e, 0), r = i < n.childNodes.length ? n.childNodes[i] : null, o = i ? n.childNodes[i - 1] : null;
  if (Ie && r && r.contentEditable == "false")
    return il(r);
  if ((!r || r.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (r)
      return il(r);
    if (o)
      return il(o);
  }
}
function il(t) {
  return t.contentEditable = "true", Ie && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function Sd(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function jy(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), i = n.anchorNode, r = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != i || n.anchorOffset != r) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!mp(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Ky(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, i = n.nodeName == "IMG";
  i ? e.collapse(n.parentNode, Te(n) + 1) : e.collapse(n, 0), !i && !t.state.selection.visible && Fe && dn <= 11 && (n.disabled = !0, n.disabled = !1);
}
function gp(t, e) {
  if (e instanceof z) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (Cd(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    Cd(t);
}
function Cd(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function Ja(t, e, n, i) {
  return t.someProp("createSelectionBetween", (r) => r(t, e, n)) || I.between(e, n, i);
}
function Md(t) {
  return t.editable && !t.hasFocus() ? !1 : yp(t);
}
function yp(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return $n(t.dom, e.anchorNode) && (t.editable || $n(t.dom, e.focusNode));
  } catch {
    return !1;
  }
}
function qy(t) {
  let e = t.docView.domFromPos(t.state.selection.anchor, 0), n = t.domSelectionRange();
  return zn(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function Ul(t, e) {
  let { $anchor: n, $head: i } = t.selection, r = e > 0 ? n.max(i) : n.min(i), o = r.parent.inlineContent ? r.depth ? t.doc.resolve(e > 0 ? r.after() : r.before()) : null : r;
  return o && B.findFrom(o, e);
}
function Qt(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Ad(t, e, n) {
  let i = t.state.selection;
  if (i instanceof I)
    if (n.indexOf("s") > -1) {
      let { $head: r } = i, o = r.textOffset ? null : e < 0 ? r.nodeBefore : r.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = t.state.doc.resolve(r.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Qt(t, new I(i.$anchor, s));
    } else if (i.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let r = Ul(t.state, e);
        return r && r instanceof z ? Qt(t, r) : !1;
      } else if (!Ye || n.indexOf("m") < 0) {
        let r = i.$head, o = r.textOffset ? null : e < 0 ? r.nodeBefore : r.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? r.pos - o.nodeSize : r.pos;
        return o.isAtom || (s = t.docView.descAt(l)) && !s.contentDOM ? z.isSelectable(o) ? Qt(t, new z(e < 0 ? t.state.doc.resolve(r.pos - o.nodeSize) : r)) : Qt(t, new I(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1;
      }
    } else return !1;
  else {
    if (i instanceof z && i.node.isInline)
      return Qt(t, new I(e > 0 ? i.$to : i.$from));
    {
      let r = Ul(t.state, e);
      return r ? Qt(t, r) : !1;
    }
  }
}
function ji(t, e) {
  let n = t.pmViewDesc;
  return n ? n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR") : $(t) && t.contentEditable == "false";
}
function Yn(t, e) {
  return e < 0 ? Gy(t) : Jy(t);
}
function Gy(t) {
  let e = t.domSelectionRange(), n = e.focusNode, i = e.focusOffset;
  if (!n)
    return;
  let r, o, s = !1;
  for (qe && $(n) && i < Ve(n) && ji(n.childNodes[i], -1) && (s = !0); ; )
    if (i > 0) {
      if (!$(n))
        break;
      let l = n.childNodes[i - 1];
      if (ji(l, -1))
        r = n, o = --i;
      else if (ve(l))
        n = l, i = n.nodeValue.length;
      else
        break;
    } else {
      if (bp(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && ji(l, -1); )
          r = n.parentNode, o = Te(l), l = l.previousSibling;
        if (l)
          n = l, i = Ve(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          i = 0;
        }
      }
    }
  s ? jl(t, n, i) : r && jl(t, r, o);
}
function Jy(t) {
  let e = t.domSelectionRange(), n = e.focusNode, i = e.focusOffset;
  if (!n)
    return;
  let r = Ve(n), o, s;
  for (; ; )
    if (i < r) {
      if (!$(n))
        break;
      let l = n.childNodes[i];
      if (ji(l, 1))
        o = n, s = ++i;
      else
        break;
    } else {
      if (bp(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && ji(l, 1); )
          o = l.parentNode, s = Te(l) + 1, l = l.nextSibling;
        if (l)
          n = l, i = 0, r = Ve(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          i = r = 0;
        }
      }
    }
  o && jl(t, o, s);
}
function bp(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Xy(t, e) {
  for (; t && e == t.childNodes.length && !Er(t); )
    e = Te(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (ve(n))
      return n;
    if ($(n) && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function Zy(t, e) {
  for (; t && !e && !Er(t); )
    e = Te(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (ve(n))
      return n;
    if ($(n) && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function jl(t, e, n) {
  if (!ve(e)) {
    let s, l;
    (l = Xy(e, n)) ? (e = l, n = 0) : (s = Zy(e, n)) && (e = s, n = s.nodeValue.length);
  }
  let i = t.domSelection(), r = t.domSelectionRange();
  if (!i)
    return;
  xs(r) ? i.collapse(e, n) : i.extend && (i.collapse(r.anchorNode, r.anchorOffset), i.extend(e, n)), t.domObserver.setCurSelection();
  let { state: o } = t;
  setTimeout(() => {
    t.state == o && _t(t);
  }, 50);
}
function Td(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Oe || ip) && n.parent.inlineContent) {
    let o = t.coordsAtPos(e);
    if (e > n.start()) {
      let s = t.coordsAtPos(e - 1), l = (s.top + s.bottom) / 2;
      if (l > o.top && l < o.bottom && Math.abs(s.left - o.left) > 1)
        return s.left < o.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let s = t.coordsAtPos(e + 1), l = (s.top + s.bottom) / 2;
      if (l > o.top && l < o.bottom && Math.abs(s.left - o.left) > 1)
        return s.left > o.left ? "ltr" : "rtl";
    }
  }
  let i = t.dom;
  for (let o = n.depth; o > 0; o--)
    if (n.node(o).isBlock) {
      i = t.nodeDOM(n.before(o)) || i;
      break;
    }
  return getComputedStyle(i).direction == "rtl" ? "rtl" : "ltr";
}
function Ed(t, e, n) {
  let i = t.state.selection;
  if (i instanceof I && !i.empty || n.indexOf("s") > -1 || Ye && n.indexOf("m") > -1)
    return !1;
  let { $from: r, $to: o } = i;
  if (!r.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Ul(t.state, e);
    if (s && s instanceof z)
      return Qt(t, s);
  }
  if (!r.parent.inlineContent) {
    let s = e < 0 ? r : o, l = i instanceof Ke ? B.near(s, e) : B.findFrom(s, e);
    return l ? Qt(t, l) : !1;
  }
  return !1;
}
function Ld(t, e) {
  if (!(t.state.selection instanceof I))
    return !0;
  let { $head: n, $anchor: i, empty: r } = t.state.selection;
  if (!n.sameParent(i))
    return !0;
  if (!r)
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
function Od(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function Yy(t) {
  if (!Ie || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && $(e) && n == 0 && e.firstChild && $(e.firstChild) && e.firstChild.contentEditable == "false") {
    let i = e.firstChild;
    Od(t, i, "true"), setTimeout(() => Od(t, i, "false"), 20);
  }
  return !1;
}
function Qy(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function eb(t, e) {
  let n = e.keyCode, i = Qy(e);
  if (n == 8 || Ye && n == 72 && i == "c")
    return Ld(t, -1) || Yn(t, -1);
  if (n == 46 && !e.shiftKey || Ye && n == 68 && i == "c")
    return Ld(t, 1) || Yn(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Ye && n == 66 && i == "c") {
    let r = n == 37 ? Td(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Ad(t, r, i) || Yn(t, r);
  } else if (n == 39 || Ye && n == 70 && i == "c") {
    let r = n == 39 ? Td(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Ad(t, r, i) || Yn(t, r);
  } else {
    if (n == 38 || Ye && n == 80 && i == "c")
      return Ed(t, -1, i) || Yn(t, -1);
    if (n == 40 || Ye && n == 78 && i == "c")
      return Yy(t) || Ed(t, 1, i) || Yn(t, 1);
    if (i == (Ye ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function Xa(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: i, openStart: r, openEnd: o } = e;
  for (; r > 1 && o > 1 && i.childCount == 1 && i.firstChild.childCount == 1; ) {
    r--, o--;
    let h = i.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), i = h.content;
  }
  let s = t.someProp("clipboardSerializer") || vn.fromSchema(t.state.schema), l = Cp(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(i, { document: l }));
  let c = a.firstChild, d, u = 0;
  for (; c && $(c) && (d = Sp[c.nodeName.toLowerCase()]); ) {
    for (let h = d.length - 1; h >= 0; h--) {
      let p = l.createElement(d[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), u++;
    }
    c = a.firstChild;
  }
  c && $(c) && c.setAttribute("data-pm-slice", `${r} ${o}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (h) => h(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function vp(t, e, n, i, r) {
  let o = r.parent.type.spec.code, s, l;
  if (!n && !e)
    return null;
  let a = !!e && (i || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || i, t);
    }), o)
      return l = new L(C.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let u = t.someProp("clipboardTextParser", (f) => f(e, r, i, t));
    if (u)
      l = u;
    else {
      let f = r.marks(), { schema: h } = t.state, p = vn.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (u) => {
      n = u(n, t);
    }), s = rb(n), Ss && ob(s);
  let c = s && s.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let f = s.firstChild;
      for (; f && !$(f); )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || cn.fromSchema(t.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || d),
    context: r,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !tb.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = sb(Hd(l, +d[1], +d[2]), d[4]);
  else if (l = L.maxOpen(nb(l.content, r), !0), l.openStart || l.openEnd) {
    let u = 0, f = 0;
    for (let h = l.content.firstChild; u < l.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = Hd(l, u, f);
  }
  return t.someProp("transformPasted", (u) => {
    l = u(l, t, a);
  }), l;
}
const tb = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function nb(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let r = e.node(n).contentMatchAt(e.index(n)), o, s = [];
    if (t.forEach((l) => {
      if (!s)
        return;
      let a = r.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && kp(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = xp(s[s.length - 1], o.length));
        let d = wp(l, a);
        s.push(d), r = r.matchType(d.type), o = a;
      }
    }), s)
      return C.from(s);
  }
  return t;
}
function wp(t, e, n = 0) {
  for (let i = e.length - 1; i >= n; i--)
    t = e[i].create(null, C.from(t));
  return t;
}
function kp(t, e, n, i, r) {
  if (r < t.length && r < e.length && t[r] == e[r]) {
    let o = kp(t, e, n, i.lastChild, r + 1);
    if (o)
      return i.copy(i.content.replaceChild(i.childCount - 1, o));
    if (i.contentMatchAt(i.childCount).matchType(r == t.length - 1 ? n.type : t[r + 1]))
      return i.copy(i.content.append(C.from(wp(n, t, r + 1))));
  }
}
function xp(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, xp(t.lastChild, e - 1)), i = t.contentMatchAt(t.childCount).fillBefore(C.empty, !0);
  return t.copy(n.append(i));
}
function Kl(t, e, n, i, r, o) {
  let s = e < 0 ? t.firstChild : t.lastChild, l = s.content;
  return t.childCount > 1 && (o = 0), r < i - 1 && (l = Kl(l, e, n, i, r + 1, o)), r >= n && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= r).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(C.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(l));
}
function Hd(t, e, n) {
  return e < t.openStart && (t = new L(Kl(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new L(Kl(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const Sp = {
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
function Cp() {
  return document.implementation.createHTMLDocument("title");
}
let Vi = null;
function ib(t) {
  let e = window.trustedTypes;
  if (!e)
    return t;
  if (!Vi) {
    if (Vi = e.defaultPolicy)
      try {
        return Vi.createHTML(t);
      } catch {
      }
    Vi = e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n });
  }
  return Vi.createHTML(t);
}
function rb(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = Cp(), i = n.body, r = /<([a-z][^>\s]+)/i.exec(t), o;
  if ((o = r && Sp[r[1].toLowerCase()]) && (t = o.map((s) => "<" + s + ">").join("") + t + o.map((s) => "</" + s + ">").reverse().join("")), i.innerHTML = ib(t), o)
    for (let s = 0; s < o.length; s++)
      i = i.querySelector(o[s]) || i;
  for (let s = 0; s < n.styleSheets.length; s++) {
    let l = n.styleSheets[s];
    for (let a = 0; a < l.rules.length; a++) {
      let c = l.rules[a];
      if (c instanceof CSSStyleRule) {
        let d = i.querySelectorAll(c.selectorText);
        for (let u = 0; u < d.length; u++)
          d[u].style.cssText += c.style.cssText;
      }
    }
  }
  return i;
}
function ob(t) {
  let e = t.querySelectorAll(Oe ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    i.childNodes.length == 1 && i.textContent == " " && i.parentNode && i.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), i);
  }
}
function sb(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, i;
  try {
    i = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: r, openStart: o, openEnd: s } = t;
  for (let l = i.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[i[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    try {
      r = C.from(a.create(i[l + 1], r));
    } catch {
      break;
    }
    o++, s++;
  }
  return new L(r, o, s);
}
const _e = {}, ze = {}, lb = { touchstart: !0, touchmove: !0 };
class ab {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastKeyDispatched = !1, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function cb(t) {
  for (let e in _e) {
    let n = _e[e];
    t.dom.addEventListener(e, t.input.eventHandlers[e] = (i) => {
      ub(t, i) && !Za(t, i) && (t.editable || !(i.type in ze)) && n(t, i);
    }, lb[e] ? { passive: !0 } : void 0);
  }
  Ie && t.dom.addEventListener("input", () => null), ql(t);
}
function It(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
function db(t) {
  t.input.mouseDown && t.input.mouseDown.done(), t.domObserver.stop();
  for (let e in t.input.eventHandlers)
    t.dom.removeEventListener(e, t.input.eventHandlers[e]);
  clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
}
function ql(t) {
  t.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = (i) => Za(t, i));
  });
}
function Za(t, e) {
  return t.someProp("handleDOMEvents", (n) => {
    let i = n[e.type];
    return i ? i(t, e) || e.defaultPrevented : !1;
  });
}
function ub(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target; n != t.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function fb(t, e) {
  !Za(t, e) && _e[e.type] && (t.editable || !(e.type in ze)) && _e[e.type](t, e);
}
function rn(t, e) {
  let { input: n } = t;
  return n.lastKeyDispatched || t.composing ? !1 : (n.lastKeyDispatched = !0, typeof e == "string" && (e = yy(e == "Backspace" ? 8 : 13, e)), t.someProp("handleKeyDown", (i) => i(t, e)));
}
ze.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Ep(t) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), t.input.lastKeyDispatched = !1, !(Nt && Oe && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), vi && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let i = Date.now();
      t.input.lastIOSEnter = i, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == i && (rn(t, "Enter"), t.input.lastIOSEnter = 0);
      }, 200);
    } else rn(t, n) || eb(t, n) ? n.preventDefault() : It(t, "key");
};
ze.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
ze.keypress = (t, e) => {
  let n = e;
  if (Ep(t) || !n.charCode || n.ctrlKey && !n.altKey || Ye && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (r) => r(t, n))) {
    n.preventDefault();
    return;
  }
  let i = t.state.selection;
  if (!(i instanceof I) || !i.$from.sameParent(i.$to)) {
    let r = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(r).scrollIntoView();
    !/[\r\n]/.test(r) && !t.someProp("handleTextInput", (s) => s(t, i.$from.pos, i.$to.pos, r, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function Or(t) {
  return { left: t.clientX, top: t.clientY };
}
function hb(t, e) {
  let n = e.x - t.clientX, i = e.y - t.clientY;
  return n * n + i * i < 100;
}
function Ya(t, e, n, i, r) {
  if (i == -1)
    return !1;
  let o = t.state.doc.resolve(i);
  for (let s = o.depth + 1; s > 0; s--)
    if (t.someProp(e, (l) => s > o.depth ? l(t, n, o.nodeAfter, o.before(s), r, !0) : l(t, n, o.node(s), o.before(s), r, !1)))
      return !0;
  return !1;
}
function Hr(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let i = t.state.tr.setSelection(e);
  i.setMeta("pointer", !0), t.dispatch(i);
}
function pb(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), i = n.nodeAfter;
  return i && i.isAtom && z.isSelectable(i) ? (Hr(t, new z(n)), !0) : !1;
}
function mb(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, i, r;
  n instanceof z && (i = n.node);
  let o = t.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (z.isSelectable(l)) {
      i && n.$from.depth > 0 && s >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? r = o.before(n.$from.depth) : r = o.before(s);
      break;
    }
  }
  return r != null ? (Hr(t, z.create(t.state.doc, r)), !0) : !1;
}
function gb(t, e, n, i, r) {
  return Ya(t, "handleClickOn", e, n, i) || t.someProp("handleClick", (o) => o(t, e, i)) || (r ? mb(t, n) : pb(t, n));
}
function yb(t, e, n, i) {
  return Ya(t, "handleDoubleClickOn", e, n, i) || t.someProp("handleDoubleClick", (r) => r(t, e, i));
}
function bb(t, e, n, i) {
  return Ya(t, "handleTripleClickOn", e, n, i) || t.someProp("handleTripleClick", (r) => r(t, e, i)) || vb(t, n, i);
}
function vb(t, e, n) {
  if (n.button != 0)
    return !1;
  let i = Mp(t, e, !0), r = t.state.doc;
  return i ? (Hr(t, i), i instanceof I && r.eq(t.state.doc) && (t.input.mouseDown = new kb(t, i)), !0) : !1;
}
function Mp(t, e, n) {
  let i = t.state.doc;
  if (e == -1)
    return i.inlineContent ? I.create(i, 0, i.content.size) : null;
  let r = i.resolve(e);
  for (let o = r.depth + 1; o > 0; o--) {
    let s = o > r.depth ? r.nodeAfter : r.node(o), l = r.before(o);
    if (s.inlineContent)
      return I.create(i, l + 1, l + 1 + s.content.size);
    if (n && z.isSelectable(s))
      return z.create(i, l);
  }
  return null;
}
function Qa(t) {
  return Co(t);
}
const Ap = Ye ? "metaKey" : "ctrlKey";
_e.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let i = Qa(t), r = Date.now(), o = "singleClick";
  r - t.input.lastClick.time < 500 && hb(n, t.input.lastClick) && !n[Ap] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: r, x: n.clientX, y: n.clientY, type: o, button: n.button }, t.input.mouseDown && t.input.mouseDown.done();
  let s = t.posAtCoords(Or(n));
  s && (o == "singleClick" ? t.input.mouseDown = new wb(t, s, n, !!i) : (o == "doubleClick" ? yb : bb)(t, s.pos, s.inside, n) ? n.preventDefault() : It(t, "pointer"));
};
class Tp {
  constructor(e) {
    this.view = e, this.mightDrag = null, e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this));
  }
  up(e) {
    this.done();
  }
  move(e) {
    e.buttons == 0 && this.done();
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.view.input.mouseDown == this && (this.view.input.mouseDown = null);
  }
  delaySelUpdate() {
    return !1;
  }
}
class wb extends Tp {
  constructor(e, n, i, r) {
    super(e), this.pos = n, this.event = i, this.flushed = r, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!i[Ap], this.allowDefault = i.shiftKey;
    let o, s;
    if (n.inside > -1)
      o = e.state.doc.nodeAt(n.inside), s = n.inside;
    else {
      let d = e.state.doc.resolve(n.pos);
      o = d.parent, s = d.depth ? d.before() : 0;
    }
    const l = r ? null : i.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && $(a.nodeDOM) ? a.nodeDOM : null;
    let { selection: c } = e.state;
    i.button == 0 && (o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof z && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && qe && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), It(e, "pointer");
  }
  done() {
    super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
      this.view.isDestroyed || _t(this.view);
    });
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(Or(e))), this.updateAllowDefault(e), this.allowDefault || !n ? It(this.view, "pointer") : gb(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Ie && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Oe && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Hr(this.view, B.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : It(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), It(this.view, "pointer"), super.move(e);
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
  delaySelUpdate() {
    return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
  }
}
class kb extends Tp {
  constructor(e, n) {
    super(e), this.startSelection = n, this.startDoc = e.state.doc;
  }
  move(e) {
    if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
      this.done();
      return;
    }
    e.preventDefault(), It(this.view, "pointer");
    let n = this.view.posAtCoords(Or(e)), i = n && Mp(this.view, n.inside, !1);
    if (!i)
      return;
    let { doc: r } = this.view.state, o = this.startSelection, [s, l] = i.from < o.from ? [o.to, i.from] : [o.from, i.to];
    Hr(this.view, I.create(r, s, l));
  }
}
_e.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Qa(t), It(t, "pointer");
};
_e.touchmove = (t) => {
  t.input.lastTouch = Date.now(), It(t, "pointer");
};
_e.contextmenu = (t) => Qa(t);
function Ep(t, e) {
  return t.composing ? !0 : Ie && Math.abs(Date.now() - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const xb = Nt ? 5e3 : -1;
ze.compositionstart = ze.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof I && e.selection.empty && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((i) => i.type.spec.inclusive === !1) || Oe && ip && Sb(t)))
      t.markCursor = t.state.storedMarks || n.marks(), Co(t, !0), t.markCursor = null;
    else if (Co(t, !e.selection.empty), qe && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let i = t.domSelectionRange();
      for (let r = i.focusNode, o = i.focusOffset; r && $(r) && o != 0; ) {
        let s = o < 0 ? r.lastChild : r.childNodes[o - 1];
        if (!s)
          break;
        if (ve(s)) {
          let l = t.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          r = s, o = -1;
      }
    }
    t.input.composing = !0;
  }
  Lp(t, xb);
};
function Sb(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || !$(e) || n >= e.childNodes.length)
    return !1;
  let i = e.childNodes[n];
  return $(i) && i.contentEditable == "false";
}
ze.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Date.now(), t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, Lp(t, 20));
};
function Lp(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Co(t), e));
}
function Op(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Date.now()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function Cb(t) {
  let e = t.domSelectionRange();
  if (!e.focusNode)
    return null;
  let n = py(e.focusNode, e.focusOffset), i = my(e.focusNode, e.focusOffset);
  if (n && i && n != i) {
    let r = i.pmViewDesc, o = t.domObserver.lastChangedTextNode;
    if (n == o || i == o)
      return o;
    if (!r || !r.isText(i.nodeValue))
      return i;
    if (t.input.compositionNode == i) {
      let s = n.pmViewDesc;
      if (!(!s || !s.isText(n.nodeValue)))
        return i;
    }
  }
  return n || i;
}
function Co(t, e = !1) {
  if (!(Nt && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), Op(t), e || t.docView && t.docView.dirty) {
      let n = Ga(t), i = t.state.selection;
      return n && !n.eq(i) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !i.$from.node(i.$from.sharedDepth(i.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function Mb(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let i = getSelection(), r = document.createRange();
  r.selectNodeContents(e), t.dom.blur(), i.removeAllRanges(), i.addRange(r), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const ur = Fe && dn < 15 || vi && wy < 604;
_e.copy = ze.cut = (t, e) => {
  let n = e, i = t.state.selection, r = n.type == "cut";
  if (i.empty)
    return;
  let o = ur ? null : n.clipboardData, s = i.content(), { dom: l, text: a } = Xa(t, s);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : Mb(t, l), r && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Ab(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function Tb(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, i = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (i.contentEditable = "true"), i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.focus();
  let r = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), i.parentNode && i.parentNode.removeChild(i), n ? fr(t, i.value, null, r, e) : fr(t, i.textContent, i.innerHTML, r, e);
  }, 50);
}
function fr(t, e, n, i, r) {
  let o = vp(t, e, n, i, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, r, o || L.empty)))
    return !0;
  if (!o)
    return !1;
  let s = Ab(o), l = s ? t.state.tr.replaceSelectionWith(s, i) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Hp(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
ze.paste = (t, e) => {
  let n = e;
  if (t.composing && !Nt)
    return;
  let i = ur ? null : n.clipboardData, r = t.input.shiftKey && t.input.lastKeyCode != 45;
  i && fr(t, Hp(i), i.getData("text/html"), r, n) ? n.preventDefault() : Tb(t, n);
};
class Rp {
  constructor(e, n, i) {
    this.slice = e, this.move = n, this.node = i;
  }
}
const Eb = Ye ? "altKey" : "ctrlKey";
function Vp(t, e) {
  let n;
  return t.someProp("dragCopies", (i) => {
    n = n || i(e);
  }), n != null ? !n : !e[Eb];
}
_e.dragstart = (t, e) => {
  let n = e, i = t.input.mouseDown;
  if (i && i.done(), !n.dataTransfer)
    return;
  let r = t.state.selection, o = r.empty ? null : t.posAtCoords(Or(n)), s;
  if (!(o && o.pos >= r.from && o.pos <= (r instanceof z ? r.to - 1 : r.to))) {
    if (i && i.mightDrag)
      s = z.create(t.state.doc, i.mightDrag.pos);
    else if (n.target && $(n.target)) {
      let u = t.docView.nearestDesc(n.target, !0);
      u && u.node.type.spec.draggable && u != t.docView && (s = z.create(t.state.doc, u.posBefore));
    }
  }
  let l = (s || t.state.selection).content(), { dom: a, text: c, slice: d } = Xa(t, l);
  (!n.dataTransfer.files.length || !Oe || np > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(ur ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", ur || n.dataTransfer.setData("text/plain", c), t.dragging = new Rp(d, Vp(t, n), s);
};
_e.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
ze.dragover = ze.dragenter = (t, e) => e.preventDefault();
ze.drop = (t, e) => {
  try {
    Lb(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function Lb(t, e, n) {
  if (!e.dataTransfer)
    return;
  let i = t.posAtCoords(Or(e));
  if (!i)
    return;
  let r = t.state.doc.resolve(i.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = vp(t, Hp(e.dataTransfer), ur ? null : e.dataTransfer.getData("text/html"), !1, r);
  let s = !!(n && Vp(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || L.empty, s))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? Vh(t.state.doc, r.pos, o) : r.pos;
  l == null && (l = r.pos);
  let a = t.state.tr;
  if (s) {
    let { node: h } = n;
    h ? h.replace(a) : a.deleteSelection();
  }
  let c = a.mapping.map(l), d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, u = a.doc;
  if (d ? a.replaceRangeWith(c, c, o.content.firstChild) : a.replaceRange(c, c, o), a.doc.eq(u))
    return;
  let f = a.doc.resolve(c);
  if (d && z.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new z(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((p, m, g, y) => h = y), a.setSelection(Ja(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
_e.focus = (t) => {
  if (t.input.lastFocus = Date.now(), !t.focused) {
    t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0;
    let e = t.domSelectionRange();
    if (!t.domObserver.currentSelection.eq(e)) {
      let { focusNode: n, focusOffset: i } = e;
      setTimeout(() => {
        let r = t.domSelectionRange();
        r.focusNode == n && r.focusOffset == i && t.docView && t.hasFocus() && _t(t);
      }, 20);
    }
  }
};
_e.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
_e.beforeinput = (t, e) => {
  if (Nt && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: i } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != i || t.domObserver.pendingRecords().length || (t.dom.blur(), t.focus(), rn(t, "Backspace")))
        return;
      let { $cursor: r } = t.state.selection;
      r && r.pos > 0 && t.dispatch(t.state.tr.delete(r.pos - 1, r.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in ze)
  _e[t] = ze[t];
function hr(t, e) {
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
class Gl {
  constructor(e) {
    this.frag = e, this.index = 0, this.off = 0;
  }
  nodeAt(e) {
    for (; this.off <= e && this.index < this.frag.childCount; ) {
      let n = this.frag.child(this.index);
      if (this.off == e)
        return n;
      this.off += n.nodeSize, this.index++;
    }
    return null;
  }
}
class Mo {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || In, this.side = this.spec.side || 0;
  }
  map(e, n, i, r) {
    let { pos: o, deleted: s } = e.mapResult(n.from + r, this.side < 0 ? -1 : 1);
    return s ? null : new xe(o - i, o - i, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Mo && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && hr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class hn {
  constructor(e, n) {
    this.attrs = e, this.spec = n || In;
  }
  map(e, n, i, r) {
    let o = e.map(n.from + r, this.spec.inclusiveStart ? -1 : 1) - i, s = e.map(n.to + r, this.spec.inclusiveEnd ? 1 : -1) - i;
    return o >= s ? null : new xe(o, s, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof hn && hr(this.attrs, e.attrs) && hr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof hn;
  }
  destroy() {
  }
}
class ec {
  constructor(e, n) {
    this.attrs = e, this.spec = n || In;
  }
  map(e, n, i, r) {
    let o = e.mapResult(n.from + r, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(n.to + r, -1);
    return s.deleted || s.pos <= o.pos ? null : new xe(o.pos - i, s.pos - i, this);
  }
  valid(e, n, i) {
    let r = i.nodeAt(n.from);
    return !!r && !r.isText && n.from + r.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof ec && hr(this.attrs, e.attrs) && hr(this.spec, e.spec);
  }
  destroy() {
  }
}
class xe {
  /**
  @internal
  */
  constructor(e, n, i) {
    this.from = e, this.to = n, this.type = i;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new xe(e, n, this.type);
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
  map(e, n, i) {
    return this.type.map(e, this, n, i);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, i) {
    return new xe(e, e, new Mo(n, i));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, i, r) {
    return new xe(e, n, new hn(i, r));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, i, r) {
    return new xe(e, n, new ec(i, r));
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
    return this.type instanceof hn;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Mo;
  }
}
const ii = [], In = {};
class Z {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : ii, this.children = n.length ? n : ii;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? Ao(n, e, 0, In) : Re;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, i) {
    let r = [];
    return this.findInner(e ?? 0, n ?? 1e9, r, 0, i), r;
  }
  findInner(e, n, i, r, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= n && l.to >= e && (!o || o(l.spec)) && i.push(l.copy(l.from + r, l.to + r));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < n && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, n - l, i, r + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, i) {
    return this == Re || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, i || In);
  }
  /**
  @internal
  */
  mapInner(e, n, i, r, o) {
    let s;
    if (this.local.length) {
      let l = new Gl(n.content);
      for (let a = 0; a < this.local.length; a++) {
        let c = this.local[a].map(e, i, r);
        c && c.type.valid(n, c, l) ? (s || (s = [])).push(c) : o.onRemove && o.onRemove(this.local[a].spec);
      }
    }
    return this.children.length ? Ob(this.children, s || [], e, n, i, r, o) : s ? new Z(s.sort(Dn), ii) : Re;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Re ? Z.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, i) {
    let r, o = 0;
    e.forEach((l, a) => {
      let c = a + i, d;
      if (d = Ip(n, l, c)) {
        for (r || (r = this.children.slice()); o < r.length && r[o] < a; )
          o += 3;
        r[o] == a ? r[o + 2] = r[o + 2].addInner(l, d, c + 1) : r.splice(o, 0, a, a + l.nodeSize, Ao(d, l, c + 1, In)), o += 3;
      }
    });
    let s = Np(o ? Dp(n) : n, -i);
    if (s.length) {
      let l = new Gl(e.content);
      for (let a = 0; a < s.length; a++)
        s[a].type.valid(e, s[a], l) || s.splice(a--, 1);
    }
    return new Z(s.length ? this.local.concat(s).sort(Dn) : this.local, r || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Re ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let i = this.children, r = this.local;
    for (let o = 0; o < i.length; o += 3) {
      let s, l = i[o] + n, a = i[o + 1] + n;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > l && u.to < a && (e[d] = null, (s || (s = [])).push(u));
      if (!s)
        continue;
      i == this.children && (i = this.children.slice());
      let c = i[o + 2].removeInner(s, l + 1);
      c != Re ? i[o + 2] = c : (i.splice(o, 3), o -= 3);
    }
    if (r.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < r.length; l++)
            r[l].eq(s, n) && (r == this.local && (r = this.local.slice()), r.splice(l--, 1));
    }
    return i == this.children && r == this.local ? this : r.length || i.length ? new Z(r, i) : Re;
  }
  forChild(e, n) {
    if (this == Re)
      return this;
    if (n.isLeaf)
      return Z.empty;
    let i, r;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (i = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof hn) {
        let c = Math.max(o, a.from) - o, d = Math.min(s, a.to) - o;
        c < d && (r || (r = [])).push(a.copy(c, d));
      }
    }
    if (r) {
      let l = new Z(r.sort(Dn), ii);
      return i ? new on([l, i]) : l;
    }
    return i || Re;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Z) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return tc(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Re)
      return ii;
    if (e.inlineContent || !this.local.some(hn.is))
      return this.local;
    let n = [];
    for (let i = 0; i < this.local.length; i++)
      this.local[i].type instanceof hn || n.push(this.local[i]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
Z.empty = new Z([], []);
Z.removeOverlap = tc;
const Re = Z.empty;
class on {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const i = this.members.map((r) => r.map(e, n, In));
    return on.from(i);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return Z.empty;
    let i = [];
    for (let r = 0; r < this.members.length; r++) {
      let o = this.members[r].forChild(e, n);
      o != Re && (o instanceof on ? i = i.concat(o.members) : i.push(o));
    }
    return on.from(i);
  }
  eq(e) {
    if (!(e instanceof on) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, i = !0;
    for (let r = 0; r < this.members.length; r++) {
      let o = this.members[r].localsInner(e);
      if (o.length)
        if (!n)
          n = o;
        else {
          i && (n = n.slice(), i = !1);
          for (let s = 0; s < o.length; s++)
            n.push(o[s]);
        }
    }
    return n ? tc(i ? n : n.sort(Dn)) : ii;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Re;
      case 1:
        return e[0];
      default:
        return new on(e.every((n) => n instanceof Z) ? e : e.reduce((n, i) => n.concat(i instanceof Z ? i : i.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function Ob(t, e, n, i, r, o, s) {
  let l = t.slice();
  for (let c = 0, d = o; c < n.maps.length; c++) {
    let u = 0;
    n.maps[c].forEach((f, h, p, m) => {
      let g = m - p - (h - f);
      for (let y = 0; y < l.length; y += 3) {
        let b = l[y + 1];
        if (b < 0 || f > b + d - u)
          continue;
        let v = l[y] + d - u;
        h >= v ? l[y + 1] = f <= v ? -2 : -1 : f >= d && g && (l[y] += g, l[y + 1] += g);
      }
      u += g;
    }), d = n.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = n.map(t[c] + o), u = d - r;
      if (u < 0 || u >= i.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + o, -1), h = f - r, { index: p, offset: m } = i.content.findIndex(u), g = i.maybeChild(p);
      if (g && m == u && m + g.nodeSize == h) {
        let y = l[c + 2].mapInner(n, g, d + 1, t[c] + o + 1, s);
        y != Re ? (l[c] = u, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Hb(l, t, e, n, r, o, s), d = Ao(c, i, 0, s);
    e = d.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, f = 0; u < d.children.length; u += 3) {
      let h = d.children[u];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, d.children[u], d.children[u + 1], d.children[u + 2]);
    }
  }
  return new Z(e.sort(Dn), l);
}
function Np(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    n.push(new xe(r.from + e, r.to + e, r.type));
  }
  return n;
}
function Hb(t, e, n, i, r, o, s) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let u = a.local[d].map(i, r, c);
      u ? n.push(u) : s.onRemove && s.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + o + 1);
  return n;
}
function Ip(t, e, n) {
  if (e.isLeaf)
    return null;
  let i = n + e.nodeSize, r = null;
  for (let o = 0, s; o < t.length; o++)
    (s = t[o]) && s.from > n && s.to < i && ((r || (r = [])).push(s), t[o] = null);
  return r;
}
function Dp(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function Ao(t, e, n, i) {
  let r = [], o = !1;
  e.forEach((l, a) => {
    let c = Ip(t, l, a + n);
    if (c) {
      o = !0;
      let d = Ao(c, l, n + a + 1, i);
      d != Re && r.push(a, a + l.nodeSize, d);
    }
  });
  let s = Np(o ? Dp(t) : t, -n).sort(Dn);
  if (s.length) {
    let l = new Gl(e.content);
    for (let a = 0; a < s.length; a++)
      s[a].type.valid(e, s[a], l) || (i.onRemove && i.onRemove(s[a].spec), s.splice(a--, 1));
  }
  return s.length || r.length ? new Z(s, r) : Re;
}
function Dn(t, e) {
  return t.from - e.from || t.to - e.to;
}
function tc(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let i = e[n];
    if (i.from != i.to)
      for (let r = n + 1; r < e.length; r++) {
        let o = e[r];
        if (o.from == i.from) {
          o.to != i.to && (e == t && (e = t.slice()), e[r] = o.copy(o.from, i.to), Rd(e, r + 1, o.copy(i.to, o.to)));
          continue;
        } else {
          o.from < i.to && (e == t && (e = t.slice()), e[n] = i.copy(i.from, o.from), Rd(e, r, i.copy(o.from, i.to)));
          break;
        }
      }
  }
  return e;
}
function Rd(t, e, n) {
  for (; e < t.length && Dn(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
function rl(t) {
  let e = [];
  return t.someProp("decorations", (n) => {
    let i = n(t.state);
    i && i != Re && e.push(i);
  }), t.cursorWrapper && e.push(Z.create(t.state.doc, [t.cursorWrapper.deco])), on.from(e);
}
const Rb = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Vb = Fe && dn <= 11;
class Nb {
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
class Ib {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Nb(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((i) => {
      for (let r = 0; r < i.length; r++)
        this.queue.push(i[r]);
      Fe && dn <= 11 && i.some((r) => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : Ie && e.composing && i.some((r) => r.type == "childList" && r.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
    }), Vb && (this.onCharData = (i) => {
      this.queue.push({ target: i.target, type: "characterData", oldValue: i.prevValue }), this.flushSoon();
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
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Rb)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
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
    if (Md(this.view)) {
      if (this.suppressingSelectionUpdates)
        return _t(this.view);
      if (Fe && dn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && zn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
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
    let n = /* @__PURE__ */ new Set(), i;
    for (let o = e.focusNode; o; o = bi(o))
      n.add(o);
    for (let o = e.anchorNode; o; o = bi(o))
      if (n.has(o)) {
        i = o;
        break;
      }
    let r = i && this.view.docView.nearestDesc(i);
    if (r && r.ignoreMutation({
      type: "selection",
      target: ve(i) ? i.parentNode : i
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
    let i, r = !1;
    !this.suppressingSelectionUpdates && Md(e) && (i = e.domSelectionRange(), r = !this.currentSelection.eq(i) && !this.ignoreSelectionChange(i));
    let o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < n.length; d++) {
        let u = this.registerMutation(n[d], a);
        u && (o = o < 0 ? u.from : Math.min(u.from, o), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
      }
    if (a.some((d) => d.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46 || Oe && (e.composing || e.input.compositionEndedAt > Date.now() - 50) && n.some((d) => d.type == "childList" && d.removedNodes.length))) {
      for (let d of a)
        if (d.nodeName == "BR" && d.parentNode) {
          let u = d.nextSibling;
          for (; u && $(u); ) {
            if (u.contentEditable == "false") {
              d.parentNode.removeChild(d);
              break;
            }
            u = u.firstChild;
          }
        }
    } else if (qe && a.length) {
      let d = a.filter((u) => u.nodeName == "BR");
      if (d.length == 2) {
        let [u, f] = d;
        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove();
      } else {
        let { focusNode: u } = this.currentSelection;
        for (let f of d) {
          let h = f.parentNode;
          h && h.nodeName == "LI" && (!u || _b(e, u) != h) && f.remove();
        }
      }
    }
    let c = null;
    o < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && xs(i) && (c = Ga(e)) && c.eq(B.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, _t(e), this.currentSelection.set(i), e.scrollToSelection()) : (o > -1 || r) && (o > -1 && (e.docView.markDirty(o, s), Db(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, zb(e, a)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : i && !this.currentSelection.eq(i) && _t(e), i && this.currentSelection.set(i));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let i = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (i == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !i || i.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++) {
        let u = e.addedNodes[d];
        n.push(u), ve(u) && (this.lastChangedTextNode = u);
      }
      if (i.contentDOM && i.contentDOM != i.dom && !i.contentDOM.contains(e.target))
        return { from: i.posBefore, to: i.posAfter };
      let r = e.previousSibling, o = e.nextSibling;
      if (Fe && dn <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: u, nextSibling: f } = e.addedNodes[d];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (r = u), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = r && r.parentNode == e.target ? Te(r) + 1 : 0, l = i.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? Te(o) : e.target.childNodes.length, c = i.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: i.posAtStart - i.border, to: i.posAtEnd + i.border } : (this.lastChangedTextNode = e.target, {
      from: i.posAtStart,
      to: i.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Vd = /* @__PURE__ */ new WeakMap(), Nd = !1;
function Db(t) {
  if (!Vd.has(t) && (Vd.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
    if (t.requiresGeckoHackNode = qe, Nd)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Nd = !0;
  }
}
function Id(t, e) {
  let n = e.startContainer, i = e.startOffset, r = e.endContainer, o = e.endOffset, s = t.domAtPos(t.state.selection.anchor);
  return zn(s.node, s.offset, r, o) && ([n, i, r, o] = [r, o, n, i]), { anchorNode: n, anchorOffset: i, focusNode: r, focusOffset: o };
}
function Pb(t, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(t.root)[0];
    if (r)
      return Id(t, r);
  }
  let n;
  function i(r) {
    r.preventDefault(), r.stopImmediatePropagation(), n = r.getTargetRanges()[0];
  }
  return t.dom.addEventListener("beforeinput", i, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", i, !0), n ? Id(t, n) : null;
}
function _b(t, e) {
  for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
    let i = t.docView.nearestDesc(n, !0);
    if (i && i.node.isBlock)
      return n;
  }
  return null;
}
function zb(t, e) {
  var n;
  let { focusNode: i, focusOffset: r } = t.domSelectionRange();
  for (let o of e)
    if (((n = o.parentNode) === null || n === void 0 ? void 0 : n.nodeName) == "TR") {
      let s = o.nextSibling;
      for (; s && s.nodeName != "TD" && s.nodeName != "TH"; )
        s = s.nextSibling;
      if (s) {
        let l = s;
        for (; ; ) {
          let a = l.firstChild;
          if (!a || !$(a) || a.contentEditable == "false" || /^(BR|IMG)$/.test(a.nodeName))
            break;
          l = a;
        }
        l.insertBefore(o, l.firstChild), i == o && t.domSelection().collapse(o, r);
      } else
        o.parentNode.removeChild(o);
    }
}
function $b(t, e, n, i) {
  let { node: r, fromOffset: o, toOffset: s, from: l, to: a } = t.docView.parseRange(e, n), c = t.domSelectionRange(), d, u = c.anchorNode;
  if (u && $n(t.dom, u) && (d = [{ node: u, offset: c.anchorOffset }], xs(c) || d.push({ node: c.focusNode, offset: c.focusOffset })), Oe && t.input.lastKeyCode === 8)
    for (let y = s; y > o; y--) {
      let b = r.childNodes[y - 1], v = b.pmViewDesc;
      if (b.nodeName == "BR" && !v) {
        s = y;
        break;
      }
      if (!v || v.size)
        break;
    }
  let f = t.state.doc, h = t.someProp("domParser") || cn.fromSchema(t.state.schema), p = f.resolve(l), m = null, g = h.parse(r, {
    topNode: p.parent,
    topMatch: p.parent.contentMatchAt(p.index()),
    topOpen: !0,
    from: o,
    to: s,
    preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: d,
    ruleFromNode: Bb(i),
    context: p
  });
  if (d && d[0].pos != null) {
    let y = d[0].pos, b = d[1] && d[1].pos;
    b == null && (b = y), m = { anchor: y + l, head: b + l };
  }
  return { doc: g, sel: m, from: l, to: a };
}
const Bb = (t) => (e) => {
  let n = e.pmViewDesc;
  if (n)
    return n.parseRule(t);
  if (e.nodeName == "BR" && e.parentNode) {
    if (Ie && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
      let i = document.createElement("div");
      return i.appendChild(document.createElement("li")), { skip: i };
    } else if (e.parentNode.lastChild == e || Ie && /^(tr|table)$/i.test(e.parentNode.nodeName))
      return { ignore: !0 };
  } else if (e.nodeName == "IMG" && e.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}, Fb = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Wb(t, e, n, i, r) {
  let o = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
  if (t.input.compositionPendingChanges = 0, e < 0) {
    let S = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null, M = Ga(t, S);
    if (M && !t.state.selection.eq(M)) {
      if (Oe && Nt && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && rn(t, "Enter"))
        return;
      let O = t.state.tr.setSelection(M);
      S == "pointer" ? O.setMeta("pointer", !0) : S == "key" && O.scrollIntoView(), o && O.setMeta("composition", o), t.dispatch(O);
    }
    return;
  }
  let s = t.state.doc.resolve(e), l = s.sharedDepth(n);
  e = s.before(l + 1), n = t.state.doc.resolve(n).after(l + 1);
  let a = t.state.selection, c = $b(t, e, n, r), d = t.state.doc, u = d.slice(c.from, c.to), f, h;
  t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (f = t.state.selection.to, h = "end") : (f = t.state.selection.from, h = "start"), t.input.lastKeyCode = null;
  let p = qb(u.content, c.doc.content, c.from, f, h);
  if (p && t.input.domChangeCount++, (vi && t.input.lastIOSEnter > Date.now() - 225 || Nt) && r.some((S) => $(S) && !Fb.test(S.nodeName)) && (!p || p.endA >= p.endB) && rn(t, "Enter")) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (i && a instanceof I && !a.empty && a.$head.sameParent(a.$anchor) && !t.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let S = Dd(t, t.state.doc, c.sel);
        if (S && !S.eq(t.state.selection)) {
          let M = t.state.tr.setSelection(S);
          o && M.setMeta("composition", o), t.dispatch(M);
        }
      }
      return;
    }
  t.state.selection.from < t.state.selection.to && p.start == p.endB && t.state.selection instanceof I && (p.start > t.state.selection.from && p.start <= t.state.selection.from + 2 && t.state.selection.from >= c.from ? p.start = t.state.selection.from : p.endA < t.state.selection.to && p.endA >= t.state.selection.to - 2 && t.state.selection.to <= c.to && (p.endB += t.state.selection.to - p.endA, p.endA = t.state.selection.to)), Fe && dn <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), y = d.resolve(p.start), b = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA;
  if ((vi && t.input.lastIOSEnter > Date.now() - 225 && (!b || r.some((S) => S.nodeName == "DIV" || S.nodeName == "P")) || !b && Kb(c.doc, m.pos, g.pos)) && rn(t, "Enter")) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (t.state.selection.anchor > p.start && (b ? p.endA > p.start && p.endB == p.start : jb(d, p.start, p.endA, m, g)) && rn(t, "Backspace")) {
    Nt && Oe && t.domObserver.suppressSelectionUpdates();
    return;
  }
  Oe && p.endB == p.start && (t.input.lastChromeDelete = Date.now()), Nt && !b && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => rn(t, "Enter"), 20));
  let v = p.start, w = p.endA, x = (S) => {
    let M = S || t.state.tr.replace(v, w, c.doc.slice(p.start - c.from, p.endB - c.from));
    if (c.sel) {
      let O = Dd(t, M.doc, c.sel);
      O && !(Oe && t.composing && O.empty && (p.start != p.endB || t.input.lastChromeDelete < Date.now() - 100) && (O.head == v || O.head == M.mapping.map(w) - 1) || Fe && O.empty && O.head == v) && M.setSelection(O);
    }
    return o && M.setMeta("composition", o), M.scrollIntoView();
  }, k;
  if (b)
    if (m.pos == g.pos) {
      Fe && dn <= 11 && m.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => _t(t), 20));
      let S = x(t.state.tr.delete(v, w)), M = d.resolve(p.start).marksAcross(d.resolve(p.endA));
      M && S.ensureMarks(M), t.dispatch(S);
    } else if (
      // Adding or removing a mark
      p.endA == p.endB && (k = Ub(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    ) {
      let S = x(t.state.tr);
      k.type == "add" ? S.addMark(v, w, k.mark) : S.removeMark(v, w, k.mark), t.dispatch(S);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let S = m.parent.textBetween(m.parentOffset, g.parentOffset), M = () => x(t.state.tr.insertText(S, v, w));
      t.someProp("handleTextInput", (O) => O(t, v, w, S, M)) || t.dispatch(M());
    } else
      t.dispatch(x());
  else
    t.dispatch(x());
}
function Dd(t, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : Ja(t, e.resolve(n.anchor), e.resolve(n.head));
}
function Ub(t, e) {
  let n = t.firstChild.marks, i = e.firstChild.marks, r = n, o = i, s, l, a;
  for (let d = 0; d < i.length; d++)
    r = i[d].removeFromSet(r);
  for (let d = 0; d < n.length; d++)
    o = n[d].removeFromSet(o);
  if (r.length == 1 && o.length == 0)
    l = r[0], s = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (r.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let c = [];
  for (let d = 0; d < e.childCount; d++)
    c.push(a(e.child(d)));
  if (C.from(c).eq(t))
    return { mark: l, type: s };
}
function jb(t, e, n, i, r) {
  if (
    // The content must have shrunk
    n - e <= r.pos - i.pos || // newEnd must point directly at or after the end of the block that newStart points into
    ol(i, !0, !1) < r.pos
  )
    return !1;
  let o = t.resolve(e);
  if (!i.parent.inlineContent) {
    let l = o.nodeAfter;
    return l != null && n == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = t.resolve(ol(o, !0, !0));
  return !s.parent.isTextblock || s.pos > n || ol(s, !0, !1) < n ? !1 : i.parent.content.cut(i.parentOffset).eq(s.parent.content);
}
function Kb(t, e, n) {
  let i = 0, r = 0;
  return t.nodesBetween(e, n, (o, s) => {
    o.isTextblock && s >= e && s < n ? i++ : (o.isText ? /\S/.test(o.text.slice(Math.max(0, e - s), Math.min(o.nodeSize, n - s))) : o.isLeaf) && r++;
  }), r == 0 && i == 1;
}
function ol(t, e, n) {
  let i = t.depth, r = e ? t.end() : t.pos;
  for (; i > 0 && (e || t.indexAfter(i) == t.node(i).childCount); )
    i--, r++, e = !1;
  if (n) {
    let o = t.node(i).maybeChild(t.indexAfter(i));
    for (; o && !o.isLeaf; )
      o = o.firstChild, r++;
  }
  return r;
}
function qb(t, e, n, i, r) {
  let o = t.findDiffStart(e, n), s = n + t.size, l = n + e.size;
  if (o == null)
    return null;
  let { a, b: c } = t.findDiffEnd(e, s, l);
  if (r == "end") {
    let d = Math.max(0, o - Math.min(a, c));
    i -= a + d - o;
  }
  if (a < o && s < l) {
    let d = i <= o && i >= a ? o - i : 0;
    o -= d, c = o + (c - a), a = o;
  } else if (c < o) {
    let d = i <= o && i >= c ? o - i : 0;
    o -= d, a = o + (a - c), c = o;
  }
  return { start: o, endA: a, endB: c };
}
class Pp {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new ab(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(Bd), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = zd(this), _d(this), this.nodeViews = $d(this), this.docView = vd(this.state.doc, Pd(this), rl(this), this.dom, this), this.domObserver = new Ib(this, (i, r, o, s) => Wb(this, i, r, o, s)), this.domObserver.start(), cb(this), this.updatePluginViews();
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
    e.handleDOMEvents != this._props.handleDOMEvents && ql(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Bd), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let i in this._props)
      n[i] = this._props[i];
    n.state = this.state;
    for (let i in e)
      n[i] = e[i];
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
    var i;
    let r = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (Op(this), s = !0), this.state = e;
    let l = r.plugins != e.plugins || this._props.plugins != n.plugins;
    if (l || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let h = $d(this);
      Jb(h, this.nodeViews) && (this.nodeViews = h, o = !0);
    }
    (l || n.handleDOMEvents != this._props.handleDOMEvents) && ql(this), this.editable = zd(this), _d(this);
    let a = rl(this), c = Pd(this), d = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", u = o || !this.docView.matchesNode(e.doc, c, a);
    (u || !e.selection.eq(r.selection)) && (s = !0);
    let f = d == "preserve" && s && this.dom.style.overflowAnchor == null && Sy(this);
    if (s) {
      this.domObserver.stop();
      let h = u && (Fe || Oe) && !this.composing && !r.selection.empty && !e.selection.empty && Gb(r.selection, e.selection);
      if (u) {
        let m = Oe ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Cb(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = vd(e.doc, c, a, this.dom, this)), m && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (h = !0);
      }
      let p = this.input.mouseDown;
      h || !(p && this.domObserver.currentSelection.eq(this.domSelectionRange()) && qy(this) && p.delaySelUpdate()) ? _t(this, h) : (gp(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), !((i = this.dragging) === null || i === void 0) && i.node && !r.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, r), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : f && Cy(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !$n(this.dom, e))) {
      if (!this.someProp("handleScrollToSelection", (n) => n(this))) if (this.state.selection instanceof z) {
        let n = this.docView.domAfterPos(this.state.selection.from);
        $(n) && pd(this, n.getBoundingClientRect(), e);
      } else
        pd(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
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
        let i = this.directPlugins[n];
        i.spec.view && this.pluginViews.push(i.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let i = this.state.plugins[n];
        i.spec.view && this.pluginViews.push(i.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let i = this.pluginViews[n];
        i.update && i.update(this, e);
      }
  }
  updateDraggedNode(e, n) {
    let i = e.node, r = -1;
    if (i.from < this.state.doc.content.size && this.state.doc.nodeAt(i.from) == i.node)
      r = i.from;
    else {
      let o = i.from + (this.state.doc.content.size - n.doc.content.size);
      (o > 0 && o < this.state.doc.content.size && this.state.doc.nodeAt(o)) == i.node && (r = o);
    }
    this.dragging = new Rp(e.slice, e.move, r < 0 ? void 0 : z.create(this.state.doc, r));
  }
  someProp(e, n) {
    let i = this._props && this._props[e], r;
    if (i != null && (r = n ? n(i) : i))
      return r;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (r = n ? n(l) : l))
        return r;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (r = n ? n(l) : l))
          return r;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Fe) {
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
    this.domObserver.stop(), this.editable && My(this.dom), _t(this), this.domObserver.start();
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
    return Oy(this, e);
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
    return ap(this, e, n);
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
  posAtDOM(e, n, i = -1) {
    let r = this.docView.posFromDOM(e, n, i);
    if (r == null)
      throw new RangeError("DOM position not inside the editor");
    return r;
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
    return Iy(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return fr(this, "", e, !1, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return fr(this, e, null, !0, n || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return Xa(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (db(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], rl(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, fy());
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
    return fb(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.dom.isConnected !== !1 && this.domSelection();
    return e ? Ie && this.root.nodeType === 11 && by(this.dom.ownerDocument) == this.dom && Pb(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
Pp.prototype.dispatch = function(t) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, t) : this.updateState(this.state.apply(t));
};
function Pd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t.state)), n)
      for (let i in n)
        i == "class" ? e.class += " " + n[i] : i == "style" ? e.style = (e.style ? e.style + ";" : "") + n[i] : !e[i] && i != "contenteditable" && i != "nodeName" && (e[i] = String(n[i]));
  }), e.translate || (e.translate = "no"), [xe.node(0, t.state.doc.content.size, e)];
}
function _d(t) {
  if (t.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = { dom: e, deco: xe.widget(t.state.selection.from, e, { raw: !0, marks: t.markCursor }) };
  } else
    t.cursorWrapper = null;
}
function zd(t) {
  return !t.someProp("editable", (e) => e(t.state) === !1);
}
function Gb(t, e) {
  let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
  return t.$anchor.start(n) != e.$anchor.start(n);
}
function $d(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(i) {
    for (let r in i)
      Object.prototype.hasOwnProperty.call(e, r) || (e[r] = i[r]);
  }
  return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
}
function Jb(t, e) {
  let n = 0, i = 0;
  for (let r in t) {
    if (t[r] != e[r])
      return !0;
    n++;
  }
  for (let r in e)
    i++;
  return n != i;
}
function Bd(t) {
  if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var gn = {
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
}, To = {
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
}, Xb = typeof navigator < "u" && /Mac/.test(navigator.platform), Zb = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ee = 0; Ee < 10; Ee++) gn[48 + Ee] = gn[96 + Ee] = String(Ee);
for (var Ee = 1; Ee <= 24; Ee++) gn[Ee + 111] = "F" + Ee;
for (var Ee = 65; Ee <= 90; Ee++)
  gn[Ee] = String.fromCharCode(Ee + 32), To[Ee] = String.fromCharCode(Ee);
for (var sl in gn) To.hasOwnProperty(sl) || (To[sl] = gn[sl]);
function Yb(t) {
  var e = Xb && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || Zb && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? To : gn)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const Qb = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), ev = typeof navigator < "u" && /Win/.test(navigator.platform);
function tv(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let i, r, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      i = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      r = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Qb ? s = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return i && (n = "Alt-" + n), r && (n = "Ctrl-" + n), s && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function nv(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[tv(n)] = t[n];
  return e;
}
function ll(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function iv(t) {
  return new ie({ props: { handleKeyDown: nc(t) } });
}
function nc(t) {
  let e = nv(t);
  return function(n, i) {
    let r = Yb(i), o, s = e[ll(r, i)];
    if (s && s(n.state, n.dispatch, n))
      return !0;
    if (r.length == 1 && r != " ") {
      if (i.shiftKey) {
        let l = e[ll(r, i, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((i.altKey || i.metaKey || i.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(ev && i.ctrlKey && i.altKey) && (o = gn[i.keyCode]) && o != r) {
        let l = e[ll(o, i)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var Eo = 200, Ce = function() {
};
Ce.prototype.append = function(e) {
  return e.length ? (e = Ce.from(e), !this.length && e || e.length < Eo && this.leafAppend(e) || this.length < Eo && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Ce.prototype.prepend = function(e) {
  return e.length ? Ce.from(e).append(this) : this;
};
Ce.prototype.appendInner = function(e) {
  return new rv(this, e);
};
Ce.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? Ce.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
Ce.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Ce.prototype.forEach = function(e, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = this.length), n <= i ? this.forEachInner(e, n, i, 0) : this.forEachInvertedInner(e, n, i, 0);
};
Ce.prototype.map = function(e, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = this.length);
  var r = [];
  return this.forEach(function(o, s) {
    return r.push(e(o, s));
  }, n, i), r;
};
Ce.from = function(e) {
  return e instanceof Ce ? e : e && e.length ? new _p(e) : Ce.empty;
};
var _p = /* @__PURE__ */ (function(t) {
  function e(i) {
    t.call(this), this.values = i;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(r, o) {
    return r == 0 && o == this.length ? this : new e(this.values.slice(r, o));
  }, e.prototype.getInner = function(r) {
    return this.values[r];
  }, e.prototype.forEachInner = function(r, o, s, l) {
    for (var a = o; a < s; a++)
      if (r(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(r, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (r(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(r) {
    if (this.length + r.length <= Eo)
      return new e(this.values.concat(r.flatten()));
  }, e.prototype.leafPrepend = function(r) {
    if (this.length + r.length <= Eo)
      return new e(r.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
})(Ce);
Ce.empty = new _p([]);
var rv = /* @__PURE__ */ (function(t) {
  function e(n, i) {
    t.call(this), this.left = n, this.right = i, this.length = n.length + i.length, this.depth = Math.max(n.depth, i.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(i) {
    return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
  }, e.prototype.forEachInner = function(i, r, o, s) {
    var l = this.left.length;
    if (r < l && this.left.forEachInner(i, r, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(i, Math.max(r - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(i, r, o, s) {
    var l = this.left.length;
    if (r > l && this.right.forEachInvertedInner(i, r - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(i, Math.min(r, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(i, r) {
    if (i == 0 && r == this.length)
      return this;
    var o = this.left.length;
    return r <= o ? this.left.slice(i, r) : i >= o ? this.right.slice(i - o, r - o) : this.left.slice(i, o).append(this.right.slice(0, r - o));
  }, e.prototype.leafAppend = function(i) {
    var r = this.right.leafAppend(i);
    if (r)
      return new e(this.left, r);
  }, e.prototype.leafPrepend = function(i) {
    var r = this.left.leafPrepend(i);
    if (r)
      return new e(r, this.right);
  }, e.prototype.appendInner = function(i) {
    return this.left.depth >= Math.max(this.right.depth, i.depth) + 1 ? new e(this.left, new e(this.right, i)) : new e(this, i);
  }, e;
})(Ce);
const ov = 500;
class nt {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let i = this.items.length;
    for (; ; i--)
      if (this.items.get(i - 1).selection) {
        --i;
        break;
      }
    let r, o;
    n && (r = this.remapping(i, this.items.length), o = r.maps.length);
    let s = e.tr, l, a, c = [], d = [];
    return this.items.forEach((u, f) => {
      if (!u.step) {
        r || (r = this.remapping(i, f + 1), o = r.maps.length), o--, d.push(u);
        return;
      }
      if (r) {
        d.push(new dt(u.map));
        let h = u.step.map(r.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new dt(p, void 0, void 0, c.length + d.length))), o--, p && r.appendMap(p, o);
      } else
        s.maybeStep(u.step);
      if (u.selection)
        return l = r ? u.selection.map(r.slice(o)) : u.selection, a = new nt(this.items.slice(0, i).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, i, r) {
    let o = [], s = this.eventCount, l = this.items, a = !r && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), f = new dt(e.mapping.maps[d], u, n), h;
      (h = a && a.merge(f)) && (f = h, d ? o.pop() : l = l.slice(0, l.length - 1)), o.push(f), n && (s++, n = void 0), r || (a = f);
    }
    let c = s - i.depth;
    return c > lv && (l = sv(l, c), s -= c), new nt(l.append(o), s);
  }
  remapping(e, n) {
    let i = new cr();
    return this.items.forEach((r, o) => {
      let s = r.mirrorOffset != null && o - r.mirrorOffset >= e ? i.maps.length - r.mirrorOffset : void 0;
      i.appendMap(r.map, s);
    }, e, n), i;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new nt(this.items.append(e.map((n) => new dt(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    n = Math.min(this.items.length, n);
    let i = [], r = this.items.length - n, o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, r);
    let a = n;
    this.items.forEach((f) => {
      let h = o.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (f.step) {
        let m = e.steps[h].invert(e.docs[h]), g = f.selection && f.selection.map(o.slice(a + 1, h));
        g && l++, i.push(new dt(p, m, g));
      } else
        i.push(new dt(p));
    }, r);
    let c = [];
    for (let f = n; f < s; f++)
      c.push(new dt(o.maps[f]));
    let d = this.items.slice(0, r).append(c).append(i), u = new nt(d, l);
    return u.emptyItemCount() > ov && (u = u.compress(this.items.length - i.length)), u;
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
    let n = this.remapping(0, e), i = n.maps.length, r = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        r.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(n.slice(i)), c = a && a.getMap();
        if (i--, c && n.appendMap(c, i), a) {
          let d = s.selection && s.selection.map(n.slice(i));
          d && o++;
          let u = new dt(c.invert(), a, d), f, h = r.length - 1;
          (f = r.length && r[h].merge(u)) ? r[h] = f : r.push(u);
        }
      } else s.map && i--;
    }, this.items.length, 0), new nt(Ce.from(r.reverse()), o);
  }
}
nt.empty = new nt(Ce.empty, 0);
function sv(t, e) {
  let n;
  return t.forEach((i, r) => {
    if (i.selection && e-- == 0)
      return n = r, !1;
  }), t.slice(n);
}
class dt {
  constructor(e, n, i, r) {
    this.map = e, this.step = n, this.selection = i, this.mirrorOffset = r;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new dt(n.getMap().invert(), n, this.selection);
    }
  }
}
class en {
  constructor(e, n, i, r, o) {
    this.done = e, this.undone = n, this.prevRanges = i, this.prevTime = r, this.prevComposition = o;
  }
}
const lv = 20;
function av(t, e, n, i) {
  let r = n.getMeta(pn), o;
  if (r)
    return r.historyState;
  n.getMeta(zp) && (t = new en(t.done, t.undone, null, 0, -1));
  let s = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t;
  if (s && s.getMeta(pn))
    return s.getMeta(pn).redo ? new en(t.done.addTransform(n, void 0, i, fo(e)), t.undone, Fd(n.mapping.maps), t.prevTime, t.prevComposition) : new en(t.done, t.undone.addTransform(n, void 0, i, fo(e)), null, t.prevTime, t.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = t.prevTime == 0 || !s && t.prevComposition != l && (t.prevTime < (n.time || 0) - i.newGroupDelay || !cv(n, t.prevRanges)), c = s ? al(t.prevRanges, n.mapping) : Fd(n.mapping.maps);
    return new en(t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, i, fo(e)), nt.empty, c, n.time, l ?? t.prevComposition);
  } else return (o = n.getMeta("rebased")) ? new en(t.done.rebased(n, o), t.undone.rebased(n, o), al(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new en(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), al(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
}
function cv(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let n = !1;
  return t.mapping.maps[0].forEach((i, r) => {
    for (let o = 0; o < e.length; o += 2)
      i <= e[o + 1] && r >= e[o] && (n = !0);
  }), n;
}
function Fd(t) {
  let e = [];
  for (let n = t.length - 1; n >= 0 && e.length == 0; n--)
    t[n].forEach((i, r, o, s) => e.push(o, s));
  return e;
}
function al(t, e) {
  if (!t)
    return null;
  let n = [];
  for (let i = 0; i < t.length; i += 2) {
    let r = e.map(t[i], 1), o = e.map(t[i + 1], -1);
    r <= o && n.push(r, o);
  }
  return n;
}
function dv(t, e, n) {
  let i = fo(e), r = pn.get(e).spec.config, o = (n ? t.undone : t.done).popEvent(e, i);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (n ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), r, i), a = new en(n ? l : o.remaining, n ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(pn, { redo: n, historyState: a });
}
let cl = !1, Wd = null;
function fo(t) {
  let e = t.plugins;
  if (Wd != e) {
    cl = !1, Wd = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        cl = !0;
        break;
      }
  }
  return cl;
}
function uv(t) {
  return t.setMeta(zp, !0);
}
const pn = new se("history"), zp = new se("closeHistory");
function fv(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new ie({
    key: pn,
    state: {
      init() {
        return new en(nt.empty, nt.empty, null, 0, -1);
      },
      apply(e, n, i) {
        return av(n, i, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let i = n.inputType, r = i == "historyUndo" ? Bp : i == "historyRedo" ? Fp : null;
          return !r || !e.editable ? !1 : (n.preventDefault(), r(e.state, e.dispatch));
        }
      }
    }
  });
}
function $p(t, e) {
  return (n, i) => {
    let r = pn.getState(n);
    if (!r || (t ? r.undone : r.done).eventCount == 0)
      return !1;
    if (i) {
      let o = dv(r, n, t);
      o && i(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const Bp = $p(!1, !0), Fp = $p(!0, !0);
function hv(t) {
  return t.getMeta(pn) != null;
}
function Ms(t) {
  const { state: e, transaction: n } = t;
  let { selection: i } = n, { doc: r } = n, { storedMarks: o } = n;
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
      return i;
    },
    get doc() {
      return r;
    },
    get tr() {
      return i = n.selection, r = n.doc, o = n.storedMarks, n;
    }
  };
}
var fi = class Wp {
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
    const { rawCommands: e, editor: n, state: i } = this, { view: r } = n, { tr: o } = i, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...d) => {
      const u = a(...d)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(o), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: i, editor: r, state: o } = this, { view: s } = r, l = [], a = !!e, c = e || o.tr, d = () => (!a && n && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), l.every((f) => f === !0)), u = {
      ...Object.fromEntries(Object.entries(i).map(([f, h]) => [f, (...m) => {
        const g = this.buildProps(c, n), y = h(...m)(g);
        return l.push(y), u;
      }])),
      run: d
    };
    return u;
  }
  /**
  * Creates a chain that safely returns `false` when run.
  * @returns A non-dispatching command chain.
  * @example
  * const chain = CommandManager.createFakeChain()
  * chain.focus().run() // false
  */
  static createFakeChain() {
    const e = new Proxy({}, { get: (n, i) => {
      if (i !== "then")
        return i === "run" ? () => !1 : () => e;
    } });
    return e;
  }
  createCan(e) {
    const { rawCommands: n, state: i } = this, r = !1, o = e || i.tr, s = this.buildProps(o, r);
    return {
      ...Object.fromEntries(Object.entries(n).map(([l, a]) => [l, (...c) => a(...c)({
        ...s,
        dispatch: void 0
      })])),
      chain: () => this.createChain(o, r)
    };
  }
  /**
  * Creates capability checks that safely return `false`.
  * @returns A non-dispatching capability checker.
  * @example
  * const can = CommandManager.createFallbackCan()
  * can.focus() // false
  */
  static createFallbackCan() {
    const e = Wp.createFakeChain();
    return new Proxy({ chain: () => e }, { get: (n, i) => {
      if (i !== "then")
        return i === "chain" ? n.chain : () => !1;
    } });
  }
  buildProps(e, n = !0) {
    const { rawCommands: i, editor: r, state: o } = this, { view: s } = r, l = {
      tr: e,
      editor: r,
      view: s,
      state: Ms({
        state: o,
        transaction: e
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(e, n),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(i).map(([a, c]) => [a, (...d) => c(...d)(l)]));
      }
    };
    return l;
  }
};
const pv = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  if (!t.isDestroyed) {
    var n;
    e.dom.blur(), (n = window) === null || n === void 0 || (n = n.getSelection()) === null || n === void 0 || n.removeAllRanges();
  }
}), !0), mv = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), gv = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { ranges: i } = n;
  if (!e) return !0;
  const r = t.mapping.maps.length;
  return i.forEach(({ $from: o, $to: s }) => {
    const l = o.pos, a = s.pos, c = t.mapping.slice(r);
    let d = 1;
    t.doc.nodesBetween(c.map(l), c.map(a), (u, f) => {
      d = Math.max(d, t.doc.resolve(f).depth + 1);
    });
    for (let u = 0; u < d; u += 1) {
      const f = t.doc, h = t.mapping.maps.length, p = t.mapping.slice(r);
      let m = h, g = t.mapping.slice(h);
      const y = p.map(l), b = p.map(a);
      if (f.nodesBetween(y, b, (v, w) => {
        if (v.type.isText) return;
        t.mapping.maps.length !== m && (m = t.mapping.maps.length, g = t.mapping.slice(h));
        const x = t.doc.resolve(g.map(w)), k = t.doc.resolve(g.map(w + v.nodeSize)), S = x.blockRange(k);
        if (!S) return;
        const M = Ei(S);
        if (v.type.isTextblock) {
          const { defaultType: O } = x.parent.contentMatchAt(x.index()), V = t.doc.nodeAt(S.start);
          O && V && !V.hasMarkup(O) && O.validContent(V.content) && t.setNodeMarkup(S.start, O);
        }
        (M || M === 0) && t.lift(S, M);
      }), t.doc.eq(f)) break;
    }
  }), !0;
}, yv = (t) => (e) => t(e), bv = () => ({ state: t, dispatch: e }) => Zh(t, e), vv = (t, e) => ({ editor: n, tr: i }) => {
  const { state: r } = n, o = r.doc.slice(t.from, t.to);
  i.deleteRange(t.from, t.to);
  const s = i.mapping.map(e);
  return i.insert(s, o.content), i.setSelection(new I(i.doc.resolve(Math.max(s - 1, 0)))), !0;
}, wv = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, i = n.$anchor.node();
  if (i.content.size > 0) return !1;
  const r = t.selection.$anchor;
  for (let o = r.depth; o > 0; o -= 1) if (r.node(o).type === i.type) {
    if (e) {
      const s = r.before(o), l = r.after(o);
      t.delete(s, l).scrollIntoView();
    }
    return !0;
  }
  return !1;
};
function ke(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t]) throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
const kv = (t) => ({ tr: e, state: n, dispatch: i }) => {
  const r = ke(t, n.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1) if (o.node(s).type === r) {
    if (i) {
      const l = o.before(s), a = o.after(s);
      e.delete(l, a).scrollIntoView();
    }
    return !0;
  }
  return !1;
}, xv = (t) => ({ tr: e, dispatch: n }) => {
  const { from: i, to: r } = t;
  return n && e.delete(i, r), !0;
}, Sv = (t) => t.content ? /^text(\*|\+)/.test(t.content) : !1, Ud = (t, e, n) => {
  if (!t.parent.isInline || n === "left" && t.pos > t.start() || n === "right" && t.pos < t.end()) return t.pos;
  const i = e.nodes[t.parent.type.name].spec;
  return Sv(i) ? n === "left" ? t.start() - 1 : t.end() + 1 : t.pos;
}, Cv = (t, e, n) => ({
  from: Ud(t, n, "left"),
  to: Ud(e, n, "right")
}), Mv = () => ({ state: t, dispatch: e }) => {
  if (t.selection.empty) return !1;
  if (e) {
    const n = t.tr, { ranges: i } = t.selection, r = t.selection instanceof I ? t.selection.$from.marksAcross(t.selection.$to) : null, o = n.steps.length;
    i.forEach((s) => {
      const l = n.mapping.slice(o), a = n.doc.resolve(l.map(s.$from.pos)), c = n.doc.resolve(l.map(s.$to.pos)), { from: d, to: u } = Cv(a, c, t.schema);
      n.deleteRange(d, u);
    }), n.selection.empty || n.setSelection(I.near(n.doc.resolve(n.selection.from))), r && n.ensureMarks(r), n.scrollIntoView(), e(n);
  }
  return !0;
}, Av = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Tv = () => ({ state: t, dispatch: e }) => Z0(t, e);
function ic(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Lo(t, e, n = { strict: !0 }) {
  const i = Object.keys(e);
  return i.length ? i.every((r) => n.strict ? e[r] === t[r] : ic(e[r]) ? e[r].test(t[r]) : e[r] === t[r]) : !0;
}
function Up(t, e, n = {}) {
  return t.find((i) => i.type === e && Lo(Object.fromEntries(Object.keys(n).map((r) => [r, i.attrs[r]])), n));
}
function jd(t, e, n = {}) {
  return !!Up(t, e, n);
}
function As(t, e, n) {
  if (!t || !e) return;
  let i = t.parent.childAfter(t.parentOffset);
  if ((!i.node || !i.node.marks.some((a) => a.type === e)) && (i = t.parent.childBefore(t.parentOffset)), !i.node || !i.node.marks.some((a) => a.type === e)) return;
  if (!n) {
    const a = i.node.marks.find((c) => c.type === e);
    a && (n = a.attrs);
  }
  if (!Up([...i.node.marks], e, n)) return;
  let r = i.index, o = t.start() + i.offset, s = r + 1, l = o + i.node.nodeSize;
  for (; r > 0 && jd([...t.parent.child(r - 1).marks], e, n); )
    r -= 1, o -= t.parent.child(r).nodeSize;
  for (; s < t.parent.childCount && jd([...t.parent.child(s).marks], e, n); )
    l += t.parent.child(s).nodeSize, s += 1;
  return {
    from: o,
    to: l
  };
}
function jt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t]) throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const Ev = (t, e) => ({ tr: n, state: i, dispatch: r }) => {
  const o = jt(t, i.schema), { doc: s, selection: l } = n, { $from: a, from: c, to: d } = l;
  if (r) {
    const u = As(a, o, e);
    if (u && u.from <= c && u.to >= d) {
      const f = I.create(s, u.from, u.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Lv = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let i = 0; i < n.length; i += 1) if (n[i](e)) return !0;
  return !1;
};
function Ts(t) {
  return t instanceof I;
}
function Dt(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Jl(t, e = null) {
  if (!e) return null;
  const n = B.atStart(t), i = B.atEnd(t);
  if (e === "start" || e === !0) return n;
  if (e === "end") return i;
  const r = n.from, o = i.to;
  return e === "all" ? I.create(t, Dt(0, r, o), Dt(t.content.size, r, o)) : I.create(t, Dt(e, r, o), Dt(e, r, o));
}
function Xl() {
  return ["Android"].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function pr() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Ov() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
const Hv = (t = null, e = {}) => ({ editor: n, view: i, tr: r, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (pr() || Xl()) && i.dom.focus(), Ov() && !pr() && !Xl() && i.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (i.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (i.hasFocus() && t === null || t === !1) return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !Ts(n.state.selection))
    return s(), !0;
  const l = Jl(r.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || r.setSelection(l), a && r.storedMarks && r.setStoredMarks(r.storedMarks), s()), !0;
}, Rv = (t, e) => (n) => t.every((i, r) => e(i, {
  ...n,
  index: r
})), Vv = (t, e) => ({ tr: n, commands: i }) => i.insertContentAt({
  from: n.selection.from,
  to: n.selection.to
}, t, e), jp = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const i = e[n];
    i.nodeType === 3 && i.nodeValue && /^(\n\s\s|\n)$/.test(i.nodeValue) ? t.removeChild(i) : i.nodeType === 1 && jp(i);
  }
  return t;
};
function zr(t) {
  if (typeof window > "u") throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return jp(n);
}
function Kp(t) {
  return typeof t?.nodesBetween == "function";
}
function wi(t, e, n) {
  if (Kp(t)) return t;
  const i = typeof t == "object" && t !== null;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof t == "string";
  if (i) try {
    if (Array.isArray(t) && t.length > 0) return C.fromArray(t.map((s) => e.nodeFromJSON(s)));
    const o = e.nodeFromJSON(t);
    return n.errorOnInvalidContent && o.check(), o;
  } catch (o) {
    if (n.errorOnInvalidContent) throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
    return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), wi("", e, n);
  }
  if (r) {
    if (n.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new ao({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        nodes: e.spec.nodes.append({ __tiptap__private__unknown__catch__all__node: {
          content: "inline*",
          group: "block",
          parseDOM: [{
            tag: "*",
            getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
          }]
        } })
      });
      if (n.slice ? cn.fromSchema(a).parseSlice(zr(t), n.parseOptions) : cn.fromSchema(a).parse(zr(t), n.parseOptions), n.errorOnInvalidContent && s) throw new Error("[tiptap error]: Invalid HTML content", { cause: /* @__PURE__ */ new Error(`Invalid element found: ${l}`) });
    }
    const o = cn.fromSchema(e);
    return n.slice ? o.parseSlice(zr(t), n.parseOptions).content : o.parse(zr(t), n.parseOptions);
  }
  return wi("", e, n);
}
function qp(t) {
  return !("type" in t);
}
function Gp(t, e, n) {
  const i = t.steps.length - 1;
  if (i < e) return;
  const r = t.steps[i];
  if (!(r instanceof pe || r instanceof Se)) return;
  const o = t.mapping.maps[i];
  let s = 0;
  o.forEach((l, a, c, d) => {
    s === 0 && (s = d);
  }), t.setSelection(B.near(t.doc.resolve(s), n));
}
const Nv = (t, e, n) => ({ tr: i, dispatch: r, editor: o }) => {
  if (r) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let l;
    const a = (g) => {
      o.emit("contentError", {
        editor: o,
        error: g,
        disableCollaboration: () => {
          "collaboration" in o.storage && typeof o.storage.collaboration == "object" && o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError) try {
      wi(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: !0
      });
    } catch (g) {
      a(g);
    }
    try {
      var s;
      l = wi(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (s = n.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (g) {
      return a(g), !1;
    }
    let { from: d, to: u } = typeof t == "number" ? {
      from: t,
      to: t
    } : {
      from: t.from,
      to: t.to
    }, f = !0, h = !0;
    const p = qp(l) ? l.content : [l];
    if (p.forEach((g) => {
      g.check(), f = f ? g.isText && g.marks.length === 0 : !1, h = h ? g.isBlock : !1;
    }), d === u && h) {
      const { parent: g } = i.doc.resolve(d);
      g.isTextblock && !g.type.spec.code && !g.childCount && (d -= 1, u += 1);
    }
    let m;
    if (f)
      Array.isArray(e) ? m = e.map((g) => g.text || "").join("") : Kp(e) ? m = p.map((g) => {
        var y;
        return (y = g.text) !== null && y !== void 0 ? y : "";
      }).join("") : typeof e == "object" && e && e.text ? m = e.text : m = e, i.insertText(m, d, u);
    else {
      m = C.from(p);
      const g = i.doc.resolve(d), y = g.node(), b = g.parentOffset === 0, v = y.isText || y.isTextblock, w = y.content.size > 0;
      b && v && w && h && (d = Math.max(0, d - 1)), i.replaceWith(d, u, p);
    }
    n.updateSelection && Gp(i, i.steps.length - 1, -1), n.applyInputRules && i.setMeta("applyInputRules", {
      from: d,
      text: m
    }), n.applyPasteRules && i.setMeta("applyPasteRules", {
      from: d,
      text: m
    });
  }
  return !0;
};
function Jp(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs()) return n;
  }
  return null;
}
const Iv = (t = {}) => ({ tr: e, dispatch: n, editor: i }) => {
  const { pos: r, attrs: o, content: s, updateSelection: l = !0 } = t;
  let a;
  typeof r == "number" ? a = e.doc.resolve(r) : r ? a = r : a = e.selection.$from;
  const c = Jp(a.parent.contentMatchAt(a.index()));
  if (!c) return !1;
  const d = Object.keys(c.spec.attrs || {}), u = o ? Object.fromEntries(Object.entries(o).filter(([h]) => d.includes(h))) : {};
  let f;
  if (s) {
    const h = wi(s, i.schema);
    f = c.createAndFill(u, h);
  } else f = c.createAndFill(u);
  return f ? (n && (e.insert(a.pos, f), l && Gp(e, e.steps.length - 1, -1)), !0) : !1;
}, Dv = () => ({ state: t, dispatch: e }) => G0(t, e), Pv = () => ({ state: t, dispatch: e }) => J0(t, e), _v = () => ({ state: t, dispatch: e }) => Fh(t, e), zv = () => ({ state: t, dispatch: e }) => Gh(t, e), Xp = (t, e) => {
  const n = t.resolve(e), i = n.nodeBefore, r = n.nodeAfter;
  return !i || !r ? !1 : !i.type.spec.isolating && !r.type.spec.isolating;
}, $v = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const i = vs(t.doc, t.selection.$from.pos, -1);
    return i == null || !Xp(t.doc, i) ? !1 : (n.join(i, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Bv = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const i = vs(t.doc, t.selection.$from.pos, 1);
    return i == null || !Xp(t.doc, i) ? !1 : (n.join(i, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Fv = () => ({ state: t, dispatch: e }) => Wh(t, e), Wv = () => ({ state: t, dispatch: e }) => Uh(t, e);
function Zp() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Uv(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let i, r, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a)) s = !0;
    else if (/^a(lt)?$/i.test(a)) i = !0;
    else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
    else if (/^s(hift)?$/i.test(a)) o = !0;
    else if (/^mod$/i.test(a))
      pr() || Zp() ? s = !0 : r = !0;
    else throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return i && (n = `Alt-${n}`), r && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
const jv = (t) => ({ editor: e, view: n, tr: i, dispatch: r }) => {
  const o = Uv(t).split(/-(?!$)/), s = o.find((c) => ![
    "Alt",
    "Ctrl",
    "Meta",
    "Shift"
  ].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (c) => c(n, l));
  });
  return a?.steps.forEach((c) => {
    const d = c.map(i.mapping);
    d && r && i.maybeStep(d);
  }), !0;
};
function Wt(t, e, n = {}) {
  const { from: i, to: r, empty: o } = t.selection, s = e ? ke(e, t.schema) : null, l = [];
  t.doc.nodesBetween(i, r, (d, u) => {
    if (d.isText) return;
    const f = Math.max(i, u), h = Math.min(r, u + d.nodeSize);
    l.push({
      node: d,
      from: f,
      to: h
    });
  });
  const a = r - i, c = l.filter((d) => s ? s.name === d.node.type.name : !0).filter((d) => Lo(d.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, u) => d + u.to - u.from, 0) >= a;
}
const Kv = (t, e = {}) => ({ state: n, dispatch: i }) => Wt(n, ke(t, n.schema), e) ? X0(n, i) : !1, qv = () => ({ state: t, dispatch: e }) => Yh(t, e), Gv = (t) => ({ state: e, dispatch: n }) => {
  const i = ke(t, e.schema);
  return ay(i)(e, n);
}, Jv = () => ({ state: t, dispatch: e }) => Xh(t, e);
function Es(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Kd(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((i, r) => (n.includes(r) || (i[r] = t[r]), i), {});
}
const Xv = (t, e) => ({ tr: n, state: i, dispatch: r }) => {
  let o = null, s = null;
  const l = Es(typeof t == "string" ? t : t.name, i.schema);
  if (!l) return !1;
  l === "node" && (o = ke(t, i.schema)), l === "mark" && (s = jt(t, i.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    i.doc.nodesBetween(c.$from.pos, c.$to.pos, (d, u) => {
      o && o === d.type && (a = !0, r && n.setNodeMarkup(u, void 0, Kd(d.attrs, e))), s && d.marks.length && d.marks.forEach((f) => {
        s === f.type && (a = !0, r && n.addMark(u, u + d.nodeSize, s.create(Kd(f.attrs, e))));
      });
    });
  }), a;
}, Zv = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), Yv = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new Ke(t.doc);
    t.setSelection(n);
  }
  return !0;
}, Qv = () => ({ state: t, dispatch: e }) => Kh(t, e), ew = () => ({ state: t, dispatch: e }) => Jh(t, e), tw = () => ({ state: t, dispatch: e }) => ey(t, e), nw = () => ({ state: t, dispatch: e }) => iy(t, e), iw = () => ({ state: t, dispatch: e }) => ny(t, e);
function Zl(t, e, n = {}, i = {}) {
  return wi(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: i.errorOnInvalidContent
  });
}
const rw = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: i = {} } = {}) => ({ editor: r, tr: o, dispatch: s, commands: l }) => {
  const { doc: a } = o;
  if (i.preserveWhitespace !== "full") {
    const c = Zl(t, r.schema, i, { errorOnInvalidContent: e ?? r.options.enableContentCheck });
    if (s) {
      const d = qp(c) ? c.content : [c];
      o.replaceWith(0, a.content.size, d).setMeta("preventUpdate", !n);
    }
    return !0;
  }
  return s && o.setMeta("preventUpdate", !n), l.insertContentAt({
    from: 0,
    to: a.content.size
  }, t, {
    parseOptions: i,
    errorOnInvalidContent: e ?? r.options.enableContentCheck
  });
};
function Yp(t, e) {
  const n = jt(e, t.schema), { from: i, to: r, empty: o } = t.selection, s = [];
  o ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(i, r, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function Qp(t, e) {
  const n = new $a(t);
  return e.forEach((i) => {
    i.steps.forEach((r) => {
      n.step(r);
    });
  }), n;
}
function ow(t, e, n) {
  const i = [];
  return t.nodesBetween(e.from, e.to, (r, o) => {
    n(r) && i.push({
      node: r,
      pos: o
    });
  }), i;
}
function mr(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const i = t.node(n);
    if (e(i)) return {
      pos: n > 0 ? t.before(n) : 0,
      start: t.start(n),
      depth: n,
      node: i
    };
  }
}
function Ls(t) {
  return (e) => mr(e.$from, t);
}
function _(t, e, n) {
  return t.config[e] === void 0 && t.parent ? _(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? _(t.parent, e, n) : null
  }) : t.config[e];
}
function rc(t) {
  return t.map((e) => {
    const n = _(e, "addExtensions", {
      name: e.name,
      options: e.options,
      storage: e.storage
    });
    return n ? [e, ...rc(n())] : e;
  }).flat(10);
}
function oc(t, e) {
  const n = vn.fromSchema(e).serializeFragment(t), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(n), i.innerHTML;
}
function em(t, e) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t) {
    var i;
    const o = (i = n.get(r.type)) !== null && i !== void 0 ? i : /* @__PURE__ */ new Map();
    o.set(r.name, r), n.set(r.type, o);
  }
  return [...Object.values(e.nodes), ...Object.values(e.marks)].flatMap((r) => {
    var o;
    return Object.entries((o = r.spec.attrs) !== null && o !== void 0 ? o : {}).map(([s, l]) => {
      var a;
      const c = (a = n.get(r.name)) === null || a === void 0 ? void 0 : a.get(s), d = Object.hasOwn(l, "default");
      return {
        type: r.name,
        name: s,
        attribute: {
          rendered: !0,
          renderHTML: null,
          parseHTML: null,
          keepOnSplit: !0,
          ...c?.attribute,
          default: l.default,
          isRequired: !d,
          validate: l.validate
        }
      };
    });
  });
}
const sw = {
  content: "string",
  marks: "string",
  group: "string",
  inline: "boolean",
  atom: "boolean",
  selectable: "boolean",
  draggable: "boolean",
  code: "boolean",
  whitespace: ["pre", "normal"],
  definingAsContext: "boolean",
  definingForContent: "boolean",
  defining: "boolean",
  isolating: "boolean",
  linebreakReplacement: "boolean"
}, lw = {
  inclusive: "boolean",
  excludes: "string",
  group: "string",
  spanning: "boolean",
  code: "boolean"
};
function aw(t, e, n) {
  return Object.fromEntries(Object.entries(e).flatMap(([i, r]) => {
    const o = t[i];
    if (o === void 0) return [];
    if (!(typeof r == "string" ? typeof o === r : typeof o == "string" && r.includes(o))) throw new RangeError(`Invalid schemaSpec field '${n}.${i}'`);
    return [[i, o]];
  }));
}
function qd(t, e, n, i) {
  return {
    ...Object.fromEntries(Object.entries(e).filter(([r]) => r !== "attrs" && !Object.hasOwn(i, r))),
    ...aw(n, i, t),
    attrs: n.attrs
  };
}
function Gd(t, e, n) {
  for (const i of Object.keys(e)) if (!Object.hasOwn(t, i)) throw new RangeError(`schemaSpec requires a local ${n} extension named '${i}'`);
  for (const i of Object.keys(t)) if (!Object.hasOwn(e, i)) throw new RangeError(`Local ${n} extension '${i}' is not in schemaSpec`);
}
function cw(t, e) {
  Gd(t.nodes, e.nodes, "node"), Gd(t.marks, e.marks, "mark");
  let n = e.spec.nodes, i = e.spec.marks;
  return e.spec.nodes.forEach((r, o) => {
    n = n.update(r, qd(r, t.nodes[r], o, sw));
  }), e.spec.marks.forEach((r, o) => {
    i = i.update(r, qd(r, t.marks[r], o, lw));
  }), {
    topNode: e.topNodeType.name,
    nodes: n,
    marks: i
  };
}
function tm(t) {
  const e = t.filter((n, i) => t.indexOf(n) !== i);
  return Array.from(new Set(e));
}
function ki(t) {
  return {
    baseExtensions: t.filter((e) => e.type === "extension"),
    nodeExtensions: t.filter((e) => e.type === "node"),
    markExtensions: t.filter((e) => e.type === "mark")
  };
}
function sc(t) {
  const e = [], { nodeExtensions: n, markExtensions: i } = ki(t), r = [...n, ...i], o = {
    default: null,
    validate: void 0,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  }, s = n.filter((c) => c.name !== "text").map((c) => c.name), l = i.map((c) => c.name), a = [...s, ...l];
  return t.forEach((c) => {
    const d = _(c, "addGlobalAttributes", {
      name: c.name,
      options: c.options,
      storage: c.storage,
      extensions: r
    });
    d && d().forEach((u) => {
      let f;
      Array.isArray(u.types) ? f = u.types : u.types === "*" ? f = a : u.types === "nodes" ? f = s : u.types === "marks" ? f = l : f = [], f.forEach((h) => {
        Object.entries(u.attributes).forEach(([p, m]) => {
          e.push({
            type: h,
            name: p,
            attribute: {
              ...o,
              ...m
            }
          });
        });
      });
    });
  }), r.forEach((c) => {
    const d = _(c, "addAttributes", {
      name: c.name,
      options: c.options,
      storage: c.storage
    });
    if (!d) return;
    const u = d();
    Object.entries(u).forEach(([f, h]) => {
      const p = {
        ...o,
        ...h
      };
      typeof p?.default == "function" && (p.default = p.default()), p?.isRequired && p?.default === void 0 && delete p.default, e.push({
        type: c.name,
        name: f,
        attribute: p
      });
    });
  }), e;
}
function Yl(t) {
  return typeof t == "function";
}
function ee(t, e = void 0, ...n) {
  return Yl(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function dw(t = {}) {
  return Object.keys(t).length === 0 && t.constructor === Object;
}
function uw(t) {
  const e = [];
  let n = "", i = !1, r = !1, o = 0;
  const s = t.length;
  for (let l = 0; l < s; l += 1) {
    const a = t[l];
    if (a === "'" && !r) {
      i = !i, n += a;
      continue;
    }
    if (a === '"' && !i) {
      r = !r, n += a;
      continue;
    }
    if (!i && !r) {
      if (a === "(") {
        o += 1, n += a;
        continue;
      }
      if (a === ")" && o > 0) {
        o -= 1, n += a;
        continue;
      }
      if (a === ";" && o === 0) {
        e.push(n), n = "";
        continue;
      }
    }
    n += a;
  }
  return n && e.push(n), e;
}
function Jd(t) {
  const e = [], n = uw(t || ""), i = n.length;
  for (let r = 0; r < i; r += 1) {
    const o = n[r], s = o.indexOf(":");
    if (s === -1) continue;
    const l = o.slice(0, s).trim(), a = o.slice(s + 1).trim();
    l && a && e.push([l, a]);
  }
  return e;
}
function re(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const i = { ...e };
    return Object.entries(n).forEach(([r, o]) => {
      if (r === "__proto__") {
        Object.defineProperty(i, r, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        });
        return;
      }
      if (!i[r]) {
        i[r] = o;
        return;
      }
      if (r === "class") {
        const s = o ? String(o).split(" ") : [], l = i[r] ? i[r].split(" ") : [], a = s.filter((c) => !l.includes(c));
        i[r] = [...l, ...a].join(" ");
      } else if (r === "style") {
        const s = new Map([...Jd(i[r]), ...Jd(o)]);
        i[r] = Array.from(s.entries()).map(([l, a]) => `${l}: ${a}`).join("; ");
      } else i[r] = o;
    }), i;
  }, {});
}
function xi(t, e) {
  return e.filter((n) => n.type === t.type.name).filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : { [n.name]: t.attrs[n.name] }).reduce((n, i) => re(n, i), {});
}
function fw(t) {
  return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t;
}
function Xd(t, e) {
  return "style" in t ? t : {
    ...t,
    getAttrs: (n) => {
      const i = t.getAttrs ? t.getAttrs(n) : t.attrs;
      if (i === !1) return !1;
      const r = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(n) : fw(n.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return {
        ...i,
        ...r
      };
    }
  };
}
function Zd(t) {
  return Object.fromEntries(Object.entries(t).filter(([e, n]) => e === "attrs" && dw(n) ? !1 : n != null));
}
function Yd(t) {
  var e, n;
  const i = {};
  return !(!(t == null || (e = t.attribute) === null || e === void 0) && e.isRequired) && "default" in (t?.attribute || {}) && (i.default = t.attribute.default), (t == null || (n = t.attribute) === null || n === void 0 ? void 0 : n.validate) !== void 0 && (i.validate = t.attribute.validate), [t.name, i];
}
function Qd(t, e, n = sc(t)) {
  var i;
  const { nodeExtensions: r, markExtensions: o } = ki(t);
  return {
    topNode: (i = r.find((s) => _(s, "topNode"))) === null || i === void 0 ? void 0 : i.name,
    nodes: Object.fromEntries(r.map((s) => {
      const l = n.filter((h) => h.type === s.name), a = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e
      }, c = Zd({
        ...t.reduce((h, p) => {
          const m = _(p, "extendNodeSchema", a);
          return {
            ...h,
            ...m ? m(s) : {}
          };
        }, {}),
        content: ee(_(s, "content", a)),
        marks: ee(_(s, "marks", a)),
        group: ee(_(s, "group", a)),
        inline: ee(_(s, "inline", a)),
        atom: ee(_(s, "atom", a)),
        selectable: ee(_(s, "selectable", a)),
        draggable: ee(_(s, "draggable", a)),
        code: ee(_(s, "code", a)),
        whitespace: ee(_(s, "whitespace", a)),
        linebreakReplacement: ee(_(s, "linebreakReplacement", a)),
        defining: ee(_(s, "defining", a)),
        isolating: ee(_(s, "isolating", a)),
        attrs: Object.fromEntries(l.map(Yd))
      }), d = ee(_(s, "parseHTML", a));
      d && (c.parseDOM = d.map((h) => Xd(h, l)));
      const u = _(s, "renderHTML", a);
      u && (c.toDOM = (h) => u({
        node: h,
        HTMLAttributes: xi(h, l)
      }));
      const f = _(s, "renderText", a);
      return f && (c.toText = f), [s.name, c];
    })),
    marks: Object.fromEntries(o.map((s) => {
      const l = n.filter((f) => f.type === s.name), a = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e
      }, c = Zd({
        ...t.reduce((f, h) => {
          const p = _(h, "extendMarkSchema", a);
          return {
            ...f,
            ...p ? p(s) : {}
          };
        }, {}),
        inclusive: ee(_(s, "inclusive", a)),
        excludes: ee(_(s, "excludes", a)),
        group: ee(_(s, "group", a)),
        spanning: ee(_(s, "spanning", a)),
        code: ee(_(s, "code", a)),
        attrs: Object.fromEntries(l.map(Yd))
      }), d = ee(_(s, "parseHTML", a));
      d && (c.parseDOM = d.map((f) => Xd(f, l)));
      const u = _(s, "renderHTML", a);
      return u && (c.toDOM = (f) => u({
        mark: f,
        HTMLAttributes: xi(f, l)
      })), [s.name, c];
    }))
  };
}
function nm(t, e, n) {
  if (n === void 0) return new ao(Qd(t, e));
  const i = tm(t.filter((s) => s.type !== "extension").map((s) => s.name));
  if (i.length) throw new RangeError(`Duplicate local schema types: ${i.join(", ")}`);
  const r = new ao(n), o = Qd(t, e, em(sc(t), r));
  return new ao(cw(o, r));
}
function Ki(t) {
  return t.sort((n, i) => {
    const r = _(n, "priority") || 100, o = _(i, "priority") || 100;
    return r > o ? -1 : r < o ? 1 : 0;
  });
}
function lc(t) {
  const e = Ki(rc(t)), n = tm(e.map((i) => i.name));
  return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), e;
}
function hw(t, e) {
  return nm(lc(t), e);
}
function im(t, e, n) {
  const { from: i, to: r } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = n || {};
  let l = "";
  return t.nodesBetween(i, r, (a, c, d, u) => {
    a.isBlock && c > i && (l += o);
    const f = s?.[a.type.name];
    if (f)
      return d && (l += f({
        node: a,
        pos: c,
        parent: d,
        index: u,
        range: e
      })), !1;
    if (a.isText) {
      var h;
      l += a == null || (h = a.text) === null || h === void 0 ? void 0 : h.slice(Math.max(i, c) - c, r - c);
    }
  }), l;
}
function rm(t, e) {
  return im(t, {
    from: 0,
    to: t.content.size
  }, e);
}
function ac(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText]));
}
function pw(t, e) {
  const n = ke(e, t.schema), { from: i, to: r } = t.selection, o = [];
  t.doc.nodesBetween(i, r, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function om(t, e) {
  const n = Es(typeof e == "string" ? e : e.name, t.schema);
  return n === "node" ? pw(t, e) : n === "mark" ? Yp(t, e) : {};
}
function mw(t, e = JSON.stringify) {
  const n = {};
  return t.filter((i) => {
    const r = e(i);
    return Object.prototype.hasOwnProperty.call(n, r) ? !1 : n[r] = !0;
  });
}
function gw(t) {
  const e = mw(t);
  return e.length === 1 ? e : e.filter((n, i) => !e.filter((r, o) => o !== i).some((r) => n.oldRange.from >= r.oldRange.from && n.oldRange.to <= r.oldRange.to && n.newRange.from >= r.newRange.from && n.newRange.to <= r.newRange.to));
}
function Os(t) {
  const { mapping: e, steps: n } = t, i = [], r = e.invert();
  return e.maps.forEach((o, s) => {
    const l = [];
    if (o.ranges.length)
      o.forEach((c, d) => {
        l.push({
          from: c,
          to: d
        });
      });
    else {
      const { from: c, to: d } = n[s];
      if (c === void 0 || d === void 0) return;
      l.push({
        from: c,
        to: d
      });
    }
    const a = e.slice(s);
    l.forEach(({ from: c, to: d }) => {
      const u = a.map(c, -1), f = a.map(d), h = r.map(u, -1), p = r.map(f);
      i.push({
        oldRange: {
          from: h,
          to: p
        },
        newRange: {
          from: u,
          to: f
        }
      });
    });
  }), gw(i);
}
function Hs(t, e, n) {
  const i = [];
  return t === e ? n.resolve(t).marks().forEach((r) => {
    const o = As(n.resolve(t), r.type);
    o && i.push({
      mark: r,
      ...o
    });
  }) : n.nodesBetween(t, e, (r, o) => {
    !r || r?.nodeSize === void 0 || i.push(...r.marks.map((s) => ({
      from: o,
      to: o + r.nodeSize,
      mark: s
    })));
  }), i;
}
const yw = (t, e, n, i = 20) => {
  const r = t.doc.resolve(n);
  let o = i, s = null;
  for (; o > 0 && s === null; ) {
    const l = r.node(o);
    l?.type.name === e ? s = l : o -= 1;
  }
  return [s, o];
}, bw = (t) => {
  const e = t.depth - 1;
  if (e < 0) return null;
  const n = t.index(e);
  return n === 0 ? null : t.node(e).child(n - 1);
};
function Qn(t, e) {
  return e.nodes[t] || e.marks[t] || null;
}
function ho(t, e, n) {
  return Object.fromEntries(Object.entries(n).filter(([i]) => {
    const r = t.find((o) => o.type === e && o.name === i);
    return r ? r.attribute.keepOnSplit : !1;
  }));
}
const vw = (t, e = 500) => {
  let n = "";
  const i = t.parentOffset;
  return t.parent.nodesBetween(Math.max(0, i - e), i, (r, o, s, l) => {
    var a, c;
    const d = ((a = (c = r.type.spec).toText) === null || a === void 0 ? void 0 : a.call(c, {
      node: r,
      pos: o,
      parent: s,
      index: l
    })) || r.textContent || "%leaf%";
    n += r.isAtom && !r.isText ? d : d.slice(0, Math.max(0, i - o));
  }), n;
};
function Ql(t, e, n = {}) {
  const { empty: i, ranges: r } = t.selection, o = e ? jt(e, t.schema) : null;
  if (i) return !!(t.storedMarks || t.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => Lo(d.attrs, n, { strict: !1 }));
  let s = 0;
  const l = [];
  if (r.forEach(({ $from: d, $to: u }) => {
    const f = d.pos, h = u.pos;
    t.doc.nodesBetween(f, h, (p, m) => {
      if (o && p.inlineContent && !p.type.allowsMarkType(o)) return !1;
      if (!p.isText && !p.marks.length) return;
      const g = Math.max(f, m), y = Math.min(h, m + p.nodeSize), b = y - g;
      s += b, l.push(...p.marks.map((v) => ({
        mark: v,
        from: g,
        to: y
      })));
    });
  }), s === 0) return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => Lo(d.mark.attrs, n, { strict: !1 })).reduce((d, u) => d + u.to - u.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, u) => d + u.to - u.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function ww(t, e, n = {}) {
  if (!e) return Wt(t, null, n) || Ql(t, null, n);
  const i = Es(e, t.schema);
  return i === "node" ? Wt(t, e, n) : i === "mark" ? Ql(t, e, n) : !1;
}
const kw = (t, e) => {
  const { $from: n, $to: i, $anchor: r } = t.selection;
  if (e) {
    const o = Ls((l) => l.type.name === e)(t.selection);
    if (!o) return !1;
    const s = t.doc.resolve(o.pos + 1);
    return r.pos + 1 === s.end();
  }
  return !(i.parentOffset < i.parent.nodeSize - 2 || n.pos !== i.pos);
}, xw = (t) => {
  const { $from: e, $to: n } = t.selection;
  return !(e.parentOffset > 0 || e.pos !== n.pos);
};
function eu(t, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t.name) : e;
}
function Ni(t, e) {
  const { nodeExtensions: n } = ki(e), i = n.find((o) => o.name === t);
  if (!i) return !1;
  const r = ee(_(i, "group", {
    name: i.name,
    options: i.options,
    storage: i.storage
  }));
  return typeof r != "string" ? !1 : r.split(" ").includes("list");
}
function Rr(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
  if (n) {
    if (t.type.name === "hardBreak") return !0;
    if (t.isText) {
      var i;
      return !/\S/.test((i = t.text) !== null && i !== void 0 ? i : "");
    }
  }
  if (t.isText) return !t.text;
  if (t.isAtom || t.isLeaf) return !1;
  if (t.content.childCount === 0) return !0;
  if (e) {
    let r = !0;
    return t.content.forEach((o) => {
      r !== !1 && (Rr(o, {
        ignoreWhitespace: n,
        checkChildren: e
      }) || (r = !1));
    }), r;
  }
  return !1;
}
function sm(t) {
  return t instanceof z;
}
function Sw({ selection: t, pos: e, nodeSize: n, selectedOnTextSelection: i = !1 }) {
  const { from: r, to: o } = t;
  return !!(r <= e && o >= e + n || i && Ts(t) && r > e && o < e + n);
}
function Cw(t) {
  if (t === null || typeof t != "object") return !1;
  const e = t;
  return !(typeof e.apply != "function" || typeof e.getMap != "function" || typeof e.invert != "function" || typeof e.map != "function" || typeof e.merge != "function" || typeof e.toJSON != "function");
}
function Mw(t) {
  if (t === null || typeof t != "object") return !1;
  const e = t;
  if (!Cw(e)) return !1;
  const n = e.toJSON();
  return !(n === null || typeof n != "object" || n.stepType !== "replace");
}
var lm = class am {
  constructor(e) {
    this.position = e;
  }
  /**
  * Creates a MappablePosition from a JSON object.
  */
  static fromJSON(e) {
    return new am(e.position);
  }
  /**
  * Converts the MappablePosition to a JSON object.
  */
  toJSON() {
    return { position: this.position };
  }
};
function Aw(t, e) {
  const n = e.mapping.mapResult(t.position);
  return {
    position: new lm(n.pos),
    mapResult: n
  };
}
function Tw(t) {
  return new lm(t);
}
function cm(t, e, n) {
  const r = t.state.doc.content.size, o = Dt(e, 0, r), s = Dt(n, 0, r), l = t.coordsAtPos(o), a = t.coordsAtPos(s, -1), c = Math.min(l.top, a.top), d = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = {
    top: c,
    bottom: d,
    left: u,
    right: f,
    width: f - u,
    height: d - c,
    x: u,
    y: c
  };
  return {
    ...h,
    toJSON: () => h
  };
}
function Ew(t, e, n) {
  const { selection: i } = e;
  let r = null;
  if (Ts(i) && (r = i.$cursor), r) {
    var o;
    const l = (o = t.storedMarks) !== null && o !== void 0 ? o : r.marks();
    return r.parent.type.allowsMarkType(n) && (!!n.isInSet(l) || !l.some((a) => a.type.excludes(n)));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(l.pos, a.pos, (d, u, f) => {
      if (c) return !1;
      if (d.isInline) {
        const h = !f || f.type.allowsMarkType(n), p = !!n.isInSet(d.marks) || !d.marks.some((m) => m.type.excludes(n));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const Lw = (t, e = {}) => ({ tr: n, state: i, dispatch: r }) => {
  const { selection: o } = n, { empty: s, ranges: l } = o, a = jt(t, i.schema);
  if (r)
    if (s) {
      const c = Yp(i, a);
      n.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else l.forEach((c) => {
      const d = c.$from.pos, u = c.$to.pos;
      i.doc.nodesBetween(d, u, (f, h) => {
        const p = Math.max(h, d), m = Math.min(h + f.nodeSize, u);
        f.marks.find((g) => g.type === a) ? f.marks.forEach((g) => {
          a === g.type && n.addMark(p, m, a.create({
            ...g.attrs,
            ...e
          }));
        }) : n.addMark(p, m, a.create(e));
      });
    });
  return Ew(i, n, a);
}, Ow = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), Hw = (t, e = {}) => ({ state: n, dispatch: i, chain: r }) => {
  const o = ke(t, n.schema);
  let s;
  return n.selection.$anchor.sameParent(n.selection.$head) && (s = n.selection.$anchor.parent.attrs), o.isTextblock ? r().command(({ commands: l }) => ud(o, {
    ...s,
    ...e
  })(n) ? !0 : l.clearNodes()).command(({ state: l }) => ud(o, {
    ...s,
    ...e
  })(l, i)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Rw = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: i } = e, r = Dt(t, 0, i.content.size), o = z.create(i, r);
    e.setSelection(o);
  }
  return !0;
}, Vw = (t, e) => ({ tr: n, state: i, dispatch: r }) => {
  const { selection: o } = i;
  let s, l;
  return typeof e == "number" ? (s = e, l = e) : e && "from" in e && "to" in e ? (s = e.from, l = e.to) : (s = o.from, l = o.to), r && n.doc.nodesBetween(s, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Nw = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: i } = e, { from: r, to: o } = typeof t == "number" ? {
      from: t,
      to: t
    } : t, s = I.atStart(i).from, l = I.atEnd(i).to, a = Dt(r, s, l), c = Dt(o, s, l), d = I.create(i, a, c);
    e.setSelection(d);
  }
  return !0;
}, Iw = (t) => ({ state: e, dispatch: n }) => {
  const i = ke(t, e.schema);
  return uy(i)(e, n);
};
function tu(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const i = n.filter((r) => e?.includes(r.type.name));
    t.tr.ensureMarks(i);
  }
}
const Dw = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: i, editor: r }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = r.extensionManager.attributes, d = ho(c, l.node().type.name, l.node().attrs);
  if (o instanceof z && o.node.isBlock)
    return !l.parentOffset || !Pt(s, l.pos) ? !1 : (i && (t && tu(n, r.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock) return !1;
  const u = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : Jp(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = u && f ? [{
    type: f,
    attrs: d
  }] : void 0;
  const p = o instanceof I && !o.empty ? Vt.create({
    doc: e.doc,
    selection: o
  }).tr.deleteSelection() : null, m = p ? p.doc : e.doc, g = p ? p.mapping.map(l.pos) : l.pos;
  let y = Pt(m, g, 1, h);
  if (!h && !y && Pt(m, g, 1, f ? [{ type: f }] : void 0) && (y = !0, h = f ? [{
    type: f,
    attrs: d
  }] : void 0), i) {
    if (y) {
      const b = e.steps.length;
      if (o instanceof I && e.deleteSelection(), e.split(e.mapping.slice(b).map(l.pos), 1, h), f && !u && !l.parentOffset && l.parent.type !== f) {
        const v = e.mapping.slice(b).map(l.before()), w = e.doc.resolve(v);
        l.node(-1).canReplaceWith(w.index(), w.index() + 1, f) && e.setNodeMarkup(e.mapping.slice(b).map(l.before()), f);
      }
    }
    t && tu(n, r.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return y;
}, Pw = (t, e = {}) => ({ tr: n, state: i, dispatch: r, editor: o }) => {
  const s = ke(t, i.schema), { $from: l, $to: a } = i.selection, c = i.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a)) return !1;
  const d = l.node(-1);
  if (d.type !== s) return !1;
  const u = o.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== s || l.index(-2) !== l.node(-2).childCount - 1) return !1;
    if (r) {
      var f;
      let w = C.empty;
      const x = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let D = l.depth - x; D >= l.depth - 3; D -= 1) w = C.from(l.node(D).copy(w));
      const k = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, S = {
        ...ho(u, l.node().type.name, l.node().attrs),
        ...e
      }, M = ((f = s.contentMatch.defaultType) === null || f === void 0 ? void 0 : f.createAndFill(S)) || void 0;
      w = w.append(C.from(s.createAndFill(null, M) || void 0));
      const O = l.before(l.depth - (x - 1));
      n.replace(O, l.after(-k), new L(w, 4 - x, 0));
      let V = -1;
      n.doc.nodesBetween(O, n.doc.content.size, (D, W) => {
        if (V > -1) return !1;
        D.isTextblock && D.content.size === 0 && (V = W + 1);
      }), V > -1 && n.setSelection(I.near(n.doc.resolve(V))), n.scrollIntoView();
    }
    return !0;
  }
  const h = a.pos === l.end() ? d.contentMatchAt(0).defaultType : null, p = {
    ...ho(u, d.type.name, d.attrs),
    ...e
  }, m = {
    ...ho(u, l.node().type.name, l.node().attrs),
    ...e
  }, g = l.parentOffset === 0 && l.index(-1) === 0, y = l.before(-1);
  n.delete(l.pos, a.pos);
  const b = g ? d.attrs : p, v = h ? [{
    type: s,
    attrs: b
  }, {
    type: h,
    attrs: m
  }] : [{
    type: s,
    attrs: b
  }];
  if (!Pt(n.doc, l.pos, 2)) return !1;
  if (r) {
    const { selection: w, storedMarks: x } = i, { splittableMarks: k } = o.extensionManager, S = x || w.$to.parentOffset && w.$from.marks();
    if (n.split(l.pos, 2, v).scrollIntoView(), g && n.setNodeMarkup(y, void 0, p), !S || !r) return !0;
    const M = S.filter((O) => k.includes(O.type.name));
    n.ensureMarks(M);
  }
  return !0;
};
function dm(t, e, n) {
  if (!t.validContent(e)) return null;
  try {
    return t.create(n, e);
  } catch {
    return null;
  }
}
function cc(t, e) {
  if (t.pendingContent.length === 0) return !0;
  const n = dm(e, C.from(t.pendingContent));
  return n ? (t.items.push(n), t.pendingContent = [], !0) : !1;
}
function _w(t, e, n) {
  return n.validContent(C.from([...e.pendingContent, t])) ? (e.pendingContent.push(t), !0) : !cc(e, n) || !n.validContent(C.from(t)) ? !1 : (e.pendingContent.push(t), !0);
}
function zw(t, e, n, i) {
  const r = i(t, n);
  if (!r) return !1;
  const o = dm(n.listType, C.from(r), t.attrs);
  return o ? n.itemType.validContent(C.from([...e.pendingContent, o])) ? (e.pendingContent.push(o), !0) : cc(e, n.itemType) ? (e.items.push(...r), !0) : !1 : !1;
}
function $w(t, e, n) {
  const i = {
    items: [],
    pendingContent: []
  };
  for (let r = 0; r < t.childCount; r += 1) {
    const o = t.child(r);
    if (!(e.isListNode(o) ? zw(o, i, e, n) : _w(o, i, e.itemType))) return null;
  }
  return cc(i, e.itemType) ? i.items : null;
}
function um(t, e) {
  const n = [];
  for (let i = 0; i < t.childCount; i += 1) {
    const r = $w(t.child(i), e, um);
    if (!r) return null;
    n.push(...r);
  }
  return n;
}
function nu(t, e) {
  let n = null;
  return t.descendants((i, r) => i !== e ? !0 : (n = r, !1)), n;
}
function iu(t) {
  return !t || t === "1" ? null : t;
}
function fm(t, e) {
  return iu(t) === iu(e);
}
const $r = (t, e) => {
  const n = Ls((o) => o.type === e)(t.selection);
  if (!n) return !0;
  const i = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (i === void 0) return !0;
  const r = t.doc.nodeAt(i);
  return !(n.node.type === r?.type && wn(t.doc, n.pos)) || !fm(n.node.attrs.type, r?.attrs.type) || t.join(n.pos), !0;
}, Br = (t, e) => {
  const n = Ls((o) => o.type === e)(t.selection);
  if (!n) return !0;
  const i = t.doc.resolve(n.start).after(n.depth);
  if (i === void 0) return !0;
  const r = t.doc.nodeAt(i);
  return !(n.node.type === r?.type && wn(t.doc, i)) || !fm(n.node.attrs.type, r?.attrs.type) || t.join(i), !0;
};
function Bw(t) {
  const e = t.doc, n = e.firstChild;
  if (!n) return null;
  const i = e.resolve(1), r = e.resolve(n.nodeSize - 1);
  return I.between(i, r);
}
const Fw = (t, e, n, i = {}) => ({ editor: r, tr: o, state: s, dispatch: l, chain: a, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: f } = r.extensionManager, h = ke(t, s.schema), p = ke(e, s.schema), { selection: m, storedMarks: g } = s, { $from: y, $to: b } = m, v = y.blockRange(b), w = g || m.$to.parentOffset && m.$from.marks();
  if (!v) return !1;
  const x = Ls((J) => Ni(J.type.name, u))(m), k = m.from === 0 && m.to === s.doc.content.size, S = s.doc.content.content, M = S.length === 1 ? S[0] : null, O = k && M && Ni(M.type.name, u) ? {
    node: M,
    pos: 0
  } : null, V = x ?? O, D = !!x && v.depth >= 1 && v.depth - x.depth <= 1, W = !!O;
  if ((D || W) && V) {
    if (V.node.type === h)
      return k && W ? a().command(({ tr: J, dispatch: Q }) => {
        const R = Bw(J);
        return R ? (J.setSelection(R), Q && Q(J), !0) : !1;
      }).liftListItem(p).run() : c.liftListItem(p);
    if (Ni(V.node.type.name, u) && h.validContent(V.node.content)) return a().command(() => (o.setNodeMarkup(V.pos, h), !0)).command(() => $r(o, h)).command(() => Br(o, h)).run();
    if (Ni(V.node.type.name, u)) {
      var X;
      const J = (X = V.node.firstChild) === null || X === void 0 ? void 0 : X.type;
      if (J && J !== p) {
        const Q = um(V.node, {
          listType: h,
          itemType: p,
          isListNode: (K) => Ni(K.type.name, u)
        }), R = Q ? C.from(Q) : null;
        return !R || !h.validContent(R) ? !1 : a().command(() => {
          const { $anchor: K, $head: P } = o.selection, U = K.parent, Me = P.parent, tt = K.parentOffset, Pe = P.parentOffset;
          let ct;
          try {
            ct = h.create(i, R);
          } catch {
            return !1;
          }
          if (o.replaceWith(V.pos, V.pos + V.node.nodeSize, ct), U.inlineContent && Me.inlineContent) {
            const Je = nu(ct, U), Xt = nu(ct, Me);
            if (Je !== null && Xt !== null) {
              const Js = V.pos + Je + 2 + tt, D1 = V.pos + Xt + 2 + Pe;
              o.setSelection(I.create(o.doc, Js, D1));
            }
          }
          return !0;
        }).command(() => $r(o, h)).command(() => Br(o, h)).run();
      }
    }
  }
  return !n || !w || !l ? a().command(() => d().wrapInList(h, i) ? !0 : c.clearNodes()).wrapInList(h, i).command(() => $r(o, h)).command(() => Br(o, h)).run() : a().command(() => {
    const J = d().wrapInList(h, i), Q = w.filter((R) => f.includes(R.type.name));
    return o.ensureMarks(Q), J ? !0 : c.clearNodes();
  }).wrapInList(h, i).command(() => $r(o, h)).command(() => Br(o, h)).run();
}, Ww = (t, e = {}, n = {}) => ({ state: i, commands: r }) => {
  const { extendEmptyMarkRange: o = !1 } = n, s = jt(t, i.schema);
  return Ql(i, s, e) ? r.unsetMark(s, { extendEmptyMarkRange: o }) : r.setMark(s, e);
}, Uw = (t, e, n = {}) => ({ state: i, commands: r }) => {
  const o = ke(t, i.schema), s = ke(e, i.schema), l = Wt(i, o, n);
  let a;
  return i.selection.$anchor.sameParent(i.selection.$head) && (a = i.selection.$anchor.parent.attrs), l ? r.setNode(s, a) : r.setNode(o, {
    ...a,
    ...n
  });
}, jw = (t, e = {}) => ({ state: n, commands: i }) => {
  const r = ke(t, n.schema);
  return Wt(n, r, e) ? i.lift(r) : i.wrapIn(r, e);
}, Kw = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let i = 0; i < n.length; i += 1) {
    const r = n[i];
    let o;
    if (r.spec.isInputRules && (o = r.getState(t))) {
      if (e) {
        const s = t.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1) s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, t.schema.text(o.text, a));
        } else s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, qw = (t = {}) => ({ tr: e, dispatch: n, editor: i }) => {
  const { ignoreClearable: r = !1 } = t, { selection: o } = e, { empty: s, ranges: l } = o;
  if (s) return !0;
  const { nonClearableMarks: a } = i.extensionManager;
  if (n) {
    const c = Object.values(i.schema.marks).filter((d) => r || !a.includes(d.name));
    l.forEach((d) => {
      for (const u of c) e.removeMark(d.$from.pos, d.$to.pos, u);
    });
  }
  return !0;
}, Gw = (t, e = {}) => ({ tr: n, state: i, dispatch: r }) => {
  const { extendEmptyMarkRange: o = !1 } = e, { selection: s } = n, l = jt(t, i.schema), { $from: a, empty: c, ranges: d } = s;
  if (!r) return !0;
  if (c && o) {
    var u;
    let { from: f, to: h } = s;
    const p = As(a, l, (u = a.marks().find((m) => m.type === l)) === null || u === void 0 ? void 0 : u.attrs);
    p && (f = p.from, h = p.to), n.removeMark(f, h, l);
  } else d.forEach((f) => {
    n.removeMark(f.$from.pos, f.$to.pos, l);
  });
  return n.removeStoredMark(l), !0;
}, Jw = (t) => ({ tr: e, state: n, dispatch: i }) => {
  const { selection: r } = n;
  let o, s;
  return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = r.from, s = r.to), i && e.doc.nodesBetween(o, s, (l, a) => {
    if (l.isText) return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, Xw = (t, e = {}) => ({ tr: n, state: i, dispatch: r }) => {
  let o = null, s = null;
  const l = Es(typeof t == "string" ? t : t.name, i.schema);
  if (!l) return !1;
  l === "node" && (o = ke(t, i.schema)), l === "mark" && (s = jt(t, i.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const d = c.$from.pos, u = c.$to.pos;
    let f, h, p, m;
    n.selection.empty ? i.doc.nodesBetween(d, u, (g, y) => {
      o && o === g.type && (a = !0, p = Math.max(y, d), m = Math.min(y + g.nodeSize, u), f = y, h = g);
    }) : i.doc.nodesBetween(d, u, (g, y) => {
      y < d && o && o === g.type && (a = !0, p = Math.max(y, d), m = Math.min(y + g.nodeSize, u), f = y, h = g), y >= d && y <= u && (o && o === g.type && (a = !0, r && n.setNodeMarkup(y, void 0, {
        ...g.attrs,
        ...e
      })), s && g.marks.length && g.marks.forEach((b) => {
        if (s === b.type && (a = !0, r)) {
          const v = Math.max(y, d), w = Math.min(y + g.nodeSize, u);
          n.addMark(v, w, s.create({
            ...b.attrs,
            ...e
          }));
        }
      }));
    }), h && (f !== void 0 && r && n.setNodeMarkup(f, void 0, {
      ...h.attrs,
      ...e
    }), s && h.marks.length && h.marks.forEach((g) => {
      s === g.type && r && n.addMark(p, m, s.create({
        ...g.attrs,
        ...e
      }));
    }));
  }), a;
}, ri = new se("__tiptap_decorations__"), Zw = (t) => ({ tr: e, dispatch: n }) => (n && e.setMeta(ri, {
  type: "force",
  name: t
}), !0), Yw = (t, e = {}) => ({ state: n, dispatch: i }) => {
  const r = ke(t, n.schema);
  return ry(r, e)(n, i);
}, Qw = (t, e = {}) => ({ state: n, dispatch: i }) => {
  const r = ke(t, n.schema);
  return oy(r, e)(n, i);
};
var ek = /* @__PURE__ */ Q1({
  blur: () => pv,
  clearContent: () => mv,
  clearNodes: () => gv,
  command: () => yv,
  createParagraphNear: () => bv,
  cut: () => vv,
  deleteCurrentNode: () => wv,
  deleteNode: () => kv,
  deleteRange: () => xv,
  deleteSelection: () => Mv,
  enter: () => Av,
  exitCode: () => Tv,
  extendMarkRange: () => Ev,
  first: () => Lv,
  focus: () => Hv,
  forEach: () => Rv,
  insertContent: () => Vv,
  insertContentAt: () => Nv,
  insertDefaultBlock: () => Iv,
  joinBackward: () => _v,
  joinDown: () => Pv,
  joinForward: () => zv,
  joinItemBackward: () => $v,
  joinItemForward: () => Bv,
  joinTextblockBackward: () => Fv,
  joinTextblockForward: () => Wv,
  joinUp: () => Dv,
  keyboardShortcut: () => jv,
  lift: () => Kv,
  liftEmptyBlock: () => qv,
  liftListItem: () => Gv,
  newlineInCode: () => Jv,
  resetAttributes: () => Xv,
  scrollIntoView: () => Zv,
  selectAll: () => Yv,
  selectNodeBackward: () => Qv,
  selectNodeForward: () => ew,
  selectParentNode: () => tw,
  selectTextblockEnd: () => nw,
  selectTextblockStart: () => iw,
  setContent: () => rw,
  setMark: () => Lw,
  setMeta: () => Ow,
  setNode: () => Hw,
  setNodeSelection: () => Rw,
  setTextDirection: () => Vw,
  setTextSelection: () => Nw,
  sinkListItem: () => Iw,
  splitBlock: () => Dw,
  splitListItem: () => Pw,
  toggleList: () => Fw,
  toggleMark: () => Ww,
  toggleNode: () => Uw,
  toggleWrap: () => jw,
  undoInputRule: () => Kw,
  unsetAllMarks: () => qw,
  unsetMark: () => Gw,
  unsetTextDirection: () => Jw,
  updateAttributes: () => Xw,
  updateDecorations: () => Zw,
  wrapIn: () => Yw,
  wrapInList: () => Qw
});
const oi = /* @__PURE__ */ new WeakMap();
function tk(t, e) {
  var n;
  oi.set(t, ((n = oi.get(t)) !== null && n !== void 0 ? n : 0) + 1);
  try {
    return e();
  } finally {
    var i;
    const r = ((i = oi.get(t)) !== null && i !== void 0 ? i : 1) - 1;
    r > 0 ? oi.set(t, r) : oi.delete(t);
  }
}
function nk(t) {
  return oi.has(t);
}
var ik = class {
  constructor() {
    this.callbacks = {};
  }
  on(t, e) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this;
  }
  emit(t, ...e) {
    const n = this.callbacks[t];
    return n && n.forEach((i) => i.apply(this, e)), this;
  }
  off(t, e) {
    const n = this.callbacks[t];
    return n && (e ? this.callbacks[t] = n.filter((i) => i !== e) : delete this.callbacks[t]), this;
  }
  once(t, e) {
    const n = (...i) => {
      this.off(t, n), e.apply(this, i);
    };
    return this.on(t, n);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
};
const hm = typeof process < "u" && process.env.NODE_ENV !== "production";
function rk(t) {
  return t.kind === "widget";
}
function pm(t, e) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (const r of t)
    r.kind === "widget" && rk(r) && i.add(r.key), n.push(r.toPMDecoration(e));
  return {
    decorations: n,
    widgetKeys: i
  };
}
function ok(t, e, n) {
  const { decorations: i, widgetKeys: r } = pm(e, n);
  return {
    set: Z.create(t, i),
    widgetKeys: r
  };
}
function mm({ position: t, from: e, to: n, docSize: i }) {
  return t < e ? !1 : t < n ? !0 : t === n && n === i;
}
function sk({ decorations: t, from: e, to: n, docSize: i, extensionName: r, warnedExtensions: o }) {
  return t.filter((s) => mm({
    position: s.anchor,
    from: e,
    to: n,
    docSize: i
  }) ? !0 : (s.anchor === n || o.has(r) || (o.add(r), console.warn(`[tiptap warn]: Extension "${r}" returned a decoration outside the requested range [${e}, ${n}). It was ignored.`)), !1));
}
function gm(t) {
  var e;
  const n = (e = t.spec) === null || e === void 0 ? void 0 : e.key;
  return typeof n == "string" ? n : void 0;
}
function lk(t) {
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  for (const s of t.find()) {
    var i, r, o;
    const l = gm(s);
    if (!l) continue;
    const a = (i = s.spec.extensionName) !== null && i !== void 0 ? i : "unknown", c = (r = e.get(l)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    c.add(a), e.set(l, c), n.set(l, ((o = n.get(l)) !== null && o !== void 0 ? o : 0) + 1);
  }
  return Array.from(e, ([s, l]) => ({
    key: s,
    extensions: l
  })).filter(({ key: s }) => {
    var l;
    return ((l = n.get(s)) !== null && l !== void 0 ? l : 0) > 1;
  });
}
function ym(t) {
  return t.jsonID === "attr";
}
function ak(t) {
  let e = !1;
  if (t.getMap().forEach(() => {
    e = !0;
  }), e || ym(t)) return !0;
  const n = t;
  return typeof n.from == "number" && typeof n.to == "number";
}
function ck(t, e) {
  let n = null, i = 0, r = 0;
  for (let o = 0; o < t.childCount && !(r > e.to); o += 1) {
    const s = r + t.child(o).nodeSize;
    s >= e.from && (n === null && (n = r), i = s), r = s;
  }
  return n === null ? null : {
    from: n,
    to: i
  };
}
function dk(t, e) {
  if (t.steps.some((o) => !ak(o))) return { type: "full" };
  const n = Os(t).map(({ newRange: o }) => o);
  t.steps.forEach((o, s) => {
    if (!ym(o)) return;
    const l = t.mapping.slice(s);
    n.push({
      from: l.map(o.pos, -1),
      to: l.map(o.pos + 1)
    });
  });
  const i = [];
  for (const o of n) {
    const s = ck(e, o);
    s && i.push(s);
  }
  i.sort((o, s) => o.from - s.from);
  const r = [];
  for (const o of i) {
    const s = r[r.length - 1];
    s && o.from <= s.to ? s.to = Math.max(s.to, o.to) : r.push({ ...o });
  }
  return {
    type: "ranges",
    ranges: r
  };
}
function bm(t, e, n, i) {
  return t.map(e, n, { onRemove: (r) => {
    const o = r?.key;
    typeof o == "string" && i.delete(o);
  } });
}
function uk(t, e, n) {
  var i, r;
  const o = (i = e.decorationSetsByExtension[t]) !== null && i !== void 0 ? i : Z.empty, s = new Set((r = e.widgetKeysByExtension[t]) !== null && r !== void 0 ? r : []);
  return {
    set: bm(o, n.mapping, n.doc, s),
    widgetKeys: s
  };
}
function ru(t, e) {
  const n = Object.values(e).flatMap((i) => i.find());
  return Z.create(t, n);
}
function ou(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of Object.values(t)) for (const i of n) e.add(i);
  return e;
}
function fk(t, e) {
  var n;
  switch ((n = e.update) !== null && n !== void 0 ? n : "document") {
    case "document":
      if (e.createInRange) throw new Error(`[tiptap error]: Extension "${t}" provides createInRange() but does not use the "changedRanges" decoration update strategy.`);
      return;
    case "changedRanges":
      if (!e.createInRange) throw new Error(`[tiptap error]: Extension "${t}" uses the "changedRanges" decoration update strategy but does not provide createInRange().`);
      return;
    case "manual":
      if (e.createInRange) throw new Error(`[tiptap error]: Extension "${t}" uses the "manual" decoration update strategy, which is not compatible with createInRange(). createInRange() requires the "changedRanges" strategy.`);
      if (e.shouldUpdate) throw new Error(`[tiptap error]: Extension "${t}" cannot combine the "manual" decoration update strategy with shouldUpdate().`);
      return;
    default:
      throw new Error(`[tiptap error]: Extension "${t}" uses an unknown decoration update strategy. Expected "document", "changedRanges", or "manual".`);
  }
}
function hk(t, e, n) {
  return n ? !0 : t.update === "manual" ? !1 : t.shouldUpdate ? t.shouldUpdate(e) : e.tr.docChanged;
}
const pk = /* @__PURE__ */ new Set();
var mk = class {
  constructor(t) {
    this.warnedWidgetKeys = /* @__PURE__ */ new Set(), this.warnedOutOfRangeExtensions = /* @__PURE__ */ new Set(), this.handleBeforeTransaction = ({ nextState: e }) => {
      const n = ri.getState(e);
      n && this.warnDuplicateWidgetKeys(n);
    }, this.editor = t.editor, this.entries = this.resolveEntries(t.entries), this.entries.forEach(({ name: e, spec: n }) => fk(e, n)), this.plugin = this.entries.length > 0 ? this.createPlugin() : null, this.editor.on("beforeTransaction", this.handleBeforeTransaction);
  }
  destroy() {
    this.editor.off("beforeTransaction", this.handleBeforeTransaction);
  }
  /**
  * Returns the set of live widget keys from all decoration extensions.
  * @returns A readonly set of widget keys
  */
  liveWidgetKeys() {
    var t, e;
    return (t = (e = ri.getState(this.editor.state)) === null || e === void 0 ? void 0 : e.widgetKeys) !== null && t !== void 0 ? t : pk;
  }
  /**
  * The mounted editor view, or `null` when destroyed. Decoration callbacks
  * must never receive the placeholder view `editor.view` falls back to.
  * @returns The mounted editor view, or `null`
  */
  get mountedView() {
    return this.editor.isDestroyed ? null : this.editor.view;
  }
  /**
  * Resolves decoration entries by calling the addDecorations function for each extension entry.
  * @param entries The decoration manager entries to resolve
  * @returns An array of resolved decoration entries
  */
  resolveEntries(t) {
    const e = [];
    for (const { name: n, addDecorations: i } of t) {
      const r = i();
      r && e.push({
        name: n,
        spec: r
      });
    }
    return e;
  }
  /**
  * Creates the ProseMirror plugin for managing decorations.
  * @returns A ProseMirror plugin with state management
  */
  createPlugin() {
    const { editor: t, entries: e } = this;
    return new ie({
      key: ri,
      state: {
        init: (n, i) => {
          const r = {}, o = {};
          for (const { name: l, spec: a } of e) {
            const { set: c, widgetKeys: d } = this.buildFullSet(l, a, i);
            r[l] = c, o[l] = d;
          }
          const s = {
            decorationSetsByExtension: r,
            widgetKeysByExtension: o,
            mergedDecorationSet: this.buildMergedSet(i.doc, r),
            widgetKeys: ou(o)
          };
          return this.warnDuplicateWidgetKeys(s), s;
        },
        apply: (n, i, r, o) => {
          const s = n.getMeta(ri), l = s?.type === "force" && !s.name, a = s?.type === "force" ? s.name : void 0, c = {}, d = {}, u = /* @__PURE__ */ new Set();
          return tk(t, () => {
            for (const { name: f, spec: h } of e) {
              const p = l || a === f;
              if (hk(h, {
                editor: t,
                tr: n,
                oldState: r,
                newState: o
              }, p))
                if (h.update === "changedRanges" && n.docChanged && !p) {
                  const m = this.applyChangedRangesRecompute(f, h, i, n, o);
                  c[f] = m.set, d[f] = m.widgetKeys, u.add(f);
                } else {
                  const { set: m, widgetKeys: g } = this.buildFullSet(f, h, o);
                  c[f] = m, d[f] = g, u.add(f);
                }
              else {
                const m = uk(f, i, n);
                c[f] = m.set, d[f] = m.widgetKeys;
              }
            }
          }), u.size === 0 && !n.docChanged ? i : {
            decorationSetsByExtension: c,
            widgetKeysByExtension: d,
            mergedDecorationSet: this.mergeAfterApply({
              entries: e,
              previous: i,
              tr: n,
              decorationSetsByExtension: c,
              recomputedNames: u
            }),
            widgetKeys: ou(d)
          };
        }
      },
      props: { decorations(n) {
        var i, r;
        return (i = (r = ri.getState(n)) === null || r === void 0 ? void 0 : r.mergedDecorationSet) !== null && i !== void 0 ? i : Z.empty;
      } }
    });
  }
  /**
  * Applies changed ranges recomputation to a decoration set, dropping stale decorations and rebuilding only the touched blocks.
  * @param name The name of the decoration extension
  * @param spec The decoration spec
  * @param previous The previous decoration manager state
  * @param tr The transaction to apply
  * @param newState The new editor state
  * @returns The updated decoration set and widget keys
  */
  applyChangedRangesRecompute(t, e, n, i, r) {
    const o = dk(i, r.doc);
    return o.type === "full" ? this.buildFullSet(t, e, r) : this.rebuildRanges(t, e, n, i, r, o.ranges);
  }
  /**
  * Rebuilds decorations for the changed block ranges: maps the previous set
  * forward, then for each range removes stale decorations, calls
  * `createInRange`, and adds the new ones while syncing widget keys.
  * @param name The extension name.
  * @param spec The decoration spec.
  * @param previous The previous decoration manager state.
  * @param tr The transaction to apply.
  * @param newState The new editor state.
  * @param ranges The block ranges to rebuild.
  * @returns The updated decoration set and widget keys.
  */
  rebuildRanges(t, e, n, i, r, o) {
    var s, l;
    const a = (s = n.decorationSetsByExtension[t]) !== null && s !== void 0 ? s : Z.empty, c = new Set((l = n.widgetKeysByExtension[t]) !== null && l !== void 0 ? l : []);
    let d = bm(a, i.mapping, i.doc, c);
    const u = r.doc.content.size;
    for (const { from: f, to: h } of o) {
      const p = d.find(f, h).filter((y) => mm({
        position: y.from,
        from: f,
        to: h,
        docSize: u
      }));
      for (const y of p) {
        const b = gm(y);
        b && c.delete(b);
      }
      d = d.remove(p);
      const { decorations: m, widgetKeys: g } = pm(sk({
        decorations: this.runCreate(t, "createInRange", () => e.createInRange({
          editor: this.editor,
          state: r,
          view: this.mountedView,
          from: f,
          to: h
        })),
        from: f,
        to: h,
        docSize: u,
        extensionName: t,
        warnedExtensions: this.warnedOutOfRangeExtensions
      }), t);
      d = d.add(r.doc, m);
      for (const y of g) c.add(y);
    }
    return {
      set: d,
      widgetKeys: c
    };
  }
  /**
  * Builds a full decoration set for the entire document.
  * @param name The name of the decoration extension
  * @param spec The decoration spec
  * @param state The editor state
  * @returns The decoration set and widget keys
  */
  buildFullSet(t, e, n) {
    const i = this.runCreate(t, "create", () => e.create({
      editor: this.editor,
      state: n,
      view: this.mountedView
    }));
    return ok(n.doc, i, t);
  }
  /**
  * Runs a decoration callback and swallows anything it throws. These run inside
  * `state.apply`, where an uncaught error would abort the whole transaction.
  * @param name The extension name.
  * @param method The callback name, used in the error message.
  * @param create The callback to run.
  * @returns The decorations, or an empty array if the callback threw.
  */
  runCreate(t, e, n) {
    try {
      return n();
    } catch (i) {
      return console.error(`[tiptap error]: Extension "${t}" threw in \`addDecorations().${e}()\`. Its decorations were dropped for this update.`, i), [];
    }
  }
  warnDuplicateWidgetKeys(t) {
    if (!hm) return;
    if (t.widgetKeys.size === 0) {
      this.warnedWidgetKeys.clear();
      return;
    }
    const e = lk(t.mergedDecorationSet), n = new Set(e.map(({ key: i }) => i));
    for (const { key: i, extensions: r } of e) {
      if (this.warnedWidgetKeys.has(i)) continue;
      const o = Array.from(r).map((s) => `"${s}"`).join(", ");
      console.warn(`[tiptap warn]: Duplicate widget decoration key "${i}" in extension${r.size === 1 ? "" : "s"} ${o}. Widget decoration keys must be globally unique, otherwise ProseMirror misplaces the widget DOM. Use a stable, unique key (e.g. \`comment-\${id}\`).`);
    }
    this.warnedWidgetKeys = n;
  }
  /**
  * Builds the merged DecorationSet during init. Skips the merge for a
  * single extension since its per-extension set is already correct.
  * @param doc The document to build the merged set for.
  * @param decorationSetsByExtension The per-extension decoration sets.
  * @returns The merged decoration set.
  */
  buildMergedSet(t, e) {
    const n = Object.keys(e);
    return n.length === 1 ? e[n[0]] : ru(t, e);
  }
  /**
  * Computes the merged DecorationSet after apply. Single extension skips the
  * merge; nothing recomputed maps the previous merged set forward; otherwise
  * the merge is rebuilt from the per-extension sets.
  */
  mergeAfterApply({ entries: t, previous: e, tr: n, decorationSetsByExtension: i, recomputedNames: r }) {
    return t.length === 1 ? i[t[0].name] : r.size === 0 ? e.mergedDecorationSet.map(n.mapping, n.doc) : ru(n.doc, i);
  }
};
function gk(t, e) {
  const { selection: n } = t, { $from: i } = n;
  if (n instanceof z) {
    const o = i.index();
    return i.parent.canReplaceWith(o, o + 1, e);
  }
  let r = i.depth;
  for (; r >= 0; ) {
    const o = i.index(r);
    if (i.node(r).contentMatchAt(o).matchType(e)) return !0;
    r -= 1;
  }
  return !1;
}
function yk(t, e, n) {
  const i = document.querySelector("style[data-tiptap-style]");
  if (i !== null) return i;
  const r = document.createElement("style");
  return e && r.setAttribute("nonce", e), r.setAttribute("data-tiptap-style", ""), r.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(r), r;
}
function Li(t, e) {
  const n = t.getAttribute("style");
  if (!n) return null;
  const i = n.split(";").map((o) => o.trim()).filter(Boolean), r = e.toLowerCase();
  for (let o = i.length - 1; o >= 0; o -= 1) {
    const s = i[o], l = s.indexOf(":");
    if (l !== -1 && s.slice(0, l).trim().toLowerCase() === r)
      return s.slice(l + 1).trim();
  }
  return null;
}
function bk(t) {
  return typeof t == "number";
}
function vk(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Fr(t) {
  return vk(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function xn(t) {
  return typeof t == "string" && t.trim().length > 0 && !/[;{}]/.test(t);
}
function wk(t, e) {
  return t.replace(/^[ \t]*/, (n) => {
    let r = 0;
    for (const o of n) r += o === "	" ? 4 - r % 4 : 1;
    return " ".repeat(Math.max(0, r - e));
  });
}
function kk(t, e) {
  const n = `text
${t}
`, i = e(n)[0];
  return (i?.type === "paragraph" || i?.type === "text") && i.raw === n;
}
function xk(t, e, n) {
  var i;
  const r = e.split(`
`), o = (i = n.isParagraphContinuation) !== null && i !== void 0 ? i : ((l) => kk(l, n.blockTokens));
  let s = 0;
  for (const l of r) {
    if (!l.trim() || !o(l)) break;
    s += 1;
  }
  return {
    mainContent: [t, ...r.slice(0, s).map((l) => l.trimStart())].join(`
`),
    nestedContent: r.slice(s).join(`
`)
  };
}
function su(t, e, n) {
  const i = t.split(`
`), r = [];
  let o = "", s = 0;
  const l = e.baseIndentSize || 2;
  for (; s < i.length; ) {
    const d = i[s], u = d.match(e.itemPattern);
    if (!u) {
      if (r.length > 0) break;
      if (d.trim() === "") {
        s += 1, o = `${o}${d}
`;
        continue;
      } else return;
    }
    const f = e.extractItemData(u), { indentLevel: h, mainContent: p } = f;
    o = `${o}${d}
`;
    const m = [p];
    for (s += 1; s < i.length; ) {
      var a;
      const v = i[s];
      if (v.trim() === "") {
        var c;
        const w = i.slice(s + 1).findIndex((x) => x.trim() !== "");
        if (w === -1) break;
        if ((((c = i[s + 1 + w].match(/^(\s*)/)) === null || c === void 0 || (c = c[1]) === null || c === void 0 ? void 0 : c.length) || 0) > h) {
          m.push(v), o = `${o}${v}
`, s += 1;
          continue;
        } else break;
      }
      if ((((a = v.match(/^(\s*)/)) === null || a === void 0 || (a = a[1]) === null || a === void 0 ? void 0 : a.length) || 0) > h)
        m.push(v), o = `${o}${v}
`, s += 1;
      else break;
    }
    let g;
    const y = m.slice(1);
    if (y.length > 0) {
      const v = xk(p, y.map((x) => wk(x, h + l)).join(`
`), n);
      f.mainContent = v.mainContent;
      const w = v.nestedContent;
      w.trim() && (e.customNestedParser ? g = e.customNestedParser(w) : g = n.blockTokens(w));
    }
    const b = e.createToken(f, g);
    r.push(b);
  }
  if (r.length !== 0)
    return {
      items: r,
      raw: o.slice(0, t.length)
    };
}
const lu = 4;
function au(t) {
  let e = 0;
  for (const n of t) e = n === "	" ? e + lu - e % lu : e + 1;
  return e;
}
function vm(t, e, n, i, r) {
  if (!t || !Array.isArray(t.content)) return "";
  const o = typeof n == "function" ? n(i) : n, [s, ...l] = t.content, a = e.renderChildren([s]);
  let c = `${o}${r?.indentMainContent ? a.split(`
`).map((d, u) => u === 0 ? d : e.indent(d)).join(`
`) : a}`;
  return l && l.length > 0 && l.forEach((d, u) => {
    var f, h;
    const p = (f = (h = e.renderChild) === null || h === void 0 ? void 0 : h.call(e, d, u + 1)) !== null && f !== void 0 ? f : e.renderChildren([d]);
    if (p != null) {
      const m = (y) => {
        if (!r?.alignNestedToPrefix) return e.indent(y);
        const b = e.indent(""), v = au(o);
        return (au(b) >= v ? b : " ".repeat(v)) + y;
      }, g = p.split(`
`).map((y) => m(y || "")).join(`
`);
      c += d.type === "paragraph" ? `

${g}` : `
${g}`;
    }
  }), c;
}
function wm(t, e) {
  const n = { ...t };
  return Fr(t) && Fr(e) && Object.keys(e).forEach((i) => {
    Fr(e[i]) && Fr(t[i]) ? n[i] = wm(t[i], e[i]) : n[i] = e[i];
  }), n;
}
function Sk(t, e, n = {}) {
  const { state: i } = e, { doc: r, tr: o } = i, s = t;
  r.descendants((l, a) => {
    const c = o.mapping.map(a), d = o.mapping.map(a) + l.nodeSize;
    let u = null;
    if (l.marks.forEach((h) => {
      if (h !== s) return !1;
      u = h;
    }), !u) return;
    let f = !1;
    if (Object.keys(n).forEach((h) => {
      n[h] !== u.attrs[h] && (f = !0);
    }), f) {
      const h = t.type.create({
        ...t.attrs,
        ...n
      });
      o.removeMark(c, d, t.type), o.addMark(c, d, h);
    }
  }), o.docChanged && e.view.dispatch(o);
}
var Vr = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) !== null && e !== void 0 ? e : !0;
  }
};
const Ck = (t, e) => {
  if (ic(e)) return e.exec(t);
  const n = e(t);
  if (!n) return null;
  const i = [n.text];
  return i.index = n.index, i.input = t, i.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), i.push(n.replaceWith)), i;
};
function Mk(t) {
  const { editor: e, from: n, to: i, text: r, insertText: o } = t;
  if (!o) return {
    inputTransaction: null,
    tr: e.view.state.tr
  };
  const s = e.view.state.tr.insertText(r, n, i);
  return {
    inputTransaction: s,
    tr: Vt.create({
      doc: s.doc,
      selection: s.selection,
      storedMarks: s.storedMarks
    }).tr
  };
}
function Ak(t) {
  const { editor: e, from: n, to: i, text: r, rule: o, match: s, plugin: l, insertText: a } = t, { view: c } = e, { inputTransaction: d, tr: u } = Mk({
    editor: e,
    from: n,
    to: i,
    text: r,
    insertText: a
  }), f = d ? n + r.length : i, h = Ms({
    state: c.state,
    transaction: u
  }), p = {
    from: n - (s[0].length - r.length),
    to: f
  }, { commands: m, chain: g, can: y } = new fi({
    editor: e,
    state: h
  });
  return o.handler({
    state: h,
    range: p,
    match: s,
    commands: m,
    chain: g,
    can: y
  }) === null || !u.steps.length ? !1 : (d && (c.dispatch(d), !c.state.doc.eq(d.doc)) || (uv(u), u.setMeta("inputRule", !0), o.undoable && u.setMeta(l, {
    transform: u,
    from: n,
    to: f,
    text: r
  }), c.dispatch(u)), !0);
}
function Tk(t, e, n) {
  const i = e[0].length - n.length;
  if (i <= 0) return !0;
  const r = t.parentOffset - i;
  return r >= 0 && t.parent.textBetween(r, t.parentOffset) === e[0].slice(0, i);
}
function Wr(t) {
  var e;
  const { editor: n, from: i, to: r, text: o, rules: s, plugin: l, insertText: a } = t, { view: c } = n;
  if (c.composing) return !1;
  const d = c.state.doc.resolve(i);
  if (d.parent.type.spec.code || !((e = d.nodeBefore || d.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)) return !1;
  const u = vw(d) + o;
  for (const f of s) {
    const h = Ck(u, f.find);
    if (!(!h || !Tk(d, h, o)) && Ak({
      editor: n,
      from: i,
      to: r,
      text: o,
      rule: f,
      match: h,
      plugin: l,
      insertText: a
    }))
      return !0;
  }
  return !1;
}
function Ek(t) {
  const { editor: e, rules: n } = t, i = new ie({
    state: {
      init() {
        return null;
      },
      apply(r, o, s) {
        const l = r.getMeta(i);
        if (l) return l;
        const a = r.getMeta("applyInputRules");
        return a && setTimeout(() => {
          let { text: c } = a;
          typeof c == "string" ? c = c : c = oc(C.from(c), s.schema);
          const { from: d } = a, u = d + c.length;
          Wr({
            editor: e,
            from: d,
            to: u,
            text: c,
            rules: n,
            plugin: i
          });
        }), r.selectionSet || r.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(r, o, s, l) {
        return Wr({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: n,
          plugin: i,
          insertText: !0
        });
      },
      handleDOMEvents: { compositionend: (r) => (setTimeout(() => {
        const { $cursor: o } = r.state.selection;
        o && Wr({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: "",
          rules: n,
          plugin: i
        });
      }), !1) },
      handleKeyDown(r, o) {
        if (o.key !== "Enter") return !1;
        const { $cursor: s } = r.state.selection;
        return s ? Wr({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: n,
          plugin: i
        }) : !1;
      }
    },
    isInputRules: !0
  });
  return i;
}
var dc = class {
  constructor(t = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = { name: this.name }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name;
  }
  get options() {
    return { ...ee(_(this, "addOptions", { name: this.name })) };
  }
  get storage() {
    return { ...ee(_(this, "addStorage", {
      name: this.name,
      options: this.options
    })) };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => wm(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, this.child = null, e;
  }
  extend(t = {}) {
    const e = new this.constructor({
      ...this.config,
      ...t
    });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, lt = class km extends dc {
  constructor(...e) {
    super(...e), this.type = "mark";
  }
  /**
  * Create a new Mark instance
  * @param config - Mark configuration object or a function that returns a configuration object
  */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new km(n);
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: i } = e.state, r = e.state.selection.$from;
    if (r.pos === r.end()) {
      const o = r.marks();
      if (!o.find((l) => l?.type.name === n.name)) return !1;
      const s = o.find((l) => l?.type.name === n.name);
      return s && i.removeStoredMark(s), i.insertText(" ", r.pos), e.view.dispatch(i), !0;
    }
    return !1;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, xm = class {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
};
const Lk = (t, e, n) => {
  if (ic(e)) return [...t.matchAll(e)];
  const i = e(t, n);
  return i ? i.map((r) => {
    const o = [r.text];
    return o.index = r.index, o.input = t, o.data = r.data, r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(r.replaceWith)), o;
  }) : [];
};
function Ok(t) {
  const { editor: e, state: n, from: i, to: r, rule: o, pasteEvent: s, dropEvent: l } = t, { commands: a, chain: c, can: d } = new fi({
    editor: e,
    state: n
  }), u = [];
  return n.doc.nodesBetween(i, r, (f, h) => {
    var p, m, g, y;
    if (!((p = f.type) === null || p === void 0 || (p = p.spec) === null || p === void 0) && p.code || !(f.isText || f.isTextblock || f.isInline)) return;
    const b = (m = (g = (y = f.content) === null || y === void 0 ? void 0 : y.size) !== null && g !== void 0 ? g : f.nodeSize) !== null && m !== void 0 ? m : 0, v = Math.max(i, h), w = Math.min(r, h + b);
    if (v >= w) return;
    const x = f.isText ? f.text || "" : f.textBetween(v - h, w - h, void 0, "￼");
    Lk(x, o.find, s).forEach((k) => {
      if (k.index === void 0) return;
      const S = v + k.index + 1, M = S + k[0].length, O = {
        from: n.tr.mapping.map(S),
        to: n.tr.mapping.map(M)
      }, V = o.handler({
        state: n,
        range: O,
        match: k,
        commands: a,
        chain: c,
        can: d,
        pasteEvent: s,
        dropEvent: l
      });
      u.push(V);
    });
  }), u.every((f) => f !== null);
}
let ei = null;
const Hk = (t) => {
  var e;
  const n = new ClipboardEvent("paste", { clipboardData: new DataTransfer() });
  return (e = n.clipboardData) === null || e === void 0 || e.setData("text/html", t), n;
};
function Rk(t) {
  const { editor: e, rules: n } = t;
  let i = null, r = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({ state: c, from: d, to: u, rule: f, pasteEvt: h }) => {
    const p = c.tr, m = Ms({
      state: c,
      transaction: p
    });
    if (!(!Ok({
      editor: e,
      state: m,
      from: Math.max(d - 1, 0),
      to: u.b - 1,
      rule: f,
      pasteEvent: h,
      dropEvent: l
    }) || !p.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, p;
    }
  };
  return e.on("destroy", () => {
    ei === e && (ei = null);
  }), n.map((c) => new ie({
    view(d) {
      const u = (h) => {
        var p;
        i = !((p = d.dom.parentElement) === null || p === void 0) && p.contains(h.target) ? d.dom.parentElement : null, i && (ei = e);
      }, f = () => {
        ei && (ei = null);
      };
      return window.addEventListener("dragstart", u), window.addEventListener("dragend", f), { destroy() {
        window.removeEventListener("dragstart", u), window.removeEventListener("dragend", f);
      } };
    },
    props: { handleDOMEvents: {
      drop: (d, u) => {
        if (o = i === d.dom.parentElement, l = u, !o) {
          const f = ei;
          f?.isEditable && setTimeout(() => {
            if (f.isDestroyed) return;
            const h = f.state.selection;
            h && f.commands.deleteRange({
              from: h.from,
              to: h.to
            });
          }, 10);
        }
        return !1;
      },
      paste: (d, u) => {
        var f;
        const h = (f = u.clipboardData) === null || f === void 0 ? void 0 : f.getData("text/html");
        return s = u, r = !!h?.includes("data-pm-slice"), !1;
      }
    } },
    appendTransaction: (d, u, f) => {
      const h = d[0], p = h.getMeta("uiEvent") === "paste" && !r, m = h.getMeta("uiEvent") === "drop" && !o, g = h.getMeta("applyPasteRules"), y = !!g;
      if (!p && !m && !y) return;
      if (y) {
        let { text: w } = g;
        typeof w == "string" ? w = w : w = oc(C.from(w), f.schema);
        const { from: x } = g, k = x + w.length, S = Hk(w);
        return a({
          rule: c,
          state: f,
          from: x,
          to: { b: k },
          pasteEvt: S
        });
      }
      const b = u.doc.content.findDiffStart(f.doc.content), v = u.doc.content.findDiffEnd(f.doc.content);
      if (!(!bk(b) || !v || b === v.b))
        return a({
          rule: c,
          state: f,
          from: b,
          to: v,
          pasteEvt: s
        });
    }
  }));
}
var Rs = class {
  constructor(t, e) {
    this.splittableMarks = [], this.nonClearableMarks = [], this.decorationManager = null, this.editor = e, this.baseExtensions = t, this.extensions = lc(t), this.hasSchemaSpec = e.options.schemaSpec !== void 0, this.schema = nm(this.extensions, e, e.options.schemaSpec), this.setupExtensions();
  }
  /**
  * Get all commands from the extensions.
  * @returns An object with all commands where the key is the command name and the value is the command function
  */
  get commands() {
    return this.extensions.reduce((t, e) => {
      const n = _(e, "addCommands", {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Qn(e.name, this.schema)
      });
      return n ? {
        ...t,
        ...n()
      } : t;
    }, {});
  }
  /**
  * Get all registered Prosemirror plugins from the extensions.
  * @returns An array of Prosemirror plugins
  */
  get plugins() {
    const { editor: t } = this, e = Ki([...this.extensions].reverse()).flatMap((i) => {
      const r = {
        name: i.name,
        options: i.options,
        storage: this.editor.extensionStorage[i.name],
        editor: t,
        type: Qn(i.name, this.schema)
      }, o = [], s = _(i, "addKeyboardShortcuts", r);
      let l = {};
      if (i.type === "mark" && _(i, "exitable", r) && (l.ArrowRight = () => lt.handleExit({
        editor: t,
        mark: i
      })), s) {
        const f = Object.fromEntries(Object.entries(s()).map(([h, p]) => [h, () => p({ editor: t })]));
        l = {
          ...l,
          ...f
        };
      }
      const a = iv(l);
      o.push(a);
      const c = _(i, "addInputRules", r);
      if (eu(i, t.options.enableInputRules) && c) {
        const f = c();
        if (f && f.length) {
          const h = Ek({
            editor: t,
            rules: f
          }), p = Array.isArray(h) ? h : [h];
          o.push(...p);
        }
      }
      const d = _(i, "addPasteRules", r);
      if (eu(i, t.options.enablePasteRules) && d) {
        const f = d();
        if (f && f.length) {
          const h = Rk({
            editor: t,
            rules: f
          });
          o.push(...h);
        }
      }
      const u = _(i, "addProseMirrorPlugins", r);
      if (u) {
        const f = u();
        o.push(...f);
      }
      return o;
    }), n = this.createDecorationPlugin();
    return n && e.push(n), e;
  }
  /**
  * Aggregates decorations from extensions into a single plugin, or returns null
  * if none exist. Destroys the previous manager to avoid orphaned listeners.
  * @returns A ProseMirror plugin or `null`
  * @example
  * const plugin = editor.extensionManager.createDecorationPlugin()
  */
  createDecorationPlugin() {
    var t;
    const { editor: e } = this;
    (t = this.decorationManager) === null || t === void 0 || t.destroy();
    const n = [];
    return this.extensions.forEach((i) => {
      const r = _(i, "addDecorations", {
        name: i.name,
        options: i.options,
        storage: this.editor.extensionStorage[i.name],
        editor: e,
        type: Qn(i.name, this.schema)
      });
      r && n.push({
        name: i.name,
        addDecorations: r
      });
    }), this.decorationManager = new mk({
      editor: e,
      entries: n
    }), this.decorationManager.plugin;
  }
  /**
  * Get all attributes from the extensions.
  * @returns An array of attributes
  */
  get attributes() {
    const t = sc(this.extensions);
    return this.hasSchemaSpec ? em(t, this.schema) : t;
  }
  /**
  * Get all node views from the extensions.
  * @returns An object with all node views where the key is the node name and the value is the node view function
  */
  get nodeViews() {
    const { editor: t } = this, { nodeExtensions: e } = ki(this.extensions);
    return Object.fromEntries(e.filter((n) => !!_(n, "addNodeView")).map((n) => {
      const i = this.attributes.filter((l) => l.type === n.name), r = _(n, "addNodeView", {
        name: n.name,
        options: n.options,
        storage: this.editor.extensionStorage[n.name],
        editor: t,
        type: ke(n.name, this.schema)
      });
      if (!r) return [];
      const o = r();
      if (!o) return [];
      const s = (l, a, c, d, u) => {
        const f = xi(l, i);
        return o({
          node: l,
          view: a,
          getPos: c,
          decorations: d,
          innerDecorations: u,
          editor: t,
          extension: n,
          HTMLAttributes: f
        });
      };
      return [n.name, s];
    }));
  }
  /**
  * Get the composed dispatchTransaction function from all extensions.
  * @param baseDispatch The base dispatch function (e.g. from the editor or user props)
  * @returns A composed dispatch function
  */
  dispatchTransaction(t) {
    const { editor: e } = this;
    return Ki([...this.extensions].reverse()).reduceRight((n, i) => {
      const r = {
        name: i.name,
        options: i.options,
        storage: this.editor.extensionStorage[i.name],
        editor: e,
        type: Qn(i.name, this.schema)
      }, o = _(i, "dispatchTransaction", r);
      return o ? (s) => {
        o.call(r, {
          transaction: s,
          next: n
        });
      } : n;
    }, t);
  }
  /**
  * Get the composed transformPastedHTML function from all extensions.
  * @param baseTransform The base transform function (e.g. from the editor props)
  * @returns A composed transform function that chains all extension transforms
  */
  transformPastedHTML(t) {
    const { editor: e } = this;
    return Ki([...this.extensions]).reduce((n, i) => {
      const r = {
        name: i.name,
        options: i.options,
        storage: this.editor.extensionStorage[i.name],
        editor: e,
        type: Qn(i.name, this.schema)
      }, o = _(i, "transformPastedHTML", r);
      return o ? (s, l) => {
        const a = n(s, l);
        return o.call(r, a);
      } : n;
    }, t || ((n) => n));
  }
  get markViews() {
    const { editor: t } = this, { markExtensions: e } = ki(this.extensions);
    return Object.fromEntries(e.filter((n) => !!_(n, "addMarkView")).map((n) => {
      const i = this.attributes.filter((s) => s.type === n.name), r = _(n, "addMarkView", {
        name: n.name,
        options: n.options,
        storage: this.editor.extensionStorage[n.name],
        editor: t,
        type: jt(n.name, this.schema)
      });
      if (!r) return [];
      const o = (s, l, a) => {
        const c = xi(s, i);
        return r()({
          mark: s,
          view: l,
          inline: a,
          editor: t,
          extension: n,
          HTMLAttributes: c,
          updateAttributes: (d) => {
            Sk(s, t, d);
          }
        });
      };
      return [n.name, o];
    }));
  }
  /**
  * Destroy the extension manager and clean up all extension references
  * to prevent memory leaks through parent/child extension chains.
  *
  * Walks each extension's full parent chain and nulls every forward
  * `parent.child → current` link where the parent still points to the
  * current node. This breaks the retention path from module-scope
  * singleton roots through deep extend() chains.
  *
  * Only ancestor `.child` links matching the current chain are cleared.
  * The `.parent` pointer on ancestors is never touched — extensions
  * may be shared across live editors, so their own backward references
  * and non-matching forward links must remain intact.
  */
  destroy() {
    var t;
    (t = this.decorationManager) === null || t === void 0 || t.destroy(), this.extensions.forEach((e) => {
      let n = e;
      for (; n.parent; ) {
        const i = n.parent;
        i.child === n && (i.child = null), n = i;
      }
    }), this.extensions = [], this.baseExtensions = [], this.decorationManager = null, this.schema = null, this.editor = null;
  }
  /**
  * Go through all extensions, create extension storages & setup marks
  * & bind editor event listener.
  */
  setupExtensions() {
    const t = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(t.map((e) => [e.name, e.storage])), t.forEach((e) => {
      const n = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Qn(e.name, this.schema)
      };
      if (e.type === "mark") {
        var i, r;
        (!((i = ee(_(e, "keepOnSplit", n))) !== null && i !== void 0) || i) && this.splittableMarks.push(e.name), !((r = ee(_(e, "clearable", n))) !== null && r !== void 0) || r || this.nonClearableMarks.push(e.name);
      }
      const o = _(e, "onBeforeCreate", n), s = _(e, "onCreate", n), l = _(e, "onUpdate", n), a = _(e, "onSelectionUpdate", n), c = _(e, "onTransaction", n), d = _(e, "onFocus", n), u = _(e, "onBlur", n), f = _(e, "onDestroy", n);
      o && this.editor.on("beforeCreate", o), s && this.editor.on("create", s), l && this.editor.on("update", l), a && this.editor.on("selectionUpdate", a), c && this.editor.on("transaction", c), d && this.editor.on("focus", d), u && this.editor.on("blur", u), f && this.editor.on("destroy", f);
    });
  }
};
Rs.resolve = lc;
Rs.sort = Ki;
Rs.flatten = rc;
var G = class Sm extends dc {
  constructor(...e) {
    super(...e), this.type = "extension";
  }
  /**
  * Create a new Extension instance
  * @param config - Extension configuration object or a function that returns a configuration object
  */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Sm(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
};
const Vk = G.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return { blockSeparator: void 0 };
  },
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("clipboardTextSerializer"),
      props: { clipboardTextSerializer: () => {
        const { editor: t } = this, { state: e, schema: n } = t, { doc: i, selection: r } = e, o = ac(n), { blockSeparator: s } = this.options, l = {
          ...s !== void 0 ? { blockSeparator: s } : {},
          textSerializers: o
        };
        return [...r.ranges].sort((a, c) => a.$from.pos - c.$from.pos).map(({ $from: a, $to: c }) => im(i, {
          from: a.pos,
          to: c.pos
        }, l)).join(s ?? `

`);
      } }
    })];
  }
}), Nk = G.create({
  name: "commands",
  addCommands() {
    return { ...ek };
  }
}), Ik = G.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, i;
    const r = () => {
      var o, s, l;
      if ((o = (s = this.editor.options.coreExtensionOptions) === null || s === void 0 || (s = s.delete) === null || s === void 0 || (l = s.filterTransaction) === null || l === void 0 ? void 0 : l.call(s, t)) !== null && o !== void 0 ? o : t.getMeta("y-sync$")) return;
      const a = Qp(t.before, [t, ...e]);
      Os(a).forEach((d) => {
        a.mapping.mapResult(d.oldRange.from).deletedAfter && a.mapping.mapResult(d.oldRange.to).deletedBefore && a.before.nodesBetween(d.oldRange.from, d.oldRange.to, (u, f) => {
          const h = f + u.nodeSize - 2, p = d.oldRange.from <= f && h <= d.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: u,
            from: f,
            to: h,
            newFrom: a.mapping.map(f),
            newTo: a.mapping.map(h),
            deletedRange: d.oldRange,
            newRange: d.newRange,
            partial: !p,
            editor: this.editor,
            transaction: t,
            combinedTransform: a
          });
        });
      });
      const c = a.mapping;
      a.steps.forEach((d, u) => {
        if (d instanceof ht) {
          var f, h;
          const p = c.slice(u).map(d.from, -1), m = c.slice(u).map(d.to), g = c.invert().map(p, -1), y = c.invert().map(m), b = p > 0 ? (f = a.doc.nodeAt(p - 1)) === null || f === void 0 ? void 0 : f.marks.some((w) => w.eq(d.mark)) : !1, v = (h = a.doc.nodeAt(m)) === null || h === void 0 ? void 0 : h.marks.some((w) => w.eq(d.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: d.mark,
            from: d.from,
            to: d.to,
            deletedRange: {
              from: g,
              to: y
            },
            newRange: {
              from: p,
              to: m
            },
            partial: !!(v || b),
            editor: this.editor,
            transaction: t,
            combinedTransform: a
          });
        }
      });
    };
    !((n = (i = this.editor.options.coreExtensionOptions) === null || i === void 0 || (i = i.delete) === null || i === void 0 ? void 0 : i.async) !== null && n !== void 0) || n ? setTimeout(r, 0) : r();
  }
}), Dk = G.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("tiptapDrop"),
      props: { handleDrop: (t, e, n, i) => {
        this.editor.emit("drop", {
          editor: this.editor,
          event: e,
          slice: n,
          moved: i
        });
      } }
    })];
  }
}), Pk = G.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("editable"),
      props: { editable: () => this.editor.options.editable }
    })];
  }
}), _k = new se("focusEvents"), zk = G.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [new ie({
      key: _k,
      props: { handleDOMEvents: {
        focus: (e, n) => {
          t.isFocused = !0;
          const i = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
          return e.dispatch(i), !1;
        },
        blur: (e, n) => {
          t.isFocused = !1;
          const i = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
          return e.dispatch(i), !1;
        }
      } }
    })];
  }
}), $k = G.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: d, $anchor: u } = a, { pos: f, parent: h } = u, p = u.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : u, m = p.parent.type.spec.isolating, g = u.pos - u.parentOffset, y = m && p.parent.childCount === 1 ? g === u.pos : B.atStart(c).from === f;
        return !d || !h.type.isTextblock || h.textContent.length || !y || y && u.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), i = {
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
    }, r = { ...i }, o = {
      ...i,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return pr() || Zp() ? o : r;
  },
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("clearDocument"),
      appendTransaction: (t, e, n) => {
        if (t.some((h) => h.getMeta("composition"))) return;
        const i = t.some((h) => h.docChanged) && !e.doc.eq(n.doc), r = t.some((h) => h.getMeta("preventClearDocument"));
        if (!i || r) return;
        const { empty: o, from: s, to: l } = e.selection, a = B.atStart(e.doc).from, c = B.atEnd(e.doc).to;
        if (o || !(s === a && l === c) || !Rr(n.doc)) return;
        const d = n.tr, u = Ms({
          state: n,
          transaction: d
        }), { commands: f } = new fi({
          editor: this.editor,
          state: u
        });
        if (f.clearNodes(), !!d.steps.length)
          return d;
      }
    })];
  }
}), Bk = G.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("tiptapPaste"),
      props: { handlePaste: (t, e, n) => {
        this.editor.emit("paste", {
          editor: this.editor,
          event: e,
          slice: n
        });
      } }
    })];
  }
}), Fk = G.create({
  name: "tabindex",
  addOptions() {
    return { value: void 0 };
  },
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("tabindex"),
      props: { attributes: () => {
        var t;
        return !this.editor.isEditable && this.options.value === void 0 ? {} : { tabindex: (t = this.options.value) !== null && t !== void 0 ? t : "0" };
      } }
    })];
  }
}), Wk = G.create({
  name: "textDirection",
  addOptions() {
    return { direction: void 0 };
  },
  addGlobalAttributes() {
    if (!this.options.direction) return [];
    const { nodeExtensions: t } = ki(this.extensions);
    return [{
      types: t.filter((e) => e.name !== "text").map((e) => e.name),
      attributes: { dir: {
        default: this.options.direction,
        parseHTML: (e) => {
          const n = e.getAttribute("dir");
          return n && (n === "ltr" || n === "rtl" || n === "auto") ? n : this.options.direction;
        },
        renderHTML: (e) => e.dir ? { dir: e.dir } : {}
      } }
    }];
  },
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("textDirection"),
      props: { attributes: () => {
        const t = this.options.direction;
        return t ? { dir: t } : {};
      } }
    })];
  }
});
let cu = !1;
function Uk(t) {
  if (cu) return;
  cu = !0;
  let e;
  try {
    const n = pe.fromJSON(t, {
      from: 0,
      to: 0
    });
    if (!Mw(n)) return;
    e = n.slice.content;
  } catch {
    return;
  }
  e instanceof C || console.warn("[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.");
}
var jk = class $i {
  get name() {
    return this.node.type.name;
  }
  constructor(e, n, i = !1, r = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = i, this.resolvedPos = e, this.editor = n, this.currentNode = r;
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
    let n = this.from, i = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      n = this.from + 1, i = this.to - 1;
    }
    this.editor.commands.insertContentAt({
      from: n,
      to: i
    }, e);
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
    if (this.depth === 0) return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(e);
    return new $i(n, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new $i(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new $i(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((n, i) => {
      const r = n.isBlock && !n.isTextblock, o = n.isAtom && !n.isText, s = n.isInline, l = this.pos + i + (o ? 0 : 1);
      if (l < 0 || l > this.resolvedPos.doc.nodeSize - 2) return;
      const a = this.resolvedPos.doc.resolve(l);
      if (!r && !s && a.depth <= this.depth) return;
      const c = new $i(a, this.editor, r, r || s ? n : null);
      r && (c.actualDepth = this.depth + 1), e.push(c);
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
    let i = null, r = this.parent;
    for (; r && !i; ) {
      if (r.node.type.name === e)
        if (Object.keys(n).length > 0) {
          const o = r.node.attrs, s = Object.keys(n);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (o[a] !== n[a]) break;
          }
        } else i = r;
      r = r.parent;
    }
    return i;
  }
  querySelector(e, n = {}) {
    return this.querySelectorAll(e, n, !0)[0] || null;
  }
  querySelectorAll(e, n = {}, i = !1) {
    let r = [];
    if (!this.children || this.children.length === 0) return r;
    const o = Object.keys(n);
    return this.children.forEach((s) => {
      i && r.length > 0 || (s.node.type.name === e && o.every((l) => n[l] === s.node.attrs[l]) && r.push(s), !(i && r.length > 0) && (r = r.concat(s.querySelectorAll(e, n, i))));
    }), r;
  }
  setAttribute(e) {
    const { tr: n } = this.editor.state;
    n.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(n);
  }
};
const Kk = `.ProseMirror {
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
}`;
var qk = class extends ik {
  constructor(e = {}) {
    super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.destroyed = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.hasWarnedStaleDecorationRead = !1, this.options = {
      element: typeof document < "u" ? document.createElement("div") : null,
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      textDirection: void 0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: i }) => {
        throw i;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null,
      enableExtensionDispatchTransaction: !0
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
      getUpdatedPosition: Aw,
      createMappablePosition: Tw
    }, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: i, slice: r, moved: o }) => this.options.onDrop(i, r, o)), this.on("paste", ({ event: i, slice: r }) => this.options.onPaste(i, r)), this.on("delete", this.options.onDelete);
    const n = this.createDoc();
    if (!this.editorState) {
      const i = Jl(n, this.options.autofocus);
      this.editorState = Vt.create({
        doc: n,
        schema: this.schema,
        selection: i || void 0
      });
    }
    Uk(this.schema), this.options.element && this.mount(this.options.element);
  }
  /**
  * Attach the editor to the DOM, creating a new editor view.
  */
  mount(e) {
    if (typeof document > "u") throw new Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
    this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
      this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
  * Remove the editor from the DOM, but still allow remounting at a different point in time
  */
  unmount() {
    if (this.editorView) {
      this.editorState = this.editorView.state;
      const e = this.editorView.dom;
      e?.editor && delete e.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length) try {
      typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
    } catch (e) {
      console.warn("Failed to remove CSS element:", e);
    }
    this.css = null, this.emit("unmount", { editor: this });
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
    return this.commandManager ? this.commandManager.chain() : fi.createFakeChain();
  }
  /**
  * Check if a command or a command chain can be executed. Without executing it.
  */
  can() {
    return this.commandManager ? this.commandManager.can() : fi.createFallbackCan();
  }
  /**
  * Inject CSS styles.
  */
  injectCSS() {
    this.options.injectCSS && typeof document < "u" && (this.css = yk(Kk, this.options.injectNonce));
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
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps({
      ...this.options.editorProps,
      attributes: this.getEditorViewAttributes()
    }), this.view.updateState(this.state));
  }
  /**
  * Update editable state of the editor.
  */
  setEditable(e, n = !0) {
    this.setOptions({ editable: e }), n && this.emit("update", {
      editor: this,
      transaction: this.state.tr,
      appendedTransactions: []
    });
  }
  /**
  * Returns whether the editor is editable.
  */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
  * Returns the editor view.
  */
  get view() {
    return this.editorView ? this.editorView : new Proxy({
      state: this.editorState,
      updateState: (e) => {
        this.editorState = e;
      },
      dispatch: (e) => {
        this.dispatchTransaction(e);
      },
      composing: !1,
      dragging: null,
      editable: !0,
      isDestroyed: !1
    }, { get: (e, n) => {
      if (this.editorView) return this.editorView[n];
      if (n === "state") return this.editorState;
      if (n in e) return Reflect.get(e, n);
      throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${n}']. The editor may not be mounted yet.`);
    } });
  }
  /**
  * Returns the editor state.
  */
  get state() {
    return hm && !this.hasWarnedStaleDecorationRead && nk(this) && (this.hasWarnedStaleDecorationRead = !0, console.warn("[tiptap warn]: `editor.state` was read while decoration `create()` was running. It returns the pre-transaction document. Use the `state` argument passed to `create()` instead. Helpers like `editor.isActive()` read `editor.state` too, so pass `state` to their standalone versions instead of calling them on the editor.")), this.editorView && (this.editorState = this.view.state), this.editorState;
  }
  /**
  * Register a ProseMirror plugin.
  *
  * @param plugin A ProseMirror plugin
  * @param handlePlugins Control how to merge the plugin into the existing plugins.
  * @returns The new editor state
  */
  registerPlugin(e, n) {
    const i = Yl(n) ? n(e, [...this.state.plugins]) : [...this.state.plugins, e], r = this.state.reconfigure({ plugins: i });
    return this.view.updateState(r), r;
  }
  /**
  * Unregister a ProseMirror plugin.
  *
  * @param nameOrPluginKeyToRemove The plugins name
  * @returns The new editor state or undefined if the editor is destroyed
  */
  unregisterPlugin(e) {
    if (this.isDestroyed) return;
    const n = this.state.plugins;
    let i = n;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      i = i.filter((l) => !l.key.startsWith(s));
    }), n.length === i.length) return;
    const r = this.state.reconfigure({ plugins: i });
    return this.view.updateState(r), r;
  }
  /**
  * Creates an extension manager.
  */
  createExtensionManager() {
    var e, n;
    const i = [...this.options.enableCoreExtensions ? [
      Pk,
      Vk.configure({ blockSeparator: (e = this.options.coreExtensionOptions) === null || e === void 0 || (e = e.clipboardTextSerializer) === null || e === void 0 ? void 0 : e.blockSeparator }),
      Nk,
      zk,
      $k,
      Fk.configure({ value: (n = this.options.coreExtensionOptions) === null || n === void 0 || (n = n.tabindex) === null || n === void 0 ? void 0 : n.value }),
      Dk,
      Bk,
      Ik,
      Wk.configure({ direction: this.options.textDirection })
    ].filter((r) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[r.name] !== !1 : !0) : [], ...this.options.extensions].filter((r) => [
      "extension",
      "node",
      "mark"
    ].includes(r?.type));
    this.extensionManager = new Rs(i, this);
  }
  /**
  * Creates an command manager.
  */
  createCommandManager() {
    this.commandManager = new fi({ editor: this });
  }
  /**
  * Creates a ProseMirror schema.
  */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
  * Creates the initial document.
  */
  createDoc() {
    let e;
    try {
      e = Zl(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (n) {
      if (!(n instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(n.message)) throw n;
      const i = Zl(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
      return this.editorState = Vt.create({
        doc: i,
        schema: this.schema,
        selection: Jl(i, this.options.autofocus) || void 0
      }), this.emit("contentError", {
        editor: this,
        error: n,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((r) => r.name !== "collaboration"), this.createExtensionManager();
        }
      }), this.editorState.doc;
    }
    return e;
  }
  /**
  * Returns the attributes for the editor element.
  * Merges the default `role="textbox"` with the attributes from `editorProps`,
  * so the role is kept no matter when the props are applied.
  */
  getEditorViewAttributes() {
    var e;
    const n = (e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes;
    return Yl(n) ? (i) => ({
      role: "textbox",
      ...n(i)
    }) : {
      role: "textbox",
      ...n
    };
  }
  /**
  * Creates a ProseMirror view.
  */
  createView(e) {
    const { editorProps: n, enableExtensionDispatchTransaction: i } = this.options, r = n.dispatchTransaction || this.dispatchTransaction.bind(this), o = i ? this.extensionManager.dispatchTransaction(r) : r, s = n.transformPastedHTML, l = this.extensionManager.transformPastedHTML(s);
    this.editorView = new Pp(e, {
      ...n,
      attributes: this.getEditorViewAttributes(),
      dispatchTransaction: o,
      transformPastedHTML: l,
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const a = this.state.reconfigure({ plugins: this.extensionManager.plugins });
    this.view.updateState(a), this.prependClass(), this.injectCSS();
    const c = this.view.dom;
    c.editor = this;
  }
  /**
  * Creates all node and mark views.
  */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
  * Prepend class name to element.
  */
  prependClass() {
    this.view.dom.className = `${this.className} ${this.view.dom.className}`;
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
    if (this.view.isDestroyed) return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((d) => {
        var u;
        return (u = this.capturedTransaction) === null || u === void 0 ? void 0 : u.step(d);
      });
      return;
    }
    const { state: n, transactions: i } = this.state.applyTransaction(e), r = !this.state.selection.eq(n.selection), o = i.includes(e), s = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: n
    }), !o) return;
    this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: e,
      appendedTransactions: i.slice(1)
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const l = i.findLast((d) => d.getMeta("focus") || d.getMeta("blur")), a = l?.getMeta("focus"), c = l?.getMeta("blur");
    a && this.emit("focus", {
      editor: this,
      event: a.event,
      transaction: l
    }), c && this.emit("blur", {
      editor: this,
      event: c.event,
      transaction: l
    }), !(e.getMeta("preventUpdate") || !i.some((d) => d.docChanged) || s.doc.eq(n.doc)) && this.emit("update", {
      editor: this,
      transaction: e,
      appendedTransactions: i.slice(1)
    });
  }
  /**
  * Get attributes of the currently selected node or mark.
  */
  getAttributes(e) {
    return om(this.state, e);
  }
  isActive(e, n) {
    const i = typeof e == "string" ? e : null, r = typeof e == "string" ? n : e;
    return ww(this.state, i, r);
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
    return oc(this.state.doc.content, this.schema);
  }
  /**
  * Get the document as text.
  */
  getText(e) {
    const { blockSeparator: n = `

`, textSerializers: i = {} } = e || {};
    return rm(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...ac(this.schema),
        ...i
      }
    });
  }
  /**
  * Check if there is no content.
  */
  get isEmpty() {
    return Rr(this.state.doc);
  }
  /**
  * Destroy the editor.
  */
  destroy() {
    this.destroyed || (this.destroyed = !0, this.emit("destroy"), this.unmount(), this.removeAllListeners(), this.extensionManager.destroy(), this.extensionManager = null, this.schema = null, this.commandManager = null, this.extensionStorage = {});
  }
  /**
  * Check if the editor is already destroyed.
  */
  get isDestroyed() {
    var e, n;
    return (e = (n = this.editorView) === null || n === void 0 ? void 0 : n.isDestroyed) !== null && e !== void 0 ? e : !0;
  }
  $node(e, n) {
    var i;
    return ((i = this.$doc) === null || i === void 0 ? void 0 : i.querySelector(e, n)) || null;
  }
  $nodes(e, n) {
    var i;
    return ((i = this.$doc) === null || i === void 0 ? void 0 : i.querySelectorAll(e, n)) || null;
  }
  $pos(e) {
    const n = this.state.doc.resolve(e), i = e > 0 && n.nodeAfter && !n.nodeAfter.isText && n.nodeAfter.isAtom ? n.nodeAfter : null;
    return new jk(n, this, !1, i);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function yn(t) {
  return new Vr({
    find: t.find,
    handler: ({ state: e, range: n, match: i }) => {
      const r = ee(t.getAttributes, void 0, i);
      if (r === !1 || r === null) return null;
      const { tr: o } = e, s = i[i.length - 1], l = i[0];
      if (s) {
        const a = l.search(/\S/), c = n.from + l.indexOf(s), d = c + s.length;
        if (Hs(n.from, n.to, e.doc).filter((f) => f.mark.type.excluded.find((h) => h === t.type && h !== f.mark.type)).filter((f) => f.to > c).length) return null;
        d < n.to && o.delete(d, n.to), c > n.from && o.delete(n.from + a, c);
        const u = n.from + a + s.length;
        o.addMark(n.from + a, u, t.type.create(r || {})), o.removeStoredMark(t.type);
      }
    },
    undoable: t.undoable
  });
}
function Cm(t) {
  return new Vr({
    find: t.find,
    handler: ({ state: e, range: n, match: i }) => {
      const r = ee(t.getAttributes, void 0, i) || {}, { tr: o } = e, s = n.from;
      let l = n.to;
      const a = t.type.create(r);
      if (i[1]) {
        let c = s + i[0].lastIndexOf(i[1]);
        c > l ? c = l : l = c + i[1].length;
        const d = i[0][i[0].length - 1];
        o.insertText(d, s + i[0].length - 1), o.replaceWith(c, l, a);
      } else if (i[0]) {
        const c = t.type.isInline ? s : s - 1;
        o.insert(c, t.type.create(r)).delete(o.mapping.map(s), o.mapping.map(l));
      }
      o.scrollIntoView();
    },
    undoable: t.undoable
  });
}
function ea(t) {
  return new Vr({
    find: t.find,
    handler: ({ state: e, range: n, match: i }) => {
      const r = e.doc.resolve(n.from), o = ee(t.getAttributes, void 0, i) || {};
      if (!r.node(-1).canReplaceWith(r.index(-1), r.indexAfter(-1), t.type)) return null;
      e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, o);
    },
    undoable: t.undoable
  });
}
function Si(t) {
  return new Vr({
    find: t.find,
    handler: ({ state: e, range: n, match: i, chain: r }) => {
      const o = ee(t.getAttributes, void 0, i) || {}, s = e.tr.delete(n.from, n.to), l = s.doc.resolve(n.from).blockRange(), a = l && za(l, t.type, o);
      if (!a) return null;
      if (s.wrap(l, a), t.keepMarks && t.editor) {
        const { selection: d, storedMarks: u } = e, { splittableMarks: f } = t.editor.extensionManager, h = u || d.$to.parentOffset && d.$from.marks();
        if (h) {
          const p = h.filter((m) => f.includes(m.type.name));
          s.ensureMarks(p);
        }
      }
      if (t.keepAttributes) {
        const d = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
        r().updateAttributes(d, o).run();
      }
      const c = s.doc.resolve(n.from - 1).nodeBefore;
      c && c.type === t.type && wn(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(i, c)) && s.join(n.from - 1);
    },
    undoable: t.undoable
  });
}
const Gk = (t) => "touches" in t;
var Jk = class {
  /**
  * Creates a new ResizableNodeView instance.
  *
  * The constructor sets up the resize handles, applies initial sizing from
  * node attributes, and configures all resize behavior options.
  *
  * @param options - Configuration options for the resizable node view
  */
  constructor(t) {
    var e, n, i, r, o, s;
    this.directions = [
      "bottom-left",
      "bottom-right",
      "top-left",
      "top-right"
    ], this.minSize = {
      height: 8,
      width: 8
    }, this.preserveAspectRatio = !1, this.classNames = {
      container: "",
      wrapper: "",
      handle: "",
      resizing: ""
    }, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.lastEditableState = void 0, this.handleMap = /* @__PURE__ */ new Map(), this.handleEditorUpdate = () => {
      const l = this.editor.isEditable;
      l !== this.lastEditableState && (this.lastEditableState = l, l ? l && this.handleMap.size === 0 && this.attachHandles() : this.removeHandles());
    }, this.handleMouseMove = (l) => {
      if (!this.isResizing || !this.activeHandle) return;
      const a = l.clientX - this.startX, c = l.clientY - this.startY;
      this.handleResize(a, c);
    }, this.handleTouchMove = (l) => {
      if (!this.isResizing || !this.activeHandle) return;
      const a = l.touches[0];
      if (!a) return;
      const c = a.clientX - this.startX, d = a.clientY - this.startY;
      this.handleResize(c, d);
    }, this.handleMouseUp = () => {
      if (!this.isResizing) return;
      const l = this.element.offsetWidth, a = this.element.offsetHeight;
      this.onCommit(l, a), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
    }, this.handleKeyDown = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !0);
    }, this.handleKeyUp = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !1);
    }, this.node = t.node, this.editor = t.editor, this.element = t.element, this.element.draggable = !1, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, !((e = t.options) === null || e === void 0) && e.min && (this.minSize = {
      ...this.minSize,
      ...t.options.min
    }), !((n = t.options) === null || n === void 0) && n.max && (this.maxSize = t.options.max), !(t == null || (i = t.options) === null || i === void 0) && i.directions && (this.directions = t.options.directions), !((r = t.options) === null || r === void 0) && r.preserveAspectRatio && (this.preserveAspectRatio = t.options.preserveAspectRatio), !((o = t.options) === null || o === void 0) && o.className && (this.classNames = {
      container: t.options.className.container || "",
      wrapper: t.options.className.wrapper || "",
      handle: t.options.className.handle || "",
      resizing: t.options.className.resizing || ""
    }), !((s = t.options) === null || s === void 0) && s.createCustomHandle && (this.createCustomHandle = t.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate);
  }
  /**
  * Returns the top-level DOM node that should be placed in the editor.
  *
  * This is required by the ProseMirror NodeView interface. The container
  * includes the wrapper, handles, and the actual content element.
  *
  * @returns The container element to be inserted into the editor
  */
  get dom() {
    return this.container;
  }
  get contentDOM() {
    var t;
    return (t = this.contentElement) !== null && t !== void 0 ? t : null;
  }
  /**
  * Called when the node's content or attributes change.
  *
  * Updates the internal node reference. If a custom `onUpdate` callback
  * was provided, it will be called to handle additional update logic.
  *
  * @param node - The new/updated node
  * @param decorations - Node decorations
  * @param innerDecorations - Inner decorations
  * @returns `false` if the node type has changed (requires full rebuild), otherwise the result of `onUpdate` or `true`
  */
  update(t, e, n) {
    return t.type !== this.node.type ? !1 : (this.node = t, this.onUpdate ? this.onUpdate(t, e, n) : !0);
  }
  /**
  * Cleanup method called when the node view is being removed.
  *
  * Removes all event listeners to prevent memory leaks. This is required
  * by the ProseMirror NodeView interface. If a resize is active when
  * destroy is called, it will be properly cancelled.
  */
  destroy() {
    this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.editor.off("update", this.handleEditorUpdate), this.container.remove();
  }
  /**
  * Creates the outer container element.
  *
  * The container is the top-level element returned by the NodeView and
  * wraps the entire resizable node. It's set up with flexbox to handle
  * alignment and includes data attributes for styling and identification.
  *
  * @returns The container element
  */
  createContainer() {
    const t = document.createElement("div");
    return t.dataset.resizeContainer = "", t.dataset.node = this.node.type.name, t.style.display = this.node.type.isInline ? "inline-flex" : "flex", this.classNames.container && (t.className = this.classNames.container), t.appendChild(this.wrapper), t;
  }
  /**
  * Creates the wrapper element that contains the content and handles.
  *
  * The wrapper uses relative positioning so that resize handles can be
  * positioned absolutely within it. This is the direct parent of the
  * content element being made resizable.
  *
  * @returns The wrapper element
  */
  createWrapper() {
    const t = document.createElement("div");
    return t.style.position = "relative", t.style.display = "block", t.dataset.resizeWrapper = "", this.classNames.wrapper && (t.className = this.classNames.wrapper), t.appendChild(this.element), t;
  }
  /**
  * Creates a resize handle element for a specific direction.
  *
  * Each handle is absolutely positioned and includes a data attribute
  * identifying its direction for styling purposes.
  *
  * @param direction - The resize direction for this handle
  * @returns The handle element
  */
  createHandle(t) {
    const e = document.createElement("div");
    return e.dataset.resizeHandle = t, e.style.position = "absolute", this.classNames.handle && (e.className = this.classNames.handle), e;
  }
  /**
  * Positions a handle element according to its direction.
  *
  * Corner handles (e.g., 'top-left') are positioned at the intersection
  * of two edges. Edge handles (e.g., 'top') span the full width or height.
  *
  * @param handle - The handle element to position
  * @param direction - The direction determining the position
  */
  positionHandle(t, e) {
    const n = e.includes("top"), i = e.includes("bottom"), r = e.includes("left"), o = e.includes("right");
    n && (t.style.top = "0"), i && (t.style.bottom = "0"), r && (t.style.left = "0"), o && (t.style.right = "0"), (e === "top" || e === "bottom") && (t.style.left = "0", t.style.right = "0"), (e === "left" || e === "right") && (t.style.top = "0", t.style.bottom = "0");
  }
  /**
  * Creates and attaches all resize handles to the wrapper.
  *
  * Iterates through the configured directions, creates a handle for each,
  * positions it, attaches the mousedown listener, and appends it to the DOM.
  */
  attachHandles() {
    this.directions.forEach((t) => {
      let e;
      this.createCustomHandle ? e = this.createCustomHandle(t) : e = this.createHandle(t), e instanceof HTMLElement || (console.warn(`[ResizableNodeView] createCustomHandle("${t}") did not return an HTMLElement. Falling back to default handle.`), e = this.createHandle(t)), this.createCustomHandle || this.positionHandle(e, t), e.addEventListener("mousedown", (n) => this.handleResizeStart(n, t)), e.addEventListener("touchstart", (n) => this.handleResizeStart(n, t)), this.handleMap.set(t, e), this.wrapper.appendChild(e);
    });
  }
  /**
  * Removes all resize handles from the wrapper.
  *
  * Cleans up the handle map and removes each handle element from the DOM.
  */
  removeHandles() {
    this.handleMap.forEach((t) => t.remove()), this.handleMap.clear();
  }
  /**
  * Applies initial sizing from node attributes to the element.
  *
  * If width/height attributes exist on the node, they're applied to the element.
  * Otherwise, the element's natural/current dimensions are measured. The aspect
  * ratio is calculated for later use in aspect-ratio-preserving resizes.
  */
  applyInitialSize() {
    const t = this.node.attrs.width, e = this.node.attrs.height;
    t ? (this.element.style.width = `${t}px`, this.initialWidth = t) : this.initialWidth = this.element.offsetWidth, e ? (this.element.style.height = `${e}px`, this.initialHeight = e) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight);
  }
  /**
  * Initiates a resize operation when a handle is clicked.
  *
  * Captures the starting mouse position and element dimensions, sets up
  * the resize state, adds the resizing class and state attribute, and
  * attaches document-level listeners for mouse movement and keyboard input.
  *
  * @param event - The mouse down event
  * @param direction - The direction of the handle being dragged
  */
  handleResizeStart(t, e) {
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, Gk(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  handleResize(t, e) {
    if (!this.activeHandle) return;
    const n = this.preserveAspectRatio || this.isShiftKeyPressed, { width: i, height: r } = this.calculateNewDimensions(this.activeHandle, t, e), o = this.applyConstraints(i, r, n);
    this.element.style.width = `${o.width}px`, this.element.style.height = `${o.height}px`, this.onResize && this.onResize(o.width, o.height);
  }
  /**
  * Calculates new dimensions based on mouse delta and resize direction.
  *
  * Takes the starting dimensions and applies the mouse movement delta
  * according to the handle direction. For corner handles, both dimensions
  * are affected. For edge handles, only one dimension changes. If aspect
  * ratio should be preserved, delegates to applyAspectRatio.
  *
  * @param direction - The active resize handle direction
  * @param deltaX - Horizontal mouse movement since resize start
  * @param deltaY - Vertical mouse movement since resize start
  * @returns The calculated width and height
  */
  calculateNewDimensions(t, e, n) {
    let i = this.startWidth, r = this.startHeight;
    const o = t.includes("right"), s = t.includes("left"), l = t.includes("bottom"), a = t.includes("top");
    return o ? i = this.startWidth + e : s && (i = this.startWidth - e), l ? r = this.startHeight + n : a && (r = this.startHeight - n), (t === "right" || t === "left") && (i = this.startWidth + (o ? e : -e)), (t === "top" || t === "bottom") && (r = this.startHeight + (l ? n : -n)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(i, r, t) : {
      width: i,
      height: r
    };
  }
  /**
  * Applies min/max constraints to dimensions.
  *
  * When aspect ratio is NOT preserved, constraints are applied independently
  * to width and height. When aspect ratio IS preserved, constraints are
  * applied while maintaining the aspect ratio—if one dimension hits a limit,
  * the other is recalculated proportionally.
  *
  * This ensures that aspect ratio is never broken when constrained.
  *
  * @param width - The unconstrained width
  * @param height - The unconstrained height
  * @param preserveAspectRatio - Whether to maintain aspect ratio while constraining
  * @returns The constrained dimensions
  */
  applyConstraints(t, e, n) {
    var i, r;
    if (!n) {
      var o, s;
      let c = Math.max(this.minSize.width, t), d = Math.max(this.minSize.height, e);
      return !((o = this.maxSize) === null || o === void 0) && o.width && (c = Math.min(this.maxSize.width, c)), !((s = this.maxSize) === null || s === void 0) && s.height && (d = Math.min(this.maxSize.height, d)), {
        width: c,
        height: d
      };
    }
    let l = t, a = e;
    return l < this.minSize.width && (l = this.minSize.width, a = l / this.aspectRatio), a < this.minSize.height && (a = this.minSize.height, l = a * this.aspectRatio), !((i = this.maxSize) === null || i === void 0) && i.width && l > this.maxSize.width && (l = this.maxSize.width, a = l / this.aspectRatio), !((r = this.maxSize) === null || r === void 0) && r.height && a > this.maxSize.height && (a = this.maxSize.height, l = a * this.aspectRatio), {
      width: l,
      height: a
    };
  }
  /**
  * Adjusts dimensions to maintain the original aspect ratio.
  *
  * For horizontal handles (left/right), uses width as the primary dimension
  * and calculates height from it. For vertical handles (top/bottom), uses
  * height as primary and calculates width. For corner handles, uses width
  * as the primary dimension.
  *
  * @param width - The new width
  * @param height - The new height
  * @param direction - The active resize direction
  * @returns Dimensions adjusted to preserve aspect ratio
  */
  applyAspectRatio(t, e, n) {
    const i = n === "left" || n === "right", r = n === "top" || n === "bottom";
    return i ? {
      width: t,
      height: t / this.aspectRatio
    } : r ? {
      width: e * this.aspectRatio,
      height: e
    } : {
      width: t,
      height: t / this.aspectRatio
    };
  }
}, be = class Mm extends dc {
  constructor(...e) {
    super(...e), this.type = "node";
  }
  /**
  * Create a new Node instance
  * @param config - Node configuration object or a function that returns a configuration object
  */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Mm(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Xk = class {
  constructor(t, e, n) {
    this.isDragging = !1, this.component = t, this.editor = e.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...n
    }, this.extension = e.extension, this.node = e.node, this.decorations = e.decorations, this.innerDecorations = e.innerDecorations, this.view = e.view, this.HTMLAttributes = e.HTMLAttributes, this.getPos = () => {
      try {
        return e.getPos();
      } catch {
        return;
      }
    }, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(t) {
    var e, n;
    const { view: i } = this.editor, r = t.target, o = r.nodeType === 3 ? (e = r.parentElement) === null || e === void 0 ? void 0 : e.closest("[data-drag-handle]") : r.closest("[data-drag-handle]");
    if (!this.dom || !((n = this.contentDOM) === null || n === void 0) && n.contains(r) || !o) return;
    let s = 0, l = 0;
    if (this.dom !== o) {
      var a, c, d, u;
      const b = this.dom.getBoundingClientRect(), v = o.getBoundingClientRect(), w = (a = t.offsetX) !== null && a !== void 0 ? a : (c = t.nativeEvent) === null || c === void 0 ? void 0 : c.offsetX, x = (d = t.offsetY) !== null && d !== void 0 ? d : (u = t.nativeEvent) === null || u === void 0 ? void 0 : u.offsetY;
      s = v.x - b.x + w, l = v.y - b.y + x;
    }
    const f = this.dom.cloneNode(!0);
    try {
      const b = this.dom.getBoundingClientRect();
      f.style.width = `${Math.round(b.width)}px`, f.style.height = `${Math.round(b.height)}px`, f.style.boxSizing = "border-box", f.style.pointerEvents = "none";
    } catch {
    }
    let h = null;
    try {
      var p;
      h = document.createElement("div"), h.style.position = "absolute", h.style.top = "-9999px", h.style.left = "-9999px", h.style.pointerEvents = "none", h.appendChild(f), document.body.appendChild(h), (p = t.dataTransfer) === null || p === void 0 || p.setDragImage(f, s, l);
    } finally {
      h && setTimeout(() => {
        try {
          h?.remove();
        } catch {
        }
      }, 0);
    }
    const m = this.getPos();
    if (typeof m != "number") return;
    const g = z.create(i.state.doc, m), y = i.state.tr.setSelection(g);
    i.dispatch(y);
  }
  stopEvent(t) {
    var e;
    if (!this.dom) return !1;
    if (typeof this.options.stopEvent == "function") return this.options.stopEvent({ event: t });
    const n = t.target;
    if (!(this.dom.contains(n) && !(!((e = this.contentDOM) === null || e === void 0) && e.contains(n)))) return !1;
    const i = t.type.startsWith("drag"), r = t.type === "dragover" || t.type === "dragenter", o = t.type === "drop";
    if (([
      "INPUT",
      "BUTTON",
      "SELECT",
      "TEXTAREA"
    ].includes(n.tagName) || n.isContentEditable) && !o && !i) return !0;
    const { isEditable: s } = this.editor, { isDragging: l } = this, a = !!this.node.type.spec.draggable, c = z.isSelectable(this.node), d = t.type === "copy", u = t.type === "paste", f = t.type === "cut", h = t.type === "mousedown";
    if (!a && c && i && t.target === this.dom && t.preventDefault(), a && i && !l && t.target === this.dom)
      return t.preventDefault(), !1;
    if (a && s && !l && h) {
      const p = n.closest("[data-drag-handle]");
      p && (this.dom === p || this.dom.contains(p)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("drop", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("mouseup", () => {
        this.isDragging = !1;
      }, { once: !0 }));
    }
    return !(l || r || o || d || u || f || h && c);
  }
  /**
  * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
  * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
  * @return `true` if it can safely be ignored.
  */
  ignoreMutation(t) {
    return this.dom ? this.contentDOM ? typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: t }) : this.node.isLeaf || this.node.isAtom ? !0 : t.type === "selection" || this.contentDOM.contains(t.target) && t.type === "childList" && (pr() || Xl()) && this.editor.isFocused && [...Array.from(t.addedNodes), ...Array.from(t.removedNodes)].every((e) => e.isContentEditable) ? !1 : this.contentDOM === t.target && t.type === "attributes" ? !0 : !this.contentDOM.contains(t.target) : t.type !== "selection" : !0;
  }
  /**
  * Update the attributes of the prosemirror node.
  */
  updateAttributes(t) {
    this.editor.commands.command(({ tr: e }) => {
      const n = this.getPos();
      return typeof n != "number" ? !1 : (e.setNodeMarkup(n, void 0, {
        ...this.node.attrs,
        ...t
      }), !0);
    });
  }
  /**
  * Delete the node.
  */
  deleteNode() {
    const t = this.getPos();
    if (typeof t != "number") return;
    const e = t + this.node.nodeSize;
    this.editor.commands.deleteRange({
      from: t,
      to: e
    });
  }
};
function Ut(t) {
  return new xm({
    find: t.find,
    handler: ({ state: e, range: n, match: i, pasteEvent: r }) => {
      const o = ee(t.getAttributes, void 0, i, r);
      if (o === !1 || o === null) return null;
      const { tr: s } = e, l = i[i.length - 1], a = i[0];
      let c = n.to;
      if (l) {
        const d = a.search(/\S/), u = n.from + a.indexOf(l), f = u + l.length;
        if (Hs(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((p) => p === t.type && p !== h.mark.type)).filter((h) => h.to > u).length) return null;
        f < n.to && s.delete(f, n.to), u > n.from && s.delete(n.from + d, u), c = n.from + d + l.length, s.addMark(n.from + d, c, t.type.create(o || {})), i.index !== void 0 && i.input !== void 0 && i.index + i[0].length >= i.input.length || s.removeStoredMark(t.type);
      }
    }
  });
}
function du(t) {
  return K1((e, n) => ({
    get() {
      return e(), t;
    },
    set(i) {
      t = i, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
var Zk = class extends qk {
  constructor(t = {}) {
    return super(t), this.contentComponent = null, this.appContext = null, this.reactiveState = du(this.view.state), this.reactiveExtensionStorage = du(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
      this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), th(this);
  }
  get state() {
    var t;
    return (t = this.reactiveState) === null || t === void 0 || t.value, super.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
  * Register a ProseMirror plugin.
  */
  registerPlugin(t, e) {
    const n = super.registerPlugin(t, e);
    return this.reactiveState && (this.reactiveState.value = n), n;
  }
  /**
  * Unregister a ProseMirror plugin.
  */
  unregisterPlugin(t) {
    const e = super.unregisterPlugin(t);
    return this.reactiveState && e && (this.reactiveState.value = e), e;
  }
};
const Yk = ne({
  name: "EditorContent",
  props: { editor: {
    default: null,
    type: Object
  } },
  setup(t) {
    const e = Y(), n = ys();
    return Gn(() => {
      const i = t.editor;
      i && i.options.element && e.value && nh(() => {
        var r;
        if (!e.value || !(!((r = i.view.dom) === null || r === void 0) && r.parentNode)) return;
        const o = A(e.value);
        e.value.append(...i.view.dom.parentNode.childNodes), i.view.updateRoot(), i.contentComponent = n.ctx._, n && (i.appContext = {
          ...n.appContext,
          provides: n.provides
        }), i.setOptions({ element: o }), i.createNodeViews();
      });
    }), Va(() => {
      const i = t.editor;
      i && (i.contentComponent = null, i.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return qn("div", { ref: (t) => {
      this.rootEl = t;
    } });
  }
});
ne({
  name: "NodeViewContent",
  props: { as: {
    type: String,
    default: "div"
  } },
  inject: { nodeViewContentRef: { default: void 0 } },
  mounted() {
    const t = this.nodeViewContentRef;
    t && this.$el && t(this.$el);
  },
  beforeUnmount() {
    const t = this.nodeViewContentRef;
    t && t(null);
  },
  render() {
    return qn(this.as, {
      style: { whiteSpace: "pre-wrap" },
      "data-node-view-content": ""
    });
  }
});
const Am = ne({
  name: "NodeViewWrapper",
  props: { as: {
    type: String,
    default: "div"
  } },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var t, e;
    return qn(this.as, {
      class: this.decorationClasses,
      style: { whiteSpace: "normal" },
      "data-node-view-wrapper": "",
      onDragstart: this.onDragStart
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
var Qk = class {
  constructor(t, { props: e = {}, editor: n }) {
    this.destroyed = !1, this.editor = n, this.component = th(t), this.el = document.createElement("div"), this.props = rr(e), this.renderedComponent = this.renderComponent();
  }
  get element() {
    return this.renderedComponent.el;
  }
  get ref() {
    var t, e;
    return !((t = this.renderedComponent.vNode) === null || t === void 0 || (t = t.component) === null || t === void 0) && t.exposed ? this.renderedComponent.vNode.component.exposed : (e = this.renderedComponent.vNode) === null || e === void 0 || (e = e.component) === null || e === void 0 ? void 0 : e.proxy;
  }
  renderComponent() {
    if (this.destroyed) return this.renderedComponent;
    let t = qn(this.component, this.props);
    return this.editor.appContext && (t.appContext = this.editor.appContext), typeof document < "u" && this.el && zc(t, this.el), {
      vNode: t,
      destroy: () => {
        this.el && zc(null, this.el), this.el = null, t = null;
      },
      el: this.el ? this.el.firstElementChild : null
    };
  }
  updateProps(t = {}) {
    this.destroyed || (Object.entries(t).forEach(([e, n]) => {
      this.props[e] = n;
    }), this.renderComponent());
  }
  destroy() {
    this.destroyed || (this.destroyed = !0, this.renderedComponent.destroy());
  }
};
ne({
  name: "MarkViewContent",
  props: { as: {
    type: String,
    default: "span"
  } },
  render() {
    return qn(this.as, {
      style: { whiteSpace: "inherit" },
      "data-mark-view-content": ""
    });
  }
});
const Tm = {
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
var ex = class extends Xk {
  constructor(t, e, n) {
    super(t, e, n), this.cachedExtensionWithSyncedStorage = null, this.handlePositionUpdate = () => {
      const i = this.getPos();
      typeof i != "number" || i === this.currentPos || (this.currentPos = i, this.renderer.updateProps({ getPos: () => this.getPos() }));
    }, this.options.trackNodeViewPosition && this.editor.on("update", this.handlePositionUpdate);
  }
  /**
  * Returns a proxy of the extension that redirects storage access to the editor's mutable storage.
  * This preserves the original prototype chain (instanceof checks, methods like configure/extend work).
  * Cached to avoid proxy creation on every update.
  */
  get extensionWithSyncedStorage() {
    if (!this.cachedExtensionWithSyncedStorage) {
      const t = this.editor, e = this.extension;
      this.cachedExtensionWithSyncedStorage = new Proxy(e, { get(n, i, r) {
        if (i === "storage") {
          var o;
          return (o = t.storage[e.name]) !== null && o !== void 0 ? o : {};
        }
        return Reflect.get(n, i, r);
      } });
    }
    return this.cachedExtensionWithSyncedStorage;
  }
  mount() {
    const t = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      extension: this.extensionWithSyncedStorage,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (r = {}) => this.updateAttributes(r),
      deleteNode: () => this.deleteNode()
    }, e = t, n = this.onDragStart.bind(this);
    this.decorationClasses = Y(this.getDecorationClasses());
    const i = ne({
      extends: { ...this.component },
      props: Object.keys(t),
      template: this.component.template,
      setup: (r) => {
        var o, s;
        return lo("onDragStart", n), lo("decorationClasses", this.decorationClasses), lo("nodeViewContentRef", (l) => {
          if (!(!l || l === this.contentDOMElement)) {
            if (this.contentDOMElement) for (; this.contentDOMElement.firstChild; ) l.appendChild(this.contentDOMElement.firstChild);
            this.contentDOMElement = l;
          }
        }), (o = (s = this.component).setup) === null || o === void 0 ? void 0 : o.call(s, r, { expose: () => {
        } });
      },
      __scopeId: this.component.__scopeId,
      __cssModules: this.component.__cssModules,
      __name: this.component.__name,
      __file: this.component.__file
    });
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.currentPos = this.getPos(), this.node.isLeaf || (this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement.style.whiteSpace = "inherit", this.contentDOMElement.dataset.nodeViewContentVue = ""), this.renderer = new Qk(i, {
      editor: this.editor,
      props: e
    });
  }
  /**
  * Return the DOM element.
  * This is the element that will be used to display the node view.
  */
  get dom() {
    if (!this.renderer.element || !this.renderer.element.hasAttribute("data-node-view-wrapper")) throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  /**
  * Return the content DOM element.
  * This is the element that will be used to display the rich-text content of the node.
  */
  get contentDOM() {
    return this.node.isLeaf ? null : this.contentDOMElement;
  }
  /**
  * On editor selection update, check if the node is selected.
  * If it is, call `selectNode`, otherwise call `deselectNode`.
  */
  handleSelectionUpdate() {
    const t = this.getPos();
    if (typeof t == "number")
      if (Sw({
        selection: this.editor.state.selection,
        pos: t,
        nodeSize: this.node.nodeSize,
        selectedOnTextSelection: this.options.selectedOnTextSelection
      })) {
        if (this.renderer.props.selected) return;
        this.selectNode();
      } else {
        if (!this.renderer.props.selected) return;
        this.deselectNode();
      }
  }
  /**
  * On update, update the React component.
  * To prevent unnecessary updates, the `update` option can be used.
  */
  update(t, e, n) {
    const i = (o) => {
      this.decorationClasses.value = this.getDecorationClasses(), this.renderer.updateProps(o);
    };
    if (typeof this.options.update == "function") {
      const o = this.node, s = this.decorations, l = this.innerDecorations;
      return this.node = t, this.decorations = e, this.innerDecorations = n, this.options.update({
        oldNode: o,
        oldDecorations: s,
        newNode: t,
        newDecorations: e,
        oldInnerDecorations: l,
        innerDecorations: n,
        updateProps: () => i({
          node: t,
          decorations: e,
          innerDecorations: n,
          extension: this.extensionWithSyncedStorage
        })
      });
    }
    if (t.type !== this.node.type) return !1;
    if (t === this.node)
      return this.node = t, this.decorations = e, this.innerDecorations = n, this.decorationClasses.value = this.getDecorationClasses(), !0;
    this.node = t, this.decorations = e, this.innerDecorations = n, this.currentPos = this.getPos();
    const r = {
      node: t,
      decorations: e,
      innerDecorations: n,
      extension: this.extensionWithSyncedStorage
    };
    return this.options.trackNodeViewPosition && (r.getPos = () => this.getPos()), i(r), !0;
  }
  /**
  * Select the node.
  * Add the `selected` prop and the `ProseMirror-selectednode` class.
  */
  selectNode() {
    this.renderer.updateProps({ selected: !0 }), this.renderer.element && this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
  * Deselect the node.
  * Remove the `selected` prop and the `ProseMirror-selectednode` class.
  */
  deselectNode() {
    this.renderer.updateProps({ selected: !1 }), this.renderer.element && this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  getDecorationClasses() {
    return this.decorations.flatMap((t) => t.type.attrs.class).join(" ");
  }
  destroy() {
    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.options.trackNodeViewPosition && this.editor.off("update", this.handlePositionUpdate), this.contentDOMElement = null;
  }
};
function Em(t, e) {
  return (n) => n.editor.contentComponent ? new ex(typeof t == "function" && "__vccOpts" in t ? t.__vccOpts : t, n, e) : {};
}
const Lm = "en", ta = 200, tx = ta - 80, uu = 20, fu = 1e5, hu = 16, Ur = 6, jr = 10, Kr = 2, nx = [
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
], na = "Roboto", ix = [
  { title: "editor.default", value: na, divider: !0, default: !0 },
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
], Oo = "default", pu = [
  { title: "editor.default", value: Oo, default: !0 }
], rx = [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72], ti = "default";
var Ho = /* @__PURE__ */ ((t) => (t[t["size-small"] = 200] = "size-small", t[t["size-medium"] = 500] = "size-medium", t["size-large"] = "100%", t))(Ho || {}), Ro = /* @__PURE__ */ ((t) => (t[t["size-small"] = 480] = "size-small", t[t["size-medium"] = 640] = "size-medium", t["size-large"] = "100%", t))(Ro || {});
const ox = {
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
}, po = rr({
  extensions: []
});
function sx(t) {
  po.defaultLang = t.defaultLang, po.defaultMarkdownTheme = t.defaultMarkdownTheme, po.extensions = t.extensions ?? [];
}
function Vs() {
  return {
    state: po
  };
}
var Om = typeof global == "object" && global && global.Object === Object && global, lx = typeof self == "object" && self && self.Object === Object && self, St = Om || lx || Function("return this")(), bt = St.Symbol, Hm = Object.prototype, ax = Hm.hasOwnProperty, cx = Hm.toString, Ii = bt ? bt.toStringTag : void 0;
function dx(t) {
  var e = ax.call(t, Ii), n = t[Ii];
  try {
    t[Ii] = void 0;
    var i = !0;
  } catch {
  }
  var r = cx.call(t);
  return i && (e ? t[Ii] = n : delete t[Ii]), r;
}
var ux = Object.prototype, fx = ux.toString;
function hx(t) {
  return fx.call(t);
}
var px = "[object Null]", mx = "[object Undefined]", mu = bt ? bt.toStringTag : void 0;
function Oi(t) {
  return t == null ? t === void 0 ? mx : px : mu && mu in Object(t) ? dx(t) : hx(t);
}
function Bn(t) {
  return t != null && typeof t == "object";
}
var gx = "[object Symbol]";
function Ns(t) {
  return typeof t == "symbol" || Bn(t) && Oi(t) == gx;
}
function Rm(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = Array(i); ++n < i; )
    r[n] = e(t[n], n, t);
  return r;
}
var vt = Array.isArray, gu = bt ? bt.prototype : void 0, yu = gu ? gu.toString : void 0;
function Vm(t) {
  if (typeof t == "string")
    return t;
  if (vt(t))
    return Rm(t, Vm) + "";
  if (Ns(t))
    return yu ? yu.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var yx = /\s/;
function bx(t) {
  for (var e = t.length; e-- && yx.test(t.charAt(e)); )
    ;
  return e;
}
var vx = /^\s+/;
function wx(t) {
  return t && t.slice(0, bx(t) + 1).replace(vx, "");
}
function Fn(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var bu = NaN, kx = /^[-+]0x[0-9a-f]+$/i, xx = /^0b[01]+$/i, Sx = /^0o[0-7]+$/i, Cx = parseInt;
function vu(t) {
  if (typeof t == "number")
    return t;
  if (Ns(t))
    return bu;
  if (Fn(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Fn(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = wx(t);
  var n = xx.test(t);
  return n || Sx.test(t) ? Cx(t.slice(2), n ? 2 : 8) : kx.test(t) ? bu : +t;
}
function uc(t) {
  return t;
}
var Mx = "[object AsyncFunction]", Ax = "[object Function]", Tx = "[object GeneratorFunction]", Ex = "[object Proxy]";
function Nm(t) {
  if (!Fn(t))
    return !1;
  var e = Oi(t);
  return e == Ax || e == Tx || e == Mx || e == Ex;
}
var dl = St["__core-js_shared__"], wu = (function() {
  var t = /[^.]+$/.exec(dl && dl.keys && dl.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Lx(t) {
  return !!wu && wu in t;
}
var Ox = Function.prototype, Hx = Ox.toString;
function Jn(t) {
  if (t != null) {
    try {
      return Hx.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Rx = /[\\^$.*+?()[\]{}|]/g, Vx = /^\[object .+?Constructor\]$/, Nx = Function.prototype, Ix = Object.prototype, Dx = Nx.toString, Px = Ix.hasOwnProperty, _x = RegExp(
  "^" + Dx.call(Px).replace(Rx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zx(t) {
  if (!Fn(t) || Lx(t))
    return !1;
  var e = Nm(t) ? _x : Vx;
  return e.test(Jn(t));
}
function $x(t, e) {
  return t?.[e];
}
function Xn(t, e) {
  var n = $x(t, e);
  return zx(n) ? n : void 0;
}
var ia = Xn(St, "WeakMap");
function Bx(t, e, n) {
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
var Fx = 800, Wx = 16, Ux = Date.now;
function jx(t) {
  var e = 0, n = 0;
  return function() {
    var i = Ux(), r = Wx - (i - n);
    if (n = i, r > 0) {
      if (++e >= Fx)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Kx(t) {
  return function() {
    return t;
  };
}
var ku = (function() {
  try {
    var t = Xn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), qx = ku ? function(t, e) {
  return ku(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kx(e),
    writable: !0
  });
} : uc, Gx = jx(qx);
function Jx(t, e, n, i) {
  for (var r = t.length, o = n + -1; ++o < r; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function Xx(t) {
  return t !== t;
}
function Zx(t, e, n) {
  for (var i = n - 1, r = t.length; ++i < r; )
    if (t[i] === e)
      return i;
  return -1;
}
function Yx(t, e, n) {
  return e === e ? Zx(t, e, n) : Jx(t, Xx, n);
}
function Qx(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && Yx(t, e, 0) > -1;
}
var eS = 9007199254740991, tS = /^(?:0|[1-9]\d*)$/;
function Im(t, e) {
  var n = typeof t;
  return e = e ?? eS, !!e && (n == "number" || n != "symbol" && tS.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Dm(t, e) {
  return t === e || t !== t && e !== e;
}
var xu = Math.max;
function nS(t, e, n) {
  return e = xu(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, r = -1, o = xu(i.length - e, 0), s = Array(o); ++r < o; )
      s[r] = i[e + r];
    r = -1;
    for (var l = Array(e + 1); ++r < e; )
      l[r] = i[r];
    return l[e] = n(s), Bx(t, this, l);
  };
}
function iS(t, e) {
  return Gx(nS(t, e, uc), t + "");
}
var rS = 9007199254740991;
function fc(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= rS;
}
function Pm(t) {
  return t != null && fc(t.length) && !Nm(t);
}
var oS = Object.prototype;
function sS(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || oS;
  return t === n;
}
function lS(t, e) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = e(n);
  return i;
}
var aS = "[object Arguments]";
function Su(t) {
  return Bn(t) && Oi(t) == aS;
}
var _m = Object.prototype, cS = _m.hasOwnProperty, dS = _m.propertyIsEnumerable, hc = Su(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Su : function(t) {
  return Bn(t) && cS.call(t, "callee") && !dS.call(t, "callee");
};
function uS() {
  return !1;
}
var zm = typeof exports == "object" && exports && !exports.nodeType && exports, Cu = zm && typeof module == "object" && module && !module.nodeType && module, fS = Cu && Cu.exports === zm, Mu = fS ? St.Buffer : void 0, hS = Mu ? Mu.isBuffer : void 0, ra = hS || uS, pS = "[object Arguments]", mS = "[object Array]", gS = "[object Boolean]", yS = "[object Date]", bS = "[object Error]", vS = "[object Function]", wS = "[object Map]", kS = "[object Number]", xS = "[object Object]", SS = "[object RegExp]", CS = "[object Set]", MS = "[object String]", AS = "[object WeakMap]", TS = "[object ArrayBuffer]", ES = "[object DataView]", LS = "[object Float32Array]", OS = "[object Float64Array]", HS = "[object Int8Array]", RS = "[object Int16Array]", VS = "[object Int32Array]", NS = "[object Uint8Array]", IS = "[object Uint8ClampedArray]", DS = "[object Uint16Array]", PS = "[object Uint32Array]", ae = {};
ae[LS] = ae[OS] = ae[HS] = ae[RS] = ae[VS] = ae[NS] = ae[IS] = ae[DS] = ae[PS] = !0;
ae[pS] = ae[mS] = ae[TS] = ae[gS] = ae[ES] = ae[yS] = ae[bS] = ae[vS] = ae[wS] = ae[kS] = ae[xS] = ae[SS] = ae[CS] = ae[MS] = ae[AS] = !1;
function _S(t) {
  return Bn(t) && fc(t.length) && !!ae[Oi(t)];
}
function $m(t) {
  return function(e) {
    return t(e);
  };
}
var Bm = typeof exports == "object" && exports && !exports.nodeType && exports, qi = Bm && typeof module == "object" && module && !module.nodeType && module, zS = qi && qi.exports === Bm, ul = zS && Om.process, Au = (function() {
  try {
    var t = qi && qi.require && qi.require("util").types;
    return t || ul && ul.binding && ul.binding("util");
  } catch {
  }
})(), Tu = Au && Au.isTypedArray, Fm = Tu ? $m(Tu) : _S, $S = Object.prototype, BS = $S.hasOwnProperty;
function FS(t, e) {
  var n = vt(t), i = !n && hc(t), r = !n && !i && ra(t), o = !n && !i && !r && Fm(t), s = n || i || r || o, l = s ? lS(t.length, String) : [], a = l.length;
  for (var c in t)
    BS.call(t, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Im(c, a))) && l.push(c);
  return l;
}
function WS(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var US = WS(Object.keys, Object), jS = Object.prototype, KS = jS.hasOwnProperty;
function qS(t) {
  if (!sS(t))
    return US(t);
  var e = [];
  for (var n in Object(t))
    KS.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Wm(t) {
  return Pm(t) ? FS(t) : qS(t);
}
var GS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, JS = /^\w*$/;
function pc(t, e) {
  if (vt(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ns(t) ? !0 : JS.test(t) || !GS.test(t) || e != null && t in Object(e);
}
var gr = Xn(Object, "create");
function XS() {
  this.__data__ = gr ? gr(null) : {}, this.size = 0;
}
function ZS(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var YS = "__lodash_hash_undefined__", QS = Object.prototype, eC = QS.hasOwnProperty;
function tC(t) {
  var e = this.__data__;
  if (gr) {
    var n = e[t];
    return n === YS ? void 0 : n;
  }
  return eC.call(e, t) ? e[t] : void 0;
}
var nC = Object.prototype, iC = nC.hasOwnProperty;
function rC(t) {
  var e = this.__data__;
  return gr ? e[t] !== void 0 : iC.call(e, t);
}
var oC = "__lodash_hash_undefined__";
function sC(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = gr && e === void 0 ? oC : e, this;
}
function Wn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Wn.prototype.clear = XS;
Wn.prototype.delete = ZS;
Wn.prototype.get = tC;
Wn.prototype.has = rC;
Wn.prototype.set = sC;
function lC() {
  this.__data__ = [], this.size = 0;
}
function Is(t, e) {
  for (var n = t.length; n--; )
    if (Dm(t[n][0], e))
      return n;
  return -1;
}
var aC = Array.prototype, cC = aC.splice;
function dC(t) {
  var e = this.__data__, n = Is(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : cC.call(e, n, 1), --this.size, !0;
}
function uC(t) {
  var e = this.__data__, n = Is(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function fC(t) {
  return Is(this.__data__, t) > -1;
}
function hC(t, e) {
  var n = this.__data__, i = Is(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function Kt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Kt.prototype.clear = lC;
Kt.prototype.delete = dC;
Kt.prototype.get = uC;
Kt.prototype.has = fC;
Kt.prototype.set = hC;
var yr = Xn(St, "Map");
function pC() {
  this.size = 0, this.__data__ = {
    hash: new Wn(),
    map: new (yr || Kt)(),
    string: new Wn()
  };
}
function mC(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ds(t, e) {
  var n = t.__data__;
  return mC(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function gC(t) {
  var e = Ds(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function yC(t) {
  return Ds(this, t).get(t);
}
function bC(t) {
  return Ds(this, t).has(t);
}
function vC(t, e) {
  var n = Ds(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function qt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
qt.prototype.clear = pC;
qt.prototype.delete = gC;
qt.prototype.get = yC;
qt.prototype.has = bC;
qt.prototype.set = vC;
var wC = "Expected a function";
function mc(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(wC);
  var n = function() {
    var i = arguments, r = e ? e.apply(this, i) : i[0], o = n.cache;
    if (o.has(r))
      return o.get(r);
    var s = t.apply(this, i);
    return n.cache = o.set(r, s) || o, s;
  };
  return n.cache = new (mc.Cache || qt)(), n;
}
mc.Cache = qt;
var kC = 500;
function xC(t) {
  var e = mc(t, function(i) {
    return n.size === kC && n.clear(), i;
  }), n = e.cache;
  return e;
}
var SC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, CC = /\\(\\)?/g, MC = xC(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(SC, function(n, i, r, o) {
    e.push(r ? o.replace(CC, "$1") : i || n);
  }), e;
});
function AC(t) {
  return t == null ? "" : Vm(t);
}
function Um(t, e) {
  return vt(t) ? t : pc(t, e) ? [t] : MC(AC(t));
}
function Ps(t) {
  if (typeof t == "string" || Ns(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function jm(t, e) {
  e = Um(e, t);
  for (var n = 0, i = e.length; t != null && n < i; )
    t = t[Ps(e[n++])];
  return n && n == i ? t : void 0;
}
function TC(t, e, n) {
  var i = t == null ? void 0 : jm(t, e);
  return i === void 0 ? n : i;
}
function Km(t, e) {
  for (var n = -1, i = e.length, r = t.length; ++n < i; )
    t[r + n] = e[n];
  return t;
}
var Eu = bt ? bt.isConcatSpreadable : void 0;
function EC(t) {
  return vt(t) || hc(t) || !!(Eu && t && t[Eu]);
}
function LC(t, e, n, i, r) {
  var o = -1, s = t.length;
  for (n || (n = EC), r || (r = []); ++o < s; ) {
    var l = t[o];
    n(l) && Km(r, l);
  }
  return r;
}
function OC() {
  this.__data__ = new Kt(), this.size = 0;
}
function HC(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function RC(t) {
  return this.__data__.get(t);
}
function VC(t) {
  return this.__data__.has(t);
}
var NC = 200;
function IC(t, e) {
  var n = this.__data__;
  if (n instanceof Kt) {
    var i = n.__data__;
    if (!yr || i.length < NC - 1)
      return i.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new qt(i);
  }
  return n.set(t, e), this.size = n.size, this;
}
function zt(t) {
  var e = this.__data__ = new Kt(t);
  this.size = e.size;
}
zt.prototype.clear = OC;
zt.prototype.delete = HC;
zt.prototype.get = RC;
zt.prototype.has = VC;
zt.prototype.set = IC;
function DC(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = 0, o = []; ++n < i; ) {
    var s = t[n];
    e(s, n, t) && (o[r++] = s);
  }
  return o;
}
function PC() {
  return [];
}
var _C = Object.prototype, zC = _C.propertyIsEnumerable, Lu = Object.getOwnPropertySymbols, $C = Lu ? function(t) {
  return t == null ? [] : (t = Object(t), DC(Lu(t), function(e) {
    return zC.call(t, e);
  }));
} : PC;
function BC(t, e, n) {
  var i = e(t);
  return vt(t) ? i : Km(i, n(t));
}
function Ou(t) {
  return BC(t, Wm, $C);
}
var oa = Xn(St, "DataView"), sa = Xn(St, "Promise"), la = Xn(St, "Set"), Hu = "[object Map]", FC = "[object Object]", Ru = "[object Promise]", Vu = "[object Set]", Nu = "[object WeakMap]", Iu = "[object DataView]", WC = Jn(oa), UC = Jn(yr), jC = Jn(sa), KC = Jn(la), qC = Jn(ia), tn = Oi;
(oa && tn(new oa(new ArrayBuffer(1))) != Iu || yr && tn(new yr()) != Hu || sa && tn(sa.resolve()) != Ru || la && tn(new la()) != Vu || ia && tn(new ia()) != Nu) && (tn = function(t) {
  var e = Oi(t), n = e == FC ? t.constructor : void 0, i = n ? Jn(n) : "";
  if (i)
    switch (i) {
      case WC:
        return Iu;
      case UC:
        return Hu;
      case jC:
        return Ru;
      case KC:
        return Vu;
      case qC:
        return Nu;
    }
  return e;
});
var Du = St.Uint8Array, GC = "__lodash_hash_undefined__";
function JC(t) {
  return this.__data__.set(t, GC), this;
}
function XC(t) {
  return this.__data__.has(t);
}
function br(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new qt(); ++e < n; )
    this.add(t[e]);
}
br.prototype.add = br.prototype.push = JC;
br.prototype.has = XC;
function ZC(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function qm(t, e) {
  return t.has(e);
}
var YC = 1, QC = 2;
function Gm(t, e, n, i, r, o) {
  var s = n & YC, l = t.length, a = e.length;
  if (l != a && !(s && a > l))
    return !1;
  var c = o.get(t), d = o.get(e);
  if (c && d)
    return c == e && d == t;
  var u = -1, f = !0, h = n & QC ? new br() : void 0;
  for (o.set(t, e), o.set(e, t); ++u < l; ) {
    var p = t[u], m = e[u];
    if (i)
      var g = s ? i(m, p, u, e, t, o) : i(p, m, u, t, e, o);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!ZC(e, function(y, b) {
        if (!qm(h, b) && (p === y || r(p, y, n, i, o)))
          return h.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === m || r(p, m, n, i, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), f;
}
function eM(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(i, r) {
    n[++e] = [r, i];
  }), n;
}
function tM(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(i) {
    n[++e] = i;
  }), n;
}
var nM = 1, iM = 2, rM = "[object Boolean]", oM = "[object Date]", sM = "[object Error]", lM = "[object Map]", aM = "[object Number]", cM = "[object RegExp]", dM = "[object Set]", uM = "[object String]", fM = "[object Symbol]", hM = "[object ArrayBuffer]", pM = "[object DataView]", Pu = bt ? bt.prototype : void 0, fl = Pu ? Pu.valueOf : void 0;
function mM(t, e, n, i, r, o, s) {
  switch (n) {
    case pM:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case hM:
      return !(t.byteLength != e.byteLength || !o(new Du(t), new Du(e)));
    case rM:
    case oM:
    case aM:
      return Dm(+t, +e);
    case sM:
      return t.name == e.name && t.message == e.message;
    case cM:
    case uM:
      return t == e + "";
    case lM:
      var l = eM;
    case dM:
      var a = i & nM;
      if (l || (l = tM), t.size != e.size && !a)
        return !1;
      var c = s.get(t);
      if (c)
        return c == e;
      i |= iM, s.set(t, e);
      var d = Gm(l(t), l(e), i, r, o, s);
      return s.delete(t), d;
    case fM:
      if (fl)
        return fl.call(t) == fl.call(e);
  }
  return !1;
}
var gM = 1, yM = Object.prototype, bM = yM.hasOwnProperty;
function vM(t, e, n, i, r, o) {
  var s = n & gM, l = Ou(t), a = l.length, c = Ou(e), d = c.length;
  if (a != d && !s)
    return !1;
  for (var u = a; u--; ) {
    var f = l[u];
    if (!(s ? f in e : bM.call(e, f)))
      return !1;
  }
  var h = o.get(t), p = o.get(e);
  if (h && p)
    return h == e && p == t;
  var m = !0;
  o.set(t, e), o.set(e, t);
  for (var g = s; ++u < a; ) {
    f = l[u];
    var y = t[f], b = e[f];
    if (i)
      var v = s ? i(b, y, f, e, t, o) : i(y, b, f, t, e, o);
    if (!(v === void 0 ? y === b || r(y, b, n, i, o) : v)) {
      m = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (m && !g) {
    var w = t.constructor, x = e.constructor;
    w != x && "constructor" in t && "constructor" in e && !(typeof w == "function" && w instanceof w && typeof x == "function" && x instanceof x) && (m = !1);
  }
  return o.delete(t), o.delete(e), m;
}
var wM = 1, _u = "[object Arguments]", zu = "[object Array]", qr = "[object Object]", kM = Object.prototype, $u = kM.hasOwnProperty;
function xM(t, e, n, i, r, o) {
  var s = vt(t), l = vt(e), a = s ? zu : tn(t), c = l ? zu : tn(e);
  a = a == _u ? qr : a, c = c == _u ? qr : c;
  var d = a == qr, u = c == qr, f = a == c;
  if (f && ra(t)) {
    if (!ra(e))
      return !1;
    s = !0, d = !1;
  }
  if (f && !d)
    return o || (o = new zt()), s || Fm(t) ? Gm(t, e, n, i, r, o) : mM(t, e, a, n, i, r, o);
  if (!(n & wM)) {
    var h = d && $u.call(t, "__wrapped__"), p = u && $u.call(e, "__wrapped__");
    if (h || p) {
      var m = h ? t.value() : t, g = p ? e.value() : e;
      return o || (o = new zt()), r(m, g, n, i, o);
    }
  }
  return f ? (o || (o = new zt()), vM(t, e, n, i, r, o)) : !1;
}
function _s(t, e, n, i, r) {
  return t === e ? !0 : t == null || e == null || !Bn(t) && !Bn(e) ? t !== t && e !== e : xM(t, e, n, i, _s, r);
}
var SM = 1, CM = 2;
function MM(t, e, n, i) {
  var r = n.length, o = r;
  if (t == null)
    return !o;
  for (t = Object(t); r--; ) {
    var s = n[r];
    if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t))
      return !1;
  }
  for (; ++r < o; ) {
    s = n[r];
    var l = s[0], a = t[l], c = s[1];
    if (s[2]) {
      if (a === void 0 && !(l in t))
        return !1;
    } else {
      var d = new zt(), u;
      if (!(u === void 0 ? _s(c, a, SM | CM, i, d) : u))
        return !1;
    }
  }
  return !0;
}
function Jm(t) {
  return t === t && !Fn(t);
}
function AM(t) {
  for (var e = Wm(t), n = e.length; n--; ) {
    var i = e[n], r = t[i];
    e[n] = [i, r, Jm(r)];
  }
  return e;
}
function Xm(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function TM(t) {
  var e = AM(t);
  return e.length == 1 && e[0][2] ? Xm(e[0][0], e[0][1]) : function(n) {
    return n === t || MM(n, t, e);
  };
}
function EM(t, e) {
  return t != null && e in Object(t);
}
function LM(t, e, n) {
  e = Um(e, t);
  for (var i = -1, r = e.length, o = !1; ++i < r; ) {
    var s = Ps(e[i]);
    if (!(o = t != null && n(t, s)))
      break;
    t = t[s];
  }
  return o || ++i != r ? o : (r = t == null ? 0 : t.length, !!r && fc(r) && Im(s, r) && (vt(t) || hc(t)));
}
function OM(t, e) {
  return t != null && LM(t, e, EM);
}
var HM = 1, RM = 2;
function VM(t, e) {
  return pc(t) && Jm(e) ? Xm(Ps(t), e) : function(n) {
    var i = TC(n, t);
    return i === void 0 && i === e ? OM(n, t) : _s(e, i, HM | RM);
  };
}
function NM(t) {
  return function(e) {
    return e?.[t];
  };
}
function IM(t) {
  return function(e) {
    return jm(e, t);
  };
}
function DM(t) {
  return pc(t) ? NM(Ps(t)) : IM(t);
}
function PM(t) {
  return typeof t == "function" ? t : t == null ? uc : typeof t == "object" ? vt(t) ? VM(t[0], t[1]) : TM(t) : DM(t);
}
var hl = function() {
  return St.Date.now();
}, _M = "Expected a function", zM = Math.max, $M = Math.min;
function BM(t, e, n) {
  var i, r, o, s, l, a, c = 0, d = !1, u = !1, f = !0;
  if (typeof t != "function")
    throw new TypeError(_M);
  e = vu(e) || 0, Fn(n) && (d = !!n.leading, u = "maxWait" in n, o = u ? zM(vu(n.maxWait) || 0, e) : o, f = "trailing" in n ? !!n.trailing : f);
  function h(k) {
    var S = i, M = r;
    return i = r = void 0, c = k, s = t.apply(M, S), s;
  }
  function p(k) {
    return c = k, l = setTimeout(y, e), d ? h(k) : s;
  }
  function m(k) {
    var S = k - a, M = k - c, O = e - S;
    return u ? $M(O, o - M) : O;
  }
  function g(k) {
    var S = k - a, M = k - c;
    return a === void 0 || S >= e || S < 0 || u && M >= o;
  }
  function y() {
    var k = hl();
    if (g(k))
      return b(k);
    l = setTimeout(y, m(k));
  }
  function b(k) {
    return l = void 0, f && i ? h(k) : (i = r = void 0, s);
  }
  function v() {
    l !== void 0 && clearTimeout(l), c = 0, i = a = r = l = void 0;
  }
  function w() {
    return l === void 0 ? s : b(hl());
  }
  function x() {
    var k = hl(), S = g(k);
    if (i = arguments, r = this, a = k, S) {
      if (l === void 0)
        return p(a);
      if (u)
        return clearTimeout(l), l = setTimeout(y, e), h(a);
    }
    return l === void 0 && (l = setTimeout(y, e)), s;
  }
  return x.cancel = v, x.flush = w, x;
}
function pl(t) {
  return Bn(t) && Pm(t);
}
var FM = 200;
function WM(t, e, n, i) {
  var r = -1, o = Qx, s = !0, l = t.length, a = [], c = e.length;
  if (!l)
    return a;
  n && (e = Rm(e, $m(n))), e.length >= FM && (o = qm, s = !1, e = new br(e));
  e:
    for (; ++r < l; ) {
      var d = t[r], u = n == null ? d : n(d);
      if (d = d !== 0 ? d : 0, s && u === u) {
        for (var f = c; f--; )
          if (e[f] === u)
            continue e;
        a.push(d);
      } else o(e, u, i) || a.push(d);
    }
  return a;
}
function UM(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
var jM = iS(function(t, e) {
  var n = UM(e);
  return pl(n) && (n = void 0), pl(t) ? WM(t, LC(e, 1, pl), PM(n)) : [];
});
function Bu(t, e) {
  return _s(t, e);
}
var KM = "Expected a function";
function Gi(t, e, n) {
  var i = !0, r = !0;
  if (typeof t != "function")
    throw new TypeError(KM);
  return Fn(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), BM(t, e, {
    leading: i,
    maxWait: e,
    trailing: r
  });
}
function qM(t, e, n) {
  return t < e ? e : t > n ? n : t;
}
const aa = (t) => typeof t == "number", hi = (t) => typeof t == "string", Ci = (t) => typeof t == "boolean", GM = (t) => typeof t == "function", Ji = (t, e = "px") => {
  if (!t) return t;
  const n = aa(t) ? String(t) : t, i = Number.parseFloat(n), r = n.match(/[a-zA-Z%]+$/), o = r ? r[0] : e;
  return Number.isNaN(i) ? t : i + o;
};
function JM(t, e) {
  const { extensions: n = [] } = t.extensionManager ?? {};
  return !!n.find((r) => r.name === e);
}
const XM = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "tel:"]);
function ZM(t) {
  let e;
  try {
    e = new URL(t, window.location.href);
  } catch {
    return null;
  }
  return XM.has(e.protocol) ? e.href : null;
}
function Zm(t, e) {
  const { state: n } = Vs(), i = j(() => Ci(A(t)) ? Oo : hi(n.defaultMarkdownTheme) && n.defaultMarkdownTheme ? n.defaultMarkdownTheme : Oo), r = j(() => ({
    [`markdown-theme-${A(i)}`]: !!hi(A(i))
  }));
  function o(l) {
    !Ci(A(t)) && A(t) !== l && e?.(l);
  }
  return Bt(i, (l) => o(l)), Bt(t, (l) => {
    l && hi(l) && n.defaultMarkdownTheme !== l && (n.defaultMarkdownTheme = l);
  }), n.defaultMarkdownTheme && o(n.defaultMarkdownTheme), {
    markdownThemeStyle: r
  };
}
function Ym(t) {
  return q1() ? (G1(t), !0) : !1;
}
const pi = /* @__PURE__ */ new WeakMap(), YM = (...t) => {
  var e;
  const n = t[0], i = (e = ys()) == null ? void 0 : e.proxy;
  if (i == null)
    throw new Error("injectLocal must be called in setup");
  return pi.has(i) && n in pi.get(i) ? pi.get(i)[n] : J1(...t);
}, QM = (t, e) => {
  var n;
  const i = (n = ys()) == null ? void 0 : n.proxy;
  if (i == null)
    throw new Error("provideLocal must be called in setup");
  pi.has(i) || pi.set(i, /* @__PURE__ */ Object.create(null));
  const r = pi.get(i);
  r[t] = e, lo(t, e);
};
function eA(t, e) {
  const n = Symbol(t.name || "InjectionState"), i = void 0;
  return [(...s) => {
    const l = t(...s);
    return QM(n, l), l;
  }, () => YM(n, i)];
}
function Qm(t) {
  return typeof t == "function" ? t() : A(t);
}
const eg = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const tA = Object.prototype.toString, nA = (t) => tA.call(t) === "[object Object]", iA = () => {
}, rA = eg ? window : void 0, oA = eg ? window.document : void 0;
function ca(t) {
  var e;
  const n = Qm(t);
  return (e = n?.$el) != null ? e : n;
}
function Fu(...t) {
  let e, n, i, r;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, i, r] = t, e = rA) : [e, n, i, r] = t, !e)
    return iA;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], s = () => {
    o.forEach((d) => d()), o.length = 0;
  }, l = (d, u, f, h) => (d.addEventListener(u, f, h), () => d.removeEventListener(u, f, h)), a = Bt(
    () => [ca(e), Qm(r)],
    ([d, u]) => {
      if (s(), !d)
        return;
      const f = nA(u) ? { ...u } : u;
      o.push(
        ...n.flatMap((h) => i.map((p) => l(d, h, p, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), s();
  };
  return Ym(c), c;
}
function sA() {
  const t = Y(!1), e = ys();
  return e && Na(() => {
    t.value = !0;
  }, e), t;
}
function lA(t) {
  const e = sA();
  return j(() => (e.value, !!t()));
}
const Wu = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function aA(t, e = {}) {
  const {
    document: n = oA,
    autoExit: i = !1
  } = e, r = j(() => {
    var y;
    return (y = ca(t)) != null ? y : n?.querySelector("html");
  }), o = Y(!1), s = j(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((y) => n && y in n || r.value && y in r.value)), l = j(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((y) => n && y in n || r.value && y in r.value)), a = j(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((y) => n && y in n || r.value && y in r.value)), c = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((y) => n && y in n), d = lA(() => r.value && n && s.value !== void 0 && l.value !== void 0 && a.value !== void 0), u = () => c ? n?.[c] === r.value : !1, f = () => {
    if (a.value) {
      if (n && n[a.value] != null)
        return n[a.value];
      {
        const y = r.value;
        if (y?.[a.value] != null)
          return !!y[a.value];
      }
    }
    return !1;
  };
  async function h() {
    if (!(!d.value || !o.value)) {
      if (l.value)
        if (n?.[l.value] != null)
          await n[l.value]();
        else {
          const y = r.value;
          y?.[l.value] != null && await y[l.value]();
        }
      o.value = !1;
    }
  }
  async function p() {
    if (!d.value || o.value)
      return;
    f() && await h();
    const y = r.value;
    s.value && y?.[s.value] != null && (await y[s.value](), o.value = !0);
  }
  async function m() {
    await (o.value ? h() : p());
  }
  const g = () => {
    const y = f();
    (!y || y && u()) && (o.value = y);
  };
  return Fu(n, Wu, g, !1), Fu(() => ca(r), Wu, g, !1), i && Ym(h), {
    isSupported: d,
    isFullscreen: o,
    enter: p,
    exit: h,
    toggle: m
  };
}
const [cA, gc] = eA(() => {
  const { state: t } = Vs(), e = rr({
    extensions: t.extensions ?? [],
    defaultLang: Lm,
    defaultMarkdownTheme: Oo,
    isFullscreen: !1,
    color: void 0,
    highlight: void 0
  }), n = j(() => e.isFullscreen);
  function i() {
    e.isFullscreen = !e.isFullscreen;
  }
  return Gn(() => {
    e.extensions = t.extensions, e.defaultLang = t.defaultLang, e.defaultMarkdownTheme = t.defaultMarkdownTheme;
  }), {
    state: e,
    isFullscreen: n,
    toggleFullscreen: i
  };
}), Uu = "[vuetify-pro-tiptap]";
class yc {
  static warn(e) {
    console.warn(`${Uu}: ${e}`);
  }
  static error(e) {
    console.error(`${Uu}: ${e}`);
  }
}
function dA(t) {
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
      const i = t.get(e);
      i ? i.push(n) : t.set(e, [n]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(e, n) {
      const i = t.get(e);
      i && (n ? i.splice(i.indexOf(n) >>> 0, 1) : t.set(e, []));
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
      let i = t.get(e);
      i && i.slice().map((r) => {
        r(n);
      }), i = t.get("*"), i && i.slice().map((r) => {
        r(e, n);
      });
    }
  };
}
const uA = {
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
}, fA = {
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
  "editor.htmlview.tooltip": "HTML View",
  "editor.clear.tooltip": "Clear Format",
  "editor.undo.tooltip": "Undo",
  "editor.redo.tooltip": "Redo",
  "editor.fullscreen.tooltip.fullscreen": "Fullscreen",
  "editor.fullscreen.tooltip.exit": "Fullscreen Exit"
}, hA = {
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
}, pA = {
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
}, mA = {
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
  "editor.htmlview.tooltip": "HTML视图",
  "editor.clear.tooltip": "清除格式",
  "editor.undo.tooltip": "撤销",
  "editor.redo.tooltip": "重做",
  "editor.fullscreen.tooltip.fullscreen": "全屏",
  "editor.fullscreen.tooltip.exit": "退出全屏"
}, gA = {
  nl: pA,
  zhHans: mA,
  en: fA,
  de: uA,
  it: hA
}, si = {
  lang: Lm,
  message: gA
};
class yA {
  emitter;
  constructor() {
    this.emitter = dA();
  }
  get lang() {
    return si.lang;
  }
  set lang(e) {
    if (!this.isLangSupported(e)) {
      yc.warn(`Can't find the current language "${e}", Using language "${si.lang}" by default`);
      return;
    }
    si.lang = e, this.emitter.emit("lang", e);
  }
  get message() {
    return si.message;
  }
  set message(e) {
    si.message = e;
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
    return function(r) {
      return n[r] || r;
    };
  }
}
const da = new yA(), Gt = () => {
  const t = Y(si.lang), e = j(() => da.buildI18nHandler(A(t)));
  return Gn((n) => {
    const i = da.registerWatchLang((r) => {
      t.value = r;
    });
    n(() => {
      i.unsubscribe();
    });
  }), {
    lang: t,
    t: e
  };
}, tg = ["top", "right", "bottom", "left"], ju = ["start", "end"], Ku = /* @__PURE__ */ tg.reduce((t, e) => t.concat(e, e + "-" + ju[0], e + "-" + ju[1]), []), wt = Math.min, rt = Math.max, Vo = Math.round, $t = (t) => ({
  x: t,
  y: t
}), bA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ng(t, e, n) {
  return rt(t, wt(e, n));
}
function Jt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function st(t) {
  return t.split("-")[0];
}
function ot(t) {
  return t.split("-")[1];
}
function ig(t) {
  return t === "x" ? "y" : "x";
}
function bc(t) {
  return t === "y" ? "height" : "width";
}
function pt(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function vc(t) {
  return ig(pt(t));
}
function rg(t, e, n) {
  n === void 0 && (n = !1);
  const i = ot(t), r = vc(t), o = bc(r);
  let s = r === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (s = Io(s)), [s, Io(s)];
}
function vA(t) {
  const e = Io(t);
  return [No(t), e, No(e)];
}
function No(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const qu = ["left", "right"], Gu = ["right", "left"], wA = ["top", "bottom"], kA = ["bottom", "top"];
function xA(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Gu : qu : e ? qu : Gu;
    case "left":
    case "right":
      return e ? wA : kA;
    default:
      return [];
  }
}
function SA(t, e, n, i) {
  const r = ot(t);
  let o = xA(st(t), n === "start", i);
  return r && (o = o.map((s) => s + "-" + r), e && (o = o.concat(o.map(No)))), o;
}
function Io(t) {
  const e = st(t);
  return bA[e] + t.slice(e.length);
}
function CA(t) {
  var e, n, i, r;
  return {
    top: (e = t.top) != null ? e : 0,
    right: (n = t.right) != null ? n : 0,
    bottom: (i = t.bottom) != null ? i : 0,
    left: (r = t.left) != null ? r : 0
  };
}
function wc(t) {
  return typeof t != "number" ? CA(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function mn(t) {
  const {
    x: e,
    y: n,
    width: i,
    height: r
  } = t;
  return {
    width: i,
    height: r,
    top: n,
    left: e,
    right: e + i,
    bottom: n + r,
    x: e,
    y: n
  };
}
function Ju(t, e, n) {
  let {
    reference: i,
    floating: r
  } = t;
  const o = pt(e), s = vc(e), l = bc(s), a = st(e), c = o === "y", d = i.x + i.width / 2 - r.width / 2, u = i.y + i.height / 2 - r.height / 2, f = i[l] / 2 - r[l] / 2;
  let h;
  switch (a) {
    case "top":
      h = {
        x: d,
        y: i.y - r.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: i.y + i.height
      };
      break;
    case "right":
      h = {
        x: i.x + i.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: i.x - r.width,
        y: u
      };
      break;
    default:
      h = {
        x: i.x,
        y: i.y
      };
  }
  const p = ot(e);
  return p && (h[s] += f * (p === "end" ? 1 : -1) * (n && c ? -1 : 1)), h;
}
async function MA(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: i,
    y: r,
    platform: o,
    rects: s,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Jt(e, t), p = wc(h), g = l[f ? u === "floating" ? "reference" : "floating" : u], y = mn(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), b = u === "floating" ? {
    x: i,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), w = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || {
    x: 1,
    y: 1
  }, x = mn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: b,
    offsetParent: v,
    strategy: a
  }) : b);
  return {
    top: (y.top - x.top + p.top) / w.y,
    bottom: (x.bottom - y.bottom + p.bottom) / w.y,
    left: (y.left - x.left + p.left) / w.x,
    right: (x.right - y.right + p.right) / w.x
  };
}
const AA = 50, TA = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: MA
  }, a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: r
  }), {
    x: d,
    y: u
  } = Ju(c, i, a), f = i, h = 0;
  const p = {};
  for (let m = 0; m < o.length; m++) {
    const g = o[m];
    if (!g)
      continue;
    const {
      name: y,
      fn: b
    } = g, {
      x: v,
      y: w,
      data: x,
      reset: k
    } = await b({
      x: d,
      y: u,
      initialPlacement: i,
      placement: f,
      strategy: r,
      middlewareData: p,
      rects: c,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = v ?? d, u = w ?? u, p[y] = {
      ...p[y],
      ...x
    }, k && h < AA && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: r
    }) : k.rects), {
      x: d,
      y: u
    } = Ju(c, f, a)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: r,
    middlewareData: p
  };
}, EA = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: i,
      placement: r,
      rects: o,
      platform: s,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: d = 0
    } = Jt(t, e) || {};
    if (c == null)
      return {};
    const u = wc(d), f = {
      x: n,
      y: i
    }, h = vc(r), p = bc(h), m = await s.getDimensions(c), g = h === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", w = o.reference[p] + o.reference[h] - f[h] - o.floating[p], x = f[h] - o.reference[h], k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let S = k ? k[v] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(k))) && (S = l.floating[v] || o.floating[p]);
    const M = w / 2 - x / 2, O = S / 2 - m[p] / 2 - 1, V = wt(u[y], O), D = wt(u[b], O), W = S - m[p] - D, X = S / 2 - m[p] / 2 + M, J = ng(V, X, W), Q = !a.arrow && ot(r) != null && X !== J && o.reference[p] / 2 - (X < V ? V : D) - m[p] / 2 < 0, R = Q ? X < V ? X - V : X - W : 0;
    return {
      [h]: f[h] + R,
      data: {
        [h]: J,
        centerOffset: X - J - R,
        ...Q && {
          alignmentOffset: R
        }
      },
      reset: Q
    };
  }
});
function LA(t, e, n) {
  return (t ? [...n.filter((r) => ot(r) === t), ...n.filter((r) => ot(r) !== t)] : n.filter((r) => st(r) === r)).filter((r) => t ? ot(r) === t || (e ? No(r) !== r : !1) : !0);
}
const OA = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, i, r;
      const {
        rects: o,
        middlewareData: s,
        placement: l,
        platform: a,
        elements: c
      } = e, {
        crossAxis: d = !1,
        alignment: u,
        allowedPlacements: f = Ku,
        autoAlignment: h = !0,
        ...p
      } = Jt(t, e), m = u !== void 0 || f === Ku ? LA(u || null, h, f) : f, g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, y = m[g];
      if (y == null)
        return {};
      if (l !== y)
        return {
          reset: {
            placement: m[0]
          }
        };
      const b = await a.detectOverflow(e, p), v = rg(y, o, await (a.isRTL == null ? void 0 : a.isRTL(c.floating))), w = [b[st(y)], b[v[0]], b[v[1]]], x = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: y,
        overflows: w
      }], k = m[g + 1];
      if (k)
        return {
          data: {
            index: g + 1,
            overflows: x
          },
          reset: {
            placement: k
          }
        };
      const S = x.map((V) => {
        const D = ot(V.placement);
        return [V.placement, D && d ? (
          // Check along the mainAxis and main crossAxis side.
          V.overflows.slice(0, 2).reduce((W, X) => W + X, 0)
        ) : (
          // Check only the mainAxis.
          V.overflows[0]
        ), V.overflows];
      }).sort((V, D) => V[1] - D[1]), O = ((r = S.filter((V) => V[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        ot(V[0]) ? 2 : 3
      ).every((D) => D <= 0))[0]) == null ? void 0 : r[0]) || S[0][0];
      return O !== l ? {
        data: {
          index: g + 1,
          overflows: x
        },
        reset: {
          placement: O
        }
      } : {};
    }
  };
}, HA = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, i;
      const {
        placement: r,
        middlewareData: o,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...g
      } = Jt(t, e);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const y = st(r), b = pt(l), v = st(l) === l, w = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = f || (v || !m ? [Io(l)] : vA(l)), k = p !== "none";
      !f && k && x.push(...SA(l, m, p, w));
      const S = [l, ...x], M = await a.detectOverflow(e, g), O = [];
      let V = ((i = o.flip) == null ? void 0 : i.overflows) || [];
      if (d && O.push(M[y]), u) {
        const J = rg(r, s, w);
        O.push(M[J[0]], M[J[1]]);
      }
      if (V = [...V, {
        placement: r,
        overflows: O
      }], !O.every((J) => J <= 0)) {
        var D, W;
        const J = (((D = o.flip) == null ? void 0 : D.index) || 0) + 1, Q = S[J];
        if (Q && (!(u === "alignment" ? b !== pt(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        V.every((P) => pt(P.placement) === b ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: J,
              overflows: V
            },
            reset: {
              placement: Q
            }
          };
        let R = (W = V.filter((K) => K.overflows[0] <= 0).sort((K, P) => K.overflows[1] - P.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!R)
          switch (h) {
            case "bestFit": {
              var X;
              const K = (X = V.filter((P) => {
                if (k) {
                  const U = pt(P.placement);
                  return U === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((U) => U > 0).reduce((U, Me) => U + Me, 0)]).sort((P, U) => P[1] - U[1])[0]) == null ? void 0 : X[0];
              K && (R = K);
              break;
            }
            case "initialPlacement":
              R = l;
              break;
          }
        if (r !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function Xu(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Zu(t) {
  return tg.some((e) => t[e] >= 0);
}
const RA = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n,
        platform: i
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = Jt(t, e);
      switch (r) {
        case "referenceHidden": {
          const s = await i.detectOverflow(e, {
            ...o,
            elementContext: "reference"
          }), l = Xu(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Zu(l)
            }
          };
        }
        case "escaped": {
          const s = await i.detectOverflow(e, {
            ...o,
            altBoundary: !0
          }), l = Xu(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Zu(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function og(t) {
  const e = wt(...t.map((o) => o.left)), n = wt(...t.map((o) => o.top)), i = rt(...t.map((o) => o.right)), r = rt(...t.map((o) => o.bottom));
  return {
    x: e,
    y: n,
    width: i - e,
    height: r - n
  };
}
function VA(t) {
  const e = t.slice().sort((r, o) => r.y - o.y), n = [];
  let i = null;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    !i || o.y - i.y > i.height / 2 ? n.push([o]) : n[n.length - 1].push(o), i = o;
  }
  return n.map((r) => mn(og(r)));
}
const NA = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      const {
        placement: n,
        elements: i,
        rects: r,
        platform: o,
        strategy: s
      } = e, {
        padding: l = 2,
        x: a,
        y: c
      } = Jt(t, e), d = Array.from(await (o.getClientRects == null ? void 0 : o.getClientRects(i.reference)) || []);
      if (!d.length)
        return {};
      const u = VA(d), f = mn(og(d)), h = wc(l);
      function p() {
        if (u.length === 2 && (u[0].left > u[1].right || u[1].left > u[0].right) && a != null && c != null)
          return u.find((g) => a > g.left - h.left && a < g.right + h.right && c > g.top - h.top && c < g.bottom + h.bottom) || f;
        if (u.length >= 2) {
          if (pt(n) === "y") {
            const k = u[0], S = u[u.length - 1], M = st(n) === "top", O = k.top, V = S.bottom, D = M ? k.left : S.left, W = M ? k.right : S.right;
            return mn({
              x: D,
              y: O,
              width: W - D,
              height: V - O
            });
          }
          const g = st(n) === "left", y = rt(...u.map((k) => k.right)), b = wt(...u.map((k) => k.left)), v = u.filter((k) => g ? k.left === b : k.right === y), w = v[0].top, x = v[v.length - 1].bottom;
          return mn({
            x: b,
            y: w,
            width: y - b,
            height: x - w
          });
        }
        return f;
      }
      const m = await o.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: i.floating,
        strategy: s
      });
      return r.reference.x !== m.reference.x || r.reference.y !== m.reference.y || r.reference.width !== m.reference.width || r.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
}, IA = /* @__PURE__ */ new Set(["left", "top"]);
async function DA(t, e) {
  const {
    placement: n,
    platform: i,
    elements: r
  } = t, o = await (i.isRTL == null ? void 0 : i.isRTL(r.floating)), s = st(n), l = ot(n), a = pt(n) === "y", c = IA.has(s) ? -1 : 1, d = o && a ? -1 : 1, u = Jt(e, t);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return l && typeof p == "number" && (h = l === "end" ? p * -1 : p), a ? {
    x: h * d,
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const PA = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, i;
      const {
        x: r,
        y: o,
        placement: s,
        middlewareData: l
      } = e, a = await DA(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (i = l.arrow) != null && i.alignmentOffset ? {} : {
        x: r + a.x,
        y: o + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, _A = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i,
        placement: r,
        platform: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: v,
              y: w
            } = b;
            return {
              x: v,
              y: w
            };
          }
        },
        ...c
      } = Jt(t, e), d = {
        x: n,
        y: i
      }, u = await o.detectOverflow(e, c), f = pt(r), h = ig(f);
      let p = d[h], m = d[f];
      const g = (b, v) => ng(v + u[b === "y" ? "top" : "left"], v, v - u[b === "y" ? "bottom" : "right"]);
      s && (p = g(h, p)), l && (m = g(f, m));
      const y = a.fn({
        ...e,
        [h]: p,
        [f]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - i,
          enabled: {
            [h]: s,
            [f]: l
          }
        }
      };
    }
  };
}, zA = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: i,
        platform: r,
        elements: o
      } = e, {
        apply: s = () => {
        },
        ...l
      } = Jt(t, e), a = await r.detectOverflow(e, l), c = st(n), d = ot(n), u = pt(n) === "y", {
        width: f,
        height: h
      } = i.floating;
      let p, m;
      c === "top" || c === "bottom" ? (p = c, m = d === (await (r.isRTL == null ? void 0 : r.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (m = c, p = d === "end" ? "top" : "bottom");
      const g = h - a.top - a.bottom, y = f - a.left - a.right, b = wt(h - a[p], g), v = wt(f - a[m], y), w = e.middlewareData.shift, x = !w;
      let k = b, S = v;
      w != null && w.enabled.x && (S = y), w != null && w.enabled.y && (k = g), x && !d && (u ? S = f - 2 * rt(a.left, a.right) : k = h - 2 * rt(a.top, a.bottom)), await s({
        ...e,
        availableWidth: S,
        availableHeight: k
      });
      const M = await r.getDimensions(o.floating);
      return f !== M.width || h !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zs() {
  return typeof window < "u";
}
function Hi(t) {
  return sg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ge(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Sn(t) {
  var e;
  return (e = (sg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function sg(t) {
  return zs() ? t instanceof Node || t instanceof Ge(t).Node : !1;
}
function kt(t) {
  return zs() ? t instanceof Element || t instanceof Ge(t).Element : !1;
}
function Cn(t) {
  return zs() ? t instanceof HTMLElement || t instanceof Ge(t).HTMLElement : !1;
}
function Yu(t) {
  return !zs() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ge(t).ShadowRoot;
}
function $s(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: i,
    display: r
  } = xt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && r !== "inline" && r !== "contents";
}
function $A(t) {
  return /^(table|td|th)$/.test(Hi(t));
}
function Bs(t) {
  try {
    if (t.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const BA = /transform|translate|scale|rotate|perspective|filter/, FA = /paint|layout|strict|content/, Mn = (t) => !!t && t !== "none";
let ml;
function kc(t) {
  const e = kt(t) ? xt(t) : t;
  return Mn(e.transform) || Mn(e.translate) || Mn(e.scale) || Mn(e.rotate) || Mn(e.perspective) || !xc() && (Mn(e.backdropFilter) || Mn(e.filter)) || BA.test(e.willChange || "") || FA.test(e.contain || "");
}
function WA(t) {
  let e = Un(t);
  for (; Cn(e) && !vr(e); ) {
    if (kc(e))
      return e;
    if (Bs(e))
      return null;
    e = Un(e);
  }
  return null;
}
function xc() {
  return ml == null && (ml = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ml;
}
function vr(t) {
  return /^(html|body|#document)$/.test(Hi(t));
}
function xt(t) {
  return Ge(t).getComputedStyle(t);
}
function Fs(t) {
  return kt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Un(t) {
  if (Hi(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Yu(t) && t.host || // Fallback.
    Sn(t)
  );
  return Yu(e) ? e.host : e;
}
function lg(t) {
  const e = Un(t);
  return vr(e) ? (t.ownerDocument || t).body : Cn(e) && $s(e) ? e : lg(e);
}
function ag(t, e, n) {
  var i;
  e === void 0 && (e = []);
  const r = lg(t), o = r === ((i = t.ownerDocument) == null ? void 0 : i.body), s = Ge(r);
  return o ? (ua(s), e.concat(s, s.visualViewport || [], $s(r) ? r : [], [])) : e.concat(r, ag(r, []));
}
function ua(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function cg(t) {
  const e = xt(t);
  let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const r = Cn(t), o = r ? t.offsetWidth : n, s = r ? t.offsetHeight : i, l = Vo(n) !== o || Vo(i) !== s;
  return l && (n = o, i = s), {
    width: n,
    height: i,
    $: l
  };
}
function dg(t) {
  return kt(t) ? t : t.contextElement;
}
function mi(t) {
  const e = dg(t);
  if (!Cn(e))
    return $t(1);
  const n = e.getBoundingClientRect(), {
    width: i,
    height: r,
    $: o
  } = cg(e);
  let s = (o ? Vo(n.width) : n.width) / i, l = (o ? Vo(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const UA = /* @__PURE__ */ $t(0);
function ug(t) {
  const e = Ge(t);
  return !xc() || !e.visualViewport ? UA : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function jA(t, e, n) {
  return e === void 0 && (e = !1), !!n && e && n === Ge(t);
}
function wr(t, e, n, i) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), o = dg(t);
  let s = $t(1);
  e && (i ? kt(i) && (s = mi(i)) : s = mi(t));
  const l = jA(o, n, i) ? ug(o) : $t(0);
  let a = (r.left + l.x) / s.x, c = (r.top + l.y) / s.y, d = r.width / s.x, u = r.height / s.y;
  if (o && i) {
    const f = Ge(o), h = kt(i) ? Ge(i) : i;
    let p = f, m = ua(p);
    for (; m && h !== p; ) {
      const g = mi(m), y = m.getBoundingClientRect(), b = xt(m), v = y.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x, w = y.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      a *= g.x, c *= g.y, d *= g.x, u *= g.y, a += v, c += w, p = Ge(m), m = ua(p);
    }
  }
  return mn({
    width: d,
    height: u,
    x: a,
    y: c
  });
}
function Ws(t, e) {
  const n = Fs(t).scrollLeft;
  return e ? e.left + n : wr(Sn(t)).left + n;
}
function fg(t, e) {
  const n = t.getBoundingClientRect(), i = n.left + e.scrollLeft - Ws(t, n), r = n.top + e.scrollTop;
  return {
    x: i,
    y: r
  };
}
function KA(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: i,
    strategy: r
  } = t;
  const o = r === "fixed", s = Sn(i), l = e ? Bs(e.floating) : !1;
  if (i === s || l && o)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = $t(1);
  const d = $t(0), u = Cn(i);
  if ((u || !o) && ((Hi(i) !== "body" || $s(s)) && (a = Fs(i)), u)) {
    const h = wr(i);
    c = mi(i), d.x = h.x + i.clientLeft, d.y = h.y + i.clientTop;
  }
  const f = s && !u && !o ? fg(s, a) : $t(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + f.y
  };
}
function qA(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function GA(t) {
  const e = Fs(t), n = t.ownerDocument.body, i = rt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = rt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Ws(t);
  const s = -e.scrollTop;
  return xt(n).direction === "rtl" && (o += rt(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: s
  };
}
const JA = 25;
function XA(t, e, n) {
  n === void 0 && (n = "viewport");
  const i = n === "layoutViewport", r = Ge(t), o = Sn(t), s = r.visualViewport;
  let l = o.clientWidth, a = o.clientHeight, c = 0, d = 0;
  if (s) {
    const f = !xc() || e === "fixed";
    i ? f || (c = -s.offsetLeft, d = -s.offsetTop) : (l = s.width, a = s.height, f && (c = s.offsetLeft, d = s.offsetTop));
  }
  if (Ws(o) <= 0) {
    const f = o.ownerDocument, h = f.body, p = getComputedStyle(h), m = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(o.clientWidth - h.clientWidth - m), y = getComputedStyle(o).scrollbarGutter === "stable both-edges" ? g / 2 : g;
    y <= JA && (l -= y);
  }
  return {
    width: l,
    height: a,
    x: c,
    y: d
  };
}
function ZA(t, e) {
  const n = wr(t, !0, e === "fixed"), i = n.top + t.clientTop, r = n.left + t.clientLeft, o = mi(t), s = t.clientWidth * o.x, l = t.clientHeight * o.y, a = r * o.x, c = i * o.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Qu(t, e, n) {
  let i;
  if (e === "viewport" || e === "layoutViewport")
    i = XA(t, n, e);
  else if (e === "document")
    i = GA(Sn(t));
  else if (kt(e))
    i = ZA(e, n);
  else {
    const r = ug(t);
    i = {
      x: e.x - r.x,
      y: e.y - r.y,
      width: e.width,
      height: e.height
    };
  }
  return mn(i);
}
function YA(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let i = ag(t, []).filter((l) => kt(l) && Hi(l) !== "body"), r = null;
  const o = xt(t).position === "fixed";
  let s = o ? Un(t) : t;
  for (; kt(s) && !vr(s); ) {
    const l = xt(s), a = kc(s), c = r ? r.position : o ? "fixed" : "";
    !a && (c === "fixed" || c === "absolute" && l.position === "static") ? i = i.filter((u) => u !== s) : r = l, s = Un(s);
  }
  return e.set(t, i), i;
}
function QA(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: r
  } = t;
  const s = [...n === "clippingAncestors" ? Bs(e) ? [] : YA(e, this._c) : [].concat(n), i], l = Qu(e, s[0], r);
  let a = l.top, c = l.right, d = l.bottom, u = l.left;
  for (let f = 1; f < s.length; f++) {
    const h = Qu(e, s[f], r);
    a = rt(h.top, a), c = wt(h.right, c), d = wt(h.bottom, d), u = rt(h.left, u);
  }
  return {
    width: c - u,
    height: d - a,
    x: u,
    y: a
  };
}
function eT(t) {
  const {
    width: e,
    height: n
  } = cg(t);
  return {
    width: e,
    height: n
  };
}
function tT(t, e, n) {
  const i = Cn(e), r = Sn(e), o = n === "fixed", s = wr(t, !0, o, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = $t(0);
  if ((i || !o) && ((Hi(e) !== "body" || $s(r)) && (l = Fs(e)), i)) {
    const f = wr(e, !0, o, e);
    a.x = f.x + e.clientLeft, a.y = f.y + e.clientTop;
  }
  !i && r && (a.x = Ws(r));
  const c = r && !i && !o ? fg(r, l) : $t(0), d = s.left + l.scrollLeft - a.x - c.x, u = s.top + l.scrollTop - a.y - c.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function gl(t) {
  return xt(t).position === "static";
}
function ef(t, e) {
  if (!Cn(t) || xt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Sn(t) === n && (n = n.ownerDocument.body), n;
}
function hg(t, e) {
  const n = Ge(t);
  if (Bs(t))
    return n;
  if (!Cn(t)) {
    let r = Un(t);
    for (; r && !vr(r); ) {
      if (kt(r) && !gl(r))
        return r;
      r = Un(r);
    }
    return n;
  }
  let i = ef(t, e);
  for (; i && $A(i) && gl(i); )
    i = ef(i, e);
  return i && vr(i) && gl(i) && !kc(i) ? n : i || WA(t) || n;
}
const nT = async function(t) {
  const e = this.getOffsetParent || hg, n = this.getDimensions, i = await n(t.floating);
  return {
    reference: tT(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function iT(t) {
  return xt(t).direction === "rtl";
}
const rT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: KA,
  getDocumentElement: Sn,
  getClippingRect: QA,
  getOffsetParent: hg,
  getElementRects: nT,
  getClientRects: qA,
  getDimensions: eT,
  getScale: mi,
  isElement: kt,
  isRTL: iT
}, pg = PA, mg = OA, gg = _A, yg = HA, bg = zA, vg = RA, wg = EA, kg = NA, xg = (t, e, n) => {
  const i = /* @__PURE__ */ new Map(), r = n ?? {}, o = {
    ...rT,
    ...r.platform,
    _c: i
  };
  return TA(t, e, {
    ...r,
    platform: o
  });
};
let fa, ha;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  fa = (e) => t.get(e), ha = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  fa = (i) => {
    for (let r = 0; r < t.length; r += 2) if (t[r] == i) return t[r + 1];
  }, ha = (i, r) => (n == 10 && (n = 0), t[n++] = i, t[n++] = r);
}
var ge = class {
  constructor(t, e, n, i) {
    this.width = t, this.height = e, this.map = n, this.problems = i;
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const i = e % this.width, r = e / this.width | 0;
      let o = i + 1, s = r + 1;
      for (let l = 1; o < this.width && this.map[e + l] == n; l++) o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == n; l++) s++;
      return {
        left: i,
        top: r,
        right: o,
        bottom: s
      };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, n) {
    const { left: i, right: r, top: o, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? i == 0 : r == this.width) ? null : this.map[o * this.width + (n < 0 ? i - 1 : r)] : (n < 0 ? o == 0 : s == this.height) ? null : this.map[i + this.width * (n < 0 ? o - 1 : s)];
  }
  rectBetween(t, e) {
    const { left: n, right: i, top: r, bottom: o } = this.findCell(t), { left: s, right: l, top: a, bottom: c } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(r, a),
      right: Math.max(i, l),
      bottom: Math.max(o, c)
    };
  }
  cellsInRect(t) {
    const e = [], n = {};
    for (let i = t.top; i < t.bottom; i++) for (let r = t.left; r < t.right; r++) {
      const o = i * this.width + r, s = this.map[o];
      n[s] || (n[s] = !0, !(r == t.left && r && this.map[o - 1] == s || i == t.top && i && this.map[o - this.width] == s) && e.push(s));
    }
    return e;
  }
  positionAt(t, e, n) {
    for (let i = 0, r = 0; ; i++) {
      const o = r + n.child(i).nodeSize;
      if (i == t) {
        let s = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; s < l && this.map[s] < r; ) s++;
        return s == l ? o - 1 : this.map[s];
      }
      r = o;
    }
  }
  static get(t) {
    return fa(t) || ha(t, oT(t));
  }
};
function oT(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = sT(t), n = t.childCount, i = [];
  let r = 0, o = null;
  const s = [];
  for (let c = 0, d = e * n; c < d; c++) i[c] = 0;
  for (let c = 0, d = 0; c < n; c++) {
    const u = t.child(c);
    d++;
    for (let p = 0; ; p++) {
      for (; r < i.length && i[r] != 0; ) r++;
      if (p == u.childCount) break;
      const m = u.child(p), { colspan: g, rowspan: y, colwidth: b } = m.attrs;
      for (let v = 0; v < y; v++) {
        if (v + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: y - v
          });
          break;
        }
        const w = r + v * e;
        for (let x = 0; x < g; x++) {
          i[w + x] == 0 ? i[w + x] = d : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: g - x
          });
          const k = b && b[x];
          if (k) {
            const S = (w + x) % e * 2, M = s[S];
            M == null || M != k && s[S + 1] == 1 ? (s[S] = k, s[S + 1] = 1) : M == k && s[S + 1]++;
          }
        }
      }
      r += g, d += m.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; r < f; ) i[r++] == 0 && h++;
    h && (o || (o = [])).push({
      type: "missing",
      row: c,
      n: h
    }), d++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const l = new ge(e, n, i, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2) s[c] != null && s[c + 1] < n && (a = !0);
  return a && lT(l, s, t), l;
}
function sT(t) {
  let e = -1, n = !1;
  for (let i = 0; i < t.childCount; i++) {
    const r = t.child(i);
    let o = 0;
    if (n) for (let s = 0; s < i; s++) {
      const l = t.child(s);
      for (let a = 0; a < l.childCount; a++) {
        const c = l.child(a);
        s + c.attrs.rowspan > i && (o += c.attrs.colspan);
      }
    }
    for (let s = 0; s < r.childCount; s++) {
      const l = r.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function lT(t, e, n) {
  t.problems || (t.problems = []);
  const i = {};
  for (let r = 0; r < t.map.length; r++) {
    const o = t.map[r];
    if (i[o]) continue;
    i[o] = !0;
    const s = n.nodeAt(o);
    if (!s) throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const d = e[(r + c) % t.width * 2];
      d != null && (!a.colwidth || a.colwidth[c] != d) && ((l || (l = aT(a)))[c] = d);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function aT(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function De(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const i = t.nodes[n], r = i.spec.tableRole;
      r && (e[r] = i);
    }
  }
  return e;
}
const sn = new se("selectingCells");
function jn(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function cT(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function at(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Us(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = jn(e.$head) || dT(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function dT(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const i = e.type.spec.tableRole;
    if (i == "cell" || i == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const i = e.type.spec.tableRole;
    if (i == "cell" || i == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function pa(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function uT(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Sc(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Sg(t, e, n) {
  const i = t.node(-1), r = ge.get(i), o = t.start(-1), s = r.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function Kn(t, e, n = 1) {
  const i = {
    ...t,
    colspan: t.colspan - n
  };
  return i.colwidth && (i.colwidth = i.colwidth.slice(), i.colwidth.splice(e, n), i.colwidth.some((r) => r > 0) || (i.colwidth = null)), i;
}
function Cg(t, e, n = 1) {
  const i = {
    ...t,
    colspan: t.colspan + n
  };
  if (i.colwidth) {
    i.colwidth = i.colwidth.slice();
    for (let r = 0; r < n; r++) i.colwidth.splice(e, 0, 0);
  }
  return i;
}
function fT(t, e, n) {
  const i = De(e.type.schema).header_cell;
  for (let r = 0; r < t.height; r++) if (e.nodeAt(t.map[n + r * t.width]).type != i) return !1;
  return !0;
}
var le = class Lt extends B {
  constructor(e, n = e) {
    const i = e.node(-1), r = ge.get(i), o = e.start(-1), s = r.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = r.cellsInRect(s).filter((d) => d != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((d) => {
      const u = i.nodeAt(d);
      if (!u) throw new RangeError(`No cell with offset ${d} found`);
      const f = o + d + 1;
      return new _h(l.resolve(f), l.resolve(f + u.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const i = e.resolve(n.map(this.$anchorCell.pos)), r = e.resolve(n.map(this.$headCell.pos));
    if (pa(i) && pa(r) && Sc(i, r)) {
      const o = this.$anchorCell.node(-1) != i.node(-1);
      return o && this.isRowSelection() ? Lt.rowSelection(i, r) : o && this.isColSelection() ? Lt.colSelection(i, r) : new Lt(i, r);
    }
    return I.between(i, r);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = ge.get(e), i = this.$anchorCell.start(-1), r = n.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i), o = {}, s = [];
    for (let a = r.top; a < r.bottom; a++) {
      const c = [];
      for (let d = a * n.width + r.left, u = r.left; u < r.right; u++, d++) {
        const f = n.map[d];
        if (o[f]) continue;
        o[f] = !0;
        const h = n.findCell(f);
        let p = e.nodeAt(f);
        if (!p) throw new RangeError(`No cell with offset ${f} found`);
        const m = r.left - h.left, g = h.right - r.right;
        if (m > 0 || g > 0) {
          let y = p.attrs;
          if (m > 0 && (y = Kn(y, 0, m)), g > 0 && (y = Kn(y, y.colspan - g, g)), h.left < r.left) {
            if (p = p.type.createAndFill(y), !p) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(y)}`);
          } else p = p.type.create(y, p.content);
        }
        if (h.top < r.top || h.bottom > r.bottom) {
          const y = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, r.bottom) - Math.max(h.top, r.top)
          };
          h.top < r.top ? p = p.type.createAndFill(y) : p = p.type.create(y, p.content);
        }
        c.push(p);
      }
      s.push(e.child(a).copy(C.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new L(C.from(l), 1, 1);
  }
  replace(e, n = L.empty) {
    const i = e.steps.length, r = this.ranges;
    for (let s = 0; s < r.length; s++) {
      const { $from: l, $to: a } = r[s], c = e.mapping.slice(i);
      e.replace(c.map(l.pos), c.map(a.pos), s ? L.empty : n);
    }
    const o = B.findFrom(e.doc.resolve(e.mapping.slice(i).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new L(C.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), i = ge.get(n), r = this.$anchorCell.start(-1), o = i.cellsInRect(i.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
    for (let s = 0; s < o.length; s++) e(n.nodeAt(o[s]), r + o[s]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const i = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(i, r) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const i = e.node(-1), r = ge.get(i), o = e.start(-1), s = r.findCell(e.pos - o), l = r.findCell(n.pos - o), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + r.map[s.left])), l.bottom < r.height && (n = a.resolve(o + r.map[r.width * (r.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + r.map[l.left])), s.bottom < r.height && (e = a.resolve(o + r.map[r.width * (r.height - 1) + s.right - 1]))), new Lt(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ge.get(e), i = this.$anchorCell.start(-1), r = n.colCount(this.$anchorCell.pos - i), o = n.colCount(this.$headCell.pos - i);
    if (Math.min(r, o) > 0) return !1;
    const s = r + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == n.width;
  }
  eq(e) {
    return e instanceof Lt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const i = e.node(-1), r = ge.get(i), o = e.start(-1), s = r.findCell(e.pos - o), l = r.findCell(n.pos - o), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(o + r.map[s.top * r.width])), l.right < r.width && (n = a.resolve(o + r.map[r.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + r.map[l.top * r.width])), s.right < r.width && (e = a.resolve(o + r.map[r.width * (s.top + 1) - 1]))), new Lt(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new Lt(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, i = n) {
    return new Lt(e.resolve(n), e.resolve(i));
  }
  getBookmark() {
    return new hT(this.$anchorCell.pos, this.$headCell.pos);
  }
};
le.prototype.visible = !1;
B.jsonID("cell", le);
var hT = class Mg {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Mg(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), i = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && i.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && i.index() < i.parent.childCount && Sc(n, i) ? new le(n, i) : B.near(i, 1);
  }
};
function pT(t) {
  if (!(t.selection instanceof le)) return null;
  const e = [];
  return t.selection.forEachCell((n, i) => {
    e.push(xe.node(i, i + n.nodeSize, { class: "selectedCell" }));
  }), Z.create(t.doc, e);
}
function mT({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, i = e.pos, r = t.depth;
  for (; r >= 0 && !(t.after(r + 1) < t.end(r)); r--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, i--) ;
  return n == i && /row|table/.test(t.node(r).type.spec.tableRole);
}
function gT({ $from: t, $to: e }) {
  let n, i;
  for (let r = t.depth; r > 0; r--) {
    const o = t.node(r);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      n = o;
      break;
    }
  }
  for (let r = e.depth; r > 0; r--) {
    const o = e.node(r);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      i = o;
      break;
    }
  }
  return n !== i && e.parentOffset === 0;
}
function yT(t, e, n) {
  const i = (e || t).selection, r = (e || t).doc;
  let o, s;
  if (i instanceof z && (s = i.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell") o = le.create(r, i.from);
    else if (s == "row") {
      const l = r.resolve(i.from + 1);
      o = le.rowSelection(l, l);
    } else if (!n) {
      const l = ge.get(i.node), a = i.from + 1, c = a + l.map[l.width * l.height - 1];
      o = le.create(r, a + 1, c);
    }
  } else i instanceof I && mT(i) ? o = I.create(r, i.from) : i instanceof I && gT(i) && (o = I.create(r, i.$from.start(), i.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const bT = new se("fix-tables");
function Ag(t, e, n, i) {
  const r = t.childCount, o = e.childCount;
  e: for (let s = 0, l = 0; s < o; s++) {
    const a = e.child(s);
    for (let c = l, d = Math.min(r, s + 3); c < d; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    i(a, n), l < r && t.child(l).sameMarkup(a) ? Ag(t.child(l), a, n + 1, i) : a.nodesBetween(0, a.content.size, i, n + 1), n += a.nodeSize;
  }
}
function Tg(t, e) {
  let n;
  const i = (r, o) => {
    r.type.spec.tableRole == "table" && (n = vT(t, r, o, n));
  };
  return e ? e.doc != t.doc && Ag(e.doc, t.doc, 0, i) : t.doc.descendants(i), n;
}
function vT(t, e, n, i) {
  const r = ge.get(e);
  if (!r.problems) return i;
  i || (i = t.tr);
  const o = [];
  for (let a = 0; a < r.height; a++) o.push(0);
  for (let a = 0; a < r.problems.length; a++) {
    const c = r.problems[a];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      const u = d.attrs;
      for (let f = 0; f < u.rowspan; f++) o[c.row + f] += c.n;
      i.setNodeMarkup(i.mapping.map(n + 1 + c.pos), null, Kn(u, u.colspan - c.n, c.n));
    } else if (c.type == "missing") o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      i.setNodeMarkup(i.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      i.setNodeMarkup(i.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        colwidth: c.colwidth
      });
    } else if (c.type == "zero_sized") {
      const d = i.mapping.map(n);
      i.delete(d, d + e.nodeSize);
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++) o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = n + 1; a < r.height; a++) {
    const d = e.child(a), u = c + d.nodeSize, f = o[a];
    if (f > 0) {
      let h = "cell";
      d.firstChild && (h = d.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const y = De(t.schema)[h].createAndFill();
        y && p.push(y);
      }
      const m = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
      i.insert(i.mapping.map(m), p);
    }
    c = u;
  }
  return i.setMeta(bT, { fixTables: !0 });
}
function Ct(t) {
  const e = t.selection, n = Us(t), i = n.node(-1), r = n.start(-1), o = ge.get(i);
  return {
    ...e instanceof le ? o.rectBetween(e.$anchorCell.pos - r, e.$headCell.pos - r) : o.findCell(n.pos - r),
    tableStart: r,
    map: o,
    table: i
  };
}
function Eg(t, { map: e, tableStart: n, table: i }, r) {
  let o = r > 0 ? -1 : 0;
  fT(e, i, r + o) && (o = r == 0 || r == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + r;
    if (r > 0 && r < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = i.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, Cg(c.attrs, r - e.colCount(a))), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? De(i.type.schema).cell : i.nodeAt(e.map[l + o]).type, c = e.positionAt(s, r, i);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function wT(t, e) {
  if (!at(t)) return !1;
  if (e) {
    const n = Ct(t);
    e(Eg(t.tr, n, n.left));
  }
  return !0;
}
function kT(t, e) {
  if (!at(t)) return !1;
  if (e) {
    const n = Ct(t);
    e(Eg(t.tr, n, n.right));
  }
  return !0;
}
function xT(t, { map: e, table: n, tableStart: i }, r) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + r, a = e.map[l], c = n.nodeAt(a), d = c.attrs;
    if (r > 0 && e.map[l - 1] == a || r < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(i + a), null, Kn(d, r - e.colCount(a)));
    else {
      const u = t.mapping.slice(o).map(i + a);
      t.delete(u, u + c.nodeSize);
    }
    s += d.rowspan;
  }
}
function ST(t, e) {
  if (!at(t)) return !1;
  if (e) {
    const n = Ct(t), i = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let r = n.right - 1; xT(i, n, r), r != n.left; r--) {
      const o = n.tableStart ? i.doc.nodeAt(n.tableStart - 1) : i.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ge.get(o);
    }
    e(i);
  }
  return !0;
}
function CT(t, e, n) {
  var i;
  const r = De(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((i = e.nodeAt(t.map[o + n * t.width])) === null || i === void 0 ? void 0 : i.type) != r) return !1;
  return !0;
}
function Lg(t, { map: e, tableStart: n, table: i }, r) {
  let o = n;
  for (let c = 0; c < r; c++) o += i.child(c).nodeSize;
  const s = [];
  let l = r > 0 ? -1 : 0;
  CT(e, i, r + l) && (l = r == 0 || r == e.height ? null : 0);
  for (let c = 0, d = e.width * r; c < e.width; c++, d++) if (r > 0 && r < e.height && e.map[d] == e.map[d - e.width]) {
    const u = e.map[d], f = i.nodeAt(u).attrs;
    t.setNodeMarkup(n + u, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const u = l == null ? De(i.type.schema).cell : (a = i.nodeAt(e.map[d + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = u?.createAndFill();
    f && s.push(f);
  }
  return t.insert(o, De(i.type.schema).row.create(null, s)), t;
}
function MT(t, e) {
  if (!at(t)) return !1;
  if (e) {
    const n = Ct(t);
    e(Lg(t.tr, n, n.top));
  }
  return !0;
}
function AT(t, e) {
  if (!at(t)) return !1;
  if (e) {
    const n = Ct(t);
    e(Lg(t.tr, n, n.bottom));
  }
  return !0;
}
function TT(t, { map: e, table: n, tableStart: i }, r) {
  let o = 0;
  for (let c = 0; c < r; c++) o += n.child(c).nodeSize;
  const s = o + n.child(r).nodeSize, l = t.mapping.maps.length;
  t.delete(o + i, s + i);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, d = r * e.width; c < e.width; c++, d++) {
    const u = e.map[d];
    if (!a.has(u)) {
      if (a.add(u), r > 0 && u == e.map[d - e.width]) {
        const f = n.nodeAt(u).attrs;
        t.setNodeMarkup(t.mapping.slice(l).map(u + i), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (r < e.height && u == e.map[d + e.width]) {
        const f = n.nodeAt(u), h = f.attrs, p = f.type.create({
          ...h,
          rowspan: f.attrs.rowspan - 1
        }, f.content), m = e.positionAt(r + 1, c, n);
        t.insert(t.mapping.slice(l).map(i + m), p), c += h.colspan - 1;
      }
    }
  }
}
function ET(t, e) {
  if (!at(t)) return !1;
  if (e) {
    const n = Ct(t), i = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let r = n.bottom - 1; TT(i, n, r), r != n.top; r--) {
      const o = n.tableStart ? i.doc.nodeAt(n.tableStart - 1) : i.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = ge.get(n.table);
    }
    e(i);
  }
  return !0;
}
function tf(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function LT({ width: t, height: e, map: n }, i) {
  let r = i.top * t + i.left, o = r, s = (i.bottom - 1) * t + i.left, l = r + (i.right - i.left - 1);
  for (let a = i.top; a < i.bottom; a++) {
    if (i.left > 0 && n[o] == n[o - 1] || i.right < t && n[l] == n[l + 1]) return !0;
    o += t, l += t;
  }
  for (let a = i.left; a < i.right; a++) {
    if (i.top > 0 && n[r] == n[r - t] || i.bottom < e && n[s] == n[s + t]) return !0;
    r++, s++;
  }
  return !1;
}
function nf(t, e) {
  const n = t.selection;
  if (!(n instanceof le) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const i = Ct(t), { map: r } = i;
  if (LT(r, i)) return !1;
  if (e) {
    const o = t.tr, s = {};
    let l = C.empty, a, c;
    for (let d = i.top; d < i.bottom; d++) for (let u = i.left; u < i.right; u++) {
      const f = r.map[d * r.width + u], h = i.table.nodeAt(f);
      if (!(s[f] || !h))
        if (s[f] = !0, a == null)
          a = f, c = h;
        else {
          tf(h) || (l = l.append(h.content));
          const p = o.mapping.map(f + i.tableStart);
          o.delete(p, p + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + i.tableStart, null, {
      ...Cg(c.attrs, c.attrs.colspan, i.right - i.left - c.attrs.colspan),
      rowspan: i.bottom - i.top
    }), l.size > 0) {
      const d = a + 1 + c.content.size, u = tf(c) ? a + 1 : d;
      o.replaceWith(u + i.tableStart, d + i.tableStart, l);
    }
    o.setSelection(new le(o.doc.resolve(a + i.tableStart))), e(o);
  }
  return !0;
}
function rf(t, e) {
  const n = De(t.schema);
  return OT(({ node: i }) => n[i.type.spec.tableRole])(t, e);
}
function OT(t) {
  return (e, n) => {
    const i = e.selection;
    let r, o;
    if (i instanceof le) {
      if (i.$anchorCell.pos != i.$headCell.pos) return !1;
      r = i.$anchorCell.nodeAfter, o = i.$anchorCell.pos;
    } else {
      var s;
      if (r = cT(i.$from), !r) return !1;
      o = (s = jn(i.$from)) === null || s === void 0 ? void 0 : s.pos;
    }
    if (r == null || o == null || r.attrs.colspan == 1 && r.attrs.rowspan == 1) return !1;
    if (n) {
      let l = r.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = {
        ...l,
        rowspan: 1
      }), l.colspan > 1 && (l = {
        ...l,
        colspan: 1
      });
      const d = Ct(e), u = e.tr;
      for (let h = 0; h < d.right - d.left; h++) a.push(c ? {
        ...l,
        colwidth: c && c[h] ? [c[h]] : null
      } : l);
      let f;
      for (let h = d.top; h < d.bottom; h++) {
        let p = d.map.positionAt(h, d.left, d.table);
        h == d.top && (p += r.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          m == d.left && h == d.top || u.insert(f = u.mapping.map(p + d.tableStart, 1), t({
            node: r,
            row: h,
            col: m
          }).createAndFill(a[g]));
      }
      u.setNodeMarkup(o, t({
        node: r,
        row: d.top,
        col: d.left
      }), a[0]), i instanceof le && u.setSelection(new le(u.doc.resolve(i.$anchorCell.pos), f ? u.doc.resolve(f) : void 0)), n(u);
    }
    return !0;
  };
}
function HT(t, e) {
  return function(n, i) {
    if (!at(n)) return !1;
    const r = Us(n);
    if (r.nodeAfter.attrs[t] === e) return !1;
    if (i) {
      const o = n.tr;
      n.selection instanceof le ? n.selection.forEachCell((s, l) => {
        s.attrs[t] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [t]: e
        });
      }) : o.setNodeMarkup(r.pos, null, {
        ...r.nodeAfter.attrs,
        [t]: e
      }), i(o);
    }
    return !0;
  };
}
function RT(t) {
  return function(e, n) {
    if (!at(e)) return !1;
    if (n) {
      const i = De(e.schema), r = Ct(e), o = e.tr, s = r.map.cellsInRect(t == "column" ? {
        left: r.left,
        top: 0,
        right: r.right,
        bottom: r.map.height
      } : t == "row" ? {
        left: 0,
        top: r.top,
        right: r.map.width,
        bottom: r.bottom
      } : r), l = s.map((a) => r.table.nodeAt(a));
      for (let a = 0; a < s.length; a++) l[a].type == i.header_cell && o.setNodeMarkup(r.tableStart + s[a], i.cell, l[a].attrs);
      if (o.steps.length === 0) for (let a = 0; a < s.length; a++) o.setNodeMarkup(r.tableStart + s[a], i.header_cell, l[a].attrs);
      n(o);
    }
    return !0;
  };
}
function of(t, e, n) {
  const i = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let r = 0; r < i.length; r++) {
    const o = e.table.nodeAt(i[r]);
    if (o && o.type !== n.header_cell) return !1;
  }
  return !0;
}
function kr(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? RT(t) : function(n, i) {
    if (!at(n)) return !1;
    if (i) {
      const r = De(n.schema), o = Ct(n), s = n.tr, l = of("row", o, r), a = of("column", o, r), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: c,
        right: 1,
        bottom: o.map.height
      } : t == "row" ? {
        left: c,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, u = t == "column" ? a ? r.cell : r.header_cell : t == "row" ? l ? r.cell : r.header_cell : r.cell;
      o.map.cellsInRect(d).forEach((f) => {
        const h = f + o.tableStart, p = s.doc.nodeAt(h);
        p && s.setNodeMarkup(h, u, p.attrs);
      }), i(s);
    }
    return !0;
  };
}
kr("row", { useDeprecatedLogic: !0 });
kr("column", { useDeprecatedLogic: !0 });
const VT = kr("cell", { useDeprecatedLogic: !0 });
function NT(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let i = t.index(-1) - 1, r = t.before(); i >= 0; i--) {
      const o = t.node(-1).child(i), s = o.lastChild;
      if (s) return r - 1 - s.nodeSize;
      r -= o.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let i = t.indexAfter(-1), r = t.after(); i < n.childCount; i++) {
      const o = n.child(i);
      if (o.childCount) return r + 1;
      r += o.nodeSize;
    }
  }
  return null;
}
function sf(t) {
  return function(e, n) {
    if (!at(e)) return !1;
    const i = NT(Us(e), t);
    if (i == null) return !1;
    if (n) {
      const r = e.doc.resolve(i);
      n(e.tr.setSelection(I.between(r, uT(r))).scrollIntoView());
    }
    return !0;
  };
}
function IT(t, e) {
  const n = t.selection.$anchor;
  for (let i = n.depth; i > 0; i--) if (n.node(i).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(i), n.after(i)).scrollIntoView()), !0;
  return !1;
}
function Gr(t, e) {
  const n = t.selection;
  if (!(n instanceof le)) return !1;
  if (e) {
    const i = t.tr, r = De(t.schema).cell.createAndFill().content;
    n.forEachCell((o, s) => {
      o.content.eq(r) || i.replace(i.mapping.map(s + 1), i.mapping.map(s + o.nodeSize - 1), new L(r, 0, 0));
    }), i.docChanged && e(i);
  }
  return !0;
}
function DT(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: i } = t;
  for (; e.childCount == 1 && (n > 0 && i > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, i--, e = e.child(0).content;
  const r = e.child(0), o = r.type.spec.tableRole, s = r.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const d = a ? 0 : Math.max(0, n - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, i - 1);
    (d || u) && (c = ma(De(s).row, new L(c, d, u)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || i ? ma(De(s).row, new L(e, n, i)).content : e);
  else return null;
  return PT(s, l);
}
function PT(t, e) {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = r; c < r + l; c++) n[c] = (n[c] || 0) + a;
    }
  }
  let i = 0;
  for (let r = 0; r < n.length; r++) i = Math.max(i, n[r]);
  for (let r = 0; r < n.length; r++)
    if (r >= e.length && e.push(C.empty), n[r] < i) {
      const o = De(t).cell.createAndFill(), s = [];
      for (let l = n[r]; l < i; l++) s.push(o);
      e[r] = e[r].append(C.from(s));
    }
  return {
    height: e.length,
    width: i,
    rows: e
  };
}
function ma(t, e) {
  const n = t.createAndFill();
  return new $a(n).replace(0, n.content.size, e).doc;
}
function _T({ width: t, height: e, rows: n }, i, r) {
  if (t != i) {
    const o = [], s = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let d = o[l] || 0, u = 0; d < i; u++) {
        let f = a.child(u % a.childCount);
        d + f.attrs.colspan > i && (f = f.type.createChecked(Kn(f.attrs, f.attrs.colspan, d + f.attrs.colspan - i), f.content)), c.push(f), d += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++) o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      s.push(C.from(c));
    }
    n = s, t = i;
  }
  if (e != r) {
    const o = [];
    for (let s = 0, l = 0; s < r; s++, l++) {
      const a = [], c = n[l % e];
      for (let d = 0; d < c.childCount; d++) {
        let u = c.child(d);
        s + u.attrs.rowspan > r && (u = u.type.create({
          ...u.attrs,
          rowspan: Math.max(1, r - u.attrs.rowspan)
        }, u.content)), a.push(u);
      }
      o.push(C.from(a));
    }
    n = o, e = r;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function zT(t, e, n, i, r, o, s) {
  const l = t.doc.type.schema, a = De(l);
  let c, d;
  if (r > e.width) for (let u = 0, f = 0; u < e.height; u++) {
    const h = n.child(u);
    f += h.nodeSize;
    const p = [];
    let m;
    h.lastChild == null || h.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = d || (d = a.header_cell.createAndFill());
    for (let g = e.width; g < r; g++) p.push(m);
    t.insert(t.mapping.slice(s).map(f - 1 + i), p);
  }
  if (o > e.height) {
    const u = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, r); p++) {
      const g = p >= e.width ? !1 : n.nodeAt(e.map[m + p]).type == a.header_cell;
      u.push(g ? d || (d = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
    }
    const f = a.row.create(null, C.from(u)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(s).map(i + n.nodeSize - 2), h);
  }
  return !!(c || d);
}
function lf(t, e, n, i, r, o, s, l) {
  if (s == 0 || s == e.height) return !1;
  let a = !1;
  for (let c = r; c < o; c++) {
    const d = s * e.width + c, u = e.map[d];
    if (e.map[d - e.width] == u) {
      a = !0;
      const f = n.nodeAt(u), { top: h, left: p } = e.findCell(u);
      t.setNodeMarkup(t.mapping.slice(l).map(u + i), null, {
        ...f.attrs,
        rowspan: s - h
      }), t.insert(t.mapping.slice(l).map(e.positionAt(s, p, n)), f.type.createAndFill({
        ...f.attrs,
        rowspan: h + f.attrs.rowspan - s
      })), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function af(t, e, n, i, r, o, s, l) {
  if (s == 0 || s == e.width) return !1;
  let a = !1;
  for (let c = r; c < o; c++) {
    const d = c * e.width + s, u = e.map[d];
    if (e.map[d - 1] == u) {
      a = !0;
      const f = n.nodeAt(u), h = e.colCount(u), p = t.mapping.slice(l).map(u + i);
      t.setNodeMarkup(p, null, Kn(f.attrs, s - h, f.attrs.colspan - (s - h))), t.insert(p + f.nodeSize, f.type.createAndFill(Kn(f.attrs, 0, s - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function cf(t, e, n, i, r) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let s = ge.get(o);
  const { top: l, left: a } = i, c = a + r.width, d = l + r.height, u = t.tr;
  let f = 0;
  function h() {
    if (o = n ? u.doc.nodeAt(n - 1) : u.doc, !o) throw new Error("No table found");
    s = ge.get(o), f = u.mapping.maps.length;
  }
  zT(u, s, o, n, c, d, f) && h(), lf(u, s, o, n, a, c, l, f) && h(), lf(u, s, o, n, a, c, d, f) && h(), af(u, s, o, n, l, d, a, f) && h(), af(u, s, o, n, l, d, c, f) && h();
  for (let p = l; p < d; p++) {
    const m = s.positionAt(p, a, o), g = s.positionAt(p, c, o);
    u.replace(u.mapping.slice(f).map(m + n), u.mapping.slice(f).map(g + n), new L(r.rows[p - l], 0, 0));
  }
  h(), u.setSelection(new le(u.doc.resolve(n + s.positionAt(l, a, o)), u.doc.resolve(n + s.positionAt(d - 1, c - 1, o)))), e(u);
}
const $T = nc({
  ArrowLeft: Jr("horiz", -1),
  ArrowRight: Jr("horiz", 1),
  ArrowUp: Jr("vert", -1),
  ArrowDown: Jr("vert", 1),
  "Shift-ArrowLeft": Xr("horiz", -1),
  "Shift-ArrowRight": Xr("horiz", 1),
  "Shift-ArrowUp": Xr("vert", -1),
  "Shift-ArrowDown": Xr("vert", 1),
  Backspace: Gr,
  "Mod-Backspace": Gr,
  Delete: Gr,
  "Mod-Delete": Gr
});
function mo(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Jr(t, e) {
  return (n, i, r) => {
    if (!r) return !1;
    const o = n.selection;
    if (o instanceof le) return mo(n, i, B.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const s = Og(r, t, e);
    if (s == null) return !1;
    if (t == "horiz") return mo(n, i, B.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(s), a = Sg(l, t, e);
      let c;
      return a ? c = B.near(a, 1) : e < 0 ? c = B.near(n.doc.resolve(l.before(-1)), -1) : c = B.near(n.doc.resolve(l.after(-1)), 1), mo(n, i, c);
    }
  };
}
function Xr(t, e) {
  return (n, i, r) => {
    if (!r) return !1;
    const o = n.selection;
    let s;
    if (o instanceof le) s = o;
    else {
      const a = Og(r, t, e);
      if (a == null) return !1;
      s = new le(n.doc.resolve(a));
    }
    const l = Sg(s.$headCell, t, e);
    return l ? mo(n, i, new le(s.$anchorCell, l)) : !1;
  };
}
function BT(t, e) {
  const n = t.state.doc, i = jn(n.resolve(e));
  return i ? (t.dispatch(t.state.tr.setSelection(new le(i))), !0) : !1;
}
function FT(t, e, n) {
  if (!at(t.state)) return !1;
  let i = DT(n);
  const r = t.state.selection;
  if (r instanceof le) {
    i || (i = {
      width: 1,
      height: 1,
      rows: [C.from(ma(De(t.state.schema).cell, n))]
    });
    const o = r.$anchorCell.node(-1), s = r.$anchorCell.start(-1), l = ge.get(o).rectBetween(r.$anchorCell.pos - s, r.$headCell.pos - s);
    return i = _T(i, l.right - l.left, l.bottom - l.top), cf(t.state, t.dispatch, s, l, i), !0;
  } else if (i) {
    const o = Us(t.state), s = o.start(-1);
    return cf(t.state, t.dispatch, s, ge.get(o.node(-1)).findCell(o.pos - s), i), !0;
  } else return !1;
}
function WT(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const i = df(t, e.target);
  let r;
  if (e.shiftKey && t.state.selection instanceof le)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && i && (r = jn(t.state.selection.$anchor)) != null && ((n = yl(t, e)) === null || n === void 0 ? void 0 : n.pos) != r.pos)
    o(r, e), e.preventDefault();
  else if (!i) return;
  function o(a, c) {
    let d = yl(t, c);
    const u = sn.getState(t.state) == null;
    if (!d || !Sc(a, d)) if (u) d = a;
    else return;
    const f = new le(a, d);
    if (u || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      u && h.setMeta(sn, a.pos), t.dispatch(h);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", l), sn.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(sn, -1));
  }
  function l(a) {
    const c = a, d = sn.getState(t.state);
    let u;
    if (d != null) u = t.state.doc.resolve(d);
    else if (df(t, c.target) != i && (u = yl(t, e), !u))
      return s();
    u && o(u, c);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", l);
}
function Og(t, e, n) {
  if (!(t.state.selection instanceof I)) return null;
  const { $head: i } = t.state.selection;
  for (let r = i.depth - 1; r >= 0; r--) {
    const o = i.node(r);
    if ((n < 0 ? i.index(r) : i.indexAfter(r)) != (n < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const s = i.before(r), l = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(l) ? s : null;
    }
  }
  return null;
}
function df(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function yl(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: i, pos: r } = n;
  return i >= 0 && jn(t.state.doc.resolve(i)) || jn(t.state.doc.resolve(r));
}
var UT = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ga(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, ga(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function ga(t, e, n, i, r, o) {
  let s = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let u = 0, f = 0; u < c.childCount; u++) {
      const { colspan: h, colwidth: p } = c.child(u).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = r == f ? o : p && p[m], y = g ? g + "px" : "";
        if (s += g || i, g || (l = !1), a)
          a.style.width != y && (a.style.width = y), a = a.nextSibling;
        else {
          const b = document.createElement("col");
          b.style.width = y, e.appendChild(b);
        }
      }
    }
    for (; a; ) {
      var d;
      const u = a.nextSibling;
      (d = a.parentNode) === null || d === void 0 || d.removeChild(a), a = u;
    }
    l ? (n.style.width = s + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = s + "px");
  }
}
const je = new se("tableColumnResizing");
function jT({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: i = UT, lastColumnResizable: r = !0 } = {}) {
  const o = new ie({
    key: je,
    state: {
      init(s, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, d = De(l.schema).table.name;
        return i && c && (c[d] = (u, f) => new i(u, n, f)), new KT(-1, !1);
      },
      apply(s, l) {
        return l.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const l = je.getState(s);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, l) => {
          qT(s, l, t, r);
        },
        mouseleave: (s) => {
          GT(s);
        },
        mousedown: (s, l) => {
          JT(s, l, e, n);
        }
      },
      decorations: (s) => {
        const l = je.getState(s);
        if (l && l.activeHandle > -1) return eE(s, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var KT = class go {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, i = e.getMeta(je);
    if (i && i.setHandle != null) return new go(i.setHandle, !1);
    if (i && i.setDragging !== void 0) return new go(n.activeHandle, i.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let r = e.mapping.map(n.activeHandle, -1);
      return pa(e.doc.resolve(r)) || (r = -1), new go(r, n.dragging);
    }
    return n;
  }
};
function qT(t, e, n, i) {
  if (!t.editable) return;
  const r = je.getState(t.state);
  if (r && !r.dragging) {
    const o = ZT(e.target);
    let s = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? s = uf(t, e, "left", n) : a - e.clientX <= n && (s = uf(t, e, "right", n));
    }
    if (s != r.activeHandle) {
      if (!i && s !== -1) {
        const l = t.state.doc.resolve(s), a = l.node(-1), c = ge.get(a), d = l.start(-1);
        if (c.colCount(l.pos - d) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Hg(t, s);
    }
  }
}
function GT(t) {
  if (!t.editable) return;
  const e = je.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Hg(t, -1);
}
function JT(t, e, n, i) {
  var r;
  if (!t.editable) return !1;
  const o = (r = t.dom.ownerDocument.defaultView) !== null && r !== void 0 ? r : window, s = je.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging) return !1;
  const l = t.state.doc.nodeAt(s.activeHandle), a = XT(t, s.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(je, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(u) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", d);
    const f = je.getState(t.state);
    f?.dragging && (YT(t, f.activeHandle, ff(f.dragging, u, n)), t.dispatch(t.state.tr.setMeta(je, { setDragging: null })));
  }
  function d(u) {
    if (!u.which) return c(u);
    const f = je.getState(t.state);
    if (f && f.dragging) {
      const h = ff(f.dragging, u, n);
      hf(t, f.activeHandle, h, i);
    }
  }
  return hf(t, s.activeHandle, a, i), o.addEventListener("mouseup", c), o.addEventListener("mousemove", d), e.preventDefault(), !0;
}
function XT(t, e, { colspan: n, colwidth: i }) {
  const r = i && i[i.length - 1];
  if (r) return r;
  const o = t.domAtPos(e);
  let s = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (i)
    for (let a = 0; a < n; a++) i[a] && (s -= i[a], l--);
  return s / l;
}
function ZT(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function uf(t, e, n, i) {
  const r = n == "right" ? -i : i, o = t.posAtCoords({
    left: e.clientX + r,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, l = jn(t.state.doc.resolve(s));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = ge.get(l.node(-1)), c = l.start(-1), d = a.map.indexOf(l.pos - c);
  return d % a.width == 0 ? -1 : c + a.map[d - 1];
}
function ff(t, e, n) {
  const i = e.clientX - t.startX;
  return Math.max(n, t.startWidth + i);
}
function Hg(t, e) {
  t.dispatch(t.state.tr.setMeta(je, { setHandle: e }));
}
function YT(t, e, n) {
  const i = t.state.doc.resolve(e), r = i.node(-1), o = ge.get(r), s = i.start(-1), l = o.colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const d = c * o.width + l;
    if (c && o.map[d] == o.map[d - o.width]) continue;
    const u = o.map[d], f = r.nodeAt(u).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(u);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : QT(f.colspan);
    p[h] = n, a.setNodeMarkup(s + u, null, {
      ...f,
      colwidth: p
    });
  }
  a.docChanged && t.dispatch(a);
}
function hf(t, e, n, i) {
  const r = t.state.doc.resolve(e), o = r.node(-1), s = r.start(-1), l = ge.get(o).colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(r.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && ga(o, a.firstChild, a, i, l, n);
}
function QT(t) {
  return Array(t).fill(0);
}
function eE(t, e) {
  const n = [], i = t.doc.resolve(e), r = i.node(-1);
  if (!r) return Z.empty;
  const o = ge.get(r), s = i.start(-1), l = o.colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const d = l + c * o.width;
    if ((l == o.width - 1 || o.map[d] != o.map[d + 1]) && (c == 0 || o.map[d] != o.map[d - o.width])) {
      var a;
      const u = o.map[d], f = s + u + r.nodeAt(u).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = je.getState(t)) === null || a === void 0) && a.dragging && n.push(xe.node(s + u, s + u + r.nodeAt(u).nodeSize, { class: "column-resize-dragging" })), n.push(xe.widget(f, h));
    }
  }
  return Z.create(t.doc, n);
}
function tE({ allowTableNodeSelection: t = !1 } = {}) {
  return new ie({
    key: sn,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const i = e.getMeta(sn);
        if (i != null) return i == -1 ? null : i;
        if (n == null || !e.docChanged) return n;
        const { deleted: r, pos: o } = e.mapping.mapResult(n);
        return r ? null : o;
      }
    },
    props: {
      decorations: pT,
      handleDOMEvents: { mousedown: WT },
      createSelectionBetween(e) {
        return sn.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: BT,
      handleKeyDown: $T,
      handlePaste: FT
    },
    appendTransaction(e, n, i) {
      return yT(i, Tg(i, n), t);
    }
  });
}
function nE(t, e) {
  const n = Math.min(t.top, e.top), i = Math.max(t.bottom, e.bottom), r = Math.min(t.left, e.left), o = Math.max(t.right, e.right) - r, s = i - n;
  return new DOMRect(r, n, o, s);
}
var iE = class {
  get middlewares() {
    const t = [];
    return this.floatingUIOptions.flip && t.push(yg(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && t.push(gg(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)), this.floatingUIOptions.offset && t.push(pg(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)), this.floatingUIOptions.arrow && t.push(wg(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(bg(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && t.push(mg(typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0)), this.floatingUIOptions.hide && t.push(vg(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && t.push(kg(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)), t;
  }
  get virtualElement() {
    var t, e;
    const { selection: n } = this.editor.state, i = (t = this.getReferencedVirtualElement) === null || t === void 0 ? void 0 : t.call(this);
    if (i) return i;
    if (!(!((e = this.view) === null || e === void 0 || (e = e.dom) === null || e === void 0) && e.parentNode)) return;
    const r = cm(this.view, n.from, n.to);
    let o = {
      getBoundingClientRect: () => r,
      getClientRects: () => [r]
    };
    if (n instanceof z) {
      let s = this.view.nodeDOM(n.from);
      const l = s.dataset.nodeViewWrapper ? s : s.querySelector("[data-node-view-wrapper]");
      l && (s = l), s && (o = {
        getBoundingClientRect: () => s.getBoundingClientRect(),
        getClientRects: () => [s.getBoundingClientRect()]
      });
    }
    if (n instanceof le) {
      const { $anchorCell: s, $headCell: l } = n, a = s ? s.pos : l.pos, c = l ? l.pos : s.pos, d = this.view.nodeDOM(a), u = this.view.nodeDOM(c);
      if (!d || !u) return;
      const f = d === u ? d.getBoundingClientRect() : nE(d.getBoundingClientRect(), u.getBoundingClientRect());
      o = {
        getBoundingClientRect: () => f,
        getClientRects: () => [f]
      };
    }
    return o;
  }
  constructor({ editor: t, element: e, view: n, pluginKey: i = "bubbleMenu", updateDelay: r = 250, resizeDelay: o = 60, shouldShow: s, appendTo: l, getReferencedVirtualElement: a, options: c }) {
    var d;
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "top",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1,
      onShow: void 0,
      onHide: void 0,
      onUpdate: void 0,
      onDestroy: void 0
    }, this.shouldShow = ({ view: u, state: f, from: h, to: p }) => {
      const { doc: m, selection: g } = f, { empty: y } = g, b = !m.textBetween(h, p).length && Ts(f.selection), v = this.element.contains(document.activeElement);
      return !(!(u.hasFocus() || v) || y || b || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.compositionEndHandler = () => {
      clearTimeout(this.compositionEndTimer), this.compositionEndTimer = window.setTimeout(() => {
        this.editor.isDestroyed || this.update(this.view);
      });
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: u }) => {
      var f;
      if (this.editor.isDestroyed) {
        this.destroy();
        return;
      }
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      u?.relatedTarget && (!((f = this.element.parentNode) === null || f === void 0) && f.contains(u.relatedTarget)) || u?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.handleDebouncedUpdate = (u, f) => {
      const h = !f?.selection.eq(u.state.selection), p = !f?.doc.eq(u.state.doc);
      !h && !p || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(u, h, p, f);
      }, this.updateDelay));
    }, this.updateHandler = (u, f, h, p) => {
      const { composing: m } = u;
      if (!(m || !f && !h)) {
        if (!this.getShouldShow(p)) {
          this.hide();
          return;
        }
        this.show(), this.updatePosition();
      }
    }, this.transactionHandler = ({ transaction: u }) => {
      const f = u.getMeta(this.pluginKey);
      f === "updatePosition" ? this.updatePosition() : f && typeof f == "object" && f.type === "updateOptions" ? this.updateOptions(f.options) : f === "hide" ? this.hide() : f === "show" && (this.updatePosition(), this.show());
    }, this.editor = t, this.element = e, this.view = n, this.pluginKey = i, this.updateDelay = r, this.resizeDelay = o, this.appendTo = l, this.scrollTarget = (d = c?.scrollTarget) !== null && d !== void 0 ? d : window, this.getReferencedVirtualElement = a, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...c
    }, this.element.tabIndex = 0, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.view.dom.addEventListener("compositionend", this.compositionEndHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  updatePosition() {
    if (!this.isVisible) return;
    const t = this.virtualElement;
    t && xg(t, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: e, y: n, strategy: i, middlewareData: r }) => {
      var o, s;
      if (!(!this.isVisible || this.editor.isDestroyed || !this.element.isConnected)) {
        if (!((o = r.hide) === null || o === void 0) && o.referenceHidden || !((s = r.hide) === null || s === void 0) && s.escaped) {
          this.element.style.visibility = "hidden";
          return;
        }
        this.element.style.visibility = "visible", this.element.style.width = "max-content", this.element.style.position = i, this.element.style.left = `${e}px`, this.element.style.top = `${n}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
      }
    });
  }
  update(t, e) {
    const { state: n } = t, i = n.selection.from !== n.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(t, e);
      return;
    }
    const r = !e?.selection.eq(t.state.selection), o = !e?.doc.eq(t.state.doc);
    this.updateHandler(t, r, o, e);
  }
  getShouldShow(t) {
    var e;
    const { state: n } = this.view, { selection: i } = n, { ranges: r } = i, o = Math.min(...r.map((l) => l.$from.pos)), s = Math.max(...r.map((l) => l.$to.pos));
    return ((e = this.shouldShow) === null || e === void 0 ? void 0 : e.call(this, {
      editor: this.editor,
      element: this.element,
      view: this.view,
      state: n,
      oldState: t,
      from: o,
      to: s
    })) || !1;
  }
  show() {
    var t;
    if (this.isVisible) return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const e = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (t = e ?? this.view.dom.parentElement) === null || t === void 0 || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  updateOptions(t) {
    if (t.updateDelay !== void 0 && (this.updateDelay = t.updateDelay), t.resizeDelay !== void 0 && (this.resizeDelay = t.resizeDelay), t.appendTo !== void 0 && (this.appendTo = t.appendTo), t.getReferencedVirtualElement !== void 0 && (this.getReferencedVirtualElement = t.getReferencedVirtualElement), t.shouldShow !== void 0 && t.shouldShow && (this.shouldShow = t.shouldShow), t.options !== void 0) {
      var e;
      const n = (e = t.options.scrollTarget) !== null && e !== void 0 ? e : window;
      n !== this.scrollTarget && (this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.scrollTarget = n, this.scrollTarget.addEventListener("scroll", this.resizeHandler)), this.floatingUIOptions = {
        ...this.floatingUIOptions,
        ...t.options
      };
    }
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.view.dom.removeEventListener("compositionend", this.compositionEndHandler), clearTimeout(this.compositionEndTimer), clearTimeout(this.updateDebounceTimer), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
};
const Rg = (t) => new ie({
  key: typeof t.pluginKey == "string" ? new se(t.pluginKey) : t.pluginKey,
  view: (e) => new iE({
    view: e,
    ...t
  })
});
G.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      appendTo: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [Rg({
      pluginKey: this.options.pluginKey,
      editor: this.editor,
      element: this.options.element,
      updateDelay: this.options.updateDelay,
      options: this.options.options,
      appendTo: this.options.appendTo,
      getReferencedVirtualElement: this.options.getReferencedVirtualElement,
      shouldShow: this.options.shouldShow
    })] : [];
  }
});
var rE = class {
  getTextContent(t) {
    return rm(t, { textSerializers: ac(this.editor.schema) });
  }
  get middlewares() {
    const t = [];
    return this.floatingUIOptions.flip && t.push(yg(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && t.push(gg(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)), this.floatingUIOptions.offset && t.push(pg(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)), this.floatingUIOptions.arrow && t.push(wg(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(bg(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && t.push(mg(typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0)), this.floatingUIOptions.hide && t.push(vg(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && t.push(kg(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)), t;
  }
  constructor({ editor: t, element: e, view: n, pluginKey: i = "floatingMenu", updateDelay: r = 250, resizeDelay: o = 60, options: s, appendTo: l, shouldShow: a }) {
    var c;
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.shouldShow = ({ view: d, state: u }) => {
      const { selection: f } = u, { $anchor: h, empty: p } = f, m = h.depth === 1, g = h.parent.isTextblock && !h.parent.type.spec.code && !h.parent.textContent && h.parent.childCount === 0 && !this.getTextContent(h.parent);
      return !(!d.hasFocus() || !p || !m || !g || !this.editor.isEditable);
    }, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "right",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1
    }, this.updateHandler = (d, u, f, h) => {
      const { composing: p } = d;
      if (!(p || !u && !f)) {
        if (!this.getShouldShow(h)) {
          this.hide();
          return;
        }
        this.updatePosition(), this.show();
      }
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.compositionEndHandler = () => {
      clearTimeout(this.compositionEndTimer), this.compositionEndTimer = window.setTimeout(() => {
        this.editor.isDestroyed || this.update(this.view);
      });
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: d }) => {
      var u;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      d?.relatedTarget && (!((u = this.element.parentNode) === null || u === void 0) && u.contains(d.relatedTarget)) || d?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.transactionHandler = ({ transaction: d }) => {
      const u = d.getMeta(this.pluginKey);
      u === "updatePosition" ? this.updatePosition() : u && typeof u == "object" && u.type === "updateOptions" ? this.updateOptions(u.options) : u === "hide" ? this.hide() : u === "show" && (this.updatePosition(), this.show());
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    }, this.editor = t, this.element = e, this.view = n, this.pluginKey = i, this.updateDelay = r, this.resizeDelay = o, this.appendTo = l, this.scrollTarget = (c = s?.scrollTarget) !== null && c !== void 0 ? c : window, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...s
    }, this.element.tabIndex = 0, a && (this.shouldShow = a), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.view.dom.addEventListener("compositionend", this.compositionEndHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  getShouldShow(t) {
    var e;
    const { state: n } = this.view, { selection: i } = n, { ranges: r } = i, o = Math.min(...r.map((l) => l.$from.pos)), s = Math.max(...r.map((l) => l.$to.pos));
    return (e = this.shouldShow) === null || e === void 0 ? void 0 : e.call(this, {
      editor: this.editor,
      view: this.view,
      state: n,
      oldState: t,
      from: o,
      to: s
    });
  }
  updateOptions(t) {
    if (t.updateDelay !== void 0 && (this.updateDelay = t.updateDelay), t.resizeDelay !== void 0 && (this.resizeDelay = t.resizeDelay), t.appendTo !== void 0 && (this.appendTo = t.appendTo), t.shouldShow !== void 0 && t.shouldShow && (this.shouldShow = t.shouldShow), t.options !== void 0) {
      var e;
      const n = (e = t.options.scrollTarget) !== null && e !== void 0 ? e : window;
      n !== this.scrollTarget && (this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.scrollTarget = n, this.scrollTarget.addEventListener("scroll", this.resizeHandler)), this.floatingUIOptions = {
        ...this.floatingUIOptions,
        ...t.options
      };
    }
  }
  updatePosition() {
    var t;
    if (!(!((t = this.view) === null || t === void 0 || (t = t.dom) === null || t === void 0) && t.parentNode)) return;
    const { selection: e } = this.editor.state, n = cm(this.view, e.from, e.to);
    xg({
      getBoundingClientRect: () => n,
      getClientRects: () => [n]
    }, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: i, y: r, strategy: o, middlewareData: s }) => {
      var l, a;
      if (!((l = s.hide) === null || l === void 0) && l.referenceHidden || !((a = s.hide) === null || a === void 0) && a.escaped) {
        this.element.style.visibility = "hidden";
        return;
      }
      this.element.style.visibility = "visible", this.element.style.width = "max-content", this.element.style.position = o, this.element.style.left = `${i}px`, this.element.style.top = `${r}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(t, e) {
    const n = !e?.selection.eq(t.state.selection), i = !e?.doc.eq(t.state.doc);
    this.updateHandler(t, n, i, e);
  }
  show() {
    var t;
    if (this.isVisible) return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const e = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (t = e ?? this.view.dom.parentElement) === null || t === void 0 || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.view.dom.removeEventListener("compositionend", this.compositionEndHandler), clearTimeout(this.compositionEndTimer), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
};
const Vg = (t) => new ie({
  key: typeof t.pluginKey == "string" ? new se(t.pluginKey) : t.pluginKey,
  view: (e) => new rE({
    view: e,
    ...t
  })
});
G.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      options: {},
      pluginKey: "floatingMenu",
      updateDelay: void 0,
      resizeDelay: void 0,
      appendTo: void 0,
      shouldShow: null
    };
  },
  addCommands() {
    return { updateFloatingMenuPosition: () => ({ tr: t, dispatch: e }) => (e && t.setMeta(this.options.pluginKey, "updatePosition"), !0) };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [Vg({
      pluginKey: this.options.pluginKey,
      editor: this.editor,
      element: this.options.element,
      updateDelay: this.options.updateDelay,
      resizeDelay: this.options.resizeDelay,
      options: this.options.options,
      appendTo: this.options.appendTo,
      shouldShow: this.options.shouldShow
    })] : [];
  }
});
const oE = ne({
  name: "BubbleMenu",
  inheritAttrs: !1,
  props: {
    pluginKey: {
      type: [String, Object],
      default: void 0
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    resizeDelay: {
      type: Number,
      default: void 0
    },
    options: {
      type: Object,
      default: () => ({})
    },
    appendTo: {
      type: [Object, Function],
      default: void 0
    },
    shouldShow: {
      type: Function,
      default: null
    },
    getReferencedVirtualElement: {
      type: Function,
      default: void 0
    }
  },
  setup(t, { slots: e, attrs: n }) {
    var i;
    const r = Y(null), o = (i = t.pluginKey) !== null && i !== void 0 ? i : new se("bubbleMenu");
    return Na(() => {
      const { editor: s, options: l, resizeDelay: a, appendTo: c, shouldShow: d, getReferencedVirtualElement: u, updateDelay: f } = t, h = r.value;
      h && (h.style.visibility = "hidden", h.style.position = "absolute", h.remove(), nh(() => {
        s.registerPlugin(Rg({
          editor: s,
          element: h,
          options: l,
          pluginKey: o,
          resizeDelay: a,
          appendTo: c,
          shouldShow: d,
          getReferencedVirtualElement: u,
          updateDelay: f
        }));
      }));
    }), Va(() => {
      const { editor: s } = t;
      s.unregisterPlugin(o);
    }), () => {
      var s;
      return qn("div", {
        ref: r,
        ...n
      }, (s = e.default) === null || s === void 0 ? void 0 : s.call(e));
    };
  }
});
ne({
  name: "FloatingMenu",
  inheritAttrs: !1,
  props: {
    pluginKey: {
      type: null,
      default: void 0
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    resizeDelay: {
      type: Number,
      default: void 0
    },
    options: {
      type: Object,
      default: () => ({})
    },
    appendTo: {
      type: [Object, Function],
      default: void 0
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(t, { slots: e, attrs: n }) {
    var i;
    const r = Y(null), o = (i = t.pluginKey) !== null && i !== void 0 ? i : new se("floatingMenu");
    return Na(() => {
      const { editor: s, updateDelay: l, resizeDelay: a, options: c, appendTo: d, shouldShow: u } = t, f = r.value;
      f && (f.style.visibility = "hidden", f.style.position = "absolute", f.remove(), s.registerPlugin(Vg({
        pluginKey: o,
        editor: s,
        element: f,
        updateDelay: l,
        resizeDelay: a,
        options: c,
        appendTo: d,
        shouldShow: u
      })));
    }), Va(() => {
      const { editor: s } = t;
      s.unregisterPlugin(o);
    }), () => {
      var s;
      return qn("div", {
        ref: r,
        ...n
      }, (s = e.default) === null || s === void 0 ? void 0 : s.call(e));
    };
  }
});
const sE = /* @__PURE__ */ ne({
  __name: "BubbleMenu",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = Gt(), i = j(() => {
      const l = e.editor.state.selection, a = s(), c = l.node?.type.name === "image", d = l.node?.type.name === "video", u = l instanceof I;
      if (a) return "link";
      if (c) return "image";
      if (d) return "video";
      if (u) return "text";
    }), r = j(() => {
      const { extensions: l = [] } = e.editor.extensionManager, a = l.find((u) => u.name === "base-kit");
      if (!a) return {};
      const { button: c } = a.options?.bubble ?? {};
      return c ? c({
        editor: e.editor,
        extension: a,
        t: A(n)
      }) : {};
    }), o = j(() => i.value ? A(r)?.[i.value] ?? [] : []);
    function s() {
      const { schema: l } = e.editor, a = l.marks.link;
      return a ? e.editor.isActive(a.name) : !1;
    }
    return (l, a) => {
      const c = Ar, d = Ai, u = Mr, f = Mi;
      return ih((N(), F(A(oE), {
        class: "vuetify-pro-tiptap-bubble-menu",
        editor: t.editor
      }, {
        default: E(() => [
          H(f, { class: "vuetify-pro-tiptap-editor__menu-bubble" }, {
            default: E(() => [
              H(u, { class: "d-flex pa-0" }, {
                default: E(() => [
                  H(d, {
                    density: "compact",
                    flat: "",
                    height: "auto",
                    class: "py-1 ps-1"
                  }, {
                    default: E(() => [
                      (N(!0), ue(Ne, null, et(o.value, (h, p) => (N(), ue(Ne, { key: p }, [
                        h.type === "divider" ? (N(), F(c, {
                          key: 0,
                          vertical: "",
                          class: "mx-1 me-2"
                        })) : (N(), F(or(h.component), ci({
                          key: 1,
                          ref_for: !0
                        }, h.componentProps, {
                          editor: t.editor,
                          disabled: t.disabled || h.componentProps?.disabled
                        }), Ia({ _: 2 }, [
                          et(h.componentSlots, (m, g, y) => ({
                            name: `${g}`,
                            fn: E((b) => [
                              (N(), F(or(m), ci({ ref_for: !0 }, b?.props), null, 16))
                            ])
                          }))
                        ]), 1040, ["editor", "disabled"]))
                      ], 64))), 128))
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
      }, 8, ["editor"])), [
        [rh, o.value.length > 0]
      ]);
    };
  }
}), lE = /* @__PURE__ */ ne({
  __name: "TiptapToolbar",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = Gt(), i = j(() => {
      const o = [...e.editor.extensionManager.extensions].sort((l, a) => {
        const c = l.options.sort ?? -1, d = a.options.sort ?? -1;
        return c - d;
      });
      let s = [];
      for (const l of o) {
        const { button: a, divider: c = !1, spacer: d = !1 } = l.options;
        if (!a || !GM(a)) continue;
        const u = a({
          editor: e.editor,
          extension: l,
          t: A(n)
        });
        if (Array.isArray(u)) {
          const f = u.map((h, p) => ({
            button: h,
            divider: p === u.length - 1 ? c : !1,
            spacer: p === 0 ? d : !1
          }));
          s = [...s, ...f];
          continue;
        }
        s.push({ button: u, divider: c, spacer: d });
      }
      return s;
    });
    return (r, o) => {
      const s = Tr, l = Ar, a = Ai;
      return N(), F(a, ci(r.$attrs, {
        density: "compact",
        flat: "",
        height: "auto",
        class: "py-1 ps-1"
      }), {
        default: E(() => [
          (N(!0), ue(Ne, null, et(i.value, (c, d) => (N(), ue(Ne, { key: d }, [
            c.spacer ? (N(), F(s, { key: 0 })) : We("", !0),
            (N(), F(or(c.button.component), ci({ ref_for: !0 }, c.button.componentProps, {
              editor: t.editor,
              disabled: t.disabled || c.button.componentProps?.disabled
            }), Ia({ _: 2 }, [
              et(c.button.componentSlots, (u, f, h) => ({
                name: `${f}`,
                fn: E((p) => [
                  (N(), F(or(u), ci({ ref_for: !0 }, p?.props), null, 16))
                ])
              }))
            ]), 1040, ["editor", "disabled"])),
            c.divider ? (N(), F(l, {
              key: 1,
              vertical: "",
              class: "mx-1 me-2"
            })) : We("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 16);
    };
  }
}), aE = { class: "text-overline me-4" }, cE = { class: "text-overline" }, RR = /* @__PURE__ */ ne({
  inheritAttrs: !1,
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
    const i = t, r = n, o = X1(), s = Da(), { state: l, isFullscreen: a } = cA(), { markdownThemeStyle: c } = Zm(
      j(() => i.markdownTheme),
      (w) => {
        r("update:markdownTheme", w);
      }
    ), d = j(() => {
      const w = jM(i.extensions, l.extensions, "name");
      return [...l.extensions.map((k, S) => {
        const M = i.extensions.find((O) => O.name === k.name);
        return M ? k.configure(M.options) : k;
      }), ...w].map((k, S) => k.configure({ sort: S }));
    }), u = Y(i.modelValue), f = new Zk({
      content: i.modelValue,
      editorProps: {
        handleKeyDown: Gi(function(w, x) {
          return x.key === "Enter" && o.enter && !x.shiftKey ? (r("enter"), !0) : !1;
        }, ta)
      },
      onUpdate: Gi(({ editor: w }) => {
        const x = y(w, i.output);
        u.value = x, r("update:modelValue", x), r("change", { editor: w, output: x });
      }, ta),
      extensions: A(d),
      autofocus: !1,
      editable: !i.disabled,
      injectCSS: !0
    }), { t: h } = Gt(), p = j(() => Ci(i.dark) ? i.dark : Ci(s.current.value.dark) ? s.current.value.dark : !1), m = j(() => [{
      __dark: A(p),
      ...A(c)
    }, i.editorClass]), g = j(() => {
      const w = Ji(i.maxWidth), x = {
        maxWidth: w,
        width: w ? "100%" : void 0,
        margin: w ? "0 auto" : void 0,
        backgroundColor: A(p) ? "#1E1E1E" : "#FFFFFF"
      };
      if (A(a)) return { height: "100%", overflowY: "auto", ...x };
      const k = Ji(i.minHeight), S = Ji(i.maxHeight);
      return {
        minHeight: k,
        maxHeight: S,
        overflowY: "auto",
        ...x
      };
    });
    function y(w, x) {
      return i.removeDefaultWrapper ? x === "html" ? w.isEmpty ? "" : w.getHTML() : x === "json" ? w.isEmpty ? {} : w.getJSON() : x === "text" ? w.isEmpty ? "" : w.getText() : "" : x === "html" ? w.getHTML() : x === "json" ? w.getJSON() : x === "text" ? w.getText() : "";
    }
    const b = Gi((w) => {
      if (!f) return;
      const x = y(f, i.output);
      if (Bu(x, w) || Bu(u.value, w)) return;
      const { from: k, to: S } = f.state.selection;
      f.commands.setContent(w, { emitUpdate: !1 }), f.commands.setTextSelection({ from: k, to: S });
    }, tx), v = (w) => f?.setEditable(!w);
    return Bt(() => i.modelValue, b), Bt(() => i.disabled, v), Z1(() => f?.destroy()), e({ editor: f }), (w, x) => {
      const k = _1, S = Ar, M = Tr, O = Ai, V = Mi, D = P1, W = Zf;
      return N(), F(Y1, {
        to: "body",
        disabled: !A(a)
      }, [
        A(f) ? (N(), ue("div", {
          key: 0,
          class: mt(["vuetify-pro-tiptap", { dense: t.dense }])
        }, [
          H(W, {
            theme: p.value ? "dark" : "light"
          }, {
            default: E(() => [
              t.hideBubble ? We("", !0) : (N(), F(sE, {
                key: 0,
                editor: A(f),
                disabled: t.disableToolbar
              }, null, 8, ["editor", "disabled"])),
              H(D, {
                class: "pt-0",
                "hide-details": "auto",
                "error-messages": t.errorMessages
              }, {
                default: E(() => [
                  H(V, ci({
                    flat: t.flat,
                    outlined: t.outlined,
                    color: p.value ? "grey-darken-4" : "grey-lighten-4"
                  }, w.$attrs, {
                    style: {
                      borderColor: w.$attrs["error-messages"] ? "#ff5252" : void 0,
                      width: "100%"
                    },
                    class: ["vuetify-pro-tiptap-editor", { "vuetify-pro-tiptap-editor--fullscreen": A(a) }]
                  }), {
                    default: E(() => [
                      t.label && !A(a) ? (N(), ue(Ne, { key: 0 }, [
                        H(k, {
                          class: mt(p.value ? "bg-grey-darken-3" : "bg-grey-lighten-3")
                        }, {
                          default: E(() => [
                            Ft(Le(t.label), 1)
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        H(S)
                      ], 64)) : We("", !0),
                      t.hideToolbar ? We("", !0) : (N(), F(lE, {
                        key: 1,
                        class: "vuetify-pro-tiptap-editor__toolbar",
                        editor: A(f),
                        disabled: t.disableToolbar
                      }, null, 8, ["editor", "disabled"])),
                      gt(w.$slots, "editor", $c(Bc({ editor: A(f), props: { class: "vuetify-pro-tiptap-editor__content", "data-testid": "value" } })), () => [
                        H(A(Yk), {
                          class: mt(["vuetify-pro-tiptap-editor__content", m.value]),
                          style: di(g.value),
                          editor: A(f),
                          "data-testid": "value"
                        }, null, 8, ["class", "style", "editor"])
                      ]),
                      gt(w.$slots, "bottom", $c(Bc({ editor: A(f) })), () => [
                        H(O, {
                          class: "px-4",
                          density: "compact",
                          flat: ""
                        }, {
                          default: E(() => [
                            H(M),
                            A(JM)(A(f), "characterCount") ? (N(), ue(Ne, { key: 0 }, [
                              Be("span", aE, Le(A(f).storage.characterCount.words()) + " " + Le(A(h)("editor.words")), 1),
                              Be("span", cE, Le(A(f).storage.characterCount.characters()) + " " + Le(A(h)("editor.characters")), 1)
                            ], 64)) : We("", !0)
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
        ], 2)) : We("", !0)
      ], 8, ["disabled"]);
    };
  }
});
function dE(t, e, n) {
  if (typeof window > "u") throw new Error("getHTMLFromFragment can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead.");
  const i = window.document.createElement("div");
  return vn.fromSchema(e).serializeFragment(t.content, { document: window.document }, i), i.innerHTML;
}
function uE(t, e) {
  if (typeof window > "u") throw new Error("generateHTML can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead.");
  const n = hw(e);
  return dE(an.fromJSON(n, t), n);
}
function fE(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Zr = { exports: {} }, de = {}, Yr = { exports: {} }, An = {}, pf;
function Ng() {
  if (pf) return An;
  pf = 1;
  function t() {
    var o = {};
    return o["align-content"] = !1, o["align-items"] = !1, o["align-self"] = !1, o["alignment-adjust"] = !1, o["alignment-baseline"] = !1, o.all = !1, o["anchor-point"] = !1, o.animation = !1, o["animation-delay"] = !1, o["animation-direction"] = !1, o["animation-duration"] = !1, o["animation-fill-mode"] = !1, o["animation-iteration-count"] = !1, o["animation-name"] = !1, o["animation-play-state"] = !1, o["animation-timing-function"] = !1, o.azimuth = !1, o["backface-visibility"] = !1, o.background = !0, o["background-attachment"] = !0, o["background-clip"] = !0, o["background-color"] = !0, o["background-image"] = !0, o["background-origin"] = !0, o["background-position"] = !0, o["background-repeat"] = !0, o["background-size"] = !0, o["baseline-shift"] = !1, o.binding = !1, o.bleed = !1, o["bookmark-label"] = !1, o["bookmark-level"] = !1, o["bookmark-state"] = !1, o.border = !0, o["border-bottom"] = !0, o["border-bottom-color"] = !0, o["border-bottom-left-radius"] = !0, o["border-bottom-right-radius"] = !0, o["border-bottom-style"] = !0, o["border-bottom-width"] = !0, o["border-collapse"] = !0, o["border-color"] = !0, o["border-image"] = !0, o["border-image-outset"] = !0, o["border-image-repeat"] = !0, o["border-image-slice"] = !0, o["border-image-source"] = !0, o["border-image-width"] = !0, o["border-left"] = !0, o["border-left-color"] = !0, o["border-left-style"] = !0, o["border-left-width"] = !0, o["border-radius"] = !0, o["border-right"] = !0, o["border-right-color"] = !0, o["border-right-style"] = !0, o["border-right-width"] = !0, o["border-spacing"] = !0, o["border-style"] = !0, o["border-top"] = !0, o["border-top-color"] = !0, o["border-top-left-radius"] = !0, o["border-top-right-radius"] = !0, o["border-top-style"] = !0, o["border-top-width"] = !0, o["border-width"] = !0, o.bottom = !1, o["box-decoration-break"] = !0, o["box-shadow"] = !0, o["box-sizing"] = !0, o["box-snap"] = !0, o["box-suppress"] = !0, o["break-after"] = !0, o["break-before"] = !0, o["break-inside"] = !0, o["caption-side"] = !1, o.chains = !1, o.clear = !0, o.clip = !1, o["clip-path"] = !1, o["clip-rule"] = !1, o.color = !0, o["color-interpolation-filters"] = !0, o["column-count"] = !1, o["column-fill"] = !1, o["column-gap"] = !1, o["column-rule"] = !1, o["column-rule-color"] = !1, o["column-rule-style"] = !1, o["column-rule-width"] = !1, o["column-span"] = !1, o["column-width"] = !1, o.columns = !1, o.contain = !1, o.content = !1, o["counter-increment"] = !1, o["counter-reset"] = !1, o["counter-set"] = !1, o.crop = !1, o.cue = !1, o["cue-after"] = !1, o["cue-before"] = !1, o.cursor = !1, o.direction = !1, o.display = !0, o["display-inside"] = !0, o["display-list"] = !0, o["display-outside"] = !0, o["dominant-baseline"] = !1, o.elevation = !1, o["empty-cells"] = !1, o.filter = !1, o.flex = !1, o["flex-basis"] = !1, o["flex-direction"] = !1, o["flex-flow"] = !1, o["flex-grow"] = !1, o["flex-shrink"] = !1, o["flex-wrap"] = !1, o.float = !1, o["float-offset"] = !1, o["flood-color"] = !1, o["flood-opacity"] = !1, o["flow-from"] = !1, o["flow-into"] = !1, o.font = !0, o["font-family"] = !0, o["font-feature-settings"] = !0, o["font-kerning"] = !0, o["font-language-override"] = !0, o["font-size"] = !0, o["font-size-adjust"] = !0, o["font-stretch"] = !0, o["font-style"] = !0, o["font-synthesis"] = !0, o["font-variant"] = !0, o["font-variant-alternates"] = !0, o["font-variant-caps"] = !0, o["font-variant-east-asian"] = !0, o["font-variant-ligatures"] = !0, o["font-variant-numeric"] = !0, o["font-variant-position"] = !0, o["font-weight"] = !0, o.grid = !1, o["grid-area"] = !1, o["grid-auto-columns"] = !1, o["grid-auto-flow"] = !1, o["grid-auto-rows"] = !1, o["grid-column"] = !1, o["grid-column-end"] = !1, o["grid-column-start"] = !1, o["grid-row"] = !1, o["grid-row-end"] = !1, o["grid-row-start"] = !1, o["grid-template"] = !1, o["grid-template-areas"] = !1, o["grid-template-columns"] = !1, o["grid-template-rows"] = !1, o["hanging-punctuation"] = !1, o.height = !0, o.hyphens = !1, o.icon = !1, o["image-orientation"] = !1, o["image-resolution"] = !1, o["ime-mode"] = !1, o["initial-letters"] = !1, o["inline-box-align"] = !1, o["justify-content"] = !1, o["justify-items"] = !1, o["justify-self"] = !1, o.left = !1, o["letter-spacing"] = !0, o["lighting-color"] = !0, o["line-box-contain"] = !1, o["line-break"] = !1, o["line-grid"] = !1, o["line-height"] = !1, o["line-snap"] = !1, o["line-stacking"] = !1, o["line-stacking-ruby"] = !1, o["line-stacking-shift"] = !1, o["line-stacking-strategy"] = !1, o["list-style"] = !0, o["list-style-image"] = !0, o["list-style-position"] = !0, o["list-style-type"] = !0, o.margin = !0, o["margin-bottom"] = !0, o["margin-left"] = !0, o["margin-right"] = !0, o["margin-top"] = !0, o["marker-offset"] = !1, o["marker-side"] = !1, o.marks = !1, o.mask = !1, o["mask-box"] = !1, o["mask-box-outset"] = !1, o["mask-box-repeat"] = !1, o["mask-box-slice"] = !1, o["mask-box-source"] = !1, o["mask-box-width"] = !1, o["mask-clip"] = !1, o["mask-image"] = !1, o["mask-origin"] = !1, o["mask-position"] = !1, o["mask-repeat"] = !1, o["mask-size"] = !1, o["mask-source-type"] = !1, o["mask-type"] = !1, o["max-height"] = !0, o["max-lines"] = !1, o["max-width"] = !0, o["min-height"] = !0, o["min-width"] = !0, o["move-to"] = !1, o["nav-down"] = !1, o["nav-index"] = !1, o["nav-left"] = !1, o["nav-right"] = !1, o["nav-up"] = !1, o["object-fit"] = !1, o["object-position"] = !1, o.opacity = !1, o.order = !1, o.orphans = !1, o.outline = !1, o["outline-color"] = !1, o["outline-offset"] = !1, o["outline-style"] = !1, o["outline-width"] = !1, o.overflow = !1, o["overflow-wrap"] = !1, o["overflow-x"] = !1, o["overflow-y"] = !1, o.padding = !0, o["padding-bottom"] = !0, o["padding-left"] = !0, o["padding-right"] = !0, o["padding-top"] = !0, o.page = !1, o["page-break-after"] = !1, o["page-break-before"] = !1, o["page-break-inside"] = !1, o["page-policy"] = !1, o.pause = !1, o["pause-after"] = !1, o["pause-before"] = !1, o.perspective = !1, o["perspective-origin"] = !1, o.pitch = !1, o["pitch-range"] = !1, o["play-during"] = !1, o.position = !1, o["presentation-level"] = !1, o.quotes = !1, o["region-fragment"] = !1, o.resize = !1, o.rest = !1, o["rest-after"] = !1, o["rest-before"] = !1, o.richness = !1, o.right = !1, o.rotation = !1, o["rotation-point"] = !1, o["ruby-align"] = !1, o["ruby-merge"] = !1, o["ruby-position"] = !1, o["shape-image-threshold"] = !1, o["shape-outside"] = !1, o["shape-margin"] = !1, o.size = !1, o.speak = !1, o["speak-as"] = !1, o["speak-header"] = !1, o["speak-numeral"] = !1, o["speak-punctuation"] = !1, o["speech-rate"] = !1, o.stress = !1, o["string-set"] = !1, o["tab-size"] = !1, o["table-layout"] = !1, o["text-align"] = !0, o["text-align-last"] = !0, o["text-combine-upright"] = !0, o["text-decoration"] = !0, o["text-decoration-color"] = !0, o["text-decoration-line"] = !0, o["text-decoration-skip"] = !0, o["text-decoration-style"] = !0, o["text-emphasis"] = !0, o["text-emphasis-color"] = !0, o["text-emphasis-position"] = !0, o["text-emphasis-style"] = !0, o["text-height"] = !0, o["text-indent"] = !0, o["text-justify"] = !0, o["text-orientation"] = !0, o["text-overflow"] = !0, o["text-shadow"] = !0, o["text-space-collapse"] = !0, o["text-transform"] = !0, o["text-underline-position"] = !0, o["text-wrap"] = !0, o.top = !1, o.transform = !1, o["transform-origin"] = !1, o["transform-style"] = !1, o.transition = !1, o["transition-delay"] = !1, o["transition-duration"] = !1, o["transition-property"] = !1, o["transition-timing-function"] = !1, o["unicode-bidi"] = !1, o["vertical-align"] = !1, o.visibility = !1, o["voice-balance"] = !1, o["voice-duration"] = !1, o["voice-family"] = !1, o["voice-pitch"] = !1, o["voice-range"] = !1, o["voice-rate"] = !1, o["voice-stress"] = !1, o["voice-volume"] = !1, o.volume = !1, o["white-space"] = !1, o.widows = !1, o.width = !0, o["will-change"] = !1, o["word-break"] = !0, o["word-spacing"] = !0, o["word-wrap"] = !0, o["wrap-flow"] = !1, o["wrap-through"] = !1, o["writing-mode"] = !1, o["z-index"] = !1, o;
  }
  function e(o, s, l) {
  }
  function n(o, s, l) {
  }
  var i = /javascript\s*\:/img;
  function r(o, s) {
    return i.test(s) ? "" : s;
  }
  return An.whiteList = t(), An.getDefaultWhiteList = t, An.onAttr = e, An.onIgnoreAttr = n, An.safeAttrValue = r, An;
}
var bl, mf;
function Ig() {
  return mf || (mf = 1, bl = {
    indexOf: function(t, e) {
      var n, i;
      if (Array.prototype.indexOf)
        return t.indexOf(e);
      for (n = 0, i = t.length; n < i; n++)
        if (t[n] === e)
          return n;
      return -1;
    },
    forEach: function(t, e, n) {
      var i, r;
      if (Array.prototype.forEach)
        return t.forEach(e, n);
      for (i = 0, r = t.length; i < r; i++)
        e.call(n, t[i], i, t);
    },
    trim: function(t) {
      return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(t) {
      return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "");
    }
  }), bl;
}
var vl, gf;
function hE() {
  if (gf) return vl;
  gf = 1;
  var t = Ig();
  function e(n, i) {
    n = t.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var r = n.length, o = !1, s = 0, l = 0, a = "";
    function c() {
      if (!o) {
        var f = t.trim(n.slice(s, l)), h = f.indexOf(":");
        if (h !== -1) {
          var p = t.trim(f.slice(0, h)), m = t.trim(f.slice(h + 1));
          if (p) {
            var g = i(s, a.length, p, m, f);
            g && (a += g + "; ");
          }
        }
      }
      s = l + 1;
    }
    for (; l < r; l++) {
      var d = n[l];
      if (d === "/" && n[l + 1] === "*") {
        var u = n.indexOf("*/", l + 2);
        if (u === -1) break;
        l = u + 1, s = l + 1, o = !1;
      } else d === "(" ? o = !0 : d === ")" ? o = !1 : d === ";" ? o || c() : d === `
` && c();
    }
    return t.trim(a);
  }
  return vl = e, vl;
}
var wl, yf;
function pE() {
  if (yf) return wl;
  yf = 1;
  var t = Ng(), e = hE();
  Ig();
  function n(o) {
    return o == null;
  }
  function i(o) {
    var s = {};
    for (var l in o)
      s[l] = o[l];
    return s;
  }
  function r(o) {
    o = i(o || {}), o.whiteList = o.whiteList || t.whiteList, o.onAttr = o.onAttr || t.onAttr, o.onIgnoreAttr = o.onIgnoreAttr || t.onIgnoreAttr, o.safeAttrValue = o.safeAttrValue || t.safeAttrValue, this.options = o;
  }
  return r.prototype.process = function(o) {
    if (o = o || "", o = o.toString(), !o) return "";
    var s = this, l = s.options, a = l.whiteList, c = l.onAttr, d = l.onIgnoreAttr, u = l.safeAttrValue, f = e(o, function(h, p, m, g, y) {
      var b = a[m], v = !1;
      if (b === !0 ? v = b : typeof b == "function" ? v = b(g) : b instanceof RegExp && (v = b.test(g)), v !== !0 && (v = !1), g = u(m, g), !!g) {
        var w = {
          position: p,
          sourcePosition: h,
          source: y,
          isWhite: v
        };
        if (v) {
          var x = c(m, g, w);
          return n(x) ? m + ":" + g : x;
        } else {
          var x = d(m, g, w);
          if (!n(x))
            return x;
        }
      }
    });
    return f;
  }, wl = r, wl;
}
var bf;
function ya() {
  return bf || (bf = 1, (function(t, e) {
    var n = Ng(), i = pE();
    function r(s, l) {
      var a = new i(l);
      return a.process(s);
    }
    e = t.exports = r, e.FilterCSS = i;
    for (var o in n) e[o] = n[o];
    typeof window < "u" && (window.filterCSS = t.exports);
  })(Yr, Yr.exports)), Yr.exports;
}
var kl, vf;
function Cc() {
  return vf || (vf = 1, kl = {
    indexOf: function(t, e) {
      var n, i;
      if (Array.prototype.indexOf)
        return t.indexOf(e);
      for (n = 0, i = t.length; n < i; n++)
        if (t[n] === e)
          return n;
      return -1;
    },
    forEach: function(t, e, n) {
      var i, r;
      if (Array.prototype.forEach)
        return t.forEach(e, n);
      for (i = 0, r = t.length; i < r; i++)
        e.call(n, t[i], i, t);
    },
    trim: function(t) {
      return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(t) {
      var e = /\s|\n|\t/, n = e.exec(t);
      return n ? n.index : -1;
    }
  }), kl;
}
var wf;
function Dg() {
  if (wf) return de;
  wf = 1;
  var t = ya().FilterCSS, e = ya().getDefaultWhiteList, n = Cc();
  function i() {
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
  var r = new t();
  function o(R, K, P) {
  }
  function s(R, K, P) {
  }
  function l(R, K, P) {
  }
  function a(R, K, P) {
  }
  function c(R) {
    return R.replace(u, "&lt;").replace(f, "&gt;");
  }
  function d(R, K, P, U) {
    if (P = V(P), K === "href" || K === "src") {
      if (P = n.trim(P), P === "#") return "#";
      if (!(P.substr(0, 7) === "http://" || P.substr(0, 8) === "https://" || P.substr(0, 7) === "mailto:" || P.substr(0, 4) === "tel:" || P.substr(0, 11) === "data:image/" || P.substr(0, 6) === "ftp://" || P.substr(0, 2) === "./" || P.substr(0, 3) === "../" || P[0] === "#" || P[0] === "/"))
        return "";
    } else if (K === "background") {
      if (b.lastIndex = 0, b.test(P))
        return "";
    } else if (K === "style") {
      if (v.lastIndex = 0, v.test(P) || (w.lastIndex = 0, w.test(P) && (b.lastIndex = 0, b.test(P))))
        return "";
      U !== !1 && (U = U || r, P = U.process(P));
    }
    return P = D(P), P;
  }
  var u = /</g, f = />/g, h = /"/g, p = /&quot;/g, m = /&#([a-zA-Z0-9]*);?/gim, g = /&colon;?/gim, y = /&newline;?/gim, b = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, v = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, w = /u\s*r\s*l\s*\(.*/gi;
  function x(R) {
    return R.replace(h, "&quot;");
  }
  function k(R) {
    return R.replace(p, '"');
  }
  function S(R) {
    return R.replace(m, function(P, U) {
      return U[0] === "x" || U[0] === "X" ? String.fromCharCode(parseInt(U.substr(1), 16)) : String.fromCharCode(parseInt(U, 10));
    });
  }
  function M(R) {
    return R.replace(g, ":").replace(y, " ");
  }
  function O(R) {
    for (var K = "", P = 0, U = R.length; P < U; P++)
      K += R.charCodeAt(P) < 32 ? " " : R.charAt(P);
    return n.trim(K);
  }
  function V(R) {
    return R = k(R), R = S(R), R = M(R), R = O(R), R;
  }
  function D(R) {
    return R = x(R), R = c(R), R;
  }
  function W() {
    return "";
  }
  function X(R, K) {
    typeof K != "function" && (K = function() {
    });
    var P = !Array.isArray(R);
    function U(Pe) {
      return P ? !0 : n.indexOf(R, Pe) !== -1;
    }
    var Me = [], tt = !1;
    return {
      onIgnoreTag: function(Pe, ct, Je) {
        if (U(Pe))
          if (Je.isClosing) {
            var Xt = "[/removed]", Js = Je.position + Xt.length;
            return Me.push([
              tt !== !1 ? tt : Je.position,
              Js
            ]), tt = !1, Xt;
          } else
            return tt || (tt = Je.position), "[removed]";
        else
          return K(Pe, ct, Je);
      },
      remove: function(Pe) {
        var ct = "", Je = 0;
        return n.forEach(Me, function(Xt) {
          ct += Pe.slice(Je, Xt[0]), Je = Xt[1];
        }), ct += Pe.slice(Je), ct;
      }
    };
  }
  function J(R) {
    for (var K = "", P = 0; P < R.length; ) {
      var U = R.indexOf("<!--", P);
      if (U === -1) {
        K += R.slice(P);
        break;
      }
      K += R.slice(P, U);
      var Me = R.indexOf("-->", U);
      if (Me === -1)
        break;
      P = Me + 3;
    }
    return K;
  }
  function Q(R) {
    var K = R.split("");
    return K = K.filter(function(P) {
      var U = P.charCodeAt(0);
      return U === 127 ? !1 : U <= 31 ? U === 10 || U === 13 : !0;
    }), K.join("");
  }
  return de.whiteList = i(), de.getDefaultWhiteList = i, de.onTag = o, de.onIgnoreTag = s, de.onTagAttr = l, de.onIgnoreTagAttr = a, de.safeAttrValue = d, de.escapeHtml = c, de.escapeQuote = x, de.unescapeQuote = k, de.escapeHtmlEntities = S, de.escapeDangerHtml5Entities = M, de.clearNonPrintableCharacter = O, de.friendlyAttrValue = V, de.escapeAttrValue = D, de.onIgnoreTagStripAll = W, de.StripTagBody = X, de.stripCommentTag = J, de.stripBlankChar = Q, de.attributeWrapSign = '"', de.cssFilter = r, de.getDefaultCSSWhiteList = e, de;
}
var Qr = {}, kf;
function Pg() {
  if (kf) return Qr;
  kf = 1;
  var t = Cc();
  function e(u) {
    var f = t.spaceIndex(u), h;
    return f === -1 ? h = u.slice(1, -1) : h = u.slice(1, f + 1), h = t.trim(h).toLowerCase(), h.slice(0, 1) === "/" && (h = h.slice(1)), h.slice(-1) === "/" && (h = h.slice(0, -1)), h;
  }
  function n(u) {
    return u.slice(0, 2) === "</";
  }
  function i(u, f, h) {
    var p = "", m = 0, g = !1, y = !1, b = 0, v = u.length, w = "", x = "";
    e: for (b = 0; b < v; b++) {
      var k = u.charAt(b);
      if (g === !1) {
        if (k === "<") {
          g = b;
          continue;
        }
      } else if (y === !1) {
        if (k === "<") {
          p += h(u.slice(m, b)), g = b, m = b;
          continue;
        }
        if (k === ">" || b === v - 1) {
          p += h(u.slice(m, g)), x = u.slice(g, b + 1), w = e(x), p += f(
            g,
            p.length,
            w,
            x,
            n(x)
          ), m = b + 1, g = !1;
          continue;
        }
        if (k === '"' || k === "'")
          for (var S = 1, M = u.charAt(b - S); M.trim() === "" || M === "="; ) {
            if (M === "=") {
              y = k;
              continue e;
            }
            M = u.charAt(b - ++S);
          }
      } else if (k === y) {
        y = !1;
        continue;
      }
    }
    return m < v && (p += h(u.substr(m))), p;
  }
  var r = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(u, f) {
    var h = 0, p = 0, m = [], g = !1, y = u.length;
    function b(S, M) {
      if (S = t.trim(S), S = S.replace(r, "").toLowerCase(), !(S.length < 1)) {
        var O = f(S, M || "");
        O && m.push(O);
      }
    }
    for (var v = 0; v < y; v++) {
      var w = u.charAt(v), x, k;
      if (g === !1 && w === "=") {
        g = u.slice(h, v), h = v + 1, p = u.charAt(h) === '"' || u.charAt(h) === "'" ? h : l(u, v + 1);
        continue;
      }
      if (g !== !1 && v === p) {
        if (k = u.indexOf(w, v + 1), k === -1)
          break;
        x = t.trim(u.slice(p + 1, k)), b(g, x), g = !1, v = k, h = v + 1;
        continue;
      }
      if (/\s|\n|\t/.test(w))
        if (u = u.replace(/\s|\n|\t/g, " "), g === !1)
          if (k = s(u, v), k === -1) {
            x = t.trim(u.slice(h, v)), b(x), g = !1, h = v + 1;
            continue;
          } else {
            v = k - 1;
            continue;
          }
        else if (k = a(u, v - 1), k === -1) {
          x = t.trim(u.slice(h, v)), x = d(x), b(g, x), g = !1, h = v + 1;
          continue;
        } else
          continue;
    }
    return h < u.length && (g === !1 ? b(u.slice(h)) : b(g, d(t.trim(u.slice(h))))), t.trim(m.join(" "));
  }
  function s(u, f) {
    for (; f < u.length; f++) {
      var h = u[f];
      if (h !== " ")
        return h === "=" ? f : -1;
    }
  }
  function l(u, f) {
    for (; f < u.length; f++) {
      var h = u[f];
      if (h !== " ")
        return h === "'" || h === '"' ? f : -1;
    }
  }
  function a(u, f) {
    for (; f > 0; f--) {
      var h = u[f];
      if (h !== " ")
        return h === "=" ? f : -1;
    }
  }
  function c(u) {
    return u[0] === '"' && u[u.length - 1] === '"' || u[0] === "'" && u[u.length - 1] === "'";
  }
  function d(u) {
    return c(u) ? u.substr(1, u.length - 2) : u;
  }
  return Qr.parseTag = i, Qr.parseAttr = o, Qr;
}
var xl, xf;
function mE() {
  if (xf) return xl;
  xf = 1;
  var t = ya().FilterCSS, e = Dg(), n = Pg(), i = n.parseTag, r = n.parseAttr, o = Cc();
  function s(u) {
    return u == null;
  }
  function l(u) {
    var f = o.spaceIndex(u);
    if (f === -1)
      return {
        html: "",
        closing: u[u.length - 2] === "/"
      };
    u = o.trim(u.slice(f + 1, -1));
    var h = u[u.length - 1] === "/";
    return h && (u = o.trim(u.slice(0, -1))), {
      html: u,
      closing: h
    };
  }
  function a(u) {
    var f = {};
    for (var h in u)
      f[h] = u[h];
    return f;
  }
  function c(u) {
    var f = {};
    for (var h in u)
      Array.isArray(u[h]) ? f[h.toLowerCase()] = u[h].map(function(p) {
        return p.toLowerCase();
      }) : f[h.toLowerCase()] = u[h];
    return f;
  }
  function d(u) {
    u = a(u || {}), u.stripIgnoreTag && (u.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), u.onIgnoreTag = e.onIgnoreTagStripAll), u.whiteList || u.allowList ? u.whiteList = c(u.whiteList || u.allowList) : u.whiteList = e.whiteList, this.attributeWrapSign = u.singleQuotedAttributeValue === !0 ? "'" : e.attributeWrapSign, u.onTag = u.onTag || e.onTag, u.onTagAttr = u.onTagAttr || e.onTagAttr, u.onIgnoreTag = u.onIgnoreTag || e.onIgnoreTag, u.onIgnoreTagAttr = u.onIgnoreTagAttr || e.onIgnoreTagAttr, u.safeAttrValue = u.safeAttrValue || e.safeAttrValue, u.escapeHtml = u.escapeHtml || e.escapeHtml, this.options = u, u.css === !1 ? this.cssFilter = !1 : (u.css = u.css || {}, this.cssFilter = new t(u.css));
  }
  return d.prototype.process = function(u) {
    if (u = u || "", u = u.toString(), !u) return "";
    var f = this, h = f.options, p = h.whiteList, m = h.onTag, g = h.onIgnoreTag, y = h.onTagAttr, b = h.onIgnoreTagAttr, v = h.safeAttrValue, w = h.escapeHtml, x = f.attributeWrapSign, k = f.cssFilter;
    h.stripBlankChar && (u = e.stripBlankChar(u)), h.allowCommentTag || (u = e.stripCommentTag(u));
    var S = !1;
    h.stripIgnoreTagBody && (S = e.StripTagBody(
      h.stripIgnoreTagBody,
      g
    ), g = S.onIgnoreTag);
    var M = i(
      u,
      function(O, V, D, W, X) {
        var J = {
          sourcePosition: O,
          position: V,
          isClosing: X,
          isWhite: Object.prototype.hasOwnProperty.call(p, D)
        }, Q = m(D, W, J);
        if (!s(Q)) return Q;
        if (J.isWhite) {
          if (J.isClosing)
            return "</" + D + ">";
          var R = l(W), K = p[D], P = r(R.html, function(U, Me) {
            var tt = o.indexOf(K, U) !== -1, Pe = y(D, U, Me, tt);
            return s(Pe) ? tt ? (Me = v(D, U, Me, k), Me ? U + "=" + x + Me + x : U) : (Pe = b(D, U, Me, tt), s(Pe) ? void 0 : Pe) : Pe;
          });
          return W = "<" + D, P && (W += " " + P), R.closing && (W += " /"), W += ">", W;
        } else
          return Q = g(D, W, J), s(Q) ? w(W) : Q;
      },
      w
    );
    return S && (M = S.remove(M)), M;
  }, xl = d, xl;
}
var Sf;
function gE() {
  return Sf || (Sf = 1, (function(t, e) {
    var n = Dg(), i = Pg(), r = mE();
    function o(l, a) {
      var c = new r(a);
      return c.process(l);
    }
    e = t.exports = o, e.filterXSS = o, e.FilterXSS = r, (function() {
      for (var l in n)
        e[l] = n[l];
      for (var a in i)
        e[a] = i[a];
    })(), typeof window < "u" && (window.filterXSS = t.exports);
    function s() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    s() && (self.filterXSS = t.exports);
  })(Zr, Zr.exports)), Zr.exports;
}
var _g = gE();
const yE = /* @__PURE__ */ fE(_g), bE = {
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
  mark: ["class", "style"],
  sub: ["class", "style"],
  sup: ["class", "style"],
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
}, vE = ["innerHTML"], VR = /* @__PURE__ */ ne({
  __name: "VuetifyViewer",
  props: {
    value: { default: "" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    xssOptions: { default: () => bE },
    iframeSrcWhitelist: { default: void 0 },
    extensions: { default: () => [] }
  },
  setup(t) {
    const e = t, { state: n } = Vs(), i = Da(), { markdownThemeStyle: r } = Zm(j(() => e.markdownTheme)), o = j(() => [...n.extensions, ...e.extensions]), s = j(() => Ci(e.dark) ? e.dark : Ci(i.current.value.dark) ? i.current.value.dark : !1), l = j(() => ({
      __dark: A(s),
      dense: e.dense,
      view: !0,
      ...A(r)
    })), a = j(() => hi(e.value) ? e.value : uE(e.value, A(o)));
    function c(u) {
      const f = e.iframeSrcWhitelist;
      return f ? f.some((h) => hi(h) ? u.startsWith(h) : h.test(u)) : !0;
    }
    const d = j(() => {
      const u = A(a).replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/").replace("https://vimeo.com/", "https://player.vimeo.com/video/"), f = e.xssOptions;
      return yE(u, {
        whiteList: f,
        css: !1,
        onTagAttr(h, p, m) {
          if (h === "iframe" && p === "src" && !c(_g.friendlyAttrValue(m)))
            return "";
        }
      });
    });
    return (u, f) => (N(), ue("div", {
      class: mt(["vuetify-pro-tiptap-editor__content", l.value]),
      style: { width: "100%" }
    }, [
      gt(u.$slots, "before"),
      Be("div", {
        class: "content",
        innerHTML: d.value
      }, null, 8, vE),
      gt(u.$slots, "after")
    ], 2));
  }
});
function wE(t = {}) {
  return new ie({
    view(e) {
      return new kE(e, t);
    }
  });
}
class kE {
  constructor(e, n) {
    var i;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.lastDragEvent = null, this.width = (i = n.width) !== null && i !== void 0 ? i : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((r) => {
      let o = (s) => {
        this[r](s);
      };
      return e.dom.addEventListener(r, o), { name: r, handler: o };
    });
  }
  destroy() {
    this.setCursor(null), this.handlers.forEach(({ name: e, handler: n }) => this.editorView.dom.removeEventListener(e, n));
  }
  update(e, n) {
    if (this.cursorPos != null && n.doc != e.state.doc)
      if (this.lastDragEvent) {
        let i = this.computeTarget(this.lastDragEvent);
        i == this.cursorPos ? this.updateOverlay() : this.setCursor(i);
      } else
        this.updateOverlay();
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), n = !e.parent.inlineContent, i, r = this.editorView.dom, o = r.getBoundingClientRect(), s = o.width / r.offsetWidth, l = o.height / r.offsetHeight;
    if (n) {
      let u = e.nodeBefore, f = e.nodeAfter;
      if (u || f) {
        let h = this.editorView.nodeDOM(this.cursorPos - (u ? u.nodeSize : 0));
        if (h) {
          let p = h.getBoundingClientRect(), m = u ? p.bottom : p.top;
          u && f && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let g = this.width / 2 * l;
          i = { left: p.left, right: p.right, top: m - g, bottom: m + g };
        }
      }
    }
    if (!i) {
      let u = this.editorView.coordsAtPos(this.cursorPos), f = this.width / 2 * s;
      i = { left: u.left - f, right: u.left + f, top: u.top, bottom: u.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let c, d;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, d = -pageYOffset;
    else {
      let u = a.getBoundingClientRect(), f = u.width / a.offsetWidth, h = u.height / a.offsetHeight;
      c = u.left - a.scrollLeft * f, d = u.top - a.scrollTop * h;
    }
    this.element.style.left = (i.left - c) / s + "px", this.element.style.top = (i.top - d) / l + "px", this.element.style.width = (i.right - i.left) / s + "px", this.element.style.height = (i.bottom - i.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  computeTarget(e) {
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), i = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), r = i && i.type.spec.disableDropCursor, o = typeof r == "function" ? r(this.editorView, n, e) : r;
    if (!n || o)
      return null;
    let s = n.pos;
    if (this.editorView.dragging && this.editorView.dragging.slice) {
      let l = Vh(this.editorView.state.doc, s, this.editorView.dragging.slice);
      l != null && (s = l);
    }
    return s;
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    this.lastDragEvent = e;
    let n = this.computeTarget(e);
    n != null && (this.setCursor(n), this.scheduleRemoval(5e3));
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
class me extends B {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let i = e.resolve(n.map(this.head));
    return me.valid(i) ? new me(i) : B.near(i);
  }
  content() {
    return L.empty;
  }
  eq(e) {
    return e instanceof me && e.head == this.head;
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
    return new me(e.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Mc(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let n = e.parent;
    if (n.inlineContent || !xE(e) || !SE(e))
      return !1;
    let i = n.type.spec.allowGapCursor;
    if (i != null)
      return i;
    let r = n.contentMatchAt(e.index()).defaultType;
    return r && r.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, n, i = !1) {
    e: for (; ; ) {
      if (!i && me.valid(e))
        return e;
      let r = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (n > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          o = l.child(n > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        r += n;
        let a = e.doc.resolve(r);
        if (me.valid(a))
          return a;
      }
      for (; ; ) {
        let s = n > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !z.isSelectable(o)) {
            e = e.doc.resolve(r + o.nodeSize * n), i = !1;
            continue e;
          }
          break;
        }
        o = s, r += n;
        let l = e.doc.resolve(r);
        if (me.valid(l))
          return l;
      }
      return null;
    }
  }
}
me.prototype.visible = !1;
me.findFrom = me.findGapCursorFrom;
B.jsonID("gapcursor", me);
class Mc {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Mc(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return me.valid(n) ? new me(n) : B.near(n);
  }
}
function zg(t) {
  return t.isAtom || t.spec.isolating || t.spec.createGapCursor;
}
function xE(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.index(e), i = t.node(e);
    if (n == 0) {
      if (i.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = i.child(n - 1); ; r = r.lastChild) {
      if (r.childCount == 0 && !r.inlineContent || zg(r.type))
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function SE(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.indexAfter(e), i = t.node(e);
    if (n == i.childCount) {
      if (i.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = i.child(n); ; r = r.firstChild) {
      if (r.childCount == 0 && !r.inlineContent || zg(r.type))
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function CE() {
  return new ie({
    props: {
      decorations: EE,
      createSelectionBetween(t, e, n) {
        return e.pos == n.pos && me.valid(n) ? new me(n) : null;
      },
      handleClick: AE,
      handleKeyDown: ME,
      handleDOMEvents: { beforeinput: TE }
    }
  });
}
const ME = nc({
  ArrowLeft: eo("horiz", -1),
  ArrowRight: eo("horiz", 1),
  ArrowUp: eo("vert", -1),
  ArrowDown: eo("vert", 1)
});
function eo(t, e) {
  const n = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(i, r, o) {
    let s = i.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof I) {
      if (!o.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = i.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = me.findGapCursorFrom(l, e, a);
    return c ? (r && r(i.tr.setSelection(new me(c))), !0) : !1;
  };
}
function AE(t, e, n) {
  if (!t || !t.editable)
    return !1;
  let i = t.state.doc.resolve(e);
  if (!me.valid(i))
    return !1;
  let r = t.posAtCoords({ left: n.clientX, top: n.clientY });
  return r && r.inside > -1 && z.isSelectable(t.state.doc.nodeAt(r.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new me(i))), !0);
}
function TE(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof me))
    return !1;
  let { $from: n } = t.state.selection, i = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
  if (!i)
    return !1;
  let r = C.empty;
  for (let s = i.length - 1; s >= 0; s--)
    r = C.from(i[s].createAndFill(null, r));
  let o = t.state.tr.replace(n.pos, n.pos, new L(r, 0, 0));
  return o.setSelection(I.near(o.doc.resolve(n.pos + 1))), t.dispatch(o), !1;
}
function EE(t) {
  if (!(t.selection instanceof me))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Z.create(t.doc, [xe.widget(t.selection.head, e, { key: "gapcursor" })]);
}
const LE = G.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      autoTrim: !0,
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
      const e = t?.node || this.editor.state.doc;
      if ((t?.mode || this.options.mode) === "textSize") {
        const n = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(n);
      }
      return e.nodeSize;
    }, this.storage.words = (t) => {
      const e = t?.node || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let t = !1;
    return [new ie({
      key: new se("characterCount"),
      appendTransaction: (e, n, i) => {
        if (t) return;
        const r = this.options.limit, o = this.options.autoTrim;
        if (r == null || r === 0 || o === !1) {
          t = !0;
          return;
        }
        const s = this.storage.characters({ node: i.doc });
        if (s > r) {
          const l = s - r, a = 0, c = l;
          console.warn(`[CharacterCount] Initial content exceeded limit of ${r} characters. Content was automatically trimmed.`);
          const d = i.tr.deleteRange(a, c);
          return t = !0, d;
        }
        t = !0;
      },
      filterTransaction: (e, n) => {
        const i = this.options.limit;
        if (!e.docChanged || i === 0 || i === null || i === void 0) return !0;
        const r = this.storage.characters({ node: n.doc }), o = this.storage.characters({ node: e.doc });
        if (o <= i || r > i && o > i && o <= r) return !0;
        if (r > i && o > i && o > r || !e.getMeta("paste")) return !1;
        const s = e.selection.$head.pos, l = s - (o - i), a = s;
        return e.deleteRange(l, a), !(this.storage.characters({ node: e.doc }) > i);
      }
    })];
  }
}), OE = G.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [wE(this.options)];
  }
}), HE = G.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("focus"),
      props: { decorations: ({ doc: t, selection: e }) => {
        const { isEditable: n, isFocused: i } = this.editor, { anchor: r } = e, o = [];
        if (!n || !i) return Z.create(t, []);
        let s = 0;
        this.options.mode === "deepest" && t.descendants((a, c) => {
          if (!a.isText) {
            if (!(r >= c && r <= c + a.nodeSize - 1)) return !1;
            s += 1;
          }
        });
        let l = 0;
        return t.descendants((a, c) => {
          if (a.isText || !(r >= c && r <= c + a.nodeSize - 1)) return !1;
          if (l += 1, this.options.mode === "deepest" && s - l > 0 || this.options.mode === "shallowest" && l > 1) return this.options.mode === "deepest";
          o.push(xe.node(c, c + a.nodeSize, { class: this.options.className }));
        }), Z.create(t, o);
      } }
    })];
  }
}), RE = G.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [CE()];
  },
  extendNodeSchema(t) {
    var e;
    const n = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return { allowGapCursor: (e = ee(_(t, "allowGapCursor", n))) !== null && e !== void 0 ? e : null };
  }
}), $g = "placeholder", Cf = new se("tiptap__placeholder");
function Bg(t) {
  const { editor: e, placeholder: n, dataAttribute: i, pos: r, node: o, isEmptyDoc: s, hasAnchor: l, classes: { emptyNode: a, emptyEditor: c } } = t, d = [a];
  return s && d.push(c), xe.node(r, r + o.nodeSize, {
    class: d.join(" "),
    [i]: typeof n == "function" ? n({
      editor: e,
      node: o,
      pos: r,
      hasAnchor: l
    }) : n
  });
}
function Fg(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Wg({ editor: t, options: e, dataAttribute: n, doc: i, selection: r, from: o, to: s }) {
  const { anchor: l } = r, a = [], c = t.isEmpty;
  return i.nodesBetween(o, s, (d, u) => {
    const f = l >= u && l <= u + d.nodeSize, h = !d.isLeaf && Rr(d);
    return d.type.isTextblock && (f || !e.showOnlyCurrent) && h && a.push(Bg({
      editor: t,
      isEmptyDoc: c,
      dataAttribute: n,
      hasAnchor: f,
      placeholder: e.placeholder,
      classes: {
        emptyEditor: e.emptyEditorClass,
        emptyNode: Fg(e.emptyNodeClass, {
          editor: t,
          node: d,
          pos: u,
          hasAnchor: f
        })
      },
      node: d,
      pos: u
    })), e.includeChildren;
  }), a;
}
function Ug({ editor: t, options: e, dataAttribute: n, doc: i, selection: r }) {
  if (!(t.isEditable || !e.showOnlyWhenEditable)) return null;
  const { anchor: o } = r, s = [], l = t.isEmpty;
  if (e.showOnlyCurrent && !e.includeChildren) {
    const a = i.resolve(o), c = a.depth > 0 ? a.node(1) : a.nodeAfter, d = a.depth > 0 ? a.before(1) : o;
    if (c && c.type.isTextblock && Rr(c)) {
      const u = o >= d && o <= d + c.nodeSize;
      s.push(Bg({
        editor: t,
        isEmptyDoc: l,
        dataAttribute: n,
        hasAnchor: u,
        placeholder: e.placeholder,
        classes: {
          emptyEditor: e.emptyEditorClass,
          emptyNode: Fg(e.emptyNodeClass, {
            editor: t,
            node: c,
            pos: d,
            hasAnchor: u
          })
        },
        node: c,
        pos: d
      }));
    }
  } else s.push(...Wg({
    editor: t,
    options: e,
    dataAttribute: n,
    doc: i,
    selection: r,
    from: 0,
    to: i.content.size
  }));
  return Z.create(i, s);
}
function Xi(t, e) {
  const n = t.resolve(e);
  if (n.depth === 0) {
    var i;
    const o = (i = n.nodeAfter) !== null && i !== void 0 ? i : n.nodeBefore;
    if (!o) return {
      from: e,
      to: e
    };
    const s = n.nodeAfter ? e : e - o.nodeSize;
    return {
      from: s,
      to: s + o.nodeSize
    };
  }
  const r = n.before(1);
  return {
    from: r,
    to: r + n.node(1).nodeSize
  };
}
function Zi(t, e) {
  return {
    from: Math.max(0, e.from),
    to: Math.min(t.content.size, e.to)
  };
}
function VE(t, e, n) {
  const i = [];
  return t.forEach((r, o) => {
    const s = o, l = s + r.nodeSize, a = s + 1, c = l + 1;
    a < n && c > e && i.push({
      from: s,
      to: l
    });
  }), i;
}
function NE(t) {
  if (t.length === 0) return [];
  const e = [...t].sort((i, r) => i.from - r.from), n = [{ ...e[0] }];
  for (let i = 1; i < e.length; i += 1) {
    const r = n[n.length - 1], o = e[i];
    o.from <= r.to ? r.to = Math.max(r.to, o.to) : n.push({ ...o });
  }
  return n;
}
function IE(t, e) {
  const n = VE(t, e.from, e.to);
  return n.push(Zi(t, Xi(t, e.from))), e.to > e.from ? n.push(Zi(t, Xi(t, Math.min(e.to, t.content.size + 1) - 1))) : e.from < t.content.size + 1 && n.push(Zi(t, Xi(t, Math.min(e.from + 1, t.content.size)))), n;
}
function DE(t, e, n) {
  const i = [];
  if (t.docChanged) {
    const r = Os(t);
    for (const o of r) i.push(...IE(n.doc, o.newRange));
  }
  return t.selectionSet && (i.push(Zi(n.doc, Xi(n.doc, t.mapping.map(e.selection.anchor)))), i.push(Zi(n.doc, Xi(n.doc, n.selection.anchor)))), NE(i);
}
function PE(t, e, n) {
  const i = Math.max(0, Math.min(t, n.content.size));
  return {
    from: i,
    to: Math.max(i, Math.min(e, n.content.size))
  };
}
function _E({ decorations: t, ranges: e, editor: n, options: i, dataAttribute: r, doc: o, selection: s }) {
  let l = t;
  for (const a of e) {
    const { from: c, to: d } = PE(a.from, a.to, o), u = l.find(c, d).filter((h) => h.from >= c && h.to <= d);
    u.length && (l = l.remove(u));
    const f = Wg({
      editor: n,
      options: i,
      dataAttribute: r,
      doc: o,
      selection: s,
      from: c,
      to: d
    });
    f.length && (l = l.add(o, f));
  }
  return l;
}
function zE({ editor: t, options: e, dataAttribute: n }) {
  return {
    init(i, r) {
      const o = Ug({
        editor: t,
        options: e,
        dataAttribute: n,
        doc: r.doc,
        selection: r.selection
      });
      return o ?? Z.empty;
    },
    apply(i, r, o, s) {
      return !i.docChanged && !i.selectionSet ? r : _E({
        decorations: r.map(i.mapping, i.doc),
        ranges: DE(i, o, s),
        editor: t,
        options: e,
        dataAttribute: n,
        doc: s.doc,
        selection: s.selection
      });
    }
  };
}
function $E(t) {
  return t.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
function BE({ editor: t, options: e }) {
  const n = e.dataAttribute ? `data-${$E(e.dataAttribute)}` : `data-${$g}`, i = e.showOnlyCurrent && !e.includeChildren;
  return new ie({
    key: Cf,
    ...i ? {} : { state: zE({
      editor: t,
      options: e,
      dataAttribute: n
    }) },
    props: { decorations: i ? ({ doc: r, selection: o }) => Ug({
      editor: t,
      options: e,
      dataAttribute: n,
      doc: r,
      selection: o
    }) : (r) => {
      var o;
      return e.showOnlyWhenEditable && !t.isEditable ? Z.empty : (o = Cf.getState(r)) !== null && o !== void 0 ? o : Z.empty;
    } }
  });
}
const FE = G.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      dataAttribute: $g,
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [BE({
      editor: this.editor,
      options: this.options
    })];
  }
});
function ba(t, e) {
  return !t.selection.empty && !sm(t.selection) && e.isEditable;
}
function WE(t, e) {
  return ba(t, e) && !e.isFocused && !e.view.dragging;
}
function UE() {
  var t;
  (t = window.getSelection()) === null || t === void 0 || t.removeAllRanges();
}
function jE(t) {
  t.focus();
}
G.create({
  name: "selection",
  addOptions() {
    return { className: "selection" };
  },
  addProseMirrorPlugins() {
    const { editor: t, options: e } = this;
    return [new ie({
      key: new se("selection"),
      props: {
        decorations(n) {
          return WE(n, t) ? Z.create(n.doc, [xe.inline(n.selection.from, n.selection.to, { class: e.className })]) : null;
        },
        handleDOMEvents: {
          blur(n) {
            return ba(n.state, t) && UE(), !1;
          },
          focus(n) {
            return ba(n.state, t) && requestAnimationFrame(() => {
              !t.isDestroyed && n.hasFocus() && jE(n);
            }), !1;
          }
        }
      }
    })];
  }
});
function Mf({ types: t, node: e }) {
  return e && Array.isArray(t) && t.includes(e.type) || e?.type === t;
}
G.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var t;
    const e = new se(this.name), n = this.options.node || ((t = this.editor.schema.topNodeType.contentMatch.defaultType) === null || t === void 0 ? void 0 : t.name) || "paragraph", i = Object.entries(this.editor.schema.nodes).map(([, r]) => r).filter((r) => (this.options.notAfter || []).concat(n).includes(r.name));
    return [new ie({
      key: e,
      appendTransaction: (r, o, s) => {
        const { doc: l, tr: a, schema: c } = s, d = e.getState(s), u = l.content.size, f = c.nodes[n];
        if (!r.some((h) => h.getMeta("skipTrailingNode")) && d)
          return a.insert(u, f.create());
      },
      state: {
        init: (r, o) => {
          const s = o.tr.doc.lastChild;
          return !Mf({
            node: s,
            types: i
          });
        },
        apply: (r, o) => {
          if (!r.docChanged || r.getMeta("__uniqueIDTransaction")) return o;
          const s = r.doc.lastChild;
          return !Mf({
            node: s,
            types: i
          });
        }
      }
    })];
  }
});
const KE = G.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => Bp(t, e),
      redo: () => ({ state: t, dispatch: e }) => Fp(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [fv(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), qE = be.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `

`) : ""
});
var GE = HE;
const JE = be.create({
  name: "hardBreak",
  markdownTokenName: "br",
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
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", re(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  renderMarkdown: () => `  
`,
  parseMarkdown: () => ({ type: "hardBreak" }),
  addCommands() {
    return { setHardBreak: () => ({ commands: t, chain: e, state: n, editor: i }) => t.first([() => t.exitCode(), () => t.command(() => {
      const { selection: r, storedMarks: o } = n;
      if (r.$from.parent.type.spec.isolating) return !1;
      const { keepMarks: s } = this.options, { splittableMarks: l } = i.extensionManager, a = o || r.$to.parentOffset && r.$from.marks();
      return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
        if (d && a && s) {
          const u = a.filter((f) => l.includes(f.type.name));
          c.ensureMarks(u);
        }
        return !0;
      }).scrollIntoView().run();
    })]) };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), XE = "listItem", Af = "textStyle", Tf = /^\s*([-+*])\s$/, jg = be.create({
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
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "ul",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => t.type !== "list" || t.ordered ? [] : {
    type: "bulletList",
    content: t.items ? e.parseChildren(t.items) : []
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownOptions: { indentsContent: !0 },
  addCommands() {
    return { toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(XE, this.editor.getAttributes(Af)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
  },
  addKeyboardShortcuts() {
    return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
  },
  addInputRules() {
    let t = Si({
      find: Tf,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = Si({
      find: Tf,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Af),
      editor: this.editor
    })), [t];
  }
}), ZE = (t, e, n) => {
  const { selection: i } = t;
  if (!i.empty) return null;
  const { $from: r } = i;
  if (!r.parent.isTextblock || r.parentOffset !== r.parent.content.size) return null;
  let o = -1;
  for (let h = r.depth; h > 0; h -= 1) if (r.node(h).type.name === e) {
    o = h;
    break;
  }
  if (o < 0) return null;
  const s = r.node(o), l = r.index(o);
  if (l + 1 >= s.childCount) return null;
  const a = s.child(l + 1);
  if (!n.includes(a.type.name)) return null;
  const c = t.schema.nodes[e];
  let d = !1;
  if (a.forEach((h) => {
    h.type === c && h.childCount > 1 && (d = !0);
  }), !d) return null;
  const u = t.doc.resolve(r.after()).nodeAfter;
  if (!u || !n.includes(u.type.name)) return null;
  const f = [];
  return u.forEach((h) => {
    f.push(h);
  }), f.length === 0 ? null : {
    listItemDepth: o,
    nestedList: u,
    nestedListPos: r.after(),
    insertPos: r.after(o),
    items: f
  };
}, YE = (t, e, n, i) => {
  const r = ZE(t, n, i);
  if (!r) return !1;
  const { selection: o } = t, { nestedList: s, nestedListPos: l, insertPos: a, items: c } = r, d = t.tr;
  d.delete(l, l + s.nodeSize);
  const u = d.mapping.map(a);
  return d.insert(u, C.from(c)), d.setSelection(o.map(d.doc, d.mapping)), e && e(d), !0;
}, QE = (t, e, n) => YE(t.state, t.view.dispatch, e, n), Kg = (t, e) => G.create({
  name: `${t}BranchingDeleteKeymap`,
  priority: 101,
  addKeyboardShortcuts() {
    const n = () => QE(this.editor, t, e);
    return {
      Delete: n,
      "Mod-Delete": n
    };
  }
}), qg = [
  [1e3, "m"],
  [900, "cm"],
  [500, "d"],
  [400, "cd"],
  [100, "c"],
  [90, "xc"],
  [50, "l"],
  [40, "xl"],
  [10, "x"],
  [9, "ix"],
  [5, "v"],
  [4, "iv"],
  [1, "i"]
], to = "abcdefghijklmnopqrstuvwxyz", Gg = String.raw`\d+|[ivxlcdmIVXLCDM]+|${"[a-zA-Z]{1,2}"}`;
function js(t) {
  let e = t, n = "";
  for (const [i, r] of qg) for (; e >= i; )
    n += r, e -= i;
  return n;
}
function Ac(t) {
  return js(t).toUpperCase();
}
function Jg(t) {
  const e = t.toLowerCase();
  let n = 0, i = 0;
  for (; n < e.length; ) {
    let r = !1;
    for (const [o, s] of qg) if (e.startsWith(s, n)) {
      i += o, n += s.length, r = !0;
      break;
    }
    if (!r) return 0;
  }
  return i;
}
function e2(t) {
  if (!/^[ivxlcdmIVXLCDM]+$/.test(t)) return !1;
  const e = Jg(t);
  return e <= 0 ? !1 : (t === t.toLowerCase() ? js(e) : Ac(e)) === t;
}
function t2(t) {
  const e = t.toLowerCase();
  if (e.length === 1) return e.charCodeAt(0) - 97 + 1;
  if (e.length === 2) {
    const n = e.charCodeAt(0) - 97, i = e.charCodeAt(1) - 97;
    return (n + 1) * 26 + i + 1;
  }
  return 0;
}
function Do(t) {
  if (t <= 26) return to[t - 1];
  const e = Math.floor((t - 1) / 26) - 1, n = (t - 1) % 26;
  return e < 0 ? to[n] : to[e] + to[n];
}
function Ks(t) {
  if (!(!t || /^\d+$/.test(t))) {
    if (e2(t)) return t === t.toLowerCase() ? "i" : "I";
    if (/^[a-z]{1,2}$/.test(t)) return "a";
    if (/^[A-Z]{1,2}$/.test(t)) return "A";
  }
}
function Tc(t) {
  if (/^\d+$/.test(t)) return parseInt(t, 10);
  const e = Ks(t);
  if (e === "i" || e === "I") return Jg(t);
  if (e === "a" || e === "A") {
    const i = t2(t);
    return i > 0 ? i : 1;
  }
  const n = parseInt(t, 10);
  return Number.isNaN(n) ? 1 : n;
}
function n2(t, e) {
  if (t === "numeric") return String(e);
  switch (t) {
    case "a":
      return Do(e);
    case "A":
      return Do(e).toUpperCase();
    case "i":
      return js(e);
    case "I":
      return Ac(e);
    default:
      return String(e);
  }
}
function i2(t) {
  var e;
  if (t.length === 0) return !1;
  const n = (e = Ks(t[0])) !== null && e !== void 0 ? e : "numeric", i = Tc(t[0]);
  if (i < 1) return !1;
  for (let r = 0; r < t.length; r++) {
    const o = n2(n, i + r);
    if (t[r] !== o) return !1;
  }
  return !0;
}
function r2(t) {
  return {
    type: Ks(t),
    start: Tc(t)
  };
}
function o2(t) {
  const { type: e, start: n } = r2(t), i = {};
  return e && (i.type = e), n !== 1 && (i.start = n), i;
}
function s2(t, e, n = ". ") {
  const i = e + 1;
  if (!t || t === "1") return `${i}${n}`;
  switch (t) {
    case "a":
      return `${Do(i)}${n}`;
    case "A":
      return `${Do(i).toUpperCase()}${n}`;
    case "i":
      return `${js(i)}${n}`;
    case "I":
      return `${Ac(i)}${n}`;
    default:
      return `${i}${n}`;
  }
}
function l2(t) {
  return !t[0] || t[0].type === "paragraph" ? t : [{
    type: "paragraph",
    content: []
  }, ...t];
}
function a2(t) {
  var e, n;
  const i = (e = t.content) === null || e === void 0 ? void 0 : e[0];
  return i?.type === "paragraph" && !(!((n = i.content) === null || n === void 0) && n.length);
}
const c2 = "&nbsp;", Ef = 1, d2 = (t) => {
  var e;
  return ((e = t?.level) !== null && e !== void 0 ? e : Ef) > Ef;
};
function u2(t) {
  var e, n;
  const i = (e = t.tokens) === null || e === void 0 ? void 0 : e[0];
  return !!(t.text && ((n = t.tokens) === null || n === void 0 ? void 0 : n.length) === 1 && i?.type === "list" && i.ordered && i.raw === t.text);
}
function f2(t, e) {
  return e.tokenizeInline ? e.parseInline(e.tokenizeInline(t)) : e.parseInline([{
    type: "text",
    raw: t,
    text: t
  }]);
}
const Xg = be.create({
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
    return [{ tag: "li" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "li",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (t, e) => {
    var n;
    if (t.type !== "list_item") return [];
    const i = (n = e.parseBlockChildren) !== null && n !== void 0 ? n : e.parseChildren;
    let r = [];
    if (t.tokens && t.tokens.length > 0) {
      if (u2(t)) return {
        type: "listItem",
        content: [{
          type: "paragraph",
          content: f2(t.text || "", e)
        }]
      };
      const [s, ...l] = t.tokens;
      if (s.type === "heading") {
        var o;
        return {
          type: "listItem",
          content: [{
            type: "paragraph",
            content: e.parseInline((o = s.tokens) !== null && o !== void 0 ? o : [])
          }, ...l.length > 0 ? i(l) : []]
        };
      }
      if (t.tokens.some((a) => a.type === "paragraph")) r = i(t.tokens);
      else if (s.type === "text" && s.tokens && s.tokens.length > 0) {
        if (r = [{
          type: "paragraph",
          content: e.parseInline(s.tokens)
        }], t.tokens.length > 1) {
          const a = i(t.tokens.slice(1));
          r.push(...a);
        }
      } else r = i(t.tokens);
    }
    return r.length === 0 && (r = [{
      type: "paragraph",
      content: []
    }]), {
      type: "listItem",
      content: l2(r)
    };
  },
  renderMarkdown: (t, e, n) => {
    const i = (s) => {
      if (s.parentType === "bulletList") return "- ";
      if (s.parentType === "orderedList") {
        var l, a;
        const c = ((l = s.meta) === null || l === void 0 || (l = l.parentAttrs) === null || l === void 0 ? void 0 : l.start) || 1;
        return s2((a = s.meta) === null || a === void 0 || (a = a.parentAttrs) === null || a === void 0 ? void 0 : a.type, c - 1 + (s.index || 0), ". ");
      }
      return "- ";
    }, r = vm(t, e, i, n, { alignNestedToPrefix: n?.parentType === "orderedList" });
    if (!a2(t) || !d2(n)) return r;
    const o = i(n);
    return `${o}${c2}${r.slice(o.length)}`;
  },
  addExtensions() {
    return [Kg(this.name, [this.options.bulletListTypeName, this.options.orderedListTypeName])];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Ec = (t, e) => {
  const { $from: n } = e.selection, i = ke(t, e.schema);
  let r = null, o = n.depth, s = n.pos, l = null;
  for (; o > 0 && l === null; )
    r = n.node(o), r.type === i ? l = o : (o -= 1, s -= 1);
  return l === null ? null : {
    $pos: e.doc.resolve(s),
    depth: l
  };
}, Zg = (t, e) => {
  const n = Ec(t, e);
  if (!n) return !1;
  const [, i] = yw(e, t, n.$pos.pos + 4);
  return i;
}, h2 = (t, e, n) => {
  const { $anchor: i } = t.selection, r = Math.max(0, i.pos - 2), o = t.doc.resolve(r).node();
  return !(!o || !n.includes(o.type.name));
}, Lf = (t, e, n) => {
  if (t.commands.undoInputRule()) return !0;
  if (t.state.selection.from !== t.state.selection.to) return !1;
  if (!Wt(t.state, e) && h2(t.state, e, n)) {
    const { $anchor: o } = t.state.selection, s = t.state.doc.resolve(o.before() - 1), l = [];
    s.node().descendants((d, u) => {
      d.type.name === e && l.push({
        node: d,
        pos: u
      });
    });
    const a = l.at(-1);
    if (!a) return !1;
    const c = t.state.doc.resolve(s.start() + a.pos + 1);
    return t.chain().command(({ tr: d }) => {
      const u = c.end();
      return d.delete(o.before(), o.after()).insert(u, o.parent), d.setSelection(I.create(d.doc, u + 1)), !0;
    }).command(({ state: d, dispatch: u }) => (Wh(d, u), !0)).run();
  }
  if (!Wt(t.state, e) || !xw(t.state)) return !1;
  const { $from: i } = t.state.selection, r = i.depth - 1;
  return i.node(r).type !== t.schema.nodes[e] || i.index(r) !== 0 ? !1 : t.chain().liftListItem(e).run();
}, p2 = (t, e) => {
  const n = Zg(t, e), i = Ec(t, e);
  return !i || !n ? !1 : n > i.depth;
}, m2 = (t, e) => {
  const n = Zg(t, e), i = Ec(t, e);
  return !i || !n ? !1 : n < i.depth;
}, Of = (t, e) => !Wt(t.state, e) || !kw(t.state, e) || !t.state.selection.empty ? !1 : p2(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : m2(e, t.state) ? t.commands.command(({ state: n, dispatch: i }) => Uh(n, i)) : t.commands.joinItemForward(), g2 = (t, e, n) => {
  const { state: i } = t, { selection: r } = i;
  if (!r.empty) return !1;
  const { $from: o } = r;
  if (o.parentOffset !== 0 || !o.parent.isTextblock || Wt(i, e)) return !1;
  const s = bw(o);
  if (!s || !n.includes(s.type.name)) return !1;
  const l = s.lastChild;
  if (!l || l.type.name !== e) return !1;
  const a = o.parent;
  if (!l.canReplace(l.childCount, l.childCount, C.from(a))) return !1;
  const c = o.before(), d = o.after(), u = c - 2;
  return t.commands.command(({ tr: f, dispatch: h }) => (h && (f.delete(c, d).insert(u, C.from(a)), f.setSelection(I.create(f.doc, u + 1)), f.scrollIntoView()), !0));
}, y2 = G.create({
  name: "listKeymap",
  addOptions() {
    return { listTypes: [{
      itemName: "listItem",
      wrapperNames: ["bulletList", "orderedList"]
    }, {
      itemName: "taskItem",
      wrapperNames: ["taskList"]
    }] };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && Of(t, n) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && Of(t, n) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: i }) => {
          t.state.schema.nodes[n] !== void 0 && Lf(t, n, i) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: i }) => {
          t.state.schema.nodes[n] !== void 0 && Lf(t, n, i) && (e = !0);
        }), e;
      },
      Tab: ({ editor: t }) => {
        for (const { itemName: e, wrapperNames: n } of this.options.listTypes)
          if (t.state.schema.nodes[e] !== void 0 && g2(t, e, n))
            return !0;
        return !1;
      }
    };
  }
}), Po = new RegExp(`^(\\s*)(${Gg})([.)])\\s+(.*)$`), b2 = /^\s/, li = {
  heading: /^#{1,6}(?:\s|$)/,
  bulletItem: /^[-+*]\s+/,
  codeFence: /^(?:```|~~~)/,
  blockMath: /^\$\$/,
  thematicBreak: /^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/
};
function v2(t) {
  return Po.test(t.trimStart());
}
function w2(t) {
  const e = t.trimStart();
  return li.bulletItem.test(e) || v2(e) || li.heading.test(e) || li.thematicBreak.test(e) && !e.startsWith("-") || /^>\s?/.test(e) || li.codeFence.test(e) || li.blockMath.test(e);
}
function k2(t) {
  return Object.values(li).some((e) => e.test(t));
}
function x2(t) {
  const e = [], n = [];
  let i = !1;
  return t.forEach((r) => {
    if (i) {
      n.push(r);
      return;
    }
    if (r.trim() === "") {
      i = !0, n.push(r);
      return;
    }
    if (e.length > 0 && w2(r)) {
      i = !0, n.push(r);
      return;
    }
    e.push(r);
  }), {
    paragraphLines: e,
    blockLines: n
  };
}
function Hf(t) {
  const e = [];
  let n = 0, i = 0;
  for (; n < t.length; ) {
    const r = t[n], o = r.match(Po);
    if (!o) break;
    const [, s, l, a, c] = o, d = s.length, u = parseInt(l, 10), f = isNaN(u) ? Ks(l) : void 0, h = isNaN(u) ? Tc(l) : u, p = [c];
    let m = n + 1;
    const g = [r];
    let y = !1;
    for (; m < t.length; ) {
      const b = t[m];
      if (b.match(Po)) break;
      if (b.trim() === "")
        g.push(b), p.push(""), y = !0, m += 1;
      else if (b.match(b2)) {
        const v = b.length - b.trimStart().length, w = d + l.length + 1;
        g.push(b), p.push(b.slice(Math.min(v, w))), m += 1;
      } else {
        if (y || k2(b)) break;
        g.push(b), p.push(b), m += 1;
      }
    }
    e.push({
      indent: d,
      number: h,
      type: f,
      content: p.join(`
`).trim(),
      contentLines: p,
      raw: g.join(`
`)
    }), i = m, n = m;
  }
  return [e, i];
}
const S2 = new RegExp(`^(${Gg})([.)])\\s+(.+)$`);
function C2(t) {
  const e = t.split(`
`).filter((i) => i.trim().length > 0);
  if (e.length === 0) return null;
  const n = [];
  for (const i of e) {
    const r = i.trim().match(S2);
    if (!r) return null;
    n.push({
      marker: r[1],
      content: r[3]
    });
  }
  return i2(n.map((i) => i.marker)) ? {
    type: "orderedList",
    attrs: o2(n[0].marker),
    content: n.map((i) => ({
      type: "listItem",
      content: [{
        type: "paragraph",
        content: [{
          type: "text",
          text: i.content
        }]
      }]
    }))
  } : null;
}
function Yg(t, e, n) {
  const i = [];
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (o.indent === e) {
      const { paragraphLines: s, blockLines: l } = x2(o.contentLines), a = s.join(`
`).trim(), c = [];
      a && c.push({
        type: "paragraph",
        raw: a,
        tokens: n.inlineTokens(a)
      });
      const d = l.join(`
`).trim();
      if (d) {
        const h = n.blockTokens(d);
        c.push(...h);
      }
      let u = r + 1;
      const f = [];
      for (; u < t.length && t[u].indent > e; )
        f.push(t[u]), u += 1;
      if (f.length > 0) {
        const h = Yg(f, Math.min(...f.map((p) => p.indent)), n);
        c.push({
          type: "list",
          ordered: !0,
          start: f[0].number,
          typeMarker: f[0].type,
          items: h,
          raw: f.map((p) => p.raw).join(`
`)
        });
      }
      i.push({
        type: "list_item",
        raw: o.raw,
        tokens: c
      }), r = u;
    } else r += 1;
  }
  return i;
}
function M2(t, e) {
  return t.map((n) => {
    if (n.type !== "list_item") return e.parseChildren([n])[0];
    const i = [];
    return n.tokens && n.tokens.length > 0 && n.tokens.forEach((r) => {
      if (r.type === "paragraph" || r.type === "list" || r.type === "blockquote" || r.type === "code") i.push(...e.parseChildren([r]));
      else if (r.type === "text" && r.tokens) {
        const o = e.parseChildren([r]);
        i.push({
          type: "paragraph",
          content: o
        });
      } else {
        const o = e.parseChildren([r]);
        o.length > 0 && i.push(...o);
      }
    }), {
      type: "listItem",
      content: i
    };
  });
}
const A2 = 64;
function Rf(t, e) {
  const n = [];
  let i = 0;
  for (; n.length < e; ) {
    const r = t.indexOf(`
`, i);
    if (r === -1)
      return n.push(t.slice(i)), n;
    n.push(t.slice(i, r)), i = r + 1;
  }
  return n;
}
function T2(t) {
  const e = t.indexOf(`
`), n = e === -1 ? t : t.slice(0, e);
  if (!Po.test(n)) return [
    [],
    0,
    []
  ];
  let i = A2, r = Rf(t, i), o = Hf(r);
  for (; o[1] === r.length && r.length === i; )
    i *= 2, r = Rf(t, i), o = Hf(r);
  return [
    o[0],
    o[1],
    r
  ];
}
const E2 = "listItem", Vf = "textStyle", Nf = /^(\d+)\.\s$/;
function If(t) {
  const e = t.match(/list-style-type\s*:\s*([^;]+)/i);
  if (!e) return null;
  switch (e[1].trim().toLowerCase()) {
    case "upper-roman":
      return "I";
    case "lower-roman":
      return "i";
    case "upper-alpha":
    case "upper-latin":
      return "A";
    case "lower-alpha":
    case "lower-latin":
      return "a";
    default:
      return null;
  }
}
const Qg = be.create({
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
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("type");
          if (e) return e;
          const n = t.getAttribute("style");
          if (n) {
            const r = If(n);
            if (r) return r;
          }
          const i = t.querySelector("li");
          if (i) {
            const r = i.getAttribute("style");
            if (r) {
              const o = If(r);
              if (o) return o;
            }
          }
          return null;
        }
      }
    };
  },
  parseHTML() {
    return [{ tag: "ol" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, type: n, ...i } = t, r = re(this.options.HTMLAttributes, i);
    return e !== 1 && (r.start = e), n && n !== "1" && (r.type = n), [
      "ol",
      r,
      0
    ];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => {
    if (t.type !== "list" || !t.ordered) return [];
    const n = t.start || 1, i = t.typeMarker, r = t.items ? M2(t.items, e) : [], o = {};
    return n !== 1 && (o.start = n), i && (o.type = i), Object.keys(o).length > 0 ? {
      type: "orderedList",
      attrs: o,
      content: r
    } : {
      type: "orderedList",
      content: r
    };
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    start: () => -1,
    tokenize: (t, e, n) => {
      var i, r;
      const [o, s, l] = T2(t);
      if (o.length === 0) return;
      const a = Yg(o, o[0].indent, n);
      if (a.length !== 0)
        return {
          type: "list",
          ordered: !0,
          start: ((i = o[0]) === null || i === void 0 ? void 0 : i.number) || 1,
          typeMarker: (r = o[0]) === null || r === void 0 ? void 0 : r.type,
          items: a,
          raw: l.slice(0, s).join(`
`)
        };
    }
  },
  markdownOptions: { indentsContent: !0 },
  addCommands() {
    return { toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(E2, this.editor.getAttributes(Vf)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
  },
  addKeyboardShortcuts() {
    return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
  },
  addProseMirrorPlugins() {
    return [new ie({ props: { handlePaste: (t, e) => {
      var n, i;
      const r = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text/html");
      if (r?.trim()) return !1;
      const o = (i = e.clipboardData) === null || i === void 0 ? void 0 : i.getData("text/plain");
      if (!o) return !1;
      const s = C2(o);
      if (!s) return !1;
      try {
        const l = t.state.schema.nodeFromJSON(s), a = t.state.tr.replaceSelectionWith(l);
        return t.dispatch(a), !0;
      } catch {
        return !1;
      }
    } } })];
  },
  addInputRules() {
    const t = (n, i) => (!i.attrs.type || i.attrs.type === "1") && i.childCount + i.attrs.start === +n[1];
    let e = Si({
      find: Nf,
      type: this.type,
      getAttributes: (n) => ({ start: +n[1] }),
      joinPredicate: t
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = Si({
      find: Nf,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (n) => ({
        start: +n[1],
        ...this.editor.getAttributes(Vf)
      }),
      joinPredicate: t,
      editor: this.editor
    })), [e];
  }
}), L2 = /^\s*(\[([( |x])?\])\s$/, O2 = "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0", H2 = (t, e, n) => {
  var i;
  return (n == null || (i = n.checkboxLabel) === null || i === void 0 ? void 0 : i.call(n, t, e)) || `Task item checkbox for ${t.textContent || "empty task item"}`;
}, e1 = be.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return { checked: {
      default: !1,
      keepOnSplit: !1,
      parseHTML: (t) => {
        const e = t.getAttribute("data-checked");
        return e === "" || e === "true";
      },
      renderHTML: (t) => ({ "data-checked": t.checked })
    } };
  },
  parseHTML() {
    return [{
      tag: `li[data-type="${this.name}"]`,
      priority: 51,
      contentElement: (t) => {
        var e;
        return (e = t.querySelector("div")) !== null && e !== void 0 ? e : t;
      }
    }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      re(this.options.HTMLAttributes, e, { "data-type": this.name }),
      [
        "label",
        ["input", {
          type: "checkbox",
          checked: t.attrs.checked ? "checked" : null
        }],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  parseMarkdown: (t, e) => {
    const n = [];
    if (t.tokens && t.tokens.length > 0 ? n.push(e.createNode("paragraph", {}, e.parseInline(t.tokens))) : t.text ? n.push(e.createNode("paragraph", {}, [e.createNode("text", { text: t.text })])) : n.push(e.createNode("paragraph", {}, [])), t.nestedTokens && t.nestedTokens.length > 0) {
      const i = e.parseChildren(t.nestedTokens);
      n.push(...i);
    }
    return e.createNode("taskItem", { checked: t.checked || !1 }, n);
  },
  renderMarkdown: (t, e) => {
    var n;
    const i = `- [${!((n = t.attrs) === null || n === void 0) && n.checked ? "x" : " "}] `;
    return vm(t, e, i, void 0, { indentMainContent: !0 });
  },
  addExtensions() {
    return this.options.nested ? [Kg(this.name, [this.options.taskListTypeName])] : [];
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
    return ({ node: t, HTMLAttributes: e, getPos: n, editor: i }) => {
      const r = document.createElement("li"), o = document.createElement("label"), s = document.createElement("span"), l = document.createElement("input"), a = document.createElement("div");
      s.style.cssText = O2;
      const c = (u) => {
        const f = H2(u, u.attrs.checked, this.options.a11y);
        l.setAttribute("aria-label", f), s.textContent = f;
      };
      c(t), o.contentEditable = "false", l.type = "checkbox", l.addEventListener("mousedown", (u) => u.preventDefault()), l.addEventListener("change", (u) => {
        if (!i.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const { checked: f } = u.target;
        i.isEditable && typeof n == "function" && i.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: h }) => {
          const p = n();
          if (typeof p != "number") return !1;
          const m = h.doc.nodeAt(p);
          return h.setNodeMarkup(p, void 0, {
            ...m?.attrs,
            checked: f
          }), !0;
        }).run(), !i.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, f) || (l.checked = !l.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([u, f]) => {
        r.setAttribute(u, f);
      }), r.dataset.checked = t.attrs.checked, l.checked = t.attrs.checked, o.append(l, s), r.append(o, a), Object.entries(e).forEach(([u, f]) => {
        r.setAttribute(u, f);
      });
      let d = new Set(Object.keys(e));
      return {
        dom: r,
        contentDOM: a,
        update: (u) => {
          if (u.type !== this.type) return !1;
          r.dataset.checked = u.attrs.checked, l.checked = u.attrs.checked, c(u);
          const f = i.extensionManager.attributes, h = xi(u, f), p = new Set(Object.keys(h)), m = this.options.HTMLAttributes;
          return d.forEach((g) => {
            p.has(g) || (g in m ? r.setAttribute(g, m[g]) : r.removeAttribute(g));
          }), Object.entries(h).forEach(([g, y]) => {
            y == null ? g in m ? r.setAttribute(g, m[g]) : r.removeAttribute(g) : r.setAttribute(g, y);
          }), d = p, !0;
        }
      };
    };
  },
  addInputRules() {
    return [Si({
      find: L2,
      type: this.type,
      getAttributes: (t) => ({ checked: t[t.length - 1] === "x" })
    })];
  }
}), t1 = be.create({
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
    return [{
      tag: `ul[data-type="${this.name}"]`,
      priority: 51
    }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "ul",
      re(this.options.HTMLAttributes, t, { "data-type": this.name }),
      0
    ];
  },
  parseMarkdown: (t, e) => e.createNode("taskList", {}, e.parseChildren(t.items || [])),
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(t) {
      var e;
      const n = (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) === null || e === void 0 ? void 0 : e.index;
      return n !== void 0 ? n : -1;
    },
    tokenize(t, e, n) {
      const i = (o) => {
        const s = su(o, {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: (l) => ({
            indentLevel: l[1].length,
            mainContent: l[4],
            checked: l[3].toLowerCase() === "x"
          }),
          createToken: (l, a) => ({
            type: "taskItem",
            raw: "",
            mainContent: l.mainContent,
            indentLevel: l.indentLevel,
            checked: l.checked,
            text: l.mainContent,
            tokens: n.inlineTokens(l.mainContent),
            nestedTokens: a
          }),
          customNestedParser: i
        }, n);
        if (s) {
          const l = {
            type: "taskList",
            raw: s.raw,
            items: s.items
          }, a = o.slice(s.raw.length);
          return a.trim() ? [l, ...n.blockTokens(a)] : [l];
        }
        return n.blockTokens(o);
      }, r = su(t, {
        itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
        extractItemData: (o) => ({
          indentLevel: o[1].length,
          mainContent: o[4],
          checked: o[3].toLowerCase() === "x"
        }),
        createToken: (o, s) => ({
          type: "taskItem",
          raw: "",
          mainContent: o.mainContent,
          indentLevel: o.indentLevel,
          checked: o.checked,
          text: o.mainContent,
          tokens: n.inlineTokens(o.mainContent),
          nestedTokens: s
        }),
        customNestedParser: i
      }, n);
      if (r)
        return {
          type: "taskList",
          raw: r.raw,
          items: r.items
        };
    }
  },
  markdownOptions: { indentsContent: !0 },
  addCommands() {
    return { toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName) };
  },
  addKeyboardShortcuts() {
    return { "Mod-Shift-9": () => this.editor.commands.toggleTaskList() };
  }
});
G.create({
  name: "listKit",
  addExtensions() {
    const t = [];
    return this.options.bulletList !== !1 && t.push(jg.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(Xg.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(y2.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(Qg.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(e1.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(t1.configure(this.options.taskList)), t;
  }
});
const R2 = be.create({
  name: "text",
  group: "inline",
  parseMarkdown: (t) => ({
    type: "text",
    text: t.text || ""
  }),
  renderMarkdown: (t) => t.text || ""
}), V2 = 20, n1 = (t, e = 0) => {
  const n = [];
  return !t.children.length || e > V2 || Array.from(t.children).forEach((i) => {
    i.tagName === "SPAN" ? n.push(i) : i.children.length && n.push(...n1(i, e + 1));
  }), n;
}, N2 = (t) => {
  if (!t.children.length) return;
  const e = n1(t);
  e && e.forEach((n) => {
    var i;
    const r = n.getAttribute("style"), o = (i = n.parentElement) === null || i === void 0 || (i = i.closest("span")) === null || i === void 0 ? void 0 : i.getAttribute("style");
    n.setAttribute("style", `${o};${r}`);
  });
}, i1 = lt.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !0
    };
  },
  parseHTML() {
    return [{
      tag: "span",
      consuming: !1,
      getAttrs: (t) => t.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && N2(t), {}) : !1
    }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "span",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  addCommands() {
    return {
      toggleTextStyle: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      removeEmptyTextStyle: () => ({ tr: t }) => {
        const { selection: e } = t;
        return t.doc.nodesBetween(e.from, e.to, (n, i) => {
          if (!n.isInline) return !0;
          n.marks.filter((r) => r.type === this.type).some((r) => Object.values(r.attrs).some((o) => !!o)) || t.removeMark(i, i + n.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), I2 = G.create({
  name: "backgroundColor",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: { backgroundColor: {
        default: null,
        parseHTML: (t) => {
          var e;
          const n = (e = Li(t, "background-color")) !== null && e !== void 0 ? e : t.style.backgroundColor;
          return n?.replace(/['"]+/g, "");
        },
        renderHTML: (t) => xn(t.backgroundColor) ? { style: `background-color: ${t.backgroundColor}` } : {}
      } }
    }];
  },
  addCommands() {
    return {
      setBackgroundColor: (t) => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: t }).run(),
      unsetBackgroundColor: () => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
    };
  }
}), r1 = G.create({
  name: "color",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: { color: {
        default: null,
        parseHTML: (t) => {
          var e;
          const n = (e = Li(t, "color")) !== null && e !== void 0 ? e : t.style.color;
          return n?.replace(/['"]+/g, "");
        },
        renderHTML: (t) => xn(t.color) ? { style: `color: ${t.color}` } : {}
      } }
    }];
  },
  addCommands() {
    return {
      setColor: (t) => ({ chain: e }) => e().setMark("textStyle", { color: t }).run(),
      unsetColor: () => ({ chain: t }) => t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), o1 = G.create({
  name: "fontFamily",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: { fontFamily: {
        default: null,
        parseHTML: (t) => {
          var e;
          return (e = Li(t, "font-family")) !== null && e !== void 0 ? e : t.style.fontFamily;
        },
        renderHTML: (t) => xn(t.fontFamily) ? { style: `font-family: ${t.fontFamily}` } : {}
      } }
    }];
  },
  addCommands() {
    return {
      setFontFamily: (t) => ({ chain: e }) => e().setMark("textStyle", { fontFamily: t }).run(),
      unsetFontFamily: () => ({ chain: t }) => t().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
}), D2 = G.create({
  name: "fontSize",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: { fontSize: {
        default: null,
        parseHTML: (t) => {
          var e;
          return (e = Li(t, "font-size")) !== null && e !== void 0 ? e : t.style.fontSize;
        },
        renderHTML: (t) => xn(t.fontSize) ? { style: `font-size: ${t.fontSize}` } : {}
      } }
    }];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), P2 = G.create({
  name: "lineHeight",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: { lineHeight: {
        default: null,
        parseHTML: (t) => {
          var e;
          return (e = Li(t, "line-height")) !== null && e !== void 0 ? e : t.style.lineHeight;
        },
        renderHTML: (t) => xn(t.lineHeight) ? { style: `line-height: ${t.lineHeight}` } : {}
      } }
    }];
  },
  addCommands() {
    return {
      setLineHeight: (t) => ({ chain: e }) => e().setMark("textStyle", { lineHeight: t }).run(),
      unsetLineHeight: () => ({ chain: t }) => t().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run()
    };
  }
});
G.create({
  name: "textStyleKit",
  addExtensions() {
    const t = [];
    return this.options.backgroundColor !== !1 && t.push(I2.configure(this.options.backgroundColor)), this.options.color !== !1 && t.push(r1.configure(this.options.color)), this.options.fontFamily !== !1 && t.push(o1.configure(this.options.fontFamily)), this.options.fontSize !== !1 && t.push(D2.configure(this.options.fontSize)), this.options.lineHeight !== !1 && t.push(P2.configure(this.options.lineHeight)), this.options.textStyle !== !1 && t.push(i1.configure(this.options.textStyle)), t;
  }
});
var _2 = "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z", z2 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", $2 = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", B2 = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", F2 = "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M11 8H9V10C9 11.1 8.1 12 7 12C8.1 12 9 12.9 9 14V16H11V18H9C7.9 18 7 17.1 7 16V15C7 13.9 6.1 13 5 13V11C6.1 11 7 10.1 7 9V8C7 6.9 7.9 6 9 6H11V8M19 13C17.9 13 17 13.9 17 15V16C17 17.1 16.1 18 15 18H13V16H15V14C15 12.9 15.9 12 17 12C15.9 12 15 11.1 15 10V8H13V6H15C16.1 6 17 6.9 17 8V9C17 10.1 17.9 11 19 11V13Z", W2 = "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z", U2 = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z", j2 = "M13.09 20H6L12 14L13.88 15.88C14.5 14.9 15.36 14.1 16.4 13.6L18 12V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.1 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20M13 3.5L18.5 9H13V3.5M8 9C9.11 9 10 9.9 10 11S9.11 13 8 13 6 12.11 6 11 6.9 9 8 9M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z", Df = "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z", K2 = "M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z", q2 = "M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z", G2 = "M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z", J2 = "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z", X2 = "M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z", Z2 = "M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z", Y2 = "M3,7H9V13H3V7M3,3H21V5H3V3M21,7V9H11V7H21M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", Q2 = "M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", eL = "M15,7H21V13H15V7M3,3H21V5H3V3M13,7V9H3V7H13M9,11V13H3V11H9M3,15H17V17H3V15M3,19H21V21H3V19Z", tL = "M17,8H20V20H21V21H17V20H18V17H14L12.5,20H14V21H10V20H11L17,8M18,9L14.5,16H18V9M5,3H10C11.11,3 12,3.89 12,5V16H9V11H6V16H3V5C3,3.89 3.89,3 5,3M6,5V9H9V5H6Z", nL = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z", iL = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z", rL = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z", oL = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z", sL = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z", lL = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z", aL = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z", cL = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z", dL = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z", uL = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z", fL = "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z", hL = "M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z", pL = "M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z", mL = "M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z", gL = "M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z", yL = "M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z", bL = "M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z", vL = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z", wL = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z", kL = "M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z", xL = "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", SL = "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", CL = "M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z", ML = "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z", AL = "M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z", Pf = "M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z", TL = "M19,13H5V11H19V13Z", EL = "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z", LL = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z", OL = "M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z", HL = "M9 7V17H15V15H11V7H9Z", RL = "M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z", VL = "M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z", NL = "M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z", IL = "M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z", DL = "M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z", PL = "M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z", _L = "M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z", zL = "M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", $L = "M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", BL = "M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z", FL = "M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z", WL = "M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z", UL = "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z", jL = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z", KL = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z", qL = "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";
const GL = {
  bold: J2,
  italic: uL,
  underline: kL,
  strike: bL,
  color: qL,
  highlight: Z2,
  heading: aL,
  textAlign: Df,
  fontFamily: tL,
  fontSize: yL,
  subscript: vL,
  superscript: wL,
  bulletList: fL,
  orderedList: pL,
  taskList: hL,
  indent: dL,
  outdent: cL,
  link: Pf,
  fileImagePlus: j2,
  image: CL,
  video: KL,
  table: NL,
  blockquote: gL,
  horizontalRule: TL,
  code: W2,
  codeBlock: F2,
  clear: X2,
  undo: jL,
  redo: OL,
  markdownTheme: LL,
  fullscreen: xL,
  // heading
  h1: nL,
  h2: iL,
  h3: rL,
  h4: oL,
  h5: sL,
  h6: lL,
  p: mL,
  // textAlign
  left: q2,
  center: Df,
  right: G2,
  justify: K2,
  // no tollbar icon
  circle: $2,
  close: B2,
  fullscreenExit: SL,
  linkVariant: Pf,
  linkVariantOff: AL,
  openInNew: EL,
  formatFloatLeft: Y2,
  formatFloatNone: Q2,
  formatFloatRight: eL,
  sizeS: VL,
  sizeM: RL,
  sizeL: HL,
  aspectRatio: _2,
  delete: U2,
  text: UL,
  htmlView: ML,
  // table
  tablePlus: zL,
  tableRemove: $L,
  tableColumnPlusAfter: IL,
  tableColumnPlusBefore: DL,
  tableColumnRemove: PL,
  tableRowPlusAfter: BL,
  tableRowPlusBefore: FL,
  tableRowRemove: WL,
  tableMergeCells: _L,
  check: z2
};
function fe(t) {
  if (t)
    return `svg:${GL[t]}`;
}
const te = /* @__PURE__ */ ne({
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
    const e = t, n = j(() => fe(e.icon));
    return (i, r) => {
      const o = bn, s = Yf, l = Ti;
      return N(), F(l, {
        class: mt(["rounded me-1 ms-0", {
          "v-btn--active": t.isActive?.()
        }]),
        density: "comfortable",
        size: "small",
        disabled: t.disabled,
        color: t.color,
        icon: "",
        onClick: t.action
      }, {
        default: E(() => [
          n.value ? (N(), F(o, {
            key: 0,
            icon: n.value
          }, null, 8, ["icon"])) : We("", !0),
          H(s, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: e.tooltip
          }, null, 8, ["text"]),
          gt(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class", "onClick"]);
    };
  }
}), JL = (t) => {
  const e = ["float-left", "float-none", "float-right"], n = [
    "formatFloatLeft",
    "formatFloatNone",
    "formatFloatRight"
  ], i = ["left", "inline", "right"];
  return e.map((r, o) => ({
    type: r,
    component: te,
    componentProps: {
      tooltip: `editor.image.${r.replace("-", ".")}.tooltip`,
      icon: n[o],
      action: () => t.chain().focus().updateImage({ display: i[o] }).run(),
      isActive: () => t.isActive("image", { display: i[o] })
    }
  }));
}, XL = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((i, r) => ({
    type: `image-${i}`,
    component: te,
    componentProps: {
      tooltip: `editor.${i.replace("-", ".")}.tooltip`,
      icon: n[r],
      action: () => t.chain().focus().updateImage({ width: Ho[i], height: null }).run(),
      isActive: () => t.isActive("image", { width: Ho[i] })
    }
  }));
}, ZL = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((i, r) => ({
    type: `video-${i}`,
    component: te,
    componentProps: {
      tooltip: `editor.${i.replace("-", ".")}.tooltip`,
      icon: n[r],
      action: () => t.chain().focus().updateVideo({ width: Ro[i] }).run(),
      isActive: () => t.isActive("video", { width: Ro[i] })
    }
  }));
}, YL = (t) => [
  ...JL(t),
  ...XL(t),
  ...ZL(t),
  {
    type: "image-aspect-ratio",
    component: te,
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
    component: te,
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
    component: te,
    componentProps: {
      tooltip: "editor.link.open",
      icon: "openInNew",
      action: () => {
        const { href: e } = t.getAttributes("link");
        if (!hi(e) || !e) return;
        const n = ZM(e);
        n && window.open(n, "_blank", "noopener,noreferrer");
      }
    }
  },
  {
    type: "remove",
    component: te,
    componentProps: {
      tooltip: "editor.remove",
      icon: "delete",
      action: () => {
        const { state: e, dispatch: n } = t.view;
        Fa(e, n);
      }
    }
  }
], QL = (t, e, { editor: n, extension: i, t: r }) => {
  const { extensions: o = [] } = n.extensionManager, s = {};
  for (const l of Object.keys(t)) {
    const a = t[l];
    if (!a) continue;
    const c = [];
    for (const f of a) {
      if (f === "divider") {
        if (c[c.length - 1]?.type === "divider") continue;
        c.push({
          type: "divider",
          component: void 0,
          componentProps: {}
        });
        continue;
      }
      const h = e.find((m) => m.type === f);
      if (h) {
        c.push({
          ...h,
          componentProps: {
            ...h.componentProps,
            tooltip: h.componentProps.tooltip ? r(h.componentProps.tooltip) : void 0
          },
          componentSlots: h.componentSlots
        });
        continue;
      }
      const p = o.find((m) => m.name === f);
      if (p) {
        const { button: m } = p.options, g = m({ editor: n, extension: p, t: r });
        c.push({
          type: f,
          component: g.component,
          componentProps: g.componentProps,
          componentSlots: g.componentSlots
        });
        continue;
      }
    }
    const d = c[c.length - 1], u = c[0];
    d?.type === "divider" && c.pop(), u?.type === "divider" && c.shift(), s[l] = c;
  }
  return s;
}, no = "&nbsp;", Sl = " ", eO = be.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return { HTMLAttributes: {} };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "p",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  parseMarkdown: (t, e) => {
    const n = t.tokens || [];
    if (n.length === 1 && n[0].type === "image") return e.parseChildren([n[0]]);
    const i = e.parseInline(n);
    return n.length === 1 && n[0].type === "text" && (n[0].raw === no || n[0].text === no || n[0].raw === Sl || n[0].text === Sl) && i.length === 1 && i[0].type === "text" && (i[0].text === no || i[0].text === Sl) ? e.createNode("paragraph", void 0, []) : e.createNode("paragraph", void 0, i);
  },
  renderMarkdown: (t, e, n) => {
    if (!t) return "";
    const i = Array.isArray(t.content) ? t.content : [];
    if (i.length === 0) {
      var r, o;
      const s = Array.isArray(n == null || (r = n.previousNode) === null || r === void 0 ? void 0 : r.content) ? n.previousNode.content : [];
      return (n == null || (o = n.previousNode) === null || o === void 0 ? void 0 : o.type) === "paragraph" && s.length === 0 ? no : "";
    }
    return e.renderChildren(i);
  },
  addCommands() {
    return { setParagraph: () => ({ commands: t }) => t.setNode(this.name) };
  },
  addKeyboardShortcuts() {
    return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
  }
});
class tO {
  globalAttributes = ["class", "style", "id", "data-*"];
  // 默认属性
  isInitialized = !1;
  /**
   * 注册全局允许的属性（通常由 HtmlView 扩展调用）
   */
  registerGlobalAttributes(e) {
    e && e.length > 0 && (this.globalAttributes = [...e], this.isInitialized = !0, console.log(
      "Global allowedAttributes registered:",
      this.globalAttributes
    ));
  }
  /**
   * 获取全局允许的属性
   */
  getGlobalAttributes() {
    return [...this.globalAttributes];
  }
  /**
   * 检查是否已初始化
   */
  isGlobalInitialized() {
    return this.isInitialized;
  }
  /**
   * 重置注册表（用于测试）
   */
  reset() {
    this.globalAttributes = ["class", "style", "id"], this.isInitialized = !1;
  }
}
const Lc = new tO();
function nO(t) {
  Lc.registerGlobalAttributes(t);
}
function _f() {
  return Lc.getGlobalAttributes();
}
function iO() {
  return Lc.isGlobalInitialized();
}
function He(t, e, n) {
  let i;
  n && n.length > 0 ? i = n : i = _f(), console.log(`Adding common attributes to ${e}:`, {
    local: n,
    global: _f(),
    final: i,
    globalInitialized: iO()
  });
  const r = t ? { ...t } : {};
  return i.forEach((o) => {
    r[o] || (r[o] = {
      default: null,
      parseHTML: (s) => s.getAttribute(o) || null,
      renderHTML: (s) => s[o] ? { [o]: s[o] } : {}
    });
  }), r;
}
const rO = /* @__PURE__ */ eO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "paragraph",
      this.options.allowedAttributes
    );
  }
}), NR = /* @__PURE__ */ G.create({
  name: "base-kit",
  addOptions() {
    return {
      ...this.parent?.(),
      bubble: {
        list: ox,
        defaultBubbleList: YL,
        button: ({ editor: t, extension: e, t: n }) => {
          const { list: i = {}, defaultBubbleList: r } = e.options?.bubble ?? {}, o = r?.(t) ?? [];
          return QL(i, o, {
            editor: t,
            extension: e,
            t: n
          });
        }
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.placeholder !== !1 && t.push(
      FE.configure({
        placeholder: "",
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && t.push(
      GE.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.document !== !1 && t.push(qE.configure()), this.options.text !== !1 && t.push(R2.configure()), this.options.gapcursor !== !1 && t.push(RE.configure()), this.options.dropcursor !== !1 && t.push(OE.configure(this.options.dropcursor)), this.options.characterCount !== !1 && t.push(LE.configure(this.options.characterCount)), this.options.paragraph !== !1 && t.push(rO.configure(this.options.paragraph)), this.options.hardBreak !== !1 && t.push(JE.configure(this.options.hardBreak)), this.options.listItem !== !1 && t.push(Xg.configure(this.options.listItem)), this.options.textStyle !== !1 && t.push(i1.configure(this.options.textStyle)), t;
  }
}), s1 = /* @__PURE__ */ new WeakSet(), l1 = /* @__PURE__ */ new WeakSet();
function Tn(t) {
  const e = t;
  return s1.add(e), e;
}
function va(t) {
  return Array.isArray(t) && s1.has(t);
}
function a1(t) {
  return t.flatMap((e) => e == null ? [] : Array.isArray(e) && l1.has(e) && !va(e) ? a1(e) : [e]);
}
function oO(t, e) {
  if (t === "slot") return 0;
  if (t instanceof Function) {
    const r = t(e);
    return Array.isArray(r) && !va(r) && !l1.has(r) ? Tn(r) : r;
  }
  const { children: n, ...i } = e ?? {};
  if (t === "svg") throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  if (Array.isArray(n)) {
    if (va(n)) return Tn([
      t,
      i,
      n
    ]);
    if (n.length === 0) return Tn([t, i]);
    const r = a1(n);
    return r.length === 0 ? Tn([t, i]) : Tn([
      t,
      i,
      ...r
    ]);
  }
  return n != null ? Tn([
    t,
    i,
    n
  ]) : Tn([t, i]);
}
const _o = (t, e) => oO(t, e), sO = (t, e) => {
  var n;
  const { state: i } = t, { selection: r } = i;
  if (!r.empty) return !1;
  const { $from: o } = r;
  if (o.parentOffset !== 0) return !1;
  const s = o.depth - 1;
  if (s < 0) return !1;
  const l = o.node(s), a = o.index(s);
  if (a === 0) return !1;
  if (l.type === e) return t.commands.lift(e.name);
  const c = l.child(a - 1);
  if (c.type !== e || !(!((n = c.lastChild) === null || n === void 0) && n.isTextblock)) return !1;
  const d = o.before() - 1 - 1;
  return t.commands.command(({ tr: u, dispatch: f }) => {
    if (!f) return !0;
    const h = o.parent.content, p = new L(h, 0, 0);
    return u.replace(d, o.after(), p), u.setSelection(I.create(u.doc, d + h.size)), u.scrollIntoView(), f(u), !0;
  });
}, lO = /^\s*>\s$/, aO = be.create({
  name: "blockquote",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ _o("blockquote", {
      ...re(this.options.HTMLAttributes, t),
      children: /* @__PURE__ */ _o("slot", {})
    });
  },
  parseMarkdown: (t, e) => {
    var n;
    const i = (n = e.parseBlockChildren) !== null && n !== void 0 ? n : e.parseChildren;
    return e.createNode("blockquote", void 0, i(t.tokens || []));
  },
  renderMarkdown: (t, e) => {
    if (!t.content) return "";
    const n = ">", i = [];
    return t.content.forEach((r, o) => {
      var s, l;
      const a = ((s = (l = e.renderChild) === null || l === void 0 ? void 0 : l.call(e, r, o)) !== null && s !== void 0 ? s : e.renderChildren([r])).split(`
`).map((c) => c.trim() === "" ? n : `${n} ${c}`);
      i.push(a.join(`
`));
    }), i.join(`
${n}
`);
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
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
      Backspace: () => sO(this.editor, this.type)
    };
  },
  addInputRules() {
    return [Si({
      find: lO,
      type: this.type
    })];
  }
}), IR = /* @__PURE__ */ aO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "blockquote",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleBlockquote().run(),
          isActive: () => t.isActive("blockquote") || !1,
          disabled: !t.can().toggleBlockquote(),
          icon: "blockquote",
          tooltip: e("editor.blockquote.tooltip")
        }
      })
    };
  }
}), cO = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, dO = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, uO = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, fO = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, hO = lt.create({
  name: "bold",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [
      { tag: "strong" },
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
    return /* @__PURE__ */ _o("strong", {
      ...re(this.options.HTMLAttributes, t),
      children: /* @__PURE__ */ _o("slot", {})
    });
  },
  markdownTokenName: "strong",
  parseMarkdown: (t, e) => e.applyMark("bold", e.parseInline(t.tokens || [])),
  markdownOptions: { htmlReopen: {
    open: "<strong>",
    close: "</strong>"
  } },
  renderMarkdown: (t, e) => `**${e.renderChildren(t)}**`,
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
    return [yn({
      find: cO,
      type: this.type
    }), yn({
      find: uO,
      type: this.type
    })];
  },
  addPasteRules() {
    return [Ut({
      find: dO,
      type: this.type
    }), Ut({
      find: fO,
      type: this.type
    })];
  }
}), DR = /* @__PURE__ */ hO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "bold",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleBold().run(),
          isActive: () => t.isActive("bold") || !1,
          disabled: !t.can().toggleBold(),
          icon: "bold",
          tooltip: e("editor.bold.tooltip")
        }
      })
    };
  }
}), PR = /* @__PURE__ */ jg.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "bulletList",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleBulletList().run(),
          isActive: () => t.isActive("bulletList") || !1,
          disabled: !t.can().toggleBulletList(),
          icon: "bulletList",
          tooltip: e("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), _R = /* @__PURE__ */ be.create({
  name: "clear",
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "clear",
          tooltip: e("editor.clear.tooltip")
        }
      })
    };
  }
}), pO = (t) => {
  const e = /`([^`]+)`(?!`)$/.exec(t);
  return !e || e.index > 0 && t[e.index - 1] === "`" ? null : {
    index: e.index,
    text: e[0],
    replaceWith: e[1]
  };
}, mO = (t) => {
  const e = /`([^`]+)`(?!`)/g, n = [];
  let i;
  for (; (i = e.exec(t)) !== null; )
    i.index > 0 && t[i.index - 1] === "`" || n.push({
      index: i.index,
      text: i[0],
      replaceWith: i[1]
    });
  return n;
};
function gO(t) {
  const e = new Set((t.match(/`+/g) || []).map((i) => i.length));
  let n = 1;
  for (; e.has(n); ) n += 1;
  return n;
}
const yO = lt.create({
  name: "code",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "code",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (t, e) => e.applyMark("code", [{
    type: "text",
    text: t.text || ""
  }]),
  renderMarkdown: (t, e, n) => {
    var i;
    if (!t.content) return "";
    const r = typeof (n == null || (i = n.meta) === null || i === void 0 ? void 0 : i.markText) == "string" ? n.meta.markText : "", o = "`".repeat(gO(r)), s = r.startsWith("`") || r.endsWith("`") ? " " : "";
    return `${o}${s}${e.renderChildren(t.content)}${s}${o}`;
  },
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return { "Mod-e": () => this.editor.commands.toggleCode() };
  },
  addInputRules() {
    return [yn({
      find: pO,
      type: this.type
    })];
  },
  addPasteRules() {
    return [Ut({
      find: mO,
      type: this.type
    })];
  }
}), zR = /* @__PURE__ */ yO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "code",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleCode().run(),
          isActive: () => t.isActive("code") || !1,
          disabled: !t.can().toggleCode(),
          icon: "code",
          tooltip: e("editor.code.tooltip")
        }
      })
    };
  }
}), Cl = 4, bO = /^```([a-z]+)?[\s\n]$/, vO = /^~~~([a-z]+)?[\s\n]$/, wO = be.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      exitOnArrowUp: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: Cl,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return { language: {
      default: this.options.defaultLanguage,
      parseHTML: (t) => {
        var e;
        const { languageClassPrefix: n } = this.options;
        if (!n) return null;
        const i = [...((e = t.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((r) => r.startsWith(n)).map((r) => r.replace(n, ""))[0];
        return i || null;
      },
      rendered: !1
    } };
  },
  parseHTML() {
    return [{
      tag: "pre",
      preserveWhitespace: "full"
    }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "pre",
      re(this.options.HTMLAttributes, e),
      [
        "code",
        { class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null },
        0
      ]
    ];
  },
  markdownTokenName: "code",
  parseMarkdown: (t, e) => {
    var n, i;
    return ((n = t.raw) === null || n === void 0 ? void 0 : n.startsWith("```")) === !1 && ((i = t.raw) === null || i === void 0 ? void 0 : i.startsWith("~~~")) === !1 && t.codeBlockStyle !== "indented" ? [] : e.createNode("codeBlock", { language: t.lang || null }, t.text ? [e.createTextNode(t.text)] : []);
  },
  renderMarkdown: (t, e) => {
    var n;
    let i = "";
    const r = ((n = t.attrs) === null || n === void 0 ? void 0 : n.language) || "";
    return t.content ? i = [
      `\`\`\`${r}`,
      e.renderChildren(t.content),
      "```"
    ].join(`
`) : i = `\`\`\`${r}

\`\`\``, i;
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
      Backspace: () => {
        const { empty: t, $anchor: e } = this.editor.state.selection, n = e.pos === 1;
        return !t || e.parent.type.name !== this.name ? !1 : n || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      Tab: ({ editor: t }) => {
        var e;
        if (!this.options.enableTabIndentation) return !1;
        const n = (e = this.options.tabSize) !== null && e !== void 0 ? e : Cl, { state: i } = t, { selection: r } = i, { $from: o, empty: s } = r;
        if (o.parent.type !== this.type) return !1;
        const l = " ".repeat(n);
        return s ? t.commands.insertContent(l) : t.commands.command(({ tr: a }) => {
          const { from: c, to: d } = r, u = i.doc.textBetween(c, d, `
`, `
`).split(`
`).map((f) => l + f).join(`
`);
          return a.replaceWith(c, d, i.schema.text(u)), !0;
        });
      },
      "Shift-Tab": ({ editor: t }) => {
        var e;
        if (!this.options.enableTabIndentation) return !1;
        const n = (e = this.options.tabSize) !== null && e !== void 0 ? e : Cl, { state: i } = t, { selection: r } = i, { $from: o, empty: s } = r;
        return o.parent.type !== this.type ? !1 : s ? t.commands.command(({ tr: l }) => {
          var a;
          const { pos: c } = o, d = o.start(), u = o.end(), f = i.doc.textBetween(d, u, `
`, `
`).split(`
`);
          let h = 0, p = 0;
          const m = c - d;
          for (let v = 0; v < f.length; v += 1) {
            if (p + f[v].length >= m) {
              h = v;
              break;
            }
            p += f[v].length + 1;
          }
          const g = ((a = f[h].match(/^ */)) === null || a === void 0 ? void 0 : a[0]) || "", y = Math.min(g.length, n);
          if (y === 0) return !0;
          let b = d;
          for (let v = 0; v < h; v += 1) b += f[v].length + 1;
          return l.delete(b, b + y), c - b <= y && l.setSelection(I.create(l.doc, b)), !0;
        }) : t.commands.command(({ tr: l }) => {
          const { from: a, to: c } = r, d = i.doc.textBetween(a, c, `
`, `
`).split(`
`).map((u) => {
            var f;
            const h = ((f = u.match(/^ */)) === null || f === void 0 ? void 0 : f[0]) || "", p = Math.min(h.length, n);
            return u.slice(p);
          }).join(`
`);
          return l.replaceWith(a, c, i.schema.text(d)), !0;
        });
      },
      Enter: ({ editor: t }) => {
        if (!this.options.exitOnTripleEnter) return !1;
        const { state: e } = t, { selection: n } = e, { $from: i, empty: r } = n;
        if (!r || i.parent.type !== this.type) return !1;
        const o = i.parentOffset === i.parent.nodeSize - 2, s = i.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : t.chain().command(({ tr: l }) => (l.delete(i.pos - 2, i.pos), !0)).exitCode().run();
      },
      ArrowUp: ({ editor: t }) => {
        if (!this.options.exitOnArrowUp) return !1;
        const { state: e } = t, { selection: n } = e, { $from: i, empty: r } = n;
        if (!r || i.parent.type !== this.type || i.parentOffset !== 0) return !1;
        const o = i.before();
        return o > 0 ? !1 : t.commands.insertDefaultBlock({ pos: o });
      },
      ArrowDown: ({ editor: t }) => {
        if (!this.options.exitOnArrowDown) return !1;
        const { state: e } = t, { selection: n, doc: i } = e, { $from: r, empty: o } = n;
        if (!o || r.parent.type !== this.type || r.parentOffset !== r.parent.nodeSize - 2) return !1;
        const s = r.after();
        return s === void 0 ? !1 : i.nodeAt(s) ? t.commands.command(({ tr: l }) => (l.setSelection(B.near(i.resolve(s))), !0)) : t.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [ea({
      find: bO,
      type: this.type,
      getAttributes: (t) => ({ language: t[1] })
    }), ea({
      find: vO,
      type: this.type,
      getAttributes: (t) => ({ language: t[1] })
    })];
  },
  addProseMirrorPlugins() {
    return [new ie({
      key: new se("codeBlockVSCodeHandler"),
      props: { handlePaste: (t, e) => {
        if (!e.clipboardData || this.editor.isActive(this.type.name)) return !1;
        const n = e.clipboardData.getData("text/plain"), i = e.clipboardData.getData("vscode-editor-data"), r = i ? JSON.parse(i) : void 0, o = r?.mode;
        if (!n || !o) return !1;
        const { tr: s, schema: l } = t.state, a = l.text(n.replace(/\r\n?/g, `
`));
        return s.replaceSelectionWith(this.type.create({ language: o }, a)), s.selection.$from.parent.type !== this.type && s.setSelection(I.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), t.dispatch(s), !0;
      } }
    })];
  }
}), $R = /* @__PURE__ */ wO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "codeBlock",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleCodeBlock().run(),
          isActive: () => t.isActive("codeBlock") || !1,
          disabled: !t.can().toggleCodeBlock(),
          icon: "codeBlock",
          tooltip: e("editor.codeblock.tooltip")
        }
      })
    };
  }
}), c1 = /* @__PURE__ */ ne({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "" },
    nudgeLeft: { default: 0 },
    nudgeTop: { default: 0 },
    more: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, i = e, r = Y(""), o = Y(!1);
    Bt(o, (l) => {
      r.value = n.modelValue;
    });
    function s(l) {
      i("update:modelValue", l), i("change", l), r.value = l, o.value = !1;
    }
    return (l, a) => {
      const c = bn, d = Ti, u = Oa, f = z1, h = La, p = ps;
      return N(), F(p, {
        modelValue: o.value,
        "onUpdate:modelValue": a[2] || (a[2] = (m) => o.value = m),
        "nudge-left": t.nudgeLeft || 255,
        "nudge-top": t.nudgeTop || 42,
        "close-on-content-click": !1,
        transition: "scale-transition",
        origin: t.nudgeLeft ? "top left" : "top right",
        activator: "parent"
      }, {
        default: E(() => [
          H(h, null, {
            default: E(() => [
              H(f, {
                class: "d-flex flex-wrap justify-between ma-1",
                fluid: "",
                "max-width": 230
              }, {
                default: E(() => [
                  (N(!0), ue(Ne, null, et(A(nx), (m) => (N(), F(d, {
                    key: m,
                    flat: "",
                    icon: "",
                    density: "compact",
                    onClick: (g) => s(m)
                  }, {
                    default: E(() => [
                      H(c, {
                        icon: A(fe)("circle"),
                        color: m
                      }, null, 8, ["icon", "color"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)),
                  H(u, {
                    modelValue: r.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (m) => r.value = m),
                    class: "mt-2 mx-1",
                    "append-inner-icon": A(fe)("check"),
                    density: "compact",
                    label: "HEX",
                    variant: "outlined",
                    flat: "",
                    "hide-details": "",
                    "single-line": "",
                    clearable: "",
                    "onClick:appendInner": a[1] || (a[1] = (m) => s(r.value))
                  }, Ia({ _: 2 }, [
                    r.value ? {
                      name: "prepend-inner",
                      fn: E(() => [
                        H(c, {
                          class: "opacity-100",
                          icon: A(fe)("circle"),
                          color: r.value
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
}), kO = /* @__PURE__ */ ne({
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
    const e = t, { state: n } = gc();
    function i(r) {
      e.action?.(r);
    }
    return Gn(() => {
      const { color: r } = e.editor.getAttributes("textStyle");
      n.color = r;
    }), (r, o) => (N(), F(te, {
      icon: t.icon,
      tooltip: t.tooltip,
      disabled: t.disabled,
      color: A(n).color,
      "is-active": t.isActive
    }, {
      default: E(() => [
        H(c1, {
          modelValue: A(n).color,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => A(n).color = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: i
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), BR = /* @__PURE__ */ r1.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: kO,
        componentProps: {
          action: (n) => {
            typeof n == "string" && t.chain().focus().setColor(n).run();
          },
          isActive: () => {
            const { color: n } = t.getAttributes("textStyle");
            return n && t.isActive({ color: n }) || !1;
          },
          disabled: !t.can().setColor(""),
          icon: "color",
          tooltip: e("editor.color.tooltip")
        }
      })
    };
  }
}), Nr = /* @__PURE__ */ ne({
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
    const e = t, n = Y(!1), i = j(() => {
      const r = e.items.find((s) => s.isActive());
      return r && !r.default ? {
        ...r,
        icon: r.icon ? r.icon : e.icon
      } : {
        title: e.tooltip,
        icon: e.icon,
        isActive: () => !1
      };
    });
    return (r, o) => {
      const s = bn, l = eh, a = Qf, c = Ar, d = La, u = ps;
      return N(), F(te, {
        icon: i.value.icon,
        tooltip: i.value.title,
        disabled: t.disabled,
        color: t.color,
        "is-active": i.value.isActive
      }, {
        default: E(() => [
          H(u, {
            modelValue: n.value,
            "onUpdate:modelValue": o[0] || (o[0] = (f) => n.value = f),
            activator: "parent"
          }, {
            default: E(() => [
              H(d, {
                density: "compact",
                "max-height": t.maxHeight
              }, {
                default: E(() => [
                  (N(!0), ue(Ne, null, et(t.items, (f, h) => (N(), ue(Ne, { key: h }, [
                    H(a, {
                      active: f.isActive(),
                      disabled: f.disabled,
                      onClick: f.action
                    }, {
                      prepend: E(() => [
                        f.icon ? (N(), F(s, {
                          key: 0,
                          icon: A(fe)(f.icon)
                        }, null, 8, ["icon"])) : We("", !0)
                      ]),
                      default: E(() => [
                        H(l, {
                          style: di(f.style)
                        }, {
                          default: E(() => [
                            Ft(Le(f.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1032, ["active", "disabled", "onClick"]),
                    f.divider ? (N(), F(c, { key: 0 })) : We("", !0)
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
}), FR = /* @__PURE__ */ o1.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      fontFamilies: ix,
      button: ({ editor: t, extension: e, t: n }) => {
        const r = (e.options?.fontFamilies || []).map((s) => ({
          title: n(s.title),
          isActive: () => {
            const { fontFamily: l } = t.getAttributes("textStyle");
            return s.value === na && l === void 0 ? !0 : t.isActive({ fontFamily: s.value }) || !1;
          },
          action: () => {
            if (s.value === na) {
              t.chain().focus().unsetFontFamily().run();
              return;
            }
            t.chain().focus().setFontFamily(s.value).run();
          },
          disabled: !t.can().setFontFamily(s.value),
          style: { fontFamily: s.value },
          divider: s.divider ?? !1,
          default: s.default ?? !1
        })), o = r.filter((s) => s.disabled).length === r.length;
        return {
          component: Nr,
          componentProps: {
            icon: "fontFamily",
            tooltip: n("editor.fontFamily.tooltip"),
            disabled: o,
            items: r,
            maxHeight: 280
          }
        };
      }
    };
  }
}), WR = /* @__PURE__ */ G.create({
  name: "fontSize",
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["textStyle"],
      fontSizes: [...rx],
      button: ({ editor: t, extension: e, t: n }) => {
        const i = e.options?.fontSizes || [], r = [ti, ...i].map((s) => ({
          title: s === ti ? n("editor.default") : String(s),
          isActive: () => {
            const { fontSize: l } = t.getAttributes("textStyle");
            return s === ti && l === void 0 ? !0 : t.isActive({ fontSize: String(s) }) || !1;
          },
          action: () => {
            if (s === ti) {
              t.chain().focus().unsetFontSize().run();
              return;
            }
            t.chain().focus().setFontSize(String(s)).run();
          },
          disabled: !t.can().setFontSize(String(s)),
          divider: s === ti,
          default: s === ti
        })), o = r.filter((s) => s.disabled).length === r.length;
        return {
          component: Nr,
          componentProps: {
            icon: "fontSize",
            tooltip: n("editor.fontSize.tooltip"),
            disabled: o,
            items: r,
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
            parseHTML: (t) => {
              const n = (t.style.fontSize || "").match(/^(\d+(\.\d+)?)(px|em|rem|%)?$/);
              return n ? n[0] : "";
            },
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${Ji(t.fontSize)}`
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
}), xO = /* @__PURE__ */ ne({
  __name: "FullscreenActionButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    isActive: { type: Function, default: void 0 },
    useWindow: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = Gt(), { state: i, toggleFullscreen: r } = gc(), { isFullscreen: o, enter: s, exit: l } = aA();
    Bt(o, (u) => {
      !u && i.isFullscreen && e.useWindow && d();
    });
    const a = j(() => {
      const u = i.isFullscreen ? "editor.fullscreen.tooltip.exit" : "editor.fullscreen.tooltip.fullscreen";
      return A(n)(u);
    }), c = j(() => {
      const u = i.isFullscreen ? "fullscreenExit" : "fullscreen";
      return fe(u);
    });
    function d(u = !1) {
      r(), i.isFullscreen ? (document.documentElement.classList.add("overflow-y-hidden"), u && s()) : (document.documentElement.classList.remove("overflow-y-hidden"), u && l());
    }
    return (u, f) => {
      const h = bn, p = Yf, m = Ti;
      return N(), F(m, {
        class: mt(["rounded me-1 ms-0", {
          "v-btn--active": t.isActive?.()
        }]),
        density: "comfortable",
        size: "small",
        disabled: t.disabled,
        color: t.color,
        icon: "",
        onClick: f[0] || (f[0] = (g) => d(t.useWindow))
      }, {
        default: E(() => [
          H(h, { icon: c.value }, null, 8, ["icon"]),
          H(p, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: a.value
          }, null, 8, ["text"]),
          gt(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class"]);
    };
  }
}), UR = /* @__PURE__ */ G.create({
  name: "fullscreen",
  addOptions() {
    return {
      ...this.parent?.(),
      useWindow: !1,
      button: ({ editor: t, extension: e, t: n }) => ({
        component: xO,
        componentProps: {
          useWindow: e.options.useWindow ?? !1
        }
      })
    };
  }
}), SO = be.create({
  name: "heading",
  addOptions() {
    return {
      levels: [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return { level: {
      default: 1,
      rendered: !1
    } };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      `h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`,
      re(this.options.HTMLAttributes, e),
      0
    ];
  },
  parseMarkdown(t, e) {
    const n = t.depth || 1;
    return this.options.levels.includes(n) ? e.createNode("heading", { level: n }, e.parseInline(t.tokens || [])) : e.createNode("paragraph", void 0, e.parseInline(t.tokens || []));
  },
  renderMarkdown: (t, e) => {
    var n;
    const i = !((n = t.attrs) === null || n === void 0) && n.level ? parseInt(t.attrs.level, 10) : 1, r = "#".repeat(i);
    return t.content ? `${r} ${e.renderChildren(t.content)}` : "";
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
    return this.options.levels.map((t) => ea({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: { level: t }
    }));
  }
}), jR = /* @__PURE__ */ SO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "heading",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6],
      button: ({ editor: t, extension: e, t: n }) => {
        const { extensions: i = [] } = t.extensionManager ?? [], r = e.options?.levels || [], o = i.find(
          (a) => a.name === "base-kit"
        ), s = r.map((a) => ({
          action: () => t.chain().focus().toggleHeading({ level: a }).run(),
          isActive: () => t.isActive("heading", { level: a }) || !1,
          disabled: !t.can().toggleHeading({ level: a }),
          icon: `h${a}`,
          title: n(`editor.heading.h${a}.tooltip`)
        }));
        o && o.options.paragraph !== !1 && s.unshift({
          action: () => t.chain().focus().setParagraph().run(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          icon: "p",
          title: n("editor.paragraph.tooltip"),
          divider: !0
        });
        const l = s.filter((a) => a.disabled).length === s.length;
        return {
          component: Nr,
          componentProps: {
            icon: "heading",
            tooltip: n("editor.heading.tooltip"),
            disabled: l,
            items: s
          }
        };
      }
    };
  }
}), CO = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, MO = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, AO = lt.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? { color: {
      default: null,
      parseHTML: (t) => t.getAttribute("data-color") || Li(t, "background-color") || t.style.backgroundColor,
      renderHTML: (t) => xn(t.color) ? {
        "data-color": t.color,
        style: `background-color: ${t.color}; color: inherit`
      } : {}
    } } : {};
  },
  parseHTML() {
    return [{ tag: "mark" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "mark",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  renderMarkdown: (t, e) => `==${e.renderChildren(t)}==`,
  parseMarkdown: (t, e) => e.applyMark("highlight", e.parseInline(t.tokens || [])),
  markdownTokenizer: {
    name: "highlight",
    level: "inline",
    start: (t) => t.indexOf("=="),
    tokenize(t, e, n) {
      const i = /^(==)(?!\s)([^=]*[^=\s])(==)/.exec(t);
      if (i) {
        const r = i[2].trim(), o = n.inlineTokens(r);
        return {
          type: "highlight",
          raw: i[0],
          text: r,
          tokens: o
        };
      }
    }
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: e }) => e.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return { "Mod-Shift-h": () => this.editor.commands.toggleHighlight() };
  },
  addInputRules() {
    return [yn({
      find: CO,
      type: this.type
    })];
  },
  addPasteRules() {
    return [Ut({
      find: MO,
      type: this.type
    })];
  }
}), TO = /* @__PURE__ */ ne({
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
    const e = t, { state: n } = gc();
    function i(r) {
      e.action?.(r);
    }
    return Gn(() => {
      const { color: r } = e.editor.getAttributes("highlight");
      n.highlight = r;
    }), (r, o) => (N(), F(te, {
      icon: t.icon,
      tooltip: t.tooltip,
      disabled: t.disabled,
      color: A(n).highlight,
      "is-active": t.isActive
    }, {
      default: E(() => [
        H(c1, {
          modelValue: A(n).highlight,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => A(n).highlight = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: i
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), KR = /* @__PURE__ */ AO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "highlight",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: !0,
      button: ({ editor: t, t: e }) => ({
        component: TO,
        componentProps: {
          action: (n) => {
            typeof n == "string" && t.chain().focus().setHighlight({ color: n }).run();
          },
          isActive: () => t.isActive("highlight") || !1,
          disabled: !t.can().setHighlight(),
          icon: "highlight",
          tooltip: e("editor.highlight.tooltip")
        }
      })
    };
  }
}), qR = /* @__PURE__ */ KE.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      depth: 10,
      button: ({ editor: t, t: e }) => ["undo", "redo"].map((i) => ({
        component: te,
        componentProps: {
          action: () => {
            i === "undo" && t.chain().focus().undo().run(), i === "redo" && t.chain().focus().redo().run();
          },
          disabled: !t.can()[i](),
          icon: i,
          tooltip: e(`editor.${i}.tooltip`)
        }
      }))
    };
  }
}), EO = be.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {},
      nextNodeType: "paragraph"
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["hr", re(this.options.HTMLAttributes, t)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (t, e) => e.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return { setHorizontalRule: () => ({ chain: t, state: e }) => {
      if (!gk(e, e.schema.nodes[this.name])) return !1;
      const { selection: n } = e, { $to: i } = n, r = t();
      return sm(n) ? r.insertContentAt(i.pos, { type: this.name }) : r.insertContent({ type: this.name }), r.command(({ state: o, tr: s, dispatch: l }) => {
        if (l) {
          const { $to: a } = s.selection, c = a.end();
          if (a.nodeAfter)
            a.nodeAfter.isTextblock ? s.setSelection(I.create(s.doc, a.pos + 1)) : a.nodeAfter.isBlock ? s.setSelection(z.create(s.doc, a.pos)) : s.setSelection(I.create(s.doc, a.pos));
          else {
            const d = o.schema.nodes[this.options.nextNodeType] || a.parent.type.contentMatch.defaultType, u = d?.create();
            u && (s.insert(c, u), s.setSelection(I.create(s.doc, c + 1)));
          }
          s.scrollIntoView();
        }
        return !0;
      }).run();
    } };
  },
  addInputRules() {
    return [Cm({
      find: /^(?:---|—-|___\s|\*\*\*\s)$/,
      type: this.type
    })];
  }
}), GR = /* @__PURE__ */ EO.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().setHorizontalRule().run(),
          disabled: !t.can().setHorizontalRule(),
          icon: "horizontalRule",
          tooltip: e("editor.horizontalrule.tooltip")
        }
      })
    };
  }
});
function LO(t) {
  const e = t.view.dom, n = e.parentElement;
  if (!n) return null;
  window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
  const i = document.createElement("div");
  i.className = "tiptap-html-overlay", i.style.position = "absolute", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.backgroundColor = "#f8f9fa", i.style.zIndex = "10", i.style.display = "flex", i.style.flexDirection = "column", i.style.boxSizing = "border-box", i.style.border = "1px solid #ddd";
  const r = document.createElement("textarea");
  r.className = "tiptap-html-editor", r.style.width = "100%", r.style.height = "100%", r.style.padding = "12px", r.style.border = "none", r.style.resize = "none", r.style.fontFamily = "monospace", r.style.fontSize = "14px", r.style.backgroundColor = "transparent", r.style.flex = "1", r.style.outline = "none", r.style.color = "#333";
  const o = t.getHTML();
  t.storage.htmlView.editorContent = o;
  const s = OO(o);
  r.value = s, t.storage.htmlView.htmlContent = s, i.appendChild(r), n.style.position = "relative";
  const l = e.offsetWidth, a = e.offsetHeight;
  return i.style.width = `${l}px`, i.style.height = `${a}px`, i.style.minHeight = `${a}px`, i.style.transition = "none", n.appendChild(i), setTimeout(() => {
    r.focus({ preventScroll: !0 }), console.log("Switched to HTML view mode");
  }, 10), r.addEventListener("input", () => {
    t.storage.htmlView.htmlContent = r.value;
    try {
      t.storage.htmlView.isUpdatingFromHTML = !0;
      const c = d1(r.value);
      t.commands.setContent(c, { emitUpdate: !1 });
      const d = t.state.tr;
      d.setMeta("preventUpdate", !1), d.setMeta("addToHistory", !1), t.view.dispatch(d), t.options.onUpdate && t.options.onUpdate({
        editor: t,
        transaction: d,
        appendedTransactions: []
      });
    } catch (c) {
      console.error("Error syncing HTML to editor:", c);
    } finally {
      requestAnimationFrame(() => {
        t.storage.htmlView.isUpdatingFromHTML = !1;
      });
    }
  }), i;
}
function OO(t) {
  return t.replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "").replace(
    /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
    ""
  );
}
function d1(t) {
  return t.replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "").replace(
    /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
    ""
  );
}
function HO(t) {
  try {
    window.tiptapGlobalState === void 0 && (window.tiptapGlobalState = {}), window.tiptapGlobalState.htmlModeActive = !0;
    const e = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: !0 }
    });
    document.dispatchEvent(e);
    const n = document.querySelector(".vuetify-pro-tiptap");
    n && n.classList.add("html-view-active"), setTimeout(() => {
      document.querySelectorAll(".v-toolbar button").forEach((r) => {
        const o = r.querySelector(".v-icon svg");
        o && ((o.querySelector("path")?.getAttribute("d") || "").includes(
          "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
        ) ? (r.setAttribute("data-htmlview-btn", "true"), r.style.pointerEvents = "auto", r.style.opacity = "1", r.style.cursor = "pointer", r.style.backgroundColor = "rgba(25, 118, 210, 0.12)", r.style.zIndex = "10000", r.removeAttribute("disabled")) : (r.style.pointerEvents = "none", r.style.opacity = "0.4", r.style.cursor = "not-allowed", r.setAttribute("disabled", "true")));
      });
    }, 50), console.log("All editor tools have been disabled");
  } catch (e) {
    console.error("Failed to disable toolbar buttons:", e);
  }
}
function RO(t) {
  try {
    window.tiptapGlobalState !== void 0 && (window.tiptapGlobalState.htmlModeActive = !1);
    const e = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: !1 }
    });
    document.dispatchEvent(e);
    const n = document.querySelector(".vuetify-pro-tiptap");
    n && n.classList.remove("html-view-active"), document.querySelectorAll(".v-toolbar button").forEach((r) => {
      r.removeAttribute("disabled"), r.removeAttribute("aria-disabled"), r instanceof HTMLElement && (r.style.pointerEvents = "", r.style.opacity = "", r.style.backgroundColor = "", r.style.cursor = "", r.style.zIndex = "", r.style.position = "", r.style.border = "", r.onclick = null);
    }), console.log("All editor tools have been enabled");
  } catch (e) {
    console.error("Failed to enable toolbar buttons:", e);
  }
}
function VO(t) {
  try {
    const n = t.view.dom.parentElement;
    let i = 0, r = 0, o = 0;
    n && (console.log(n, "editorParent"), i = n.offsetWidth, r = n.offsetHeight, o = n.scrollHeight);
    const s = t.extensionManager.extensions;
    for (const a of s)
      a.name !== "htmlView" && a.options && typeof a.options.enable == "boolean" && (t.storage.htmlView.disabledExtensions || (t.storage.htmlView.disabledExtensions = {}), t.storage.htmlView.disabledExtensions[a.name] = a.options.enable, a.options.enable = !1);
    n && (n.style.setProperty(
      "--tiptap-editor-width",
      `${i}px`
    ), n.style.setProperty(
      "--tiptap-editor-height",
      `${r}px`
    ), n.style.setProperty(
      "--tiptap-editor-scroll-height",
      `${o}px`
    ), n.classList.add("tiptap-preserve-dimensions")), HO(t);
    const l = LO(t);
    if (l) {
      t.storage.htmlView.overlayElement = l, t.storage.htmlView.isHtmlMode = !0;
      const a = t.view.dom;
      a.parentElement && a.parentElement.classList.add("html-view-mode");
    }
  } catch (e) {
    console.error("Failed to switch to HTML view:", e);
  }
}
function NO(t) {
  try {
    const e = t.storage.htmlView.htmlContent;
    t.storage.htmlView.overlayElement && (t.storage.htmlView.overlayElement.remove(), t.storage.htmlView.overlayElement = null), RO(t);
    const n = t.view.dom;
    if (n.parentElement && (n.parentElement.classList.remove("html-view-mode"), n.parentElement.classList.remove(
      "tiptap-preserve-dimensions"
    ), setTimeout(() => {
      n.parentElement && (n.parentElement.style.removeProperty(
        "--tiptap-editor-width"
      ), n.parentElement.style.removeProperty(
        "--tiptap-editor-height"
      ), n.parentElement.style.removeProperty(
        "--tiptap-editor-scroll-height"
      ));
    }, 50)), e && e.trim() !== "") {
      const r = d1(e);
      t.storage.htmlView.isUpdatingFromHTML = !0, t.commands.setContent(r);
      const o = t.state.tr;
      o.setMeta("preventUpdate", !1), o.setMeta("addToHistory", !1), t.view.dispatch(o), t.options.onUpdate && t.options.onUpdate({
        editor: t,
        transaction: o,
        appendedTransactions: []
      }), requestAnimationFrame(() => {
        t.storage.htmlView.isUpdatingFromHTML = !1;
      }), console.log("Applied HTML to editor");
    }
    const i = t.extensionManager.extensions;
    if (t.storage.htmlView.disabledExtensions) {
      for (const r of i)
        r.name !== "htmlView" && r.options && typeof r.options.enable == "boolean" && t.storage.htmlView.disabledExtensions[r.name] !== void 0 && (r.options.enable = t.storage.htmlView.disabledExtensions[r.name]);
      t.storage.htmlView.disabledExtensions = {};
    }
    t.storage.htmlView.isHtmlMode = !1, console.log("Switched back to rich text mode");
  } catch (e) {
    console.error("Error applying HTML:", e), t.storage.htmlView.overlayElement && (t.storage.htmlView.overlayElement.remove(), t.storage.htmlView.overlayElement = null), t.storage.htmlView.isHtmlMode = !1;
  }
}
const JR = /* @__PURE__ */ G.create({
  name: "htmlView",
  // Store the HTML view state
  addStorage() {
    return {
      isHtmlMode: !1,
      editorContent: "",
      htmlContent: "",
      overlayElement: null,
      isUpdatingFromHTML: !1,
      disabledExtensions: {},
      // Add storage for dimensions
      originalWidth: 0,
      originalHeight: 0,
      originalScrollHeight: 0
    };
  },
  // Add custom CSS for HTML view mode
  addGlobalAttributes() {
    const t = document.createElement("style");
    return t.textContent = `
      .html-view-mode .ProseMirror {
        display: none !important;
      }
      .tiptap-html-overlay {
        border-radius: 0 !important;
        /* Prevent flickering by using proper dimensions and transitions */
        box-sizing: border-box !important;
        transition: none !important;
      }
      /* Ensure the editor container doesn't resize during transition */
      .vuetify-pro-tiptap.html-view-mode {
        height: var(--tiptap-editor-height) !important;
        display: block !important;
      }
      .html-view-mode .ProseMirror-focused {
        outline: none !important;
      }
      /* Preserve dimensions to prevent layout shifts */
      .tiptap-preserve-dimensions {
        min-height: var(--tiptap-editor-height) !important;
        height: var(--tiptap-editor-height) !important;
        width: var(--tiptap-editor-width) !important;
        transition: none !important;
      }
      /* Ensure textarea in HTML view keeps the exact same dimensions */
      .tiptap-html-editor {
        min-height: var(--tiptap-editor-scroll-height, 100%) !important;
        height: var(--tiptap-editor-scroll-height, 100%) !important;
        width: var(--tiptap-editor-width, 100%) !important;
      }
      /* Disable all other buttons in HTML mode - stronger version */
      .html-view-active .v-toolbar button {
        opacity: 0.4 !important;
        cursor: not-allowed !important;
        background-color: #f0f0f0 !important;
        pointer-events: none !important;
      }
      /* Ensure HTML view button is always clickable */
      .html-view-active .v-toolbar button[data-htmlview-btn="true"] {
        opacity: 1 !important;
        cursor: pointer !important;
        background-color: rgba(25, 118, 210, 0.12) !important;
        border: 1px solid rgba(25, 118, 210, 0.5) !important;
        z-index: 1000 !important;
        position: relative !important;
        pointer-events: auto !important;
      }
    `, document.head.appendChild(t), [];
  },
  addOptions() {
    return {
      ...this.parent?.(),
      // Default allowedAttributes that can be overridden
      allowedAttributes: [],
      button: ({ editor: t, t: e, extension: n }) => (n.options.allowedAttributes && nO(n.options.allowedAttributes), {
        component: te,
        componentProps: {
          action: () => {
            if (t.storage.htmlView.isHtmlMode)
              NO(t);
            else {
              const o = t.view.dom.parentElement;
              o && (t.storage.htmlView.originalWidth = o.offsetWidth, t.storage.htmlView.originalHeight = o.offsetHeight, t.storage.htmlView.originalScrollHeight = o.scrollHeight, console.log(
                "Captured original dimensions before HTML mode:",
                t.storage.htmlView.originalWidth,
                t.storage.htmlView.originalHeight,
                t.storage.htmlView.originalScrollHeight
              )), VO(t);
            }
          },
          isActive: () => t.storage.htmlView.isHtmlMode || !1,
          icon: "htmlView",
          tooltip: e("editor.htmlview.tooltip"),
          // Other plugin buttons should be disabled when HTML view is enabled
          onRender: () => {
            const i = (r) => {
              document.querySelectorAll(".v-toolbar button").forEach((l) => {
                const a = l.querySelector(".v-icon svg");
                if (a) {
                  const c = a.querySelector("path");
                  c && c.getAttribute("d")?.includes(
                    "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
                  ) && l.setAttribute("data-htmlview-btn", "true");
                }
              }), document.querySelectorAll(
                ".vuetify-pro-tiptap .v-toolbar button"
              ).forEach((l) => {
                const a = l.hasAttribute("data-htmlview-btn");
                r.detail.isHtmlMode ? a ? (l.removeAttribute("disabled"), l.removeAttribute("aria-disabled"), l.style.pointerEvents = "auto", l.style.opacity = "1", l.style.backgroundColor = "rgba(25, 118, 210, 0.12)", l.style.border = "1px solid rgba(25, 118, 210, 0.5)", l.style.zIndex = "1000", l.style.position = "relative", l.style.cursor = "pointer") : (l.setAttribute("disabled", "true"), l.setAttribute("aria-disabled", "true"), l.style.pointerEvents = "none", l.style.opacity = "0.4", l.style.backgroundColor = "#f0f0f0", l.style.cursor = "not-allowed", l instanceof HTMLElement && (l.onclick = function(c) {
                  return c.preventDefault(), c.stopPropagation(), !1;
                })) : (l.removeAttribute("disabled"), l.removeAttribute("aria-disabled"), l.style.pointerEvents = "", l.style.opacity = "", l.style.backgroundColor = "", l.style.border = "", l.style.position = "", l.style.zIndex = "", l.style.cursor = "", l instanceof HTMLElement && (l.onclick = null));
              });
            };
            return document.addEventListener(
              "tiptap-html-mode-changed",
              i
            ), {
              element: document.createElement("div"),
              onMount: (r) => {
                const o = r.closest("button");
                o && (o.setAttribute("data-htmlview-btn", "true"), console.log("HTML view button has been marked"));
              },
              onDestroy: () => {
                document.removeEventListener(
                  "tiptap-html-mode-changed",
                  i
                );
              }
            };
          }
        }
      })
    };
  },
  // Cleanup function to ensure switching back to normal mode and removing any temporary elements
  onDestroy() {
    const t = this.editor;
    t.storage.htmlView.isHtmlMode && t.storage.htmlView.overlayElement && (t.storage.htmlView.overlayElement.remove(), t.storage.htmlView.overlayElement = null);
  },
  // Handle editor update events
  onUpdate() {
    return ({ editor: t }) => !(t.storage.htmlView.isHtmlMode && !t.storage.htmlView.isUpdatingFromHTML);
  }
}), IO = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, DO = be.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {},
      resize: !1
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
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      width: { default: null },
      height: { default: null }
    };
  },
  parseHTML() {
    return [{ tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])' }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", re(this.options.HTMLAttributes, t)];
  },
  parseMarkdown: (t, e) => e.createNode("image", {
    src: t.href,
    title: t.title,
    alt: t.text
  }),
  renderMarkdown: (t) => {
    var e, n, i, r, o, s;
    const l = (e = (n = t.attrs) === null || n === void 0 ? void 0 : n.src) !== null && e !== void 0 ? e : "", a = (i = (r = t.attrs) === null || r === void 0 ? void 0 : r.alt) !== null && i !== void 0 ? i : "", c = (o = (s = t.attrs) === null || s === void 0 ? void 0 : s.title) !== null && o !== void 0 ? o : "";
    return c ? `![${a}](${l} "${c}")` : `![${a}](${l})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document > "u") return null;
    const { directions: t, minWidth: e, minHeight: n, alwaysPreserveAspectRatio: i } = this.options.resize, r = /* @__PURE__ */ new Set([
      "src",
      "width",
      "height"
    ]);
    return ({ node: o, getPos: s, HTMLAttributes: l, editor: a }) => {
      const c = document.createElement("img");
      c.draggable = !1;
      const d = re(this.options.HTMLAttributes, l);
      Object.entries(d).forEach(([y, b]) => {
        if (b != null) switch (y) {
          case "src":
          case "width":
          case "height":
            break;
          default:
            c.setAttribute(y, b);
        }
      }), d.src !== null && (c.src = d.src);
      let u = { ...l };
      const f = (y) => {
        if (typeof y == "string" && y !== "") {
          c.getAttribute("src") !== y && (c.src = y);
          return;
        }
        c.hasAttribute("src") && c.removeAttribute("src"), c.src !== "" && (c.src = "");
      };
      f(l.src);
      const h = (y) => {
        if (y.type !== o.type) return !1;
        const b = a.extensionManager.attributes.filter((w) => w.type === y.type.name), v = xi(y, b);
        return Object.keys(u).forEach((w) => {
          !r.has(w) && !(w in v) && c.removeAttribute(w);
        }), Object.entries(v).forEach(([w, x]) => {
          r.has(w) || (x != null ? c.setAttribute(w, x) : c.removeAttribute(w));
        }), f(v.src), u = v, !0;
      }, p = new Jk({
        element: c,
        editor: a,
        node: o,
        getPos: s,
        onResize: (y, b) => {
          c.style.width = `${y}px`, c.style.height = `${b}px`;
        },
        onCommit: (y, b) => {
          const v = s();
          v !== void 0 && this.editor.chain().setNodeSelection(v).updateAttributes(this.name, {
            width: y,
            height: b
          }).run();
        },
        onUpdate: h,
        options: {
          directions: t,
          min: {
            width: e,
            height: n
          },
          preserveAspectRatio: i === !0
        }
      }), m = p.dom, g = () => {
        m.style.visibility = "", m.style.pointerEvents = "";
      };
      return m.style.visibility = "hidden", m.style.pointerEvents = "none", c.complete && c.naturalWidth > 0 ? g() : (c.onload = g, c.onerror = g), p;
    };
  },
  addCommands() {
    return { setImage: (t) => ({ commands: e }) => e.insertContent({
      type: this.name,
      attrs: t
    }) };
  },
  addInputRules() {
    return [Cm({
      find: IO,
      type: this.type,
      getAttributes: (t) => {
        const [, , e, n, i] = t;
        return {
          src: n,
          alt: e,
          title: i
        };
      }
    })];
  }
}), PO = /* @__PURE__ */ ne({
  __name: "ImageUpload",
  props: {
    modelValue: { default: () => ({}) },
    upload: { type: Function, default: void 0 },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, i = e, r = Y(!1), o = j({
      get: () => n.modelValue,
      set: (l) => i("update:modelValue", l)
    }), s = async (l) => {
      const a = l instanceof File ? l : l[0];
      if (!a)
        throw new Error("No files to upload");
      try {
        r.value = !0;
        const c = await n.upload?.(a);
        if (!c)
          throw new Error("No link received after upload");
        o.value = {
          ...A(o),
          src: c
        };
      } catch (c) {
        yc.error(`Failed to execute upload file: ${c}`);
      } finally {
        r.value = !1;
      }
    };
    return (l, a) => {
      const c = $1, d = Oa, u = gs, f = ms;
      return N(), F(f, { disabled: r.value }, {
        default: E(() => [
          H(c, {
            modelValue: o.value.file,
            "onUpdate:modelValue": [
              a[0] || (a[0] = (h) => o.value.file = h),
              s
            ],
            label: t.t("editor.image.dialog.form.file"),
            accept: "image/*",
            loading: r.value,
            "prepend-icon": A(fe)("fileImagePlus"),
            "onClick:clear": a[1] || (a[1] = (h) => o.value.src = void 0)
          }, null, 8, ["modelValue", "label", "loading", "prepend-icon"]),
          H(d, {
            modelValue: o.value.src,
            "onUpdate:modelValue": a[2] || (a[2] = (h) => o.value.src = h),
            label: t.t("editor.image.dialog.form.link"),
            disabled: "",
            autofocus: "",
            "prepend-icon": A(fe)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(d, {
            modelValue: o.value.alt,
            "onUpdate:modelValue": a[3] || (a[3] = (h) => o.value.alt = h),
            label: t.t("editor.image.dialog.form.alt"),
            "prepend-icon": A(fe)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(u, {
            modelValue: o.value.lockAspectRatio,
            "onUpdate:modelValue": a[4] || (a[4] = (h) => o.value.lockAspectRatio = h),
            label: t.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), _O = /* @__PURE__ */ ne({
  __name: "ImageUrl",
  props: {
    modelValue: { default: () => ({}) },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, i = e, r = j({
      get: () => n.modelValue,
      set: (o) => i("update:modelValue", o)
    });
    return (o, s) => {
      const l = Oa, a = gs, c = ms;
      return N(), F(c, null, {
        default: E(() => [
          H(l, {
            modelValue: r.value.src,
            "onUpdate:modelValue": s[0] || (s[0] = (d) => r.value.src = d),
            label: t.t("editor.image.dialog.form.link"),
            autofocus: "",
            "prepend-icon": A(fe)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(l, {
            modelValue: r.value.alt,
            "onUpdate:modelValue": s[1] || (s[1] = (d) => r.value.alt = d),
            label: t.t("editor.image.dialog.form.alt"),
            "prepend-icon": A(fe)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(a, {
            modelValue: r.value.lockAspectRatio,
            "onUpdate:modelValue": s[2] || (s[2] = (d) => r.value.lockAspectRatio = d),
            label: t.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      });
    };
  }
}), zO = { class: "headline" }, $O = /* @__PURE__ */ ne({
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
    const e = t, { t: n } = Gt(), i = Y(!1), r = Y(!1), o = Y({}), s = j(() => [...[
      {
        name: A(n)("editor.image.dialog.tab.url"),
        type: "url",
        component: _O
      },
      {
        name: A(n)("editor.image.dialog.tab.upload"),
        type: "upload",
        component: PO
      }
    ].filter((f) => f.type ? !e.hiddenTabs.includes(f.type) : f), ...e.imageTabs]), l = j(() => {
      const { src: d } = A(o);
      return !(typeof d == "string" && d !== "");
    });
    async function a() {
      const { src: d, lockAspectRatio: u, height: f } = A(o);
      d && (e.editor.chain().focus().setImage({
        ...A(o),
        src: d,
        height: u ? void 0 : f
      }).run(), c());
    }
    function c() {
      i.value = !1, o.value = {}, setTimeout(() => e.destroy?.(), 300);
    }
    return Bt(
      () => e.value,
      (d) => {
        o.value = {
          ...A(o),
          ...d
        };
      },
      { immediate: !0, deep: !0 }
    ), (d, u) => {
      const f = Tr, h = bn, p = Ti, m = Ai, g = F1, y = B1, b = U1, v = W1, w = Mr, x = Ra, k = Mi, S = Ha;
      return N(), F(S, {
        modelValue: i.value,
        "onUpdate:modelValue": u[3] || (u[3] = (M) => i.value = M),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": c
      }, {
        default: E(() => [
          H(k, null, {
            default: E(() => [
              H(m, {
                class: "px-6",
                density: "compact"
              }, {
                default: E(() => [
                  Be("span", zO, Le(A(n)("editor.image.dialog.title")), 1),
                  H(f),
                  H(p, {
                    class: "mx-0",
                    icon: "",
                    onClick: c
                  }, {
                    default: E(() => [
                      H(h, {
                        icon: A(fe)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(y, {
                modelValue: r.value,
                "onUpdate:modelValue": u[0] || (u[0] = (M) => r.value = M)
              }, {
                default: E(() => [
                  (N(!0), ue(Ne, null, et(s.value, (M, O) => (N(), F(g, {
                    key: O,
                    value: O
                  }, {
                    default: E(() => [
                      Ft(Le(M.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              H(w, null, {
                default: E(() => [
                  H(v, {
                    modelValue: r.value,
                    "onUpdate:modelValue": u[2] || (u[2] = (M) => r.value = M)
                  }, {
                    default: E(() => [
                      (N(!0), ue(Ne, null, et(s.value, (M, O) => (N(), F(b, {
                        key: O,
                        value: O
                      }, {
                        default: E(() => [
                          (N(), F(or(M.component), {
                            modelValue: o.value,
                            "onUpdate:modelValue": u[1] || (u[1] = (V) => o.value = V),
                            upload: t.upload,
                            t: A(n)
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
              H(x, null, {
                default: E(() => [
                  H(p, {
                    disabled: l.value,
                    onClick: a
                  }, {
                    default: E(() => [
                      Ft(Le(A(n)("editor.image.dialog.button.apply")), 1)
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
}), BO = ["src", "alt"], FO = {
  key: 0,
  class: "image-resizer"
}, WO = ["onMousedown"], UO = /* @__PURE__ */ ne({
  __name: "ImageView",
  props: {
    ...Tm,
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
    }, i = Y({
      width: fu,
      height: fu
    }), r = Y({
      width: 0,
      height: 0
    }), o = Y([
      n.TOP_LEFT,
      n.TOP_RIGHT,
      n.BOTTOM_LEFT,
      n.BOTTOM_RIGHT
    ]), s = Y(!1), l = Y({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ""
    }), a = j(() => {
      const { src: k, alt: S, width: M, height: O } = e.node.attrs, V = aa(M) ? `${M}px` : M, D = aa(O) ? `${O}px` : O;
      return {
        src: k || void 0,
        alt: S || void 0,
        style: {
          width: V || void 0,
          height: D || void 0
        }
      };
    }), c = j(() => e.node.attrs.display || void 0), d = j(() => e.node.attrs.lockAspectRatio ?? !0), u = j(() => typeof A(c) == "string" ? ["image-view", `image-view--${A(c)}`] : ["image-view"]), f = j(() => {
      const {
        style: { width: k }
      } = A(a);
      return { width: k === "100%" ? k : void 0 };
    });
    function h(k) {
      r.value = {
        width: k.target.width,
        height: k.target.height
      };
    }
    function p() {
      const { editor: k, getPos: S } = e, M = S();
      M !== void 0 && k.commands.setNodeSelection(M);
    }
    const m = Gi(function() {
      const { editor: k } = e, { width: S } = getComputedStyle(k.view.dom);
      i.value.width = Number.parseInt(S, 10);
    }, hu);
    function g(k, S) {
      k.preventDefault(), k.stopPropagation(), l.value.x = k.clientX, l.value.y = k.clientY;
      const M = A(r).width, O = A(r).height, V = M / O;
      let D = Number(e.node.attrs.width), W = Number(e.node.attrs.height);
      const X = A(i).width;
      D && !W ? (D = D > X ? X : D, W = Math.round(D / V)) : W && !D ? (D = Math.round(W * V), D = D > X ? X : D) : !D && !W ? (D = M > X ? X : M, W = Math.round(D / V)) : D = D > X ? X : D, l.value.w = D, l.value.h = W, l.value.dir = S, s.value = !0, v();
    }
    const y = Gi(function(k) {
      if (k.preventDefault(), k.stopPropagation(), !A(s)) return;
      const { x: S, y: M, w: O, h: V, dir: D } = A(l), W = (k.clientX - S) * (/l/.test(D) ? -1 : 1), X = (k.clientY - M) * (/t/.test(D) ? -1 : 1), J = qM(O + W, uu, A(i).width), Q = A(d) ? null : Math.max(V + X, uu);
      e.updateAttributes({
        width: J,
        height: Q
      });
    }, hu);
    function b(k) {
      k.preventDefault(), k.stopPropagation(), A(s) && (s.value = !1, l.value = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, w(), p());
    }
    function v() {
      document?.addEventListener("mousemove", y, !0), document?.addEventListener("mouseup", b, !0);
    }
    function w() {
      document?.removeEventListener("mousemove", y, !0), document?.removeEventListener("mouseup", b, !0);
    }
    const x = new ResizeObserver(() => m());
    return Gn((k) => {
      A(x).observe(e.editor.view.dom), k(() => {
        A(x).disconnect();
      });
    }), (k, S) => (N(), F(A(Am), {
      as: "span",
      class: mt(u.value),
      style: di(f.value)
    }, {
      default: E(() => [
        Be("div", {
          draggable: "true",
          "data-drag-handle": "",
          class: mt([{
            "image-view__body--focused": t.selected,
            "image-view__body--resizing": s.value
          }, "image-view__body"]),
          style: di(f.value)
        }, [
          Be("img", {
            src: a.value.src,
            alt: a.value.alt,
            style: di(a.value.style),
            class: "image-view__body__image",
            onLoad: h,
            onClick: p
          }, null, 44, BO),
          k.editor.view.editable ? ih((N(), ue("div", FO, [
            (N(!0), ue(Ne, null, et(o.value, (M) => (N(), ue("span", {
              key: M,
              class: mt([`image-resizer__handler--${M}`, "image-resizer__handler"]),
              onMousedown: (O) => g(O, M)
            }, null, 42, WO))), 128))
          ], 512)), [
            [rh, t.selected || s.value]
          ]) : We("", !0)
        ], 6)
      ]),
      _: 1
    }, 8, ["class", "style"]));
  }
}), Oc = /* @__PURE__ */ ne({
  __name: "OriginalThemeProvider",
  setup(t) {
    const { global: { name: e } } = Da();
    return (n, i) => {
      const r = Zf;
      return N(), F(r, { theme: A(e) }, {
        default: E(() => [
          gt(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["theme"]);
    };
  }
}), jO = /* @__PURE__ */ ne({
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
    const e = t, n = Y({});
    function i() {
      const o = e.editor?.view.state.selection?.node?.attrs ?? {};
      o?.src && (n.value.src = o.src), o?.alt && (n.value.alt = o.alt), o?.title && (n.value.title = o.title), o?.width && (n.value.width = o.width), o?.height && (n.value.height = o.height), o?.display && (n.value.display = o.display), n.value.lockAspectRatio = o.lockAspectRatio ?? !0;
    }
    return (r, o) => (N(), F(te, {
      icon: t.icon,
      tooltip: t.tooltip,
      disabled: t.disabled,
      color: t.color,
      "is-active": t.isActive,
      action: i
    }, {
      default: E(() => [
        H(Oc, null, {
          default: E(() => [
            gt(r.$slots, "dialog", {
              props: { editor: t.editor, value: n.value, imageTabs: t.imageTabs, hiddenTabs: t.hiddenTabs, upload: t.upload }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), XR = /* @__PURE__ */ DO.extend({
  addAttributes() {
    return {
      ...He(
        this.parent?.(),
        "image",
        this.options.allowedAttributes
      ),
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
        renderHTML: ({ display: t }) => t ? {
          "data-display": t
        } : {},
        parseHTML: (t) => t.getAttribute("data-display") || "inline"
      }
    };
  },
  addNodeView() {
    return Em(UO);
  },
  addCommands() {
    return {
      ...this.parent?.(),
      updateImage: (t) => ({ commands: e }) => e.updateAttributes(this.name, t)
    };
  },
  addOptions() {
    return {
      ...this.parent?.(),
      upload: void 0,
      width: Ho["size-large"],
      display: "inline",
      imageTabs: [],
      hiddenTabs: [],
      inline: !0,
      dialogComponent: () => $O,
      button: ({ editor: t, extension: e, t: n }) => {
        const { upload: i, imageTabs: r, hiddenTabs: o, dialogComponent: s } = e.options;
        return {
          component: jO,
          componentProps: {
            editor: t,
            upload: i,
            imageTabs: r,
            hiddenTabs: o,
            isActive: () => t.isActive("image") || !1,
            disabled: !t.can().setImage({}),
            icon: "image",
            tooltip: n("editor.image.tooltip")
          },
          componentSlots: {
            dialog: s()
          }
        };
      }
    };
  }
}), ZR = /* @__PURE__ */ G.create({
  name: "indent",
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      button: ({ editor: t, t: e }) => {
        const n = ["outdent", "indent"], i = {
          indent: "sinkListItem",
          outdent: "liftListItem"
        };
        return n.map((r) => ({
          component: te,
          componentProps: {
            action: () => {
              r === "indent" && t.chain().focus().sinkListItem("listItem").run(), r === "outdent" && t.chain().focus().liftListItem("listItem").run();
            },
            disabled: !t.can()[i[r]]("listItem"),
            icon: r,
            tooltip: e(`editor.${r}.tooltip`)
          }
        }));
      }
    };
  }
}), KO = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, qO = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, GO = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, JO = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, XO = lt.create({
  name: "italic",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [
      { tag: "em" },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      { style: "font-style=italic" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "em",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (t, e) => e.applyMark("italic", e.parseInline(t.tokens || [])),
  markdownOptions: { htmlReopen: {
    open: "<em>",
    close: "</em>"
  } },
  renderMarkdown: (t, e) => `*${e.renderChildren(t)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [yn({
      find: KO,
      type: this.type
    }), yn({
      find: GO,
      type: this.type
    })];
  },
  addPasteRules() {
    return [Ut({
      find: qO,
      type: this.type
    }), Ut({
      find: JO,
      type: this.type
    })];
  }
}), YR = /* @__PURE__ */ XO.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "italic",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleItalic().run(),
          isActive: () => t.isActive("italic") || !1,
          disabled: !t.can().toggleItalic(),
          icon: "italic",
          tooltip: e("editor.italic.tooltip")
        }
      })
    };
  }
}), ZO = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", YO = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", wa = "numeric", ka = "ascii", xa = "alpha", Yi = "asciinumeric", Bi = "alphanumeric", Sa = "domain", u1 = "emoji", QO = "scheme", eH = "slashscheme", Ml = "whitespace";
function tH(t, e) {
  return t in e || (e[t] = []), e[t];
}
function On(t, e, n) {
  e[wa] && (e[Yi] = !0, e[Bi] = !0), e[ka] && (e[Yi] = !0, e[xa] = !0), e[Yi] && (e[Bi] = !0), e[xa] && (e[Bi] = !0), e[Bi] && (e[Sa] = !0), e[u1] && (e[Sa] = !0);
  for (const i in e) {
    const r = tH(i, n);
    r.indexOf(t) < 0 && r.push(t);
  }
}
function nH(t, e) {
  const n = {};
  for (const i in e)
    e[i].indexOf(t) >= 0 && (n[i] = !0);
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
    for (let i = 0; i < e.jr.length; i++) {
      const r = e.jr[i][0], o = e.jr[i][1];
      if (o && r.test(t))
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
  ta(t, e, n, i) {
    for (let r = 0; r < t.length; r++)
      this.tt(t[r], e, n, i);
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
  tr(t, e, n, i) {
    i = i || $e.groups;
    let r;
    return e && e.j ? r = e : (r = new $e(e), n && i && On(e, n, i)), this.jr.push([t, r]), r;
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
  ts(t, e, n, i) {
    let r = this;
    const o = t.length;
    if (!o)
      return r;
    for (let s = 0; s < o - 1; s++)
      r = r.tt(t[s]);
    return r.tt(t[o - 1], e, n, i);
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
  tt(t, e, n, i) {
    i = i || $e.groups;
    const r = this;
    if (e && e.j)
      return r.j[t] = e, e;
    const o = e;
    let s, l = r.go(t);
    if (l ? (s = new $e(), Object.assign(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new $e(), o) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const a = Object.assign(nH(s.t, i), n);
          On(o, a, i);
        } else n && On(o, n, i);
      s.t = o;
    }
    return r.j[t] = s, s;
  }
};
const q = (t, e, n, i, r) => t.ta(e, n, i, r), he = (t, e, n, i, r) => t.tr(e, n, i, r), zf = (t, e, n, i, r) => t.ts(e, n, i, r), T = (t, e, n, i, r) => t.tt(e, n, i, r), Ot = "WORD", Ca = "UWORD", f1 = "ASCIINUMERICAL", h1 = "ALPHANUMERICAL", xr = "LOCALHOST", Ma = "TLD", Aa = "UTLD", yo = "SCHEME", ai = "SLASH_SCHEME", Hc = "NUM", Ta = "WS", Rc = "NL", Qi = "OPENBRACE", er = "CLOSEBRACE", zo = "OPENBRACKET", $o = "CLOSEBRACKET", Bo = "OPENPAREN", Fo = "CLOSEPAREN", Wo = "OPENANGLEBRACKET", Uo = "CLOSEANGLEBRACKET", jo = "FULLWIDTHLEFTPAREN", Ko = "FULLWIDTHRIGHTPAREN", qo = "LEFTCORNERBRACKET", Go = "RIGHTCORNERBRACKET", Jo = "LEFTWHITECORNERBRACKET", Xo = "RIGHTWHITECORNERBRACKET", Zo = "FULLWIDTHLESSTHAN", Yo = "FULLWIDTHGREATERTHAN", Qo = "AMPERSAND", es = "APOSTROPHE", ts = "ASTERISK", nn = "AT", ns = "BACKSLASH", is = "BACKTICK", rs = "CARET", Hn = "COLON", Vc = "COMMA", ss = "DOLLAR", ut = "DOT", ls = "EQUALS", Nc = "EXCLAMATION", Ze = "HYPHEN", tr = "PERCENT", as = "PIPE", cs = "PLUS", ds = "POUND", nr = "QUERY", Ic = "QUOTE", p1 = "FULLWIDTHMIDDLEDOT", Dc = "SEMI", ft = "SLASH", ir = "TILDE", us = "UNDERSCORE", m1 = "EMOJI", fs = "SYM";
var g1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: h1,
  AMPERSAND: Qo,
  APOSTROPHE: es,
  ASCIINUMERICAL: f1,
  ASTERISK: ts,
  AT: nn,
  BACKSLASH: ns,
  BACKTICK: is,
  CARET: rs,
  CLOSEANGLEBRACKET: Uo,
  CLOSEBRACE: er,
  CLOSEBRACKET: $o,
  CLOSEPAREN: Fo,
  COLON: Hn,
  COMMA: Vc,
  DOLLAR: ss,
  DOT: ut,
  EMOJI: m1,
  EQUALS: ls,
  EXCLAMATION: Nc,
  FULLWIDTHGREATERTHAN: Yo,
  FULLWIDTHLEFTPAREN: jo,
  FULLWIDTHLESSTHAN: Zo,
  FULLWIDTHMIDDLEDOT: p1,
  FULLWIDTHRIGHTPAREN: Ko,
  HYPHEN: Ze,
  LEFTCORNERBRACKET: qo,
  LEFTWHITECORNERBRACKET: Jo,
  LOCALHOST: xr,
  NL: Rc,
  NUM: Hc,
  OPENANGLEBRACKET: Wo,
  OPENBRACE: Qi,
  OPENBRACKET: zo,
  OPENPAREN: Bo,
  PERCENT: tr,
  PIPE: as,
  PLUS: cs,
  POUND: ds,
  QUERY: nr,
  QUOTE: Ic,
  RIGHTCORNERBRACKET: Go,
  RIGHTWHITECORNERBRACKET: Xo,
  SCHEME: yo,
  SEMI: Dc,
  SLASH: ft,
  SLASH_SCHEME: ai,
  SYM: fs,
  TILDE: ir,
  TLD: Ma,
  UNDERSCORE: us,
  UTLD: Aa,
  UWORD: Ca,
  WORD: Ot,
  WS: Ta
});
const At = /[a-z]/, Di = new RegExp("\\p{L}", "u"), Al = new RegExp("\\p{Emoji}", "u"), Tt = /\d/, Tl = /\s/, $f = "\r", El = `
`, iH = "️", rH = "‍", Ll = "￼";
let io = null, ro = null;
function oH(t = []) {
  const e = {};
  $e.groups = e;
  const n = new $e();
  io == null && (io = Bf(ZO)), ro == null && (ro = Bf(YO)), T(n, "'", es), T(n, "{", Qi), T(n, "}", er), T(n, "[", zo), T(n, "]", $o), T(n, "(", Bo), T(n, ")", Fo), T(n, "<", Wo), T(n, ">", Uo), T(n, "（", jo), T(n, "）", Ko), T(n, "「", qo), T(n, "」", Go), T(n, "『", Jo), T(n, "』", Xo), T(n, "＜", Zo), T(n, "＞", Yo), T(n, "&", Qo), T(n, "*", ts), T(n, "@", nn), T(n, "`", is), T(n, "^", rs), T(n, ":", Hn), T(n, ",", Vc), T(n, "$", ss), T(n, ".", ut), T(n, "=", ls), T(n, "!", Nc), T(n, "-", Ze), T(n, "%", tr), T(n, "|", as), T(n, "+", cs), T(n, "#", ds), T(n, "?", nr), T(n, '"', Ic), T(n, "/", ft), T(n, ";", Dc), T(n, "~", ir), T(n, "_", us), T(n, "\\", ns), T(n, "・", p1);
  const i = he(n, Tt, Hc, {
    [wa]: !0
  });
  he(i, Tt, i);
  const r = he(i, At, f1, {
    [Yi]: !0
  }), o = he(i, Di, h1, {
    [Bi]: !0
  }), s = he(n, At, Ot, {
    [ka]: !0
  });
  he(s, Tt, r), he(s, At, s), he(r, Tt, r), he(r, At, r);
  const l = he(n, Di, Ca, {
    [xa]: !0
  });
  he(l, At), he(l, Tt, o), he(l, Di, l), he(o, Tt, o), he(o, At), he(o, Di, o);
  const a = T(n, El, Rc, {
    [Ml]: !0
  }), c = T(n, $f, Ta, {
    [Ml]: !0
  }), d = he(n, Tl, Ta, {
    [Ml]: !0
  });
  T(n, Ll, d), T(c, El, a), T(c, Ll, d), he(c, Tl, d), T(d, $f), T(d, El), he(d, Tl, d), T(d, Ll, d);
  const u = he(n, Al, m1, {
    [u1]: !0
  });
  T(u, "#"), he(u, Al, u), T(u, iH, u);
  const f = T(u, rH);
  T(f, "#"), he(f, Al, u);
  const h = [[At, s], [Tt, r]], p = [[At, null], [Di, l], [Tt, o]];
  for (let m = 0; m < io.length; m++)
    Zt(n, io[m], Ma, Ot, h);
  for (let m = 0; m < ro.length; m++)
    Zt(n, ro[m], Aa, Ca, p);
  On(Ma, {
    tld: !0,
    ascii: !0
  }, e), On(Aa, {
    utld: !0,
    alpha: !0
  }, e), Zt(n, "file", yo, Ot, h), Zt(n, "mailto", yo, Ot, h), Zt(n, "http", ai, Ot, h), Zt(n, "https", ai, Ot, h), Zt(n, "ftp", ai, Ot, h), Zt(n, "ftps", ai, Ot, h), On(yo, {
    scheme: !0,
    ascii: !0
  }, e), On(ai, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < t.length; m++) {
    const g = t[m][0], b = t[m][1] ? {
      [QO]: !0
    } : {
      [eH]: !0
    };
    g.indexOf("-") >= 0 ? b[Sa] = !0 : At.test(g) ? Tt.test(g) ? b[Yi] = !0 : b[ka] = !0 : b[wa] = !0, zf(n, g, g, b);
  }
  return zf(n, "localhost", xr, {
    ascii: !0
  }), n.jd = new $e(fs), {
    start: n,
    tokens: Object.assign({
      groups: e
    }, g1)
  };
}
function y1(t, e) {
  const n = sH(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), i = n.length, r = [];
  let o = 0, s = 0;
  for (; s < i; ) {
    let l = t, a = null, c = 0, d = null, u = -1, f = -1;
    for (; s < i && (a = l.go(n[s])); )
      l = a, l.accepts() ? (u = 0, f = 0, d = l) : u >= 0 && (u += n[s].length, f++), c += n[s].length, o += n[s].length, s++;
    o -= u, s -= f, c -= u, r.push({
      t: d.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return r;
}
function sH(t) {
  const e = [], n = t.length;
  let i = 0;
  for (; i < n; ) {
    let r = t.charCodeAt(i), o, s = r < 55296 || r > 56319 || i + 1 === n || (o = t.charCodeAt(i + 1)) < 56320 || o > 57343 ? t[i] : t.slice(i, i + 2);
    e.push(s), i += s.length;
  }
  return e;
}
function Zt(t, e, n, i, r) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    t.j[a] ? o = t.j[a] : (o = new $e(i), o.jr = r.slice(), t.j[a] = o), t = o;
  }
  return o = new $e(n), o.jr = r.slice(), t.j[e[s - 1]] = o, o;
}
function Bf(t) {
  const e = [], n = [];
  let i = 0, r = "0123456789";
  for (; i < t.length; ) {
    let o = 0;
    for (; r.indexOf(t[i + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(n.join(""));
      for (let s = parseInt(t.substring(i, i + o), 10); s > 0; s--)
        n.pop();
      i += o;
    } else
      n.push(t[i]), i++;
  }
  return e;
}
const Sr = {
  defaultProtocol: "http",
  events: null,
  format: Ff,
  formatHref: Ff,
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
function Pc(t, e = null) {
  let n = Object.assign({}, Sr);
  t && (n = Object.assign(n, t instanceof Pc ? t.o : t));
  const i = n.ignoreTags, r = [];
  for (let o = 0; o < i.length; o++)
    r.push(i[o].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = r;
}
Pc.prototype = {
  o: Sr,
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
    const i = e != null;
    let r = this.o[t];
    return r && (typeof r == "object" ? (r = n.t in r ? r[n.t] : Sr[t], typeof r == "function" && i && (r = r(e, n))) : typeof r == "function" && i && (r = r(e, n.t, n)), r);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, n) {
    let i = this.o[t];
    return typeof i == "function" && e != null && (i = i(e, n.t, n)), i;
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
function Ff(t) {
  return t;
}
function b1(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
b1.prototype = {
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
    const e = this.toString(), n = t.get("truncate", e, this), i = t.get("format", e, this);
    return n && i.length > n ? i.substring(0, n) + "…" : i;
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
  toObject(t = Sr.defaultProtocol) {
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
    const e = this, n = this.toHref(t.get("defaultProtocol")), i = t.get("formatHref", n, this), r = t.get("tagName", n, e), o = this.toFormattedString(t), s = {}, l = t.get("className", n, e), a = t.get("target", n, e), c = t.get("rel", n, e), d = t.getObj("attributes", n, e), u = t.getObj("events", n, e);
    return s.href = i, l && (s.class = l), a && (s.target = a), c && (s.rel = c), d && Object.assign(s, d), {
      tagName: r,
      attributes: s,
      content: o,
      eventListeners: u
    };
  }
};
function qs(t, e) {
  class n extends b1 {
    constructor(r, o) {
      super(r, o), this.t = t;
    }
  }
  for (const i in e)
    n.prototype[i] = e[i];
  return n.t = t, n;
}
const lH = qs("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Wf = qs("text"), aH = qs("nl"), oo = qs("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t = Sr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== xr && t[1].t === Hn;
  }
}), Xe = (t) => new $e(t);
function cH({
  groups: t
}) {
  const e = t.domain.concat([Qo, ts, nn, ns, is, rs, ss, ls, Ze, Hc, tr, as, cs, ds, ft, fs, ir, us]), n = [es, Hn, Vc, ut, Nc, tr, nr, Ic, Dc, Wo, Uo, Qi, er, $o, zo, Bo, Fo, jo, Ko, qo, Go, Jo, Xo, Zo, Yo], i = [Qo, es, ts, ns, is, rs, ss, ls, Ze, Qi, er, tr, as, cs, ds, nr, ft, fs, ir, us], r = Xe(), o = T(r, ir);
  q(o, i, o), q(o, t.domain, o);
  const s = Xe(), l = Xe(), a = Xe();
  q(r, t.domain, s), q(r, t.scheme, l), q(r, t.slashscheme, a), q(s, i, o), q(s, t.domain, s);
  const c = T(s, nn);
  T(o, nn, c), T(l, nn, c), T(a, nn, c);
  const d = T(o, ut);
  q(d, i, o), q(d, t.domain, o);
  const u = Xe();
  q(c, t.domain, u), q(u, t.domain, u);
  const f = T(u, ut);
  q(f, t.domain, u);
  const h = Xe(lH);
  q(f, t.tld, h), q(f, t.utld, h), T(c, xr, h);
  const p = T(u, Ze);
  T(p, Ze, p), q(p, t.domain, u), q(h, t.domain, u), T(h, ut, f), T(h, Ze, p);
  const m = T(s, Ze), g = T(s, ut);
  T(m, Ze, m), q(m, t.domain, s), q(g, i, o), q(g, t.domain, s);
  const y = Xe(oo);
  q(g, t.tld, y), q(g, t.utld, y), q(y, t.domain, s), q(y, i, o), T(y, ut, g), T(y, Ze, m), T(y, nn, c);
  const b = T(y, Hn), v = Xe(oo);
  q(b, t.numeric, v);
  const w = Xe(oo), x = Xe();
  q(w, e, w), q(w, n, x), q(x, e, w), q(x, n, x), T(y, ft, w), T(v, ft, w);
  const k = T(l, Hn), S = T(a, Hn), M = T(S, ft), O = T(M, ft);
  q(l, t.domain, s), T(l, ut, g), T(l, Ze, m), q(a, t.domain, s), T(a, ut, g), T(a, Ze, m), q(k, t.domain, w), T(k, ft, w), T(k, nr, w), q(O, t.domain, w), q(O, e, w), T(O, ft, w);
  const V = [
    [Qi, er],
    // {}
    [zo, $o],
    // []
    [Bo, Fo],
    // ()
    [Wo, Uo],
    // <>
    [jo, Ko],
    // （）
    [qo, Go],
    // 「」
    [Jo, Xo],
    // 『』
    [Zo, Yo]
    // ＜＞
  ];
  for (let D = 0; D < V.length; D++) {
    const [W, X] = V[D], J = T(w, W);
    T(x, W, J);
    const Q = Xe(oo);
    q(J, e, Q);
    const R = Xe();
    q(J, n, R), T(J, X, w), q(Q, e, Q), q(Q, n, R), q(R, e, Q), q(R, n, R), T(Q, X, w), T(R, X, w);
  }
  return T(r, xr, y), T(r, Rc, aH), {
    start: r,
    tokens: g1
  };
}
function dH(t, e, n) {
  let i = n.length, r = 0, o = [], s = [];
  for (; r < i; ) {
    let l = t, a = null, c = null, d = 0, u = null, f = -1;
    for (; r < i && !(a = l.go(n[r].t)); )
      s.push(n[r++]);
    for (; r < i && (c = a || l.go(n[r].t)); )
      a = null, l = c, l.accepts() ? (f = 0, u = l) : f >= 0 && f++, r++, d++;
    if (f < 0)
      r -= d, r < i && (s.push(n[r]), r++);
    else {
      s.length > 0 && (o.push(Ol(Wf, e, s)), s = []), r -= f, d -= f;
      const h = u.t, p = n.slice(r - d, r);
      o.push(Ol(h, e, p));
    }
  }
  return s.length > 0 && o.push(Ol(Wf, e, s)), o;
}
function Ol(t, e, n) {
  const i = n[0].s, r = n[n.length - 1].e, o = e.slice(i, r);
  return new t(o, n);
}
const uH = typeof console < "u" && console && console.warn || (() => {
}), fH = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ce = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function hH() {
  return $e.groups = {}, ce.scanner = null, ce.parser = null, ce.tokenQueue = [], ce.pluginQueue = [], ce.customSchemes = [], ce.initialized = !1, ce;
}
function Uf(t, e = !1) {
  if (ce.initialized && uH(`linkifyjs: already initialized - will not register custom scheme "${t}" ${fH}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ce.customSchemes.push([t, e]);
}
function pH() {
  ce.scanner = oH(ce.customSchemes);
  for (let t = 0; t < ce.tokenQueue.length; t++)
    ce.tokenQueue[t][1]({
      scanner: ce.scanner
    });
  ce.parser = cH(ce.scanner.tokens);
  for (let t = 0; t < ce.pluginQueue.length; t++)
    ce.pluginQueue[t][1]({
      scanner: ce.scanner,
      parser: ce.parser
    });
  return ce.initialized = !0, ce;
}
function _c(t) {
  return ce.initialized || pH(), dH(ce.parser.start, t, y1(ce.scanner.start, t));
}
_c.scan = y1;
function v1(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const i = new Pc(n), r = _c(t), o = [];
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    l.isLink && (!e || l.t === e) && i.check(l) && o.push(l.toFormattedObject(i));
  }
  return o;
}
const Gs = "[\0-   ᠎ -\u2029 　]", mH = new RegExp(Gs), gH = new RegExp(`${Gs}$`), yH = new RegExp(`${Gs}+$`), bH = new RegExp(Gs, "g");
function vH(t, e, n) {
  var i, r;
  const o = t.doc.resolve(e.to);
  if (!(!((i = o.nodeBefore) === null || i === void 0) && i.isText)) return;
  const s = (r = t.doc.textBetween(e.from, e.to, "￼", "￼").match(yH)) === null || r === void 0 ? void 0 : r[0];
  if (!s) return;
  const l = e.to - s.length, a = Hs(l, e.to, t.doc).filter((u) => u.mark.type === n);
  if (!a.length) return;
  const { nodeAfter: c } = o;
  if (c && a.some((u) => u.mark.isInSet(c.marks))) return;
  const d = t.storedMarks;
  t.removeMark(l, e.to, n), t.setStoredMarks(d), t.selection.empty && t.selection.from === e.to && t.removeStoredMark(n);
}
function wH(t) {
  return t.length === 1 ? t[0].isLink : t.length === 3 && t[1].isLink ? ["()", "[]"].includes(t[0].value + t[2].value) : !1;
}
function kH(t) {
  return new ie({
    key: new se("autolink"),
    appendTransaction: (e, n, i) => {
      const r = e.some((a) => a.docChanged) && !n.doc.eq(i.doc), o = e.some((a) => a.getMeta("preventAutolink"));
      if (!r || o) return;
      const { tr: s } = i, l = Qp(n.doc, [...e]);
      if (!e.some(hv)) {
        const a = [];
        l.steps.forEach((c, d) => {
          if (!(c instanceof pe) || !c.slice.size) return;
          const u = l.mapping.slice(d + 1), f = u.map(c.from, 1), h = u.map(c.from + c.slice.size, -1);
          f < h && a.push({
            from: f,
            to: h
          });
        }), a.sort((c, d) => d.to - c.to), a.forEach((c) => vH(s, c, t.type));
      }
      if (Os(l).forEach(({ newRange: a }) => {
        const c = ow(i.doc, a, (f) => f.isTextblock);
        let d, u;
        if (c.length > 1)
          d = c[0], u = i.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ");
        else if (c.length) {
          const f = i.doc.textBetween(a.from, a.to, " ", " ");
          if (!gH.test(f)) return;
          d = c[0], u = i.doc.textBetween(d.pos, a.to, void 0, " ");
        }
        if (d && u) {
          const f = u.split(mH).filter(Boolean);
          if (f.length <= 0) return !1;
          const h = f[f.length - 1], p = d.pos + u.lastIndexOf(h);
          if (!h) return !1;
          const m = _c(h).map((g) => g.toObject(t.defaultProtocol));
          if (!wH(m)) return !1;
          m.filter((g) => g.isLink).map((g) => ({
            ...g,
            from: p + g.start + 1,
            to: p + g.end + 1
          })).filter((g) => i.schema.marks.code ? !i.doc.rangeHasMark(g.from, g.to, i.schema.marks.code) : !0).filter((g) => t.validate(g.value)).filter((g) => t.shouldAutoLink(g.value)).forEach((g) => {
            Hs(g.from, g.to, i.doc).some((y) => y.mark.type === t.type) || s.addMark(g.from, g.to, t.type.create({ href: g.href }));
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function xH(t) {
  return new ie({
    key: new se("handleClickLink"),
    props: { handleClick: (e, n, i) => {
      if (i.button !== 0 || !e.editable) return !1;
      let r = null;
      if (i.target instanceof HTMLAnchorElement) r = i.target;
      else {
        const a = i.target;
        if (!a) return !1;
        const c = t.editor.view.dom;
        r = a.closest("a"), r && !c.contains(r) && (r = null);
      }
      if (!r) return !1;
      let o = !1;
      if (t.enableClickSelection && (o = t.editor.commands.extendMarkRange(t.type.name)), t.openOnClick) {
        var s, l;
        const a = om(e.state, t.type.name), c = (s = r.href) !== null && s !== void 0 ? s : a.href, d = (l = r.target) !== null && l !== void 0 ? l : a.target;
        c && (window.open(c, d), o = !0);
      }
      return o;
    } }
  });
}
const SH = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/, CH = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;
function w1(t, e) {
  let n = 0;
  for (let i = e - 1; i >= 0 && t[i] === "\\"; i -= 1) n += 1;
  return n % 2 === 1;
}
function MH(t, e) {
  let n = 0, i = 0;
  for (; i < e; ) {
    if (t[i] !== "`") {
      i += 1;
      continue;
    }
    if (n === 0 && w1(t, i)) {
      i += 1;
      continue;
    }
    let r = 0;
    for (; i < e && t[i] === "`"; )
      r += 1, i += 1;
    n === 0 ? n = r : r === n && (n = 0);
  }
  return n > 0;
}
function k1(t, e, n) {
  var i, r;
  const [, o, s] = e;
  return (e.index ? t[e.index - 1] : void 0) === "!" || w1(t, (i = e.index) !== null && i !== void 0 ? i : 0) || MH(t, (r = e.index) !== null && r !== void 0 ? r : 0) ? !1 : !!o.trim() && n(s);
}
function x1(t) {
  var e, n;
  const [i, r, o, , s, l, a] = t, c = (e = s ?? l) !== null && e !== void 0 ? e : a;
  return {
    index: (n = t.index) !== null && n !== void 0 ? n : 0,
    text: i,
    replaceWith: r,
    data: {
      href: o,
      title: c || null,
      markdown: !0
    }
  };
}
function AH(t, e) {
  return t.index < e.index + e.text.length && e.index < t.index + t.text.length;
}
function S1(t) {
  var e, n, i;
  return {
    href: (e = t.data) === null || e === void 0 ? void 0 : e.href,
    title: (n = (i = t.data) === null || i === void 0 ? void 0 : i.title) !== null && n !== void 0 ? n : null
  };
}
function TH(t) {
  const e = yn({
    find: (n) => {
      const i = SH.exec(n);
      return !i || !k1(n, i, t.isAllowedHref) ? null : x1(i);
    },
    type: t.type,
    getAttributes: S1
  });
  return new Vr({
    find: e.find,
    handler: (n) => {
      const i = e.handler(n);
      return i !== null && n.state.tr.steps.length && n.state.tr.setMeta("preventAutolink", !0), i;
    }
  });
}
function EH(t) {
  const e = Ut({
    find: (n) => {
      var i, r;
      const o = [];
      for (const l of n.matchAll(CH)) k1(n, l, t.isAllowedHref) && o.push(x1(l));
      const s = ((i = (r = t.findPlainUrls) === null || r === void 0 ? void 0 : r.call(t, n)) !== null && i !== void 0 ? i : []).filter((l) => !o.some((a) => AH(a, l)));
      return [...o, ...s];
    },
    type: t.type,
    getAttributes: S1
  });
  return new xm({
    find: e.find,
    handler: (n) => {
      var i;
      const r = e.handler(n);
      return r !== null && n.state.tr.steps.length && (!((i = n.match.data) === null || i === void 0) && i.markdown) && n.state.tr.setMeta("preventAutolink", !0), r;
    }
  });
}
function LH(t) {
  return new ie({
    key: new se("handlePasteLink"),
    props: { handlePaste: (e, n, i) => {
      const { shouldAutoLink: r } = t, { state: o } = e, { selection: s } = o, { empty: l } = s;
      if (l) return !1;
      let a = "";
      i.content.forEach((d) => {
        a += d.textContent;
      });
      const c = v1(a, { defaultProtocol: t.defaultProtocol }).find((d) => d.isLink && d.value === a);
      return !a || !c || r !== void 0 && !r(c.value) ? !1 : t.editor.commands.setMark(t.type, { href: c.href });
    } }
  });
}
function Et(t, e) {
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
  return e && e.forEach((i) => {
    const r = typeof i == "string" ? i : i.scheme;
    r && n.push(r);
  }), !t || t.replace(bH, "").match(new RegExp(`^(?:(?:${n.map((i) => i.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")}):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))`, "i"));
}
const OH = lt.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        Uf(t);
        return;
      }
      Uf(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    hH();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      enableClickSelection: !1,
      linkOnPaste: !0,
      markdownLinks: !1,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (t, e) => !!Et(t, e.protocols),
      validate: (t) => !!t,
      shouldAutoLink: (t) => {
        const e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t), n = /^[a-z][a-z0-9+.-]*:/i.test(t);
        if (e || n && !t.includes("@")) return !0;
        const i = (t.includes("@") ? t.split("@").pop() : t).split(/[/?#:]/)[0];
        return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(i) || !/\./.test(i));
      }
    };
  },
  addAttributes() {
    var t, e, n;
    return {
      href: {
        default: null,
        parseHTML(i) {
          return i.getAttribute("href");
        }
      },
      target: { default: (t = this.options.HTMLAttributes.target) !== null && t !== void 0 ? t : null },
      rel: { default: (e = this.options.HTMLAttributes.rel) !== null && e !== void 0 ? e : null },
      class: { default: (n = this.options.HTMLAttributes.class) !== null && n !== void 0 ? n : null },
      title: { default: null }
    };
  },
  parseHTML() {
    return [{
      tag: "a[href]",
      getAttrs: (t) => {
        const e = t.getAttribute("href");
        return !e || !this.options.isAllowedUri(e, {
          defaultValidate: (n) => !!Et(n, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : null;
      }
    }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!Et(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? [
      "a",
      re(this.options.HTMLAttributes, t),
      0
    ] : [
      "a",
      re(this.options.HTMLAttributes, {
        ...t,
        href: ""
      }),
      0
    ];
  },
  markdownTokenName: "link",
  parseMarkdown: (t, e) => e.applyMark("link", e.parseInline(t.tokens || []), {
    href: t.href,
    title: t.title || null
  }),
  renderMarkdown: (t, e) => {
    var n, i, r, o;
    const s = (n = (i = t.attrs) === null || i === void 0 ? void 0 : i.href) !== null && n !== void 0 ? n : "", l = (r = (o = t.attrs) === null || o === void 0 ? void 0 : o.title) !== null && r !== void 0 ? r : "", a = e.renderChildren(t);
    return l ? `[${a}](${s} "${l}")` : `[${a}](${s})`;
  },
  addCommands() {
    return {
      setLink: (t) => ({ chain: e }) => {
        const { href: n } = t;
        return this.options.isAllowedUri(n, {
          defaultValidate: (i) => !!Et(i, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (t) => ({ chain: e }) => {
        const { href: n } = t || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (i) => !!Et(i, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addInputRules() {
    return this.options.markdownLinks ? [TH({
      type: this.type,
      isAllowedHref: (t) => this.options.isAllowedUri(t, {
        defaultValidate: (e) => !!Et(e, this.options.protocols),
        protocols: this.options.protocols,
        defaultProtocol: this.options.defaultProtocol
      })
    })] : [];
  },
  addPasteRules() {
    const t = (e) => {
      const n = [];
      if (e) {
        const { protocols: i, defaultProtocol: r } = this.options;
        v1(e, { defaultProtocol: r }).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
          defaultValidate: (s) => !!Et(s, i),
          protocols: i,
          defaultProtocol: r
        })).forEach((o) => {
          this.options.shouldAutoLink(o.value) && n.push({
            text: o.value,
            data: { href: o.href },
            index: o.start
          });
        });
      }
      return n;
    };
    return this.options.markdownLinks ? [EH({
      type: this.type,
      isAllowedHref: (e) => this.options.isAllowedUri(e, {
        defaultValidate: (n) => !!Et(n, this.options.protocols),
        protocols: this.options.protocols,
        defaultProtocol: this.options.defaultProtocol
      }),
      findPlainUrls: t
    })] : [Ut({
      find: t,
      type: this.type,
      getAttributes: (e) => {
        var n;
        return { href: (n = e.data) === null || n === void 0 ? void 0 : n.href };
      }
    })];
  },
  addProseMirrorPlugins() {
    const t = [], { protocols: e, defaultProtocol: n } = this.options;
    return this.options.autolink && t.push(kH({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (i) => this.options.isAllowedUri(i, {
        defaultValidate: (r) => !!Et(r, e),
        protocols: e,
        defaultProtocol: n
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), t.push(xH({
      type: this.type,
      editor: this.editor,
      openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
      enableClickSelection: this.options.enableClickSelection
    })), this.options.linkOnPaste && t.push(LH({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type,
      shouldAutoLink: this.options.shouldAutoLink
    })), t;
  }
});
function C1(t) {
  return typeof t == "object" && t !== null && typeof t.pattern == "string" && typeof t.message == "string";
}
function jf({ pattern: t, flags: e = "", negate: n = !1, message: i }) {
  const r = new RegExp(t, e.replace(/[gy]/g, ""));
  return (o) => r.test(o ?? "") !== n || i;
}
function HH(t) {
  try {
    const e = JSON.parse(t);
    if (Array.isArray(e) && e.every(C1)) return e;
  } catch {
  }
}
const RH = /(\w+)\s*=>\s*(!?)\s*\/((?:\\.|\[(?:\\.|[^\]\\])*\]|[^/\\[\n])+)\/([a-z]*)\.test\(\s*\1\s*\)\s*\|\|\s*(["'`])((?:\\.|(?!\5)[^\\])*)\5/g;
function VH(t) {
  const e = [], n = t.replace(RH, (i, r, o, s, l, a, c) => (e.push({ pattern: s, flags: l, negate: o === "!", message: c.replace(/\\(.)/g, "$1") }), ""));
  if (/^\s*\[[\s,]*\]\s*$/.test(n))
    return e;
}
function NH(t) {
  if (!t) return [];
  if (Array.isArray(t))
    return t.map((n) => C1(n) ? jf(n) : n);
  const e = HH(t) ?? VH(t);
  return e ? e.map(jf) : (yc.warn(`Unsupported hrefRules ignored: ${t}. Pass rule functions or a JSON array of { pattern, flags, negate, message }.`), []);
}
function M1(t) {
  return j(() => NH(t.hrefRules));
}
const IH = { class: "headline" }, DH = /* @__PURE__ */ ne({
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
    const e = t, { t: n } = Gt(), i = () => ({
      href: "",
      target: "_blank",
      rel: ""
    }), r = Y(i()), o = Y(), s = M1(e), l = Y(!1), a = j(() => {
      const { href: u, target: f, rel: h } = r.value;
      return u ? e.value === u && e.target === f && e.rel === h : !0;
    });
    async function c() {
      const { valid: u } = await o.value.validate();
      if (!u) return;
      const { href: f, target: h, rel: p } = r.value;
      f && e.editor.chain().focus().extendMarkRange("link").setLink({ href: f, target: h, rel: p }).run(), d();
    }
    function d() {
      l.value = !1, r.value = i(), setTimeout(() => e.destroy?.(), 300);
    }
    return Bt(l, (u) => {
      u && (console.log("props", e), r.value = {
        href: e.value,
        target: e.target,
        rel: e.rel
      });
    }), (u, f) => {
      const h = Tr, p = bn, m = Ti, g = Ai, y = oh("vx-field"), b = gs, v = Mr, w = Ra, x = ms, k = Mi, S = Ha;
      return N(), F(S, {
        modelValue: l.value,
        "onUpdate:modelValue": f[4] || (f[4] = (M) => l.value = M),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": d
      }, {
        default: E(() => [
          H(k, null, {
            default: E(() => [
              H(g, {
                class: "px-6",
                density: "compact"
              }, {
                default: E(() => [
                  Be("span", IH, Le(A(n)("editor.link.dialog.title")), 1),
                  H(h),
                  H(m, {
                    class: "mx-0",
                    icon: "",
                    onClick: d
                  }, {
                    default: E(() => [
                      H(p, {
                        icon: A(fe)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(x, {
                ref_key: "form",
                ref: o,
                onSubmit: f[3] || (f[3] = sh((M) => c(), ["prevent"]))
              }, {
                default: E(() => [
                  H(v, null, {
                    default: E(() => [
                      H(y, {
                        modelValue: r.value.href,
                        "onUpdate:modelValue": f[0] || (f[0] = (M) => r.value.href = M),
                        rules: A(s),
                        label: A(n)("editor.link.dialog.link"),
                        autofocus: ""
                      }, null, 8, ["modelValue", "rules", "label"]),
                      H(y, {
                        modelValue: r.value.rel,
                        "onUpdate:modelValue": f[1] || (f[1] = (M) => r.value.rel = M),
                        label: A(n)("editor.link.dialog.rel"),
                        "hide-details": ""
                      }, null, 8, ["modelValue", "label"]),
                      H(b, {
                        modelValue: r.value.target,
                        "onUpdate:modelValue": f[2] || (f[2] = (M) => r.value.target = M),
                        label: A(n)("editor.link.dialog.openInNewTab"),
                        color: "primary",
                        "false-value": "_self",
                        "true-value": "_blank",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "label"])
                    ]),
                    _: 1
                  }),
                  H(w, null, {
                    default: E(() => [
                      H(m, {
                        disabled: a.value,
                        type: "submit",
                        class: "ml-auto"
                      }, {
                        default: E(() => [
                          Ft(Le(A(n)("editor.link.dialog.button.apply")), 1)
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
}), PH = /* @__PURE__ */ ne({
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
    const e = t, n = Y({
      href: void 0,
      target: void 0,
      rel: void 0
    });
    function i() {
      const { href: r, target: o, rel: s } = e.editor.getAttributes("link");
      n.value = {
        href: r,
        target: o,
        rel: s
      };
    }
    return (r, o) => (N(), F(te, {
      icon: t.icon,
      tooltip: t.tooltip,
      disabled: t.disabled,
      color: t.color,
      "is-active": t.isActive,
      action: i
    }, {
      default: E(() => [
        H(Oc, null, {
          default: E(() => [
            gt(r.$slots, "dialog", {
              props: { editor: t.editor, value: n.value.href, hrefRules: e.hrefRules, ...n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), QR = /* @__PURE__ */ OH.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "link",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: !1,
      hrefRules: [
        { pattern: "^http://", negate: !0, message: "URL should not start with http://" }
      ],
      dialogComponent: () => DH,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: i, hrefRules: r } = e.options;
        return {
          component: PH,
          componentProps: {
            hrefRules: r,
            isActive: () => t.isActive("link") || !1,
            disabled: !t.can().setLink({ href: "" }),
            icon: "link",
            tooltip: n("editor.link.tooltip")
          },
          componentSlots: {
            dialog: i()
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.parent?.() || [],
      new ie({
        props: {
          handleClick(t, e) {
            const { schema: n, doc: i, tr: r } = t.state, o = As(i.resolve(e), n.marks.link);
            if (!o) return !1;
            const s = i.resolve(o.from), l = i.resolve(o.to), a = r.setSelection(
              new I(s, l)
            );
            return t.dispatch(a), !0;
          }
        }
      })
    ];
  }
}), eV = /* @__PURE__ */ G.create({
  name: "markdownTheme",
  addOptions() {
    return {
      ...this.parent?.(),
      markdownThemes: pu,
      button: ({ editor: t, extension: e, t: n }) => {
        const { state: i } = Vs(), o = [...pu, ...e.options.markdownThemes].map((s) => ({
          title: n(s.title),
          isActive: () => i.defaultMarkdownTheme === s.value,
          action: () => {
            i.defaultMarkdownTheme = s.value;
          },
          divider: s.divider ?? !1,
          default: s.default ?? !1
        }));
        return {
          component: Nr,
          componentProps: {
            icon: "markdownTheme",
            tooltip: n("editor.markdownTheme.tooltip"),
            items: o
          }
        };
      }
    };
  }
}), tV = /* @__PURE__ */ Qg.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "orderedList",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleOrderedList().run(),
          isActive: () => t.isActive("orderedList") || !1,
          disabled: !t.can().toggleOrderedList(),
          icon: "orderedList",
          tooltip: e("editor.orderedlist.tooltip")
        }
      })
    };
  }
}), _H = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, zH = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, $H = lt.create({
  name: "strike",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [
      { tag: "s" },
      { tag: "del" },
      { tag: "strike" },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "s",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  markdownTokenName: "del",
  parseMarkdown: (t, e) => e.applyMark("strike", e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => `~~${e.renderChildren(t)}~~`,
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
  },
  addInputRules() {
    return [yn({
      find: _H,
      type: this.type
    })];
  },
  addPasteRules() {
    return [Ut({
      find: zH,
      type: this.type
    })];
  }
}), nV = /* @__PURE__ */ $H.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "strike",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleStrike().run(),
          isActive: () => t.isActive("strike") || !1,
          disabled: !t.can().toggleStrike(),
          icon: "strike",
          tooltip: e("editor.strike.tooltip")
        }
      })
    };
  }
}), BH = lt.create({
  name: "subscript",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [{ tag: "sub" }, {
      style: "vertical-align",
      getAttrs(t) {
        return t !== "sub" ? !1 : null;
      }
    }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "sub",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSubscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSubscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return { "Mod-,": () => this.editor.commands.toggleSubscript() };
  }
}), FH = lt.create({
  name: "superscript",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [{ tag: "sup" }, {
      style: "vertical-align",
      getAttrs(t) {
        return t !== "super" ? !1 : null;
      }
    }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "sup",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSuperscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return { "Mod-.": () => this.editor.commands.toggleSuperscript() };
  }
}), iV = /* @__PURE__ */ G.create({
  name: "subAndSuperScript",
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, extension: e, t: n }) => {
        const i = e.options.subscript, r = e.options.superscript, o = {
          component: te,
          componentProps: {
            action: () => t.chain().focus().toggleSubscript().run(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "subscript",
            tooltip: n("editor.subscript.tooltip")
          }
        }, s = {
          component: te,
          componentProps: {
            action: () => t.chain().focus().toggleSuperscript().run(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "superscript",
            tooltip: n("editor.superscript.tooltip")
          }
        }, l = [];
        return i !== !1 && l.push(o), r !== !1 && l.push(s), l;
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(BH.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(FH.configure(this.options.superscript)), t;
  }
});
function Cr(t) {
  return t === "left" || t === "right" || t === "center" ? t : null;
}
function WH(t) {
  const e = (t.style.textAlign || "").trim().toLowerCase(), n = (t.getAttribute("align") || "").trim().toLowerCase();
  return Cr(e || n);
}
function UH(t) {
  return Cr(t?.align);
}
function A1() {
  return {
    default: null,
    parseHTML: (t) => WH(t),
    renderHTML: (t) => {
      const e = Cr(t.align);
      return xn(e) ? { style: `text-align: ${e}` } : {};
    }
  };
}
function jH(t) {
  var e;
  const n = t.parentElement, i = t.closest("table");
  if (!n || !i) return null;
  const r = Array.from(n.children).indexOf(t), o = (e = i.querySelectorAll("colgroup > col")[r]) === null || e === void 0 ? void 0 : e.getAttribute("width");
  return o ? [parseInt(o, 10)] : null;
}
function T1(t) {
  const e = t.getAttribute("colwidth");
  return e ? e.split(",").map((n) => parseInt(n, 10)) : jH(t);
}
const KH = /[ \t\r\n\f]+/g;
function E1(t) {
  var e;
  return t.children.length > 0 ? !1 : ((e = t.textContent) !== null && e !== void 0 ? e : "").replace(KH, "") === "";
}
function L1(t) {
  const e = t.createAndFill();
  if (!e) throw new Error(`[tiptap error]: "${t.name}" has no default content to backfill.`);
  return e.content;
}
function hs(t, e, n) {
  if (!(n in e)) return;
  const i = e[n];
  (i === 1 || i === "1" || i === null || i === void 0) && delete t[n];
}
const O1 = be.create({
  name: "tableCell",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: { default: 1 },
      rowspan: { default: 1 },
      colwidth: {
        default: null,
        parseHTML: T1
      },
      align: A1()
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{
      tag: "td",
      getAttrs: (t) => E1(t) ? {} : !1,
      getContent: (t, e) => L1(e.nodes[this.name])
    }, { tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    const e = re(this.options.HTMLAttributes, t);
    return hs(e, t, "colspan"), hs(e, t, "rowspan"), [
      "td",
      e,
      0
    ];
  }
}), H1 = be.create({
  name: "tableHeader",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: { default: 1 },
      rowspan: { default: 1 },
      colwidth: {
        default: null,
        parseHTML: T1
      },
      align: A1()
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{
      tag: "th",
      getAttrs: (t) => E1(t) ? {} : !1,
      getContent: (t, e) => L1(e.nodes[this.name])
    }, { tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    const e = re(this.options.HTMLAttributes, t);
    return hs(e, t, "colspan"), hs(e, t, "rowspan"), [
      "th",
      e,
      0
    ];
  }
}), R1 = be.create({
  name: "tableRow",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "tr",
      re(this.options.HTMLAttributes, t),
      0
    ];
  }
});
function Ea(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Kf(t, e, n, i, r, o) {
  let s = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c !== null) for (let f = 0, h = 0; f < c.childCount; f += 1) {
    const { colspan: p, colwidth: m } = c.child(f).attrs;
    for (let g = 0; g < p; g += 1, h += 1) {
      const y = r === h ? o : m && m[g], b = y ? `${y}px` : "";
      if (s += y || i, y || (l = !1), a) {
        if (a.style.width !== b) {
          const [v, w] = Ea(i, y);
          a.style.setProperty(v, w);
        }
        a = a.nextSibling;
      } else {
        const v = document.createElement("col"), [w, x] = Ea(i, y);
        v.style.setProperty(w, x), e.appendChild(v);
      }
    }
  }
  for (; a; ) {
    var d;
    const f = a.nextSibling;
    (d = a.parentNode) === null || d === void 0 || d.removeChild(a), a = f;
  }
  const u = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  l && !u ? (n.style.width = `${s}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${s}px`);
}
var qH = class {
  constructor(t, e, n, i = {}) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table"));
    for (const [r, o] of Object.entries(i)) o != null && (r === "style" ? this.table.style.cssText = String(o) : this.table.setAttribute(r, String(o)));
    t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Kf(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.sameMarkup(this.node) ? (this.node = t, Kf(t, this.colgroup, this.table, this.cellMinWidth), !0) : !1;
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), i = this.contentDOM.contains(e);
    return !!(n && !i && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function GH(t, e, n, i) {
  let r = 0, o = !0;
  const s = [], l = t.firstChild;
  if (!l) return {};
  for (let d = 0, u = 0; d < l.childCount; d += 1) {
    const { colspan: f, colwidth: h } = l.child(d).attrs;
    for (let p = 0; p < f; p += 1, u += 1) {
      const m = n === u ? i : h && h[p];
      r += m || e, m || (o = !1);
      const [g, y] = Ea(e, m);
      s.push(["col", { style: `${g}: ${y}` }]);
    }
  }
  const a = o ? `${r}px` : "", c = o ? "" : `${r}px`;
  return {
    colgroup: [
      "colgroup",
      {},
      ...s
    ],
    tableWidth: a,
    tableMinWidth: c
  };
}
function qf(t, e) {
  return t.createAndFill();
}
function JH(t) {
  if (t.cached.tableNodeTypes) return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const i = t.nodes[n];
    i.spec.tableRole && (e[i.spec.tableRole] = i);
  }), t.cached.tableNodeTypes = e, e;
}
function XH(t, e, n, i, r) {
  const o = JH(t), s = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const d = qf(o.cell);
    if (d && l.push(d), i) {
      const u = qf(o.header_cell);
      u && s.push(u);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1) a.push(o.row.createChecked(null, i && c === 0 ? s : l));
  return o.table.createChecked(null, a);
}
function V1(t) {
  return t instanceof le;
}
const so = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!V1(e)) return !1;
  let n = 0;
  const i = mr(e.ranges[0].$from, (r) => r.type.name === "table");
  return i?.node.descendants((r) => {
    if (r.type.name === "table") return !1;
    ["tableCell", "tableHeader"].includes(r.type.name) && (n += 1);
  }), n !== e.ranges.length ? !1 : (t.commands.deleteTable(), !0);
};
function Gf(t, e) {
  const n = t.mapping.map(e), i = mr(t.selection.$from, (s) => s.type.name === "table");
  if (i?.pos === n) return;
  const r = t.doc.nodeAt(n);
  if (!r) return;
  const o = n + r.nodeSize - 1;
  t.setSelection(I.near(t.doc.resolve(o), -1));
}
function ZH(t) {
  let e = "", n = 0;
  for (; n < t.length; ) {
    if (t[n] === "\\" && n + 1 < t.length) {
      e += t[n] + t[n + 1], n += 2;
      continue;
    }
    if (t[n] !== "`") {
      e += t[n++];
      continue;
    }
    let i = 0;
    for (; n + i < t.length && t[n + i] === "`"; ) i += 1;
    let r = n + i, o = !1;
    for (; r < t.length; ) {
      if (t[r] !== "`") {
        r += 1;
        continue;
      }
      let s = 0;
      for (; r + s < t.length && t[r + s] === "`"; ) s += 1;
      if (s === i) {
        const l = t.slice(n + i, r);
        e += t.slice(n, n + i) + l.replace(/\\\||\|/g, (a) => a === "|" ? "\\|" : a) + t.slice(r, r + i), n = r + i, o = !0;
        break;
      }
      r += s;
    }
    o || (e += t.slice(n, n + i), n += i);
  }
  return e;
}
function YH(t) {
  return t.split(`
`).map((e) => !e.includes("|") || !e.includes("`") ? e : ZH(e)).join(`
`);
}
function QH(t) {
  return (t || "").replaceAll("", " ").replace(/\s+/g, " ").trim();
}
function Jf(t, e) {
  return e ? t.split(e).join(`
`) : t;
}
function eR(t) {
  return t.replace(/\\.|\|/g, (e) => e === "|" ? "\\|" : e);
}
function tR(t, e, n = {}) {
  if (!t || !t.content || t.content.length === 0) return "";
  const i = [];
  t.content.forEach((f) => {
    const h = [];
    f.content && f.content.forEach((p) => {
      let m = "";
      p.content && Array.isArray(p.content) && p.content.length > 1 ? m = p.content.map((v) => Jf(e.renderChildren(v), n.cellLineSeparator)).join(`
`) : m = Jf(p.content ? e.renderChildren(p.content) : "", n.cellLineSeparator);
      const g = eR(QH(m.replace(/[ \t]*\r?\n[ \t]*/g, "<br>"))), y = p.type === "tableHeader", b = UH(p.attrs);
      h.push({
        text: g,
        isHeader: y,
        align: b
      });
    }), i.push(h);
  });
  const r = i.reduce((f, h) => Math.max(f, h.length), 0);
  if (r === 0) return "";
  const o = Array.from({ length: r }).fill(0);
  i.forEach((f) => {
    for (let p = 0; p < r; p += 1) {
      var h;
      const m = (((h = f[p]) === null || h === void 0 ? void 0 : h.text) || "").length;
      m > o[p] && (o[p] = m), o[p] < 3 && (o[p] = 3);
    }
  });
  const s = (f, h) => f + " ".repeat(Math.max(0, h - f.length)), l = i[0], a = l.some((f) => f.isHeader), c = Array.from({ length: r }).fill(null);
  i.forEach((f) => {
    for (let p = 0; p < r; p += 1) {
      var h;
      !c[p] && (!((h = f[p]) === null || h === void 0) && h.align) && (c[p] = f[p].align);
    }
  });
  let d = `
`;
  const u = Array.from({ length: r }).map((f, h) => a && l[h] && l[h].text || "");
  return d += `| ${u.map((f, h) => s(f, o[h])).join(" | ")} |
`, d += `| ${o.map((f, h) => {
    const p = Math.max(3, f), m = c[h];
    return m === "left" ? `:${"-".repeat(p)}` : m === "right" ? `${"-".repeat(p)}:` : m === "center" ? `:${"-".repeat(p)}:` : "-".repeat(p);
  }).join(" | ")} |
`, (a ? i.slice(1) : i).forEach((f) => {
    d += `| ${Array.from({ length: r }).fill(0).map((h, p) => s(f[p] && f[p].text || "", o[p])).join(" | ")} |
`;
  }), d;
}
const nR = new se("preserveCellSelectionOnContextMenu");
function iR(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (n) return n.pos;
  if (!(e.target instanceof Node)) return null;
  try {
    return t.posAtDOM(e.target, 0);
  } catch {
    return null;
  }
}
function rR(t, e) {
  let n = !1;
  return t.forEachCell((i, r) => {
    e >= r && e < r + i.nodeSize && (n = !0);
  }), n;
}
function oR() {
  return new ie({
    key: nR,
    props: { handleDOMEvents: { mousedown(t, e) {
      if (e.button !== 2) return !1;
      const { selection: n } = t.state;
      if (!V1(n) || n.ranges.length < 2) return !1;
      const i = iR(t, e);
      return i == null || !rR(n, i) ? !1 : (e.preventDefault(), !0);
    } } }
  });
}
const N1 = be.create({
  name: "table",
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      View: qH,
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
    const { colgroup: n, tableWidth: i, tableMinWidth: r } = GH(t, this.options.cellMinWidth), o = e.style;
    function s() {
      return o || (i ? `width: ${i}` : `min-width: ${r}`);
    }
    const l = [
      "table",
      re(this.options.HTMLAttributes, e, { style: s() }),
      n,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? [
      "div",
      { class: "tableWrapper" },
      l
    ] : l;
  },
  parseMarkdown: (t, e) => {
    const n = [], i = Array.isArray(t.align) ? t.align : [];
    if (t.header) {
      const r = [];
      t.header.forEach((o, s) => {
        var l;
        const a = Cr((l = i[s]) !== null && l !== void 0 ? l : o.align), c = a ? { align: a } : {};
        r.push(e.createNode("tableHeader", c, [{
          type: "paragraph",
          content: e.parseInline(o.tokens)
        }]));
      }), n.push(e.createNode("tableRow", {}, r));
    }
    return t.rows && t.rows.forEach((r) => {
      const o = [];
      r.forEach((s, l) => {
        var a;
        const c = Cr((a = i[l]) !== null && a !== void 0 ? a : s.align), d = c ? { align: c } : {};
        o.push(e.createNode("tableCell", d, [{
          type: "paragraph",
          content: e.parseInline(s.tokens)
        }]));
      }), n.push(e.createNode("tableRow", {}, o));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => tR(t, e),
  markdownTokenizer: {
    name: "table",
    level: "block",
    start: (t) => {
      const e = t.split(`
`);
      if (e.length < 2) return -1;
      const n = e[1];
      return !/^[ \t|:]*-[ \t|:-]*$/.test(n) || !n.includes("|") ? -1 : e[0].includes("|") ? 0 : -1;
    },
    tokenize(t, e, n) {
      const i = t.indexOf(`

`), r = i >= 0 ? t.slice(0, i) : t, o = r.split(`
`);
      if (o.length < 2) return;
      const s = o[1];
      if (!/^[ \t|:]*-[ \t|:-]*$/.test(s) || !s.includes("|")) return;
      const l = YH(r);
      if (l === r) return;
      const a = n.blockTokens(l)[0];
      if (a?.type !== "table" || !a.raw) return;
      const c = a.raw.split(`
`).length, d = t.split(`
`).slice(0, c).join(`
`);
      return {
        ...a,
        raw: d
      };
    }
  },
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: i, dispatch: r, editor: o }) => {
        const s = XH(o.schema, t, e, n);
        if (r) {
          const l = i.selection.from + 1;
          i.replaceSelectionWith(s).scrollIntoView().setSelection(I.near(i.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => wT(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => kT(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => {
        const n = mr(t.selection.$from, (i) => i.type.name === "table");
        return ST(t, e && ((i) => {
          n && Gf(i, n.pos), e(i);
        }));
      },
      addRowBefore: () => ({ state: t, dispatch: e }) => MT(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => AT(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => {
        const n = mr(t.selection.$from, (i) => i.type.name === "table");
        return ET(t, e && ((i) => {
          n && Gf(i, n.pos), e(i);
        }));
      },
      deleteTable: () => ({ state: t, dispatch: e }) => IT(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => nf(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => rf(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => kr("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => kr("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => VT(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => nf(t, e) ? !0 : rf(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: i }) => HT(t, e)(n, i),
      goToNextCell: () => ({ state: t, dispatch: e }) => sf(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => sf(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Tg(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const i = le.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(i);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: so,
      "Mod-Backspace": so,
      Delete: so,
      "Mod-Delete": so
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [jT({
        handleWidth: this.options.handleWidth,
        cellMinWidth: this.options.cellMinWidth,
        defaultCellMinWidth: this.options.cellMinWidth,
        View: null,
        lastColumnResizable: this.options.lastColumnResizable
      })] : [],
      tE({ allowTableNodeSelection: this.options.allowTableNodeSelection }),
      oR()
    ];
  },
  addNodeView() {
    const t = this.options.View;
    return t ? ({ node: e, view: n, HTMLAttributes: i }) => {
      const r = re(this.options.HTMLAttributes, i);
      return new t(e, this.options.cellMinWidth, n, r);
    } : null;
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return { tableRole: ee(_(t, "tableRole", e)) };
  }
});
G.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(N1.configure(this.options.table)), this.options.tableCell !== !1 && t.push(O1.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(H1.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(R1.configure(this.options.tableRow)), t;
  }
});
const sR = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, lR = /CrOS/, aR = /android|ipad|playbook|silk/i;
function Xf(t = {}) {
  let e = t.ua || typeof navigator < "u" && navigator.userAgent;
  return e && typeof e == "object" && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string" ? !1 : !!(sR.test(e) && !lR.test(e) || t.tablet && aR.test(e) || t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.includes("Macintosh") && e.includes("Safari"));
}
const cR = ["onMouseover", "onMousedown"], dR = /* @__PURE__ */ ne({
  __name: "CreateTablePopover",
  emits: ["create-table"],
  setup(t, { emit: e }) {
    const n = e, { t: i } = Gt(), r = Y(!1), o = Y(!0), s = rr({
      rows: Xf() ? jr : Ur,
      cols: Xf() ? jr : Ur
    }), l = rr({
      rows: Kr,
      cols: Kr
    });
    function a(u, f) {
      u === s.rows && (s.rows = Math.min(u + 1, jr)), f === s.cols && (s.cols = Math.min(f + 1, jr)), l.rows = u, l.cols = f;
    }
    function c(u, f) {
      n("create-table", { rows: u, cols: f, withHeaderRow: A(o) }), d();
    }
    function d() {
      r.value = !1, o.value = !0, s.rows = Ur, s.cols = Ur, l.rows = Kr, l.cols = Kr;
    }
    return (u, f) => {
      const h = gs, p = Mr, m = j1, g = Mi, y = ps;
      return N(), F(y, {
        modelValue: r.value,
        "onUpdate:modelValue": f[1] || (f[1] = (b) => r.value = b),
        location: "end bottom",
        "open-on-click": "",
        "open-on-hover": "",
        "close-on-content-click": !1,
        activator: "parent"
      }, {
        default: E(() => [
          H(g, {
            density: "compact",
            class: "table-grid-size-editor"
          }, {
            default: E(() => [
              H(p, { class: "pa-2 pb-0" }, {
                default: E(() => [
                  H(h, {
                    modelValue: o.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (b) => o.value = b),
                    density: "compact",
                    "hide-details": "",
                    label: A(i)("editor.table.menu.insert_table.with_header_row")
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(p, { class: "d-flex flex-column flex-wrap justify-space-between pa-2" }, {
                default: E(() => [
                  (N(!0), ue(Ne, null, et(s.rows, (b) => (N(), ue("div", {
                    key: "r" + b,
                    class: "d-flex"
                  }, [
                    (N(!0), ue(Ne, null, et(s.cols, (v) => (N(), ue("div", {
                      key: "c" + v,
                      class: mt([{
                        "table-grid-size-editor__cell--selected": v <= l.cols && b <= l.rows
                      }, "pa-1"]),
                      onMouseover: (w) => a(b, v),
                      onMousedown: (w) => c(b, v)
                    }, [...f[2] || (f[2] = [
                      Be("div", { class: "table-grid-size-editor__cell__inner" }, null, -1)
                    ])], 42, cR))), 128))
                  ]))), 128))
                ]),
                _: 1
              }),
              H(m, { class: "pt-0 pb-2" }, {
                default: E(() => [
                  Ft(Le(l.rows) + " x " + Le(l.cols), 1)
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
}), uR = /* @__PURE__ */ ne({
  __name: "TableMenu",
  props: {
    editor: {},
    activator: { default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Gt(), i = Y(!1), r = j(() => {
      const l = !e.editor.isActive("table");
      return [
        {
          type: "item",
          key: "insert-table",
          title: A(n)("editor.table.menu.insert_table"),
          icon: fe("tablePlus")
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "add-column-before",
          title: A(n)("editor.table.menu.add_column_before"),
          icon: fe("tableColumnPlusBefore"),
          disabled: l
        },
        {
          type: "item",
          key: "add-column-after",
          title: A(n)("editor.table.menu.add_column_after"),
          icon: fe("tableColumnPlusAfter"),
          disabled: l
        },
        {
          type: "item",
          key: "delete-column",
          title: A(n)("editor.table.menu.delete_column"),
          icon: fe("tableColumnRemove"),
          disabled: l
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "add-row-before",
          title: A(n)("editor.table.menu.add_row_before"),
          icon: fe("tableRowPlusBefore"),
          disabled: l
        },
        {
          type: "item",
          key: "add-row-after",
          title: A(n)("editor.table.menu.add_row_after"),
          icon: fe("tableRowPlusAfter"),
          disabled: l
        },
        {
          type: "item",
          key: "delete-row",
          title: A(n)("editor.table.menu.delete_row"),
          icon: fe("tableRowRemove"),
          disabled: l
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "merge-or-split-cells",
          title: A(n)("editor.table.menu.merge_or_split_cells"),
          icon: fe("tableMergeCells"),
          disabled: l
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "delete-table",
          title: A(n)("editor.table.menu.delete_table"),
          icon: fe("tableRemove"),
          disabled: l
        }
      ];
    });
    function o(l, a) {
      if (!l) return;
      const { editor: c } = e;
      ({
        "insert-table": () => c.chain().focus().insertTable({ ...a }).run(),
        "add-column-before": () => c.chain().focus().addColumnBefore().run(),
        "add-column-after": () => c.chain().focus().addColumnAfter().run(),
        "delete-column": () => c.chain().focus().deleteColumn().run(),
        "add-row-before": () => c.chain().focus().addRowBefore().run(),
        "add-row-after": () => c.chain().focus().addRowAfter().run(),
        "delete-row": () => c.chain().focus().deleteRow().run(),
        "merge-or-split-cells": () => c.chain().focus().mergeOrSplit().run(),
        "delete-table": () => c.chain().focus().deleteTable().run()
      })[l]?.();
    }
    function s(l) {
      o("insert-table", l), i.value = !1;
    }
    return (l, a) => {
      const c = bn, d = eh, u = Qf, f = Ar, h = La, p = ps;
      return N(), F(p, {
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (m) => i.value = m),
        activator: "parent"
      }, {
        default: E(() => [
          H(h, { density: "compact" }, {
            default: E(() => [
              (N(!0), ue(Ne, null, et(r.value, (m, g) => (N(), ue(Ne, null, [
                m.key === "insert-table" ? (N(), F(u, {
                  key: g,
                  disabled: m.disabled
                }, {
                  prepend: E(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: E(() => [
                    H(d, null, {
                      default: E(() => [
                        Ft(Le(m.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    m.key === "insert-table" ? (N(), F(dR, {
                      key: g,
                      onCreateTable: s
                    })) : We("", !0)
                  ]),
                  _: 2
                }, 1032, ["disabled"])) : m.type === "item" ? (N(), F(u, {
                  key: "item-" + g,
                  disabled: m.disabled,
                  onClick: (y) => o(m.key)
                }, {
                  prepend: E(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: E(() => [
                    H(d, null, {
                      default: E(() => [
                        Ft(Le(m.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : (N(), F(f, {
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
}), fR = /* @__PURE__ */ ne({
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
    return (e, n) => (N(), F(te, {
      icon: t.icon,
      tooltip: t.tooltip,
      disabled: t.disabled,
      color: t.color,
      action: t.action,
      "is-active": t.isActive
    }, {
      default: E(() => [
        H(uR, {
          editor: t.editor,
          activator: "parent"
        }, null, 8, ["editor"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "action", "is-active"]));
  }
}), rV = /* @__PURE__ */ N1.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "table",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "table-wrapper"
      },
      button: ({ editor: t, t: e }) => ({
        component: fR,
        componentProps: {
          isActive: () => t.isActive("table") || !1,
          disabled: !t.can().insertTable(),
          icon: "table",
          tooltip: e("editor.table.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [
      R1.configure(this.options.tableRow),
      H1.configure(this.options.tableHeader),
      O1.configure(this.options.tableCell)
    ];
  }
}), oV = /* @__PURE__ */ t1.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "taskList",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleTaskList().run(),
          isActive: () => t.isActive("taskList") || !1,
          disabled: !t.can().toggleTaskList(),
          icon: "taskList",
          tooltip: e("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [e1.configure(this.options.taskItem)];
  }
}), hR = G.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: [
        "left",
        "center",
        "right",
        "justify"
      ],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: { textAlign: {
        default: this.options.defaultAlignment,
        parseHTML: (t) => {
          const e = t.style.textAlign;
          return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
        },
        renderHTML: (t) => !xn(t.textAlign) || !this.options.alignments.includes(t.textAlign) ? {} : { style: `text-align: ${t.textAlign}` }
      } }
    }];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.map((n) => e.updateAttributes(n, { textAlign: t })).some((n) => n) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.map((e) => t.resetAttributes(e, "textAlign")).some((e) => e),
      toggleTextAlign: (t) => ({ editor: e, commands: n }) => this.options.alignments.includes(t) ? e.isActive({ textAlign: t }) ? n.unsetTextAlign() : n.setTextAlign(t) : !1
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
}), sV = /* @__PURE__ */ hR.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["heading", "paragraph", "image"],
      button: ({ editor: t, extension: e, t: n }) => {
        const r = (e.options?.alignments || []).map((s) => ({
          title: n(`editor.textalign.${s}.tooltip`),
          icon: s,
          isActive: () => t.isActive({ textAlign: s }) || !1,
          action: () => t.chain().focus().setTextAlign(s).run(),
          disabled: !t.can().setTextAlign(s)
        })), o = r.filter((s) => s.disabled).length === r.length;
        return {
          component: Nr,
          componentProps: {
            icon: "center",
            tooltip: n("editor.textalign.tooltip"),
            disabled: o,
            items: r
          }
        };
      }
    };
  }
}), pR = lt.create({
  name: "underline",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [{ tag: "u" }, {
      style: "text-decoration",
      consuming: !1,
      getAttrs: (t) => t.includes("underline") ? {} : !1
    }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "u",
      re(this.options.HTMLAttributes, t),
      0
    ];
  },
  parseMarkdown(t, e) {
    return e.applyMark(this.name || "underline", e.parseInline(t.tokens || []));
  },
  renderMarkdown(t, e) {
    return `<u>${e.renderChildren(t)}</u>`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(t) {
      return t.toLowerCase().indexOf("<u>");
    },
    tokenize(t, e, n) {
      if (!/^<u>/i.test(t)) return;
      const i = /\\[\s\S]|`+|<\/u>/gi;
      i.lastIndex = 3;
      let r = i.exec(t);
      for (; r; ) {
        if (r[0].startsWith("`")) {
          const o = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/.exec(t.slice(r.index));
          o && (i.lastIndex = r.index + o[0].length);
        } else if (!r[0].startsWith("\\")) {
          const o = t.slice(3, r.index);
          return o ? {
            type: "underline",
            raw: t.slice(0, i.lastIndex),
            text: o,
            tokens: n.inlineTokens(o)
          } : void 0;
        }
        r = i.exec(t);
      }
    }
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
}), lV = /* @__PURE__ */ pR.extend({
  addAttributes() {
    return He(
      this.parent?.(),
      "underline",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: te,
        componentProps: {
          action: () => t.chain().focus().toggleUnderline().run(),
          isActive: () => t.isActive("underline") || !1,
          disabled: !t.can().toggleUnderline(),
          icon: "underline",
          tooltip: e("editor.underline.tooltip")
        }
      })
    };
  }
}), mR = { class: "headline" }, gR = /* @__PURE__ */ ne({
  __name: "VideoDialog",
  props: {
    value: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 },
    hrefRules: { default: "" }
  },
  setup(t) {
    const e = t, { t: n } = Gt(), i = Y(""), r = Y(!1), o = Y(), s = M1(e), l = j(() => e.value === i.value || !A(i));
    async function a() {
      const { valid: d } = await o.value.validate();
      d && (A(i) && e.editor.chain().focus().setVideo({ src: i.value }).run(), c());
    }
    function c() {
      r.value = !1, i.value = "", setTimeout(() => e.destroy?.(), 300);
    }
    return Gn(() => {
      e.value && (i.value = e.value);
    }), (d, u) => {
      const f = Tr, h = bn, p = Ti, m = Ai, g = oh("vx-field"), y = Mr, b = Ra, v = ms, w = Mi, x = Ha;
      return N(), F(x, {
        modelValue: r.value,
        "onUpdate:modelValue": u[1] || (u[1] = (k) => r.value = k),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": c
      }, {
        default: E(() => [
          H(w, null, {
            default: E(() => [
              H(m, {
                class: "px-6",
                density: "compact"
              }, {
                default: E(() => [
                  Be("span", mR, Le(A(n)("editor.video.dialog.title")), 1),
                  H(f),
                  H(p, {
                    class: "mx-0",
                    icon: "",
                    onClick: c
                  }, {
                    default: E(() => [
                      H(h, {
                        icon: A(fe)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(v, {
                ref_key: "form",
                ref: o,
                onSubmit: sh(a, ["prevent"])
              }, {
                default: E(() => [
                  H(y, null, {
                    default: E(() => [
                      H(g, {
                        modelValue: i.value,
                        "onUpdate:modelValue": u[0] || (u[0] = (k) => i.value = k),
                        rules: A(s),
                        label: A(n)("editor.video.dialog.link"),
                        autofocus: ""
                      }, null, 8, ["modelValue", "rules", "label"])
                    ]),
                    _: 1
                  }),
                  H(b, null, {
                    default: E(() => [
                      H(p, {
                        disabled: l.value,
                        type: "submit",
                        class: "ml-auto"
                      }, {
                        default: E(() => [
                          Ft(Le(A(n)("editor.video.dialog.button.apply")), 1)
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
}), I1 = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, r] of e)
    n[i] = r;
  return n;
}, yR = {}, bR = { style: { display: "flex", "align-items": "center", "justify-content": "center", background: "rgb(221 221 221)" } };
function vR(t, e) {
  return N(), ue("div", bR, [...e[0] || (e[0] = [
    Be("svg", {
      t: "1738756119280",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4198",
      width: "200",
      height: "200"
    }, [
      Be("path", {
        d: "M757.333333 554.666667a202.666667 202.666667 0 1 1 0 405.333333 202.666667 202.666667 0 0 1 0-405.333333zM789.333333 106.666667a128 128 0 0 1 128 128v304.064a254.72 254.72 0 0 0-141.013333-47.936L768 490.666667h-21.333333c-56.362667 0-108.458667 18.218667-150.741334 49.066666l-143.957333-87.296-2.474667-1.365333a30.549333 30.549333 0 0 0-39.829333 12.330667 31.936 31.936 0 0 0-4.16 12.714666l-0.170667 3.370667v235.690667l0.106667 2.709333A31.125333 31.125333 0 0 0 436.202667 746.666667c4.437333 0 8.810667-0.981333 12.842666-2.858667l2.922667-1.557333 40.32-24.490667c-0.725333 6.336-1.194667 12.736-1.429333 19.2L490.666667 746.666667v21.333333c0 55.744 17.813333 107.306667 48.064 149.333333H234.666667a128 128 0 0 1-128-128V234.666667a128 128 0 0 1 128-128h554.666666z m-32 725.333333a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m0-213.333333a32 32 0 0 0-31.850666 28.928L725.333333 650.666667v106.666666a32 32 0 0 0 63.850667 3.072L789.333333 757.333333v-106.666666a32 32 0 0 0-32-32zM241.578667 170.666667H234.666667a64 64 0 0 0-63.893334 60.245333L170.666667 234.666667v42.666666h132.501333l-61.589333-106.666666zM789.333333 170.666667h-89.92l61.589334 106.666666H853.333333v-42.666666a64 64 0 0 0-60.245333-63.893334L789.333333 170.666667z m-163.818666 0h-118.058667l61.589333 106.666666h118.058667l-61.589333-106.666666z m-191.957334 0h-118.058666l61.589333 106.666666h118.058667l-61.589334-106.666666z",
        fill: "#cccccc",
        "p-id": "4199"
      })
    ], -1)
  ])]);
}
const wR = /* @__PURE__ */ I1(yR, [["render", vR]]), kR = { class: "iframe-container" }, xR = ["src", "width", "height", "frameborder", "allowfullscreen"], SR = /* @__PURE__ */ ne({
  __name: "VideoNodeView",
  props: Tm,
  setup(t) {
    const e = t, n = Y(!1), i = Y(null), r = (o) => {
      console.error("Video iframe error:", o), n.value = !0;
    };
    return (o, s) => (N(), F(A(Am), {
      class: "iframe-wrapper",
      "data-video": ""
    }, {
      default: E(() => [
        Be("div", {
          style: di(`position: relative; overflow: hidden; display: flex; flex: 1; max-width: ${e.HTMLAttributes.width};`)
        }, [
          s[0] || (s[0] = Be("div", { style: `flex: 1; padding-bottom: ${9 / 16 * 100}%;` }, null, -1)),
          Be("div", kR, [
            n.value || !e.HTMLAttributes.src ? (N(), F(wR, {
              key: 0,
              style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" },
              message: "Video loading failed. Please check the URL or permissions."
            })) : n.value ? We("", !0) : (N(), ue("iframe", {
              key: 1,
              ref_key: "iframeRef",
              ref: i,
              src: e.HTMLAttributes.src,
              width: e.HTMLAttributes.width,
              height: e.HTMLAttributes.height,
              frameborder: e.HTMLAttributes.frameborder,
              allowfullscreen: e.HTMLAttributes.allowfullscreen,
              style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" },
              onError: r
            }, null, 40, xR))
          ])
        ], 4)
      ]),
      _: 1
    }));
  }
}), CR = /* @__PURE__ */ I1(SR, [["__scopeId", "data-v-fd153073"]]), MR = /* @__PURE__ */ ne({
  __name: "VideoActionButton",
  props: {
    editor: {},
    hrefRules: { default: "" },
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = Y(void 0);
    function i() {
      const { src: r } = e.editor.getAttributes("video");
      n.value = r;
    }
    return (r, o) => (N(), F(te, {
      icon: t.icon,
      tooltip: t.tooltip,
      disabled: t.disabled,
      color: t.color,
      "is-active": t.isActive,
      action: i
    }, {
      default: E(() => [
        H(Oc, null, {
          default: E(() => [
            gt(r.$slots, "dialog", {
              props: { editor: t.editor, hrefRules: e.hrefRules, value: n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
});
function AR(t) {
  return t = String(t), t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www\.bilibili\.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/i, "").replace(
    "https://www.bilibili.com/video/",
    "https://player.bilibili.com/player.html?bvid="
  )), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const aV = /* @__PURE__ */ be.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addAttributes() {
    return {
      ...He(
        this.parent?.(),
        "video",
        this.options.allowedAttributes
      ),
      src: {
        default: null,
        renderHTML: ({ src: t }) => ({
          src: t ? AR(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: Ji(t)
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
    const { width: e = "100%" } = t ?? {};
    return [
      "div",
      { "data-video": "" },
      [
        "iframe",
        {
          ...t,
          width: "100%",
          height: "100%"
        }
      ]
    ];
  },
  addNodeView() {
    return Em(CR);
  },
  addCommands() {
    return {
      setVideo: (t) => ({ commands: e }) => (console.log("Inserting video with options:", t), e.insertContent({
        type: this.name,
        attrs: t
      })),
      updateVideo: (t) => ({ commands: e }) => (console.log("Updating video with options:", t), e.updateAttributes(this.name, t))
    };
  },
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      frameborder: !1,
      width: Ro["size-medium"],
      hrefRules: [
        { pattern: "^http://", negate: !0, message: "URL should not start with http://" }
      ],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      dialogComponent: () => gR,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: i, hrefRules: r } = e.options;
        return {
          component: MR,
          componentProps: {
            hrefRules: r,
            isActive: () => t.isActive("video") || !1,
            icon: "video",
            tooltip: n("editor.video.tooltip")
          },
          componentSlots: {
            dialog: i()
          },
          disabled: !t.can().setVideo({})
        };
      }
    };
  }
}), cV = (t) => (n) => {
  const { lang: i, markdownTheme: r, components: o = {}, extensions: s } = t || {};
  i && da.setLang(i), Object.keys(o).forEach((l) => n.component(l, o[l])), sx({
    defaultLang: i,
    defaultMarkdownTheme: r,
    extensions: s
  });
};
export {
  te as ActionButton,
  NR as BaseKit,
  IR as Blockquote,
  DR as Bold,
  PR as BulletList,
  _R as Clear,
  zR as Code,
  $R as CodeBlock,
  BR as Color,
  si as DEFAULT_LOCALE,
  gA as DEFAULT_LOCALE_MESSAGE,
  FR as FontFamily,
  WR as FontSize,
  UR as Fullscreen,
  jR as Heading,
  KR as Highlight,
  qR as History,
  GR as HorizontalRule,
  JR as HtmlView,
  XR as Image,
  ZR as Indent,
  YR as Italic,
  QR as Link,
  yA as Locale,
  eV as MarkdownTheme,
  tV as OrderedList,
  rO as Paragraph,
  nV as Strike,
  iV as SubAndSuperScript,
  rV as Table,
  oV as TaskList,
  sV as TextAlign,
  lV as Underline,
  aV as Video,
  RR as VuetifyTiptap,
  VR as VuetifyViewer,
  cV as createVuetifyProTipTap,
  uA as de,
  YL as defaultBubbleList,
  fA as en,
  hA as it,
  da as locale,
  pA as nl,
  Vs as useContext,
  Gt as useLocale,
  mA as zhHans
};
