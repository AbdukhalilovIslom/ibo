import controllerWhite from '../assets/images/6.png';
import controllerOrange from '../assets/images/7.png';
import bgPattern from '../assets/images/background.png'; // fon pattern

const Hero = () => {
	return (
		<div
			className='main-container relative h-[320px] lg:min-h-[759px] bg-[#100E80] text-white overflow-hidden lg:py-15 py-4 px-4 md:px-8 rounded-b-2xl !max-w-[100vw]'
			style={{
				backgroundImage: `url(${bgPattern})`,
				backgroundSize: 'cover',
			}}
		>
			<div className='main-container relative'>
				{/* Controller Images */}
				<img
					src={controllerWhite}
					alt='White Controller'
					className='absolute left-[-50px] w-[125px] md:w-[376px] rotate-[-30.1deg] z-10 top-[20%] lg:w-[364.53px] lg:h-[364.53px] lg:left-[3%] object-contain'
				/>
				<img
					src={controllerOrange}
					alt='Orange Controller'
					className='absolute right-[-60px] w-36 md:w-[376px] rotate-[30deg] z-10 top-[27%] lg:w-[387.57px] lg:h-[247.68px] lg:right-[3%] object-contain'
				/>
				<div className=''>
					<p className='max-w-[70%] mx-auto text-center text-[18px] font-[900] lg:text-[48px]'>
						Всё для вашей PlayStation
						<p className='text-[#FFE245]'>без головной боли</p>
					</p>
					<p className='text-[7px] font-[400] text-center lg:text-[20px]'>
						Мгновенное пополнение кошелька и лучшие игры
					</p>
					{/*  */}
					<div className=' flex items-center justify-center flex-col lg:mt-10 mt-2'>
						<div className='max-w-[120px] min-h-[74px] lg:max-w-[243px] lg:min-h-[143px] text-center  bg-[#0E56D7] py-3 px-3 rounded-[10px] '>
							<p className='text-[10px] font-[700] lg:text-[18px] '>
								Больше 10000 пользователей
							</p>
							<p className='text-[7px] mb-1 font-[500] lg:text-[14px]'>
								постоянно играют с нами
							</p>
							<p className='text-[9px] bg-white text-[#0E56D7] w-[104px] h-[19px] flex items-center justify-center rounded-[6px] font-[700] lg:text-[14px] lg:w-[180px] mx-auto lg:h-[35px]'>
								Прочитать отзывы
							</p>
						</div>
						{/*  */}
						<div className='flex gap-15 lg:gap-[15rem] mt-2'>
							<div className='max-w-[120px] min-h-[74px] lg:max-w-[243px] lg:min-h-[143px] text-center  bg-[#0E56D7] py-3 px-3 rounded-[10px] '>
								<p className='text-[10px] font-[700] lg:text-[18px] '>
									Больше 10000 пользователей
								</p>
								<p className='text-[7px] mb-1 font-[500] lg:text-[14px]'>
									постоянно играют с нами
								</p>
								<p className='text-[9px] bg-[#FFE246] text-[#0E56D7] w-[104px] h-[19px] flex items-center justify-center rounded-[6px] font-[700] lg:text-[14px] lg:w-[180px] mx-auto lg:h-[35px]'>
									Прочитать отзывы
								</p>
							</div>
							<div className='max-w-[120px] min-h-[74px] lg:max-w-[243px] lg:min-h-[143px] text-center  bg-[#0E56D7] py-3 px-3 rounded-[10px] '>
								<p className='text-[10px] font-[700] lg:text-[18px] '>
									Больше 10000 пользователей
								</p>
								<p className='text-[7px] mb-1 font-[500] lg:text-[14px]'>
									постоянно играют с нами
								</p>
								<p className='text-[9px] bg-[#FFE246] text-[#0E56D7] w-[104px] h-[19px] flex items-center justify-center rounded-[6px] font-[700] lg:text-[14px] lg:w-[180px] mx-auto lg:h-[35px]'>
									Прочитать отзывы
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
