import asyncHandler from '../services/asyncHandler.js'
import CustomError from '../services/CustomError.js'


const healthCheckUp = asyncHandler( () => {
    return res
    .status(200)
    .json({
        success: true,
        message: "Welcome to TODO APP",
    })
})

export {
    healthCheckUp
}