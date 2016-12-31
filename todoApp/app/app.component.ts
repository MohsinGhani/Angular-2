import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent { 
  tasks:Array<string> = ["Task1","Task2","Task3"];
  task:string = '';
  addTask(){
    this.tasks.unshift(this.task);
  }
  
}
