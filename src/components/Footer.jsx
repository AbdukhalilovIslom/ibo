import Logo from '../assets/logo/1.png';

const Footer = () => {
	return (
		<div className='bg-[#202562] flex px-4 md:px-20 justify-between py-2 mt-auto'>
			<img
				src={Logo}
				className='w-[60px] h-[31px] md:w-[120px] md:h-[72px]'
				alt=''
			/>
			<div className='text-white flex text-[8px] md:text-[20px] font-[600] items-center gap-3 md:gap-6'>
				<p>О нас</p>
				<p>Контакты</p>
				<p>Политика конфиденциальности</p>
			</div>
		</div>
	);
};

export default Footer;
