<template>
  <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="isActive(menuItem.route)" v-ripple :to="menuItem.route">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref,computed } from 'vue';

const route = useRoute();
const leftDrawerOpen = ref(false);

const isActive = (path) => computed(() => route.path === path).value;

const menuList = [
  {
    icon: 'house',
    label: 'Home',
    route: '/',
    separator: false
  },
  {
    icon: 'info',
    label: 'About',
    route: '/about',
    separator: false
  },
  {
    icon: 'call',
    label: 'Contact Us',
    route: '/contact',
    separator: true
  },
]
</script>
