import React from 'react';

const Reviews = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className=''>
                    <p className='text-white m-8 lg:m-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil facilis vel ex debitis soluta autem explicabo, aspernatur laudantium quidem harum magni nesciunt incidunt rerum amet ratione. Eaque pariatur aperiam vero labore excepturi atque. Optio officiis rerum culpa laudantium corrupti. Perferendis, porro adipisci! Odio magni laudantium eum saepe, id debitis?</p>
                    <img className='rounded-xl w-24 reviewers' src="https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/tm-author.png" alt="" />
                    <p className='text-white text-center'>RASEL WILLSON</p>
                    <p className='text-orange-200 uppercase text-center'>WAITER</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className=''>
                    <p  className='text-white m-8 lg:m-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil facilis vel ex debitis soluta autem explicabo, aspernatur laudantium quidem harum magni nesciunt incidunt rerum amet ratione. Eaque pariatur aperiam vero labore excepturi atque. Optio officiis rerum culpa laudantium corrupti. Perferendis, porro adipisci! Odio magni laudantium eum saepe, id debitis?</p>
                    <img className='rounded-xl w-24 reviewers' src="https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/tm-author.png" alt="" />
                    <p className='text-white text-center'>MICHEL CLARK</p>
                    <p className='text-orange-200 uppercase text-center'>DEVELOPER</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className=''>
                    <p  className='text-white m-8 lg:m-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil facilis vel ex debitis soluta autem explicabo, aspernatur laudantium quidem harum magni nesciunt incidunt rerum amet ratione. Eaque pariatur aperiam vero labore excepturi atque. Optio officiis rerum culpa laudantium corrupti. Perferendis, porro adipisci! Odio magni laudantium eum saepe, id debitis?</p>
                    <img className='rounded-xl w-24 reviewers' src="https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/tm-author.png" alt="" />
                    <p className='text-white text-center'>MATHEW JOHA</p>
                    <p className='text-orange-200 uppercase text-center'>SINGER</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className=''>
                    <p  className='text-white m-8 lg:m-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil facilis vel ex debitis soluta autem explicabo, aspernatur laudantium quidem harum magni nesciunt incidunt rerum amet ratione. Eaque pariatur aperiam vero labore excepturi atque. Optio officiis rerum culpa laudantium corrupti. Perferendis, porro adipisci! Odio magni laudantium eum saepe, id debitis?</p>
                    <img className='rounded-xl w-24 reviewers' src="https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/tm-author.png" alt="" />
                    <p className='text-white text-center'>MICHEL CLARK</p>
                    <p className='text-orange-200 uppercase text-center'>DEVELOPER</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Reviews;