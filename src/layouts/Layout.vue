<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-sm bg-primary" >
        <div class="container-fluid fs-4 fw-semibold">
          <a class="navbar-brand" href="#">WEB2072</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
              </li>
              <li class="nav-item">
             
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Thêm mới</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Đăng ký</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Đăng nhập</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>

</script>

<style>

</style>