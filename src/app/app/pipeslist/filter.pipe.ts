/*import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterString:string,propName:string):any[] {
    const result:any =[];
    if(!value ||filterString==='' ||propName===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
       return result;
    }
    
  }*/

  import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const products = [];
    for (const product of value) {
      if (product['name'] === filterString) {
        products.push(product);
      }
    }
    return products;
  }

}


