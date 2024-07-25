<script setup>
  const leftDrawerOpen = ref(false)
  const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value

  function getPageStyle (offset, height) {
    return {
      height: `${ height - offset }px`
    }
  }
</script>

<template>


<q-layout view="hHh lpR fFf" class="print-hide custom-layout" >
  <q-header elevated class="bg-blue-5 text-white shadow-2 rounded-borders" height-hint="98" >
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        Nuxt & Quasar testing
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="left" class="bg-blue-grey-1 text-grey-14">
      <q-route-tab to="/" label="Resume" icon="mail"/>
    </q-tabs>
  </q-header>

  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <BaseToolbar></BaseToolbar>
  </q-drawer>

 <q-page-container>
      <q-page class="column no-wrap" :style-fn="getPageStyle">
        <q-scroll-area class="col q-pa-md">
          <NuxtPage />
        </q-scroll-area>
      </q-page>
    </q-page-container>

    

  <q-footer elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>

</q-layout>






</template>

<style >
::-webkit-scrollbar {
   display: none;
}

@page {
    margin: 0;  /*this affects the margin in the printer settings */
}
</style>
