import { FullDataItem } from './full-data-item.model';

export class FullData {
    public Data: FullDataItem[] = [
        // Blog Area Here
        {
            Id: 1,
            InheritId: 1,
            Caption: 'Started Development of My Own Angular-Based Blog',
            Date: 'October 12, 2017',
            // tslint:disable-next-line:max-line-length
            Content: 'After a lot of thought & recommendations, atlast, I have started working on my own website/web-blog. ' +
            'Currently, this will feature my blog-posts & videos that I collected over time.<br>I will also be including some of my cracking tools collection\'s ' +
            'direct download links here.<br><br>See you in the future.' +
            '<table class="pull-right mt-5">' +
            '    <tr>' +
            '        <td>B-Bye</td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td class="font-weight-bold">--gmastergreatee</td>' +
            '    </tr>' +
            '</table>'
        },
        {
            Id: 2,
            InheritId: 1,
            Caption: 'Static Blogging System Complete',
            Date: 'October 23, 2017',
            // tslint:disable-next-line:max-line-length
            Content: 'The module related to static blogging has been completed.<br>Stay tuned for more updates.' +
            '<table class="pull-right mt-5">' +
            '    <tr>' +
            '        <td>Till next time...</td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td class="font-weight-bold">--gmastergreatee</td>' +
            '    </tr>' +
            '</table>'
        }
    ];
}
