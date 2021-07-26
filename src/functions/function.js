import React, { useState } from 'react';

//window.$servername = "https://heroku-wasun-flights.herokuapp.com";
window.$servername = "http://localhost:3001";

export default {
    checkParseToEmpty: function (request) {
        if (request == 0) {
            return '';
        } else {
            return request;
        }
    }
};
