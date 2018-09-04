import { NgModule } from '@angular/core';
import { AnotherRecipeComponent } from './another-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule} from 'ng-zorro-antd'

@NgModule({
  imports: [
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  declarations: [AnotherRecipeComponent],
  exports: [AnotherRecipeComponent]
})
export class AnotherRecipeModule { }
