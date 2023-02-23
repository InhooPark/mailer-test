// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "id@gmail.com",
    pass: "password",
  },
});

const mailOptions = {
  from: "poke@poke",
  to: "park.linhoo@gmail.com",
  subject: "인증 메일",
  // html: `<p>메일의 내용(html 템플릿 형식으로 작성)</p>`,
  // text: "템플릿 정도가 아니고 단순히 텍스트 보낼때는 해당 값으로 보내도 됨",
  text: "인증 메일입니다.",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.error(err);
    res.status(500).json({ status: "fail" });
  } else {
    res.status(200).json({ status: "success" });
  }
});

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
