import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceAtSymbol'
})
export class ReplaceAtSymbolPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace('@', '&#64;');
  }
}
