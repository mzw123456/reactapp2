import React from 'react';
import { Route, Switch, NavLink, Redirect} from 'react-router-dom'
import Home from '@/views/Home';
import Kind from '@/views/Kind';
import User from '@/views/User';
import Cart from '@/views/Cart';
import '@/main.scss'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path='/home' component={ Home }/>
        <Route path='/kind' component={ Kind }/>
        <Route path='/user' component={ User }/>
        <Route path='/cart' component={ Cart }/>
        <Redirect to = "/home"/>
      </Switch>
      <footer className="footer">
          <ul>
            <NavLink to='/home'>
              <span></span>
              <p>首页</p>
            </NavLink>
            <NavLink to='/kind'>
              <span></span>
              <p>分类</p>
            </NavLink>
            <NavLink to='/user'>
              <span></span>
              <p>购物车</p>
            </NavLink>
            <NavLink to='/cart'>
              <span></span>
              <p>我的</p>
            </NavLink>
          </ul>
      </footer>
    </div>
  )
}

export default App;
