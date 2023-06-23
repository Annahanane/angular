import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/models/produit-model';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() newProduit !: Produit;
  ngOnInit(): void {
    
    
    


  }

}
