/**
 * @file 将css文件转换为ReactElement
 * @author zhangluyao01@baidu.com
 */
const loaderUtils = require('loader-utils');

module.exports = function () {};

module.exports.pitch = function (remainingRequest) {
    if (this.cacheable) {
        this.cacheable();
    }

    return `
        const React = require('react');
        let cssString = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
        if (typeof result !== "string") {
            cssString = cssString.toString();
        }

        module.exports = React.createElement('style', {dangerouslySetInnerHTML: {__html: cssString}});
    `;
};
