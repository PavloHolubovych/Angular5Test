import {Component} from '@angular/core'

@Component({
    selector: 'my-app'
    template:`<label>KUKU</label> <input [(ngModel)] = "name"/><h2>Welcomem {{name}}</h2>`
})
export class AppComponent{
    name = ""
}