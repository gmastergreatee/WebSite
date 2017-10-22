import { FullDataItem } from '../../datastore/full-data-item.model';
import { FullData } from '../../datastore/full-data.model';

import { Injectable } from '@angular/core';

@Injectable()
export class BlogManager {
    private blogList: FullDataItem[] = [];

    constructor(private fullData: FullData) {
        this.blogList = fullData.Data.filter(i => i.InheritId === 1).reverse();
    }

    GetBlogList(): FullDataItem[] {
        return this.blogList.slice();
    }
}
