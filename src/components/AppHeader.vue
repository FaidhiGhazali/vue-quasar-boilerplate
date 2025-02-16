<template>
  <q-header elevated >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="emit('toggle-drawer')"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn
        flat
        dense
        icon="logout"
        label="Logout"
        @click="logout"
      />

      </q-toolbar>
    </q-header>

</template>
<script setup>
import { useRouter } from 'vue-router';

const emit = defineEmits(['toggle-drawer'])
const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.replace('/login');
};

</script>
