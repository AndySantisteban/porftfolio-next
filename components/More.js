import Link from 'next/link';

const More = ({props, href}) => {
    return (
        <>
            <Link href={href} {...props}>
                <a className="more">
                    <span>{props}</span>
                </a>
            </Link>
            <style jsx>{`
              .more {
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: black;
              }
              .more span {
                margin-top: -5px;
                padding-bottom: 5px;
              }

              .more:hover {
                color: darkgray;
              }
            `}</style>
        </>

    )
}
export default More;