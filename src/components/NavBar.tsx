
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
      <hr className="mt-4 mb-8" /> {/* Line under the navigation bar */}
    </nav>
  );
};

export default NavBar;
