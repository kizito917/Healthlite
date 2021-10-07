<template>
    <div>
        <v-card>
            <div class="px-3">
                <v-row class="mb-3 px-3">
                    <v-col cols="12" md="6">
                        <h4 class="mb-2">Thursday - 18th February, 2021</h4>
                        <Divider />
                    </v-col>
                    <v-col cols="12" md="6">
                        <h5 class="float-md-right">Show by <b class="blue--text">Day</b>
                            <v-icon color="blue">
                                mdi-chevron-down
                            </v-icon>
                        </h5>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <div>
                        <v-list-item-avatar class="ml-1" v-for="item in items" :key="item.name">
                            <v-img
                                :src="item.img"
                            >
                            </v-img>
                        </v-list-item-avatar>
                        <span class="text-caption ml-3">You have {{ scheduledAppointments.toLocaleString('en-US') }} Appointments Scheduled</span>
                    </div>
                </v-row>
                <v-divider />
                <div class="mt-5">
                    <v-list
                        subheader
                        two-line
                        >
                            <v-list-item
                                v-for="data in appointments"
                                :key="data.id"
                                class="mb-3"
                            >
                                <v-row>
                                    <v-col cols="12" md="2">
                                        <small class="text-caption">{{ data.createdAt | moment }}</small>
                                    </v-col>
                                    <v-col cols="12" md="10">
                                        <div class="list-spill">
                                            <v-row>
                                                <v-col cols="12" md="10">
                                                    <v-list-item-avatar>
                                                        <v-img
                                                        :src="data.avatar"
                                                        >
                                                        </v-img>
                                                        
                                                    </v-list-item-avatar>
                                                    <span>{{ data.name }}</span>
                                                </v-col>
                                                <v-col cols="12" md="2">
                                                    <v-icon class="mt-4">mdi-dots-horizontal</v-icon>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                    </v-list>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import Divider from './Divider.vue'
import moment from 'moment'
import { mapState } from 'vuex';
export default {
    components: {
        Divider
    },
    data() {
        return {
            items: [
                {
                    img: 'https://cdn.vuetifyjs.com/images/john.png',
                    name: 'Guy hawkins',
                    time: '09:00am'
                },
                {
                    img: 'https://cdn.vuetifyjs.com/images/john.png',
                    name: 'Darell stewards',
                    time: '12:00pm'
                },
                {
                    img: 'https://cdn.vuetifyjs.com/images/john.png',
                    name: 'Hope Canbell',
                    time: '12:00pm'
                },
                {
                    img: 'https://cdn.vuetifyjs.com/images/john.png',
                    name: 'Lee Ann',
                    time: '12:00pm'
                },
            ],
        }
    },
    computed: {
        ...mapState(['appointments', 'scheduledAppointments'])
    },
    filters: {
        moment: function (date) {
            return moment(date).format('h:mm a');
        }
    }
}
</script>