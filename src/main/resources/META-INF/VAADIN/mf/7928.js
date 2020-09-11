/*! For license information please see 7928.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[7928],{7928:(e,t,a)=>{"use strict";a.r(t),a.d(t,{LoginOverlayElement:()=>v}),a(6311),a(7137),a(7990),a(2455),a(6224),a(690),a(1890),a(6007);var n=a(8757),r=(a(4584),a(4451));const i=r.d`<dom-module id="vaadin-login-overlay-wrapper-lumo-styles" theme-for="vaadin-login-overlay-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      [part="backdrop"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      }

      [part="content"] {
        padding: 0;
      }

      [part="overlay"] {
        background: none;
        border-radius: 0;
        box-shadow: none;
        width: 100%;
        height: 100%;
      }

      [part="card"] {
        width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="brand"] {
        padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        min-height: calc(var(--lumo-size-m) * 5);
      }

      [part="description"] {
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-tint-70pct);
        margin-bottom: 0;
      }

      [part="content"] {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      [part="card"] {
        border-radius: var(--lumo-border-radius);
        box-shadow: var(--lumo-box-shadow-s);
        margin: var(--lumo-space-s);
        height: auto;
      }

      /* Small screen */
      @media only screen
      and (max-width: 500px) {
        [part="overlay"],
        [part="content"] {
          height: 100%;
        }

        [part="content"] {
          min-height: 100%;
          background: var(--lumo-base-color);
          align-items: flex-start;
        }

        [part="card"],
        [part="overlay"] {
          width: 100%;
          border-radius: 0;
          box-shadow: none;
          margin: 0;
        }

        /* RTL styles */
        :host([dir="rtl"]) [part="brand"] {
          padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
        }
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="card"] {
          flex-direction: row;
          align-items: stretch;
          max-width: calc(var(--lumo-size-m) * 16);
          width: 100%;
        }

        [part="brand"],
        [part="form"] {
          flex: auto;
          flex-basis: 0;
          box-sizing: border-box;
        }

        [part="brand"] {
          justify-content: flex-start;
        }

        [part="form"] {
          padding: var(--lumo-space-l);
          overflow: auto;
        }
      }

      /* Landscape really small screen */
      @media only screen
      and (max-height: 500px)
      and (min-width: 600px)
      and (orientation: landscape),
      only screen
      and (max-width: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="content"] {
          height: 100vh;
        }

        [part="card"] {
          margin: 0;
          width: 100%;
          max-width: none;
          height: 100%;
          flex: auto;
          border-radius: 0;
          box-shadow: none;
        }

        [part="form"] {
          height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
      }

      /* Handle iPhone X notch */
      @media only screen
      and (device-width: 375px)
      and (device-height: 812px)
      and (-webkit-device-pixel-ratio: 3) {
        [part="card"] {
          padding-right: constant(safe-area-inset-right);
          padding-right: env(safe-area-inset-right);

          padding-left: constant(safe-area-inset-left);
          padding-left: env(safe-area-inset-left);
        }

        [part="brand"] {
          margin-left: calc(constant(safe-area-inset-left) * -1);
          margin-left: calc(env(safe-area-inset-left) * -1);

          padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
          padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
        }

        /* RTL styles */
        :host([dir="rtl"]) [part="card"] {
          padding-left: constant(safe-area-inset-right);
          padding-left: env(safe-area-inset-right);
          padding-right: constant(safe-area-inset-left);
          padding-right: env(safe-area-inset-left);
        }

        :host([dir="rtl"]) [part="brand"] {
          margin-right: calc(constant(safe-area-inset-left) * -1);
          margin-right: calc(env(safe-area-inset-left) * -1);
          padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
          padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-login-overlay" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host([theme~="with-overlay"]) {
        min-height: 100%;
        display: flex;
        justify-content: center;
        max-width: 100%;
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        :host([theme~="with-overlay"]) [part="form"] {
          height: 100%;
          -webkit-overflow-scrolling: touch;
          flex: 1;
          padding: 2px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(i.content);var o=a(2450),l=a(4225),d=a(9027),s=(a(7552),a(2783)),p=a(8804);const c=document.createElement("template");let m;c.innerHTML='<dom-module id="vaadin-login-overlay-wrapper-template">\n  <template>\n    <style>\n      [part="overlay"] {\n        outline: none;\n      }\n\n      [part="card"] {\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part="brand"] {\n        box-sizing: border-box;\n        overflow: hidden;\n        flex-grow: 1;\n        flex-shrink: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n      }\n\n      [part="brand"] h1 {\n        color: inherit;\n        margin: 0;\n      }\n    </style>\n    <section part="card">\n      <div part="brand">\n        <slot name="title">\n          <h1 part="title">[[title]]</h1>\n        </slot>\n        <p part="description">[[description]]</p>\n      </div>\n      <div part="form">\n        <slot></slot>\n      </div>\n    </section>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(c.content);class h extends n.G{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!m){m=super.template.cloneNode(!0);const e=p.t.import(this.is+"-template","template"),t=e.content.querySelector("[part=card]"),a=e.content.querySelector("style"),n=m.content.querySelector("#content");n.replaceChild(t,n.children[0]),n.appendChild(a)}return m}}customElements.define(h.is,h);class v extends((0,s.S)((0,d.S)((0,l.T)(o.H3)))){static get template(){return r.d`
    <vaadin-login-overlay-wrapper id="vaadinLoginOverlayWrapper" opened="{{opened}}" focus-trap="" with-backdrop="" title="[[title]]" description="[[description]]" theme\$="[[theme]]">

      <vaadin-login-form theme="with-overlay" id="vaadinLoginForm" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      </vaadin-login-form>

    </vaadin-login-overlay-wrapper>
`}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(e){const t=e.base;t&&(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){const t=Array.from(e).map(e=>this.$.vaadinLoginOverlayWrapper.appendChild(e));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(v.is,v)},6007:(e,t,a)=>{"use strict";a(1032);const n=a(4451).d`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content),a(8757)}}]);