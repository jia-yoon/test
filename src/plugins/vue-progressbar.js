import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#FCE4EC',
  //   failedColor: '#874b4b',
  thickness: '4px'
//   transition: {
//     speed: '0.2s',
//     opacity: '0.6s',
//     termination: 300
//   },
//   autoRevert: true,
//   location: 'left',
//   inverse: false
}

Vue.use(VueProgressBar, options)
