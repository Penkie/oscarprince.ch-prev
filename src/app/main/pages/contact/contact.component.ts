import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/common/services/color.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public color: string = '';
  
  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    this.colorService.getColor().subscribe((color: string) => {
      this.color = color;
    });
  }

}
