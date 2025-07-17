import { useState } from 'react';

export default function Sidebar() {
	const [filters, setFilters] = useState({
		platform: {
			ps5: false,
			ps4: false,
		},
		genre: {
			roleplay: false,
			action: false,
			adventure: false,
		},
		priceRange: {
			min: '',
			max: '',
		},
		withDiscount: true,
		localization: {
			russianVoice: false,
			russianSubtitles: false,
		},
		activation: {
			withActivation: false,
			withoutActivation: false,
		},
	});

	const handleCheckboxChange = (category, key) => {
		setFilters(prev => ({
			...prev,
			[category]: {
				...prev[category],
				[key]: !prev[category][key],
			},
		}));
	};

	const handlePriceChange = (type, value) => {
		setFilters(prev => ({
			...prev,
			priceRange: {
				...prev.priceRange,
				[type]: value,
			},
		}));
	};

	const resetFilters = () => {
		setFilters({
			platform: {
				ps5: false,
				ps4: false,
			},
			genre: {
				roleplay: false,
				action: false,
				adventure: false,
			},
			priceRange: {
				min: '',
				max: '',
			},
			withDiscount: false,
			localization: {
				russianVoice: false,
				russianSubtitles: false,
			},
			activation: {
				withActivation: false,
				withoutActivation: false,
			},
		});
	};
	return (
		<div className='max-sm:hidden space-y-4'>
			{/* Platform */}
			<div className='space-y-2.5'>
				<h3 className='text-xl font-bold text-primary'>Платформа</h3>
				<div className='space-y-2.5'>
					<label className='flex items-center space-x-3 cursor-pointer'>
						<input
							type='checkbox'
							checked={filters.platform.ps5}
							onChange={() => handleCheckboxChange('platform', 'ps5')}
							className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
						/>
						<span className='text-primary font-bold'>PS5</span>
					</label>
					<label className='flex items-center space-x-3 cursor-pointer'>
						<input
							type='checkbox'
							checked={filters.platform.ps4}
							onChange={() => handleCheckboxChange('platform', 'ps4')}
							className='w-5 h-5 text-primary font-bold border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
						/>
						<span className='text-primary font-bold'>PS4</span>
					</label>
				</div>
			</div>

			{/* Genre */}
			<div className='space-y-2.5'>
				<h3 className='text-xl font-semibold text-primary mb-3'>Жанр</h3>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.genre.roleplay}
						onChange={() => handleCheckboxChange('genre', 'roleplay')}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>Ролевые игры</span>
				</label>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.genre.action}
						onChange={() => handleCheckboxChange('genre', 'action')}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>Экшен</span>
				</label>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.genre.adventure}
						onChange={() => handleCheckboxChange('genre', 'adventure')}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>Приключения</span>
				</label>
			</div>

			{/* Price */}
			<div className='space-y-2.5'>
				<h3 className='text-xl font-semibold text-primary'>Цена</h3>
				<div className='flex items-center gap-2'>
					<div className='flex-1'>
						<input
							type='number'
							placeholder='от'
							value={filters.priceRange.min}
							onChange={e => handlePriceChange('min', e.target.value)}
							className='w-full px-3 py-2 bg-primary text-white rounded-md focus:outline-none placeholder-white'
						/>
					</div>
					<span className='font-bold text-primary'>-</span>
					<div className='flex-1'>
						<input
							type='number'
							placeholder='до'
							value={filters.priceRange.max}
							onChange={e => handlePriceChange('max', e.target.value)}
							className='w-full px-3 py-2 bg-primary text-white rounded-md focus:outline-none placeholder-white'
						/>
					</div>
				</div>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.withDiscount}
						onChange={() =>
							setFilters(prev => ({
								...prev,
								withDiscount: !prev.withDiscount,
							}))
						}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>Со скидкой</span>
				</label>
			</div>

			{/* Localization */}
			<div className='space-y-2.5'>
				<h3 className='text-xl font-semibold text-primary'>Локализация</h3>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.localization.russianVoice}
						onChange={() =>
							handleCheckboxChange('localization', 'russianVoice')
						}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>Русская озвучка</span>
				</label>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.localization.russianSubtitles}
						onChange={() =>
							handleCheckboxChange('localization', 'russianSubtitles')
						}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>Русские субтитры</span>
				</label>
			</div>

			{/* Activation Type */}
			<div className='space-y-2.5'>
				<h3 className='text-xl font-semibold text-primary'>Тип активации</h3>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.activation.withActivation}
						onChange={() =>
							handleCheckboxChange('activation', 'withActivation')
						}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>С активацией</span>
				</label>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='checkbox'
						checked={filters.activation.withoutActivation}
						onChange={() =>
							handleCheckboxChange('activation', 'withoutActivation')
						}
						className='w-5 h-5 text-primary border-2 border-primary rounded accent-primary focus:primary cursor-pointer'
					/>
					<span className='text-primary font-bold'>Без активации</span>
				</label>
			</div>

			{/* Reset Button */}
			<button
				onClick={resetFilters}
				className='w-full bg-primary text-white py-3 rounded-md hover:bg-slate-600 transition-colors font-medium'
			>
				Сбросить всё
			</button>
		</div>
	);
}
