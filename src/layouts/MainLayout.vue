<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-blue-5">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="eva-menu-outline"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      persistent
      :width="230"
    >
      <div class="row justify-center">
        <q-img src="~/assets/KLAYLOGO.png" alt="KLAY LOGO" width="120px" />
      </div>
      <q-separator />
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Usuarios',
    icon: 'eva-person-outline',
    link: '#'
  },
  {
    title: 'Puestos',
    icon: 'eva-car-outline',
    link: '#'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
