import React from 'react';
import img from '../../assests/img/12.jpg'
import './picture.css'
const Portfolio = () => {
    return (
        <div className='text-center w-full'>
        <h2 className='mt-5 text-2xl bg-secondary'>About Me</h2>
        <hr className='text-primary w-50 mx-auto' />
        
        <img className='picture shadow mx-auto my-5' src={img} alt="" />
        <h4 className='text-xl text-primary mx-auto'> Koushik Paul</h4>
        <h4 className='text-xl text-primary mx-auto'>Email: Koushikpaul6211@gmail.com</h4>
        <div className='text-justify'>
        
        <p className='w-96 mx-auto mt-4'>Hello everyone! I m Koushik Paul and I've  pursued my degree in Bachelor of CSE . I want to build my career as a web developer. My Goal is to be a good full-stack developer in 2-3 years. I am working hard with my course and doing my projects for the experience. I hope i can make it by the blessing of Almighty and through my hardwork </p>
        <p className='w-96 mx-auto mt-4'> <span className='text-xl text-secondary'>As a developer i have Skills on</span>
        <li>React js</li>
        <li>Html 5 </li>
        <li>Css 3 </li>
        <li>JavaScript </li>
        <li>Node crud operation </li>
        <li>Tailwind </li>
        <li>Bootstrap </li>
        </p>
        <br />
        <p className='w-96 mx-auto mt-4 mb-12 text-xl'>Here is three live sites of my projects:
            <br />
            <li><a href="https://best-buy-bd.web.app/" target='_blank'> Best-Buy-Bd</a></li>
            <li><a href="https://the-shutterman.web.app/" target='_blank'> The shutterman</a></li>
            <li><a href="https://carpenters-hub.web.app/" target='_blank'> Carpenters-hub</a></li>
             </p>

        </div>
    </div>
    );
};

export default Portfolio;