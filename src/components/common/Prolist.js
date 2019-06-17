import React from 'react';
import '@/prolist.scss'
// import { Link } from 'react-router-dom';
// const Com = (props) => (
//   <ul className="prolist">
//     {
//       props.prolist.map(item => {
//         console.log(props)
//         console.log(item.images.small)
//         return (
//           <li key={item.id}>
//            <Link to={'/detail/' + item.id}>
//             <div className='img'>
//             <img src={ item.images.small } alt=''/>
//             </div>
//             {item.title}
//           </Link>
//           </li>
//         )
//       })
//     }
//   </ul>
// )
class Com extends React.Component {
  goDetail (id) {
    console.log(this.props)
    this.props.history.push('/detail/'+ id)
  }
  render () {
    return (
    <ul className="prolist">
      {
        this.props.prolist.map(item => {
          // console.log(item.images.small)
          return (
            <li key={item.id} onClick={this.goDetail.bind(this, item.id)}>
              <div className='img'>
                <img src={ item.images.small } alt=''/>
              </div>
              {item.title}
            </li>
          )
        })
      }
    </ul>
    )
  }

}
export default Com;