import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'progress-spinner',
    templateUrl: './progress-spinner.component.html',
    styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
    // determinate
    determinate = {
        color: 'primary',
        value: 10
    };

    constructor() { }

    ngOnInit() {
    }

    // 设置数值
    setValue(value) {
        if (!isNaN(value)) {
            this.determinate.value = value;
        } else if (value === 'loading') {
            this.determinate.value = 10;
            let timer = setInterval(() => {
                this.determinate.value = this.determinate.value + 5;
                if (this.determinate.value === 100) {
                    clearInterval(timer);
                    timer = undefined;
                }
            }, 500);
        }
    }

}
