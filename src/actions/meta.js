export function set(meta) {
  return (dispatch) => {
    return setTimeout(() => {
      return dispatch({
        type: 'META-SET',
        meta: meta
      })
    }, 500)
  }
}
