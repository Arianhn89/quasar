<template>
  <q-layout view="hHh lpr fFf" class="auth-background">
    <q-header reveal elevated class="bg-orange text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Menu
          <q-avatar>
            <img src="images/logo.png" />
          </q-avatar>
        </q-toolbar-title>
        <span>Profile</span>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-list separator>
        <q-item
          v-for="(item, index) in accessMenu"
          :key="index"
          :to="item.route"
          v-ripple
          clickable
        >
          <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
          <q-item-section
            ><q-item-label class="q-ml-md">{{
              item.name
            }}</q-item-label></q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <div class="avatarBox row items-center justify-center">
        <q-avatar size="150px" class="overlapping">
          <q-img :src="profileTemp.avatar" />
        </q-avatar>
      </div>
      <div class="q-pa-md row items-center q-gutter-md justify-center">
        <q-card flat bordered class="text-center w-75">
          <q-card-section>
            <div class="text-h3">profie</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section class="q-pt-none">
            <div class="text-h5">username</div>
            {{ profileTemp.username }}
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            <div class="text-h5">Email</div>
            {{ profileTemp.email }}
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-md q-gutter-sm text-center">
        <q-btn
          class="full-width"
          label="update"
          color="light-blue-8"
          @click="profileTemp.model = true"
        />
        <q-btn
          class="full-width"
          label="log out"
          color="red"
          @click="logout()"
        />
        <q-dialog v-model="profileTemp.model" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">Update profile</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model="profileTemp.username"
                label="Your Username"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model="profileTemp.email"
                label="Your Email"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model="profileTemp.password"
                label="Your Password"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-file
                  v-model="profileTemp.newAvatar"
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
                      @click.stop.prevent="profileTemp.newAvatar = null"
                      class="cursor-pointer"
                    />
                  </template>

                  <template v-slot:hint> Click on this input and choose an image for your avatar.</template>
                </q-file>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Update" @click="update()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { accessMenu } from 'src/components/ts/MenuComponent';
import { profileTemp } from 'src/components/ts/ProfileComponent.ts';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      accessMenu,
      profileTemp,
      update() {
        console.log('You updated your profile');
      },
      logout() {
        console.log('You loged out');
      },
    };
  },
};
</script>
