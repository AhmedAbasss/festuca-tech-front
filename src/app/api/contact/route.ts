import { FormValuesContactUs } from "@/app/(defaults)/(home)/_components/ContactUs/_ContactUs";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request, res: Response) {

    try {


        const { name, email, HowDidYouFindUs, phoneNumber, textOther } = (await req.json() as unknown as FormValuesContactUs)


        if (!name) {
            return NextResponse.json({ message: 'name is required' }, {
                status: 400,
            });
        }
        if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {

            return NextResponse.json({ message: 'email is required' }, {
                status: 400,
            });
        }
        if (!HowDidYouFindUs) {
            return NextResponse.json({ message: 'HowDidYouFindUs is required' }, {
                status: 400,
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.E_HOST,
            port: process.env.E_PORT,
            name: process.env.E_NAME,
            secure: true,
            auth: {
                user: process.env.E_USER,
                pass: process.env.E_PASS
            }

        } as any);

        const mailOptions = {

            // data: attachments,
            from: process.env.E_USER,
            to: process.env.E_USER_CENTER,
            subject: `${name}`,
            html:
                `
                <h1> الاسم : ${name}</h1>  
                <div>عنوان البريد الالكتروني : ${email}</div>
                <div> رقم الهاتف : ${phoneNumber}</div>
                <br>
                <hr>
                <br>
                <h5>${HowDidYouFindUs}</h5>
                <h5>${textOther}</h5>
            `,
            attachments: null
        };

        transporter.sendMail(mailOptions as any, (err, info) => {
            if (err) {
                return NextResponse.json({ message: 'Failed to send email' }, {
                    status: 500,
                });
            }

        })

        return NextResponse.json({ message: 'Email sent successfully' }, {
            status: 200,
        });

    } catch (err) {
        return NextResponse.json({ message: 'Failed to send email' }, {
            status: 500,
        });
    }



}
