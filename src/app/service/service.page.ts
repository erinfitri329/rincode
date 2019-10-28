import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: 'service.page.html',
  styleUrls: ['service.page.scss'],
})
export class ServicePage {
  public form = [
      { val: 'LAPTOP/HP', isChecked: false },
      { val: 'PERABOT KAYU', isChecked: false },
      { val: 'ALAT DAPUR', isChecked: false },
      { val: 'ALAT ELEKTRONIK', isChecked: false }
    ];
}