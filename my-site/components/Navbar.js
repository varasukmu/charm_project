import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="navFont">
            {/* <div>JXE Page</div> */}
            <div className="navBtn flex-1"><Link href="/">Home</Link></div>
            <div className="navBtn flex-1"><Link href="/about">About Me</Link></div>
            <div className="navBtn flex-1"><Link href="/gallery">Gallery</Link></div>
            <div className="navBtn flex-1"><Link href="/work">Work</Link></div>
        </nav>
    )
}