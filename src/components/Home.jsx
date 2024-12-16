import React, { useEffect } from "react";
import rs1 from "../assets/glass.webp";
import rs2 from "../assets/newicebig.webp";
import rs3 from "../assets/lemo.webp";
import Nav from "./Nav";
import icon from "../assets/tea.jpg";
import End from "../components/End.jsx";

const Home = () => {
  return (
    <>
      <div class="relative">
        <div class="fixed top-0 left-0 right-0">
          <Nav />
        </div>
      </div>
      <div className=" flex mt-[100px]">
        <div className="ml-[250px] mt-[80px]">
          <img src={rs1} />
        </div>
        <div className="flex ml-[100px]  mt-[-50]">
          <h1 className=" mt-[250px] font-bold text-[50px]">A HEALTHY</h1>
          <p className=" mt-[255px] ml-5  font-thin text-[45px]">SIP!</p>
          <p className=" mt-[320px] ml-[-360px] font-thin text-[20px] flex">
            Ya! It’s cup of tea, let’s be fresh and cherish every moment in each
            sip. <br /> It’s refreshing burst and where there is tea, there is
            always freshness …
          </p>
        </div>
        <h3 className=" mt-[390px] ml-[-580px] font-medium text-[20px] flex">
          This page is under{" "}
        </h3>
        <h3 className=" mt-[390px] ml-[5px] font-bold text-[20px] text-yellow-600 stroke-black">
          Raghul{" "}
        </h3>
        <h3 className=" mt-[390px] ml-[5px] font-medium text-[20px] flex">
          Control
        </h3>
      </div>
      <div className=" h-[100px] w-[600px] flex   ml-[780px] mt-[-90px] ">
        <img
          src={rs1}
          className="border-2  rounded border-solid hover:cursor-pointer    "
        />
        <img
          src={rs2}
          className=" transition duration-0 hover:duration-150 border-2 rounded border-solid hover:cursor-pointer ml-3"
        />
        <img
          src={rs3}
          className="border-2 rounded border-solid hover:cursor-pointer ml-3"
        />
      </div>
      <div className="bg-[#e8e4fdfe] ">
        <div class="mx-auto" className=" flex justify-center mt-[100px]  ">
          <h1 className="font-bold text-[50px] text-black">WHAT</h1>
          <h1 className="text-[50px] font-thin">WE DO.</h1>
        </div>
        <div className="flex text-center justify-center">
          <p>
            It’s what we follow and start your teavolution with us to bring an{" "}
            <br /> inspiring cup of rarest tea experiences. We make you feel{" "}
            <br />
            morning wonders throughout the day. Its all about Exceptional <br />
            Aroma. Exceptional Tea!
          </p>
        </div>
      </div>
      <div className=" flex justify-center mt-[30px] ">
        <p className=" flex  font-light  text-[40px] ">
          {" "}
          <h1 className="  font-bold  text-[40px]">HOT AND </h1> COOL{" "}
        </p>
      </div>
      <div className="menu_1 flex justify-evenly mt-[50px] ">
        <div className="Milk_tea ">
          <p className=" flex  font-light  text-[30px] ">
            <h1 className=" font-bold  text-[30px]"> MILK</h1> TEA{" "}
          </p>
          <br />
          <p className=" flex   text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Bench Tea{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Masala Tea{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Ginger Tea{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px] items-center">
            {" "}
            <img className=" h-9 rounded-full" src={icon} alt="" /> Cardamom Tea{" "}
          </p>
        </div>
        <div className="Black_tea">
          <p className=" flex  font-light  text-[30px] ">
            <h1 className=" font-bold  text-[30px]"> BLACK </h1> TEA{" "}
          </p>
          <br />
          <p className=" flex   text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Lemon Tea{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Sulaimani
            Tea{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Ginger
            Lemon{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px] items-center">
            {" "}
            <img className=" h-9 rounded-full" src={icon} alt="" /> Lemon Mint{" "}
          </p>
        </div>
        <div className="ice_tea">
          <p className=" flex  font-light  text-[30px] ">
            <h1 className=" font-bold  text-[30px]"> ICE </h1> TEA{" "}
          </p>
          <br />
          <p className=" flex   text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Lemon{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Apple{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Lychee{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px] items-center">
            {" "}
            <img
              className=" h-9 rounded-full"
              src={icon}
              alt=""
            /> Pomegranate{" "}
          </p>
        </div>
        <div className="Coffee ">
          <p className=" flex  font-light  text-[30px] ">
            <h1 className=" font-bold  text-[30px]"> COFFEE</h1>{" "}
          </p>
          <br />
          <p className=" flex   text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Filter
            Coffee{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Cold Coffee{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Chocolate
            Coffee{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px] items-center">
            {" "}
            <img className=" h-9 rounded-full" src={icon} alt="" /> Suku Coffee{" "}
          </p>
        </div>
        <div className="Milk Specialities">
          <p className=" flex  font-light  text-[30px] ">
            <h1 className=" font-bold  text-[30px]"> Milk Specialities </h1>{" "}
          </p>
          <br />
          <p className=" flex   text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Hot Badham{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img className=" h-10 rounded-full" src={icon} alt="" /> Hot
            Chocolate{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px]">
            {" "}
            <img
              className=" h-10 rounded-full"
              src={icon}
              alt=""
            /> Horlicks{" "}
          </p>{" "}
          <br />
          <p className=" flex  text-[25px] items-center">
            {" "}
            <img className=" h-9 rounded-full" src={icon} alt="" /> Boost{" "}
          </p>
        </div>
      </div>{" "}
      <div className="h-[70px] w-[100%]"></div>
      <br />
      <div className=" flex  ">
        <div className=" flex  " class="container  mx-auto ">
          <div class="mx-auto">
            <div class="max-w-md  px-8 py-6 bg-[#e8e4fdfe] rounded-lg shadow-lg">
              <h2 class="text-2xl font-semibold text-zinc-950 mb-4"></h2>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                class="left"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="41cba34d-6636-4790-a0ed-1fdefd53ad47"
                />
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="name">
                    Your Name
                  </label>
                  <input
                    class="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your name"
                    type="text"
                    name="username"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="email">
                    Your Mobile Number
                  </label>
                  <input
                    class="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your Mobile number"
                    name="mobile"
                    id="mobile"
                    type="number"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="message">
                    Your Review
                  </label>
                  <textarea
                    class="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your Review"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
                <button
                  class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
              
            </div>
            <div className="end_box flex mt-[-60px]  justify-center w-[100%] h-auto  ">
              <End />{" "}
              <h2 className=" flex font-medium mt-3">THIS PAGE IS UNDER </h2>
              <h2 className=" flex font-medium ml-2 mt-3 text-emerald-300 font">
                RAGHUL
              </h2>{" "}
              <h2 className=" flex font-medium ml-2 mt-3 "> Control</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
