import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent {
  @Input() text: string;
  @Input() buttonColor: string;
  @Input() buttonTextColor: string;
  @Input() useStepperNext: boolean;
  @Input() buttonBorderColor: string;
  @Input() type: string;
  @Input() disabled: boolean;

  constructor() {
    this.text = "";
    this.buttonColor = "";
    this.buttonTextColor = "";
    this.useStepperNext = false;
    this.buttonBorderColor = "";
    this.type = "button"
    this.disabled = false;
  }
}
