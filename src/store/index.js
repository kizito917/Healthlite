import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    btnStatus: false,
    notificationType: 'success',
    notificationStatus: false,
    notificationMsg: '',
    total_patients: 0,
    total_appointments: 0,
    total_waiting_room: 0,
    new_appointment: 0,
    patient_stats: [],
    appointments: [],
    scheduledAppointments: 0
  },
  mutations: {
    HIDE_NOTIFICATION: (state) => {
      state.notificationStatus = false
      state.notificationType = ''
      state.notificationMsg = ''
    },
    SAVE_DASHBOARD_DATA: (state, payload) => {
      state.total_patients = payload.total_patients
      state.total_appointments = payload.total_appointments
      state.total_waiting_room = payload.total_waiting_room
      state.new_appointment = payload.new_appointment
      state.patient_stats = payload.patient_stats
      state.appointments = payload.appointments
    },
    SAVE_SCHEDULE_DATA: (state, payload) => {
      state.scheduledAppointments = payload.scheduledAppointments
    }
  },
  actions: {
    toggleSpinner({state}, data) {
      state.btnStatus = data
    },
    showNotificationComponent({state, commit}, data) {
      state.notificationStatus = true
      state.notificationType = data.type
      state.notificationMsg = data.msg
      setTimeout(() => {
        commit('HIDE_NOTIFICATION')
      }, 2000);
    },
    saveDashboardDataInStore({commit}, data) {
      commit('SAVE_DASHBOARD_DATA', data)
    },
    saveScheduleDataInStore({commit}, data) {
      commit('SAVE_SCHEDULE_DATA', data)
    }
  },
  // modules: {
  // }
})
