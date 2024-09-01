import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import * as faSolidSvg from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})

export class SideMenuComponent {
 @Output() close: EventEmitter<any> = new EventEmitter<any>();
 faicons:any = {
  angleright: faSolidSvg.faAngleRight,
  angledown: faSolidSvg.faAngleDown,
 }
 sideMenusList:any;

 constructor(private router: Router, private http: HttpClient){}
 
 ngOnInit():void {
  this.loadSideMenu();
}

public toggle = (side?:any) => {
  side.show = !side.show
}


 public loadSideMenu = async () => {
  const url = `json/technology-stack.json`;
  let indexer = 0;
  const mlist = await firstValueFrom(this.http.get(url)).then((res:any) => {
    res.forEach((x:any, ix:any) => { 
      indexer = indexer + ix;
      if(x?.menus?.length > 0){
        x.menus.forEach((sm?:any, six?:any)=>{
          indexer = indexer + six;
          sm.id = indexer;
        })
      }
    });
    return res;
  });
  this.sideMenusList = mlist;
 }

 public getLink = (m?:any) => {
  this.sideMenusList.forEach((x?:any) => {
    x.menus.forEach((sm:any)=>{
      sm.active = sm.id == m.id;
    });    
  });
  this.close.emit();
  this.router.navigate([m.path])
 }

}
