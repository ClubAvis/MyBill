self.__BUILD_MANIFEST = function(s, c, t, e, a) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/robots.txt",
                destination: "/api/robots"
            }, {
                source: "/sitemap",
                destination: "/api/sitemap"
            }],
            fallback: []
        },
        "/404": ["static/chunks/pages/404-05b27410f3eae19c.js"],
        "/_error": ["static/chunks/pages/_error-b2067a01cc62b3fe.js"],
        "/blog": [s, e, c, t, "static/chunks/pages/blog-66337eed8c1eccae.js"],
        "/blog/[slug]": [s, e, c, t, "static/chunks/pages/blog/[slug]-e8e3147370693919.js"],
        "/checkout/[...idInvoice]": [s, e, c, a, t, "static/chunks/pages/checkout/[...idInvoice]-272832568d24cb74.js"],
        "/contact-form": [s, e, "static/chunks/9198-189c9ea729df928e.js", "static/chunks/7333-34cd0b2f6075c93f.js", "static/css/b44e452a9b15cc82.css", "static/chunks/4853-5e0e70b113a27978.js", c, t, "static/chunks/pages/contact-form-7a2e3b326f3ae62d.js"],
        "/error/404": [s, c, t, "static/chunks/pages/error/404-9fa8faf225fbfa95.js"],
        "/error/500": [s, c, t, "static/chunks/pages/error/500-c7e9843829177be8.js"],
        "/invoice/print/[idInvoice]": ["static/chunks/65291039-4f3f6955e28c2474.js", "static/chunks/1b8dab7b-31f3d25e51dea378.js", "static/chunks/228771e0-1847fb34b4287f6e.js", "static/chunks/c9184924-889d510402c9534a.js", s, e, "static/chunks/2648-f5f1ef9b7620390d.js", c, t, "static/chunks/pages/invoice/print/[idInvoice]-9a66a691e6a263bb.js"],
        "/invoice/[idInvoice]": [s, e, c, t, "static/chunks/pages/invoice/[idInvoice]-4a9c56527fd152f0.js"],
        "/[[...slug]]": [s, c, a, t, "static/chunks/pages/[[...slug]]-b6649e74fdac9366.js"],
        sortedPages: ["/404", "/_app", "/_error", "/blog", "/blog/[slug]", "/checkout/[...idInvoice]", "/contact-form", "/error/404", "/error/500", "/invoice/print/[idInvoice]", "/invoice/[idInvoice]", "/[[...slug]]"]
    }
}("static/chunks/879-0524181b95e6293d.js", "static/chunks/1996-fbd52812cd66db27.js", "static/css/c2c4e2b9bf1b95af.css", "static/chunks/120-9aa0e12b8112f0af.js", "static/chunks/3391-a505b93850c88a57.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();