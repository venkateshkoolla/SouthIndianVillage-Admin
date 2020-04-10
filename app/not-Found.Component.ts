import {Component} from '@angular/core'

@Component({
    selector: 'not-found',
    template: `
    <div>
    <h3>Page not found!!!!!!!! 
    <a routerLink= "/"><h3>gohome</h3></a>
    </h3>
    </div>
    `
})

export class NotFoundComponent{
    
}