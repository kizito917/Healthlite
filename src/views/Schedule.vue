<template>
    <v-container-fluid>
        <Navbar />
            <v-main class="mt-6">
                <div class="parent-div">
                    <transition name="fade">
                        <v-row>
                            <v-col cols="12" md="12">
                                <div class="px-3">
                                    <div>
                                        <v-row class="welcome-tile-schedule mb-3">
                                            <v-col cols="12" md="8" class="mb-3">
                                                <div class="ml-3 mt-2 mb-2 white--text">
                                                    <h2>Your Schedule</h2>
                                                    <p class="mt-2">All client consultations are available here. You can intiate <br /> consultations for each client’s proceedure.</p>
                                                    <v-btn
                                                        tile
                                                        class="white--text welcome-tile-btn"
                                                        style="background:transparent; border: 1px solid rgba(255, 255, 255, 0.1);"
                                                        >
                                                        <v-icon left>
                                                            mdi-eye
                                                        </v-icon>
                                                    <b class="text-caption text-capitalize">Add new schedule</b>
                                                    </v-btn>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="4" class="mb-3">
                                                <div class="float-md-right">
                                                    <v-img
                                                    src="../assets/img/character2.png"
                                                    width="200"
                                                    >
                                                    </v-img>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row style="margin-top: 3%;">
                                            <v-col cols="12" md="5" class="mb-3">
                                                <div class="px-3">
                                                    <div>
                                                        <Calendar />
                                                    </div>
                                                </div>
                                                
                                                <div class="px-3" style="margin-top: 5%;">
                                                    <div>
                                                        <Activity />
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="7">
                                                <div class="px-3">
                                                    <Appointment />
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </transition>
                </div>
            </v-main>
    </v-container-fluid>
</template>


<script>
import Activity from '../components/Activity.vue'
import Appointment from '../components/Appointment.vue'
import Navbar from '../components/Navbar.vue'
import Calendar from '../components/Calendar.vue'
import { getScheduleData } from '../services/auth';
export default {
    name: "Dashboard",
    components: {
        Activity,
        Appointment,
        Calendar,
        Navbar
    },
    methods: {
        async getSCheduleDetails() {
            await getScheduleData()
            .then((data) => {
                this.$store.dispatch('saveScheduleDataInStore', data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    created() {
        this.getSCheduleDetails()
    }
}
</script>