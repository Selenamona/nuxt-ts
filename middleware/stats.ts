
export default ({ route, $axios }) => {
  return $axios.$post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
