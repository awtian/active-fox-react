export function manipulate () {
  return {
    type: 'CHANGE_TITLE'
  }
}

export function customTitle (newtitle) {
  if (newtitle === 'activefox') {
    return {
      type: 'CHANGE_CUST_TITLE',
      newMessage: 'CONGRATS THIS IS INTENDED BUG'
    }
  }
  // if(newtitle.length > 7) {
  //   newtitle = new
  // }
  // newtitle = newtitle.slice(0,7)
  return {
    type: 'CHANGE_CUST_TITLE',
    newMessage: newtitle
  }
}