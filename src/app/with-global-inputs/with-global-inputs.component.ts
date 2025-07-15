import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { ResultModel } from '../models/calculate-percentages/result-model';
import { CalculatePercentagesService } from '../services/calculate-percentages.service';

@Component({
  selector: 'app-with-global-inputs',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './with-global-inputs.component.html',
  styleUrls: ['./with-global-inputs.component.scss']
})
export class WIthGlobalInputsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public whatIsPercentChangeFromXtoY1?: ResultModel;
  public whatIsPercentChangeFromXtoY1$: Subject<void> = new Subject<void>();


  private _inpVal1: number = 5;
  public get inpVal1(): number {
    return this._inpVal1;
  }
  public set inpVal1(value: number) {
    this._inpVal1 = value;
    this.whatIsPercentChangeFromXtoY1$.next();
  }

  private _inpVal2: number = 100;
  public get inpVal2(): number {
    return this._inpVal2;
  }
  public set inpVal2(value: number) {
    this._inpVal2 = value;
    this.whatIsPercentChangeFromXtoY1$.next();
  }

  constructor(
    private calculatePercentagesService: CalculatePercentagesService,
  ) {}


  ngOnInit() {
    this.calculatePercentagesService.getResultModel1(this.inpVal1 as any, this.inpVal2 as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.whatIsPercentChangeFromXtoY1 = data
    );
    this.whatIsPercentChangeFromXtoY1$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.calculatePercentagesService.getResultModel1(this.inpVal1 as any, this.inpVal2 as any).pipe(take(1)).subscribe(
        data => this.whatIsPercentChangeFromXtoY1 = data
    )});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.whatIsPercentChangeFromXtoY1$.complete();
  }
}
