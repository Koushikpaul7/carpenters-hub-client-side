import React from 'react';

const Blog = () => {
    return (
        <div className='text-justify px-20 my-12'>
           <h2 className="text-3xl text-secondary mb-12"> Latest blogs</h2>
            <p className='text-xl font-bold'>How will you improve the performance of a React Application?</p>
            <p>1.We can keep the Components state local to improve the perfomance in react</p>
            <p>2. Monitoring react components to prevent the re renders.  </p>
            <p>3. Using dynamic import splitting code in react.</p>
            <p>4. Optimize picture to load images in quick time.</p>
            <br />
            <p className='text-xl font-bold'>What are the different ways to manage a state in a React application?</p>
            <p>There are 4 kinds of ways to manage a state in react app.</p>
            <p>1.Local state: ocal state is data we manage in one or another component.</p>
            <p>2. global state:  Global state is data we manage across multiple components.</p>
            <p>3.Server state: It comes from another server that should be integrated with thr UI state.</p>
            <p>4. URL state: The data which are not exist in our url including pathnmae and querry parameters</p>
            <br />
            <h2 className='text-xl font-bold'> How does prototypical inheritance work?</h2>
            <p> A prototype is a working object instance. When we read a property from object and it is missing, javascript  takes it automatically from the prototype. This is called prototypal inheritance.
            In order to get and set the Prototype of an object, we use Object, getPrototypeOf.
            </p>
            <br />
            <p className='text-xl font-bold'> What is a unit test? Why should write unit tests?</p>
        
            <p>Unit tests are the tests which are done by the developers before deploying any application. it is done by the developers because before deploying the application developers want to check that the application is working as there expectation or not. </p>
            <p>We should run unit test because it allows us to think actually what has to be done in the application. if we dont write the test maybe the application would not work appropriately and will make bad user experience.  </p>
            <br />
            <p className='text-xl font-bold'>Why we do not set the state directly in React.</p>
            <p >We should not update the state directly. Because if we try to set the state directy as a example(products=[]) , then it wont re render the component.  We need to use setState (setProducts) because it schedules an update to a component's state object. If the state changes the component then responds by re rendering. </p>
                 
        </div>
    );
};

export default Blog;