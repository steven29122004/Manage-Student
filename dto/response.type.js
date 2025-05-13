class ResponseType {
    constructor(data) {
        this.data = data;
    }
    success() {
        this.code = 200;
        this.message = 'Success';
        return this;
    }
    error() {
        this.code = 400;
        this.message = 'Error';
        return this;
    }
}

module.exports = ResponseType;