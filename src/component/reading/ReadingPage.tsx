import { useEffect, useState } from 'react';
import './index.scss'

export default function PdfViewer() {
    const [pdfContent, setPdfContent] = useState<string>('');
    const [pdfContentList, setPdfContentList] = useState<string[]>([]);
    useEffect(() => {
        fetchPdfContent();
        setPdfContentList(pdfContent.split('READING PASSAGE'))
    }, [])
    const convertToHTML = (text: string) => {
        const paragraphs = text.split('\n\n');
        return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    }
    const fetchPdfContent = async () => {
        try {
            const response = await fetch('http://localhost:3000/pdf-translate');
            if (!response.ok) {
                throw new Error('Failed to fetch PDF content');
            }
            const data = await response.json();
            setPdfContent(data.data);
        } catch (error) {
            setPdfContent('Error fetching PDF content');
        }
    };

    return (
        <>
            {pdfContentList.map((item, idx) => (
                <>
                    {idx === 1 && (
                        <div key={idx} className="reading">
                            <div className="reading-passage">
                                <p>READING PASSAGE</p>
                                {convertToHTML(item)}
                            </div>
                        </div>
                    )}
                </>
            ))}
        </>
    );
}