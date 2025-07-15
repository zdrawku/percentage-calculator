import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_SLIDER_DIRECTIVES, IgcFormsModule, IGX_CALENDAR_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxSwitchComponent } from 'igniteui-angular';
import { OtherComponentsComponent } from './other-components.component';

describe('OtherComponentsComponent', () => {
  let component: OtherComponentsComponent;
  let fixture: ComponentFixture<OtherComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherComponentsComponent, NoopAnimationsModule, FormsModule, IGX_SLIDER_DIRECTIVES, IgcFormsModule, IGX_CALENDAR_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
