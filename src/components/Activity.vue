<template>
    <div>
        <v-card>
            <div class="px-3">
                <v-row class="mb-3 px-3">
                    <v-col cols="6">
                        <h4 class="mb-2">Activities</h4>
                        <Divider />
                    </v-col>
                    <v-col cols="6">
                        <h5 class="float-right blue--text" style="background: rgba(134, 146, 166, 0.1); border-radius: 4px; width: 40px;">
                            <v-icon color="blue" class="ml-2">
                                mdi-bell-badge-outline
                            </v-icon>
                        </h5>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-list
                            subheader
                            two-line
                            >

                                <v-list-item
                                    v-for="data in items"
                                    :key="data.id"
                                >
                                    <v-list-item-avatar>
                                    <v-img
                                    :src="data.img"
                                    >
                                    </v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>

                                    <v-list-item-subtitle v-text="data.subtitle"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
import Divider from './Divider.vue'
export default {
    components: {
        Divider
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    img: require('../assets/img/a1.png'),
                    subtitle: 'There are 3 new ready reports for Tosin Odubela',
                },
                {
                    id: 2,
                    img: require('../assets/img/a2.png'),
                    subtitle: 'You have scheduled an interview with Michael Okoh',
                },
                {
                    id: 3,
                    img: require('../assets/img/a3.png'),
                    subtitle: 'You have scheduled 3 appointment for 24th Feb, 2020',
                },
                {
                    id: 4,
                    img: require('../assets/img/a4.png'),
                    subtitle: 'Okereke Chinaza has rescheduled appointment',
                },
                {
                    id: 5,
                    img: require('../assets/img/a1.png'),
                    subtitle: 'There are 3 new ready reports for Chinaza Okereke',
                },
                {
                    id: 6,
                    img: require('../assets/img/a1.png'),
                    subtitle: 'There are 3 new ready reports for Tosin Odubela',
                }
            ],
        }
    }
}
</script>