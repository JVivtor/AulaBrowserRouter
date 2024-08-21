import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home(){
    return(
        <>
        <Header/>
        <p>Nike</p>

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
                    <img src="https://imgnike-a.akamaihd.net/768x768/027735MTA2.jpg" alt="Slide 1" />
                </div> 
                <div>
                    <img src="https://imgnike-a.akamaihd.net/768x768/027735MTA2.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://imgnike-a.akamaihd.net/768x768/027735MTA1.jpg" alt="Slide 3" />
                </div>
                <div>
                    <img src="https://imgnike-a.akamaihd.net/768x768/029169P1A9.jpg" alt="Slide 4" />
                </div>
                <div>
                    <img src="https://imgnike-a.akamaihd.net/768x768/029169P1A4.jpg" alt="Slide 5" />
                </div>
                <div>
                    <img src="https://imgnike-a.akamaihd.net/768x768/027735MTA2.jpg" alt="Slide 6" />
                </div>


        </Carousel>
        </>

        
    );
}