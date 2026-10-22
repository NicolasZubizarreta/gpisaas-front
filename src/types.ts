export const STATUSES = ['TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE'] as const

export type Status = (typeof STATUSES)[number]

export type Task = {
  id: string
  title: string
  status: Status
  dueDate: string | null
  description: string
  projectId: string
  memberId: string | null
}

export type Project = {
  id: string
  name: string
}

export type Member = {
  id: string
  name: string
}

export type Idea = {
  id: string
  text: string
}