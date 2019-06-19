import api from '@/api';
export default {
  getBannerList (dispatch) {
    api.requestGetData('banner').then (data=> {
      dispatch ({
        type: 'changeBannerList',
        data
      })
    })

  },
  getProList (dispatch) {
    api.requestGetData('douban').then (data=> {
      dispatch ({
        type: 'changeProList',
        data
      })
    })
  }
}