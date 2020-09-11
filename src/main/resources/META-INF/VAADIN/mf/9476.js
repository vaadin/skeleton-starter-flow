/*! For license information please see 9476.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[9476],{6209:(e,t,i)=>{"use strict";i.d(t,{z:()=>r}),i(8046);var o=i(9583),s=i(8258),n=new Set;const r={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(n.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():s.my||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=(0,o.vz)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(n.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?n.delete(this):n.add(this)}}},2079:(e,t,i)=>{"use strict";i.d(t,{S:()=>u});var o=i(2450),s=i(6691),n=i(4225),r=i(266),a=i(9027),d=i(4451),l=i(6811);class u extends((0,a.S)((0,r.$)((0,n.T)((0,s._)(o.H3))))){static get template(){return d.d`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){(0,l.NH)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),(0,l.NH)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(u.is,u)},343:(e,t,i)=>{"use strict";i(6224),i(1980),i(690),i(9715),i(1890);const o=i(4451).d`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content)},266:(e,t,i)=>{"use strict";i.d(t,{$:()=>o});const o=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity="0",e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}},9476:(e,t,i)=>{"use strict";i.r(t),i.d(t,{MenuBarElement:()=>x}),i(343);var o=i(4451);const s=o.d`<dom-module id="lumo-menu-bar-button" theme-for="vaadin-menu-bar-button">
  <template>
    <style include="lumo-button">
      :host {
        margin: calc(var(--lumo-space-xs) / 2);
        margin-left: 0;
        border-radius: 0;
      }

      [part="label"] {
        width: 100%;
      }

      /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
      [part="label"] ::slotted(vaadin-context-menu-item) {
        justify-content: center;
        height: var(--lumo-button-size);
        margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="small"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        min-height: var(--lumo-size-s);
        margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="tertiary"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0 calc((var(--lumo-button-size) / 6) * -1);
        padding-left: calc(var(--lumo-button-size) / 6);
        padding-right: calc(var(--lumo-button-size) / 6);
      }

      :host([theme~="tertiary-inline"]) {
        margin-top: calc(var(--lumo-space-xs) / 2);
        margin-bottom: calc(var(--lumo-space-xs) / 2);
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([theme~="tertiary-inline"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0;
        padding: 0;
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([expanded][theme~="primary"]) {
        background-color: var(--lumo-primary-color-50pct);
      }

      :host([disabled][theme~="primary"]) {
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      :host([expanded][theme~="tertiary"]),
      :host([expanded][theme~="tertiary-inline"]) {
        background-color: var(--lumo-primary-color-10pct) !important;
      }

      :host(:first-of-type) {
        border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

        /* Needed to retain the focus-ring with border-radius */
        margin-left: calc(var(--lumo-space-xs) / 2);
      }

      :host(:nth-last-of-type(2)),
      :host([part="overflow-button"]) {
        border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
      }

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        border-radius: var(--lumo-border-radius-m);
      }

      :host([part="overflow-button"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([part="overflow-button"]) ::slotted(*) {
        font-size: var(--lumo-font-size-xl);
      }

      :host([part="overflow-button"]) [part="prefix"],
      :host([part="overflow-button"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL styles */
      :host([dir="rtl"]) {
        margin-left: calc(var(--lumo-space-xs) / 2);
        margin-right: 0;
        border-radius: 0;
      }

      :host([dir="rtl"]:first-of-type) {
        border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([dir="rtl"]:nth-last-of-type(2)),
      :host([dir="rtl"][part="overflow-button"]) {
        border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content),i(8804);var n=i(2079);const r=document.createElement("template");r.innerHTML='<dom-module id="vaadin-menu-bar-button-styles" theme-for="vaadin-menu-bar-button">\n  <template>\n    <style>\n      [part="label"] ::slotted(vaadin-context-menu-item) {\n        position: relative;\n        z-index: 1;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content);class a extends n.S{static get is(){return"vaadin-menu-bar-button"}}customElements.define(a.is,a),i(1980),i(690);const d=o.d`<dom-module id="lumo-menu-bar-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host([theme="menu-bar-item"]) [part="content"] {
        display: flex;
        /* tweak to inherit centering from menu bar button */
        align-items: inherit;
        justify-content: inherit;
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: var(--lumo-space-xs);
        box-sizing: border-box !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(d.content);const l=o.d`<dom-module id="lumo-menu-bar-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>
      :host(:first-of-type) {
        padding-top: var(--lumo-space-xs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(l.content),i(3475);var u=i(2450),h=i(4225),c=i(9027),m=i(8042),b=i(8995),p=i(6209),f=i(530);const v=e=>class extends((0,f.P)(p.z,e)){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}ready(){super.ready(),this.setAttribute("role","menubar"),this.addEventListener("iron-resize",e=>this.__onResize()),this._overflow.setAttribute("role","menuitem"),this._overflow.setAttribute("aria-haspopup","true"),this._overflow.setAttribute("aria-expanded","false")}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(e,t){e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__detectOverflow(){const e=this._container,t=this._buttons.slice(0),i=t.pop(),o=e.offsetWidth,s="rtl"===this.getAttribute("dir");if(e.offsetWidth<e.scrollWidth){let e;for(this._hasOverflow=!0,e=t.length;e>0;e--){const n=t[e-1],r=getComputedStyle(n);if("hidden"===r.visibility)continue;const a=n.offsetWidth;if(!s&&n.offsetLeft+a<o-i.offsetWidth||s&&n.offsetLeft>=i.offsetWidth)break;n.disabled=!0,n.style.visibility="hidden",n.style.position="absolute",n.style.width=r.width}i.item={children:t.filter((t,i)=>i>=e).map(e=>e.item)}}else if(this._hasOverflow){this._subMenu.opened&&this._subMenu.close();for(let e=0;e<t.length;e++){const n=t[e],r=n.getBoundingClientRect().width;if("hidden"===getComputedStyle(n).visibility){if(!(!s&&i.offsetLeft+i.offsetWidth+r<o||s&&r<i.offsetLeft))break;{n.disabled=n.item.disabled,n.style.visibility="",n.style.position="",n.style.width="";const o=n.item&&n.item.component;o instanceof HTMLElement&&o.classList.contains("vaadin-menu-item")&&(n.appendChild(o),o.classList.remove("vaadin-menu-item")),i.item={children:t.filter((t,i)=>i>=e+1).map(e=>e.item)},n===t[t.length-1]&&(this._hasOverflow=!1,i.item={children:[]})}}}}}render(){this.shadowRoot&&this.__renderButtons(this.items)}__renderButtons(e=[]){const t=this._container,i=this._overflow;for(;t.children.length>1;)t.removeChild(t.firstElementChild);e.forEach(e=>{const o=document.createElement("vaadin-menu-bar-button"),s=Object.assign({},e);o.item=s;const n=e.component;if(n){let t;const i=n instanceof HTMLElement;i&&"vaadin-context-menu-item"===n.localName?t=n:(t=document.createElement("vaadin-context-menu-item"),t.appendChild(i?n:document.createElement(n))),e.text&&((t.firstChild||t).textContent=e.text),s.component=t,t.item=s,t.setAttribute("theme","menu-bar-item"),o.appendChild(t)}else e.text&&(o.textContent=e.text);e.disabled?(o.disabled=!0,o.setAttribute("tabindex","-1")):o.setAttribute("tabindex","0"),o.item.children&&(o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded","false")),o.setAttribute("part","menu-bar-button"),this.theme&&""!==this.theme&&o.setAttribute("theme",this.theme),t.insertBefore(o,i),o.setAttribute("role","menuitem")}),this.__detectOverflow()}__onResize(){this.__debounceOverflow=b.dx.debounce(this.__debounceOverflow,m.rs,this.__detectOverflow.bind(this))}},_=e=>class extends e{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)","_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("focusin",e=>this._onFocusin(e)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));const e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));const t=this._container;t.addEventListener("click",this.__onButtonClick.bind(this)),t.addEventListener("mouseover",e=>this._onMouseOver(e))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.__boundOutsideClickListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.__boundOutsideClickListener,!0)}notifyResize(){super.notifyResize()}get __isRTL(){return"rtl"===this.getAttribute("dir")}_themeChanged(e){e?(this._buttons.forEach(t=>t.setAttribute("theme",e)),this._subMenu.setAttribute("theme",e)):(this._buttons.forEach(e=>e.removeAttribute("theme")),this._subMenu.removeAttribute("theme"))}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(e=>"vaadin-menu-bar-button"===e.localName)[0]}_onFocusin(e){const t=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');t&&this._buttons.forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}_onKeydown(e){const t=this._getButtonFromEvent(e);t&&(40===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusFirstItem():this.__openSubMenu(t,e)):38===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusLastItem():this.__openSubMenu(t,e,{focusLast:!0})):27===e.keyCode&&t===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){const t=e.key.replace(/^Arrow/,""),i=this._buttons,o=this.shadowRoot.activeElement||this._expandedButton,s=i.indexOf(o);let n,r;const a=this.__isRTL?-1:1;switch(t){case"Left":r=-a,n=s-a;break;case"Right":r=a,n=s+a;break;case"Home":r=1,n=0;break;case"End":r=-1,n=i.length-1}if(n=this._getAvailableIndex(n,r,i),n>=0){e.preventDefault();const t=i[n],s=o===this._expandedButton;s&&this._close(),this._focusButton(t),s&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}_getAvailableIndex(e,t,i){const o=i.length;let s=e;for(let e=0;"number"==typeof s&&e<o;e++,s+=t||1){s<0?s=o-1:s>=o&&(s=0);const e=i[s];if(!e.disabled&&!e.hasAttribute("hidden"))return s}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(!this._expandedButton)return;const t=e.target,{width:i,height:o,left:s}=this._expandedButton.getBoundingClientRect();t.hasAttribute("bottom-aligned")&&(t.style.bottom=parseInt(getComputedStyle(t).bottom)+o+"px"),t.hasAttribute("end-aligned")&&(this.__isRTL?t.style.left=s+"px":t.style.right=parseInt(getComputedStyle(t).right)-i+"px")}_itemsChanged(e,t){const i=this._subMenu;i&&i.opened&&i.close()}_onMouseOver(e){const t=this._getButtonFromEvent(e);if(t&&t!==this._expandedButton){const i=this._subMenu.opened;t.item.children&&(this.openOnHover||i)?this.__openSubMenu(t,e):i&&this._close()}}__onContextMenuKeydown(e){const t=Array.from(e.composedPath()).filter(e=>e._item)[0];if(t){const i=t.parentNode;if(38===e.keyCode&&t===i.items[0]&&this._close(!0),37===e.keyCode||39===e.keyCode&&!t._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);const t=this.shadowRoot.activeElement;t&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const t=this._getButtonFromEvent(e);t&&this.__openSubMenu(t,e)}__openSubMenu(e,t,i={}){const o=this._subMenu,s=e.item;if(o.opened&&(this._close(),o.listenOn===e))return;const n=s&&s.children;if(!n||0===n.length)return void this.__fireItemSelected(s);o.items=n,o.listenOn=e,this._expandedButton=e;const r=e.getBoundingClientRect();requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:this.__isRTL?r.right:r.left,y:r.bottom,children:n}})),e.setAttribute("expanded",""),e.setAttribute("aria-expanded","true")}),i.focusLast&&this.__onceOpened(()=>this._focusLastItem()),i.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),"keydown"!==t.type&&this.__onceOpened(()=>{o.$.overlay.$.overlay.focus()})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,t=e.items[e.items.length-1];t&&t.focus()}__onceOpened(e){this.style.pointerEvents="auto";const t=this._subMenu.$.overlay,i=()=>{e(),t.removeEventListener("vaadin-overlay-open",i)};t.addEventListener("vaadin-overlay-open",i)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(e){this.__deactivateButton(!0)}__deactivateButton(e){const t=this._expandedButton;t&&t.hasAttribute("expanded")&&(t.removeAttribute("expanded"),t.setAttribute("aria-expanded","false"),e&&this._focusButton(t),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}};var y=i(2262);class g extends y.h{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(g.is,g);class x extends(v(_((0,c.S)((0,h.T)(u.H3))))){static get template(){return o.d`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="container"] {
        position: relative;
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        overflow: hidden;
      }

      [part\$="button"] {
        flex-shrink: 0;
      }

      [part="overflow-button"] {
        margin-right: 0;
      }

      .dots::before {
        display: block;
        content: "\\00B7\\00B7\\00B7";
        font-size: inherit;
        line-height: inherit;
      }
    </style>

    <div part="container">
      <vaadin-menu-bar-button part="overflow-button" hidden\$="[[!_hasOverflow]]">
        <div class="dots"></div>
      </vaadin-menu-bar-button>
    </div>
    <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>
`}static get is(){return"vaadin-menu-bar"}static get version(){return"1.2.0"}static get properties(){return{items:{type:Array,value:()=>[]}}}}customElements.define(x.is,x)}}]);