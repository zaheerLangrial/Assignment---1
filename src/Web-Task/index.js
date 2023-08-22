import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const WebTask = () => {
  const [isMudalOpen, setIsMudalOpen] = useState(false);

  return (
    <div className="w-full flex space-x-36">
      {/* Button Div */}
      <div className=" w-74 relative h-screen ">
        <button className="mt-6 flex space-x-3 px-24 w-full py-3 bg-black  font-semibold text-white rounded-r-full text-lg items-center border ">
          <span>
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.125 14.2909H5.625C5.32663 14.2909 5.04048 14.4115 4.8295 14.6264C4.61853 14.8412 4.5 15.1325 4.5 15.4363C4.5 15.7401 4.61853 16.0315 4.8295 16.2463C5.04048 16.4611 5.32663 16.5818 5.625 16.5818H10.125C10.4234 16.5818 10.7095 16.4611 10.9205 16.2463C11.1315 16.0315 11.25 15.7401 11.25 15.4363C11.25 15.1325 11.1315 14.8412 10.9205 14.6264C10.7095 14.4115 10.4234 14.2909 10.125 14.2909ZM14.625 2.83632H13.2975C13.0654 2.16789 12.6359 1.58892 12.0679 1.17878C11.5 0.768635 10.8213 0.547403 10.125 0.54541H7.875C7.17869 0.547403 6.50002 0.768635 5.93205 1.17878C5.36408 1.58892 4.9346 2.16789 4.7025 2.83632H3.375C2.47989 2.83632 1.62145 3.19836 0.988515 3.84281C0.355579 4.48725 0 5.3613 0 6.27268V20.0181C0 20.9295 0.355579 21.8036 0.988515 22.448C1.62145 23.0925 2.47989 23.4545 3.375 23.4545H14.625C15.5201 23.4545 16.3786 23.0925 17.0115 22.448C17.6444 21.8036 18 20.9295 18 20.0181V6.27268C18 5.3613 17.6444 4.48725 17.0115 3.84281C16.3786 3.19836 15.5201 2.83632 14.625 2.83632ZM6.75 3.98177C6.75 3.67798 6.86853 3.38663 7.0795 3.17182C7.29048 2.957 7.57663 2.83632 7.875 2.83632H10.125C10.4234 2.83632 10.7095 2.957 10.9205 3.17182C11.1315 3.38663 11.25 3.67798 11.25 3.98177V5.12723H6.75V3.98177ZM15.75 20.0181C15.75 20.3219 15.6315 20.6133 15.4205 20.8281C15.2095 21.0429 14.9234 21.1636 14.625 21.1636H3.375C3.07663 21.1636 2.79048 21.0429 2.5795 20.8281C2.36853 20.6133 2.25 20.3219 2.25 20.0181V6.27268C2.25 5.96889 2.36853 5.67754 2.5795 5.46272C2.79048 5.24791 3.07663 5.12723 3.375 5.12723H4.5V6.27268C4.5 6.57648 4.61853 6.86783 4.8295 7.08264C5.04048 7.29746 5.32663 7.41814 5.625 7.41814H12.375C12.6734 7.41814 12.9595 7.29746 13.1705 7.08264C13.3815 6.86783 13.5 6.57648 13.5 6.27268V5.12723H14.625C14.9234 5.12723 15.2095 5.24791 15.4205 5.46272C15.6315 5.67754 15.75 5.96889 15.75 6.27268V20.0181ZM12.375 9.70905H5.625C5.32663 9.70905 5.04048 9.82973 4.8295 10.0445C4.61853 10.2594 4.5 10.5507 4.5 10.8545C4.5 11.1583 4.61853 11.4496 4.8295 11.6645C5.04048 11.8793 5.32663 12 5.625 12H12.375C12.6734 12 12.9595 11.8793 13.1705 11.6645C13.3815 11.4496 13.5 11.1583 13.5 10.8545C13.5 10.5507 13.3815 10.2594 13.1705 10.0445C12.9595 9.82973 12.6734 9.70905 12.375 9.70905Z"
                fill="white"
                className="hover:fill-slate-50 "
              />
            </svg>
          </span>
          <span>Task</span>
        </button>
        <Link to={"/location"}>
          <button className="flex space-x-3 px-24 w-full mt-5 py-3  font-semibold bg-transparent text-black rounded-r-full text-lg items-center border ">
            <span>
              <svg
                width="18"
                height="24"
                viewBox="0 0 18 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.545471C6.61305 0.545471 4.32387 1.51092 2.63604 3.22943C0.948212 4.94794 0 7.27874 0 9.70908C0 15.8945 7.93125 22.8818 8.26875 23.1796C8.47252 23.357 8.73185 23.4546 9 23.4546C9.26815 23.4546 9.52748 23.357 9.73125 23.1796C10.125 22.8818 18 15.8945 18 9.70908C18 7.27874 17.0518 4.94794 15.364 3.22943C13.6761 1.51092 11.3869 0.545471 9 0.545471ZM9 20.7627C6.60375 18.4718 2.25 13.5349 2.25 9.70908C2.25 7.88632 2.96116 6.13822 4.22703 4.84934C5.4929 3.56046 7.20979 2.83637 9 2.83637C10.7902 2.83637 12.5071 3.56046 13.773 4.84934C15.0388 6.13822 15.75 7.88632 15.75 9.70908C15.75 13.5349 11.3962 18.4832 9 20.7627ZM9 5.12727C8.10998 5.12727 7.23996 5.39599 6.49993 5.89945C5.75991 6.4029 5.18314 7.11848 4.84254 7.9557C4.50195 8.79291 4.41283 9.71416 4.58647 10.6029C4.7601 11.4917 5.18868 12.3081 5.81802 12.9489C6.44736 13.5897 7.24918 14.0261 8.12209 14.2028C8.99501 14.3796 9.89981 14.2889 10.7221 13.9421C11.5443 13.5953 12.2471 13.0081 12.7416 12.2546C13.2361 11.5011 13.5 10.6153 13.5 9.70908C13.5 8.49391 13.0259 7.32851 12.182 6.46925C11.3381 5.61 10.1935 5.12727 9 5.12727ZM9 12C8.55499 12 8.11998 11.8656 7.74997 11.6139C7.37996 11.3622 7.09157 11.0044 6.92127 10.5858C6.75097 10.1672 6.70642 9.70654 6.79323 9.26215C6.88005 8.81775 7.09434 8.40955 7.40901 8.08917C7.72368 7.76878 8.12459 7.55059 8.56105 7.46219C8.9975 7.3738 9.4499 7.41917 9.86104 7.59256C10.2722 7.76595 10.6236 8.05958 10.8708 8.43632C11.118 8.81306 11.25 9.25598 11.25 9.70908C11.25 10.3167 11.0129 10.8994 10.591 11.329C10.169 11.7586 9.59674 12 9 12Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>Location</span>
          </button>
        </Link>
        <Link to={"/"}>
          <button className="flex space-x-3 px-24 w-full absolute bottom-10 mt-5 py-3 bg-transparent  font-semibold bg-black text-black rounded-r-full text-lg items-center border ">
            <span>
              <svg
                width="18"
                height="24"
                viewBox="0 0 18 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.545471C6.61305 0.545471 4.32387 1.51092 2.63604 3.22943C0.948212 4.94794 0 7.27874 0 9.70908C0 15.8945 7.93125 22.8818 8.26875 23.1796C8.47252 23.357 8.73185 23.4546 9 23.4546C9.26815 23.4546 9.52748 23.357 9.73125 23.1796C10.125 22.8818 18 15.8945 18 9.70908C18 7.27874 17.0518 4.94794 15.364 3.22943C13.6761 1.51092 11.3869 0.545471 9 0.545471ZM9 20.7627C6.60375 18.4718 2.25 13.5349 2.25 9.70908C2.25 7.88632 2.96116 6.13822 4.22703 4.84934C5.4929 3.56046 7.20979 2.83637 9 2.83637C10.7902 2.83637 12.5071 3.56046 13.773 4.84934C15.0388 6.13822 15.75 7.88632 15.75 9.70908C15.75 13.5349 11.3962 18.4832 9 20.7627ZM9 5.12727C8.10998 5.12727 7.23996 5.39599 6.49993 5.89945C5.75991 6.4029 5.18314 7.11848 4.84254 7.9557C4.50195 8.79291 4.41283 9.71416 4.58647 10.6029C4.7601 11.4917 5.18868 12.3081 5.81802 12.9489C6.44736 13.5897 7.24918 14.0261 8.12209 14.2028C8.99501 14.3796 9.89981 14.2889 10.7221 13.9421C11.5443 13.5953 12.2471 13.0081 12.7416 12.2546C13.2361 11.5011 13.5 10.6153 13.5 9.70908C13.5 8.49391 13.0259 7.32851 12.182 6.46925C11.3381 5.61 10.1935 5.12727 9 5.12727ZM9 12C8.55499 12 8.11998 11.8656 7.74997 11.6139C7.37996 11.3622 7.09157 11.0044 6.92127 10.5858C6.75097 10.1672 6.70642 9.70654 6.79323 9.26215C6.88005 8.81775 7.09434 8.40955 7.40901 8.08917C7.72368 7.76878 8.12459 7.55059 8.56105 7.46219C8.9975 7.3738 9.4499 7.41917 9.86104 7.59256C10.2722 7.76595 10.6236 8.05958 10.8708 8.43632C11.118 8.81306 11.25 9.25598 11.25 9.70908C11.25 10.3167 11.0129 10.8994 10.591 11.329C10.169 11.7586 9.59674 12 9 12Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>Logout</span>
          </button>
        </Link>
      </div>
      {/* Tasks Details Div */}
      <div className="mt-7">
        <div>
          <button
            onClick={() => setIsMudalOpen(true)}
            className="text-gray-700 text-medium font-bold flex justify-center items-center"
          >
            + Add new task
          </button>
          <h1 className="font-bold text-medium text-gray-700 mt-6 mb-3">
            Incomplete
          </h1>
          <div>
            <div className="flex justify-normal items-center">
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="5"
                    fill="url(#paint0_linear_8_1349)"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="5"
                    stroke="#DADADA"
                    stroke-width="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8_1349"
                      x1="12"
                      y1="0"
                      x2="12"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FCFCFC" />
                      <stop offset="1" stop-color="#F8F8F8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="ml-3 text-gray-700 font-normal">
                Submit my resume
              </span>
            </div>
            <div>
              <span className=" text-xs pl-10">⏰ Today, 17.00</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1349)"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1349"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-700 font-normal">
              Complete the test
            </span>
          </div>
          <div>
            <span className=" text-xs pl-10">⏰ Tomorrow, 10.00</span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1349)"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1349"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-700 font-normal">
              Meeting with Jack
            </span>
          </div>
          <div>
            <span className=" text-xs pl-10">⏰ 24 Feb, 15.00</span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1349)"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1349"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-700 font-normal">
              Buy a chocolate for Mom
            </span>
          </div>
          <div>
            <span className=" text-xs pl-10">⏰ 24 Feb, 11.00</span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1349)"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1349"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-700 font-normal">
              Facetime with Dad
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-medium text-gray-700 mt-5 mb-3">
            Completed
          </h1>
          <div>
            <div className="flex justify-normal items-center">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="5"
                    fill="url(#paint0_linear_8_1389)"
                  />
                  <path
                    d="M8 13L10.9167 16L16 8"
                    stroke="#575767"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="5"
                    stroke="#DADADA"
                    stroke-width="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8_1389"
                      x1="12"
                      y1="0"
                      x2="12"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FCFCFC" />
                      <stop offset="1" stop-color="#F8F8F8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="ml-3 text-gray-400 font-normal">
                Respond to Jane email
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1389)"
                />
                <path
                  d="M8 13L10.9167 16L16 8"
                  stroke="#575767"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1389"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-400  font-normal">
              Rechedule weekly meeting
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1389)"
                />
                <path
                  d="M8 13L10.9167 16L16 8"
                  stroke="#575767"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1389"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-400  font-normal">
              Service my bike
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1389)"
                />
                <path
                  d="M8 13L10.9167 16L16 8"
                  stroke="#575767"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1389"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-400  font-normal">
              Recheck the agreement document
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-normal items-center">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  fill="url(#paint0_linear_8_1389)"
                />
                <path
                  d="M8 13L10.9167 16L16 8"
                  stroke="#575767"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="5"
                  stroke="#DADADA"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_1389"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCFCFC" />
                    <stop offset="1" stop-color="#F8F8F8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ml-3 text-gray-400  font-normal">
              Check the latest on Community
            </span>
          </div>
        </div>
        <AddTask isMudalOpen={isMudalOpen} setIsMudalOpen={setIsMudalOpen} />
      </div>
    </div>
  );
};
export default WebTask;

const AddTask = (props) => {
  const { isMudalOpen, setIsMudalOpen } = props;
  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class={`fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-50 ${
        isMudalOpen === false && "hidden"
      }`}
    >
      <div class="relative w-full max-w-xl max-h-full ">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="px-8 py-3 lg:px-8">
            <h3 class="mb-8 text-xl font-medium text-gray-900 dark:text-white">
              New Task
            </h3>
            <form class="space-y-2 pl-7" action="#">
              <div className="">
                <div className="flex space-x-1">
                  <span className="pl-5">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0282 7H5.02819C4.76297 7 4.50862 7.10536 4.32108 7.29289C4.13354 7.48043 4.02819 7.73478 4.02819 8C4.02819 8.26522 4.13354 8.51957 4.32108 8.70711C4.50862 8.89464 4.76297 9 5.02819 9H15.0282C15.2934 9 15.5478 8.89464 15.7353 8.70711C15.9228 8.51957 16.0282 8.26522 16.0282 8C16.0282 7.73478 15.9228 7.48043 15.7353 7.29289C15.5478 7.10536 15.2934 7 15.0282 7ZM11.0282 11H5.02819C4.76297 11 4.50862 11.1054 4.32108 11.2929C4.13354 11.4804 4.02819 11.7348 4.02819 12C4.02819 12.2652 4.13354 12.5196 4.32108 12.7071C4.50862 12.8946 4.76297 13 5.02819 13H11.0282C11.2934 13 11.5478 12.8946 11.7353 12.7071C11.9228 12.5196 12.0282 12.2652 12.0282 12C12.0282 11.7348 11.9228 11.4804 11.7353 11.2929C11.5478 11.1054 11.2934 11 11.0282 11ZM10.0282 0C8.71497 0 7.41461 0.258658 6.20135 0.761205C4.9881 1.26375 3.8857 2.00035 2.95712 2.92893C1.08175 4.8043 0.0281864 7.34784 0.0281864 10C0.0194442 12.3091 0.818979 14.5485 2.28819 16.33L0.288186 18.33C0.149429 18.4706 0.0554325 18.6492 0.0180584 18.8432C-0.0193158 19.0372 0.0016069 19.2379 0.0781863 19.42C0.161244 19.5999 0.29589 19.7511 0.465033 19.8544C0.634176 19.9577 0.830187 20.0083 1.02819 20H10.0282C12.6804 20 15.2239 18.9464 17.0993 17.0711C18.9746 15.1957 20.0282 12.6522 20.0282 10C20.0282 7.34784 18.9746 4.8043 17.0993 2.92893C15.2239 1.05357 12.6804 0 10.0282 0ZM10.0282 18H3.43819L4.36819 17.07C4.55444 16.8826 4.65898 16.6292 4.65898 16.365C4.65898 16.1008 4.55444 15.8474 4.36819 15.66C3.05877 14.352 2.24336 12.6305 2.06088 10.7888C1.87839 8.94705 2.34013 7.09901 3.36741 5.55952C4.3947 4.02004 5.92398 2.88436 7.6947 2.34597C9.46543 1.80759 11.368 1.8998 13.0784 2.60691C14.7888 3.31402 16.201 4.59227 17.0746 6.22389C17.9482 7.85551 18.2291 9.73954 17.8693 11.555C17.5096 13.3705 16.5315 15.005 15.1017 16.1802C13.672 17.3554 11.8789 17.9985 10.0282 18Z"
                        fill="#575767"
                      />
                    </svg>
                  </span>
                  <span>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Summary
                    </label>
                  </span>
                </div>
                <input
                  type="text"
                  name="text"
                  id="text"
                  class="bg-white border border-gray-300 border-l-transparent border-r-transparent border-t-transparent text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                  placeholder=""
                  required
                />
              </div>
              <div>
                <div className="flex space-x-1">
                  <span className="pl-5">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 16H9C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16ZM19 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H19C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8ZM19 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12ZM19 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H19C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4Z"
                        fill="#575767"
                      />
                    </svg>
                  </span>
                  <span>
                    <label
                      for="text"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                  </span>
                </div>
                <input
                  type="text"
                  name="text"
                  id="text"
                  class=" mt-6 bg-white border border-gray-300 border-l-transparent border-r-transparent border-t-transparent text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                  placeholder=""
                  required
                />
              </div>
              <div>
                <div className="flex space-x-1">
                  <span className="pl-5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V9.42L6.9 10.63C6.70736 10.7392 6.5564 10.9092 6.47078 11.1134C6.38517 11.3176 6.36975 11.5444 6.42695 11.7583C6.48414 11.9722 6.61072 12.1611 6.78682 12.2953C6.96292 12.4296 7.17859 12.5015 7.4 12.5C7.57518 12.5012 7.7476 12.4564 7.9 12.37L10.5 10.87L10.59 10.78L10.75 10.65C10.7891 10.6005 10.8226 10.5468 10.85 10.49C10.8826 10.4363 10.9094 10.3793 10.93 10.32C10.9572 10.2564 10.9741 10.1889 10.98 10.12L11 10V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4Z"
                        fill="#575767"
                      />
                    </svg>
                  </span>
                  <span>
                    <label
                      for="text"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                  </span>
                </div>
                <input
                  type="text"
                  name="text"
                  id="text"
                  class=" bg-white border border-gray-300 border-l-transparent border-r-transparent border-t-transparent text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                  placeholder=""
                  required
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  onClick={() => setIsMudalOpen(false)}
                  type="submit"
                  class=" w-52 text-black bg-transparent focus:ring-4 hover:bg-black hover:text-white font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800 border"
                >
                  Save
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsMudalOpen(false)}
                  type="button"
                  class="w-52  text-black bg-transparent focus:ring-4 hover:bg-black hover:text-white font-medium rounded-full text-sm px-5 py-2.5 text-centerdark:focus:ring-blue-800 border"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
