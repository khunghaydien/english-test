import { useEffect, useState } from "react";
import "./index.scss";
import classNames from "classnames";

export default function PdfViewer() {
  const [pdfContent, setPdfContent] = useState<string>("");
  const [pdfContentList, setPdfContentList] = useState<string[]>([]);
  useEffect(() => {
    void fetchPdfContent();
    setPdfContentList(pdfContent.split("READING PASSAGE"));
  }, []);
  const convertToHTML = (text: string) => {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };
  const fetchPdfContent = async () => {
    try {
      const response = await fetch("http://localhost:3000/pdf-translate");
      if (!response.ok) {
        throw new Error("Failed to fetch PDF content");
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setPdfContent(data.data);
      }, 0);
    } catch (error) {
      setPdfContent("Error fetching PDF content");
    }
  };

  return (
    <div className={classNames("reading-page")}>
      {pdfContentList.map((item, idx) => (
        <div key={idx}>
          {idx === 1 && (
            <div key={idx} className="reading">
              <div className="reading-passage">
                <p>READING PASSAGE</p>
                {convertToHTML(item)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
