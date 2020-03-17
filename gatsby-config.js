module.exports = {
  siteMetadata:{ 
    title: 'Full Stack Dev Portfolio!',
    author: 'Alimam M.A'
  },

  plugins : [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    }
]
}
