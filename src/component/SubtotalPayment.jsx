import React from 'react'

function SubtotalPayment() {
  return (
    
    <div className="payment-confirmation-final-subtotal-container">
    <h5>Order Details</h5>
    <table>
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
        <tr>
          <td>Cropped Faux Leather Jacket x 1	</td>
          <td>$29</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500", }}>SHIPPING</td>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500" , textAlign: "right"}}>Free shipping</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500"}}>VAT</td>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500", textAlign: "right"}}>$19</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500"}}>TOTAL	</td>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500", textAlign: "right"}}>$433</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500"}}>SUBTOTAL</td>
          <td style={{color: "var(--dark-black-color)", fontWeight: "500", textAlign: "right"}}>$414</td>
        </tr>
      </tbody>

    </table>
  </div>
  )
}

export default SubtotalPayment