var posts=["posts/c16c6dcf.html","posts/f255ffad.html","posts/7fc8ee4.html","posts/490e9480.html","posts/8544442c.html","posts/f4d746ea.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };