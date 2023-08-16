
import Link from 'next/link'; // Importing Link from Next.js

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
        <li>
          <Link href="/"> {/* Link to the home page */}
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog"> {/* Link to the blog page */}
            Blog
          </Link>
        </li>
        <li>
          <Link href="/youtube"> {/* Link to the YouTube page */}
            YouTube
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
