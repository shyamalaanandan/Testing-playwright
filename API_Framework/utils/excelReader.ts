import ExcelJS from 'exceljs';

export async function readExcelData(
  filePath: string,
  sheetName: string,
  scenario: string
): Promise<Record<string, string>> {

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const sheet = workbook.getWorksheet(sheetName);
  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found`);
  }

  const headers: string[] = [];

  // Read header row
  sheet.getRow(1).eachCell((cell) => {
    headers.push(cell.value?.toString() || '');
  });

  // Read data rows
  for (let i = 2; i <= sheet.rowCount; i++) {
    const row = sheet.getRow(i);
    const scenarioCell = row.getCell(1).value?.toString();

    if (scenarioCell === scenario) {
      const data: Record<string, string> = {};

      row.eachCell((cell, colNumber) => {
        if (colNumber > 1) {
          data[headers[colNumber - 1]] = cell.value?.toString() || '';
        }
      });

      return data;
    }
  }

  throw new Error(`Scenario "${scenario}" not found in Excel`);
}