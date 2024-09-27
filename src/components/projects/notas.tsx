import Grid from '../Grid'

const Notas = () => {
    return (
        <>
            <h1>Notes</h1>
            <hr />
            <p>Stack:</p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={'https://img.icons8.com/color/30/000000/firebase.png'} />
                <img src={'https://img.icons8.com/color/30/000000/javascript.png'} />
                <img src={'https://img.icons8.com/color/30/000000/react-native.png'} />
            </div>
            <p>This project is a list of notes created with Firebase to be able to store data, inside the firestore, taking advantage of the library and the benefits provided by Redux and react redux.</p>

            <p>
                Visit:{' '}
                <a href="https://blog-de-notas.vercel.app/" target="_blank" rel="noopener noreferrer">
                    https://blog-de-notas.vercel.app
                </a>
            </p>

            <p>
                <b>Project preview:</b>
            </p>
            <Grid>
                <img src="../notas.png" alt="notas" width={'80%'} />
                <img src="../nota-1.png" alt="nota-1" width={'80%'} />
                <img src="../nota-3.png" alt="nota-3" width={'80%'} />
            </Grid>
        </>
    )
}
export default Notas
