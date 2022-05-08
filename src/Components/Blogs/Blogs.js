import aos from 'aos';
import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const Blogs = () => {

    aos.init();

    return (
        <div>
            <Header></Header>
            <div className='md:mx-12'>
                <h1 className='text-center text-4xl font-bold text-gray-600 uppercase my-16'>Some common question answer</h1>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="100" className='p-8 flex flex-col md:flex-row items-center gap-4 border'>
                    <div className='flex-1'>
                        <img src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" alt="" />
                   </div>
                    <div className='text-justify flex-1'>
                        <p className='text-2xl font-semibold text-gray-700 my-8'>Difference between JavaScript and Node.js</p>
                        <p className='text-gray-600'>Javascript is a popular programming language and it runs in any web browser with a good web browser. <br />
                            On the other hand, Node.js is an interpreter and environment for the JavaScript with some specific useful libraries which JS programming can be used separately. <br /> <br />
                            Javascript is mainly used for any client side activity for the web application. <br />
                            Node js is commonly used by some of the best IT companies providing software solutions for performing or accessing any non-blocking operation of operating system. <br /> <br />
                            JavaScript running any engine like JavaScript Core (Safari), Spider monkey (FireFox), V8 (Google Chrome). <br />
                            Node.js only runs in a V8 engine that is mainly used by Google Chrome. And, JS program which will be written with the help of Node.js library will always run in the V8 Engine.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="100" className='mt-16 p-8 flex flex-col md:flex-row items-center gap-4 border'>
                    <div className='text-justify flex-1'>
                        <p className='text-2xl font-semibold text-gray-700 my-8'>Differences between SQL and NoSQL databases</p>
                        <ul className='text-gray-600 list-disc l'>
                            <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                            <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <img src="https://tomaztsql.files.wordpress.com/2022/02/screenshot-2022-02-13-at-20.38.39.png?w=584" alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="100" className='mt-16 mb-32 p-8 flex flex-col md:flex-row items-center gap-4 border'>
                    <div className='flex-1'>
                        <img className='' src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/12/jwt-workflow.webp" alt="" />
                    </div>
                    <div className='text-justify flex-1'>
                        <p className='text-2xl font-semibold text-gray-700 my-8'>The purpose of JWT and it's working process</p>
                        <p className='text-gray-600'>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature. It's usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It's also a popular way to authenticate/authorize users in a microservice architecture. <br />
                            When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.

                            By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;