import Introduction from "./Intro/Introduction"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Email from "./Email/Email"
import Experience from "./Experience/Experience"
import SocialLink from "./SocialLink/SocialLink"
import Work from "./Work/Work"
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <div>
            <Introduction />
            <div className='UniversalPadding py-24 mx-auto'>
                <About />
                <Experience />
                <Work />
                <Contact />
                <Email />
                <SocialLink />
            </div>
            <Footer/>
        </div>
    )
}

export default Home