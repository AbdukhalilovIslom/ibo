import btns from "../assets/img/btns.png";
import controller from "../assets/img/controller.png";

export default function Hero() {
  return (
    <div className="bg-[url('../../public/hero.png')] bg-center bg-cover sm:h-screen rounded-b-[50px] max-sm:rounded-b-xl flex justify-center max-sm:h-[250px]">
      <div className="sm:absolute left-25 top-70 sm:w-[510px] mx-auto max-sm:flex flex-col justify-center items-center max-sm:w-44">
        <h1 className="text-[58px] text-secondary font-extrabold max-sm:text-xl">
          PlayStation Plus
        </h1>
        <p className="text-xl text-white mb-5 max-sm:text-[7px] max-sm:mb-1 max-sm:text-center">
          Подписывайтесь на PlayStation Plus и получайте доступ к играм по
          лучшим ценам!
        </p>
        <button className="bg-secondary hover:bg-yellow-200 text-[#25328F] font-bold rounded-xl p-5 cursor-pointer max-sm:p-1.5 max-sm:text-[8px] max-sm:rounded-sm">
          Подключить подписку
        </button>
      </div>
      <div className="absolute right-25 top-15 z-10">
        <img
          src={controller}
          alt="PlayStation controller"
          className="w-[600px] h-[600px] max-sm:w-[180px] max-sm:h-[180px] rotate-[25deg] object-contain max-sm:hidden"
        />
      </div>
      <div className="absolute right-25 bottom-5 max-sm:top-21 max-sm:-left-2">
        <img
          src={btns}
          alt="PlayStation controller"
          className="w-[350px] h-[350px] max-sm:w-24 max-sm:h-24 rotate-[8deg] object-contain"
        />
      </div>
      <div className="sm:hidden absolute right-25 bottom-5 max-sm:top-21 max-sm:-right-2">
        <img
          src={btns}
          alt="PlayStation controller"
          className="w-[350px] h-[350px] max-sm:w-24 max-sm:h-24 scale-x-[-1] object-contain"
        />
      </div>
    </div>
  );
}
