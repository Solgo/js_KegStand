import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <h3 *ngFor="let newKeg of childKegList">{{newKeg.name}} from: {{newKeg.brand}} ABV%: {{newKeg.alccont}} Price: {{newKeg.price}} dollars.<button (click)="editButtonHasBeenClicked(newKeg)">Edit Keg</button></h3>
  </ul>
  `
})

export class KegListComponent
{
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}