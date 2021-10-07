<template>
    <div>
        <v-row class="pt-4">
            <v-col cols="12" md="4" class="mb-2">
                <v-card
                >
                    <div class="px-3">
                        <v-row>
                            <v-col col="5">
                                <div class="mt-3" style="background: rgba(90, 94, 237, 0.1); border-radius: 4px; width: 40px;">
                                    <v-icon color="#5A5EED" class="pt-2 pb-2 pl-2">
                                        mdi-account-injury
                                    </v-icon>
                                </div>
                            </v-col>
                            <v-col col="7">
                                <h6>All Time
                                    <v-icon>
                                        mdi-chevron-down
                                    </v-icon>
                                </h6>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <h2>{{ total_patients.toLocaleString('en-US') }}</h2>
                                <h5 class="font-weight-thin">Total Patients</h5>
                                <p class="mt-5 text-caption">
                                    <v-icon
                                    color="#FF8080"
                                    >
                                        mdi-arrow-down
                                    </v-icon> 5% less than last month
                                </p>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" class="mb-2">
                <v-card
                >
                    <div class="px-3">
                        <v-row>
                            <v-col col="5">
                                <div class="mt-3" style="background: #FFF9EA; border-radius: 4px; width: 40px;">
                                    <v-icon color="#FDB557" class="pt-2 pb-2 pl-2">
                                        mdi-calendar-blank
                                    </v-icon>
                                </div>
                            </v-col>
                            <v-col col="7">
                                <h6>Today
                                    <v-icon>
                                        mdi-chevron-down
                                    </v-icon>
                                </h6>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <h2>{{ total_appointments.toLocaleString('en-US') }}</h2>
                                <h5 class="font-weight-thin">Appointments</h5>
                                <p class="mt-5 text-caption">
                                    <v-icon
                                    color="green"
                                    >
                                        mdi-arrow-down
                                    </v-icon> 15% more than yesterday
                                </p>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" class="mb-2">
                <v-card
                >
                    <div class="px-3">
                        <v-row>
                            <v-col col="5">
                                <div class="mt-3" style="background: rgba(250, 121, 33, 0.1); border-radius: 4px; width: 40px;">
                                    <v-icon color="#FA7921" class="pt-2 pb-2 pl-2">
                                        mdi-clock
                                    </v-icon>
                                </div>
                            </v-col>
                            <v-col col="7">
                                <h6>Today
                                    <v-icon>
                                        mdi-chevron-up
                                    </v-icon>
                                </h6>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <h2>{{ total_waiting_room.toLocaleString('en-US') }}</h2>
                                <h5 class="font-weight-thin">Waiting Room</h5>
                                <p class="mt-5 text-caption">
                                    <v-icon
                                    color="green"
                                    >
                                        mdi-arrow-up
                                    </v-icon> 35% less than yesterday
                                </p>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['total_patients', 'total_appointments', 'total_waiting_room'])
    },
}
</script>