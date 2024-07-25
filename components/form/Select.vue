<script setup lang="ts">

const props = defineProps({
  getOptions: {
    type: Function,
    required: true
  },
  // filterFn: {
  //   type: Function,
  //   required: false
  // }
})

const options: Ref<string[]> = ref([])
const vSearchStr: Ref<string> = defineModel('vSearchStr')

async function setModel (val: string) {
  vSearchStr.value = val
  options.value = await props.getOptions(vSearchStr.value)
}


function checkAndClear() {
  if (!options.value.includes(vSearchStr.value)) {
    vSearchStr.value = null;
  }
}
</script>

<template>


    <q-select
      :model-value="vSearchStr"
      v-model="vSearchStr"
      :options="options"
      @input-value="setModel"
      hide-selected
      filled
      clearable
      use-input
      fill-input
      counter
      @blur="checkAndClear"
      >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            No results
          </q-item-section>
        </q-item>
      </template>
    </q-select>
</template>