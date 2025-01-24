import Image from 'next/image';

export default async function Dashboard() {

	// TODO: Styling + Made code modular

	const allGuilds = await fetch('https://discord.com/api/v10/users/@me/guilds', {
		headers: {
			Authorization: `Bot ${process.env.CLIENT_TOKEN}`,
			'Content-Type': `application/json`,
		},
	});

	const response = await allGuilds.json();

	const mappedGuilds = response.map((guild: any) => {
		return {
			name: guild.name,
			id: guild.id,
			icon: guild.icon,
		};
	});

	return (
		<div className='border-2 min-h-screen'>
			{mappedGuilds.length > 0
				? mappedGuilds.map((guild: any) => (
						<div key={guild.id} className='flex border border-black gap-3 w-fit p-3'>
							<div className='relative size-[70px]'>
								<Image
									src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
									alt={`${guild.name} icon`}
									fill
									className='rounded-full'
								/>
							</div>
							<span className='font-semibold text-xl'>{guild.name}</span>
						</div>
				))
				: (
					<div className="">
						<span>No Guilds Found!</span>
					</div>
				)}
		</div>
	);
}
