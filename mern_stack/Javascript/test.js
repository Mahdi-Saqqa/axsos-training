    // Regular function
function regularFunction() {
        console.log(this);
    };

    // Arrow function
    const arrowFunction = () => {
    console.log(this);
    };

    const obj = {
    prop: 'Hello',
    regular: regularFunction,
    arrow: arrowFunction
    };

obj.arrow();
