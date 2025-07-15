import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterViewComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
