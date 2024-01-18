const express = require('express');
const app = express();
const data = require('./data');
const { StatusCodes } = require('http-status-codes');
const cors = require('cors');

app.use(cors());

app.get('/weekly-temperature', (req, res) => {
    try {
        const weeklyTemperature = data?.weeklyTemperature;
      
        const responseData = weeklyTemperature?.labels?.map((label, index) => ({
            label,
            value: weeklyTemperature.data[index],
        }));

        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: responseData,
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
        const employeeSalaries = data?.employeeSalaries;
      
        const responseData = employeeSalaries?.labels?.map((label, index) => ({
            label,
            higestSalary: employeeSalaries.higestSalary[index],
            lowestSalary: employeeSalaries.lowestSalary[index],
        }));
        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: responseData,
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
        const electricityConsumption = data?.electricityConsumption;
      
        const responseData = electricityConsumption?.labels?.map((label, index) => ({
            label,
            value: electricityConsumption.data[index],
        }));
        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: responseData,
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
        const cityPopulation = data?.cityPopulation;
      
        const responseData = cityPopulation?.labels?.map((label, index) => ({
            label,
            value: cityPopulation.data[index],
        }));
        res.status(StatusCodes.OK).json({
            status: 'success',
            statusCode: StatusCodes.OK,
            message: 'Request successful',
            data: responseData,
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