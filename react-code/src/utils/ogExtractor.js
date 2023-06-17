import { openGraphkey } from "../configuration";

export default async function extractOgData(urlToBeScraped) {
  console.log(encodeURI(urlToBeScraped));

  try {
    const response = await fetch(
      `https://opengraph.io/api/1.1/site/${escape(
        urlToBeScraped
      )}?app_id=${openGraphkey}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
