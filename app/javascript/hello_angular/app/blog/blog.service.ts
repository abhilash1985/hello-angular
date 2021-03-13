// blog.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BlogIndexComponent  } from 'rxjs';

import { Blog } from './blog.class';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  constructor(private http: HttpClient) { }

  getBlogs(): Observable {
    return this.http
      .get('/blogs.json')
      .pipe(
        map((blogs: Blog[]) => blogs.map(blog => {
        return new Blog(
          blog.id,
          blog.title,
          blog.content,
        )
    })));
  }
}
