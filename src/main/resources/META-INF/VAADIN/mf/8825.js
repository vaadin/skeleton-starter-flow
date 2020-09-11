/*! For license information please see 8825.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[8825],{9380:(e,t,i)=>{"use strict";var n=i(2450),s=i(4225),a=i(6259),l=i(5609),o=(i(8611),i(4451)),r=i(8053);class d extends((0,s.T)((0,l.Y)((0,a.t)(n.H3)))){static get template(){return o.d`
    <style>
      :host([opened]) {
        pointer-events: auto;
      }
    </style>

    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}static get is(){return"vaadin-combo-box-light"}static get properties(){return{attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super(),this._boundInputValueChanged=this._inputValueChanged.bind(this),this.__boundInputValueCommitted=this.__inputValueCommitted.bind(this)}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button"),this._clearElement=this.querySelector(".clear-button"),this._clearElement&&this._clearElement.addEventListener("mousedown",e=>{e.preventDefault(),(this.inputElement._focusableElement||this.inputElement).focus()})}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback(),this._setInputElement(this.querySelector("vaadin-text-field,iron-input,paper-input,.paper-input-input,.input")),this._revertInputValue(),this.inputElement.addEventListener("input",this._boundInputValueChanged),this.inputElement.addEventListener("change",this.__boundInputValueCommitted),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this.inputElement.removeEventListener("input",this._boundInputValueChanged),this.inputElement.removeEventListener("change",this.__boundInputValueCommitted),this._restoreInputBlur()}__inputValueCommitted(e){e.__fromClearButton&&this._clear()}get _propertyForValue(){return(0,r.z)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}}customElements.define(d.is,d)},9656:(e,t,i)=>{"use strict";i.d(t,{C:()=>h});var n=i(202),s=i(2450),a=i(4225),l=i(9027),o=(i(9380),i(513));const r=document.createElement("template");r.innerHTML='<dom-module id="vaadin-time-picker-text-field-styles" theme-for="vaadin-time-picker-text-field">\n  <template>\n    <style>\n      :host([dir="rtl"]) [part="input-field"] {\n        direction: ltr;\n      }\n\n      :host([dir="rtl"]) [part="value"]::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content);class d extends n.S{static get is(){return"vaadin-time-picker-text-field"}}customElements.define(d.is,d);var u=i(4451),p=i(266);class h extends((0,l.S)((0,p.$)((0,a.T)(s.H3)))){static get template(){return u.d`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part~="toggle-button"] {
        cursor: pointer;
      }

      .input {
        width: 100%;
        min-width: 0;
      }
    </style>
    <vaadin-combo-box-light allow-custom-value="" item-label-path="value" filtered-items="[[__dropdownItems]]" disabled="[[disabled]]" readonly="[[readonly]]" auto-open-disabled="[[autoOpenDisabled]]" dir="ltr" theme\$="[[theme]]">
      <template>
        [[item.label]]
      </template>
      <vaadin-time-picker-text-field class="input" name="[[name]]" invalid="[[invalid]]" autocomplete="off" label="[[label]]" required="[[required]]" disabled="[[disabled]]" prevent-invalid-input="[[preventInvalidInput]]" pattern="[[pattern]]" error-message="[[errorMessage]]" autofocus="[[autofocus]]" placeholder="[[placeholder]]" readonly="[[readonly]]" role="application" aria-live="assertive" min\$="[[min]]" max\$="[[max]]" aria-label\$="[[label]]" clear-button-visible="[[clearButtonVisible]]" i18n="[[i18n]]" theme\$="[[theme]]">
        <span slot="suffix" part="toggle-button" class="toggle-button" role="button" aria-label\$="[[i18n.selector]]"></span>
      </vaadin-time-picker-text-field>
    </vaadin-combo-box-light>
`}static get is(){return"vaadin-time-picker"}static get version(){return"2.3.0"}static get properties(){return{name:{type:String},value:{type:String,observer:"__valueChanged",notify:!0,value:""},label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},clearButtonVisible:{type:Boolean,value:!1},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(!e)return;const t=(e=0,t="00")=>(t+e).substr((t+e).length-t.length);let i=`${t(e.hours)}:${t(e.minutes)}`;return void 0!==e.seconds&&(i+=":"+t(e.seconds)),void 0!==e.milliseconds&&(i+="."+t(e.milliseconds,"000")),i},parseTime:e=>{const t=new RegExp("^(\\d|[0-1]\\d|2[0-3])(?::(\\d|[0-5]\\d)(?::(\\d|[0-5]\\d)(?:\\.(\\d{1,3}))?)?)?$").exec(e);if(t){if(t[4])for(;t[4].length<3;)t[4]+="0";return{hours:t[1],minutes:t[2],seconds:t[3],milliseconds:t[4]}}},selector:"Time selector",clear:"Clear"})}}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}ready(){super.ready(),this.__inputElement.validate=()=>{},this.__dropdownElement.addEventListener("value-changed",e=>this.__onInputChange(e)),this.__inputElement.addEventListener("keydown",this.__onKeyDown.bind(this)),this.__dropdownElement.addEventListener("change",e=>this.validate()),this.__inputElement.addEventListener("blur",e=>this.validate()),this.__dropdownElement.addEventListener("change",e=>{e.composedPath()[0]!==this.__inputElement&&this.__dispatchChange()})}__validDayDivisor(e){return!e||86400%e==0||e<1&&e%1*1e3%1==0}__onKeyDown(e){if(this.readonly||this.disabled||this.__dropdownItems.length)return;const t=this.__validDayDivisor(this.step)&&this.step||60;o.G.keyboardEventMatchesKeys(e,"down")?this.__onArrowPressWithStep(-t):o.G.keyboardEventMatchesKeys(e,"up")&&this.__onArrowPressWithStep(t)}__onArrowPressWithStep(e){const t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.__inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){let t=60*(e&&e.hours||0)*60*1e3;return t+=60*(e&&e.minutes||0)*1e3,t+=1e3*(e&&e.seconds||0),t+=e&&parseInt(e.milliseconds)||0,t}__getSec(e){let t=60*(e&&e.hours||0)*60;return t+=60*(e&&e.minutes||0),t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0,t}__addStep(e,t,i){0===e&&t<0&&(e=864e5);const n=1e3*t,s=e%n;n<0&&s&&i?e-=s:n>0&&s&&i?e-=s-n:e+=n;var a=Math.floor(e/1e3/60/60);e-=1e3*a*60*60;var l=Math.floor(e/1e3/60);e-=1e3*l*60;var o=Math.floor(e/1e3);return{hours:a<24?a:0,minutes:l,seconds:o,milliseconds:e-=1e3*o}}__updateDropdownItems(e,t,i,n){const s=this.__validateTime(this.__parseISO(t)),a=this.__getSec(s),l=this.__validateTime(this.__parseISO(i)),o=this.__getSec(l);if(this.__adjustValue(a,o,s,l),this.__dropdownItems=this.__generateDropdownList(a,o,n),n!==this.__oldStep){this.__oldStep=n;const e=this.__validateTime(this.__parseISO(this.value));this.__updateValue(e)}this.value&&(this.__dropdownElement.value=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,i){if(i<900||!this.__validDayDivisor(i))return[];const n=[];let s=-(i=i||3600)+e;for(;s+i>=e&&s+i<=t;){const e=this.__validateTime(this.__addStep(1e3*s,i));s+=i;const t=this.i18n.formatTime(e);n.push({label:t,value:t})}return n}__adjustValue(e,t,i,n){if(!this.__memoValue)return;const s=this.__getSec(this.__memoValue);s<e?this.__updateValue(i):s>t&&this.__updateValue(n)}__valueChanged(e,t){const i=this.__memoValue=this.__parseISO(e),n=this.__formatISO(i)||"";""===this.value||null===this.value||i?this.value!==n?this.value=n:this.__updateInputValue(i):this.value=t}__onInputChange(e){const t=this.i18n.parseTime(this.__dropdownElement.value),i=this.i18n.formatTime(t)||"";t?this.__dropdownElement.value!==i?this.__dropdownElement.value=i:this.__updateValue(t):this.value=""}__updateValue(e){const t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){const t=this.i18n.formatTime(this.__validateTime(e))||"";this.__dropdownElement.value=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){return this.step%3600==0?1:this.step%60!=0&&this.step?this.step%1==0?3:this.step<1?4:void 0:2}__formatISO(e){return h.properties.i18n.value().formatTime(e)}__parseISO(e){return h.properties.i18n.value().parseTime(e)}_getInputElement(){return this.shadowRoot.querySelector("vaadin-time-picker-text-field")}get __inputElement(){return this.__memoInput||(this.__memoInput=this._getInputElement())}get __dropdownElement(){return this.__memoDropdown||(this.__memoDropdown=this.shadowRoot.querySelector("vaadin-combo-box-light"))}get focusElement(){return this.__inputElement}validate(){return!(this.invalid=!this.checkValidity())}_timeAllowed(e){const t=this.i18n.parseTime(this.min),i=this.i18n.parseTime(this.max);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(i)||this.__getMsec(e)<=this.__getMsec(i))}checkValidity(){return!(!this.__inputElement.focusElement.checkValidity()||this.value&&!this._timeAllowed(this.i18n.parseTime(this.value))||this.__dropdownElement.value&&!this.i18n.parseTime(this.__dropdownElement.value))}}customElements.define(h.is,h)},8825:(e,t,i)=>{"use strict";i(2114),i(4480),i(9380),i(4623),i(8043);var n=i(4451);const s=n.d`<dom-module id="lumo-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="lumo-field-button">
      [part~="toggle-button"]::before {
        content: var(--lumo-icons-clock);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content),i(6311);const a=n.d`<dom-module id="lumo-time-picker-text-field" theme-for="vaadin-time-picker-text-field">
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
</dom-module>`;document.head.appendChild(a.content),i(9656)}}]);