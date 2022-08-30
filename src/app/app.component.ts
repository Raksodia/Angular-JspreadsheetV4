import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as jspreadsheet from 'jspreadsheet-ce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('excelTest') excelTestCtl: any;

  ngAfterViewInit(): void {
    const divElement = this.excelTestCtl.nativeElement as HTMLDivElement;

    const month = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

    this.excelTestCtl = jspreadsheet(divElement, {
      minDimensions: [10, 10],
      data: [
        ['Valor 1', ''],
        ['Valor 2', ''],
        ['Valor 3', ''],
        ['Valor 4'],
        ['Valor 5'],
        ['Valor ', ''],
        ['Valor ', ''],
        ['Valor ', '=B4+B7'],
        ['Valor ', '=IF(B1==0,0,B8/B1)'],
        ['Valor ', '=SUM(B12:B14)'],
        ['Valor ', '=IF(B1==0,0,B10/B1)'],
        ['Valor ', ''],
        ['Valor ', ''],
        ['Valor ', ''],
        ['Valor ', '=B10+B8'],
        ['Valor ', '=IF(B1==0,0,(B15/B1)*100)']
      ],
      columns: [
        { name: 'description', title: 'Descripción', type: 'text', align: 'left', width: 250 },
        { name: 'm01', title: 'Enero', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm02', title: 'Febrero', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm03', title: 'Marzo', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm04', title: 'Abril', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm05', title: 'Mayo', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm06', title: 'Junio', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm07', title: 'Julio', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm08', title: 'Agosto', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm09', title: 'Septiembre', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm10', title: 'Octubre', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm11', title: 'Noviembre', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
        { name: 'm12', title: 'Diciembre', type: 'numeric', align: 'right', width: 150, mask: '0.00' },
      ]
    });
  }
}
