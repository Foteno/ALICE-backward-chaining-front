import {RuleModel} from "./rule-model";
import {FactModel} from "./fact-model";

export class FrontDto {
  rules: RuleModel[] = [];
  facts: FactModel[] = [];
}
