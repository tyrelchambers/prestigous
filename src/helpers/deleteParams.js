const deleteParams = (href, target, ...param) => {
  let url = new URL(href);
  let params = new URLSearchParams(url.search);
  
  param.forEach(x => {
    params.delete(x)
  })

  window.location.href = target;
}

export default deleteParams