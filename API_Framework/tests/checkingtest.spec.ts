
import { test, expect } from '@playwright/test';
import { readExcelData } from '../utils/excelReader';
import { preparePayload } from '../utils/jsonUtils';

test('Create User API using Excel data', async ({ request }) => {

  const excelData = await readExcelData(
    './testdata/testdata.xlsx',
    'Sheet1',
    'TC01'
  );

  const payload = preparePayload('payload.json', excelData);

  const response = await request.post('/api/users', {
    data: payload
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.name).toBe(excelData.name);
});