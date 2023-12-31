import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Crop} from "../../model/crop";
import {CropsService} from "../../services/crops.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TokenStorageService} from "../../../shared/services/tokenStorage.service";

@Component({
  selector: 'app-crops-archive',
  templateUrl: './crops-archive.component.html',
  styleUrls: ['./crops-archive.component.css']
})
export class CropsArchiveComponent {
  dataSource: MatTableDataSource<Crop>;
  displayedColumns: string[] = ["id","start_date","phase"]
  companyId: number = this.tokenStorageService.getCompanyId();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor (private cropsApi : CropsService, private router: Router, private tokenStorageService: TokenStorageService){
    this.dataSource = new MatTableDataSource<Crop>();
    this.paginator = {} as MatPaginator;
    this.sort = {} as MatSort;
  }

  formatCropPhase(cropPhase: string): string {
    switch (cropPhase) {
      case 'FORMULA':
        return 'Formula';
      case 'PREPARATION_AREA':
        return 'Preparation area';
      case 'BUNKER':
        return 'Bunker';
      case 'TUNNEL':
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

  getCrops(){
    this.cropsApi.setResourceEndpoint(`company/${this.companyId}`)
    this.cropsApi.getList().subscribe((response : any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data)

      this.dataSource.data.forEach((crop) => {
        crop.cropPhase = this.formatCropPhase(crop.cropPhase);
        crop.startDate = crop.startDate.split('T')[0];
      });
      console.log(this.dataSource.data)
      this.dataSource.data = this.dataSource.data.filter((crop) => !crop.state)
    })
  }

  onRowSelected(selectedRow: Crop){

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
