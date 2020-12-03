import "./App.css";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import NewPost from "./NewPost";
import PostView from "./PostView";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/post/:postId">
          <PostView />
        </Route>
        <Route to="/" />
      </Switch>
    </div>
  );
}

export default App;
