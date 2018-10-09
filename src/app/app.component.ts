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


    constructor(private http: Http) {}

    getData() {
        this.http.get("http://www.recipepuppy.com/api")
            .map(res => res.json())
            .subscribe(data => {
                this.data = data;
            },error=>{
                console.log(error);// Error getting the data
            });
    }

}
