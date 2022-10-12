<template>
<header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
              <button type="button" class="btn btn-outline-light me-2">
                    <router-link style="text-decoration: none; color: inherit;" :to="{name:'start'}">Start </router-link>
              </button>
              <button type="button" class="btn btn-outline-light me-2">
                    <router-link style="text-decoration: none; color: inherit;" :to="{name:'login'}">Blog </router-link>
              </button>
              <button type="button" class="btn btn-outline-light me-2">
                    <router-link style="text-decoration: none; color: inherit;" :to="{name:'contact'}">Contact </router-link>
              </button>
          </li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">
              <router-link style="text-decoration: none; color: inherit;" :to="{name:'login'}">Login </router-link>
          </button>
          <button type="button" class="btn btn-warning">
              <router-link style="text-decoration: none; color: inherit;" :to="{name:'register'}">Register </router-link>
          </button>
        </div>
      </div>
    </div>
</header>
<body>
<br>
<div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
    </div>
</div>
<footer id="footer"><div class="footer-top"><div class="container"><div class="row"><div class="col-lg-3 col-md-6 footer-contact"><h3>OnePage</h3><p> A108 Adam Street <br> New York, NY 535022<br> United States <br><br> <strong>Phone:</strong> +1 5589 55488 55<br> <strong>Email:</strong> info@example.com<br></p></div><div class="col-lg-2 col-md-6 footer-links"><h4>Useful Links</h4><ul><li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li></ul></div><div class="col-lg-3 col-md-6 footer-links"><h4>Our Services</h4><ul><li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li><li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li></ul></div><div class="col-lg-4 col-md-6 footer-newsletter"><h4>Join Our Newsletter</h4><p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p><form action="" method="post"> <input type="email" name="email"><input type="submit" value="Subscribe"></form></div></div></div></div><div class="container d-md-flex py-4"><div class="me-md-auto text-center text-md-start"><div class="copyright"> © Copyright <strong><span>OnePage</span></strong>. All Rights Reserved</div><div class="credits"> Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div></div><div class="social-links text-center text-md-right pt-3 pt-md-0"> <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a> <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a></div></div></footer>
</body>
</template>
<script>
    export default {
        data() {
            return {
                links: [
                    {
                        title: " Start ",
                        href: "/start"
                    },
                    {
                        title: "Login",
                        href: "/login"
                    },
                    {
                        title: "Register",
                        href: "/register"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
</style>