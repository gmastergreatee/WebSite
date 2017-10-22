import { RootDataItem } from './root-data-item.model';

export class RootData {
    public rootList: RootDataItem[] = [];
    constructor() {
        const tempCaption = 'My Blog';                              // 1
        const tempRootDataItem = new RootDataItem(1, tempCaption);
        this.rootList.push(tempRootDataItem);
    }
}
