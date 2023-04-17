export type useResendOtpProps = {
    onTimerComplete?: () => void
    onResendClick?: (remainingTime:boolean) => void
  }

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
