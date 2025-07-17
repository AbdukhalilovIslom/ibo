import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image12 from '../assets/images/12.png';
import Image13 from '../assets/images/13.png';
import Image14 from '../assets/images/14.png';
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
  {
    id: 1,
    name: 'Ulugbek Karimov',
    role: 'Dizayner',
    review: 'Xizmat juda zo‘r! Mijozlarga munosabat professional darajada.',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dilfuza Rajabova',
    role: 'SMM Mutaxassisi',
    review: 'Buyurtmam tez tayyorlandi va sifat juda yaxshi!',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 4,
  },
  {
    id: 3,
    name: 'Anvar Turg‘unov',
    role: 'Frontend Dasturchi',
    review: 'Menga juda yoqdi, yana albatta buyurtma beraman.',
    avatar: 'https://i.pravatar.cc/150?img=10',
    rating: 5,
  },
  {
    id: 4,
    name: 'Malika Hamdamova',
    role: 'UX Researcher',
    review: 'Eng yaxshi xizmatlardan biri, do‘stlarimga ham tavsiya qilaman.',
    avatar: 'https://i.pravatar.cc/150?img=39',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jasur Abdujalilov',
    role: 'Marketing Manager',
    review: 'Sifatli, tezkor va ishonchli — aynan kerakligidek!',
    avatar: 'https://i.pravatar.cc/150?img=28',
    rating: 4,
  },
];

const Section3 = () => {
  return (
    <div className='relative w-full py-10'>
      {/* Arrow Buttons and Title */}
      <div className='flex justify-between items-center max-w-[1140px] mx-auto px-4 md:px-8 mb-8'>
        <button className='swiper-button-prev-custom text-[#1e1f5e]'>
          <FaArrowLeft size={22} />
        </button>
        <h2 className='text-center text-[15px] text-[#1e1f5e] font-[700] md:text-[32px]'>
          Отзывы о наших сервисах
        </h2>
        <button className='swiper-button-next-custom text-[#1e1f5e]'>
          <FaArrowRight size={22} />
        </button>
      </div>

      {/* Swiper */}
      <div className='relative overflow-visible px-4 md:px-[30px] w-[95%] mx-auto'>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className='overflow-visible'
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className='w-auto'>
              <div className='h-[200px] bg-[#212662] rounded-xl shadow-md p-4 flex flex-col justify-between'>
                <div className='flex items-center gap-4 mb-2'>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className='w-10 h-10 rounded-full'
                  />
                  <div>
                    <h4 className='font-semibold text-sm text-white'>
                      {item.name}
                    </h4>
                    <p className='text-xs text-white'>{item.role}</p>
                  </div>
                </div>

                <p className='text-sm text-white italic'>“{item.review}”</p>

                <div className='flex items-center gap-1 mt-2'>
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className='text-yellow-400'>
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='mt-16'>
        <p className='text-center w-[80%] mx-auto text-[15px] font-[700] md:text-[32px] md:w-[50%] text-[#202562] mb-10'>
          Оплачивай game-бонусами покупку игр или пополнение кошелька
        </p>
        <div className='flex flex-wrap w-[85%] justify-center gap-4 mx-auto'>
          <div className='flex flex-col gap-1 w-[95%] h-[174px] md:w-[370px] md:h-[283px] rounded-[20px] 0 bg-gradient-to-t from-blue-900 to-blue-500'>
            <img
              src={Image12}
              className='w-[76px] h-[76px] md:w-[144px] md:h-[149px] mx-auto justify-center'
              alt=''
            />
            <div className='text-center text-white'>
              <p className='text-[15px] md:text-[20px] font-[700] mb-1 '>
                Получай кешбек за покупки
              </p>
              <p className='md:text-[18px] font-[700] text-[12px]'>
                2% бонусов до 4000 рублей
              </p>
              <p className='md:text-[18px] font-[700] text-[12px]'>
                5% бонусов до 10000 рублей
              </p>
              <p className='md:text-[18px] font-[700] text-[12px]'>
                7% бонусов до 50000 рублей
              </p>
            </div>
          </div>
          {/*  */}
          <div className='flex flex-col gap-1 w-[95%] h-[174px] md:w-[370px] md:h-[283px] rounded-[20px] 0 bg-gradient-to-t from-blue-900 to-blue-500'>
            <img
              src={Image13}
              className='w-[76px] h-[76px] md:w-[144px] md:h-[149px] mx-auto justify-center'
              alt=''
            />
            <div className='text-center text-white'>
              <p className='text-[15px] md:text-[20px] font-[700] mb-1 '>
                Прошёл игру?
              </p>
              <p className='md:text-[18px] font-[700] text-[12px]'>
                Верни игровой аккаунт с ней и получи 25% ее стоимости на
                бонусный счет
              </p>
            </div>
          </div>
          {/*  */}
          <div className='flex flex-col gap-4 w-[95%] h-[174px] md:w-[370px] md:h-[283px] rounded-[20px] 0 bg-gradient-to-t from-blue-900 to-blue-500'>
            <img
              src={Image14}
              className='w-[76px] h-[76px] md:w-[144px] md:h-[149px] mx-auto justify-center'
              alt=''
            />
            <div className='text-center text-white'>
              <p className='text-[15px] md:text-[20px] font-[700] mb-1 '>
                100 бонусов за регистрацию
              </p>
              <button className='bg-[#0E56D7] w-[75%] md:w-[90%] h-[29px] md:h-[45px] rounded-[10px] text-[12px] md:text-[18px]'>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
