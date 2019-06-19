import { connect } from 'react-redux';
import api from '@/api'
import UI from './UI'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    bannerlist: state.home.bannerlist,
    prolist: state.home.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList () {
      api.requestGetData('banner').then (data=> {
        dispatch ({
          type: 'changeBannerList',
          data
        })
      })

    },
    getProList () {
      api.requestGetData('douban').then (data=> {
        dispatch ({
          type: 'changeProList',
          data
        })
      })
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);
export default Com