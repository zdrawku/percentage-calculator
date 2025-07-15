import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';
import { WIthGlobalInputsComponent } from './with-global-inputs.component';

describe('WIthGlobalInputsComponent', () => {
  let component: WIthGlobalInputsComponent;
  let fixture: ComponentFixture<WIthGlobalInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WIthGlobalInputsComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WIthGlobalInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
