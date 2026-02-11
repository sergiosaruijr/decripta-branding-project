import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Decripta Branding <onboarding@resend.dev>",
      to: "decriptabranding@gmail.com",
      subject: `Novo Contato: ${inquiryType}`,
      html: `
        <h1>Novo contato recebido pelo site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Tipo de Assunto:</strong> ${inquiryType}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
        `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao enviar e-mail" },
      { status: 500 },
    );
  }
}
