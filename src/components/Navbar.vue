<template>
        <div>
            <v-card flat>
                <v-container fluid>
                <v-row class="child-flex">
                    <div>
                    <v-toolbar
                    color="white" 
                    >
                        <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>

                        <v-spacer></v-spacer>

                        <v-badge
                            color="#FF8080"
                            content="2"
                            overlap
                            >
                            <v-icon
                            style="color: grey;"
                            
                            >
                                mdi-bell
                            </v-icon>
                        </v-badge>

                        <v-avatar
                        size="30"
                        class="ml-5"
                        >
                            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-avatar>
                    </v-toolbar>
                    </div>
                </v-row>
                </v-container>
            </v-card>
            <v-navigation-drawer 
                v-model="sidebarMenu" 
                absolute
                :permanent="false"
                color="#1565D8"
                width="180"
                style="position: fixed;"
                >
                <v-list class="pb-4" dense dark>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                <v-img
                                    alt="Vuetify Logo"
                                    class="shrink mr-2"
                                    contain
                                    src="../assets/img/dashboard-logo.png"
                                    transition="scale-transition"
                                    width="120"
                                />
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-list dense dark>
                    <v-list-item class="mb-3 text-capitalize" v-for="item in items" :key="item.title" link :to="item.href">
                        <v-list-item-icon>
                            <v-icon color="default">{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <br /><br /><br />
                    <div class="footer-item">
                        <v-list-item class="mb-3">
                            <v-list-item-avatar>
                                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="white--text">My Profile</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="mb-3">
                            <v-list-item-icon>
                                <v-icon color="default">mdi-cog-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="white--text">Settings</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>
            </v-navigation-drawer>
        </div>
</template>

<script>
export default {
    data () {
        return {
            drawer: true,
            sidebarMenu: true,
            toggleMini: false,
            items: [
                { title: 'Dashboard', href:"/dashboard", icon: 'mdi-view-dashboard' },
                { title: 'Waiting Room', icon: 'mdi-clock' },
                { title: 'Schedule', href:"/schedule", icon: 'mdi-calendar-blank' },
                { title: 'My Patients', icon: 'mdi-account-injury' },
                { title: 'Notes', icon: 'mdi-note' },
                { title: 'Chats', icon: 'mdi-forum' },
            ],
        }
    },
    computed: {
        mini() {
            return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
        },
    }
}
</script>

<style scoped>
.footer-item {
    margin-top: 40px;
}

::v-deep .v-list .v-list-item--active {
    background: #1D2B4F;
}
</style>