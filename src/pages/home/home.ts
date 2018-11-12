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
	items = [];
	page : number = 0;

	search() {
		this.navCtrl.push("SearchPage");
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
		this.init();
	}

	async init(args : string = "") {
		await this.apiProvider.getFilms(args).subscribe(response => {
			this.films = response;
			this.films = this.films.data;
			//console.clear();
			console.log("Films: ", this.films);
			this.items = this.items.concat(this.films.movies);
			this.page = this.films.page_number;
			console.log("items[]: ", this.items);
			console.log("Page: ", this.page);
		});
	}

	openDetails(film) {
		this.navCtrl.push("FilmPage", { film: film });
	}

	doInfinite(infiniteScroll) {
		setTimeout(async () => {
			console.log("Begin async operation");
			this.page ++;
			await this.init(`?page=${this.page}`);
			console.log("Movies: ", this.films);
			console.log("Async operation has ended");
			console.log("Films: ", this.films);
			infiniteScroll.complete();
		}, 500);
	}

}
