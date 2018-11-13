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

	getFilms(args : string = "") {
		return this.http.get(`https://yts.am/api/v2/list_movies.json${args}`);
	}

	getSearch(search : string = "") {
		return this.http.get(`https://yts.am/api/v2/list_movies.json?query_term=${search}`);
	}

	getComments(id : number) {
		this.http.get(`https://yts.am/api/v2/movie_comments.json?movie_id=${id}`);
	}

	getSuggestions(id : number) {
		this.http.get(`https://yts.am/api/v2/movie_suggestions.json?movie_id=${id}`);
	}

}
