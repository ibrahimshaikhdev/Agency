import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_JY3XeBGV_DjPRmF3ubF4A25LAjc3vNvfL")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, purpose, formType, selectedPlan, selectedService, serviceTimeline } = body

    // Create email subject based on form type
    let subject = "New Contact Form Submission - DevMora"
    if (formType === "consultation") subject = "New Free Consultation Request - DevMora"
    if (formType === "project") subject = "New Project Inquiry - DevMora"
    if (formType === "pricing") subject = "New Pricing Plan Interest - DevMora"
    if (formType === "service") subject = `New ${selectedService} Service Inquiry - DevMora`

    // Create email content
    const emailContent = `
New Contact Form Submission from DevMora Website

Form Type: ${formType.charAt(0).toUpperCase() + formType.slice(1)}
${selectedPlan ? `Selected Plan: ${selectedPlan}` : ""}
${selectedService ? `Selected Service: ${selectedService}` : ""}
${serviceTimeline ? `Service Timeline: ${serviceTimeline}` : ""}

Client Details:
Name: ${name}
Email: ${email}

Message/Purpose:
${purpose}

Submitted at: ${new Date().toLocaleString()}

---
This email was sent from the DevMora website contact form.
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "DevMora Website <onboarding@resend.dev>",
      to: ["fahad.prime7@gmail.com"],
      subject: subject,
      text: emailContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, emailId: data?.id })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process form" }, { status: 500 })
  }
}
