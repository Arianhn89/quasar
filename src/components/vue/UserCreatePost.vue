<script lang="ts" setup>
import {defineProps, defineEmits, ref} from 'vue'
import { profileTemp } from '../ts/ProfileComponent';

const props = defineProps({
    modal:{
        default : false
    }
})
const createPostParameter = ref({
    title : '',
    description: '',
    image:undefined,
})

const emit = defineEmits(['update:modal'])

const close = ()=>{
    emit.call(this, 'update:modal', false)
}

const accepted = () => {
    console.log(
        createPostParameter.value.title,
        createPostParameter.value.description,
        createPostParameter.value.image,
    );
    emit.call(this, 'update:modal', false)
}

</script>

<template>
    <q-dialog v-model="props.modal" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">Create new post</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model:model-value = "createPostParameter.title"
                label="Enter Your Title"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                type="textarea"
                dense
                v-model:model-value = "createPostParameter.description"
                label="Enter Your Description"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-file
                  v-model="createPostParameter.image"
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
                      @click.stop.prevent="createPostParameter.image = null"
                      class="cursor-pointer"
                    />
                  </template>

                  <template v-slot:hint> Click on this input and choose an image for your avatar.</template>
                </q-file>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Update" @click="" />
            </q-card-actions>
          </q-card>
        </q-dialog>
</template>