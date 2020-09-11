/*! For license information please see 4825.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[4825],{4825:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ScrollerElement:()=>i});var r=o(2450),s=o(4225),l=o(9027),n=o(4451);class i extends((0,l.S)((0,s.T)(r.H3))){static get template(){return n.d`
    <style>
      :host([hidden]) {
        display: none !important;
      }

      :host {
        display: block;
        overflow: auto;
      }

      :host([scroll-direction='vertical']) {
        overflow-x: hidden;
      }

      :host([scroll-direction='horizontal']) {
        overflow-y: hidden;
      }

      :host([scroll-direction='none']) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0}}}static get version(){return"1.4.0"}}customElements.define(i.is,i)}}]);