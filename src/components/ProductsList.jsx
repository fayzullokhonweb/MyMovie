import React from "react";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
function ProductsList({}) {
  return (
    <ul className="flex flex-col gap-y-7">
      <li className="hover:shadow-2xl hover:rounded-xl">
        <div className="card card-side bg-base-100 shadow-md">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="mb-auto">
              <h2 className="card-title text-2xl mb-2 ">
                Spider-Man: No Way Home (2021)
              </h2>
              <h2 className="text-base ">Worldwide gross: $2,923,706,026</h2>
              <h2 className="text-base ">Domestic gross: $785,221,649</h2>
              <h2 className="text-base">rating</h2>
            </div>
            <div className="card-actions ">
              <div>
                <a
                  href="https://t.me/fayzullokhonweb"
                  className="btn btn-primary  text-gray-50 "
                >
                  <span className="font-mono text-base">Watch</span>{" "}
                  <PiYoutubeLogoFill className="w-6 h-6" />
                </a>
              </div>

              <div>
                <button className="btn btn-primary  text-gray-50">
                  <span className="font-mono text-base">I saw</span>{" "}
                  <MdDeleteOutline className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="hover:shadow-2xl hover:rounded-xl">
        <div className="card card-side bg-base-100 shadow-md">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="mb-auto">
              <h2 className="card-title text-2xl mb-2 ">
                Spider-Man: No Way Home (2021)
              </h2>
              <h2 className="text-base ">Worldwide gross: $2,923,706,026</h2>
              <h2 className="text-base ">Domestic gross: $785,221,649</h2>
              <h2 className="text-base">rating</h2>
            </div>
            <div className="card-actions ">
              <div>
                <a
                  href="https://t.me/fayzullokhonweb"
                  className="btn btn-primary  text-gray-50 "
                >
                  <span className="font-mono text-base">Watch</span>{" "}
                  <PiYoutubeLogoFill className="w-6 h-6" />
                </a>
              </div>

              <div>
                <button className="btn btn-primary  text-gray-50">
                  <span className="font-mono text-base">I saw</span>{" "}
                  <MdDeleteOutline className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="hover:shadow-2xl hover:rounded-xl">
        <div className="card card-side bg-base-100 shadow-md">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="mb-auto">
              <h2 className="card-title text-2xl mb-2 ">
                Spider-Man: No Way Home (2021)
              </h2>
              <h2 className="text-base ">Worldwide gross: $2,923,706,026</h2>
              <h2 className="text-base ">Domestic gross: $785,221,649</h2>
              <h2 className="text-base">rating</h2>
            </div>
            <div className="card-actions ">
              <div>
                <a
                  href="https://t.me/fayzullokhonweb"
                  className="btn btn-primary  text-gray-50 "
                >
                  <span className="font-mono text-base">Watch</span>{" "}
                  <PiYoutubeLogoFill className="w-6 h-6" />
                </a>
              </div>

              <div>
                <button className="btn btn-primary  text-gray-50">
                  <span className="font-mono text-base">I saw</span>{" "}
                  <MdDeleteOutline className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="hover:shadow-2xl hover:rounded-xl">
        <div className="card card-side bg-base-100 shadow-md">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="mb-auto">
              <h2 className="card-title text-2xl mb-2 ">
                Spider-Man: No Way Home (2021)
              </h2>
              <h2 className="text-base ">Worldwide gross: $2,923,706,026</h2>
              <h2 className="text-base ">Domestic gross: $785,221,649</h2>
              <h2 className="text-base">rating</h2>
            </div>
            <div className="card-actions ">
              <div>
                <a
                  href="https://t.me/fayzullokhonweb"
                  className="btn btn-primary  text-gray-50 "
                >
                  <span className="font-mono text-base">Watch</span>{" "}
                  <PiYoutubeLogoFill className="w-6 h-6" />
                </a>
              </div>

              <div>
                <button className="btn btn-primary  text-gray-50">
                  <span className="font-mono text-base">I saw</span>{" "}
                  <MdDeleteOutline className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default ProductsList;
