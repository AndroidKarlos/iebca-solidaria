/**
 * Google Apps Script para receber doações e salvar no Google Sheets
 *
 * INSTRUÇÕES:
 * 1. Crie um novo Google Sheets
 * 2. Adicione os seguintes cabeçalhos na primeira linha (A1:G1):
 *    Data/Hora | Nome | Telefone | Tipo de Doação | Quantidade | Endereço | Observações
 *
 * 3. Vá em Extensions > Apps Script
 * 4. Cole este código
 * 5. Clique em Deploy > New deployment
 * 6. Tipo: Web app
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Deploy
 * 10. Copie a URL gerada e adicione ao arquivo .env.local do projeto Next.js
 */

function getOrCreateMonthlySheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const now = new Date();
  const timezone = "America/Recife";
  const monthNames = [
    "jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const month = Utilities.formatDate(now, timezone, "MM");
  const year = Utilities.formatDate(now, timezone, "yyyy");
  const sheetName = monthNames[parseInt(month) - 1] + "-" + year;

  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);

    const headers = [
      "Data/Hora",
      "Nome",
      "Telefone",
      "Tipo de Doação",
      "Quantidade",
      "Endereço",
      "Observação",
    ];
    sheet.appendRow(headers);

    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#008751");
    headerRange.setFontColor("#ffffff");
  }

  return sheet;
}

function doPost(e) {
  try {
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);

    // Abrir a planilha ativa
    const sheet = getOrCreateMonthlySheet();

    // Adicionar nova linha com os dados
    sheet.appendRow([
      data.timestamp,
      data.nome,
      data.telefone,
      data.tipodoacao,
      data.quantidade,
      data.endereco,
      data.observacoes,
    ]);

    // Retornar sucesso
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Doação cadastrada com sucesso!",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Retornar erro
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    const sheetName = e.parameter.mes || getCurrentMonthName();
    const sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          message: "Aba não encontrada: " + sheetName,
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);

    const donations = rows.map((row) => {
      let obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        mes: sheetName,
        total: donations.length,
        dados: donations,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getCurrentMonthName() {
  const now = new Date();
  const timezone = "America/Recife";
  const monthNames = [
    "jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const month = Utilities.formatDate(now, timezone, "MM");
  const year = Utilities.formatDate(now, timezone, "yyyy");
  return monthNames[parseInt(month) - 1] + "-" + year;
}

// Função de teste (opcional)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: "11/01/2026 10:30:00",
        nome: "Teste Silva",
        telefone: "(81) 99999-9999",
        tipodoacao: "Alimentos",
        quantidade: "5kg",
        endereco: "Rua Teste, 123, Casa Amarela, Recife-PE",
        observacoes: "Teste de integração",
      }),
    },
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
