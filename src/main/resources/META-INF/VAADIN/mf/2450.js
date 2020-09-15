/*! For license information please see 2450.js.LICENSE.txt */
(self.webpackChunkcomponents_demo = self.webpackChunkcomponents_demo || []).push([[2450], {
  8804: (t, e, r) => {
    "use strict";
    r.d(e, {t: () => d}), r(1269);
    var i = r(564), n = r(8258);
    let s = {}, a = {};

    function o(t, e) {
      s[t] = a[t.toLowerCase()] = e
    }

    function l(t) {
      return s[t] || a[t.toLowerCase()]
    }

    class d extends HTMLElement {
      static get observedAttributes() {
        return ["id"]
      }

      static import(t, e) {
        if (t) {
          let r = l(t);
          return r && e ? r.querySelector(e) : r
        }
        return null
      }

      attributeChangedCallback(t, e, r, i) {
        e !== r && this.register()
      }

      get assetpath() {
        if (!this.__assetpath) {
          const t = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument,
            e = (0, i.Kk)(this.getAttribute("assetpath") || "", t.baseURI);
          this.__assetpath = (0, i.iY)(e)
        }
        return this.__assetpath
      }

      register(t) {
        if (t = t || this.id) {
          if (n.XN && void 0 !== l(t)) throw o(t, null), new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);
          this.id = t, o(t, this), (e = this).querySelector("style") && console.warn("dom-module %s has style outside template", e.id)
        }
        var e
      }
    }

    try {
      d.prototype.modules = s, customElements.define("dom-module", d)
    }catch(e){}
  }, 9942: (t, e, r) => {
    "use strict";
    r.d(e, {SH: () => u}), r(1269);
    var i = r(5095), n = r(8258), s = r(9781), a = r(8661), o = r(564), l = r(8804), d = r(2498);
    const p = [], h = (0, i.o)(t => {
      const e = (0, s.e)(t);

      function r(t) {
        const e = Object.getPrototypeOf(t);
        return e.prototype instanceof n ? e : null
      }

      function i(t) {
        if (!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", t))) {
          let e = null;
          if (t.hasOwnProperty(JSCompiler_renameProperty("properties", t))) {
            const r = t.properties;
            r && (e = function (t) {
              const e = {};
              for (let r in t) {
                const i = t[r];
                e[r] = "function" == typeof i ? {type: i} : i
              }
              return e
            }(r))
          }
          t.__ownProperties = e
        }
        return t.__ownProperties
      }

      class n extends e {
        static get observedAttributes() {
          if (!this.hasOwnProperty("__observedAttributes")) {
            t = this.prototype, p.push(t);
            const e = this._properties;
            this.__observedAttributes = e ? Object.keys(e).map(t => this.attributeNameForProperty(t)) : []
          }
          var t;
          return this.__observedAttributes
        }

        static finalize() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty("__finalized", this))) {
            const t = r(this);
            t && t.finalize(), this.__finalized = !0, this._finalizeClass()
          }
        }

        static _finalizeClass() {
          const t = i(this);
          t && this.createProperties(t)
        }

        static get _properties() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty("__properties", this))) {
            const t = r(this);
            this.__properties = Object.assign({}, t && t._properties, i(this))
          }
          return this.__properties
        }

        static typeForProperty(t) {
          const e = this._properties[t];
          return e && e.type
        }

        _initializeProperties() {
          this.constructor.finalize(), super._initializeProperties()
        }

        connectedCallback() {
          super.connectedCallback && super.connectedCallback(), this._enableProperties()
        }

        disconnectedCallback() {
          super.disconnectedCallback && super.disconnectedCallback()
        }
      }

      return n
    });
    var c = r(8991);
    const _ = window.ShadyCSS && window.ShadyCSS.cssBuild, u = (0, i.o)(t => {
      const e = h((0, d.q)(t));
      return class extends e {
        static get polymerElementVersion() {
          return "3.2.0"
        }

        static _finalizeClass() {
          super._finalizeClass();
          const t = ((e = this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers", e)) || (e.__ownObservers = e.hasOwnProperty(JSCompiler_renameProperty("observers", e)) ? e.observers : null), e.__ownObservers);
          var e;
          t && this.createObservers(t, this._properties), this._prepareTemplate()
        }

        static _prepareTemplate() {
          let t = this.template;
          t && ("string" == typeof t ? (console.error("template getter must return HTMLTemplateElement"), t = null) : n.nL || (t = t.cloneNode(!0))), this.prototype._template = t
        }

        static createProperties(t) {
          for (let s in t) e = this.prototype, r = s, n = t, (i = t[s]).computed && (i.readOnly = !0), i.computed && (e._hasReadOnlyEffect(r) ? console.warn(`Cannot redefine computed property '${r}'.`) : e._createComputedProperty(r, i.computed, n)), i.readOnly && !e._hasReadOnlyEffect(r) ? e._createReadOnlyProperty(r, !i.computed) : !1 === i.readOnly && e._hasReadOnlyEffect(r) && console.warn(`Cannot make readOnly property '${r}' non-readOnly.`), i.reflectToAttribute && !e._hasReflectEffect(r) ? e._createReflectedProperty(r) : !1 === i.reflectToAttribute && e._hasReflectEffect(r) && console.warn(`Cannot make reflected property '${r}' non-reflected.`), i.notify && !e._hasNotifyEffect(r) ? e._createNotifyingProperty(r) : !1 === i.notify && e._hasNotifyEffect(r) && console.warn(`Cannot make notify property '${r}' non-notify.`), i.observer && e._createPropertyObserver(r, i.observer, n[i.observer]), e._addPropertyToAttributeMap(r);
          var e, r, i, n
        }

        static createObservers(t, e) {
          const r = this.prototype;
          for (let i = 0; i < t.length; i++) r._createMethodObserver(t[i], e)
        }

        static get template() {
          return this.hasOwnProperty(JSCompiler_renameProperty("_template", this)) || (this._template = this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template", this.prototype)) ? this.prototype._template : function (t) {
            let e = null;
            if (t && (!n.XN || n.ZN) && (e = l.t.import(t, "template"), n.XN && !e)) throw new Error("strictTemplatePolicy: expecting dom-module or null template for " + t);
            return e
          }(this.is) || Object.getPrototypeOf(this.prototype).constructor.template), this._template
        }

        static set template(t) {
          this._template = t
        }

        static get importPath() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty("_importPath", this))) {
            const t = this.importMeta;
            if (t) this._importPath = (0, o.iY)(t.url); else {
              const t = l.t.import(this.is);
              this._importPath = t && t.assetpath || Object.getPrototypeOf(this.prototype).constructor.importPath
            }
          }
          return this._importPath
        }

        constructor() {
          super(), this._template, this._importPath, this.rootPath, this.importPath, this.root, this.$
        }

        _initializeProperties() {
          this.constructor.finalize(), this.constructor._finalizeTemplate(this.localName), super._initializeProperties(), this.rootPath = n.sM, this.importPath = this.constructor.importPath;
          let t = function (t) {
            if (!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults", t))) {
              t.__propertyDefaults = null;
              let e = t._properties;
              for (let r in e) {
                let i = e[r];
                "value" in i && (t.__propertyDefaults = t.__propertyDefaults || {}, t.__propertyDefaults[r] = i)
              }
            }
            return t.__propertyDefaults
          }(this.constructor);
          if (t) for (let e in t) {
            let r = t[e];
            if (!this.hasOwnProperty(e)) {
              let t = "function" == typeof r.value ? r.value.call(this) : r.value;
              this._hasAccessor(e) ? this._setPendingProperty(e, t, !0) : this[e] = t
            }
          }
        }

        static _processStyleText(t, e) {
          return (0, o.Rq)(t, e)
        }

        static _finalizeTemplate(t) {
          const e = this.prototype._template;
          if (e && !e.__polymerFinalized) {
            e.__polymerFinalized = !0;
            const r = this.importPath;
            !function (t, e, r, i) {
              if (!_) {
                const n = e.content.querySelectorAll("style"), s = (0, a.uT)(e), o = (0, a.lx)(r),
                  l = e.content.firstElementChild;
                for (let r = 0; r < o.length; r++) {
                  let n = o[r];
                  n.textContent = t._processStyleText(n.textContent, i), e.content.insertBefore(n, l)
                }
                let d = 0;
                for (let e = 0; e < s.length; e++) {
                  let r = s[e], a = n[d];
                  a !== r ? (r = r.cloneNode(!0), a.parentNode.insertBefore(r, a)) : d++, r.textContent = t._processStyleText(r.textContent, i)
                }
              }
              window.ShadyCSS && window.ShadyCSS.prepareTemplate(e, r)
            }(this, e, t, r ? (0, o.Kk)(r) : ""), this.prototype._bindTemplate(e)
          }
        }

        connectedCallback() {
          window.ShadyCSS && this._template && window.ShadyCSS.styleElement(this), super.connectedCallback()
        }

        ready() {
          this._template && (this.root = this._stampTemplate(this._template), this.$ = this.root.$), super.ready()
        }

        _readyClients() {
          this._template && (this.root = this._attachDom(this.root)), super._readyClients()
        }

        _attachDom(t) {
          const e = (0, c.r)(this);
          if (e.attachShadow) return t ? (e.shadowRoot || e.attachShadow({mode: "open"}), e.shadowRoot.appendChild(t), n.Hr && window.ShadyDOM && ShadyDOM.flushInitial(e.shadowRoot), e.shadowRoot) : null;
          throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")
        }

        updateStyles(t) {
          window.ShadyCSS && window.ShadyCSS.styleSubtree(this, t)
        }

        resolveUrl(t, e) {
          return !e && this.importPath && (e = (0, o.Kk)(this.importPath)), (0, o.Kk)(t, e)
        }

        static _parseTemplateContent(t, e, r) {
          return e.dynamicFns = e.dynamicFns || this._properties, super._parseTemplateContent(t, e, r)
        }

        static _addTemplatePropertyEffect(t, e, r) {
          return n.nL && !(e in this._properties) && console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`), super._addTemplatePropertyEffect(t, e, r)
        }
      }
    })
  }, 9781: (t, e, r) => {
    "use strict";
    r.d(e, {e: () => o}), r(1269);
    var i = r(5095), n = r(8042), s = r(8991);
    const a = n.YA, o = (0, i.o)(t => class extends t {
      static createProperties(t) {
        const e = this.prototype;
        for (let r in t) r in e || e._createPropertyAccessor(r)
      }

      static attributeNameForProperty(t) {
        return t.toLowerCase()
      }

      static typeForProperty(t) {
      }

      _createPropertyAccessor(t, e) {
        this._addPropertyToAttributeMap(t), this.hasOwnProperty("__dataHasAccessor") || (this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor)), this.__dataHasAccessor[t] || (this.__dataHasAccessor[t] = !0, this._definePropertyAccessor(t, e))
      }

      _addPropertyToAttributeMap(t) {
        if (this.hasOwnProperty("__dataAttributes") || (this.__dataAttributes = Object.assign({}, this.__dataAttributes)), !this.__dataAttributes[t]) {
          const e = this.constructor.attributeNameForProperty(t);
          this.__dataAttributes[e] = t
        }
      }

      _definePropertyAccessor(t, e) {
        Object.defineProperty(this, t, {
          get() {
            return this._getProperty(t)
          }, set: e ? function () {
          } : function (e) {
            this._setProperty(t, e)
          }
        })
      }

      constructor() {
        super(), this.__dataEnabled = !1, this.__dataReady = !1, this.__dataInvalid = !1, this.__data = {}, this.__dataPending = null, this.__dataOld = null, this.__dataInstanceProps = null, this.__serializing = !1, this._initializeProperties()
      }

      ready() {
        this.__dataReady = !0, this._flushProperties()
      }

      _initializeProperties() {
        for (let t in this.__dataHasAccessor) this.hasOwnProperty(t) && (this.__dataInstanceProps = this.__dataInstanceProps || {}, this.__dataInstanceProps[t] = this[t], delete this[t])
      }

      _initializeInstanceProperties(t) {
        Object.assign(this, t)
      }

      _setProperty(t, e) {
        this._setPendingProperty(t, e) && this._invalidateProperties()
      }

      _getProperty(t) {
        return this.__data[t]
      }

      _setPendingProperty(t, e, r) {
        let i = this.__data[t], n = this._shouldPropertyChange(t, e, i);
        return n && (this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), this.__dataOld && !(t in this.__dataOld) && (this.__dataOld[t] = i), this.__data[t] = e, this.__dataPending[t] = e), n
      }

      _invalidateProperties() {
        !this.__dataInvalid && this.__dataReady && (this.__dataInvalid = !0, a.run(() => {
          this.__dataInvalid && (this.__dataInvalid = !1, this._flushProperties())
        }))
      }

      _enableProperties() {
        this.__dataEnabled || (this.__dataEnabled = !0, this.__dataInstanceProps && (this._initializeInstanceProperties(this.__dataInstanceProps), this.__dataInstanceProps = null), this.ready())
      }

      _flushProperties() {
        const t = this.__data, e = this.__dataPending, r = this.__dataOld;
        this._shouldPropertiesChange(t, e, r) && (this.__dataPending = null, this.__dataOld = null, this._propertiesChanged(t, e, r))
      }

      _shouldPropertiesChange(t, e, r) {
        return Boolean(e)
      }

      _propertiesChanged(t, e, r) {
      }

      _shouldPropertyChange(t, e, r) {
        return r !== e && (r == r || e == e)
      }

      attributeChangedCallback(t, e, r, i) {
        e !== r && this._attributeToProperty(t, r), super.attributeChangedCallback && super.attributeChangedCallback(t, e, r, i)
      }

      _attributeToProperty(t, e, r) {
        if (!this.__serializing) {
          const i = this.__dataAttributes, n = i && i[t] || t;
          this[n] = this._deserializeValue(e, r || this.constructor.typeForProperty(n))
        }
      }

      _propertyToAttribute(t, e, r) {
        this.__serializing = !0, r = arguments.length < 3 ? this[t] : r, this._valueToNodeAttribute(this, r, e || this.constructor.attributeNameForProperty(t)), this.__serializing = !1
      }

      _valueToNodeAttribute(t, e, r) {
        const i = this._serializeValue(e);
        void 0 === i ? t.removeAttribute(r) : ("class" !== r && "name" !== r && "slot" !== r || (t = (0, s.r)(t)), t.setAttribute(r, i))
      }

      _serializeValue(t) {
        switch (typeof t) {
          case"boolean":
            return t ? "" : void 0;
          default:
            return null != t ? t.toString() : void 0
        }
      }

      _deserializeValue(t, e) {
        switch (e) {
          case Boolean:
            return null !== t;
          case Number:
            return Number(t);
          default:
            return t
        }
      }
    })
  }, 2311: (t, e, r) => {
    "use strict";
    r.d(e, {Q: () => l}), r(1269);
    var i = r(5095), n = r(8053), s = r(9781);
    const a = {};
    let o = HTMLElement.prototype;
    for (; o;) {
      let t = Object.getOwnPropertyNames(o);
      for (let e = 0; e < t.length; e++) a[t[e]] = !0;
      o = Object.getPrototypeOf(o)
    }
    const l = (0, i.o)(t => {
      const e = (0, s.e)(t);
      return class extends e {
        static createPropertiesForAttributes() {
          let t = this.observedAttributes;
          for (let e = 0; e < t.length; e++) this.prototype._createPropertyAccessor((0, n.z)(t[e]))
        }

        static attributeNameForProperty(t) {
          return (0, n.n)(t)
        }

        _initializeProperties() {
          this.__dataProto && (this._initializeProtoProperties(this.__dataProto), this.__dataProto = null), super._initializeProperties()
        }

        _initializeProtoProperties(t) {
          for (let e in t) this._setProperty(e, t[e])
        }

        _ensureAttribute(t, e) {
          this.hasAttribute(t) || this._valueToNodeAttribute(this, e, t)
        }

        _serializeValue(t) {
          switch (typeof t) {
            case"object":
              if (t instanceof Date) return t.toString();
              if (t) try {
                return JSON.stringify(t)
              } catch (t) {
                return ""
              }
            default:
              return super._serializeValue(t)
          }
        }

        _deserializeValue(t, e) {
          let r;
          switch (e) {
            case Object:
              try {
                r = JSON.parse(t)
              } catch (e) {
                r = t
              }
              break;
            case Array:
              try {
                r = JSON.parse(t)
              } catch (e) {
                r = null, console.warn("Polymer::Attributes: couldn't decode Array as JSON: " + t)
              }
              break;
            case Date:
              r = isNaN(t) ? String(t) : Number(t), r = new Date(r);
              break;
            default:
              r = super._deserializeValue(t, e)
          }
          return r
        }

        _definePropertyAccessor(t, e) {
          !function (t, e) {
            if (!a[e]) {
              let r = t[e];
              void 0 !== r && (t.__data ? t._setPendingProperty(e, r) : (t.__dataProto ? t.hasOwnProperty(JSCompiler_renameProperty("__dataProto", t)) || (t.__dataProto = Object.create(t.__dataProto)) : t.__dataProto = {}, t.__dataProto[e] = r))
            }
          }(this, t), super._definePropertyAccessor(t, e)
        }

        _hasAccessor(t) {
          return this.__dataHasAccessor && this.__dataHasAccessor[t]
        }

        _isPropertyPending(t) {
          return Boolean(this.__dataPending && t in this.__dataPending)
        }
      }
    })
  }, 2498: (t, e, r) => {
    "use strict";
    r.d(e, {q: () => J}), r(1269);
    var i = r(5095), n = r(8991), s = r(8444), a = r(8053), o = r(2311);
    const l = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1), d = {"dom-if": !0, "dom-repeat": !0};

    function p(t) {
      let e = t.getAttribute("is");
      if (e && d[e]) {
        let r = t;
        for (r.removeAttribute("is"), t = r.ownerDocument.createElement(e), r.parentNode.replaceChild(t, r), t.appendChild(r); r.attributes.length;) t.setAttribute(r.attributes[0].name, r.attributes[0].value), r.removeAttribute(r.attributes[0].name)
      }
      return t
    }

    function h(t, e) {
      let r = e.parentInfo && h(t, e.parentInfo);
      if (!r) return t;
      l.currentNode = r;
      for (let t = l.firstChild(), r = 0; t; t = l.nextSibling()) if (e.parentIndex === r++) return t
    }

    function c(t, e, r, i) {
      i.id && (e[i.id] = r)
    }

    function _(t, e, r) {
      if (r.events && r.events.length) for (let i, n = 0, s = r.events; n < s.length && (i = s[n]); n++) t._addMethodEventListenerToNode(e, i.name, i.value, t)
    }

    function u(t, e, r) {
      r.templateInfo && (e._templateInfo = r.templateInfo)
    }

    const f = (0, i.o)(t => class extends t {
      static _parseTemplate(t, e) {
        if (!t._templateInfo) {
          let r = t._templateInfo = {};
          r.nodeInfoList = [], r.stripWhiteSpace = e && e.stripWhiteSpace || t.hasAttribute("strip-whitespace"), this._parseTemplateContent(t, r, {parent: null})
        }
        return t._templateInfo
      }

      static _parseTemplateContent(t, e, r) {
        return this._parseTemplateNode(t.content, e, r)
      }

      static _parseTemplateNode(t, e, r) {
        let i, n = t;
        return "template" != n.localName || n.hasAttribute("preserve-content") ? "slot" === n.localName && (e.hasInsertionPoint = !0) : i = this._parseTemplateNestedTemplate(n, e, r) || i, l.currentNode = n, l.firstChild() && (i = this._parseTemplateChildNodes(n, e, r) || i), n.hasAttributes && n.hasAttributes() && (i = this._parseTemplateNodeAttributes(n, e, r) || i), i
      }

      static _parseTemplateChildNodes(t, e, r) {
        if ("script" !== t.localName && "style" !== t.localName) {
          l.currentNode = t;
          for (let i, n = l.firstChild(), s = 0; n; n = i) {
            if ("template" == n.localName && (n = p(n)), l.currentNode = n, i = l.nextSibling(), n.nodeType === Node.TEXT_NODE) {
              let r = i;
              for (; r && r.nodeType === Node.TEXT_NODE;) n.textContent += r.textContent, i = l.nextSibling(), t.removeChild(r), r = i;
              if (e.stripWhiteSpace && !n.textContent.trim()) {
                t.removeChild(n);
                continue
              }
            }
            let a = {parentIndex: s, parentInfo: r};
            this._parseTemplateNode(n, e, a) && (a.infoIndex = e.nodeInfoList.push(a) - 1), l.currentNode = n, l.parentNode() && s++
          }
        }
      }

      static _parseTemplateNestedTemplate(t, e, r) {
        let i = this._parseTemplate(t, e);
        return (i.content = t.content.ownerDocument.createDocumentFragment()).appendChild(t.content), r.templateInfo = i, !0
      }

      static _parseTemplateNodeAttributes(t, e, r) {
        let i = !1, n = Array.from(t.attributes);
        for (let s, a = n.length - 1; s = n[a]; a--) i = this._parseTemplateNodeAttribute(t, e, r, s.name, s.value) || i;
        return i
      }

      static _parseTemplateNodeAttribute(t, e, r, i, n) {
        return "on-" === i.slice(0, 3) ? (t.removeAttribute(i), r.events = r.events || [], r.events.push({
          name: i.slice(3),
          value: n
        }), !0) : "id" === i && (r.id = n, !0)
      }

      static _contentForTemplate(t) {
        let e = t._templateInfo;
        return e && e.content || t.content
      }

      _stampTemplate(t) {
        t && !t.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(t);
        let e = this.constructor._parseTemplate(t), r = e.nodeInfoList, i = e.content || t.content,
          n = document.importNode(i, !0);
        n.__noInsertionPoint = !e.hasInsertionPoint;
        let s = n.nodeList = new Array(r.length);
        n.$ = {};
        for (let t, e = 0, i = r.length; e < i && (t = r[e]); e++) {
          let r = s[e] = h(n, t);
          c(0, n.$, r, t), u(0, r, t), _(this, r, t)
        }
        return n = n, n
      }

      _addMethodEventListenerToNode(t, e, r, i) {
        let n = function (t, e, r) {
          return t = t._methodHost || t, function (e) {
            t[r] ? t[r](e, e.detail) : console.warn("listener method `" + r + "` not defined")
          }
        }(i = i || t, 0, r);
        return this._addEventListenerToNode(t, e, n), n
      }

      _addEventListenerToNode(t, e, r) {
        t.addEventListener(e, r)
      }

      _removeEventListenerFromNode(t, e, r) {
        t.removeEventListener(e, r)
      }
    });
    var m = r(8258);
    let y = 0;
    const P = {
      COMPUTE: "__computeEffects",
      REFLECT: "__reflectEffects",
      NOTIFY: "__notifyEffects",
      PROPAGATE: "__propagateEffects",
      OBSERVE: "__observeEffects",
      READ_ONLY: "__readOnly"
    }, g = /[A-Z]/;

    function b(t, e) {
      let r = t[e];
      if (r) {
        if (!t.hasOwnProperty(e)) {
          r = t[e] = Object.create(t[e]);
          for (let t in r) {
            let e = r[t], i = r[t] = Array(e.length);
            for (let t = 0; t < e.length; t++) i[t] = e[t]
          }
        }
      } else r = t[e] = {};
      return r
    }

    function w(t, e, r, i, n, s) {
      if (e) {
        let a = !1, o = y++;
        for (let l in r) C(t, e, o, l, r, i, n, s) && (a = !0);
        return a
      }
      return !1
    }

    function C(t, e, r, i, n, a, o, l) {
      let d = !1, p = e[o ? (0, s.Jz)(i) : i];
      if (p) for (let e, s = 0, h = p.length; s < h && (e = p[s]); s++) e.info && e.info.lastRun === r || o && !v(i, e.trigger) || (e.info && (e.info.lastRun = r), e.fn(t, i, n, a, e.info, o, l), d = !0);
      return d
    }

    function v(t, e) {
      if (e) {
        let r = e.name;
        return r == t || !(!e.structured || !(0, s.jg)(r, t)) || !(!e.wildcard || !(0, s.SG)(r, t))
      }
      return !0
    }

    function T(t, e, r, i, n) {
      let s = "string" == typeof n.method ? t[n.method] : n.method, a = n.property;
      s ? s.call(t, t.__data[a], i[a]) : n.dynamicFn || console.warn("observer method `" + n.method + "` not defined")
    }

    function O(t, e, r) {
      let i = (0, s.Jz)(e);
      return i !== e && (E(t, (0, a.n)(i) + "-changed", r[e], e), !0)
    }

    function E(t, e, r, i) {
      let s = {value: r, queueProperty: !0};
      i && (s.path = i), (0, n.r)(t).dispatchEvent(new CustomEvent(e, {detail: s}))
    }

    function A(t, e, r, i, n, a) {
      let o = (a ? (0, s.Jz)(e) : e) != e ? e : null, l = o ? (0, s.U2)(t, o) : t.__data[e];
      o && void 0 === l && (l = r[e]), E(t, n.eventName, l, o)
    }

    function N(t, e, r, i, n) {
      let s = t.__data[e];
      m.v1 && (s = (0, m.v1)(s, n.attrName, "attribute", t)), t._propertyToAttribute(e, n.attrName, s)
    }

    function S(t, e, r, i, n) {
      let s = H(t, e, r, 0, n), a = n.methodInfo;
      t.__dataHasAccessor && t.__dataHasAccessor[a] ? t._setPendingProperty(a, s, !0) : t[a] = s
    }

    function I(t, e, r, i, n, s, o) {
      r.bindings = r.bindings || [];
      let l = {kind: i, target: n, parts: s, literal: o, isCompound: 1 !== s.length};
      if (r.bindings.push(l), function (t) {
        return Boolean(t.target) && "attribute" != t.kind && "text" != t.kind && !t.isCompound && "{" === t.parts[0].mode
      }(l)) {
        let {event: t, negate: e} = l.parts[0];
        l.listenerEvent = t || (0, a.n)(n) + "-changed", l.listenerNegate = e
      }
      let d = e.nodeInfoList.length;
      for (let r = 0; r < l.parts.length; r++) {
        let i = l.parts[r];
        i.compoundIndex = r, x(t, e, l, i, d)
      }
    }

    function x(t, e, r, i, n) {
      if (!i.literal) if ("attribute" === r.kind && "-" === r.target[0]) console.warn("Cannot set attribute " + r.target + ' because "-" is not a valid attribute starting character'); else {
        let s = i.dependencies, a = {index: n, binding: r, part: i, evaluator: t};
        for (let r = 0; r < s.length; r++) {
          let i = s[r];
          "string" == typeof i && (i = U(i), i.wildcard = !0), t._addTemplatePropertyEffect(e, i.rootProperty, {
            fn: L,
            info: a,
            trigger: i
          })
        }
      }
    }

    function L(t, e, r, i, n, a, o) {
      let l = o[n.index], d = n.binding, p = n.part;
      if (a && p.source && e.length > p.source.length && "property" == d.kind && !d.isCompound && l.__isPropertyEffectsClient && l.__dataHasAccessor && l.__dataHasAccessor[d.target]) {
        let i = r[e];
        e = (0, s.Iu)(p.source, d.target, e), l._setPendingPropertyOrPath(e, i, !1, !0) && t._enqueueClient(l)
      } else !function (t, e, r, i, n) {
        if (n = function (t, e, r, i) {
          if (r.isCompound) {
            let n = t.__dataCompoundStorage[r.target];
            n[i.compoundIndex] = e, e = n.join("")
          }
          return "attribute" !== r.kind && ("textContent" !== r.target && ("value" !== r.target || "input" !== t.localName && "textarea" !== t.localName) || (e = null == e ? "" : e)), e
        }(e, n, r, i), m.v1 && (n = (0, m.v1)(n, r.target, r.kind, e)), "attribute" == r.kind) t._valueToNodeAttribute(e, n, r.target); else {
          let i = r.target;
          e.__isPropertyEffectsClient && e.__dataHasAccessor && e.__dataHasAccessor[i] ? e[P.READ_ONLY] && e[P.READ_ONLY][i] || e._setPendingProperty(i, n) && t._enqueueClient(e) : t._setUnmanagedPropertyToNode(e, i, n)
        }
      }(t, l, d, p, n.evaluator._evaluateBinding(t, p, e, r, i, a))
    }

    function R(t, e) {
      if (e.isCompound) {
        let r = t.__dataCompoundStorage || (t.__dataCompoundStorage = {}), i = e.parts, n = new Array(i.length);
        for (let t = 0; t < i.length; t++) n[t] = i[t].literal;
        let s = e.target;
        r[s] = n, e.literal && "property" == e.kind && (t[s] = e.literal)
      }
    }

    function k(t, e, r) {
      if (r.listenerEvent) {
        let i = r.parts[0];
        t.addEventListener(r.listenerEvent, (function (t) {
          !function (t, e, r, i, n) {
            let a, o = t.detail, l = o && o.path;
            l ? (i = (0, s.Iu)(r, i, l), a = o && o.value) : a = t.currentTarget[r], a = n ? !a : a, e[P.READ_ONLY] && e[P.READ_ONLY][i] || !e._setPendingPropertyOrPath(i, a, !0, Boolean(l)) || o && o.queueProperty || e._invalidateProperties()
          }(t, e, r.target, i.source, i.negate)
        }))
      }
    }

    function z(t, e, r, i, n, s) {
      s = e.static || s && ("object" != typeof s || s[e.methodName]);
      let a = {methodName: e.methodName, args: e.args, methodInfo: n, dynamicFn: s};
      for (let n, s = 0; s < e.args.length && (n = e.args[s]); s++) n.literal || t._addPropertyEffect(n.rootProperty, r, {
        fn: i,
        info: a,
        trigger: n
      });
      s && t._addPropertyEffect(e.methodName, r, {fn: i, info: a})
    }

    function H(t, e, r, i, n) {
      let s = t._methodHost || t, a = s[n.methodName];
      if (a) {
        let i = t._marshalArgs(n.args, e, r);
        return a.apply(s, i)
      }
      n.dynamicFn || console.warn("method `" + n.methodName + "` not defined")
    }

    const F = [],
      M = new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})", "g");

    function D(t) {
      let e = "";
      for (let r = 0; r < t.length; r++) e += t[r].literal || "";
      return e
    }

    function j(t) {
      let e = t.match(/([^\s]+?)\(([\s\S]*)\)/);
      if (e) {
        let t = {methodName: e[1], static: !0, args: F};
        return e[2].trim() ? function (t, e) {
          return e.args = t.map((function (t) {
            let r = U(t);
            return r.literal || (e.static = !1), r
          }), this), e
        }(e[2].replace(/\\,/g, "&comma;").split(","), t) : t
      }
      return null
    }

    function U(t) {
      let e = t.trim().replace(/&comma;/g, ",").replace(/\\(.)/g, "$1"), r = {name: e, value: "", literal: !1},
        i = e[0];
      switch ("-" === i && (i = e[1]), i >= "0" && i <= "9" && (i = "#"), i) {
        case"'":
        case'"':
          r.value = e.slice(1, -1), r.literal = !0;
          break;
        case"#":
          r.value = Number(e), r.literal = !0
      }
      return r.literal || (r.rootProperty = (0, s.Jz)(e), r.structured = (0, s.AZ)(e), r.structured && (r.wildcard = ".*" == e.slice(-2), r.wildcard && (r.name = e.slice(0, -2)))), r
    }

    function B(t, e, r) {
      let i = (0, s.U2)(t, r);
      return void 0 === i && (i = e[r]), i
    }

    function Y(t, e, r, i) {
      t.notifyPath(r + ".splices", {indexSplices: i}), t.notifyPath(r + ".length", e.length)
    }

    function q(t, e, r, i, n, s) {
      Y(t, e, r, [{index: i, addedCount: n, removed: s, object: e, type: "splice"}])
    }

    const J = (0, i.o)(t => {
      const e = f((0, o.Q)(t));
      return class extends e {
        constructor() {
          super(), this.__isPropertyEffectsClient = !0, this.__dataCounter = 0, this.__dataClientsReady, this.__dataPendingClients, this.__dataToNotify, this.__dataLinkedPaths, this.__dataHasPaths, this.__dataCompoundStorage, this.__dataHost, this.__dataTemp, this.__dataClientsInitialized, this.__data, this.__dataPending, this.__dataOld, this.__computeEffects, this.__reflectEffects, this.__notifyEffects, this.__propagateEffects, this.__observeEffects, this.__readOnly, this.__templateInfo
        }

        get PROPERTY_EFFECT_TYPES() {
          return P
        }

        _initializeProperties() {
          super._initializeProperties(), $.registerHost(this), this.__dataClientsReady = !1, this.__dataPendingClients = null, this.__dataToNotify = null, this.__dataLinkedPaths = null, this.__dataHasPaths = !1, this.__dataCompoundStorage = this.__dataCompoundStorage || null, this.__dataHost = this.__dataHost || null, this.__dataTemp = {}, this.__dataClientsInitialized = !1
        }

        _initializeProtoProperties(t) {
          this.__data = Object.create(t), this.__dataPending = Object.create(t), this.__dataOld = {}
        }

        _initializeInstanceProperties(t) {
          let e = this[P.READ_ONLY];
          for (let r in t) e && e[r] || (this.__dataPending = this.__dataPending || {}, this.__dataOld = this.__dataOld || {}, this.__data[r] = this.__dataPending[r] = t[r])
        }

        _addPropertyEffect(t, e, r) {
          this._createPropertyAccessor(t, e == P.READ_ONLY);
          let i = b(this, e)[t];
          i || (i = this[e][t] = []), i.push(r)
        }

        _removePropertyEffect(t, e, r) {
          let i = b(this, e)[t], n = i.indexOf(r);
          n >= 0 && i.splice(n, 1)
        }

        _hasPropertyEffect(t, e) {
          let r = this[e];
          return Boolean(r && r[t])
        }

        _hasReadOnlyEffect(t) {
          return this._hasPropertyEffect(t, P.READ_ONLY)
        }

        _hasNotifyEffect(t) {
          return this._hasPropertyEffect(t, P.NOTIFY)
        }

        _hasReflectEffect(t) {
          return this._hasPropertyEffect(t, P.REFLECT)
        }

        _hasComputedEffect(t) {
          return this._hasPropertyEffect(t, P.COMPUTE)
        }

        _setPendingPropertyOrPath(t, e, r, i) {
          if (i || (0, s.Jz)(Array.isArray(t) ? t[0] : t) !== t) {
            if (!i) {
              let r = (0, s.U2)(this, t);
              if (!(t = (0, s.t8)(this, t, e)) || !super._shouldPropertyChange(t, e, r)) return !1
            }
            if (this.__dataHasPaths = !0, this._setPendingProperty(t, e, r)) return function (t, e, r) {
              let i = t.__dataLinkedPaths;
              if (i) {
                let n;
                for (let a in i) {
                  let o = i[a];
                  (0, s.SG)(a, e) ? (n = (0, s.Iu)(a, o, e), t._setPendingPropertyOrPath(n, r, !0, !0)) : (0, s.SG)(o, e) && (n = (0, s.Iu)(o, a, e), t._setPendingPropertyOrPath(n, r, !0, !0))
                }
              }
            }(this, t, e), !0
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[t]) return this._setPendingProperty(t, e, r);
            this[t] = e
          }
          return !1
        }

        _setUnmanagedPropertyToNode(t, e, r) {
          r === t[e] && "object" != typeof r || (t[e] = r)
        }

        _setPendingProperty(t, e, r) {
          let i = this.__dataHasPaths && (0, s.AZ)(t), n = i ? this.__dataTemp : this.__data;
          return !!this._shouldPropertyChange(t, e, n[t]) && (this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), t in this.__dataOld || (this.__dataOld[t] = this.__data[t]), i ? this.__dataTemp[t] = e : this.__data[t] = e, this.__dataPending[t] = e, (i || this[P.NOTIFY] && this[P.NOTIFY][t]) && (this.__dataToNotify = this.__dataToNotify || {}, this.__dataToNotify[t] = r), !0)
        }

        _setProperty(t, e) {
          this._setPendingProperty(t, e, !0) && this._invalidateProperties()
        }

        _invalidateProperties() {
          this.__dataReady && this._flushProperties()
        }

        _enqueueClient(t) {
          this.__dataPendingClients = this.__dataPendingClients || [], t !== this && this.__dataPendingClients.push(t)
        }

        _flushProperties() {
          this.__dataCounter++, super._flushProperties(), this.__dataCounter--
        }

        _flushClients() {
          this.__dataClientsReady ? this.__enableOrFlushClients() : (this.__dataClientsReady = !0, this._readyClients(), this.__dataReady = !0)
        }

        __enableOrFlushClients() {
          let t = this.__dataPendingClients;
          if (t) {
            this.__dataPendingClients = null;
            for (let e = 0; e < t.length; e++) {
              let r = t[e];
              r.__dataEnabled ? r.__dataPending && r._flushProperties() : r._enableProperties()
            }
          }
        }

        _readyClients() {
          this.__enableOrFlushClients()
        }

        setProperties(t, e) {
          for (let r in t) !e && this[P.READ_ONLY] && this[P.READ_ONLY][r] || this._setPendingPropertyOrPath(r, t[r], !0);
          this._invalidateProperties()
        }

        ready() {
          this._flushProperties(), this.__dataClientsReady || this._flushClients(), this.__dataPending && this._flushProperties()
        }

        _propertiesChanged(t, e, r) {
          let i = this.__dataHasPaths;
          this.__dataHasPaths = !1, function (t, e, r, i) {
            let n = t[P.COMPUTE];
            if (n) {
              let s = e;
              for (; w(t, n, s, r, i);) Object.assign(r, t.__dataOld), Object.assign(e, t.__dataPending), s = t.__dataPending, t.__dataPending = null
            }
          }(this, e, r, i);
          let n = this.__dataToNotify;
          this.__dataToNotify = null, this._propagatePropertyChanges(e, r, i), this._flushClients(), w(this, this[P.REFLECT], e, r, i), w(this, this[P.OBSERVE], e, r, i), n && function (t, e, r, i, n) {
            let s, a, o = t[P.NOTIFY], l = y++;
            for (let a in e) e[a] && (o && C(t, o, l, a, r, i, n) || n && O(t, a, r)) && (s = !0);
            s && (a = t.__dataHost) && a._invalidateProperties && a._invalidateProperties()
          }(this, n, e, r, i), 1 == this.__dataCounter && (this.__dataTemp = {})
        }

        _propagatePropertyChanges(t, e, r) {
          this[P.PROPAGATE] && w(this, this[P.PROPAGATE], t, e, r);
          let i = this.__templateInfo;
          for (; i;) w(this, i.propertyEffects, t, e, r, i.nodeList), i = i.nextTemplateInfo
        }

        linkPaths(t, e) {
          t = (0, s.Fv)(t), e = (0, s.Fv)(e), this.__dataLinkedPaths = this.__dataLinkedPaths || {}, this.__dataLinkedPaths[t] = e
        }

        unlinkPaths(t) {
          t = (0, s.Fv)(t), this.__dataLinkedPaths && delete this.__dataLinkedPaths[t]
        }

        notifySplices(t, e) {
          let r = {path: ""};
          Y(this, (0, s.U2)(this, t, r), r.path, e)
        }

        get(t, e) {
          return (0, s.U2)(e || this, t)
        }

        set(t, e, r) {
          r ? (0, s.t8)(r, t, e) : this[P.READ_ONLY] && this[P.READ_ONLY][t] || this._setPendingPropertyOrPath(t, e, !0) && this._invalidateProperties()
        }

        push(t, ...e) {
          let r = {path: ""}, i = (0, s.U2)(this, t, r), n = i.length, a = i.push(...e);
          return e.length && q(this, i, r.path, n, e.length, []), a
        }

        pop(t) {
          let e = {path: ""}, r = (0, s.U2)(this, t, e), i = Boolean(r.length), n = r.pop();
          return i && q(this, r, e.path, r.length, 0, [n]), n
        }

        splice(t, e, r, ...i) {
          let n, a = {path: ""}, o = (0, s.U2)(this, t, a);
          return e < 0 ? e = o.length - Math.floor(-e) : e && (e = Math.floor(e)), n = 2 === arguments.length ? o.splice(e) : o.splice(e, r, ...i), (i.length || n.length) && q(this, o, a.path, e, i.length, n), n
        }

        shift(t) {
          let e = {path: ""}, r = (0, s.U2)(this, t, e), i = Boolean(r.length), n = r.shift();
          return i && q(this, r, e.path, 0, 0, [n]), n
        }

        unshift(t, ...e) {
          let r = {path: ""}, i = (0, s.U2)(this, t, r), n = i.unshift(...e);
          return e.length && q(this, i, r.path, 0, e.length, []), n
        }

        notifyPath(t, e) {
          let r;
          if (1 == arguments.length) {
            let i = {path: ""};
            e = (0, s.U2)(this, t, i), r = i.path
          } else r = Array.isArray(t) ? (0, s.Fv)(t) : t;
          this._setPendingPropertyOrPath(r, e, !0, !0) && this._invalidateProperties()
        }

        _createReadOnlyProperty(t, e) {
          var r;
          this._addPropertyEffect(t, P.READ_ONLY), e && (this["_set" + (r = t, r[0].toUpperCase() + r.substring(1))] = function (e) {
            this._setProperty(t, e)
          })
        }

        _createPropertyObserver(t, e, r) {
          let i = {property: t, method: e, dynamicFn: Boolean(r)};
          this._addPropertyEffect(t, P.OBSERVE, {
            fn: T,
            info: i,
            trigger: {name: t}
          }), r && this._addPropertyEffect(e, P.OBSERVE, {fn: T, info: i, trigger: {name: e}})
        }

        _createMethodObserver(t, e) {
          let r = j(t);
          if (!r) throw new Error("Malformed observer expression '" + t + "'");
          z(this, r, P.OBSERVE, H, null, e)
        }

        _createNotifyingProperty(t) {
          this._addPropertyEffect(t, P.NOTIFY, {fn: A, info: {eventName: (0, a.n)(t) + "-changed", property: t}})
        }

        _createReflectedProperty(t) {
          let e = this.constructor.attributeNameForProperty(t);
          "-" === e[0] ? console.warn("Property " + t + " cannot be reflected to attribute " + e + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.') : this._addPropertyEffect(t, P.REFLECT, {
            fn: N,
            info: {attrName: e}
          })
        }

        _createComputedProperty(t, e, r) {
          let i = j(e);
          if (!i) throw new Error("Malformed computed expression '" + e + "'");
          z(this, i, P.COMPUTE, S, t, r)
        }

        _marshalArgs(t, e, r) {
          const i = this.__data, n = [];
          for (let a = 0, o = t.length; a < o; a++) {
            let {name: o, structured: l, wildcard: d, value: p, literal: h} = t[a];
            if (!h) if (d) {
              const t = (0, s.SG)(o, e), n = B(i, r, t ? e : o);
              p = {path: t ? e : o, value: n, base: t ? (0, s.U2)(i, o) : n}
            } else p = l ? B(i, r, o) : i[o];
            n[a] = p
          }
          return n
        }

        static addPropertyEffect(t, e, r) {
          this.prototype._addPropertyEffect(t, e, r)
        }

        static createPropertyObserver(t, e, r) {
          this.prototype._createPropertyObserver(t, e, r)
        }

        static createMethodObserver(t, e) {
          this.prototype._createMethodObserver(t, e)
        }

        static createNotifyingProperty(t) {
          this.prototype._createNotifyingProperty(t)
        }

        static createReadOnlyProperty(t, e) {
          this.prototype._createReadOnlyProperty(t, e)
        }

        static createReflectedProperty(t) {
          this.prototype._createReflectedProperty(t)
        }

        static createComputedProperty(t, e, r) {
          this.prototype._createComputedProperty(t, e, r)
        }

        static bindTemplate(t) {
          return this.prototype._bindTemplate(t)
        }

        _bindTemplate(t, e) {
          let r = this.constructor._parseTemplate(t), i = this.__templateInfo == r;
          if (!i) for (let t in r.propertyEffects) this._createPropertyAccessor(t);
          if (e && (r = Object.create(r), r.wasPreBound = i, !i && this.__templateInfo)) {
            let t = this.__templateInfoLast || this.__templateInfo;
            return this.__templateInfoLast = t.nextTemplateInfo = r, r.previousTemplateInfo = t, r
          }
          return this.__templateInfo = r
        }

        static _addTemplatePropertyEffect(t, e, r) {
          (t.hostProps = t.hostProps || {})[e] = !0;
          let i = t.propertyEffects = t.propertyEffects || {};
          (i[e] = i[e] || []).push(r)
        }

        _stampTemplate(t) {
          $.beginHosting(this);
          let e = super._stampTemplate(t);
          $.endHosting(this);
          let r = this._bindTemplate(t, !0);
          if (r.nodeList = e.nodeList, !r.wasPreBound) {
            let t = r.childNodes = [];
            for (let r = e.firstChild; r; r = r.nextSibling) t.push(r)
          }
          return e.templateInfo = r, function (t, e) {
            let {nodeList: r, nodeInfoList: i} = e;
            if (i.length) for (let e = 0; e < i.length; e++) {
              let n = i[e], s = r[e], a = n.bindings;
              if (a) for (let e = 0; e < a.length; e++) {
                let r = a[e];
                R(s, r), k(s, t, r)
              }
              s.__dataHost = t
            }
          }(this, r), this.__dataReady && w(this, r.propertyEffects, this.__data, null, !1, r.nodeList), e
        }

        _removeBoundDom(t) {
          let e = t.templateInfo;
          e.previousTemplateInfo && (e.previousTemplateInfo.nextTemplateInfo = e.nextTemplateInfo), e.nextTemplateInfo && (e.nextTemplateInfo.previousTemplateInfo = e.previousTemplateInfo), this.__templateInfoLast == e && (this.__templateInfoLast = e.previousTemplateInfo), e.previousTemplateInfo = e.nextTemplateInfo = null;
          let r = e.childNodes;
          for (let t = 0; t < r.length; t++) {
            let e = r[t];
            e.parentNode.removeChild(e)
          }
        }

        static _parseTemplateNode(t, e, r) {
          let i = super._parseTemplateNode(t, e, r);
          if (t.nodeType === Node.TEXT_NODE) {
            let n = this._parseBindings(t.textContent, e);
            n && (t.textContent = D(n) || " ", I(this, e, r, "text", "textContent", n), i = !0)
          }
          return i
        }

        static _parseTemplateNodeAttribute(t, e, r, i, n) {
          let s = this._parseBindings(n, e);
          if (s) {
            let n = i, o = "property";
            g.test(i) ? o = "attribute" : "$" == i[i.length - 1] && (i = i.slice(0, -1), o = "attribute");
            let l = D(s);
            return l && "attribute" == o && ("class" == i && t.hasAttribute("class") && (l += " " + t.getAttribute(i)), t.setAttribute(i, l)), "input" === t.localName && "value" === n && t.setAttribute(n, ""), t.removeAttribute(n), "property" === o && (i = (0, a.z)(i)), I(this, e, r, o, i, s, l), !0
          }
          return super._parseTemplateNodeAttribute(t, e, r, i, n)
        }

        static _parseTemplateNestedTemplate(t, e, r) {
          let i = super._parseTemplateNestedTemplate(t, e, r), n = r.templateInfo.hostProps;
          for (let t in n) I(this, e, r, "property", "_host_" + t, [{mode: "{", source: t, dependencies: [t]}]);
          return i
        }

        static _parseBindings(t, e) {
          let r, i = [], n = 0;
          for (; null !== (r = M.exec(t));) {
            r.index > n && i.push({literal: t.slice(n, r.index)});
            let s = r[1][0], a = Boolean(r[2]), o = r[3].trim(), l = !1, d = "", p = -1;
            "{" == s && (p = o.indexOf("::")) > 0 && (d = o.substring(p + 2), o = o.substring(0, p), l = !0);
            let h = j(o), c = [];
            if (h) {
              let {args: t, methodName: r} = h;
              for (let e = 0; e < t.length; e++) {
                let r = t[e];
                r.literal || c.push(r)
              }
              let i = e.dynamicFns;
              (i && i[r] || h.static) && (c.push(r), h.dynamicFn = !0)
            } else c.push(o);
            i.push({
              source: o,
              mode: s,
              negate: a,
              customEvent: l,
              signature: h,
              dependencies: c,
              event: d
            }), n = M.lastIndex
          }
          if (n && n < t.length) {
            let e = t.substring(n);
            e && i.push({literal: e})
          }
          return i.length ? i : null
        }

        static _evaluateBinding(t, e, r, i, n, a) {
          let o;
          return o = e.signature ? H(t, r, i, 0, e.signature) : r != e.source ? (0, s.U2)(t, e.source) : a && (0, s.AZ)(r) ? (0, s.U2)(t, r) : t.__data[r], e.negate && (o = !o), o
        }
      }
    }), $ = new class {
      constructor() {
        this.stack = []
      }

      registerHost(t) {
        this.stack.length && this.stack[this.stack.length - 1]._enqueueClient(t)
      }

      beginHosting(t) {
        this.stack.push(t)
      }

      endHosting(t) {
        let e = this.stack.length;
        e && this.stack[e - 1] == t && this.stack.pop()
      }
    }
  }, 8042: (t, e, r) => {
    "use strict";
    r.d(e, {Wc: () => l, rs: () => d, t$: () => p, YA: () => h}), r(1269);
    let i = 0, n = 0, s = [], a = 0, o = document.createTextNode("");
    new window.MutationObserver((function () {
      const t = s.length;
      for (let e = 0; e < t; e++) {
        let t = s[e];
        if (t) try {
          t()
        } catch (t) {
          setTimeout(() => {
            throw t
          })
        }
      }
      s.splice(0, t), n += t
    })).observe(o, {characterData: !0});
    const l = {
      after: t => ({
        run: e => window.setTimeout(e, t), cancel(t) {
          window.clearTimeout(t)
        }
      }), run: (t, e) => window.setTimeout(t, e), cancel(t) {
        window.clearTimeout(t)
      }
    }, d = {
      run: t => window.requestAnimationFrame(t), cancel(t) {
        window.cancelAnimationFrame(t)
      }
    }, p = {
      run: t => window.requestIdleCallback ? window.requestIdleCallback(t) : window.setTimeout(t, 16), cancel(t) {
        window.cancelIdleCallback ? window.cancelIdleCallback(t) : window.clearTimeout(t)
      }
    }, h = {
      run: t => (o.textContent = a++, s.push(t), i++), cancel(t) {
        const e = t - n;
        if (e >= 0) {
          if (!s[e]) throw new Error("invalid async handle: " + t);
          s[e] = null
        }
      }
    }
  }, 1269: () => {
    "use strict";
    window.JSCompiler_renameProperty = function (t, e) {
      return t
    }
  }, 8053: (t, e, r) => {
    "use strict";
    r.d(e, {z: () => a, n: () => o}), r(1269);
    const i = {}, n = /-[a-z]/g, s = /([A-Z])/g;

    function a(t) {
      return i[t] || (i[t] = t.indexOf("-") < 0 ? t : t.replace(n, t => t[1].toUpperCase()))
    }

    function o(t) {
      return i[t] || (i[t] = t.replace(s, "-$1").toLowerCase())
    }
  }, 4451: (t, e, r) => {
    "use strict";
    r.d(e, {d: () => n}), r(1269);

    class i {
      constructor(t) {
        this.value = t.toString()
      }

      toString() {
        return this.value
      }
    }

    const n = function (t, ...e) {
      const r = document.createElement("template");
      return r.innerHTML = e.reduce((e, r, n) => e + function (t) {
        if (t instanceof HTMLTemplateElement) return t.innerHTML;
        if (t instanceof i) return function (t) {
          if (t instanceof i) return t.value;
          throw new Error("non-literal value passed to Polymer's htmlLiteral function: " + t)
        }(t);
        throw new Error("non-template value passed to Polymer's html function: " + t)
      }(r) + t[n + 1], t[0]), r
    }
  }, 5095: (t, e, r) => {
    "use strict";
    r.d(e, {o: () => s}), r(1269);
    let i = 0;

    function n() {
    }

    n.prototype.__mixinApplications, n.prototype.__mixinSet;
    const s = function (t) {
      let e = t.__mixinApplications;
      e || (e = new WeakMap, t.__mixinApplications = e);
      let r = i++;
      return function (i) {
        let n = i.__mixinSet;
        if (n && n[r]) return i;
        let s = e, a = s.get(i);
        a || (a = t(i), s.set(i, a));
        let o = Object.create(a.__mixinSet || n || null);
        return o[r] = !0, a.__mixinSet = o, a
      }
    }
  }, 8444: (t, e, r) => {
    "use strict";

    function i(t) {
      return t.indexOf(".") >= 0
    }

    function n(t) {
      let e = t.indexOf(".");
      return -1 === e ? t : t.slice(0, e)
    }

    function s(t, e) {
      return 0 === t.indexOf(e + ".")
    }

    function a(t, e) {
      return 0 === e.indexOf(t + ".")
    }

    function o(t, e, r) {
      return e + r.slice(t.length)
    }

    function l(t, e) {
      return t === e || s(t, e) || a(t, e)
    }

    function d(t) {
      if (Array.isArray(t)) {
        let e = [];
        for (let r = 0; r < t.length; r++) {
          let i = t[r].toString().split(".");
          for (let t = 0; t < i.length; t++) e.push(i[t])
        }
        return e.join(".")
      }
      return t
    }

    function p(t) {
      return Array.isArray(t) ? d(t).split(".") : t.toString().split(".")
    }

    function h(t, e, r) {
      let i = t, n = p(e);
      for (let t = 0; t < n.length; t++) {
        if (!i) return;
        i = i[n[t]]
      }
      return r && (r.path = n.join(".")), i
    }

    function c(t, e, r) {
      let i = t, n = p(e), s = n[n.length - 1];
      if (n.length > 1) {
        for (let t = 0; t < n.length - 1; t++) if (i = i[n[t]], !i) return;
        i[s] = r
      } else i[e] = r;
      return n.join(".")
    }

    r.d(e, {
      AZ: () => i,
      Jz: () => n,
      jg: () => s,
      SG: () => a,
      Iu: () => o,
      wB: () => l,
      Fv: () => d,
      U2: () => h,
      t8: () => c
    }), r(1269)
  }, 564: (t, e, r) => {
    "use strict";
    r.d(e, {Kk: () => o, Rq: () => l, iY: () => d}), r(1269);
    let i, n, s = /(url\()([^)]*)(\))/g, a = /(^\/)|(^#)|(^[\w-\d]*:)/;

    function o(t, e) {
      if (t && a.test(t)) return t;
      if (void 0 === i) {
        i = !1;
        try {
          const t = new URL("b", "http://a");
          t.pathname = "c%20d", i = "http://a/c%20d" === t.href
        } catch (t) {
        }
      }
      return e || (e = document.baseURI || window.location.href), i ? new URL(t, e).href : (n || (n = document.implementation.createHTMLDocument("temp"), n.base = n.createElement("base"), n.head.appendChild(n.base), n.anchor = n.createElement("a"), n.body.appendChild(n.anchor)), n.base.href = e, n.anchor.href = t, n.anchor.href || t)
    }

    function l(t, e) {
      return t.replace(s, (function (t, r, i, n) {
        return r + "'" + o(i.replace(/["']/g, ""), e) + "'" + n
      }))
    }

    function d(t) {
      return t.substring(0, t.lastIndexOf("/") + 1)
    }
  }, 8258: (t, e, r) => {
    "use strict";
    r.d(e, {
      my: () => n,
      sM: () => s,
      v1: () => a,
      f6: () => o,
      XN: () => l,
      ZN: () => d,
      nL: () => p,
      Hr: () => h
    }), r(1269);
    var i = r(564);
    const n = !window.ShadyDOM;
    Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss), window.customElements.polyfillWrapFlushCallback;
    let s = (0, i.iY)(document.baseURI || window.location.href),
      a = window.Polymer && window.Polymer.sanitizeDOMValue || void 0, o = !1, l = !1, d = !1, p = !1, h = !1
  }, 8661: (t, e, r) => {
    "use strict";
    r.d(e, {uT: () => p, lx: () => h, jv: () => _});
    var i = r(8804), n = r(564);
    const s = "shady-unscoped";

    function a(t) {
      return i.t.import(t)
    }

    function o(t) {
      let e = t.body ? t.body : t;
      const r = (0, n.Rq)(e.textContent, t.baseURI), i = document.createElement("style");
      return i.textContent = r, i
    }

    function l(t) {
      const e = t.trim().split(/\s+/), r = [];
      for (let t = 0; t < e.length; t++) r.push(...d(e[t]));
      return r
    }

    function d(t) {
      const e = a(t);
      if (!e) return console.warn("Could not find style data in module named", t), [];
      if (void 0 === e._styles) {
        const t = [];
        t.push(...c(e));
        const r = e.querySelector("template");
        r && t.push(...p(r, e.assetpath)), e._styles = t
      }
      return e._styles
    }

    function p(t, e) {
      if (!t._styles) {
        const r = [], i = t.content.querySelectorAll("style");
        for (let t = 0; t < i.length; t++) {
          let s = i[t], a = s.getAttribute("include");
          a && r.push(...l(a).filter((function (t, e, r) {
            return r.indexOf(t) === e
          }))), e && (s.textContent = (0, n.Rq)(s.textContent, e)), r.push(s)
        }
        t._styles = r
      }
      return t._styles
    }

    function h(t) {
      let e = a(t);
      return e ? c(e) : []
    }

    function c(t) {
      const e = [], r = t.querySelectorAll("link[rel=import][type~=css]");
      for (let t = 0; t < r.length; t++) {
        let i = r[t];
        if (i.import) {
          const t = i.import, r = i.hasAttribute(s);
          if (r && !t._unscopedStyle) {
            const e = o(t);
            e.setAttribute(s, ""), t._unscopedStyle = e
          } else t._style || (t._style = o(t));
          e.push(r ? t._unscopedStyle : t._style)
        }
      }
      return e
    }

    function _(t) {
      let e = t.trim().split(/\s+/), r = "";
      for (let t = 0; t < e.length; t++) r += u(e[t]);
      return r
    }

    function u(t) {
      let e = a(t);
      if (e && void 0 === e._cssText) {
        let t = function (t) {
          let e = "", r = c(t);
          for (let t = 0; t < r.length; t++) e += r[t].textContent;
          return e
        }(e), r = e.querySelector("template");
        r && (t += function (t, e) {
          let r = "";
          const i = p(t, e);
          for (let t = 0; t < i.length; t++) {
            let e = i[t];
            e.parentNode && e.parentNode.removeChild(e), r += e.textContent
          }
          return r
        }(r, e.assetpath)), e._cssText = t || null
      }
      return e || console.warn("Could not find style data in module named", t), e && e._cssText || ""
    }
  }, 8991: (t, e, r) => {
    "use strict";
    r.d(e, {r: () => i});
    const i = window.ShadyDOM && window.ShadyDOM.noPatch && window.ShadyDOM.wrap ? window.ShadyDOM.wrap : t => t
  }, 2450: (t, e, r) => {
    "use strict";
    r.d(e, {H3: () => n});
    var i = r(9942);
    r(4451);
    const n = (0, i.SH)(HTMLElement)
  }
}]);