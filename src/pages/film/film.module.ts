import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FilmPage } from "./film";
import { Ionic2RatingModule } from "ionic2-rating";


@NgModule({
  declarations: [
    FilmPage
  ],
  imports: [
	  IonicPageModule.forChild(FilmPage),
	  Ionic2RatingModule
  ],
})
export class FilmPageModule {}
