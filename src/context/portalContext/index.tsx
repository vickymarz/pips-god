import { useContext, createContext, useState } from "react";
import { ModulePortalType, ModuleType } from "context/contextDataTypes";

const ModuleProp  = {
			"id": 0,
			"title": "",
			 'tags': "",
			"course_resources": [
			  {
				"type": "video",
				"url": "https://www.youtube.com/watch?v=ysz5S6PUM-U",
				"thumbnail": "",
			  },
			  {
				"type": "text",
				"url": ""
			  }
			]
  }

const PortalContext = createContext<ModulePortalType>({
	module: ModuleProp,
	setModule: () => {},
});


export const PortalContextProvider = ({ children }: {children: React.ReactNode}) => {
	const [module, setModule] = useState<ModuleType>(ModuleProp);

	const values = {
        module,
		setModule,
	};

	return (
		<PortalContext.Provider value={values}>
			{children}
		</PortalContext.Provider>
	);
};

export const PortalContextUse = () => {
	return useContext(PortalContext);
};
