import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";
import NotFound from "./pages/NotFound";
<Route exact path="/not-found" component={NotFound} />
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/:id" component={Movie} />
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}