import {Component} from 'angular2/core'

var booties: Bootie[] = [
  {"id":1,"name":"mana booties"} ,
  {"id":2,"name":"speed booties"} ,
  {"id":3,"name":"intellisense booties"} ,
  {"id":4,"name":"brown laminate booties"}
]

interface Bootie {
  id: number,
  name: string
}

@Component({
  selector: 'doge-bootie',
  template: `This be a doge bootie list
  <ul class="booties">
    <li *ngFor="#bootie of booties" (click)="onSelect(bootie)">
      <!-- each hero goes here -->
      <span class="badge">{{bootie.id}}</span> {{bootie.name}}
    </li>
  </ul>
  `
})

export class BootieListComponent {
  public booties = booties
  public selectedBootie: Bootie
  public onSelect(bootie: Bootie) {
      this.selectedBootie = bootie
  }
}
