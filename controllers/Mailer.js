const nodemailer = require("nodemailer");
class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      pool: true,
      maxConnections: 7,
      socketTimeout: 10000000,
      maxMessages: Infinity,
      rateLimit: 2,
      rateDelta: 2000,
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "nomad11kl@mail.ru",
        pass: "nJA7nx17mK5DU9GzgxpG",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  async sendMail(to, data) {
    try {
      await this.transporter.sendMail(
        {
          from: "nomad11kl@mail.ru",
          to,
          subject: `Заявка с сайта`,
          html: ` 
            <style>
            .container{
              border:1px solid blue;
            }
            .header{
              text-align:center;
              font-size:50px;
              color:blue;
            }
              P{
                color:blue;
                text-align:center;
              }
                b{
                color:white}
            </style>
            <div class='container'><h1 class='header'>Заявка с сайта</h1> 
            <p>Гость: <b>${data.name}</b></p>
            <p>Желает заказать: <b>${data.interested}</b></p>
            <p> номер для контакта:<b>${data.phone}</b></p>
            
            </div>`,
        },
        (err, info) => {
          if (err) {
            console.log("ошибка при отправке данных ", { err }, info);
          }
        }
      );
      console.log("Письмо отправлено");
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new Mailer();
