export type UserType = {
    firstName: string
}

export type AdminAuthContextType = {
    user: UserType | null
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}

export type AnalyticsContextType = {
    data: any
    setData: any
    startDate: null | Date
    setStartDate: React.Dispatch<React.SetStateAction<null | Date>>
    endDate: null | Date
    setEndDate: React.Dispatch<React.SetStateAction<null | Date>>
}

export type ModuleType = {
    id?: number
    title?: string
    tags?: string,
    course_resources?: {
      id?: number
      type?: string
      url?: string
      thumbnail?: string
    }[]
    code?: number
}

export type ModuleComponentType = {
  module: ModuleType,
  modal: boolean,
  action: string,
  setAction: React.Dispatch<React.SetStateAction<string>>
  setModule: React.Dispatch<React.SetStateAction<ModuleType>>
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type ModulePortalType = {
	module: ModuleType,
	setModule: React.Dispatch<React.SetStateAction<ModuleType>>
  }
