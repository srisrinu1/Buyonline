export const formatPrice = (price) => {
    const newNumber = new Intl.NumberFormat('en-IN', {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
    }).format((price));
    return newNumber;
}

//get All unique values

export const getAllUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    if (type === "colors") {
        unique = unique.flat();
    }
    return ["all", ...new Set(unique)]
}