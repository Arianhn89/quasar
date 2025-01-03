<script lang="ts" setup>
import {defineProps, defineEmits ,ref} from 'vue'

const props = defineProps({
    modal:{
        default : false
    },
    date: {},
})
const tab = ref('image')

const changetab = () =>{
    if (tab.value == 'image')
        tab.value = 'map'
    else
        tab.value = 'image'
}

const emit = defineEmits(['update:modal'])

const close = ()=>{
    emit.call(this, 'update:modal', false)
}

const accepted = () => {
    emit.call(this, 'update:modal', false)
}

</script>

<template>
    <q-dialog :model-value="props.modal" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">Delete post</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model:model-value = "updatePostParameter.title"
                label="Enter Your Title"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                type="textarea"
                dense
                v-model:model-value = "updatePostParameter.description"
                label="Enter Your Description"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-file
                  v-model:model-value="updatePostParameter.image"
                  square
                  filled
                  bottom-slots
                  label="Post Image"
                  counter
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      name="close"
                      @click.stop.prevent="updatePostParameter.image = null"
                      class="cursor-pointer"
                    />
                  </template>

                  <template v-slot:hint> Click on this input and choose an image for your avatar.</template>
                </q-file>
            </q-card-section>

            <q-tab-panels v-model="tab" animated class="full-width">
            <q-tab-panel name="image">
                <q-img :src="props.data.image" width="100%" height="300px"/>
            </q-tab-panel>
            <q-tab-panel name="map">Map</q-tab-panel>
            </q-tab-panels>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
            @click="changetab()"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{props.data.title}}</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              250 ft
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">{{props.data.username}}</div>
          <div class="text-caption text-grey">
            {{props.data.description.substring(0,200)}}
          </div>
        </q-card-section>

        <q-separator />

            <q-card-actions align="right" class="text-primary">
              <q-btn color="light-blue-6" flat label="Cancel" icon-right="close" @click="close()" />
              <q-btn color="red" flat label="Delete" icon-right="remove" @click="accepted()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
</template>