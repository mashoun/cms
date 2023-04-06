
const Home = { template: '<div>Home</div>' }
const loginPage = {
  template:
    /*html */
    `
    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div class="card mb-3">

              <div class="card-body">

                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4"> {{title}} </h5>
                </div>

                <form class="row g-3 needs-validation" novalidate>

                  <div class="col-12">
                    <div class="form-floating">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Email address</label>
                    </div>                      
                  </div>

                  <div class="col-12">
                    <div class="form-floating">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                      <label for="floatingPassword">Password</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <button class="btn btn-primary w-100" type="submit">Login</button>
                  </div>
                  <div class="col-12">
                    <p class="fs-xsmall text-center mb-0">Lorem ipsum dolor sit amet. </p>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
    `,
  data() {
    return {
      title: "mahmoud mashoun"
    }
  }
}

const dashboardPage = {
  template:
    /*html */
    `
    <section class="section profile">
      <div class="row">

        <div class="col-xl-12">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered justify-content-between justify-content-lg-start">

                <li class="nav-item">
                  <!-- <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button> -->
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit">
                    <i class="d-block d-lg-none bi bi-person-lines-fill fs-5"></i>
                    <span class="d-none d-lg-block">Edit Profile</span>
                  </button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-links">
                    <i class="d-block d-lg-none bi bi-link fs-5"></i>
                    <span class="d-none d-lg-block">Links</span>
                  </button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-slides">
                    <i class="d-block d-lg-none bi bi-images fs-5"></i>
                    <span class="d-none d-lg-block">Slides</span>
                  </button>
                </li>

                <li class="nav-item">
                  <!-- <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button> -->
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-blogs">
                    <i class="d-block d-lg-none bi bi-file-richtext fs-5"></i>
                    <span class="d-none d-lg-block">Blogs</span>
                  </button>
                </li>

                <li class="nav-item">
                  <!-- <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button> -->
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-exp">
                    <i class="d-block d-lg-none bi bi-briefcase fs-5"></i>
                    <span class="d-none d-lg-block">Experience</span>
                  </button>
                </li>

              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-edit pt-3" id="profile-edit">

                  <!-- Profile Edit Form -->
                  <form>
                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div class="col-md-8 col-lg-9">
                        <img src="https://picsum.photos/1080" alt="Profile" width="100" class="img-fluid rounded">
                        <div class="pt-2">
                          <!-- <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i> New Image</a> -->
                          <input type="file" name="" id="" class="form-control">
                          <!-- <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a> -->
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                      <div class="col-md-8 col-lg-9">
                        <textarea name="about" class="form-control" id="about" style="height: 100px">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="phone" type="text" class="form-control" id="Phone" value="(436) 486-3538 x29071">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="email" type="email" class="form-control" id="Email" value="k.anderson@example.com">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="company" class="col-md-4 col-lg-3 col-form-label">WhatsApp Call</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="company" type="text" class="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="company" class="col-md-4 col-lg-3 col-form-label">WhatsApp Chat</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="company" type="text" class="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="company" class="col-md-4 col-lg-3 col-form-label">WhatsApp Group</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="company" type="text" class="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Github</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Youtube</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Stack Overflow</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#">
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                    </div>
                  </form><!-- End Profile Edit Form -->

                </div>

                <div class="tab-pane fade p-3" id="profile-links">
                  <div class="row gy-2 justify-content-center">
                    <div class="col-12 col-lg-4 px-0 px-md-1">
                      <input type="text" class="form-control" placeholder="Link name" aria-label="First name">
                    </div>
                    <div class="col-12 col-lg-7 px-0 px-md-1">
                      <input type="text" class="form-control" placeholder="Link URL" aria-label="Last name">
                    </div>
                    <button class="btn btn-primary col"><span>Add link</span></button>
                  </div>
                  <hr>
                  <h6 class="text-secondary fs-6">Double tap to remove Links</h6>
                  <div class="row g-3">

                    <div class="col-12 col-lg-3 ">
                      <div class="shadow-sm p-2 d-flex align-items-center gap-2">
                        <i class="bi bi-link fs-5 text-secondary"></i>
                        <span class="text-primary">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laboriosam.</span>
                      </div>
                    </div>

                    <div class="col-12 col-lg-3 ">
                      <div class="shadow-sm p-2 d-flex align-items-center gap-2">
                        <i class="bi bi-link fs-5 text-secondary"></i>
                        <span class="text-primary">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laboriosam.</span>
                      </div>
                    </div>

                    <div class="col-12 col-lg-3 ">
                      <div class="shadow-sm p-2 d-flex align-items-center gap-2">
                        <i class="bi bi-link fs-5 text-secondary"></i>
                        <span class="text-primary">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laboriosam.</span>
                      </div>
                    </div>

                    <div class="col-12 col-lg-3 ">
                      <div class="shadow-sm p-2 d-flex align-items-center gap-2">
                        <i class="bi bi-link fs-5 text-secondary"></i>
                        <span class="text-primary">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laboriosam.</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="tab-pane fade p-3" id="profile-slides">
                  <div class="row gy-3 justify-content-center">
                    <div class="col-12 col-lg-4 px-0 px-md-1">
                      <input type="text" class="form-control" placeholder="Title" aria-label="First name">
                    </div>
                    <div class="col-12 col-lg-6 px-0 px-md-1">
                      <input type="file" class="form-control" placeholder="File Source" aria-label="Last name">
                    </div>
                    <button class="btn btn-primary col"><span>Add Image</span></button>
                  </div>
                  <hr>
                  <h6 class="text-secondary fs-6">Double tap to remove Links</h6>
                  <div class="row g-3">

                    <div class="col-12 col-lg-3 ">
                      <div class="p-2 d-flex align-items-center gap-2">
                        <img src="https://picsum.photos/1920/1080" alt="slide" class="img-fluid rounded shadow">
                      </div>
                    </div>

                    <div class="col-12 col-lg-3 ">
                      <div class="p-2 d-flex align-items-center gap-2">
                        <img src="https://picsum.photos/1920/1080" alt="slide" class="img-fluid rounded shadow">
                      </div>
                    </div>

                  </div>
                </div>

                <div class="tab-pane fade pt-3" id="profile-blogs"><edit-blog></edit-blog></div>

                <div class="tab-pane fade pt-3" id="profile-exp">
                  
                  <!-- <h6 class="text-secondary fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, assumenda!</h6> -->
                  <div class="row g-3">

                    <div class="col-12 col-lg-3 ">
                      <div class="d-flex flex-column gap-2 p-2 shadow-sm">
                        <img src="https://picsum.photos/1920/1080" alt="slide" class="img-fluid rounded shadow-sm" width="100">
                        <h6 class="text-secondary fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quibusdam!...</h6>
                        <button class="btn btn-sm btn-outline-danger">Remove Experience</button>
                      </div>
                    </div>

                  </div>

                </div>

              </div><!-- End Bordered Tabs -->

            </div>
          </div>

        </div>
      </div>
    </section>
    `,
}

const createBlog = {
  template:
    /*html */
    `
    
    <script src="https://unpkg.com/@grammarly/editor-sdk?clientId=client_8HqGf8c32GzkCc52Lw3Ayo"></script>
    
    <section class="section">
      <div class="row g-3 justify-content-center">
        <div class="col-12 d-flex flex-column gap-2" id="editor-section" >
          <div class="pagetitle">
            <h1>Create Blog</h1>
            <small class="text-secondary">Share your expertise with the world by creating informative and thought-provoking articles that offer unique insights and perspectives. </small>
          </div>          
          <div class="bg-light fs-5 text-secondary shadow-sm rounded p-3 d-flex align-items-center justify-content-between gap-3 mb-3">
            <div class="point d-flex align-items-center justify-content-around justify-content-lg-evenly gap-4">
            
              <span class="material-symbols-outlined " id="embed-icon" title="embed code instead of adding images" @click="blogEmbedCode">code</span>
            
              <span class="material-symbols-outlined " id="images-icon" title="add images instead of embed code" @click="blogImages">add_photo_alternate</span>
            
              <span class="material-symbols-outlined"  data-bs-toggle="modal" title="preview blog" data-bs-target="#preview-modal" @click="previewBlog">preview</span>
              
              <span class="material-symbols-outlined" id="optimize-btn" title="Optimize images and save to drive" @click="optimize">magic_button</span>

              <span class="material-symbols-outlined " id="enable-arabic" title="enable Arabic" @click="enableArabic">format_align_right</span>
            

            </div>
            
            <span v-if="spinner" class="spinner-grow spinner-grow-sm"></span>
            <i v-else class="bi bi-upload d-block d-lg-none" @click="deploy"></i>
            <button class="btn btn-outline-dark btn-sm d-none d-lg-block" @click="deploy">
              <span v-if="spinner" class="spinner-grow spinner-grow-sm"></span>
              <div v-else ><i class="bi bi-github me-1"></i><span class="pop">Deploy</span></div>
            </button>
          </div>            
          
            <input :dir="dir(isArabic)" type="file" multiple class="form-control fs-smaller pop" id="blog-images">
            <div class="input-group" id="blog-embed-code">            
              <span id="custom-thubnail" @click="customThubnail" class="input-group-text material-symbols-outlined fs-5 point" title="Add custom thubnail">add_photo_alternate</span>
              <input v-model="blog.embed" type="text" class="form-control fs-smaller font-monospace" id="blog-embed-code" placeholder="Paste HTML here"></div>
            <grammarly-editor-plugin>        
              <input :dir="dir(isArabic)" v-model="blog.title" type="text" class="form-control fs-smaller pop" placeholder="Blog Title">
            </grammarly-editor-plugin>
            <grammarly-editor-plugin>
              <input :dir="dir(isArabic)" v-model="blog.seoDescription" class="form-control fs-smaller" placeholder="SEO Description">
            </grammarly-editor-plugin>
            <grammarly-editor-plugin>
              <input :dir="dir(isArabic)" v-model="blog.seoKeywords" class="form-control fs-smaller" placeholder="SEO Keywords seperated by comma">
            </grammarly-editor-plugin>

            <!-- <textarea name="" id="" class="form-control" cols="30" rows="3" placeholder="Blog Article"></textarea> -->
            <grammarly-editor-plugin>
             <p :dir="dir(isArabic)" contenteditable id="editor" class="form-control pop fs-smaller text-secondary" style="overflow: auto; resize: vertical; height: 200px;">Dotmark Article</p>
            </grammarly-editor-plugin>
          
          </div>


        <!-- Preview Modal -->
        <div class="modal fade" id="preview-modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Preview Blog</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div v-if="mediaType" id="embed-box" class="img-fluid" >
                  Embed code
                </div>
                <div v-else >
                  <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                      <div :class="'carousel-item '+i.active" v-for="i in images">
                        <img :src="i.src64" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon shadow" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span class="carousel-control-next-icon shadow" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <!-- blog title -->
                <h1 class="bebas"> {{blog.title}} </h1>
                <article id="article"></article>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    `,
  data() {
    return {
      blogHTML:
        /*html */
        `
    <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
          <!-- Primary Meta Tags -->
          <title>##blog_page_title</title>
          <meta name="title" content="##blog_page_title">
          <meta name="description" content="##blog_page_description">
          <meta name="keywords" content="##blog_page_keywords">
          <meta name="robots" content="index, follow">
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="language" content="English">
          <meta name="revisit-after" content="1 days">
          <meta name="author" content="Mahmoud Mashoun">
      
          <!-- Open Graph / Facebook -->
          <meta property="og:type" content="website">
          <meta property="og:url" content="##blog_page_url">
          <meta property="og:title" content="##blog_page_title">
          <meta property="og:description" content="##blog_page_description">
          <meta property="og:image" content="##blog_thubnail">
      
          <!-- Twitter -->
          <meta property="twitter:card" content="summary_large_image">
          <meta property="twitter:url" content="##blog_page_url">
          <meta property="twitter:title" content="##blog_page_title">
          <meta property="twitter:description" content="##blog_page_description">
          <meta property="twitter:image" content="##blog_thubnail">
      
      
          <!-- Styles -->
          <link rel="shortcut icon" href="https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa"
              type="image/x-icon">
          <link rel="stylesheet" href="../css/main.css">
          <link rel="stylesheet" href="../css/responsive.css">
          <link rel="stylesheet" href="../css/animations.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          <!-- Swiper -->
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
      
          <!-- AOS -->
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
          <!-- Day js -->
          <script src="https://cdn.jsdelivr.net/npm/dayjs@1.10.6/dayjs.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/dayjs@1.10.6/plugin/relativeTime.min.js"></script>
          <!-- VUE JS -->
          <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
          <script>
            function removeInvalidChars() {
              var elements = document.getElementsByTagName('*');
              for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                for (var j = 0; j < element.childNodes.length; j++) {
                  var node = element.childNodes[j];
                  if (node.nodeType === 3) {
                    var text = node.nodeValue;
                    var replacedText = text.replaceAll(/�/g,'');
                    if (replacedText !== text) {
                      element.replaceChild(document.createTextNode(replacedText), node);
                    }
                  }
                }
              }
            }
            window.onload = function() {
              removeInvalidChars();
            };
          </script>
      
      </head>
      
      <body id="app" class="bg-body">
          <header class="bg-light shadow-sm w-100 p-3 pop">
              <div class="container d-flex align-items-center gap-1">
                  <a :href="env('/blogs/')"><i class="bi bi-grid-fill"></i></a>
                  <i class="bi bi-chevron-compact-right"></i>
                  <h6 :class="'m-0 text-secondary fs-6 text-fade '+font('pop')" :dir="dir">##blog_page_title</h6>
              </div>
          </header>
          <main class="container mt-1 mb-5">
              <div class="row justify-content-center">
                  <article class="col-12 col-lg-6 px-2 py-3">
                      <div class="rounded shadow-sm p-3 bg-light">
                          <!-- blog header -->
                          <section
                              class="bg-light d-flex align-items-center justify-content-between px-2 py-3 shadow-sm rounded">
                              <a :href="env('/')" class="d-flex justify-content-start align-items-center gap-2">
                                  <img src="https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa"
                                      alt="profile pic" class="img-fluid rounded-pill shadow skeleton" width="40" height="40">
                                  <div class="d-flex flex-column">
                                      <h1 class="fs-5 text-secondary m-0 pop"> <strong>Mahmoud Mashoun</strong> </h1>
                                      <h6 class="fs-xsmall pop text-secondary">Full Stack Web Dev.</h6>
                                  </div>
                              </a>
                              <div class="d-flex align-items-center gap-2">
                                  <i class="bi bi-three-dots-vertical fs-5 text-secondary" data-bs-toggle="dropdown"></i>
      
                                  <ul class="dropdown-menu shadow-sm p-2 pop bg-abyad">
                                      <div class="scale-in-center">
                                          <li><a class="dropdown-item" :href="env('/')">Home Page</a></li>
                                          <li><a class="dropdown-item" href="#experience">Work Experience</a></li>
                                          <li><a class="dropdown-item" href="/blogs">Blogs & FAQs</a></li>
                                          <li><a class="dropdown-item" href="/terms_and_conditions">Terms & Conditions</a>
                                          </li>
                                          <li><a class="dropdown-item" href="/privacy_policy">Privacy Policy</a></li>
                                          <li><a class="dropdown-item" href="#contact">Contact</a></li>
                                          <li>
                                              <a href="" class="mt-1 rounded border p-2 text d-flex align-items-center gap-2">
                                                  <i class="material-symbols-outlined">
                                                      video_call
                                                  </i>
                                                  <span>Schedule a meeting</span>
                                              </a>
                                          </li>
                                      </div>
                                  </ul>
                              </div>
                          </section>
      
                          <!--blog embed-->
      
                          <!--swiper-->

                          <!-- blog body-->
                          <section class="mt-3 d-flex flex-column gap-3">
                              <h1 :class="'fs-1 bebas text-gradient '+font('bebas')" :dir="dir">##blog_page_title</h1>
                              <p :class="'fs-6 pop text-secondary text-justify cap '+font('pop')" :dir="dir">##blog_article</p>
                          </section>
                          <hr>
      
                          <!-- blog footer -->
                          <footer class="d-flex gap-2 align-items-center justify-content-between">
                              <div class="text d-flex gap-2 align-items-center text-secondary fs-xsmall">
                                  <!-- <i class="bi bi-clock"></i> -->
                                  <time class="m-0 pop">{{timo('##blog_date')}}</time>
                              </div>
                              <div class="d-flex align-items-center gap-3">
                                  <div class="dropup dropup">
                                      <i class="bi bi-share-fill fs-6 text-secondary" @click="shareBlog('##blog_page_title','##blog_page_url')"></i>
                                  </div>
                              </div>
                          </footer>
                      </div>
                  </article>
      
                  <!--comment-section-->
      
              </div>
          </main>
      
          <footer-section id="contact"></footer-section>
      
          <!-- ********** JAVASCRIPT ********** -->
      
          <script src="../js/vue.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
              crossorigin="anonymous"></script>
      
          <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
          <script>
              var swiper = new Swiper('.swiper', {
                  spaceBetween: 20,
                  zoom: true,
                  grabCursor: true,
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                  },
              });
          </script>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script src="https://unpkg.com/@grammarly/editor-sdk?clientId=client_8HqGf8c32GzkCc52Lw3Ayo"></script>
      </body>
      
    </html>`,


      isPreview: false,
      spinner: false,
      mediaType: true,
      isArabic: false,
      // true if media is embed
      // else media is slides
      images: [],//this will store the images in b64 before being saved to drive
      blog: {
        customThubnail: false,
        images: [],// this must store the images as urls
        embed: '',
        embedThubnail: '',
        title: '',
        article: '',
        sha: '',
        index: '',
        url: '',
        seoDescription: '',
        seoKeywords: '',
        date: new Date()
      }
    }
  },
  mounted() {
    this.blogEmbedCode()
    var blogImagesInput = document.getElementById('blog-images')
    blogImagesInput.addEventListener("change", (e) => {
      this.uploadImages(e);
    })


  },
  methods: {
    enableArabic() {
      this.isArabic = !this.isArabic;
      document.getElementById('enable-arabic').classList.toggle('text-info')
    },

    optimizeImageQuality(imageDataURI, quality) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          // const quality = 0.7; 
          const optimizedImageDataURI = canvas.toDataURL('image/jpeg', quality);
          resolve(optimizedImageDataURI);
        };
        img.onerror = (err) => {
          reject(err);
        };
        img.src = imageDataURI;
      });
    },

    dir(x) {
      if (x) return 'rtl'
      return 'ltr'
    },

    optimize() {

      if (this.images.length != 0) {

        this.images.forEach(img => {
          console.log(img)
          this.optimizeImageQuality(img.src64, 0.7).then(res => {
            img.src64 = res
            document.getElementById('optimize-btn').classList.add('text-info')
          })

        });
        console.log(this.images)

      } else {
        alert('Please select images')
      }

    },

    async saveHTML() {
      var copyBlogHtml = this.blogHTML

      // embed media is true
      // replace meta tags
      if (this.isArabic) {
        copyBlogHtml = copyBlogHtml.replaceAll('<html lang="en">', '<html lang="ar">')
        copyBlogHtml = copyBlogHtml.replaceAll('text-fade', 'text-fade-arb')
      }
      copyBlogHtml = copyBlogHtml.replaceAll('##blog_page_title', this.blog.title)
      copyBlogHtml = copyBlogHtml.replaceAll('##blog_page_description', this.blog.seoDescription)
      copyBlogHtml = copyBlogHtml.replace('##blog_page_keywords', this.blog.seoKeywords)
      copyBlogHtml = copyBlogHtml.replace('##blog_date', new Date())
      copyBlogHtml = copyBlogHtml.replaceAll('##blog_page_url', `https://mashoun.github.io/app/blogs/${(this.blog.title).replaceAll(' ', '-')}.html`)

      if (this.mediaType) {
        // replace embed section
        copyBlogHtml = copyBlogHtml.replaceAll('##blog_thubnail', await this.getThubnail(this.blog.embed))
        copyBlogHtml = copyBlogHtml.replaceAll('<!--blog embed-->', `<section class="mt-3">${this.blog.embed}</section>`)
      }
      else {
        copyBlogHtml = copyBlogHtml.replaceAll('##blog_thubnail', this.blog.images[0].src)
        copyBlogHtml = copyBlogHtml.replaceAll('<!--swiper-->', `<swiper :imgs='${JSON.stringify(this.blog.images)}'></swiper>`)

      }

      // replace blog article
      copyBlogHtml = copyBlogHtml.replaceAll('##blog_article', `${this.compile('article')}`)

      // replace comment section 
      copyBlogHtml = copyBlogHtml.replaceAll('<!--comment-section-->', `<comments :api="API" index="${this.github.index}"></comments>`)

      // Copy the text inside the text field
      // navigator.clipboard.writeText(copyBlogHtml);

      return copyBlogHtml
    },

    async getThubnail(embedCode) {

      if (!this.blog.customThubnail) {
        // means use the youtube default img thubnail
        // Extract the video ID from the embed code
        var videoId = embedCode.match(/embed\/([^\"]*)/)[1];

        // Return the URL for the maxresdefault thumbnail
        return 'https://img.youtube.com/vi/' + videoId + '/sddefault.jpg';
      }

      // else save the thubnail and return the url
      // this.spinner = true

      var api = this.api
      api += `?username=${this.username}&password=${this.password}&uploadImageToDrive=1&folderId=1HF4xxC9F_P7sUtE7Yvb9wOAGP5yBgCSm`

      // saving images to drive
      var res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(this.images)
      })
      res = await res.json()
      return res[0].src


    },

    compile(resultID) {
      var editor = document.getElementById('editor')
      var content = editor.innerText

      // content = content.replaceAll('..', '<br>')
      content = content.replace(/(\r\n|\n|\r)/g, "<br>");
      // content = content.replace(/\*([^*]+)\*/g, `<b>$1</b>`);
      content = content.replace(/_([^*]+)_/g, `<u>$1</u>`);
      content = content.replace(/~([^*]+)~/g, `<s>$1</s>`);
      content = content.replace(/\.\.\.\.(.+?)\.\.\.\./g, "<code>$1</code>");
      content = content.replace(/\.\.\.(.+?)\.\.\./g, "<i>$1</i>");
      content = content.replace(/\.\.(.+?)\.\./g, "<b>$1</b>");
      content = content.replace(/!!([\w-]+)/g, `<i class="bi bi-$1"></i>`);
      content = content.replace(/(?<name>[^\s]+)::(?<url>[^\s]+)/gm, '<a href="$2" title="$2" >$1</a>')
      // console.log(content);


      document.getElementById(resultID).innerHTML = content
      return content
    },

    setHTML(htmlString, id) {
      document.getElementById(id).innerHTML = htmlString
    },

    async githubPush(token, content, filename) {

      var data = JSON.stringify({
        "message": "html file",
        "content": `${content}`
      });

      var config = {
        method: 'put',
        url: `https://api.github.com/repos/mashoun/app/contents/blogs/${filename}.html`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: data
      };

      var res = await axios(config)
      console.log(res.data)
      return res.data.content.sha

    },

    async deploy() {
      this.spinner = true
      var api = this.api
      api += `?username=${this.username}&password=${this.password}&uploadImageToDrive=1&folderId=1HF4xxC9F_P7sUtE7Yvb9wOAGP5yBgCSm`

      // saving images to drive
      var res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(this.images)
      })
      res = await res.json()
      this.blog.images = res

      // generating html blog
      var content = await this.saveHTML()

      // deploy to github
      var sha = await this.githubPush(this.github.token, this.b64(content), ((this.blog.title).replaceAll(' ', '-')))

      await this.saveBlog(sha)
      this.spinner = false



    },

    async test() {
      // console.log( await this.getThubnail(this.blog.embed))
    },

    async saveBlog(sha) {
      var api = this.api
      api += `?username=${this.username}&password=${this.password}&addBlog=1`
      var data;

      if (this.mediaType) {
        // embeded media
        data = {
          title: this.blog.title,
          url: `https://mashoun.github.io/app/blogs/${(this.blog.title).replaceAll(' ', '-')}.html`,
          description: this.blog.seoDescription,
          sha: sha,
          embed: this.blog.embed,
          thubnail: await this.getThubnail(this.blog.embed)
        }
      } else {
        data = {
          // images slides media
          title: this.blog.title,
          url: `https://mashoun.github.io/app/blogs/${(this.blog.title).replaceAll(' ', '-')}.html`,
          description: this.blog.seoDescription,
          sha: sha,
          images: this.blog.images,
          thubnail: this.blog.images[0].src
        }
      }

      console.log(data)

      fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(res => {
        alert(`https://mashoun.github.io/app/blogs/${(this.blog.title).replaceAll(' ', '-')}.html`)
        console.log(res)
        return res
      }).catch(e => {
        console.log(e)
        return e
      })
    },

    previewBlog() {
      if (this.blog.title == '' || this.blog.seoDescription == '' || this.blog.seoKeywords == '' || document.getElementById('editor').innerText == 'Dotmark Article') {
        alert('Please Fill all required fields')
      } else {

        if (this.blog.embed.includes('youtube')) this.thubnail = this.getThubnail(this.blog.embed)
        if (this.mediaType) this.setHTML(this.blog.embed, 'embed-box')
        else {
          // serve images

        }

        this.compile('article')
      }



    },

    blogEmbedCode() {
      document.getElementById('embed-icon').classList.add('text-info')
      document.getElementById('images-icon').classList.remove('text-info')
      document.getElementById('blog-images').disabled = true
      document.getElementById('blog-images').classList.add('d-none')
      document.getElementById('blog-embed-code').disabled = false
      document.getElementById('blog-embed-code').classList.remove('d-none')
      document.getElementById('blog-embed-code').focus()
      this.mediaType = true

    },

    blogImages() {
      document.getElementById('embed-icon').classList.remove('text-info')
      document.getElementById('images-icon').classList.add('text-info')
      document.getElementById('blog-embed-code').disabled = true
      document.getElementById('blog-embed-code').classList.add('d-none')
      document.getElementById('blog-images').disabled = false
      document.getElementById('blog-images').classList.remove('d-none')
      document.getElementById('blog-images').focus()
      this.mediaType = false

      //reseting no custom embed thubnail
      this.images = []
      document.getElementById('custom-thubnail').classList.remove('text-info')
      this.blog.customThubnail = false
    },

    getCurrentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear().toString();
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const seconds = currentDate.getSeconds().toString().padStart(2, '0');

      return `${year}${month}${day}${hours}${minutes}${seconds}`;
    },

    uploadImages(event) {

      const file = event.target.files;
      for (let i = 0; i < file.length; i++) {
        let active = ''
        const file = event.target.files[i];

        // console.log(file)
        if (i == 0) active = 'active'
        this.convertBase64(file).then(base64 => {
          this.images.push({
            active: active,
            id: `slide-${i}`,
            alt: `MM${i}-${this.getCurrentDate()}`,
            src64: base64,
          })


          // console.log(`File ${i} = ${base64}`)
          // console.log(this.images)
          navigator.clipboard.writeText(this.images)
        })
      }
    },

    b64(htmlString) {
      const encoder = new TextEncoder();
      const binaryData = encoder.encode(htmlString);
      const base64Data = btoa(String.fromCharCode(...new Uint8Array(binaryData.buffer)));
      return base64Data;
    },

    customThubnail() {

      this.blog.customThubnail = true
      this.images = []
      const inputElement = document.createElement('input');
      inputElement.type = 'file';
      inputElement.click()

      inputElement.addEventListener('change', async () => {
        // Get the selected file
        const file = inputElement.files[0];

        try {

          // Convert the file to a base64 encoded string
          const base64Image = await this.convertBase64(file);
          this.images.push({
            id: `youtube-custom-thubnail`,
            alt: `MM-${this.getCurrentDate()}`,
            src64: base64Image,
          })
          document.getElementById('custom-thubnail').classList.add('text-info')
          this.blog.customThubnail = true
        } catch (error) {
          console.log(error)
          this.blog.customThubnail = false
        }
      });
    },

    convertBase64(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    }
  },
  props: ['github', 'username', 'password', 'api']
}

const addExp = {
  template:
    /*html */
    `
    <section class="section">
      <div class="row g-3 justify-content-between">
        <div class="col-12 col-lg-8 d-flex flex-column gap-2">
          <div class="pagetitle">
            <h1>New Experience</h1>
            <small class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, blanditiis.</small>
          </div>

          <div class="input-group"> 
            <input type="text" class="form-control fs-smaller pop" id="inputGroupFile02" placeholder="Company's name">
            <i class="input-group-text bi bi-three-dots-vertical rounded-end px-3" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Preview</a></li>
              <li><a class="dropdown-item" href="#">Deploy</a></li>
            </ul>
          </div>
          <input type="file" class="form-control fs-smaller pop" id="inputGroupFile02">    
          <input type="text" class="form-control fs-smaller pop" placeholder="Company's Address">        
          <input type="date" class="form-control fs-smaller pop" placeholder="Starting Date">
          <!-- <textarea name="" id="" class="form-control" cols="30" rows="3" placeholder="Blog Article"></textarea> -->
          <p contenteditable class="form-control pop fs-smaller text-secondary" style="overflow: auto; resize: vertical; height: 200px;">..About your experience..</p>
        </div>

        <!-- Preview -->
        <div class="col-12 col-lg-4 d-flex flex-column gap-2 p-3">
          <section class="bg-light p-3 shadow-sm d-flex flex-column gap-3 rounded">
            <div class="d-flex gap-3 align-items-center">
                <img src="https://picsum.photos/1080" alt="brand logo" class="img-fluid rounded shadow-sm skeleton" width="50" height="50">
                <div class="d-flex flex-column">
                  <h1 class="fs-2 bebas text-primary"> Saudi National Bank </h1>
                  <h6 class="pop fs-xsmall text-secondary">Saudi Arabia<i class="bi bi-dot"></i>1 year ago </h6>
                </div>
            </div>
            <div class="">
                <h5 class="text-secondary fs-5 pop"><strong>Lorem ipsum dolor sit amet.</strong></h5>
                <p class="fs-small pop text-secondary text-justify"> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Deleniti ut dignissimos fugiat ea corporis modi consectetur quidem aperiam mollitia aliquid, id aut quaerat, 
                  est incidunt assumenda, odio recusandae placeat reprehenderit! 
                </p>
            </div>
          </section>
        </div>
      </div>
    </section>
    `
}

const routes = [
  { path: '/', component: dashboardPage },
  { path: '/index.html', component: dashboardPage },
  { path: '/login', component: loginPage },
  { path: '/dashboard', component: dashboardPage },
  { path: '/createBlog', component: createBlog },
  { path: '/addExp', component: addExp },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})


const app = Vue.createApp({
  data() {
    return {
      title: 'Mashoun CMS',
      editor: '',

      PIC: 'https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa',
      API: 'https://script.google.com/macros/s/AKfycbwEm8d0GkrsYtKGwIPfkxKzophR4sJrMS2govxvNVXPxzrlMGtDu0xi3AvNrqI0NLQQvw/exec',
      username: '',
      password: '',
      isLogedIn: true,
      loginSpinner: false,
      github: '',

    }
  },
  methods: {
    focus(id) {
      document.getElementById(id).focus()
    },

    timo(date) {
      dayjs.extend(window.dayjs_plugin_relativeTime);
      dayjs();
      const futureDate = dayjs(date);
      console.log(futureDate.fromNow());
      return futureDate.fromNow()
    },
    login() {
      this.loginSpinner = true;
      var api = this.API
      api += `?username=${this.username}&password=${this.password}`

      fetch(api).then(res => res.json()).then(res => {
        console.log(res)
        if (res != '500') {
          this.isLogedIn = true;
          this.loginSpinner = false;
          this.github = res
        } else {

          document.getElementById('username').classList.add('is-invalid')
          document.getElementById('password').classList.add('is-invalid')
          this.username = ''
          this.password = ''
          this.loginSpinner = false;
        }
      }).catch(e => {
        console.log(e)
        alert('Weak Network Login again please')
        this.loginSpinner = false;

      })
    },
    async loginPlease() {

      try {
        this.loginSpinner = true;
        var api = this.API
        api += `?username=${this.username}&password=${this.password}`
        var res = await fetch(api)
        res = await res.json()

        if (res != '500') {
          this.isLogedIn = true;
          this.loginSpinner = false;
          this.github = res
          console.log(res)
        } else {

          document.getElementById('username').classList.add('is-invalid')
          document.getElementById('password').classList.add('is-invalid')
          this.username = ''
          this.password = ''
          this.loginSpinner = false;
        }
      } catch (e) {

        console.log(e)
        alert('Weak Network Login again please')
        this.loginSpinner = false;
      }



    },
  },
  mounted() {
    this.getRecentComments()
    // this.getBlogs()
  }
})

const editBlog = {
  template:
    /*html */
    ` 
  <div class="row g-3 p-3">
    <div class="col-12">
      <div class="input-group">
        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button class="btn btn-outline-secondary" type="button">Remove Blog</button>
      </div>
    </div>
  </div>
  <div class="row g-3 mt-3 p-3">

    <div class="col-12 col-lg-4 p-2 d-flex flex-column gap-2 shadow rounded position-relative">
      <time class="fs-xsmall">22 hrs ago</time>
      <strong class="border-start border-4 border-warning ps-2 text-fade">Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
      <div class="text-primary pop d-flex align-items-center"><i class="bi bi-at fs-5"></i><span class="m-0">Mahmoud</span></div>
      <small class="text-secondary arb ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa, officia quo quia molestiae enim illum. Dolores quae atque laboriosam?</small>
      <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="bi bi-reply-fill position-absolute top-0 start-100 translate-middle fs-3 point text-secondary"></i>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Reply to @Mahmoud</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <textarea class="form-control" row="7"></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Accept</button>
              <button type="button" class="btn btn-outline-secondary">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  
  `,
  data() {
    return {
      // to be moved to the dashboard comp
      recentComments: '',
      allBlogs: '',
      selectedBlog: '',
      filteredBlogs: []
    }
  },
  props:['API','github','username','password'],
  methods: {

    async getRecentComments() {

      var api = this.API
      api += `?getRecentComments=1`
      var res = await fetch(api)
      res = await res.json()

      if (res) this.recentComments = res
      console.log(this.recentComments)

    },
    async acceptComment(index, id) {
      var myReply = document.getElementById(id).value
      var row = parseInt(index) + 1
      var api = this.API
      api += `?acceptComment=1&row=${row}&reply=${myReply}&username=mashoun&password=2023Me`

      var res = await fetch(api)
      res = await res.json()
      alert(res)

    },
    async getBlogs() {
      var api = this.API
      api += `?username=${this.username}&password=${this.password}&getBlogs=1`

      var res = await fetch(api)
      res = await res.json()
      this.allBlogs = res
      console.log(res)

    },
    async removeBlogFromGithub(path, sha) {
      console.log(this.github.token)
      const config = {
        method: 'delete',
        url: `https://api.github.com/repos/mashoun/app/contents/blogs/${path}.html`,
        headers: {
          'Authorization': `Bearer ${this.github.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        data: {
          message: 'Delete file',
          branch: "main", // The branch from which you want to delete the file
          sha: sha // The SHA of the file you want to delete (can be obtained using the GET /repos/:owner/:repo/contents/:path endpoint)
        }
      };

      const res = await axios(config);
      console.log(res.data);
      // must remove blog from sheets
      return res.json()
    },
    async deleteFile(token, owner, repo, path, message, branch, sha) {
      const config = {
        method: 'delete',
        url: `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        data: {
          message: message,
          branch: branch,
          sha: sha
        }
      };

      const res = await axios(config);
      console.log(res.data);
      return res.data;
    },
    async getFileSha(token, owner, repo, path) {
      const config = {
        method: 'get',
        url: `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        }
      };

      const res = await axios(config);
      console.log(res.data);
      return res.data.sha;
    },
    async removeBlog() {
      var dBlog = this.allBlogs.filter(b => {
        return b.title == this.selectedBlog
      })[0]



      // delete from client side
      this.allBlogs = this.allBlogs.filter(b => {
        return b.title != this.selectedBlog
      })
      this.selectedBlog = ''

      // delete from github

      var path = dBlog.url.replace('https://mashoun.github.io/app/', '')
      console.log(path)

      const sha = await this.getFileSha(this.github.token, this.github.username, this.github.repoName, path);

      await this.deleteFile(this.github.token, this.github.username, this.github.repoName, path, 'CRM Delete File', 'main', sha)
      // delete from sheets - only strike through

    }
  }
}

app.component('edit-blog', editBlog)

app.use(router)
app.mount("#app")