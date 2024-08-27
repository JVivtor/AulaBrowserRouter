import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


            
               

export default function Home() {
    const [produtos, setProdutos] = useState([
        { 
          id: 1111, 
          nome: "Off-White x Nike Air Force 1 Mid", 
          imagem: "https://imgnike-a.akamaihd.net/768x768/027759A1A15.jpg", 
          preco: "R$ 1709,99 em até 3x sem juros" 
        },

        { 
          id: 2222, 
          nome: "Tênis Nike Pegasus 41 Masculino Blueprint",
          imagem: "https://imgnike-a.akamaihd.net/768x768/02944951A11.jpg", 
          preco: "R$ 949,99 em até 3x sem juros" 
        },

        { 
            id: 3333, 
          nome: "Tênis Nike GT Hustle 3 Masculino Blueprint", 
          imagem: "https://imgnike-a.akamaihd.net/768x768/02947651A10.jpg", 
          preco: "R$ 1519,99 em até 3x sem juros" 
        },

        { 
          id: 4444, 
          nome: "Chuteira Nike Zoom Vapor 16 Elite Campo Blueprint", 
          imagem: "https://imgnike-a.akamaihd.net/768x768/02946251A12.jpg", 
          preco: "R$ 218499 em até 3x sem juros" 
        },

        {
          id: 5555, 
          nome: "Tênis Nike Air Max Plus Masculino", 
          imagem: "https://imgnike-a.akamaihd.net/768x768/022147IPA9.jpg", 
          preco: "R$ 1234,99 em até 3x sem juros" 
        },

        {
            id: 666, 
            nome: "Camisa Nike Barcelona I 2024/25 Torcedor Pro Masculino", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02901715A3.jpg", 
            preco: "R$ 379,99 em até 3x sem juros" 
          },

          {
            id: 777, 
            nome: "Camisa Nike Liverpool I 2024/25 Torcedor Pro Masculina", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/029018P1A21.jpg", 
            preco: "R$ 379,99 em até 3x sem juros" 
          },

          {
            id: 888, 
            nome: "Camisa Nike Paris Saint-Germain I 2023/24 Torcedor Pro Masculina", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02612215A9.jpg", 
            preco: "R$ 151,99 em até 3x sem juros" 
          },

          {
            id: 999, 
            nome: "Camisa Nike Inter de Milão I 2023/24 Torcedor Pro Masculina", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02667615A8.jpg", 
            preco: "R$ 379,99 em até 3x sem juros" 
          },

          {
            id: 1111, 
            nome: "Camisa Nike Brasil I 2024/25 Torcedor Pro Masculina", 
            imagem: "https://imgnike-a.akamaihd.net/1920x1920/0285640LA15.jpg", 
            preco: "R$ 349,99 em até 3x sem juros" 
          },

          {
            id: 1112, 
            nome: "Bola Nike Academy Futebol", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/0269730LA2.jpg", 
            preco: "R$ 151,99 em até 3x sem juros" 
          },

          {
            id: 1113, 
            nome: "Bola Nike Brasil Academy", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02790151A2.jpg", 
            preco: "R$ 208,99 em até 3x sem juros" 
          },
          
          {
            id: 1114, 
            nome: "Bola Nike Phantom", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02805451A2.jpg", 
            preco: "R$ 132,99 em até 3x sem juros" 
          },

          {
            id: 1115, 
            nome: "Bola Nike Academy Elite", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/0289977TA2.jpg", 
            preco: "R$ 161,99 em até 3x sem juros" 
          },

          {
            id: 1116, 
            nome: "Bola Nike Pitch Train Futebol", 
            imagem: "https://imgnike-a.akamaihd.net/768x768/02936051A2.jpg", 
            preco: "R$ 123,49 em até 3x sem juros"  
          },
          


    ]);
  
    return (
      <>
        <Header />
        <br></br>
        <br></br>
        <main className="main-content">
        <div className="logo-JVS">
                
                   

                   
                   
               </div>
               <br></br>
               <br></br>
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
                       <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/Banner-Nike-Pegasus-Plus-22-08-desk.jpg" alt="Slide 1" className="Slide" />
                   </div>
                   <div>
                       <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/Banner-Free-Metcon6-15-08-desk.jpg" alt="Slide 2" className="Slide" />
                   </div>
                   <div>
                       <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/Banner-Mad-Ambition-12-08-desk.jpg" alt="Slide 3" className="Slide" />
                   </div>
                   <div>
                       <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/banner-nike-app-08-03-desk.jpg" alt="Slide 4" className="Slide" />
                   </div>
                   <div>
                       <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/Banner-Join-Us-refresh-22-05-desktop.jpg" alt="Slide 5" className="Slide" />
                   </div>
                
               </Carousel>

               

          <h1>MAIS PRODUTOS</h1>
          <ListarProdutos listaProduto={produtos} />
            </main>
            <Footer />
      </>

      
    );
  }