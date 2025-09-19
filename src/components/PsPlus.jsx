import { useState } from 'react';
import Icon1 from '../assets/icons/small1.svg';
import Icon10 from '../assets/icons/small10.svg';
import Icon11 from '../assets/icons/small11.svg';
import Icon12 from '../assets/icons/small12.svg';
import Icon2 from '../assets/icons/small2.svg';
import Icon3 from '../assets/icons/small3.svg';
import Icon4 from '../assets/icons/small4.svg';
import Icon5 from '../assets/icons/small5.svg';
import Icon6 from '../assets/icons/small6.svg';
import Icon7 from '../assets/icons/small7.svg';
import Icon8 from '../assets/icons/small8.svg';
import Icon9 from '../assets/icons/small9.svg';
import ControllerBtns from '../assets/img/btns.png';
export default function PsPlus({
	// selectedLevel,
	// setSelectedLevel,
	setModalOpen,
	consoleTypes,
	// selectedConsolePlus,
	// setSelectedConsolePlus,
	// subscriptions,
	// setSubscriptionServiceId,
	// setSubscriptionPeriodId,
	// setConsoleTypePlusId,
}) {
	console.log(consoleTypes);

	const [selectedDuration, setSelectedDuration] = useState('1');
	const [selectedTier, setSelectedTier] = useState('Essential');
	const tierData = {
		Essential: {
			durations: [
				{ value: '1', label: '1 месяц', price: 740 },
				{ value: '3', label: '3 месяца', price: 1690 },
				{ value: '12', label: '12 месяцев', price: 2890 },
			],
			features: [
				{ text: 'Коллекция PlayStation Plus', img: Icon1 },
				{ text: 'Эксклюзивные материалы', img: Icon2 },
				{ text: 'Сетевые режимы игр', img: Icon3 },
				{ text: 'Share Play', img: Icon4 },
				{ text: 'Новые игры каждый месяц', img: Icon5 },
				{ text: 'Эксклюзивные скидки', img: Icon6 },
				{ text: 'Облачное хранилище', img: Icon7 },
				{ text: 'Справка по игре', img: Icon8 },
			],
		},
		Extra: {
			durations: [
				{ value: '1', label: '1 месяц', price: 1040 },
				{ value: '3', label: '3 месяца', price: 2540 },
				{ value: '12', label: '12 месяцев', price: 4290 },
			],
			features: [
				{ text: 'Коллекция PlayStation Plus', img: Icon1 },
				{ text: 'Эксклюзивные материалы', img: Icon2 },
				{ text: 'Сетевые режимы игр', img: Icon3 },
				{ text: 'Share Play', img: Icon4 },
				{ text: 'Новые игры каждый месяц', img: Icon5 },
				{ text: 'Эксклюзивные скидки', img: Icon6 },
				{ text: 'Облачное хранилище', img: Icon7 },
				{ text: 'Справка по игре', img: Icon8 },
				{ text: 'Каталог игр', img: Icon9 },
				{ text: 'Классика Ubisoft', img: Icon10 },
			],
		},
		Deluxe: {
			durations: [
				{ value: '1', label: '1 месяц', price: 1140 },
				{ value: '3', label: '3 месяца', price: 2490 },
				{ value: '12', label: '12 месяцев', price: 5000 },
			],
			features: [
				{ text: 'Коллекция PlayStation Plus', img: Icon1 },
				{ text: 'Эксклюзивные материалы', img: Icon2 },
				{ text: 'Сетевые режимы игр', img: Icon3 },
				{ text: 'Share Play', img: Icon4 },
				{ text: 'Новые игры каждый месяц', img: Icon5 },
				{ text: 'Эксклюзивные скидки', img: Icon6 },
				{ text: 'Облачное хранилище', img: Icon7 },
				{ text: 'Справка по игре', img: Icon8 },
				{ text: 'Каталог игр', img: Icon9 },
				{ text: 'Классика Ubisoft', img: Icon10 },
				{ text: 'Каталог классики', img: Icon11 },
				{ text: 'Пробные версии игр', img: Icon12 },
			],
		},
	};
	const currentTier = tierData[selectedTier];
	const tiers = ['Essential', 'Extra', 'Deluxe'];
	const btns = ['PS4', 'PS5'];
	const [psType, setPsType] = useState('PS5');
	return (
		<div className='p-12 max-sm:p-4'>
			<div className='mx-auto'>
				{/* Header */}
				<div className='text-center mb-12 max-sm:mb-2.5 max-sm:mt-5'>
					<h1 className='text-4xl font-bold text-primary mb-2 max-sm:mb-0 max-sm:text-[16px]'>
						PlayStation Plus
					</h1>
					<p className='text-primary text-2xl max-sm:text-[10px]'>
						Выберите подходящую подписку
					</p>
				</div>

				<div className='flex flex-col lg:flex-row gap-8'>
					{/* Left Card - Essential */}
					<div className='bg-primary rounded-3xl p-8 text-white flex-1 max-w-md max-sm:p-2.5'>
						<div className='flex flex-col items-center justify-center gap-8 max-sm:gap-2'>
							{/* PlayStation Plus Icon */}
							{/* <div className='w-64 h-64 mx-auto mb-6'> */}
							<img
								src={ControllerBtns}
								alt=''
								className='w-64 h-64 max-sm:w-24 max-sm:h-24'
							/>
							{/* </div> */}
							<h2 className='text-3xl font-bold  max-sm:text-[16px]'>
								{selectedTier}
							</h2>
						</div>
					</div>

					{/* Right Card - Subscription Options */}
					<div className='grid grid-cols-2 max-sm:grid-cols-1 gap-x-8 gap-y-2.5 bg-white rounded-3xl border-1 border-primary p-8 flex-1 max-sm:p-4'>
						<div className='flex flex-col justify-between'>
							<div>
								<h2 className='text-3xl text-left font-bold text-primary mb-1 max-sm:text-[16px]'>
									PlayStation Plus {selectedTier}
								</h2>
								<div className='flex items-center text-primary text-sm max-sm:text-[10px] gap-1'>
									<img
										className='w-5 h-5 max-sm:w-4 max-sm:h-4'
										src={ControllerBtns}
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
									{/* <button className='px-4 py-2 bg-white text-primary border-primary border-1 rounded-lg font-medium max-sm:text-[12px]'>
										PS4
									</button>
									<button className='px-4 py-2 bg-primary text-white rounded-lg font-medium max-sm:text-[12px]'>
										PS5
									</button> */}
									{btns.map(btn => (
										<button
											key={btn}
											onClick={() => setPsType(btn)}
											className={`px-4 py-2 border-primary border-1 rounded-lg cursor-pointer font-medium max-sm:text-[12px] ${
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

							{/* Subscription Level */}
							<div>
								<h3 className='text-xl max-sm:text-sm text-left font-normal text-primary mb-1.5'>
									Уровень подписки
								</h3>
								<div className='flex gap-3'>
									{tiers.map(tier => (
										<button
											key={tier}
											onClick={() => setSelectedTier(tier)}
											className={`py-3 w-28 rounded-lg font-medium cursor-pointer transition-colors max-sm:text-[12px] ${
												selectedTier === tier
													? 'bg-primary text-white'
													: 'bg-gray-200 text-primary hover:bg-gray-300'
											}`}
										>
											{tier}
										</button>
									))}
								</div>
							</div>
						</div>

						{/* Duration and Pricing */}
						<div className='flex flex-col gap-2'>
							<h3 className='text-xl max-sm:text-sm text-left font-semibold text-gray-800'>
								Длительность подписки
							</h3>
							<div className='flex flex-col gap-2.5'>
								{currentTier.durations.map(duration => (
									<button
										key={duration.value}
										onClick={() => setSelectedDuration(duration.value)}
										className={`w-full p-2 text-sm max-sm:text-xs rounded-lg border-1 cursor-pointer transition-colors flex justify-between items-center border-primary ${
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
													className={`text-sm font-bold max-sm:text-[12px] ${
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
							<button
								className='w-full bg-secondary hover:bg-yellow-200 text-black py-2 rounded-lg text-lg max-sm:text-sm 
							cursor-pointer transition-colors'
								onClick={() => {
									// handleBuy('plus');
									setModalOpen(true);
								}}
							>
								Купить
							</button>
						</div>

						{/* Features */}
						<div className='col-span-2 max-sm:col-span-1'>
							<h3 className='text-[16px] text-left font-bold text-primary mb-3'>
								Что входит в подписку?
							</h3>
							<div
								className={`flex flex-wrap gap-3 max-sm:gap-1 sm:h-18 ${
									currentTier.features.length > 8 ? 'sm:gap-y-1.5' : ''
								}`}
							>
								{currentTier.features.map((feature, index) => (
									<div
										key={index}
										className='flex items-center rounded-sm text-xs p-1 px-2 gap-2 bg-primary text-gray-200 max-sm:text-[9px] max-sm:p-0.5 max-sm:px-1 max-sm:gap-1'
									>
										<img
											className='w-4 h-4 rounded-full max-sm:w-3 max-sm:h-3'
											src={feature.img}
										/>
										{feature.text}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
