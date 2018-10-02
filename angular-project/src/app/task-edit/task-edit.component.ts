import { CustomApiService } from './../custom-api.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input() taskData: any = { id :0 , task: '', employee: '', department: '' };
  constructor(
    public api: CustomApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.api.getTask(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.taskData = data;
    });
  }

  updateProduct() {
    this.api.updateTask(this.route.snapshot.params['id'], this.taskData).subscribe((result) => {
      this.router.navigate(['/task-details/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
