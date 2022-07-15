<template>
  <Navigation />
  <section id="list-kategori">
    <div class="container">
      <h1 class="fw-bold text-center mt-4 mb-4">
        Collection <span> Product </span>
      </h1>
      <div class="kategori shadow-lg">
        <div class="row">
          <div class="col-lg-2" v-for="(kat, index) in kategori" :key="index">
            <router-link :to="{ name: 'produk', params: { id: kat.id } }">{{
              kat.nama_kategori
            }}</router-link>
          </div>
        </div>
      </div>
      <div class="input-group mb-3 mt-5">
        <input
          v-model="search"
          @keyup="searchProduk"
          type="text"
          class="form-control"
          placeholder="Search Product"
          aria-label="Search Product"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2"
          ><i class="fa-solid fa-magnifying-glass"></i
        ></span>
      </div>
    </div>
  </section>

  <section id="recent-produk">
    <div class="container">
      <h4 class="fw-bold">
        Our <span> Products </span><i class="icon fa-solid fa-align-center"></i>
      </h4>
      <div class="row">
        <div class="col-md-3" v-for="(item, index) in list_produk" :key="index">
          <div class="card mb-5">
            <img
              :src="url + 'storage/gambar/' + item.gambar"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title mb-4 text-center">
                {{ item.nama_produk }}
              </h5>
              <p class="card-text">{{ item.category.nama_kategori }}</p>
              <h5 class="fw-bold">Rp. {{ item.harga }}</h5>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Quantity"
                  aria-label="Recipient's username with two button addons"
                  v-model="jumlah[index]"
                />
                <button
                  class="btn btn-outline-secondary"
                  @click="save(jumlah[index], item.id)"
                  type="button"
                >
                  <i class="fa-solid fa-cart-plus"></i>
                </button>
                <button class="btn btn-outline-secondary" type="button">
                  <i class="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
const config = require("../config");
import axios from "axios";
export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      list_produk: [],
      kategori: [],
      url: config.url,
      jumlah: [],
    };
  },
  methods: {
    // async save(jumlah, produk) {
    //   let dataForm = new FormData();
    //   dataForm.append("jumlah", jumlah);
    //   dataForm.append("produk", produk);
    //   dataForm.append("customer_id", sessionStorage.getItem("customer_id"));
    //   await fetch(config.url + "api/save/cart", {
    //     body: dataForm,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    //   console.log(jumlah);
    // },
    searchProduk() {
      axios
        .get(config.url + "api/search/" + this.search)
        .then((response) => (this.list_produk = response.data))
        .catch((error) => console.log(error));
      // .then((response)=> (this.notFound = respo))
    },
  },
  created() {
    axios.get(config.url + "api/list/produk").then((response) => {
      (this.list_produk = response.data.produk),
        (this.kategori = response.data.kategori);
    });
  },
};
</script>

<style lang="scss">
$mainColor: #3a9b4c;
#list-kategori {
  margin: auto;
  padding: 34px;
  .kategori {
    background-color: $mainColor;
    padding: 13px;
    border-radius: 35px;
  }
  a {
    margin: 23px;
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-size: 13px;
    text-decoration: none;
    color: white;
    font-size: 1.2em;
    transition: all 0.2s ease-in;
  }
  a:hover {
    color: black;
  }

  span {
    color: $mainColor;
  }
}
</style>