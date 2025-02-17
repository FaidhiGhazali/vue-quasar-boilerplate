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
        @click="onLogout"
      />

      </q-toolbar>
    </q-header>

</template>
<script setup>
import { useRouter } from 'vue-router';
import { useConfigStore } from "../stores/example-store";

const emit = defineEmits(['toggle-drawer'])
const router = useRouter();
const configStore = useConfigStore();

const onLogout = () => {
  configStore.logout();
  router.replace("/login");
};

</script>
