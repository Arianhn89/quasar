<template>
  <q-page-container>
    <q-page class="window-width window-height row justify-center items-center">
      <div class="colunmns">
        <div class="row">
          <q-card square bordered class="q-pa-lg w-400">
            <h5 class="text-h5 text-black q-mx-lg q-my-sm">
              Register
            </h5>
            <q-card-section class="br">
              <q-form class="q-gutter-md">
                <q-input
                  v-model="registerParameter.name"
                  standout="bg-teal-5 text-white"
                  square
                  filled
                  clearable
                  type="text"
                  label="First & Last name"
                />
                <q-input
                  standout="bg-teal-5 text-white"
                  v-model="registerParameter.username"
                  square
                  filled
                  clearable
                  type="email"
                  label="Email"
                />
                <q-input
                  standout="bg-teal-5 text-white"
                  v-model="registerParameter.password"
                  square
                  filled
                  clearable
                  type="password"
                  label="Password"
                />
                <q-file
                  v-model="registerParameter.avatar"
                  square
                  filled
                  bottom-slots
                  label="avatar"
                  counter
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      name="close"
                      @click.stop.prevent="registerParameter.avatar = null"
                      class="cursor-pointer"
                    />
                  </template>

                  <template v-slot:hint> Click on this input and choose an image for your avatar.</template>
                </q-file>
              </q-form>
            </q-card-section>
            <q-card-section>
              <q-btn
                @click="register"
                unelevated
                color="orange"
                size="lg"
                class="full-width"
                label="register"
              />
              <q-btn
                @click="login"
                unelevated
                color="light-blue-8"
                size="lg"
                class="full-width q-mt-sm"
                label="login"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const registerParameter = ref({
  name: <string>'',
  username: <string>'',
  password: <string>'',
  avatar:<any> '',
});

const register = () => {
  console.log(
    registerParameter.value.name,
    registerParameter.value.username,
    registerParameter.value.password,
    registerParameter.value.avatar
  );
};

const router = useRouter();
const login = () => {
  router.replace({ name: 'login' });
};
</script>