import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcCalendarComponent, IgcCheckboxComponent, IgcDatePickerComponent, IgcRatingComponent, IgcSliderComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcSliderComponent, IgcRatingComponent, IgcCalendarComponent, IgcDatePickerComponent, IgcCheckboxComponent, IgcSwitchComponent);

@customElement('app-other-components')
export default class OtherComponents extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 20px;
      position: relative;
      margin: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .slider {
      width: 500px;
      height: max-content;
      min-width: 50px;
      max-width: 500px;
    }
    .user-input {
      width: max-content;
      height: max-content;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .calendar {
      width: max-content;
      height: max-content;
      min-width: max-content;
    }
  `;

  @state()
  private numericValue?: number = 2;

  @state()
  private boolVar?: boolean;

  @state()
  private dateVal?: Date = new Date('2024-05-24T00:00');

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="column-layout group">
        <igc-slider .value="${this.numericValue}" min="0" max="5" step="1" primary-ticks="6" ?discrete-track="${true}" @igcChange="${(e: any) => this.numericValue = parseFloat(e.detail)}" class="slider"></igc-slider>
        <igc-rating value="${this.numericValue!}" @igcChange="${(e: any) => this.numericValue = parseFloat(e.detail)}" class="user-input"></igc-rating>
        <igc-calendar value="${this.dateVal}" ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
        <igc-date-picker label="Date" .value="${this.dateVal}" ?outlined="${true}" mode="dialog" @igcChange="${(e: any) => this.dateVal = new Date(e.detail)}" class="date-picker"></igc-date-picker>
        <igc-checkbox labelPosition="after" ?checked="${this.boolVar}" @igcChange="${(e: any) => this.boolVar = e.detail.toLowerCase() === 'true}" class="user-input">
          Label
        </igc-checkbox>
        <igc-switch ?checked="${this.boolVar}" @igcChange="${(e: any) => this.boolVar = e.detail.toLowerCase() === 'true}" class="user-input">
          Label
        </igc-switch>
      </div>
    `;
  }
}
