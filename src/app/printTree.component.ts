import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'print-tree',
    styleUrls: ['./printTree.component.css'],
    template: `
        <div class="wrapper">
            <div *ngFor="let node of nodeTree;">
                <div *ngIf="node.parentId !== null">
                    {{findNode(node)}}
                    <div [innerHTML]="printTree.join('')"></div>
                </div>
            </div>
        </div>
        
    `

})
export class PrintTreeComponent {
    @Input() nodeTree:any;
    printTree = [];

    findNode(node){
        this.printTree = [];
        this.printTree.push(`<div class="firstLevel">${node.label}`);
        this.innerChildren(node);
        this.printTree.push(`</div>`);
    }
    innerChildren(node){

        this.printTree.push(`<div class="level">`);
        node.children.forEach(val => {
            this.printTree.push(`<div class="inner">${val.label}`);
            if (val.children) {
                this.innerChildren(val)
            }
            this.printTree.push(`</div>`);
        });

        this.printTree.push(`</div>`);

    }
}
