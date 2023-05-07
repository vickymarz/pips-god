import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import { TextModalType } from '../../moduleTypes'

export const TextModal = ({isOpen, setIsOpen, item}: TextModalType) => {
  const [numPages, setNumPages] = useState<number | null>();
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
  }, [item])


  function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
    setNumPages(numPages);
  }

  return (
    <div className={`${isOpen ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
    <div className='w-[60%] ml-auto mr-auto relative my-[50px] rounded-[27px] bg-white px-[40px] py-[20px]'>
      <div className='w-full flex justify-end items-end mb-[10px] text-end'>
        <Button type="button" onClick={() => setIsOpen(false)} className="z-10 flex justify-end items-end mb-[50px] text-end w-full">
          <FontAwesomeIcon icon={faTimes} className={`text-[25px] text-[#232323]`}/>
        </Button>
      </div>
      <div className='flex justify-start items-start gap-x-[36px]'>
        <h4 className="text-[2.5rem] font-bold font-productSans text-[#19275E]">{item?.title}</h4>
      </div>
      <div style={{ minHeight: "100%" }}>
        <Document file={item.course_resources[1]?.url} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page scale={1.5} key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  </div>
  )
}

