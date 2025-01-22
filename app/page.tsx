import Image from 'next/image';
import Header from './components/header';

export default function rootPage() {
	return (
		<>
			<div className='relative flex flex-col min-h-screen bg-indigo-100'>
				<Header />
				<div className='relative border-2'>
					<div className='relative rounded-2xl w-[90dvw] h-80 bg-gradient-to-t from-indigo-400 to-blue-400 bg-opacity-80 mx-auto overflow-hidden border-2 border-blue-600/30'>
						<div className='flex flex-col p-4 text-white gap-5'>
							<h2 className='text-white font-semibold text-2xl'>Tixie</h2>
							<div className='flex flex-col p-4 px-14 gap-2'>
								<span className='font-bold text-4xl'>Personalisation</span>
								<span className='text-lg max-w-2xl'>
									Customize settings like ticket categories, welcome messages,
									and more!
								</span>
							</div>
						</div>

						<div className='absolute right-0 top-0 h-[400px] w-[300px] z-50'>
							<Image src={'/profile.png'} alt='profile' fill className='absolute' />
						</div>
						<div className='absolute bottom-0 left-0 size-60 bg-white rounded-tr-full bg-opacity-15' />
						<div className='absolute top-10 -right-28 size-72 bg-white rounded-full bg-opacity-70' />
						<div className='absolute transform bottom-4 left-96 size-2 bg-white rounded-full bg-opacity-35' />
					</div>
				</div>
			</div>
		</>
	);
}
