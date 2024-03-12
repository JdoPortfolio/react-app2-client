import { SharedVariablesProvider } from "../context/SharedVariableContextFile.jsx";
import * as React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function ProfileDashboard() {
  return (
    <div className="flex flex-col items-center">
    <Navbar />
      <div className="self-stretch w-full bg-stone-50 min-h-[92px] max-md:max-w-full" />
      <div className="px-5 mt-24 w-full max-w-[1237px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9529e76937885282502bfedb4ab344e6aaf12dffb683c786996d3ece5c862223?apiKey=319352577b174a1ea58e2124bae2c0e0&"
              className="w-full border-rose-500 border-solid shadow-sm aspect-[0.97] border-[10px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-10 text-base font-bold text-center whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3649e3f9d85c75ad0bcbbc6a041c20795aea19aaa92f67069dd309cf659f5134?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="self-center max-w-full aspect-[0.93] w-[102px]"
              />
              <div className="flex flex-col items-center px-14 py-3.5 mt-36 bg-white rounded-3xl border-2 border-red-400 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <div className="self-stretch bg-clip-text">
                  Percentage of compatibility
                </div>
                <div className="mt-2.5 text-4xl text-rose-500">98%</div>
                <div className="justify-center px-3.5 py-1.5 mt-2.5 border-2 border-solid border-zinc-300 rounded-[100px] text-zinc-300">
                  Perfect Match!
                </div>
              </div>
              <div className="justify-center items-center px-16 py-16 mt-6 bg-white rounded-3xl border-2 border-red-400 border-solid shadow-sm text-neutral-400 max-md:px-5">
                Bark at them!{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2de4936e9cee74cdd46f2982d43a4b50ba0edb33c92145276c04cba18b2611d3?apiKey=319352577b174a1ea58e2124bae2c0e0&"
              className="w-full border-rose-500 border-solid shadow-sm aspect-[0.97] border-[10px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 text-xs font-bold text-center text-black">
        Message was sent!!
      </div>
      <div className="justify-center px-14 py-5 mt-6 text-xl font-bold text-center text-white shadow-sm rounded-[90px] max-md:px-5">
        Get Instant Access
      </div>
      <div className="flex flex-col items-center self-stretch px-16 pt-3.5 pb-7 mt-12 w-full bg-zinc-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&"
          className="max-w-full aspect-[11.11] w-[311px]"
        />
      </div>
      <Footer />
    </div>
  );
}
export default ProfileDashboard;