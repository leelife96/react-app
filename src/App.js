import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  console.log("props", props.title);
  return (
    <div>
      <header>
        <h1>
          <a href="/">{props.title}</a>
        </h1>
      </header>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <li>
        <a href="/read/1">html</a>
      </li>
      <li>
        <a href="/read/2">css</a>
      </li>
      <li>
        <a href="/read/3">js</a>
      </li>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}
function App() {
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
