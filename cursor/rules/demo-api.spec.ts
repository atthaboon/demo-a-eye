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


