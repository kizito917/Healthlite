<template>
    <div v-if="notificationCalled">
        <v-alert
            dense
            outlined
            :type="type"
        >
            {{ notificationMsg }}
        </v-alert>
    </div>
</template>

<script>
export default {
    computed: {
        notificationCalled() {
            return this.$store.state.notificationStatus;
        },
        type() {
            return this.$store.state.notificationType;
        },
        notificationMsg() {
            return this.$store.state.notificationMsg;
        }
    }
}
</script>