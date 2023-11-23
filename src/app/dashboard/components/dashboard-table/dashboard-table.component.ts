import {Component, Input, OnInit} from '@angular/core';
import {ProcessEntryDashboardTable} from "../../model/process-entry-dashboard-table";
import {ProcessEntriesDashboardTableService} from "../../services/process-entries-dashboard-table.service";
import {MatTableDataSource} from "@angular/material/table";
import {CropsService} from "../../../crops/services/crops.service";
import {TokenStorageService} from "../../../shared/services/tokenStorage.service";
@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {
  dataSource: MatTableDataSource<ProcessEntryDashboardTable>;
  companyId: number = this.tokenStorageService.getCompanyId();
  columns = [
    {
      columnDef: 'cropId',
      header: 'Crop ID',
      cell: (element: ProcessEntryDashboardTable) => `${element.cropId}`,
    },
    {
      columnDef: 'author',
      header: 'Author',
      cell: (element: ProcessEntryDashboardTable) => `${element.author}`,
    },
    {
      columnDef: 'startDate',
      header: 'Crop Start Date',
      cell: (element: ProcessEntryDashboardTable) => `${element.startDate}`,
    },
    {
      columnDef: 'currentPhase',
      header: 'Current Phase',
      cell: (element: ProcessEntryDashboardTable) => `${element.cropPhase}`,
    },
    {
      columnDef: 'recordDate',
      header: 'Record Date',
      cell: (element: ProcessEntryDashboardTable) => `${element.date}`,
    },
    {
      columnDef: 'recordTime',
      header: 'Record Time',
      cell: (element: ProcessEntryDashboardTable) => `${element.time}`,
    },
    {
      columnDef: 'comment',
      header: 'Comment',
      cell: (element: ProcessEntryDashboardTable) => `${element.comment}`,
    },
  ];
  displayedColumns: Array<String> = [];
  crops: any;

  constructor(private processApiService: ProcessEntriesDashboardTableService, private cropApiService: CropsService,private tokenStorageService: TokenStorageService) {
    this.dataSource = new MatTableDataSource<ProcessEntryDashboardTable>();
  }

  toSnakeCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }

  sortByDateAndTime(array: any[]) {
    return array.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);

      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        // Dates are equal, compare times
        const timeA = a.time.split(':').map(Number);
        const timeB = b.time.split(':').map(Number);

        if (timeA[0] > timeB[0]) {
          return -1;
        } else if (timeA[0] < timeB[0]) {
          return 1;
        } else {
          // Hours are equal, compare minutes
          if (timeA[1] > timeB[1]) {
            return -1;
          } else if (timeA[1] < timeB[1]) {
            return 1;
          } else {
            // Minutes are equal, compare seconds
            if (timeA[2] > timeB[2]) {
              return -1;
            } else if (timeA[2] < timeB[2]) {
              return 1;
            } else {
              // Date and time are equal
              return 0;
            }
          }
        }
      }
    });
  }

  formatCropPhase(cropPhase: string): string {
    switch (cropPhase) {
      case 'FORMULA':
        return 'formulas';
      case 'PREPARATION_AREA':
        return 'preparation Area';
      case 'BUNKER':
        return 'bunker';
      case 'TUNNEL':
        return 'tunnel';
      case 'INCUBATION':
        return 'incubation';
      case 'CASING':
        return 'casing';
      case 'INDUCTION':
        return 'induction';
      case 'HARVEST':
        return 'harvest';
      default:
        return cropPhase; // Return the original value if not found in the mapping
    }
  }

  unformatCropPhase(cropPhase: string): string {
    switch (cropPhase) {
      case 'formulas':
        return 'Formula';
      case 'preparation-areas':
        return 'Preparation Area';
      case 'bunkers':
        return 'Bunker';
      case 'tunnels':
        return 'Tunnel';
      case 'INCUBATION':
        return 'Incubation';
      case 'CASING':
        return 'Casing';
      case 'INDUCTION':
        return 'Induction';
      case 'HARVEST':
        return 'Harvest';
      default:
        return cropPhase; // Return the original value if not found in the mapping
    }
  }

  formatTime(time: string) {
    const timeArray = time.split(':');
    const hours = timeArray[0];
    const minutes = timeArray[1];
    const seconds = timeArray[2].split('.')[0];
    console.log("Seconds: ", seconds)
    return `${hours}:${minutes}:${seconds}`;
  }
  formatDate(date: string) {
    const dateObject = new Date(date);
    const year = dateObject.getUTCFullYear();
    const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getUTCDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  ngOnInit() {
    this.cropApiService.setResourceEndpoint(`company/${this.companyId}`);
    this.cropApiService.getAll().subscribe((response: any) => {
      this.crops = response;
      //this.crops = this.crops.filter((crop: any) => crop.state);
      this.crops.forEach((crop:any)=>{
        crop.cropPhase = this.formatCropPhase(crop.cropPhase);
      })
      console.log("Response Crop: ", response)
      for (let crop of this.crops) {
        if (crop.state === true) {
          if (crop.cropPhase === 'casing' || crop.cropPhase === 'incubation' || crop.cropPhase === 'induction' || crop.cropPhase === 'harvest') {
            crop.cropPhase = crop.cropPhase.toUpperCase();
            this.processApiService.setResourceEndpoint(`${crop.cropId}/grow-rooms/${crop.cropPhase}`);
          } /*else if (crop.phase === 'PREPARATION_AREA') {
            this.processApiService.setResourceEndpoint(`preparation_area?crop_id=${crop.id}`);
          }*/ else {
            this.processApiService.setResourceEndpoint(`${crop.cropId}/${crop.cropPhase}`);
          }
          this.processApiService.getAll().subscribe((response: any) => {
            console.log("Response Process: ", response)
            let mostRecentRecords = this.sortByDateAndTime(response);
            let mostRecentRecord = mostRecentRecords[0];
            crop.cropPhase = this.unformatCropPhase(crop.cropPhase)
            console.log("Most Recent Record: ", mostRecentRecord)
            if(mostRecentRecord === undefined){
              console.error('Faltan datos requeridos. No se ha agregado el registro a la tabla.');
            }else{

              let extraData: {}
              extraData = {
                cropId: crop.cropId,
                startDate: crop.startDate,
                cropPhase: crop.cropPhase,
              }
              console.log("Extra Data: ", extraData)
              mostRecentRecord = {...mostRecentRecord, ...extraData};
              //fake comment
              if (crop.cropPhase === 'Formula') {
                mostRecentRecord.comment = ''
              }

              // add the data to the table
              let dataCopy = [];
              dataCopy = this.dataSource.data;

              // format date and time for each record
              for (let record of dataCopy) {
                record.startDate = this.formatDate(record.startDate);
                record.time = this.formatTime(record.time);
              }
              mostRecentRecord.startDate = this.formatDate(mostRecentRecord.startDate);
              mostRecentRecord.time = this.formatTime(mostRecentRecord.time);

              dataCopy.push(mostRecentRecord);
              this.dataSource.data = dataCopy;
            }
          })
        }
      }
    })
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
}
