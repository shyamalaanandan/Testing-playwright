import fs from 'fs';
import path from 'path';

export function preparePayload(
  fileName: string,
  testData: Record<string, string>
) {
  const filePath = path.resolve(process.cwd(), 'testdata', fileName);
  let json = fs.readFileSync(filePath, 'utf-8');

  for (const key in testData) {
    json = json.replace(
      new RegExp(`{{${key}}}`, 'g'),
      testData[key]
    );
  }

  return JSON.parse(json);
}