import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-liste-embauche',
  templateUrl: './liste-embauche.component.html',
  styleUrls: ['./liste-embauche.component.css']
})
export class ListeEmbaucheComponent implements OnInit {
  embauches: Personne [];
  constructor(private service: EmbaucheService) { }

  ngOnInit() {
    this.embauches=this.service.getEmbauches();
  }



}
