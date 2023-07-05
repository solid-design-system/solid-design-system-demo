import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@solid-design-system/components/versioned/button/button';
import '@solid-design-system/components/unversioned/button/button';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;
  render() {
    return html`
        <sd-button href="#" variant="primary" @click=${this._onClick} >Unversioned: <span class="numbers">${this.count}</span></sd-button>  
        <sd-1-0-1-button variant="cta" @click=${this._onClick} >Versioned: <span class="numbers">${this.count}</span></sd-1-0-1-button>
`;
  }

  private _onClick() {
    this.count++;
  }

  static styles = css`
  .numbers{
    font-variant-numeric: tabular-nums;
  }
  sd-button {
    margin-right: 8px;
  }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
