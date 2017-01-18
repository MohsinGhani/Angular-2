import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  email;
  constructor(private route: ActivatedRoute) {
    this.email = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
