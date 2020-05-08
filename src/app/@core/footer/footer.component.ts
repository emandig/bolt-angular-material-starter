import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isProd = environment.production;
  envName = environment.envName;
  version = environment.versions.app;
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
