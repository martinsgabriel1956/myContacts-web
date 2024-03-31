import { delay } from '../../utils/delay';

class HTTPClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseURL}/${path}`);

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} - ${response.statusText}`);
  }
}

export default HTTPClient;
