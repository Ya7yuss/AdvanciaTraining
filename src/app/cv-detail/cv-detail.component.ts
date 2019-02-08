import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../Model/Personne';
import { CvSerService } from '../services/cv-ser.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {
  personne: Personne;
  constructor(private actiService: ActivatedRoute,
    private cv: CvSerService) {
   }

  ngOnInit() {
    this.actiService.params.subscribe(
      (params) => {
        console.log(params);
        this.personne=this.cv.getPersonFromIndex(params.id-1);
        console.log(this.personne);
      })
  }
}
