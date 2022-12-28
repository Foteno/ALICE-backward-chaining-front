import {Component, OnInit} from '@angular/core';
import {ComponentModel} from "../../models/component/component-model";
import {ComponentService} from "../../services/component-service/component.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  components: ComponentModel[] = [];

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    this.componentService.getComponents().subscribe(res => {
      this.components = res;
    });
  }

}
