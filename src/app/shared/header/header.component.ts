import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from "../button-primary/button-primary.component";

@Component({
  selector: 'app-header',
  imports: [ButtonPrimaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './_header.component.scss'
})
export class HeaderComponent {

}
