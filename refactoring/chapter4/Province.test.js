const Province = require("./Province")

// @ponicode
describe("addProducer", () => {
    let inst

    beforeEach(() => {
        inst = new Province.default({ _demand: "2021-07-29T20:12:53.196Z", demand: "2021-07-29T15:31:46.922Z", _price: 392.00, price: 392.00, producers: "Gorgeous" })
    })

    test("0", () => {
        let callFunction = () => {
            inst.addProducer({ _totalProduction: 1000, production: 819843241 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addProducer({ _totalProduction: 11, production: 333173976 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addProducer({ _totalProduction: 10, production: 992686820 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addProducer({ _totalProduction: 256, production: 333173976 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addProducer({ _totalProduction: 11, production: 819843241 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addProducer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
