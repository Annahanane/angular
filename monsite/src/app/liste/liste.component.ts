import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/models/produit-model';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  implements OnInit{
  listproduits !: Produit[];

  constructor(private newProduit:ProduitService) {}

  ngOnInit(): void {

    this.listproduits = this.newProduit.listerProduit()
  //   this.listproduits = [
  //     {
  //       type :"" ,
  //       taille :"" ,
  //       couleur : "",
  //       collection : "",
  //       prix : 12,
  //       img : "",
  //     },
  //     {
  //       type :"" ,
  //       taille :"" ,
  //       couleur : "",
  //       collection : "",
  //       prix : 12,
  //       img : "",
  //     },
  //     {
  //       type :"" ,
  //       taille :"" ,
  //       couleur : "",
  //       collection : "",
  //       prix : 50,
  //       img : "",
  //     },
  //   ]
  }

}
