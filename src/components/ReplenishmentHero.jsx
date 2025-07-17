import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import turkiye from '../assets/img/turkiye.png';

export default function Hero() {
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [selectedGame, setSelectedGame] = useState('Выберите игру');
	const [amount, setAmount] = useState('1000');
	const [email, setEmail] = useState('');
	const [promocode, setPromocode] = useState('');
	const [selectedTier, setSelectedTier] = useState(0); // Default to -20% (1000₽)
	const [isInstantTopUp, setIsInstantTopUp] = useState(false);
	const [passcode1, setPasscode1] = useState('');
	const [passcode2, setPasscode2] = useState('');
	const [activeModal, setActiveModal] = useState(null);
	const games = ['Игра', 'Игра', 'Игра'];
	const messages = [
		{
			title: 'Как посмотреть свою почту?',
			text: 'Чтобы проверить и изменить данные своей учетной записи, выберите (Настройки) > [Управление учетной записью] > [Данные учетной записи]. Доступные вам данные учетной записи различаются в разных странах и регионах и для разных типов учетных записей.',
		},
		{
			title: 'Резервный код для входа',
			text: 'Одноразовый код для входа на аккаунт по логину и паролю. Проще всего через сайт Сони. Позволяет моментально пополнить Ваш аккаунт!  Где его найти? 1. Войдите в аккаунт PlayStation на сайте Сони 2. Наведите на иконку профиля и нажмите управление учетной записью 3. Выберите Безопасность далее Резервные коды  Вам понадобится всего один, но для безопасности аккаунта лучше сохранить их всех',
		},
	];
	const tiers = [
		{ discount: 0, amount: '100₺' },
		{ discount: 10, amount: '500₺' },
		{ discount: 20, amount: '1000₺' },
		{ discount: 30, amount: '1500₺' },
		{ discount: 40, amount: '2000₺' },
	];
	const leftUpClassesByIndex = [
		'left-[-3.5%] max-sm:left-[-5%]',
		'left-[21.5%] max-sm:left-[20%]',
		'left-[46.5%] max-sm:left-[45%]',
		'left-[71.5%] max-sm:left-[70%]',
		'left-[96.5%] max-sm:left-[95%]',
	];
	const leftClassesByIndex = [
		'left-[-3.5%] max-sm:left-[-6%]',
		'left-[21.5%] max-sm:left-[19%]',
		'left-[46.5%] max-sm:left-[44%]',
		'left-[71.5%] max-sm:left-[69%]',
		'left-[96.5%] max-sm:left-[94%]',
	];

	const handleGameSelect = game => {
		setSelectedGame(game);
		setIsSelectOpen(false);
	};
	return (
		<div className="bg-[url('../../public/hero.png')] bg-center bg-cover sm:min-h-[500px] rounded-[30px] max-sm:rounded-xl grid grid-cols-2 max-sm:grid-cols-1 gap-8 px-8 py-6 max-sm:p-3">
			<div className='flex flex-col'>
				<h1 className='text-[40px] text-white font-extrabold max-sm:text-xl'>
					Пополни акккаунт <br /> Playstation
				</h1>
				<p className='text-2xl text-white mb-5 max-sm:text-xs max-sm:my-2.5'>
					Безопасно и быстро
				</p>
				<div className='flex gap-2.5'>
					<button className='p-2.5 px-6 !text-white border-white border rounded-2xl font-bold text-xl max-sm:text-xs max-sm:px-4 max-sm:py-0 max-sm:rounded-sm max-sm:h-8'>
						UAH
					</button>
					<button className='flex items-center gap-1 p-2.5 bg-white text-primary rounded-2xl font-bold text-xl max-sm:text-xs max-sm:px-2 max-sm:py-0 max-sm:rounded-sm max-sm:h-8'>
						<img
							src={turkiye}
							alt='turkish flag'
							className='w-9 h-6 max-sm:w-6 max-sm:h-4'
						/>
						TRY
					</button>
				</div>
				<div className='w-full sm:max-w-md mt-6 space-y-2.5 max-sm:w-full'>
					{/* Select Game Dropdown */}
					<div className='relative'>
						<div
							className='bg-white rounded-2xl px-6 py-3 flex items-center justify-between cursor-pointer max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg'
							onClick={() => setIsSelectOpen(!isSelectOpen)}
						>
							<span className='text-primary text-lg font-normal max-sm:text-sm'>
								{selectedGame}
							</span>
							{isSelectOpen ? (
								<ChevronUp className='w-6 h-6 text-primary max-sm:w-5 max-sm:h-5' />
							) : (
								<ChevronDown className='w-6 h-6 text-primary max-sm:w-5 max-sm:h-5' />
							)}
						</div>

						{isSelectOpen && (
							<div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-10 overflow-hidden'>
								{games.map((game, index) => (
									<div
										key={index}
										className='px-6 py-4 hover:bg-gray-50 cursor-pointer text-primary text-lg font-medium border-b border-gray-100 last:border-b-0 max-sm:text-sm max-sm:px-3 max-sm:py-2.5'
										onClick={() => handleGameSelect(game)}
									>
										{game}
									</div>
								))}
							</div>
						)}
					</div>

					{/* Amount Input */}
					<div className='bg-white rounded-2xl px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg'>
						<div className='flex items-center justify-between'>
							<input
								type='text'
								value={amount}
								onChange={e => setAmount(e.target.value)}
								placeholder='Или введите сумму'
								className='text-primary text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm'
							/>
							<span className='text-primary text-lg font-medium ml-4 max-sm:text-sm'>
								₺
							</span>
						</div>
					</div>

					{/* Email Input */}
					<div className='bg-white rounded-2xl px-6 py-4 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg'>
						<div className='flex items-center justify-between'>
							<input
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Почта от аккаунта'
								className='text-primary text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm'
							/>
							<button
								onClick={() => setActiveModal(1)}
								className='!text-primary text-base font-medium underline hover:!text-blue-700 cursor-pointer max-sm:text-[10px]'
							>
								где найти?
							</button>
						</div>
						{activeModal && (
							<div
								className='fixed inset-0 bg-black/30 flex items-center justify-center z-50 transition-opacity duration-300'
								onClick={() => setActiveModal(null)} // close on backdrop click
							>
								<div
									onClick={e => e.stopPropagation()} // prevent closing when clicking inside modal
									className='bg-primary text-white rounded-3xl p-10 max-w-xl w-full mx-4 shadow-lg animate-fade-in max-sm:p-6'
								>
									<h3 className='text-3xl font-bold mb-6 text-center max-sm:text-base max-sm:mb-2'>
										{messages[activeModal - 1].title}
									</h3>
									<p className='text-2xl font-medium text-center max-sm:text-xs'>
										{messages[activeModal - 1].text}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-2.5'>
				<div className='flex items-center gap-1'>
					<input
						type='checkbox'
						id='instant-top-up'
						checked={isInstantTopUp}
						onChange={e => setIsInstantTopUp(e.target.checked)}
					/>
					<p className='text-white font-bold max-sm:text-[11px]'>
						Активировать мгновенное пополнение
					</p>
					<button className='!text-white font-normal underline hover:!text-blue-700 cursor-pointer max-sm:text-[11px]'>
						(что это?)
					</button>
				</div>
				{isInstantTopUp && (
					<div className='flex flex-col gap-2'>
						<div className='bg-white rounded-2xl px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg'>
							<div className='flex items-center justify-between'>
								<input
									type='text'
									value={passcode1}
									onChange={e => setPasscode1(e.target.value)}
									placeholder='Пароль от аккаунта'
									className='text-primary text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm'
								/>
							</div>
						</div>
						<div className='bg-white rounded-2xl px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg'>
							<div className='flex items-center justify-between'>
								<input
									type='text'
									value={passcode2}
									onChange={e => setPasscode2(e.target.value)}
									placeholder='Резервный код'
									className='text-primary text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm'
								/>
								<button
									onClick={() => {
										setActiveModal(2);
									}}
									className='!text-primary text-base font-medium underline hover:!text-blue-700 cursor-pointer max-sm:text-[10px]'
								>
									(что это?)
								</button>
							</div>
						</div>
					</div>
				)}
				<div className='bg-white rounded-3xl px-4 py-2 w-full max-w-4xl max-sm:rounded-xl max-sm:px-2 max-sm:py-1.5'>
					{/* Header */}
					<h2 className='text-sm font-bold text-primary mb-8 max-sm:text-xs max-sm:mb-4'>
						Снижение комиссии
					</h2>

					{/* Connecting Line with Small Lines */}
					<div className='relative py-6 mx-6 mb-2 max-sm:mx-4'>
						<div className='h-1 bg-gray-200 rounded-full relative'>
							<div
								className='h-1 bg-secondary rounded-full transition-all duration-300'
								style={{
									width: `${(selectedTier / 4) * 100}%`,
								}}
							/>

							{/* Small indicator lines on the yellow line */}
							{tiers.map((tier, index) => (
								<div key={index}>
									<div
										className={`absolute -top-9 transform -translate-x-0.5 cursor-pointer ${leftUpClassesByIndex[index]}`}
										onClick={() => setSelectedTier(index)}
									>
										{/* Discount Badge */}
										<div
											className={`w-10 py-0.5 text-center rounded-sm text-primary font-bold border box-border text-xs mb-4 max-sm:w-8 max-sm:text-[9px]
                ${
									selectedTier === index
										? 'bg-secondary border-secondary'
										: ' border-primary'
								}
                transition-all duration-200
              `}
										>
											-{tier.discount}%
										</div>
									</div>
									{selectedTier !== index && (
										<div
											className='absolute -top-2.5 h-6 w-1 bg-secondary transform -translate-x-0.5'
											style={{
												left: `${(index / (tiers.length - 1)) * 100}%`,
												backgroundColor: `${
													index < selectedTier ? '#ffe245' : '#e5e7eb'
												}`,
											}}
										></div>
									)}
									{selectedTier === index && (
										<div
											className='absolute -top-1 left-1/2 transform -translate-x-1/2'
											style={{ left: `${(index / (tiers.length - 1)) * 100}%` }}
										>
											<div className='w-3 h-3 bg-secondary rounded-full' />
										</div>
									)}
									<div
										className={`absolute top-4 transform -translate-x-0.5 w-10 text-xs text-center text-primary font-bold max-sm:text-[10px]
										${leftClassesByIndex[index]}`}
									>
										{tier.amount}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='bg-white rounded-2xl px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg'>
					<div className='flex items-center justify-between'>
						<input
							type='text'
							value={promocode}
							onChange={e => setPromocode(e.target.value)}
							placeholder='Промокод'
							className='text-primary text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm'
						/>
					</div>
				</div>
				<div className='bg-primary flex'>
					<div className='flex flex-col bg-white rounded-l-xl px-4 py-2 max-sm:px-2 max-sm:py-1.5 border-r-4 border-primary'>
						<p className='text-sm text-primary font-bold max-sm:text-[10px]'>
							Картой
						</p>
						<span className='text-2xl text-primary font-extrabold max-sm:text-xl'>
							4690₽
						</span>
						<p className='text-[10px] text-primary font-normal max-sm:text-[8px]'>
							Бонус для зарегистрированных пользователей 235 Б
						</p>
					</div>
					<div className='flex flex-col bg-white rounded-r-xl px-4 py-2 max-sm:px-2 max-sm:py-1.5'>
						<p className='text-sm text-primary font-bold max-sm:text-[10px]'>
							Криптовалютой (-2%)
						</p>
						<span className='text-2xl text-primary font-extrabold max-sm:text-xl'>
							4597₽
						</span>
						<p className='text-[10px] text-primary font-normal max-sm:text-[8px]'>
							Бонус для зарегистрированных пользователей 235Б
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className='text-white font-bold max-sm:text-sm'>Способ оплаты</h3>
					<div className='bg-primary grid grid-cols-2 gap-1'>
						<button className='bg-secondary rounded-l-xl px-4 py-2 text-sm font-bold max-sm:text-xs cursor-pointer'>
							Картой
						</button>
						<button className='bg-white rounded-r-xl px-4 py-2 text-sm font-bold max-sm:text-xs cursor-pointer'>
							Криптовалютой
						</button>
					</div>
					<button className='bg-secondary rounded-xl px-4 py-2 font-bold max-sm:text-sm cursor-pointer'>
						Пополнить
					</button>
				</div>
			</div>
		</div>
	);
}
