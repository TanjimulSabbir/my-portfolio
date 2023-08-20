import Introduction from "./Intro/Introduction"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Email from "./Email/Email"
import Experience from "./Experience/Experience"
import SocialLink from "./SocialLink/SocialLink"
import Work from "./Work/Work"

const Home = () => {
    return (
        <div>
            <Introduction />
            <div className='mid-lg:w-4/5 py-24 mx-auto'>
                <About />
                <Experience />
                <Work />
                <Contact />
               
            </div>
            <Email />
                <SocialLink />
        </div>
    )
}

export default Home