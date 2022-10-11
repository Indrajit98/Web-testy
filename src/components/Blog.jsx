import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto sm:w-1/2">
      <div className="sm:text-xl">
        <h1 className="text-2xl text-slate-600 font-semibold">
          1. What is purpose of react router
        </h1>
        <p className="text-slate-800 py-2">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL
        </p>
        <h1 className="text-2xl text-slate-600 font-semibold">
          2. How does context api work
        </h1>
        <p className="text-slate-800 py-2">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
        <h1 className="text-2xl text-slate-600 font-semibold">
          3. What is useRef?
        </h1>
        <p className="text-slate-800 py-2">
          useRef() hook helps us to access DOM nodes directly. In React,
          data-flow is unidirectional. If a child component in React, needs to
          update something in parent component, the parent needs to pass a
          reference to child. Child then uses the reference for updating the
          parent.
        </p>
      </div>
    </div>
  );
};

export default Blog;
