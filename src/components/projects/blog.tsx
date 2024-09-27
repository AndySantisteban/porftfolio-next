import Grid from '../Grid'

const Blog = () => {
    return (
        <>
            <>
                <h1>Blog</h1>
                <hr />
                <p>Stack:</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <img src={'https://img.icons8.com/material-outlined/50/000000/markdown.png'} />
                    <img src={'https://img.icons8.com/color/50/000000/react-native.png'} />
                </div>
                <p>This is my blog in which I will be publishing those things that happen to me on a daily basis.</p>
                <p>
                    <b>Project preview:</b>
                </p>
                <p>
                    Visit:{' '}
                    <a href="https://blog-andy.vercel.app/" target="_blank" rel="noopener noreferrer">
                        https://blog-andy.vercel.app/
                    </a>
                </p>

                <Grid>
                    <img src="/blog-1.png" alt="blog-1" width={'80%'} />
                    <img src="/blog-2.png" alt="blog-2" width={'80%'} />
                    <img src="/blog-3.png" alt="blog-3" width={'80%'} />
                </Grid>
            </>
        </>
    )
}
export default Blog
