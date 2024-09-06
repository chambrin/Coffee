export default function Nav() {
    const menu = [
        {
            name: 'Shop',
            url: '/'
        },
        {
            name: 'Wholesale',
            url: '/about'
        },
        {
            name: 'About',
            url: '/contact'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ];

    const submenu = [
        {
            name: 'cart',
            url: '/faq'
        },
        {
            name: 'menu',
            url: '/shipping'
        }
    ];

    return (
        <nav>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
            <ul>
                {submenu.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>

        </nav>
    );
}