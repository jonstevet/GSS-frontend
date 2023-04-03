import {Component, OnInit } from '@angular/core';
import {RentstatustableService} from '../../services/rentstatustable.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-rentstatustable',
  templateUrl: './rentstatustable.component.html',
  styleUrls: ['./rentstatustable.component.scss']
})
export class RentstatustableComponent implements OnInit {
  tableData = [];

  dateinit = new FormControl();
  dateend = new FormControl();

  constructor(
    private rentService: RentstatustableService
  ) { }

  ngOnInit() {
    this.getRentTableData();

    this.dateinit = new FormControl();
    this.dateend = new FormControl();

    this.dateinit.valueChanges
    .subscribe(dateinit => {
      this.getRentTableData(dateinit, this.dateend.value);
    });
    this.dateend.valueChanges
    .subscribe(dateend => {
      this.getRentTableData(this.dateinit.value, dateend);
    });
  }


  getRentTableData(dateinit?:Date, dateend?:Date) {
    this.rentService.rentTableData(dateinit, dateend).subscribe(
      (data:any) => {
        const tableDataMod = data["tabla"];
        let result:any=[];
        tableDataMod.forEach((element:any) => {
          const rent= {
            cedula: element["cliente"]["cedula"] as string,
            nombre: element["cliente"]["nombre"] as string,
            fecha: element["fecha"] as Date,
            tiempo: element["tiempo"] as number,
            saldo: element["saldo"] as number,
            placa: element["carro"]["placa"] as string,
            marca: element["carro"]["marca"] as string
          };
          result.push(rent);
        });
        this.tableData = result;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  displayedColumns: string[] = ['cedula', 'nombre', 'fechaAlquiler', 'tiempoAlquilado', 'saldo', 'placa', 'marca'];

}
