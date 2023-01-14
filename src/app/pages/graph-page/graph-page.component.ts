import {Component, HostListener, OnInit} from '@angular/core';
import {ComponentService} from "../../services/component-service/component.service";
import {ClusterNode, Edge, Node as GraphNode} from "@swimlane/ngx-graph";
import {BehaviorSubject, Subject} from "rxjs";
import {FrontDto} from "../../models/component/front-dto";

@Component({
  selector: 'app-main-page',
  templateUrl: './graph-page.component.html',
  styleUrls: ['./graph-page.component.scss']
})
export class GraphPageComponent implements OnInit {

  components: FrontDto = new FrontDto();
  ready = new BehaviorSubject<boolean>(false);
  update: Subject<boolean> = new Subject();

  links: Edge[] = [];
  nodes: GraphNode[] = [];
  clusters: ClusterNode[] = [];//maybe

  scrHeight: number = 0;
  scrWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight - 30;
    this.scrWidth = window.innerWidth;
  }

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    this.getScreenSize();
    this.getComponents();
  }

  getComponents() {
    this.componentService.getFactsGraph().subscribe(res => {
      this.components = res;

      this.mapNodes(res);
      this.ready.next(true);
    });
  }

  private mapNodes(frontDto: FrontDto) {
    frontDto.facts.forEach(fact => {
      const node: GraphNode = {
        id: fact.id,
        label: fact.attribute
      };
      this.nodes.push(node);
    });

    frontDto.rules.forEach(rule => {
      rule.antecedentsId.forEach((antecedent, index) => {
        const link: Edge = {
          id: 'p' + index + rule.id,
          source: antecedent,
          target: rule.consequentId
        };
        this.links.push(link);
      });
    });
  }
}
