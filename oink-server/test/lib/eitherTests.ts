import { describe, it } from "mocha";
import chai, { expect } from "chai";
import { Either, Left, Right } from "../../src/lib/simple-fp/either";

chai.should();

describe("Either", () => {
    it("should know if it is Right", () => {
        const e: Either<any, any> = new Left("error");

        e.isLeft.should.be.equal(true);
        e.isRight.should.be.equal(false);
    });

    it("Right should not be castable to left", () => {
        const target: Either<string, number> = new Right(5);

        expect(() => target.toLeft()).to.throw();
    });

    it("Right should not be castable to left", () => {
        const target: Either<string, number> = new Left("error");

        expect(() => target.toRight()).to.throw();
    });

    it("map should affect right", () => {
        const target = new Right(1);

        const morph  = target.map((n) => n + 1);

        morph.isRight.should.be.true;
        morph.toRight().value.should.be.equal(2);
    });
});
