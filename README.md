# HTMX Blog

## Sun, Mar 31

### Github Pages Deploy Trouble
- So when you deploy in Github pages, your url is always ` https://{userid}.github.io/{reponame} `
  - This basically breaks my initial HTMX dynamic hx-get and hx-push-url pattern which was based on root
  - Temporarily solved it by just inserting `/htmx-blog/` in front of all my root paths, but this breaks local.
  - I could work around this by using a custom domain, or adding a new parent directory in my project where I actually run the server from... So I have a parent directory where I run my vs code live server, and that parent directory just contains an index.html, and `/htmx-blog` ~ and then `htmx-blog` directory is my real project directory for development.

### index.html vs posts.html
- linking to `wwharton.github.io/htmx-blog/posts.html` reveals the unstyled content, whereas `wwharton.github.io/htmx-blog/index.html` is my styled container which loads the posts content. This makes it awkward to link the main posts page.