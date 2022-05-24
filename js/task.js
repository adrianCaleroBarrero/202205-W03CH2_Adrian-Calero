export class Task {
  constructor(id = 0, name = '', responsable = '', isCompleted = false) {
    this.id = id;
    this.name = name;
    this.responsable = responsable;
    this.isComplete = isCompleted;
  }
}
