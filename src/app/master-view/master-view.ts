import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcExpansionPanelComponent, IgcIconComponent, IgcInputComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import baseStyles from '/src/app/base-view-styles.css?inline';
import { ResultModel } from '../models/CalculatePercentages/result-model';
import { calculatePercentagesService } from '../services/calculate-percentages-service';

defineComponents(IgcIconComponent, IgcInputComponent, IgcExpansionPanelComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      background-color: var(--ig-primary-300);
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 24px 48px 48px;
      height: 250px;
      min-width: 50px;
      min-height: 50px;
      max-height: 250px;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      background-color: var(--ig-gray-100);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_2 {
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-300);
      border-width: 1px;
      border-style: solid;
      border-radius: 8px;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      top: -64px;
      bottom: 0;
      position: relative;
      padding: 48px;
      max-width: 1024px;
      align-self: center;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_3 {
      background-color: var(--ig-gray-100);
      border-color: var(--ig-gray-500);
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 16px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: min-content;
      max-width: 800px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      max-width: 800px;
    }
    .group_7 {
      background-color: var(--ig-gray-200);
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      padding: 8px;
      min-width: 50px;
      align-self: center;
    }
    .group_8 {
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
    .group_9 {
      border-color: var(--ig-gray-300);
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .expansion-panel {
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .group_10 {
      background-color: var(--ig-gray-100);
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 24px 48px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_11 {
      justify-content: space-between;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      max-width: 1024px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_12 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 15px;
      position: relative;
    }
    .group_13 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      gap: 4px;
      position: relative;
    }
    .icon {
      --size: 48px;
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--ig-primary-100);
    }
    .h3 {
      color: var(--ig-surface-500);
      height: max-content;
      min-width: min-content;
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
    .h6_1 {
      width: 34px;
      height: max-content;
      min-width: min-content;
      max-width: 34px;
    }
    .icon_2 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-info-500);
    }
    .h6 {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .text {
      text-align: center;
      margin: 16px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      margin: 16px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      color: var(--ig-info-500);
      cursor: pointer;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_2 {
      color: var(--ig-gray-600);
      height: max-content;
      min-width: min-content;
    }
    .input {
      width: 123px;
      height: max-content;
      min-width: 100px;
      max-width: 123px;
    }
    .input_1 {
      width: 127px;
      height: max-content;
      min-width: 100px;
      max-width: 127px;
    }
    .input_2 {
      width: 200px;
      height: max-content;
      min-width: 50px;
      max-width: 200px;
      flex-shrink: 0;
    }
    .input_3 {
      height: max-content;
      min-width: 100px;
    }
  `;

  constructor() {
    super();
    calculatePercentagesService.getResultModel(this.input1 as any, this.input2 as any).then(data => this.whatIsXpercentOfY = data);
    this.whatIsXpercentOfY$.pipe(takeUntil(this.destroy$)).subscribe(() => { calculatePercentagesService.getResultModel(this.input1 as any, this.input2 as any).then((data) => {
        this.whatIsXpercentOfY = data;
      });
    });
    calculatePercentagesService.getResultModel1(this.input5 as any, this.input6 as any).then(data => this.whatIsPercentChangeFromXtoY = data);
    this.whatIsPercentChangeFromXtoY$.pipe(takeUntil(this.destroy$)).subscribe(() => { calculatePercentagesService.getResultModel1(this.input5 as any, this.input6 as any).then((data) => {
        this.whatIsPercentChangeFromXtoY = data;
      });
    });
    calculatePercentagesService.getResultModel2(this.input3 as any, this.input4 as any).then(data => this.xisWhatPercentOfY = data);
    this.xisWhatPercentOfY$.pipe(takeUntil(this.destroy$)).subscribe(() => { calculatePercentagesService.getResultModel2(this.input3 as any, this.input4 as any).then((data) => {
        this.xisWhatPercentOfY = data;
      });
    });
  }

  private _input1: number | undefined = 5;
  @state()
  private get input1(): number | undefined {
    return this._input1;
  }
  private set input1(value: number | undefined) {
    this._input1 = value;
    this.whatIsXpercentOfY$.next();
  }

  private _input6: number | undefined = 7149;
  @state()
  private get input6(): number | undefined {
    return this._input6;
  }
  private set input6(value: number | undefined) {
    this._input6 = value;
    this.whatIsPercentChangeFromXtoY$.next();
  }

  private _input4: number | undefined = 100;
  @state()
  private get input4(): number | undefined {
    return this._input4;
  }
  private set input4(value: number | undefined) {
    this._input4 = value;
    this.xisWhatPercentOfY$.next();
  }

  private _input2: number | undefined = 100;
  @state()
  private get input2(): number | undefined {
    return this._input2;
  }
  private set input2(value: number | undefined) {
    this._input2 = value;
    this.whatIsXpercentOfY$.next();
  }

  private _input5: number | undefined = 5455;
  @state()
  private get input5(): number | undefined {
    return this._input5;
  }
  private set input5(value: number | undefined) {
    this._input5 = value;
    this.whatIsPercentChangeFromXtoY$.next();
  }

  private _input3: number | undefined = 10;
  @state()
  private get input3(): number | undefined {
    return this._input3;
  }
  private set input3(value: number | undefined) {
    this._input3 = value;
    this.xisWhatPercentOfY$.next();
  }

  @state()
  private whatIsXpercentOfY?: ResultModel;
  private whatIsXpercentOfY$: Subject<void> = new Subject<void>();

  @state()
  private whatIsPercentChangeFromXtoY?: ResultModel;
  private whatIsPercentChangeFromXtoY$: Subject<void> = new Subject<void>();

  @state()
  private xisWhatPercentOfY?: ResultModel;
  private xisWhatPercentOfY$: Subject<void> = new Subject<void>();

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
      <div class="row-layout group">
        <span class="material-icons icon">
          percent
        </span>
        <h3 class="h3">
          Percentage calculator
        </h3>
      </div>
      <div class="column-layout group_1">
        <div class="column-layout group_2">
          <div class="row-layout group_3">
            <div class="row-layout group_4">
              <h6 class="content">
                What's
              </h6>
              <igc-input type="number" .value="${this.input1?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.input1 = parseFloat(e.detail)}" class="input">
                <span slot="suffix">
                  <span class="material-icons icon_1">
                    percent
                  </span>
                </span>
              </igc-input>
              <h6 class="content">
                of
              </h6>
              <igc-input type="number" .value="${this.input2?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.input2 = parseFloat(e.detail)}" class="input_1"></igc-input>
            </div>
            <div class="row-layout group_5">
              <span class="imx-icon imx-equals icon_1"></span>
              <igc-input type="number" .value="${this.whatIsXpercentOfY?.result.toString() ?? ''}" ?outlined="${true}" class="input_2"></igc-input>
            </div>
          </div>
          <div class="row-layout group_3">
            <div class="row-layout group_4">
              <igc-input type="number" .value="${this.input3?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.input3 = parseFloat(e.detail)}" class="input_3"></igc-input>
              <h6 class="content">
                is what % of
              </h6>
              <igc-input type="number" .value="${this.input4?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.input4 = parseFloat(e.detail)}" class="input_3"></igc-input>
            </div>
            <div class="row-layout group_5">
              <span class="imx-icon imx-equals icon_1"></span>
              <igc-input type="number" .value="${this.xisWhatPercentOfY?.result.toString() ?? ''}" ?outlined="${true}" class="input_2">
                <span slot="suffix">
                  <span class="material-icons icon_1">
                    percent
                  </span>
                </span>
              </igc-input>
            </div>
          </div>
          <div class="row-layout group_3">
            <div class="row-layout group_6">
              <h6 class="content">
                What's the % increase/decrease from
              </h6>
              <igc-input type="number" .value="${this.input5?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.input5 = parseFloat(e.detail)}" class="input_3"></igc-input>
              <h6 class="h6_1">
                to
              </h6>
              <igc-input type="number" .value="${this.input6?.toString() ?? ''}" ?outlined="${true}" @igcChange="${(e: any) => this.input6 = parseFloat(e.detail)}" class="input_3"></igc-input>
            </div>
            <div class="row-layout group_5">
              <span class="imx-icon imx-equals icon_1"></span>
              <igc-input type="number" .value="${this.whatIsPercentChangeFromXtoY?.result.toString() ?? ''}" ?outlined="${true}" class="input_2">
                <span slot="suffix">
                  <span class="material-icons icon_1">
                    percent
                  </span>
                </span>
              </igc-input>
            </div>
          </div>
          <div class="row-layout group_7">
            <span class="material-icons icon_2">
              info
            </span>
            <p class="typography__caption content">
              Use tab to move to the next field. Use shift-tab to move to the previous field. Press enter to calculate.
            </p>
          </div>
          <div class="column-layout group_8">
            <div class="column-layout group_9">
              <h6 class="h6">
                FAQ
              </h6>
              <p class="typography__body-1 text">
                This site is designed to provide efficient assistance in calculating percentages for diverse needs. Whether you're computing discounts, determining tips, or analyzing changes in value, our percentage calculator offers quick solutions.

              </p>
            </div>
            <div class="column-layout group_9">
              <h6 class="h6">
                What defines a percentage?
              </h6>
              <p class="typography__body-1 text">
                A percentage represents a fraction of 100 and is commonly utilized to express a portion of a whole or to compare quantities. It's often symbolized by "%". For instance, if a garage houses 100 cars and 25 of them are white, we can state that 25% of the cars in the garage are white.

              </p>
            </div>
            <div class="column-layout group_9">
              <h6 class="h6">
                How to compute a percentage?
              </h6>
              <p class="typography__body-1 text">
                Calculating a percentage typically involves dividing the part (the smaller value) by the whole (the larger value) and then multiplying the result by 100. This yields the percentage value ranging between 0 and 100. For example, if you possess 50 apples and wish to determine the percentage of red ones, with 20 being red, you would divide 20 by 50 to obtain 0.4, then multiply by 100 to get 40%.

              </p>
            </div>
            <div class="column-layout group_9">
              <h6 class="h6">
                Why are percentages significant?
              </h6>
              <p class="typography__body-1 text">
                Percentages find application in various scenarios, from computing discounts and taxes to tracking fluctuations in stock prices and economic metrics. Grasping the fundamentals of percentages aids in making well-informed decisions across personal finance and business management realms.
              </p>
            </div>
            <igc-expansion-panel ?open="${true}" indicator-position="end" class="expansion-panel">
              <p class="typography__body-1 text_1">
                This site is designed to provide efficient assistance in calculating percentages for diverse needs. Whether you're computing discounts, determining tips, or analyzing changes in value, our percentage calculator offers quick solutions.

              </p>
              <span slot="title">FAQ</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end" class="expansion-panel">
              <p class="typography__body-1 text_1">
                A percentage represents a fraction of 100 and is commonly utilized to express a portion of a whole or to compare quantities. It's often symbolized by "%". For instance, if a garage houses 100 cars and 25 of them are white, we can state that 25% of the cars in the garage are white.

              </p>
              <span slot="title">What defines a percentage?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end" class="expansion-panel">
              <p class="typography__body-1 text_1">
                Calculating a percentage typically involves dividing the part (the smaller value) by the whole (the larger value) and then multiplying the result by 100. This yields the percentage value ranging between 0 and 100. For example, if you possess 50 apples and wish to determine the percentage of red ones, with 20 being red, you would divide 20 by 50 to obtain 0.4, then multiply by 100 to get 40%.

              </p>
              <span slot="title">How to compute a percentage?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end" class="expansion-panel">
              <p class="typography__body-1 text_1">
                Percentages find application in various scenarios, from computing discounts and taxes to tracking fluctuations in stock prices and economic metrics. Grasping the fundamentals of percentages aids in making well-informed decisions across personal finance and business management realms.
              </p>
              <span slot="title">Why are percentages significant?</span>
            </igc-expansion-panel>
          </div>
        </div>
      </div>
      <div class="row-layout group_10">
        <div class="row-layout group_11">
          <div class="row-layout group_12">
            <p class="typography__subtitle-2 content">
              Heading
            </p>
            <a href="https://www.appbuilder.dev/privacy-policy" class="typography__body-2 hyperlink">
              Privacy Policy
            </a>
            <a href="https://www.appbuilder.dev/cookie-policy" class="typography__body-2 hyperlink">
              Cookies
            </a>
            <a href="https://www.appbuilder.dev/terms-of-use" class="typography__body-2 hyperlink">
              Terms of Use
            </a>
            <a href="https://www.appbuilder.dev/license-agreement" class="typography__body-2 hyperlink">
              License Agreement
            </a>
          </div>
          <p class="typography__subtitle-2 text_2">
            © Copyright 2025 App Builder
          </p>
          <div class="row-layout group_13">
            <p class="typography__body-2 content">
              Built with
            </p>
            <a href="https://www.infragistics.com/products/ignite-ui-angular" class="typography__body-2 hyperlink">
              Ignite UI
            </a>
            <p class="typography__body-2 content">
              &amp;
            </p>
            <a href="https://www.appbuilder.dev" class="typography__body-2 hyperlink">
              App Builder
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
