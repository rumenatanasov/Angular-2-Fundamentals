import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'edit-comment',
    templateUrl: './edit-comment.component.html'
})

export class EditCommentComponent implements OnInit {
    content: string;
    id: number;

    constructor(private dataService: DataService,
        private route: ActivatedRoute,
        private router: Router) {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
    }
    ngOnInit() {
            this.dataService.getCommentById(this.id).then(data => this.content = data.content);
    }
    onSubmit() {
        this.dataService.editComment(this.id, this.content).then(data => console.log('Comment updated'));
         //this.router.navigate([`/car/details/${this.id}`])
    }
}