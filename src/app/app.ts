import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Flow} from './components/flow/flow';

@Component({
  selector: 'app-root',
  imports: [Flow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
