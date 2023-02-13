import { useContext, createContext, useState } from "react";

interface CourseType {
	course: any,
	modal: boolean,
	setCourse: React.Dispatch<React.SetStateAction<any>>
	setModal: React.Dispatch<React.SetStateAction<boolean>>
  }
  
const CreateCourseContext = createContext<CourseType>({
	course: [],
	modal: false,
	setCourse: () => {},
	setModal: () => {},
});


export const CreateCourseContextProvider = ({ children }: {children: React.ReactNode}) => {
	const [course, setCourse] = useState<string[]>([]);
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
