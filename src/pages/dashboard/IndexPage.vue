<template>
  <q-layout>
    <div class="q-pa-md q-mb-xl row items-start justify-center q-gutter-sm">
      <q-card class="my-card" 
      v-for="(post,index) in posts"
      :key="index"
      >
        <q-img :src="post.image" width="100%" height="300px"/>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{post.title}}</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              250 ft
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">{{post.username}}</div>
          <div class="text-caption text-grey">
            {{post.description.substring(0,200)}}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn
          color="red"
          @click="like(post.id)"
          :label="post.upVoteCount"
          icon-right="favorite"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-layout>
</template>

<script lang="ts" setup>
import { posts } from 'components/ts/IndexComponent';

const like = (id: number) => {
  console.log(id);
};
</script>
