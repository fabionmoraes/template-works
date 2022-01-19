export interface IWork {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: 'Senior' | 'Midweight' | 'Junior'
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}
