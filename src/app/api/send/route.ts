import { NextResponse } from "next/server";

//Antiga versao com resend
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, inquiryType, message } = body;

//     const { data, error } = await resend.emails.send({
//       from: "Decripta Branding <contato@decripta.com>",
//       // to: "decriptabranding@gmail.com",
//       to: "sergiosaruijr@gmail.com",
//       subject: `Novo Contato: ${inquiryType}`,
//       html: `
//         <h1>Novo contato recebido pelo site</h1>
//         <p><strong>Nome:</strong> ${name}</p>
//         <p><strong>E-mail:</strong> ${email}</p>
//         <p><strong>Tipo de Assunto:</strong> ${inquiryType}</p>
//         <p><strong>Mensagem:</strong> ${message}</p>
//         `,
//     });

//     if (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Erro ao enviar e-mail", details: error },
//       { status: 500 },
//     );
//   }
// }

// Teste nova versao com nodemailer

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      position,
      projectType,
      brandStatus,
      estimatedInvestment,
      message,
    } = body;

    await transporter.sendMail({
      from: `"Decripta Branding" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Novo Contato: ${name} — ${company}`,
      html: `
        <h1>Novo contato recebido pelo site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Cargo:</strong> ${position}</p>
        <p><strong>Tipo de projeto:</strong> ${projectType}</p>
        <p><strong>Estágio da marca:</strong> ${brandStatus}</p>
        <p><strong>Investimento estimado:</strong> ${estimatedInvestment}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar e-mail" },
      { status: 500 },
    );
  }
}
