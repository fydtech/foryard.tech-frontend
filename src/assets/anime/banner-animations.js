export const animations = {
  sentence1Animation1: {
    translateY: [ {value: -25, duration: 1000, easing: 'easeOutQuint' }],
    opacity: [{ value: 1, duration: 1000 }],
    scale: [{value: 1.5, duration: 100, easing: 'easeOutElastic' }, {value: 1, duration: 900, easing: 'easeOutElastic' }],
  },
  sentence1Animation2: {
    translateY: [ {value: -25, duration: 1000, easing: 'easeOutQuint' } ],
    opacity: [{ value: 1, duration: 1000 }],
    scale: [{value: 1.3, duration: 90, easing: 'easeOutElastic' }, {value: 1, duration: 810, easing: 'easeOutElastic' }],
  },
  sentence2Animation: {
    translateY: [ {value: -25, duration: 800, easing: 'easeOutQuint' } ],
    opacity: [{ value: 1, duration: 800 }]
  },
  logoAnimation: {
    translateY: [ {value: -25, duration: 800, easing: 'easeOutQuint' } ],
    opacity: [{ value: 1, duration: 800 }]
  },
  laravelVibrateAnimation: {
    rotate: [
      {value: 0, duration: 10000},
      {value: '15deg', duration: 900},
      {value: 0, duration: 900}
    ]
  },
  vueVibrateAnimation: {
    translateX: [
      {value: 2, duration: 100},
      {value: -2, duration: 100},
      {value: 2, duration: 100},
      {value: -2, duration: 100},
      {value: 2, duration: 100},
      {value: -2, duration: 100},
      {value: 0, duration: 100}
    ]
  },
  downArrowAnimation: {
    translateY: [{
      value: 10,
      duration: 1000,
      easing: 'easeInQuad'
    },
    {
      value: 0,
      duration: 1000,
      easing: 'easeOutQuad'
    }]
  }
}
