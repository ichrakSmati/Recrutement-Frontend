import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform (items: Array<any>, dep: string, term: string, titre: string) {

    if (items && items.length) {
      return items.filter(item => {
        if (dep && item.departement.indexOf(dep) === -1) {
          return false;
        }
        else if (titre && item.titre.toLowerCase().indexOf(titre.toLowerCase()) === -1) {
          return false;
        }

        else if (term && item.type.indexOf(term) === -1){
          return false;
        }
        return true;
      })
    } else {
      return items;
    }
  }
}
