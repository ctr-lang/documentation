
module.exports = {
  name: 'fadeInLeftBig',
  option: {
    duration: '1s',
    mode: 'both'
  },
  timeline: {
    from: {
      opacity: '0',
      transform: 'translate3d(-2000px, 0, 0)'
    },
    to: {
      opacity: '1',
      transform: 'none'
    }
  }
};
