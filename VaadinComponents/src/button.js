import { html } from 'lit-html';

const VaadinButton = import("core/vaadin-button");
const VaadinComboBox  = import("core/vaadin-combo-box");
const VaadinVerticalLayout  = import("core/vaadin-vertical-layout");

const VaadinBoard  = import("pro/vaadin-board");

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
