import { createGlobalState } from 'react-hooks-global-state'
import moment from 'moment'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  createModal: 'scale-0',
  connectedAccount: '',
  contract: null,
  proposals: [],
  isStakeholder: false,
  balance: 0,
  mybalance: 0,
})

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars)
    var end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const daysRemaining = (days) => {
  var time = moment.unix(days)
  time= time.toString()
  console.log(time);
  return time
}

export {
  truncate,
  setGlobalState,
  useGlobalState,
  getGlobalState,
  daysRemaining,
}