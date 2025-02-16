<template>
  <q-header elevated >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="$emit('toggle-drawer')"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

</template>
<script setup>

defineEmits(['toggle-drawer']);

</script>
