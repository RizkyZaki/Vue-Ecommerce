<template>
  <main class="container main">
    <form action="" @submit.prevent.stop="kirim" id="form">
      <h1 class="fw-bolder mb-3">Please Login</h1>
      <div v-if="validation" class="alert alert-danger" role="alert">
        {{ validation }}
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="email"
              name="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              name="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn mt-2 form-control">Login</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      validation: "",
    };
  },
  methods: {
    kirim() {
      let dataForm = new FormData(form);
      fetch("http://127.0.0.1:8000/api/login", {
        method: "post",
        body: dataForm,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "Login Berhasil") {
            // sessionStorage.setItem("email", this.email);
            sessionStorage.setItem("customer_id", data.customer.id);
            this.$router.push("/");
            // console.log(data.customer.id);
          } else {
            this.validation = data.status;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 180px;
}

.btn {
  background-color: rgb(228, 146, 160);
  border-radius: 34px;
  color: white;
  font-weight: 700;
  font-size: 23px;
}
</style>