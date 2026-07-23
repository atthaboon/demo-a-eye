import test, { expect } from "@playwright/test";

// https://demoqa.com/books
test('GET API Request', async ({ request }) => {
  const resp = await request.get('https://demoqa.com/BookStore/v1/Books');
  expect(resp.status()).toBe(200);

  const body = await resp.json();
  expect(body).toHaveProperty('books');
  expect(body.books.length).toEqual(8);
});

test('POST API Request - Login', async ({ request }) => {
  const response = await request.post(`https://demoqa.com/Account/v1/Login`, {
    data: {
      userName: 'qademo1001',
      password: 'T@stpw120',
    },
  });
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('token');
});


test('POST API Request - Add book', async ({ request }) => {
  const response = await request.post(`https://demoqa.com/Account/v1/Login`, {
    data: {
      userName: 'qademo1001',
      password: 'T@stpw120',
    },
  });
  const body = await response.json();
  const userId = body.userId;

  // Generate a fresh token
  const tokenResponse = await request.post(`https://demoqa.com/Account/v1/GenerateToken`, {
    data: {
      userName: 'qademo1001',
      password: 'T@stpw120',
    },
  });
  expect(tokenResponse.status()).toBe(200);
  const bodyLogin = await tokenResponse.json();
  const token = bodyLogin.token;

  // Delete Book
  await request.delete(`https://demoqa.com/BookStore/v1/Books?UserId=${userId}`, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

  // Add Book
  const addBookResponse = await request.post(`https://demoqa.com/BookStore/v1/Books`, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {
        userId: userId,
        collectionOfIsbns: [
          { isbn: '9781449325862' }
        ],
      },
    });
    expect(addBookResponse.status()).toBe(201);

  
});
