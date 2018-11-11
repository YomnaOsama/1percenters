import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

	constructor(public http: HttpClient) {

	}

	getFilms() {
		return this.http.get("https://yts.am/api/v2/list_movies.json");
	}

	getSearch(search : string = "") {
		return this.http.get(`https://yts.am/api/v2/list_movies.json?query_term=${search}`);
	}
}
