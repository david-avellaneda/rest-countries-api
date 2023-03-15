export default async function helpApi(path) {
  const url = `https://restcountries.com/v3.1/${path}`;
  try {
    // ISR
    const res = await fetch(url, {
      next: {
        // That every 7 days the request is updated, that is, after 7 days the HTML is generated again. 604800 seconds make 7 days
        revalidate: 604800,
      },
    });

    if (!res.ok)
      throw {
        err: true,
        status: res.status || 500,
        statusText: res.statusText || "Internal several error",
      };

    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
}
