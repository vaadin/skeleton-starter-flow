import 'construct-style-sheets-polyfill';
import { css, unsafeCSS, registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles';

// target: Document | ShadowRoot
export const injectGlobalCss = (css, target) => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  target.adoptedStyleSheets = [...target.adoptedStyleSheets, sheet];
};
import stylesCss from './styles.css';
import vaadinTextFieldCss from './components/vaadin-text-field.css';

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow['_vaadinds_my-theme_globalCss'] = window.Vaadin.Flow['_vaadinds_my-theme_globalCss'] || [];
export const applyTheme = (target) => {
  
  const injectGlobal = (window.Vaadin.Flow['_vaadinds_my-theme_globalCss'].length === 0) || (!window.Vaadin.Flow['_vaadinds_my-theme_globalCss'].includes(target) && target !== document);
  if (injectGlobal) {
    injectGlobalCss(stylesCss.toString(), target);
    
    window.Vaadin.Flow['_vaadinds_my-theme_globalCss'].push(target);
  }
  if (!document['_vaadinds_my-theme_componentCss']) {
    registerStyles(
      'vaadin-text-field',
      css`
        ${unsafeCSS(vaadinTextFieldCss.toString())}
      `
    );
    
    document['_vaadinds_my-theme_componentCss'] = true;
  }
}
