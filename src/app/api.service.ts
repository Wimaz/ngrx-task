import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    url = 'http://localhost:8080/'

    get(endpoint: string):Observable<any> {
        return this.http.get(this.url + endpoint);
    }
    
    post(endpoint: string, params: any):Observable<any> {
        const options = {...params,  'Content-Type': 'application/json' };
        return this.http.post(this.url + endpoint, options);
    }

    async getItems(): Promise<string[]> {        
        return new Promise((res, rej) => {
            this.get('list').subscribe(result => {                
                if(!result.data.length) res([])
                else res(result.data);
            });        
        })
        
        
    }

    async saveItems(items$: Observable<string[]>): Promise<string[]> {
        return new Promise((res, rej) => {
            items$.subscribe(items => {                
                this.post('list', { items }).subscribe(result => {                    
                    if(!result.data.length) res([])
                    else res(result.data);
                });            
            })            
        })
    }
}


