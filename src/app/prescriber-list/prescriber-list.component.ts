import { Component, OnInit } from '@angular/core';
import { Prescriber } from '../shared/prescriber.model';
import { PrescriberService } from '../shared/prescriber.service';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-prescriber-list',
  templateUrl: './prescriber-list.component.html',
  styleUrls: ['./prescriber-list.component.css']
})
export class PrescriberListComponent implements OnInit {
  prescribers : Prescriber[];
  constructor(private prescriberService: PrescriberService,private item:ItemService) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList(){
    this.prescriberService.getPrescriberList().then(res=>this.prescribers = res as Prescriber[]);
  }

}
