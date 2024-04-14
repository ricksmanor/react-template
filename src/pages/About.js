import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et risus consequat, a placerat risus hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras pulvinar urna magna, non laoreet neque rhoncus eget. Quisque eget tellus vel turpis sodales venenatis. Proin eu eros ipsum. Nulla facilisi. Aliquam erat volutpat. Nam posuere elit at libero pretium, id aliquet libero ultricies. Vestibulum vulputate vehicula turpis sit amet iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed congue felis non urna auctor, nec tincidunt odio facilisis.
        </p>
        <p className="mb-8">
          Duis faucibus orci in nisi molestie, id convallis enim sodales. Ut vitae purus in nunc vehicula tristique. Pellentesque ut fringilla tortor. Sed posuere quam vel turpis vehicula, sed laoreet purus volutpat. Mauris efficitur libero id urna mattis, et cursus tortor laoreet. Integer ut nunc eu justo vehicula commodo. Nam scelerisque velit sit amet dui fermentum, vitae fermentum odio feugiat. Maecenas tristique purus sit amet sapien fermentum consequat. Mauris consectetur sapien at aliquet condimentum. Mauris ac lobortis mauris. Duis rhoncus magna et lectus blandit, id dictum enim fermentum.
        </p>
        <p>
          Quisque ultricies, enim nec molestie viverra, ipsum felis lacinia arcu, at vehicula tortor augue quis est. Nullam dapibus interdum orci nec bibendum. Aenean vel velit in purus aliquam dictum. Proin at ligula in turpis suscipit condimentum. Nam sit amet augue a ante cursus ultricies. Duis ut sem ut purus eleifend ultrices. Cras viverra, est eu interdum blandit, odio lectus fringilla nisl, non faucibus justo justo id libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </Layout>
  );
};

export default About;
