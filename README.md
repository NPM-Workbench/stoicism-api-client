![stoicism-banner](https://github.com/user-attachments/assets/2345f626-0c64-4140-acde-19d6100e0d6f)
![npm](https://img.shields.io/npm/v/stoicism-api-client)
![downloads](https://img.shields.io/npm/dw/stoicism-api-client)
![license](https://img.shields.io/npm/l/stoicism-api-client)
# stoicism-api-client
stoicism-api-client is a lightweight, zero-dependency JavaScript client that makes it easy to fetch Stoic quotes from a public API. Ideal for learning projects, bots, motivational apps, and philosophy enthusiasts.

### 📦 Installation
```console
npm install stoicism-api-client
```

### 🎲 Features
1. Fetch random Stoic quotes: Retrieve timeless wisdom from Stoic philosophers like Marcus Aurelius, Seneca, and Epictetus.
2. Lightweight & Fast: Minimal implementation with no unnecessary overhead.
3. Zero dependencies: No external libraries required — uses native web APIs.
4. Simple API surface: One function, one responsibility. Easy to learn and use.
5. Type-safe (TypeScript support): Includes TypeScript typings for better developer experience.
6. Beginner-friendly: Ideal for learning projects, demos, bots, and motivational apps.
```
## ⚠️ Important: ##
This API cannot be accessed directly from the browser due to CORS restrictions enforced by the source API.
This package is intended to be used in server-side environments such as Node.js and other backend frameworks.
```

### 🔤 Example Usage
1. Get A Random Stoic Quote
```javascript
import { getStoicQuote } from "stoicism-api-client";
async function run() {
  const response = await getStoicQuote();
  if (response.code === "api-ok" && response.payload) {
    console.log(response.payload);
  } else {
    console.error(response.message);
  }
}
run();

// 200:OK
/*
{
  "code": "api-ok",
  "message": "No errors encountered",
  "payload": {
    "author": "Epictetus",
    "quote": "It’s not what happens to you, but how you react to it that matters."
  }
}
*/

// Error
/*
{
  "code": "api-fail",
  "message": "Get Stoic Quote: Encountered Error!",
  "payload": null
}
*/
```
### 📘 Contributing
Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### ❤️ Support
Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
