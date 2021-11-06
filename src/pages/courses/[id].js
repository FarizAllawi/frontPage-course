import { data } from 'autoprefixer'
import Head from 'next/head'
import Link from 'next/link'

function Todo({data}) {
    return (
        <>
            <Head>
                <title>Micro | {data.title}</title>
            </Head> 
            <main className="container mt-12 mx-auto">
                <h1 className="text-3xl">{data.title}</h1>
                <p>{data.body}</p>
                <Link href={"/random"}><a className="text-red-500">Back</a></Link>
            </main>   
        </>
    )
}

Todo.getInitialProps = async(props) => {
    // console.log(props)
    const {id} = props.query
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => json)

        return {data}
    } catch(error) {

    } 
}

module.exports = Todo
