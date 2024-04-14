import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header';


function Home() {
  return (
    <Layout>
      <div>
        <Header />
        <img src="https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full object-cover" style={{ height: '400px' }} />

        {/* Main content */}
        <main className="container mx-auto px-4 py-8">
          
          <section className="containers mb-8">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quaerat quod ducimus laboriosam, incidunt possimus consequatur iste, corporis doloribus repellat iusto asperiores, beatae voluptatem obcaecati? Officia, velit nemo! Maxime, esse.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quod nihil dolorem quas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Meet Us</h2>
            <div className="bg-white p-4 text-center rounded-3xl">
                <img src="https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1" className="mx-auto h-auto rounded-3xl object-cover" />
                <h3 className="text-lg font-semibold mt-2">The Team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Add testimonial cards here */}
              <div className="bg-white p-4 rounded-3xl">
                <h3 className="text-lg font-semibold">lorem</h3>
                <p>"Lorem ipsum"</p>
              </div>
              <div className="bg-white p-4 rounded-3xl">
                <h3 className="text-lg font-semibold">lorem</h3>
                <p>"Lorem ipsum"</p>
              </div>
              <div className="bg-white p-4 rounded-3xl">
                <h3 className="text-lg font-semibold">lorem</h3>
                <p>"Lorem ipsum"</p>
              </div>
            </div>
          </section>

          <section className='containers'>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>If you have any questions, feel free to contact us:</p>
            <p>Phone: 01234-567890</p>
            <p>Email: info@Lorem ipsum.com</p>
          </section>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </main>
      </div>
    </Layout>
  )
}

export default Home