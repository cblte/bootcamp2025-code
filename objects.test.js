test("car.start() with arrow function should not have access to this context", () => {
  // Arrange
  const consoleSpy = jest.spyOn(console, "log");
  const car = {
    brand: "Ford",
    model: "Fiesta",
    start: () => {
      console.log(`Started ${this.brand} ${this.model}`);
    },
  };

  // Act
  car.start();

  // Assert
  expect(consoleSpy).toHaveBeenCalledWith("Started undefined undefined");

  // Cleanup
  consoleSpy.mockRestore();
});
