import React from 'react'
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src="images/blog-1.jpg" className='img-fluid' alt="image-blog"></img>
            </div>
            <div className='blog-content'>
                <p className='date'>11 june 2022</p>
                <h5 className='title'>
                    A Beautiful Sunday morning renalssance
                </h5>
                <p className='desc'>
                The Revered Master, Yu Yan, known as the number one in the cultivation world, waited for sixteen thousand years, and finally took in 
                </p>
                <Link className='button' to=''>READ MORE</Link>
            </div>
        </div>
    </div>
  )
}
