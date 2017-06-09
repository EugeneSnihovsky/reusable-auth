'use strict';

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NotifyModule } from '@agiliumlabs/ng2-notify';

import { ReusableService } from './reusable.service';

@NgModule({
    imports: [
        BrowserModule,
        NotifyModule
    ],
    declarations: [

    ],
    exports: [
        NotifyModule
    ],
    providers: [
        ReusableService
    ]
})
export class ReusableModule { }
