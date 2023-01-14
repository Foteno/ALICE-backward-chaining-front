export class ErrorSuggestion {
  constructor(id: string, error: string, suggestion: string) {
    this.id = id;
    this.error = error;
    this.suggestion = suggestion;
  }

  id: string = "";
  error: string = "";
  suggestion: string = "";
}
