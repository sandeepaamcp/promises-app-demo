import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts;

  constructor(private postsService: PostsService) {

  }

  ngOnInit() {
    this.postsService.getPosts().then(posts => {
      
      this.posts = posts;
      console.log(this.posts);
      console.log(this.posts.posts);

    });
  }

}
