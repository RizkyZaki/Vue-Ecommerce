<template>
  <main class="container main">
    <form action="" @submit.prevent.stop="kirim" id="form">
      <h1 class="fw-bolder mb-3">Please Register</h1>
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="form-floating mb-3">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              name="nama_lengkap"
              class="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Nama Lengkap</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="number"
              name="no_hp"
              class="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">No HP</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              name="alamat_lengkap"
              class="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Alamat Lengkap</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              name="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
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
    return {};
  },
  methods: {
    kirim() {
      let dataForm = new FormData(form);
      fetch("http://127.0.0.1:8000/api/register", {
        method: "post",
        body: dataForm,
        // mode: 'no-cors'
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.status);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #3a9b4c;

.main {
  padding-top: 180px;
  h1 {
    color: $mainColor;
  }
}

// .form {
//     width: 100%;
//     margin: auto;
//     padding: 12px;

// }

.btn {
  background-color: rgb(228, 146, 160);
  border-radius: 34px;
  color: white;
  font-weight: 700;
  font-size: 23px;
}
</style>