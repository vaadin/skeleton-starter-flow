/*! For license information please see 5777.js.LICENSE.txt */
(self.webpackChunkcomponents_demo = self.webpackChunkcomponents_demo || []).push([[5777], {
  5777: (e, t, s) => {
    "use strict";
    var i = s(2450), n = s(8201), r = s(8995), _ = s(1492), h = s(7618), o = s(8444), a = s(8042), l = s(8991);
    const d = (0, h.w)(i.H3);

    class u extends d {
      static get is() {
        return "dom-repeat"
      }

      static get template() {
        return null
      }

      static get properties() {
        return {
          items: {type: Array},
          as: {type: String, value: "item"},
          indexAs: {type: String, value: "index"},
          itemsIndexAs: {type: String, value: "itemsIndex"},
          sort: {type: Function, observer: "__sortChanged"},
          filter: {type: Function, observer: "__filterChanged"},
          observe: {type: String, observer: "__observeChanged"},
          delay: Number,
          renderedItemCount: {type: Number, notify: !0, readOnly: !0},
          initialCount: {type: Number, observer: "__initializeChunking"},
          targetFramerate: {type: Number, value: 20},
          _targetFrameTime: {type: Number, computed: "__computeFrameTime(targetFramerate)"}
        }
      }

      static get observers() {
        return ["__itemsChanged(items.*)"]
      }

      constructor() {
        super(), this.__instances = [], this.__limit = 1 / 0, this.__pool = [], this.__renderDebouncer = null, this.__itemsIdxToInstIdx = {}, this.__chunkCount = null, this.__lastChunkTime = null, this.__sortFn = null, this.__filterFn = null, this.__observePaths = null, this.__ctor = null, this.__isDetached = !0, this.template = null
      }

      disconnectedCallback() {
        super.disconnectedCallback(), this.__isDetached = !0;
        for (let e = 0; e < this.__instances.length; e++) this.__detachInstance(e)
      }

      connectedCallback() {
        if (super.connectedCallback(), this.style.display = "none", this.__isDetached) {
          this.__isDetached = !1;
          let e = (0, l.r)((0, l.r)(this).parentNode);
          for (let t = 0; t < this.__instances.length; t++) this.__attachInstance(t, e)
        }
      }

      __ensureTemplatized() {
        if (!this.__ctor) {
          let e = this.template = this.querySelector("template");
          if (!e) {
            let e = new MutationObserver(() => {
              if (!this.querySelector("template")) throw new Error("dom-repeat requires a <template> child");
              e.disconnect(), this.__render()
            });
            return e.observe(this, {childList: !0}), !1
          }
          let t = {};
          t[this.as] = !0, t[this.indexAs] = !0, t[this.itemsIndexAs] = !0, this.__ctor = (0, n.Uv)(e, this, {
            mutableData: this.mutableData,
            parentModel: !0,
            instanceProps: t,
            forwardHostProp: function (e, t) {
              let s = this.__instances;
              for (let i, n = 0; n < s.length && (i = s[n]); n++) i.forwardHostProp(e, t)
            },
            notifyInstanceProp: function (e, t, s) {
              if ((0, o.wB)(this.as, t)) {
                let i = e[this.itemsIndexAs];
                t == this.as && (this.items[i] = s);
                let n = (0, o.Iu)(this.as, `${JSCompiler_renameProperty("items", this)}.${i}`, t);
                this.notifyPath(n, s)
              }
            }
          })
        }
        return !0
      }

      __getMethodHost() {
        return this.__dataHost._methodHost || this.__dataHost
      }

      __functionFromPropertyValue(e) {
        if ("string" == typeof e) {
          let t = e, s = this.__getMethodHost();
          return function () {
            return s[t].apply(s, arguments)
          }
        }
        return e
      }

      __sortChanged(e) {
        this.__sortFn = this.__functionFromPropertyValue(e), this.items && this.__debounceRender(this.__render)
      }

      __filterChanged(e) {
        this.__filterFn = this.__functionFromPropertyValue(e), this.items && this.__debounceRender(this.__render)
      }

      __computeFrameTime(e) {
        return Math.ceil(1e3 / e)
      }

      __initializeChunking() {
        this.initialCount && (this.__limit = this.initialCount, this.__chunkCount = this.initialCount, this.__lastChunkTime = performance.now())
      }

      __tryRenderChunk() {
        this.items && this.__limit < this.items.length && this.__debounceRender(this.__requestRenderChunk)
      }

      __requestRenderChunk() {
        requestAnimationFrame(() => this.__renderChunk())
      }

      __renderChunk() {
        let e = performance.now(), t = this._targetFrameTime / (e - this.__lastChunkTime);
        this.__chunkCount = Math.round(this.__chunkCount * t) || 1, this.__limit += this.__chunkCount, this.__lastChunkTime = e, this.__debounceRender(this.__render)
      }

      __observeChanged() {
        this.__observePaths = this.observe && this.observe.replace(".*", ".").split(" ")
      }

      __itemsChanged(e) {
        this.items && !Array.isArray(this.items) && console.warn("dom-repeat expected array for `items`, found", this.items), this.__handleItemPath(e.path, e.value) || (this.__initializeChunking(), this.__debounceRender(this.__render))
      }

      __handleObservedPaths(e) {
        if (this.__sortFn || this.__filterFn) if (e) {
          if (this.__observePaths) {
            let t = this.__observePaths;
            for (let s = 0; s < t.length; s++) 0 === e.indexOf(t[s]) && this.__debounceRender(this.__render, this.delay)
          }
        } else this.__debounceRender(this.__render, this.delay)
      }

      __debounceRender(e, t = 0) {
        this.__renderDebouncer = r.dx.debounce(this.__renderDebouncer, t > 0 ? a.Wc.after(t) : a.YA, e.bind(this)), (0, _.E)(this.__renderDebouncer)
      }

      render() {
        this.__debounceRender(this.__render), (0, _.y)()
      }

      __render() {
        this.__ensureTemplatized() && (this.__applyFullRefresh(), this.__pool.length = 0, this._setRenderedItemCount(this.__instances.length), this.dispatchEvent(new CustomEvent("dom-change", {
          bubbles: !0,
          composed: !0
        })), this.__tryRenderChunk())
      }

      __applyFullRefresh() {
        let e = this.items || [], t = new Array(e.length);
        for (let s = 0; s < e.length; s++) t[s] = s;
        this.__filterFn && (t = t.filter((t, s, i) => this.__filterFn(e[t], s, i))), this.__sortFn && t.sort((t, s) => this.__sortFn(e[t], e[s]));
        const s = this.__itemsIdxToInstIdx = {};
        let i = 0;
        const n = Math.min(t.length, this.__limit);
        for (; i < n; i++) {
          let n = this.__instances[i], r = t[i], _ = e[r];
          s[r] = i, n ? (n._setPendingProperty(this.as, _), n._setPendingProperty(this.indexAs, i), n._setPendingProperty(this.itemsIndexAs, r), n._flushProperties()) : this.__insertInstance(_, i, r)
        }
        for (let e = this.__instances.length - 1; e >= i; e--) this.__detachAndRemoveInstance(e)
      }

      __detachInstance(e) {
        let t = this.__instances[e];
        const s = (0, l.r)(t.root);
        for (let e = 0; e < t.children.length; e++) {
          let i = t.children[e];
          s.appendChild(i)
        }
        return t
      }

      __attachInstance(e, t) {
        let s = this.__instances[e];
        t.insertBefore(s.root, this)
      }

      __detachAndRemoveInstance(e) {
        let t = this.__detachInstance(e);
        t && this.__pool.push(t), this.__instances.splice(e, 1)
      }

      __stampInstance(e, t, s) {
        let i = {};
        return i[this.as] = e, i[this.indexAs] = t, i[this.itemsIndexAs] = s, new this.__ctor(i)
      }

      __insertInstance(e, t, s) {
        let i = this.__pool.pop();
        i ? (i._setPendingProperty(this.as, e), i._setPendingProperty(this.indexAs, t), i._setPendingProperty(this.itemsIndexAs, s), i._flushProperties()) : i = this.__stampInstance(e, t, s);
        let n = this.__instances[t + 1], r = n ? n.children[0] : this;
        return (0, l.r)((0, l.r)(this).parentNode).insertBefore(i.root, r), this.__instances[t] = i, i
      }

      _showHideChildren(e) {
        for (let t = 0; t < this.__instances.length; t++) this.__instances[t]._showHideChildren(e)
      }

      __handleItemPath(e, t) {
        let s = e.slice(6), i = s.indexOf("."), n = i < 0 ? s : s.substring(0, i);
        if (n == parseInt(n, 10)) {
          let e = i < 0 ? "" : s.substring(i + 1);
          this.__handleObservedPaths(e);
          let r = this.__itemsIdxToInstIdx[n], _ = this.__instances[r];
          if (_) {
            let s = this.as + (e ? "." + e : "");
            _._setPendingPropertyOrPath(s, t, !1, !0), _._flushProperties()
          }
          return !0
        }
      }

      itemForElement(e) {
        let t = this.modelForElement(e);
        return t && t[this.as]
      }

      indexForElement(e) {
        let t = this.modelForElement(e);
        return t && t[this.indexAs]
      }

      modelForElement(e) {
        return (0, n.GJ)(this.template, e)
      }
    }

    try {
      customElements.define(u.is, u)
    }catch(e){}
  }
}]);