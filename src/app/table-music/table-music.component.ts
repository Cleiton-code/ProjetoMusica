import { music } from '../musics';
import { Component } from '@angular/core';
@Component({
  selector: 'app-table-music',
  templateUrl: './table-music.component.html',
  styleUrl: './table-music.component.css'
})
export class TableMusicComponent {
  musics: music[] = [

      {
        "id": 1,
        "name": "Chico Mineiro",
        "price": 7.99,
        "category": "Sertanejo",
        "artist": "Tonico & Tinocao",
        "year": 1968
      },
      {
        "id": 2,
        "name": "Romaria",
        "price": 8.49,
        "category": "Sertanejo",
        "artist": "Renato Teixeira",
        "year": 1977
      },
      {
        "id": 3,
        "name": "A Majestade o Sabiá",
        "price": 6.99,
        "category": "Sertanejo",
        "artist": "Tião Carreiro a& Pardinho",
        "year": 1970
      },
      {
        "id": 4,
        "name": "O Menino da Porteira",
        "price": 7.49,
        "category": "Sertanejo",
        "artist": "Tião Carreiro a& Pardinho",
        "year": 1978
      },
      {
        "id": 5,
        "name": "Eu Não Sei de Nada",
        "price": 6.79,
        "category": "Sertanejo",
        "artist": "Milionário & Jaosé Rico",
        "year": 1982
      },
      {
        "id": 6,
        "name": "Saudade do Meu País",
        "price": 7.89,
        "category": "Sertanejo",
        "artist": "Zezé Di Camargao & Luciano",
        "year": 1990
      },
      {
        "id": 7,
        "name": "Panela Velha",
        "price": 6.59,
        "category": "Sertanejo",
        "artist": "Duo Parada Duraa",
        "year": 1985
      },
      {
        "id": 8,
        "name": "Devolva-me",
        "price": 7.29,
        "category": "Sertanejo",
        "artist": "Chico Rey & Paaraná",
        "year": 1989
      },
      {
        "id": 9,
        "name": "Chora Me Liga",
        "price": 8.99,
        "category": "Sertanejo",
        "artist": "João Bosco & Vinícius",
        "year": 2009
      },
      {
        "id": 10,
        "name": "Evidências",
        "price": 9.49,
        "category": "Sertanejo",
        "artist": "Chitãozinho & Xororó",
        "year": 1990
      },
      {
        "id": 11,
        "name": "O Mundo é dos Jovens",
        "price": 7.79,
        "category": "Sertanejo",
        "artist": "Zezé Di Camargo & Luciano",
        "year": 1995
      },
      {
        "id": 12,
        "name": "Não Aprendi Dizer Adeus",
        "price": 8.29,
        "category": "Sertanejo",
        "artist": "Leandro & Leonardo",
        "year": 1992
      },
      {
        "id": 13,
        "name": "Fio de Cabelo",
        "price": 7.99,
        "category": "Sertanejo",
        "artist": "Chitãozinho & Xororó",
        "year": 1989
      },
      {
        "id": 14,
        "name": "Tô Te Amando",
        "price": 8.69,
        "category": "Sertanejo",
        "artist": "João Paulo & Daniel",
        "year": 1993
      },
      {
        "id": 15,
        "name": "Coração Não Tem Idade",
        "price": 7.49,
        "category": "Sertanejo",
        "artist": "Milionário & José Rico",
        "year": 1981
      },
      {
        "id": 16,
        "name": "Parece que foi Ontem",
        "price": 7.89,
        "category": "Sertanejo",
        "artist": "Tião Carreiro & Pardinho",
        "year": 1984
      }
    ];

}