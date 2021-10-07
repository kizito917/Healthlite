<template>
    <div>
        <v-card>
            <div class="px-3">
                <v-row class="mb-3 px-3">
                    <v-col cols="6">
                        <h4 class="mb-2">Your next patients</h4>
                        <Divider />
                    </v-col>
                    <v-col cols="6">
                        <h5 class="float-right blue--text">View All
                            <v-icon color="blue">
                                mdi-arrow-right
                            </v-icon>
                        </h5>
                    </v-col>
                </v-row>
                <div class="scroll">
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
import Divider from './Divider.vue';
import moment from 'moment'
import { mapState } from 'vuex';
export default {
    components: {
        Divider
    },
    computed: {
        ...mapState(['appointments'])
    },
    filters: {
        moment: function (date) {
            return moment(date).format('h:mm a');
        }
    }
}
</script>