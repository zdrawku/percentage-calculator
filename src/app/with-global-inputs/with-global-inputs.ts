import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcAccordionComponent, IgcButtonComponent, IgcExpansionPanelComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import baseStyles from '/src/app/base-view-styles.css?inline';
import { ResultModel } from '../models/CalculatePercentages/result-model';
import { calculatePercentagesService } from '../services/calculate-percentages-service';

defineComponents(IgcIconComponent, IgcInputComponent, IgcButtonComponent, IgcRippleComponent, IgcAccordionComponent, IgcExpansionPanelComponent);

@customElement('app-with-global-inputs')
export default class WIthGlobalInputs extends LitElement {
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
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      position: relative;
      padding: 20px;
      width: 80%;
      min-width: 80%;
      max-width: 80%;
      align-self: center;
    }
    .row-layout {
      display: flex;
    }
    .group_2 {
      justify-content: space-evenly;
      align-items: center;
      align-content: flex-start;
      gap: 5px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 5px;
      position: relative;
    }
    .group_4 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 5px;
      position: relative;
    }
    .group_5 {
      background-color: var(--ig-gray-100);
      border-color: var(--ig-gray-500);
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
    }
    .group_6 {
      justify-content: space-around;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 10px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_7 {
      justify-content: space-evenly;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 10px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      background-color: var(--ig-gray-100);
      border-color: var(--ig-gray-500);
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      justify-content: space-evenly;
      align-items: center;
      align-content: flex-start;
      position: relative;
    }
    .group_9 {
      background-color: var(--ig-gray-100);
      border-color: var(--ig-gray-500);
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      background-color: var(--ig-gray-100);
      border-color: var(--ig-gray-500);
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      position: relative;
      padding: 20px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .group_12 {
      background-color: transparent;
      border-radius: 5px;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
    }
    .group_13 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 15px;
      position: relative;
    }
    .group_14 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      gap: 2px;
      position: relative;
    }
    .group_15 {
      justify-content: flex-end;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-primary-500);
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .icon_2 {
      color: var(--ig-surface-500);
    }
    .content_2 {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .text {
      text-align: center;
      color: var(--ig-gray-900);
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      color: var(--ig-gray-900);
      cursor: pointer;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .hyperlink_1 {
      color: var(--ig-info-500);
      cursor: pointer;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input_1 {
      width: 200px;
      height: max-content;
      min-width: min-content;
      max-width: 200px;
      flex-shrink: 0;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .input_2 {
      width: 110px;
      height: max-content;
      min-width: min-content;
      max-width: 110px;
      flex-shrink: 0;
    }
    .button::part(base) {
      color: var(--ig-surface-500);
      background-color: var(--ig-primary-300);
    }
  `;

  constructor() {
    super();
    calculatePercentagesService.getResultModel1(this.inpVal1 as any, this.inpVal2 as any).then(data => this.whatIsPercentChangeFromXtoY1 = data);
    this.whatIsPercentChangeFromXtoY1$.pipe(takeUntil(this.destroy$)).subscribe(() => { calculatePercentagesService.getResultModel1(this.inpVal1 as any, this.inpVal2 as any).then((data) => {
        this.whatIsPercentChangeFromXtoY1 = data;
      });
    });
  }

  @state()
  private whatIsPercentChangeFromXtoY1?: ResultModel;
  private whatIsPercentChangeFromXtoY1$: Subject<void> = new Subject<void>();

  private _inpVal1: number | undefined = 5;
  @state()
  private get inpVal1(): number | undefined {
    return this._inpVal1;
  }
  private set inpVal1(value: number | undefined) {
    this._inpVal1 = value;
    this.whatIsPercentChangeFromXtoY1$.next();
  }

  private _inpVal2: number | undefined = 100;
  @state()
  private get inpVal2(): number | undefined {
    return this._inpVal2;
  }
  private set inpVal2(value: number | undefined) {
    this._inpVal2 = value;
    this.whatIsPercentChangeFromXtoY1$.next();
  }

  @state()
  private destroy$: Subject<void> = new Subject<void>();

  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
    super.disconnectedCallback();
  }

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="column-layout group">
        <div class="column-layout group_1">
          <div class="row-layout group_2">
            <div class="row-layout group_3">
              <span class="material-icons icon">
                percent
              </span>
              <h5 class="content">
                Percentage calculator
              </h5>
            </div>
            <div class="row-layout group_4">
              <igc-input .value="${this.inpVal1?.toString() ?? ''}" label="First value" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal1 = parseFloat(e.detail)}" class="input"></igc-input>
              <igc-input .value="${this.inpVal2?.toString() ?? ''}" label="Second value" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal2 = parseFloat(e.detail)}" class="input"></igc-input>
            </div>
          </div>
          <div class="row-layout group_5">
            <div class="row-layout group_6">
              <h6 class="content">
                What is
              </h6>
              <igc-input type="number" .value="${this.inpVal1!?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal1 = parseFloat(e.detail)}" class="input_1"></igc-input>
              <h6 class="content">
                % of
              </h6>
              <igc-input type="number" .value="${this.inpVal2!?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal2 = parseFloat(e.detail)}" class="input_1"></igc-input>
              <span class="imx-icon imx-equals icon_1"></span>
              <igc-input label="Full Name" ?outlined="${true}" class="input_1"></igc-input>
            </div>
            <div class="row-layout group_7">
              <igc-button variant="outlined" type="button" class="button">
                <span class="imx-icon imx-calculator icon_2"></span>
                <span>Calculate</span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <div class="row-layout group_5">
            <div class="row-layout group_6">
              <igc-input type="number" .value="${this.inpVal1!?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal1 = parseFloat(e.detail)}" class="input_1"></igc-input>
              <h6 class="content">
                is what percent of
              </h6>
              <igc-input type="number" .value="${this.inpVal2!?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal2 = parseFloat(e.detail)}" class="input_1"></igc-input>
              <span class="imx-icon imx-equals icon_1"></span>
              <igc-input type="number" ?outlined="${true}" class="input_1">
                <span slot="suffix">
                  <span class="material-icons icon_1">
                    percent
                  </span>
                </span>
              </igc-input>
            </div>
            <div class="row-layout group_7">
              <igc-button variant="flat" type="button" class="button">
                <span class="imx-icon imx-calculator icon_2"></span>
                <span>Calculate</span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <div class="row-layout group_8">
            <div class="row-layout group_7">
              <h6 class="content">
                What is the % increase/decrease from
              </h6>
              <igc-input type="number" .value="${this.inpVal1!?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal1 = parseFloat(e.detail)}" class="input_2"></igc-input>
              <h6 class="content">
                to
              </h6>
              <igc-input type="number" .value="${this.inpVal2!?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.inpVal2 = parseFloat(e.detail)}" class="input_2"></igc-input>
              <span class="imx-icon imx-equals icon_1"></span>
              <igc-input type="number" .value="${this.whatIsPercentChangeFromXtoY1?.result}" ?outlined="${true}" class="input_1">
                <span slot="suffix">
                  <span class="material-icons icon_1">
                    percent
                  </span>
                </span>
              </igc-input>
            </div>
            <div class="row-layout group_7">
              <igc-button variant="outlined" type="button" class="button">
                <span class="imx-icon imx-calculator icon_2"></span>
                <span>Calculate</span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <div class="row-layout group_9">
            <h6 class="content">
              Tips:
            </h6>
            <p class="typography__subtitle-1 content">
              Use tab to move to the next field. Use shift-tab to move to the previous field. Press enter to calculate.
            </p>
          </div>
          <div class="column-layout group_10">
            <div class="column-layout group_11">
              <h6 class="content_2">
                FAQ
              </h6>
              <p class="typography__body-1 content_2">
                This site is designed to provide efficient assistance in calculating percentages for diverse needs. Whether you're computing discounts, determining tips, or analyzing changes in value, our percentage calculator offers quick solutions.

              </p>
            </div>
            <div class="column-layout group_11">
              <h6 class="content_2">
                What defines a percentage?
              </h6>
              <p class="typography__body-1 content_2">
                A percentage represents a fraction of 100 and is commonly utilized to express a portion of a whole or to compare quantities. It's often symbolized by "%". For instance, if a garage houses 100 cars and 25 of them are white, we can state that 25% of the cars in the garage are white.

              </p>
            </div>
            <div class="column-layout group_11">
              <h6 class="content_2">
                How to compute a percentage?
              </h6>
              <p class="typography__body-1 content_2">
                Calculating a percentage typically involves dividing the part (the smaller value) by the whole (the larger value) and then multiplying the result by 100. This yields the percentage value ranging between 0 and 100. For example, if you possess 50 apples and wish to determine the percentage of red ones, with 20 being red, you would divide 20 by 50 to obtain 0.4, then multiply by 100 to get 40%.

              </p>
            </div>
            <div class="column-layout group_11">
              <h6 class="content_2">
                Why are percentages significant?
              </h6>
              <p class="typography__body-1 content_2">
                Percentages find application in various scenarios, from computing discounts and taxes to tracking fluctuations in stock prices and economic metrics. Grasping the fundamentals of percentages aids in making well-informed decisions across personal finance and business management realms.
              </p>
            </div>
            <igc-accordion class="accordion">
              <igc-expansion-panel>
                <p class="typography__body-1 content_2">
                  This site is designed to provide efficient assistance in calculating percentages for diverse needs. Whether you're computing discounts, determining tips, or analyzing changes in value, our percentage calculator offers quick solutions.
                </p>
                <span slot="title">FAQ</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <p class="typography__body-1 content_2">
                  A percentage represents a fraction of 100 and is commonly utilized to express a portion of a whole or to compare quantities. It's often symbolized by "%". For instance, if a garage houses 100 cars and 25 of them are white, we can state that 25% of the cars in the garage are white.

                </p>
                <span slot="title">What defines a percentage?</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <p class="typography__body-1 content_2">
                  Calculating a percentage typically involves dividing the part (the smaller value) by the whole (the larger value) and then multiplying the result by 100. This yields the percentage value ranging between 0 and 100. For example, if you possess 50 apples and wish to determine the percentage of red ones, with 20 being red, you would divide 20 by 50 to obtain 0.4, then multiply by 100 to get 40%.

                </p>
                <span slot="title">How to compute a percentage?</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <p class="typography__body-1 text">
                  Percentages find application in various scenarios, from computing discounts and taxes to tracking fluctuations in stock prices and economic metrics. Grasping the fundamentals of percentages aids in making well-informed decisions across personal finance and business management realms.
                </p>
                <span slot="title">Why are percentages significant?</span>
              </igc-expansion-panel>
            </igc-accordion>
          </div>
          <div class="column-layout group_12">
            <div class="row-layout group_13">
              <p class="typography__subtitle-2 content">
                Heading
              </p>
              <a href="https://www.appbuilder.dev/privacy-policy" class="typography__body-1 hyperlink">
                Privacy Policy
              </a>
              <a href="https://www.appbuilder.dev/cookie-policy" class="typography__body-1 hyperlink">
                Cookies
              </a>
              <a href="https://www.appbuilder.dev/terms-of-use" class="typography__body-1 hyperlink">
                Terms of Use
              </a>
              <a href="https://www.appbuilder.dev/license-agreement" class="typography__body-1 hyperlink">
                License Agreement
              </a>
            </div>
            <div class="row-layout group_14">
              <p class="typography__subtitle-2 content_2">
                Built with
              </p>
              <a href="https://www.infragistics.com/products/ignite-ui-angular" class="typography__body-1 hyperlink_1">
                Ignite UI
              </a>
              <p class="typography__subtitle-2 content">
                and
              </p>
              <a href="https://www.appbuilder.dev" class="typography__body-1 hyperlink_1">
                App Builder
              </a>
            </div>
            <div class="row-layout group_15">
              <p class="typography__subtitle-2 content">
                © Copyright 2024 App Builder
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
