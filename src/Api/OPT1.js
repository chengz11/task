import axios from './index'
export const getOPT1 = () => {
  return axios.request({
    url: '/axiosget',
    method: 'get',
    data: {

    }
  })
}