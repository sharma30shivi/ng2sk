import { Component } from '@angular/core';

@Component({
  selector: 'spm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <spm-products></spm-products>
    </div> 
    `
})

export class AppComponent {
  pageTitle: string = 'Shivi Product Management (SPM)';
}