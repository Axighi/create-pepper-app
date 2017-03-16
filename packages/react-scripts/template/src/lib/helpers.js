export function findGetParameter(parameterName) {
  let result = null
  let tmp = []
  location.search
    .substr(1)
    .split('&')
    .forEach((item) => {
      tmp = item.split('=')
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]).split('/')[0]
    })
  return result
}