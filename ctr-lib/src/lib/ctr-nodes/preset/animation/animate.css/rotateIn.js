
module.exports = {
  name: 'rotateIn',
  option: {
    duration: '1s',
    mode: 'both'
  },
  timeline: {
    from: {
      'transform-origin': 'center',
      transform: 'rotate3d(0, 0, 1, -200deg)',
      opacity: '0'
    },
    to: {
      'transform-origin': 'center',
      transform: 'none',
      opacity: '1'
    }
  }
};
