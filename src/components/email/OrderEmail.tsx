import * as React from 'react';

interface OrderEmailProps {
  orderId: string;
  customerName: string;
  items: any[];
  total: number;
  isVendor: boolean; 
  deliveryDetails: any;
}

export const OrderEmail: React.FC<OrderEmailProps> = ({
  orderId,
  customerName,
  items,
  total,
  isVendor,
  deliveryDetails,
}) => {
  
  // Dynamic Content based on who is receiving the email
  const title = isVendor ? "New Order Received!" : "Order Confirmation";
  const subtext = isVendor 
    ? `You have received a new order from ${customerName}.` 
    : `Thank you for your order. We have received your request. Please proceed with payment below to confirm.`;

  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', backgroundColor: '#FDFBF7', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#800020', fontFamily: 'Georgia, serif', margin: '0', fontSize: '28px', letterSpacing: '2px' }}>AKEE-ROI</h1>
          <p style={{ color: '#D4AF37', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', marginTop: '5px' }}>Collections</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

        {/* GREETING */}
        <h2 style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>{title}</h2>
        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px' }}>
          Hello <strong>{isVendor ? "Akee-Roi Collections" : customerName}</strong>,
        </p>
        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px', marginBottom: '30px' }}>
          {subtext}
        </p>

        {/* ORDER SUMMARY */}
        <div style={{ backgroundColor: '#fafafa', padding: '20px', borderRadius: '5px', marginBottom: '30px' }}>
          <h3 style={{ color: '#800020', fontSize: '16px', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginTop: '0' }}>Order Summary (#{orderId})</h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            {items.map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px 0', color: '#333' }}>
                  <strong>{item.name}</strong> <br/>
                  <span style={{ fontSize: '13px', color: '#888' }}>Size: {item.size} | Qty: {item.quantity}</span>
                </td>
                <td style={{ padding: '10px 0', textAlign: 'right', color: '#333' }}>
                  GHS {(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </table>

          <div style={{ marginTop: '15px', textAlign: 'right' }}>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>Delivery: (Calculated on confirmation)</p>
            <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold', color: '#800020' }}>Total: GHS {total.toFixed(2)}</p>
          </div>
        </div>

        {/* PAYMENT INSTRUCTIONS (Only for Customer) */}
        {!isVendor && (
          <div style={{ backgroundColor: '#420010', color: '#fff', padding: '20px', borderRadius: '5px', marginBottom: '30px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#D4AF37', fontSize: '18px' }}>Payment Instructions</h3>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.5' }}>
              Please send the total amount via Mobile Money or our Bank to confirm your order.
            </p>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>MTN MOMO: 054 374 4805</div>
            <div style={{ fontSize: '14px' }}>Name: Ernestina Obiyaa</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>ECOBANK: 1441002495733</div>
            <div style={{ fontSize: '14px' }}>Name: Esther Kwarteng</div>
            <p style={{ marginTop: '15px', fontSize: '12px', fontStyle: 'italic', opacity: 0.8 }}>
              Reference your Order ID <strong>#{orderId}</strong> when paying.
            </p>
          </div>
        )}

        {/* DELIVERY DETAILS (Only for Vendor) */}
        {isVendor && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#800020', fontSize: '16px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Customer Details</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
              <strong>Name:</strong> {deliveryDetails.firstName} {deliveryDetails.lastName}<br/>
              <strong>Phone:</strong> {deliveryDetails.phone}<br/>
              <strong>Email:</strong> {deliveryDetails.email}<br/>
              <strong>City:</strong> {deliveryDetails.city}<br/>
              <strong>Address:</strong> {deliveryDetails.address}<br/>
              <strong>Notes:</strong> {deliveryDetails.notes || "None"}
            </p>
          </div>
        )}

        {/* FOOTER */}
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '12px', marginBottom: '10px' }}>
            Accra & Kumasi, Ghana
          </p>
          
          <div style={{ marginBottom: '15px' }}>
            <a href="https://www.instagram.com/akee_roi_" style={{ color: '#800020', textDecoration: 'none', margin: '0 10px', fontSize: '12px', fontWeight: 'bold' }}>Instagram</a>
            <a href="https://www.tiktok.com/@akeeroicollection" style={{ color: '#800020', textDecoration: 'none', margin: '0 10px', fontSize: '12px', fontWeight: 'bold' }}>TikTok</a>
            <a href="https://www.akeeroi.com" style={{ color: '#800020', textDecoration: 'none', margin: '0 10px', fontSize: '12px', fontWeight: 'bold' }}>Website</a>
          </div>

          <p style={{ color: '#ccc', fontSize: '10px' }}>
            © {new Date().getFullYear()} Akee-roi Collections. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
};