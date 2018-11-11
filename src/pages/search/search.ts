import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "./../../providers/api/api";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html",
})
export class SearchPage {
	searchQuery: string = "";
	query : object;
	items: string[];


	initializeItems() {
		this.items = [
			"Amsterdam",
			"Bogota"
		];
	}

	async getItems(ev: any) {
		// Reset items back to all of the items
		this.initializeItems();

		// set val to the value of the searchbar
		const val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != "") {
			await this.apiProvider.getSearch(val).subscribe(response => {
				this.query = response;
				console.log("Query: ", this.query);
			});
		}
	}

	openDetails(film) {
		this.navCtrl.push("FilmPage", { film: film });
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider : ApiProvider) {
		this.initializeItems();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
  }

}
