import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MarkdownModule } from 'ngx-markdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from "./header/header.component";
import * as faSolidSvg from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, MarkdownModule, FontAwesomeModule, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-practice';
  miniMenu:any;
  faicons = {
    menu: faSolidSvg.faBars,
    close: faSolidSvg.faXmark
  };
  constructor(private http: HttpClient){}
  ngOnInit(){

  }


  public openMenu = () => {
    this.miniMenu = true;
  }
  public closeMenu = () => {
    this.miniMenu = false;
  }
}
