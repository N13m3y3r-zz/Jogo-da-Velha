import { Component} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ rando }}
    </p>
  `,
  styles: [],
})
export class SquareComponent  {

  rando = Math.random();

}
