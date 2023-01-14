import {ErrorSuggestion} from "./error-suggestion";

export class ErrorSuggestionDto {
  errorsSuggestions: ErrorSuggestion[] = [];
  components: string[] = [];
}
