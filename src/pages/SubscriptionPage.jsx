import React, { useState, useEffect } from 'react';
import Guidance from '../components/Guidance';
import PsPlus from '../components/PsPlus';
import Hero from '../components/SubscriptionHero';
import SubscriptionModal from '../components/SubscriptionModal';

function SubscriptionPage() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedLevel, setSelectedLevel] = useState('Deluxe');
	const [consoleTypes, setConsoleTypes] = useState([]);
	const [selectedConsolePlus, setSelectedConsolePlus] = useState('');
	const [subscriptions, setSubscriptions] = useState([]);
	const [subscriptionServiceId, setSubscriptionServiceId] = useState('');
	const [subscriptionPeriodId, setSubscriptionPeriodId] = useState('');
	const [consoleTypePlusId, setConsoleTypePlusId] = useState('');

	useEffect(() => {
		fetch('https://psgamezz.ru/api/subscription-services/', {
			method: 'GET',
			headers: {
				Authorization: 'uiZP5^fqEL^aPMWWZ&tNi7N8gesNhR&&',
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				setSubscriptions(data);
			})
			.catch(err => console.error('Subscription fetch error:', err));

		fetch('https://psgamezz.ru/api/console-types/', {
			method: 'GET',
			headers: {
				Authorization: 'uiZP5^fqEL^aPMWWZ&tNi7N8gesNhR&&',
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				setConsoleTypes(data);
				if (data.length > 0) {
					setSelectedConsolePlus(data[0].name);
					setConsoleTypePlusId(data[0].id);
				}
			})
			.catch(err => console.error('Console types fetch error:', err));
	}, []);

	const getPricePlus = () => {
		if (!subscriptions.length || !consoleTypes.length) return '—';

		const consoleObj = consoleTypes.find(c => c.name === selectedConsolePlus);
		if (!consoleObj) return 0;

		const subscription = subscriptions.find(
			s =>
				s.choices_level === selectedLevel && s.consoles?.includes(consoleObj.id)
		);

		return subscription?.periods?.[0]?.price
			? subscription.periods[0].price
			: 0;
	};

	const getCSRFToken = () => {
		const match = document.cookie.match(/csrftoken=([^;]+)/);
		return match ? match[1] : '';
	};

	const initiatePayment = async ({
		username,
		email,
		serviceId,
		periodId,
		consoleId,
	}) => {
		try {
			const csrftoken = getCSRFToken();

			const res = await fetch('https://psgamezz.ru/api/payment/initiate/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'uiZP5^fqEL^aPMWWZ&tNi7N8gesNhR&&',
					'X-CSRFToken': csrftoken,
				},
				credentials: 'include',
				body: JSON.stringify({
					username,
					email,
					subscription_service_id: serviceId,
					subscription_period_id: periodId,
					console_type_id: consoleId,
				}),
			});
			const data = await res.json();
			if (data && data.payment_url) {
				window.location.href = data.payment_url;
			} else {
				alert('Error: ' + JSON.stringify(data));
			}
		} catch (err) {
			console.error(err);
			alert('Error');
		}
	};

	return (
		<>
			<Hero />
			<div className='main-container'>
				<PsPlus
					selectedLevel={selectedLevel}
					setSelectedLevel={setSelectedLevel}
					setModalOpen={setModalOpen}
					consoleTypes={consoleTypes}
					selectedConsolePlus={selectedConsolePlus}
					setSelectedConsolePlus={setSelectedConsolePlus}
					subscriptions={subscriptions}
					setSubscriptionServiceId={setSubscriptionServiceId}
					setSubscriptionPeriodId={setSubscriptionPeriodId}
					setConsoleTypePlusId={setConsoleTypePlusId}
				/>
				<Guidance />
			</div>
			<SubscriptionModal
				getPricePlus={getPricePlus}
				selectedLevel={selectedLevel}
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				setOrderModal={() => {}} // you can pass a real setter if needed
				initiatePayment={initiatePayment}
				subscriptionServiceId={subscriptionServiceId}
				subscriptionPeriodId={subscriptionPeriodId}
				consoleTypeId={consoleTypePlusId}
			/>
		</>
	);
}

export default SubscriptionPage;
