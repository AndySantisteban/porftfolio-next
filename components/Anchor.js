const Anchor = ({children, href, ...props}) => (
    <>
        <span title={"Go to Project"}>
            <a href={href} {...props}>
                {children}
                <div className={"container__carousel__img__anchor"}>
                    <div className={"container__carousel__img__anchor__icon"}>
                        <img src="https://img.icons8.com/ios-glyphs/10/ffffff/link--v1.png" alt={"..."}/>
                    </div>
                </div>
            </a>
        </span>
        <style jsx>{`
          .container__carousel__img__anchor {
            position: absolute;
            right: -10px;
            top: -10px;
          }

          .container__carousel__img__anchor__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #1F2937;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
          }
        `}</style>
    </>


)
export default Anchor