<template>
    <v-app>
        <Navbar />
            <v-content class="main-view">
                <v-container class="px-4 py-0 fill-height" fluid>
                    <transition name="fade">
                        <v-row class="fill-height">
                            <v-col cols="12" md="7">
                                <div class="px-3">
                                    <div>
                                        <v-row class="welcome-tile">
                                            <v-col cols="9" md="9">
                                                <div class="ml-3 mt-2 mb-2 white--text">
                                                    <h2>Welcome, Dr. Fayemi David</h2>
                                                    <p class="mt-2">You have {{ new_appointment }} new appointments and there are currently {{ total_waiting_room }} patients in the waiting room. Have a nice day at work!</p>
                                                    <v-btn
                                                        tile
                                                        class="white--text welcome-tile-btn"
                                                        style="background:transparent; border: 1px solid rgba(255, 255, 255, 0.1);"
                                                        >
                                                        <v-icon left>
                                                            mdi-eye
                                                        </v-icon>
                                                    <b class="text-caption text-capitalize">View your appointments</b>
                                                    </v-btn>
                                                    <v-btn
                                                        tile
                                                        class="ml-2 white--text welcome-tile-btn"
                                                        style="background:transparent; border: 1px solid rgba(255, 255, 255, 0.1);"
                                                        >
                                                        <b class="text-caption text-capitalize">Go to waiting room</b>
                                                        <v-icon right>
                                                            mdi-arrow-right
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </v-col>
                                            <v-col cols="3" md="3">
                                                <div class="float-right">
                                                    <v-img
                                                    src="../assets/img/character.png"
                                                    width="150"
                                                    >
                                                    </v-img>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <div class="mt-4">
                                            <TotalRecord />
                                        </div>
                                        <div class="mt-4">
                                            <div>
                                                <PatientList />
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <div>
                                                <v-card>
                                                    <v-img
                                                        src="../assets/img/chart.png"
                                                    >
                                                    </v-img>
                                                </v-card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="5">
                                <div class="px-3">
                                    <div>
                                        <Calendar />
                                    </div>
                                </div>
                                <div class="px-3" style="margin-top: 5%;">
                                    <div>
                                        <PatientChart />
                                    </div>
                                </div>
                                <div class="px-3" style="margin-top: 5%;">
                                    <div>
                                        <Activity />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </transition>
                </v-container>
            </v-content>
    </v-app>
</template>


<script>
import Activity from '../components/Activity.vue'
import Navbar from '../components/Navbar.vue'
import TotalRecord from '../components/Total-record.vue'
import Calendar from '../components/Calendar.vue'
import PatientChart from '../components/Patient-chart.vue'
import PatientList from '../components/Patient-list.vue'
import { getAllDashboardData } from '../services/auth';
import { mapState } from 'vuex';
export default {
    name: "Dashboard",
    components: {
        Activity,
        Calendar,
        Navbar,
        PatientChart,
        PatientList,
        TotalRecord
    },
    computed: {
        ...mapState(['new_appointment', 'total_waiting_room'])
    },
    methods: {
        async getDashboardData() {
            await getAllDashboardData()
            .then((data) => {
                this.$store.dispatch('saveDashboardDataInStore', data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    created() {
        this.getDashboardData()
    }
}
</script>