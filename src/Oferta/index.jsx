import React, { useState } from 'react';
import Header from '../components/Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import ListarProdutos from '../components/ListarProdutos';

export default function Ofertas() {
    const [produtos, setProdutos] = useState([

        { 
            id: 111, 
            nome: "Tênis Nike SB Force 58", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/01388051A8.jpg", 
            preco: "De R$ 449,99 por R$ 389,99 No PIX"
          },
  
          { 
            id: 222, 
            nome: "Tênis Nike Invincible 3 Masculino Electric",
            imagem: "https://imgnike-a.akamaihd.net/768x768/028680CTA13.jpg", 
            preco: "De R$ 1749,49 por R$ 1424,99 No PIX"
          },
  
          { 
              id: 333, 
            nome: "Chuteira Nike Phantom GX II Club Campo", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02839815A9.jpg", 
            preco: "De R$ 499,99 por R$ 427,49 No PIX"
          },
  
          { 
            id: 444, 
            nome: "Tênis Nike Dunk Sea Glass", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02931251A11.jpg",
            preco: "De R$ 1299,99 por R$ 999,99 No PIX"
          },
  
          {
            id: 555, 
            nome: "Tênis Nike Vaporfly 3 Masculino", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/0259140LA9.jpg", 
            preco: "De R$ 2199,99 por R$ 1899,99 No PIX"
          },
  
          {
              id: 666, 
              nome: "Camisa Nike Barcelona I 2024/25 Torcedor Pro Masculino", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/02901715A3.jpg", 
              preco: "De R$ 429,99 por R$ 379,99 No PIX"
            },
  
            {
              id: 777, 
              nome: "Camisa Nike Liverpool I 2024/25 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/029018P1A21.jpg", 
              preco: "De R$ 429,99 por R$ 379,99 No PIX" 
            },
  
            {
              id: 888, 
              nome: "Camisa Nike Paris Saint-Germain I 2023/24 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/02612215A9.jpg", 
              preco: "De R$ 179,99 por R$ 151,99 No PIX" 
            },
  
            {
              id: 999, 
              nome: "Camisa Nike Inter de Milão I 2023/24 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/768x768/02667615A8.jpg", 
              preco: "De R$ 429,99 por R$ 379,99 No PIX" 
            },
  
            {
              id: 1111, 
              nome: "Camisa Nike Brasil I 2024/25 Torcedor Pro Masculina", 
              imagem: "https://imgnike-a.akamaihd.net/1920x1920/0285640LA15.jpg", 
              preco: "De R$ 389,99 por R$ 349,99 No PIX" 
            },

            {
                id: 1112, 
                nome: "Bola Nike Academy Futebol", 
                imagem: "https://imgnike-a.akamaihd.net/768x768/0269730LA2.jpg", 
                preco: "De R$ 151,99 por R$ 134,99 No PIX" 
              },

              {
                id: 1113, 
                nome: "Swoosh Unissex", 
                imagem: "https://imgnike-a.akamaihd.net/768x768/02661615A2.jpg", 
                preco: "De R$ 87,49 por R$ 74,99 No PIX" 
              },

              {
                id: 1114, 
                nome: "Luvas de Goleiro Nike Match Unissex", 
                imagem: "https://imgnike-a.akamaihd.net/768x768/02762515A2.jpg", 
                preco: "De R$ 249,99 por R$ 237,49 No PIX" 
              },

              {
                id: 1115, 
                nome: "Blusão Nike Golden State Warriors City Edition Masculino", 
                imagem: "https://imgnike-a.akamaihd.net/768x768/0276310LA3.jpg", 
                preco: "De R$ 454,99 por R$ 429,99 No PIX" 
              },

              {
                id: 1116, 
                nome: "Blusão Nike Therma-FIT Brooklyn Nets Starting 5 Masculino", 
                imagem: "https://imgnike-a.akamaihd.net/768x768/027636IDA3.jpg", 
                preco: "De R$ 511,99 por R$ 489,99 No PIX" 
              },
       
    ]);
    return (
        <div>
            <Header />
            <main className="lista-produtos">

            <Carousel
                   infiniteLoop
                   useKeyboardArrows
                   autoPlay
                   showArrows={true}
                   showStatus={false}
                   showThumbs={false}
                   dynamicHeight
               >
                   <div>
                       <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/banner-p1-Electric%20Pack-24-07-desk-v2.jpg" alt="Slide 1" className="Slide" />
                   </div>
                  
               </Carousel>
                <ListarProdutos listaProduto={produtos} />
            </main>
            



        
















        </div>
    );
}