import { BlogManager } from '../blog/blog-manager.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gm-base-redirector',
  templateUrl: './base-redirector.component.html',
  styleUrls: ['./base-redirector.component.css']
})
export class BaseRedirectorComponent implements OnInit {

  constructor(private blogManager: BlogManager, private router: Router) {
    const data = blogManager.GetBlogList()[0];
    router.navigate(['/blog', data.Id]);
  }

  ngOnInit() {
  }

}
