import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'spm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <spm-products></spm-products>
    </div> 
    `,
    providers:[ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'Shivi Product Management (SPM)';
}