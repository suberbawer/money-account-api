import HttpStatus from 'http-status-codes';

class Utils {

  /**
   *
   * @param {Response} res HTTP response
   * @param {HttpError} error HTTP error
   */
  respondError = (res, error) => {
    const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const errorContent = this.getResponseError(error);
    
    return res.status(status)
      .send(errorContent)
      .end();
  };

  /**
   * get custom error
   * @param {Error} error error
   */
  getResponseError = error => {
    const errorContent = {};

    if (!error.status) {
      errorContent.message = 'server error.';
    } else if (error.message && typeof error.message === 'string') {
      errorContent.message = error.message;
    } else {
      errorContent.message = error.toString();
    }

    errorContent.messageCode = error.messageCode;

    return errorContent;
  }
}

export default new Utils();