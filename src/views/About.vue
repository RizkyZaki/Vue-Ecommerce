<template>
  <Navigation />
  <section id="about">
    <div class="container">
      <h1 class="fw-bold text-center">About <span> E-COMMERCE </span></h1>
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi id
        culpa rerum amet? Reiciendis mollitia sequi, expedita quod ab voluptatum
        quidem cum quasi esse. Quidem excepturi deserunt commodi accusamus
        laudantium eum inventore amet aliquam, quisquam, modi quas voluptatum
        labore dignissimos quae vero alias consectetur veritatis harum
        exercitationem doloremque. Repellendus eveniet laudantium esse
        voluptatibus, exercitationem ipsa obcaecati quo? Quas odit officiis
        maiores molestiae voluptatem quis ducimus quod impedit veniam deserunt
        quisquam culpa totam ipsa harum voluptas exercitationem, numquam laborum
        similique magni quo fugit dolorum sequi modi. Dolore temporibus magnam,
        expedita rem, neque debitis laudantium veniam atque libero modi earum
        corrupti cum quas possimus ex repellat optio voluptate in perferendis.
        Repellendus in ut doloremque consectetur dolorem eos quo hic vero.
        Tempore iure incidunt labore voluptatem, earum ipsam blanditiis
        doloremque nesciunt! Reprehenderit amet magni accusantium pariatur
        exercitationem, magnam dignissimos nam corporis maiores iusto tenetur
        laboriosam. Dicta velit omnis porro dolorem beatae quo qui, sapiente
        cumque inventore quia earum eos est accusamus enim dignissimos
        repudiandae impedit maiores totam ex, possimus deserunt. Dicta earum,
        perspiciatis consequatur beatae alias eligendi voluptatem? Adipisci at
        commodi, consequatur ut ipsum et ratione aliquid dolore aut ipsam
        voluptatibus temporibus quia non qui quam molestias voluptate animi!
        Ipsam, vero temporibus.
      </p>
      <h3 class="text-center fw-bold mb-5">Since <span>2022</span></h3>
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

<style lang="scss">
$mainColor: #3a9b4c;
#about {
  //   height: 100vh;
  h1 {
    margin-top: 55px;
    margin-bottom: 45px;
  }
  span {
    color: $mainColor;
  }
  p {
    font-weight: 600;
    margin-top: 35px;
    margin-bottom: 65px;
  }
}
</style>