import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tree',
  styleUrls: ['./tree.component.css'],
  template: `
    <h1>Edit tree.component to create a tree</h1>
    <pre>{{this.nodeTree | json}}</pre>
    <div class="wrapper">
        <div  class="root">
          {{printRoot(nodeTree)}}
        </div>
        <print-tree [nodeTree]="nodeTree"></print-tree>
    </div>
  `

})
export class TreeComponent implements OnInit {
  @Input() data:any = [];
  nodeTree = [];
  ngOnInit() {
    this.refactors();
  }

  refactors(){
    this.data.forEach(node => {
      // No parentId means top level
      if (!node.parentId) return this.nodeTree.push(node);

      // Insert node as child of parent in array
      const parentIndex = this.data.findIndex(el => el.id === node.parentId);
      //console.log("parentIndex", parentIndex);
      if (!this.data[parentIndex].children) {
        return this.data[parentIndex].children = [node];
      }

      this.data[parentIndex].children.push(node);
    });
  }

  printRoot(tree: any[]){
    return tree.filter( node => node.parentId === null).map(obj =>  obj.label);
  }
}
