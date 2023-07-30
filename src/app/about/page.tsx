const fetchapi = async () => {
  const res = await fetch('http://localhost:3000/api/notes')
  return res.json()
}

const About = async () => {
  const data = await fetchapi()
  return (
    <div>
      {data.map((item: any) => (<li key={item._id}>{item.content}</li>))}
    </div>
  )
}

export default About