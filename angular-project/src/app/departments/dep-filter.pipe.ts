import  { PipeTransform,Pipe} from '@angular/core';
import { Department } from '../department';
@Pipe({
  name: 'depfilter'
})
export class DepFilterPipe implements PipeTransform {
  transform(departments:Department[],searchDep:string):Department[] {
    if(!departments|| !searchDep){
      return departments;
    }
    return departments.filter(department=>department.name.toLowerCase().indexOf(searchDep.toLowerCase())!==-1)
  }
}
