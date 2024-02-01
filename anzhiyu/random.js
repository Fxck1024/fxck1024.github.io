var posts=["posts/8544442c.html","posts/490e9480.html","posts/1d5ef26f.html","posts/f255ffad.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };