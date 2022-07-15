<template>
  <Navigation />
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-sm-2 order-md-1">
          <h2 class="me-auto">
            <strong class="text-uppercase"
              >Welcome To <span> E-Commerce </span></strong
            >
          </h2>
          <p class="fs-2">Enjoy Your Shopping</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestias u
          </p>
          <button class="btn">EXPLORE</button>
        </div>
        <div class="col-md-6 order-sm-1 order-md-2 mt-3">
          <img src="assets/image/svg.png" alt="" width="100%" />
        </div>
      </div>
    </div>
  </section>

  <section id="recent-produk">
    <div class="container">
      <h4 class="fw-bold">
        New <span> Products </span> Arrival<i
          class="icon fa-brands fa-bandcamp"
        ></i>
      </h4>
      <div class="row">
        <div class="col-md-3" v-for="(item, index) in produk" :key="index">
          <div class="card mb-3">
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
                />
                <button class="btn btn-outline-secondary" type="button">
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
      <router-link to="/list" class="load fs-5 mt-4"
        >Load More<i class="icon fa-solid fa-arrow-right-long"></i
      ></router-link>
    </div>
  </section>

  <section id="service">
    <h2 class="fw-bolder text-center text-white">Our Service</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-3 rounded">
          <i class="icon fa-solid fa-handshake mx-auto"></i>
          <h3 class="text-center fw-bolder mt-3">Secure Payment</h3>
          <p class="mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos suscipit aliquam, ullam quas sed voluptatum, laboriosam ex sint
            corrupti error aperiam voluptas qui sit ab. Necessitatibus
            voluptatibus nesciunt reiciendis.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 rounded">
          <i class="icon fa-solid fa-truck mx-auto"></i>
          <h3 class="text-center fw-bolder mt-3">Free Shipping</h3>
          <p class="mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos suscipit aliquam, ullam quas sed voluptatum, laboriosam ex sint
            corrupti error aperiam voluptas qui sit ab. Necessitatibus
            voluptatibus nesciunt reiciendis.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 rounded">
          <i class="icon fa-solid fa-solid fa-phone mx-auto"></i>
          <h3 class="text-center fw-bolder mt-3">Support CUstomer</h3>
          <p class="mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos suscipit aliquam, ullam quas sed voluptatum, laboriosam ex sint
            corrupti error aperiam voluptas qui sit ab. Necessitatibus
            voluptatibus nesciunt reiciendis.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="recent-kategori">
    <div class="container">
      <h4 class="fw-bold">Top Category <span>Products</span></h4>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <h1>jumlah Produk</h1>
            <p>{{ jumlahProduk }} Produk</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <h1>jumlah Kategori</h1>
            <p>{{ jumlahKategori }} Kategori</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <h1>jumlah Admin</h1>
            <p>{{ jumlahAdmin }} Admin</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="subscribe">
    <div class="container border-top border-bottom">
      <h1 class="fw-bold text-center">
        Subscribe to get notif of new <span>Products</span>
      </h1>
      <div class="row">
        <div class="col-md-9 mt-2 mb-3">
          <input
            type="email"
            class="form-control"
            id="inputemail"
            placeholder="Your Email"
          />
        </div>
        <div class="col-md-3">
          <button class="btn">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="fw-bold mt-5">Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam
            excepturi architecto iusto repudiandae, tempora impedit voluptatem
            aliquid eius maxime ipsa! Illo, non?
          </p>
          <h4 class="mt-4 fw-bold">Closed In Sunday</h4>
          <h3 class="mt-3 fw-bold">Follow Us On Social Media</h3>
          <a href=""><i class="icon fa-brands fa-instagram"></i></a>
          <a href=""><i class="icon fa-brands fa-facebook"></i></a>
          <a href=""><i class="icon fa-brands fa-google-plus"></i></a>
        </div>
        <div class="col-md-6">
          <h1 class="fw-bold mt-5">Form Submit</h1>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="subject"
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
            <button class="btn mt-4">Send Message</button>
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
      produk: [],
      jumlahKategori: "",
      jumlahProduk: "",
      jumlahAdmin: "",
      url: config.url,
    };
  },
  // async created() {
  //   await fetch(config.url + "api/produk")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.produk = data.produk;
  //       this.kategori = data.kategori;
  //     });
  // },

  created() {
    axios.get(config.url + "api/produk").then((response) => {
      (this.produk = response.data.produk),
        (this.jumlahKategori = response.data.jumlahKategori),
        (this.jumlahAdmin = response.data.jumlahAdmin),
        (this.jumlahProduk = response.data.jumlahProduk);
    });
  },
};
</script>
<style lang="scss">
$mainColor: #3a9b4c;
$mainHover: #8ac795;

.hero {
  padding-top: 2%;
  h2 {
    margin-top: 76px;
    font-weight: bolder;
  }
  span {
    color: $mainColor;
  }
  .btn {
    margin-top: 13px;
    background-color: $mainColor;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 34px;
    font-weight: 700;
    color: white;
    font-size: 23px;
    transition: all 0.2s ease-in;
  }
  .btn:hover {
    background-color: $mainHover;
    color: black;
  }
}

#recent-produk {
  h4 {
    margin-bottom: 45px;
    margin-top: 65px;
  }
  span {
    color: $mainColor;
  }
  .card {
    transition: all 0.3s ease-in;
  }
  .card:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }
  // .cart {
  //   background-color: $mainColor;
  //   margin-left: 23px;
  //   color: white;
  //   border: none;
  //   border-radius: 50%;
  //   width: 45px;
  //   height: 45px;
  //   transition: all 0.2s ease-in;
  // }

  // .input-cart {
  //   margin-left: 13px;
  // }

  // .input-group input {
  //   width: 45px;
  // }

  .btn {
    background-color: $mainColor;
    color: white;
  }
  .btn:hover {
    background-color: $mainHover;
    color: wheat;
  }

  .cart:hover {
    transform: scale(1.2);
  }

  .card-title {
    font-weight: bold;
  }
  .load {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: all 0.3s ease-in;
  }
  .icon {
    margin-left: 13px;
  }
  .load:hover {
    color: $mainHover;
  }
}

#service {
  margin-top: 140px;
  padding: 40px;
  background-color: $mainColor;
  h2 {
    margin-bottom: 67px;
    margin-top: 67px;
  }
  .icon {
    font-size: 125px;
  }
  .card {
    padding: 35px;
    transition: all 0.2s ease;
  }
  .card:hover {
    box-shadow: 14px 22px 80px -5px rgba(0, 0, 0, 0.77);
  }
}

#recent-kategori {
  margin-top: 140px;
  margin-bottom: 140px;
  h4 {
    margin-bottom: 45px;
    margin-top: 65px;
  }
  span {
    color: $mainColor;
  }
  .card {
    height: 200px;
    background-color: #3a9b4c;
    transition: all 0.3s ease;
    h1 {
      color: white;
      font-weight: bold;
      margin: auto;
      transition: all 0.3s ease;
    }
    p {
      margin: auto;
      color: white;
      transition: all 0.3s ease;
    }
  }

  .card:hover {
    background-color: $mainHover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h1 {
      transform: scale(1.2);
      color: black;
    }
    p {
      transform: scale(1.3);
      color: black;
    }
  }
}

#subscribe {
  margin-top: 140px;

  h1 {
    margin-bottom: 45px;
    margin-top: 65px;
  }
  span {
    color: $mainColor;
  }
  .btn {
    background-color: $mainColor;
    padding-left: 24px;
    padding-right: 24px;
    transition: all 0.2s ease-in;
  }
  .btn:hover {
    background-color: $mainHover;
    color: black;
  }
  .row {
    padding: 35px;
  }
  .icon {
    margin-left: 13px;
  }
  a {
    text-decoration: none;
    color: black;
    transition: all 0.3s ease;
  }
  a:hover {
    transform: scale(2);
  }
}

#contact {
  .btn {
    background-color: $mainColor;
    padding-left: 24px;
    padding-right: 24px;
    transition: all 0.2s ease-in;
  }
  .btn:hover {
    background-color: $mainHover;
    color: black;
  }
  .row {
    padding: 35px;
  }
  .icon {
    margin-left: 13px;
  }
  a {
    text-decoration: none;
    color: black;
    transition: all 0.3s ease;
    font-size: 25px;
  }
  a:hover {
    opacity: 0.4;
  }
}
</style>