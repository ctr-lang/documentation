
module.exports = {
  name: 'bounceIn',
  option: {
    duration: '0.75s',
    mode: 'both'
  },
  timeline: {
    'from, 20%, 40%, 60%, 80%, to': {
      'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    },
    '0%': {
      opacity: '0',
      transform: 'scale3d(.3, .3, .3)'
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)'
    },
    '60%': {
      opacity: '1',
      transform: 'scale3d(1.03, 1.03, 1.03)'
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)'
    },
    to: {
      opacity: '1',
      transform: 'scale3d(1, 1, 1)'
    }
  }
};
