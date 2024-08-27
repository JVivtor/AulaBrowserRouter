import React, { useState } from 'react';
import Header from '../components/Header';
import ListarProdutos from '../components/ListarProdutos';

export default function Produto() {
    const [produtos, setProdutos] = useState([
        { 
            id: 111, 
            nome: "Tênis Nike SB Force 58", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/01388051A8.jpg", 
            preco: "No PIX por R$ 389,99" 
          },
  
          { 
            id: 222, 
            nome: "Tênis Nike Invincible 3 Masculino Electric",
            imagem: "https://imgnike-a.akamaihd.net/768x768/028680CTA13.jpg", 
            preco: "No PIX por R$ 1424,99" 
          },
  
          { 
              id: 333, 
            nome: "Chuteira Nike Phantom GX II Club Campo", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02839815A9.jpg", 
            preco: "No PIX por R$ 427,49" 
          },
  
          { 
            id: 444, 
            nome: "Tênis Nike Dunk Sea Glass", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02931251A11.jpg", 
            preco: "No PIX por R$ 999,99" 
          },
  
          {
            id: 555, 
            nome: "Tênis Nike Vaporfly 3 Masculino", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/0259140LA9.jpg", 
            preco: "No PIX por R$ 1899,99" 
          },
  
          {
              id: 666, 
              nome: "Camisa Nike Barcelona I 2024/25 Torcedor Pro Masculino", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/02901715A3.jpg", 
              preco: "No PIX por R$ 379,99" 
            },
  
            {
              id: 777, 
              nome: "Camisa Nike Liverpool I 2024/25 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/029018P1A21.jpg", 
              preco: "No PIX por R$ 379,99" 
            },
  
            {
              id: 888, 
              nome: "Camisa Nike Paris Saint-Germain I 2023/24 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/02612215A9.jpg", 
              preco: "No PIX por R$ 151,99" 
            },
  
            {
              id: 999, 
              nome: "Camisa Nike Inter de Milão I 2023/24 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/02667615A8.jpg", 
              preco: "No PIX por R$ 379,99" 
            },
  
            {
              id: 1111, 
              nome: "Camisa Nike Brasil I 2024/25 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/1920x1920/0285640LA15.jpg", 
              preco: "No PIX por  R$ 349,99" 
            },

            {
                id: 2324,
                nome: "Tênis Nike Air Max Plus Drift Masculino",
                imagem: "https://imgnike-a.akamaihd.net/768x768/02787615A8.jpg",
                preco: "No PIX por R$ 921,49"
            },

            {
                id: 1111, 
                nome: "Camisa Nike Brasil I 2024/25 Torcedor Pro Masculina", 
                imagem: "https://imgnike-a.akamaihd.net/1920x1920/0285640LA15.jpg", 
                preco: "No PIX por R$ 389,99" 
              },
  
              {
                  id: 1112, 
                  nome: "Bola Nike Academy Futebol", 
                  imagem: "https://imgnike-a.akamaihd.net/768x768/0269730LA2.jpg", 
                  preco: "No PIX por R$ 151,99" 
                },
  
                {
                  id: 1113, 
                  nome: "Swoosh Unissex", 
                  imagem: "https://imgnike-a.akamaihd.net/768x768/02661615A2.jpg", 
                  preco: "No PIX por R$ 87,49" 
                },
  
                {
                  id: 1114, 
                  nome: "Luvas de Goleiro Nike Match Unissex", 
                  imagem: "https://imgnike-a.akamaihd.net/768x768/02762515A2.jpg", 
                  preco: "No PIX por R$ 249,99" 
                },
  
                {
                  id: 1115, 
                  nome: "Blusão Nike Golden State Warriors City Edition Masculino", 
                  imagem: "https://imgnike-a.akamaihd.net/768x768/0276310LA3.jpg", 
                  preco: "No PIX por R$ 454,99" 
                },
  
                {
                  id: 1116, 
                  nome: "Blusão Nike Therma-FIT Brooklyn Nets Starting 5 Masculino", 
                  imagem: "https://imgnike-a.akamaihd.net/768x768/027636IDA3.jpg", 
                  preco: "No PIX por R$ 511,99" 
                },

                {
                    id: 4285, 
                    nome: "Air Max Plus III Gunsmoke & Team Orange", 
                    imagem: "https://imgnike-a.akamaihd.net/768x768/0283817TA8.jpg", 
                    preco: "No PIX por R$ 1499,99" 
                  },

                  {
                    id: 2524, 
                    nome: "Chinelo Jordan Super Play Masculino", 
                    imagem: "https://imgnike-a.akamaihd.net/768x768/022814IDA16.jpg", 
                    preco: "No PIX por R$ 439,99" 
                  },

                  {
                    id: 7414, 
                    nome: "Pré-Adolescentes / Casual", 
                    imagem: "https://imgnike-a.akamaihd.net/768x768/027085NMA2.jpg", 
                    preco: "No PIX por R$ 129,99" 
                  },

            
    ]);

    return (
        <div>
            <Header />
            <main className="lista-produtos">
                <ListarProdutos listaProduto={produtos} />
            </main>
            
        </div>
    );
}
