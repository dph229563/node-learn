// 写一个工具类计算数组平均值

class Util {
    static average(arr) {
        return arr.reduce((sum, value) => sum + value, 0) / arr.length;
    }
}

module.exports = Util;