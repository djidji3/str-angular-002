import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data buinding example';
  
  btnDisabled: boolean = false;
  btnVisibled: boolean = false;

  onSwitchDisabled(): void{
    this.btnDisabled = !this.btnDisabled;
  }

  onSwitchVisabled(): void{
    this.btnDisabled = !this.btnDisabled;
  }
}
