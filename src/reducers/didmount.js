/* @flow */

const initialState = false

export default function update(state: boolean = initialState, action: Object) {
  switch (action.type) {
    case 'DID_MOUNT':
      return true
    default:
      break
  }

  return state
}
