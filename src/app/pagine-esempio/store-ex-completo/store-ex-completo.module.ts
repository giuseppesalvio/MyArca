import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { StoreExCompletoComponent } from "./store-ex-completo.component";
import { peopleFeatureKey, peopleReducer } from "./store/people.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PeopleEffects } from "./store/people.effects";
import { PeopleService } from "../../services/people.service";

@NgModule({
  declarations: [StoreExCompletoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(peopleFeatureKey, peopleReducer),
    EffectsModule.forRoot([PeopleEffects]),
  ],
  exports: [],
  providers: [PeopleService],
})
export class StoreExCompletoModule {}
