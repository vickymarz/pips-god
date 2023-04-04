import { createContext, useState, useContext } from "react"

type courseType = {
    index: string,
    videoUrl: string
    documentUrl: string
}

const GetCourseContext = createContext({
  course: {
      index: '',
      videoUrl: '',
      documentUrl: '',

    },
  setCourse: (course: courseType) => {}
})

export const GetCourseContextProvider = ({children}: {children: React.ReactNode}) => {
  const [course, setCourse] = useState({
    index: '',
    videoUrl: '',
    documentUrl: '',

  })

  const values = {
     course,
     setCourse
  }
  return (
    <GetCourseContext.Provider value={values} >
        {children}
    </GetCourseContext.Provider>
  )
}


export const GetCourseContextUse = () => {
	return useContext(GetCourseContext);
};


