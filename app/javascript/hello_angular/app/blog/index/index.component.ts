// index.component.ts

import { Component, OnInit } from '@angular/core';

import { templateString } from './index.component.html';
import { BlogService }  from '../blog.service';
import { Blog }  from '../blog.class';

@Component({
  selector: 'blogs',
  template: templateString,
})

export class BlogIndexComponent implements OnInit {
  blogs: Blog[];

  constructor(
    private blogService: BlogService,
  ) {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }

  ngOnInit() { }
}
