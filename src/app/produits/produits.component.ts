import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
updateProduit(_t13: Produit) {
throw new Error('Method not implemented.');
}
  

  produits : Produit[];

  constructor(private produitService: ProduitService ) {
    
    this.produits = produitService.listeProduits();
  }

  supprimerProduit(p: Produit)
  {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");

    if (conf)
       this.produitService.supprimerProduit(p);
  }
}
