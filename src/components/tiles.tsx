import React from 'react'
import { SiTypescript, SiJavascript, SiReact, SiNodeDotJs, SiGraphql } from 'react-icons/si';

const Tiles: React.FC = () => {
    return(
        <div className="Tiles">
            <ul className="tiles">
                <li>
                    <a href="#">
                    <SiJavascript className="fab"/>
                    <span> - JavaScript</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <SiReact className="fab"/>
                    <span> - React</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <SiNodeDotJs className="fab"/>
                    <span> - Node.js</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <SiTypescript className="fab"/>
                    <span> - TypeScript</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <SiGraphql className="fab"/>
                    <span> - GraphQL</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Tiles