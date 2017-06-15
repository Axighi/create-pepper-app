export function findGetParameter(parameterName) {
  let result = null;
  let tmp = [];
  window.location.search.substr(1).split("&").forEach(item => {
    tmp = item.split("=");
    if (tmp[0] === parameterName)
      result = decodeURIComponent(tmp[1]).split("/")[0];
  });
  return result;
}

// usage:
// const images = requireAll(require.context("./assets", false, /\.png$/));
// <img src={images[img_name]} />

export function requireAll(requireContext) {
  const ret = {};
  requireContext.keys().forEach(k => {
    const key = k.replace(/.\/|.png|.jpg|.svg/g, "");
    ret[key] = requireContext(k);
  });
  return ret;
}

export const camelCased = str => {
  if (str) return str.replace(/_([a-z])/g, g => g[1].toUpperCase());
};
