import {Component, Input, OnInit} from '@angular/core';
import {ProcessEntryDashboardTable} from "../../model/process-entry-dashboard-table";
import {ProcessEntriesDashboardTableService} from "../../services/process-entries-dashboard-table.service";
import {MatTableDataSource} from "@angular/material/table";
import {CropsService} from "../../services/crops.service";
@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {
  dataSource: MatTableDataSource<ProcessEntryDashboardTable>;

  columns = [
    {
      columnDef: 'cropId',
      header: 'Crop ID',
      cell: (element: ProcessEntryDashboardTable) => `${element.crop_id}`,
    },
    {
      columnDef: 'author',
      header: 'Author',
      cell: (element: ProcessEntryDashboardTable) => `${element.author}`,
    },
    {
      columnDef: 'startDate',
      header: 'Crop Start Date',
      cell: (element: ProcessEntryDashboardTable) => `${element.start_date}`,
    },
    {
      columnDef: 'currentPhase',
      header: 'Current Phase',
      cell: (element: ProcessEntryDashboardTable) => `${element.phase}`,
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

  constructor(private processApiService: ProcessEntriesDashboardTableService, private cropApiService: CropsService) {
    this.dataSource = new MatTableDataSource<ProcessEntryDashboardTable>();
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

  ngOnInit() {
    this.cropApiService.getAll().subscribe((response: any) => {
      this.crops = response;
      for (let crop of this.crops) {
        if (crop.state === 'active') {
          if (crop.phase === 'Casing' || crop.phase === 'Incubation' || crop.phase === 'Induction' || crop.phase === 'Harvest') {
            this.processApiService.setResourceEndpoint(`grow_room_record?processType=${crop.phase}&crop_id=${crop.id}`);
          } else if (crop.phase === 'Preparation area') {
            this.processApiService.setResourceEndpoint(`preparation_area?crop_id=${crop.id}`);
          } else {
            this.processApiService.setResourceEndpoint(`${crop.phase}?crop_id=${crop.id}`);
          }
          this.processApiService.getAll().subscribe((response: any) => {
            let mostRecentRecords = this.sortByDateAndTime(response);
            let mostRecentRecord = mostRecentRecords[0];
            if(mostRecentRecord === undefined){
              console.error('Faltan datos requeridos. No se ha agregado el registro a la tabla.');
            }else{
              let extraData: {}
              extraData = {
                start_date: crop.start_date,
                phase: crop.phase
              }
              mostRecentRecord = {...mostRecentRecord, ...extraData};
              //fake comment
              if (crop.phase === 'Stock') {
                mostRecentRecord.comment = ''
              }
              // add the data to the table
              let dataCopy = [];
              dataCopy = this.dataSource.data;
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
