/*! For license information please see 4813.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[4813],{4813:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FormItemElement:()=>i}),n(6224),n(690),n(9715),n(1890);var o=n(4451);const l=o.d`<dom-module id="lumo-form-item" theme-for="vaadin-form-item">
  <template>
    <style>
      :host {
        --vaadin-form-item-row-spacing: 0;
      }

      /* font-weight, margin-bottom, transition and line-height same values as for part label in text-field */
      [part="label"] {
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
        margin-top: var(--lumo-space-m);
        margin-left: calc(var(--lumo-border-radius) / 4);
        margin-bottom: var(--lumo-space-xs);
        transition: color 0.4s;
        line-height: 1.333;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(l.content);var a=n(2450),s=n(4225);class i extends((0,s.T)(a.H3)){static get template(){return o.d`
    <style>
      :host {
        display: inline-flex;
        flex-direction: row;
        align-items: baseline;

        /* CSS API for host */
        --vaadin-form-item-label-width: 8em;
        --vaadin-form-item-label-spacing: 1em;
        --vaadin-form-item-row-spacing: 1em;

        margin: calc(0.5 * var(--vaadin-form-item-row-spacing)) 0;
      }

      :host([label-position="top"]) {
        flex-direction: column;
        align-items: stretch;
      }

      :host([hidden]) {
        display: none !important;
      }

      #label {
        width: var(--vaadin-form-item-label-width);
        flex: 0 0 auto;
      }

      :host([label-position="top"]) #label {
        width: auto;
      }

      #spacing {
        width: var(--vaadin-form-item-label-spacing);
        flex: 0 0 auto;
      }

      #content {
        flex: 1 1 auto;
      }

      #content ::slotted(.full-width) {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
      }
    </style>
    <div id="label" part="label" on-click="_onLabelClick">
      <slot name="label" id="labelSlot"></slot>
    </div>
    <div id="spacing"></div>
    <div id="content">
      <slot id="contentSlot"></slot>
    </div>
`}static get is(){return"vaadin-form-item"}static get properties(){return{}}_onLabelClick(e){const t=Array.prototype.filter.call(this.$.contentSlot.assignedNodes(),e=>e.nodeType===Node.ELEMENT_NODE)[0];t&&(t.focus(),t.click())}}customElements.define(i.is,i)},690:(e,t,n)=>{"use strict";n(6998),n(2072);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},9715:(e,t,n)=>{"use strict";n(6998),n(2072);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},1890:(e,t,n)=>{"use strict";n(6998),n(2072),n(8804);const o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},4225:(e,t,n)=>{"use strict";n.d(t,{T:()=>a});var o=n(8804),l=n(7112);const a=e=>class extends((0,l.I)(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!t&&Array.from(n.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=o.t.prototype.modules;let n=!1;const l=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const n=0===e.indexOf("vaadin-"),o=0===t.indexOf("vaadin-"),l=["lumo-","material-"],a=l.filter(t=>0===e.indexOf(t)).length>0,s=l.filter(e=>0===t.indexOf(e)).length>0;return n!==o?n?-1:1:a!==s?a?-1:1:0}).forEach(o=>{if(o!==l){const l=t[o].getAttribute("theme-for");l&&l.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(o,e))})}}),!n&&t[l]&&this._includeStyle(l,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const n=document.createElement("style");n.setAttribute("include",e),t.content.appendChild(n)}}}},7112:(e,t,n)=>{"use strict";n.d(t,{I:()=>o});const o=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"theme"===e&&this._setTheme(n)}}}}]);