import React from 'react'

const Tiles: React.FC = () => {
    return(
        <div>
            <h2>I use:</h2>
            <ul className="tiles">
                <li>
                    <a href="#">
                    <i className="fab fa-js" aria-hidden="true"></i>
                    <span> - JavaScript</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fab fa-ts" aria-hidden="true"></i>
                    <span> TS - TypeScript</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fab fa-react" aria-hidden="true"></i>
                    <span> - React</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fab fa-node" aria-hidden="true"></i>
                    <span> - Node.js</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fab fa-graphql" aria-hidden="true"></i>
                    <span> QGL- GraphQL</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Tiles