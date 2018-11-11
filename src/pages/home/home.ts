import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "./../../providers/api/api";


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
	films: any;

	search() {
		this.navCtrl.push("SearchPage");
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
		this.init();
	}

	async init() {
		await this.apiProvider.getFilms().subscribe(response => {
			this.films = response;
			this.films = this.films.data;
			//console.clear();
			console.log("Films: ", this.films);
		});
	}

	openDetails(film) {
		this.navCtrl.push("FilmPage", { film: film });
	}

}
