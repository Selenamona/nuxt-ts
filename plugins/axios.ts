import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

export default ({ $axios, redirect }: any) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    console.log('Making request to ' + config.url)
    return config
  })
  $axios.onResponse((response: AxiosResponse) => {
    console.log(response)
    return Promise.resolve(response.data);
  })
  $axios.onRequestError((error: AxiosError) => {
    console.log('Making onRequestError to ', error)
    return Promise.reject(error);
  })
  $axios.onResponseError((error: AxiosError) => {
    console.log('Making onResponseError to ', error)
    return Promise.reject(error);
  })
  $axios.onError((error: { response: { status: any } }) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/error')
    }
    // if (error.response.status === 500) {
    //   redirect('/sorry')
    // }
  })
}
