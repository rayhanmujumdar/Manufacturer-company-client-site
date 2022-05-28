import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Blog = () => {
  return (
    <div>
      <PageTitle title="Blog"></PageTitle>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          background:
            "url(http://demo2.themelexus.com/allegro/wp-content/uploads/2015/01/bg-products.jpg)",
        }}
      >
        <PageTitle title="MyPortfolio"></PageTitle>
        <div className="md:container md:mx-auto mx-4">
          <h1 className="mt-2 text-4xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
            Answer the Question
          </h1>
          <div className="max-w-3xl text-left mx-auto my-4">
            <h1 className="text-2xl font-semibold">
              1.How will you improve the performance of a React Application?
            </h1>
            <div>
              <span className="text-xl text-green-500">Answer:</span>
              <span>
                By default, React includes many helpful warnings. These warnings
                are very useful in development. However, they make React larger
                and slower so you should make sure to use the production version
                when you deploy the app.
                <p>------------------------------------------------------</p>
              </span>
              <ul>
                <li>1.Keeping component state local where necessary.</li>
                <li>
                  2.Memoizing React components to prevent unnecessary
                  re-renders.
                </li>
                <li>3.Code-splitting in React using dynamic import()</li>
                <li>4.Windowing or list virtualization in React.</li>
                <li>5.Lazy loading images in React.</li>
              </ul>
            </div>
          </div>
          <div className="max-w-3xl text-left mx-auto my-4">
            <h1 className="text-2xl font-semibold">
              2.What are the different ways to manage a state in a React
              application?
            </h1>
            <h3 className="text-2xl font-bold">
              The Four Kinds of React State to Manage
            </h3>
            <p>
              <span className="text-xl text-green-500">Answer:</span>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
              main types of state you need to properly manage in your React
              apps:
            </p>
            <ul>
              <li>1.Local state</li>
              <li>2.Global state</li>
              <li>3.Server state</li>
              <li>4.URL state</li>
            </ul>
          </div>
          <div className="max-w-3xl text-left mx-auto my-4">
            <h1 className="text-2xl font-semibold">
              3.How does prototypical inheritance work?
            </h1>
            <p>
              <span className="text-green-500">Answer:</span> The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object
            </p>
          </div>
          <div className="max-w-3xl text-left mx-auto my-4">
            <h1 className="text-2xl font-semibold">
              5.You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h1>
            <p><span className="text-green-500">Answer: </span>
               If I implement a search button and i find to a product name by search i use to javascript filter.
              This method accepts 2 parameters,1.callback,2.index.
              The filter() method creates a new array with all elements that pass the test implemented by the provided function.
              if i anything search javascript filter method test my search text and return search value.
            </p>
          </div>
          <div className="max-w-3xl text-left mx-auto my-4">
            <h1 className="text-2xl font-semibold">
              5.What is a unit test? Why should write unit tests?
            </h1>
            <p>
              <span className="text-green-500">Answer:</span>
              Unit testing involves testing individual components of the
              software program or application. The main purpose behind this is
              to check that all the individual parts are working as intended. A
              unit is known as the smallest possible component of software that
              can be tested. Generally, it has a few inputs and a single output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
