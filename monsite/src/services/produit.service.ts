import { Injectable } from '@angular/core';
import { Produit } from 'src/models/produit-model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  listproduits: Produit[] = [
    {
      type :"jupe" ,
      taille :"S" ,
      couleur : " rouge",
      collection : " été",
      prix : 12,
      img : "assets/vetement/jupe.png",
    },
    {
      type :"robe" ,
      taille :" XS" ,
      couleur : "noire",
      collection : "hiver",
      prix : 35,
      img : "assets/vetement/robe.png",
    },
    {
    
      type :" pantalon" ,
      taille :" L" ,
      couleur : " gris",
      collection : "été",
      prix : 50,
      img : "assets/vetement/pantalon.png",
    },
  ];
 listerProduit():Produit[]{
  return this.listproduits;
 }
}
  

