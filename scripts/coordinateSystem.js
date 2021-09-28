class CoordinateSystem {
  static roundToGrid(value) {
    return Math.floor(value / Application.UNIT_SIZE) * Application.UNIT_SIZE;
  }
}
