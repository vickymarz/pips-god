import { useContext, createContext, useState } from "react";

export type CourseType = {
	courseResources: {
	  description?: string,
	  type: string,
	  url: string | React.ReactNode,
	  thumbnail?: string | Blob
	}[],
	courseModule: {
	  title: string,
	  description?: string,
	  tags: string,
	  sequenceNo: number
	  courseId: number
	}
  };
interface CourseComponentType {
	course: CourseType,
	modal: boolean,
	setCourse: React.Dispatch<React.SetStateAction<CourseType>>
	setModal: React.Dispatch<React.SetStateAction<boolean>>
  }

  const courseProp = {
    "courseResources": [
      {
        "type": "video",
        "url": "",
        "thumbnail": "",
      },
      {
        "type": "text",
        "url": "",
      }
    ],
    "courseModule": {
      "title": "",
      "tags": "",
      "sequenceNo": 1,
	  "courseId": 1
    }
  }

const CreateCourseContext = createContext<CourseComponentType>({
	course: courseProp,
	modal: false,
	setCourse: () => {},
	setModal: () => {},
});


export const CreateCourseContextProvider = ({ children }: {children: React.ReactNode}) => {
	const [course, setCourse] = useState<CourseType>(courseProp);
	const [modal, setModal] = useState(false);

	const values = {
        course,
		setCourse,
		modal,
		setModal,
	};

	return (
		<CreateCourseContext.Provider value={values}>
			{children}
		</CreateCourseContext.Provider>
	);
};

export const CreateCourseContextUse = () => {
	return useContext(CreateCourseContext);
};
