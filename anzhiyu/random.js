var posts=["posts/c16c6dcf.html","posts/490e9480.html","posts/f255ffad.html","posts/8544442c.html","posts/7fc8ee4.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };