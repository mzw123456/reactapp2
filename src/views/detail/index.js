import React from 'react'
class Com extends React.Component {
  constructor (props) {
    super (props);
    this.state={
      title: ''
    }
  }
  componentDidMount () {
    const {id} = this.props.match.params;
    fetch ('http://www.daxunxun.com/detail?id=' + id).then (res=> res.json()).then (data => {
      this.setState ({
        title: data[0].title
      })
    })
  }
  render () {
    return (
      <div className="container">
        <div className="box">
          <div className="header">详情页头部</div>
          <div className="content">{this.state.title}</div>
        </div>
        <footer className="footer">详情页底部</footer>
      </div>
    )
  }
}

export default Com