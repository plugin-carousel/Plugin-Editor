/**
 * @file use selector compare
 * @date 2021-09-15
 * @author chongzhi.zhang
 * @lastModify chongzhi.zhang 2021-09-15
 */
const classNames = (classNames: { [key: string]: boolean }) => {
    const cls: Array<string> = [];
    Object.keys(classNames).map((item) => {
        if (classNames[item]) {
            cls.push(item);
        }
    });
    return cls.join(" ");
};

export default classNames;
