import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactBody {
  form: 'contact' | 'priere' | 'servir';
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  sujet?: string;
  type_demande?: string;
  domaines?: string;
  message?: string;
  talent?: string;
}

const DEST = process.env.CONTACT_TO ?? 'josuengwalamayala@gmail.com';

const transporter = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
    })
  : null;

function buildSubject(body: ContactBody): string {
  switch (body.form) {
    case 'priere':
      return `[Site Ephphatha] ${body.type_demande ?? 'Demande de prière'} – ${body.prenom} ${body.nom}`;
    case 'servir':
      return `[Site Ephphatha] Je veux servir – ${body.prenom} ${body.nom}`;
    default:
      return `[Site Ephphatha] ${body.sujet ?? 'Contact'} – ${body.prenom} ${body.nom}`;
  }
}

function buildText(body: ContactBody): string {
  const lines: string[] = [
    `Formulaire : ${body.form}`,
    `Nom : ${body.nom}`,
    `Prénom : ${body.prenom}`,
    `Email : ${body.email}`,
  ];

  if (body.telephone) lines.push(`Téléphone : ${body.telephone}`);
  if (body.sujet) lines.push(`Sujet : ${body.sujet}`);
  if (body.type_demande) lines.push(`Type de demande : ${body.type_demande}`);
  if (body.domaines) lines.push(`Domaines souhaités : ${body.domaines}`);
  if (body.talent) lines.push(`Talent particulier : ${body.talent}`);
  if (body.message) lines.push(`\nMessage :\n${body.message}`);

  return lines.join('\n');
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (!body.nom || !body.prenom || !body.email) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 });
    }

    const subject = buildSubject(body);
    const text = buildText(body);

    const mailtoFallback = `mailto:${DEST}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(text)}`;

    if (!transporter) {
      console.warn(
        '[contact] SMTP non configuré – message non envoyé, fallback mailto utilisé.',
      );
      return NextResponse.json({
        success: true,
        mailto: mailtoFallback,
        message:
          'Message reçu côté site. Configure SMTP pour l’envoi automatique ou utilisez votre messagerie.',
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? DEST,
      to: DEST,
      subject,
      text,
    });

    return NextResponse.json({
      success: true,
      mailto: null,
      message: 'Message envoyé.',
    });
  } catch (error) {
    console.error('[contact] Erreur envoi email', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
