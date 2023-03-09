import { useQuery } from 'react-query'

function MyComponent() {
  const { data, isLoading, error } = useQuery('myQuery', async () => {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
