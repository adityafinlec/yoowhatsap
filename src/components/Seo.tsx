import { useEffect } from 'react'

type Props = { title: string; description: string }

export default function Seo({ title, description }: Props) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [title, description])

  return null
}
