import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iData } from './data.interface';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
    public sync(data: iData) {
        // this.http.post('/api/collection', data);
    }
}
