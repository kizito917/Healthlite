<template>
    <div style="margin-top: -10px;">
        <v-date-picker
            v-model="picker"
            full-width
            elevation="3"
            header-color="#1565D8"
        ></v-date-picker>
    </div>
</template>

<script>
export default {
    data() {
        return {
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
    }
}
</script>