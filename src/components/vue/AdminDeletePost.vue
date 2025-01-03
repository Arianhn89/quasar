<script lang="ts" setup>
import {defineProps, defineEmits, watch ,ref} from 'vue'

const props = defineProps({
    modal:{
        default : false
    },
    date: {},
})
const updatePostParameter = ref({
    title : '',
    description: '',
    image:undefined,
})

watch(props, ()=>{
    updatePostParameter.value = {
        title: props.date.title,
        description: props.date.description,
        image: updatePostParameter.value.image,
    }
});

const emit = defineEmits(['update:modal'])

const close = ()=>{
    emit.call(this, 'update:modal', false)
}

const accepted = () => {
    console.log(
        updatePostParameter.value.title,
        updatePostParameter.value.description,
        updatePostParameter.value.image,
    );
    emit.call(this, 'update:modal', false)
}

</script>

<template>
    <q-dialog :model-value="props.modal" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">Create new post</div>
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

            <q-card-actions align="right" class="text-primary">
              <q-btn color="red" flat label="Cancel" icon-right="close" @click="close()" />
              <q-btn color="light-blue-6" flat label="Update" icon-right="create" @click="accepted()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
</template>