import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import MainPage from './views/main';
import PostsPage from './views/posts';
import {
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <Route>
        <div className="body">
        <div className='d-flex flex-nowrap container'>
                    <Link to={'../'} className="links"><span className='title'>Comments</span></Link>
                    <Link to={'../posts'} className="links"><span className='title'>Posts</span></Link>
        </div>
          <div id="main">
            <Route exact path="/" component={MainPage} />
            <Route exact path="/posts" component={PostsPage} />
          </div>
        </div>
      </Route>
    );
  }
}
export default App;
