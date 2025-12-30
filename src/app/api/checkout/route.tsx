import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { OrderEmail } from '@/components/email/OrderEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, cart, total, city, phone, address, notes } = body;

    const orderId = `AK-${Math.floor(1000 + Math.random() * 9000)}`;

    // 1. Send Email to CUSTOMER
    await resend.emails.send({
      from: 'Akee-roi Collections <orders@akeeroi.com>',
      to: email,
      replyTo: 'akeeroicollections@gmail.com',
      subject: `Order Confirmation #${orderId}`,
      react: (
        <OrderEmail
          orderId={orderId}
          customerName={firstName}
          items={cart}
          total={total}
          isVendor={false}
          deliveryDetails={{ firstName, lastName, phone, email, city, address, notes }}
        />
      ),
    });

    // 2. Send Email to VENDOR
    await resend.emails.send({
      from: 'Akee-roi Orders <orders@akeeroi.com>',
      to: 'akeeroicollections@gmail.com',
      subject: `New Order! #${orderId} from ${firstName}`,
      react: (
        <OrderEmail
          orderId={orderId}
          customerName={firstName}
          items={cart}
          total={total}
          isVendor={true}
          deliveryDetails={{ firstName, lastName, phone, email, city, address, notes }}
        />
      ),
    });

    return NextResponse.json({ success: true, orderId });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, error: 'Failed to process order' }, { status: 500 });
  }
}