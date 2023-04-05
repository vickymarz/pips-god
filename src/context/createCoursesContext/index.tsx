import { useContext, createContext, useState } from "react";

  type ModuleType = {
	  id: number
	  title: string
	  tags: string,
	  course_resources: {
		id?: number
		type: string
		url: string
		thumbnail?: string
	  }[]
  }
interface ModuleComponentType {
	module: ModuleType,
	modal: boolean,
	action: string,
	setAction: React.Dispatch<React.SetStateAction<string>>
	setModule: React.Dispatch<React.SetStateAction<ModuleType>>
	setModal: React.Dispatch<React.SetStateAction<boolean>>
  }

  const ModuleProp  = {
			"id": 0,
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

const CreateCourseContext = createContext<ModuleComponentType>({
	module: ModuleProp,
	modal: false,
	setModule: () => {},
	setModal: () => {},
	action: 'add',
	setAction: () => {}
});


export const CreateCourseContextProvider = ({ children }: {children: React.ReactNode}) => {
	const [module, setModule] = useState<ModuleType>(ModuleProp);
	const [modal, setModal] = useState(false);
    const [action, setAction] = useState('add');

	const values = {
        module,
		setModule,
		modal,
		setModal,
		action,
		setAction
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
