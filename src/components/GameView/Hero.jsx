import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import cover from '../../assets/img/cover.png';
import palmer from '../../assets/img/palmer.png';
import real from '../../assets/img/real.png';
import russia from '../../assets/img/russia.png';
import team from '../../assets/img/team.png';
import { useBasket } from '../../context/BasketContext';
import products from '../../data/products.json';
export default function Hero() {
	const { addToBasket } = useBasket();
	const [openIndex, setOpenIndex] = useState(null);
	const [allOpenIndex, setAllOpenIndex] = useState(null);
	const [mail, setMail] = useState('');
	const [promocode, setPromocode] = useState('');
	const btns = ['PS4', 'PS5'];
	const [psType, setPsType] = useState('PS5');
	const activations = ['без активации', 'с активацией'];
	const [activation, setActivation] = useState('с активацией');
	const [isInstantTopUp, setIsInstantTopUp] = useState(false);
	const { id } = useParams();
	const productItem = products.find(item => item.id == id);
	console.log(productItem);

	const info = [
		{
			title: 'Об игре',
			description: `EA SPORTS FC 25 PS4 & PS5
Откройте для себя новейший футбольный симулятор EA Sports FC 25.

Станьте частью команды, участвуйте в напряженных матчах, разрабатывайте тактики и продвигайтесь к победе. Игра предлагает улучшенную графику, реалистичное поведение игроков и новейшие анимации, создающие эффект полного погружения. В EA Sports FC 25 вас ждут новые турниры, режимы карьеры и увлекательные онлайн-соревнования. Прокачивайте свой клуб, управляйте трансферами и приведите команду к чемпионству. Купите EA Sports FC 25 и испытайте настоящие эмоции от футбола прямо на вашем экране.`,
		},
		{
			title: 'Детали',
			details: [
				'Платформа',
				'PS4, PS5',

				'ИздательEA',
				'Swiss Sarl',

				'Русские субтитры ',
				'Есть',

				'Русская озвучка ',
				'Есть',

				'Жанр',
				'Спортивные игры',
			],
		},
		{
			title: 'Частые вопросы',
			questions: [
				{
					question: 'Что такое "с активацией"?',
					title: `Вы получаете логин и пароль от игрового аккаунта.

Далее добавляете его на консоль, включаете активацию аккаунта (общий доступ) в настройках по инструкции.

После ставите игру на установку, и она появляется на вашем аккаунте любого региона.

В этом варианте покупки игра передается на ваш аккаунт благодаря игровому аккаунту. Вы получаете купленную вами игру на ваш аккаунт любого региона.`,
				},
				{
					question: 'Что такое "без активации"?',
					title: `Вы получаете логин и пароль от игрового аккаунта.

Далее добавляете его на консоль, не активируете(общий доступ), и ставите игру на установку по инструкции.

После завершения установки играете на игровом аккаунте.

В этом варианте покупки игра будет доступна только на игровом аккаунте. И вы сможете играть в купленную игру.`,
				},
				{
					question: 'После оплаты. Как получить заказ?',
					title: `После оплаты игры вы получите код заказа, который дублируется на вашу почту.

Код необходимо отправить в нашу поддержку для получения игрового аккаунта.

К игровому аккаунту предоставляем все необходимые инструкции, и помогаем с установкой.`,
				},
				{
					question: 'Что делать если РФ аккаунт?',
					title: 'Аккаунт любого региона подойдет.',
				},
			],
		},
	];

	return (
		<div className="sm:bg-[url('../../public/fifa.jpg')] bg-center bg-cover sm:min-h-[500px]  px-18 py-6 max-sm:p-3">
			<div className='main-container sm:grid grid-cols-3 max-sm:grid-cols-1 gap-8 max-sm:flex flex-col items-center'>
				<div className='relative'>
					<img src={cover} alt='' className=' rounded-4xl' />
					<div className='flex items-center absolute left-6 bottom-6 bg-white self-start mt-auto gap-1 px-1.5 py-1 rounded-lg max-sm:p-1 max-sm:rounded-md'>
						<img src={russia} alt='russian flag' className='w-6 max-sm:w-4' />
						<span className='font-bold text-primary max-sm:text-[10px]'>
							Рус. озв
						</span>
					</div>
				</div>

				<div className='main-container grid grid-cols-2 max-sm:grid-cols-1 col-span-2 p-8 sm:bg-primary/65 rounded-4xl max-sm:p-4 max-sm:border border-primary max-sm:w-full'>
					<div className=''>
						<h1 className='text-[40px] text-white max-sm:text-primary font-extrabold max-sm:text-xl'>
							{productItem.title}
						</h1>
						<p className='text-2xl text-white max-sm:text-primary mb-5 max-sm:text-xs max-sm:my-2.5'>
							Консоль
						</p>
						<div className='flex gap-2.5'>
							{btns.map(btn => (
								<button
									key={btn}
									onClick={() => setPsType(btn)}
									className={`px-4 py-2 border-white border-1 rounded-lg hover:opacity-80 font-medium max-sm:text-[12px] ${
										psType === btn
											? 'bg-white text-primary'
											: 'bg-transparent text-white'
									}`}
								>
									{btn}
								</button>
							))}
						</div>
						<p className='text-2xl text-white max-sm:text-primary mb-5 max-sm:text-xs max-sm:my-2.5'>
							Варианты покупки
						</p>
						<div className='flex gap-2.5'>
							{activations.map(btn => (
								<button
									key={btn}
									onClick={() => setActivation(btn)}
									className={`px-4 py-2 border-white border-1 rounded-lg hover:opacity-80 font-medium max-sm:text-[12px] ${
										activation === btn
											? 'bg-white text-primary'
											: 'bg-transparent text-white'
									}`}
								>
									{btn}
								</button>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2.5'>
						<h3 className='text-[40px] text-white max-sm:text-primary font-extrabold max-sm:text-xl'>
							{productItem.price}P
						</h3>
						<div className='flex items-center gap-2'>
							<button className='p-2.5 px-2  text-primary max-sm:text-white bg-white max-sm:bg-primary border-white border rounded-lg font-bold text-xl max-sm:text-xs max-sm:px-1 py-0 max-sm:rounded-sm max-sm:h-8 max-sm:border-primary'>
								72+
							</button>
							<p className='text-white max-sm:text-primary font-normal max-sm:text-[11px]'>
								начислим при покупке
							</p>
						</div>
						<div className='bg-transparent border-white border rounded-2xl px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg max-sm:border-primary'>
							<div className='flex items-center justify-between'>
								<input
									type='text'
									value={mail}
									onChange={e => setMail(e.target.value)}
									placeholder='Почта для получения заказа'
									className='text-white text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-white max-sm:placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm max-sm:text-primary'
								/>
							</div>
						</div>
						<div className='bg-transparent border-white border rounded-2xl px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg max-sm:border-primary'>
							<div className='flex items-center justify-between'>
								<input
									type='text'
									value={promocode}
									onChange={e => setPromocode(e.target.value)}
									placeholder='Промокод'
									className='text-white text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-white max-sm:placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm max-sm:text-primary'
								/>
							</div>
						</div>
						<div className='flex items-center gap-1'>
							<input
								type='checkbox'
								id='instant-top-up'
								checked={isInstantTopUp}
								onChange={e => setIsInstantTopUp(e.target.checked)}
							/>
							<p className='text-white max-sm:text-primary font-bold max-sm:text-[11px]'>
								Активировать мгновенное пополнение
							</p>
						</div>
						<div className='flex flex-col gap-2'>
							<button
								className='bg-[#00B5F1] rounded-xl px-4 py-2 font-bold max-sm:text-sm cursor-pointer'
								onClick={() => addToBasket(productItem)}
							>
								Купить
							</button>
						</div>
					</div>
				</div>
				<div className='flex gap-4 max-sm:hidden'>
					<img src={cover} alt='' className='w-20 object-cover rounded-xl' />
					<img src={team} alt='' className='w-20 object-cover rounded-xl' />
					<img src={real} alt='' className='w-20 object-cover rounded-xl' />
					<img src={palmer} alt='' className='w-20 object-cover rounded-xl' />
				</div>
				<div className='col-span-2'>
					<div className='flex gap-3 max-sm:relative'>
						{info.map((item, index) => {
							const isOpen = allOpenIndex === index;
							return (
								<div
									key={index}
									className='sm:relative bg-primary text-white rounded-xl cursor-pointer'
								>
									<div className='flex items-center max-sm:justify-between gap-2'>
										<p className='py-2 px-3 font-semibold leading-5 max-sm:text-xs max-sm:font-bold'>
											{item.title}
										</p>
										<div
											className='border border-primary rounded-md max-sm:rounded-sm'
											onClick={() => {
												setAllOpenIndex(isOpen ? null : index);
											}}
										>
											{isOpen ? (
												<ChevronUp className='w-8 h-5 text-white bg-primary rounded-sm max-sm:rounded-xs max-sm:w-5 max-sm:h-3' />
											) : (
												<ChevronDown className='w-8 h-5 text-white max-sm:w-5 max-sm:h-3' />
											)}
										</div>
									</div>
									<div
										className={`absolute top-6 sm:left-0 max-sm:-right-0 transition-all duration-800  ${
											isOpen ? 'max-h-68 opacity-100 mt-2' : 'max-h-0 opacity-0'
										}`}
									>
										{item.description && (
											<div className='bg-primary w-xl max-sm:w-80 py-2 px-2.5 rounded-2xl mt-2 max-sm:rounded-lg max-sm:py-1.5 max-sm:mt-1.5'>
												<p className='text-white max-sm:text-xs max-sm:font-bold'>
													{item.description}
												</p>
											</div>
										)}
										{item.details && (
											<div className='grid grid-cols-2 bg-primary w-sm max-sm:w-80 py-2 px-2.5 rounded-2xl mt-2 max-sm:rounded-lg max-sm:py-1.5 max-sm:mt-1.5'>
												{item.details.map(detail => (
													<div className='py-2 px-2.5 rounded-2xl mt-2 max-sm:rounded-lg max-sm:py-1.5 max-sm:mt-1.5'>
														<p className='text-white max-sm:text-xs max-sm:font-bold'>
															{detail}
														</p>
													</div>
												))}
											</div>
										)}
										{item.questions && (
											<div className='bg-primary w-sm max-sm:w-80 py-2 px-2.5 rounded-2xl mt-2'>
												{item.questions.map((el, index) => {
													const isQuestionsOpen = openIndex === index;
													return (
														<div key={index} className='relative'>
															<div className='flex items-center justify-between gap-2'>
																<p className='text-white font-semibold leading-5 text-sm'>
																	{el.question}
																</p>
																<div
																	className='border border-white rounded-md cursor-pointer'
																	onClick={() =>
																		setOpenIndex(isQuestionsOpen ? null : index)
																	}
																>
																	{isQuestionsOpen ? (
																		<ChevronUp className='w-6 h-4 text-primary bg-white rounded' />
																	) : (
																		<ChevronDown className='w-6 h-4 text-white' />
																	)}
																</div>
															</div>

															<div
																className={`transition-all duration-500 overflow-hidden ${
																	isQuestionsOpen
																		? 'max-h-[800px] opacity-100 mt-2'
																		: 'max-h-0 opacity-0'
																}`}
															>
																<div className='bg-primary py-2 px-3 rounded-2xl'>
																	<p className='text-white text-sm'>
																		{el.title}
																	</p>
																</div>
															</div>
														</div>
													);
												})}
											</div>
										)}
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
