import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { Candidate, CandidateProgramme } from '@/gql/graphql';

interface Props {
  candidate: Candidate;
  programme: CandidateProgramme;
}

export default function Certificate(props: Props) {
  const downloadCertificate = async () => {
    const candidateName: any = props?.candidate?.name?.toUpperCase();
    const candidatePosition = props?.programme.position?.name;
    const candidateGrade = props?.programme.grade?.name;
    const programName: any = props?.programme.programme?.name?.toUpperCase();
    const programCategory = props?.candidate?.category?.name;
    console.log(
      candidateName,
      candidateGrade,
      candidatePosition,
      programCategory,
      programName
    );
    const doc = new jsPDF('landscape', 'mm', 'a4');
    // Load Montserrat font
    doc.addFont('/certificate/Mont-Regular.ttf', 'Mont', 'normal');

    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();

    console.log('pdf', pdfWidth, pdfHeight);
    [candidateName].forEach((a: any) => {
      doc.addPage('a4');
      // const backgroundImageUrl = `/certificate/${programCategory}.png`;
      const backgroundImageUrl = `/certificate/certificate.png`;
      // Add the background image
      doc.addImage(backgroundImageUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      // Set the font to Montserrat
      doc.setFont('Mont');

      // Add text and other content on top of the background image
      doc.setFontSize(15);
      doc.setTextColor(0, 0, 0); // Set text color to black



      // // Calculate the starting X-coordinate for center alignment
      // var startX = (doc.internal.pageSize.getWidth() - textWidth) / 2;

      // // Add the entire sentence
      // doc.text(
      //   'This is to certify that Miss FATHIMA AJVA KM',
      //   startX,
      //   yPosition
      // );

      // // Get the width of the specific words without extra spaces
      // var specificWords = 'FATHIMA AJVA KM';
      // var specificWordsWidth = doc.getStringUnitWidth(specificWords) * 15;

      // // Calculate the position for the line under specific words
      // var lineStartX =
      //   (doc.internal.pageSize.getWidth() - specificWordsWidth) / 2;
      // var lineEndX = specificWordsWidth;

      // // Draw a line under specific words
      // doc.line(lineStartX + 4.5, yPosition + 2, lineEndX, yPosition + 2);


      
      const position =
        candidatePosition == 'First'
          ? '1st'
          : candidatePosition == 'Second'
          ? '2nd'
          : '3rd';
      const lines = {
        1: `This is to certify that Miss ${candidateName}`,
        2: `has been awarded ${position} prize ${
          candidateGrade ? `with ${candidateGrade} grade in` : 'only'
        }`,
        3: `${programName} (${programCategory}) in TEKTON'23, ZAHRA Arts fest`,
        4: `organized by Girls Association of Zahra for Valuable Activities(GAZVA),`,
        5: `on October 21-26 2023 at Fathima Zahra Islamic Womens' College.`,
      };
      doc.text(lines[1], pdfWidth / 2, 118, { align: 'center' });
      // doc.line(((pdfWidth-doc.getStringUnitWidth(candidateName) * 15)/2) + 4.5, 118 + 2, doc.getStringUnitWidth(candidateName) * 15, 118 + 2);
      doc.text(lines[2], pdfWidth / 2, 127, { align: 'center' });
      doc.text(lines[3], pdfWidth / 2, 136, { align: 'center' });
      doc.text(lines[4], pdfWidth / 2, 145, { align: 'center' });
      doc.text(lines[5], pdfWidth / 2, 154, { align: 'center' });
    });
    doc.deletePage(1);

    const pdfBlob = doc.output('blob');
    saveAs(pdfBlob, `${programName}1.pdf`);
  };

  return (
    <button
      onClick={() => {
        downloadCertificate();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    </button>
  );
}