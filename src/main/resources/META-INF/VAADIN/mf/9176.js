/*! For license information please see 9176.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[9176],{2072:(e,t,s)=>{"use strict";var o=s(3720),a=s(8425),l=s(874);const n=new o.ZP;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,s){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,s){},styleSubtree(e,t){n.processStyles(),(0,a.wW)(e,t)},styleElement(e){n.processStyles()},styleDocument(e){n.processStyles(),(0,a.wW)(document.body,e)},getComputedStyleValue:(e,t)=>(0,a.B7)(e,t),flushCustomStyles(){},nativeCss:l.rd,nativeShadow:l.WA,cssBuild:l.Cp,disableRuntime:l.jF}),window.ShadyCSS.CustomStyleInterface=n;var r=s(8661);const i="include",m=window.ShadyCSS.CustomStyleInterface;class c extends HTMLElement{constructor(){super(),this._style=null,m.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(i);return t&&(e.removeAttribute(i),e.textContent=(0,r.jv)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},690:(e,t,s)=>{"use strict";s(6998),s(2072);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},6998:(e,t,s)=>{"use strict";class o extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",o)},673:(e,t,s)=>{"use strict";s(690);const o=document.createElement("template");o.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},9176:(e,t,s)=>{"use strict";s.r(t),s.d(t,{HorizontalLayoutElement:()=>i}),s(690),s(673);var o=s(4451);const a=o.d`<dom-module id="lumo-horizontal-layout" theme-for="vaadin-horizontal-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-s);
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing-xs"])::before,
      :host([theme~="spacing-s"])::before,
      :host([theme~="spacing"])::before,
      :host([theme~="spacing-l"])::before,
      :host([theme~="spacing-xl"])::before {
        content: "";
      }

      :host([theme~="spacing-xs"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xs) * -1);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-s) * -1);
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xl) * -1);
      }

      /* RTL styles */
      :host([dir="rtl"][theme~="spacing-xs"]) ::slotted(*) {
        margin-right: var(--lumo-space-xs);
      }

      :host([dir="rtl"][theme~="spacing-s"]) ::slotted(*) {
        margin-right: var(--lumo-space-s);
      }

      :host([dir="rtl"][theme~="spacing"]) ::slotted(*) {
        margin-right: var(--lumo-space-m);
      }

      :host([dir="rtl"][theme~="spacing-l"]) ::slotted(*) {
        margin-right: var(--lumo-space-l);
      }

      :host([dir="rtl"][theme~="spacing-xl"]) ::slotted(*) {
        margin-right: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([dir="rtl"][theme~="spacing-xs"])::before {
        margin-right: calc(var(--lumo-space-xs) * -1);
      }

      :host([dir="rtl"][theme~="spacing-s"])::before {
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"][theme~="spacing"])::before {
        margin-right: calc(var(--lumo-space-m) * -1);
      }

      :host([dir="rtl"][theme~="spacing-l"])::before {
        margin-right: calc(var(--lumo-space-l) * -1);
      }

      :host([dir="rtl"][theme~="spacing-xl"])::before {
        margin-right: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);var l=s(2450),n=s(4225),r=s(9027);class i extends((0,r.S)((0,n.T)(l.H3))){static get template(){return o.d`
    <style>
      :host {
        display: flex;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: 1em;
      }

      :host([theme~="spacing"][dir="rtl"]) ::slotted(*) {
        margin-right: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: -1em;
      }

      :host([theme~="spacing"][dir="rtl"])::before {
        margin-right: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-horizontal-layout"}static get version(){return"1.4.0"}}customElements.define(i.is,i)},7244:(e,t,s)=>{"use strict";s.d(t,{CN:()=>o,$T:()=>a,mA:()=>l});const o=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,a=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,l=/@media\s(.*)/},8425:(e,t,s)=>{"use strict";s.d(t,{wW:()=>a,B7:()=>l,OH:()=>n});var o=s(7244);function a(e,t){for(let s in t)null===s?e.style.removeProperty(s):e.style.setProperty(s,t[s])}function l(e,t){const s=window.getComputedStyle(e).getPropertyValue(t);return s?s.trim():""}function n(e){const t=o.$T.test(e)||o.CN.test(e);return o.$T.lastIndex=0,o.CN.lastIndex=0,t}},3720:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>d});let o,a=null,l=window.HTMLImports&&window.HTMLImports.whenReady||null;function n(e){requestAnimationFrame((function(){l?l(e):(a||(a=new Promise(e=>{o=e}),"complete"===document.readyState?o():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&o()})),a.then((function(){e&&e()})))}))}const r="__seenByShadyCSS",i="__shadyCSSCachedStyle";let m=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,n(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,n(c))}addCustomStyle(e){e[r]||(e[r]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[i])return e[i];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const s=e[t];if(s[i])continue;const o=this.getStyleForCustomStyle(s);if(o){const e=o.__appliedElement||o;m&&m(e),s[i]=e}}return e}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>m,set(e){m=e}},validateCallback:{get:()=>c,set(e){let t=!1;c||(t=!0),c=e,t&&this.enqueueDocumentValidation()}}})},874:(e,t,s)=>{"use strict";s.d(t,{WA:()=>o,Cp:()=>l,jF:()=>r,rd:()=>i});const o=!(window.ShadyDOM&&window.ShadyDOM.inUse);let a,l;function n(e){a=(!e||!e.shimcssproperties)&&(o||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(l=window.ShadyCSS.cssBuild);const r=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?a=window.ShadyCSS.nativeCss:window.ShadyCSS?(n(window.ShadyCSS),window.ShadyCSS=void 0):n(window.WebComponents&&window.WebComponents.flags);const i=a}}]);