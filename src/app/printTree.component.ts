import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'print-tree',
    styleUrls: ['./printTree.component.css'],
    template: `
        <div class="wrapper">
            <div *ngFor="let node of nodeTree">
                <div *ngIf="node.parentId !== null" class="firstLevel">
                    {{node.label}}
                    {{findChildren(node)}}
                    <div [innerHTML]="printTree.join('')"></div>
                </div>
            </div>
        </div>
        
    `

})
export class PrintTreeComponent {
    @Input() nodeTree:any;
    printTree = [];

    findChildren(node){
        this.printTree = [];
        this.innerChildren(node);
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
        return this.printTree.join('');
    }
}
