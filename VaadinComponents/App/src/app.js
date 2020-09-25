import { html } from 'lit-html';

import("core/vaadin-combo-box");
import("core/vaadin-vertical-layout");

import("pro/vaadin-button");

const App = html`
    <vaadin-vertical-layout>
      <vaadin-button onClick='window.alert("click")'>This Button</vaadin-button>
      <vaadin-combo-box id="combo" label="Selector"></vaadin-combo-box>
    </vaadin-vertical-layout>
  `;

export default App;


customElements.whenDefined('vaadin-combo-box').then(function() {
  document.querySelector('#combo').items = ['Option one', 'Option two'];
});
