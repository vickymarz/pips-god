import { useContext, createContext, useState } from "react";

type CourseType = {
	file: string;
	video: string;
	thumbnail: string;
	title: string;
	tags: Array<string>;
	image: string;
};
interface CourseComponentType {
	course: CourseType,
	modal: boolean,
	setCourse: React.Dispatch<React.SetStateAction<CourseType>>
	setModal: React.Dispatch<React.SetStateAction<boolean>>
  }

  const courseProp = {
	file: "",
	video: "",
	thumbnail: "",
	title: "",
	tags: [],
	image: "",
};

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
