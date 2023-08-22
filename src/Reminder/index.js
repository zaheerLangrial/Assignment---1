import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Reminder = () => {
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
          <button className="text-gray-700 text-medium font-bold flex justify-center items-center">
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
      </div>
      <div className="pl-24  rounded-t-md ">
        <div className="p-1 mt-7 rounded-t-md bg-gray-200 ">
          <div className="bg-white flex space-x-4 items-center relative rounded-t-md">
            <div className="p-5">
              <h1 className="font-bold">Submit my resume</h1>
              <h1>Send my resume to DigitalTolk</h1>
            </div>
            <div className="pr-5">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.4444 52H11.5556C5.17111 52 0 46.8289 0 40.4444V11.5556C0 5.17111 5.17111 0 11.5556 0H40.4444C46.8289 0 52 5.17111 52 11.5556V40.4444C52 46.8289 46.8289 52 40.4444 52Z"
                  fill="#FABB18"
                />
              </svg>
              <svg
                className=" absolute top-8 right-8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-3 text-xs p-1 mr-4">
            <a  href="#">Skip</a>
            <a className=" ml-8" href="#">Remind me later</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reminder;
