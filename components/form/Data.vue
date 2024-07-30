<script setup lang="ts">
const vDate: Ref<string | undefined> = defineModel('vDate')

</script>

<template>

  <q-input filled v-model="vDate" mask="date" :rules="['date']">
      <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="vDate">
                    <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
              </q-date>
              </q-popup-proxy>
          </q-icon>
    </template>
  </q-input>
</template>