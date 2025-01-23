"use server";

export default async function fetchGuilds(client: any) {
    // Use .values() to get the iterable, then spread it into an array
    const allGuilds = [...client.guilds.cache.values()];

    return allGuilds;
}
