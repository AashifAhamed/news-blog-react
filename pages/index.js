import Head from 'next/head'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing ' },
  { title: 'React Tres', excerpt: 'Learn React Tres' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 md-8">
      <Head>
        <title>News Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 col-span-1" >
          {posts.map((post, index) => (
            <div key={index}>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">

        </div>
      </div>
      
    </div>
  )
}
