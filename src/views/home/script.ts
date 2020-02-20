import Vue from 'vue'

const states = {
  weekOfDay: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
}

export default Vue.extend({
  data() {
    return states
  }
})
