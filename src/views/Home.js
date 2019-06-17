import React from 'react';
import Prolist from '@/components/common/Prolist';
import Banner from '@/components/common/Banner';
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      prolist: [],
      bannerList: [1,2]
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({
        bannerList: data
      })
    })
    fetch ('http://www.daxunxun.com/douban').then(res=> res.json()).then(data => {
      this.setState ({
        prolist:data
      })
    })
  }
  
  render () {
    return (
      <div className="box">
        <div className="header">头部</div>
        <div className="content">
          <Banner bannerList={ this.state.bannerList }/>
          <Prolist prolist={ this.state.prolist } {...this.props}/>        
        </div>
      </div>
    )
  }
}
export default App