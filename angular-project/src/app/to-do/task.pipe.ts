import  { PipeTransform,Pipe} from '@angular/core';
import { Todo } from '../todo';
@Pipe({
  name: 'taskfilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks:Todo[],searchTask:string):Todo[] {
    if(!tasks|| !searchTask){
      return tasks;
    }
    return tasks.filter(tasks=>tasks.task.toLowerCase().indexOf(searchTask.toLowerCase())!==-1)
  }
}
