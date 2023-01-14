import {Component, OnInit} from '@angular/core';
import {ErrorSuggestionDto} from "../../models/component/error-suggestion-dto";
import {ComponentService} from "../../services/component-service/component.service";
import {FactModelView} from "../../models/component/fact-model-view";
import {ErrorSuggestion} from "../../models/component/error-suggestion";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  columnsToDisplay = ['id', 'error', 'suggestion'];

  facts: FactModelView[] = [];
  errorSuggestionDto: ErrorSuggestionDto = new ErrorSuggestionDto();
  errorSuggestion: ErrorSuggestion[] = [];

  constructor(private componentService: ComponentService) {
  }

  ngOnInit(): void {
    this.componentService.getFacts().subscribe(facts => {
      this.facts = facts;
    });
  }

  analyseProblems() {
    const initialFactsChosen = this.facts.filter(fact => fact.checked).map(fact => fact.id);
    this.componentService.getAnalysis(initialFactsChosen).subscribe(analysis => {
      this.errorSuggestion = analysis.errorsSuggestions;
    });
  }
}
