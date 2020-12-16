import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  myForm: FormGroup

  data: any[] = []

  constructor(
    public beerService: BeerService
  ) { }

  ngOnInit() {

    this.myForm = new FormGroup({
      search: new FormControl(''),
    });

    this.myForm.get('search').valueChanges.subscribe(search => {

      if (search.length) {

        this.beerService.searchBeer(search).subscribe((res: any[]) => {
          console.log("res", res)
          this.data = res;
        })
      }

    })

  }

}
