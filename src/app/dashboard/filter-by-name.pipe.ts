import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
//var count=0;
export class FilterByNamePipe implements PipeTransform {

  transform(values: any, term: any): any {
    //return null;
    if(term===undefined) return values;
    return values.filter(function(value ){
                                         
           return  value.name.toLowerCase().includes(term.toLowerCase());
          

           //item.name.toLowerCase().indexOf(value.toLowerCase());
     

    })

  }

}
