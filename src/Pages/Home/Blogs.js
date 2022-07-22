import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    return (
        <div >
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-10'>
                <Blog image='https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/blog-post-2.jpeg' name='build a cool morning with cafena coffee' author='Mark Chel'></Blog>
                <Blog image='https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/blog-post-3.jpeg' name='questions business must be able to answer' author='William John'></Blog>
                <Blog image='https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/blog-post-1.jpeg' name='ideal cocktails from our barmen' author='Vladimir Plasa'></Blog>
            </div>
        </div>
    );
};

export default Blogs;