<template>
  <Navigation />
  <section id="cart">
    <div class="container">
      <h1 class="text-center fw-bold">Your Cart</h1>
      <div class="row">
        <div class="col-md-7 mt-3">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <h2 class="card-title fw-bold">Product</h2>
                  <img src="assets/image/scarlet.png" alt="" />
                </div>
                <div class="col-md-6">
                  <h2 class="card-title title-cart fw-bold text-center">
                    Name
                  </h2>
                  <p class="text-center fs-5">Scarlet Sea Salt</p>
                </div>
                <div class="col-md-3">
                  <h2 class="card-title title-cart fw-bold">Price</h2>
                  <p class="fs-5">Rp. 13.000</p>
                  <p class="fs-5">Quantity : 2</p>
                </div>
                <div class="col-md-3 border-top">
                  <h2 class="card-title fw-bold">Product</h2>
                  <img src="assets/image/headset1.jpg" alt="" />
                </div>
                <div class="col-md-6">
                  <h2 class="card-title title-cart fw-bold text-center">
                    Name
                  </h2>
                  <p class="text-center fs-5">Headset Rexus</p>
                </div>
                <div class="col-md-3">
                  <h2 class="card-title title-cart fw-bold">Price</h2>
                  <p class="fs-5">Rp. 46.000</p>
                  <p class="fs-5">Quantity : 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 mt-3">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center fw-bold border-bottom">
                Cart Total
              </h2>
              <h3 class="fw-bold mt-4">Total : Rp. 135.000</h3>
              <p class="fs-5">Adress : Bumi Blok B No 44 Rt.8 Rw.99</p>
              <p class="fs-5">Name : Zaki</p>
              <p class="fs-5 border-bottom">Email : test@test.com</p>
              <button class="btn mt-4">Proceed To CheckOut</button>
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
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
$mainColor: #3a9b4c;
$mainHover: #8ac795;
#cart {
  margin-top: 48px;
  margin-bottom: 50px;
  .card-title {
    color: $mainColor;
  }
  .title-cart {
    margin-bottom: 45px;
  }
  img {
    width: 200px;
  }
  .btn {
    margin: auto;
    background-color: $mainColor;
    padding-left: 24px;
    padding-right: 24px;
    transition: all 0.2s ease-in;
    color: white;
  }
  .btn:hover {
    background-color: $mainHover;
    color: black;
  }
}
</style>