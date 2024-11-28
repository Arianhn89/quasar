<template>
    <q-layout view="hHh lpr fFf" class="auth-background">
  
      <q-header reveal elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
          <q-toolbar-title>
            Menu
            <q-avatar>
              <img src="images/logo.png">
            </q-avatar>
          </q-toolbar-title>
          <span>Profile</span>
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
  
        <!-- <q-tabs align="left"> -->
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        <!-- </q-tabs> -->
      </q-header>
  
      <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
        <q-list separator>
          <q-item
          v-for="(item, index) in accessMenu"
          :key="index"
          :to="item.route"
          v-ripple
          clickable>
          <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
          <q-item-section><q-item-label class="q-ml-md">{{ item.name }}</q-item-label></q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
        <!-- drawer content -->
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
    </q-layout>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { accessMenu } from 'src/components/ts/MenuComponent'; 
  
  export default {
    setup () {
      const leftDrawerOpen = ref(false)
      const rightDrawerOpen = ref(false)
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
  
        rightDrawerOpen,
        toggleRightDrawer () {
          rightDrawerOpen.value = !rightDrawerOpen.value
        },
        accessMenu,
      }
    }
  }
  </script>