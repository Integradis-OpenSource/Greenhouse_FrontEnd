import {Component, OnInit} from '@angular/core';
import {Crop} from "../../model/crop";
import {CropsService} from "../../services/crops.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-harvesting-in-progress',
  templateUrl: './harvesting-in-progress.component.html',
  styleUrls: ['./harvesting-in-progress.component.css']
})
export class HarvestingInProgressComponent implements OnInit {
  dataSource: MatTableDataSource<Crop>;
  displayedColumns: string[] = ["id","start_date","phase"]

  constructor (private cropsApi : CropsService){
    this.dataSource = new MatTableDataSource<Crop>();
  }

  getCrops(){
    this.cropsApi.getList().subscribe((response : any) => {
      this.dataSource.data = response;
      this.dataSource.data = this.dataSource.data.filter((crop) => crop.state == "active")
    })
  }

  ngOnInit() {
    this.getCrops();
  }
}
