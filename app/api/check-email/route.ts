import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Invalid email address provided' },
        { status: 400 }
      );
    }

    // Validate API key
    const apiKey = process.env.RAPIDAPI_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server configuration error: API key is missing' },
        { status: 500 }
      );
    }

    // Fetch data from the API
    const response = await fetch(
      `https://breachdirectory.p.rapidapi.com/?func=auto&term=${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'breachdirectory.p.rapidapi.com',
        },
      }
    );

    // Handle non-OK responses
    if (!response.ok) {
      console.error('API response error:', await response.text());
      return NextResponse.json(
        { error: 'Failed to fetch breach data from the API' },
        { status: response.status }
      );
    }

    // Parse and return API data
    const data = await response.json();
    console.log('API Response Data:', data);

    const breaches = data?.breaches || []; // Default to an empty array if undefined
    return NextResponse.json({
      isPwned: breaches.length > 0,
      breaches: breaches, // Include breach details if needed for the client
    });

  } catch (error: any) {
    // Catch any unexpected errors
    console.error('Error in POST handler:', error.message || error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
