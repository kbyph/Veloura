import Link from "next/link";

const links = [
    {
        path: '/',
        pathname: 'Home'
    },
    {
        path: '/',
        pathname: 'Support'
    },
    {
        path: '/',
        pathname: 'Trips'
    },
    {
        path: '/',
        pathname: 'Deals'
    },
    {
        path: '/',
        pathname: 'Rewards'
    },
]

const Nav = ({containerStyles, listStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <ul className={`${listStyles}`}>
            {links.map((link, index) => {
                return (
                    <li>
                        <Link href={link.path}>{link.pathname}</Link>
                    </li>
                );
            })}
        </ul>
    </nav>
  );
};

export default Nav;