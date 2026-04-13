import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_JY3XeBGV_DjPRmF3ubF4A25LAjc3vNvfL")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Create email content
    const emailContent = `
New Contact Message from DevMora Website

Client Details:
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}

---
This email was sent from the DevMora website contact section.
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "DevMora Website <onboarding@resend.dev>",
      to: ["fahad.prime7@gmail.com"],
      subject: "New Contact Message - DevMora Website",
      text: emailContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, emailId: data?.id })
  } catch (error) {
    console.error("Error processing contact:", error)
    return NextResponse.json({ error: "Failed to process contact" }, { status: 500 })
  }
}
