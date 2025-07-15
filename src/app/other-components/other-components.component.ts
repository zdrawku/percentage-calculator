import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_CALENDAR_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxCheckboxComponent, IgxSwitchComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-other-components',
  imports: [IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgcFormsModule, IgxCheckboxComponent, IgxSwitchComponent, FormsModule],
  templateUrl: './other-components.component.html',
  styleUrls: ['./other-components.component.scss']
})
export class OtherComponentsComponent {
  public numericValue?: number = 2;
  public boolVar?: boolean;
  public dateVal: Date = new Date('2024-05-24T00:00');
}
