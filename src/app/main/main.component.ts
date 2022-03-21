import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public colors = ["#e24444", "#e28344", "#71e244", "#44d7e2", "#446ee2", "#8e44e2", "#e24486"];
  public selectedColor: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedColor = this.selectNewColor();
  }

  public selectNewColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length )];
  }

}
