
<script setup lang="ts" >
    // const model = ref(null)
    
    const file: Ref<any> = defineModel('file')

    const fileRules = [
    (val) => val.size < 9200000 || 'file is too large',
    (val) => val.size > 30000 || 'file is too small',
    (val) => val.type == 'image/jpeg' || '.jpg, .jpeg, .jfif, .pjpeg, .pjp'
  ];
</script>


<template>
    <q-file filled bottom-slots v-model="file" label="Photo"  clearable counter 
    :rules="fileRules"
    >
    <template v-slot:prepend>
            <q-icon name="add_photo_alternate" @click.stop.prevent />
        </template>
    </q-file>  
</template>
  
  