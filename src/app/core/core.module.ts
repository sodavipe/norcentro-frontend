import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRepository } from './repository/inventory/inventory.repository';
import { InventoryWebRepository } from '../data/repository/inventory/inventory-web.repository';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [

        { provide: InventoryRepository, useClass: InventoryWebRepository },

    ]
})

export class CoreModule { }
