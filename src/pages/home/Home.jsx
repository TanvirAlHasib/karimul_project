// import React from 'react'

import { useState } from "react";

export default function Home() {
  const [bucket] = useState([
    "https://images.othoba.com/images/thumbs/0293887_super-bucket-4l-black-tel_300.jpeg","https://images.othoba.com/images/thumbs/0579980_drum-bucket-100l-royal-blue_300.jpeg",
    "https://images.othoba.com/images/thumbs/0293959_classic-bucket-5l-red-with-lid_300.jpeg", "https://images.othoba.com/images/thumbs/0646290_drum-bucket-with-lid-70l-royal-blue_300.webp",
    "https://images.othoba.com/images/thumbs/0581933_two-color-flower-bucket-5l-assorted_300.jpeg", "https://images.othoba.com/images/thumbs/0578521_multipurpose-container-7l-printed_300.jpeg",
    "https://images.othoba.com/images/thumbs/0293952_classic-bucket-16l-red-with-lid_300.jpeg", "https://images.othoba.com/images/thumbs/0343226_design-bucket-10-liters-red_300.jpeg",
    "https://images.othoba.com/images/thumbs/0346529_super-bucket-plastic-handle-red-15-liters_300.jpeg","https://images.othoba.com/images/thumbs/0293761_super-bucket-22l-black-tel_300.jpeg",
    "https://images.othoba.com/images/thumbs/0581933_two-color-flower-bucket-5l-assorted_300.jpeg", "https://images.othoba.com/images/thumbs/0293887_super-bucket-4l-black-tel_300.jpeg"
  ])
  return (
    <>
      <section className="w-[80%] mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 gap-x-20">
          {
            bucket.map((index) => (
              <div className="card bg-base-100 w-96 shadow-xl" key={index}>
                <figure>
                  <img
                    src={index}
                    alt="বালতি"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">বালতি 😄</h2>
                  <p>if you want to take shower then buy a বালতি</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now 🛒</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}
