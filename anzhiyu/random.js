var posts=["2025/08/24/2025.08.24.20.55/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };