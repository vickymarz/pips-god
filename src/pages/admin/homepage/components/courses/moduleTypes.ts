export type ModulesType = {
    docs: {
      id: number,
      title: string
      tags: string
      course_resources: {
        id?: number
        type: string
        url: string
        thumbnail?: string
      }[]
    }[]
    pages?: number
    total?: number
}

export type ModuleType = {
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

  export type VideoType = {
    id: number
    title: string
    course_resources: {
      id?: number
      type: string
      url: string
      thumbnail?: string
    }[]
  }

  export type readingType = {
    id: number
    title: string
    course_resources: {
      id?: number
      type: string
      url: string
      thumbnail?: string
    }[]
  }

  export type TextModalType = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    item: {
      title: string,
      course_resources: {
        url: string,
    }[]
  }
}
  export type VideoModalType = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    item: {
      title: string,
      course_resources: {
        url: string,
        thumbnail: string
    }[]
  }
}

  export type ItemType = {
      title: string,
      course_resources: {
        url: string,
        thumbnail: string
    }[]
}
