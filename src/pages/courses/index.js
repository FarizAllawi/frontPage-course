import Head from 'next/head'
import Link from 'next/link'

function Random({data}) {
    // console.log(props);
    return (
        <>
            <Head>
                <title>Micro | Random</title>
            </Head> 
            <main className="container mt-12 mx-auto">
                <h1 className="text-3xl">Fetching Random Words</h1>
                <ul>
                    {
                       data.map( (post) => {

                            // null coalescing operator
                            return <li key={post.id} className="border border-indigo-700 p-4">
                                        <Link href={`/random/${post.id}`}><a>{post?.title ?? "-"}</a></Link>
                                    </li>
                        })
                    }   
                </ul>
            </main>   
        </>
    )
}

Random.getInitialProps = async(props) => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => json)

        return {data}
    } catch(error) {

    }
}


module.exports = Random