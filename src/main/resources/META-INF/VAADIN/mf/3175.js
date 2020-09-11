/*! For license information please see 3175.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[3175],{7442:(e,t,n)=>{"use strict";n.d(t,{E:()=>l}),n(2450),n(2072);var i=n(202),s=n(8804);const a=n(4451).d`<dom-module id="vaadin-number-field-template">
  <template>
    <style>
      :host([readonly]) [part\$="button"] {
        pointer-events: none;
      }

      [part="decrease-button"]::before {
        content: "−";
      }

      [part="increase-button"]::before {
        content: "+";
      }

      [part="decrease-button"],
      [part="increase-button"] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Hide the native arrow icons */
      [part="value"]::-webkit-outer-spin-button,
      [part="value"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      [part="value"] {
        /* Older Firefox versions (v47.0) requires !important */
        -moz-appearance: textfield !important;
      }

      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input)::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        text-align: left;
      }
    </style>

    <div disabled\$="[[!_allowed(-1, value, min, max, step)]]" part="decrease-button" on-click="_decreaseValue" on-touchend="_decreaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>

    <div disabled\$="[[!_allowed(1, value, min, max, step)]]" part="increase-button" on-click="_increaseValue" on-touchend="_increaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>
  </template>

  
</dom-module>`;let r;document.head.appendChild(a.content);class l extends i.S{static get is(){return"vaadin-number-field"}static get version(){return"2.7.0"}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,reflectToAttribute:!0,observer:"_minChanged"},max:{type:Number,reflectToAttribute:!0,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}ready(){super.ready(),this.__previousValidInput=this.value||"",this.inputElement.type="number",this.inputElement.addEventListener("change",this.__onInputChange.bind(this))}_decreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}static get template(){if(!r){r=super.template.cloneNode(!0);const e=s.t.import(this.is+"-template","template"),t=e.content.querySelector('[part="decrease-button"]'),n=e.content.querySelector('[part="increase-button"]'),i=e.content.querySelector("style"),a=r.content.querySelector('[part="input-field"]'),l=r.content.querySelector('[name="prefix"]');a.insertBefore(t,l),a.appendChild(n),r.content.appendChild(i)}return r}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern, min, max, step)")}_constraintsChanged(e,t,n,i,s,a,r){if(!this.invalid)return;const l=e=>!e&&0!==e;l(s)&&l(a)?super._constraintsChanged(e,t,n,i):this.validate()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;let t=parseFloat(this.value);this.value?t<this.min?(e=0,t=this.min):t>this.max&&(e=0,t=this.max):0==this.min&&e<0||0==this.max&&e>0||0==this.max&&0==this.min?(e=0,t=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?t=0:this.min>0?(t=this.min,this.max<0&&e<0&&(t=this.max),e=0):this.max<0&&(t=this.max,e<0?e=0:this._getIncrement(1,t-this.step)>this.max?t-=2*this.step:t-=this.step);const n=this._getIncrement(e,t);this.value&&0!=e&&!this._incrementIsInsideTheLimits(e,t)||this._setValue(n)}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){let n=this.step||1,i=this.min||0;const s=Math.max(this._getMultiplier(t),this._getMultiplier(n),this._getMultiplier(i));n*=s,i*=s;const a=((t=Math.round(t*s))-i)%n;return e>0?(t-a+n)/s:e<0?(t-(a||n))/s:t/s}_getDecimalCount(e){const t=String(e),n=t.indexOf(".");return-1===n?1:t.length-n-1}_getMultiplier(e){if(!isNaN(e))return Math.pow(10,this._getDecimalCount(e))}_incrementIsInsideTheLimits(e,t){return e<0?null==this.min||this._getIncrement(e,t)>=this.min:e>0?null==this.max||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_allowed(e){const t=e*(this.step||1),n=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,n)}_stepChanged(e,t){this.__validateByStep=this.__stepChangedCalled||null!==this.getAttribute("step"),this.inputElement.step=this.__validateByStep?e:"any",this.__stepChangedCalled=!0,this.setAttribute("step",e)}_minChanged(e){this.inputElement.min=e}_maxChanged(e){this.inputElement.max=e}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){38==e.keyCode?(e.preventDefault(),this._increaseValue()):40==e.keyCode&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}__onInputChange(){this.validate()}checkValidity(){return void 0!==this.min||void 0!==this.max||this.__validateByStep?this.inputElement.checkValidity():super.checkValidity()}}window.customElements.define(l.is,l)},5572:(e,t,n)=>{"use strict";n(8043),n(1980),n(4623);const i=n(4451).d`<dom-module id="lumo-number-field" theme-for="vaadin-number-field">
  <template>
    <style include="lumo-field-button">
      :host {
        width: 8em;
      }

      :host([has-controls]:not([theme~="align-right"])) [part="value"] {
        text-align: center;
      }

      [part="decrease-button"][disabled],
      [part="increase-button"][disabled] {
        opacity: 0.2;
      }

      :host([has-controls]) [part="input-field"] {
        padding: 0;
      }

      [part="decrease-button"],
      [part="increase-button"] {
        cursor: pointer;
        font-size: var(--lumo-icon-size-s);
        width: 1.6em;
        height: 1.6em;
      }

      [part="decrease-button"]::before,
      [part="increase-button"]::before {
        margin-top: 0.2em;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(i.content),n(6311),n(7442)},3175:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IntegerFieldElement:()=>a}),n(5572),n(2450),n(2072);var i=n(7442);const s=n(4451).d`<dom-module id="vaadin-integer-field-template">

  
</dom-module>`;document.head.appendChild(s.content);class a extends i.E{static get is(){return"vaadin-integer-field"}static get version(){return"2.7.0"}static get properties(){return{pattern:String,preventInvalidInput:Boolean,minlength:Number,maxlength:Number}}ready(){super.ready(),this._enabledCharPattern="[-+\\d]"}_valueChanged(e,t){if(""!==e&&!this.__isInteger(e))return console.warn(`Trying to set non-integer value "${e}" to <vaadin-integer-field>. Clearing the value.`),void(this.value="");super._valueChanged(e,t)}_stepChanged(e,t){if(!this.__hasOnlyDigits(e))return console.warn(`Trying to set invalid step size "${e}", which is not a positive integer, to <vaadin-integer-field>. Resetting the default value 1.`),void(this.step=1);super._stepChanged(e,t)}__isInteger(e){return/^(-\d)?\d*$/.test(String(e))}__hasOnlyDigits(e){return/^\d*$/.test(String(e))}}window.customElements.define(a.is,a)}}]);