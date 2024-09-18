import {Navbar} from "./Navbar";
import {HomePage } from "./Home";
import {Burger} from './Burgerpage';
import { Deliverypage } from "./Deliverypage";
import { Menu } from "./Menu";
import { Testimonials } from "./Testimonial";

export default function App(){
    return(
        <>
            <Navbar />
            <HomePage />
            <Burger />
            <Deliverypage />
            <Menu />
            <Testimonials />
        </>
    );
}