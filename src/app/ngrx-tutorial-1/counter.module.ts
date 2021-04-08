import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter-component/counter.component";
import { counterFeatureKey, reducer } from "./reducer/counter.reducer";

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, StoreModule.forFeature(counterFeatureKey, reducer)],

  exports: [CounterComponent],
})
export class CounterModule {}
