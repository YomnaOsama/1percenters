import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

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
	tab0 = "HomePage";

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
	}

  ionViewDidLoad() {
	  console.log("ionViewDidLoad HomePage");
  }

}
