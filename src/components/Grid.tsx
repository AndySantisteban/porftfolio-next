import { ReactNode } from 'react'

const Grid = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
                    gridGap: '20px',
                    margin: '20px',
                }}
            >
                {children}
            </div>
        </>
    )
}
export default Grid
