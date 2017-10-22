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
            Content: 'After a lot of thought & recommendations, atlast, I have started working on my own website/web-blog.' +
            'Currently, this will feature my blog-posts, collection of videos that I collected over time. I will also be including some of my cracking tools collection\'s ' +
            'direct download links here. See you in the future.' +
            '<table class="pull-right mt-5">' +
            '    <tr>' +
            '        <td>B-Bye</td>' +
            '    </tr>' +
            '    <tr>' +
            '        <td>--gmastergreatee</td>' +
            '    </tr>' +
            '</table>'
        }
    ];
}
