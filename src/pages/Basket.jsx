// pages/Basket.jsx
import BasketItem from '../components/BasketIteam';
import { useBasket } from '../context/BasketContext';
const Basket = () => {
	const { basket } = useBasket();
	let overallPrice = 0;
	basket.forEach(element => {
		overallPrice += element.price;
	});
	return (
		<div className='p-4 flex flex-row gap-6 px-20 max-[900px]:flex-col max-[900px]:px-4 min-h-screen'>
			{/* Chap qism */}
			<div className='flex-grow'>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center'>
						<input type='checkbox' className='h-[18px] w-[18px]' />
						<label
							htmlFor='default-checkbox'
							className='ms-2 font-bold text-[#202562] text-[20px] max-[900px]:text-[18px] max-[600px]:text-[12px]'
						>
							Выбрать все
						</label>
					</div>
					<p className='font-bold text-[#202562] text-[20px] max-[900px]:text-[18px] max-[600px]:text-[12px]'>
						Удалить выбранное
					</p>
				</div>

				{/* Mahsulotlar ro‘yxati */}
				{/* {items.map((_, index) => ( */}
				<BasketItem />
				{/* ))} */}
			</div>

			{/* To‘lov paneli */}
			<div
				className='w-full max-w-[285px] 
        max-[900px]:min-w-[90%] max-[900px]:mx-auto'
			>
				<div className='bg-[#202562] text-white p-5 py-6 flex flex-col gap-4 rounded-[25px]'>
					<p className='flex items-center justify-between font-[500] text-[16px] max-[600px]:text-[14px]'>
						Товары, {basket.length} шт <span>{overallPrice}Р</span>
					</p>
					<p className='flex items-center justify-between font-[500] text-[16px] max-[600px]:text-[14px]'>
						Скидки <span>0Р</span>
					</p>
					<p className='flex items-center justify-between font-[500] text-[16px] max-[600px]:text-[14px]'>
						Итого <span>{overallPrice}Р</span>
					</p>
				</div>
				<button
					className='bg-[#00B5F1] w-full h-[48px] rounded-[15px] mt-4 
          text-[16px] max-[600px]:text-[14px]'
				>
					Оплатить
				</button>
			</div>
		</div>
	);
};

export default Basket;
