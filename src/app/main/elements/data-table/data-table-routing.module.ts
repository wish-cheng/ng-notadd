import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableComponent } from './data-table.component';

const routes: Routes = [
    {
        path: '',
        component: DataTableComponent,
        pathMatch: 'full',
        data: {
            title: '数据表'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class DataTableRoutingModule {
}
