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
      id : 1,
    },
    {
      type :"robe" ,
      taille :" XS" ,
      couleur : "noire",
      collection : "hiver",
      prix : 35,
      img : "assets/vetement/robe.png",
      id : 2,
    },
    {
    
      type :" pantalon" ,
      taille :" L" ,
      couleur : " gris",
      collection : "été",
      prix : 50,
      img : "assets/vetement/pantalon.png",
      id : 3,
    },
  ];
 listerProduit():Produit[]{
    return this.listproduits;

  }
  recupererProduitById(id:number): Produit{
    for(let i = 0; i < this.listproduits.length; i++){
      if(this.listproduits[i].id === id)
      return this.listproduits[i];
    }
    return new Produit();
  }
  
}
