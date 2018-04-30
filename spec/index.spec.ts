import 'jasmine';
import {TestClass} from '../src/index';

describe("Index", function () {
    it("returns a 'Hello World!'", function () {
        let t = new TestClass();
        expect(t.hello()).toBe("Hello World!");
    });
});