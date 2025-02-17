<template>
  <q-layout view="lHh LpR fFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="q-pa-lg shadow-2" style="width: 350px">
          <q-card-section class="text-center">
            <q-avatar size="72px">
              <q-icon name="person" size="48px" />
            </q-avatar>
            <div class="text-h6 q-mt-sm">Login</div>
          </q-card-section>

          <q-card-section>
            <q-form @submit="onLogin">
              <q-input
                v-model="username"
                label="Username"
                filled
                dense
                :rules="[val => !!val || 'Username is required']"
              />
              <q-input
                v-model="password"
                label="Password"
                type="password"
                filled
                dense
                class="q-mt-md"
                :rules="[val => !!val || 'Password is required']"
              />
              <q-btn
                type="submit"
                color="primary"
                label="Login"
                class="full-width q-mt-md"
                :loading="loading"
              />
            </q-form>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn flat label="Forgot Password?" @click="forgotPassword" />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useConfigStore } from "../stores/example-store";

const router = useRouter();
const username = ref("");
const password = ref("");
const loading = ref(false)

const configStore = useConfigStore();

const onLogin = async () => {
  loading.value = true;
  const result = await configStore.login(username.value, password.value);
  if (result.success) {
    router.replace("/");
  } else {
    alert("Login failed: " + result.message);
  }
  loading.value = false;
};

const forgotPassword = () => {
  alert("Reset password link sent!");
};
</script>
