import { useState } from 'react';

export default function Hero() {
	const [mail, setMail] = useState('');
	const [promocode, setPromocode] = useState('');
	const [isInstantTopUp, setIsInstantTopUp] = useState(false);
	return (
		<div className="bg-[url('../../public/fifa.jpg')] bg-center bg-cover sm:min-h-[500px] grid grid-cols-2 max-sm:grid-cols-1 gap-8 px-8 py-6 max-sm:p-3">
			<div className='grid grid-cols-2 p-8 bg-primary/65 rounded-4xl'>
				<div>
					<h1 className='text-[40px] text-white font-extrabold max-sm:text-xl'>
						EA SPORTS FC 25 PS4 & PS5
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
					<p className='text-2xl text-white mb-5 max-sm:text-xs max-sm:my-2.5'>
						Варианты покупки
					</p>
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
					<div className='bg-white rounded-2xl px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:rounded-lg'>
						<div className='flex items-center justify-between'>
							<input
								type='text'
								value={mail}
								onChange={e => setMail(e.target.value)}
								placeholder='Почта для получения заказа'
								className='text-primary text-lg font-medium bg-transparent border-none outline-none flex-1 placeholder:text-primary placeholder:font-normal max-sm:placeholder:text-sm max-sm:text-sm'
							/>
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
					<div className='flex flex-col gap-2'>
						<button className='bg-primary rounded-xl px-4 py-2 font-bold max-sm:text-sm cursor-pointer'>
							Пополнить
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
