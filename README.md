# to-react-style loader for webpack

## Usage
Convert css file to style element for React

npm install to-react-style-loader --save-dev

In webpack.config.js
```js
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            exclude: /\.useable\.css$/,
            use: ['to-react-style-loader', 'css-loader']
        }
    ]
}
```
In Component.jsx
```js
import React from 'react';
import Style from './style.css';

export class StyleTest extends React.Component {
    render() {
        return (
            <div>
                {Style}
                <div className="test">
                    Convert css file to Style component.
                    The style will work when the component mount and stop working when the component unmount
                </div>
            </div>
        );
    }
}
```
