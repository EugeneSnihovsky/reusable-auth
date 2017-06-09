'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class ReusableService {

    public getSomething(): string {
        return 'Something from reusable service';
    }

}
