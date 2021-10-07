<template>
    <div>
        <v-card>
            <div class="px-3">
                <v-row class="mb-3 px-3">
                    <v-col cols="6">
                        <h4 class="mb-2">Patients by Gender</h4>
                        <Divider />
                    </v-col>
                    <v-col cols="6">
                        <h5 class="float-right blue--text">This Month
                            <v-icon color="blue">
                                mdi-arrow-right
                            </v-icon>
                        </h5>
                    </v-col>
                </v-row>
                <div>
                    <div id="chart" class="patient-chart">
                        <apexchart type="donut" :options="chartOptions"  :series="series"></apexchart>
                    </div>
                    <h4 class="pb-4">Total Patients : {{ total_patients }}</h4>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import Divider from './Divider.vue'
import { mapState } from 'vuex';
export default {
    components: {
        Divider
    },
    data() {
        return {
            series: this.$store.state.series,
            chartOptions: {
                chart: {
                type: 'donut',
                },
                series: this.$store.state.series,
                labels: ["Male", "Female", "Transgender", "Others"],
                responsive: [{
                    breakpoint: 280,
                    options: {
                        legend: {
                            position: 'top'
                        }
                    }
                }]
            },
        }
    },
    computed: {
        ...mapState(['total_patients'])
    }
}
</script>

<style scoped>
#chart {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
}
</style>