/*! For license information please see 2628.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[2628],{2072:(e,t,s)=>{"use strict";var o=s(3720),n=s(8425),a=s(874);const l=new o.ZP;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,s){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,s){},styleSubtree(e,t){l.processStyles(),(0,n.wW)(e,t)},styleElement(e){l.processStyles()},styleDocument(e){l.processStyles(),(0,n.wW)(document.body,e)},getComputedStyleValue:(e,t)=>(0,n.B7)(e,t),flushCustomStyles(){},nativeCss:a.rd,nativeShadow:a.WA,cssBuild:a.Cp,disableRuntime:a.jF}),window.ShadyCSS.CustomStyleInterface=l;var m=s(8661);const c="include",r=window.ShadyCSS.CustomStyleInterface;class i extends HTMLElement{constructor(){super(),this._style=null,r.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(c);return t&&(e.removeAttribute(c),e.textContent=(0,m.jv)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",i)},690:(e,t,s)=>{"use strict";s(6998),s(2072);const o=document.createElement("template");o.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content)},6998:(e,t,s)=>{"use strict";class o extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",o)},673:(e,t,s)=>{"use strict";s(690);const o=document.createElement("template");o.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content)},2628:(e,t,s)=>{"use strict";s.r(t),s.d(t,{VerticalLayoutElement:()=>c}),s(690),s(673);var o=s(4451);const n=o.d`<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]) ::slotted(*) {
        margin-top: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]) ::slotted(*) {
        margin-top: var(--lumo-space-s);
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]) ::slotted(*) {
        margin-top: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]) ::slotted(*) {
        margin-top: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
       :host([theme~="spacing-xs"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-xs) * -1);
       }

       :host([theme~="spacing-s"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-s) * -1);
       }

      :host([theme~="spacing"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=s(2450),l=s(4225),m=s(9027);class c extends((0,m.S)((0,l.T)(a.H3))){static get template(){return o.d`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.4.0"}}customElements.define(c.is,c)},7244:(e,t,s)=>{"use strict";s.d(t,{CN:()=>o,$T:()=>n,mA:()=>a});const o=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,n=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,a=/@media\s(.*)/},8425:(e,t,s)=>{"use strict";s.d(t,{wW:()=>n,B7:()=>a,OH:()=>l});var o=s(7244);function n(e,t){for(let s in t)null===s?e.style.removeProperty(s):e.style.setProperty(s,t[s])}function a(e,t){const s=window.getComputedStyle(e).getPropertyValue(t);return s?s.trim():""}function l(e){const t=o.$T.test(e)||o.CN.test(e);return o.$T.lastIndex=0,o.CN.lastIndex=0,t}},3720:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>u});let o,n=null,a=window.HTMLImports&&window.HTMLImports.whenReady||null;function l(e){requestAnimationFrame((function(){a?a(e):(n||(n=new Promise(e=>{o=e}),"complete"===document.readyState?o():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&o()})),n.then((function(){e&&e()})))}))}const m="__seenByShadyCSS",c="__shadyCSSCachedStyle";let r=null,i=null;class u{constructor(){this.customStyles=[],this.enqueued=!1,l(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&i&&(this.enqueued=!0,l(i))}addCustomStyle(e){e[m]||(e[m]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[c])return e[c];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const s=e[t];if(s[c])continue;const o=this.getStyleForCustomStyle(s);if(o){const e=o.__appliedElement||o;r&&r(e),s[c]=e}}return e}}u.prototype.addCustomStyle=u.prototype.addCustomStyle,u.prototype.getStyleForCustomStyle=u.prototype.getStyleForCustomStyle,u.prototype.processStyles=u.prototype.processStyles,Object.defineProperties(u.prototype,{transformCallback:{get:()=>r,set(e){r=e}},validateCallback:{get:()=>i,set(e){let t=!1;i||(t=!0),i=e,t&&this.enqueueDocumentValidation()}}})},874:(e,t,s)=>{"use strict";s.d(t,{WA:()=>o,Cp:()=>a,jF:()=>m,rd:()=>c});const o=!(window.ShadyDOM&&window.ShadyDOM.inUse);let n,a;function l(e){n=(!e||!e.shimcssproperties)&&(o||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(a=window.ShadyCSS.cssBuild);const m=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?n=window.ShadyCSS.nativeCss:window.ShadyCSS?(l(window.ShadyCSS),window.ShadyCSS=void 0):l(window.WebComponents&&window.WebComponents.flags);const c=n}}]);