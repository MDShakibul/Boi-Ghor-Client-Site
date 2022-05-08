import React from "react";

const Blog = () => {
  return (
    <div className="ps-3 mt-2">
      <h5>Question 1: Difference between Javascript and NodeJS</h5>
      <h5>Javascript</h5>
      <ul>
        <li>Javascript is a programming language.</li>
        <li>Javascript can only be run in the browsers.</li>
        <li>It is basically used on the client-side.</li>
        <li>Javascript is used in frontend development</li>
        <li>Capable to add HTML and DOM</li>
      </ul>

      <h5>NodeJS</h5>
      <ul>
        <li>NodeJS is a Javascript runtime environment.</li>
        <li>
          We can run Javascript outside the browser with the help of NodeJS
        </li>
        <li>It is mostly used on the server-sid</li>
        <li>Nodejs is used in server-side development.</li>
        <li>Dose not capable to add HTML and DOM.</li>
      </ul>

      <h5>Question 2: Difference between SQL and noSQL</h5>
      <h5>SQL</h5>
      <ul>
        <li>Databases have fixed or static schema.</li>
        <li>Relational database management system</li>
        <li>SQL databases are table-based</li>
        <li>SQL databases are vertically scalable</li>
        <li>SQL databases are better for multi-row transactions</li>
      </ul>

      <h5>noSQL</h5>
      <ul>
        <li>Databases have dynamic schema.</li>
        <li>Non-relational database system.</li>
        <li>NoSQL databases are document</li>
        <li>NoSQL databases are horizontally scalable</li>
        <li>NoSQL is better for unstructured data like documents or JSON</li>
      </ul>
      <h5>Question 3: Purpose of JWT and how does it work</h5>
      <p>
        <strong>Ans: </strong>JWT means JSON Web Token. It use for security
        purpose. JWT is becoming more popular for securing APIs. JWT create a a
        token for security purpose. This token made up of three parts, separated
        by dots (.), and serialized using base64. If we decoded this token we
        get
        <li>header</li>
        <li>payload</li>
        <li>signature</li>
        when any user login then create a token. It have referesh token, access
        token. If access token valid user can browse fluienly. If access token
        invalid user can not browse.
      </p>
    </div>
  );
};

export default Blog;
