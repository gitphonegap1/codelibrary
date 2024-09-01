import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  ipc:any;
  menusList:any;
  constructor(private http: HttpClient, private router: Router){}

  ngOnInit():void{
    this.loadSideMenu();
  }

  public loadSideMenu = async () => {
    const url = `json/technology-stack.json`;
    const mlist = await firstValueFrom(this.http.get(url)).then((res: any) => {
      res.forEach((x: any, ix: any) => { x.id = ix + 1 });
      return res;
    });
    this.menusList = mlist;
  }

  public goToLink = (menu?:any) => {
    this.router.navigate([menu.path]);
  }


}
