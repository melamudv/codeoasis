import {Component, Inject} from '@angular/core';
import {ClassificationService} from './classification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ClassificationService],
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  tree:any;

  constructor(@Inject(ClassificationService) service: ClassificationService) {
    this.tree = service.get();
  }
}
