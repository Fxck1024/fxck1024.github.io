var posts=["posts/7fc8ee4.html","posts/8544442c.html","posts/f255ffad.html","posts/c16c6dcf.html","posts/490e9480.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };