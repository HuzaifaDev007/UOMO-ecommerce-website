import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import NavigationPercentage from '../component/NavigationPercentage'

function BlogPages({blogsData}) {

    const [displayData, setDisplayData] = useState(null)
    console.log(blogsData)
    useEffect(()=> {
        const blogItems = blogsData.map((blogData)=> (
            <div className="col-lg-6 col-sm">
                <div className="blog-thumbnail-container-wrapper">
                <div className="blog-thumbnail-container">
                    <div className="blog-thumbnail-img">
                        <img src={blogData.image} alt="" />
                    </div>
                    <div className="blog-thumnail-content">
                        <div className="blog-thumnnail-date-container">
                        <h6>{blogData.author}</h6>
                        <h6>{blogData.date}</h6>
                        </div>
                        <h5><NavLink to={`/blogs/${blogData.id}`} style={{ textDecoration: 'none', color: 'inherit' }} >{blogData.title}</NavLink></h5>
                        <h6 className='blog-description-display'>{blogData.discriptionDisplay}</h6>
                        <h6 className='underline-animation' ><NavLink to={`/blogs/${blogData.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>CONTINIUE READING</NavLink> </h6>
                    </div>
                </div>

                </div>

            </div>
            


        ))
        setDisplayData(blogItems)

    },[])


  return (
    <section id='blogs-display-container'>
        <div className="row g-4" style={{marginBottom: "3rem"}}>
            
            {displayData}
            
            
        </div>
        <NavigationPercentage />
    </section>
  )
}

export default BlogPages