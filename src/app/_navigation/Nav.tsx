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
        <nav className=" py-2 flex flex-row items-center justify-between w-full text-1xl">
            <div className="flex px-1">
                <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="75px"
                    height="43.7px"
                    viewBox="0 0 75 43.7"
                    xmlSpace="preserve"
                >
                    <g>
                        <path
                            fill="#e82c2a"
                            d="M73.4,7.8v23.9c-0.1,1.3-0.6,2.2-1.7,2.4l-29.6,7.6l0,0c-0.2,0-0.5,0-0.5,0L4.1,39.8c-1.5-0.1-2.5-0.8-2.5-2.2                 V19.4c0-1.3,0.4-1.8,1.7-2.3c0,0,0.1-0.1,0.2-0.1l34-14.5c0,0,0.6-0.1,0.7-0.1L71,5.7C72.4,5.7,73.4,6.4,73.4,7.8z"
                        />
                    </g>
                </svg>
                <Link className="text-4xl ml-1" href="/">
                    REDBRICK
                </Link>
            </div>
            <ul className="hidden md:flex flex-row space-x-40 text-xl absolute left-1/2 transform -translate-x-1/2">
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-row text-xl space-x-4">
                {submenu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}