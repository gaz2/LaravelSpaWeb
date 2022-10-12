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
    <div>

        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://techvblogs.com/blog/spa-authentication-laravel-9-sanctum-vue3-vite" target="_blank">Start page</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col-22">
                    <label>Login<router-link :to="{name:'login'}">Login</router-link></label>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link :to="{name:'start'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav> -->
        <main class="mt-3">
            <router-view></router-view>
        </main>
    </div>
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