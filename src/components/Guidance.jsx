import { useState } from 'react';
import controller from '../assets/img/controller.png';
import EAplay from '../assets/img/eaplay.png';
import ElectronicArts from '../assets/img/ElectronicArts.png';
import robot from '../assets/img/robot.png';

export default function PlayStationPlusDesign() {
	const [selectedDuration, setSelectedDuration] = useState('1');
	const [openIndex, setOpenIndex] = useState(null);
	const btns = ['PS4', 'PS5'];
	const [psType, setPsType] = useState('PS5');
	const durations = [
		{ value: '1', label: '1 месяц', price: 690 },
		{ value: '12', label: '12 месяцев', price: 2490 },
	];
	const features = [
		{
			title: 'Больше игр',
			text: 'В коллекцию The Play List входят более 50 игр из ваших любимых франшиз вроде Need for Speed, Madden и Battlefield.',
		},
		{
			title: 'Пробные версии игр',
			text: 'Играйте в избранные новинки от EA в течение 10 часов.',
		},
		{
			title: 'Больше наград',
			text: 'Подписчики получают эксклюзивные награды, которые расширят границы игры и помогут выделиться.',
		},
		{
			title: 'Экономьте',
			text: 'Получите скидку 10% на цифровые материалы EA, включая игры, внутри игровую валюту и многое другое.',
		},
	];
	const questions = [
		{
			question: 'Как подключается подписка?',
			answer:
				'Наш менеджер Службы Заботы выдаст Вам логин и пароль от игрового аккаунта, который необходимо активировать по инструкции, после чего подписка начнёт работать на всех аккаунтах вашей консоли.',
		},
		{
			question: 'Как активировать подписку для PФ аккаунта?',
			answer:
				'После подключения выбранной вами подписки на аккаунт Ук. или Турецкого региона, чтобы PS Plus начала работать на РФ аккаунте необходимо активировать как основной (включить общий доступ) аккаунт с подпиской. После этого подписка PS Plus начнет работать на РФ аккаунте!',
		},
		{
			question: 'Что такое "PlayStation Plus на год в сплит"?',
			answer:
				'Способ подключения подписки или игры при помощи игрового аккаунта. Наш игровой аккаунт позволяет уменьшить стоимость выбранной подписки, сохраняя все возможности PS Plus без изменений.',
		},
		{
			question: 'Какая подписка подходит для онлайн игры?',
			answer:
				'Все виды подписки PS Plus включают в себя доступ к онлайн игре. Подписка EA Play НЕ предоставляет такой возможности, по ней доступна только коллекция игр от издателя Electronic Arts.',
		},
		{
			question: 'После оплаты. Как получить заказ?',
			answer:
				'После оплаты игры вы получите код заказа, который дублируется на вашу почту. Код необходимо отправить в нашу поддержку для получения игрового аккаунта. К игровому аккаунту предоставляем все необходимые инструкции, и помогаем с установкой.',
		},
	];
	return (
		<div>
			{/* Header Section */}
			<div className='px-[100px] py-12 max-sm:px-4 max-sm:py-4 overflow-hidden'>
				<h1 className='text-4xl max-sm:text-[15px] font-bold text-primary mb-8 max-sm:mb-2'>
					Как пользоваться?
				</h1>

				{/* How to Use Steps */}
				<div className='flex flex-col lg:flex-row items-center justify-between mb-12 max-sm:mb-6 relative'>
					{/* Robot Image */}
					<div className='absolute -left-57 -top-10 max-sm:-left-15 max-sm:top-17'>
						<img
							src={robot}
							alt='Robot mascot'
							className='w-76 h-[435px] max-sm:w-[125px] max-sm:h-[175px] rotate-[30deg] object-contain'
						/>
					</div>

					{/* Steps */}
					<div className='flex flex-wrap max-sm:justify-center gap-6 lg:gap-12 w-full max-sm:gap-4'>
						<div className='bg-white rounded-[20px] flex items-center py-2 px-4 max-sm:py-1.5 max-sm:px-2 border-primary border-1 max-w-xs w-[45%]'>
							<div className='flex gap-3'>
								<div>
									<p className='text-primary max-sm:text-[10px] font-medium'>
										Вы получаете логин и пароль от игрового аккаунта.
									</p>
								</div>
								<div className='w-10 h-10 rounded-sm border-1 p-4 flex items-center justify-center border-primary text-primary text-3xl font-bold max-sm:w-4 max-sm:h-4 max-sm:p-2 max-sm:text-xs'>
									1
								</div>
							</div>
						</div>

						<div className='bg-white rounded-[20px] flex items-center py-2 px-4 max-sm:py-1.5 max-sm:px-2 border-primary border-1 max-w-xs max-sm:w-1/2'>
							<div className='flex items-start gap-3'>
								<div>
									<p className='text-primary max-sm:text-[10px] font-medium'>
										Добавляете его на консоль, включаете активацию аккаунта в
										настройках по инструкции.
									</p>
								</div>
								<div className='w-10 h-10 rounded-sm border-1 p-4 flex items-center justify-center border-primary text-primary text-3xl font-bold max-sm:w-4 max-sm:h-4 max-sm:p-2 max-sm:text-xs'>
									2
								</div>
							</div>
						</div>

						<div className='bg-white rounded-[20px] flex items-center py-2 px-4 max-sm:py-1.5 max-sm:px-2 border-primary border-1 max-w-xs max-sm:w-1/2'>
							<div className='flex items-start gap-3'>
								<div>
									<p className='text-primary max-sm:text-[10px] font-medium'>
										После активации аккаунта подписка начинает работать на всех
										аккаунтах вашей консоли!
									</p>
								</div>
								<div className='w-10 h-10 rounded-sm border-1 p-4 flex items-center justify-center border-primary text-primary text-3xl font-bold max-sm:w-4 max-sm:h-4 max-sm:p-2 max-sm:text-xs'>
									3
								</div>
							</div>
						</div>
					</div>

					{/* Controller Image */}
					<div className='absolute -right-63 -top-25 max-sm:-right-25 max-sm:top-20'>
						<img
							src={controller}
							alt='PlayStation controller'
							className='w-[500px] h-[500px] max-sm:w-[180px] max-sm:h-[180px] rotate-[20deg] object-contain'
						/>
					</div>
				</div>

				{/* Main Content */}
				<div className='flex flex-col lg:flex-row gap-8 mt-[100px] mb-12.5 max-sm:mb-7.5 max-sm:mt-0 max-sm:gap-2.5'>
					<img
						src={EAplay}
						alt=''
						className='rounded-3xl w-[400px] sm:h-full max-sm:w-full max-sm:h-[150px] object-cover'
					/>
					{/* PlayStation Plus Essential Card */}
					<div className='grid grid-cols-2 max-sm:grid-cols-1 gap-x-8 gap-y-2.5 bg-white rounded-3xl border-1 border-primary p-4 flex-1 max-sm:p-4'>
						<div className='flex flex-col justify-between'>
							<div>
								<h2 className='text-3xl text-left font-bold text-primary mb-1 max-sm:text-base'>
									PlayStation Plus <br /> Essential
								</h2>
								<div className='flex items-center text-primary text-sm max-sm:text-[10px] gap-1'>
									<img
										className='w-13 h-4 max-sm:w-7.5 max-sm:h-2.5'
										src={ElectronicArts}
									/>
									<span>Игры по подписке</span>
								</div>
							</div>
							{/* Console Selection */}
							<div className='mb-1'>
								<h3 className='text-xl max-sm:text-sm text-left font-normal text-primary mb-1.5'>
									Консоль
								</h3>
								<div className='flex gap-3'>
									{btns.map(btn => (
										<button
											key={btn}
											onClick={() => setPsType(btn)}
											className={`px-4 py-2 border-primary border-1 rounded-lg font-medium cursor-pointer max-sm:text-[12px] ${
												psType === btn
													? 'bg-primary text-white'
													: 'bg-white text-primary hover:bg-gray-300'
											}`}
										>
											{btn}
										</button>
									))}
								</div>
							</div>
						</div>

						{/* Duration and Pricing */}
						<div className='flex flex-col gap-2'>
							<h3 className='text-xl max-sm:text-sm text-left font-semibold text-primary'>
								Длительность подписки
							</h3>
							<div className='flex flex-col gap-2.5'>
								{durations.map(duration => (
									<button
										key={duration.value}
										onClick={() => setSelectedDuration(duration.value)}
										className={`w-full p-2 text-sm max-sm:text-xs rounded-lg border-1 cursor-pointer z-50 transition-colors flex justify-between items-center border-primary ${
											selectedDuration === duration.value
												? ' bg-primary text-white'
												: ' bg-white text-primary'
										}`}
									>
										<div className='flex items-center gap-2'>
											<span
												className={`w-6 h-6 rounded-sm border-1 flex items-center justify-center ${
													selectedDuration === duration.value
														? 'border-white bg-primary'
														: 'border-primary bg-white'
												}`}
											>
												<span
													className={`text-sm font-bold max-sm:text-xs ${
														selectedDuration === duration.value
															? 'text-white'
															: 'text-primary'
													}`}
												>
													{duration.value}
												</span>
											</span>
											<span className='font-medium'>{duration.label}</span>
										</div>
										<span className='font-bold text-[15px]'>
											{duration.price}₽
										</span>
									</button>
								))}
							</div>
							{/* Buy Button */}
							<button className='w-full bg-[#FF4747] hover:bg-[#ff4747c7] text-white py-2 rounded-lg text-lg z-50 max-sm:text-sm transition-colors cursor-pointer'>
								Купить
							</button>
						</div>

						{/* Features */}
						<div className='col-span-2 max-sm:col-span-1'>
							<h3 className='text-base text-left font-bold text-primary mb-3'>
								Преимущества EA Play
							</h3>
							<div className='flex gap-3 max-sm:flex-col max-sm:gap-1'>
								{features.map((feature, index) => (
									<div
										key={index}
										className='flex flex-col rounded-sm p-1 px-2 bg-primary max-sm:p-0.5 max-sm:px-1'
									>
										<p className='text-xs text-gray-200 font-bold max-sm:text-[9px]'>
											{feature.title}
										</p>
										<p className='text-xs text-gray-200 max-sm:text-[9px]'>
											{feature.text}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div>
					<h3 className='text-3xl max-sm:text-[15px] font-bold text-primary mb-3'>
						Часто задаваемые вопросы
					</h3>
					<div className='flex flex-wrap gap-x-10 rounded-xl gap-y-2 max-sm:gap-3 max-sm:border max-sm:border-primary max-sm:px-2 max-sm:py-1'>
						{questions.map((item, index) => {
							const isOpen = openIndex === index;
							return (
								<div
									key={index}
									className='flex flex-col gap-2 sm:w-[45%] max-sm:gap-1'
								>
									<div className='flex items-center max-sm:justify-between gap-2'>
										<p className='text-primary font-semibold leading-5 max-sm:text-xs max-sm:font-bold'>
											{item.question}
										</p>
										<div
											className='border border-primary rounded-md max-sm:rounded-sm'
											onClick={() => {
												setOpenIndex(isOpen ? null : index);
											}}
										>
											<button
												className={`flex items-center justify-center px-3 text-lg rounded-sm cursor-pointer max-sm:w-4 max-sm:h-3 max-sm:rounded-xs max-sm:text-sm max-sm:pb-0.5 max-sm:px-0 ${
													isOpen
														? 'bg-white text-primary'
														: 'bg-primary text-white'
												}`}
											>
												{isOpen ? '-' : '+'}
											</button>
										</div>
									</div>
									<div
										className={`transition-all duration-800 overflow-hidden ${
											isOpen ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'
										}`}
									>
										<div className='bg-primary py-2 px-2.5 rounded-2xl mt-2 max-sm:rounded-lg max-sm:py-1.5 max-sm:mt-1.5'>
											<p className='text-white max-sm:text-xs max-sm:font-bold'>
												{item.answer}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
