import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GOOGLE_SCRIPT_URL is not set in Environment Variables' }),
    };
  }

  try {
    const { httpMethod, body, queryStringParameters } = event;

    if (httpMethod === 'GET') {
      const url = new URL(scriptUrl);
      if (queryStringParameters) {
        Object.entries(queryStringParameters).forEach(([key, value]) => {
          if (value) url.searchParams.append(key, value);
        });
      }
      
      const response = await fetch(url.toString());
      const data = await response.json();
      
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
    }

    if (httpMethod === 'POST') {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Google apps script prefers text/plain or application/x-www-form-urlencoded due to CORS preflight, but server-to-server doesn't matter. text/plain is safer for Apps Script postData.
        },
      });
      
      const data = await response.json();
      
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
    };
  }
};
