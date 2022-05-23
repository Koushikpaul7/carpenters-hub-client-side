import React from 'react';

const Contact = () => {
    return (
        <div>
             <h2 className='text-3xl text-primary text-center font-bold'>Let us know your quarries</h2>
            <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left px-12">
            <h1 class="text-5xl font-bold"> <span className='text-secondary'>Contact</span> Us</h1>
            <p class="py-6">We provide the best products whole over the country. You can ask your quarries to us. We will reply you in one working day.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your message</span>
                </label>
                <input type="text" placeholder="password" class="input input-bordered" />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Contact;