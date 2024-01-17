export default async function Counter4() {
    const ApiUrl = process.env.API_URL;
    try {
      const response = await fetch(`${ApiUrl}/api/counter4`, {
        cache: "no-store",
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
  