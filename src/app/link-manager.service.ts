export class LinkManager {

    isTestmode = true;

    /**
     * Default constructor for the LinkManager service
     */
    constructor() { }

    /**
     * Gets the data-store's link for the application
     */
    GetMainLink(): string {
        if (this.isTestmode) {
            return 'http://127.0.0.1/';
        }
        return 'https://raw.githubusercontent.com/gmastergreatee/MyDataStore/master/';
    }

    /**
     * Gets the link for the main file of the data-store
     */
    GetRootFileLink(): string {
        return this.GetMainLink() + 'main.json';
    }
}
