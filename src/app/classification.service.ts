import { Injectable } from '@angular/core';
import classification from './flat_tree.json';

@Injectable()
export class ClassificationService {
  get() {
    return classification;
  }
}
