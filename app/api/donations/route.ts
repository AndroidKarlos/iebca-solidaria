import { NextRequest, NextResponse } from "next/server";
import { donationSchema } from "@/types/donation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar dados com Zod
    const validatedData = donationSchema.parse(body);

    // Preparar dados para envio ao Google Sheets
    const dataToSend = {
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Recife",
      }),
      ...validatedData,
      observacoes: validatedData.observacoes || "Nenhuma",
    };

    // URL do Google Apps Script (deve ser configurada no arquivo .env.local)
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      console.warn(
        "GOOGLE_SCRIPT_URL não configurada. Dados não serão enviados ao Google Sheets."
      );
      console.log("Dados da doação:", dataToSend);

      // Em desenvolvimento, retorna sucesso mesmo sem URL configurada
      return NextResponse.json(
        {
          message: "Doação recebida (modo desenvolvimento)",
          data: dataToSend,
        },
        { status: 200 }
      );
    }

    // Enviar para Google Sheets
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar para Google Sheets");
    }

    return NextResponse.json(
      { message: "Doação cadastrada com sucesso!", data: dataToSend },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar doação:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Erro ao processar doação", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const month = searchParams.get("mes");

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_SCRIPT_URL não configurada",
          hint: "Configure a variável de ambiente para produção",
        },
        { status: 503 } // 503 = Service Unavailable
      );
    }

    const url = month
      ? `${googleScriptUrl}?mes=${encodeURIComponent(month)}`
      : googleScriptUrl;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro do google Sheets: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar doações", error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: "Erro ao buscar doações",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Erro interno do servidor",
      },
      { status: 500 }
    );
  }
}
