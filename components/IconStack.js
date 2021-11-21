
const IconStack = ({src, props, width}) => {
    return (
        <>
            <span  title={props}>
               <img src={src} alt={"..."} width={width}/>
            </span>
            <style jsx>{`
                span {
                    display: inline-block;
                    margin: 0 5px;
                }
               `
            }</style>

        </>

    )
}
export default IconStack;