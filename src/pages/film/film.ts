import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "./../../providers/api/api";

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
	film: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, apiProvider : ApiProvider) {
		this.film = this.navParams.get("film");
		console.log("Comments: ", apiProvider.getComments(this.film.id)); //Must be logged in to retrieve comments!
	}

}
