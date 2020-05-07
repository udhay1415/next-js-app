import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const About = (props) => {
    console.log(props)
    return (
        // <div>About page</div>
        <div>
            {
                props.names.map(name => (
                    <li key={name.id}>
                        <Link href={`names/${name.id}`}>{name.name}</Link>
                    </li>
                ))
            }
        </div>   
    )
}
    


About.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return { names: data }
}

export default About