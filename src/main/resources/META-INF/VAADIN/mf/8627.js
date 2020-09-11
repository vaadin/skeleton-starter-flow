/*! For license information please see 8627.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[8627],{1761:(e,t,s)=>{"use strict";function i(e,t,s){return{index:e,removed:t,addedCount:s}}function r(e,t){return function(e,t,s,r,o,a){let n,d=0,c=0,h=Math.min(s-t,a-o);if(0==t&&0==o&&(d=function(e,t,s){for(let i=0;i<s;i++)if(!l(e[i],t[i]))return i;return s}(e,r,h)),s==e.length&&a==r.length&&(c=function(e,t,s){let i=e.length,r=t.length,o=0;for(;o<s&&l(e[--i],t[--r]);)o++;return o}(e,r,h-d)),o+=d,a-=c,(s-=c)-(t+=d)==0&&a-o==0)return[];if(t==s){for(n=i(t,[],0);o<a;)n.removed.push(r[o++]);return[n]}if(o==a)return[i(t,[],s-t)];let u=function(e){let t=e.length-1,s=e[0].length-1,i=e[t][s],r=[];for(;t>0||s>0;){if(0==t){r.push(2),s--;continue}if(0==s){r.push(3),t--;continue}let l,o=e[t-1][s-1],a=e[t-1][s],n=e[t][s-1];l=a<n?a<o?a:o:n<o?n:o,l==o?(o==i?r.push(0):(r.push(1),i=o),t--,s--):l==a?(r.push(3),t--,i=a):(r.push(2),s--,i=n)}return r.reverse(),r}(function(e,t,s,i,r,o){let a=o-r+1,n=s-t+1,d=new Array(a);for(let e=0;e<a;e++)d[e]=new Array(n),d[e][0]=e;for(let e=0;e<n;e++)d[0][e]=e;for(let s=1;s<a;s++)for(let o=1;o<n;o++)if(l(e[t+o-1],i[r+s-1]))d[s][o]=d[s-1][o-1];else{let e=d[s-1][o]+1,t=d[s][o-1]+1;d[s][o]=e<t?e:t}return d}(e,t,s,r,o,a));n=void 0;let m=[],p=t,v=o;for(let e=0;e<u.length;e++)switch(u[e]){case 0:n&&(m.push(n),n=void 0),p++,v++;break;case 1:n||(n=i(p,[],0)),n.addedCount++,p++,n.removed.push(r[v]),v++;break;case 2:n||(n=i(p,[],0)),n.addedCount++,p++;break;case 3:n||(n=i(p,[],0)),n.removed.push(r[v]),v++}return n&&m.push(n),m}(e,0,e.length,t,0,t.length)}function l(e,t){return e===t}s.d(t,{c:()=>r}),s(1269)},60:(e,t,s)=>{"use strict";s.d(t,{o:()=>a}),s(1269);var i=s(1761),r=s(8042),l=s(8991);function o(e){return"slot"===e.localName}let a=class{static getFlattenedNodes(e){const t=(0,l.r)(e);return o(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>o(e)?(e=e,(0,l.r)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):(0,l.r)(this._target).children&&(this._listenSlots((0,l.r)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):(0,l.r)(this._target).children&&(this._unlistenSlots((0,l.r)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,r.YA.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let s=e[t];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),s=(0,i.c)(t,this._effectiveNodes);for(let t,i=0;i<s.length&&(t=s[i]);i++)for(let s,i=0;i<t.removed.length&&(s=t.removed[i]);i++)e.removedNodes.push(s);for(let i,r=0;r<s.length&&(i=s[r]);r++)for(let s=i.index;s<i.index+i.addedCount;s++)e.addedNodes.push(t[s]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];o(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];o(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}}},9346:(e,t,s)=>{"use strict";s.d(t,{W:()=>d});var i=s(7184),r=s(2450),l=s(4225);const o=e=>class extends((0,i.z)(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,s,i){if(!e||!t)return;if(i){const t=i.map(t=>e[t]);e.forEach(e=>e.selected=-1!==t.indexOf(e))}const r=this.selectedValues.slice(-1)[0];r&&!r.disabled&&this._scrollToItem(r)}_onMultipleClick(e){const t=this._filterItems(e.composedPath())[0],s=t&&!t.disabled?this.items.indexOf(t):-1;s<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(s)?this.selectedValues=this.selectedValues.filter(e=>e!==s):this.selectedValues=this.selectedValues.concat(s))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}};var a=s(9027),n=s(4451);class d extends((0,a.S)(o((0,l.T)(r.H3)))){static get template(){return n.d`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.4.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof r.H3||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(d.is,d)},7805:(e,t,s)=>{"use strict";s(6224),s(690),s(9715);const i=s(4451).d`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(i.content),s(9346)},8627:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ListBoxElement:()=>i.W}),s(7805);var i=s(9346)},7184:(e,t,s)=>{"use strict";s.d(t,{z:()=>a});var i=s(60),r=s(5328),l=s(8995),o=s(8042);const a=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new i.o(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,s,i){if(!i&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(s);const i=e[s];e.forEach(e=>e.selected=e===i),i&&!i.disabled&&this._scrollToItem(s)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let s;t&&!t.disabled&&(s=this.items.indexOf(t))>=0&&(this.selected=s)}_searchKey(e,t){this._searchReset=l.dx.debounce(this._searchReset,o.Wc.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase(),this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const s=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(s,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),s=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(s,t);return void(e>=0&&this._focus(e))}let i,r;const l=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(r=-l,i=s-l):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(r=l,i=s+l):"Home"===t?(r=1,i=0):"End"===t&&(r=-1,i=this.items.length-1),i=this._getAvailableIndex(i,r,e=>!(e.disabled||this._isItemHidden(e))),i>=0&&(this._focus(i),e.preventDefault())}_getAvailableIndex(e,t,s){const i=this.items.length;for(let r=0;"number"==typeof e&&r<i;r++,e+=t||1)if(e<0?e=i-1:e>=i&&(e=0),s(this.items[e]))return e;return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const s=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],i=this._scrollerElement.getBoundingClientRect(),r=(this.items[e+1]||t).getBoundingClientRect(),l=(this.items[e-1]||t).getBoundingClientRect();let o=0;!this._isRTL&&r[s[1]]>=i[s[1]]||this._isRTL&&r[s[1]]<=i[s[1]]?o=r[s[1]]-i[s[1]]:(!this._isRTL&&l[s[0]]<=i[s[0]]||this._isRTL&&l[s[0]]>=i[s[0]])&&(o=l[s[0]]-i[s[0]]),this._scroll(o)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=r.z.detectScrollType(),s=r.z.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;r.z.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,s)}}}},690:(e,t,s)=>{"use strict";s(6998),s(2072);const i=document.createElement("template");i.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(i.content)},9715:(e,t,s)=>{"use strict";s(6998),s(2072);const i=document.createElement("template");i.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(i.content)}}]);