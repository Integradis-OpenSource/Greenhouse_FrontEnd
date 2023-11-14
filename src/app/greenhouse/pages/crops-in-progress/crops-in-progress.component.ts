import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Crop} from "../../model/crop";
import {CropsService} from "../../services/crops.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-crops-in-progress',
  templateUrl: './crops-in-progress.component.html',
  styleUrls: ['./crops-in-progress.component.css']
})
export class CropsInProgressComponent implements AfterViewInit, OnInit {
  dataSource: MatTableDataSource<Crop>;
  displayedColumns: string[] = ["id","start_date","phase"]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor (private cropsApi : CropsService, private router: Router){
    this.dataSource = new MatTableDataSource<Crop>();
    this.paginator = {} as MatPaginator;
    this.sort = {} as MatSort;
  }

  getCrops(){
    this.cropsApi.getList().subscribe((response : any) => {
      this.dataSource.data = response;
      this.dataSource.data = this.dataSource.data.filter((crop) => crop.state == "active")
    })
  }

  onRowSelect(selectedRow: Crop){
    const routeUrl = `/harvest/${selectedRow.id}/${selectedRow.phase}`;
    this.router.navigate([routeUrl]);
  }

  ngOnInit() {
    this.getCrops();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
