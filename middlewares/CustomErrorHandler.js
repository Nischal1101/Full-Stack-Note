class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }
  static notFound(message = "Not found") {
    
    return new CustomErrorHandler(404, message);
  }
  static validationError(message = "Validation error") {
    return new CustomErrorHandler(422, message);
  }
}
export default CustomErrorHandler;
