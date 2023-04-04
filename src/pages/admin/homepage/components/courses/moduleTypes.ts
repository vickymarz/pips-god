export type ModulesType = {
    docs: {
      id: number,
      title: string
      tags: string
      course_resources: {
        type: string
        url: string
        thumbnail?: string
      }[]
    }[]
    pages?: number
    total?: number
}

export type ModuleType = {
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

  export type VideoType = {
    id: number
    title: string
    course_resources: {
      type: string
      url: string
      thumbnail?: string
    }[]
  }

  export type readingType = {
    id: number
    title: string
    course_resources: {
      type: string
      url: string
      thumbnail?: string
    }[]
  }

  export type TextModalType = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    files: string
    title: string
  }
