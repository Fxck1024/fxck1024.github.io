var posts=["posts/c16c6dcf.html","posts/490e9480.html","posts/f255ffad.html","posts/8544442c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };