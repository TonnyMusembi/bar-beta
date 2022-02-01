<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <button class="bg-green-500 ...">Login Account</button>
  <div class="l-form">
    <form
      v-on:submit.prevent="goToVerify()"
      method="POST"
      class="ui form padding-top-lg"
    >
      <div class="field">
        <label>Phone Number</label>
        <input
          style="font-size: 16px !important"
          class=""
          type="text"
          placeholder="Enter username"
          v-model="username"
          required
        />
      </div>
      <div class="field">
        <label>Password</label>
        <input
          style="font-size: 16px !important"
          class=""
          type="password"
          placeholder="Enter password"
          v-model="password"
          required
        />
      </div>
      <div class="field">
        <button class="bg-cyan-500 hover:bg-cyan-600 ...">Login</button>
      </div>
      <div>
        <router-link to="verify">Next</router-link>
      </div>
    </form>
    <select
      className="form-control "
      onChange="{this.drugsChange.bind(this)}"
      value="{this.state.drug_type}"
    >
      <option value="-1" disa>Select Medication Class</option>
      <option value="Medication Clause A">Medication Class A</option>
      <option value="Medication Clause B">Medication Class B</option>
      <option value="Medication Clause C" disabled>Medication Class C</option>
    </select>
    <div v-if="alert_visible" class="ui positive message transition visible">
      <i class="close icon"></i>
      {{ alert_message }}
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  components: {},
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      loading: [],
      alert_visible: false,
      alert_message: "",
    };
  },
  methods: {
    dismiss: function () {
      this.alert_visible = false;
    },
    goToVerify() {
      var required = [];
      if (!this.username) {
        required.push("username");
      }
      if (!this.password) {
        required.push("password");
      }
      if (required.length > 0) {
        this.alert_message = "Fields required ---" + required.join();
        this.loading = [];
        this.alert_visible = true;
        return;
      }
      this.alert_visible = false;
      var vm = this;
      let loginData = {
        username: vm.username,
        password: vm.password,
      };
      var now = new Date();
      now.setMinutes(now.getMinutes() + 360); // timestamp
      now = new Date(now); // Date object

      $.post({
        //",
        url: "https://app.test/api/vehicle",
        type: "GET",
        data: JSON.stringify(loginData),
        success: function (data) {
          vm.loading = [];
          console.log(data);
          if (data.status_code == 200) {
            let authenticated = data.data.authenticated;
            if (authenticated) {
              let user = data.data.data;
              let obj = JSON.stringify(user);
              var jsonData = JSON.parse(obj);
              var role = jsonData.role;

              console.log("user info", role);
              window.localStorage.setItem("user_info", obj);
              window.localStorage.setItem("timer", now);

              const Toast = vm.$swal.mixin({
                toast: true,
                position: "top-center",
                showConfirmButton: false,
                timer: 2000,
              });
              Toast.fire({
                type: "success",
                title: "Welcome back",
              });

              if (role == 2) {
                vm.$router.push({ name: "dash-ke" });
                //  vm.$router.push({name: 'verify'});
              } else if (role == 4) {
                vm.$router.push({ name: "verify" });
                //vm.$router.push({name: 'profiles'});
              } else if (role == 3) {
                vm.$router.push({ name: "verify" });
                // vm.$router.push({name: 'profiles'});
              } else if (role == 10) {
                vm.$router.push({ name: "report" });
              } else {
                alert("You dont have a role");
              }
            } else {
              //   vm.loading = [];
              vm.alert_message = data.data.error;
              vm.alert_visible = true;
              vm.$router.push({ name: "login" });
            }
          } else {
            let desc = data.status_description;
            const Toast = vm.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });
            Toast.fire({
              type: "error",
              title: desc,
            });
          }
        },
        error: function (jQxhr, status) {
          vm.loading = [];
          vm.alert_message = "Error while processing!";
          vm.alert_visible = true;
          console.log(jQxhr, status);
        },
      });
    },
  },
};
</script>
