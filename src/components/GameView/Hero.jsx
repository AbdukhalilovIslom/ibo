export default function Hero() {
	return (
		<div className="bg-[url('../../public/fifa.jpg')] bg-center bg-cover sm:min-h-[500px] rounded-[30px] max-sm:rounded-xl grid grid-cols-2 max-sm:grid-cols-1 gap-8 px-8 py-6 max-sm:p-3">
			<div className='flex flex-col'>
				<h1 className='text-[40px] text-white font-extrabold max-sm:text-xl'>
					Пополни акккаунт <br /> Playstation
				</h1>
				<p className='text-2xl text-white mb-5 max-sm:text-xs max-sm:my-2.5'>
					Консоль
				</p>
				<div className='flex gap-2.5'>
					<button className='p-2.5 px-6 !text-white border-white border rounded-2xl font-bold text-xl max-sm:text-xs max-sm:px-4 max-sm:py-0 max-sm:rounded-sm max-sm:h-8'>
						PS4
					</button>
					<button className='flex items-center gap-1 p-2.5 bg-white text-primary rounded-2xl font-bold text-xl max-sm:text-xs max-sm:px-2 max-sm:py-0 max-sm:rounded-sm max-sm:h-8'>
						PS5
					</button>
				</div>
				<div className='flex gap-2.5'>
					<button className='p-2.5 px-6 !text-white border-white border rounded-2xl font-bold text-xl max-sm:text-xs max-sm:px-4 max-sm:py-0 max-sm:rounded-sm max-sm:h-8'>
						без активации
					</button>
					<button className='flex items-center gap-1 p-2.5 bg-white text-primary rounded-2xl font-bold text-xl max-sm:text-xs max-sm:px-2 max-sm:py-0 max-sm:rounded-sm max-sm:h-8'>
						с активацией
					</button>
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
