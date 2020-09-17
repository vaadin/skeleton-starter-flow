import {html, render} from 'lit-html';
import { VaadinButton, VaadinComboBox, VaadinVerticalLayout, VaadinHorizontalLayout } from "./core-components";
import { GridPro } from "pro/vaadin-grid-pro";

render(html`
<vaadin-vertical-layout>
  <vaadin-button onClick='window.alert("click")'>This Button</vaadin-button>
  <vaadin-horizontal-layout>
    <vaadin-combo-box id="combo" label="Selector"></vaadin-combo-box>
  </vaadin-horizontal-layout>
</vaadin-vertical-layout>
  `, document.body);


customElements.whenDefined('vaadin-combo-box').then(function() {
  document.querySelector('#combo').items = ['Option one', 'Option two'];
});
