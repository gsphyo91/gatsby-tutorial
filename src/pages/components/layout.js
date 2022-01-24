import { Link } from "gatsby"

const Layout = ({pageTitle, children}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;