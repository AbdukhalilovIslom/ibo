import { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Hero() {
	const [activeHero, setActiveHero] = useState(0);
	const games = [
		{
			img: '/fifa.jpg',
			title: 'EA SPORTS FC 25 PS4 & PS5',
			description:
				'Откройте для себя новейший футбольный симулятор EA Sports FC 25. Станьте частью команды.',
			price: 2140,
		},
		{
			img: '/fifa.jpg',
			title: 'FC 25 + Ps Plus Essential 3 месяца',
			description:
				'Откройте для себя новейший футбольный симулятор EA Sports FC 25. Станьте частью команды.',
			price: 2140,
		},
		{
			img: '/spiderman.jpg',
			title: 'Marvel’s Spider-Man 2',
			description:
				'Издание включает:Полную версию игры Marvel’s Человек-Паук 2 для PS5®.Люди-паук и Питер Паркер и Майл.',
			price: 3040,
		},
	];
	const { img, title, description, price } = games[activeHero];
	return (
		<div>
			<div className='main-container max-sm:hidden grid grid-cols-4 gap-5 px-25 py-12.5 max-sm:px-4 max-sm:py-5'>
				<div
					style={{ backgroundImage: `url(${img})` }}
					className={`bg-[url('${img}')] relative flex flex-col justify-end items-start px-8 py-14 col-span-3 bg-center bg-cover rounded-3xl`}
				>
					<div className='absolute inset-0 bg-[linear-gradient(to_right,_rgba(1,2,6,0.5),_rgba(0,0,0,0))] transition-all duration-300 rounded-3xl'></div>
					<div className='z-10'>
						<h2 className='text-white font-bold text-3xl'>{title}</h2>
						<p className='text-white font-bold w-[400px] mt-1.5 mb-4'>
							{description}
						</p>
						<button className='bg-white text-primary font-bold px-12 py-3 rounded-xl'>
							Купить от {price}₽
						</button>
					</div>
				</div>
				<div className='flex flex-col gap-2.5'>
					{games.map((item, index) => (
						<div
							key={index}
							onClick={() => {
								setActiveHero(index);
							}}
							style={{ backgroundImage: `url(${item.img})` }}
							className={`bg-[url('${item.img}')] relative flex items-end px-5 py-4 h-40 bg-center bg-cover rounded-3xl cursor-pointer`}
						>
							<div
								className={`absolute inset-0 transition-all duration-300 rounded-3xl
								${
									activeHero === index
										? 'bg-[linear-gradient(to_right,_rgba(1,2,6,0.5),_rgba(0,0,0,0))]'
										: 'bg-black/70'
								}
							`}
							></div>
							<p className='text-lg text-white font-bold z-10'>{item.title}</p>
						</div>
					))}
				</div>
			</div>
			<div className='sm:hidden px-4'>
				<Swiper
					spaceBetween={20}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					className='mySwiper'
				>
					{games.map((item, index) => (
						<SwiperSlide
							key={index}
							onClick={() => {
								setActiveHero(index);
							}}
							style={{ backgroundImage: `url(${item.img})` }}
							className={`bg-[url('${item.img}')] relative !flex !items-end px-5 py-4 !h-50 bg-center bg-cover rounded-3xl cursor-pointer max-sm:px-3 max-sm:py-4`}
						>
							<div className='absolute inset-0 bg-[linear-gradient(to_right,_rgba(1,2,6,0.5),_rgba(0,0,0,0))] transition-all duration-300 rounded-3xl'></div>
							<div className='z-50'>
								<h2 className='text-white font-bold text-3xl max-sm:text-base'>
									{item.title}
								</h2>
								<p className='text-white font-medium w-full mt-0.5 mb-1 max-sm:text-[8px]'>
									{item.description}
								</p>
								<button className='bg-white text-primary font-bold px-12 py-1.5 rounded-lg w-full max-sm:text-xs'>
									Купить от {item.price}₽
								</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
