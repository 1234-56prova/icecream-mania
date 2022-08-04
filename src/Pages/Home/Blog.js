import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const { image, name, author } = props;
    return (
        <div className='m-2 border border-gray-700'>
            <div className=''>
                <img className='w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src={image} alt="" />
            </div>
            <div className='p-3'>
                <div className="text-sm breadcrumbs text-orange-200">
                    <ul>
                        <li><Link to='/'>CAFENA</Link></li>
                        <li><Link to='/'>{author}</Link></li>
                        <li>April 30, 2022</li>
                    </ul>
                </div>
                <h2 className='text-white uppercase text-2xl hover:underline'>{name}</h2>
                <div className='flex mt-2'>
                    <Link to='/' className='text-white zoom'>READ MORE</Link>
                    <FontAwesomeIcon className='text-white m-1 ml-4' icon={faArrowRight}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Blog;