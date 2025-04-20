    import React from 'react';
    import { Splitter,} from 'antd';
    import Descriptions from './Description';

  

    const MySplitter: React.FC = () => (
    <Splitter
        style={{ height: 400, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
        >
        <Splitter.Panel defaultSize="40%" min="20%" max="70%">
            <Descriptions >
            <h1> header text</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repudiandae at veritatis aperiam quas, et reiciendis laboriosam, dolore iusto ex reprehenderit fugit accusantium ipsam, vel eveniet vero expedita nesciunt dolorem?</p>
            </Descriptions>
        </Splitter.Panel>
        <Splitter.Panel>
            <Descriptions >
                <h2>header text 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde autem laboriosam atque enim facere voluptatum fuga harum, at et earum commodi sint provident hic distinctio perspiciatis. Ad, distinctio placeat?</p>
            </Descriptions>

        </Splitter.Panel>
    </Splitter>
    );

    export default MySplitter;