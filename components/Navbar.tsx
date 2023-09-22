import Link from 'next/link'

const Navbar = () => {

    return (
        <header className="bg-white">
            <nav>
                <div>
                    <h2 className="font-bold text-2xl">static blog</h2>
                </div>
                <div className="">
                    <ul className="">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </nav>
        </header>

    )
}

export default Navbar