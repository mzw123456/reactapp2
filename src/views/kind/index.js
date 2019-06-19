import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      tabs:[
        { title: '1st Tab' },
        { title: '2nd Tab' },
        { title: '3rd Tab' },
        { title: '4th Tab' },
      ]
    }
  }
  renderContent (tab){
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    <p>Content of {tab.title}</p>
  </div>)
  }
  render () {
    return (
      <div className="box">
        <div className="header">分类头部</div>
        <div className="content">
          <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
             {this.renderContent} 
          </Tabs>
        </div>
      </div>
    )
  }
}
export default App