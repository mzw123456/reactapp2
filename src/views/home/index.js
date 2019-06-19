import { connect } from 'react-redux';
import UI from './UI';
import action from './action'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    bannerlist: state.home.bannerlist,
    prolist: state.home.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList () {dispatch(action.getBannerList)},
    getProList() {dispatch(action.getProList)}
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);
export default Com