import { FullDataItem } from '../../datastore/full-data-item.model';
import { BlogManager } from './blog-manager.service';

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare var anime: any;

@Component({
  selector: 'gm-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit, OnInit {
  isInitialized = false;
  blogFullDatas: FullDataItem[] = [];
  blogHeader = '';
  blogContent = '';
  paramsError = false;

  constructor(private blogManager: BlogManager, private route: ActivatedRoute, private router: Router) {
    this.blogFullDatas = blogManager.GetBlogList();
  }

  ngOnInit() {
    let passedId = +this.route.snapshot.params['id'];
    if (isNaN(passedId)) {
      this.router.navigate(['/redirectToBase']);
    }
    let foundBlog = this.blogFullDatas.find(i => i.Id === passedId);
    if (foundBlog === undefined) {
      this.router.navigate(['/redirectToBase']);
      this.paramsError = true;
      return true;
    }
    this.blogContent = foundBlog.Content;
    this.blogHeader = foundBlog.Caption;

    this.route.params.subscribe((params: Params) => {
      if (this.isInitialized) {
        this.animateContent(false);
        setTimeout(() => {
          passedId = +params['id'];
          foundBlog = this.blogFullDatas.find(i => i.Id === passedId);
          this.blogContent = foundBlog.Content;
          this.blogHeader = foundBlog.Caption;
          this.animateContent(true);
        }, 120);
      }
    });

    this.isInitialized = true;
  }

  /**
   * Highlights the selected blog-list-item
   * @param id The unique Id of the blog element
   */
  clickOnBlogListItem(id: number) {
    if (!this.paramsError) {
      const allItems = document.getElementsByClassName('list-group-item');
      for (let i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove('active');
      }
      document.getElementById('blog-itm-' + id).classList.add('active');
    }
  }

  ngAfterViewInit() {
    this.animate();
    this.clickOnBlogListItem(+this.route.snapshot.params['id']);
  }

  private animate() {
    let doSomething = anime({
      targets: '#sidebar',
      translateX: {
        value: -500,
        delay: 100
      },
      opacity: {
        value: 0,
        delay: 2000
      },
      direction: 'reverse',
      easing: 'easeInQuad',
      elasticity: 900
    });

    doSomething = anime({
      targets: '#blogContent',
      translateX: {
        value: 5000,
        delay: 100
      },
      opacity: {
        value: 0,
        delay: 2000
      },
      direction: 'reverse',
      easing: 'easeInQuad',
      elasticity: 900
    });
  }

  private animateContent(animateIn: boolean) {
    if (!animateIn) {
      const doSomething = anime({
        targets: '#blogContent',
        translateX: +200,
        opacity: 0,
        easing: 'easeInQuad',
        elasticity: 900,
        duration: 100
      });
    } else {
      const doSomething = anime({
        targets: '#blogContent',
        translateX: 0,
        opacity: 1,
        easing: 'easeOutCirc',
        elasticity: 50,
        duration: 300
      });
    }
  }

}
