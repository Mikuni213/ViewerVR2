import { Routes, Route,Link ,NavLink} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import NoMatch from './routes/nomatch';


// function CustomLink({ children, to }) {
//   let resolved = useResolvedPath(to);
//   let match = useMatch({
//     path: resolved.pathname,
//     end: true,
//   });
//   return (
//     <div>
//       <Link> style={{ color: match ? 'blue' : 'none' }} to={to}
//         {children}
//       </Link>
//     </div>
//   );
// }



function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
        <NavLink style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;