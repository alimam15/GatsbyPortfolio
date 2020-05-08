import React ,{ useState } from "react"
import Layout from "../components/layout"
import {Link, graphql, useStaticQuery} from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import SearchBox from "../components/searchBox"


const BlogPage = () => {
    const [searchfield, setSearchfield] = useState('')
    /* Old query using markdonw Remark */
    /*const data = useStaticQuery(graphql`query{allMarkdownRemark{edges{ node{frontmatter{title date}  fields{slug }}}} } `)*/
    const data = useStaticQuery(graphql`query{
        allContentfulBlogPost(sort:{fields: publishedDate, order: DESC}){
            edges{
                node{
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                }
            }
        }
     } 
                `)

    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)}
    const filteredBlogs = data.allContentfulBlogPost.edges.filter(
         edge => {return edge.node.title.toLowerCase().includes(searchfield.toLowerCase())})
    /*console.log(data.allContentfulBlogPost.edges)
    data.allContentfulBlogPost.edges.forEach(element => {
        console.log(element.node.title) }); */
    //console.log(filteredBlogs)
                              
   return(
    <Layout>
    <Head title="blog" />
    <h1>Blog</h1>
    <SearchBox searchChange={onSearchChange} />
    <ol className={blogStyles.posts}>
        {filteredBlogs.map((edge, i)=> {
            return(
                <li key={i} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                    <h2>{edge.node.title} </h2>
                    <p>{edge.node.publishedDate}</p>
                </Link>
                </li>    
            )})
        }
    </ol>
    </Layout>
    )
}

 


export default BlogPage