import Brevo from "@getbrevo/brevo"
import dotenv from "dotenv"

if (process.env.NODE_ENV !== "production") {
    dotenv.config()
}

const brevoClient = new Brevo.TransactionalEmailsApi()
brevoClient.authentications["apiKey"].apiKey = process.env.BREVO_API_KEY

export async function sendEmailMessage(name, fromEmail, message) {
    const sendSmtpEmail = new Brevo.SendSmtpEmail()
    
    sendSmtpEmail.subject = `New Contact Form Message from ${name}`
    sendSmtpEmail.htmlContent = `
        <html>
            <body>
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${fromEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </body>
        </html>
    `
    sendSmtpEmail.sender = { 
        name: "Portfolio Contact Form", 
        email: "vince.salenga@gmail.com"
    }
    sendSmtpEmail.replyTo = {
        email: fromEmail,
        name: name
    }
    sendSmtpEmail.to = [{ 
        email: "vince.salenga@gmail.com", 
        name: "Vince Salenga" 
    }]
    
    try {
        const response = await brevoClient.sendTransacEmail(sendSmtpEmail)
        return response
    } catch (error) {
        console.error("Brevo API Error:", error)
        throw error
    }
}