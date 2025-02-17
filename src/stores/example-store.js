import { defineStore, acceptHMRUpdate } from "pinia";
import axios from "axios";

export const useConfigStore = defineStore("config", {
  state: () => ({
    apiBaseUrl: "https://dummyjson.com/",
    token: localStorage.getItem("token") || null,
  }),

  actions: {
    async login(username, password) {
      try {
        const response = await axios.post(`${this.apiBaseUrl}auth/login`, {
          username,
          password,
        });

        if (response.data.accessToken) {
          this.token = response.data.accessToken;
          localStorage.setItem("token", response.data.accessToken);
          return { success: true };
        } else {
          return { success: false, message: "Invalid credentials" };
        }
      } catch (error) {
        return { success: false, message: error.response?.data?.message || error.message };
      }
    },

    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot));
}
