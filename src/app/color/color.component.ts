import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  couleur="green";
  constructor(private service:ActivatedRoute) { }

  ngOnInit() {
    this.service.params.subscribe(
      (params) => {
        this.couleur=params['couleur'];
        console.log(params['param']);
      }
    )
  }

}
