class DataFilter {
    #variations = []

    constructor() {

        this.#variations['exclude'] = (param, data) => {
            let filterFunction = function (item) {
                for (let key1 in param) {
                    let val = param[key1]
                    for (let key2 in val) {
                        if (item[key2] === val[key2]) return false;
                    }
                }
                return true;
            }

            return data.filter(filterFunction)
        }

        this.#variations['include'] = (param, data) => {
            let filterFunction = function (item) {
                for (let key1 in param) {
                    let val = param[key1]
                    for (let key2 in val) {
                        if (item[key2] !== val[key2]) return false;
                    }
                }
                return true;
            }

            return data.filter(filterFunction)
        }

        this.#variations['sort_by'] = (param, data) => {
            let result = data

            let sortFunction = function (item1, item2) {
                for (let val of param) {
                    if (item1[val] < item2[val]) return -1;
                    if (item1[val] > item2[val]) return 1;
                }
            }

            return result.sort(sortFunction)
        }

    }

    filter(data, condition) {
        let result = data

        for (let val in condition) {
            if (this.#variations[val]) {
                let method = this.#variations[val]
                let filterParam = condition[val]
                result = method(filterParam, result)
            }
        }

        return {result: result}
    }
}

module.exports = DataFilter