/*! For license information please see 5629.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[5629],{1761:(e,t,n)=>{"use strict";function s(e,t,n){return{index:e,removed:t,addedCount:n}}function o(e,t){return function(e,t,n,o,r,i){let a,d=0,h=0,u=Math.min(n-t,i-r);if(0==t&&0==r&&(d=function(e,t,n){for(let s=0;s<n;s++)if(!l(e[s],t[s]))return s;return n}(e,o,u)),n==e.length&&i==o.length&&(h=function(e,t,n){let s=e.length,o=t.length,r=0;for(;r<n&&l(e[--s],t[--o]);)r++;return r}(e,o,u-d)),r+=d,i-=h,(n-=h)-(t+=d)==0&&i-r==0)return[];if(t==n){for(a=s(t,[],0);r<i;)a.removed.push(o[r++]);return[a]}if(r==i)return[s(t,[],n-t)];let m=function(e){let t=e.length-1,n=e[0].length-1,s=e[t][n],o=[];for(;t>0||n>0;){if(0==t){o.push(2),n--;continue}if(0==n){o.push(3),t--;continue}let l,r=e[t-1][n-1],i=e[t-1][n],a=e[t][n-1];l=i<a?i<r?i:r:a<r?a:r,l==r?(r==s?o.push(0):(o.push(1),s=r),t--,n--):l==i?(o.push(3),t--,s=i):(o.push(2),n--,s=a)}return o.reverse(),o}(function(e,t,n,s,o,r){let i=r-o+1,a=n-t+1,d=new Array(i);for(let e=0;e<i;e++)d[e]=new Array(a),d[e][0]=e;for(let e=0;e<a;e++)d[0][e]=e;for(let n=1;n<i;n++)for(let r=1;r<a;r++)if(l(e[t+r-1],s[o+n-1]))d[n][r]=d[n-1][r-1];else{let e=d[n-1][r]+1,t=d[n][r-1]+1;d[n][r]=e<t?e:t}return d}(e,t,n,o,r,i));a=void 0;let c=[],p=t,v=r;for(let e=0;e<m.length;e++)switch(m[e]){case 0:a&&(c.push(a),a=void 0),p++,v++;break;case 1:a||(a=s(p,[],0)),a.addedCount++,p++,a.removed.push(o[v]),v++;break;case 2:a||(a=s(p,[],0)),a.addedCount++,p++;break;case 3:a||(a=s(p,[],0)),a.removed.push(o[v]),v++}return a&&c.push(a),c}(e,0,e.length,t,0,t.length)}function l(e,t){return e===t}n.d(t,{c:()=>o}),n(1269)},60:(e,t,n)=>{"use strict";n.d(t,{o:()=>i}),n(1269);var s=n(1761),o=n(8042),l=n(8991);function r(e){return"slot"===e.localName}let i=class{static getFlattenedNodes(e){const t=(0,l.r)(e);return r(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>r(e)?(e=e,(0,l.r)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){r(this._target)?this._listenSlots([this._target]):(0,l.r)(this._target).children&&(this._listenSlots((0,l.r)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){r(this._target)?this._unlistenSlots([this._target]):(0,l.r)(this._target).children&&(this._unlistenSlots((0,l.r)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.YA.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=(0,s.c)(t,this._effectiveNodes);for(let t,s=0;s<n.length&&(t=n[s]);s++)for(let n,s=0;s<t.removed.length&&(n=t.removed[s]);s++)e.removedNodes.push(n);for(let s,o=0;o<n.length&&(s=n[o]);o++)for(let n=s.index;n<s.index+s.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let o=!1;return(e.addedNodes.length||e.removedNodes.length)&&(o=!0,this.callback.call(this._target,e)),o}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];r(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];r(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}},3137:(e,t,n)=>{"use strict";n.d(t,{v:()=>d});var s=n(60),o=n(2450),l=n(4225),r=n(9027);const i=e=>class extends e{static get properties(){return{inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue:function(e){return e.split("\t")},formatValue:function(e){return e.join("\t")}})},__errorId:String,__labelId:String}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.__setInputsFromSlot(),this.__observer=new s.o(this.$.slot,()=>{this.__setInputsFromSlot()});const e=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);this.addEventListener("keydown",t=>{if(9===t.keyCode){if("slot"===t.target.parentElement.localName&&!t.defaultPrevented&&e){const e=t.target.parentElement;e.setAttribute("tabindex",-1),setTimeout(()=>e.removeAttribute("tabindex"))}this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue()}}),this.addEventListener("focusin",()=>this.setAttribute("focused","")),this.addEventListener("focusout",e=>{const t=this.getRootNode().activeElement;this.inputs.some(e=>t===e||e.shadowRoot&&e.shadowRoot.contains(t))||this.removeAttribute("focused")});var t=i._uniqueId=1+i._uniqueId||1;this.__errorId=`${this.constructor.is}-error-${t}`,this.__labelId=`${this.constructor.is}-label-${t}`}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}__updateValue(e){e&&e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(e=>e.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){const t=[];let n;return"SLOT"===e.tagName?n=e.assignedNodes({flatten:!0}).filter(e=>e.nodeType===Node.ELEMENT_NODE):(t.push(e),n=Array.from(e.children)),n.forEach(e=>t.push(...this.__queryAllAssignedElements(e))),t}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>e.validate||e.checkValidity)}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__valueChanged(e,t){if(this.__settingValue||!this.inputs)return;const n=this.i18n.parseValue(e);n&&0!=n.length?(this.inputs.forEach((e,t)=>e.value=n[t]),void 0!==t&&this.validate()):console.warn("Value parser has not provided values array")}};var a=n(4451);class d extends((0,r.S)(i((0,l.T)(o.H3)))){static get template(){return a.d`
    <style>
      :host {
        display: inline-flex;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .container {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .inputs-wrapper {
        flex: none;
      }
    </style>

    <div class="container">
      <label part="label" on-click="focus" id="[[__labelId]]">[[label]]</label>
      <div class="inputs-wrapper" on-change="__updateValue">
        <slot id="slot"></slot>
      </div>
      <div part="error-message" id="[[__errorId]]" aria-live="assertive" aria-hidden\$="[[__getErrorMessageAriaHidden(invalid, errorMessage, __errorId)]]">[[errorMessage]]</div>
    </div>
`}static get is(){return"vaadin-custom-field"}static get version(){return"1.2.0"}static get properties(){return{label:{type:String,value:"",observer:"_labelChanged"},name:String,required:{type:Boolean,reflectToAttribute:!0},value:{type:String,observer:"__valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,observer:"__invalidChanged"},errorMessage:{type:String,value:""}}}static get observers(){return["__getActiveErrorId(invalid, errorMessage, __errorId)","__getActiveLabelId(label, __labelId)","__toggleHasValue(value)"]}__invalidChanged(e){this.__setOrToggleAttribute("aria-invalid",e,this)}__toggleHasValue(e){null!==e&&""!==e.trim()?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}__setOrToggleAttribute(e,t,n){e&&n&&n.hasAttribute(e)===!t&&(t?n.setAttribute(e,"boolean"==typeof t?"":t):n.removeAttribute(e))}__getActiveErrorId(e,t,n){this.__setOrToggleAttribute("aria-describedby",t&&e?n:void 0,this)}__getActiveLabelId(e,t){this.__setOrToggleAttribute("aria-labelledby",e?t:void 0,this)}__getErrorMessageAriaHidden(e,t,n){return(!(t&&e?n:void 0)).toString()}}customElements.define(d.is,d)},6803:(e,t,n)=>{"use strict";n(6224),n(1980),n(690),n(1890),n(2107);const s=n(4451).d`<dom-module id="lumo-custom-field" theme-for="vaadin-custom-field">
  <template>
    <style include="lumo-required-field">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        /* align with text-field height + vertical paddings */
        line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: 0;
      }

      :host::before {
        margin-top: var(--lumo-space-xs);
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      /* align with text-field label */
      :host([has-label]) [part="label"] {
        padding-bottom: calc(0.5em - var(--lumo-space-xs));
      }

      :host(:not([has-label])) [part="label"],
      :host(:not([has-label]))::before {
        display: none;
      }

      /* align with text-field error message */
      :host([invalid]) [part="error-message"]:not(:empty)::before {
        height: calc(0.4em - var(--lumo-space-xs));
      }

      :host([focused]:not([readonly]):not([disabled])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }

      /* Disabled style */

      :host([disabled]) [part="label"] {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content),n(3137)},5629:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CustomFieldElement:()=>s.v}),n(6803);var s=n(3137)},2107:(e,t,n)=>{"use strict";n(6224),n(690),n(9715),n(1890);const s=document.createElement("template");s.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(s.content)},1980:(e,t,n)=>{"use strict";n(6998),n(2072);const s=document.createElement("template");s.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(s.content)},690:(e,t,n)=>{"use strict";n(6998),n(2072);const s=document.createElement("template");s.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(s.content)},9715:(e,t,n)=>{"use strict";n(6998),n(2072);const s=document.createElement("template");s.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(s.content)},1890:(e,t,n)=>{"use strict";n(6998),n(2072),n(8804);const s=document.createElement("template");s.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(s.content)}}]);