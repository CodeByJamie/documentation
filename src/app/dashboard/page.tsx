export default async function Dashboard() {

	const allGuilds = await fetch('https://discord.com/api/v10/users/@me/guilds', {
		headers: {
			Authorization: `Bot ${process.env.CLIENT_TOKEN}`,
                  'Content-Type': `application/json`
		},
	});

      const response = await allGuilds.json();

      console.log(response);

	return <h1 className='text-black'>HI</h1>;
}
