import React, { useEffect, useState } from 'react'
import BlogPages from './BlogPages.jsx'
import './Blog.css'
import blogsContent from '../BlogContent.js'
import {  NavLink , useLoaderData, useNavigation } from 'react-router'

function Blog() {
    
    // const data = useLoaderData()
    console.log(blogsContent)
        

     



  return (
    <section>
    <div id='Blog'>
        <div className="blog-img-wrapper">
        <div className="blog-content-container">
            <h4>THE BLOG</h4>
            <div className="blog-btn-container">
                <h5 className='underline-animation'>All</h5>
                <h5 className='underline-animation'>Company</h5>
                <h5 className='underline-animation'>Fashion</h5>
                <h5 className='underline-animation'>Style</h5>
                <h5 className='underline-animation'>Trends</h5>
                <h5 className='underline-animation'>Blogs</h5>
            </div>
        </div>

        </div>
        

    </div>
    <BlogPages blogsData={blogsContent}/>

    </section>
  )
}

export default Blog


// export const BlogLoader =  async ()=> {

//     const data =   blogsContent
//     console.log("blogsContent", blogsContent)
//     return data
// }


// const data = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(blogs);
//     }, 5000); // 50,000 milliseconds delay
//   });