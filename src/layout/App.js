import React from 'react';
import { Route, Switch, NavLink, Redirect} from 'react-router-dom'
import Home from '@/views/home';
import Kind from '@/views/kind';
import User from '@/views/user';
import Cart from '@/views/cart';
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
              <span className='iconfont icon-yemian-copy-copy'></span>
              <p>首页</p>
            </NavLink>
            <NavLink to='/kind'>
              <span className='iconfont icon-icon'></span>
              <p>分类</p>
            </NavLink>
            <NavLink to='/user'>
              <span className='iconfont icon-qicheqianlian-1'></span>
              <p>购物车</p>
            </NavLink>
            <NavLink to='/cart'>
              <span className='iconfont icon-mine-gray'></span>
              <p>我的</p>
            </NavLink>
          </ul>
      </footer>
    </div>
  )
}

export default App;
