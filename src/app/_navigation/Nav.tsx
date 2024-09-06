import Link from "next/link";

export default function Nav() {

    const menu = [
        { name: 'Shop', url: '/' },
        { name: 'Wholesale', url: '/about' },
        { name: 'About', url: '/contact' },
        { name: 'Contact', url: '/contact' }
    ];

    const submenu = [
        { name: 'Cart', url: '/faq' },
        { name: 'Menu', url: '/shipping' }
    ];

    return (
        <nav className=" px-4 flex flex-row items-center justify-between space-y-4 w-full text-1xl">
            <div>
                <Link className="text-4xl" href="/">
                    REDBRICK
                </Link>
            </div>
            <ul className="flex flex-row space-x-4">
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url} >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-row space-x-4">
                {submenu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url} >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}