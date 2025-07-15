import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { ResultModel } from '../models/calculate-percentages/result-model';
import { CalculatePercentagesService } from '../services/calculate-percentages.service';

@Component({
  selector: 'app-master-view',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _input1: number = 5;
  public get input1(): number {
    return this._input1;
  }
  public set input1(value: number) {
    this._input1 = value;
    this.whatIsXpercentOfY$.next();
  }

  private _input6: number = 7149;
  public get input6(): number {
    return this._input6;
  }
  public set input6(value: number) {
    this._input6 = value;
    this.whatIsPercentChangeFromXtoY$.next();
  }

  private _input4: number = 100;
  public get input4(): number {
    return this._input4;
  }
  public set input4(value: number) {
    this._input4 = value;
    this.xisWhatPercentOfY$.next();
  }

  private _input2: number = 100;
  public get input2(): number {
    return this._input2;
  }
  public set input2(value: number) {
    this._input2 = value;
    this.whatIsXpercentOfY$.next();
  }

  private _input5: number = 5455;
  public get input5(): number {
    return this._input5;
  }
  public set input5(value: number) {
    this._input5 = value;
    this.whatIsPercentChangeFromXtoY$.next();
  }

  private _input3: number = 10;
  public get input3(): number {
    return this._input3;
  }
  public set input3(value: number) {
    this._input3 = value;
    this.xisWhatPercentOfY$.next();
  }
  public whatIsXpercentOfY?: ResultModel;
  public whatIsXpercentOfY$: Subject<void> = new Subject<void>();

  public whatIsPercentChangeFromXtoY?: ResultModel;
  public whatIsPercentChangeFromXtoY$: Subject<void> = new Subject<void>();

  public xisWhatPercentOfY?: ResultModel;
  public xisWhatPercentOfY$: Subject<void> = new Subject<void>();

  constructor(
    private calculatePercentagesService: CalculatePercentagesService,
  ) {}


  ngOnInit() {
    this.calculatePercentagesService.getResultModel(this.input1 as any, this.input2 as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.whatIsXpercentOfY = data
    );
    this.whatIsXpercentOfY$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.calculatePercentagesService.getResultModel(this.input1 as any, this.input2 as any).pipe(take(1)).subscribe(
        data => this.whatIsXpercentOfY = data
    )});
    this.calculatePercentagesService.getResultModel1(this.input5 as any, this.input6 as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.whatIsPercentChangeFromXtoY = data
    );
    this.whatIsPercentChangeFromXtoY$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.calculatePercentagesService.getResultModel1(this.input5 as any, this.input6 as any).pipe(take(1)).subscribe(
        data => this.whatIsPercentChangeFromXtoY = data
    )});
    this.calculatePercentagesService.getResultModel2(this.input3 as any, this.input4 as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.xisWhatPercentOfY = data
    );
    this.xisWhatPercentOfY$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.calculatePercentagesService.getResultModel2(this.input3 as any, this.input4 as any).pipe(take(1)).subscribe(
        data => this.xisWhatPercentOfY = data
    )});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.whatIsXpercentOfY$.complete();
    this.whatIsPercentChangeFromXtoY$.complete();
    this.xisWhatPercentOfY$.complete();
  }
}
