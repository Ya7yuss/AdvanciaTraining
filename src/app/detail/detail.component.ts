import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Model/Personne';
import { EmbaucheService } from '../services/embauche.service';
import { CvSerService } from '../services/cv-ser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personneToDis: Personne;
  constructor(private service:EmbaucheService,
    private cvService: CvSerService,
    private route: Router) { }

  
  ngOnInit() {

  }
  embauche(param: Personne) {
    this.service.addEmbauche(param);
  }
  naviguerToDetail(param: Personne){
    let link = ["detail"];
    link.push(param.id);
    console.log(link);
    this.route.navigate(link);
  }

}
