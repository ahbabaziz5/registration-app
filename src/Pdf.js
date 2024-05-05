import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './globals.css';
export default function Pdf() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [img, setImg] = useState('');

    const handlePdf = (event) => {
        event.preventDefault();

        let doc = new jsPDF();

        // Define custom styles
        const customStyles = {
            fontSize: 20,
            font: 'arial', // specify the font family
            textColor: [50, 50, 50] // specify the RGB color values
        };

        // Set font size and color before adding text
        doc.setFontSize(customStyles.fontSize);
        doc.setTextColor(customStyles.textColor[0], customStyles.textColor[1], customStyles.textColor[2]);
       

        // Convert image file to data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            // Add the image to the PDF
            doc.addImage(e.target.result, 'JPEG', 80, 30, 80, 80); // Use the data URL here
      
     doc.text(` Username: ${username}\n Email: ${email}\n Password: ${password}`, 105, 120, { align: "center" });
    
            
            
            doc.save("detailss.pdf");
        };
        reader.readAsDataURL(img);
    }

    return (
        <div className='main'>
            <form onSubmit={handlePdf}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' /><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br />
            <input type="file" onChange={(e) => setImg(e.target.files[0])} /><br />
            <button type='submit' className='bg-red-400'>Submit</button>
            </form>
        </div>
    );
}
