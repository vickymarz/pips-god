import { useContext, createContext, useState } from "react";

// export type CourseType = {
// 	courseResources: {
// 	  description?: string,
// 	  type: string,
// 	  url: string | React.ReactNode,
// 	  thumbnail?: string | Blob
// 	}[],
// 	courseModule: {
// 	  title: string,
// 	  description?: string,
// 	  tags: string,
// 	  sequenceNo: number
// 	  courseId: number
// 	}
//   };

  type ModuleType = {
	docs: {
	  title: string
	  tags: string,
	  course_resources: {
		type: string
		url: string
		thumbnail?: string
	  }[]
	}
  }
interface ModuleComponentType {
	module: ModuleType,
	modal: boolean,
	setModule: React.Dispatch<React.SetStateAction<ModuleType>>
	setModal: React.Dispatch<React.SetStateAction<boolean>>
  }

//   const courseProp = {
//     "courseResources": [
//       {
//         "type": "video",
//         "url": "",
//         "thumbnail": "",
//       },
//       {
//         "type": "text",
//         "url": "",
//       }
//     ],
//     "courseModule": {
//       "title": "",
//       "tags": "",
//       "sequenceNo": 1,
// 	  "courseId": 1
//     }
//   }

  const ModuleProp  = {
	"docs": {
			"title": "",
			 'tags': "",
			"course_resources": [
			  {
				"type": "video",
				"url": "",
				"thumbnail": "",
			  },
			  {
				"type": "text",
				"url": ""
			  }
			]
		}
  }

const CreateCourseContext = createContext<ModuleComponentType>({
	module: ModuleProp,
	modal: false,
	setModule: () => {},
	setModal: () => {},
});


export const CreateCourseContextProvider = ({ children }: {children: React.ReactNode}) => {
	const [module, setModule] = useState<ModuleType>(ModuleProp);
	const [modal, setModal] = useState(false);

	const values = {
        module,
		setModule,
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
