import { html } from 'lit-html';

import("core/vaadin-button");
import("core/vaadin-combo-box");
import("core/vaadin-vertical-layout");

import("pro/vaadin-board");

const Button = html`
<vaadin-vertical-layout>
  <vaadin-button onClick='window.alert("click")'>This Button</vaadin-button>
  <vaadin-combo-box id="combo" label="Selector"></vaadin-combo-box>

  <vaadin-board></vaadin-board>
</vaadin-vertical-layout>
  `;

export default Button;


customElements.whenDefined('vaadin-combo-box').then(function() {
  document.querySelector('#combo').items = ['Option one', 'Option two'];
});
