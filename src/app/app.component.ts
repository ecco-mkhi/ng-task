import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { iData } from './data.interface';




@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

	public form?: FormGroup;
	
	constructor(private fb: FormBuilder,
				private api: ApiService,
	) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			name: '',
			kg: '',
			lb: '',
		});
	}

	send(input: iData) {
		return this.api.sync(input);
	}
}
