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
  companyId: number = 1;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor (private cropsApi : CropsService, private router: Router){
    this.dataSource = new MatTableDataSource<Crop>();
    this.paginator = {} as MatPaginator;
    this.sort = {} as MatSort;
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

  getCrops(){
    this.cropsApi.setResourceEndpoint(`company/${this.companyId}`)
    this.cropsApi.getList().subscribe((response : any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data)

      this.dataSource.data.forEach((crop) => {
        crop.cropPhase = this.formatCropPhase(crop.cropPhase);
      });

      this.dataSource.data = this.dataSource.data.filter((crop) => crop.state)
    })
  }

  onRowSelect(selectedRow: Crop){
    const routeUrl = `/harvest/${selectedRow.cropId}/${selectedRow.cropPhase}`;
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
