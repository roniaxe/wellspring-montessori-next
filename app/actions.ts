"use server";

import { redirect } from "next/navigation";
import sendgrid from "@sendgrid/mail";
import { z } from "zod";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 character(s)")
    .max(255, "Name must contain up to 255 character(s)"),
  email: z.string().email(),
  message: z
    .string()
    .min(10, "Message must contain at least 10 character(s)")
    .max(1000, "Message must contain at least 1000 character(s)"),
});

export async function contactFormSubmit(
  prevState: { success: boolean; error: object; formValues: object },
  formData: FormData,
): Promise<{
  success: boolean;
  error: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    message?: string[] | undefined;
  };
  formValues: {
    name: string;
    email: string;
    message: string;
  };
}> {
  var { name, email, message } = Object.fromEntries(formData);
  console.log(name, email, message);

  const validateFields = contactFormSchema.safeParse({
    name: name.toString(),
    email: email.toString(),
    message: message.toString(),
  });

  if (!validateFields.success) {
    return {
      success: false,
      error: validateFields.error.flatten().fieldErrors,
      formValues: {
        name: name.toString(),
        email: email.toString(),
        message: message.toString(),
      },
    };
  }

  try {
    await sendgrid.send({
      to: process.env.EMAIL_DESTINATION || "estee.axelrad@gmail.com", // Your email where you'll receive emails
      from: process.env.EMAIL_DOMAIN || "wellspring-montessori@mail.com", // your website email address here
      subject: "Contact Request",
      html: `<!DOCTYPE html>
            <html>
            <head>
                <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h1 {
                    text-align: center;
                    color: #333;
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                p {
                    color: #555;
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 10px;
                }
                </style>
            </head>
            <body>
                <div class="container">
                <h1>New Contact Form Submission</h1>
                <br>
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Full Name:</strong> ${name}</p>
                <br>
                <p>${message}</p>
                </div>
            </body>
            </html>`,
    });
    return {
      success: true,
      error: { name: [], email: [], message: [] },
      formValues: {
        name: "",
        email: "",
        message: "",
      },
    };
  } catch (error) {
    return {
      success: false,
      error: { name: [], email: [], message: [] },
      formValues: {
        name: name.toString(),
        email: email.toString(),
        message: message.toString(),
      },
    };
  }
}
