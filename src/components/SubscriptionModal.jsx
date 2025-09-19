import React, { useState, useEffect } from 'react';
import DeluxeIcon from '../assets/img/eaplay.png';

const SubscriptionModal = ({
	isOpen,
	onClose,
	setOrderModal,
	selectedLevel,
	initiatePayment,
	subscriptionServiceId,
	subscriptionPeriodId,
	consoleTypeId,
	getPricePlus,
}) => {
	const [quantity, setQuantity] = useState(1);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [unitPrice, setUnitPrice] = useState(0); // narxni saqlash

	useEffect(() => {
		if (
			subscriptionServiceId &&
			subscriptionPeriodId &&
			consoleTypeId &&
			getPricePlus
		) {
			const price = getPricePlus(
				subscriptionServiceId,
				subscriptionPeriodId,
				consoleTypeId
			);
			setUnitPrice(price || 0);
		}
	}, [
		subscriptionServiceId,
		subscriptionPeriodId,
		consoleTypeId,
		getPricePlus,
	]);

	if (!isOpen) return null;

	const handleIncrement = () => setQuantity(prev => prev + 1);
	const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
	const handleReset = () => setQuantity(1);

	const totalPrice = unitPrice * quantity;

	const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
	const isFormValid = quantity > 0 && name.trim() !== '' && isValidEmail(email);

	const handleBuyClick = async () => {
		if (!isFormValid) return;
		try {
			await initiatePayment({
				username: name.trim(),
				email: email.trim(),
				serviceId: subscriptionServiceId,
				periodId: subscriptionPeriodId,
				consoleId: consoleTypeId,
			});
			setOrderModal(false);
			onClose();
		} catch (error) {
			alert("To'lovni boshlashda xatolik yuz berdi");
			console.error(error);
		}
	};

	return (
		<div className='fixed inset-0 z-[9999999] flex items-center justify-center bg-black/80'>
			<div className='relative backdrop-blur-md bg-[#1F1D26]/60 text-white w-[95%] max-w-[840px] min-h-[30rem] px-8 py-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-xl'>
				<button
					onClick={onClose}
					className='absolute cursor-pointer top-[-0.5rem] right-[0.5rem] sm:top-[-3rem] sm:right-[-2rem] text-[26px] font-bold text-white/70 hover:text-white z-10'
				>
					×
				</button>

				<div className='flex justify-between items-start mb-4'>
					<h2 className='text-[24px] font-semibold'>Ваш заказ:</h2>
					<p className='text-[24px] text-white/80'>
						Сумма: <span className='text-white font-bold'>{totalPrice}₽</span>
					</p>
				</div>

				<div className='border-t border-white/10 pt-4' />

				<div className='flex flex-col sm:flex-row sm:items-center gap-4 pt-4'>
					<div className='flex items-start gap-4 flex-1 mb-12'>
						<img
							src={DeluxeIcon}
							alt='product'
							className='w-[100px] h-[80px] rounded-md object-cover'
						/>
						<div>
							<p className='text-white text-[18px]'>Подписка</p>
							<p className='text-[#A259FF] text-[18px] font-semibold'>
								Playstation Plus {selectedLevel}
							</p>
							<p className='text-white text-[16px]'>{12 * quantity} месяцев</p>
						</div>
					</div>

					<div className='flex items-center justify-between sm:justify-normal gap-x-2 text-lg font-semibold'>
						<p className='font-bold text-white sm:hidden'>{totalPrice}₽</p>
						<button
							onClick={handleDecrement}
							className='w-6 h-6 text-white hover:text-red-400 cursor-pointer'
						>
							−
						</button>
						<span className='w-5 text-center'>{quantity}</span>
						<button
							onClick={handleIncrement}
							className='w-6 h-6 text-white hover:text-green-400 cursor-pointer'
						>
							+
						</button>
						<p className='ml-2 font-bold text-white hidden sm:block'>
							{totalPrice}₽
						</p>
						<button
							onClick={handleReset}
							className='text-white/60 text-[18px] ml-2 hover:text-red-500 cursor-pointer'
						>
							🗑
						</button>
					</div>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 mt-6'>
					<div className='flex-1'>
						<label className='text-white text-[18px] mb-1 block'>
							Ваша почта
						</label>
						<input
							type='email'
							placeholder='Почта'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='w-full px-4 py-3 bg-transparent border-b border-white/30 placeholder-white/40 text-white focus:outline-none focus:border-white transition'
						/>
					</div>
					<div className='flex-1'>
						<label className='text-white text-[18px] mb-1 block'>
							Ваше имя
						</label>
						<input
							type='text'
							placeholder='Имя'
							value={name}
							onChange={e => setName(e.target.value)}
							className='w-full px-4 py-3 bg-transparent border-b border-white/30 placeholder-white/40 text-white focus:outline-none focus:border-white transition'
						/>
					</div>
				</div>

				<button
					disabled={!isFormValid}
					onClick={handleBuyClick}
					className={`mt-8 w-full py-3 rounded-lg text-[16px] font-semibold transition ${
						!isFormValid
							? 'bg-gray-500 cursor-not-allowed'
							: 'bg-[#A259FF] hover:bg-[#b37aff] text-white'
					}`}
				>
					Купить
				</button>
			</div>
		</div>
	);
};

export default SubscriptionModal;
