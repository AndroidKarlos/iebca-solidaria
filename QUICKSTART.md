# 🚀 Guia Rápido de Início

Este guia irá ajudá-lo a rodar o projeto em menos de 5 minutos!

## ⚡ Início Rápido (Modo Desenvolvimento)

Se você quer apenas testar a aplicação localmente **sem** configurar o Google Sheets:

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

**Nota:** Sem a configuração do Google Sheets, as doações serão apenas logadas no console do servidor, mas o formulário funcionará normalmente.

## 📊 Com Google Sheets (Produção)

Para salvar as doações no Google Sheets:

### 1️⃣ Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie nova planilha: "IEBCA Solidária - Doações"
3. Adicione os cabeçalhos na linha 1 (A1:G1):
   ```
   Data/Hora | Nome | Telefone | Tipo de Doação | Quantidade | Endereço | Observações
   ```

### 2️⃣ Configurar Apps Script

1. Na planilha: **Extensions > Apps Script**
2. Cole o código do arquivo `google-apps-script.js`
3. **Deploy > New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copie a URL gerada

### 3️⃣ Configurar o Projeto

```bash
# 1. Criar arquivo de ambiente
cp .env.example .env.local

# 2. Editar .env.local e colar a URL do Google Apps Script
# GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
```

### 4️⃣ Rodar o Projeto

```bash
npm run dev
```

## 🏗️ Build de Produção

```bash
# Build
npm run build

# Rodar build
npm start
```

## 📦 Deploy na Vercel

1. Push para GitHub
2. Vá para [vercel.com](https://vercel.com)
3. Importe o repositório
4. Adicione variável: `GOOGLE_SCRIPT_URL`
5. Deploy!

## ❓ Problemas Comuns

### Erro: "GOOGLE_SCRIPT_URL não configurada"

**Solução:** Isso é normal em desenvolvimento. A aplicação funciona sem o Google Sheets, apenas não salvará os dados.

### Erro de build do TypeScript

**Solução:** Execute `npm install` novamente para garantir que todas as dependências estão instaladas.

### Porta 3000 já em uso

**Solução:**

```bash
# Usar outra porta
PORT=3001 npm run dev
```

## 📱 Testando o Formulário

1. Preencha todos os campos obrigatórios
2. Telefone deve estar no formato: `(81) 99999-9999`
3. Clique em "Cadastrar Doação"
4. Veja a mensagem de sucesso ou erro

## 🔍 Estrutura dos Dados Salvos

Cada doação salva contém:

- **Data/Hora**: Timestamp automático
- **Nome**: Nome completo do doador
- **Telefone**: No formato (XX) XXXXX-XXXX
- **Tipo de Doação**: Alimentos, Roupas, Higiene ou Misto
- **Quantidade**: Estimativa da quantidade
- **Endereço**: Endereço completo para coleta
- **Observações**: Informações adicionais (opcional)

## 💡 Dicas

- Use **Ctrl+C** no terminal para parar o servidor
- O hot reload está ativo: mudanças no código atualizam automaticamente
- Veja os logs no terminal para debug
- Abra as DevTools do navegador (F12) para ver erros de frontend

---

**Precisa de ajuda?** Consulte o [README.md](README.md) completo!
