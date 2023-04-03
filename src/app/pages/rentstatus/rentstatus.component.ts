import {Component, OnInit} from '@angular/core';
import {RentstatusService} from '../../services/rentstatus.service';

@Component({
  selector: 'app-rentstatus',
  templateUrl: './rentstatus.component.html',
  styleUrls: ['./rentstatus.component.scss']
})
export class RentstatusComponent implements OnInit {
  rentStatusM = '';
  rentStatusD = '';

  constructor(
    private rentstatusService: RentstatusService
  ) { }

  ngOnInit() {
    this.getRentStatusData();
    setInterval(this.getRentStatusData, 60000);
  }

  getRentStatusData() {
    this.rentstatusService.rentStatus().subscribe(
      (data:any) => {
        const tableDataMod = data["tabla"];
        this.rentStatusM = tableDataMod[0]["mes"];
        this.rentStatusD = tableDataMod[0]["dia"];
        console.log(this.rentStatusM, this.rentStatusD);

      },
      (error: any) => {
        console.error(error);
      }
    );
  }



}