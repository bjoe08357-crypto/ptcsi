declare module 'nodemailer' {
  export interface Transporter {
    sendMail(mailOptions: any): Promise<any>
  }

  export function createTransporter(config: any): Transporter
}








