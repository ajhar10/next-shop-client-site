import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            {/* Question 1 */}
            <div className='border border-info p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger mt-2'>Question:</span>How will you improve the performance of a React Application?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <p>
                    <span className='fs-5 '><u>improve the performance of a React Application-</u></span>
                    <ol type='I'>
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>
                    </ol>
                </p>

            </div>
            {/* Question 2 */}
            <div className='border border-info p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span>What are the different ways to manage a state in a React application?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <p>
                    <span className='fs-5 '><u>manage a state in a React application-</u></span>
                    There are four main types of state you need to properly manage in your React apps:
                    <ol type='I'>
                        <li>Local State</li>
                        <li>Global State</li>
                        <li>Server State</li>
                        <li>URL State</li>
                    </ol>
                </p>
            </div>

            {/* Question 3 */}
            <div className='border border-info p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span>How does prototypical inheritance work?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <p>
                    <span className='fs-5 '><u>Purpose of JWT-</u></span>
                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </p>

            </div>
            {/* Question 4 */}
            <div className='border border-info p-2 my-2'>
                <h3 className='text-info my-3'><span className='fs-3 text-danger'>Question:</span>What is a unit test? Why should write unit tests?</h3>
                <h3 className='text-primary mb-2'>Answer: </h3>
                <p>
                    <span className='fs-5 '><u>Unit Test-</u></span>
                    A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                </p>

                <p>
                    <span className='fs-5 '><u>Why should write unit tests-</u></span>
                    <ol type='I'>
                        <li>Any bugs are found easily and quicker</li>
                        <li>Unit testing saves time and money</li>
                        <li>Unit testing provides documentation</li>
                        <li>Unit testing improves code coverage </li>
                        <li>Unit testing reduces code complexity</li>
                    </ol>
                </p>
            </div>
            {/* Question 5 */}



        </div>
    );
};

export default Blogs;