import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div class="hero min-h-screen bg-black">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/FHCHrNh/cafe.jpg"width={'800px'}  alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-white">OUR STORY</h1>
                        <p class="py-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum voluptates laboriosam dolores necessitatibus! Ullam nihil asperiores distinctio similique et, nobis non dignissimos. Ea sint corporis aut pariatur, sequi quo dolor autem ipsam eaque, tempore tenetur eligendi totam temporibus voluptates deserunt, magni doloribus laudantium officia repellendus accusantium labore? Iste enim natus debitis similique libero quod reprehenderit a, sapiente fugiat necessitatibus autem corporis, laudantium quisquam ipsam, sint nulla. Doloremque perferendis ex corporis odit quod voluptatibus, libero eum, dolores unde voluptate impedit, deleniti explicabo accusantium cumque! Magnam dolores sapiente dignissimos accusamus sint eum autem, perferendis tenetur animi aliquam vitae rerum minima nisi maxime enim doloremque repudiandae? Nesciunt quaerat error voluptatibus, reiciendis ex temporibus? Quam cum praesentium hic ipsam at consequuntur enim velit magni qui vel earum minus quis dolores a commodi perspiciatis maiores saepe, culpa nostrum adipisci quo voluptatem nihil voluptas. Adipisci similique voluptatibus porro officiis illo, nisi ea laudantium aliquid facere blanditiis minus doloribus nesciunt corrupti numquam fugiat, mollitia accusamus possimus. Tempora, ratione modi ipsam ut rem unde magni esse vitae tenetur vel doloribus excepturi ad culpa voluptatem eos sunt asperiores. Similique facilis eveniet corrupti et voluptatibus magni suscipit enim voluptate earum accusantium architecto tempore hic quibusdam beatae expedita nemo laborum cum mollitia adipisci quod, praesentium ducimus veniam? Dolore aut odit itaque sunt sapiente architecto ullam nemo cum eius, est quas dolorum ducimus consequuntur ad similique corporis. Amet earum facilis quidem neque accusantium reiciendis et, aliquid dolorem alias nihil numquam incidunt placeat aperiam modi porro! Sed optio modi iusto architecto nam est dolores officia iure ipsa dolore excepturi, aliquam quaerat, omnis repellat, vel harum consectetur ad tempore. Ea incidunt, fugiat voluptate cupiditate non quia illo vitae libero. Accusantium deleniti, sit id illo obcaecati tempore aperiam dolor! Eaque, corporis id sapiente provident veniam ad autem cupiditate fugit earum nesciunt eos, nisi voluptates.</p>
                        <button onClick={() => navigate('/')} class="btn btn-wide bg-amber-900 glass">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;