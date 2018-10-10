import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'content',
	templateUrl: '../templates/index.html',
})

export class AppComponent {

	private apiUrl = 'http://recipepuppy.com/api';
	//private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
	data: any = {};


	constructor(private http: Http) {
	}

	getData(query) {
		this.http.get("http://www.recipepuppy.com/api/?q=" + query)
			.map(res => res.json())
			.subscribe(data => {
				this.data = data.results;
			});
	}

	search(query){
		query = query.path[0].value;
		if(query != '') {
			document.getElementById('results').style.display = "block";
			document.getElementById('header').style.height = "400px";
		}else {
			document.getElementById('results').style.display = "none";
			document.getElementById('header').style.height = window.outerHeight - 50 + 'px';
		}
		this.getData(query);
	}

}
