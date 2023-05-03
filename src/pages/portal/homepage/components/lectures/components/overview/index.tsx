import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { PortalContextUse } from 'context';

export const LessonOverview = () => {
  const [numPages, setNumPages] = useState(null);
  const { module } = PortalContextUse()

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  }, [module])

  const onDocumentLoadSuccess = () => ({ numPages: nextNumPages} : {numPages: any}) => {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div className='flex justify-start items-start gap-x-[36px]'>
        <h4 className="text-[2.5rem] font-bold font-productSans text-[#19275E]">{module?.title}</h4>
      </div>
      {module?.course_resources === undefined ||  module?.course_resources[1].url === '' ?
        <div className='mb-[20px]'>
          <h2 className='text-[1.5rem] md:text-[2.5rem] my-4 font-medium font-productSans'>
            Welcome to pipsgod academy!
         </h2>
         <p className='md:text-[1.5rem]'>Kindly watch the video above to get yourself acquainted with the student learning portal.</p>
        </div>
        :
        <div>
          <Document file={module?.course_resources !== undefined ? module?.course_resources[1].url : ''} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
      </div>
      }

    </div>
  )
}

