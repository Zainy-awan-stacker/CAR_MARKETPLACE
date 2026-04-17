import React from "react";
import { blogs } from "../data";

function Blogs() {
  return (
    <section>
      <div className="display bg-primary px-10 py-10">
        <div className="gridy grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md shadow-lg shadow-sky-500/50 transition-transform duration-500 hover:scale-102"
            >
              {/* Animated background layer */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-sky-500 transition-all duration-800 group-hover:h-full z-0"></div>

              {/* Content wrapper (above bg) */}
              <div className="relative z-10 p-2 transition-colors duration-500 group-hover:text-white">
                {/* Image */}
                <div className="imagify bg-white p-3 rounded-md">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-md"
                  />
                </div>

                {/* Blog Detail */}
                <p className="category py-2">{blog.category}</p>
                <h5 className="title py-2 font-semibold">{blog.title}</h5>
                <p className="description py-2 hover:text-white">
                  {blog.description}
                </p>

                <button className="font-bold underline py-2">
                  Continue Reading
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
