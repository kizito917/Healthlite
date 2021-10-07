<template>
    <div class="body">
        <v-row>
            <v-col cols="12" md="12">
                <div class="col-2-div-login">
                    <div class="pa-11">
                        <div class="text-center mb-2">
                            <img src="@/assets/logo.png" width="50" alt="Logo">
                        </div>
                        <h4 class="mb-5 text-center">Sign in</h4>
                        <div>
                            <Notification />
                        </div>
                        <div class="form-div">
                            <div class="form-group">
                                <label for="" class="text-caption">Email Address</label>
                                <v-text-field
                                type="email"
                                v-model="form.email"
                                label="example@mail.com"
                                required
                                ></v-text-field>
                            </div>
                            <div class="form-group">
                                <label for="" class="text-caption">Password</label>
                                <v-text-field
                                type="password"
                                v-model="form.password"
                                label="******************"
                                required
                                ></v-text-field>
                            </div>
                            <p class="blue--text font-weight-black mt-5 mb-5 text-caption">Forgot password?</p>
                            <div class="form-group" @click.prevent="login">
                                <ButtonGen :buttonText="'Sign In'" />
                            </div>
                            <p class="text-center mt-6 font-weight-black text-caption">New user? <router-link to="/" class="blue--text text-decoration-none">Sign up to get started</router-link></p>
                            <div class="mt-10">
                                <v-row>
                                <v-col cols="6">
                                    <p class="text-caption">Need help?</p>
                                </v-col>
                                <v-col cols="2" style="background: white;">
                                    <p class="text-caption">Privacy</p>
                                </v-col>
                                <v-col cols="4">
                                    <p class="text-caption">Terms & Policy</p>
                                </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ButtonGen from '../components/Button-general.vue';
import Notification from '../components/Notification.vue';
import { loginUser } from '../services/auth';
export default {
    props: ['buttonText'],
    components: { 
        ButtonGen,
        Notification
    },
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            this.$store.dispatch('toggleSpinner', true)
            if (this.form.email == '' || this.form.password == '') {
                this.$store.dispatch('toggleSpinner', false)
                this.$store.dispatch('showNotificationComponent', {type: 'error',msg: 'Please fill all fields'   })
            } else {
                await loginUser(this.form).then((data) => {
                    this.$store.dispatch('toggleSpinner', false)
                    //checking if the data returned by service (i.e verification_status) is true or not
                    if (data == true) {
                        this.$store.dispatch('showNotificationComponent', {type: 'success', msg: 'Login Successful...Redirecting to Dashboard'})
                        setTimeout(() => {
                            this.$router.push('/dashboard')
                        }, 2000);
                    } else {
                        this.$store.dispatch('showNotificationComponent', {type: 'error',msg: 'Your account is not yet verified'   })
                    }
                }).catch(() => {
                    this.$store.dispatch('toggleSpinner', false)
                    this.$store.dispatch('showNotificationComponent', {type: 'error',msg: 'Unable to process Login'})
                })
            }
        }
    }
}
</script>