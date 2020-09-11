/*! For license information please see 2247.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[2247],{2247:(t,e,l)=>{"use strict";l.r(e),l.d(e,{EmailFieldElement:()=>s});var i=l(4451);const r=i.d`<dom-module id="lumo-email-field" theme-for="vaadin-email-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content),l(6311),l(2450),l(2072);var a=l(202),n=l(8804);const o=i.d`<dom-module id="vaadin-email-field-template">
  <template>
    <style>
      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
        text-align: left;
      }
    </style>
  </template>
  
</dom-module>`;let d;document.head.appendChild(o.content);class s extends a.S{static get is(){return"vaadin-email-field"}static get version(){return"2.7.0"}static get template(){if(!d){d=super.template.cloneNode(!0);const t=n.t.import(this.is+"-template","template").content.querySelector("style");d.content.appendChild(t)}return d}ready(){super.ready(),this.inputElement.type="email",this.inputElement.autocapitalize="off"}_createConstraintsObserver(){this.pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",super._createConstraintsObserver()}}customElements.define(s.is,s)}}]);