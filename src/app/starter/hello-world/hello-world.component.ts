import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<h2>Hello Shared Component</h2>
<p>
  hello-world works!
</p>
`
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
