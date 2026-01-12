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

function doPost(e) {
  try {
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);

    // Abrir a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Adicionar nova linha com os dados
    sheet.appendRow([
      data.timestamp,
      data.nome,
      data.telefone,
      data.tipodoacao,
      data.quantidade,
      data.endereco,
      data.observacoes
    ]);

    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Doação cadastrada com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste (opcional)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: '11/01/2026 10:30:00',
        nome: 'Teste Silva',
        telefone: '(81) 99999-9999',
        tipodoacao: 'Alimentos',
        quantidade: '5kg',
        endereco: 'Rua Teste, 123, Casa Amarela, Recife-PE',
        observacoes: 'Teste de integração'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
