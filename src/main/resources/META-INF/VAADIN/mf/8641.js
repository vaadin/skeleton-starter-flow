/*! For license information please see 8641.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[8641],{1761:(e,t,n)=>{"use strict";function o(e,t,n){return{index:e,removed:t,addedCount:n}}function s(e,t){return function(e,t,n,s,l,i){let a,d=0,h=0,c=Math.min(n-t,i-l);if(0==t&&0==l&&(d=function(e,t,n){for(let o=0;o<n;o++)if(!r(e[o],t[o]))return o;return n}(e,s,c)),n==e.length&&i==s.length&&(h=function(e,t,n){let o=e.length,s=t.length,l=0;for(;l<n&&r(e[--o],t[--s]);)l++;return l}(e,s,c-d)),l+=d,i-=h,(n-=h)-(t+=d)==0&&i-l==0)return[];if(t==n){for(a=o(t,[],0);l<i;)a.removed.push(s[l++]);return[a]}if(l==i)return[o(t,[],n-t)];let u=function(e){let t=e.length-1,n=e[0].length-1,o=e[t][n],s=[];for(;t>0||n>0;){if(0==t){s.push(2),n--;continue}if(0==n){s.push(3),t--;continue}let r,l=e[t-1][n-1],i=e[t-1][n],a=e[t][n-1];r=i<a?i<l?i:l:a<l?a:l,r==l?(l==o?s.push(0):(s.push(1),o=l),t--,n--):r==i?(s.push(3),t--,o=i):(s.push(2),n--,o=a)}return s.reverse(),s}(function(e,t,n,o,s,l){let i=l-s+1,a=n-t+1,d=new Array(i);for(let e=0;e<i;e++)d[e]=new Array(a),d[e][0]=e;for(let e=0;e<a;e++)d[0][e]=e;for(let n=1;n<i;n++)for(let l=1;l<a;l++)if(r(e[t+l-1],o[s+n-1]))d[n][l]=d[n-1][l-1];else{let e=d[n-1][l]+1,t=d[n][l-1]+1;d[n][l]=e<t?e:t}return d}(e,t,n,s,l,i));a=void 0;let m=[],v=t,p=l;for(let e=0;e<u.length;e++)switch(u[e]){case 0:a&&(m.push(a),a=void 0),v++,p++;break;case 1:a||(a=o(v,[],0)),a.addedCount++,v++,a.removed.push(s[p]),p++;break;case 2:a||(a=o(v,[],0)),a.addedCount++,v++;break;case 3:a||(a=o(v,[],0)),a.removed.push(s[p]),p++}return a&&m.push(a),m}(e,0,e.length,t,0,t.length)}function r(e,t){return e===t}n.d(t,{c:()=>s}),n(1269)},60:(e,t,n)=>{"use strict";n.d(t,{o:()=>i}),n(1269);var o=n(1761),s=n(8042),r=n(8991);function l(e){return"slot"===e.localName}let i=class{static getFlattenedNodes(e){const t=(0,r.r)(e);return l(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>l(e)?(e=e,(0,r.r)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){l(this._target)?this._listenSlots([this._target]):(0,r.r)(this._target).children&&(this._listenSlots((0,r.r)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){l(this._target)?this._unlistenSlots([this._target]):(0,r.r)(this._target).children&&(this._unlistenSlots((0,r.r)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,s.YA.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=(0,o.c)(t,this._effectiveNodes);for(let t,o=0;o<n.length&&(t=n[o]);o++)for(let n,o=0;o<t.removed.length&&(n=t.removed[o]);o++)e.removedNodes.push(n);for(let o,s=0;s<n.length&&(o=n[s]);s++)for(let n=o.index;n<o.index+o.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let s=!1;return(e.addedNodes.length||e.removedNodes.length)&&(s=!0,this.callback.call(this._target,e)),s}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];l(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];l(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}},8641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CheckboxGroupElement:()=>h}),n(5418),n(6224),n(2107);var o=n(4451);const s=o.d`<dom-module id="lumo-checkbox-group" theme-for="vaadin-checkbox-group">
  <template>
    <style include="lumo-required-field">
      :host {
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-size-m);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([theme~="vertical"]) [part="group-field"] {
        display: flex;
        flex-direction: column;
      }

      [part="label"] {
        padding-bottom: 0.7em;
      }

      :host([disabled]) [part="label"] {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      :host([focused]:not([disabled])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([disabled]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([disabled]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);var r=n(2450),l=n(60),i=n(4225),a=n(6426),d=n(4407);class h extends((0,i.T)((0,a.U)(r.H3))){static get template(){return o.d`
    <style>
      :host {
        display: inline-flex;

        /* Prevent horizontal overflow in IE 11 instead of wrapping checkboxes */
        max-width: 100%;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-group-field-container {
        display: flex;
        flex-direction: column;

        /* Prevent horizontal overflow in IE 11 instead of wrapping checkboxes */
        width: 100%;
      }

      [part="label"]:empty {
        display: none;
      }
    </style>

    <div class="vaadin-group-field-container">
      <label part="label">[[label]]</label>

      <div part="group-field">
        <slot id="slot"></slot>
      </div>

      <div part="error-message" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-checkbox-group"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},label:{type:String,value:"",observer:"_labelChanged"},value:{type:Array,value:()=>[],notify:!0},errorMessage:{type:String,value:""},required:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1}}}static get observers(){return["_updateValue(value, value.splices)"]}ready(){super.ready(),this.addEventListener("focusin",()=>this._setFocused(this._containsFocus())),this.addEventListener("focusout",e=>{this._checkboxes.some(t=>e.relatedTarget===t||t.shadowRoot.contains(e.relatedTarget))||(this.validate(),this._setFocused(!1))});const e=e=>{this._changeSelectedCheckbox(e.target)};this._observer=new l.o(this,t=>{const n=this._filterCheckboxes(t.addedNodes);n.forEach(t=>{t.addEventListener("checked-changed",e),this.disabled&&(t.disabled=!0),t.checked?this._addCheckboxToValue(t.value):this.value.indexOf(t.value)>-1&&(t.checked=!0)}),this._filterCheckboxes(t.removedNodes).forEach(t=>{t.removeEventListener("checked-changed",e),t.checked&&this._removeCheckboxFromValue(t.value)}),n.every(e=>{const{value:t}=e;return e.hasAttribute("value")||t&&"on"!==t})||console.warn("Please add value attribute to all checkboxes in checkbox group")})}validate(){return this.invalid=this.required&&0===this.value.length,!this.invalid}get _checkboxes(){return this._filterCheckboxes(this.querySelectorAll("*"))}_filterCheckboxes(e){return Array.from(e).filter(e=>e instanceof d.Z)}_disabledChanged(e){this.setAttribute("aria-disabled",e),this._checkboxes.forEach(t=>t.disabled=e)}_addCheckboxToValue(e){-1===this.value.indexOf(e)&&(this.value=this.value.concat(e))}_removeCheckboxFromValue(e){this.value=this.value.filter(t=>t!==e)}_changeSelectedCheckbox(e){this._updatingValue||(e.checked?this._addCheckboxToValue(e.value):this._removeCheckboxFromValue(e.value))}_updateValue(e,t){0===e.length&&void 0===this._oldValue||(e.length?this.setAttribute("has-value",""):this.removeAttribute("has-value"),this._oldValue=e,this._updatingValue=!0,this._checkboxes.forEach(t=>{t.checked=e.indexOf(t.value)>-1}),this._updatingValue=!1,this.validate())}_labelChanged(e){e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_getErrorMessageAriaHidden(e,t){return(!t||!e).toString()}_containsFocus(){const e=this.getRootNode(),t=void 0!==e._activeElement?e._activeElement:e.activeElement;return this.contains(t)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused")}}customElements.define(h.is,h)},2107:(e,t,n)=>{"use strict";n(6224),n(690),n(9715),n(1890);const o=document.createElement("template");o.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},690:(e,t,n)=>{"use strict";n(6998),n(2072);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},1890:(e,t,n)=>{"use strict";n(6998),n(2072),n(8804);const o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)}}]);