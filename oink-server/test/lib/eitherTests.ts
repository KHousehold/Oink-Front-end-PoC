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

    it("map should ignore when left", () => {
        const target = new Left(1);

        const morph  = target.map((n) => {
            // If working properly this should be ignored, and no exception will be thrown
            true.should.be.false; 
            return n + 1;
        });

        morph.toLeft().error.should.be.equal(1);
    });

    it("flatMap should affect right", () => {
        const target = new Right(1);

        const morph  = target.flatMap((n) => new Right(n + 1));

        morph.isRight.should.be.true;
        morph.toRight().value.should.be.equal(2);
    });

    it("flatMap should ignore when left", () => {
        const target = new Left(1);

        const morph  = target.flatMap((n) => new Right(n + 1));

        morph.isRight.should.be.false;
       });

    it("fold should work with left", () => {
        const target: Either<number,number> = new Left(1);
        const expectedResult = 5;

        const result = target.fold(
            (x) => x + 4,
            (x) => x + 55,
        );

        result.should.equal(expectedResult);
    });

    it("fold should work with right", () => {
        const target: Either<number, number> = new Right(1);

        const expectedResult = 10;

        const result = target.fold(
            (x) => x + 4,
            (x) => x + 9,
        );

        result.should.equal(expectedResult);
    })
});
