<template>
  <footer id="Footer">
    <div class="container fluid">
      <div class="py-5">
        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
          <p>
            Made By
            <a href="https://www.instagram.com/xnknxwnhxb/" target="_blank"
              >Rizky Zaki</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
$footColor: #1b5025;
#Footer {
  background: $footColor;
  p {
    color: white;
    font-weight: 500;
  }
  a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  a:hover {
    opacity: 0.4;
  }
}
</style>