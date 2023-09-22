import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  @Input() field: string = '';
  @Input() value: string = '';
  @Input() type: string = '';
}
