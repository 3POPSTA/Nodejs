const errorHandle = (error,request,response,next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";

    if (process.env.NODE_ENV === 'development') {
        response.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stack: error.stack,
        error: error
        });
    } 
    else{
        if (error.isOperational) {
            response.status(error.statusCode).json({
            status: error.status,
            message: error.message
            });
        } 
        else {
            console.error('ERROR', error);
            response.status(500).json({
            status: 'error',
            message: 'Something went wrong'
            });
        }
    }
}