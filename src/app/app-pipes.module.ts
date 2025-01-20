import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceAtSymbolPipe } from './replace-at-symbol.pipe';

@NgModule({
  declarations: [ReplaceAtSymbolPipe],
  exports: [ReplaceAtSymbolPipe],
  imports: [CommonModule],
})
export class AppPipesModule {}
