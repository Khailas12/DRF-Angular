import { Component } from '@angular/core';
import { PublicService } from './services/public.service'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'frontend (AUTH SYSTEM)';
    msg: any;

    constructor(private publicService: PublicService) {
        console.log('AppComponent constructor()');
    }

    ngOnInit(): void {
        this.showMessage();
    }

    showMessage() {
        this.publicService.getMessage().subscribe(
            res => {
                this.msg = res;
                console.log('AppComponent showMessage() res:', res);
            },
            err => {
                console.log('AppComponent showMessage() err:', err);
            }
        )
    }
}
