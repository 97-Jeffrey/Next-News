
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader(){

  return (
    <header id='main-header'>
      <div id='logo'>
         <Link href='/'>Next News</Link>
      </div>
      <nav>
        <ul>
          <NavLink href='/news'> 
            News
          </NavLink>
          <NavLink href='/archive'> 
            Archive
          </NavLink>
        </ul>
      </nav>

    </header>

  )
}