import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

export default function Layout({children}) {
    return(
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}