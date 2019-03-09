import { SomeService } from './some.service';

export class SomeComponent implements OnInit {

    public employees = [];
    public errorMsg;
    constructor(private someService: SomeService) { }

    ngOnInit() {
        this.someService.getData()
            .subscribe(data => this.employees = data, error => this.errorMsg = error);
    }



}