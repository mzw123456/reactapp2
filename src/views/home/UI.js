import React from 'react';
import Banner from '@/components/common/Banner';
import Prolist from '@/components/common/Prolist';
class Com extends React.Component {
  componentDidMount () {
    console.log(this.props)
    this.props.getBannerList()
    this.props.getProList()
  }

  render () {
    return (
      <div className="box">
        <div className="header">头部</div>
        <div className="content">
          <Banner bannerList={ this.props.bannerList } {...this.props}/>
          <Prolist prolist={ this.props.prolist } {...this.props}/>        
        </div>
      </div>
    )
  }
}
export default Com;