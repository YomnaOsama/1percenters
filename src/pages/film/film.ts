import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the FilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-film",
  templateUrl: "film.html",
})
export class FilmPage {
film : any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.film = this.navParams.get("film");
	}

}
