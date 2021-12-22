require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./Router').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://failsdata.com')
          .save('./public/sitemap.xml')
  );