import { useContext, createContext, useState } from "react";
import { ModuleType, ModuleComponentType } from "context/contextDataTypes";

const ModuleProp = {
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
