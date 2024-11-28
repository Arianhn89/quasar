<template>
  <q-page-container>
    <q-page class="window-width window-height row justify-center items-center">
      <div class="colunmns">
        <div class="row">
          <q-card square bordered class="q-pa-lg w-400">
            <h5 class="text-h5 text-black q-mx-lg q-my-sm">
              Login
            </h5>
            <q-card-section class="br">
              <q-form class="q-gutter-md">
                <q-input
                  standout="bg-teal-5 text-white"
                  v-model="loginParameter.username"
                  square
                  filled
                  clearable
                  type="email"
                  label="Email"
                />
                <q-input
                  standout="bg-teal-5 text-white"
                  v-model="loginParameter.password"
                  square
                  filled
                  clearable
                  type="password"
                  label="Password"
                />
              </q-form>
            </q-card-section>
            <q-card-section>
              <q-btn
                @click="login"
                unelevated
                color="light-blue-8"
                size="lg"
                class="full-width"
                label="login"
              />
              <q-btn
                @click="register"
                unelevated
                color="orange"
                size="lg"
                class="full-width q-mt-sm"
                label="register"
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

const loginParameter = ref({
  username: <string>'',
  password: <string>'',
});

const login = () => {
  console.log(loginParameter.value.username, loginParameter.value.password);
};

const router = useRouter();
const register = () => {
  router.replace({ name: 'register' });
};
</script>
