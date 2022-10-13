import { SidebarProfileModule } from './sidebar-profile/sidebar-profile.module';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar-profile',
  templateUrl: './sidebar-profile.component.html',
  styleUrls: ['./sidebar-profile.component.css' , '../../app.component.css']
})
export class SidebarProfileComponent implements OnInit {

  profile = new SidebarProfileModule( 'Muhamed Sajid', 'Ahmed - AP' , 'a.sajid@jathwa.com.sa' , '054-111-0000' , 'Ahmed Hamad' , '../../../assets/01/pexels-italo-melo-2379004.png' , '../../../assets/01/pexels-italo-melo-2379004@2x.png' )

  constructor() { }

  ngOnInit(): void {
  }

}
