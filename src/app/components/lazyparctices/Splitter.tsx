    import React from 'react';
    import { Splitter,} from 'antd';
    import Descriptions from './Description';

  

    const MySplitter: React.FC = () => (
    <Splitter
        style={{ height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
        >
        <Splitter.Panel defaultSize="40%" min="20%" max="70%">
            <Descriptions text="First" />
        </Splitter.Panel>
        <Splitter.Panel>
            <Descriptions text="Second" />
        </Splitter.Panel>
    </Splitter>
    );

    export default MySplitter;