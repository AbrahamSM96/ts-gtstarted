"use strict";
() => {
    const fullname = (firstName, lastname) => {
        return `${firstName} ${lastname}`;
    };
    const name = fullname("tony", true);
    console.log({ name });
};
