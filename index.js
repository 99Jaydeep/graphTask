const express = require('express');
const app = express();
const data = require('./data');
const { StatusCodes } = require('http-status-codes');

app.get('/weekly-temperature', (req, res) => {
    try {
        
        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: data.weeklyTemperature,
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'error',
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            message: 'An error occurred',
            error: error.message,
        });
    }
});

app.get('/employee-salaries', (req, res) => {
    try {
        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: data.employeeSalaries,
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'error',
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            message: 'An error occurred',
            error: error.message,
        });
    }
});

app.get('/electricity-consumption', (req, res) => {
    try {
        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: data.electricityConsumption,
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'error',
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            message: 'An error occurred',
            error: error.message,
        });
    }
});

app.get('/city-population', (req, res) => {
    try {
        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: data.cityPopulation,
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'error',
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            message: 'An error occurred',
            error: error.message,
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
