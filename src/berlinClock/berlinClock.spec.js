import berlinClock from "./";

describe("berlinClock should", () => {
	it("return string", () => {
		expect(typeof berlinClock("12:00:00")).toBe("string");
	});

	it("have `Y` for odd seconds, `O` for even seconds", () => {
		expect(berlinClock("12:00:00")[0]).toBe("O");
		expect(berlinClock("12:00:01")[0]).toBe("Y");
		expect(berlinClock("12:00:24")[0]).toBe("O");
		expect(berlinClock("12:00:37")[0]).toBe("Y");
		expect(berlinClock("12:00:54")[0]).toBe("O");
		expect(berlinClock("12:00:59")[0]).toBe("Y");
	});

	it("have `Y` for odd seconds, `O` for even seconds", () => {
		expect(berlinClock("00:00:00").slice(2, 6)).toBe("OOOO");
		expect(berlinClock("04:00:00").slice(2, 6)).toBe("OOOO");
		expect(berlinClock("07:00:00").slice(2, 6)).toBe("ROOO");
		expect(berlinClock("12:00:00").slice(2, 6)).toBe("RROO");
		expect(berlinClock("18:00:00").slice(2, 6)).toBe("RRRO");
		expect(berlinClock("20:00:00").slice(2, 6)).toBe("RRRR");
		expect(berlinClock("24:00:00").slice(2, 6)).toBe("RRRR");
	});
	it("");
});
