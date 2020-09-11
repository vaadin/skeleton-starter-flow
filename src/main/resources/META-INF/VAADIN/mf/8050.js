/*! For license information please see 8050.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[8050],{3137:(e,t,i)=>{"use strict";i.d(t,{v:()=>o});var a=i(60),s=i(2450),r=i(4225),l=i(9027);const n=e=>class extends e{static get properties(){return{inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue:function(e){return e.split("\t")},formatValue:function(e){return e.join("\t")}})},__errorId:String,__labelId:String}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.__setInputsFromSlot(),this.__observer=new a.o(this.$.slot,()=>{this.__setInputsFromSlot()});const e=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);this.addEventListener("keydown",t=>{if(9===t.keyCode){if("slot"===t.target.parentElement.localName&&!t.defaultPrevented&&e){const e=t.target.parentElement;e.setAttribute("tabindex",-1),setTimeout(()=>e.removeAttribute("tabindex"))}this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue()}}),this.addEventListener("focusin",()=>this.setAttribute("focused","")),this.addEventListener("focusout",e=>{const t=this.getRootNode().activeElement;this.inputs.some(e=>t===e||e.shadowRoot&&e.shadowRoot.contains(t))||this.removeAttribute("focused")});var t=n._uniqueId=1+n._uniqueId||1;this.__errorId=`${this.constructor.is}-error-${t}`,this.__labelId=`${this.constructor.is}-label-${t}`}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}__updateValue(e){e&&e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(e=>e.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){const t=[];let i;return"SLOT"===e.tagName?i=e.assignedNodes({flatten:!0}).filter(e=>e.nodeType===Node.ELEMENT_NODE):(t.push(e),i=Array.from(e.children)),i.forEach(e=>t.push(...this.__queryAllAssignedElements(e))),t}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>e.validate||e.checkValidity)}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__valueChanged(e,t){if(this.__settingValue||!this.inputs)return;const i=this.i18n.parseValue(e);i&&0!=i.length?(this.inputs.forEach((e,t)=>e.value=i[t]),void 0!==t&&this.validate()):console.warn("Value parser has not provided values array")}};var d=i(4451);class o extends((0,l.S)(n((0,r.T)(s.H3)))){static get template(){return d.d`
    <style>
      :host {
        display: inline-flex;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .container {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .inputs-wrapper {
        flex: none;
      }
    </style>

    <div class="container">
      <label part="label" on-click="focus" id="[[__labelId]]">[[label]]</label>
      <div class="inputs-wrapper" on-change="__updateValue">
        <slot id="slot"></slot>
      </div>
      <div part="error-message" id="[[__errorId]]" aria-live="assertive" aria-hidden\$="[[__getErrorMessageAriaHidden(invalid, errorMessage, __errorId)]]">[[errorMessage]]</div>
    </div>
`}static get is(){return"vaadin-custom-field"}static get version(){return"1.2.0"}static get properties(){return{label:{type:String,value:"",observer:"_labelChanged"},name:String,required:{type:Boolean,reflectToAttribute:!0},value:{type:String,observer:"__valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,observer:"__invalidChanged"},errorMessage:{type:String,value:""}}}static get observers(){return["__getActiveErrorId(invalid, errorMessage, __errorId)","__getActiveLabelId(label, __labelId)","__toggleHasValue(value)"]}__invalidChanged(e){this.__setOrToggleAttribute("aria-invalid",e,this)}__toggleHasValue(e){null!==e&&""!==e.trim()?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}__setOrToggleAttribute(e,t,i){e&&i&&i.hasAttribute(e)===!t&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}__getActiveErrorId(e,t,i){this.__setOrToggleAttribute("aria-describedby",t&&e?i:void 0,this)}__getActiveLabelId(e,t){this.__setOrToggleAttribute("aria-labelledby",e?t:void 0,this)}__getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}}customElements.define(o.is,o)},6803:(e,t,i)=>{"use strict";i(6224),i(1980),i(690),i(1890),i(2107);const a=i(4451).d`<dom-module id="lumo-custom-field" theme-for="vaadin-custom-field">
  <template>
    <style include="lumo-required-field">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        /* align with text-field height + vertical paddings */
        line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: 0;
      }

      :host::before {
        margin-top: var(--lumo-space-xs);
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      /* align with text-field label */
      :host([has-label]) [part="label"] {
        padding-bottom: calc(0.5em - var(--lumo-space-xs));
      }

      :host(:not([has-label])) [part="label"],
      :host(:not([has-label]))::before {
        display: none;
      }

      /* align with text-field error message */
      :host([invalid]) [part="error-message"]:not(:empty)::before {
        height: calc(0.4em - var(--lumo-space-xs));
      }

      :host([focused]:not([readonly]):not([disabled])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }

      /* Disabled style */

      :host([disabled]) [part="label"] {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content),i(3137)},8050:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DateTimePicker:()=>S}),i(6803),i(8591),i(8825);var a=i(4451);const s=a.d`<dom-module id="lumo-date-time-picker-date-text-field" theme-for="vaadin-date-time-picker-date-text-field">
  <template>
    <style>
      [part~="input-field"] {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) [part~="input-field"] {
        border-radius: var(--lumo-border-radius);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-date-time-picker-time-text-field" theme-for="vaadin-date-time-picker-time-text-field">
  <template>
    <style>
      [part~="input-field"] {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) [part~="input-field"] {
        border-radius: var(--lumo-border-radius);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-date-time-picker-date-picker" theme-for="vaadin-date-time-picker-date-picker">
  <template>
    <style>
      :host {
        margin-right: 2px;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) {
        margin-right: auto;
        margin-left: 2px;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);var r=i(2450),l=i(825),n=i(9027),d=i(4225),o=i(3137);class _ extends o.v{static get is(){return"vaadin-date-time-picker-custom-field"}connectedCallback(){this.__toggleHasValue=function(e){null!==e&&""!==e&&-1===e.split("T").indexOf("")?this.setAttribute("has-value",""):this.removeAttribute("has-value")},super.connectedCallback()}validate(){}}customElements.define(_.is,_);var h=i(6878),c=i(202);class u extends c.S{static get is(){return"vaadin-date-time-picker-date-text-field"}}let m;customElements.define(u.is,u);class p extends h.c{static get is(){return"vaadin-date-time-picker-date-picker"}static get template(){return m||(m=super.template.cloneNode(!0),m.innerHTML=m.innerHTML.replace("vaadin-date-picker-text-field","vaadin-date-time-picker-date-text-field")),m}}customElements.define(p.is,p);var v=i(9656);class g extends c.S{static get is(){return"vaadin-date-time-picker-time-text-field"}}let b;customElements.define(g.is,g);class f extends v.C{static get is(){return"vaadin-date-time-picker-time-picker"}static get template(){return b||(b=super.template.cloneNode(!0),b.innerHTML=b.innerHTML.replace("vaadin-time-picker-text-field","vaadin-date-time-picker-time-text-field")),b}_getInputElement(){return this.shadowRoot.querySelector("vaadin-date-time-picker-time-text-field")}}customElements.define(f.is,f);const k=document.createElement("template");k.innerHTML='<dom-module id="date-time-picker-custom-field" theme-for="vaadin-date-time-picker-custom-field">\n  <template>\n    <style>\n      :host,\n      .container {\n        width: 100%;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(k.content);const y=function(e,t){for(;e;){if(e.properties&&e.properties[t])return e.properties[t];e=e.__proto__}},P=customElements.get("vaadin-date-time-picker-date-picker"),T=customElements.get("vaadin-date-time-picker-time-picker"),x=y(P,"i18n").value(),C=y(T,"i18n").value(),D=Object.keys(x),E=Object.keys(C);class S extends((0,n.S)((0,d.T)(r.H3))){static get template(){return a.d`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .slot-container {
        display: flex;
      }

      [part="date"],
      .slot-container ::slotted([slot="date-picker"]) {
        pointer-events: all;
        min-width: 0;
        flex: 1 1 auto;
      }

      [part="time"],
      .slot-container ::slotted([slot="time-picker"]) {
        pointer-events: all;
        min-width: 0;
        flex: 1 1.65 auto;
      }
    </style>
    <vaadin-date-time-picker-custom-field id="customField" on-value-changed="__customFieldValueChanged" i18n="[[__customFieldValueFormat]]" label="[[label]]" theme\$="[[theme]]" invalid="[[invalid]]" required="[[required]]" disabled\$="[[disabled]]" readonly\$="[[readonly]]" error-message="[[errorMessage]]">
      <div class="slot-container">
        <slot name="date-picker" id="dateSlot">
          <vaadin-date-time-picker-date-picker part="date" theme\$="[[theme]]"></vaadin-date-time-picker-date-picker>
        </slot>
        <slot name="time-picker" id="timeSlot">
          <vaadin-date-time-picker-time-picker part="time" theme\$="[[theme]]"></vaadin-date-time-picker-time-picker>
        </slot>
      </div>
    </vaadin-date-time-picker-custom-field>
`}static get is(){return"vaadin-date-time-picker"}static get version(){return"1.3.0"}static get properties(){return{name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,value:!1},errorMessage:String,value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},label:{type:String,value:""},autoOpenDisabled:Boolean,disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},__customFieldValueFormat:{type:Object,value:()=>({parseValue:e=>e.split("T"),formatValue:e=>e.join("T")})},i18n:{type:Object,value:()=>Object.assign({},x,C)}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)"]}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999"}ready(){super.ready(),this.addEventListener("focusout",e=>{e.relatedTarget!==this.__datePicker.$.overlay&&this.validate()}),this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__filterElements=e=>e.nodeType===Node.ELEMENT_NODE,this.__datePickerChanged(),this.__timePickerChanged(),this.$.dateSlot.addEventListener("slotchange",this.__datePickerChanged.bind(this)),this.$.timeSlot.addEventListener("slotchange",this.__timePickerChanged.bind(this)),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus())}focus(){this.$.customField.focus()}__syncI18n(e,t,i){(i=i||Object.keys(t.i18n)).forEach(i=>{t.i18n.hasOwnProperty(i)&&e.set("i18n."+i,t.i18n[i])})}__updateCustomFieldInputs(){const e=this.$.customField.inputs;this.__datePicker&&this.__timePicker&&(e[0]!==this.__datePicker||e[1]!==this.__timePicker)&&this.$.customField._setInputs([this.__datePicker,this.__timePicker])}__changeEventHandler(e){this.__doDispatchChange=!0}__removeChangeListener(e){e&&e.removeEventListener("change",this.__changeEventHandler,!1)}__addChangeListener(e){e.addEventListener("change",this.__changeEventHandler,!1)}__datePickerChanged(){const e=this.shadowRoot.querySelector('[part="date"]'),t=this.$.dateSlot.assignedNodes({flatten:!0}).filter(this.__filterElements)[0];this.__datePicker!==t&&(this.__removeChangeListener(this.__datePicker),this.__addChangeListener(t),this.__datePicker=t,this.__updateCustomFieldInputs(),t===e?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,D)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,D)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(){const e=this.shadowRoot.querySelector('[part="time"]'),t=this.$.timeSlot.assignedNodes({flatten:!0}).filter(this.__filterElements)[0];this.__timePicker!==t&&(this.__removeChangeListener(this.__timePicker),this.__addChangeListener(t),this.__timePicker=t,this.__updateCustomFieldInputs(),t===e?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,E)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,E)),this.__updateTimePickerMinMax(),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const e=l.e._dateEquals,t=this.__parseDate(this.__datePicker.value),i=e(this.__minDateTime,this.__maxDateTime),a=this.__timePicker.value;this.__minDateTime&&e(t,this.__minDateTime)||i?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&e(t,this.__maxDateTime)||i?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==a&&(this.__timePicker.value=a)}}__i18nChanged(e){this.__datePicker&&this.__datePicker.set(e.path,e.value),this.__timePicker&&this.__timePicker.set(e.path,e.value)}__datePlaceholderChanged(e){this.__datePicker&&(this.__datePicker.placeholder=e)}__timePlaceholderChanged(e){this.__timePicker&&(this.__timePicker.placeholder=e)}__stepChanged(e){if(this.__timePicker&&this.__timePicker.step!==e){const t=this.__timePicker.value;this.__timePicker.step=e,this.__timePicker.value!==t&&this.__triggerCustomFieldValueUpdate()}}__triggerCustomFieldValueUpdate(){this.__timePicker&&this.__timePicker.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__initialPositionChanged(e){this.__datePicker&&(this.__datePicker.initialPosition=e)}__showWeekNumbersChanged(e){this.__datePicker&&(this.__datePicker.showWeekNumbers=e)}__invalidChanged(e){this.__datePicker&&(this.__datePicker.invalid=e),this.__timePicker&&(this.__timePicker.invalid=e)}__requiredChanged(e){this.__datePicker&&(this.__datePicker.required=e),this.__timePicker&&(this.__timePicker.required=e)}__disabledChanged(e){this.__datePicker&&(this.__datePicker.disabled=e),this.__timePicker&&(this.__timePicker.disabled=e)}__readonlyChanged(e){this.__datePicker&&(this.__datePicker.readonly=e),this.__timePicker&&(this.__timePicker.readonly=e)}__parseDate(e){return P.prototype._parseDate(e)}__formatDateISO(e,t){return e?P.prototype._formatISO(e):t}__formatTimeISO(e){return C.formatTime(e)}__parseTimeISO(e){return C.parseTime(e)}__parseDateTime(e){const[t,i]=e.split("T");if(!t||!i)return;const a=this.__parseDate(t);if(!a)return;const s=this.__parseTimeISO(i);return s?(a.setHours(parseInt(s.hours)),a.setMinutes(parseInt(s.minutes||0)),a.setSeconds(parseInt(s.seconds||0)),a.setMilliseconds(parseInt(s.milliseconds||0)),a):void 0}__formatDateTime(e){return e?`${this.__formatDateISO(e,"")}T${this.__dateToIsoTimeString(e)}`:""}__dateToIsoTimeString(e){return this.__formatTimeISO(this.__validateTime({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}))}__validateTime(e){return e&&(e.seconds=this.__stepSegment<3?void 0:e.seconds,e.milliseconds=this.__stepSegment<4?void 0:e.milliseconds),e}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){const e=this.$.customField.inputs.filter(e=>!e.checkValidity.call(e)).length>0,t=this.required&&this.$.customField.inputs.filter(e=>!e.value).length>0;return!e&&!t}get __stepSegment(){const e=null==this.step?60:parseFloat(this.step);return e%3600==0?1:e%60!=0&&e?e%1==0?3:e<1?4:void 0:2}__dateTimeEquals(e,t){return!!l.e._dateEquals(e,t)&&e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()&&e.getMilliseconds()===t.getMilliseconds()}__handleDateTimeChange(e,t,i,a){if(!i)return this[e]="",void(this[t]="");const s=this.__parseDateTime(i);s?this.__dateTimeEquals(this[t],s)||(this[t]=s):this[e]=a}__valueChanged(e,t){this.__handleDateTimeChange("value","__selectedDateTime",e,t),this.__doDispatchChange&&(this.__dispatchChange(),this.validate())}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(e,t){this.__handleDateTimeChange("min","__minDateTime",e,t),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__maxChanged(e,t){this.__handleDateTimeChange("max","__maxDateTime",e,t),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__selectedDateTimeChanged(e){const t=this.__formatDateTime(e);if(this.value!==t&&(this.value=t),this.$.customField.inputs[0].$){const e=this.__doDispatchChange;this.$.customField.value=""!==this.value?this.value:"T",this.__doDispatchChange=e}}__customFieldValueChanged(e){const t=e.detail.value;if("T"===t&&!this.__customFieldInitialValueChangeReceived)return void(this.__customFieldInitialValueChangeReceived=!0);const[i,a]=t.split("T");this.__oldDateValue!==i&&(this.__oldDateValue=i,this.__updateTimePickerMinMax()),i&&a?t!==this.value&&(this.value=t):this.value="",this.__doDispatchChange=!1}__autoOpenDisabledChanged(e){this.__datePicker&&(this.__datePicker.autoOpenDisabled=e),this.__timePicker&&(this.__timePicker.autoOpenDisabled=e)}}customElements.define(S.is,S)}}]);