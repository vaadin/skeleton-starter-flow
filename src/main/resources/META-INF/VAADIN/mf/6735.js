/*! For license information please see 6735.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[6735],{2072:(A,e,t)=>{"use strict";var s=t(3720),i=t(8425),n=t(874);const o=new s.ZP;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(A,e,t){},prepareTemplateDom(A,e){},prepareTemplateStyles(A,e,t){},styleSubtree(A,e){o.processStyles(),(0,i.wW)(A,e)},styleElement(A){o.processStyles()},styleDocument(A){o.processStyles(),(0,i.wW)(document.body,A)},getComputedStyleValue:(A,e)=>(0,i.B7)(A,e),flushCustomStyles(){},nativeCss:n.rd,nativeShadow:n.WA,cssBuild:n.Cp,disableRuntime:n.jF}),window.ShadyCSS.CustomStyleInterface=o;var r=t(8661);const a="include",l=window.ShadyCSS.CustomStyleInterface;class d extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const A=this.querySelector("style");if(!A)return null;this._style=A;const e=A.getAttribute(a);return e&&(A.removeAttribute(a),A.textContent=(0,r.jv)(e)+A.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",d)},3280:(A,e,t)=>{"use strict";t.d(e,{r:()=>a});var s=t(2450);const i=A=>class extends A{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(A,e,t){const s=this._normalizeValue(A,e,t);this.style.setProperty("--vaadin-progress-value",s),this.updateStyles({"--vaadin-progress-value":String(s)})}_valueChanged(A,e){this.setAttribute("aria-valuenow",A)}_minChanged(A,e){this.setAttribute("aria-valuemin",A)}_maxChanged(A,e){this.setAttribute("aria-valuemax",A)}_normalizeValue(A,e,t){let s;return A||0==A?e>=t?s=1:(s=(A-e)/(t-e),s=Math.min(Math.max(s,0),1)):s=0,s}};var n=t(4225),o=t(9027),r=t(4451);class a extends((0,o.S)((0,n.T)(i(s.H3)))){static get template(){return r.d`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"] {
        transform-origin: 100% 50%;
      }
    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(a.is,a)},6735:(A,e,t)=>{"use strict";t.r(e),t.d(e,{UploadFileElement:()=>o});var s=t(2450),i=t(4225),n=(t(3280),t(321),t(4451));class o extends((0,i.T)(s.H3)){static get template(){return n.d`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(A){A&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(A){return A/100}_fireFileEvent(A){return A.preventDefault(),this.dispatchEvent(new CustomEvent(A.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(A,e){const t=Boolean(A);this.hasAttribute(e)!==t&&(t?this.setAttribute(e,""):this.removeAttribute(e))}}customElements.define(o.is,o)},321:(A,e,t)=>{"use strict";t(2072);const s=document.createElement("template");s.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(s.content)},7244:(A,e,t)=>{"use strict";t.d(e,{CN:()=>s,$T:()=>i,mA:()=>n});const s=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,i=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,n=/@media\s(.*)/},8425:(A,e,t)=>{"use strict";t.d(e,{wW:()=>i,B7:()=>n,OH:()=>o});var s=t(7244);function i(A,e){for(let t in e)null===t?A.style.removeProperty(t):A.style.setProperty(t,e[t])}function n(A,e){const t=window.getComputedStyle(A).getPropertyValue(e);return t?t.trim():""}function o(A){const e=s.$T.test(A)||s.CN.test(A);return s.$T.lastIndex=0,s.CN.lastIndex=0,e}},3720:(A,e,t)=>{"use strict";t.d(e,{ZP:()=>u});let s,i=null,n=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(A){requestAnimationFrame((function(){n?n(A):(i||(i=new Promise(A=>{s=A}),"complete"===document.readyState?s():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&s()})),i.then((function(){A&&A()})))}))}const r="__seenByShadyCSS",a="__shadyCSSCachedStyle";let l=null,d=null;class u{constructor(){this.customStyles=[],this.enqueued=!1,o(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,o(d))}addCustomStyle(A){A[r]||(A[r]=!0,this.customStyles.push(A),this.enqueueDocumentValidation())}getStyleForCustomStyle(A){if(A[a])return A[a];let e;return e=A.getStyle?A.getStyle():A,e}processStyles(){const A=this.customStyles;for(let e=0;e<A.length;e++){const t=A[e];if(t[a])continue;const s=this.getStyleForCustomStyle(t);if(s){const A=s.__appliedElement||s;l&&l(A),t[a]=A}}return A}}u.prototype.addCustomStyle=u.prototype.addCustomStyle,u.prototype.getStyleForCustomStyle=u.prototype.getStyleForCustomStyle,u.prototype.processStyles=u.prototype.processStyles,Object.defineProperties(u.prototype,{transformCallback:{get:()=>l,set(A){l=A}},validateCallback:{get:()=>d,set(A){let e=!1;d||(e=!0),d=A,e&&this.enqueueDocumentValidation()}}})},874:(A,e,t)=>{"use strict";t.d(e,{WA:()=>s,Cp:()=>n,jF:()=>r,rd:()=>a});const s=!(window.ShadyDOM&&window.ShadyDOM.inUse);let i,n;function o(A){i=(!A||!A.shimcssproperties)&&(s||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(n=window.ShadyCSS.cssBuild);const r=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?i=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);const a=i}}]);